import lampu from "../../assets/lampu.svg";

const Profiledesa = () => {
  return (
    <>
      <div className=" pt-8 pb-6 shadow-md rounded-3xl ">
        <div className="mx-24">
          <div className="text-2xl font-bold text-green-500">Profile Desa Menawan</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-52 my-2">
            <table className="table-auto">
              <tbody>
                <tr>
                  <td>Kecamatan</td>
                  <td className="px-7">:</td>
                  <td>Gebog</td>
                </tr>
                <tr className="bg-emerald-200">
                  <td>Kabupaten</td>
                  <td className="px-7">:</td>
                  <td>Kudus</td>
                </tr>
              </tbody>
            </table>
            <table className="table-auto">
              <tbody>
                <tr>
                  <td>Provinsi</td>
                  <td className="px-7">:</td>
                  <td>Gebog</td>
                </tr>
                <tr className="bg-emerald-200">
                  <td>Kepala Desa</td>
                  <td className="px-7">:</td>
                  <td>Tri Lestari, SE</td>
                </tr>
              </tbody>
            </table>
            <div className="bg-gray-200 px-2 relative rounded-xl">
              <img src={lampu} alt="" className="relative inline bottom-14 right-12" style={{ width: 70 }} />
              <p className="text-center text-sm text-gray-600 relative bottom-8">
                Menurut Indikator Desa Mandiri (IDM), Desa Menawan masih berstatus <b>Desa Berkembang</b>. <br></br>Yuk
                bantu Desa Menawan menjadi Desa Mandiri
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profiledesa;
