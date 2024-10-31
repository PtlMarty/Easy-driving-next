import CardItem from "./CardItem"; // Import the CardItem component

const CardSection = ({ ClassName }: { ClassName: string }) => {
  return (
    <section className="flex- flex-col mt-6">
      <div className="font-extrabold text-primary text-4xl text-center">
        <h1>Our Services</h1>
      </div>
      <div className={`${ClassName}`}>
        <CardItem
          imageSrc="/haneda.jpg"
          logoSrc="/logo-haneda.jpg"
          altText="haneda airport transfer"
        />
        <CardItem
          imageSrc="/haneda.jpg"
          logoSrc="/logo-haneda.jpg"
          altText="haneda airport"
        />
        <CardItem
          imageSrc="/haneda.jpg"
          logoSrc="/logo-haneda.jpg"
          altText="haneda airport"
        />
      </div>
    </section>
  );
};

export default CardSection;
