import { sedes } from '../data/menu';

const WA_NUMBER = "573013325096"; 

export default function Footer() {
  return (
    <footer id="contacto" className="pb-6 bg-espresso-900 text-cream-200 pt-14 grain">
      <div className="max-w-6xl px-5 mx-auto">
        <div className="grid gap-10 mb-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🥐</span>
              <span className="text-2xl font-bold font-display text-cream-50">Panquesú</span>
            </div>
            <p className="text-sm leading-relaxed font-body text-cream-200/60">
              La mejor panadería artesanal de Montería, Colombia. Horneado con amor desde el corazón costeño.
            </p>
            <div className="flex gap-3 mt-5">
              {['📘', '📸', '🎵'].map((ico, i) => (
                <button
                  key={i}
                  className="flex items-center justify-center text-sm transition-colors rounded-full w-9 h-9 bg-cream-50/10 hover:bg-caramel-500"
                >
                  {ico}
                </button>
              ))}
            </div>
          </div>

          {/* Sedes */}
          <div>
            <h3 className="mb-4 font-semibold tracking-wide font-body text-cream-50">Sedes</h3>
            <ul className="space-y-2">
              {sedes.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm font-body text-cream-200/60">
                  <span className="mt-0.5">{s.icono}</span>
                  <span>{s.direccion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-4 font-semibold tracking-wide font-body text-cream-50">Contacto</h3>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-4 py-3 transition-colors border bg-green-600/20 hover:bg-green-600/30 border-green-500/30 rounded-xl"
              >
                <span className="text-xl">📱</span>
                <div>
                  <p className="text-sm font-medium text-green-400 font-body">WhatsApp</p>
                  <p className="text-xs font-body text-cream-200/60">+57 300 000 0000</p>
                </div>
              </a>
              <div className="flex items-center gap-3 px-4 py-3 border bg-cream-50/5 border-cream-50/10 rounded-xl">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-sm font-medium font-body text-cream-100">Montería</p>
                  <p className="text-xs font-body text-cream-200/60">Córdoba, Colombia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 pt-6 border-t border-cream-50/10 sm:flex-row">
          <p className="text-xs font-body text-cream-200/40">
            © {new Date().getFullYear()} Panquesú · Todos los derechos reservados
          </p>
          <p className="text-xs font-body text-cream-200/40">
            Hecho por <a href="https://www.instagram.com/carlosmariotirado/" target="_blank" rel="noreferrer" className="underline text-cream-200/60 hover:text-cream-200">
              Carlos Tirado
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
