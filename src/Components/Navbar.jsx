import { Heart, ShoppingCart, UserPen } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border h-18 px-30 fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex gap-14">
        <div>
          <Link><img src="/Logo.png" alt="" /></Link>
        </div>
        <div>
            <ul className="flex gap-10 font-medium">
                <Link>
                <li>Home</li>
                </Link>
                <Link>
                <li>Products</li>
                </Link>
                <Link>
                <li>About</li>
                </Link>
                <Link>
                <li>Contact</li>
                </Link>
            </ul>
        </div>
      </div>
      <div>
        <ul className="flex gap-10">
          <Link>
          <li><UserPen/></li>
          </Link>
          <Link>
          <li><ShoppingCart/></li>
          </Link>
          <Link>
          <li><Heart/></li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
