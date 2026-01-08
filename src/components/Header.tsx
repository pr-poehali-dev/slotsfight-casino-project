import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  balance: number;
  level: number;
}

const Header = ({ balance, level }: HeaderProps) => {
  return (
    <header className="border-b border-white/10 bg-black/30 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-4xl animate-spin-slow">🎰</div>
          <h1 className="text-3xl font-bold font-montserrat bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
            SLOTSFIGHT
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <Card className="bg-gradient-gold px-6 py-2 border-0 glow-gold">
            <div className="flex items-center gap-2">
              <Icon name="Coins" className="text-[#1A1F2C]" size={20} />
              <span className="font-bold text-[#1A1F2C] text-lg">{balance.toLocaleString()}</span>
            </div>
          </Card>
          
          <Card className="bg-gradient-purple px-4 py-2 border-0 glow-purple">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-white" size={18} />
              <span className="font-semibold text-white">LVL {level}</span>
            </div>
          </Card>

          <Button className="bg-accent hover:bg-accent/90 glow-red">
            <Icon name="Plus" size={18} />
            <span className="ml-1">Купить монеты</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
