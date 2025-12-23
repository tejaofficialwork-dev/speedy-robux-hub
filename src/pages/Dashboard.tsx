import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  User, Package, Clock, Settings, LogOut, 
  ChevronRight, Shield, CheckCircle2
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const orders = [
  {
    id: "ORD-001",
    package: "400 Robux",
    price: 65000,
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "ORD-002",
    package: "800 Robux",
    price: 125000,
    status: "processing",
    date: "2024-01-14",
  },
  {
    id: "ORD-003",
    package: "160 Robux",
    price: 28000,
    status: "completed",
    date: "2024-01-10",
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID").format(price);
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
          <CheckCircle2 className="w-3 h-3" />
          Selesai
        </span>
      );
    case "processing":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
          <Clock className="w-3 h-3" />
          Diproses
        </span>
      );
    default:
      return null;
  }
};

export default function Dashboard() {
  return (
    <Layout>
      <section className="py-12">
        <div className="container px-4 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="p-6 rounded-2xl glass sticky top-24">
                {/* Profile */}
                <div className="text-center pb-6 border-b border-border">
                  <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <User className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h2 className="text-lg font-semibold">User Demo</h2>
                  <p className="text-sm text-muted-foreground">demo@sirobux.com</p>
                </div>

                {/* Menu */}
                <nav className="pt-6 space-y-2">
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-medium">
                    <Package className="w-5 h-5" />
                    Riwayat Order
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted transition-colors">
                    <Settings className="w-5 h-5" />
                    Pengaturan
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-colors">
                    <LogOut className="w-5 h-5" />
                    Keluar
                  </button>
                </nav>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3 space-y-8"
            >
              {/* Stats */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-6 rounded-2xl glass">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                      <Package className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">3</div>
                      <div className="text-sm text-muted-foreground">Total Order</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl glass">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">2</div>
                      <div className="text-sm text-muted-foreground">Selesai</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl glass">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <Shield className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">1,360</div>
                      <div className="text-sm text-muted-foreground">Total Robux</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order History */}
              <div className="p-6 rounded-2xl glass">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Riwayat Order</h2>
                  <Link to="/top-up-robux">
                    <Button variant="default" size="sm">
                      Order Baru
                    </Button>
                  </Link>
                </div>

                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                          <Package className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-medium">{order.package}</div>
                          <div className="text-sm text-muted-foreground">
                            {order.id} • {new Date(order.date).toLocaleDateString("id-ID")}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">Rp {formatPrice(order.price)}</div>
                        <div className="mt-1">{getStatusBadge(order.status)}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {orders.length === 0 && (
                  <div className="text-center py-12">
                    <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Belum ada order</p>
                    <Link to="/top-up-robux" className="mt-4 inline-block">
                      <Button variant="default">
                        Mulai Order
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Support */}
              <div className="p-6 rounded-2xl glass">
                <h2 className="text-xl font-semibold mb-4">Butuh Bantuan?</h2>
                <p className="text-muted-foreground mb-6">
                  Tim customer service kami siap membantu kamu 24/7
                </p>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="accent">
                    Chat WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
