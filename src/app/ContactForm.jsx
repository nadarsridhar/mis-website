// // src/components/ContactForm.jsx
// 'use client'
// import { useRef,useState } from 'react'
// import emailjs from '@emailjs/browser'
// import config from "./config.json"
// import ReCAPTCHA from "react-google-recaptcha";
// import toast from "react-hot-toast"

// export default function ContactForm() {
//  const captchaRef=useRef(null)
//  const [isVerified, setisVerified] = useState(false)
//  const handleCaptcha = (value) =>{
//   if(value){
//     setisVerified(true)
//   }
//  }
//  const handleSubmit = async (e) => {
//   e.preventDefault()
//    const token = captchaRef.current.getValue();
//     if (!token) {
//       alert("Please complete the CAPTCHA");
//       return;
//     }

//     // ✅ Proceed with your form submission (e.g., EmailJS)
//     alert("Form submitted successfully!");

//     // reset captcha after submission
//     captchaRef.current.reset();
//     setIsVerified(false);
//  }




//   const form = useRef()
//   const sendEmail = (e) => {
//     e.preventDefault()

//     emailjs.sendForm(
//       config.SERVICE_ID,     // Replace with your actual Service ID
//       config.TEMPLATE_ID,    // Replace with your actual Template ID
//       form.current,
//       config.PUBLIC_KEY      //Replace with your actual Public Key
//     )
//     .then((result) => {
//       console.log(result.text)
//       alert('✅ Message sent successfully!')
//     })
//     .catch((error) => {
//       console.error(error.text)
//       alert('❌ Failed to send message. Try again later.')
//     })

//     e.target.reset()
//   }
//   const handleFormsubit = (e)=>{
//     e.preventDefault();
//     sendEmail();
//     handleSubmit()
//   }

//   return (
//     <form ref={form} onSubmit={handleFormsubit} className="space-y-6">
//     <div className="flex flex-col md:flex-row gap-4 pb-7">
//       <input
//         required
//         type="text"
//         name="name"
//         placeholder="Your Name"
//         className="w-full bg-blue-50 text-black rounded-lg px-6 py-3 outline-blue-700"
//       />
//       <input
//         type="text"
//         placeholder="Surname"
//         name="surname"
//         className="w-full bg-blue-50 text-black rounded-lg px-6 py-3 outline-blue-700 " />
//         </div>
//         <input
//             required
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             className="w-full bg-blue-50 text-black rounded-lg px-6 py-3 outline-blue-700"
            
//         />
        
//             {/* Select Service */}
//             <div className='flex flex-col '>
//         <select
//             required
//             name="service"
//             className="mt-10 bg-blue-50 text-black rounded-lg px-6 py-3 outline-blue-700"
//         >
//             <option value="">-- Our products --</option>
//             <option value="ContactIQ">ContactIQ</option>
//             <option value="Market Data">Market Data</option>
//         </select>

//         {/* Query Type */}
//         <select
//             required
//             name="query_type"
//             className="max-w-full mt-10 bg-blue-50 text-black rounded-lg px-6 py-3 outline-blue-700"
//         >
//             <option value="">-- Query --</option>
//            <option value="GENERAL_INQUIRY">General Inquiry</option>
//             <option value="TECHNICAL_SUPPORT">Technical Support</option>
//             <option value="BILLING">Billing</option>
//             <option value="FEEDBACK">Feedback</option>
//             <option value="SALES">Sales</option>
//             <option value="PARTNERSHIP">Partnership</option>
//             <option value="COMPLAINT">Complaint</option>
//             <option value="OTHER">Other</option>
//         </select>
//         </div>
//       <textarea
//         required
//         name="message"
//         placeholder="Your Message"
//         className="w-full bg-blue-50 text-black rounded-lg  outline-blue-700 resize-none mt-10 p-5"
//       />
//         <ReCAPTCHA
//         sitekey="6LfR6JorAAAAAEdOExC6gU5iNDJugxt-Kk1X7aSu"
//         ref={captchaRef}
//         onChange={handleCaptcha}
//       />
      
//       <button
//         type="submit"
//         className="bg-coral-500 text-white px-6 bg-blue-700 py-3 mt-5 rounded-lg hover:bg-coral-600 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium0"
//       >
//         Send Message
//       </button>
    
//     </form>
//   )
// }
'use client'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import config from "./config.json"
import ReCAPTCHA from "react-google-recaptcha";
import toast from "react-hot-toast";

export default function ContactForm() {
  const form = useRef();
  const captchaRef = useRef(null);
  const [isVerified, setIsVerified] = useState(false);

  const handleCaptcha = (value) => {
    if (value) setIsVerified(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = captchaRef.current.getValue();
    if (!token) {
      toast.error("⚠️ Please complete the CAPTCHA.");
      return;
    }

    try {
      await emailjs.sendForm(
        config.SERVICE_ID,
        config.TEMPLATE_ID,
        form.current,
        config.PUBLIC_KEY
      );
      toast.success("✅ Message sent successfully!");
      form.current.reset();
      captchaRef.current.reset();
      setIsVerified(false);
    } catch (error) {
      toast.error("❌ Failed to send message. Try again later.");
      console.error(error);
    }
  }

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
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
          className="w-full bg-blue-50 text-black rounded-lg px-6 py-3 outline-blue-700"
        />
      </div>

      <input
        required
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full bg-blue-50 text-black rounded-lg px-6 py-3 outline-blue-700"
      />

      {/* Select Service */}
      <div className='flex flex-col'>
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
        className="w-full bg-blue-50 text-black rounded-lg outline-blue-700 resize-none mt-10 p-5"
      />
      <div className=' '>
      <ReCAPTCHA className="mt-5"
        sitekey={config.RECAPTCHA_SITE_KEY}
        ref={captchaRef}
        onChange={handleCaptcha}
     
      />
      </div>

      <button
        type="submit"
        className="bg-blue-700 text-white px-6 py-3 mt-5 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium"
      >
        Send Message
      </button>
    </form>
  );
}

