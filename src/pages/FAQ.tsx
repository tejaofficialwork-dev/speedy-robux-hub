import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    category: "Umum",
    questions: [
      {
        question: "Apakah sirobux aman dan terpercaya?",
        answer: "Ya, sirobux adalah platform top up Robux yang 100% aman dan terpercaya. Kami menggunakan metode pengiriman resmi melalui Gamepass yang tidak melanggar ketentuan Roblox. Akun kamu tidak akan terkena ban atau sanksi apapun.",
      },
      {
        question: "Apakah top up Robux di sirobux legal?",
        answer: "Ya, metode yang kami gunakan adalah metode legal melalui pembelian Gamepass. Ini adalah cara yang diizinkan oleh Roblox untuk mentransfer Robux antar akun.",
      },
      {
        question: "Bagaimana cara menghubungi customer service?",
        answer: "Kamu bisa menghubungi customer service kami melalui WhatsApp 24/7. Tim kami akan dengan senang hati membantu menjawab pertanyaan dan menyelesaikan masalah kamu.",
      },
    ],
  },
  {
    category: "Proses & Waktu",
    questions: [
      {
        question: "Berapa lama waktu pengiriman Robux?",
        answer: "Proses pengiriman Robux biasanya membutuhkan waktu 5-30 menit setelah pembayaran dikonfirmasi. Pada jam sibuk atau tanggal tertentu, pengiriman maksimal membutuhkan waktu 1 jam.",
      },
      {
        question: "Bagaimana cara kerja top up Robux?",
        answer: "Setelah kamu melakukan pembayaran, tim kami akan membeli Gamepass dari akun Roblox kamu. Robux dari pembelian Gamepass tersebut akan otomatis masuk ke akun kamu (setelah dipotong fee Roblox 30%).",
      },
      {
        question: "Kenapa Robux yang diterima lebih sedikit dari yang tertera?",
        answer: "Roblox memotong fee 30% dari setiap penjualan Gamepass. Harga yang kami tampilkan sudah memperhitungkan potongan ini, sehingga jumlah Robux yang kamu terima sesuai dengan yang tertera.",
      },
    ],
  },
  {
    category: "Pembayaran",
    questions: [
      {
        question: "Metode pembayaran apa saja yang tersedia?",
        answer: "Kami menerima berbagai metode pembayaran populer di Indonesia: DANA, OVO, GoPay, ShopeePay, QRIS, dan transfer bank (BCA, BRI, Mandiri, BNI).",
      },
      {
        question: "Apakah ada biaya tambahan untuk pembayaran?",
        answer: "Tidak ada biaya admin atau biaya tambahan apapun. Harga yang tertera adalah harga final yang perlu kamu bayar.",
      },
      {
        question: "Bagaimana jika pembayaran gagal?",
        answer: "Jika pembayaran gagal atau Robux tidak masuk dalam 24 jam, kami akan melakukan refund penuh. Hubungi customer service kami dengan bukti pembayaran.",
      },
    ],
  },
  {
    category: "Refund & Garansi",
    questions: [
      {
        question: "Apakah bisa refund jika berubah pikiran?",
        answer: "Maaf, kami tidak bisa melakukan refund jika kamu berubah pikiran setelah Robux berhasil dikirim. Refund hanya berlaku jika pengiriman gagal.",
      },
      {
        question: "Bagaimana garansi refund bekerja?",
        answer: "Jika Robux tidak masuk ke akun kamu dalam 24 jam setelah pembayaran dikonfirmasi, kami akan melakukan refund 100% ke metode pembayaran yang sama.",
      },
      {
        question: "Apa yang harus dilakukan jika Robux tidak masuk?",
        answer: "Pertama, pastikan username yang kamu berikan sudah benar. Kedua, tunggu hingga 1 jam. Jika masih belum masuk, hubungi customer service kami dengan bukti pembayaran dan detail order.",
      },
    ],
  },
];

export default function FAQ() {
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
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-glow">
              <HelpCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang 
              layanan top up Robux dan Gamepass di sirobux
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container px-4 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.category}-${index}`}
                      className="glass rounded-xl px-6 border-none"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-5">
                        <span className="font-semibold pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Masih Punya Pertanyaan?
            </h2>
            <p className="text-muted-foreground mb-8">
              Tim customer service kami siap membantu kamu 24/7 via WhatsApp
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="accent" size="xl">
                <MessageCircle className="w-5 h-5" />
                Chat WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
