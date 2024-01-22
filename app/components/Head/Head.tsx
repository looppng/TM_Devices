import Navbar from "@/app/components/Navbar/Navbar";

const Head = () => {
  return (
    <div className="bg-[#181E34]">
      <Navbar />
      <nav
        className="text-white flex justify-start items-center w-[82%] mx-auto pb-20 py-5"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center text-[#C5C7D3]">
            <a
              href="#"
              className="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              Home
            </a>
          </li>
          <li className="inline-flex items-center">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              /
            </span>
          </li>
          <div>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="ms-1 text-lg font-medium text-gray-500 md:ms-1 dark:text-gray-400">
                  Devices
                </span>
              </div>
            </li>
          </div>
        </ol>
      </nav>
    </div>
  );
};

export default Head;
