import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer({ onPedir }) {
  const { items, count, total, update } = useCart();
  const [open, setOpen] = useState(false);

  if (count === 0) return null;

  return (
    <>
      {/* Floating pill */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-espresso-900 text-cream-50 pl-4 pr-6 py-3 rounded-full shadow-2xl flex items-center gap-3 font-body font-semibold hover:bg-caramel-600 transition-colors"
      >
        <span className="bg-caramel-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
          {count}
        </span>
        <span>Ver pedido</span>
        <span className="font-display font-bold text-caramel-400">${total.toLocaleString()}</span>
      </button>

      {/* Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end">
          <div className="absolute inset-0 bg-espresso-900/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative w-full bg-cream-50 rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto shadow-2xl">

            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-2xl font-bold text-espresso-900">Tu pedido</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-espresso-800/50 hover:text-espresso-900 w-8 h-8 flex items-center justify-center text-lg transition-colors"
              >✕</button>
            </div>

            <div className="space-y-3 mb-5">
              {items.map(item => (
                <div key={item.id} className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-sm">
                  <span className="text-3xl">{item.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-semibold text-espresso-900 text-sm truncate">{item.nombre}</p>
                    <p className="font-body text-caramel-600 text-sm font-bold">
                      ${(item.precio * item.cantidad).toLocaleString()} COP
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => update(item.id, item.cantidad - 1)}
                      className="w-7 h-7 rounded-full bg-sand-300 text-espresso-900 font-bold flex items-center justify-center hover:bg-sand-400 transition-colors"
                    >−</button>
                    <span className="font-body font-bold text-espresso-900 w-5 text-center">{item.cantidad}</span>
                    <button
                      onClick={() => update(item.id, item.cantidad + 1)}
                      className="w-7 h-7 rounded-full bg-espresso-900 text-cream-50 font-bold flex items-center justify-center hover:bg-caramel-500 transition-colors"
                    >+</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between py-3 border-t border-sand-300 mb-5">
              <span className="font-body font-semibold text-espresso-900">Total</span>
              <span className="font-display font-bold text-caramel-600 text-2xl">${total.toLocaleString()} COP</span>
            </div>

            <button
              onClick={() => { setOpen(false); onPedir(); }}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-body font-bold py-4 rounded-2xl transition-colors text-base flex items-center justify-center gap-2"
            >
              <span>📱</span> Pedir por WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
}
