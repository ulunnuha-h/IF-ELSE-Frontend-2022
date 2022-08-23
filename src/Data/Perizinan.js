import axios from "axios";
import { baseUrl,getToken,getUserToken } from "../Config/Auth";

const getPerizinanByRangkaian = async (id) => {
    try {
        const res = await axios.get(`${baseUrl}/api/admin/perizinan/${id}`,{
            headers:{Authorization : getToken()}
        })
        return res.data;
    } catch (error) {
        return error;
    }
}

const postPerizinan = async (id,link) => {
    try {
        const res = await axios.post(`${baseUrl}/api/perizinan`,{
            "agenda_id":id,
            "link_surat":link
        },{
            headers : {Authorization : getUserToken()}
        })
        return res;
    } catch (error) {
        return error;
    }
}

export {getPerizinanByRangkaian,postPerizinan};