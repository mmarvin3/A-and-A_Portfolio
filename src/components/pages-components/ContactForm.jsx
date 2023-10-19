
// import { Button } from "@mui/material";
import React from "react";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const contactInfo = []


const ContactForm = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEMail] = useState('')
    const [message, setMessage] = useState('')
    const [submissionName, setSubmissionName] = useState('')


    const form = useRef()
    console.log('This is form', form)

    const handleSubmit = (e) => {
        e.preventDefault()

        setSubmissionName(firstName)


        // Need to update the following with keys
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div>
            <p>Form</p>
            {/* <TextField/>clar
            <Button>Submit</Button> */}
            <form class="px-4 py-3" ref={form} onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label>
                        First Name:<input
                            type="text"
                            class="form-control"
                            name="firstName"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}></input>
                    </label>
                    <label>
                        Last Name:<input
                            type="text"
                            class="form-control"
                            name="lastName"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}></input>
                    </label>
                    <label>
                        E-mail:<input
                            type="email"
                            class="form-control"
                            name="eMail"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEMail(e.target.value)}></input>
                    </label>
                    <label>
                        Message:<input
                            type="text"
                            class="form-control"
                            name="message"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}></input>
                    </label>
                    {/* <label>Last Name:<input type="text"></input></label>
                <label>E-mail:<input type="text"></input></label> */}
                    <button type="submit" >Submit</button>
                </div>
            </form>
            Your name is {firstName !== '' && <p>{submissionName}.</p>}
        </div>
    )

}


export default ContactForm;