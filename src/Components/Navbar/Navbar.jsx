import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="fixed  w-full z-auto h-[65x] leading-[65px]">
      <div className="container bg-[#242526] max-w-[1250px] px-[30px] m-auto flex items-center justify-between">
        <div className="logo">
          <a href="#" className="text-white font-semibold text-[27px]">
            MegaMenu
          </a>
        </div>
        <ul className="inline-flex">
          <li>
            <a
              className="text-white text-[18px] font-medium py-[9px] px-[15px]  rounded-[5px] hover:bg-[#3a3b3c] duration-300"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="text-white text-[18px] font-medium py-[9px] px-[15px]  rounded-[5px] hover:bg-[#3a3b3c] duration-300"
              href="#"
            >
              About
            </a>
          </li>
          <li className="group">
            <a
              className="text-white text-[18px] font-medium py-[9px] px-[15px]  rounded-[5px] hover:bg-[#3a3b3c] duration-300"
              href="#"
            >
              Dropdown menu
            </a>
            <ul className="bg-[#343536] w-[180px] absolute top-[70px] leading-[45px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:transition-all group-hover:duration-[.5s]">
              <li>
                <a
                  className="text-white text-[18px] w-full inline-block  font-normal py-[9px] px-[15px]  rounded-[5px] hover:bg-[#3a3b3c] duration-300 "
                  href="#"
                >
                  Menu one
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[18px] w-full block font-normal py-[9px] px-[15px]  rounded-[5px] hover:bg-[#3a3b3c] duration-300 "
                  href="#"
                >
                  Menu one
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[18px] w-full block font-normal py-[9px] px-[15px]  rounded-[5px] hover:bg-[#3a3b3c] duration-300 "
                  href="#"
                >
                  Menu two
                </a>
              </li>
              <li>
                <a
                  className="text-white text-[18px]  w-full block font-normal py-[9px] px-[15px]  rounded-[5px] hover:bg-[#3a3b3c] duration-300 "
                  href="#"
                >
                  Menu three
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              className="text-white text-[18px] font-medium py-[9px] px-[15px]  rounded-[5px] hover:bg-[#3a3b3c] duration-300"
              href="#"
            >
              Mega four
            </a>
          </li>
          <li>
            <a
              className="text-white text-[18px] font-medium py-[9px] px-[15px]  rounded-[5px] hover:bg-[#3a3b3c] duration-300"
              href="#"
            >
              Feedback
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
