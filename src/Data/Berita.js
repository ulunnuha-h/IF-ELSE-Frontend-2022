import axios from "axios";
import { baseUrl,getToken} from "../Config/Auth";

const getAdminAllBerita = async () => {
    try {
        const res = await axios.get(`${baseUrl}/api/admin/news`, {
            headers: {Authorization : getToken()}
            })
        return res.data;
    } catch (error) {
        return error;
    }
}

const addBerita = async (newBerita) => {
    const formData = new FormData();
    formData.append("title", newBerita.title);
    formData.append("image", newBerita.image);
    formData.append("content", newBerita.content);

    try {
        const result = await axios.post(`${baseUrl}/api/admin/news`, formData, {
            headers: {
                Authorization : getToken(),
                'Content-Type': 'multipart/form-data'
            }
            })
        return result.data;
    } catch (error) {
        return error;
    }
}

const editBerita = async (id,newBerita) => {
    const formData = new FormData();
    formData.append("title", newBerita.title);
    if(newBerita.image !== "") formData.append("image", newBerita.image);
    formData.append("content", newBerita.content);
    formData.append("is_published", newBerita.is_published);

    try {
        const result = await axios.patch(`${baseUrl}/api/admin/news/${id}`, formData ,{
            headers: {
                Authorization : getToken()
            }
        })
        return result;
    } catch (error) {
        return error;
    }
}

const deleteBerita = async (id) => {
    try {
        const result = await axios.delete(`${baseUrl}/api/admin/news/${id}`,{
            headers : {
                Authorization : getToken()
            }
        });
        return result
    } catch (error) {
		return error;
	}
}

const getBeritaById = async (id) => {
    try {
		const result = await axios.get(`${baseUrl}/api/news/${id}`);
		return result.data;
	} catch (error) {
		return error;
	}
}

const getAllBerita = async (key) => {
    try {
        const result = await axios.post(`${baseUrl}/api/news`,null,{
            params:{q:key}
        });
        return result.data;
    } catch (error) {
        return error
    }
}

const getBeritaTerbaru = async () => {
    try {
        const result = await axios.get(`${baseUrl}/api/latest-news`);
        return result.data;
    } catch (error) {
        return error
    }
}

export {addBerita,getAllBerita,getBeritaById,editBerita,deleteBerita,getBeritaTerbaru,getAdminAllBerita};