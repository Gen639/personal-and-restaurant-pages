import React, { useState } from "react";

const ContactForm = () => {
  const initialState = {
    name: "",
    email: "",
  };

  const [data, setData] = useState(initialState);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = (event) => {
    if (data.name.length + 1 < 3) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setData({ ...data, [event.target.name]: event.target.value });

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`sending data… ${data.name} ${data.email}`);
    clearState();
  };

  return (
    <div>
      Contact Form
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={data.name}
          onChange={handleInputChange}
          name="name"
        />
        <input
          type="email"
          placeholder="email"
          value={data.email}
          onChange={handleInputChange}
          name="email"
        />
        <button disabled={btnDisabled} type="submit">
          Send
        </button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default ContactForm;
