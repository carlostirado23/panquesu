import { useState } from 'react';
import { menu } from '../data/menu';
import ProductCard from './ProductCard';
import Modal from './Modal';

export default function Menu() {
  const [activa, setActiva] = useState('Todos');
  const [modal, setModal]   = useState(null);

  const categorias = ['Todos', ...menu.map(c => c.categoria)];

  // Flatten items keeping the parent emoji
  const allItems = menu.flatMap(cat =>
    cat.items.map(item => ({ ...item, emoji: cat.emoji }))
  );

  const filtered =
    activa === 'Todos'
      ? allItems
      : menu
          .find(c => c.categoria === activa)
          ?.items.map(item => ({ ...item, emoji: menu.find(c => c.categoria === activa).emoji })) ?? [];

  return (
    <section id="menu" className="py-20 bg-cream-50">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-caramel-500 font-body font-medium tracking-[0.3em] text-xs uppercase mb-3">
            Lo mejor de la panadería
          </p>
          <h2 className="font-display text-5xl font-bold text-espresso-900 mb-4">Nuestro Menú</h2>
          <div className="w-16 h-1 bg-caramel-400 mx-auto rounded-full" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categorias.map(cat => {
            const catData = menu.find(c => c.categoria === cat);
            return (
              <button
                key={cat}
                onClick={() => setActiva(cat)}
                className={`tab-btn font-body font-medium px-5 py-2.5 rounded-full text-sm border
                  ${activa === cat
                    ? 'bg-espresso-900 text-cream-50 border-espresso-900 shadow-md shadow-espresso-900/20'
                    : 'bg-white text-espresso-800 border-sand-300 hover:border-caramel-400 hover:text-caramel-600'
                  }`}
              >
                {cat === 'Todos' ? '✨ Todos' : `${catData?.emoji} ${cat}`}
              </button>
            );
          })}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map(item => (
            <ProductCard key={item.id} item={item} onOpen={setModal} />
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal item={modal} onClose={() => setModal(null)} />
    </section>
  );
}
