import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useContactsQuery } from "../../Service/ContactApi";
import { HomeContainer } from "./Home.style";

const Home = () => {
  const { data, isLoading, error } = useContactsQuery();
  return (
    <HomeContainer>
      <div className="top-link">
        <Link to="/addcontact">Add Contact</Link>
      </div>
      <div className="main">
        <table className="table">
          <thead className="table-head">
            <tr>
              <th className="th">No</th>
              <th className="th">Name</th>
              <th className="th">Email</th>
              <th className="th">Contact</th>
              <th className="th">Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <h2 className="loader">Loading....</h2>
            ) : (
              <>
                {data?.map((item, index) => (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td className="td">{item.name}</td>
                    <td className="td">{item.email}</td>
                    <td className="td">{item.contact}</td>
                    <td className="action td">
                      <Link to={`/edit/${item.id}`} className="edit">
                        Edit
                      </Link>
                      <button className="delete">Delete</button>
                      <Link to={`/info/${item.id}`}>
                        <button className="view">View</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </HomeContainer>
  );
};

export default Home;
