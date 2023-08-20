import React from "react";
import Navi from "./navi";

function Contact() {
    return (
        <div>
            <Navi />
            <h1>Contact Me</h1>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your name.." />
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="Your email.." />
                <label for="subject">Message:</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Contact;