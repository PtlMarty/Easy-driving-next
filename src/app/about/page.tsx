import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Header from "@/components/Header";

function AboutPage() {
  //TODO: lock onscroll and add anchor points

  return (
    <>
      <main className="w-full">
        <Header />
        <About />
        <Contacts className="sticky bottom-0 mt-12z-30 justify-center ite bg-white h-[100px]" />
      </main>
    </>
  );
}

export default AboutPage;
