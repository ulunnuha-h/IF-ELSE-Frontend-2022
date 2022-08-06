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

const getAllStudenTaskByUserId = (userId) => {
    return StudentTask.find(stu => stu.user_id === userId);
}

const getStudentTaskByUserId = (UserId,task_id) => {
    const data1 = StudentTask.find(task=>task.user_id === UserId);
    const data2 = data1.data.find(data=>data.task_id === task_id);    
    return data2;
}

const updateStudentTasksubmission = (UserId,task_id,data) => {
    const idx1 = StudentTask.findIndex(task => task.id === UserId);
    const idx2 = StudentTask[idx1].data.findIndex(data => data.task_id === task_id);
    StudentTask[idx1].data[idx2].submission = data;
    StudentTask[idx1].data[idx2].submitted_at = Date().toString();
}

const updateStudentTaskData = (task_id) => {
    for (let i = 0; i < StudentTask.length; i++) {
        StudentTask[i].data.push({task_id,submission:null,submitted_at:''});
    }    
}

const deleteStudentTaskData = (task_id) => {
    for (let i = 0; i < StudentTask.length; i++) {
        for (let j = 0; j < StudentTask[i].data.length; j++) {
            if(StudentTask[i].data[j].task_id === task_id){
                StudentTask[i].data.splice(j,1);
            }
        }
    }    
    console.log(StudentTask);
}

export {getStudentTaskByUserId,updateStudentTasksubmission,updateStudentTaskData,deleteStudentTaskData,getAllStudenTaskByUserId};