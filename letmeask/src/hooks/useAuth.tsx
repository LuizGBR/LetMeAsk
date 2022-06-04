import { useContext } from 'react'
import { authContext } from '../contexts/AuthContext'
import { auth } from '../services/firebase'

export function useAuth(){
    const value = useContext(authContext);

    return value;
}