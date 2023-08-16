import React, { useState } from "react";
import style from "./Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/lucasfigueroab@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {});
    setName("");
    setPhone("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className={style.contactContainer} id="contact">
      <div className={style.marginContact}>
        <h1>
          <span className={style.tags}>#</span>Contact Me
        </h1>
        <form
          className={style.inputs}
          action="https://formsubmit.co/lucasfigueroab@gmail.com"
          method="POST"
        >
          <input
            placeholder="Name"
            className={`${style.input} ${style.name}`}
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`${style.input} ${style.phone}`}
            name="phone"
            type="number"
          ></input>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${style.input} ${style.phone}`}
            name="email"
            type="email"
          ></input>
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${style.input} ${style.msg}`}
            name="message"
            type="text"
          ></textarea>
          <button
            onClick={handleSubmit}
            className={`${style.btnDownload} bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center`}
          >
            <span>Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
