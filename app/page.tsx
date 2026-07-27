"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    game: "",
    date: "",
    origin: "",
    budget: "",
  });
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setItinerary(null);

    try {
      const response = await fetch("https://game-time-bot.com/api/plan-trip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setItinerary(data.itinerary);
      } else {
        alert("Failed to plan trip. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-6">
        <h1 className="text-4xl font-extrabold text-center text-amber-400">
          🏆 Game Time
        </h1>
        <p className="text-center text-slate-300">
          Plan your complete sports travel itinerary (tickets, flights, hotels).
        </p>

        <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded-xl space-y-4 shadow-lg">
          <div>
            <label className="block text-sm font-medium text-slate-300">Game / Event</label>
            <input
              type="text"
              placeholder="e.g. Mavericks @ Celtics"
              className="w-full mt-1 p-3 bg-slate-700 rounded-lg text-white border border-slate-600 focus:outline-none focus:border-amber-400"
              value={formData.game}
              onChange={(e) => setFormData({ ...formData, game: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300">Date</label>
              <input
                type="text"
                placeholder="March 14"
                className="w-full mt-1 p-3 bg-slate-700 rounded-lg text-white border border-slate-600 focus:outline-none focus:border-amber-400"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300">Departure City</label>
              <input
                type="text"
                placeholder="Austin"
                className="w-full mt-1 p-3 bg-slate-700 rounded-lg text-white border border-slate-600 focus:outline-none focus:border-amber-400"
                value={formData.origin}
                onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300">Total Budget</label>
              <input
                type="text"
                placeholder="$1200"
                className="w-full mt-1 p-3 bg-slate-700 rounded-lg text-white border border-slate-600 focus:outline-none focus:border-amber-400"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Gathering Options..." : "Generate Custom Itinerary"}
          </button>
        </form>

        {itinerary && (
          <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 whitespace-pre-wrap text-slate-200">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">📋 Your Custom Itinerary</h2>
            {itinerary}
          </div>
        )}
      </div>
    </main>
  );
}