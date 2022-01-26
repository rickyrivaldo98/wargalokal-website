import { FormEvent, useState } from "react";
import { createVolunteer } from "src/api/volunteer/Volunteer";

export const FormVolunteer = () => {
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [membersCount, setMembersCount] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [idCard, setIdCard] = useState<string>("");
  const [proposal, setProposal] = useState<string>("");
  const onNameChange = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setName(value);
  };

  const onEmailChange = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setEmail(value);
  };

  const onPhoneNumberChange = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setPhoneNumber(value);
  };

  const onMembersCountChange = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setMembersCount(value);
  };

  const onStartDateChange = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setStartDate(value);
  };

  const onEndDateChange = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setEndDate(value);
  };

  const onIdCardChange = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setIdCard(value);
  };

  const onProposalChange = (event: FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setProposal(value);
  };

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  const saveVolunteer = async (event: FormEvent) => {
    event.preventDefault();
    const volunteer = {
      Name: name,
      Email: email,
      PhoneNumber: phoneNumber,
      MembersCount: membersCount,
      StartDate: startDate,
      EndDate: endDate,
      IdCard: idCard,
      Proposal: proposal,
    };
    console.log(volunteer);
    try {
      await createVolunteer(volunteer);
      console.log("SUCCESS!");
    } catch(error) {
      console.log(error);
    } finally {
      console.log("DONE");
    }
  };

  return (
    <>
      <div className=" flex items-center justify-center bg-gray-50">
        <form
          onSubmit={saveVolunteer}
          id="form"
          className="bg-white md:px-36 pt-6 pb-8 mb-4 p-5 w-full md:w-4/6 my-10 border-2 shadow-sm"
        >
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
              onChange={onNameChange}
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
              onChange={onEmailChange}
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
              onChange={onPhoneNumberChange}
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
              onChange={onMembersCountChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="Date">
              Timeline Kegiatan Volunteer - Mulai
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-5 px-6 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              name="date"
              id="date"
              type="date"
              onChange={onStartDateChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="Date">
              Timeline Kegiatan Volunteer - Berakhir
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-5 px-6 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
              name="date"
              id="date"
              type="date"
              onChange={onEndDateChange}
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
                  onChange={onIdCardChange}
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
                  onChange={onProposalChange}
                  required
                />
              </div>
            </label>
            <br></br>
          </div>
          <p className="text-gray-600">Syarat & Ketentuan</p>
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
};
