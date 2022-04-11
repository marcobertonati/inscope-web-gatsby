import * as React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Mission from "../components/mission";
import Services from "../components/services";
import Contact from "../components/contact";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <main className="xl:mx-40">
      <title>Inscope</title>
      <Navbar />
      <Header />
      <Mission />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
};

export default IndexPage;
