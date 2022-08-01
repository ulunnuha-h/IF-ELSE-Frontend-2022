const StudentTask = [{
    id : 1,
    user_id : 1,
    data : [
	{
        task_id : 1,
	    submission : null,
	    submitted_at :'20 Agustus 2021'
    },
    {
        task_id : 2,
	    submission : 'url.com',
	    submitted_at :'20 Agustus 2021'
    },
    {
        task_id : 3,
	    submission : '',
	    submitted_at :'20 Agustus 2021'
    },
    {
        task_id : 4,
	    submission : 'https://drive.google.com/drive/u/0/my-drive',
	    submitted_at :'20 Agustus 2021'
    },]   
}]

const getStudentTaskByUserId = (UserId,task_id) => {
    const data1 = StudentTask.find(task=>task.user_id === UserId);
    const data2 = data1.data.find(data=>data.task_id === task_id);    
    return data2;
}

const updateStudentTasksubmission = (UserId,task_id,data) => {
    console.log(UserId,task_id,data);
    const idx1 = StudentTask.findIndex(task => task.id === UserId);
    const idx2 = StudentTask[idx1].data.findIndex(data => data.task_id === task_id);
    StudentTask[idx1].data[idx2].submission = data;
}

export {getStudentTaskByUserId,updateStudentTasksubmission};