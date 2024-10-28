import About from "../components/About";
import CardSection from "../components/CardSection";
import Contacts from "../components/Contacts";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="w-full p-2 ">
      <Header />
      <Hero className="flex justify-center" />
      <CardSection ClassName="flex flex-col xl:flex-row items-center justify-center scroll-m-0 overflow-hidden" />
      <About />
      <Contacts />
    </main>
  );
}
