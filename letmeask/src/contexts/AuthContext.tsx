import { createContext, ReactNode, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../services/firebase'

type AuthContextProviderProps = {
    children: ReactNode;
}

type User = {
    id: string;
    name: string;
    avatar: string;
  }
  
  type authContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
  }

  
export const authContext = createContext({} as authContextType);

export function AuthContextProvider(props: AuthContextProviderProps){

    const [user, setUser] = useState<User>()

    useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged(user =>{
        if(user){
          const {displayName, photoURL, uid} = user;
        
        if(!displayName || !photoURL){
          throw new Error("missing information from Google account");
        }
        
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
        }
      })
  
      return ()=>{
        unsubscribe();
      }
    }, [])
  
    async function signInWithGoogle(){
      const provider = new GoogleAuthProvider();
       
      const result = await signInWithPopup(auth, provider);
  
      if(result.user){
        const {displayName, photoURL, uid} = result.user
        
        if(!displayName || !photoURL){
          throw new Error("missing information from Google account");
        }
        
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      } 
  
    }

    return (
        <authContext.Provider value={{user, signInWithGoogle}}>
            {props.children}
        </authContext.Provider>
    )
}

