import Image from "next/image";
import logo from "./../../../public/logo.svg";
import dashboard from "./../../../public/dashboard.svg";
import connectors from "./../../../public/connectors.svg";
import devices from "./../../../public/devices.svg";
import settings from "./../../../public/settings.svg";
import defaultUser from "./../../../public/defaultuser.svg";

const Navbar = () => {
  return (
    <>
      <nav className="text-white flex justify-start items-center w-[82%] mx-auto py-4">
        <div>
          <Image src={logo} alt="Logo" width={120} height={60} />
        </div>
        <div className="md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[9%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col text-[#C5C7D3] md:items-center md:gap-[2vw] gap-6">
            <li className="flex items-center">
              <Image
                src={dashboard}
                alt="dashboard icon"
                width={24}
                height={24}
                className="mr-1"
              />
              <a className="hover:text-white" href="#">
                Dashboard
              </a>
            </li>
            <li className="flex items-center">
              <Image
                src={connectors}
                alt="connectors icon"
                width={24}
                height={24}
                className="mr-1"
              />
              <a className="hover:text-white" href="#">
                Connectors
              </a>
            </li>
            <li className="flex items-center">
              <Image
                src={devices}
                alt="devices icon"
                width={24}
                height={24}
                className="mr-1"
              />
              <a className="hover:text-white" href="#">
                Devices
              </a>
            </li>
            <li className="flex items-center">
              <Image
                src={settings}
                alt="settings icon"
                width={24}
                height={24}
                className="mr-1"
              />
              <a className="hover:text-white" href="#">
                General Settings
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-auto flex items-center">
          <Image
            src={defaultUser}
            alt="user icon"
            width={30}
            height={30}
            className="mr-2"
          />
          <a href="#">User</a>
        </div>
      </nav>
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
    </>
  );
};

export default Navbar;
