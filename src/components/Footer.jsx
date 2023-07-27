import styles from "../style";
import {  logo1 } from "../assets";
import { footerLinks } from "../constants";
import {SlSocialInstagram,SlSocialLinkedin} from "react-icons/sl"
const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full text-left`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo1}
          alt="hoobank"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
        Unlock your online potential with Flashypanels ⚡️ , the ultimate digital marketing solution. Elevate your online presence through our comprehensive services, including Social Media Marketing (SMM) 
        panels and advanced strategies.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-bold text-[18px] leading-[27px] text-black">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px]  text-black hover:text-indigo-600 cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] ">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-black">
        Copyright Ⓒ 2023 flashyPanels. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 items-center justify-around ">
        
        <div className="m-3 cursor-pointer" >
        <SlSocialInstagram/>
        </div>
        <div className="cursor-pointer">
        <SlSocialLinkedin/>
        </div>

      </div>
    </div>
  </section>
);

export default Footer;
