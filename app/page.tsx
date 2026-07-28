import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-xl text-center space-y-6">
        
        {/* Header / Brand Logo */}
        <div className="flex flex-col items-center justify-center gap-3">
          <Image
            src="/logo.PNG"
            alt="Game Time Logo"
            width={120}
            height={120}
            priority
            className="h-auto w-auto max-h-24 object-contain"
          />
          <h1 className="text-4xl font-extrabold tracking-tight text-amber-500">
            Game Time
          </h1>
        </div>

        <p className="text-gray-400 text-sm sm:text-base">
          Plan your complete sports travel itinerary (tickets, flights, hotels).
        </p>

        {/* Form Container */}
        <div className="bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-slate-800 text-left space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">
              Game / Event
            </label>
            <input
              type="text"
              placeholder="e.g. Mavericks @ Celtics"
              className="w-full bg-[#334155] border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1">
                Date
              </label>
              <input
                type="text"
                placeholder="March 14"
                className="w-full bg-[#334155] border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1">
                Departure City
              </label>
              <input
                type="text"
                placeholder="Austin"
                className="w-full bg-[#334155] border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1">
                Total Budget
              </label>
              <input
                type="text"
                placeholder="$1200"
                className="w-full bg-[#334155] border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-lg transition-colors text-sm">
            Generate Custom Itinerary
          </button>
        </div>

      </div>
    </main>
  );
}