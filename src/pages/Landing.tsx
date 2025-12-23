import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-[#0B0F1A] text-white min-h-screen">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Top Up Robux Termurah & Terpercaya
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Proses cepat • Aman • 100% Legal • Support 24/7
        </p>

        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition"
        >
          Top Up Sekarang
        </Link>
      </section>

      {/* TRUST */}
      <section className="bg-[#12172A] py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 text-center">
          <div>
            <h3 className="text-xl font-semibold">🔒 Aman</h3>
            <p className="text-gray-400 mt-2">
              Tanpa login Roblox
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">⚡ Cepat</h3>
            <p className="text-gray-400 mt-2">
              Robux masuk hitungan menit
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">💎 Termurah</h3>
            <p className="text-gray-400 mt-2">
              Harga terbaik se-Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* CARA TOP UP */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Cara Top Up Robux
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-[#12172A] p-6 rounded-xl">
            <h4 className="font-semibold text-lg">1️⃣ Pilih Nominal</h4>
            <p className="text-gray-400 mt-2">
              Tentukan jumlah Robux
            </p>
          </div>

          <div className="bg-[#12172A] p-6 rounded-xl">
            <h4 className="font-semibold text-lg">2️⃣ Masukkan Username</h4>
            <p className="text-gray-400 mt-2">
              Tanpa login akun Roblox
            </p>
          </div>

          <div className="bg-[#12172A] p-6 rounded-xl">
            <h4 className="font-semibold text-lg">3️⃣ Robux Masuk</h4>
            <p className="text-gray-400 mt-2">
              Proses otomatis & cepat
            </p>
          </div>
        </div>
      </section>

      {/* CTA AKHIR */}
      <section className="bg-blue-600 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Siap Top Up Robux Sekarang?
        </h2>
        <Link
          to="/"
          className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold"
        >
          Mulai Top Up
        </Link>
      </section>

    </div>
  );
}
