"use client";

import { useState } from "react";

type Result = {
  wallet: string;
  gtd: boolean;
  whitelist: boolean;
  public: boolean;
  accessLevel: "GTD Access" | "Whitelist Access" | "Public Access";
};

function shortenWallet(wallet: string) {
  return `${wallet.slice(0, 6)}...${wallet.slice(-5)}`;
}

function isValidWallet(wallet: string) {
  return /^0x[a-fA-F0-9]{40}$/.test(wallet);
}

async function loadCsv(path: string) {
  const res = await fetch(path);

  if (!res.ok) {
    throw new Error(`Could not load ${path}`);
  }

  const text = await res.text();

  return text
    .split(/\r?\n/)
    .map((line) => line.trim().toLowerCase())
    .filter((line) => line.startsWith("0x"));
}

export default function WalletChecker() {
  const [wallet, setWallet] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function checkWallet() {
    setError("");
    setResult(null);

    const cleanWallet = wallet.trim().toLowerCase();

    if (!isValidWallet(cleanWallet)) {
      setError("Please enter a valid Ethereum wallet address.");
      return;
    }

    try {
      setLoading(true);

      const gtdWallets = await loadCsv("/eligibility/gtd.csv");
      const whitelistWallets = await loadCsv("/eligibility/whitelist.csv");

      const gtd = gtdWallets.includes(cleanWallet);
      const whitelist = whitelistWallets.includes(cleanWallet);

      let accessLevel: Result["accessLevel"] = "Public Access";

      if (gtd) {
        accessLevel = "GTD Access";
      } else if (whitelist) {
        accessLevel = "Whitelist Access";
      }

      setResult({
        wallet: cleanWallet,
        gtd,
        whitelist,
        public: true,
        accessLevel,
      });
    } catch {
      setError("Eligibility files could not be loaded. Please check your CSV path.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="checker" className="mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur md:p-10">
        <div className="mb-10">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#b9ff5c]">
            Mint Access
          </p>

          <h2 className="text-5xl font-black uppercase tracking-tight md:text-7xl">
            OGROWs Launch Access
          </h2>

          <p className="mt-5 max-w-2xl text-white/60">
            Enter your wallet address to check your eligibility for GTD,
            Whitelist, and Public mint phases.
          </p>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {[
            ["Phase 1", "GTD", "Guaranteed mint allocation"],
            ["Phase 2", "Whitelist", "Priority mint access"],
            ["Phase 3", "Public", "Open mint for everyone"],
          ].map(([phase, title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-black/25 p-6"
            >
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#b9ff5c]">
                {phase}
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase">{title}</h3>
              <p className="mt-2 text-sm text-white/55">{text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <input
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
            placeholder="Enter wallet address 0x..."
            className="flex-1 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 font-bold text-white outline-none placeholder:text-white/30 focus:border-[#b9ff5c]/60"
          />

          <button
            onClick={checkWallet}
            disabled={loading}
            className="rounded-2xl bg-[#b9ff5c] px-8 py-4 font-black text-black shadow-[0_0_40px_rgba(185,255,92,0.18)] disabled:opacity-60"
          >
            {loading ? "Checking..." : "Check Access"}
          </button>
        </div>

        {error && (
          <p className="mt-5 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 font-bold text-red-300">
            {error}
          </p>
        )}

        {result && (
  <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-black/40">
    <div className="border-b border-white/10 bg-white/[0.04] p-6">
      <p className="text-xs font-black uppercase tracking-[0.3em] text-[#b9ff5c]">
        Eligibility Result
      </p>

      <h3 className="mt-3 text-4xl font-black uppercase">
        {result.accessLevel}
      </h3>

      <p className="mt-3 break-all text-sm font-bold text-white/50">
        {result.wallet}
      </p>
    </div>

    <div className="grid gap-4 p-6 md:grid-cols-3">
      <AccessCard title="GTD" label="Guaranteed Allocation" active={result.gtd} />
      <AccessCard title="Whitelist" label="Priority Access" active={result.whitelist} />
      <AccessCard title="Public" label="Open Access" active={true} />
    </div>

    <div className="border-t border-white/10 p-6">
      <p className="text-lg font-bold text-white/75">
        {result.gtd
          ? "This wallet has the highest launch priority with GTD access."
          : result.whitelist
          ? "This wallet has whitelist access and can participate before the public phase."
          : "This wallet is eligible for the public mint phase."}
      </p>
    </div>
  </div>
)}
      </div>
    </section>
  );
}

function AccessCard({
  title,
  label,
  active,
}: {
  title: string;
  label: string;
  active: boolean;
}) {
  return (
    <div
      className={`rounded-3xl border p-5 ${
        active
          ? "border-[#b9ff5c]/40 bg-[#b9ff5c]/10"
          : "border-white/10 bg-white/[0.03] opacity-45"
      }`}
    >
      <p className="text-2xl font-black uppercase">{title}</p>
      <p className="mt-1 text-sm text-white/45">{label}</p>

      <p
        className={`mt-5 inline-block rounded-full px-4 py-2 text-xs font-black uppercase tracking-widest ${
          active
            ? "bg-[#b9ff5c] text-black"
            : "bg-white/10 text-white/40"
        }`}
      >
        {active ? "Eligible" : "Locked"}
      </p>
    </div>
  );
}