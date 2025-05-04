import React, { useEffect } from 'react'
import ProductImage1 from "../../../../src/Gallery/product1.jpg";
import ProductImage2 from "../../../../src/Gallery/product2.jpeg";
import ProductImage3 from "../../../../src/Gallery/product3.jpeg";
import ProductImage4 from "../../../../src/Gallery/product4.jpeg";
import ProductImage5 from "../../../../src/Gallery/product5.jpeg";
import ProductImage6 from "../../../../src/Gallery/product6.jpeg";
import ProductImage7 from "../../../../src/Gallery/product7.jpg";
import ProductImage8 from "../../../../src/Gallery/product8.jpeg";
import ProductImage9 from "../../../../src/Gallery/product9.jpeg";
import ProductImage10 from "../../../../src/Gallery/product10.jpeg";
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Products() {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease-out',
            once: true,
            delay: 100,
        });
        AOS.refresh();
    }, []);

  const ProductsDetails = [
    { image: ProductImage1, title: "Pasta", price: "$45" },
    { image: ProductImage2, title: "Spaghetti", price: "$40" },
    { image: ProductImage3, title: "Burger", price: "$99" },
    { image: ProductImage4, title: "Chicken", price: "$105" },
    { image: ProductImage5, title: "Fruit", price: "$25" },
    { image: ProductImage6, title: "Rice", price: "$25" },
    { image: ProductImage7, title: "Rice", price: "$25" },
    { image: ProductImage8, title: "Rice", price: "$25" },
    { image: ProductImage9, title: "Rice", price: "$25" },
    { image: ProductImage10, title: "Rice", price: "$25" },
];

  return (
    <div id='/Products'>
      <div data-aos="fade-up" className="py-14 px-6 lg:px-20 relative bg-gradient-to-bl from-teal-100 via-teal-50 to-teal-50">
            <div>
                <h1 className="text-4xl md:text-4xl lg:text-5xl text-center font-bold text-teal-600
                 pb-16">Massage Chairs</h1>
            </div>
            <div className="flex justify-center items-center text-center font-semibold">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text">
                    {ProductsDetails.map((item, index) => (
                        <div 
                            key={index}
                            className="relative group overflow-hidden rounded-md"
                        >
                            <div data-aos="fade-up" className="p-2">
                                <img
                                    src={item.image}
                                    className="w-full h-full lg:h-52 rounded-md  block"
                                    alt="Menu Item"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-full
                                 bg-gradient-to-t from-transparent to-teal-700 backdrop-blur-sm
                                  text-white rounded-md  text-center p-4 transform translate-y-full
                                   group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                                    <div className='flex justify-center items-center h-full'>
                                        <div>
                                            <h1 className="text-3xl">{item.title}</h1>
                                            <h1 className="my-2.5 text-xl">Price: {item.price}</h1>
                                            <div>
                                            <Link to='/Contact' smooth={true} duration={1000}>
                                            <button className="bg-white rounded-full px-4 py-1.5 
                                                text-sm w-max text-teal-700">Order Now</button>
                                                </Link> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
