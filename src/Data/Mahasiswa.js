import { baseUrl,getToken, getUserToken } from "../Config/Auth";
import axios from "axios";

const getAllMahasiswa = async (page,page_size,key) => {
	let name = '';
	let nim = '';
	if(isNaN(key)) name = key;
	else nim = key;

	try {
		const result = await axios.post(`${baseUrl}/api/admin/mahasiswa`,null,{
            params:{name,nim,page : page + 1,page_size},
            headers : {
                Authorization : getToken()
            }
        });
		return result.data;
	} catch (error) {
		return error;
	}
}

const getMahasiswaByUserId = async (UserId) => {
	try {
		const result = await axios.get(`${baseUrl}/api/admin/mahasiswa/${UserId}`,{
            headers : {Authorization : getToken()}
        });
		return result.data;
	} catch (error) {
		return error;
	}
}

const updateMahasiswaGroup = async (group_id,user_id) => {
	try {
		const result = await axios.patch(`${baseUrl}/api/admin/mahasiswa/${user_id}`,{
			"group_id" : group_id
		},{
            headers : {Authorization : getToken()}
        });
		return result;
	} catch (error) {
		return error;
	}
};

const updateMahasiswaData = async (newData) => {
    try {
        const res = await axios.patch(`${baseUrl}/api/profile`,newData,{
            headers : {Authorization : getUserToken()}
        });
        return res.data;
    } catch (error) {
        return error;
    }
}

const updateMahasiswaPass = async (old,new1,new2) => {
    try {
        const res = await axios.patch(`${baseUrl}/api/password`,{
            "password":old,
            "newpass1":new1,
            "newpass2":new2
        },{
            headers : {Authorization : getUserToken()}
        })
        return res;
    } catch (error) {
        return error;
    }
    
}

const updateMahasiswaPicture = async (image) => {
    try {
        const formData = new FormData();
        formData.append('avatar',image);
        console.log(image);
        const res = await axios.patch(`${baseUrl}/api/profile-picture`,formData,{
            headers : {Authorization : getUserToken(),'Content-Type': 'multipart/form-data'},
            
        })
        return res;
    } catch (error) {
        return error;
    }
}

const postMahasiswaLogin = async (email,password) => {
    try {
        const res = await axios.post(`${baseUrl}/api/login`,{
            email,
            password
        })
        return res.data;
    } catch (error) {
        return error;
    }
}

const postMahasiswaRegister = async (data) => {
    try {
        const res = await axios.post(`${baseUrl}/api/register`,data)
        return res.data;
    } catch (error) {
        return error;
    }
}

const getMahasiswaProfile = async () => {
    try {
        const res = await axios.get(`${baseUrl}/api/profile`,{
            headers : {Authorization : getUserToken()}
        });
        return res.data;
    } catch (error) {
        return error;
    }
}

const deleteMahasiswa = async (id) => {
    try {
		const result = await axios.delete(`${baseUrl}/api/admin/mahasiswa/${id}`,{
            headers : {Authorization : getToken()}
        });
		return result.data;
	} catch (error) {
		return error;
	}
}

export {getAllMahasiswa,getMahasiswaByUserId,updateMahasiswaGroup,postMahasiswaLogin,updateMahasiswaData,updateMahasiswaPass,deleteMahasiswa,postMahasiswaRegister,getMahasiswaProfile,updateMahasiswaPicture};