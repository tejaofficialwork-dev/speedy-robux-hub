import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Zap, Shield, Clock, CheckCircle2, Star, ArrowRight,
  Search, HelpCircle, Gamepad2, Copy, MessageCircle
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const robuxPackages = [
  { robux: 80, price: 15000, originalPrice: 18000 },
  { robux: 160, price: 28000, originalPrice: 35000 },
  { robux: 240, price: 42000, originalPrice: 50000 },
  { robux: 400, price: 65000, originalPrice: 80000, popular: true },
  { robux: 800, price: 125000, originalPrice: 155000 },
  { robux: 1700, price: 250000, originalPrice: 310000 },
  { robux: 2000, price: 290000, originalPrice: 360000 },
  { robux: 4500, price: 620000, originalPrice: 780000 },
  { robux: 10000, price: 1350000, originalPrice: 1700000 },
];

const steps = [
  {
    step: 1,
    title: "Pilih Paket Robux",
    description: "Pilih jumlah Robux yang kamu inginkan dari daftar paket di bawah",
  },
  {
    step: 2,
    title: "Masukkan Username",
    description: "Masukkan username Roblox kamu dengan benar di halaman checkout",
  },
  {
    step: 3,
    title: "Pilih Pembayaran",
    description: "Pilih metode pembayaran yang kamu inginkan dan lakukan pembayaran",
  },
  {
    step: 4,
    title: "Robux Masuk!",
    description: "Tunggu beberapa menit dan Robux akan langsung masuk ke akunmu",
  },
];

const faqs = [
  {
    question: "Apakah top up di sirobux aman?",
    answer: "Ya, 100% aman! Kami menggunakan metode top up resmi melalui Gamepass. Akun kamu tidak akan terkena ban atau sanksi apapun.",
  },
  {
    question: "Berapa lama proses pengiriman Robux?",
    answer: "Proses pengiriman Robux biasanya membutuhkan waktu 5-30 menit setelah pembayaran dikonfirmasi. Pada jam sibuk, maksimal 1 jam.",
  },
  {
    question: "Apakah bisa refund jika gagal?",
    answer: "Tentu! Jika Robux tidak masuk dalam 24 jam, kami akan melakukan refund penuh. Hubungi customer service kami.",
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer: "Kami menerima DANA, OVO, GoPay, ShopeePay, QRIS, dan transfer bank (BCA, BRI, Mandiri, BNI).",
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID").format(price);
};

export default function TopUpRobux() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPackages = robuxPackages.filter(
    (pkg) => pkg.robux.toString().includes(searchQuery) || 
             pkg.price.toString().includes(searchQuery)
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-20 gradient-hero">
        <div className="absolute inset-0 gradient-glow opacity-50" />
        <div className="container relative px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Top Up <span className="text-gradient">Robux</span> Termurah & Terpercaya
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Dapatkan Robux dengan harga terbaik di Indonesia. Proses kilat, 
              aman, dan terpercaya dengan ribuan transaksi sukses setiap hari.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">100% Aman</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Proses 5-30 Menit</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">50K+ Transaksi</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Price List */}
      <section className="py-16 -mt-8">
        <div className="container px-4 lg:px-8">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md mx-auto mb-12"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cari jumlah Robux..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl bg-card border-border"
              />
            </div>
          </motion.div>

          {/* Packages Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {filteredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.robux}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  selectedPackage === pkg.robux
                    ? "glass border-primary shadow-glow"
                    : "glass hover:border-primary/50"
                } ${pkg.popular ? "border-primary" : ""}`}
                onClick={() => setSelectedPackage(pkg.robux)}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 right-4 px-3 py-1 rounded-full gradient-primary text-xs font-bold text-primary-foreground">
                    BEST SELLER
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-gradient mb-1">
                      {formatPrice(pkg.robux)}
                    </div>
                    <div className="text-muted-foreground text-sm">Robux</div>
                  </div>
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Gamepad2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">
                      Rp {formatPrice(pkg.price)}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      Rp {formatPrice(pkg.originalPrice)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-accent/20 text-accent text-xs font-semibold">
                      HEMAT {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}%
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <Link to={`/checkout?package=${pkg.robux}`}>
                    <Button 
                      variant={selectedPackage === pkg.robux || pkg.popular ? "accent" : "outline"} 
                      className="w-full"
                    >
                      Beli Sekarang
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-card/30">
        <div className="container px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cara <span className="text-primary">Top Up</span> Robux
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ikuti 4 langkah mudah berikut untuk mendapatkan Robux kamu
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-4" />
                )}
                <div className="p-6 rounded-2xl glass text-center">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pertanyaan <span className="text-primary">Umum</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan yang sering diajukan
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">Masih punya pertanyaan?</p>
            <Link to="/faq">
              <Button variant="glass">
                <HelpCircle className="w-4 h-4" />
                Lihat Semua FAQ
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 pb-20">
        <div className="container px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 lg:p-12 rounded-3xl glass text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Butuh Bantuan? Hubungi Kami!
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Tim customer service kami siap membantu kamu 24/7 via WhatsApp
            </p>
            <Button variant="accent" size="lg">
              <MessageCircle className="w-5 h-5" />
              Chat WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
