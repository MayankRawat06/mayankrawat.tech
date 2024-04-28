import Link from "next/link";

const projects = [
  {
    name: "Tronix.Inc",
    description: "A full stack E-COM Store with dedicated Admin Panel",
    href: "https://github.com/projectTronix",
  },
  {
    name: "ERRS",
    description: "An Employee Recognition and Reward System",
    href: "https://github.com/MayankRawat06/ERRS",
  },
  {
    name: "MixItUp",
    description: "A music mashup generator",
    href: "https://github.com/MayankRawat06/MixItUp",
  },
  {
    name: "Tablytix",
    description: "Analyze, redact logos, and extract tables from documents",
    href: "http://tablytix.vercel.app",
  },
  {
    name: "RankIt",
    description: "A Customizable Ranking Platform.",
    href: "https://github.com/MayankRawat06/RankIt",
  },
];

export default function Projects() {
  return (
    <div>
      <h2 className="mb-6 text-xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-6">
        {projects.map(({ name, description, href }) => (
          <div key={name}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              <h3 className="text-white font-semibold">{name}</h3>
            </Link>
            <p>{description}</p>
          </div>
        ))}
        <div className="self-center">
          <span>
            And many more on my{" "}
            <Link
              href="https://github.com/MayankRawat06"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Github
            </Link>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}