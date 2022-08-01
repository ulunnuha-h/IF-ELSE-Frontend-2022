const Tasks = [
    {
        id:1,
        title:"Discover Your Journey (DISNEY)",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ipsa ab ratione iste a quis cupiditate laboriosam cumque? Porro?",
        condition:'Bawa anak kucing sebanyak 2',
        start_at:"30 September 2022",
        end_at:"1 Novermber 2022",
        is_published: true,
        fields: [
            "URL tugas tiktok"
        ]
    }
]

const getTaskById = (id)=> {
    const task = Tasks.find(task=> task.id === id);
    return task;
}

const getAllTask = () => {
    const data = Tasks.filter(val => val.is_published);
    return data;
}

export {getTaskById,getAllTask};
