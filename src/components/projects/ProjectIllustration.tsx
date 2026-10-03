// Coded illustrations of each product's real interface concepts (960×600 artboards).
type Name = "growth-office" | "mcat-tutor" | "bx-assist" | "route-planner";

const LIME = "#87e64b";
const FOREST = "#273f2b";
const INK = "#122314";

function GrowthOffice() {
  const agents = [
    { n: "Morgan", r: "Growth lead", s: "Planning", c: LIME },
    { n: "Quinn", r: "Analytics", s: "GA4 pulled", c: "#7fd1ff" },
    { n: "Riley", r: "SEO crawl", s: "Audit queued", c: "#ffc857" },
    { n: "Casey", r: "Drafts", s: "Draft only", c: "#c9a7ff" },
  ];
  const log = [
    ["09:00", "standup", "Quinn read last 7 days from GA4"],
    ["09:01", "digest", "Morgan wrote the morning summary"],
    ["09:04", "crawl", "Riley queued a site audit"],
    ["09:12", "draft", "Casey saved post as draft"],
    ["09:13", "plan", "Morgan proposed 3 tasks"],
  ];
  return (
    <>
      <rect width="960" height="600" fill={INK} />
      {/* office floor */}
      <rect x="32" y="32" width="520" height="400" rx="14" fill="#1b2e1f" />
      {Array.from({ length: 10 }).map((_, i) =>
        Array.from({ length: 13 }).map((__, j) => (
          <rect key={`${i}-${j}`} x={44 + j * 39} y={44 + i * 38} width="36" height="35" rx="3" fill={(i + j) % 2 ? "#213826" : "#1f3524"} />
        )),
      )}
      {[
        [120, 120],
        [300, 110],
        [150, 300],
        [380, 290],
      ].map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 46} y={y - 18} width="92" height="44" rx="6" fill="#3a5a40" />
          <rect x={x - 22} y={y - 12} width="44" height="20" rx="3" fill="#0f1a12" />
          <circle cx={x} cy={y + 48} r="16" fill={agents[i].c} />
          <circle cx={x} cy={y + 48} r="24" fill="none" stroke={agents[i].c} strokeOpacity="0.35" strokeWidth="2" />
        </g>
      ))}
      <rect x="200" y="200" width="150" height="60" rx="30" fill="#2c4a32" />
      <text x="275" y="236" textAnchor="middle" fill="#d7f5c2" fontSize="15">Conference</text>

      {/* command center */}
      <rect x="572" y="32" width="356" height="400" rx="14" fill="#0c170f" stroke="#2c4a32" />
      <text x="596" y="70" fill="#fff" fontSize="20" fontWeight="600">Command center</text>
      {["Standup", "Crawl", "Draft", "Brand"].map((t, i) => (
        <g key={t}>
          <rect x={596 + i * 82} y="88" width="74" height="32" rx="8" fill={i === 0 ? LIME : "#1b2e1f"} />
          <text x={633 + i * 82} y="109" textAnchor="middle" fontSize="13" fill={i === 0 ? INK : "#cfe8bd"}>{t}</text>
        </g>
      ))}
      {log.map(([t, k, m], i) => (
        <g key={t} fontFamily="var(--font-jetbrains), monospace" fontSize="12.5">
          <text x="596" y={160 + i * 40} fill="#6f8f73">{t}</text>
          <text x="648" y={160 + i * 40} fill={LIME}>{k}</text>
          <text x="712" y={160 + i * 40} fill="#d9e6d3">{m.length > 26 ? `${m.slice(0, 26)}…` : m}</text>
        </g>
      ))}

      {/* agent strip */}
      {agents.map((a, i) => (
        <g key={a.n}>
          <rect x={32 + i * 226} y="452" width="214" height="116" rx="14" fill="#1b2e1f" />
          <circle cx={70 + i * 226} cy="494" r="18" fill={a.c} />
          <text x={98 + i * 226} y="490" fill="#fff" fontSize="18" fontWeight="600">{a.n}</text>
          <text x={98 + i * 226} y="510" fill="#a9c3a3" fontSize="13">{a.r}</text>
          <rect x={52 + i * 226} y="534" width="174" height="8" rx="4" fill="#2c4a32" />
          <rect x={52 + i * 226} y="534" width={[150, 174, 96, 120][i]} height="8" rx="4" fill={a.c} />
          <text x={52 + i * 226} y="558" fill="#cfe8bd" fontSize="12">{a.s}</text>
        </g>
      ))}
    </>
  );
}

