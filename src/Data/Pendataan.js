const Pendataan = [
    [
        {
            nama : "Steven Tujuenam",
            kepentingan : "Mabar Valo"
        },
        {
            nama : "Steven Mantep",
            kepentingan : "Lupa kalo ada rangkaian"    
        }
    ],
    [
        {
            nama : "Zero Wanwan Cece",
            kepentingan : "Belom sarapan"
        },
        {
            nama : "Koi Mundhatar",
            kepentingan : "Lupa kalo ada rangkaian"    
        }
    ],
    [
        {
            nama : "Buggy Maulana",
            kepentingan : "Kena sengat lebah pas ngecas laptop"
        },
        {
            nama : "Asheap Man",
            kepentingan : "Baju putih kehujanan"    
        }
    ]
]

const getPendataanDay = (day) => {
return Pendataan[day-1];
}

const getPendataanDayDetail = (day,idx) => {
return Pendataan[day-1][idx];
}

export {getPendataanDay,getPendataanDayDetail};