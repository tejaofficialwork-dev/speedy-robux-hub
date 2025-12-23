import { Link } from "react-router-dom";
import { Mail, MessageCircle, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  products: [
    { label: "Top Up Robux", href: "/top-up-robux" },
    { label: "Gamepass Roblox", href: "/gamepass-roblox" },
  ],
  company: [
    { label: "Tentang Kami", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Syarat & Ketentuan", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
  ],
};

const paymentMethods = [
  "DANA", "OVO", "GoPay", "ShopeePay", "QRIS", "BCA", "BRI", "Mandiri"
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                siro<span className="text-primary">bux</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Platform top up Robux dan Gamepass Roblox termurah, tercepat, dan terpercaya di Indonesia.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-muted hover:bg-primary/20 hover:text-primary transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Produk</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Metode Pembayaran</h4>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="px-3 py-1.5 text-xs font-medium bg-muted rounded-lg text-muted-foreground"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 sirobux. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
