import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Cara Top Up Robux Termurah dan Tercepat di Indonesia",
    excerpt: "Panduan lengkap cara top up Robux dengan harga termurah dan proses tercepat. Dapatkan tips dan trik untuk mendapatkan Robux lebih hemat!",
    category: "Tutorial",
    date: "2024-01-15",
    readTime: "5 menit",
    author: "Admin sirobux",
  },
  {
    id: 2,
    title: "10 Game Roblox Terpopuler di Indonesia Tahun 2024",
    excerpt: "Daftar game Roblox paling populer yang dimainkan oleh gamer Indonesia. Dari Blox Fruits hingga Brookhaven!",
    category: "Gaming",
    date: "2024-01-12",
    readTime: "8 menit",
    author: "Admin sirobux",
  },
  {
    id: 3,
    title: "Apa Itu Gamepass Roblox dan Cara Membelinya",
    excerpt: "Pelajari apa itu Gamepass di Roblox, keuntungannya, dan bagaimana cara membeli Gamepass dengan mudah dan aman.",
    category: "Edukasi",
    date: "2024-01-10",
    readTime: "6 menit",
    author: "Admin sirobux",
  },
  {
    id: 4,
    title: "Tips Aman Bermain Roblox untuk Anak-Anak",
    excerpt: "Panduan untuk orang tua tentang cara menjaga keamanan anak-anak saat bermain Roblox. Tips parental control dan pengaturan privasi.",
    category: "Tips",
    date: "2024-01-08",
    readTime: "7 menit",
    author: "Admin sirobux",
  },
  {
    id: 5,
    title: "Cara Membuat Game di Roblox Studio untuk Pemula",
    excerpt: "Tutorial lengkap cara membuat game sendiri di Roblox menggunakan Roblox Studio. Cocok untuk pemula!",
    category: "Tutorial",
    date: "2024-01-05",
    readTime: "10 menit",
    author: "Admin sirobux",
  },
  {
    id: 6,
    title: "Daftar Kode Promo Roblox Terbaru Januari 2024",
    excerpt: "Kumpulan kode promo Roblox terbaru yang masih aktif. Dapatkan item gratis untuk avatar kamu!",
    category: "Promo",
    date: "2024-01-01",
    readTime: "3 menit",
    author: "Admin sirobux",
  },
];

const categories = ["Semua", "Tutorial", "Gaming", "Edukasi", "Tips", "Promo"];

export default function Blog() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-16 gradient-hero relative">
        <div className="absolute inset-0 gradient-glow opacity-50" />
        <div className="container relative px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              <span className="text-gradient">sirobux</span> Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Artikel, tips, dan berita terbaru seputar Roblox dan dunia gaming
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === "Semua"
                    ? "gradient-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl glass hover:border-primary/50 transition-all duration-300"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium gradient-primary text-primary-foreground">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                {/* Author & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                      <User className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground">{post.author}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Baca
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              Muat Lebih Banyak
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-card/30">
        <div className="container px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dapatkan Update Terbaru
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe newsletter kami untuk mendapatkan tips, promo, dan berita 
              terbaru langsung ke inbox kamu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email kamu"
                className="flex-1 h-12 px-4 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <Button variant="accent" size="lg">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
