// src/components/ContactForm.jsx
'use client'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import config from "./config.json"

export default function ContactForm() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      config.SERVICE_ID,     // Replace with your actual Service ID
      config.TEMPLATE_ID,    // Replace with your actual Template ID
      form.current,
      config.PUBLIC_KEY      //Replace with your actual Public Key
    )
    .then((result) => {
      console.log(result.text)
      alert('✅ Message sent successfully!')
    })
    .catch((error) => {
      console.error(error.text)
      alert('❌ Failed to send message. Try again later.')
    })

    e.target.reset()
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-6">
    <div className="flex flex-col md:flex-row gap-4 pb-7">
      <input
        required
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full bg-blue-50 text-black rounded-lg px-6 py-3 outline-blue-700"
      />
      <input
        type="text"
        placeholder="Surname"
        name="surname"
        className="w-full bg-blue-50 text-black rounded-lg px-6 py-3 outline-blue-700 " />
        </div>
        <input
            required
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full bg-blue-50 text-black rounded-lg px-6 py-3 outline-blue-700"
            
        />
        
            {/* Select Service */}
            <div className='flex flex-col '>
        <select
            required
            name="service"
            className="mt-10 bg-blue-50 text-black rounded-lg px-6 py-3 outline-blue-700"
        >
            <option value="">-- Our products --</option>
            <option value="ContactIQ">ContactIQ</option>
            <option value="Market Data">Market Data</option>
        </select>

        {/* Query Type */}
        <select
            required
            name="query_type"
            className="max-w-full mt-10 bg-blue-50 text-black rounded-lg px-6 py-3 outline-blue-700"
        >
            <option value="">-- Query --</option>
           <option value="GENERAL_INQUIRY">General Inquiry</option>
            <option value="TECHNICAL_SUPPORT">Technical Support</option>
            <option value="BILLING">Billing</option>
            <option value="FEEDBACK">Feedback</option>
            <option value="SALES">Sales</option>
            <option value="PARTNERSHIP">Partnership</option>
            <option value="COMPLAINT">Complaint</option>
            <option value="OTHER">Other</option>
        </select>
        </div>
      <textarea
        required
        name="message"
        placeholder="Your Message"
        className="w-full bg-blue-50 text-black rounded-lg  outline-blue-700 resize-none mt-10 p-5"
      />
      <button
        type="submit"
        className="bg-coral-500 text-white px-6 bg-blue-700 py-3 mt-5 rounded-lg hover:bg-coral-600 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium0"
      >
        Send Message
      </button>
    
    </form>
  )
}
