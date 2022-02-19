const HeaderCard = () => {
  return (
    <div className="card_header bg-white shadow-xl w-3/4 rounded-2xl mx-auto">
      <div className="card_content p-8 flex">
        <div className="left_content font-sans flex-1">
          <div className="title font-bold text-xl md:text-3xl lg:w-1/2">
            Pemanfaatan Teknologi di Sekolah Desa Makmur Jaya
          </div>
          <div className="sub_title md:font-semibold md:text-lg mt-4">5 Perusahaan sudah apply</div>
          <div className="desc_card text-xs sm:text-sm sm:mt-12 mt-5 text-green-lightPrimary">Syarat dan ketentuan</div>
          <button className="absolute top-28 sm:top-0 sm:relative button p-3 bg-green-lightPrimary w-48 h-12 mt-16 rounded-full shadow-lg opacity-90 hover:opacity-100 ">
            <p className="text-center text-white">Apply</p>
          </button>
        </div>
        {/* Buat ilustrasi */}
        {/* <div className="right_content flex-auto"> */}
        {/* TODO */}
        {/* <span className="dot_green"></span> */}
        {/* <span className="dot_yellow"></span> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default HeaderCard;
