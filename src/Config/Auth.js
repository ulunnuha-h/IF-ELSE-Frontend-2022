import React, { useState } from "react";

// const user = {
//     name : "Hanif Ulunnuha Hidayat",
//     nickName : "Hanif",
//     address : "Sumenep, Jawa Timur",
//     idLine : "hanifulunnuha",
//     group : "Debian Edu",
//     img : "https://drive.google.com/uc?export=view&id=1WPQoiaPabvw2sN-t53iT0mKpODmR03my",
//     aboutMe : "I am a programmer"
// }

const Auth = React.createContext();

const AuthProvider = ({ children }) => {
  const [log, setLog] = useState(false);
  const [token, setAuthToken] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const login = (email, pass) => {
    if (email === "admin" && pass === "admin") {
      setAuthToken("token");
      localStorage.setItem("token", "token");
      setErrMsg("");
      cekLokal();
    } else {
      setErrMsg("Email atau Password tidak ditemukan !");
    }
  };

  const cekLokal = () => {
    setAuthToken(localStorage.getItem("token"));
    if (token === "") setLog(false);
    else setLog(true);
  };

  const logout = () => {
    setAuthToken("");
    localStorage.setItem("token", "");
    cekLokal();
  };

  const isLogged = () => {
    return log;
  };

  const getUserData = () => {
    const data = localStorage.getItem("user");
    return JSON.parse(data);
  };

  return <Auth.Provider value={{ isLogged, login, logout, errMsg, cekLokal, getUserData }}>{children}</Auth.Provider>;
};

export { Auth, AuthProvider };
