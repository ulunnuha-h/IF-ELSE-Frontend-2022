import React,{useState} from "react";
import { Form,Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getBeritaById,editBerita } from "../../../../Data/Berita";

const EditBerita = () => {
    const params = useParams();
    const dataBerita = getBeritaById(parseInt(params.id));
    const [caption,setCaption] = useState(dataBerita.caption);
    const [judul,setJudul] = useState(dataBerita.judul);
    const [img,setImg] = useState(dataBerita.img);
    const nav = useNavigate();

    return(
        <div className="bg-dark m-4 p-4 text-light">
            <h3>Tambah Berita Baru</h3>
            <hr></hr>
            <Form className="px-5" onSubmit={e=>{
                e.preventDefault();
                editBerita(params.id,{judul,img,caption});
                setJudul('');
                setImg('');
                setCaption('');
                nav('/admin$/berita')
            }}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Judul</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan judul..." value={judul} onChange={e=>setJudul(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicFile">
                    <Form.Label>Gambar</Form.Label>
                    <div className="w-75 m-auto my-2 border border-light">
                        {img !== '' ? <img src={img} alt="gambarBerita" className="img-fluid"></img> : null}
                    </div>
                    <Form.Control type="file" onChange={e=>setImg(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCaption">
                    <Form.Label>Caption</Form.Label>
                    <Form.Control as="textarea" rows={28} placeholder="Masukkan kepsyen..." value={caption} onChange={e=>setCaption(e.target.value)} required/>
                </Form.Group>
                <section className="d-flex justify-content-end">
                    <Button className="mx-2" variant="secondary" onClick={()=>nav('/admin$/berita')}>Gajadi :(</Button>
                    <Button className="mx-2">Preview</Button>
                    <Button className="mx-2" type="submit">Simpan</Button>
                </section>
            </Form>
        </div>
    );
}

export default EditBerita;