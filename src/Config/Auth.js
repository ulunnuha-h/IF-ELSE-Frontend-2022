import axios from "axios";
import React, { useState } from "react"
import { checkEmailPass } from "../Data/Mahasiswa";

const Auth = React.createContext();

const AuthProvider = ({children}) => {
    const [log,setLog] = useState(false);
    const [token,setToken] = useState('');
    const [nim,setNim] = useState('');

    const userLogin = (email,pass) =>{
        const respons = checkEmailPass(email,pass);
        if(respons.success){
            setToken('token');
            setNim(respons?.id);
            localStorage.setItem('token','token');
            localStorage.setItem('nim',respons?.id);
            cekLokal();
            return '';
        }
        else{
            return 'Email atau Password tidak ditemukan !'
        }
    }

    const signIn = async (nim,pass) => {
        let respons;
        try {
            respons = await axios.post("http://beb0-116-206-40-78.ngrok.io/login",{
            "nim":nim,
            "password":pass            
        })  
        console.log(respons.data); 
        } catch (error) {
            console.log(error.message);
        }
    }

    const cekLokal = () => {
        if(localStorage.getItem('token') !== null) setToken(localStorage.getItem('token'));
        if(localStorage.getItem('nim') !== null) setNim(localStorage.getItem('nim'));
        if(token === '') setLog(false);
        else setLog(true);
    }

    const userLogout = () => {
        setToken('');
        setNim('');
        localStorage.removeItem('token');
        localStorage.removeItem('nim');
        cekLokal();
    }

    const isLogged = () => {
        return log;
    }

    const getNim = () => {
        return nim;
    }

    return(
        <Auth.Provider value={{isLogged,userLogin,userLogout,cekLokal,signIn,getNim}}>
            {children}
        </Auth.Provider>
    );
}

export {Auth,AuthProvider};