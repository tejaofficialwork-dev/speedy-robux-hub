import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Zap, Shield, Clock, BadgeCheck, Star, ArrowRight, 
  Gamepad2, Gift, Users, CheckCircle2 
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const usps = [
  {
    icon: Zap,
    title: "Harga Termurah",
    description: "Dapatkan Robux dengan harga paling kompetitif di Indonesia",
  },
  {
    icon: Clock,
    title: "Proses Kilat",
    description: "Robux langsung masuk ke akun dalam hitungan menit",
  },
  {
    icon: Shield,
    title: "100% Aman",
    description: "Transaksi aman dan terjamin dengan enkripsi terbaik",
  },
  {
    icon: BadgeCheck,
    title: "Terpercaya",
    description: "Dipercaya ribuan gamers Indonesia sejak 2020",
  },
];

const products = [
  { name: "80 Robux", price: "Rp 15.000", popular: false },
  { name: "400 Robux", price: "Rp 65.000", popular: true },
  { name: "800 Robux", price: "Rp 125.000", popular: false },
  { name: "1.700 Robux", price: "Rp 250.000", popular: false },
];

const testimonials = [
  {
    name: "Arya Putra",
    avatar: "A",
    rating: 5,
    text: "Prosesnya super cepat! Robux langsung masuk kurang dari 5 menit. Recommended banget!",
  },
  {
    name: "Dewi Sartika",
    avatar: "D",
    rating: 5,
    text: "Harganya paling murah dibanding yang lain, pelayanan juga ramah dan responsif.",
  },
  {
    name: "Raka Gaming",
    avatar: "R",
    rating: 5,
    text: "Sudah 10+ kali transaksi di sini, selalu aman dan cepat. Best seller Robux!",
  },
];

const paymentLogos = [
  "DANA", "OVO", "GoPay", "ShopeePay", "QRIS", "BCA", "BRI", "Mandiri", "BNI"
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Gaming background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          <div className="absolute inset-0 gradient-glow" />
        </div>

        <div className="container relative z-10 px-4 lg:px-8 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Trusted by 50,000+ Gamers Indonesia
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
              Top Up <span className="text-gradient">Robux</span> &{" "}
              <span className="text-gradient">Gamepass</span>
              <br />
              <span className="text-primary">Termurah</span> & Terpercaya
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Dapatkan Robux dan Gamepass Roblox dengan harga terbaik, 
              proses kilat dalam hitungan menit, dan layanan 24/7 terpercaya.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/top-up-robux">
                <Button variant="hero" size="xl">
                  <Gamepad2 className="w-5 h-5" />
                  Top Up Robux Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/gamepass-roblox">
                <Button variant="glass" size="xl">
                  <Gift className="w-5 h-5" />
                  Beli Gamepass
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>100% Legal</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Instant Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* USP Section */}
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
              Kenapa Pilih <span className="text-primary">sirobux</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kami menyediakan layanan top up Robux terbaik dengan harga termurah 
              dan proses tercepat di Indonesia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl glass hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all">
                  <usp.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{usp.title}</h3>
                <p className="text-muted-foreground text-sm">{usp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
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
              Harga <span className="text-primary">Robux</span> Termurah
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pilih paket Robux sesuai kebutuhan kamu dengan harga paling terjangkau
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl glass text-center hover:border-primary/50 transition-all duration-300 ${
                  product.popular ? "border-primary shadow-glow" : ""
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-xs font-bold text-primary-foreground">
                    PALING LARIS
                  </div>
                )}
                <div className="text-4xl font-bold mb-2 text-gradient">{product.name.split(" ")[0]}</div>
                <div className="text-muted-foreground mb-4">Robux</div>
                <div className="text-2xl font-bold text-foreground mb-6">{product.price}</div>
                <Link to="/top-up-robux">
                  <Button variant={product.popular ? "accent" : "outline"} className="w-full">
                    Beli Sekarang
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/top-up-robux">
              <Button variant="ghost" size="lg">
                Lihat Semua Paket
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Apa Kata <span className="text-primary">Mereka</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ribuan gamers Indonesia sudah mempercayai sirobux untuk kebutuhan Robux mereka
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">Verified Buyer</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20">
        <div className="container px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Metode <span className="text-primary">Pembayaran</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bayar dengan berbagai metode pembayaran yang kamu suka
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {paymentLogos.map((payment, index) => (
              <motion.div
                key={payment}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 rounded-xl glass text-foreground font-medium hover:border-primary/50 transition-all"
              >
                {payment}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 gradient-primary opacity-90" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            
            <div className="relative z-10 text-center py-16 px-6 lg:py-20 lg:px-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Siap Top Up Robux?
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
                Bergabung dengan ribuan gamers Indonesia yang sudah mempercayai sirobux. 
                Top up sekarang dan nikmati harga termurah!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/top-up-robux">
                  <Button variant="accent" size="xl">
                    <Gamepad2 className="w-5 h-5" />
                    Top Up Sekarang
                  </Button>
                </Link>
                <Link to="/faq">
                  <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Pelajari Lebih Lanjut
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
