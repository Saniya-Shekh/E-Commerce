import { Star } from "lucide-react";
import { useState } from "react";

const ProductDetails = () => {
  let [num, setNum] = useState(0);

  return (
    <div className="py-8 flex flex-1 justify-center gap-10">
      <div className="pl-40">
        <img src="/src/assets/img7.jpg" alt="" className="h-120 w-120" />
      </div>
      <div className="w-[40%] flex flex-col gap-5 ">
        <h1 className="font-bold text-2xl">
          Lightweight Puffer Jacket With a Hood{" "}
        </h1>
        <div className="flex gap-3 items-center">
          <div className="flex">
            <Star size={12} />
            <Star size={12} />
            <Star size={12} />
            <Star size={12} />
            <Star size={12} />
          </div>
          <span className="text-xs">8k+ Reviews</span>
        </div>
        <h1 className="font-bold">$90</h1>
        <p>
          Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum
          gravida nec dui. Aenean aliquam varius ipsum, non ultricies tellus
          sodales eu. Donec dignissim viverra nunc, ut aliquet magna posuere
          eget.
        </p>
        <div className="flex gap-4">
          <h1 className="font-medium">SIZES</h1>
          <div className="h-6 w-9 border border-gray-400 text-center text-sm cursor-pointer">
            XL
          </div>
          <div className="h-6 w-8 border border-gray-400 text-center text-sm cursor-pointer">
            L
          </div>
          <div className="h-6 w-8 border border-gray-400 text-center text-sm cursor-pointer">
            S
          </div>
          <div className="h-6 w-8 border border-gray-400 text-center text-sm cursor-pointer">
            XL
          </div>
          <div className="h-6 w-8 border border-gray-400 text-center text-sm cursor-pointer">
            M
          </div>
        </div>
        <div className="flex gap-4">
          <h1 className="text-sm font-medium">COLOR</h1>
          <input type="radio" className="w-8" />
          <input type="radio" className="w-8" />
          <input type="radio" className="w-8" />
        </div>

        <div className="border h-12 w-30 flex gap-3 items-center justify-between px-5">
          <button onClick={() => setNum(num - 1)}>-</button>
          {/* <button onClick={()=>setNum({num})}></button> */}
          <h2>{num}</h2>
          <button onClick={() => setNum(num + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
