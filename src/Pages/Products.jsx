import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import {data} from "../data/ProductsData";

const Products = () => {
    console.log(data)
  return (
    <section className="flex mt-30">
      <div className=" w-[30%] h-dvh]"></div>
      <div className=" w-[70%] h-dvh">
        <div className="flex justify-between ">
          <div>
            <Link>
              <h4>HOME/THE SHOP</h4>
            </Link>
          </div>
          <div className="pr-30">
            <Link>
              <h4>DEFAULT SORTING</h4>
            </Link>
          </div>
        </div>
        <div className="mt-5">
            {/* Product */}
          <div className="w-70 p-3">
            <img
              src="/src/assets/New folder/productImage_11.jpg"
              alt=""
              className="h-80 w-full"
            />
            <div className="flex justify-between">
              <h1>Dresses</h1>
              <Heart />
            </div>
            <div className="">
              <h2>Calvin Shorts</h2>
              <h2>$62</h2>
              <div className="flex items-center gap-3">
                <span className="flex">
                  <Star size={15}/>
                  <Star size={15}/>
                  <Star size={15}/>
                  <Star size={15}/>
                  <Star size={15}/>
                </span>
                <span>2k+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
