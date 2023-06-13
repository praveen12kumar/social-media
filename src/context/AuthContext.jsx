import { createContext, useState } from "react";
import {toast} from "react-toastify"
export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage?.getItem('encodedToken')?.length>0);
    

    const userData = JSON.parse(localStorage?.getItem('userData'));
   

    const login = async(e, username, password)=>{
        // e.preventDefault();
        try{
            const creds = {
                username:username,
                password:password,
            }
            const response = await fetch('/api/auth/login',{
            method:'POST',
            body: JSON.stringify(creds),
            });
            const data = await response.json();
            console.log("data ",data.foundUser);

            if (data?.encodedToken) {
                localStorage.setItem('encodedToken', data?.encodedToken);
                localStorage.setItem('userData', `${JSON.stringify(data?.foundUser)}`)
                setIsLoggedIn(true)
                toast.success(`Welcome ${data?.foundUser?.firstName } ${data?.foundUser?.lastName}`,{
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                } )
            }
            else {
                toast.error(`Error ${response?.status}: ${data?.errors[0]}`, {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            }
            
        }
        catch(err){
            console.log("error", err);
        }
    }

    const guestLogin = async()=>{
        try {
            const guestCreds = {
                username:"adarshbalika",
                password:"adarshBalika123",
            }

            const response = await fetch('/api/auth/login',{
                method: "POST",
                body: JSON.stringify(guestCreds)});

                const data = await response.json();
                localStorage.setItem('encodedToken', data?.encodedToken);
                localStorage.setItem('userData', `${JSON.stringify(data?.foundUser)}`);
                setIsLoggedIn(true)
                toast.success(`Welcome ${data?.foundUser?.firstName } ${data?.foundUser?.lastName}`,{
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                } )
            }
        catch(err){
            console.log("error", err);
        }
    }


    const logout = ()=>{
        localStorage.clear();
        setIsLoggedIn(false);
        toast.warn(`${userData?.firstName} ${userData?.lastName} Logged out`,{
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    

    return(
        <AuthContext.Provider value={{login, isLoggedIn, guestLogin, logout, userData}}>
            {children}
        </AuthContext.Provider>
    )
}

