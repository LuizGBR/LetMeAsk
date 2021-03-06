import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import './../styles/auth.scss'
import { useAuth } from '../hooks/useAuth'
import { FormEvent, useState } from 'react'
import { database } from '../services/firebase'
import { toast } from 'react-toastify'


export function Home(){
    const {user, signInWithGoogle} = useAuth();
    const navigate = useNavigate();

    const [roomId, setRoomCode] = useState('');

    async function handleCreateRoom(){
        if(!user){
          await signInWithGoogle();
        }
        navigate('/rooms/new');     
    }

    async function handleJoinRoom(event: FormEvent){
        event.preventDefault();
        
        if (roomId.trim() === ''){
            return
        }

        const roomRef = await database.ref(`rooms/${roomId}`).get()

        if(!roomRef.exists()){
            toast.error('Room does not exists.');
            return
        }

        if(roomRef.val().endedAt){
            toast.error('Room already closed.');
            return
        }

        navigate(`/rooms/${roomId}`)
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"></img>
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask"></img>
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Google"></img>
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text" 
                            placeholder="Digite o código da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomId}/>
                        <Button type="submit">Entrar na sala</Button>                     
                    </form>
                </div>
            </main>
        </div>
    )
}