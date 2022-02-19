import pp from "../../assets/pp.jpg";

const Komentar = () => {
  return (
    <>
      <div className="shadow-lg bg-white w-3/4 mx-auto mt-8 rounded-3xl">
        <div className="p-12">
          <p className="text-xl font-sans">Komentar (1)</p>
          <textarea
            name="komentar"
            id="komentar"
            placeholder="Tulis komentar disini"
            className="border-2 mt-4 w-full rounded-xl p-5 h-64"
          ></textarea>
          <div className="flex justify-end">
            <button className="bg-green-primary p-3 px-10 rounded-xl mt-4 text-white relative opacity-80 hover:opacity-100">
              Kirim
            </button>
          </div>
          <div className="tempat_komentar mt-8 text-gray-600 border-2 p-5 rounded-lg">
            <div className="komentar ">
              <div className="flex ">
                <div className="profile_picture">
                  <img src={pp} alt="..." className="rounded-full w-16 lg:w-20 sm:w-36" />
                </div>
                <div className="flex-cols mx-4">
                  <p className="text-green-primary font-bold text-xl">Carl Johnson</p>
                  <p className="text-xs hidden sm:block">11.16 · 19 Februari 2022</p>
                  <p className="text-sm md:text-base hidden sm:flex">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, assumenda voluptatibus. Maxime
                    provident delectus reiciendis? Voluptas inventore enim itaque tenetur!
                  </p>
                </div>
              </div>
              <p className="text-xs sm:hidden py-3">11.16 · 19 Februari 2022</p>
              <p className="text-sm md:text-base flex sm:hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, assumenda voluptatibus. Maxime
                provident delectus reiciendis? Voluptas inventore enim itaque tenetur!
              </p>
              <div className="flex mt-3">
                <button className="likes mr-4 hover:text-red-700 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p>21 Likes</p>
                </button>
                <button className="reply hover:text-blue-500 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                    />
                  </svg>
                  {/* <img src={reply} alt="reply" /> */}
                  <p>1 Balasan</p>
                </button>
              </div>
            </div>
            <div className="border-t-2 my-5"></div>
            <div className="reply relative left-5 ">
              <div className="flex ">
                <div className="profile_picture">
                  <img src={pp} alt="..." className="rounded-full w-16 lg:w-20 sm:w-36" />
                </div>
                <div className="flex-cols mx-4">
                  <p className="text-green-primary font-bold text-xl">Carl Johnson</p>
                  <p className="text-xs hidden sm:block">11.16 · 19 Februari 2022</p>
                  <p className="text-sm md:text-base hidden sm:flex">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, assumenda voluptatibus. Maxime
                    provident delectus reiciendis? Voluptas inventore enim itaque tenetur!
                  </p>
                </div>
              </div>
              <p className="text-xs sm:hidden py-3">11.16 · 19 Februari 2022</p>
              <p className="text-sm md:text-base flex sm:hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, assumenda voluptatibus. Maxime
                provident delectus reiciendis? Voluptas inventore enim itaque tenetur!
              </p>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Komentar;
