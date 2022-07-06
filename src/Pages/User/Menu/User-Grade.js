import React from "react";

const UserGrade = () => {
    return(
        <div className="py-5 px-3">
            <table className="table table-hover">
                <thead className="bg-primary">
                    <tr>
                        <th scope="col-1">No</th>
                        <th scope="col-12">Task Name</th>
                        <th scope="col-1">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserGrade;