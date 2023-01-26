import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="container mt-5">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Function</th>
            <th>Available To</th>
          </tr>
        </thead>
        <tbody>
      
          <tr>
            <td>
              <Link to="/supervisor"> Supervisor</Link>
            </td>
            <td>Supervisor</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
};

export default Home;
