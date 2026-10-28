"use client";
import { useState } from "react";

const days = [
  { value: "today", label: "Today" },
  { value: "tomorrow", label: "Tomorrow" },
  { value: "day_after_tomorrow", label: "Day after tomorrow" },
];

export default function Book() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [day, setDay] = useState("today");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, day }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setName("");
      setContact("");
      setDay("today");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-lg">
      <h1 className="text-4xl font-bold mb-2">Book Us</h1>
      <p className="text-gray-400 mb-8">Leave your details and we&apos;ll reach out.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm mb-1">Your name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-indigo-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Phone or email</label>
          <input
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-indigo-500 outline-none"
          />
        </div>

        <div>
          <p className="text-sm mb-2">When should we contact you?</p>
          <div className="space-y-2">
            {days.map((d) => (
              <label key={d.value} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="day"
                  value={d.value}
                  checked={day === d.value}
                  onChange={() => setDay(d.value)}
                />
                {d.label}
              </label>
            ))}
          </div>
        </div>

        <button
          disabled={status === "loading"}
          className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 transition"
        >
          {status === "loading" ? "Sending..." : "Book now"}
        </button>

        {status === "success" && <p className="text-green-400">Thank you! We&apos;ll be in touch. ✅</p>}
        {status === "error" && <p className="text-red-400">Something went wrong. Please try again.</p>}
      </form>
    </div>
  );
}