import { useState } from "react";
import Messages from "./messages";

function FormData() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
    
  const [form, setForm] = useState({
        name: "",
        email: "",
        age: ""
    });
    
  function Valid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.name.trim() === "") {
      setMessage("Please enter your name");
      setMessageType("error");
      return;
    }

    if (form.email.trim() === "" || !Valid(form.email)) {
      setMessage("Please enter a valid email");
      setMessageType("error");
      return;
    }

    if (form.age < 18) {
        setMessage("You must be at least 18 years old to submit this form ");
        setMessageType("error");
        return;
    }

    setMessage(`Welcome, ${form.name}. Your form was submitted successfully.`);
    setMessageType("success");

    setForm.name({
        name: "",
        email: "",
        age: ""
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({
                ...form,
                name: e.target.value })}
          />
        </label>
        <br />
        <label>
          Email:{" "}
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({
                ...form,
                email: e.target.value })}
          />
        </label>
        <br />
        <label>
          Age:{" "}
          <input
            type="number"
            value={form.age}
            onChange={(e) => setForm({
                ...form,
                age: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
 
        <Messages message={message} messageType={messageType}/>

      </form>
    </>
  );
}

export default FormData;
