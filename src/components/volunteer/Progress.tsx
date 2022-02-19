// import image pp
import pp from "../../assets/pp.jpg";

const Progress = () => {
  return (
    <>
      <div className="shadow-lg bg-white w-3/4 mx-auto mt-8 rounded-3xl text-gray-600">
        <div className="flex-col p-12">
          <div className="flex-1  py-4 text-xl">UPDATE #01</div>
          <div className="flex-1  text-lg font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, sequi!
          </div>
          <div className="flex-1 flex mx-auto w-auto py-7 border-b-2 border-gray-300">
            <div className="flex-initial flex ">
              <div className="flex-auto ">
                <img src={pp} alt="..." className="rounded-full w-16" />
              </div>
              <div className=" flex-cols  mx-3">
                <div className="flex-initial  mt-3">Desa Makmur Jaya</div>
                <div className="flex-initial  text-xs">30 Februari 2022</div>
              </div>
            </div>
          </div>
          <div className="py-7">
            Hello
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum ipsam excepturi sunt, laudantium
            nostrum numquam eum dolor temporibus ex!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum asperiores voluptatibus. Assumenda
            perferendis soluta, eligendi earum maiores suscipit minus ipsum deserunt, quas explicabo deleniti nostrum
            quos, accusamus voluptate doloremque.
          </div>
          <div className=" flex justify-between mt-4">
            <div className="flex justify-center items-center">
              {/* Comment Icon */}
              <button className="hover:text-blue-600 flex md:mr-7 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className=" ml-1">10</div>
              </button>
              {/* Heart Icon */}
              <button className="hover:text-red-700 flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className=" ml-1">21</div>
              </button>
            </div>
            <div className="flex-1 flex justify-end">
              <button className="md:p-2 p-1 bg-white rounded-sm border-gray-300 md:text-base text-xs border-2 text-gray-400 hover:text-gray-600 shadow-sm">
                Baca selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-lg bg-white w-3/4 mx-auto mt-8 rounded-3xl text-gray-600">
        <div className="flex-col p-12">
          <div className="flex-1  py-4 text-xl">UPDATE #01</div>
          <div className="flex-1  text-lg font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, sequi!
          </div>
          <div className="flex-1 flex mx-auto w-auto py-7 border-b-2 border-gray-300">
            <div className="flex-initial flex ">
              <div className="flex-auto ">
                <img src={pp} alt="..." className="rounded-full w-16" />
              </div>
              <div className=" flex-cols  mx-3">
                <div className="flex-initial  mt-3">Desa Makmur Jaya</div>
                <div className="flex-initial  text-xs">30 Februari 2022</div>
              </div>
            </div>
          </div>
          <div className="py-7">
            Hello
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum ipsam excepturi sunt, laudantium
            nostrum numquam eum dolor temporibus ex!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum asperiores voluptatibus. Assumenda
            perferendis soluta, eligendi earum maiores suscipit minus ipsum deserunt, quas explicabo deleniti nostrum
            quos, accusamus voluptate doloremque.
          </div>
          <div className=" flex justify-between mt-4">
            <div className="flex justify-center items-center">
              {/* Comment Icon */}
              <button className="hover:text-blue-600 flex mr-7">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className=" ml-1">10</div>
              </button>
              {/* Heart Icon */}
              <button className="hover:text-red-700 flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className=" ml-1">21</div>
              </button>
            </div>
            <div className="flex-1  flex justify-end">
              <button className="p-2 bg-white rounded-sm border-gray-300 border-2 text-gray-400 hover:text-gray-600 shadow-sm">
                Baca selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Progress;
