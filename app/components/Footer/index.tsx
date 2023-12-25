import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-black text-center bg-opacity-80 text-white py-7 overflow-y-hidden">
      <div className="container mx-auto flex flex-col items-center ">
        <p className="text-4xl font-bold font-Audrey">Dheeraj Photo Point</p>
        <p className="mb-4 font-sans"> create something Special</p>
        <div className=" flex flex-row  space-x-4 mb-4 sm:items-center sm:justify-center">
          <a href="https://www.facebook.com/Dheerajphotopoint/" target="_blank" className="text-gray-300 hover:text-white">
            <FaFacebookF size={30} /> {/* Facebook icon */}
          </a> 
          <a href="https://www.instagram.com/dheerajphotopoint/" target="_blank" className="text-gray-300 hover:text-white">
            <FaInstagram size={30} /> {/* Instagram icon */}
          </a>
          <a href="youtube.com/channel/UCnt-ChxgdqiBkPioJqbhQ0g" target="_blank" className="text-gray-300 hover:text-white">
            <FaYoutube size={30} /> {/* YouTube icon */}
          </a>
          <a  href="https://wa.me/919335531881" target="_blank" className="text-gray-300 hover:text-white">
  <FaWhatsapp size={30} /> {/* WhatsApp icon */}
</a>

        </div>
        <p className="text-lg mb-2 ">Email: info@example.com</p>
        <p className="text-lg mb-6">Phone: +91 9335531881</p>
        <p className="mb-4">
        Hardoi Rd, Thakurganj, Chauraha, Thana, Lucknow, Uttar Pradesh 226003
        </p>

 
        <p className="text-sm text-gray-500 mb-4">
          &copy; 2023 Your Website. All rights reserved Dheeraj Photo Point.
        </p>
        <p className="text-sm text-gray-500">
          &copy; Creator of this Website :
          <a href="https://www.linkedin.com/in/abhay-ratnakar-4925b221b/"  target="blank"
          className="text-white ml-2 mr-2"
          >
            @Abhay Ratnakar
          </a>
          X 
          <a
          className="text-white ml-2"
          href="https://www.linkedin.com/in/dhruv-kumar-sharma-419a4a204/" target="blank">@Dhruv Kumar Sharma </a>
          Contact Us - +91 6397618319 , +91 9548673363.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
