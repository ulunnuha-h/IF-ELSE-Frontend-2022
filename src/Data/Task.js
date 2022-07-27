const Tasks = [
    {
        ID:1,
        Title:"Discover Your Journey (DISNEY)",
        Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ipsa ab ratione iste a quis cupiditate laboriosam cumque? Porro?",
        EndAt:"30 September 2022"
    },
    {
        ID:2,
        Title:"PROTOTICS: Proud To Be Informatics (Twibbon)",
        Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ipsa ab ratione iste a quis cupiditate laboriosam cumque? Porro?",
        EndAt:"12 September 2022"
    },
    {
        ID:3,
        Title:"	Penugasan Write Your Opinion (WON)",
        Description:`
Halo Teman-teman semua! 👋🏻

Masih pada bersemangatkan ya menempuh masa kuliahnnya hehe, kali ini kami akan mengabarkan informasi penting nih buat kalian yaitu penugasan WON. Wah apatuh WON kak? Nah untuk penjelasannya kalian bisa banget cek website resmi if else nih. Jangan lupa untuk dikerjakan sesuai dengan panduan dan tetap semangat!
        
Untuk info lebih lanjut tetap pantau terus linimasa dan sosial media kami di
        
LINE : @ifelsefilkomub
INSTAGRAM : ifelsefilkomub
YOUTUBE : IF ELSE FILKOM UB
WEBSITE : ifelse.filkom.ub.ac.id

==================================
Departemen Pengembangan Sumber Daya Manusia
Eksekutif Mahasiswa Informatika UB 2021
Kabinet Lentera

#ifelse2021
#SatuPaduInformatika
#KnowYourHomeGrowYourZone
#BeFearlessToExploreLoveBringsYouHome`,
        EndAt:"12 September 2022"
    },{
        ID:4,
        Title:"PROTOTICS: Proud To Be Informatics (Twibbon)",
        Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni est ipsa ab ratione iste a quis cupiditate laboriosam cumque? Porro?",
        EndAt:"12 September 2022"
    }
]

const getTaskById = (id)=> {
    const task = Tasks.find(task=> task.ID === id);
    return task;
}

const getAllTask = () => {
    return Tasks;
}

export {getTaskById,getAllTask};
