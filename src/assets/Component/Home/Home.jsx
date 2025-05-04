import React, { useEffect } from 'react';
import background from "../../../../src/Gallery/Hero5.png";
import Contact from '../Contact/Contact';
import { Link } from 'react-scroll';
import Products from '../Products/Products';
import Experience from '../Experience/Experience';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

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
    <div>
      <div id='/'>
        <section className="relative bg-gradient-to-br from-teal-50 via-teal-50 to-teal-100 pt-16 px-5 md:px-20">
          <div className="" />

          <div data-aos="fade-up" className="flex justify-center items-center">
          <div className="lg:flex justify-center items-center">
            <div className="space-y-6 py-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl max-w-2xl font-bold text-teal-700 leading-tight">
                Experience Ultimate Relaxation at Home
              </h1>
              <p className="text-lg lg:text-xl max-w-2xl font-medium text-gray-700">
                Discover our premium massage chairs designed to relieve stress, ease pain,
                and bring comfort to your daily life — all at the touch of a button.
              </p>
              <div>
                <Link to='/Contact' smooth={true} duration={1000}>
                <button className="bg-teal-700 text-white px-6 py-3 font-medium rounded-md hover:bg-teal-600 transition duration-300 shadow-md">
                  Order Now
                </button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <img
                src={background}
                alt="Massage chair for home relaxation"
                className=""
              />
            </div>
          </div>
          </div>
        </section>
      </div>
      <Products></Products>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
}
