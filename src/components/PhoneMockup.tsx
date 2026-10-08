import type { ReactNode } from "react";
import { cn } from "../utils/cn";

export function PhoneMockup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[280px] rounded-[2.2rem] border-[6px] border-ink bg-ink p-2 shadow-[0_30px_60px_-20px_rgba(17,17,17,0.35)]",
        className
      )}
    >
      <div className="absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-ink" />
      <div className="relative h-[560px] overflow-hidden rounded-[1.6rem] bg-paper">{children}</div>
    </div>
  );
}

export function PhoneStatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[11px] font-semibold text-ink">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <span className="h-1.5 w-4 rounded-sm bg-ink" />
        <span className="h-1.5 w-4 rounded-sm bg-ink" />
        <span className="h-1.5 w-5 rounded-sm bg-ink" />
      </div>
    </div>
  );
}

export function AppHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex items-center justify-between px-5 pb-4 pt-2">
      <div>
        <p className="text-[17px] font-bold tracking-[-0.01em] text-ink">{title}</p>
        {subtitle && <p className="text-[12px] text-slate">{subtitle}</p>}
      </div>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-[11px] font-bold text-ink">
        BT
      </div>
    </div>
  );
}

/** Home / herd overview screen */
export function HerdOverviewScreen() {
  const animals = [
    { id: "BW-0142", breed: "Tswana", sex: "Cow", age: "4 yrs" },
    { id: "BW-0198", breed: "Brahman", sex: "Bull", age: "2 yrs" },
    { id: "BW-0206", breed: "Tuli", sex: "Cow", age: "6 yrs" },
  ];
  return (
    <div className="flex h-full flex-col">
      <PhoneStatusBar />
      <AppHeader title="My Farm" subtitle="Dithaka Farm · Kweneng" />
      <div className="mx-5 mb-4 rounded-2xl bg-ink px-5 py-4 text-paper">
        <p className="text-[11px] uppercase tracking-[0.12em] text-lime">Total Livestock</p>
        <p className="mt-1 text-[32px] font-bold leading-none">128</p>
        <div className="mt-3 flex gap-4 text-[11px] text-paper/70">
          <span>+6 added this month</span>
        </div>
      </div>
      <div className="flex items-center justify-between px-5 pb-2">
        <p className="text-[13px] font-semibold text-ink">Recent Animals</p>
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate">View all</p>
      </div>
      <div className="flex-1 space-y-2.5 overflow-hidden px-5">
        {animals.map((a) => (
          <div key={a.id} className="flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3">
            <div>
              <p className="text-[13px] font-semibold text-ink">{a.id}</p>
              <p className="text-[11.5px] text-slate">
                {a.breed} · {a.sex}
              </p>
            </div>
            <span className="rounded-full bg-paper-dim px-2.5 py-1 text-[10.5px] font-semibold text-slate">
              {a.age}
            </span>
          </div>
        ))}
      </div>
      <p className="px-5 pb-5 pt-2 text-center text-[10px] text-slate-light">Demonstration data</p>
    </div>
  );
}

/** Individual animal profile screen */
export function AnimalProfileScreen() {
  const fields: [string, string][] = [
    ["Tag / ID", "BW-0142"],
    ["Species", "Cattle"],
    ["Breed", "Tswana"],
    ["Sex", "Female"],
    ["Date of Birth", "14 Mar 2021"],
    ["Status", "Active"],
  ];
  return (
    <div className="flex h-full flex-col">
      <PhoneStatusBar />
      <div className="px-5 pb-3 pt-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate">Animal Profile</p>
        <p className="mt-1 text-[20px] font-bold tracking-[-0.01em] text-ink">BW-0142 · Naledi</p>
      </div>
      <div className="mx-5 mb-4 h-32 rounded-2xl bg-[url('https://images.pexels.com/photos/35836688/pexels-photo-35836688.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=700')] bg-cover bg-center" />
      <div className="flex-1 space-y-0 px-5">
        {fields.map(([label, value], i) => (
          <div
            key={label}
            className={cn("flex items-center justify-between py-2.5", i !== fields.length - 1 && "border-b border-line")}
          >
            <span className="text-[12px] text-slate">{label}</span>
            <span className="text-[12.5px] font-semibold text-ink">{value}</span>
          </div>
        ))}
      </div>
      <div className="px-5 pb-5">
        <div className="rounded-xl bg-lime px-4 py-3 text-center text-[12px] font-semibold text-ink">
          Growth &amp; health history
        </div>
      </div>
      <p className="px-5 pb-4 text-center text-[10px] text-slate-light">Demonstration data</p>
    </div>
  );
}

/** Farm overview / stats screen */
export function FarmOverviewScreen() {
  const stats = [
    { label: "Total Livestock", value: "128" },
    { label: "Active Records", value: "128" },
    { label: "Animals Added", value: "6" },
    { label: "Recent Updates", value: "14" },
  ];
  return (
    <div className="flex h-full flex-col">
      <PhoneStatusBar />
      <AppHeader title="Farm Overview" subtitle="Last updated today" />
      <div className="grid grid-cols-2 gap-2.5 px-5">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-line bg-white px-4 py-3.5">
            <p className="text-[21px] font-bold leading-none text-ink">{s.value}</p>
            <p className="mt-1.5 text-[10.5px] text-slate">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="mx-5 mt-4 flex-1 rounded-xl border border-line bg-white p-4">
        <p className="text-[12px] font-semibold text-ink">Herd Composition</p>
        <div className="mt-3 space-y-2.5">
          {[
            { label: "Cows", pct: 56 },
            { label: "Bulls", pct: 18 },
            { label: "Calves", pct: 26 },
          ].map((row) => (
            <div key={row.label}>
              <div className="mb-1 flex items-center justify-between text-[10.5px] text-slate">
                <span>{row.label}</span>
                <span>{row.pct}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-paper-dim">
                <div className="h-full rounded-full bg-lime" style={{ width: `${row.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="px-5 pb-5 pt-3 text-center text-[10px] text-slate-light">Demonstration data</p>
    </div>
  );
}
