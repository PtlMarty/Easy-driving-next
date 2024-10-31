import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="flex items-center justify-center mx-8">
        <div className="xl:grid grid-flow-col gap-8 max-w-full  ">
          <aside className="grid gap-4">
            <div className="items-center flex flex-col justify-center">
              <h2 className="text-4xl text-primary font-extrabold text-center my-8">
                About Us
              </h2>
              <p className="m-4 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quis perspiciatis accusantium. Doloribus commodi, repudiandae
                minus eaque, quaerat magnam nostrum, quo sint animi soluta
                obcaecati pariatur aliquam deserunt expedita! Illum.
              </p>
            </div>
          </aside>
          <aside className="rounded-sm">
            <Image
              src="/group-person.jpg"
              alt="group"
              width={768}
              height={512}
              className="object-fit rounded-sm"
            />
          </aside>
        </div>
      </section>
    </>
  );
};

export default About;