function McatTutor() {
  const modes = ["Standard", "Simpler", "Another way", "Another analogy"];
  return (
    <>
      <rect width="960" height="600" fill="#f4f6ef" />
      <rect x="32" y="32" width="600" height="536" rx="18" fill="#fff" stroke="#e1e6d9" />
      {/* student */}
      <rect x="250" y="64" width="350" height="64" rx="16" fill={FOREST} />
      <text x="272" y="92" fill="#fff" fontSize="16">Why does water speed up when</text>
      <text x="272" y="114" fill="#fff" fontSize="16">a pipe gets narrower?</text>
      {/* tutor */}
      <circle cx="74" cy="176" r="20" fill={LIME} />
      <text x="74" y="182" textAnchor="middle" fontSize="15" fontWeight="700" fill={INK}>T</text>
      <rect x="106" y="152" width="494" height="236" rx="16" fill="#f4f6ef" />
      <text x="128" y="186" fontSize="16" fill="#1d241b">Fluid can&apos;t pile up inside the pipe, so the same</text>
      <text x="128" y="210" fontSize="16" fill="#1d241b">volume must pass every point each second.</text>
      <rect x="128" y="230" width="230" height="52" rx="10" fill="#fff" stroke="#dfe6d6" />
      <text x="243" y="264" textAnchor="middle" fontSize="24" fontFamily="var(--font-jetbrains), monospace" fill={FOREST}>A₁v₁ = A₂v₂</text>
      <text x="128" y="312" fontSize="16" fill="#1d241b">Make the area A smaller and the speed v has</text>
      <text x="128" y="336" fontSize="16" fill="#1d241b">to rise to keep the flow rate constant.</text>
      <text x="128" y="368" fontSize="13" fill="#59705a">This is the continuity equation.</text>
      {/* modes */}
      {modes.map((m, i) => {
        const w = [104, 94, 120, 150][i];
        const x = [106, 220, 324, 454][i];
        return (
          <g key={m}>
            <rect x={x} y="412" width={w} height="36" rx="18" fill={i === 1 ? FOREST : "#fff"} stroke={i === 1 ? FOREST : "#cfd8c4"} />
            <text x={x + w / 2} y="435" textAnchor="middle" fontSize="13.5" fill={i === 1 ? "#fff" : "#2a3328"}>{m}</text>
          </g>
        );
      })}
      <rect x="106" y="476" width="494" height="64" rx="14" fill="#fff" stroke="#cfd8c4" />
      <text x="128" y="514" fontSize="15" fill="#8a9585">Ask about pressure, buoyancy or flow…</text>
      {/* sources */}
      <text x="660" y="72" fontSize="18" fontWeight="600" fill="#1d241b">Sources</text>
      {[
        ["Fluid dynamics notes", "Page 12", "Continuity equation"],
        ["Fluid dynamics notes", "Page 14", "Flow rate and area"],
        ["Practice passage set", "Page 3", "Pipe narrowing example"],
      ].map(([f, p, s], i) => (
        <g key={i}>
          <rect x="652" y={92 + i * 132} width="276" height="116" rx="14" fill="#fff" stroke="#e1e6d9" />
          <rect x="672" y={112 + i * 132} width="34" height="42" rx="4" fill={LIME} fillOpacity="0.35" />
          <text x="720" y={128 + i * 132} fontSize="14.5" fontWeight="600" fill="#1d241b">{f}</text>
          <text x="720" y={150 + i * 132} fontSize="13" fill="#59705a">{p}</text>
          <text x="672" y={186 + i * 132} fontSize="13" fill="#2a3328">{s}</text>
        </g>
      ))}
    </>
  );
}

