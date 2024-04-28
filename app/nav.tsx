import Link from "next/link";
import Logo from "@/components/logo";

export default function Nav() {
  return (
      <div className="my-14 flex items-center justify-between">
      <Logo />
      <nav className="flex gap-8">
        <Link
          href="https://github.com/MayankRawat06/resume/blob/main/MayankRawat.pdf"
          target="_blank"
          rel="noopner noreferrer"
          className="transition hover:text-white"
        >
          Resume
        </Link>
      </nav>
    </div>
  )
}

