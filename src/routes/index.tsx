import { createFileRoute } from "@tanstack/react-router";
import { Truck, Store, Hammer, Percent, ChevronRight } from "lucide-react";

import heroYard from "@/assets/hero-yard.jpg";
import promoTools from "@/assets/promo-tools.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AmazonConnectChat } from "@/components/AmazonConnectChat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AnyCompany | Building Supplies, Timber & Trade Hardware NZ" },
      {
        name: "description",
        content:
          "Shop building supplies, timber, tools and hardware online at AnyCompany. Trade pricing, nationwide delivery and free click & collect.",
      },
      { property: "og:title", content: "AnyCompany | Building Supplies & Trade Hardware NZ" },
      {
        property: "og:description",
        content:
          "Timber, tools, plumbing and hardware with trade pricing, nationwide delivery and free click & collect.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const categories = [
  "Building & Timber",
  "Plumbing",
  "Electrical",
  "Paint & Decorating",
  "Tools & Equipment",
  "Kitchen & Bathroom",
  "Garden & Outdoor",
  "Fixings & Fasteners",
];

const products = [
  { name: "H3.2 Treated Pine 90x45mm 2.4m", price: "$18.49", unit: "each" },
  { name: "GIB Standard Plasterboard 2400x1200", price: "$34.90", unit: "sheet" },
  { name: "18V Brushless Impact Driver Kit", price: "$399.00", unit: "kit" },
  { name: "Resene Lumbersider 10L White", price: "$249.00", unit: "each" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="relative">
          <img
            src={heroYard}
            alt="AnyCompany trade yard with stacked timber and a loaded ute"
            width={1920}
            height={1000}
            className="h-[22rem] w-full object-cover md:h-[30rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 to-secondary/20">
            <div className="mx-auto flex h-full max-w-7xl items-center px-4">
              <div className="max-w-xl">
                <p className="inline-block bg-accent px-2 py-1 text-xs font-bold uppercase tracking-wide text-accent-foreground">
                  Trade prices online
                </p>
                <h1 className="mt-4 text-4xl font-extrabold uppercase leading-tight text-secondary-foreground md:text-5xl">
                  Everything for the job. Ordered in minutes.
                </h1>
                <p className="mt-4 text-secondary-foreground/85">
                  Over 40,000 products in stock. Order online for nationwide delivery or free
                  click &amp; collect from your local AnyCompany branch.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#catalogue"
                    className="rounded-sm bg-primary px-6 py-3 text-sm font-bold uppercase text-primary-foreground hover:opacity-90"
                  >
                    Shop online
                  </a>
                  <a
                    href="#account"
                    className="rounded-sm border border-secondary-foreground/40 px-6 py-3 text-sm font-bold uppercase text-secondary-foreground hover:bg-white/10"
                  >
                    Open a trade account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-card">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Truck, title: "Nationwide delivery", text: "To site or to your door" },
              { icon: Store, title: "Free click & collect", text: "Ready in 2 hours" },
              { icon: Hammer, title: "Trade support", text: "Quotes and estimating" },
              { icon: Percent, title: "Account pricing", text: "Your rates applied online" },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-center gap-3">
                <Icon className="size-7 text-primary" />
                <div>
                  <p className="text-sm font-bold">{title}</p>
                  <p className="text-xs text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="catalogue" className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-2xl font-extrabold uppercase">Shop by category</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {categories.map((c) => (
              <a
                key={c}
                href="#catalogue"
                className="group flex items-center justify-between border border-border bg-card px-4 py-5 text-sm font-semibold transition hover:border-primary hover:shadow-md"
              >
                {c}
                <ChevronRight className="size-4 text-primary transition group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </section>

        <section className="bg-muted/50">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 md:grid-cols-2">
            <img
              src={promoTools}
              alt="Power drill, timber, screws and work gloves laid out"
              width={1200}
              height={800}
              loading="lazy"
              className="w-full rounded-sm object-cover"
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-primary">
                This month&apos;s deals
              </p>
              <h2 className="mt-2 text-3xl font-extrabold uppercase">
                Up to 30% off power tools &amp; site gear
              </h2>
              <p className="mt-3 text-muted-foreground">
                Save across drills, drivers, saws and safety gear. Trade account holders get their
                contract pricing automatically at checkout.
              </p>
              <a
                href="#catalogue"
                className="mt-6 inline-block rounded-sm bg-primary px-6 py-3 text-sm font-bold uppercase text-primary-foreground hover:opacity-90"
              >
                View the deals
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-2xl font-extrabold uppercase">Popular with tradies</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <article key={p.name} className="border border-border bg-card p-4">
                <div className="flex h-32 items-center justify-center bg-muted text-xs text-muted-foreground">
                  Product image
                </div>
                <h3 className="mt-4 text-sm font-semibold leading-snug">{p.name}</h3>
                <p className="mt-3 text-xl font-extrabold text-primary">
                  {p.price}{" "}
                  <span className="text-xs font-medium text-muted-foreground">/ {p.unit}</span>
                </p>
                <button className="mt-4 w-full rounded-sm bg-secondary py-2 text-xs font-bold uppercase text-secondary-foreground hover:opacity-90">
                  Add to cart
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="stores" className="bg-secondary">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-10">
            <div>
              <h2 className="text-2xl font-extrabold uppercase text-secondary-foreground">
                60+ stores across New Zealand
              </h2>
              <p className="mt-2 text-sm text-secondary-foreground/75">
                Find your local branch for opening hours, yard access and trade desk contacts.
              </p>
            </div>
            <a
              href="#stores"
              className="rounded-sm bg-primary px-6 py-3 text-sm font-bold uppercase text-primary-foreground hover:opacity-90"
            >
              Find a store
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
      <AmazonConnectChat />
    </div>
  );
}
