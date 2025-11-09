   import { useState } from 'react';

   function Contact() {
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: ''
     });
      const [sent, setSent] = useState(false);

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       alert('Form submitted!');
        setSent(true);
    setTimeout(() => setSent(false), 2500);
     };

     return (
       <div style={{ padding: '20px' }}>
         <h1>Contact Us</h1>
         <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
           <input
             type="text"
             name="name"
             placeholder="Your Name"
             value={formData.name}
             onChange={handleChange}
             style={{ display: 'block', width: '100%', padding: '10px', margin: '10px 0', borderRadius: 6, border: '1px solid #ccc' }}
           />
           <input
             type="email"
             name="email"
             placeholder="Your Email"
             value={formData.email}
             onChange={handleChange}
             style={{ display: 'block', width: '100%', padding: '10px', margin: '10px 0', borderRadius: 6, border: '1px solid #ccc' }}
           />
           <textarea
             name="message"
             placeholder="Your Message"
             value={formData.message}
             onChange={handleChange}
             style={{ display: 'block', width: '100%', padding: '10px', margin: '10px 0', borderRadius: 6, border: '1px solid #ccc' }}
           />
           <button type="submit" style={{ padding: '10px 16px', borderRadius: 6, border: 'none', cursor: 'pointer', background: '#111', color: '#fff' }}>
            Send Message</button>
            {sent && <div style={{ marginTop: 12, color: 'green' }}>Form submitted — thanks!</div>}
         </form>
       </div>
     );
   }

   export default Contact;