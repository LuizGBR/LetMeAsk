import copyImg from '../assets/images/copy.svg'
import '../styles/room-code.scss'

type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps){



    function copyRoomCodeToClipboard(){
        navigator.clipboard.writeText(props.code);
    }

    return(
        <button onClick={copyRoomCodeToClipboard} className="room-code"> 
            <span>Sala #{props.code}</span>
            <div>
                <img src={copyImg} alt="Copy room code"></img>
            </div>
        </button>
    )
}