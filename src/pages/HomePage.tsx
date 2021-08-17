import Navbar from "../Layout/navbar";
import Footer from "../Layout/footer";
import headerBg from "../assets/bg.png";
import tentang from "../assets/tentang.png";
import tujuanBG from "../assets/tujuan.png";
import check from "../assets/icons/check.png";
import rocket from "../assets/icons/rocket.png";
import chat from "../assets/icons/chat.png";
import partner from "../assets/partner.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden">
        <div className="jumbotron relative mb-48 relative z-10" style={{ backgroundImage: `url(${headerBg})` }}>
          <div className="bg-overlay"></div>
          <div>
            <div className="flex justify-center items-center">
              <h1
                data-aos="fade-up"
                className="md:text-8xl font-bold text-lg text-white mt-48 tracking-wider text-center"
              >
                Warga <span style={{ color: "#33C633" }}>Lokal</span>
              </h1>
            </div>
            <div className="mt-10 flex flex-col justify-center items-center mt-2">
              <p data-aos="fade-up" className="filter drop-shadow-md text-white text-lg tracking-wide text-center">
                Bergerak Wujudkan Desa Mandiri
              </p>
              <button className="mt-5 transition ease-in bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-full">
                Cari Desa
              </button>
            </div>
          </div>
        </div>
        <div className="section-caridesa mb-20">
          <div className="container mx-auto">
            <h3 className="text-lg font-bold tracking-wide">Desa Rekomendasi</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/*First card*/}
              <div className="md:p-8 p-2 bg-white">
                {/*Banner image*/}
                <img
                  className="rounded-lg w-full"
                  src="https://images.unsplash.com/photo-1603349206295-dde20617cb6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80
    "
                />
                {/*Tag*/}
                <p className="text-indigo-500 font-semibold text-base mt-2">Science</p>
                {/*Title*/}
                <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
                  the life of albert einstein
                </h1>
                {/*Description*/}
                <div className="max-w-full">
                  <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati vel soluta dolore id nesciunt
                    eum nam ipsam, eveniet cupiditate sint veritatis harum odit. Iste dignissimos, ad provident nulla
                    voluptatum ut.
                  </p>
                </div>
                <div className="flex items-center space-x-2 mt-20">
                  {/*Author's profile photo*/}
                  <img
                    className="w-10 h-10 object-cover object-center rounded-full"
                    src="https://randomuser.me/api/portraits/men/54.jpg"
                    alt="random user"
                  />
                  <div>
                    {/*Author name*/}
                    <p className="text-gray-900 font-semibold">Lugano Shabani</p>
                    <p className="text-gray-500 font-semibold text-sm">Feb 24,2021 · 6 min read</p>
                  </div>
                </div>
              </div>
              {/*End of first card*/}
              {/*Second Tag*/}
              <div className="p-8 bg-white">
                {/*Banner image*/}
                <img
                  className="rounded-lg w-full"
                  src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80
    "
                />
                {/*Tag*/}
                <p className="text-indigo-500 font-semibold text-base mt-2">Startup stories</p>
                {/*Title*/}
                <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
                  The rise of facebook
                </h1>
                {/*Description*/}
                <div className="max-w-full">
                  <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, dignissimos repudiandae.
                    Consequuntur minus ipsam repudiandae soluta qui, recusandae obcaecati molestias commodi magnam nisi
                    illo illum quaerat aut maiores! Esse, aperiam!
                  </p>
                </div>
                <div className="flex items-center space-x-2 mt-20">
                  {/*Author's profile photo*/}
                  <img
                    className="w-10 h-10 object-cover object-center rounded-full"
                    src="https://randomuser.me/api/portraits/men/54.jpg"
                    alt="random user"
                  />
                  <div>
                    {/*Author name*/}
                    <p className="text-gray-900 font-semibold">Lugano Shabani</p>
                    <p className="text-gray-500 font-semibold text-sm">Feb 24,2021 · 6 min read</p>
                  </div>
                </div>
              </div>
              {/*End of first card*/}
              {/*Third  card*/}
              <div className="p-8 bg-white">
                {/*Banner image*/}
                <img
                  className="h-80 rounded-lg w-full object-cover object-center"
                  src="
  https://images.unsplash.com/photo-1580867532901-7e3707f178ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=732&q=80"
                />
                {/*Tag*/}
                <p className="text-indigo-500 font-semibold text-base mt-2">Culture</p>
                {/*Title*/}
                <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
                  the life of masaai people from tanzania
                </h1>
                {/*Description*/}
                <div className="max-w-full">
                  <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus officiis aspernatur, modi nobis et
                    neque quod asperiores laboriosam ab. Magni fugit necessitatibus ducimus placeat assumenda
                    perferendis laborum quae aperiam minus.
                  </p>
                </div>
                <div className="flex items-center space-x-2 mt-20">
                  {/*Author's profile photo*/}
                  <img
                    className="w-10 h-10 object-cover object-center rounded-full"
                    src="https://randomuser.me/api/portraits/men/54.jpg"
                    alt="random user"
                  />
                  <div>
                    {/*Author name*/}
                    <p className="text-gray-900 font-semibold">Lugano Shabani</p>
                    <p className="text-gray-500 font-semibold text-sm">Feb 24,2021 · 6 min read</p>
                  </div>
                </div>
              </div>
              {/*End of first card*/}
            </div>
            {/*End of parent div*/}
          </div>
        </div>
        <div className="section-about">
          <div className="flex h-screen">
            <div className="m-auto">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="m-auto">
                  <h3 className="text-3xl font-bold tracking-wide">Tentang Kami</h3>
                  <p style={{ color: "#6C757D" }} className="w-2/3">
                    WargaLokal merupakan social network platform untuk menjembatani Desa dengan jejaring sosial mereka.
                  </p>
                </div>
                <img src={tentang} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="section-vidprol">
          <div className="flex justify-center items-center">
            <h1 className="text-4xl font-bold tracking-wide">
              Video Profile <span style={{ color: "#33C633" }}>Warga Lokal</span>
            </h1>
            <div
              className="video"
              style={{
                position: "relative",
                paddingBottom: "56.25%" /* 16:9 */,
                paddingTop: 25,
                height: 0,
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                src="https://www.youtube.com/embed/qKwnlTVAGnA"
                title="YouTube video player"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
        <div className="section-tujuan mb-20">
          <div className="flex">
            <div className="m-auto">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img src={tujuanBG} alt="" />
                <div className="m-auto pl-20">
                  <h3 className="text-3xl font-bold tracking-wide mb-20">Tujuan Kami</h3>

                  <div className="row-tujuan mb-20">
                    <h3 className="text-3xl font-bold tracking-wide">Connected Networks</h3>
                    <p style={{ color: "#6C757D" }} className="w-2/3">
                      Mempertemukan Desa dengan jaringan sosial diluar untuk memperbanyak Desa Mandiri
                    </p>
                  </div>
                  <div className="row-tujuan mb-20">
                    <h3 className="text-3xl font-bold tracking-wide">Bridging Villages</h3>
                    <p style={{ color: "#6C757D" }} className="w-2/3">
                      Warga Lokal memiliki peran sebagai pengisi dari adanya kekosongan peran antara social capital dan
                      economic capital untuk mewujudkan Desa Mandiri.
                    </p>
                  </div>
                  <div className="row-tujuan mb-20">
                    <h3 className="text-3xl font-bold tracking-wide">Helping Villages</h3>
                    <p style={{ color: "#6C757D" }} className="w-2/3">
                      Membantu Desa memenuhi tiga dimensi Indeks Desa Mandiri Sosial, Ekonomi, dan Lingkungan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-carakerja">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold tracking-wide mb-14">Bagaimana Cara Kerja Kami</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="row-carakerja mb-12">
              <img className="w-20 m-auto pb-6" src={check} alt="" />
              <div className="flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl font-bold tracking-wide">Langkah 1 - Daftarkan Desa</h3>
                <p style={{ color: "#6C757D" }} className="w-2/3">
                  Desa membuat akun yang akan dipergunakan dalam melakukan segala kebutuhan Desa dalam pengembangan Desa
                  Mandiri
                </p>
              </div>
            </div>
            <div className="row-carakerja mb-12">
              <img className="w-20 m-auto pb-6" src={rocket} alt="" />
              <div className="flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl font-bold tracking-wide">Langkah 2 - Unggah Proyek Desa</h3>
                <p style={{ color: "#6C757D" }} className="w-2/3">
                  Desa akan mengunggah proyek yang ingin diwujudkan di WargaLokal setelah melakukan musyawarah Desa,
                  kemudian proyek desa tersebut akan diserahkan suatu Networks
                </p>
              </div>
            </div>
            <div className="row-carakerja mb-12">
              <img className="w-20 m-auto pb-6" src={chat} alt="" />
              <div className="flex flex-col justify-center items-center text-center">
                <h3 className="text-2xl font-bold tracking-wide">Langkah 3 - Desa Bertemu Networks</h3>
                <p style={{ color: "#6C757D" }} className="w-2/3">
                  Networks akan memberikan respond terhadap proyek Desa tersebut, lalu Desa akan bertemu dengan Networks
                  untuk membahas lebih lanjut akan proyek tersebut
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-partner my-24">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold tracking-wide mb-14">Partner Kami</h1>
            <img className="m-auto w-1/3 py-10" src={partner} alt="" />
          </div>
        </div>
        <div className="section-katamereka my-24">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold tracking-wide mb-14">Apa Kata Mereka</h1>
          </div>
          <div className="flex justify-center items-center">
            <div className="each flex rounded-full shadow w-max text-gray-600 mb-5 bg-white mx-12">
              <div className="sec self-center p-2 pr-1">
                <img
                  className="h-10 w-10 border p-0.5 rounded-full"
                  src="https://lh3.googleusercontent.com/ogw/ADea4I6N5g9eo7pju00pg3_BF7q6WGS4m6iEzuLJ4iRskA=s32-c-mo"
                />
              </div>
              <div className="sec self-center p-2 w-64">
                <div className="flex">
                  <div className="name text-md font-bold tracking-wide">Ricky Ricardo</div>
                </div>
                <div className="title text-xs text-gray-400 -mt-1">Perusahaan Mencari Cinta Abadi</div>
              </div>
            </div>
            <div className="each flex rounded-full shadow w-max text-gray-600 mb-5 bg-white mx-12">
              <div className="sec self-center p-2 pr-1">
                <img
                  className="h-10 w-10 border p-0.5 rounded-full"
                  src="https://lh3.googleusercontent.com/ogw/ADea4I6N5g9eo7pju00pg3_BF7q6WGS4m6iEzuLJ4iRskA=s32-c-mo"
                />
              </div>
              <div className="sec self-center p-2 w-64">
                <div className="flex">
                  <div className="name text-md font-bold tracking-wide">Ricky Ricardo</div>
                </div>
                <div className="title text-xs text-gray-400 -mt-1">Perusahaan Mencari Cinta Abadi</div>
              </div>
            </div>
            <div className="each flex rounded-full shadow w-max text-gray-600 mb-5 bg-white mx-12">
              <div className="sec self-center p-2 pr-1">
                <img
                  className="h-10 w-10 border p-0.5 rounded-full"
                  src="https://lh3.googleusercontent.com/ogw/ADea4I6N5g9eo7pju00pg3_BF7q6WGS4m6iEzuLJ4iRskA=s32-c-mo"
                />
              </div>
              <div className="sec self-center p-2 w-64">
                <div className="flex">
                  <div className="name text-md font-bold tracking-wide">Ricky Ricardo</div>
                </div>
                <div className="title text-xs text-gray-400 -mt-1">Perusahaan Mencari Cinta Abadi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
