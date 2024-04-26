import Header from "@/components/allpages/Header";
import Navigation from "@/components/allpages/Navigation";
import Achievement from "@/components/perpages/Achievement";
import History from "@/components/perpages/History";
import VisiMision from "@/components/perpages/VisiMision";
import Footer from "@/components/allpages/Footer";

const Profile = () => {
  return (
    <main>
      <Header />
      <Navigation />
      <History />
      <VisiMision />
      <Achievement />
      <Footer />
    </main>
  );
};

export default Profile;
