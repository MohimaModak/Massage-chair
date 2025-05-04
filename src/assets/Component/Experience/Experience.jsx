import React, { useEffect } from 'react'
import background from "../../../../src/Gallery/Hero2.png";
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Experience() {

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
        <div id='/Experience' className='relative bg-gradient-to-br from-teal-50 via-teal-50 to-teal-100 
        px-5 md:px-20 h-full'>
            <section data-aos="fade-up" className="">
                <div className="" />

                <div className="flex justify-center items-center">
                    <div className="lg:flex justify-center items-center gap-14">
                        <div className="space-y-6 mb-6 lg:mb-0">
                            <h1 className="text-3xl lg:text-5xl font-bold text-teal-700 max-w-xl leading-tight mb-6">
                                Why Choose Our Massage Chair?
                            </h1>
                            <p className="text-lg lg:text-xl max-w-xl font-medium text-gray-700">
                                Ergonomic design, customizable settings, and advanced massage features built for your complete relaxation.
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
                                className="w-[550px]"
                            />
                        </div>
                    </div>
                </div>
            </section>




        </div>
    )
}
