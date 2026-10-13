import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section>
        <div className="px-50 py-10">
          <h1 className="font-bold text-3xl">CONTACT US</h1>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60893.55477705378!2d78.33755005548439!3d17.467027308783525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ec745d866d%3A0x2c66e5f6ccaf3b73!2sStar%20light%20luxury%20home's%20Pg%20for%20women!5e0!3m2!1sen!2sin!4v1791874761843!5m2!1sen!2sin"
            width="100%"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>

        <div className="flex gap-10 px-50 py-10">
          <div className="flex flex-col gap-4">
            <h1 className=" text-lg font-bold">Store In London</h1>
            <p className="font-sans text-sm">
              1418 River Drive, Suite 35 Cottonhall, <br />
              CA 9622 United Kingdom
            </p>
            <p className="font-sans text-sm">
              admin@dummymail.com +44 20 7123 4567
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className=" text-lg font-bold">Store In India</h1>
            <p className="font-sans text-sm">
              A-791, A-791, Bandra Reclamation Rd, <br />
              Mumbai Maharashtra
            </p>
            <p className="font-sans text-sm">
              contact@dummymail.com +44 20 7123 4567
            </p>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-40 py-10">
          <h1 className="font-bold text-2xl">Get In Touch</h1>
        </div>
        <div className=" w-[70%] mx-auto">
          <form action="" className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              className="border border-gray-400 h-12 p-4 text-sm"
            />

            <input
              type="email"
              name="email"
              placeholder="Email address *"
              className="border  border-gray-400 h-12 p-4 text-sm"
            />

            <textarea
              name="text"
              placeholder="Your message"
              className="border  border-gray-400 p-4 h-60 text-sm"
            ></textarea>
          <div className="bg-black text-white w-35 p-3 text-center cursor-pointer">
            <Link>
            <button className="">SUBMIT</button>
            </Link>
          </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
