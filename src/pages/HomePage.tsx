import Navbar from "../layout/newNavbar";
import Footer from "../layout/newFooter";
import headerBg from "../assets/bg-banner.jpg";
import tentang from "../assets/tentang.jpg";
import tujuanBG from "../assets/tujuan.png";
import check from "../assets/icons/check.png";
import rocket from "../assets/icons/rocket.png";
import chat from "../assets/icons/chat.png";
import partner from "../assets/partner.png";
import { useEffect } from "react";
import Slider from "react-slick";

// componentDidMount back to top of the page
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // const settings = {
  //   accessibility: false,
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  // };
  return (
    <>
      <Navbar />
      <div className="overflow-hidden">
        <div className="jumbotron relative mb-48 z-10" style={{ backgroundImage: `url(${headerBg})` }}>
          <div className="bg-overlay"></div>
          <div>
            <div className="container flex flex-col mx-auto">
              <h1
                data-aos="fade-up"
                className="md:text-8xl font-bold text-2xl text-white mt-60 md:mt-48 tracking-wider "
              >
                Warga Lokal
              </h1>
                <div className="mt-4">
                <p data-aos="fade-up" style={{color: "#FEC85B"}} className="filter drop-shadow-md text-white text-xl tracking-wide">
                  Bergerak Wujudkan Desa Mandiri
                </p>
                <button
                  style={{ background: "#1E9F78" }}
                  className="mt-5 transition ease-in  hover:bg-green-700 text-white py-2 px-6 rounded-full"
                >
                  Cari Desa
                </button>
              </div>
            </div>
           
          </div>
        </div>
        <div className="section-caridesa mb-20">
          <div className="container mx-auto">
            <h3 style={{color:"#1E9F78"}} className="text-6xl font-bold tracking-wide text-center mb-16">Desa Rekomendasi</h3>
            {/* <Slider {...settings}> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {/*First card*/}
              <div className="bg-white card-desa  rounded-lg">
                {/*Banner image*/}
                <img
                  className="w-full card_image" src="https://images.unsplash.com/photo-1603349206295-dde20617cb6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                />
                {/*Tag*/}
                <div className="card_desc p-7">
                  {/*Title*/}
                  <h1 style={{color:"#234C62"}} className="font-semibold text-gray-900 leading-none text-2xl mt-1 capitalize truncate">
                  Desa Pujo Kidul
                  </h1>
                  {/*Description*/}
                  <div className="">
                    <p className="text-base font-medium tracking-wide text-gray-600 mt-3">
                    Desa Pujon Kidul berada tepat di atas kawasan Payung, Batu, atau 29 kilometer dari pusat kota Malang. Kamu bisa mengunjungi pengolahan susu sapi, budi daya tanaman obat keluarga, air terjun Sumber Pitu, Kafe Sawah, kebun buah, dan masih banyak lagi.
                    </p>
                  </div>
                </div>
              </div>
              {/*End of first card*/}

              {/*Second Tag*/}
             <div className="bg-white card-desa rounded-lg">
                {/*Banner image*/}
                <img
                  className="w-full card_image" src="https://images.unsplash.com/photo-1603349206295-dde20617cb6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                />
                {/*Tag*/}
                <div className="card_desc p-7">
                  {/*Title*/}
                  <h1 style={{color:"#234C62"}} className="font-semibold text-gray-900 leading-none text-2xl mt-1 capitalize truncate">
                  Desa Pujo Kidul
                  </h1>
                  {/*Description*/}
                  <div className="">
                    <p className="text-base font-medium tracking-wide text-gray-600 mt-3">
                    Desa Pujon Kidul berada tepat di atas kawasan Payung, Batu, atau 29 kilometer dari pusat kota Malang. Kamu bisa mengunjungi pengolahan susu sapi, budi daya tanaman obat keluarga, air terjun Sumber Pitu, Kafe Sawah, kebun buah, dan masih banyak lagi.
                    </p>
                  </div>
                </div>
                
              </div>
              {/*End of second card*/}
            
              {/*Third  card*/}
            <div className="bg-white card-desa rounded-lg">
              <img  className="w-full card_image" src="https://images.unsplash.com/photo-1603349206295-dde20617cb6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                            />
                {/*Tag*/}
                <div className="card_desc p-7">
                  {/*Title*/}
                  <h1 style={{color:"#234C62"}} className="font-semibold text-gray-900 leading-none text-2xl mt-1 capitalize truncate">
                  Desa Pujo Kidul
                  </h1>
                  {/*Description*/}
                  <div className="">
                    <p className="text-base font-medium tracking-wide text-gray-600 mt-3">
                    Desa Pujon Kidul berada tepat di atas kawasan Payung, Batu, atau 29 kilometer dari pusat kota Malang. Kamu bisa mengunjungi pengolahan susu sapi, budi daya tanaman obat keluarga, air terjun Sumber Pitu, Kafe Sawah, kebun buah, dan masih banyak lagi.
                    </p>
                  </div>
                </div>
                
              </div>
              {/*End of third card*/}

            </div>
            {/* </Slider> */}
            {/*End of parent div*/}
          </div>
        </div>
        <div className="section-about h-screen">
          <div className="container mx-auto ">
            <div className="flex justify-center items-center h-screen">
                <div className="card-about flex flex-row gap-10 justify-center items-center">
                  <div className="card-about-image">
                      <img src={tentang} alt="tentang card" />
                  </div>
                  <div className="card-about-desc w-1/4">
                      <div className="mb-10">
                        <h2 className="text-5xl font-bold mb-5" style={{ color: "#1E9F78" }}>Tentang Kami</h2>
                          <p>
                          Warga Lokal merupakan social network platform untuk menjembatani Desa dengan jejaring sosial mereka.
                          </p>
                      </div>
                      <button
                        style={{ background: "#1E9F78" }}
                        className="mt-5 transition ease-in  hover:bg-green-700 font-bold text-white py-3 px-7 rounded-full">
                        Yuk cari tahu!
                    </button>
                  </div>
                </div>
              </div>
          </div>
        
        </div>
        <div className="section-vidprol">
          <div className="flex justify-center items-center">
            <h1 className="text-xl md:text-4 xl font-bold tracking-wide">
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
        <div className="section-tujuan my-24">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold tracking-wide mb-14">Apa Kata Mereka</h1>
          </div>
          <div className="flex justify-center items-center">
            <div className="each flex justify-center items-start rounded-lg shadow w-max text-gray-600 mb-5 bg-white mx-12 p-5">
              <div className="sec  p-2 pr-1">
                <img
                  className="h-10 w-10 border p-0.5 rounded-lg"
                  src="https://lh3.googleusercontent.com/ogw/ADea4I6N5g9eo7pju00pg3_BF7q6WGS4m6iEzuLJ4iRskA=s32-c-mo"
                />
              </div>
              <div className="sec self-center p-2 w-64">
                <div className="flex">
                  <div style={{color:"#234C62"}} className="name text-2xl font-bold tracking-wide mb-5">Connected Networks</div>
                </div>
                <div className="title text-base text-gray-400 -mt-1">Mempertemukan Desa dengan jaringan sosial diluar untuk memperbanyak Desa Mandiri</div>
              </div>
            </div>
            <div className="each flex justify-center items-start rounded-lg shadow w-max text-gray-600 mb-5 bg-white mx-12 p-5">
              <div className="sec  p-2 pr-1">
                <img
                  className="h-10 w-10 border p-0.5 rounded-lg"
                  src="https://lh3.googleusercontent.com/ogw/ADea4I6N5g9eo7pju00pg3_BF7q6WGS4m6iEzuLJ4iRskA=s32-c-mo"
                />
              </div>
              <div className="sec self-center p-2 w-64">
                <div className="flex">
                  <div style={{color:"#234C62"}} className="name text-2xl font-bold tracking-wide mb-5">Connected Networks</div>
                </div>
                <div className="title text-base text-gray-400 -mt-1">Mempertemukan Desa dengan jaringan sosial diluar untuk memperbanyak Desa Mandiri</div>
              </div>
            </div>
            <div className="each flex justify-center items-start rounded-lg shadow w-max text-gray-600 mb-5 bg-white mx-12 p-5">
              <div className="sec  p-2 pr-1">
                <img
                  className="h-10 w-10 border p-0.5 rounded-lg"
                  src="https://lh3.googleusercontent.com/ogw/ADea4I6N5g9eo7pju00pg3_BF7q6WGS4m6iEzuLJ4iRskA=s32-c-mo"
                />
              </div>
              <div className="sec self-center p-2 w-64">
                <div className="flex">
                  <div style={{color:"#234C62"}} className="name text-2xl font-bold tracking-wide mb-5">Connected Networks</div>
                </div>
                <div className="title text-base text-gray-400 -mt-1">Mempertemukan Desa dengan jaringan sosial diluar untuk memperbanyak Desa Mandiri</div>
              </div>
            </div>
            
            
          </div>
        </div>

        <div className="section-tujuan mb-20">
          <div className="flex">
            <div className="m-auto">
              <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="m-auto p-5 md:pl-20">
                  <h3 style={{color:"#1E9F78"}} className="text-2xl md:text-6xl text-center md:text-left font-bold tracking-wide mb-10  md:mb-20 w-3/5">
                  Bagaimana Cara Kerja Kami
                  </h3>
                  <div className="row-tujuan mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-wide">Langkah 1 - Daftarkan Desa</h3>
                    <p style={{ color: "#6C757D" }} className="w-2/3">
                    Desa membuat akun yang akan dipergunakan dalam melakukan segala kebutuhan Desa dalam pengembangan Desa Mandiri
                    </p>
                  </div>
                  <div className="row-tujuan mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-wide">Langkah 2 - Unggah Proyek Desa</h3>
                    <p style={{ color: "#6C757D" }} className="w-2/3">
                    Desa akan mengunggah proyek yang ingin diwujudkan di Warga Lokal setelah melakukan musyawarah Desa, kemudian proyek desa tersebut akan diserahkan suatu Networks
                    </p>
                  </div>
                  <div className="row-tujuan mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-wide">Langkah 3 - Desa Bertemu Networks</h3>
                    <p style={{ color: "#6C757D" }} className="w-2/3">
                    Networks akan memberikan respond terhadap proyek Desa tersebut, lalu Desa akan bertemu dengan Networks untuk membahas lebih lanjut akan proyek tersebut
                    </p>
                  </div>
                </div>
                <img  src={tujuanBG} alt="" />
           
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
