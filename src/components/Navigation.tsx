import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  return (
    <nav className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-[73px] z-40">
      <div className="container mx-auto px-4">
        <div className="flex gap-1">
          {[
            { id: 'lobby', label: 'Лобби', icon: 'Home' },
            { id: 'games', label: 'Игры', icon: 'Gamepad2' },
            { id: 'tournaments', label: 'Турниры', icon: 'Trophy' },
            { id: 'leaderboard', label: 'Рейтинг', icon: 'Crown' },
            { id: 'profile', label: 'Профиль', icon: 'User' },
            { id: 'friends', label: 'Друзья', icon: 'Users' },
            { id: 'support', label: 'Поддержка', icon: 'MessageCircle' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-6 py-4 font-medium transition-all duration-200 border-b-2 flex items-center gap-2 ${
                activeSection === item.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon name={item.icon as any} size={18} />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
