import React from "react";
import { PerizinanList } from "./Admin-rangkaian/Admin-perizinan-list";
import RangkaianList from "./Admin-rangkaian/Admin-rangkaian-list";

const AdminRangkaian = () => {
    return(
        <>
            <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light rounded">
                <RangkaianList/>
            </div>
            <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light h-100 rounded">
                <div className="d-flex justify-content-between mb-3">
                    <h3 className="m-0">List Perizinan</h3>
                </div>
                <PerizinanList/>
            </div>
        </>
    );
}

export default AdminRangkaian;