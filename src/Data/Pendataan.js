const Pendataan = [
    {
        isOpen : false, 
        data : [
            {
                nama : "Steven Tujuenam",
                kepentingan : "Mabar Valo"
            },
            {
                nama : "Steven Mantep",
                kepentingan : "Lupa kalo ada rangkaian"    
            }
        ]
    },
    {   
        isOpen : true, 
        data :[
            {
                nama : "Zero Wanwan Cece",
                kepentingan : "Belom sarapan"
            },
            {
                nama : "Koi Mundhatar",
                kepentingan : "Lupa kalo ada rangkaian"    
            }
        ]
    },
    {   
        isOpen : true, 
        data :[
            {
                nama : "Buggy Maulana",
                kepentingan : "Kena sengat lebah pas ngecas laptop"
            },
            {
                nama : "Asheap Man",
                kepentingan : "Baju putih kehujanan"    
            }
        ]
    }
]

const getPendataanDay = (day) => {
return Pendataan[day-1];
}

const getPendataanDayDetail = (day,idx) => {
return Pendataan[day-1].data[idx];
}

const togglePendataanDay = (day) => {
Pendataan[day-1].isOpen = !Pendataan[day-1].isOpen;
return Pendataan[day-1].isOpen;
}

export {getPendataanDay,getPendataanDayDetail,togglePendataanDay};