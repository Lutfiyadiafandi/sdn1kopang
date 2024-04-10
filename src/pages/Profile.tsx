import Achievement from "@/components/molecules/Achievement";
import History from "@/components/molecules/History";
import VisiMision from "@/components/molecules/VisiMision";
import Footer from "@/components/organism/Footer";
import Header from "@/components/organism/Header";
import TopNav from "@/components/organism/TopNav";

const Profile = () => {
  return (
    <main>
      <TopNav />
      <Header />
      <History />
      <VisiMision />
      <Achievement />
      <Footer />
    </main>
  );
};

export default Profile;
