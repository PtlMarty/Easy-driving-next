import About from "../components/About";
import CardSection from "../components/CardSection";
import Contacts from "../components/Contacts";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="w-full ">
      <Header />
      <Hero className="flex justify-center" />
      <CardSection ClassName="flex xl:flex-row w-auto items-center justify-evenly gap-6 my-6 overflow-hidden" />
      <About />
      <Contacts className="sticky bottom-3 z-30 my-12" />
    </main>
  );
}
