import Image from "next/image";
import Link from "next/link";
import Message from "@/components/message";
import github from "@/components/icons/github.svg"
import mail from "@/components/icons/mail.svg"
import x from "@/components/icons/x.svg"
import linkedin from "@/components/icons/linkedin.svg"

const contacts = [
    {
      name: "Github",
      href: "https://github.com/MayankRawat06",
      icon: <Image src={github} width={18} alt="Github.com" />
    },
    {
      name: "Mail",
      href: "mailto:mayank.rawat6802@gmail.com",
      icon: <Image src={mail} width={18} alt="mail" />
    },
    {
      name: "X",
      href: "https://x.com/MayankRawat0806",
      icon: <Image src={x} width={18} alt="X.com"/>
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/mayankrawat06/",
      icon: <Image src={linkedin} width={18} alt="linkedin.com"/>
    },
  ];

export default function Contact() {
    return (
        <div>
      <h2 className="mb-6 text-xl font-bold">Contact</h2>
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-10">
        <div className="flex flex-row justify-between sm:flex-col gap-2">
          {contacts.map(({ name, href, icon }) => (
            <div key={name}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center hover:text-white"
              >
                <span>{icon}</span>
                <span>{name}</span>
              </Link>
            </div>
          ))}
        </div>
        <Message />
      </div>
    </div>
    );
}