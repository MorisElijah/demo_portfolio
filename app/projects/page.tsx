import Reveal from "@/components/Reveal";

const projects = [
  { title: "Task Manager", desc: "A full stack to-do app with login.", tech: "Next.js · PostgreSQL" },
  { title: "Weather App", desc: "Live forecasts using a public API.", tech: "React · REST API" },
  { title: "Blog Platform", desc: "Write, edit and publish posts.", tech: "Node.js · Express · MongoDB" },
];

export default function Projects() {
  return (
    <div>
      <Reveal><h1 className="text-4xl font-bold mb-10">Projects</h1></Reveal>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500 hover:-translate-y-1 transition h-full">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="text-gray-400 mt-2">{p.desc}</p>
              <p className="text-indigo-400 text-sm mt-4">{p.tech}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}