import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContactQuery } from "../../Service/ContactApi";
import { InfoContainer } from "./Info.style";

const Info = () => {
  const { id } = useParams();
  const { data, error } = useContactQuery(id);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong!");
    }
  }, [error]);

  return (
    <InfoContainer>
      <div className="info-card">
        <div className="card-top">
          <h2>Contact Detail</h2>
        </div>
        <div className="card-body">
          <div className="card-data">
            <h2>ID:</h2>
            <h4>{id}</h4>
          </div>
          <div className="card-data">
            <h2>ID:</h2>
            <h4>{data && data.name}</h4>
          </div>
          <div className="card-data">
            <h2>ID:</h2>
            <h4>{data && data.email}</h4>
          </div>
          <div className="card-data">
            <h2>ID:</h2>
            <h4>{data && data.contact}</h4>
          </div>
        </div>
        <div className="card-btn">
          <button onClick={() => navigate("/")}>Go Home</button>
        </div>
      </div>
    </InfoContainer>
  );
};

export default Info;
