import React,{useState} from "react";
import { Form,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addBerita } from "../../../../Data/Berita";

const TambahBerita = () => {
    const [content,setContent] = useState('');
    const [title,setTitle] = useState('');
    const [image,setImage] = useState('');
    console.log(image);
    const nav = useNavigate();

    return(
        <>
        <i className="fa-solid fa-arrow-left ms-4 mt-4 text-dark" onClick={()=>nav(-1)} style={{"cursor":"pointer"}}></i>
        <div className="bg-dark m-2 p-3 m-md-4 p-md-4 text-light">
            <h3>Tambah Berita Baru</h3>
            <hr></hr>
            <Form className="px-0 px-md-5" onSubmit={e=>{
                e.preventDefault();
                addBerita({title,image,content});
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
                    <Form.Control type="file" onChange={e=>setImage(URL.createObjectURL(e.target.files[0]))} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasiccontent">
                    <Form.Label>content</Form.Label>
                    <Form.Control as="textarea" rows={28} placeholder="Masukkan kepsyen..." value={content} onChange={e=>setContent(e.target.value)} required/>
                </Form.Group>
                <section className="justify-content-center justify-content-md-end row">
                    <Button className="m-2 col-5 col-md-2" variant="secondary" onClick={()=>nav('/admin$/berita')}>Gajadi :(</Button>
                    <Button className="m-2 col-5 col-md-2" type="submit">Simpan</Button>
                </section>
            </Form>
        </div>
        </>
    );
}

export default TambahBerita;