import {ButtonHTMLAttributes} from 'react'
import './style.scss'


type buttonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean;
}

export function Button ({isOutlined = false, ...props}: buttonProps){
    return(
        <button 
            className={`button ${isOutlined ? 'outlined' : ''}`}
            {...props} 
        />
    )
}