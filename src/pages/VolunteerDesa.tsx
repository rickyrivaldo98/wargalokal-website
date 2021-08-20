import TabDeskripsi from "src/components/volunteer/tabDeskripsi"
import TabPerkembangan from "src/components/volunteer/tabPerkembangan"
import Footer from "src/Layout/footer";
import Navbar from "src/Layout/navbar";
import headerBg from "../assets/bg.png";

const VolunteerDesa = () => {
    return (
        <>
            <Navbar />
            <div>
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
                            <div className="text-5xl  font-semibold tracking-wider">
                                Desa Menawan
                            </div>
                            <div className="mt-3 font-extralight">
                                Kabupaten Kudus, Jawa Tengah
                            </div>
                            <div className="mt-8 font-bold text-2xl">Pemanfaatan Teknologi di Sekolah Desa Makmur Jaya</div>
                        </div>
                    </div>
                    <div className="absolute h-22 w-1/2 bg-white border-4 -bottom-16 inset-center rounded-2xl px-4 py-3">
                        <div className="flex text-center w-full">
                            <div className="w-2/6 py-3">
                                <div>5 Perusahaan Sudah Apply</div>
                                <div className="mt-2 py-2 bg-primary text-white rounded-full">Peraturan syarat dan ketentuan disini</div>
                            </div>
                            <div className="w-3/6 py-6 px-3">
                                <div className="py-3 bg-primary text-white rounded-full">Apply!</div>
                            </div>
                            <div className="w-1/6"></div>
                        </div>
                    </div>
                </div>
                <div className="bg-white mt-20">
                    <TabDeskripsi />
                    <TabPerkembangan />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default VolunteerDesa;