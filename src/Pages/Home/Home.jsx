import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useContactsQuery,
  useDeleteContactMutation,
} from "../../Service/ContactApi";
import { HomeContainer } from "./Home.style";

const Home = () => {
  const { data, isLoading, error } = useContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact ?")) {
      await deleteContact(id);
      console.log("ID", id);
      toast.success("contact deleted successfully");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong");
    }
  }, [error]);

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
          {isLoading ? (
            <div className="loader">Loading....</div>
          ) : (
            <tbody>
              {data?.map((item, index) => (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td className="td">{item.name}</td>
                  <td className="td">{item.email}</td>
                  <td className="td">{item.contact}</td>
                  <td className="action td">
                    <Link to={`/addcontact/${item.id}`} className="edit">
                      Edit
                    </Link>
                    <button
                      className="delete"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                    <Link to={`/info/${item.id}`}>
                      <button className="view">View</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </HomeContainer>
  );
};

export default Home;
