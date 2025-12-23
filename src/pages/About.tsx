import { motion } from "framer-motion";
import { Shield, Target, Heart, Users, Award, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const values = [
  {
    icon: Shield,
    title: "Keamanan",
    description: "Kami memprioritaskan keamanan transaksi dan data pelanggan dengan enkripsi terbaik",
  },
  {
    icon: Target,
    title: "Kualitas",
    description: "Layanan berkualitas tinggi dengan proses cepat dan harga kompetitif",
  },
  {
    icon: Heart,
    title: "Kepuasan Pelanggan",
    description: "Kepuasan pelanggan adalah prioritas utama kami dalam setiap transaksi",
  },
  {
    icon: Users,
    title: "Komunitas",
    description: "Membangun komunitas gamer yang solid dan saling mendukung",
  },
];

const stats = [
  { value: "50K+", label: "Transaksi Sukses" },
  { value: "10K+", label: "Pelanggan Puas" },
  { value: "24/7", label: "Customer Support" },
  { value: "99%", label: "Tingkat Kepuasan" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-20 gradient-hero relative">
        <div className="absolute inset-0 gradient-glow opacity-50" />
        <div className="container relative px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Tentang <span className="text-gradient">sirobux</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Platform top up Robux dan Gamepass Roblox terpercaya di Indonesia 
              yang berkomitmen memberikan layanan terbaik untuk komunitas gamer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Cerita <span className="text-primary">Kami</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    sirobux didirikan pada tahun 2020 oleh sekelompok gamer yang 
                    memahami betapa sulitnya mendapatkan Robux dengan harga terjangkau 
                    di Indonesia.
                  </p>
                  <p>
                    Kami memulai dengan misi sederhana: menyediakan layanan top up Robux 
                    yang aman, cepat, dan terjangkau untuk seluruh gamer Indonesia.
                  </p>
                  <p>
                    Hingga saat ini, kami telah melayani lebih dari 10.000 pelanggan 
                    dengan tingkat kepuasan 99% dan terus berkomitmen untuk memberikan 
                    layanan terbaik.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="p-8 rounded-3xl glass">
                  <div className="w-24 h-24 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <Award className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">4+ Tahun</h3>
                    <p className="text-muted-foreground">Melayani Gamer Indonesia</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-card/30">
        <div className="container px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass text-center"
              >
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
              Nilai <span className="text-primary">Kami</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nilai-nilai yang menjadi fondasi kami dalam memberikan layanan terbaik
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass text-center hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-card/30">
        <div className="container px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Komitmen <span className="text-primary">Keamanan</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Kami berkomitmen penuh untuk menjaga keamanan dan kepercayaan pelanggan
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "Transaksi terenkripsi dengan SSL",
                "Metode pembayaran resmi dan aman",
                "Tidak menyimpan data sensitif",
                "Customer support 24/7",
                "Garansi refund jika gagal",
                "Akun tidak akan terkena ban",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-xl glass">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
