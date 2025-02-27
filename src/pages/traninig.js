import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import Umbrella from "@components/traninig/Umbrella";
import Image from "@components/traninig/image";
import Table from "@components/traninig/table";
import Support from "@components/traninig/Support";
//import SupportOne from "@components/support/SupportOne";
//import TestimonialTwo from "@components/testimonial/TestimonialTwo";
import "@pages/traninig";

const Traninig = () => {
  return (
    <Layout title="Traninig" desc="this is traninig page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="This is the Traninig page. 🍄"
        desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
      />
      <Umbrella />
      <Image />
      <Support />
      <Table />
      <Footer footerLight />
    </Layout>
  );
};

export default Traninig;
