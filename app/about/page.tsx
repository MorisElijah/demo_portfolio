"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

/* ---------- Content ---------- */

const background = [
  {
    title: "React.js",
    text: "functional components, hooks (useState, useEffect, useContext, custom hooks), and reusable component architecture",
  },
  {
    title: "Modern JavaScript (ES6+) and TypeScript",
    text: "for clean, reliable code",
  },
  {
    title: "State management",
    text: "with Context API and Redux Toolkit",
  },
  {
    title: "Routing and data fetching",
    text: "with React Router, REST APIs, and tools like Axios and React Query",
  },
  {
    title: "Styling",
    text: "with HTML5, CSS3, Tailwind CSS, and responsive, mobile-first design",
  },
  {
    title: "Frameworks",
    text: "such as Next.js for faster load times and better SEO",
  },
  {
    title: "Tools and workflow",
    text: "Git and GitHub, npm, Vite, VS Code, and deployment on platforms like Vercel and Netlify",
  },
];

const reasons = [
  {
    title: "Performance-focused",
    text: "I optimize for fast load times, because slow sites lose visitors.",
  },
  {
    title: "Responsive by default",
    text: "Your site will look and work well on phones, tablets, and desktops.",
  },
  {
    title: "Clean, maintainable code",
    text: "I follow best practices so your site is easy to update and grow.",
  },
  {
    title: "User-centered design",
    text: "I build interfaces that are intuitive, accessible, and enjoyable to use.",
  },
  {
    title: "Clear communication",
    text: "I keep you updated at every stage and welcome your feedback.",
  },
  {
    title: "Reliable delivery",
    text: "I respect deadlines and treat your project as if it were my own.",
  },
];

const process = [
  {
    title: "Discovery",
    text: "I learn about your business, audience, and goals.",
  },
  {
    title: "Planning and design",
    text: "I map out the structure, pages, and features.",
  },
  {
    title: "Development",
    text: "I build your site in React with regular progress updates.",
  },
  {
    title: "Testing",
    text: "I check it across devices and browsers and fix any issues.",
  },
  {
    title: "Launch and support",
    text: "I deploy your site and stay available for updates and improvements.",
  },
];

/* ---------- Animation variants ---------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const slideIn: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const viewport = { once: true, amount: 0.2 };

/* ---------- Small building blocks ---------- */

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mb-10"
    >
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {children}
      </h2>
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={viewport}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-3 block h-1 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
      />
    </motion.div>
  );
}

/* ---------- Page ---------- */

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-300">
      {/* Animated background blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-4xl px-6 py-20 sm:py-28">
        {/* Hero */}
        <motion.section
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mb-24"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300"
          >
            About Me
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-extrabold leading-tight text-white sm:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Moris Elijah
            </span>
            , a web developer specializing in React.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
          >
            I build fast, modern, and user-friendly websites and web
            applications that look great on every device and help businesses
            reach their goals.
          </motion.p>
        </motion.section>

        {/* What I Do */}
        <section className="mb-24">
          <SectionTitle>What I Do</SectionTitle>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="text-lg leading-relaxed"
          >
            I design and develop custom websites and web apps using React and
            the modern JavaScript ecosystem. Whether you need a business
            website, an online store, a dashboard, or a full web application, I
            turn your ideas into a polished product that is easy to use and easy
            to maintain.
          </motion.p>
        </section>

        {/* My Background */}
        <section className="mb-24">
          <SectionTitle>My Background</SectionTitle>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mb-8 text-lg leading-relaxed"
          >
            I studied React development in depth and have built my skills
            through hands-on projects. My foundation covers:
          </motion.p>

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="space-y-4"
          >
            {background.map((item) => (
              <motion.li
                key={item.title}
                variants={slideIn}
                whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.06)" }}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                <p>
                  <strong className="font-semibold text-white">
                    {item.title}:
                  </strong>{" "}
                  {item.text}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </section>

        {/* Why Work With Me */}
        <section className="mb-24">
          <SectionTitle>Why Work With Me</SectionTitle>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="grid gap-5 sm:grid-cols-2"
          >
            {reasons.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
              >
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-slate-400">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* My Process */}
        <section className="mb-24">
          <SectionTitle>My Process</SectionTitle>
          <div className="relative">
            <motion.span
              aria-hidden
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={viewport}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ originY: 0 }}
              className="absolute left-5 top-2 h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-cyan-400 to-violet-500"
            />
            <motion.ol
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="space-y-8"
            >
              {process.map((step, i) => (
                <motion.li
                  key={step.title}
                  variants={slideIn}
                  className="relative flex gap-6 pl-0"
                >
                  <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white ring-2 ring-cyan-400">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-slate-400">{step.text}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </section>

        {/* CTA */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-600/10 p-8 text-center sm:p-12"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Build Something Great
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed">
            I&apos;m passionate about writing code that solves real problems and
            creates great experiences for users. If you&apos;re looking for a
            dedicated React developer who combines technical skill with a
            professional, client-focused approach, I&apos;d love to hear about
            your project.
          </p>

          <motion.div
            className="mt-8 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/book"
              className="inline-block rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </main>
  );
}