const WA_NUMBER = '573013325096'; // ← cambia por tu número real

export default function WAButton() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      title="Escríbenos por WhatsApp"
      className="fixed z-40 flex items-center justify-center text-2xl text-white transition-colors bg-green-500 rounded-full shadow-xl wa-btn bottom-6 right-6 hover:bg-green-600 w-14 h-14 shadow-green-500/40"
    >
      💬
    </a>
  );
}
