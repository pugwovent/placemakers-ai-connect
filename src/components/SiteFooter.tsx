const columns = [
  {
    title: "Shop",
    links: ["Building & Timber", "Plumbing", "Tools & Equipment", "Paint", "Clearance"],
  },
  { title: "Trade", links: ["Open a trade account", "Trade pricing", "Bulk quotes", "Pay my account"] },
  { title: "Services", links: ["Delivery", "Click & Collect", "Frame & Truss", "Quotes & estimating"] },
  { title: "Help", links: ["Contact us", "Returns", "Order tracking", "FAQs"] },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <span className="inline-block bg-background px-3 py-1.5 text-lg font-extrabold uppercase text-primary">
            Any<span className="text-secondary">Company</span>
          </span>
          <p className="mt-4 text-sm text-secondary-foreground/70">
            New Zealand&apos;s trade and DIY building supplies partner. 60+ stores nationwide.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-bold uppercase tracking-wide">{col.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/70">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#catalogue" className="hover:text-accent">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-secondary-foreground/60">
          © {new Date().getFullYear()} AnyCompany Ltd. Demo site. Prices include GST.
        </p>
      </div>
    </footer>
  );
}
