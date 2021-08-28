import { useState } from 'react';

const TabFAQ = () => {
    const [active, setActive] = useState("");
    const [click, setClick] = useState(true);
    const handleTab1 = () => {
        if (click === true) {
            setActive("expanded1");
            setClick(false)
        } else {
            setActive("")
            setClick(true)
        }
    };
    const handleTab2 = () => {
        if (click === true) {
            setActive("expanded2");
            setClick(false)
        } else {
            setActive("")
            setClick(true)
        }
    };
    return (
        <>
            <div className="py-5 text-center font-bold">
                Pertanyaan Yang Sering Ditanyakan
            </div>
            <div className="px-10 pb-5">
                <div className="bg-white rounded-full py-4 px-10 mb-5" onClick={handleTab1}>
                    Mengapa Desa ini butuh investasi?
                </div>
                {
                    active === "expanded1" ?
                        <div className="bg-white rounded-lg py-4 px-10 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam mauris ante, quis consectetur dui semper ac. Nulla ultricies, mi vel dignissim condimentum, enim metus pulvinar ex, non placerat arcu massa eget sapien. Fusce rutrum, nisl non ornare hendrerit, massa enim gravida tortor, scelerisque fringilla ipsum justo ut augue. Donec efficitur sagittis mollis. Nulla pellentesque dignissim diam, at rutrum nulla mollis eget. Ut fringilla, ex id maximus vehicula, sem enim scelerisque mauris, sit amet efficitur ante ligula scelerisque enim. In lorem odio, pellentesque vel elit sed, consequat rhoncus leo. Nulla ut congue libero, vel dignissim risus. Cras malesuada mi ut urna hendrerit, eu sagittis sem consectetur. Vivamus non est mi.
                            Nam molestie placerat ipsum in rutrum. Vestibulum odio leo, finibus sed nibh id, laoreet fermentum metus. Praesent ut ante quis orci condimentum rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse nec aliquet felis. Aliquam orci arcu, tincidunt eget lorem quis, interdum pellentesque justo. Quisque vitae odio ullamcorper, auctor eros lacinia, hendrerit nulla. Proin fermentum tellus sed massa consequat vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Sed sed ultricies ipsum. Donec accumsan magna nulla, eu ornare arcu maximus vitae. Maecenas ultricies tellus ac commodo tincidunt. Nam vestibulum ornare faucibus. Suspendisse elementum massa sed arcu venenatis, a egestas sem fringilla. Aenean id imperdiet dui, in finibus magna. Etiam rhoncus vel orci convallis aliquam. In volutpat consequat felis eu faucibus. Praesent dignissim mi ut dolor placerat, eu consectetur neque ornare.
                            Vivamus sodales est a odio bibendum, sed interdum massa sodales. Nulla congue condimentum turpis, vel tempus dolor. Fusce tincidunt nisl nisl, eget consequat ante semper ac. Suspendisse congue nunc luctus nulla efficitur feugiat. Integer scelerisque turpis et massa varius fermentum. Duis scelerisque, est sed volutpat sollicitudin, leo metus tincidunt justo, at dictum velit elit eget est. Quisque vitae blandit quam. Phasellus justo lorem, pharetra in ultricies quis, fermentum auctor neque. Donec sodales mi vitae volutpat bibendum. Mauris euismod quam turpis, vitae suscipit metus bibendum sed.
                        </div>
                        :
                        <div></div>
                }
                <div className="bg-white rounded-full py-5 px-10 mb-5" onClick={handleTab2}>
                    Mengapa Desa ini butuh investasi?
                </div>
                {
                    active === "expanded2" ?
                        <div className="bg-white rounded-lg py-4 px-10 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam mauris ante, quis consectetur dui semper ac. Nulla ultricies, mi vel dignissim condimentum, enim metus pulvinar ex, non placerat arcu massa eget sapien. Fusce rutrum, nisl non ornare hendrerit, massa enim gravida tortor, scelerisque fringilla ipsum justo ut augue. Donec efficitur sagittis mollis. Nulla pellentesque dignissim diam, at rutrum nulla mollis eget. Ut fringilla, ex id maximus vehicula, sem enim scelerisque mauris, sit amet efficitur ante ligula scelerisque enim. In lorem odio, pellentesque vel elit sed, consequat rhoncus leo. Nulla ut congue libero, vel dignissim risus. Cras malesuada mi ut urna hendrerit, eu sagittis sem consectetur. Vivamus non est mi.
                            Nam molestie placerat ipsum in rutrum. Vestibulum odio leo, finibus sed nibh id, laoreet fermentum metus. Praesent ut ante quis orci condimentum rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse nec aliquet felis. Aliquam orci arcu, tincidunt eget lorem quis, interdum pellentesque justo. Quisque vitae odio ullamcorper, auctor eros lacinia, hendrerit nulla. Proin fermentum tellus sed massa consequat vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Sed sed ultricies ipsum. Donec accumsan magna nulla, eu ornare arcu maximus vitae. Maecenas ultricies tellus ac commodo tincidunt. Nam vestibulum ornare faucibus. Suspendisse elementum massa sed arcu venenatis, a egestas sem fringilla. Aenean id imperdiet dui, in finibus magna. Etiam rhoncus vel orci convallis aliquam. In volutpat consequat felis eu faucibus. Praesent dignissim mi ut dolor placerat, eu consectetur neque ornare.
                            Vivamus sodales est a odio bibendum, sed interdum massa sodales. Nulla congue condimentum turpis, vel tempus dolor. Fusce tincidunt nisl nisl, eget consequat ante semper ac. Suspendisse congue nunc luctus nulla efficitur feugiat. Integer scelerisque turpis et massa varius fermentum. Duis scelerisque, est sed volutpat sollicitudin, leo metus tincidunt justo, at dictum velit elit eget est. Quisque vitae blandit quam. Phasellus justo lorem, pharetra in ultricies quis, fermentum auctor neque. Donec sodales mi vitae volutpat bibendum. Mauris euismod quam turpis, vitae suscipit metus bibendum sed.
                        </div>
                        :
                        <div></div>
                }
            </div>
        </>
    );
}

export default TabFAQ;