import React, { useEffect } from 'react';
import ContactImage from "../../../../src/Gallery/contact.png";
import facebook from "../../../../src/Gallery/facebook.png";
import whatsapp from "../../../../src/Gallery/whatsapp.png";
import instagram from "../../../../src/Gallery/instagram.png";
import mobile from "../../../../src/Gallery/mobile.png";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Contact() {

  useEffect(() => {
    AOS.init({
        duration: 1500,
        easing: 'ease-out',
        once: true,
        delay: 100,
    });
    AOS.refresh();
}, []);

  return (
    <div id='/Contact' className='py-14 px-6 lg:px-20 relative bg-gradient-to-bl from-teal-100 via-teal-50 to-teal-50'>
      <div data-aos="fade-up" className='max-w-6xl mx-auto lg:flex items-center gap-10'>
        {/* Left Section - Image */}
        <div className='flex justify-center items-center pb-10 lg:pb-0'>
          <img src={ContactImage} className='' />
        </div>

        {/* Right Section - Details */}
        <div className='w-full'>
          <h1 className='text-3xl lg:text-5xl font-bold text-teal-700 leading-tight mb-6'>Contact With Us</h1>

          {/* Contact Info */}
          <div className=' text-gray-700 text-base font-medium flex items-center gap-5 mb-4'>
            <a href=""><button><img src={facebook} className='w-7' /></button></a>
            <a href=""><button><img src={whatsapp} className='w-7' /></button></a>
            <a href=""><button><img src={instagram} className='w-7' /></button></a>
            <a href=""><button><img src={mobile} className='w-7' /></button></a>
          </div>

          <div className=''>
            <h3 className='text-xl font-bold text-teal-700 mb-4'>Our Location</h3>
            <iframe
              title="Dhaka Dhanmondi Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.946536958868!2d90.3671071149814!3d23.78935018456907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c74c91f77bbd%3A0xcea263fb51d67b82!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1611909753394!5m2!1sen!2sbd"
              // width="100%"
              // height="100"
              allowFullScreen=""
              loading="lazy"
              className='rounded-xl shadow-xl mb-4 border w-[100%] h-[500%] lg:h-[100%] '
            ></iframe>
          </div>
          <div className=' text-lg font-medium bg-teal-700 text-white w-max p-4 rounded-md shadow-sm'>
            ✅ Pay in Cash on Delivery
          </div>
        </div>
      </div>
    </div>
  );
}
