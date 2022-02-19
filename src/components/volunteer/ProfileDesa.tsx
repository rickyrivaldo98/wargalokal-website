const ProfileDesa = () => {
  return (
    <>
      <div className="flex-col">
        <div className="flex-1 flex mx-auto w-auto">
          <div className="flex-initial w-auto mx-auto flex-cols">
            <div className="flex-initial text-green-lightPrimary text-3xl font-bold mb-6">Profile Desa Menawan</div>
            <div className="flex-initial grid grid-cols-4 gap-4">
              <div className="text-lg font-semibold">Kecamatan</div>
              <div className="text-lg">: Gebog</div>
              <div className="text-lg font-semibold">Provinsi</div>
              <div className="text-lg">: Jawa Tengah</div>
              <div className="text-lg font-semibold">Kabupaten</div>
              <div className="text-lg">: Kudus</div>
              <div className="text-lg font-semibold">Kepala Desa</div>
              <div className="text-lg">: Tri Lestari, SE.</div>
            </div>
          </div>
          <div className="flex-initial w-72 p-6 rounded-3xl bg-yellow-light mx-auto">
            <div className="info"></div>
            <div className="text-center">
              Menurut Indikator Desa Mandiri (IDM) Desa Menawan masih berstatus Desa Berkembang
            </div>
            <div className="text-center mt-4 font-semibold">Yuk bantu Desa Menawan menjadi Desa Mandiri</div>
          </div>
        </div>
        <div className="flex-initial text-center">
          <button className="text-center mt-12 bg-yellow-primary w-96 p-3 rounded-full shadow-lg font-bold mx-auto opacity-80 hover:opacity-100">
            Detail Profile Desa
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileDesa;
