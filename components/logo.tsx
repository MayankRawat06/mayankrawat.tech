import Link from "next/link";

import { Dancing_Script } from "next/font/google";

const dancing_script = Dancing_Script({ subsets: ["latin"] });

export default function Logo() {
  return (
    <Link href="/">
      <h1
        className={`${dancing_script.className} text-xl sm:text-3xl transition hover:text-white`}
      >
        Mayank Rawat
      </h1>
    </Link>
  );
}