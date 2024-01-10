import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AddContactContainer } from "./AddContact.style";
import {
  useAddContactMutation,
  useContactQuery,
  useUpdateContactMutation,
} from "../../Service/ContactApi";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddContact = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { name, email, contact } = formValue;
  const navigate = useNavigate();
  const { id } = useParams();
  const [addContact] = useAddContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const [editMode, setEditMode] = useState(false);
  const { data, error } = useContactQuery(id);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name && !email && !contact) {
      toast.error("provide values for the fields");
    } else {
      if (!editMode) {
        await addContact(formValue);
        navigate("/");
        toast.success("contact added successfully");
      } else {
        await updateContact(formValue);
        navigate("/");
        setEditMode(false);
        toast.success("contact updated successfully");
      }
    }
  };

  useEffect(() => {
    if (error && id) {
      toast.error("Something Went Wrong");
    }
  }, [error, id]);

  useEffect(() => {
    if (id) {
      setEditMode(true);
      if (data) {
        setFormValue({ ...data });
      }
    } else {
      setEditMode(false);
      setFormValue({ ...initialState });
    }
  }, [id, data]);

  return (
    <AddContactContainer>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name...."
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label className="label" htmlFor="Email">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email......"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label className="label" htmlFor="contact">
            Contact
          </label>
          <input
            type="number"
            placeholder="Enter Contact......"
            name="contact"
            id="contact"
            value={contact}
            onChange={handleChange}
          />
        </div>
        <div className="submit-btn">
          <button type="submit" className="btn">
            {editMode ? "Update Contact" : "Add Contact"}
          </button>
        </div>
      </form>
    </AddContactContainer>
  );
};

export default AddContact;
