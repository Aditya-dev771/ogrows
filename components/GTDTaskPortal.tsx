"use client";

import { useState } from "react";

type Step = "identity" | "tasks" | "wallet" | "access";

export default function GTDAccessPortal() {
  const [step, setStep] = useState<Step>("identity");
  const [username, setUsername] = useState("");
  const [wallet, setWallet] = useState("");

  const [follow, setFollow] = useState(false);
  const [like, setLike] = useState(false);
  const [repost, setRepost] = useState(false);
  const [comment, setComment] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const xProfile = "https://x.com/OGROWs_";
  const launchPost = "https://x.com/OGROWs_";
  const googleScriptUrl =
    "https://script.google.com/macros/s/AKfycbzdMpIH_i_SDZfUk2JU-f1Ww0c9TesD6J_SVI36PR9Q0MsHPJfS6DAtVVOIYNg4n2bzmg/exec";

  const completed = [
    username,
    follow,
    like,
    repost,
    comment,
    validWallet(wallet),
  ].filter(Boolean).length;

  const progress = Math.round((completed / 6) * 100);

  function validWallet(address: string) {
    return /^0x[a-fA-F0-9]{40}$/.test(address.trim());
  }

  function shortWallet(address: string) {
    return `${address.slice(0, 6)}...${address.slice(-5)}`;
  }

  function handleIdentity() {
    if (!username.trim()) {
      alert("Enter your X username.");
      return;
    }

    setStep("tasks");
  }

  function handleWallet() {
    if (!validWallet(wallet)) {
      alert("Enter a valid Ethereum wallet.");
      return;
    }

    if (!follow || !like || !repost || !comment) {
      alert("Complete all GTD tasks first.");
      return;
    }

    setStep("access");
  }

  async function submitToGoogleSheet() {
  if (!username || !validWallet(wallet)) {
    alert("Username and valid wallet required.");
    return;
  }

  try {
    setSubmitting(true);

    const formData = new FormData();
    formData.append("username", username);
    formData.append("wallet", wallet.trim().toLowerCase());
    formData.append("commentUrl", "Completed from OGROWs GTD portal");
    formData.append("status", "GTD Verified");

    await fetch(googleScriptUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    setSubmitted(true);
    alert("GTD form submitted successfully.");
  } catch {
    alert("Submission failed. Please try again.");
  } finally {
    setSubmitting(false);
  }
}

  function shareOnX() {
    const text =
      "I completed the @OGROWs_ GTD Access Portal.\n\nTry your luck here https://ogrows.xyz/";
    window.open(
      `https://x.com/intent/tweet?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  function copyAccessCode() {
    navigator.clipboard.writeText(
      `OGROWs GTD ACCESS\nUsername: @${username}\nWallet: ${wallet}\nStatus: Verified`
    );

    alert("Access code copied.");
  }

  function downloadAccessKey() {
    const text = `OGROWs GTD ACCESS KEY

Username: @${username}
Wallet: ${wallet}
Tier: GTD
Status: VERIFIED
`;

    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "ogrows-gtd-access-key.txt";
    link.click();
  }

  return (
    <section id="access" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#b9ff5c]">
          GTD Access Portal
        </p>

        <h2 className="text-5xl font-black uppercase tracking-tight md:text-7xl">
          OGROWs Access Terminal
        </h2>

        <p className="mt-5 max-w-2xl text-white/60">
          Complete the required milestones to secure your Guaranteed Access slot.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
          <div className="mb-8">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-black uppercase tracking-widest text-white/45">
                Progress
              </p>
              <p className="text-sm font-black text-[#b9ff5c]">{progress}%</p>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-black/40">
              <div
                className="h-full rounded-full bg-[#b9ff5c] transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {step === "identity" && (
            <div>
              <StepHeader number="01" title="Verify Identity" />

              <input
                value={username}
                onChange={(e) => setUsername(e.target.value.replace("@", ""))}
                placeholder="Enter your X username"
                className="mt-6 w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 font-bold text-white outline-none placeholder:text-white/30 focus:border-[#b9ff5c]/60"
              />

              <button
                onClick={handleIdentity}
                className="mt-5 rounded-2xl bg-[#b9ff5c] px-8 py-4 font-black text-black shadow-[0_0_40px_rgba(185,255,92,0.18)]"
              >
                Continue
              </button>
            </div>
          )}

          {step === "tasks" && (
            <div>
              <StepHeader number="02" title="Community Tasks" />

              <div className="mt-6 space-y-4">
                <TaskCard
                  title="Follow @OGROWs_"
                  done={follow}
                  button="Follow"
                  onClick={() => {
                    setFollow(true);
                    window.open(xProfile, "_blank");
                  }}
                />

                <TaskCard
                  title="Like Pinned Post"
                  done={like}
                  button="Like"
                  onClick={() => {
                    setLike(true);
                    window.open(launchPost, "_blank");
                  }}
                />

                <TaskCard
                  title="Repost Pinned Post"
                  done={repost}
                  button="Repost"
                  onClick={() => {
                    setRepost(true);
                    window.open(launchPost, "_blank");
                  }}
                />

                <TaskCard
                  title="Comment On Pinned Post"
                  done={comment}
                  button="Comment"
                  onClick={() => {
                    setComment(true);
                    window.open(launchPost, "_blank");
                  }}
                />
              </div>

              <button
                onClick={() => setStep("wallet")}
                className="mt-6 rounded-2xl bg-[#b9ff5c] px-8 py-4 font-black text-black shadow-[0_0_40px_rgba(185,255,92,0.18)]"
              >
                Continue To Wallet
              </button>
            </div>
          )}

          {step === "wallet" && (
            <div>
              <StepHeader number="03" title="Wallet Verification" />

              <input
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                placeholder="0x..."
                className="mt-6 w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 font-bold text-white outline-none placeholder:text-white/30 focus:border-[#b9ff5c]/60"
              />

              <button
                onClick={handleWallet}
                className="mt-5 rounded-2xl bg-[#b9ff5c] px-8 py-4 font-black text-black shadow-[0_0_40px_rgba(185,255,92,0.18)]"
              >
                Verify Wallet
              </button>
            </div>
          )}

          {step === "access" && (
            <div>
              <StepHeader number="04" title="Access Key Generated" />

              <div className="mt-6 rounded-[2rem] border border-[#b9ff5c]/30 bg-[#b9ff5c]/10 p-7">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b9ff5c]">
                  OGROWs Access Key
                </p>

                <h3 className="mt-4 text-4xl font-black uppercase">
                  GTD Verified
                </h3>

                <div className="mt-6 space-y-3 text-white/70">
                  <p>
                    Username:{" "}
                    <span className="font-black text-white">@{username}</span>
                  </p>
                  <p>
                    Wallet:{" "}
                    <span className="font-black text-white">
                      {shortWallet(wallet)}
                    </span>
                  </p>
                  <p>
                    Tier:{" "}
                    <span className="font-black text-[#b9ff5c]">GTD</span>
                  </p>
                  <p>
                    Status:{" "}
                    <span className="font-black text-[#b9ff5c]">
                      VERIFIED
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={submitToGoogleSheet}
                  disabled={submitting || submitted}
                  className="rounded-2xl bg-[#b9ff5c] px-6 py-4 font-black text-black disabled:opacity-50"
                >
                  {submitted
                    ? "Submitted"
                    : submitting
                    ? "Submitting..."
                    : "Submit GTD Form"}
                </button>

                <button
                  onClick={shareOnX}
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-black text-white"
                >
                  Share On X
                </button>

                <button
                  onClick={downloadAccessKey}
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-black text-white"
                >
                  Download Access Key
                </button>

                <button
                  onClick={copyAccessCode}
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-black text-white"
                >
                  Copy Access Code
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-black/30 p-7">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#b9ff5c]">
            Status
          </p>

          <div className="mt-6 space-y-4">
            <StatusLine label="X Identity" active={!!username} />
            <StatusLine label="Follow" active={follow} />
            <StatusLine label="Like" active={like} />
            <StatusLine label="Repost" active={repost} />
            <StatusLine label="Comment" active={comment} />
            <StatusLine label="Wallet" active={validWallet(wallet)} />
            <StatusLine label="Submitted" active={submitted} />
          </div>

          <div className="mt-8 rounded-3xl border border-[#b9ff5c]/20 bg-[#b9ff5c]/10 p-5">
            <p className="font-black text-[#b9ff5c]">GTD Slot Access</p>
            <p className="mt-2 text-sm text-white/60">
              Complete every milestone to generate and submit your OGROWs access
              key.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepHeader({ number, title }: { number: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.3em] text-[#b9ff5c]">
        Step {number}
      </p>
      <h3 className="mt-3 text-4xl font-black uppercase">{title}</h3>
    </div>
  );
}

function TaskCard({
  title,
  done,
  button,
  onClick,
}: {
  title: string;
  done: boolean;
  button: string;
  onClick: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-black/30 p-5">
      <div className="flex items-center gap-3">
        <span
          className={`h-3 w-3 rounded-full border border-[#b9ff5c] ${
            done ? "bg-[#b9ff5c]" : ""
          }`}
        />
        <p className="font-black text-white">{title}</p>
      </div>

      <button
        onClick={onClick}
        className="rounded-xl bg-[#b9ff5c] px-5 py-3 text-sm font-black text-black"
      >
        {done ? "Done" : button}
      </button>
    </div>
  );
}

function StatusLine({ label, active }: { label: string; active: boolean }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <span className="font-bold text-white/70">{label}</span>
      <span
        className={
          active ? "font-black text-[#b9ff5c]" : "font-black text-white/30"
        }
      >
        {active ? "Complete" : "Pending"}
      </span>
    </div>
  );
}