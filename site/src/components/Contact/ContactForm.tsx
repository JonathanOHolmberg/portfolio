"use client";

import { useState } from "react";

const ContactForm = () => {

    const [formState, setFormState] = useState<{
        name: string;
        email: string;
        message: string;
    }>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };
    
    return (
    <form action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_W3FORMS_ACCESS_KEY} />
      <label htmlFor="name">Name *</label>
      <input type="text" name="name" value={formState.name} onChange={handleChange} required min={3} autoComplete="name" />
      <label htmlFor="email">Email *</label>
      <input type="email" name="email" value={formState.email} onChange={handleChange} required autoComplete="email" />
      <label htmlFor="message">Message *</label>
      <textarea name="message" value={formState.message} onChange={handleChange} required minLength={3} autoComplete="off" />
      <input type="hidden" name="redirect" value="http://localhost:3000/contact/success" />
      <button type="submit">Submit Form</button>
    </form>
  );
};

export default ContactForm;
