import { useCart } from '../context/CartContext';

export default function ProductCard({ item, onOpen }) {
  const { add, update, items } = useCart();
  const inCart = items.find(i => i.id === item.id);

  return (
    <div
      onClick={() => onOpen(item)}
      className={`card-hover cursor-pointer rounded-2xl overflow-hidden bg-gradient-to-br ${item.color} border border-sand-300/40 shadow-md`}
    >
      {/* Emoji */}
      <div className="h-40 flex items-center justify-center bg-white/30 backdrop-blur-sm relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #b87333 1px, transparent 0)', backgroundSize: '16px 16px' }}
        />
        <span className="text-6xl relative z-10">{item.emoji}</span>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-display font-bold text-espresso-900 text-lg mb-1 leading-tight">
          {item.nombre}
        </h3>
        <p className="font-body text-espresso-800/70 text-sm mb-3 leading-relaxed line-clamp-2">
          {item.descripcion}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-caramel-600 text-xl">
            ${item.precio.toLocaleString()}
          </span>

          {inCart ? (
            <div className="flex items-center gap-1" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => update(item.id, inCart.cantidad - 1)}
                className="w-7 h-7 rounded-full bg-espresso-900/15 text-espresso-900 font-bold flex items-center justify-center hover:bg-espresso-900/25 transition-colors"
              >−</button>
              <span className="font-body font-bold text-espresso-900 w-5 text-center text-sm">{inCart.cantidad}</span>
              <button
                onClick={() => update(item.id, inCart.cantidad + 1)}
                className="w-7 h-7 rounded-full bg-espresso-900 text-cream-50 font-bold flex items-center justify-center hover:bg-caramel-500 transition-colors"
              >+</button>
            </div>
          ) : (
            <button
              onClick={e => { e.stopPropagation(); add(item); }}
              className="bg-espresso-900 hover:bg-caramel-500 text-cream-50 text-xs font-body font-semibold px-3 py-1.5 rounded-full transition-colors duration-200"
            >
              + Agregar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
