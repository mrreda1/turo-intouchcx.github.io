import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  ClipboardList,
  Clock4,
  Gamepad2,
  Headphones,
  KeyRound,
  MessageSquare,
  Search,
  Sparkles,
  Table2,
  Voicemail,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quick Links — Support Team Launcher" },
      {
        name: "description",
        content:
          "One launcher for every tool the support team uses daily: Okta, Slack, NICE, Superpunch, Sidd and shared docs.",
      },
      { property: "og:title", content: "Quick Links — Support Team Launcher" },
      {
        property: "og:description",
        content:
          "One launcher for every tool the support team uses daily: Okta, Slack, NICE, Superpunch, Sidd and shared docs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type AppLink = {
  name: string;
  href: string;
  icon: LucideIcon;
  group: "Systems" | "Docs & Sheets";
  blurb: string;
};

const LINKS: AppLink[] = [
  {
    name: "Okta",
    href: "http://turo.okta.com/",
    icon: KeyRound,
    group: "Systems",
    blurb: "Single sign-on portal",
  },
  {
    name: "Superpunch",
    href: "http://egypt.superpunchtms.com/",
    icon: Clock4,
    group: "Systems",
    blurb: "Time & attendance",
  },
  {
    name: "Slack",
    href: "https://turo.enterprise.slack.com/",
    icon: MessageSquare,
    group: "Systems",
    blurb: "Team chat",
  },
  {
    name: "NICE",
    href: "https://intouch.nicecloudsvc.com/",
    icon: Headphones,
    group: "Systems",
    blurb: "Schedule planner",
  },
  {
    name: "Sidd",
    href: "https://auth.laivly.cloud/realms/turo/protocol/openid-connect/auth?response_type=code&client_id=sidd-platform-client-prod&scope=profile offline_access&redirect_uri=sidd://oauth/redirect",
    icon: Sparkles,
    group: "Systems",
    blurb: "Agent assist",
  },
  {
    name: "AU Gurus",
    href: "https://docs.google.com/document/d/1KBsw-ZyJhb3pVO8MN2kbA_5cZIhzwmhSO8peNADIeec/edit?usp=sharing",
    icon: ClipboardList,
    group: "Docs & Sheets",
    blurb: "Knowledge docs",
  },
  {
    name: "Ticket Strategy",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSd_ahMP9eNhIQ3qGhH7kJxK2pDIjMzghFPq8JxD6EiI2c26mw/viewform?pli=1",
    icon: ClipboardList,
    group: "Docs & Sheets",
    blurb: "Submission form",
  },
  {
    name: "VM Bucket",
    href: "https://docs.google.com/spreadsheets/d/1YhP8uNxhqx5d53wB0YDlXIU811t6Lz8X-226t8-OmLY/edit?gid=0#gid=0",
    icon: Voicemail,
    group: "Docs & Sheets",
    blurb: "Assigned tickets",
  },
  {
    name: "Play Mode",
    href: "https://docs.google.com/spreadsheets/d/1XJ7kyRBvCHr0rxsAJ6V0OSHboK5ik9rKO5fqk_OM5g0/edit?gid=990526332#gid=990526332",
    icon: Gamepad2,
    group: "Docs & Sheets",
    blurb: "Unassigned tickets",
  },
];

const GROUPS = ["Systems", "Docs & Sheets"] as const;

function Tile({ link }: { link: AppLink }) {
  const Icon = link.icon;
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer noopener"
      className="tile group relative flex flex-col gap-4 rounded-2xl border border-border p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon size={22} strokeWidth={1.9} />
      </span>
      <span>
        <span className="block text-base font-semibold text-card-foreground">{link.name}</span>
        <span className="mt-0.5 block text-xs text-muted-foreground">{link.blurb}</span>
      </span>
      <ArrowUpRight
        size={16}
        className="absolute right-4 top-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
      />
    </a>
  );
}

function Index() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return LINKS;
    return LINKS.filter(
      (l) => l.name.toLowerCase().includes(q) || l.blurb.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-16">
      <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Support workspace
          </p>
          <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Quick Links</h1>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Every tool your shift needs, one click away. Links open in a new tab.
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search links…"
            aria-label="Search links"
            className="h-11 w-full rounded-xl border border-input bg-card pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </header>

      <div className="mt-14 space-y-12">
        {GROUPS.map((group) => {
          const items = filtered.filter((l) => l.group === group);
          if (items.length === 0) return null;
          return (
            <section key={group}>
              <div className="flex items-center gap-4">
                <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {group}
                </h2>
                <span className="h-px flex-1 bg-border" />
                <span className="text-xs text-muted-foreground">{items.length}</span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {items.map((link) => (
                  <Tile key={link.name} link={link} />
                ))}
              </div>
            </section>
          );
        })}

        {filtered.length === 0 && (
          <p className="py-16 text-center text-sm text-muted-foreground">
            No links match “{query}”.
          </p>
        )}
      </div>
    </main>
  );
}
