import headerBg from "../../assets/bg.png";
const Header = () => {
  return (
    <>
      <div
        className="bg_profile_desa relative z-10"
        // menampilkan gambar ketika di klik
        style={{
          backgroundImage: `url(${headerBg})`,
        }}
      >
        <div className="bg_overlay_profile_desa"></div>
        <div className="flex min-h-full">
          <div className="m-auto text-white text-center">
            <div className="text-5xl font-sans font-bold tracking-wide">Desa Menawan</div>
            <div className="mt-3  font-sans text-yellow-primary">Kabupaten Kudus, Jawa Tengah</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
