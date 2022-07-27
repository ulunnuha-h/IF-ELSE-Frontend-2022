const Perizinan = [
        {
            isOpen : false, 
            data : [
            {
                nama : "Hanif Ulunnuha Hidayat",
                kepentingan : "Mabar"
            },
            {
                nama : "Steven Mantep",
                kepentingan : "Lupa kalo ada rangkaian"    
            }]
        },
        {   
            isOpen : true, 
            data :[
            {
                nama : "Zero Wanwan Cece",
                kepentingan : "Belom sarapan, jadi tadi pagi saya masih nyari nasi bungkus di pasar, soalnya pasarnya beda kabupaten jadi saya menghabiskan waktu 10 jam buat ke pasar"
            },
            {
                nama : "Steven Mantep",
                kepentingan : "Lupa kalo ada rangkaian"    
            }]
        },
        {   
            isOpen : false, 
            data :[
            {
                nama : "Zero Wanwan Cece",
                kepentingan : "ngapel lantai rumah"
            },
            {
                nama : "Steven Mantep",
                kepentingan : "Lupa kalo belom mandi"    
            }]
        }
]

const getPerizinanDay = (day) => {
    return Perizinan[day-1];
}

const getPerizinanDayDetail = (day,idx) => {
    return Perizinan[day-1].data[idx];
}

const togglePerizinanDay = (day) => {
    Perizinan[day-1].isOpen = !Perizinan[day-1].isOpen;
    return Perizinan[day-1].isOpen;
}

export {getPerizinanDay,getPerizinanDayDetail,togglePerizinanDay};