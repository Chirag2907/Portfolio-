import React from "react";
import "./ContactPage.css";
import $ from 'jquery';

const ContactPage = (props) => {
  const handleContact2 = (e) => {
    let contact = document.querySelector(".contact");
    if (contact.classList.contains("active-contact")) {
    } else {
      props.func();
    }
  };
  $( '.js-input' ).keyup(function() {
    if( $(this).val() ) {
       $(this).addClass('not-empty');
    } else {
       $(this).removeClass('not-empty');
    }
  });
  return (
    <div>
    <main onClick={handleContact2} className="contact">
        <div className="contact-inner">
          <h1>Contact</h1>
          <span class="content"></span>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            minima.
          </p>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
