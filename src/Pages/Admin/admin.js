import React from "react";

const Admin = () => {
  return (
    <div className="grid" style={{ "height": "100vh" }}>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark col-sm-2" style={{ "height": "100%" }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <h1>HALO</h1>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Customers
            </a>
          </li>
        </ul>
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
