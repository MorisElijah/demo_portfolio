import Reveal from "@/components/Reveal";
import Link from "next/link";

const skills = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"];

export default function Home() {
  return (
    <div className="space-y-32">
      <section className="min-h-[60vh] flex flex-col justify-center">
        <Reveal>
          <p className="text-indigo-400 mb-2">Hi, I&apos;m Moris Elijah 👋</p>
        </Reveal>
        <Reveal delay={0.15}>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Junior <span className="text-indigo-400">Full Stack</span> Developer
          </h1>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-6 text-gray-400 max-w-xl">
            I build fast, modern web apps from the database to the user interface.
          </p>
        </Reveal>
        <Reveal delay={0.45}>
          <div className="mt-8 flex gap-4">
            <Link href="/projects" className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition">
              View Projects
            </Link>
            <Link href="/book" className="px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition">
              Book Us
            </Link>
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <Reveal key={s} delay={i * 0.08}>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500 hover:-translate-y-1 transition">
                {s}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}