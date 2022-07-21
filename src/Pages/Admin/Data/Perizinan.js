const Perizinan = [
        [
            {
                nama : "Hanif Ulunnuha Hidayat",
                kepentingan : "Mabar"
            },
            {
                nama : "Steven Mantep",
                kepentingan : "Lupa kalo ada rangkaian"    
            }
        ],
        [
            {
                nama : "Zero Wanwan Cece",
                kepentingan : "Belom sarapan, jadi tadi pagi saya masih nyari nasi bungkus di pasar, soalnya pasarnya beda kabupaten jadi saya menghabiskan waktu 10 jam buat ke pasar"
            },
            {
                nama : "Steven Mantep",
                kepentingan : "Lupa kalo ada rangkaian"    
            }
        ],
        [
            {
                nama : "Buggy Maulana",
                kepentingan : "Kena sengat lebah pas ngecas laptop"
            },
            {
                nama : "Steven Mantep",
                kepentingan : "Lupa kalo ada rangkaian"    
            }
        ]
]

const getPerizinanDay = (day) => {
    return Perizinan[day-1];
}

const getPerizinanDayDetail = (day,idx) => {
    return Perizinan[day-1][idx];
}

export {getPerizinanDay,getPerizinanDayDetail};