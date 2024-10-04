import FooterPage from "./Footer/page";
import Header from "./Header/page";
import HeroSection from "./Hero/page";
import Students from "./Students/page";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Students />
      <FooterPage />
    </div>
  );
}
