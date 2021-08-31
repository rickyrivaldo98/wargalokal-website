import { useState } from "react";

export default function FormVolunteer() {
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  return (
    <>
      <div className=" flex items-center justify-center bg-gray-50">
        <form id="form" className="bg-white px-36 pt-6 pb-8 mb-4 w-4/6 my-10 border-2 shadow-sm">
          <br></br>
          <h1 className="block text-gray-700 font-bold text-4xl text-center">Form Kebutuhan Volunteer</h1>
          <div className="border-b-2 border-gray-200 my-8"></div>
          <div className="mb-4">
            <label className="block text-gray-600 text-md mb-2" htmlFor="name">
              Nama Penanggung Jawab
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              id="name"
              type="text"
              placeholder="Masukkan nama"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-md mb-2" htmlFor="email">
              Email Penanggung Jawab
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              id="email"
              type="text"
              placeholder="Masukkan email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-md mb-2" htmlFor="name">
              Nomor Telepon Penanggung Jawab
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="tel"
              id="tel"
              type="tel"
              placeholder="Masukkan nomor telepon"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="name">
              Jumlah Anggota Volunteer
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-5 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="anggota"
              id="anggota"
              type="number"
              placeholder="Masukkan jumlah anggota"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="Date">
              Timeline Kegiatan Volunteer
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-5 px-6 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              name="date"
              id="date"
              type="date"
              required
            />
          </div>

          <div className="">
            <label htmlFor="idcard" className="block text-gray-600">
              ID Card Penanggung Jawab
              <div className="shadow-sm appearance-none border rounded w-full py-5 px-6 mt-2 text-gray-400 leading-tight focus:outline-none focus:shadow-outline">
                <input
                  type="file"
                  id="idcard"
                  name="idcard"
                  accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
                  className=""
                  required
                />
              </div>
            </label>
            <br></br>
          </div>

          <div className="">
            <label htmlFor="idcard" className="block text-gray-600">
              Proposal Kegiatan
              <div className="shadow-sm appearance-none border rounded w-full py-5 px-6 mt-2 text-gray-400 leading-tight focus:outline-none focus:shadow-outline">
                <input
                  type="file"
                  id="idcard"
                  name="idcard"
                  accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
                  className=""
                  required
                />
              </div>
            </label>
            <br></br>
          </div>
          <p>Syarat & Ketentuan</p>
          <div className="shadow-sm appearance-none border rounded w-full py-5 px-6 mt-2 text-gray-600 leading-tight focus:outline-none focus:shadow-outline">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga doloremque incidunt consectetur, placeat
            similique corporis sapiente voluptates! Eligendi, ea veniam sequi culpa, harum tenetur, non incidunt
            voluptatem reiciendis architecto blanditiis doloribus sunt quam fuga facere. Ipsum temporibus, natus, autem
            dolore distinctio, aliquid accusamus quasi sequi dolorem recusandae et laborum fugiat. Asperiores fugiat
            provident ullam esse nostrum expedita quae itaque laudantium quos, soluta doloribus possimus error
            reprehenderit ex eligendi quia officia. <br></br>
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem officia tempora distinctio fugit nisi
            doloremque eligendi? Qui, nam consectetur repudiandae omnis culpa asperiores architecto provident velit
            possimus. Commodi quo, ratione porro repellat exercitationem impedit minus reiciendis magni beatae. Culpa a
            ipsum quia explicabo enim vitae cumque nostrum labore quibusdam inventore.
          </div>
          <div className="mt-5 text-center">
            <input type="checkbox" id="agree" className="mx-2" onChange={checkboxHandler} />
            <label htmlFor="agree">Saya telah membaca dan mensetujui syarat & ketentuan yang berlaku</label>
          </div>

          <div className="flex items-center justify-between">
            <button
              disabled={!agree}
              id="submit"
              className={` ${
                agree ? "" : "disabled:opacity-50 cursor-not-allowed"
              } bg-green-500 hover:bg-green-600 text-white font-bold p-4 rounded focus:outline-none focus:shadow-outline w-3/4 mx-auto my-5`}
              type="submit"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
