import { useState } from 'react';
import { CartProvider } from '../context/CartContext';
import Navbar     from '../components/Navbar';
import Menu       from '../components/Menu';
import Footer     from '../components/Footer';
import WAButton   from '../components/WAButton';
import CartDrawer from '../components/CartDrawer';
import OrderModal from '../components/OrderModal';

export default function MenuPage() {
  const [showOrder, setShowOrder] = useState(false);

  return (
    <CartProvider>
      <Navbar />
      <div className="pt-20">
        <Menu />
      </div>
      <Footer />
      <WAButton />
      <CartDrawer onPedir={() => setShowOrder(true)} />
      {showOrder && <OrderModal onClose={() => setShowOrder(false)} />}
    </CartProvider>
  );
}
