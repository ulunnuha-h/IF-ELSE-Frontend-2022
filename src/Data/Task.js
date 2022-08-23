import axios from "axios";
import { baseUrl ,getToken, getUserToken } from "../Config/Auth";

const getTaskById = async (id)=> {
    try {
		const result = await axios.get(`${baseUrl}/api/task/${id}`);
		return result.data;
	} catch (error) {
		return error;
	}
}

const getAdminTaskById = async (id)=> {
    try {
		const result = await axios.get(`${baseUrl}/api/admin/task/${id}`);
		return result.data;
	} catch (error) {
		return error;
	}
}

const getAdminAllTask = async() => {
    try {
		const result = await axios.get(`${baseUrl}/api/admin/task`,{
			headers : {Authorization : getToken()}
		});
		return result.data;
	} catch (error) {
		return error;
	}
}

const getAllTask = async() => {
    try {
		const result = await axios.get(`${baseUrl}/api/task`);
		return result.data;
	} catch (error) {
		return error;
	}
}

const addTask = async (newTask) => {
    try {
		const result = await axios.post(`${baseUrl}/api/admin/task`, newTask,{
			headers : {Authorization : getToken()}
		});
		return result.data;
	} catch (error) {
		return error;
	}
}

const deleteTask = async(id) => {
    try {
		const result = await axios.delete(`${baseUrl}/api/admin/task/${id}`,{
			headers : {Authorization: getToken()}
		});
		return result.data;
	} catch (error) {
		return error;
	}
}

const editTask = async(id,newTask) => {
    try {
		const result = await axios.patch(`${baseUrl}/api/admin/task/${id}`,newTask,{
			headers : {Authorization: getToken()}
		});
		return result;
	} catch (error) {
		return error;
	}
}

const submitTask = async (task_id,links) => {
	try {
		const result = await axios.patch(`${baseUrl}/api/task`,{
			"id" : task_id,
			links
		},{
			headers : {Authorization: getUserToken()}
		});
		return result;
	} catch (error) {
		return error;
	}
}

const getSubmissionData = async (task_id) => {
	try {
        const res = await axios.get(`${baseUrl}/api/profile`,{
            headers : {Authorization : getUserToken()}
        });
        return res.data.student_task.filter(task => task.task_id === task_id);
    } catch (error) {
        return error;
    }
}

export {getTaskById,getAdminTaskById,getAllTask,getAdminAllTask,addTask,editTask,deleteTask,submitTask,getSubmissionData};
