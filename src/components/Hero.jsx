import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-espresso-900 grain">

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-caramel-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-caramel-400/10 blur-3xl pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #d4923a 1px, transparent 0)', backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="fade-up text-caramel-400 font-body font-medium tracking-[0.3em] text-sm uppercase mb-4">
          Montería, Colombia · Desde el corazón
        </p>

        <h1 className="fade-up-2 font-display text-6xl md:text-8xl font-bold text-cream-50 leading-none mb-2">
          Bienvenidos a
        </h1>
        <h1 className="fade-up-2 font-display text-6xl md:text-8xl font-bold italic text-caramel-400 leading-none mb-6">
          Panquesú
        </h1>

        <p className="fade-up-3 font-body text-cream-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Horneado con amor en cada rincón de Montería. La tradición panadera costeña en su forma más deliciosa.
        </p>

        <div className="fade-up-4 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/menu"
            className="bg-caramel-500 hover:bg-caramel-400 text-white font-body font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-caramel-500/30 hover:-translate-y-0.5 text-sm tracking-wide uppercase"
          >
            Ver Menú 🥐
          </Link>
          <a
            href="#sedes"
            className="border border-cream-200/40 hover:border-caramel-400 text-cream-100 hover:text-caramel-400 font-body font-semibold px-8 py-4 rounded-full transition-all duration-200 text-sm tracking-wide uppercase"
          >
            Nuestras Sedes
          </a>
        </div>

        {/* Stats */}
        <div className="fade-up-4 mt-16 flex justify-center gap-10 text-cream-200">
          {[['4', 'Sedes'], ['15+', 'Productos'], ['100%', 'Artesanal']].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-display text-3xl font-bold text-caramel-400">{n}</div>
              <div className="font-body text-xs tracking-widest uppercase mt-1 opacity-70">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-200/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-caramel-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
