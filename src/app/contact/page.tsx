import { ContactForm } from "@/components/contact-form";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <main
      className={cn(
        "flex px-6 md:px-10 flex-col md:flex-row items-center gap-x-8 w-full h-full py-20"
      )}
    >
      <div className="md:w-1/2">
        <h1
          className="text-2xl md:text-3xl font-medium relative before:absolute before:rounded-full max-w-fit
   before:w-3/5 before:h-1 before:bg-red-600 before:bottom-0 before:left-0 py-2.5 space-x-1.5"
        >
          <span className="text-red-600">Get in</span>
          <span>Touch</span>
        </h1>

        <p className="py-8 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam
          facilis eum aspernatur impedit possimus adipisci laborum illum dolores
          provident soluta praesentium, aliquid unde consequuntur aliquam
          cupiditate in ex iste. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Magni mollitia nihil consectetur vero error, cum
          minus. Consectetur fugit suscipit excepturi doloremque, cum,
        </p>
      </div>

      <div className={cn("py-5 px-2 md:px-5 w-full md:w-1/2")}>
        <ContactForm />
      </div>
    </main>
  );
}
