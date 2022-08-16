import axios from "axios";
import { baseUrl } from "../Config/Auth";

const Kelompok = [{
    id : "1",
    kelompok : 'Seven Wind',
    link : "ikusoooo.com",
    pendamping : "Hatake Kakashi",
    line : "hehe",
    img : "https://placekitten.com/680/715"
}]

const addKelompok = async (form) => {
    try {
        const res = await axios.post(`${baseUrl}/api/group`,form,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }});
        return res;
    } catch (error) {
        return error;
    }
}

const deleteKelompok = async (id) => {
    try {
        const res = await axios.delete(`${baseUrl}/api/group/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

const updateKelompok = async (id,updatedKelompok) => {
    try {
        const res = await axios.patch(`${baseUrl}/api/group/${id}`,updatedKelompok,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }});
        return res;
    } catch (error) {
        return error;
    }
}

const getAllKelompok = async () => {
    try {
        const res = await axios.get(`${baseUrl}/api/group`);
        return res.data;
    } catch (error) {
        return error;
    }
}

const getKelompokById = async (id) => {
    try {
        const res = await axios.get(`${baseUrl}/api/group/${id}`);
        return res.data;
    } catch (error) {
        return error;
    }
}

const getKelompokNameById = (id) => {
    const data = Kelompok.find(kelompok => kelompok.id === id);
    if(data === undefined) return "Tidak ada kelompok";
    else return data.kelompok;
}

export {addKelompok,getAllKelompok,getKelompokById,getKelompokNameById,updateKelompok,deleteKelompok};