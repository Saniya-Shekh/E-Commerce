import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#e4e4e4] px-30 py-20">
      <div className="flex items-start justify-between">
        {/* First  */}
        <div className="flex flex-col gap-5">
          <div>
            <img src="/public/Logo.png" alt="" />
          </div>
          <div className="text-xs">
            <p>1418 River Drive, Suite 35 Cottonhall,
              <br /> CA 9622 United States</p>
          </div>
          <div className="font-bold text-xs">
            <p>sale@uomo.com</p>
            <p> +91 860-514-2370</p>
          </div>
          <div>
            <ul className="flex gap-7">
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li>
                <FontAwesomeIcon icon={faXTwitter} />
              </li>
              <li>
                <FontAwesomeIcon icon={faYoutube} />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold">COMPANY</p>
          <ul className="text-xs flex flex-col gap-3">
            <Link>
              <li>About Us</li>
            </Link>
            <Link>
              <li>Career</li>
            </Link>
            <Link>
              <li>Affilates</li>
            </Link>
            <Link>
              <li>Blog</li>
            </Link>
            <Link>
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className=" flex gap-4 flex-col">
          <p className="font-bold">SHOP</p>
          <ul className="text-xs flex  flex-col gap-3">
            <Link>
              <li>New Arrivals Us</li>
            </Link>
            <Link>
              <li>Accessories</li>
            </Link>
            <Link>
              <li>Men</li>
            </Link>
            <Link>
              <li>Women</li>
            </Link>
            <Link>
              <li>Shop All Us</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-bold">HELP</p>
          <ul className="text-xs flex flex-col gap-3">
            <Link>
              <li>Customer Service </li>
            </Link>
            <Link>
              <li>My Account</li>
            </Link>
            <Link>
              <li>Find a Store</li>
            </Link>
            <Link>
              <li>Legal & Privacy</li>
            </Link>
            <Link>
              <li>Contact </li>
            </Link>
            <Link>
              <li>Gift Card</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-bold">SUBSCRIBE</p>
          <p className="text-xs">
            Be the first to get the latest news about 
            <br />trends, promotions, and
            much more!
          </p>
          <div className="h-12 flex items-center text-sm bg-white p-4">
            <input type="email" placeholder="Your Email Address" className="h-12 border-none focus:outline-none" />
            <button className="font-medium">JOIN</button>
          </div>
            <p className=" text-sm font-medium">Secure Payments</p>
        </div>
      </div>

      {/* Section  */}
      <div className="mt-20">
        <p>
          © 2026 Uomo. All Rights Reserved | Made By <span className="text-red-800">
            Er.Saniya Bagwan </span> with ❤️
        </p>
      </div>


    </div>
  );
};

export default Footer;
