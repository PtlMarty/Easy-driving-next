import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

interface CardItemProps {
  imageSrc: string;
  logoSrc: string;
  altText: string;
}

const CardItem = ({ imageSrc, logoSrc, altText }: CardItemProps) => {
  return (
    <Card className="size-96 flex flex-col border-none shadow-none mt-3">
      <CardContent className="flex flex-col justify-center items-center flex-grow relative">
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={altText}
            width={1110}
            height={300}
            className="absolute  w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <Image
              src={logoSrc}
              alt="logo"
              width={64}
              height={300}
              className="h-16 w-16"
            />
            <p>Your transfer From Haneda to your Hotel</p>
            <div className="flex justify-center items-center mt-3 z-10">
              <CardFooter>
                <Button variant="default">Click Here</Button>
              </CardFooter>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardItem;
