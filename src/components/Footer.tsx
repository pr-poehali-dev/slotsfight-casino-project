const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-md mt-20 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="text-4xl">🎰</div>
          <h3 className="text-2xl font-bold font-montserrat bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
            SLOTSFIGHT
          </h3>
        </div>
        <p className="text-white/60 text-sm mb-4">Лучшее социальное казино для настоящих ценителей азарта</p>
        <div className="flex items-center justify-center gap-6 text-sm text-white/40">
          <a href="#" className="hover:text-white transition-colors">Правила</a>
          <a href="#" className="hover:text-white transition-colors">Конфиденциальность</a>
          <a href="#" className="hover:text-white transition-colors">Условия</a>
          <a href="#" className="hover:text-white transition-colors">Контакты</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
