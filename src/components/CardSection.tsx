import CardItem from "./CardItem"; // Import the CardItem component

const CardSection = ({ ClassName }: { ClassName: string }) => {
  return (
    <section
      className={`flex sm:flex-col gap-3 justify-center m-auto ${ClassName}`}
    >
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
    </section>
  );
};

export default CardSection;
