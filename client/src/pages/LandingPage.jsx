import Footer from "../components/landingPage/Footer";
import Header from "../components/landingPage/Header";
import Main from "../components/landingPage/Main";

const LandingPage = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-b from-blue-100 to-green-100 w-full">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default LandingPage;
