import { getKelompokNameById } from "./Kelompok";

const Mahasiswa = [
    {
        Name : "Hanif Ulunnuha Hidayat",
        Nickname : "Hanif",
        Address : "Sumenep, Jawa Timur",
        Line : "hanifulunnuha",
        GroupId : null,
        UserId : 1,
        Avatar : "https://placekitten.com/1200/1590",
        About : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium.",
        Whatsapp : '082215209344',
        NIM : 215150200111019,
        Email : 'admin@admin',
        Password : 'admin'},
    {
        Name : "Buggy Maulana",
        Nickname : "Bul",
        Address : "Northeast Blue, Jakarta",
        Line : "bebegege78",
        GroupId : null,
        UserId : 2,
        Avatar : "https://placekitten.com/200/300",
        About : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium.",
        Whatsapp : '082215746112',
        NIM : 215150200111018,
        Email : 'buggy@admin',
        Password : 'admin'},
    {
        Name : "Steven Mantep",
        Nickname : "Stif",
        Address : "Hogwarts, Jawa Tenggara",
        Line : "Steveben",
        GroupId : null,
        UserId : 3,
        Avatar : "https://placekitten.com/300/300",
        About : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium.",
        Whatsapp : '081992878312',
        NIM : 215150200111020,
        Email : 'steven@admin',
        Password : 'admin'},
    {
        Name : "Horse D. Muffin",
        Nickname : "Hos",
        Address : "Fuji, Jawa Depan",
        Line : "horsemuff00",
        GroupId : null,
        UserId : 4,
        Avatar : "https://placekitten.com/300/400",
        About : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium.",
        Whatsapp : '088198223714',
        NIM : 215150200111022,
        Email : 'muffin@admin',
        Password : 'admin'},
    {
        Name : "Golemunaroh McRahmat",
        Nickname : "Mamat",
        Address : "London, England",
        Line : "thegolem8",
        GroupId : null,
        UserId : 5,
        Avatar : "https://placekitten.com/600/500",
        About : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium.",
        Whatsapp : '087817223976',
        NIM : 215150200111034,
        Email : 'golem@admin',
        Password : 'admin'
    }
]

const getAllMahasiswa = (key) => {
    
    const filtered = Mahasiswa.filter(mhs => {
        if(isNaN(parseInt(key))) return mhs.Name.toLowerCase().indexOf(key.toLowerCase()) !== -1;
        else return mhs.NIM.toString().indexOf(key) !== -1;
    });
    return filtered;
}

const getMahasiswaByUserId = (UserId) => {
    const data = Mahasiswa.find(mahasiswa => mahasiswa.UserId === UserId);
    return data;
}

const getAllMahasiswaByGroup = (id) => {
    const data = Mahasiswa.filter(mahasiswa => mahasiswa.GroupId === id);
    return data;
}

const updateMahasiswaGroup = (id,nim) => {
    let name = "Tidak Ada Kelompok";
    for (let i = 0; i < Mahasiswa.length; i++) {
        if(Mahasiswa[i].NIM === nim) {
            Mahasiswa[i].GroupId = id
            name = getKelompokNameById(id);
        };
    }
    return name;
}

const updateMahasiswaData = (nim,newData) => {
    const idx = Mahasiswa.findIndex(mhs => mhs.NIM === nim);
    Mahasiswa[idx].Nickname = newData.nickName;
    Mahasiswa[idx].Address = newData.address;
    Mahasiswa[idx].Line = newData.idLine;
    Mahasiswa[idx].About = newData.aboutMe;
}

const updateMahasiswaPass = (nim,old,new1,new2) => {
    const idx = Mahasiswa.findIndex(mhs => mhs.NIM === nim);

    if(old === Mahasiswa[idx].Password){
        if(new1 === new2){
            Mahasiswa[idx].Password = new1;
            return 'sukses';
        }
        else return "Password yang baru keduanya tidak sama"
    }
    else return "Password yang lama salah"
}

const checkEmailPass = (email,pass) => {
    let data = Mahasiswa.find(mhs => mhs.Email === email && mhs.Password === pass);
    if(data) return {success : true , id:data.UserId}
    else return {success : false};
}

export {getAllMahasiswa,getMahasiswaByUserId,updateMahasiswaGroup,getAllMahasiswaByGroup,checkEmailPass,updateMahasiswaData,updateMahasiswaPass};