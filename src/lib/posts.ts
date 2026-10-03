// Blog posts by the BXTrack team, written from our own builds.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; lang: string; text: string };

export type Post = {
  slug: string;
  title: string;
  dek: string;
  date: string; // ISO
  topic: string;
  minutes: number;
  project?: string; // related project slug
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "one-agent-to-talk-to",
    title: "One agent to talk to: how we structure multi-agent products",
    dek: "Seven specialists, one conversation. Why every request in Virtual Office goes through a single lead agent — and what that buys you.",
    date: "2026-10-01",
    topic: "Agents",
    minutes: 6,
    project: "virtual-office",
    body: [
      {
        type: "p",
        text: "When people first see a multi-agent product, they usually want to talk to every agent. A research agent, an analytics agent, a content agent — each with its own chat tab. It looks powerful in a demo. In daily use it falls apart: the user becomes the project manager, copying findings from one tab into another and deciding who should do what.",
      },
      {
        type: "p",
        text: "In Growth Agent, the first product on our Virtual Office platform, users talk to exactly one agent. Her name is Morgan, and she is the Growth Lead. The six specialists — market research, analytics, content growth, paid ads, customer ops and partnerships — never take a message from a person directly.",
      },
      { type: "h2", text: "The lead agent's job is judgement, not knowledge" },
      {
        type: "p",
        text: "Morgan doesn't need to know how to read a retention curve. She needs to know that a question about falling installs probably needs analytics and market research, that the two can run at the same time, and that a content plan should wait until both have reported back.",
      },
      {
        type: "p",
        text: "So we model delegation as a dependency graph. Morgan plans which specialists to involve, which can run in parallel and which must wait. Each specialist run is a background job with its own retries and token budget. When they finish, Morgan does the part people actually want: she resolves conflicting findings and returns one recommendation.",
      },
      {
        type: "quote",
        text: "A team of agents is only useful if someone is accountable for the answer. In our products, that someone is the lead agent.",
      },
      { type: "h2", text: "Runs outlive the browser tab" },
      {
        type: "p",
        text: "Specialist work takes minutes, not seconds. If runs streamed straight to the browser, a closed laptop would mean a lost run. So every run — interactive ones included — is invoked through Inngest. The browser just subscribes to a replayable event stream. Close the tab, come back an hour later, and the run is either still going or finished, with every step on record.",
      },
      {
        type: "p",
        text: "This also made hosting decisions easy. Agent runs that stream for several minutes don't fit serverless function timeouts, so the platform runs as a single long-lived service, and the run lifecycle no longer depends on any one connection.",
      },
      { type: "h2", text: "Isolation is a single chokepoint" },
      {
        type: "p",
        text: "Virtual Office is a platform: Growth Agent is one product on it, and each customer gets an isolated workspace. The rule we hold to is that every request resolves its workspace through one context resolver. There is no second path. If a piece of code needs data, it gets it through that resolver or it doesn't get it.",
      },
      {
        type: "list",
        items: [
          "True for every agent product? It lives in the platform.",
          "True only for Growth Agent? It lives in the product folder.",
          "Unique to one company? It's a database row, scoped by workspace.",
        ],
      },
      { type: "h2", text: "Agents propose; people approve" },
      {
        type: "p",
        text: "The Knowledge Hub holds the brand core, competitor profiles and research library that every agent reads. Agents can propose changes to it, but a person approves them, and every version is kept with its source. It's slower than letting agents write freely. It's also why the team trusts what the agents read.",
      },
      {
        type: "p",
        text: "If you're designing a multi-agent product, start with the one conversation your users will actually have, and work backwards to the specialists. You'll write fewer agents, and the ones you write will be easier to trust.",
      },
    ],
  },
  {
    slug: "retrieval-that-shows-its-work",
    title: "Retrieval that shows its work: lessons from an MCAT tutor",
    dek: "Grounding answers in study material is the easy part. Making students trust them takes citations, de-duplication and a second way to explain.",
    date: "2026-09-24",
    topic: "RAG",
    minutes: 7,
    project: "mcat-ai-tutor",
    body: [
      {
        type: "p",
        text: "A general chatbot will happily explain Bernoulli's principle. Most of the time it's right. For someone studying for the MCAT, \"most of the time\" isn't good enough — they need the explanation that matches the material they'll be tested on, and they need to be able to check it.",
      },
      {
        type: "p",
        text: "That was the brief for our MCAT AI Tutor prototype: a tutor for the fluid dynamics section that answers from ingested study PDFs, explains concepts in more than one way, and writes exam-style multiple-choice questions.",
      },
      { type: "h2", text: "Ingestion decides the quality ceiling" },
      {
        type: "p",
        text: "We extract each PDF page, then chunk with overlap so an idea that spans a page break isn't cut in half. Chunks are embedded with text-embedding-3-large and stored in a Pinecone index with 3,072 dimensions and cosine similarity. Each chunk keeps its source file and page number — that metadata is what makes citations possible later.",
      },
      {
        type: "p",
        text: "If you remember one thing: you can't retrieve what you chunked badly. Time spent on chunk boundaries pays off more than time spent on prompts.",
      },
      { type: "h2", text: "Retrieval is more than one search" },
      {
        type: "p",
        text: "Student questions are short and informal. \"Why does water go faster in a thin pipe?\" doesn't share many words with a textbook paragraph about the continuity equation. So retrieval searches with several variants of the question, then removes near-duplicate chunks and keeps a diverse set before building the context. Without de-duplication, overlapping chunks crowd out everything else and the model sees the same paragraph three times.",
      },
      {
        type: "code",
        lang: "ts",
        text: "// lib/retrieval.ts (abridged)\nconst variants = queryVariants(query, options.mode);\nfor (const variant of variants) {\n  const vector = await embedQuery(variant);\n  const response = await index.query({ vector, topK, includeMetadata: true });\n  candidates.push(...parse(response.matches));\n}\nconst chunks = dedupeAndDiversify(candidates, 4, Math.max(4, topK));\nreturn { chunks, sources: toSources(chunks), context: buildContext(chunks) };",
      },
      { type: "h2", text: "Citations turn answers into study material" },
      {
        type: "p",
        text: "Every answer comes with source cards showing the pages it drew on. That turns an answer into a pointer back into the student's own notes rather than the end of the conversation. It also gives a fast way to debug: when the sources don't support the explanation, the problem is almost always retrieval, not generation.",
      },
      {
        type: "quote",
        text: "A citation isn't a disclaimer. It's the part of the answer the student can verify.",
      },
      { type: "h2", text: "Four ways to explain the same idea" },
      {
        type: "p",
        text: "Real tutors don't repeat themselves louder. When an explanation doesn't land, they try another angle. The tutor offers four modes: standard, simpler, another way and another analogy. Each mode uses the same retrieved context with a different instruction, so the facts stay grounded while the framing changes.",
      },
      {
        type: "list",
        items: [
          "Standard: the textbook explanation, tightened.",
          "Simpler: fewer terms, shorter sentences, one idea at a time.",
          "Another way: a different route to the same result, such as starting from conservation of mass.",
          "Another analogy: a new everyday comparison, checked against the source.",
        ],
      },
      {
        type: "p",
        text: "The same pipeline powers question generation. The model writes an MCAT-style multiple-choice question from retrieved material, so the questions test what's actually in the syllabus rather than what the model happens to remember.",
      },
      {
        type: "p",
        text: "Retrieval-augmented generation is often described as a way to reduce hallucination. In practice the bigger win is trust: an answer you can trace is an answer you can learn from.",
      },
    ],
  },
  {
    slug: "let-the-solver-solve",
    title: "Let the solver solve: pairing OR-Tools with an LLM",
    dek: "Language models are bad at routing problems and good at explaining them. So we gave each the job it's good at.",
    date: "2026-09-16",
    topic: "Optimisation",
    minutes: 6,
    project: "ai-route-planner",
    body: [
      {
        type: "p",
        text: "A client running a field-service CRM asked a reasonable question: can AI plan our technicians' week? Every visit has a customer priority, a time window and a required skill. Some visits are already confirmed with the customer and can't move. Technicians get sick, take leave, or start from different depots.",
      },
      {
        type: "p",
        text: "You could hand all of that to a language model and ask for a schedule. You'd get something that looks like a schedule. It would probably break a constraint you didn't notice, and you'd have no way to know it wasn't optimal.",
      },
      { type: "h2", text: "This is a solved problem — literally" },
      {
        type: "p",
        text: "Scheduling visits across technicians and depots is a vehicle routing problem with time windows, capacities and skills. Constraint solvers have handled this for decades. So we built a small Python service around Google's OR-Tools that does one thing: take a problem definition and return an optimised plan.",
      },
      {
        type: "list",
        items: [
          "Multiple depots, because technicians start from different places.",
          "Capacity, so nobody gets an impossible day.",
          "Time windows agreed with customers.",
          "Skill matching between visit and technician.",
          "Locked visits as fixed anchors the solver plans around.",
        ],
      },
      { type: "h2", text: "Rules before maths" },
      {
        type: "p",
        text: "Before the solver runs, a rules engine in the NestJS backend prepares the problem. It classifies visits as locked, draft or unplanned, applies A/B/C customer priority so urgent work can displace flexible work, and removes technicians who are unavailable. Travel times come from Google Maps and are cached, because the same journeys come up every day.",
      },
      { type: "h2", text: "Where the language model earns its place" },
      {
        type: "p",
        text: "A plan nobody understands is a plan nobody trusts. Dispatchers know their customers and their technicians; if a suggestion looks strange, they'll ignore it unless they can see why.",
      },
      {
        type: "p",
        text: "So after the solver returns, we make one call to Claude with the before and after plans and ask it to explain the changes in plain language: which visits moved, why, and what that gives up. There's no tool loop and no agent. The model isn't deciding anything — it's translating the solver's decision for a human.",
      },
      {
        type: "quote",
        text: "The solver decides. The model explains. The dispatcher approves.",
      },
      { type: "h2", text: "Approve or dismiss, one suggestion at a time" },
      {
        type: "p",
        text: "Each run is saved with its suggestions. In the dispatcher's calendar, an assistant panel shows them one by one with Approve and Dismiss. Approving uses the same move and reorder actions a dispatcher would use by hand, and the calendar updates live for everyone.",
      },
      {
        type: "p",
        text: "The general lesson travels well beyond routing. Before reaching for a language model, ask whether the problem has a precise answer. If it does, use the tool built for it, and use the model for the part that's genuinely about language: explaining, summarising and helping a person decide.",
      },
    ],
  },
  {
    slug: "draft-only-by-default",
    title: "Draft-only by default: guardrails for AI that acts",
    dek: "Our agents read analytics, crawl websites and write content. None of them can publish. Here's how we decide what an agent is allowed to do.",
    date: "2026-09-08",
    topic: "Guardrails",
    minutes: 5,
    project: "growth-office",
    body: [
      {
        type: "p",
        text: "In Growth Office, a team of agents runs a SaaS product's growth routine. Quinn reads Google Analytics for the morning standup. Riley crawls the site and files SEO issues. Casey drafts blog posts in the brand's voice. Morgan pulls it all into a plan.",
      },
      {
        type: "p",
        text: "Casey can write a complete article. Casey cannot publish it. That's not a missing feature — publishing is locked to draft-only, and it's one of the first decisions we made.",
      },
      { type: "h2", text: "Sort actions by how hard they are to undo" },
      {
        type: "p",
        text: "We sort every action an agent might take into three groups and design permissions around them.",
      },
      {
        type: "list",
        items: [
          "Read: analytics, crawls, research. Safe to automate fully.",
          "Prepare: drafts, plans, suggested changes. Automate the work; a person reviews the result.",
          "Act: publishing, sending, spending, changing live settings. A person does it, or explicitly approves each one.",
        ],
      },
      {
        type: "p",
        text: "Most of the value sits in the first two groups. A good draft saves hours; pressing publish takes seconds. Keeping that last step human costs almost nothing and removes the failure that would actually hurt.",
      },
      { type: "h2", text: "The same rule, in every product" },
      {
        type: "p",
        text: "In Virtual Office, agents can propose changes to the brand core and research library, but a person approves them, and every version keeps its source. In our route planner, the solver produces suggestions and a dispatcher approves or dismisses each one. The pattern repeats because the reasoning repeats.",
      },
      {
        type: "quote",
        text: "Automate the work. Keep the irreversible click human.",
      },
      { type: "h2", text: "Use the front door" },
      {
        type: "p",
        text: "Guardrails aren't only about outputs. How an agent connects to the outside world matters too. U-Radar, our job-matching tool, searches Upwork through Upwork's official MCP server with an authorised OAuth connection rather than scraping pages. It's more setup, but it respects the platform's terms and survives page redesigns.",
      },
      { type: "h2", text: "Fail usefully" },
      {
        type: "p",
        text: "Guardrails also cover what happens when the AI isn't available. If Growth Office has no model credentials, the standup still runs: it shows the real analytics numbers with a template narrative. The team loses the polish, not the information.",
      },
      {
        type: "p",
        text: "None of this makes agents less capable. It makes them deployable. Teams adopt automation they can trust, and they trust automation that can't surprise them in public.",
      },
    ],
  },
  {
    slug: "ship-it-where-people-already-are",
    title: "Ship it where people already are: building BXAssist in Slack",
    dek: "Our internal assistant has no website, no login and no onboarding. It's a handful of slash commands in the place the team already works.",
    date: "2026-08-28",
    topic: "Product",
    minutes: 5,
    project: "bx-assist",
    body: [
      {
        type: "p",
        text: "Every growing team hits the same admin wall. Attendance lives in a spreadsheet. Leave requests arrive as direct messages. The same policy questions come up every week, and the answer is always in a document nobody can find.",
      },
      {
        type: "p",
        text: "We could have built an HR portal. Instead we asked where everyone already spends the day. The answer was Slack, so that's where BXAssist lives.",
      },
      { type: "h2", text: "Four commands, no training" },
      {
        type: "list",
        items: [
          "/checkin and /checkout record attendance straight to Google Sheets.",
          "/leave opens a short form inside Slack and routes the request.",
          "/policy answers questions from the actual policy documents.",
          "A weekly post celebrates the team's birthdays.",
        ],
      },
      {
        type: "p",
        text: "Slash commands are a surprisingly good interface for this kind of work. They're discoverable — type a slash and Slack lists them — and they're impossible to misuse: each one does one thing.",
      },
      { type: "h2", text: "Policy answers that quote the policy" },
      {
        type: "p",
        text: "The /policy command is a small retrieval pipeline. Policy documents are chunked and indexed. A question pulls the most relevant passages, and a small, fast model writes an answer from them, with the passages attached. Nobody has to trust the bot's memory, because the source is right there in the reply.",
      },
      {
        type: "quote",
        text: "The best internal tool is the one nobody has to be told about.",
      },
      { type: "h2", text: "Keep the backend boring" },
      {
        type: "p",
        text: "BXAssist is a Next.js app on Vercel. Slack calls a route handler, the handler verifies the request and dispatches to the right command. Attendance and leave go to Google Sheets, which HR already used, so nothing about their workflow had to change.",
      },
      {
        type: "p",
        text: "If you're planning an internal AI tool, resist the urge to build a destination. Find the place your team already works, add the smallest useful command, and grow from there.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
