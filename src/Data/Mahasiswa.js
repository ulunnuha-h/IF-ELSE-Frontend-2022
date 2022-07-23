import { getKelompokNameById } from "./Kelompok";

const Mahasiswa = [
    {
        name : "Hanif Ulunnuha Hidayat",
        nickName : "Hanif",
        address : "Sumenep, Jawa Timur",
        idLine : "hanifulunnuha",
        groupId : null,
        img : "https://placekitten.com/1200/1590",
        aboutMe : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium.",
        wa : '082215209344',
        nim : 215150200111019,
        email : 'admin@admin',
        pass : 'admin'},
    {
        name : "Buggy Maulana",
        nickName : "Bul",
        address : "Northeast Blue, Jakarta",
        idLine : "bebegege78",
        groupId : null,
        img : "https://placekitten.com/200/300",
        aboutMe : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium.",
        wa : '082215746112',
        nim : 215150200111018,
        email : 'buggy@admin',
        pass : 'admin'},
    {
        name : "Steven Mantep",
        nickName : "Stif",
        address : "Hogwarts, Jawa Tenggara",
        idLine : "Steveben",
        groupId : null,
        img : "https://placekitten.com/300/300",
        aboutMe : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium.",
        wa : '081992878312',
        nim : 215150200111020,
        email : 'steven@admin',
        pass : 'admin'},
    {
        name : "Horse D. Muffin",
        nickName : "Hos",
        address : "Fuji, Jawa Depan",
        idLine : "horsemuff00",
        groupId : null,
        img : "https://placekitten.com/300/400",
        aboutMe : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium.",
        wa : '088198223714',
        nim : 215150200111022,
        email : 'muffin@admin',
        pass : 'admin'},
    {
        name : "Golemunaroh McRahmat",
        nickName : "Mamat",
        address : "London, England",
        idLine : "thegolem8",
        groupId : null,
        img : "https://placekitten.com/600/500",
        aboutMe : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium.",
        wa : '087817223976',
        nim : 215150200111034,
        email : 'golem@admin',
        pass : 'admin'
    }
]

const getAllMahasiswa = (key) => {
    
    const filtered = Mahasiswa.filter(mhs => {
        if(isNaN(parseInt(key))) return mhs.name.toLowerCase().indexOf(key.toLowerCase()) !== -1;
        else return mhs.nim.toString().indexOf(key) !== -1;
    });
    return filtered;
}

const getMahasiswaByNIM = (NIM) => {
    const data = Mahasiswa.find(mahasiswa => mahasiswa.nim === NIM);
    return data;
}

const getAllMahasiswaByGroup = (id) => {
    const data = Mahasiswa.filter(mahasiswa => mahasiswa.groupId === id);
    return data;
}

const updateMahasiswaGroup = (id,nim) => {
    let name = "Tidak Ada Kelompok";
    for (let i = 0; i < Mahasiswa.length; i++) {
        if(Mahasiswa[i].nim === nim) {
            Mahasiswa[i].groupId = id
            name = getKelompokNameById(id);
        };
    }
    return name;
}

const updateMahasiswaData = (nim,newData) => {
    const idx = Mahasiswa.findIndex(mhs => mhs.nim === nim);
    Mahasiswa[idx].nickName = newData.nickName;
    Mahasiswa[idx].address = newData.address;
    Mahasiswa[idx].idLine = newData.idLine;
    Mahasiswa[idx].aboutMe = newData.aboutMe;
}

const updateMahasiswaPass = (nim,old,new1,new2) => {
    const idx = Mahasiswa.findIndex(mhs => mhs.nim === nim);

    if(old === Mahasiswa[idx].pass){
        if(new1 === new2){
            Mahasiswa[idx].pass = new1;
            return 'sukses';
        }
        else return "Password yang baru keduanya tidak sama"
    }
    else return "Password yang lama salah"
}

const checkEmailPass = (email,pass) => {
    let data = Mahasiswa.find(mhs => mhs.email === email && mhs.pass === pass);
    if(data) return {success : true , id:data.nim}
    else return {success : false};
}

export {getAllMahasiswa,getMahasiswaByNIM,updateMahasiswaGroup,getAllMahasiswaByGroup,checkEmailPass,updateMahasiswaData,updateMahasiswaPass};