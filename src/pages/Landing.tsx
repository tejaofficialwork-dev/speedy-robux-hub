import { useState } from "react";

export default function Landing() {
  const [liked, setLiked] = useState(false);

  return (
    <main className="bg-[#F8FAFC] text-[#0F172A] leading-relaxed">
      {/* HEADER */}
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Sirobux Logo" className="h-8" />
            <span className="font-semibold text-lg">Sirobux</span>
          </div>
          <a
            href="/register"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
          >
            Top Up Sekarang
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10 grid lg:grid-cols-3 gap-10">
        {/* MAIN CONTENT */}
        <article className="lg:col-span-2">
          <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
            Roblox • Top Up • Sirobux
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Top Up Robux Termurah & Terpercaya untuk Pemain Roblox Indonesia
          </h1>

          <p className="text-lg text-slate-600 mb-6">
            Robux merupakan mata uang virtual utama dalam ekosistem Roblox yang
            memungkinkan pemain membeli item eksklusif, membuka gamepass premium,
            dan meningkatkan pengalaman bermain secara keseluruhan.
          </p>

          <p className="text-lg text-slate-600 mb-8">
            <strong>Sirobux</strong> hadir sebagai platform top up Robux yang
            mengutamakan keamanan, kecepatan, dan transparansi harga. Dengan
            sistem yang dirancang ramah pengguna, Sirobux menjadi solusi ideal
            bagi pemain kasual hingga gamer aktif.
          </p>

          <img
            src="/images/landing/roblox-hero.jpg"
            alt="Top Up Robux Aman dan Murah"
            className="w-full rounded-2xl shadow-md my-12"
          />

          <h2 className="text-2xl font-semibold mb-4">
            Kenapa Top Up Robux di Sirobux?
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            Banyak platform menawarkan layanan top up Robux, namun tidak semuanya
            memberikan jaminan keamanan dan transparansi. Sirobux membedakan diri
            dengan sistem yang tidak meminta akses login akun Roblox, sehingga
            risiko keamanan dapat diminimalkan.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-lg text-slate-600 mb-10">
            <li>Harga Robux kompetitif dan selalu update</li>
            <li>Proses cepat, Robux masuk dalam hitungan menit</li>
            <li>Tidak perlu login atau password akun Roblox</li>
            <li>Mendukung berbagai metode pembayaran</li>
          </ul>

          <img
            src="/images/landing/robux-process.jpg"
            alt="Proses Top Up Robux"
            className="w-full rounded-2xl shadow-sm my-12"
          />

          <h2 className="text-2xl font-semibold mb-4">
            Pengalaman Bermain Roblox Tanpa Hambatan
          </h2>

          <p className="text-lg text-slate-600 mb-6">
            Dengan Robux yang cukup, pemain dapat mengeksplorasi berbagai fitur
            premium tanpa batasan. Sirobux memastikan setiap transaksi dilakukan
            secara legal dan sesuai kebijakan Roblox.
          </p>

          <p className="text-lg text-slate-600 mb-10">
            Ribuan pemain telah mempercayakan kebutuhan Robux mereka kepada
            Sirobux. Kombinasi harga terjangkau, proses cepat, dan sistem aman
            menjadikan Sirobux pilihan utama bagi komunitas Roblox Indonesia.
          </p>

          {/* LIKE ARTICLE */}
          <div className="flex items-center gap-3 mt-12">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
                liked
                  ? "bg-yellow-100 border-yellow-300 text-yellow-700"
                  : "bg-white border-slate-200 text-slate-600"
              }`}
            >
              ⭐
              <span>
                {liked ? "Kamu menyukai artikel ini" : "Sukai artikel ini"}
              </span>
            </button>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="space-y-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <h3 className="font-semibold mb-4">Rekomendasi</h3>
            <ul className="space-y-3 text-slate-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Cara Aman Top Up Robux
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Gamepass Roblox Terpopuler
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Tips Hemat Beli Robux
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6">
            <h3 className="font-semibold mb-3">
              Top Up Robux Sekarang
            </h3>
            <p className="text-sm text-blue-100 mb-4">
              Proses cepat, aman, dan terpercaya hanya di Sirobux.
            </p>
            <a
              href="/register"
              className="inline-block bg-white text-blue-700 px-4 py-2 rounded-lg font-medium"
            >
              Mulai Top Up
            </a>
          </div>
        </aside>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F172A] text-slate-300 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="font-semibold text-white mb-3">Sirobux</h4>
            <p className="text-sm">
              Platform top up Robux terpercaya untuk pemain Roblox Indonesia.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/register" className="hover:text-white">Top Up</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Legal</h4>
            <p className="text-sm">
              Sirobux tidak berafiliasi langsung dengan Roblox Corporation.
            </p>
          </div>
        </div>

        <div className="text-center text-sm text-slate-500 pb-6">
          © {new Date().getFullYear()} Sirobux. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
