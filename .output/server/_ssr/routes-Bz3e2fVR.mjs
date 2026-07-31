import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as KeyRound, c as Clock4, i as MessageSquare, l as ClipboardList, n as Sparkles, o as Headphones, r as Search, s as Gamepad2, t as Voicemail, u as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bz3e2fVR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LINKS = [
	{
		name: "Okta",
		href: "http://turo.okta.com/",
		icon: KeyRound,
		group: "Systems",
		blurb: "Single sign-on portal"
	},
	{
		name: "Superpunch",
		href: "http://egypt.superpunchtms.com/",
		icon: Clock4,
		group: "Systems",
		blurb: "Time & attendance"
	},
	{
		name: "Slack",
		href: "https://turo.enterprise.slack.com/",
		icon: MessageSquare,
		group: "Systems",
		blurb: "Team chat"
	},
	{
		name: "NICE",
		href: "https://intouch.nicecloudsvc.com/",
		icon: Headphones,
		group: "Systems",
		blurb: "Contact center"
	},
	{
		name: "Sidd",
		href: "https://auth.laivly.cloud/realms/turo/protocol/openid-connect/auth?response_type=code&client_id=sidd-platform-client-prod&scope=profile offline_access&redirect_uri=sidd://oauth/redirect",
		icon: Sparkles,
		group: "Systems",
		blurb: "Agent assist"
	},
	{
		name: "AU Gurus",
		href: "https://docs.google.com/document/d/1KBsw-ZyJhb3pVO8MN2kbA_5cZIhzwmhSO8peNADIeec/edit?usp=sharing",
		icon: ClipboardList,
		group: "Docs & Sheets",
		blurb: "Escalation contacts doc"
	},
	{
		name: "Ticket Strategy",
		href: "https://docs.google.com/forms/d/e/1FAIpQLSd_ahMP9eNhIQ3qGhH7kJxK2pDIjMzghFPq8JxD6EiI2c26mw/viewform?pli=1",
		icon: ClipboardList,
		group: "Docs & Sheets",
		blurb: "Submission form"
	},
	{
		name: "VM Bucket",
		href: "https://docs.google.com/spreadsheets/d/1YhP8uNxhqx5d53wB0YDlXIU811t6Lz8X-226t8-OmLY/edit?gid=0#gid=0",
		icon: Voicemail,
		group: "Docs & Sheets",
		blurb: "Voicemail tracker"
	},
	{
		name: "Play Mode",
		href: "https://docs.google.com/spreadsheets/d/1XJ7kyRBvCHr0rxsAJ6V0OSHboK5ik9rKO5fqk_OM5g0/edit?gid=990526332#gid=990526332",
		icon: Gamepad2,
		group: "Docs & Sheets",
		blurb: "Shift game sheet"
	}
];
var GROUPS = ["Systems", "Docs & Sheets"];
function Tile({ link }) {
	const Icon = link.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: link.href,
		target: "_blank",
		rel: "noreferrer noopener",
		className: "tile group relative flex flex-col gap-4 rounded-2xl border border-border p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					size: 22,
					strokeWidth: 1.9
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-base font-semibold text-card-foreground",
				children: link.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block text-xs text-muted-foreground",
				children: link.blurb
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
				size: 16,
				className: "absolute right-4 top-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
			})
		]
	});
}
function Index() {
	const [query, setQuery] = (0, import_react.useState)("");
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return LINKS;
		return LINKS.filter((l) => l.name.toLowerCase().includes(q) || l.blurb.toLowerCase().includes(q));
	}, [query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-h-screen w-full max-w-5xl px-6 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.2em] text-primary",
					children: "Support workspace"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-4xl font-bold sm:text-5xl",
					children: "Quick Links"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-md text-sm text-muted-foreground",
					children: "Every tool your shift needs, one click away. Links open in a new tab."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full sm:w-64",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
					size: 16,
					className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: "Search links…",
					"aria-label": "Search links",
					className: "h-11 w-full rounded-xl border border-input bg-card pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-14 space-y-12",
			children: [GROUPS.map((group) => {
				const items = filtered.filter((l) => l.group === group);
				if (items.length === 0) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground",
							children: group
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: items.length
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
					children: items.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, { link }, link.name))
				})] }, group);
			}), filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "py-16 text-center text-sm text-muted-foreground",
				children: [
					"No links match “",
					query,
					"”."
				]
			})]
		})]
	});
}
//#endregion
export { Index as component };
