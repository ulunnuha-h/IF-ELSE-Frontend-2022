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
	},
	{
		"user_id": 8,
		"nim": "2151502002673",
		"nickname": "Neil",
		"nama": "Nissim Marsh",
		"group_id": false,
		"email": "non.sollicitudin.a@yahoo.org",
		"password": "WPD73QSC7YX",
		"whatsapp": "0827-8373-3558",
		"address": "730-1437 Lacinia St.",
		"line": "odio.",
		"about": "suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non",
		"avatar": "https://placekitten.com/500/400"
	},
	{
		"user_id": 9,
		"nim": "2151502009012",
		"nickname": "Kaseem",
		"nama": "Bradley Webb",
		"group_id": false,
		"email": "sociis.natoque@google.ca",
		"password": "ZRU18BEP2OO",
		"whatsapp": "0814-8861-6520",
		"address": "5704 Non, St.",
		"line": "sit",
		"about": "eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et",
		"avatar": "http://placekitten.com/500/200"
	},
	{
		"user_id": 10,
		"nim": "2151502000965",
		"nickname": "Mannix",
		"nama": "Nathan Ballard",
		"group_id": false,
		"email": "tellus.non.magna@outlook.com",
		"password": "RNV11ZWD0FU",
		"whatsapp": "0832-9158-4706",
		"address": "3431 Non, Av.",
		"line": "sed",
		"about": "scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis.",
		"avatar": "https://placekitten.com/400/200"
	},
	{
		"user_id": 11,
		"nim": "2151502004233",
		"nickname": "Thomas",
		"nama": "Garth Pennington",
		"group_id": false,
		"email": "arcu.nunc.mauris@aol.couk",
		"password": "JEV28FMB8KX",
		"whatsapp": "0820-3225-2418",
		"address": "Ap #920-4004 Aliquet Street",
		"line": "nostra,",
		"about": "sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer",
		"avatar": "https://placekitten.com/500/200"
	},
	{
		"user_id": 12,
		"nim": "2151502006139",
		"nickname": "Reed",
		"nama": "Berk Dawson",
		"group_id": false,
		"email": "nunc.sed@icloud.ca",
		"password": "OHH72DMC9MC",
		"whatsapp": "0889-2471-2180",
		"address": "Ap #640-8982 Natoque Street",
		"line": "nunc",
		"about": "pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium",
		"avatar": "http://placekitten.com/400/200"
	},
	{
		"user_id": 13,
		"nim": "2151502008945",
		"nickname": "Giacomo",
		"nama": "Fitzgerald Blair",
		"group_id": false,
		"email": "nunc@icloud.edu",
		"password": "BCS86VLG8PG",
		"whatsapp": "0854-1941-2496",
		"address": "Ap #471-8109 Quis, Avenue",
		"line": "tincidunt",
		"about": "tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc",
		"avatar": "https://placekitten.com/500/200"
	},
	{
		"user_id": 14,
		"nim": "2151502008080",
		"nickname": "Hu",
		"nama": "Jarrod Padilla",
		"group_id": false,
		"email": "ipsum.dolor@icloud.org",
		"password": "SUA87YQC2FS",
		"whatsapp": "0834-2310-1463",
		"address": "Ap #712-4272 Eu, Ave",
		"line": "tempor",
		"about": "Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed",
		"avatar": "http://placekitten.com/500/200"
	},
	{
		"user_id": 15,
		"nim": "2151502005836",
		"nickname": "Plato",
		"nama": "Kirk Ratliff",
		"group_id": false,
		"email": "magnis.dis@protonmail.edu",
		"password": "IYH63MXB0UF",
		"whatsapp": "0844-2595-2114",
		"address": "P.O. Box 339, 7408 Turpis Ave",
		"line": "et",
		"about": "tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu.",
		"avatar": "https://placekitten.com/300/500"
	},
	{
		"user_id": 16,
		"nim": "2151502003010",
		"nickname": "Tate",
		"nama": "Drew Harris",
		"group_id": false,
		"email": "venenatis.lacus@icloud.com",
		"password": "CXB46QWA5KI",
		"whatsapp": "0858-7646-8185",
		"address": "931-7256 Massa. St.",
		"line": "blandit",
		"about": "Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec",
		"avatar": "https://placekitten.com/500/200"
	},
	{
		"user_id": 17,
		"nim": "2151502002585",
		"nickname": "Emery",
		"nama": "Nolan Pickett",
		"group_id": false,
		"email": "dictum.cursus@protonmail.ca",
		"password": "JBJ81ZHY0BJ",
		"whatsapp": "0807-2122-2731",
		"address": "328-8769 Nisl St.",
		"line": "Proin",
		"about": "Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus,",
		"avatar": "http://placekitten.com/400/200"
	},
	{
		"user_id": 18,
		"nim": "2151502008485",
		"nickname": "Bernard",
		"nama": "Keegan Mack",
		"group_id": false,
		"email": "molestie.sodales.mauris@aol.couk",
		"password": "GOX57OOH8XT",
		"whatsapp": "0898-8154-7442",
		"address": "6515 Nulla Rd.",
		"line": "vitae",
		"about": "tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis.",
		"avatar": "https://placekitten.com/500/400"
	},
	{
		"user_id": 19,
		"nim": "2151502000654",
		"nickname": "Elijah",
		"nama": "Upton Robbins",
		"group_id": false,
		"email": "eros.nec@aol.couk",
		"password": "MSY23JVP3HY",
		"whatsapp": "0856-6536-8184",
		"address": "6425 Luctus St.",
		"line": "sagittis",
		"about": "nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet.",
		"avatar": "http://placekitten.com/300/500"
	},
	{
		"user_id": 20,
		"nim": "2151502006489",
		"nickname": "Zeus",
		"nama": "Zeus Bush",
		"group_id": false,
		"email": "ultrices.a@icloud.edu",
		"password": "HEF36MZC8TX",
		"whatsapp": "0876-6031-3856",
		"address": "3933 Vel Rd.",
		"line": "Duis",
		"about": "lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum",
		"avatar": "http://placekitten.com/500/200"
	},
	{
		"user_id": 21,
		"nim": "2151502003932",
		"nickname": "Armand",
		"nama": "Avram York",
		"group_id": false,
		"email": "nisl@aol.couk",
		"password": "IPN53MYE6DN",
		"whatsapp": "0836-4387-2514",
		"address": "991-3781 Erat Street",
		"line": "lacinia",
		"about": "Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus",
		"avatar": "http://placekitten.com/500/200"
	},
	{
		"user_id": 22,
		"nim": "2151502006004",
		"nickname": "Judah",
		"nama": "Dorian Richardson",
		"group_id": false,
		"email": "etiam.laoreet@hotmail.com",
		"password": "VJP62SFT8HU",
		"whatsapp": "0849-3888-9323",
		"address": "248-4225 Arcu. St.",
		"line": "pellentesque",
		"about": "Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero",
		"avatar": "https://placekitten.com/400/200"
	},
	{
		"user_id": 23,
		"nim": "2151502002066",
		"nickname": "Christian",
		"nama": "Colorado Mcclure",
		"group_id": false,
		"email": "amet@yahoo.org",
		"password": "BTH20MXH8PL",
		"whatsapp": "0877-3707-6377",
		"address": "802-9828 Amet, Rd.",
		"line": "elit,",
		"about": "purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat",
		"avatar": "https://placekitten.com/400/200"
	},
	{
		"user_id": 24,
		"nim": "2151502008356",
		"nickname": "Wade",
		"nama": "Josiah Benson",
		"group_id": false,
		"email": "magna.ut@google.net",
		"password": "FWH61SBZ2ZA",
		"whatsapp": "0817-5606-0853",
		"address": "205-761 Eu, Road",
		"line": "In",
		"about": "Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In",
		"avatar": "http://placekitten.com/400/200"
	},
	{
		"user_id": 25,
		"nim": "2151502004297",
		"nickname": "Cole",
		"nama": "Stone Daugherty",
		"group_id": false,
		"email": "elit.pellentesque.a@hotmail.edu",
		"password": "SQE71QAX2QN",
		"whatsapp": "0822-8441-1051",
		"address": "Ap #480-1101 Est Rd.",
		"line": "mauris",
		"about": "Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed",
		"avatar": "http://placekitten.com/500/200"
	},
	{
		"user_id": 26,
		"nim": "2151502007252",
		"nickname": "Garrison",
		"nama": "Griffin Flynn",
		"group_id": false,
		"email": "mauris@protonmail.org",
		"password": "UFK78UQY5DZ",
		"whatsapp": "0878-5865-1033",
		"address": "Ap #580-9061 Vitae Rd.",
		"line": "cursus",
		"about": "felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at,",
		"avatar": "https://placekitten.com/500/200"
	},
	{
		"user_id": 27,
		"nim": "2151502009151",
		"nickname": "Rooney",
		"nama": "Zephania Lester",
		"group_id": false,
		"email": "sit.amet.ultricies@google.org",
		"password": "HNF31FVZ5HR",
		"whatsapp": "0844-8279-8991",
		"address": "6371 Cum St.",
		"line": "cursus.",
		"about": "Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a",
		"avatar": "https://placekitten.com/400/200"
	},
	{
		"user_id": 28,
		"nim": "2151502005548",
		"nickname": "Cedric",
		"nama": "Melvin Nguyen",
		"group_id": false,
		"email": "vel.mauris.integer@outlook.com",
		"password": "WGT28CCO3PO",
		"whatsapp": "0866-6858-8487",
		"address": "P.O. Box 795, 3041 A Av.",
		"line": "arcu.",
		"about": "mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue.",
		"avatar": "http://placekitten.com/500/200"
	},
	{
		"user_id": 29,
		"nim": "2151502002683",
		"nickname": "Declan",
		"nama": "Tyler Daugherty",
		"group_id": false,
		"email": "mauris.magna@hotmail.couk",
		"password": "HHP24IXW5KW",
		"whatsapp": "0872-4545-8624",
		"address": "Ap #155-9521 Euismod St.",
		"line": "mollis.",
		"about": "nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing",
		"avatar": "https://placekitten.com/500/400"
	},
	{
		"user_id": 30,
		"nim": "2151502001456",
		"nickname": "George",
		"nama": "Rajah Fields",
		"group_id": false,
		"email": "metus.in@icloud.org",
		"password": "EVM12VMM4SU",
		"whatsapp": "0852-0727-0147",
		"address": "P.O. Box 377, 5219 Molestie Avenue",
		"line": "felis.",
		"about": "amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a,",
		"avatar": "https://placekitten.com/300/500"
	}
]

