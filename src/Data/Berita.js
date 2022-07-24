let Berita = []

const addBerita = (newBerita) => {
    Berita.push({id : Date.now() , ...newBerita});
}

const deleteBerita = (id) => {
    const idx = Berita.findIndex(berita=>berita.id === id);
    Berita.splice(idx,1);
}

const getBeritaById = (id) => {
    const beritaById = Berita.find(berita => berita.id === id);
    return beritaById;
}

const editBerita = (id,newBerita) => {
    const idx = Berita.indexOf(berita=>berita.id === id);
    Berita[idx] = {id, ...newBerita};
}

const getAllBerita = () => {
    return Berita;
}

export {addBerita,getAllBerita,getBeritaById,editBerita,deleteBerita};