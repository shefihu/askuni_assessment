import React from "react";

const Footer = () => {
  return (
    <footer className="pt-[100px] bg-gray-100 px-[50px] mx-auto 2xl:px-0">
      <section className="flex flex-col gap-3 md:flex-row mx-auto  pb-[100px] lg:max-w-[1280px] ">
        <div className="md:w-[25%]">
          <h1 className="text-2xl font-bold leading-[40px]">askuni</h1>
          <div className="flex flex-col text-gray-600 mt-3">
            <p className="leading-5">
              Halkalı Merkez Mah. Halkalı Cad. <br /> 281/23 Zaim Teknopark No:6
              34303 Küçükçekmece/Istanbul
            </p>
            <p className="mt-3">+(90) 552 367 43 36</p>
            <p className="mt-3">info@askuni.com</p>
          </div>
        </div>

        <div className="flex gap-4 md:gap-8 mt-6 md:mt-0 justify-between flex-wrap md:w-[75%]">
          <div className="md:w-[30%]">
            <h4>Navigations</h4>
            <div className="flex flex-col mt-4 gap-3 text-gray-600">
              <a href="#">About Us</a>
              <a href="#">Programs</a>
              <a href="#">Universities</a>
              <a href="#">Articles</a>
              <a href="#">Contact</a>
              <a href="#">Fairs</a>
              <a href="#">Become a Partner</a>
            </div>
          </div>
          <div className="md:w-[30%]">
            <h4>For Students</h4>
            <div className="flex flex-col mt-4 gap-3 text-gray-600">
              <a href="#">How To Apply</a>
              <a href="#">Candidate Form</a>
            </div>
          </div>
          <div className="md:w-[30%]">
            <h4>Legal</h4>
            <div className="flex flex-col gap-3 mt-4 text-gray-600">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms and Conditions</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Disclaimer</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <hr />
        <div className="flex flex-col md:flex-row py-[30px] items-center w-full gap-3">
          <p className="text-gray-600 ">
            © 2023- 2023 Askuni. All Rights Reserved
          </p>
          <div className="flex gap-3 items-center text-gray-600">
            <p className="border-r pr-2 border-r-gray-600">Facebook</p>
            <p className="border-r pr-2 border-r-gray-600">Twitter</p>
            <p className="border-r pr-2 border-r-gray-600">Instagram</p>
            <p>Linkedin</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
