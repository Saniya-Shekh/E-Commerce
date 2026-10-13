import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import productsData from "../data/ProductsData";

const Products = (data) => {
  console.log(data);
  return (
    <section className="flex mt-30">
      <div className="w-[30%]"></div>
      <div className="w-[70%]">
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
        <div className="mt-5 flex flex-wrap">
          {/* Product */}
          {productsData.map((item) => {
            return (
              <div className="w-60 p-3">
                <div className="relative group">
                  <img src={item.path} alt=""
                   className="h-80 w-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
                  <img src={item.hoverPath} alt="" 
                  className="h-80 w-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 " />
                  <button className="w-full bg-white text-black py-2 absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">ADD TO CART</button>
                </div>
                <div className="flex justify-between">
                  <h1>{item.category}</h1>
                  <Heart />
                </div>
                <div className="">
                  <h2>{item.name}</h2>
                  <h2>{item.price}</h2>
                  <div className="flex items-center gap-3">
                    <span className="flex">
                      <Star size={15} />
                      <Star size={15} />
                      <Star size={15} />
                      <Star size={15} />
                      <Star size={15} />
                    </span>
                    <span>{item.review} </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
