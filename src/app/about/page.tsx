import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Header from "@/components/Header";

function AboutPage() {
  //TODO: lock onscroll and add anchor points

  return (
    <>
      <main className="w-full p-2 ">
        <Header />
        <About />
        <Contacts />
      </main>
    </>
  );
}

export default AboutPage;
