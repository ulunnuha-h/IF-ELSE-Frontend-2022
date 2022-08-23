import axios from "axios";
import { baseUrl,getToken, getUserToken } from "../Config/Auth";

const addKelompok = async (form) => {
    try {
        const res = await axios.post(`${baseUrl}/api/admin/group`,form,{
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization : getToken()
            }});
        return res.data;
    } catch (error) {
        return error;
    }
}

const deleteKelompok = async (id) => {
    try {
        const res = await axios.delete(`${baseUrl}/api/admin/group/${id}`,{
            headers : {Authorization : getToken()}
        });
        return res.data;
    } catch (error) {
        return error;
    }
}

const updateKelompok = async (id,updatedKelompok) => {
    try {
        const res = await axios.patch(`${baseUrl}/api/admin/group/${id}`,updatedKelompok,{
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization : getToken()
            }});
        return res;
    } catch (error) {
        return error;
    }
}

const getAllKelompok = async () => {
    try {
        const res = await axios.get(`${baseUrl}/api/admin/group`,{
            headers : {Authorization : getToken()}
        });
        return res.data;
    } catch (error) {
        return error;
    }
}

const getKelompokById = async (id) => {
    try {
        const token = (getToken() !== null ? getToken() : getUserToken());
        const res = await axios.get(`${baseUrl}/api/admin/group/${id}`,{
            headers : {Authorization : token}
        });
        return res.data;
    } catch (error) {
        return error;
    }
}

export {addKelompok,getAllKelompok,getKelompokById,updateKelompok,deleteKelompok};