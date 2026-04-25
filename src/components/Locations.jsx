import { sedes } from '../data/menu';

export default function Locations() {
  return (
    <section id="sedes" className="py-20 bg-sand-300/20">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-caramel-500 font-body font-medium tracking-[0.3em] text-xs uppercase mb-3">
            Cerca de ti
          </p>
          <h2 className="font-display text-5xl font-bold text-espresso-900 mb-4">Nuestras Sedes</h2>
          <div className="w-16 h-1 bg-caramel-400 mx-auto rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sedes.map((sede, i) => (
            <div
              key={i}
              className="card-hover bg-white rounded-2xl p-6 border border-sand-300/50 shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-cream-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
                {sede.icono}
              </div>
              <h3 className="font-display font-bold text-espresso-900 text-lg mb-2">{sede.nombre}</h3>
              <p className="font-body text-espresso-800/70 text-sm mb-3 leading-relaxed">{sede.direccion}</p>
              <div className="bg-cream-100 rounded-xl px-3 py-2">
                <p className="font-body text-caramel-600 text-xs font-medium leading-relaxed">
                  🕐 {sede.horario}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
