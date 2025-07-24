import FileTypesTech from "../components/FileTypesTech";
import HeroSection from "../components/HeroSection";
import ThreeStep from "../components/ThreeStep";
import WhyChooseUs from "../components/WhyChooseUs";

function Home() {

    return <>
        <HeroSection/>
        <div className="my-12"></div>
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 min-h-[400px] flex flex-col justify-center">

        <ThreeStep/>
        <WhyChooseUs/>

        </section>
        <FileTypesTech/>
    </>
}

export default Home ; 