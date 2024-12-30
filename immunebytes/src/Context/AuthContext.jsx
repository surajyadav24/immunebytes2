import { createContext, useContext, useState,useEffect } from "react";


export const AuthContext = createContext()

export const useAuthContext = ()=>{
    return useContext(AuthContext)
}

export const AuthContextProvider = ({children})=>{
 const[authUser ,setAuthUser]= useState(() => {
    try {
        return (JSON.parse(localStorage.getItem("user")) || null);
    } catch (error) {
        console.error("Error parsing chat-user from localStorage:", error);
        return null; // fallback to null if parsing fails   
    }
})
    // Update localStorage when authUser changes
    useEffect(() => {
        if (authUser) {
            localStorage.setItem("user", JSON.stringify(authUser));
        } else {
            localStorage.removeItem("user");
        }
    }, [authUser]);
    return <AuthContext.Provider value={{authUser,setAuthUser}}>
        {children}
    </AuthContext.Provider>
}