import React from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";

const KelompokDetail = () => {
    const nav = useNavigate();
    return(
        <>
            <i 
                className="fa-solid fa-arrow-left ms-4 mt-4 text-dark" 
                onClick={()=>nav("/admin/kelompok")}
                style={{"cursor":"pointer"}}
                ></i>
            <div className="m-4 p-4 bg-dark text-light">
                <div className="d-flex justify-content-between align-items-start">
                    <section><h3>Nama Kelompok : Debian Edu</h3>Link grup : 02912391230</section>
                    <button className="btn btn-primary px-5">Edit</button>
                </div>
                <hr></hr>
                <section>
                    <span className="h5">Pendamping</span>
                    <section>Nama : Uchiha Sasuke</section>
                    <section>Line : sasukeimot</section>
                    <section>WA : 09188238831</section>
                </section>
            </div>
            <div className="m-4 p-4 bg-dark text-light">
                <h3>Data Mahasiswa Kelompok 123</h3>
                <Table striped bordered hover responsive variant="dark">
                      <thead>
                        <tr>  
                          <th>ID</th>
                          <th>Nama Kelompok</th>
                          <th>Pendamping</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-3">1</td>
                          <td className="py-3">Mark</td>
                          <td className="py-3">Otto</td>
                          <td><button className="btn btn-primary w-100" onClick={()=>nav('123')}>Detail</button></td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                      </tbody>
                </Table>
            </div>
        </>
    );
}

export default KelompokDetail;