import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  function Valid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === "") {
      setMessage("Please enter your name");
      setMessageType("error");
      return;
    }

    if (email.trim() === "" || !Valid(email)) {
      setMessage("Please enter a valid email");
      setMessageType("error");
      return;
    }

    setMessage(`Welcome, ${name}. Your form was submitted successfully.`);
    setMessageType("success");

    setName("");
    setEmail("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:{" "}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
        {message && (
          <p
            style={{
              color: messageType === "error" ? "red" : "green",
              fontWeight: "bold",
            }}
          >
            {message}
          </p>
        )}
      </form>
    </>
  );
}

export default FormData;
