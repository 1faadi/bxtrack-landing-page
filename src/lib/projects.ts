// BXTrack's own AI projects. Facts come from each project's repository and docs.

export type ProjectVisual =
  | { kind: "image"; src: string; alt: string; width: number; height: number; anchor?: "left" }
  | { kind: "illustration"; name: "growth-office" | "mcat-tutor" | "bx-assist" | "route-planner"; alt: string };

export type Project = {
  slug: string;
  name: string;
  /** Plain one-line description shown under the visual. */
  line: string;
  category: string;
  type: string;
  year: string;
  role: string;
  stack: string[];
  visual: ProjectVisual;
  summary: string;
  problem: string[];
  built: string[];
  steps: { title: string; body: string }[];
  status: string[];
  agents?: { name: string; role: string; avatar: string }[];
};

export const projects: Project[] = [
  {
    slug: "virtual-office",
    name: "Virtual Office",
    line: "A platform for AI teams, with a growth team as the first product running on it.",
    category: "Multi-agent platform",
    type: "Internal product",
    year: "2026",
    role: "Product, architecture, full-stack engineering",
    stack: ["Next.js 16", "Claude Agent SDK", "Inngest", "PostgreSQL", "Prisma", "Clerk", "Railway"],
    visual: {
      kind: "image",
      src: "/images/projects/virtual-office-hq.webp",
      alt: "Pixel-art headquarters where Virtual Office agents work, with desks, a conference room and a research lab",
      width: 1536,
      height: 1024,
    },
    summary:
      "Virtual Office hosts reusable AI agent products inside one authenticated shell. Its first product, Growth Agent, gives a mobile-app team a lead agent called Morgan who delegates research, analytics, content, paid growth, customer ops and partnerships to six specialists.",
    problem: [
      "Growth work for a mobile app is spread across a dozen tools and a handful of people: analytics dashboards, store listings, competitor research, content calendars, ad budgets and support inboxes. Most of it is repeatable, but none of it talks to the rest.",
      "We wanted one place where a team could ask a question in plain language and have the right specialists do the legwork in the background — without giving an AI free rein over live accounts.",
    ],
    built: [
      "Virtual Office is the platform layer: auth and roles, isolated workspaces, a product registry and an agent run executor that wraps the Claude Agent SDK. Every workspace is resolved through a single context chokepoint, so one company's data never leaks into another's.",
      "Growth Agent is the first product on top of it. Users only ever talk to Morgan, the Growth Lead. Morgan decides whether a request needs specialists, runs them in parallel where it can, waits on dependencies where it must, and merges their findings into one answer.",
      "Runs are queued through Inngest so they survive a closed browser, stream as a replayable event log, and can be cancelled. A Knowledge Hub holds the brand core, competitors and research library, and agents can only propose changes to it — a human approves them.",
    ],
    steps: [
      { title: "Ask Morgan", body: "A team member asks a question or sets a goal in the chat." },
      { title: "Plan and delegate", body: "Morgan builds a dependency graph and hands work to the specialists that fit." },
      { title: "Run in the background", body: "Inngest executes each run with retries and token accounting; progress streams back live." },
      { title: "Merge and recommend", body: "Morgan reconciles conflicting findings and returns one recommendation, with follow-up tasks." },
    ],
    status: [
      "Phases 0–5 are built: platform, office, agent runtime, Knowledge Hub, the specialist team and Drafts.",
      "224 automated tests pass, with typecheck and lint clean. Integrations and instruction authoring are next.",
    ],
    agents: [
      { name: "Morgan", role: "Growth Lead", avatar: "/images/projects/agents/lead.webp" },
      { name: "Market Research", role: "Competitors, ASO, audience", avatar: "/images/projects/agents/market-research.webp" },
      { name: "Analytics", role: "Funnels, retention, anomalies", avatar: "/images/projects/agents/analytics.webp" },
      { name: "Content Growth", role: "Ideas, hooks, post drafts", avatar: "/images/projects/agents/content-growth.webp" },
      { name: "Paid Ads", role: "Budgets and forecasts", avatar: "/images/projects/agents/paid-ads.webp" },
      { name: "Customer Ops", role: "Reviews and support themes", avatar: "/images/projects/agents/customer-ops.webp" },
      { name: "Partnerships", role: "Distribution opportunities", avatar: "/images/projects/agents/partnerships.webp" },
    ],
  },
  {
    slug: "u-radar",
    name: "U-Radar",
    line: "Scores every freelance job against your skills and the projects you have actually shipped.",
    category: "AI job matching",
    type: "Internal product",
    year: "2026",
    role: "Agent pipeline, scoring, product design",
    stack: ["Claude Agent SDK", "Upwork MCP", "Node.js", "PostgreSQL", "React"],
    visual: {
      kind: "image",
      src: "/images/projects/u-radar-job-inbox.jpg",
      alt: "U-Radar job inbox showing a Full-Stack AI Developer job scored 92 out of 100 with matching proven projects",
      width: 1920,
      height: 1080,
      anchor: "left",
    },
    summary:
      "U-Radar watches the Upwork marketplace on a schedule, normalises and de-duplicates new jobs, and ranks each one against a profile's skills and proven project evidence — so the team reads ten strong leads instead of scrolling two hundred.",
    problem: [
      "Finding good-fit freelance work is mostly scrolling. Most listings are a poor fit, and the good ones go quickly.",
      "Keyword alerts don't help much: they can't tell a serious client with a clear brief from a vague post, and they know nothing about what the team has already delivered.",
    ],
    built: [
      "A scheduler triggers the Claude Agent SDK with Upwork's official MCP server attached, so job search runs through an authorised connection rather than scraping.",
      "Results are normalised into one schema, de-duplicated against what has already been seen, scored and stored, then broadcast to the inbox. Each score explains itself: which skills matched, and which past projects prove them.",
    ],
    steps: [
      { title: "Fetch on schedule", body: "The agent searches Upwork through the MCP connection." },
      { title: "Normalise and de-duplicate", body: "Jobs are mapped to one schema and checked against earlier runs." },
      { title: "Score against evidence", body: "Each job is matched to the profile's skills and shipped projects." },
      { title: "Surface the best", body: "The inbox shows the score and the reasons it fits." },
    ],
    status: ["Built as an internal tool for finding well-matched freelance work."],
  },
  {
    slug: "growth-office",
    name: "Growth Office",
    line: "A multi-agent growth floor that runs standups, SEO audits and drafts for a SaaS product.",
    category: "AI operations",
    type: "Product build for Traceo",
    year: "2026",
    role: "Full-stack engineering, agent design",
    stack: ["Claude Agent SDK", "Next.js", "PixiJS", "Google Analytics 4", "Scrapling", "Oracle Cloud"],
    visual: {
      kind: "illustration",
      name: "growth-office",
      alt: "Illustration of the Growth Office command center with agent cards for Morgan, Quinn, Riley and Casey and a task log",
    },
    summary:
      "Growth Office gives Traceo a visible team of AI agents on a tiled office floor. Quinn reads Google Analytics for the morning standup, Riley crawls the site for SEO issues, Casey writes drafts, and Morgan pulls it all into a plan.",
    problem: [
      "A small SaaS team had the data to grow — analytics, a blog, a brand voice — but no time to turn it into a weekly rhythm of reviews, fixes and content.",
      "They also didn't want an AI that publishes on its own.",
    ],
    built: [
      "A three-pane office: the floor shows who is working, the command center holds tasks and a live terminal log, and an agent strip shows status and progress.",
      "Standups combine real GA4 numbers with a written digest. Crawls run a Scrapling-based SEO audit. Drafts are always drafts — publishing is locked to draft-only, by design.",
      "A brand kit (voice, competitors, ideal customer profiles) is versioned and validated, so every agent writes from the same source.",
    ],
    steps: [
      { title: "Standup", body: "Quinn pulls GA4 numbers and Morgan writes the digest." },
      { title: "Crawl", body: "Riley audits the site and files the issues it finds." },
      { title: "Draft", body: "Casey drafts content from the brand kit. Nothing goes live without a person." },
      { title: "Plan", body: "Morgan turns the week's signals into a prioritised plan." },
    ],
    status: [
      "Deployed on an Oracle Cloud VM. Works without an LLM key too: standups fall back to GA4 numbers with a template narrative.",
    ],
  },
  {
    slug: "mcat-ai-tutor",
    name: "MCAT AI Tutor",
    line: "A tutor that explains fluid dynamics four different ways and cites the page it learned from.",
    category: "RAG for education",
    type: "Prototype",
    year: "2026",
    role: "RAG pipeline, prompt design, full-stack engineering",
    stack: ["Next.js", "OpenAI GPT-4o", "text-embedding-3-large", "Pinecone", "OpenRouter", "shadcn/ui"],
    visual: {
      kind: "illustration",
      name: "mcat-tutor",
      alt: "Illustration of the MCAT AI Tutor explaining the continuity equation, with explanation modes and source citations",
    },
    summary:
      "An MVP tutor for the MCAT fluids section. Students ask a question and get a tutor-style explanation grounded in ingested study PDFs — then can ask for it simpler, another way, or with another analogy. It also writes MCAT-style multiple-choice questions.",
    problem: [
      "General chatbots explain physics confidently and sometimes wrongly. For exam prep, students need answers tied to the material they will be tested on.",
      "Students also get stuck on the same explanation. A good tutor tries a different angle.",
    ],
    built: [
      "An ingestion script extracts PDF pages, chunks them with overlap, embeds them with text-embedding-3-large and stores them in a 3,072-dimension Pinecone index.",
      "At question time, retrieval expands the query, searches, de-duplicates chunks and builds the context. GPT-4o answers in the selected mode, and the source cards show exactly which pages were used.",
    ],
    steps: [
      { title: "Ingest", body: "PDF pages are extracted, chunked with overlap and embedded." },
      { title: "Retrieve", body: "The question is expanded, searched and de-duplicated." },
      { title: "Explain", body: "The model answers in the chosen mode, using only retrieved context." },
      { title: "Cite", body: "Source cards link each answer back to its pages." },
    ],
    status: ["A working prototype covering the fluid dynamics topic, built to be extended topic by topic."],
  },
  {
    slug: "bx-assist",
    name: "BXAssist",
    line: "Our Slack assistant for attendance, leave and policy questions.",
    category: "AI workplace assistant",
    type: "Internal product",
    year: "2025",
    role: "Slack app, RAG, integrations",
    stack: ["Next.js", "Slack Web API", "Google Sheets API", "OpenRouter", "Qdrant", "Vercel"],
    visual: {
      kind: "illustration",
      name: "bx-assist",
      alt: "Illustration of a Slack conversation where BXAssist answers a policy question and confirms a check-in",
    },
    summary:
      "BXAssist lives where the team already works. Slash commands record check-ins and check-outs, open a leave request form, and answer questions about company policy from the actual policy documents.",
    problem: [
      "HR admin was scattered across spreadsheets and direct messages, and the same policy questions came up every week.",
    ],
    built: [
      "/checkin and /checkout write attendance straight to Google Sheets. /leave opens a Slack modal and routes the request.",
      "/policy runs retrieval over the policy documents and answers with the source passages attached, using a small, fast model. A scheduled endpoint posts the week's birthdays.",
    ],
    steps: [
      { title: "Ask in Slack", body: "A team member types a slash command." },
      { title: "Route", body: "The app verifies the request and picks the right handler." },
      { title: "Answer or record", body: "Policy questions go through retrieval; attendance and leave go to Sheets." },
    ],
    status: ["Deployed on Vercel for the BXTrack Slack workspace."],
  },
  {
    slug: "ai-route-planner",
    name: "AI Route Planner",
    line: "A solver plans field-service visits; an LLM explains the plan so a dispatcher can approve it.",
    category: "Optimisation + LLM",
    type: "Client proof of concept",
    year: "2026",
    role: "Architecture, optimisation service, AI integration",
    stack: ["NestJS", "PostgreSQL", "OR-Tools", "Google Maps", "Claude API", "React"],
    visual: {
      kind: "illustration",
      name: "route-planner",
      alt: "Illustration of optimised technician routes on a map, with an AI suggestion panel offering Approve and Dismiss",
    },
    summary:
      "For a field-service CRM, we paired a vehicle-routing solver with an LLM. The solver does the maths; the model explains the result in plain language; a dispatcher approves or dismisses each suggestion.",
    problem: [
      "Dispatchers juggle priorities, skills, time windows and sick days by hand. An optimiser can do better, but a plan nobody understands is a plan nobody trusts.",
    ],
    built: [
      "A rules engine classifies visits as locked, draft or unplanned, applies A/B/C customer priority and removes unavailable staff. Travel times come from Google Maps, cached in Redis.",
      "A Python OR-Tools service solves the multi-depot routing problem with capacity, time windows, skill matching and locked anchors. One Claude call turns the result into an explanation, and suggestions are saved for review.",
    ],
    steps: [
      { title: "Classify", body: "Visits and staff are filtered by status, priority and availability." },
      { title: "Optimise", body: "OR-Tools solves the routing problem within the constraints." },
      { title: "Explain", body: "Claude writes why each change is suggested." },
      { title: "Approve", body: "The dispatcher approves or dismisses; the calendar updates live." },
    ],
    status: ["Built as a proof of concept on the client's production schema to test the approach."],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
