import React,{useState,useEffect} from "react";
import { Form,Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getBeritaById,editBerita,deleteBerita} from "../../../../Data/Berita";
import LoadingSpinner from "../../../../Components/Loading/LoadingSpinner";

const EditBerita = () => {
    const idBerita = parseInt(useParams().id);
    const [content,setContent] = useState('');
    const [title,setTitle] = useState('');
    const [preview,setPreview] = useState('');
    const [image,setImage] = useState('');
    const [is_published,setIs_published] = useState(false);
    const [loading,setLoading] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        getBeritaById(idBerita).then((res) => {
            setTitle(res.data?.title || " ");
            setContent(res.data?.content || " ");
            setPreview(res.data?.image || " ");
            setIs_published(res.data?.is_published || false);
        })
    }, [idBerita])

    const handleEdit = e => {
        setLoading(true);
        e.preventDefault();
        editBerita(idBerita,{title,image,content,is_published})
        .then(()=>{
            setTitle('');
            setImage('');
            setContent('');
            setLoading(false);
            alert("Berita berhasil diupdate")
            nav('/admin$-ifelse/berita')
        })
        ;
    }

    const handleDelete = id => {
        deleteBerita(id).then(()=>{
            nav(-1);
            alert('Berita telah terhapus maszeh');
        })
    }

    const changeImage = e => {
        const fsize = Math.round((e.target.files[0].size / 1024));
        if(fsize > 1000) alert("Gambarnya kebesaran, maks 1MB");
        else{
            setImage(e.target.files[0]);
            setPreview(URL.createObjectURL(e.target.files[0]));
        }
    }

    const togglePublished = () => setIs_published(!is_published);

    return(
        <>
        <i className="fa-solid fa-arrow-left ms-4 mt-4 text-dark" onClick={()=>nav(-1)} style={{"cursor":"pointer"}}></i>
        <div className="bg-dark m-2 p-3 m-md-4 p-md-4 text-light rounded">
            <h3>Edit Berita</h3>
            <hr></hr>
            <Form className="px-0 px-md-5" onSubmit={handleEdit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Judul</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan title..." value={title} onChange={e=>setTitle(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicFile">
                    <Form.Label>Gambar</Form.Label>
                    <div className="w-75 m-auto my-2 border border-light">
                        {preview !== '' ? <div style={{backgroundImage:`url(${preview})`,aspectRatio:'16/9',backgroundSize:'cover'}} alt="editberita"/>
                         : null}
                    </div>
                    <Form.Control type="file" onChange={changeImage}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiccontent">
                    <Form.Label>Konten</Form.Label>
                    <Form.Control as="textarea" rows={28} placeholder="Masukkan kepsyen..." value={content} onChange={e=>setContent(e.target.value)} required/>
                </Form.Group>
                <section className="row">
                    <span className="col-6">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={is_published} onChange={togglePublished}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{is_published ? "Published ✔️" : 'Archieved ❌'}</label>
                        </div>
                    </span>
                    <span className="col-6 justify-content-end d-flex p-0">
                        <Button className="w-auto mx-2" variant="secondary" onClick={()=>nav('/admin$/berita')}>Gajadi :(</Button>
                        <Button className="w-auto mx-2" variant="danger" onClick={()=>handleDelete(idBerita)}>Hapus</Button>
                        <Button className="w-auto mx-2" type="submit">{loading ? <LoadingSpinner/> : "Simpan"}</Button>
                    </span>
                </section>
            </Form>
        </div>
        </>
    );
}

export default EditBerita;