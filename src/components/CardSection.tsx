import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

const CardSection = ({ ClassName }: { ClassName: string }) => {
  return (
    <section
      className={`flex sm:flex-col gap-3 justify-center m-auto ${ClassName}`}
    >
      <div className="rounded-xl card-section">
        <Card className="size-96 flex flex-col border-none shadow-none m-6 xl:m-16">
          <CardContent className="flex flex-col justify-center items-center flex-grow relative">
            <div className="relative w-full h-full">
              <Image
                src="/haneda.jpg"
                alt="haneda airport transfer"
                width={1110}
                height={300}
                className="absolute inset-0 w-full h-full object-cover opacity-25 "
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <Image
                  src="/logo-haneda.jpg"
                  alt=""
                  width={64}
                  height={300}
                  className="h-16 w-16"
                />
                <p>Your transfer From Haneda to your Hotel</p>
                <div className="flex justify-center items-center mt-3">
                  <CardFooter>
                    <Button variant={"default"}>Click Here</Button>
                  </CardFooter>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="rounded-xl card-section">
        <Card className="size-96 flex flex-col border-none shadow-none m-6">
          <CardContent className="flex flex-col justify-center items-center flex-grow relative">
            <div className="relative w-full h-full">
              <Image
                src="/haneda.jpg"
                alt="haneda airport"
                width={1110}
                height={300}
                className="absolute inset-0 w-full h-full object-cover opacity-25 "
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <Image
                  src="/logo-haneda.jpg"
                  alt=""
                  width={64}
                  height={300}
                  className="h-16 w-16"
                />
                <p>Your transfer From Haneda to your Hotel</p>
                <div className="flex justify-center items-center mt-3">
                  <CardFooter>
                    <Button variant={"default"}>Click Here</Button>
                  </CardFooter>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="rounded-xl card-section">
        <Card className="size-96 flex flex-col border-none shadow-none m-6">
          <CardContent className="flex flex-col justify-center items-center flex-grow relative">
            <div className="relative w-full h-full">
              <Image
                src="/haneda.jpg"
                alt="haneda airport"
                width={1110}
                height={300}
                className="absolute inset-0 w-full h-full object-cover opacity-25 "
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <Image
                  src="/logo-haneda.jpg"
                  alt="Description de l'image"
                  width={64}
                  height={300}
                  className="h-16 w-16"
                />
                <p>Your transfer From Haneda to your Hotel</p>
                <div className="flex justify-center items-center mt-3">
                  <CardFooter>
                    <Button variant={"default"}>Click Here</Button>
                  </CardFooter>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CardSection;
