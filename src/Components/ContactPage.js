import React from "react";
import "./ContactPage.css";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = (props) => {
  const notify = () => toast("Thank you for reaching out! :)");

  const nameAlert = () => { toast("Enter your name!") }
  const emailAlert = () => { toast("Enter your email!") }

  const handleContact2 = (e) => {
    let contact = document.querySelector(".contact");
    if (contact.classList.contains("active-contact")) {
    } else {
      props.func();
    }
  };

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMsg, setNewMsg] = useState("");

  const contactCollectionRef = collection(db, "contact");

  const handleSubmit = async () => {
    if (newName === "") {
      console.log("here")
      nameAlert();
      return;
    }
    if (newEmail === "") {
      emailAlert();
      return;
    }
    console.log(newName, newEmail, newMsg);
    await addDoc(contactCollectionRef, {
      name: newName,
      email: newEmail,
      message: newMsg,
    });
    notify();
    setNewEmail("");
    setNewMsg("");
    setNewName("");
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <main onClick={handleContact2} className="contact">
        <h1 className="text-purple-400 mx-auto mt-24 h-16 font-mono">GET IN TOUCH</h1>
        <div action="#" className="space-y-8 mx-auto w-1/3 ">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Name<span className="text-red-400">*</span>
            </label>
            <input
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value);
              }}
              type="text"
              id="name"
              className="textf rounded p-2 text-black w-full"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Email<span className="text-red-400">*</span>
            </label>
            <input
              value={newEmail}
              onChange={(e) => {
                setNewEmail(e.target.value);
              }}
              type="email"
              id="email"
              className="textf rounded p-2 text-black w-full"
              placeholder="Enter your Email ID"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your message
            </label>
            <textarea
              value={newMsg}
              onChange={(e) => {
                setNewMsg(e.target.value);
              }}
              id="message"
              rows="6"
              className="textf rounded p-2 text-black w-full"
              placeholder="Leave me a message..."
            ></textarea>
          </div>
          <div className="w-full submit-button ">
            <button
              onClick={handleSubmit}
              className="button mr-0 p-2 rounded w-24 hover:bg-purple-600 bg-purple-500"
            >
              Submit
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