const getAllMahasiswa = async (key) => {
	try {
		const result = await axios.post(`${baseUrl}/getall`,null,{params:{name:key,nim:''}});
		return {...result.data,success:true};
	} catch (error) {
		return error;
	}
    // const filtered = Mahasiswa.filter(mhs => {
    //     if(isNaN(parseInt(key))) return mhs.nama.toLowerCase().indexOf(key.toLowerCase()) !== -1;
    //     else return mhs.nim.toString().indexOf(key) !== -1;
    // });
    // return {data : filtered, success : false};
}

const getMahasiswaByUserId = async (UserId) => {
	try {
		const result = await axios.get(`${baseUrl}/getbyuserid/${UserId}`);
		return result;
		
	} catch (error) {
		return error;
	}
    // const data = Mahasiswa.find(mahasiswa => mahasiswa.user_id === UserId);
    // return data;
}

const getAllMahasiswaByGroup = (id) => {
    const data = Mahasiswa.filter(mahasiswa => mahasiswa.group_id === id);
    return data;
}

const updateMahasiswaGroup = async (group_id,user_id) => {
	try {
		const result = await axios.patch('https://ccd5-103-108-21-116.ngrok.io/updategroup/1',{
			"group_id":"1",
		});
		console.log(result);
		return result;
	} catch (error) {
		return JSON.stringify(error);
	}
    // let name = "Tidak Ada Kelompok";
    // for (let i = 0; i < Mahasiswa.length; i++) {
    //     if(Mahasiswa[i].user_id === parseInt( user_id)) {
    //         Mahasiswa[i].group_id = id
    //         name = getKelompokNameById(id);
    //     };
    // }
    // return name;
}

const updateMahasiswaData = (user_id,newData) => {
    const idx = Mahasiswa.findIndex(mhs => mhs.user_id === user_id);
    Mahasiswa[idx].nickname = newData.nickName;
    Mahasiswa[idx].address = newData.address;
    Mahasiswa[idx].line = newData.idLine;
    Mahasiswa[idx].about = newData.aboutMe;
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

export {getAllMahasiswa,getMahasiswaByUserId,updateMahasiswaGroup,getAllMahasiswaByGroup,postMahasiswaLogin,updateMahasiswaData,updateMahasiswaPass};