function BxAssist() {
  return (
    <>
      <rect width="960" height="600" fill="#1a1d21" />
      <rect x="0" y="0" width="230" height="600" fill="#121417" />
      <text x="28" y="54" fill="#fff" fontSize="18" fontWeight="700">BXTrack</text>
      {["general", "attendance", "hr-help", "engineering"].map((c, i) => (
        <g key={c}>
          {i === 2 && <rect x="12" y={82 + i * 40} width="206" height="34" rx="8" fill="#2c4a32" />}
          <text x="28" y={105 + i * 40} fill={i === 2 ? "#fff" : "#9aa0a6"} fontSize="15"># {c}</text>
        </g>
      ))}
      <text x="262" y="54" fill="#fff" fontSize="18" fontWeight="700"># hr-help</text>
      <line x1="230" y1="78" x2="960" y2="78" stroke="#2b2f34" />

      {/* user message */}
      <rect x="262" y="104" width="40" height="40" rx="8" fill="#7fd1ff" />
      <text x="318" y="118" fill="#fff" fontSize="15" fontWeight="700">Ayesha</text>
      <text x="380" y="118" fill="#7b8087" fontSize="12">9:41 AM</text>
      <text x="318" y="142" fill="#d1d2d3" fontSize="15">/policy how many casual leaves do I get?</text>

      {/* bot reply */}
      <rect x="262" y="176" width="40" height="40" rx="8" fill={LIME} />
      <text x="282" y="202" textAnchor="middle" fontSize="15" fontWeight="800" fill={INK}>BX</text>
      <text x="318" y="190" fill="#fff" fontSize="15" fontWeight="700">BXAssist</text>
      <rect x="390" y="178" width="34" height="16" rx="3" fill="#2b2f34" />
      <text x="407" y="190" textAnchor="middle" fill="#9aa0a6" fontSize="10">APP</text>
      <text x="318" y="216" fill="#d1d2d3" fontSize="15">Here&apos;s what the leave policy says about casual leave,</text>
      <text x="318" y="238" fill="#d1d2d3" fontSize="15">with the passage it comes from:</text>
      <rect x="318" y="254" width="560" height="96" rx="8" fill="#222529" />
      <rect x="318" y="254" width="4" height="96" fill={LIME} />
      <text x="338" y="284" fill="#c7c9cc" fontSize="14" fontStyle="italic">&ldquo;Casual leave is granted per calendar year and</text>
      <text x="338" y="306" fill="#c7c9cc" fontSize="14" fontStyle="italic">must be applied for through the leave form…&rdquo;</text>
      <text x="338" y="334" fill="#7b8087" fontSize="12.5">Leave Policy, section 2</text>
      <rect x="318" y="364" width="128" height="34" rx="6" fill="none" stroke="#3b4046" />
      <text x="382" y="386" textAnchor="middle" fill="#d1d2d3" fontSize="13.5">Apply for leave</text>

      {/* checkin */}
      <rect x="262" y="430" width="40" height="40" rx="8" fill={LIME} />
      <text x="282" y="456" textAnchor="middle" fontSize="15" fontWeight="800" fill={INK}>BX</text>
      <text x="318" y="444" fill="#fff" fontSize="15" fontWeight="700">BXAssist</text>
      <text x="318" y="468" fill="#d1d2d3" fontSize="15">Checked in at 9:02 AM. Have a good day, Ayesha.</text>

      <rect x="262" y="520" width="666" height="52" rx="10" fill="none" stroke="#3b4046" />
      <text x="282" y="552" fill="#7b8087" fontSize="15">Message #hr-help</text>
    </>
  );
}

