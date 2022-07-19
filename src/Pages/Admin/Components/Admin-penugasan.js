import React from "react";
import Table from "react-bootstrap/esm/Table";

const AdminPenugasan = () => {
    return(
        <div className="m-4 p-4 bg-light">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="m-0">List Penugasan</h3>
                <button className="btn btn-primary">Tambah tugas</button>
            </div>
            
            <Table striped bordered hover responsive>
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
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
            </Table>
        </div>
    );
}

export default AdminPenugasan;