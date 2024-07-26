import * as React from 'react';

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Merci de nous avoir contacté!')
  };

  return (
    <section id="contact" className="bg-black text-white p-5">
      <div className="flex flex-col justify-center items-center py-32">
        <h1 className="text-center text-2xl lg:text-3xl font-bold my-3">Nous contacter</h1>
        <form id="contactForm" className='my-11 min-h-96 p-6 lg:p-5 w-full lg:w-2/5 bg-zinc-900 rounded-lg flex flex-col items-center' onSubmit={handleSubmit}>
            <label htmlFor="" className='my-2'>Nom</label>
            <input name="name" placeholder="John" className="text-white bg-black min-h-12 p-3 rounded-lg w-full"></input>
            <label htmlFor="" className='my-2'>Email</label>
            <input name="email" placeholder="example@gmail.com" className="text-white bg-black min-h-12 p-3 rounded-lg w-full">
            </input>
            <label htmlFor="" className='my-2'>Votre message</label>
            <textarea placeholder="Votre message" name='message' className="min-h-56 rounded-lg bg-black p-3 text-white w-full"></textarea>
            <br />
            
            <br />
            <button className='p-3 rounded-lg bg-black text-white' type="submit" form="contactForm" style={{marginTop: '20px', marginBottom: '10px', marginLeft:'60px', marginRight:'60px'}}>Soumettre</button>
        </form>
    </div>
    </section>
  );
};

export default Contact;
