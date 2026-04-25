import { WA_NUMBER } from '../config';

export default function Modal({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-espresso-900/70 backdrop-blur-sm" />

      {/* Card */}
      <div
        className={`relative z-10 bg-gradient-to-br ${item.color} rounded-3xl shadow-2xl max-w-md w-full overflow-hidden modal-overlay`}
        onClick={e => e.stopPropagation()}
      >
        {/* Emoji hero */}
        <div className="h-52 flex items-center justify-center relative bg-white/30">
          <span className="text-8xl">{item.emoji}</span>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-4 right-4 bg-espresso-900/70 text-cream-50 w-8 h-8 rounded-full flex items-center justify-center text-sm hover:bg-espresso-900 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Details */}
        <div className="p-6">
          <h2 className="font-display font-bold text-espresso-900 text-3xl mb-2">{item.nombre}</h2>
          <p className="font-body text-espresso-800/80 mb-5 leading-relaxed">{item.descripcion}</p>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-body text-espresso-800/60 text-xs uppercase tracking-wider">Precio</p>
              <p className="font-display font-bold text-caramel-600 text-3xl">
                ${item.precio.toLocaleString()}
              </p>
              <p className="font-body text-espresso-800/50 text-xs">COP</p>
            </div>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=Hola! Quiero pedir un(a) ${item.nombre} 🥐`}
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-body font-semibold px-6 py-3 rounded-full transition-colors flex items-center gap-2 text-sm"
            >
              <span>📱</span> Pedir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
