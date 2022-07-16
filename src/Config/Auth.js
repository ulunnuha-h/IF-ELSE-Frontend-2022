import React, { useState } from "react"

const getExampleData = () => {
    const user = {
            name : "Hanif Ulunnuha Hidayat",
            nickName : "Hanif",
            address : "Sumenep, Jawa Timur",
            idLine : "hanifulunnuha",
            group : "Debian Edu",
            img : "https://drive.google.com/uc?export=view&id=1WPQoiaPabvw2sN-t53iT0mKpODmR03my",
            aboutMe : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium.",
            nim : 215150200111019
        } 

    return user;
}

const Auth = React.createContext();

const AuthProvider = ({children}) => {

    const [log,setLog] = useState(false);
    const [token,setAuthToken] = useState('');
    const [errMsg,setErrMsg] = useState('');

    const login = (email,pass) =>{
        if(email === 'admin@admin' && pass === 'admin'){
            setAuthToken('token');
            localStorage.setItem('token','token');
            setErrMsg('');
            cekLokal();
        }
        else{
            setErrMsg('Email atau Password salah !');
        }
    }

    const cekLokal = () => {
        if(localStorage.getItem('token') === null) localStorage.setItem('token','');
        else setAuthToken(localStorage.getItem('token'));
        if(token === '') setLog(false);
        else setLog(true);
    }

    const logout = () => {
        setAuthToken('');
        localStorage.setItem('token','');
        cekLokal();
    }

    const isLogged = () => {
        return log;
    }

    const getUserData = () => {
        const data = getExampleData();
        return data;
    }

    return(
        <Auth.Provider value={{isLogged,login,logout,errMsg,cekLokal,getUserData}}>
            {children}
        </Auth.Provider>
    );
}

export {Auth,AuthProvider};