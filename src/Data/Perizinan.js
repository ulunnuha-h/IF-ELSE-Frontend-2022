const Perizinan = [
        {
            agenda_id:1, 
            data : [
            {
                student_id : 1,
                nama : 'Hanif Ulunnuha Hidayat',
                nim : 215150200111019,
                group_id : 1,
                surat : "link.com"
            },
            {
                student_id : 2,
                nama : 'Buggy Maulana',
                nim : 215150200111022,
                group_id : 1,
                surat : "link.com"
            }]
        },
        {
            agenda_id:2, 
            data : [
            {
                student_id : 1,
                nama : 'Hanif Ulunnuha Hidayat',
                nim : 215150200111019,
                group_id : 1,
                surat : "link.com"
            },
            {
                student_id : 2,
                nama : 'Buggy Mabarata',
                nim : 215150200111022,
                group_id : 1,
                surat : "link.com"
            }]
        },
        {
            agenda_id:3, 
            data : [
            {
                student_id : 1,
                nama : 'Hanif Ulunnuha Hidayat',
                nim : 215150200111019,
                group_id : 1,
                surat : "link.com"
            },
            {
                student_id : 2,
                nama : 'Buggy Sup',
                nim : 215150200111022,
                group_id : 1,
                surat : "link.com"
            }]
        },
        {
            agenda_id:4, 
            data : [
            {
                student_id : 1,
                nama : 'Hanif Ulunnuha Hidayat',
                nim : 215150200111019,
                group_id : 1,
                surat : "link.com"
            },
            {
                student_id : 2,
                nama : 'Buggy D. Clown',
                nim : 215150200111022,
                group_id : 1,
                surat : "link.com"
            }]
        },
]

const getPerizinanByRangkaian = (id) => {
    const data = Perizinan.find(val => val.agenda_id === id);
    return data.data;
}

export {getPerizinanByRangkaian};