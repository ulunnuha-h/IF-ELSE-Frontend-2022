let Tugas = [
]

const getAllTugas = () => {
    return Tugas;
}

const getTugasId = (id) => {
    const tugasId = Tugas.find((tugas)=> tugas.id === id);
    return tugasId;
}

const addTugas = (tugasBaru) => {
    Tugas.push({id:Date.now(), ...tugasBaru});
}

const deleteTugas = (id) => {
    const idx = Tugas.findIndex(tgs => tgs.id === id);
    Tugas.splice(idx,1);
}

const editTugas = (editedTugas) => {
    const idx = Tugas.findIndex((tugas)=> tugas.id === editedTugas.id)
    Tugas[idx] = editedTugas;
}

export {getAllTugas,getTugasId,addTugas,editTugas,deleteTugas};