import Navbar from "@/app/components/Navbar/Navbar";

const Head = () => {
  return (
    <div className="bg-[#181E34]">
      <Navbar />
      <nav
        className="text-white flex flex-col items-start w-[82%] mx-auto pb-20 py-5"
        aria-label="Breadcrumb"
      >
        <div className="flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <span className="inline-flex items-center text-[#C5C7D3] text-md font-medium text-gray-700 dark:text-gray-400 dark:hover:text-white">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
          </span>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            /
          </span>
        </div>
        <div className="mt-4">
          <span className="text-2xl font-medium text-white">Devices</span>
        </div>
      </nav>
    </div>
  );
};

export default Head;
