const Kelompok = [{
    id : 1,
    kelompok : 'SevenWind',
    link : "ikusoooo.com",
    pendamping : "Hatake Kakashi",
    line : "hehe",
    img : "wa.me"
}]

const addKelompok = (kelompok,link,pendamping,line,img) => {
    Kelompok.push({
        id : Kelompok.length + 1,
        kelompok,
        link,
        pendamping,
        line,
        img
    })
}

const updateKelompok = (id,newKelompok) => {
    const idx = Kelompok.indexOf(kel => kel.id === id);
    console.log(idx);
    Kelompok[idx] = newKelompok;
}

const getAllKelompok = () => {
    return Kelompok;
}

const getKelompokById = (id) => {
    const data = Kelompok.find(kelompok => kelompok.id === id);
    return data;
}

const getKelompokNameById = (id) => {
    const data = Kelompok.find(kelompok => kelompok.id === id);
    if(data === undefined) return "Tidak ada kelompok";
    else return data.kelompok;
}

export {addKelompok,getAllKelompok,getKelompokById,getKelompokNameById,updateKelompok};