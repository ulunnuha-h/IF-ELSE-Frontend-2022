const Pendataan = [
    {
        agenda_id:1, 
        data : [
        {
            student_id : 1,
            nama : 'Groger Mobet',
            nim : 215150200111019,
            group_id : 1,
            surat : "link.com"
        },
        {
            student_id : 2,
            nama : 'Maurogol',
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
            nama : 'Loki',
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
            nama : 'Roberto',
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
            nama : 'Horse D. Muffin',
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

const getPendataanByRangkaian = (id) => {
const data = Pendataan.find(val => val.agenda_id === id);
return data.data;
}

export {getPendataanByRangkaian};