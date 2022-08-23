import axios from "axios";
import { baseUrl,getToken } from "../Config/Auth";

const getAdminAllAgenda = async () => {
    try {
        const res = await axios.get(`${baseUrl}/api/admin/agenda`,{
            headers: {Authorization : getToken()}
        });
        return res.data;
    } catch (error) {
        return error;
    }
};

const getAllAgenda = async () => {
    try {
        const res = await axios.get(`${baseUrl}/api/agenda`);
        return res.data;
    } catch (error) {
        return error;
    }
}

const addAgenda = async (newAgenda) => {
    const formData = new FormData();
    formData.append('title',newAgenda.title);
    formData.append('content',newAgenda.content);
    formData.append('image',newAgenda.image);
    formData.append('start_at',newAgenda.start_at);
    formData.append('end_at',newAgenda.end_at);

    try {
        const res = await axios.post(`${baseUrl}/api/admin/agenda`,formData,{
            headers: {Authorization : getToken()}
        });
        return res.data;
    } catch (error) {
        return error;
    }
}

const editAgenda = async (id,newAgenda) => {
    const formData = new FormData();
    formData.append('title',newAgenda.title);
    formData.append('content',newAgenda.content);
    formData.append('image',newAgenda.image);
    formData.append('start_at',newAgenda.start_at);
    formData.append('end_at',newAgenda.end_at);

    try {
        const res = await axios.patch(`${baseUrl}/api/admin/agenda/${id}`,formData,{
            headers: {Authorization : getToken()}
        });
        return res.data;
    } catch (error) {
        return error;
    }
}

const deleteAgenda = async (id) => {
    try {
        const res = await axios.delete(`${baseUrl}/api/admin/agenda/${id}`,{
            headers: {Authorization : getToken()}
        });
        return res.data;
    } catch (error) {
        return error;
    }
}

const getAgendaById = async (id) => {
    try {
        const res = await axios.get(`${baseUrl}/api/admin/agenda/${id}`,{
            headers: {Authorization : getToken()}
        });
        return res.data;
    } catch (error) {
        return error;
    }
}



const updateAgendaStatus = async (status,id) => {
    const formData = new FormData();
    formData.append('is_published',!status);

    try {
        const res = await axios.patch(`${baseUrl}/api/admin/toggle-agenda/${id}`,formData,{
            headers:{Authorization:getToken()}
        })
        return res.data;
    } catch (error) {
        return error;
    }
}

export {getAllAgenda,getAdminAllAgenda,updateAgendaStatus,getAgendaById,addAgenda,deleteAgenda,editAgenda};