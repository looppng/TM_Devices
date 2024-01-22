import SearchForm from "@/app/components/Forms/SearchForm";

const Devices = () => {
  const devices = [
    {
      id: 1,
      name: "Main Entry Intercom",
      status: "Offline",
      model: "2N Verso",
      conStat: "235/235 messages over 28 days",
    },
    {
      id: 2,
      name: "Side Entry Intercom",
      status: "Offline",
      model: "2N Verso",
      conStat: "90/10 messages over 28 days",
    },
    {
      id: 3,
      name: "Main Entry Intercom",
      status: "Offline",
      model: "2N Verso",
      conStat: "0 messages over 28 days",
    },
  ];

  return (
    <section className="mx-auto w-[82%] border-sm bg-white relative z-20 mt-[-40px] border-1 rounded-lg shadow-lg">
      <div className="row pt-7 ps-7 pe-7 flex justify-between">
        <div className="inline-flex gap-2">
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#181E34] border-2 border-[#D6D8E0]  rounded-md  focus:ring-4 focus:outline-none bg-"
          >
            Online
            <span className="inline-flex items-center justify-center w-5 h-5 ms-2 p-3 text-xs font-semibold text-[#5C5F70]S bg-[#D6D8E0] rounded-md">
              2
            </span>
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center bg-[#3499DB] text-white border-2 border-[#3499DB]  rounded-md  focus:ring-4 focus:outline-none bg-"
          >
            Offline
            <span className="inline-flex items-center justify-center w-5 h-5 ms-2 p-3 text-xs font-medium text-[#13496C] bg-[#D6EFFF] rounded-md">
              3
            </span>
          </button>
        </div>
        <div className="inline-flex">
          <SearchForm />
        </div>
      </div>
      <div className="pt-7 ps-7 pe-7">
        {devices.map((device) => (
          <div
            key={device.id}
            className="border-2 rounded-md py-5 row flex justify-between items-center mt-2 "
          >
            <div className="inline-flex p-3">{device.status}</div>
            <div className="inline-flex flex-1">
              <div className="col">
                <div>{device.name}</div>
                <div>
                  <p>Connection: 0%</p>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-1">
              <div className="col">
                <p>Model</p>
                <div>
                  <p>{device.model}</p>
                </div>
              </div>
            </div>
            <div className="inline-flex flex-1">
              <div className="col">
                <p>Con-Stat</p>
                <div>
                  <p>{device.conStat}</p>
                </div>
              </div>
            </div>
            <div className="inline-flex me-4 gap-1 items-center justify-center">
              <button
                type="button"
                className="py-2.5 px-5 me-2 text-sm font-medium text-[#181E34] focus:outline-none bg-[#F0F1F4] rounded-md border border-gray-200 hover:bg-gray-100"
              >
                Control
              </button>
              <button
                type="button"
                className="py-2.5 px-5 me-2 text-sm font-medium text-[#181E34] focus:outline-none bg-[#F0F1F4] rounded-md border border-gray-200 hover:bg-gray-100"
              >
                Control
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="row mt-7 rounded-b pt-5 ps-7 pe-7 pb-5 bg-[#F0F1F4]">
        <h4>Showing 1 - 3 of 3 devices</h4>
      </div>
    </section>
  );
};

export default Devices;