function RoutePlanner() {
  const routes = [
    { c: LIME, d: "M120 470 L210 380 L180 260 L300 200 L420 230" },
    { c: "#7fd1ff", d: "M120 470 L290 470 L380 390 L470 420 L560 330" },
    { c: "#ffc857", d: "M520 120 L430 160 L470 260 L580 240 L600 140" },
  ];
  const stops = [
    [210, 380], [180, 260], [300, 200], [420, 230], [290, 470], [380, 390], [470, 420], [560, 330], [430, 160], [470, 260], [580, 240], [600, 140],
  ];
  return (
    <>
      <rect width="960" height="600" fill="#eef1ea" />
      {/* streets */}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={40 + i * 66} x2="660" y2={20 + i * 70} stroke="#dde3d6" strokeWidth={i % 3 ? 4 : 9} />
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`v${i}`} x1={30 + i * 70} y1="0" x2={60 + i * 64} y2="600" stroke="#dde3d6" strokeWidth={i % 4 ? 4 : 9} />
      ))}
      <path d="M0 330 C 160 300, 300 420, 660 360" stroke="#cfe0f2" strokeWidth="26" fill="none" />
      {routes.map((r) => (
        <path key={r.c} d={r.d} stroke={r.c} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      ))}
      {stops.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="9" fill="#fff" stroke={INK} strokeWidth="3" />
      ))}
      {[
        [120, 470],
        [520, 120],
      ].map(([x, y]) => (
        <rect key={x} x={x - 14} y={y - 14} width="28" height="28" rx="6" fill={FOREST} />
      ))}

      {/* AI panel */}
      <rect x="676" y="32" width="252" height="536" rx="18" fill="#fff" stroke="#dfe5d7" />
      <text x="698" y="72" fontSize="18" fontWeight="700" fill="#1d241b">AI assistant</text>
      <text x="698" y="96" fontSize="13" fill="#59705a">3 suggestions for Tuesday</text>
      {[
        ["Move 2 flexible visits", "to Thursday to fit an", "urgent call-out."],
        ["Swap two technicians", "so the skill matches", "the boiler repair."],
      ].map((lines, i) => (
        <g key={i}>
          <rect x="694" y={118 + i * 210} width="216" height="190" rx="14" fill="#f4f6ef" />
          {lines.map((l, j) => (
            <text key={j} x="712" y={150 + i * 210 + j * 22} fontSize="14.5" fill="#1d241b" fontWeight={j === 0 ? 600 : 400}>{l}</text>
          ))}
          <text x="712" y={230 + i * 210} fontSize="12.5" fill="#59705a">Locked visits unchanged.</text>
          <rect x="712" y={250 + i * 210} width="86" height="38" rx="19" fill={FOREST} />
          <text x="755" y={274 + i * 210} textAnchor="middle" fontSize="13.5" fill="#fff">Approve</text>
          <rect x="806" y={250 + i * 210} width="86" height="38" rx="19" fill="#fff" stroke="#cfd8c4" />
          <text x="849" y={274 + i * 210} textAnchor="middle" fontSize="13.5" fill="#2a3328">Dismiss</text>
        </g>
      ))}
    </>
  );
}

const art: Record<Name, () => React.JSX.Element> = {
  "growth-office": GrowthOffice,
  "mcat-tutor": McatTutor,
  "bx-assist": BxAssist,
  "route-planner": RoutePlanner,
};

export function ProjectIllustration({ name, alt, className }: { name: Name; alt: string; className?: string }) {
  const Art = art[name];
  return (
    <svg viewBox="0 0 960 600" role="img" aria-label={alt} className={className} preserveAspectRatio="xMidYMid slice">
      <g className="font-sans">
        <Art />
      </g>
    </svg>
  );
}
