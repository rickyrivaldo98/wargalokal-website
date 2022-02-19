const HeaderCard = () => {
  return (
    <div className="card_header bg-white shadow-xl w-3/4 rounded-2xl mx-auto">
      <div className="card_content p-8 flex">
        <div className="left_content font-sans flex-1">
          <div className="title font-bold text-3xl">Pemanfaatan Teknologi di Sekolah Desa Makmur Jaya</div>
          <div className="sub_title font-semibold text-lg mt-4">5 Perusahaan sudah apply</div>
          <div className="desc_card text-sm mt-12 text-green-lightPrimary">Syarat dan ketentuan</div>
          <button className="button p-3 bg-green-lightPrimary w-48 h-12 mt-16 rounded-full shadow-lg opacity-80 hover:opacity-100 ">
            <p className="text-center text-white">Apply</p>
          </button>
        </div>
        <div className="right_content flex-1">
          {/* TODO */}
          <span className="dot_green"></span>
          <span className="dot_yellow"></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
