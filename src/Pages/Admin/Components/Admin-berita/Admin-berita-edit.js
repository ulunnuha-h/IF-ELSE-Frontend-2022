import React,{useState} from "react";
import { Form,Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getBeritaById,editBerita,deleteBerita,togglePublishedBerita } from "../../../../Data/Berita";

const EditBerita = () => {
    const idBerita = parseInt(useParams().id);
    const dataBerita = getBeritaById(idBerita);
    const [content,setContent] = useState(dataBerita.content);
    const [title,setTitle] = useState(dataBerita.title);
    const [image,setImage] = useState(dataBerita.image);
    const [is_published,setIs_published] = useState(dataBerita.is_published);
    const nav = useNavigate();

    const togglePublished = () => setIs_published(togglePublishedBerita(idBerita));

    return(
        <>
        <i className="fa-solid fa-arrow-left ms-4 mt-4 text-dark" onClick={()=>nav(-1)} style={{"cursor":"pointer"}}></i>
        <div className="bg-dark m-2 p-3 m-md-4 p-md-4 text-light">
            <h3>Edit Berita</h3>
            <hr></hr>
            <Form className="px-0 px-md-5" onSubmit={e=>{
                e.preventDefault();
                editBerita(idBerita,{title,image,content});
                setTitle('');
                setImage('');
                setContent('');
                nav('/admin$/berita')
            }}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>title</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan title..." value={title} onChange={e=>setTitle(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicFile">
                    <Form.Label>Gambar</Form.Label>
                    <div className="w-75 m-auto my-2 border border-light">
                        {image !== '' ? <div style={{backgroundImage:`url(${image})`,aspectRatio:'16/9',backgroundSize:'cover'}} alt="editberita"/>
                         : null}
                    </div>
                    <Form.Control type="file" onChange={e=>setImage(e.target.files[0])}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiccontent">
                    <Form.Label>content</Form.Label>
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
                        <Button className="w-auto mx-2" variant="danger" onClick={()=>{nav(-1);deleteBerita(idBerita)}}>Hapus</Button>
                        <Button className="w-auto mx-2" type="submit">Simpan</Button>
                    </span>
                </section>
            </Form>
        </div>
        </>
    );
}

export default EditBerita;