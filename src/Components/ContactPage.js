import React from "react";
import "./ContactPage.css";

const ContactPage = (props) => {
  const handleContact2 = (e) => {
    let contact = document.querySelector(".contact");
    if (contact.classList.contains("active-contact")) {
    } else {
      props.func();
    }
  };
  return (
    <div>
      <main onClick={handleContact2} className="contact">
        <h1 className="text-purple-400 mx-auto mt-24 h-16">GET IN TOUCH</h1>
        <form action="#" class="space-y-8 mx-auto w-1/3 ">
          <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name<span className="text-red-400">*</span></label>
              <input type="text" id="name" class="textf rounded p-2 text-black w-full" placeholder="Enter your name" required />
          </div>
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email<span className="text-red-400">*</span></label>
              <input type="email" id="email" class="textf rounded p-2 text-black w-full" placeholder="Enter your Email ID" required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your message</label>
              <textarea id="message" rows="6" class="textf rounded p-2 text-black w-full" placeholder="Leave me a message..."></textarea>
          </div>
         <button className="border p-2 rounded w-24 hover:bg-purple-600 bg-purple-500">Submit</button>
      </form>
      </main>
    </div>
  );
};

export default ContactPage;
