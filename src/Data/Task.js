import { updateStudentTaskData,deleteStudentTaskData } from "./StudentTask";
import axios from "axios";
import { baseUrl } from "../Config/Auth";

const Tasks = [
    {
        id:91238741,
        title:"Discover Your Journey (DISNEY)",
        description:`
Halo Informatics 👋🏻
Sebagai seorang mahasiswa tentunya kalian harus lebih mengenal diri kalian dan juga mulai merancang kehidupan perkuliahan seperti apa yang ingin kalian jalani. Nah, untuk membantu kalian, telah disediakan penugasan DISNEY (Discover Your Journey), yaitu pembuatan video yang berisi perkenalan dan deskripsi diri yang didapatkan dari hasil tes kepribadian melalui website di bawah ini 👇👇

https://www.16personalities.com/id/tes-kepribadian

Setelah itu, lanjut dengan penjelasan mengenai alasan masuk Teknik Informatika UB serta target-target yang ingin dicapai sesuai dengan roadmap yang telah dibuat. Roadmap tersebut digambar di kertas, PPT atau platform lainnya yang di dalamnya berisi target jangka pendek dan jangka panjang.
.
Masih belum paham sepenuhnya? Jangan khawatir, kami telah menyediakan contoh pengerjaannya di postingan video kami. Untuk ketentuan beserta tata cara penugasan terdapat di website IF ELSE 2021. Simak baik-baik ya!

Untuk info lebih lanjut mengenai DISNEY bisa diakses pada Website IF ELSE 2021 👇

http://ifelse.filkom.ub.ac.id/

Untuk info lebih lanjut tetap pantau terus linimasa dan sosial media kami di

LINE : @ifelsefilkomub
INSTAGRAM : ifelsefilkomub
YOUTUBE : IF ELSE FILKOM UB
WEBSITE : ifelse.filkom.ub.ac.id

==================================
Departemen Pengembangan Sumber Daya Manusia
Eksekutif Mahasiswa Informatika UB 2021
Kabinet Lentera

#ifelse2021
#SatuPaduInformatika
#KnowYourHomeGrowYourZone
#BeFearlessToExploreLoveBringsYouHome`,
        condition:'Buat Video yang menarik',
        step :'Rekam, Edit, Upload',
        end_at:"2022-09-07T23:59",
        fields: [
            "Link Instagram"
        ]
    }
]

const getTaskById = async(id)=> {
    try {
		const result = await axios.get(`${baseUrl}/api/admin/task/${id}`);
		return result;
	} catch (error) {
		return error;
	}
    // const task = Tasks.find(task=> task.id === id);
    // return task;
}

const getAllTask = async() => {
    try {
		const result = await axios.get(`${baseUrl}/api/admin/task`);
		return result;
	} catch (error) {
		return error;
	}
    // return Tasks;
}

const addTask = (newTask) => {
    // try {
	// 	const result = await axios.post(`${baseUrl}/api/admin/task/${id}`);
	// 	return result;
	// } catch (error) {
	// 	return error;
	// }
    const id = Date.now();
    Tasks.push({id,...newTask})
    updateStudentTaskData(id);
}

const deleteTask = (id) => {
    const idx = Tasks.findIndex(task => task.id === id);
    Tasks.splice(idx,1);
    deleteStudentTaskData(id);
    // try {
	// 	const result = await axios.delete(`${baseUrl}/api/admin/task/${id}`);
	// 	return result;
	// } catch (error) {
	// 	return error;
	// }
}

const editTask = (id,newTask) => {
    // try {
	// 	const result = await axios.put(`${baseUrl}/api/admin/task/${id}`);
	// 	return result;
	// } catch (error) {
	// 	return error;
	// }
    const idx = Tasks.findIndex(task => task.id === id);
    Tasks[idx] = {id,...newTask};
}

export {getTaskById,getAllTask,addTask,editTask,deleteTask};
