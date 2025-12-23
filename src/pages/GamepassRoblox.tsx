import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Gift, Gamepad2, ArrowRight, CheckCircle2, 
  Star, Shield, Zap, HelpCircle, MessageCircle 
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Gift,
    title: "Akses Eksklusif",
    description: "Dapatkan item, skins, dan kemampuan eksklusif yang tidak bisa dibeli dengan Robux biasa",
  },
  {
    icon: Gamepad2,
    title: "Tingkatkan Gameplay",
    description: "Unlock fitur premium dalam game favoritmu dan tingkatkan pengalaman bermain",
  },
  {
    icon: Star,
    title: "Item Langka",
    description: "Akses item-item langka dan limited edition yang membuat karaktermu unik",
  },
  {
    icon: Shield,
    title: "Aman & Legal",
    description: "Pembelian Gamepass melalui metode resmi, aman untuk akunmu",
  },
];

const steps = [
  {
    step: 1,
    title: "Pilih Game",
    description: "Beritahu kami game Roblox mana yang ingin kamu beli Gamepass-nya",
  },
  {
    step: 2,
    title: "Pilih Gamepass",
    description: "Tentukan Gamepass apa yang kamu inginkan dari game tersebut",
  },
  {
    step: 3,
    title: "Lakukan Pembayaran",
    description: "Bayar dengan metode pembayaran favoritmu",
  },
  {
    step: 4,
    title: "Gamepass Aktif!",
    description: "Gamepass akan langsung aktif di akun Robloxmu",
  },
];

const popularGames = [
  "Blox Fruits",
  "Brookhaven",
  "Adopt Me!",
  "Murder Mystery 2",
  "Tower of Hell",
  "Pet Simulator X",
  "Jailbreak",
  "Arsenal",
];

export default function GamepassRoblox() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-50" />
        <div className="container relative px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <Gift className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-muted-foreground">
                Gamepass untuk Semua Game Roblox
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Beli <span className="text-gradient">Gamepass</span> Roblox
              <br />Harga Terbaik
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Unlock semua fitur premium di game Roblox favoritmu dengan Gamepass. 
              Harga murah, proses cepat, dan 100% aman!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="xl">
                  <MessageCircle className="w-5 h-5" />
                  Order via WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Link to="/top-up-robux">
                <Button variant="glass" size="xl">
                  <Gamepad2 className="w-5 h-5" />
                  Top Up Robux
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Gamepass */}
      <section className="py-20">
        <div className="container px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Apa itu <span className="text-primary">Gamepass</span>?
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Gamepass adalah item premium dalam game Roblox yang memberikan akses 
                  ke fitur-fitur eksklusif, item langka, atau kemampuan khusus yang tidak 
                  tersedia untuk pemain biasa.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Setiap game di Roblox memiliki Gamepass yang berbeda-beda, dan dengan 
                  membeli Gamepass, kamu bisa menikmati pengalaman bermain yang lebih 
                  seru dan lengkap!
                </p>
                <div className="space-y-3">
                  {["Akses fitur VIP", "Item eksklusif", "Kemampuan khusus", "Permanent unlock"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="p-8 rounded-3xl glass">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-glow animate-float">
                      <Gift className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Gamepass Premium</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Unlock semua fitur eksklusif
                    </p>
                    <div className="space-y-2 text-left mb-6">
                      {["VIP Access", "Exclusive Items", "Special Powers", "No Cooldowns"].map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-3xl font-bold text-gradient mb-4">
                      Mulai Rp 10.000
                    </div>
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                      <Button variant="accent" className="w-full">
                        Order Sekarang
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
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
              Keuntungan Beli <span className="text-primary">Gamepass</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nikmati berbagai keuntungan eksklusif dengan membeli Gamepass
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Games */}
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
              Game <span className="text-primary">Populer</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kami menyediakan Gamepass untuk game-game Roblox paling populer
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {popularGames.map((game, index) => (
              <motion.div
                key={game}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 rounded-xl glass text-foreground font-medium hover:border-primary/50 hover:shadow-glow transition-all cursor-pointer"
              >
                {game}
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-muted-foreground mt-8"
          >
            Dan masih banyak lagi! Hubungi kami untuk game lainnya.
          </motion.p>
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
              Cara <span className="text-primary">Order</span> Gamepass
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ikuti langkah mudah berikut untuk mendapatkan Gamepass
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
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-secondary/50 to-transparent -translate-x-4" />
                )}
                <div className="p-6 rounded-2xl glass text-center">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-secondary-foreground">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-secondary opacity-90" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            
            <div className="relative z-10 text-center py-16 px-6 lg:py-20 lg:px-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
                Siap Order Gamepass?
              </h2>
              <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
                Hubungi kami via WhatsApp untuk order Gamepass game favoritmu. 
                Fast response dan harga bersahabat!
              </p>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                <Button variant="accent" size="xl">
                  <MessageCircle className="w-5 h-5" />
                  Chat WhatsApp Sekarang
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
