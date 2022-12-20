import React, { useContext } from 'react'
import './contact.css'
//import {MdOutlineEmail} from 'react-icons/md'
//import {RiMessengerLine} from 'react-icons/ri'
//import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import { useState } from 'react';
//import emailjs from 'emailjs-com'
import { PersonContext } from '../../App';

const Contact = () => {
  const [
    info,
    setInfo,
    experience,
    setExperience,
    header,
    setHeader,
    education,
    setEducation,
    projects,
    setProjects,
  ] = useContext(PersonContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState("false");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //emailjs.sendForm('service_3fjfb17', 'template_ky1ucaz', form.current, 'user_641J0AWGxx4qcKi835yDq')

    fetch("http://localhost:3001/portfolio/contactme",
      {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          receiverEmail: info.email
        }),
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      })
      .then((data) => data.json())
      .then((json) => {
        if (json.success) {
          setIsSent(true);
        } 
      })

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' value={name} required onChange={e => setName(e.target.value)} />
          <input type="email" name='email' placeholder='Your Email' value={email} required onChange={e => setEmail(e.target.value)} />
          <textarea name="message" rows="7" placeholder='Your Message' value={message} required onChange={e => setMessage(e.target.value)} ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          <span >Succeed!</span>
        </form>
      </div>
    </section>
  )
}

export default Contact