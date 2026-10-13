// import { Link } from "react-router-dom";

import { Headset, Luggage, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-100">
      <section>
        <div className="px-40 py-10">
          <h1 className="text-3xl font-bold">ABOUT DUMO</h1>
        </div>
        <div>
          <img
            src="/src/assets/About_image.jpg"
            alt=""
            className="w-[80%] mx-auto"
          />
        </div>
      </section>

      {/*sec */}
      <section className="px-40 py-10">
        <div>
          <h1 className="font-bold text-2xl">OUR STORY</h1>
        </div>
        <div className="">
          <p className="mt-5 font-serif">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          <p className="mt-7 font-sans">Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air sea it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they're great.</p>
        </div>

        <div className="flex gap-4 mt-5">
          <div className="">
            <h2 className=" font-bold">OUR MISSION</h2>
            <p className="mt-3 text-sm">Quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat.</p>
          </div>
          <div>
            <h2 className="font-bold">OUR VISION</h2>
            <p className="mt-3 text-sm">Quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat.</p>
          </div>

        </div>

        <div className="w-full flex gap-8 items-center mt-10"> 
          <div className="">
            <img src="/src/assets/about_img2.jpg" alt="" className="w-full" />
          </div>
          <div className="w-[50%]">
            <h2 className="font-bold">The Company</h2>
            <p className="mt-4 text-sm leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras.</p>
          </div>
        </div>
      </section>

      <section className="py-10">
         <div className="flex items-center justify-evenly">
          <div className="flex flex-col items-center">
            <Luggage size={50} />
            <h2 className="mt-5 font-medium text-lg">FAST AND FREE DELIVERY</h2>
            <p>Free delivery for all orders over $130</p>
          </div>

          <div className="flex flex-col items-center">
            <Headset  size={50} />
            <h2 className="mt-5 font-medium text-lg">24/7 CUSTOMER SUPPORT</h2>
            <p>Friendly 24/7 customer support</p>
          </div>

          <div className="flex flex-col items-center">
            <ShieldCheck size={50} />
            <h2 className="mt-5 font-medium text-lg">MONEY BANK GUARANTEE</h2>
            <p>We return money within 30 days</p>
          </div>
        </div>

     
      </section>

    </div>
  );
};

export default About;
