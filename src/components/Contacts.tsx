"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Mails, PhoneOutgoing, Smartphone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import InquiryForm from "./InquiryForm";

const Contacts = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section>
      <aside className="flex gap-6 m-auto justify-center items-center">
        {/* EMAIL */}
        <div>
          <Dialog>
            <DialogTrigger className="flex flex-col items-center">
              <Mails className="text-blue-600" />
            </DialogTrigger>
            <DialogContent className="bg-white flex align-middle justify-center p-4">
              <DialogHeader>
                <DialogTitle className="text-center font-bold text-primary">
                  Contact Us
                </DialogTitle>
                <div>
                  <InquiryForm />
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        {/* PHONE */}
        <div>
          <Dialog>
            <DialogTrigger className="flex flex-col items-center">
              <PhoneOutgoing className="text-blue-600" />
            </DialogTrigger>
            <DialogContent className="p-0 bg-white">
              <DialogHeader>
                <DialogTitle className="text-center font-bold text-primary">
                  Contact Us
                </DialogTitle>
                <div className="flex flex-col bg-white justify-center items-center gap-5 m-3 text-sm text-muted-foreground">
                  <div className="flex items-center pt-3">
                    <Smartphone className="text-blue-600" />
                    <div>+81 70-3369-4539</div>
                  </div>
                  <div className="flex items-center pb-3">
                    <Smartphone className="text-blue-600" />
                    <div>+81 90-5416-5083</div>
                  </div>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        {/* LINE */}
        <div>
          <Dialog>
            <DialogTrigger className="flex flex-col items-center">
              <Image src="/LINE_logo.svg" alt="line" width={32} height={32} />
            </DialogTrigger>
            <DialogContent className="p-0">
              <DialogHeader>
                <DialogTitle className="text-center font-bold text-primary">
                  Contact Us
                </DialogTitle>
                <DialogDescription className="flex bg-white justify-center">
                  <Image
                    src="/line-qr1.png"
                    alt="Line1"
                    width={150}
                    height={150}
                  />
                  <Image
                    src="/line-qr2.png"
                    alt="Line2"
                    width={150}
                    height={150}
                  />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        {/* WHATSAPP */}
        <div>
          <Dialog>
            <DialogTrigger className="flex flex-col items-center">
              <Image
                src="/WhatsApp.svg"
                alt="whatsapp"
                width={32}
                height={32}
              />
            </DialogTrigger>
            <DialogContent className="p-0">
              <DialogHeader>
                <DialogTitle className="text-center font-bold text-primary">
                  Contact Us
                </DialogTitle>
                <DialogDescription className="flex bg-white justify-center">
                  <Image
                    src="/Wapp-qr1.png"
                    alt="Whatsapp1"
                    width={150}
                    height={150}
                  />
                  <Image
                    src="/Wapp-qr2.png"
                    alt="Whatsapp2"
                    width={150}
                    height={150}
                  />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </aside>
    </section>
  );
};

export default Contacts;
