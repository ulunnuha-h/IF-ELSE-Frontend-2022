import axios from "axios";
import { baseUrl,getToken } from "../Config/Auth";

const updateStudentMark = async (agenda_id,user_id,mark) => {
    try {
        console.log(agenda_id,user_id,mark);
        const res = await axios.patch(`${baseUrl}/api/admin/marking/${user_id}`,{
            "agenda_id":parseInt(agenda_id),
            "mark":parseInt(mark)
        },{
            headers : {
                Authorization : getToken()
            }
        })
        return res;
    } catch (error) {
        return error;
    }
}

export {updateStudentMark};