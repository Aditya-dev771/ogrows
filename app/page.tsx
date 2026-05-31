import Image from "next/image";

const gallery = Array.from({ length: 30 }, (_, i) => i + 1);
const featured = [3, 6, 8, 12, 15, 30];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050b0e] text-white">
      <section className="relative min-h-screen px-6 py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#65a8c766,transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/characters/logo.png"
              alt="OGROWs Logo"
              width={48}
              height={48}
              className="border-4 border-black bg-[#65a8c7]"
            />
            <span className="text-xl font-black tracking-widest">OGROWs</span>
          </div>

          <a
            href="https://x.com/OGROWs_"
            target="_blank"
            className="rounded-full border border-white/15 px-5 py-2 text-sm font-bold text-white/70 hover:text-white"
          >
            @OGROWs_
          </a>
        </nav>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-90px)] max-w-7xl items-center gap-12 py-16 lg:grid-cols-2">
          <div>
            <p className="mb-5 inline-block rounded-full border border-[#b9ff5c]/30 bg-[#b9ff5c]/10 px-4 py-2 text-sm font-black uppercase tracking-[0.25em] text-[#b9ff5c]">
              Coming Soon on Ethereum
            </p>

            <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
              OGROWs is coming on{" "}
              <span className="text-[#65a8c7]">Ethereum</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65 md:text-xl">
              A collection of 5,555 handmade pixel characters built with 107
              unique traits, bold silhouettes, and clean retro identity.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="https://x.com/OGROWs_"
                target="_blank"
                className="rounded-2xl bg-[#b9ff5c] px-7 py-4 font-black text-black shadow-[0_0_45px_rgba(185,255,92,0.22)]"
              >
                Follow OGROWs
              </a>

              <a
                href="#gallery"
                className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 font-black text-white"
              >
                View Gallery
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {[
                ["5,555", "Supply"],
                ["107", "Traits"],
                ["ETH", "Chain"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur"
                >
                  <b className="block text-3xl">{value}</b>
                  <span className="text-xs font-black uppercase tracking-widest text-white/45">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative grid min-h-[520px] place-items-center">
            <div className="absolute h-[380px] w-[380px] border-[42px] border-black bg-[#65a8c7] shadow-[0_0_100px_rgba(101,168,199,0.25)]" />

            <Image
              src="/characters/logo.png"
              alt="OGROWs Logo"
              width={170}
              height={170}
              className="absolute z-10 bg-[#65a8c7] p-3 shadow-[12px_12px_0_#000]"
            />

            {featured.map((id, index) => (
              <Image
                key={id}
                src={`/characters/${id}.png`}
                alt={`OGROW ${id}`}
                width={118}
                height={118}
                className={`absolute z-20 border-4 border-black bg-[#65a8c7] shadow-[9px_9px_0_#000] transition hover:scale-110 ${
                  [
                    "left-2 top-10",
                    "right-4 top-10",
                    "left-0 bottom-24",
                    "right-0 bottom-24",
                    "top-0",
                    "bottom-0",
                  ][index]
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#b9ff5c]">
              Collection Preview
            </p>
            <h2 className="text-5xl font-black uppercase tracking-tight md:text-7xl">
              Explore OGROWs
            </h2>
          </div>

          <p className="max-w-md text-white/55">
            A preview of handmade OGROWs characters from the upcoming Ethereum
            collection.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
          {gallery.map((id) => (
            <Image
              key={id}
              src={`/characters/${id}.png`}
              alt={`OGROW ${id}`}
              width={220}
              height={220}
              className="w-full border-4 border-black bg-[#65a8c7] shadow-[7px_7px_0_#000] transition hover:-translate-y-2 hover:scale-105"
            />
          ))}
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 px-6 py-10 text-white/45 md:flex-row">
        <p>© OGROWs. Grow Different.</p>
        <a href="https://x.com/OGROWs_" target="_blank" className="text-white">
          @OGROWs_
        </a>
      </footer>
    </main>
  );
}