import React, { useState } from "react";

const ReserveForm = () => {
  const [data, setData] = useState({
    name: "",
    date: "",
  });
  const handleInputChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });

    // const { name, value } = event.target;
    // setData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Sending data...${data.name}, ${data.date}`);
    clearState();
  };

  const initialState = {
    name: "",
    date: "",
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  return (
    <>
      <h2>Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={data.name}
          onChange={handleInputChange}
          name="name"
        />
        <input
          type="date"
          placeholder="date"
          value={data.date}
          onChange={handleInputChange}
          name="date"
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default ReserveForm;
