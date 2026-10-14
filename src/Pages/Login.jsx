import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="p-10">
        <h2 className="font-bold text-center">LOGIN</h2>
        <div className=" flex items-center justify-center mt-10 ">
          <form action="" className="flex flex-col w-[40%] gap-6">
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              className="h-12 border border-gray-400 px-4"
            />

            <input
              type="text"
              placeholder="Enter Password"
              name="name"
              className="border border-gray-400 h-12 px-4"
            />
            <div className="flex justify-between">
              <div className="flex gap-2">
                <input type="checkbox" className="w-4" />
                Remember me
              </div>
              <p>Lost password?</p>
            </div>

            <div className="bg-black py-3 text-center cursor-pointer">
              <button className="text-white font-bold ">Log In</button>
            </div>

            <div className="flex items-center justify-center">
                <p>Now account yet?</p>
                <Link to='/register'>
               <p className="font-bold underline decoration-solid">Create Account</p>
                </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
