const Registration = () => {
  return (
    <div className="p-10">
      <h1 className="font-bold text-center ">REGISTER</h1>
      <div className="">
        <form action="" className="gap-4 mt-10 flex flex-col w-[40%] mx-auto">
          <input
            type="text"
            placeholder="Username *"
            name="username"
            className="h-12 border px-4"
          />

          <input
            type="email"
            placeholder="Email Address *"
            name="email"
            className="h-12 border  px-4"
          />

          <input
            type="text"
            placeholder="Password *"
            name="password"
            className="h-12 border px-4"
          />

          <p className="text-sm">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="text-red-800">privacy policy.</span>{" "}
          </p>
          <div className="h-12 bg-black text-center py-2.5 cursor-pointer">
            <button className="text-white font-bold text-xs">REGISTER</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
