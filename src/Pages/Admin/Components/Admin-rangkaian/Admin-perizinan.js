import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { getPerizinanDay } from "../../Data/Perizinan";
import {PerizinanDetail} from "./Admin-perizinan-detail";

const Perizinan = () => {
    const [rangkaian,setRangkaian] = useState(1);
    const [id,setId] = useState(1);
    const datas = getPerizinanDay(rangkaian);
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);

    const detailHandle = (id) =>{
        setId(id);
        setShow(true);
    }
    
    return(
        <div>
            <PerizinanDetail handleClose={handleClose} show={show} rangkaian={rangkaian} id={id}/>
            <ul className="nav nav-tabs mb-2">
              <li className="nav-item">
                <span className={rangkaian === 1 ? "nav-link active":"nav-link"} style={{"cursor":"pointer"}} onClick={()=>setRangkaian(1)}>Rangkaian 1</span>
              </li>
              <li className="nav-item">
                <span className={rangkaian === 2 ? "nav-link active":"nav-link"} style={{"cursor":"pointer"}} onClick={()=>setRangkaian(2)}>Rangkaian 2</span>
              </li>
              <li className="nav-item">
                <span className={rangkaian === 3 ? "nav-link active":"nav-link"} style={{"cursor":"pointer"}} onClick={()=>setRangkaian(3)}>Rangkaian 3</span>
              </li>
            </ul>
            <Table striped bordered hover responsive variant="dark">
                  <thead>
                    <tr>  
                      <th>Nama</th>
                      <th>Kepentingan</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                  {datas.map((data,idx)=>
                    <tr key={idx}>
                      <td>{data.nama}</td>
                      <td>{data.kepentingan}</td>
                      <td><Button onClick={()=>detailHandle(idx)} className="w-100">Detail</Button></td>
                    </tr>
                  )}
                  </tbody>
            </Table>
        </div>
    );
}

export default Perizinan;