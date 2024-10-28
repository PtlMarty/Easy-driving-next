import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="flex items-center justify-center">
        <div className="xl:grid grid-flow-col xl:grid-cols-2 gap-8 max-w-full m-6 items-center  ">
          <aside className="grid gap-4">
            <h2 className="text-4xl text-primary font-extrabold">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quis perspiciatis accusantium. Doloribus commodi, repudiandae
              minus eaque, quaerat magnam nostrum, quo sint animi soluta
              obcaecati pariatur aliquam deserunt expedita! Illum.
            </p>
          </aside>
          <aside className="rounded-md mt-3">
            <Image
              src="/Easy-driving-next/group-person.jpg"
              alt="group"
              width={768}
              height={512}
              className="object-cover rounded-xl"
            />
          </aside>
        </div>
      </section>
    </>
  );
};

export default About;
