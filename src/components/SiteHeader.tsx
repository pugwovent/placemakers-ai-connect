import { Search, MapPin, User, ShoppingCart, Menu, Phone } from "lucide-react";

const categories = [
  "Building & Timber",
  "Plumbing",
  "Electrical",
  "Paint & Decorating",
  "Tools & Equipment",
  "Kitchen & Bathroom",
  "Garden & Outdoor",
  "Clearance",
];

export function SiteHeader() {
  return (
    <header>
      <div className="bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs">
          <p className="hidden sm:block">Trade prices for account holders · Free click &amp; collect</p>
          <div className="flex items-center gap-4">
            <a href="#stores" className="flex items-center gap-1 hover:text-accent">
              <MapPin className="size-3.5" /> Find a store
            </a>
            <a href="#contact" className="flex items-center gap-1 hover:text-accent">
              <Phone className="size-3.5" /> 0800 000 000
            </a>
          </div>
        </div>
      </div>

      <div className="bg-primary">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4">
          <a href="/" className="shrink-0">
            <span className="block bg-background px-3 py-1.5 text-xl font-extrabold uppercase tracking-tight text-primary">
              Any<span className="text-secondary">Company</span>
            </span>
          </a>

          <div className="relative hidden flex-1 md:block">
            <input
              aria-label="Search products"
              placeholder="Search products, brands and more"
              className="w-full rounded-sm border-0 bg-background px-4 py-2.5 pr-11 text-sm outline-none"
            />
            <Search className="absolute right-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
          </div>

          <div className="ml-auto flex items-center gap-5 text-primary-foreground">
            <a href="#account" className="flex items-center gap-2 text-sm font-semibold">
              <User className="size-5" />
              <span className="hidden lg:inline">Trade login</span>
            </a>
            <a href="#cart" className="flex items-center gap-2 text-sm font-semibold">
              <ShoppingCart className="size-5" />
              <span className="hidden lg:inline">Cart</span>
            </a>
            <button aria-label="Menu" className="md:hidden">
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </div>

      <nav className="border-b border-border bg-card">
        <ul className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-4 py-3 text-sm font-semibold text-foreground">
          {categories.map((c) => (
            <li key={c} className="whitespace-nowrap">
              <a href="#catalogue" className="hover:text-primary">
                {c}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
