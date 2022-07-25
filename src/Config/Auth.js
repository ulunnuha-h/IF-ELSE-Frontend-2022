import axios from "axios";
import React, { useState } from "react"
import { checkEmailPass } from "../Data/Mahasiswa";

const Auth = React.createContext();

const AuthProvider = ({children}) => {
    const [log,setLog] = useState(false);
    const [token,setToken] = useState('');
    const [userId,setUserId] = useState('');

    const userLogin = (email,pass) =>{
        const respons = checkEmailPass(email,pass);
        if(respons.success){
            setToken('token');
            setUserId(respons.id);
            localStorage.setItem('token','token');
            localStorage.setItem('UserId',respons.id);
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
        if(localStorage.getItem('UserId') !== null) setUserId(localStorage.getItem('UserId'));
        if(token === '' || userId === '') setLog(false);
        else setLog(true);
    }

    const userLogout = () => {
        setToken('');
        setUserId('');
        localStorage.removeItem('token');
        localStorage.removeItem('UserId');
        cekLokal();
    }

    const isLogged = () => {
        return log;
    }

    const getUserId = () => {
        return userId;
    }

    return(
        <Auth.Provider value={{isLogged,userLogin,userLogout,cekLokal,signIn,getUserId}}>
            {children}
        </Auth.Provider>
    );
}

export {Auth,AuthProvider};