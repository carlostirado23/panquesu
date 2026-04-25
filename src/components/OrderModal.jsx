import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { WA_NUMBER } from '../config';

export default function OrderModal({ onClose }) {
  const { items, total, clear } = useCart();
  const [mesa, setMesa] = useState('');
  const [enviado, setEnviado] = useState(false);

  function buildMessage() {
    const lineas = items
      .map(i => `• ${i.cantidad}x ${i.nombre} — $${(i.precio * i.cantidad).toLocaleString()} COP`)
      .join('\n');
    return `🥐 *Pedido — Mesa ${mesa}*\n\n${lineas}\n\n*Total: $${total.toLocaleString()} COP*`;
  }

  function handleEnviar() {
    if (!mesa.trim()) return;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
    window.open(url, '_blank');
    setEnviado(true);
    clear();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-espresso-900/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 bg-cream-50 rounded-3xl shadow-2xl max-w-sm w-full p-6">

        {enviado ? (
          <div className="text-center py-4">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="font-display text-2xl font-bold text-espresso-900 mb-2">¡Pedido enviado!</h2>
            <p className="font-body text-espresso-800/70 text-sm mb-6 leading-relaxed">
              WhatsApp se abrió con tu pedido listo.<br />Solo toca <strong>Enviar</strong> en WhatsApp.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-espresso-900 text-cream-50 font-body font-semibold py-3 rounded-2xl hover:bg-espresso-800 transition-colors"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <h2 className="font-display text-2xl font-bold text-espresso-900 mb-1">¿Cuál es tu mesa?</h2>
            <p className="font-body text-espresso-800/60 text-sm mb-5">
              Ingresa el número para que sepamos dónde llevar tu pedido.
            </p>

            <input
              type="number"
              min="1"
              placeholder="Número de mesa"
              value={mesa}
              onChange={e => setMesa(e.target.value)}
              autoFocus
              className="w-full border-2 border-sand-300 focus:border-caramel-400 rounded-xl px-4 py-3 font-body text-espresso-900 text-xl text-center mb-4 outline-none transition-colors bg-white"
            />

            {/* Resumen */}
            <div className="bg-white rounded-2xl p-4 mb-4 space-y-1.5 max-h-44 overflow-y-auto">
              {items.map(i => (
                <div key={i.id} className="flex justify-between font-body text-sm">
                  <span className="text-espresso-800">{i.cantidad}x {i.nombre}</span>
                  <span className="text-caramel-600 font-semibold">${(i.precio * i.cantidad).toLocaleString()}</span>
                </div>
              ))}
              <div className="border-t border-sand-300 pt-2 mt-1 flex justify-between font-body font-bold text-espresso-900">
                <span>Total</span>
                <span className="text-caramel-600">${total.toLocaleString()} COP</span>
              </div>
            </div>

            <button
              onClick={handleEnviar}
              disabled={!mesa.trim()}
              className="w-full bg-green-500 hover:bg-green-600 disabled:bg-sand-300 disabled:cursor-not-allowed text-white font-body font-bold py-4 rounded-2xl transition-colors flex items-center justify-center gap-2"
            >
              <span>📱</span> Enviar pedido por WhatsApp
            </button>
            <button
              onClick={onClose}
              className="w-full mt-3 text-espresso-800/50 hover:text-espresso-900 font-body text-sm py-2 transition-colors"
            >
              Cancelar
            </button>
          </>
        )}
      </div>
    </div>
  );
}
