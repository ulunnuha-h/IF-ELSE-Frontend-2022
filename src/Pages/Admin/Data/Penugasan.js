const Tugas = [
]

const getAllTugas = () => {
    return Tugas;
}

const getTugasId = (id) => {
    const tugasId = Tugas.find((tugas)=> tugas.id === id);
    return tugasId;
}

const addTugas = (tugasBaru) => {
    Tugas.push({id:Tugas.length + 1, ...tugasBaru});
}

const editTugas = (editedTugas) => {
    const idx = Tugas.findIndex((tugas)=> tugas.id === editedTugas.id)
    Tugas[idx] = editedTugas;
}

export {getAllTugas,getTugasId,addTugas,editTugas};