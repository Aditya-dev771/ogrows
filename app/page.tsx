import Image from "next/image";
import MintCountdown from "@/components/MintCountdown";

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

  <div className="flex flex-wrap items-center justify-end gap-2">
<a
  href="https://opensea.io/collection/ogrow/overview"
  target="_blank"
  className="rounded-full bg-[#b9ff5c] px-5 py-3 text-sm font-black text-black"
>
  Mint
</a>    
<a
      href="https://x.com/OGROWs_"
      target="_blank"
      className="rounded-full bg-[#b9ff5c] px-5 py-3 text-sm font-black text-black"
    >
      Follow on X
    </a>

<a
  href="#roadmap"
  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black text-white hover:bg-white/10"
>
  Roadmap
</a>
    <a
      href="#gallery"
      className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black text-white hover:bg-white/10"
    >
      View Gallery
    </a>

    <a
      href="#about"
      className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-black text-white hover:bg-white/10"
    >
      About
    </a>

  </div>
</nav>
<MintCountdown />
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-90px)] max-w-7xl items-center gap-12 py-16 lg:grid-cols-2">
          <div>
            <p className="mb-5 inline-block rounded-full border border-[#b9ff5c]/30 bg-[#b9ff5c]/10 px-4 py-2 text-sm font-black uppercase tracking-[0.25em] text-[#b9ff5c]">
              Minting on 25 June
            </p>

            <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
              OGROWs{" "}
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65 md:text-xl">
              A collection of 5,555 handmade pixel characters built with 107
              unique traits, bold silhouettes, and clean retro identity.
            </p>

           
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

	<section id="roadmap" className="mx-auto max-w-7xl px-6 py-24">
  <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
    <div>
      <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#b9ff5c]">
        Roadmap
      </p>

      <h2 className="text-5xl font-black uppercase tracking-tight md:text-7xl">
        OGROWs Growth Framework
      </h2>
    </div>

    <p className="max-w-md text-white/55">
      A structured rollout focused on access, mint execution, community growth,
      and long-term brand development.
    </p>
  </div>

  <div className="relative">
    <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 md:block" />

    <div className="space-y-6">
      {[
  [
    "01",
    "Art + Website",
    "The OGROWs collection artwork and official website have been completed, establishing the foundation of the project and its visual identity.",
    ["Complete"],
  ],
  [
    "02",
    "Community Formation",
    "Building awareness, attracting collectors, and growing the OGROWs community through organic engagement and consistent updates.",
    ["Running"],
  ],
  [
    "03",
    "Mint on Ethereum",
    "Launch the OGROWs collection on Ethereum through a phased mint structure including GTD, Whitelist, and Public access.",
    ["Upcoming"],
  ],
  [
    "04",
    "Holder Layer",
    "Introduce holder-focused initiatives including rewards, collaborations, exclusive opportunities, and community participation.",
    ["Upcoming"],
  ],
  [
    "05",
    "Brand Expansion",
    "Expand OGROWs beyond the initial launch by strengthening the brand, increasing visibility, and creating long-term value for holders.",
    ["Upcoming"],
  ],
].map(([number, title, description, status]) => (
        <div
          key={title as string}
          className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur md:ml-16"
        >
          <div className="absolute -left-[4.7rem] top-7 hidden h-12 w-12 place-items-center rounded-full border border-[#b9ff5c]/30 bg-[#b9ff5c]/10 text-sm font-black text-[#b9ff5c] md:grid">
            {number as string}
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#b9ff5c]">
                Phase {number as string}
              </p>

              <h3 className="mt-3 text-3xl font-black uppercase">
                {title as string}
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-white/60">
                {description as string}
              </p>
            </div>

            <div
  className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-widest ${
    status[0] === "Complete"
      ? "bg-green-500/15 text-green-400"
      : status[0] === "Running"
      ? "bg-[#b9ff5c]/15 text-[#b9ff5c]"
      : "bg-blue-500/15 text-blue-400"
  }`}
>
  {status[0]}
</div>
          </div>
        </div>
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
<section
  id="about"
  className="mx-auto max-w-7xl px-6 py-24"
>
  <div className="mb-6">
    <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#b9ff5c]">
      About OGROWs
    </p>

    <h2 className="text-5xl font-black uppercase tracking-tight md:text-7xl">
      Grow Different
    </h2>
  </div>

  <div className="grid gap-10 lg:grid-cols-2">
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
      <h3 className="mb-6 text-3xl font-black">
        Handmade Pixel Identity
      </h3>

      <p className="mb-5 leading-8 text-white/70">
        OGROWs is a collection of 5,555 handmade pixel characters launching on Ethereum.
      </p>

      <p className="mb-5 leading-8 text-white/70">
        Built entirely from hand crafted artwork, OGROWs features 107 unique traits
        combined across a distinctive pixel art style. Every character is generated
        from a carefully designed trait system that celebrates creativity,
        individuality, and digital identity.
      </p>

      <p className="leading-8 text-white/70">
        Every pixel is intentionally crafted to preserve the authenticity of
        classic pixel art while creating a modern collectible experience.
      </p>
    </div>

    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
      <h3 className="mb-6 text-3xl font-black">
        Collection Vision
      </h3>

      <p className="mb-5 leading-8 text-white/70">
        OGROWs is focused on building a recognizable pixel brand around
        originality, community, and handmade digital art.
      </p>

      <p className="mb-5 leading-8 text-white/70">
        Rather than relying on AI generated assets, every character is rooted
        in hand crafted artwork, preserving artistic character and visual consistency.
      </p>

      <div className="mt-8 rounded-2xl border border-[#b9ff5c]/20 bg-[#b9ff5c]/5 p-6">
        <p className="text-2xl font-black text-[#b9ff5c]">
          Grow Different.
        </p>

        <p className="mt-2 text-white/60">
          5,555 characters • 107 traits • Ethereum
        </p>
      </div>
    </div>
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