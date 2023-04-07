import Logo from "../assets/photo.jpg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header class="bg-sky-100 text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="h-15 rounded-full" src={Logo} alt="" />
          <span class="ml-3 text-yellow-900 text-xl">Goodition</span>
        </a>
        <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to="/">
            <a class="mr-5 hover:text-gray-900 cursor-pointer ...">Home</a>
          </Link>
          <Link to="/about">
            {" "}
            <a class="mr-5 hover:text-gray-900 cursor-pointer ...">About us</a>
          </Link>
          <Link to="/contact">
            <a class="mr-5 hover:text-gray-900 cursor-pointer ...">
              Contact us
            </a>
          </Link>
          <a class="mr-5 hover:text-gray-900 cursor-pointer ...">Cart</a>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-5 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Login
        </button>
      </div>
    </header>
  );
};
export default Header;
