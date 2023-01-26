import React from "react";
import NavBar from "../components/NavBar";
import users from "../data/Users.json";
import { Link } from "react-router-dom";
const Supervisor = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container">
        <div className="form-control mt-3 bg-dark text-white">FSM</div>
        <br></br>
        <Link to="/newchap" className="btn btn-outline-success form-control">
          Add New Supervisor
        </Link>
        <br></br> <br></br>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>

              <th scope="col">Supervisor name</th>
              <th scope="col">E-mail</th>

              <th scope="col">Phone No</th>
              <th scope="col">Status</th>
              <th scope="col">
                <center>Action</center>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <>
                  <tr className="align-middle">
                    <th scope="row">{item.id}</th>

                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.status}</td>

                    <td>
                      <Link
                        to="/editchap"
                        className="btn btn-outline-primary form-control"
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <Link
                        to="/deletechap"
                        className="btn btn-outline-danger form-control"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default Supervisor;
