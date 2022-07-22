const taskToggle = (id)=> {
    for(let i = 0;i < arrayTask.length;i++) {
        if(id === arrayTask[i].id) {
            arrayTask[i].isCompleted = !arrayTask[i].isCompleted;
            console.log(arrayTask[i].isCompleted)
        }
    }
    console.log(id);
}

const getTaskById = (id)=> {
    const taskFinder = arrayTask.find(task=> task.id === id);
    return taskFinder;
}

const arrayTask = [
    {
        id:1,
        title:1,
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ipsa ab ratione iste a quis cupiditate laboriosam cumque? Porro?",
        date:"30 September 2022",
        requirement:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quidem enim eius assumenda, architecto consequatur dolores ratione vel. Possimus, ab.",
        isCompleted : false
    },
    {
        id:2,
        title:2,
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ipsa ab ratione iste a quis cupiditate laboriosam cumque? Porro?",
        date:"1 Oktober 2022",
        requirement:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quidem enim eius assumenda, architecto consequatur dolores ratione vel. Possimus, ab.",
        isCompleted : false
    },
    {
        id:3,
        title:3,
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ipsa ab ratione iste a quis cupiditate laboriosam cumque? Porro?",
        date:"2 Oktober 2022",
        requirement:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quidem enim eius assumenda, architecto consequatur dolores ratione vel. Possimus, ab.",
        isCompleted : false
    },
    {
        id:4,
        title:4,
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ipsa ab ratione iste a quis cupiditate laboriosam cumque? Porro?",
        date:"3 Oktober 2022",
        requirement:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quidem enim eius assumenda, architecto consequatur dolores ratione vel. Possimus, ab.",
        isCompleted : false
    },
    {
        id:5,
        title:5,
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ipsa ab ratione iste a quis cupiditate laboriosam cumque? Porro?",
        date:"4 Oktober 2022",
        requirement:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quidem enim eius assumenda, architecto consequatur dolores ratione vel. Possimus, ab.",
        isCompleted : false
    },
    {
        id:6,
        title:6,
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ipsa ab ratione iste a quis cupiditate laboriosam cumque? Porro?",
        date:"5 Oktober 2022",
        requirement:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quidem enim eius assumenda, architecto consequatur dolores ratione vel. Possimus, ab.",
        isCompleted : false
    },
    {
        id:7,
        title:7,
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ipsa ab ratione iste a quis cupiditate laboriosam cumque? Porro?",
        date:"6 Oktober 2022",
        requirement:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quidem enim eius assumenda, architecto consequatur dolores ratione vel. Possimus, ab.",
        isCompleted : false
    },
    {
        id:8,
        title:8,
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ipsa ab ratione iste a quis cupiditate laboriosam cumque? Porro?",
        date:"7 Oktober 2022",
        requirement:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quidem enim eius assumenda, architecto consequatur dolores ratione vel. Possimus, ab.",
        isCompleted : false
    }
]

export default arrayTask;
export {taskToggle, getTaskById}