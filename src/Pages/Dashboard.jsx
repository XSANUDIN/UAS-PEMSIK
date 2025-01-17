import ContentCard from "../Components/Content/ContentCard";
import Footer from "../Components/Footer";
import Gempa from "../Components/Gempa";
import Header from "../Components/Header";
import Magma from "../Components/Magma";
import SketchfabEmbed from "../Components/SketchfabEmbed";
import Weather from "../Components/Weather";
import PostForm from "./Post/Post";
import PostCard from "./Post/PostCard";

function Dashboard() {
    const contentData = [
        {
            image: "/merapi1.jpg",
            title: "Gunung Merapi",
            text: "(ketinggian puncak 2.930 mdpl, per 2010) (bahasa Jawa: ꦒꦸꦤꦸꦁꦩꦼꦫꦥꦶ, translit. Gunung Měrapi) adalah gunung berapi di bagian tengah Pulau Jawa dan merupakan salah satu gunung api teraktif di Indonesia. Lereng sisi selatan berada dalam administrasi Kabupaten Sleman, Daerah Istimewa Yogyakarta, dan sisanya berada dalam wilayah Provinsi Jawa Tengah, yaitu Kabupaten Magelang di sisi barat, Kabupaten Boyolali di sisi utara dan timur, serta Kabupaten Klaten di sisi tenggara. Kawasan hutan di sekitar puncaknya menjadi kawasan Taman Nasional Gunung Merapi sejak tahun 2004.",
        },
        {
            title: "3D Gunung Merapi",
            text: "3D model dari gunung merapi dari sketchfab tahun 2025 (dalam model merapi yang puncaknya tidak hijau)",
            embed: <SketchfabEmbed />,
        },
        {
            image: "./merapi2010.jpeg",
            title: "Kejadian di tahun 2010",
            text: "Letusan Merapi 2010 adalah rangkaian peristiwa gunung berapi yang terjadi di Merapi di Indonesia. Aktivitas seismik dimulai pada akhir September 2010, dan menyebabkan letusan gunung berapi pada hari Selasa tanggal 26 Oktober 2010, mengakibatkan sedikitnya 353 orang tewas, termasuk Mbah Maridjan.",
        },
        {
            image: "./merapisekarang.jpg",
            title: "Merapi Sekarang",
            text: "Hingga saat ini, Gunung Merapi yang berada Sleman, Magelang, Boyolali, Klaten Daerah Istimewa Yogyakarta dan Jawa Tengah itu masih berada pada status Level Siaga (Level 3) yang telah berlaku sejak 5 November 2020.",
        },
    ];

    return (
        <>
            <Header />
            <div className="flex justify-center my-8">
                <Weather />
            </div>


            <section className="container mx-auto px-6 p-10">
          

                <h1 className="font-bold text-6xl p-4 text-center mb-4">Gunung Merapi</h1>
                <div className="space-y-8">
                    {contentData.map((content, index) => (
                        <ContentCard
                            key={index}
                            image={content.image}
                            title={content.title}
                            text={content.text}
                            reverse={index % 2 !== 0}
                        >
                            {content.embed}
                        </ContentCard>
                    ))}
                </div>

                <PostForm/>
                <PostCard/>
            </section>
            <Footer />
        </>
    );
}

export default Dashboard;
