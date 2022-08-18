import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../Config/Auth";

const StudentTask = [{
    id : 1,
    user_id : 1,
    data : [
	{
        task_id : 91238741,
	    submission : null,
	    submitted_at : ''
    }] 
},{
    id : 2,
    user_id : 2,
    data : [
	{
        task_id : 91238741,
	    submission : null,
	    submitted_at : ''
    }] 
},{
    id : 3,
    user_id : 3,
    data : [
	{
        task_id : 91238741,
	    submission : null,
	    submitted_at : ''
    }] 
},{
    id : 4,
    user_id : 4,
    data : [
	{
        task_id : 91238741,
	    submission : null,
	    submitted_at : ''
    }] 
},{
    id : 5,
    user_id : 5,
    data : [
	{
        task_id : 91238741,
	    submission : null,
	    submitted_at : ''
    }] 
},{
    id : 6,
    user_id : 6,
    data : [
	{
        task_id : 91238741,
	    submission : null,
	    submitted_at : ''
    }] 
},{
    id : 7,
    user_id : 7,
    data : [
	{
        task_id : 91238741,
	    submission : null,
	    submitted_at : ''
    }] 
}
]

// const [studentData,setStudentData] = useState([])

// const getStudentData = async() => {
//     try {
//       const res = await axios.get(`${baseUrl}/api/studentTasks/${UserId}`);
//       setStudentData(res.data)
//     } catch(error) {
//       console.log(error)
//     }
//   }

// useEffect(()=>{
//     getStudentData();
//   },[deleteContact])

const getAllStudenTaskByUserId = async (userId) => {
    try {
		const result = await axios.get(`${baseUrl}/api/admin/task/${userId}`);
		return result;
	} catch (error) {
		return error;
	}
    // return StudentTask.find(stu => stu.user_id === userId);
}

const getStudentTaskByUserId = (UserId,task_id) => {
    // try {
	// 	const result = await axios.get(`${baseUrl}/api/admin/task/${id}`);
	// 	return result;
	// } catch (error) {
	// 	return error;
	// }
    // const data1 = StudentTask.find(task=>task.user_id === UserId);
    // const data2 = data1.data.find(data=>data.task_id === task_id);    
    // return data2;
}

const updateStudentTasksubmission = (UserId,task_id,data) => {
    // try {
	// 	const result = await axios.put(`${baseUrl}/api/admin/task/${id}`);
	// 	return result;
	// } catch (error) {
	// 	return error;
	// }
    const idx1 = StudentTask.findIndex(task => task.id === UserId);
    const idx2 = StudentTask[idx1].data.findIndex(data => data.task_id === task_id);
    StudentTask[idx1].data[idx2].submission = data;
    StudentTask[idx1].data[idx2].submitted_at = Date().toString();
}

const updateStudentTaskData = (task_id) => {
    for (let i = 0; i < StudentTask.length; i++) {
        StudentTask[i].data.push({task_id,submission:null,submitted_at:''});
    }
    // try {
	// 	const result = await axios.patch(`${baseUrl}/api/admin/task/${task_id}`,{
	// 		"task_id" :  `${task_id}`
	// 	});
	// 	return result;
	// } catch (error) {
	// 	return error;
	// }    
}

const deleteStudentTaskData = (task_id) => {
    // for (let i = 0; i < StudentTask.length; i++) {
    //     for (let j = 0; j < StudentTask[i].data.length; j++) {
    //         if(StudentTask[i].data[j].task_id === task_id){
    //             StudentTask[i].data.splice(j,1);
    //         }
    //     }
    // }    
    // try {
	// 	const result = await axios.delete(`${baseUrl}/api/admin/studentTasks/${task_id}`);
	// 	return result;
	// } catch (error) {
	// 	return error;
	// }    
    console.log(StudentTask);
}

export {getStudentTaskByUserId,updateStudentTasksubmission,updateStudentTaskData,deleteStudentTaskData,getAllStudenTaskByUserId};