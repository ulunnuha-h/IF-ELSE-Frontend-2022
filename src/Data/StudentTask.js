const StudentTask = [{
    ID : 1,
    UserId : 1,
    Data : [
	{
        TaskId : 1,
	    Submission : '',
	    SubmittedAt :'20 Agustus 2021'
    },
    {
        TaskId : 2,
	    Submission : 'url.com',
	    SubmittedAt :'20 Agustus 2021'
    },
    {
        TaskId : 3,
	    Submission : '',
	    SubmittedAt :'20 Agustus 2021'
    },
    {
        TaskId : 4,
	    Submission : 'https://drive.google.com/drive/u/0/my-drive',
	    SubmittedAt :'20 Agustus 2021'
    },]   
}]

const getStudentTaskByUserId = (UserId,TaskId) => {
    const data1 = StudentTask.find(task=>task.UserId === UserId);
    const data2 = data1.Data.find(data=>data.TaskId === TaskId);    
    return data2;
}

const updateStudentTaskSubmission = (UserId,TaskId,Url) => {
    const idx1 = StudentTask.findIndex(task => task.ID === UserId);
    const idx2 = StudentTask[idx1].Data.findIndex(data => data.TaskId === TaskId);
    StudentTask[idx1].Data[idx2].Submission = Url;
}

export {getStudentTaskByUserId,updateStudentTaskSubmission};