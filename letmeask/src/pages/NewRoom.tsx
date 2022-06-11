import { Button } from "../components/Button";
import '../styles/auth.scss'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";
import { database} from "../services/firebase";
import { toast } from "react-toastify";


export function NewRoom(){
    const {user} = useAuth();

    const [newRoom, setNewRoom] = useState('');

    const navigate = useNavigate()

    async function handleCreateRoom(event: FormEvent){
        event.preventDefault()
        
        if(newRoom.trim() === ''){
            return;
        }

        try{
            const roomRef = database.ref('rooms');

            const firebaseRoom = await roomRef.push({
                title: newRoom,
                authorId: user?.id,
            });
    
            navigate(`/admin/rooms/${firebaseRoom.key}`)
            toast.success('Sala criada com sucesso!');
        }catch{
            toast.error('Erro ao criar sala.');
        }
        
        
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
                    <h1>{user?.name}</h1>
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input 
                            type="text" 
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">Criar da sala</Button>                     
                    </form>
                    <p>
                        Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}