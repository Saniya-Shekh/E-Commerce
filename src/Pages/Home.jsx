import { Headset, Luggage, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  let [time, setTime] = useState({
    days: 10,
    hours: 15,
    minutes: 24,
    seconds: 60,
  });

  useEffect(() => {
    let targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10);

    let interval = setInterval(() => {
      let currentDate = new Date();

      let difference = targetDate - currentDate;

      if (difference <= 0) {
        clearInterval(interval);

        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      let days = Math.floor(difference / (1000 * 60 * 60 * 24));

      let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

      let minutes = Math.floor((difference / (1000 * 60)) % 60);

      let seconds = Math.floor((difference / 1000) % 60);

      setTime(
        {
          days,
          hours,
          minutes,
          seconds,
        },
        1000,
      );
    });

    return () => clearInterval(interval);
  }, []);

  let images = [
    {
      imagePath: "src/assets/img13.jpg",
    },
    {
      imagePath: "src/assets/img3.jpg",
    },
    {
      imagePath: "src/assets/img4.jpg",
    },
    {
      imagePath: "src/assets/img5.jpg",
    },

    {
      imagePath: "src/assets/img7.jpg",
    },
    {
      imagePath: "src/assets/img8.jpg",
    },
    {
      imagePath: "src/assets/img9.jpg",
    },
    {
      imagePath: "src/assets/img10.jpg",
    },
    {
      imagePath: "src/assets/img11.jpg",
    },
    {
      imagePath: "src/assets/img12.jpg",
    },
  ];
  return (
    <>
      {/* */}
      <section className="">
        <div className="flex  justify-evenly items-center bg-[#f4e5e0] bg-[url('/heroImage.png')] w-full h-dvh bg-cover">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 ">
              <div className="h-0.5 w-10 bg-red-700 "></div>
              <span className="text-red-700">NEW TREND</span>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-6xl">SUMMER</h1>
              <h1 className="font-bold text-6xl">SALE</h1>
              <h1 className="font-bold text-6xl">STYLISH</h1>
            </div>
            <div>
              <p className="mb-4">
                Limited Time Offer - Up to 50% off & Free Shipping
              </p>
              <div>DISCOVER MORE</div>
              <div className="h-0.5 w-20 bg-black"></div>
            </div>
          </div>
          <div>
            <img src="/public/image_1.png" alt="" className="h-100" />
          </div>
        </div>
      </section>

      {/*  */}
      <section>
        <div className=" h-125 w-[80%] mx-auto my-30 grid grid-cols-2 gap-8 relative">
          <div className=" bg-[url('/src/assets/grid_image3.jpg')] bg-cover bg-center">
            <div className="absolute bottom-10 left-10">
              <h2 className="">HOT LIST</h2>
              <div className="flex gap-3 mb-1">
                <h1 className="font-bold text-3xl">WOMEN</h1>
                <h1 className="text-3xl font-medium">COLLECTION</h1>
              </div>
              <Link className="font-medium">SHOP NOW</Link>
              <div className="h-0.5 w-10 border bg-black"></div>
            </div>
          </div>
          <div className=" grid gap-8">
            <div className="bg-[url('/src/assets/grid_image2.jpg')] bg-cover relative">
              <div className="absolute bottom-8 left-10">
                <h2>HOT LIST</h2>
                <div className="flex">
                  <h1 className="font-bold text-2xl">MEN</h1>
                  <h1 className="font-medium text-2xl">COLLECTION</h1>
                </div>
                <Link className="font-medium">SHOP NOW</Link>
                <div className="h-0.5 w-10 bg-black"></div>
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-8 relative">
              <div className=" bg-[url('/src/assets/grid_image1.jpg')] bg-cover bg-center">
                <div className="absolute bottom-8 left-10">
                  <h2 className="">HOT LIST</h2>
                  <div className="flex flex-col">
                    <h1 className="font-bold text-2xl">KIDS</h1>
                    <h1 className="font-medium text-2xl">COLLECTION</h1>
                  </div>
                  <Link>SHOP NOW</Link>
                  <div className="h-0.5 w-10 bg-black font-bold"></div>
                </div>
              </div>
              <div className=" bg-[#f4e5e0] relative">
                <div className="absolute bottom-8 left-10">
                  <div className="flex  flex-col gap-1 mb-1">
                    <h1 className="font-bold text-2xl">E-GIFT</h1>
                    <h1 className="font-medium text-2xl">CARDS</h1>
                  </div>
                  <p>SURPRISE SOMEONE WITH THE GIFT THEY REALLY WANT</p>
                  <Link>SHOP NOW</Link>
                  <div className="h-0.5 w-10 bg-black"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section>
        <div className="bg-[#ebebeb] h-100 w-full relative">
          <div className="absolute bottom-20 left-20">
            <div className="text-red-700 text-sm flex items-center gap-7 mb-6">
              <div className="bg-red-700 h-0.5 w-9"></div>
              DEAL OF THE WEEK
            </div>
            <div className="flex gap-3 mb-6">
              <span className="font-bold text-6xl">SPRING</span>
              <span className="font-medium text-6xl">COLLECTION</span>
            </div>
            <Link className="font-medium">SHOP NOW</Link>
            <div className="h-0.5 w-10 bg-black"></div>

            <div className="flex gap-6 items-center relative mt-10">
              <div>
                <h1 className="text-center font-stretch-50% text-2xl">
                  {time.days}
                </h1>
                <p className="font-bold text-[#767676]">DAYS</p>
              </div>
              <div className="">
                <div className="text-2xl absolute top-[-3px]">:</div>
              </div>
              <div>
                <h1 className="text-center font-stretch-50% text-2xl">
                  {time.hours}
                </h1>
                <p className="font-bold text-[#767676]">HOURS</p>
              </div>
              <div className="">
                <div className="text-2xl absolute top-[-3px]">:</div>
              </div>
              <div>
                <h1 className="text-center font-stretch-50% text-2xl">
                  {time.minutes}
                </h1>
                <p className="font-bold text-[#767676]">MINUTES</p>
              </div>
              <div className="">
                <div className="text-2xl absolute top-[-3px]">:</div>
              </div>
              <div>
                <h1 className="text-center font-stretch-50% text-2xl">
                  {time.seconds}
                </h1>
                <p className="font-bold text-[#767676]">SECONDS</p>
              </div>
            </div>
          </div>

          <div className="">
            <img src="/public/image_13.jpg" alt="" className="" />
          </div>
        </div>
      </section>

      {/*  */}
      <section>
        <div className="flex  items-center justify-center gap-8 my-25">
          <div className="bg-[url('/image_11.jpg')] bg-[60%_center] bg-no-repeat bg-cover w-100 h-90 relative ">
            <div className="absolute bottom-10 left-5">
              <h3 className="text-white font-medium mb-3 text-sm">
                STARTING AT $19
              </h3>
              <h1 className="text-white font-bold text-2xl mb-3">
                Women's T-shirts
              </h1>
              <Link className="text-white font-medium text-sm">SHOP NOW</Link>
              <div className="bg-white h-0.5 w-10"></div>
            </div>
          </div>

          <div className="bg-[url('/image_12.jpg')] bg-[60%_center] bg-no-repeat bg-cover w-100 h-90 relative">
            <div className="absolute bottom-10 left-5">
              <h2 className="mb-3 font-medium">STARTING AT $39</h2>
              <h1 className="mb-3 font-bold text-2xl">Men's Sportswear</h1>
              <Link className="font-medium">SHOP NOW</Link>
              <div className="bg-white h-0.5 w-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section>
        <h2 className="text-4xl text-center font-bold py-10">@UOMO</h2>
        <div className="px-30">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {images.map((img) => {
              return (
                <div className="">
                  <img src={img.imagePath} alt="img" className="h-40 " />
                </div>
              );
            })}
          </div>
          <div></div>
        </div>

        <div className="flex items-center justify-evenly my-18">
          <div className="flex flex-col items-center">
            <Luggage size={50} />
            <h2 className="mt-5 font-medium text-lg">FAST AND FREE DELIVERY</h2>
            <p>Free delivery for all orders over $130</p>
          </div>

          <div className="flex flex-col items-center">
            <Headset size={50} />
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
    </>
  );
};

export default Home;
