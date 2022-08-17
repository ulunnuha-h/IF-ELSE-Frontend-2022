import axios from "axios";
import { baseUrl } from "../Config/Auth";

let Berita = [{
    id : 1234124,
    title : 'SELAMAT HARI RAYA IDUL ADHA 1443 H',
    content : `
Takbir berkumandang, pertanda hari kemenangan telah datang.
    
Halo Informatics 👋🏻!

Kami segenap keluarga besar IF ELSE 2022 mengucapkan Selamat Hari Raya Idul Adha 1443 H.
Semangat berkurban untuk kita semua. Semoga Idul Adha tahun ini Allah SWT memberikan banyak keberkahan dan menjadi pengingat untuk memperkuat keimanan dan kemanusiaan kita. Selamat Hari Raya Idul Adha 🙏.

Pantau terus linimasa kami!
LINE : @ifelsefilkomub
INSTAGRAM : @ifelsefilkomub
YOUTUBE : ifelse.filkom.ub.ac.id/youtube
WEB : ifelse.filkom.ub.ac.id

==========================================
Departemen Pengembangan Sumber Daya Manusia
Eksekutif Mahasiswa Informatika UB 2022
Kabinet Bratacahya
#MakeANewStoryWithYourNewFamily
#ifelse2022
#BersatuDalamCahaya
#SatuPaduInformatika`,
    image : 'https://placekitten.com/2160/1440',
    published_at : '12 Agustus 2006',
    is_published : true,
    created_at : "12 Agustus 2006",
    updated_at : "13 Agustus 2006"
}

]

const addBerita = async (newBerita) => {
    // const now = Date().toString();
    // Berita.push({id : Date.now() , ...newBerita,published_at:now,is_published:true});

    const formData = new FormData();
    formData.append("Judul", newBerita.title);
    formData.append("Gambar", newBerita.image);
    formData.append("Konten", newBerita.content);

    console.log([...formData])

    try {
        const result = await axios.post(`${baseUrl}/api/admin/news`, formData)
        console.log(result);
    } catch (error) {
        return error;
    }
}

const deleteBerita = async (id) => {
    // const idx = Berita.findIndex(berita=>berita.id === id);
    // Berita.splice(idx,1);

    try {
        const result = await axios.delete(`${baseUrl}/api/admin/news/${id}`);
        return result
    } catch (error) {
		return error;
	}
}

const getBeritaById = async (id) => {
    // const beritaById = Berita.find(berita => berita.id === id);
    // return beritaById;

    try {
		const result = await axios.get(`${baseUrl}/api/admin/news/${id}`);
		return result;
	} catch (error) {
		return error;
	}
}

const editBerita = async (id,newBerita) => {
    const formData = new FormData();
    formData.set("Judul", newBerita.title);
    formData.set("Gambar", newBerita.image);
    formData.set("Konten", newBerita.content);

    console.log([...formData])

    try {
        const result = await axios.put(`${baseUrl}/api/admin/news/${id}`, formData)
        return result;
    } catch (error) {
        return error;
    }

    // const idx = Berita.findIndex(berita=>berita.id === id);
    // Berita[idx].title = newBerita.title;
    // Berita[idx].content = newBerita.content;
    // Berita[idx].image = URL.createObjectURL(newBerita.image);
}

const getAllBerita = async () => {
    try {
        const result = await axios.get(`${baseUrl}/api/admin/news`);
        return result;
    } catch (error) {
        return error
    }

    // if(key === undefined) return Berita;
    // const filtered = Berita.filter(data => data.title.toLowerCase().indexOf(key.toLowerCase()) !== -1);
    // return filtered;
}

const getBeritaTerbaru = (key) => {
    // try {
    //     const result = await axios.get(`${baseUrl}/api/admin/news`);
    //     return result;
    // } catch (error) {
    //     return error
    // }

    const filtered = Berita.filter(data => data.is_published === true);
    return filtered.slice(0,4);
}

const togglePublishedBerita = (id) => {
    const idx = Berita.findIndex(data => data.id === id);
    Berita[idx].is_published = !Berita[idx].is_published;
    return Berita[idx].is_published;
}

export {addBerita,getAllBerita,getBeritaById,editBerita,deleteBerita,getBeritaTerbaru,togglePublishedBerita};