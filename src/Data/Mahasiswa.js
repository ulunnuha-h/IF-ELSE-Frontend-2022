import { getKelompokNameById } from "./Kelompok";
import { baseUrl } from "../Config/Auth";
import axios from "axios";

const Mahasiswa = [
    {
        "nama" : "Hanif Ulunnuha Hidayat",
        "nickname" : "Hanif",
        "address" : "Sumenep, Jawa Timur",
        "line" : "hanifulunnuha",
        "group_id" : null,
        "user_id" : 1,
        "avatar" : "https://placekitten.com/1200/1590",
        "about" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium.",
        "whatsapp" : "082215209344",
        "nim" : "215150200111019",
        "email" : "admin@admin",
        "password" : "admin"},
    {
        "nama" : "Buggy Maulana",
        "nickname" : "Bul",
        "address" : "Northeast Blue, Jakarta",
        "line" : "bebegege78",
        "group_id" : null,
        "user_id" : 2,
        "avatar" : "https://placekitten.com/200/300",
        "about" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium.",
        "whatsapp" : "082215746112",
        "nim" : "215150200111018",
        "email" : "buggy@admin",
        "password" : "admin"},
    {
        "nama" : "Steven Mantep",
        "nickname" : "Stif",
        "address" : "Hogwarts, Jawa Tenggara",
        "line" : "Steveben",
        "group_id" : null,
        "user_id" : 3,
        "avatar" : "https://placekitten.com/300/300",
        "about" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium.",
        "whatsapp" : "081992878312",
        "nim" : "215150200111020",
        "email" : "steven@admin",
        "password" : "admin"},
    {
        "nama" : "Horse D. Muffin",
        "nickname" : "Hos",
        "address" : "Fuji, Jawa Depan",
        "line" : "horsemuff00",
        "group_id" : null,
        "user_id" : 4,
        "avatar" : "https://placekitten.com/300/400",
        "about" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium.",
        "whatsapp" : "088198223714",
        "nim" : "215150200111022",
        "email" : "muffin@admin",
        "password" : "admin"},
    {
        "nama" : "Golemunaroh McRahmat",
        "nickname" : "Mamat",
        "address" : "London, England",
        "line" : "thegolem8",
        "group_id" : null,
        "user_id" : 5,
        "avatar" : "https://placekitten.com/600/500",
        "about" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium.",
        "whatsapp" : "087817223976",
        "nim" : "215150200111034",
        "email" : "golem@admin",
        "password" : "admin"
    },
    {
		"user_id": 6,
		"nim": "2151502004425",
		"nickname": "Austin",
		"nama": "Gage Alston",
		"group_id": false,
		"email": "nullam.velit@icloud.com",
		"password": "WKJ52EVN5ZD",
		"whatsapp": "0818-6176-4355",
		"address": "127-8708 Et Ave",
		"line": "mauris",
		"about": "quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec",
		"avatar": "http://placekitten.com/500/400"
	},
	{
		"user_id": 7,
		"nim": "2151502002148",
		"nickname": "Josiah",
		"nama": "Quamar Mcgee",
		"group_id": false,
		"email": "sem.vitae@yahoo.net",
		"password": "MQI37KOU7ZT",
		"whatsapp": "0887-4077-2758",
		"address": "P.O. Box 463, 497 Cursus St.",
		"line": "nec",
		"about": "arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit.",
		"avatar": "http://placekitten.com/500/400"
	}
]

const getAllMahasiswa = (key) => {
	// let name = '';
	// let nim = '';
	// if(isNaN(key)) name = key;
	// else nim = key;

	// try {
	// 	const result = await axios.post(`${baseUrl}/api/index`,null,{params:{name,nim}});
	// 	return {...result.data,success:true};
	// } catch (error) {
	// 	return error;
	// }
    const filtered = Mahasiswa.filter(mhs => {
        if(isNaN(parseInt(key))) return mhs.nama.toLowerCase().indexOf(key.toLowerCase()) !== -1;
        else return mhs.nim.toString().indexOf(key) !== -1;
    });
    return {data :{ result : filtered}, success : true};
}

const getMahasiswaByUserId =(UserId) => {
	// try {
	// 	const result = await axios.get(`${baseUrl}/api/mahasiswa/${UserId}`);
	// 	return result;
	// } catch (error) {
	// 	return error;
	// }

	const data = Mahasiswa.find(mhs => mhs.user_id === UserId);
	return data;
}

const getAllMahasiswaByGroup = (id) => {
	// try {
	// 	const result = await axios.get(`${baseUrl}/api/group/${id}`);
	// 	return result;
	// } catch (error) {
	// 	return error;
	// }
    const data = Mahasiswa.filter(mahasiswa => mahasiswa.group_id === id);
    return data;
}

const updateMahasiswaGroup = (group_id,user_id) => {
	// try {
	// 	const result = await axios.patch(`${baseUrl}/api/mahasiswa/${user_id}`,{
	// 		"group_id" :  `${group_id}`
	// 	});
	// 	return result;
	// } catch (error) {
	// 	return error;
	// }

	const idx = Mahasiswa.findIndex(mhs => mhs.user_id === user_id);
	Mahasiswa[idx].group_id = group_id;
	return group_id;
};

const updateMahasiswaData = (user_id,newData) => {
    const idx = Mahasiswa.findIndex(mhs => mhs.user_id === user_id);
    Mahasiswa[idx].nickname = newData.nickName;
    Mahasiswa[idx].address = newData.address;
    Mahasiswa[idx].line = newData.idLine;
    Mahasiswa[idx].about = newData.aboutMe;
    Mahasiswa[idx].whatsapp = newData.whatsapp;
}

const updateMahasiswaPass = (userId,old,new1,new2) => {
    const idx = Mahasiswa.findIndex(mhs => mhs.user_id === userId);

    if(old === Mahasiswa[idx].password){
        if(new1 === new2){
            Mahasiswa[idx].password = new1;
            return 'sukses';
        }
        else return "Password yang baru keduanya tidak sama"
    }
    else return "Password yang lama salah"
}

const postMahasiswaLogin = (email,pass) => {
    let data = Mahasiswa.find(mhs => mhs.email === email && mhs.password === pass);
    if(data) return {success : true , id:data.user_id, token:'ajh38Jhadj39KnfAin3lOw8K8'}
    else return {success : false, msg : 'NIM atau Password tidak ditemukan'};
}

const deleteMahasiswa = id => {
	const idx = Mahasiswa.findIndex(mhs=>mhs.user_id === id);
	Mahasiswa.splice(idx,1);
	console.log(Mahasiswa);
}

export {getAllMahasiswa,getMahasiswaByUserId,updateMahasiswaGroup,getAllMahasiswaByGroup,postMahasiswaLogin,updateMahasiswaData,updateMahasiswaPass,deleteMahasiswa};