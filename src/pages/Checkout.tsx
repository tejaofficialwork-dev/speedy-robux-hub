import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ShoppingCart, User, Mail, Phone, CreditCard, 
  ChevronRight, Shield, Clock, CheckCircle2, AlertCircle
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const robuxPackages = [
  { robux: 80, price: 15000 },
  { robux: 160, price: 28000 },
  { robux: 240, price: 42000 },
  { robux: 400, price: 65000 },
  { robux: 800, price: 125000 },
  { robux: 1700, price: 250000 },
  { robux: 2000, price: 290000 },
  { robux: 4500, price: 620000 },
  { robux: 10000, price: 1350000 },
];

const paymentMethods = [
  { id: "dana", name: "DANA", category: "E-Wallet" },
  { id: "ovo", name: "OVO", category: "E-Wallet" },
  { id: "gopay", name: "GoPay", category: "E-Wallet" },
  { id: "shopeepay", name: "ShopeePay", category: "E-Wallet" },
  { id: "qris", name: "QRIS", category: "QRIS" },
  { id: "bca", name: "Bank BCA", category: "Transfer Bank" },
  { id: "bri", name: "Bank BRI", category: "Transfer Bank" },
  { id: "mandiri", name: "Bank Mandiri", category: "Transfer Bank" },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID").format(price);
};

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const packageParam = searchParams.get("package");
  const { toast } = useToast();

  const [selectedPackage, setSelectedPackage] = useState<number>(
    packageParam ? parseInt(packageParam) : 400
  );
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const currentPackage = robuxPackages.find((pkg) => pkg.robux === selectedPackage);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      toast({
        title: "Username Required",
        description: "Please enter your Roblox username",
        variant: "destructive",
      });
      return;
    }

    if (!whatsapp.trim()) {
      toast({
        title: "WhatsApp Required",
        description: "Please enter your WhatsApp number",
        variant: "destructive",
      });
      return;
    }

    if (!paymentMethod) {
      toast({
        title: "Payment Method Required",
        description: "Please select a payment method",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast({
      title: "Order Submitted!",
      description: "We will contact you via WhatsApp with payment instructions.",
    });
    
    setIsProcessing(false);
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="container px-4 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/top-up-robux" className="hover:text-primary transition-colors">Top Up Robux</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Checkout</span>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h1 className="text-3xl font-bold mb-2">Checkout</h1>
                <p className="text-muted-foreground">
                  Complete your order details below
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Package Selection */}
                <div className="p-6 rounded-2xl glass">
                  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-primary" />
                    Pilih Paket Robux
                  </h2>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                    {robuxPackages.map((pkg) => (
                      <button
                        key={pkg.robux}
                        type="button"
                        onClick={() => setSelectedPackage(pkg.robux)}
                        className={`p-3 rounded-xl text-center transition-all duration-300 ${
                          selectedPackage === pkg.robux
                            ? "gradient-primary text-primary-foreground shadow-glow"
                            : "bg-muted hover:bg-muted/80"
                        }`}
                      >
                        <div className="text-lg font-bold">{formatPrice(pkg.robux)}</div>
                        <div className="text-xs opacity-80">Robux</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* User Details */}
                <div className="p-6 rounded-2xl glass">
                  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Informasi Akun
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="username">Username Roblox *</Label>
                      <Input
                        id="username"
                        type="text"
                        placeholder="Masukkan username Roblox kamu"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-2 h-12 bg-muted border-border"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Pastikan username sudah benar, Robux akan dikirim ke akun ini
                      </p>
                    </div>
                    <div>
                      <Label htmlFor="email">Email (Opsional)</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-2 h-12 bg-muted border-border"
                      />
                    </div>
                    <div>
                      <Label htmlFor="whatsapp">Nomor WhatsApp *</Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        placeholder="08xxxxxxxxxx"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        className="mt-2 h-12 bg-muted border-border"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Kami akan menghubungi kamu via WhatsApp untuk konfirmasi
                      </p>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="p-6 rounded-2xl glass">
                  <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    Metode Pembayaran
                  </h2>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {paymentMethods.map((method) => (
                        <label
                          key={method.id}
                          className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                            paymentMethod === method.id
                              ? "bg-primary/10 border border-primary"
                              : "bg-muted hover:bg-muted/80 border border-transparent"
                          }`}
                        >
                          <RadioGroupItem value={method.id} id={method.id} />
                          <div>
                            <div className="font-medium">{method.name}</div>
                            <div className="text-xs text-muted-foreground">{method.category}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="accent"
                  size="xl"
                  className="w-full"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      Memproses...
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Bayar Sekarang - Rp {formatPrice(currentPackage?.price || 0)}
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-6">
                <div className="p-6 rounded-2xl glass">
                  <h2 className="text-lg font-semibold mb-4">Ringkasan Order</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Paket</span>
                      <span className="font-semibold">{formatPrice(selectedPackage)} Robux</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">Rp {formatPrice(currentPackage?.price || 0)}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground">Biaya Admin</span>
                      <span className="font-semibold text-accent">GRATIS</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-2xl font-bold text-gradient">
                        Rp {formatPrice(currentPackage?.price || 0)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="p-6 rounded-2xl glass space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">100% Aman</div>
                      <div className="text-xs text-muted-foreground">
                        Transaksi dijamin aman dan terpercaya
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">Proses Kilat</div>
                      <div className="text-xs text-muted-foreground">
                        Robux masuk dalam 5-30 menit
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">Garansi Refund</div>
                      <div className="text-xs text-muted-foreground">
                        Uang kembali jika gagal dalam 24 jam
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notice */}
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      Setelah pembayaran, kami akan menghubungi kamu via WhatsApp 
                      untuk konfirmasi dan pengiriman Robux.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
