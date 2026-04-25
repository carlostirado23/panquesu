const features = [
  ['🥐', 'Pan fresco cada mañana',    'Horneamos desde las 5am'],
  ['☕', 'Bebidas artesanales',        'Preparadas al momento'],
  ['🎂', 'Tortas personalizadas',     'Para ocasiones especiales'],
  ['💛', 'Sabor costeño',             'Tradición y modernidad'],
];

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-espresso-900 grain relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-caramel-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text */}
        <div>
          <p className="text-caramel-400 font-body font-medium tracking-[0.3em] text-xs uppercase mb-4">
            Nuestra historia
          </p>
          <h2 className="font-display text-5xl font-bold text-cream-50 mb-6 leading-tight">
            El sabor de <br />
            <span className="italic text-caramel-400">Montería</span>
          </h2>
          <p className="font-body text-cream-200/80 mb-4 leading-relaxed">
            Panquesú nació con la misión de llevar el pan artesanal más delicioso a cada barrio de Montería.
            Con ingredientes frescos y recetas que mezclan la tradición costeña con la innovación panadera,
            cada producto es una experiencia única.
          </p>
          <p className="font-body text-cream-200/80 leading-relaxed">
            Hoy contamos con 4 sedes atendiendo con la misma calidez y calidad que nos caracteriza desde el primer día.
          </p>

          {/* Mini stats */}
          <div className="mt-8 grid grid-cols-3 gap-6">
            {[['Artesanal', '100%'], ['Frescura', 'Diaria'], ['Amor', '∞']].map(([l, n]) => (
              <div key={l} className="border border-caramel-500/30 rounded-xl p-4 text-center">
                <div className="font-display text-2xl font-bold text-caramel-400">{n}</div>
                <div className="font-body text-cream-200/60 text-xs tracking-widest uppercase mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 gap-4">
          {features.map(([ico, title, desc]) => (
            <div
              key={title}
              className="bg-cream-50/5 border border-cream-50/10 rounded-2xl p-5 hover:bg-cream-50/10 transition-colors"
            >
              <span className="text-3xl block mb-3">{ico}</span>
              <h3 className="font-body font-semibold text-cream-100 text-sm mb-1">{title}</h3>
              <p className="font-body text-cream-200/60 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
