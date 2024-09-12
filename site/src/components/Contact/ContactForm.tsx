"use client";

import { useState } from "react";
import type { FormEvent } from "react";
  
  const ContactForm: React.FC = () => {
  
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    
    
    
    const handleSubmission = (e: FormEvent) => {
        e.preventDefault()
        setName("");
        setEmail("");
        setMessage("");
        console.log("jee")
    }
  
    return (
    <form onSubmit={(e) => handleSubmission(e)}>
        <label>
            I&apos;m interested in
        </label>
        <select>
            <option>Development</option>
            <option>Digital Art</option>
            <option>Other</option>
        </select>
        <label>Name *</label>
        <input
            name="name"
            type="text"
            autoComplete="name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            min={3} />
        <label>Email *</label>
        <input
            name="email"
            type="email"
            autoComplete="email"
            required 
            onChange={(e) => setEmail(e.target.value)}
            value={email} />
        <label>Message *</label>
        <textarea
            name="message"
            autoComplete="off"
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            minLength={3} />
        <button>Submit</button>
    </form>
    );
  };
  
  export default ContactForm;