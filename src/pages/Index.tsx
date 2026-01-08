import { useState } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('lobby');
  const [balance, setBalance] = useState(10000);
  const [level, setLevel] = useState(12);
  const [exp, setExp] = useState(65);

  const slots = [
    { id: 1, name: 'Fire Dragon', img: '🐲', jackpot: 50000, hot: true },
    { id: 2, name: 'Golden Pharaoh', img: '👑', jackpot: 75000, hot: false },
    { id: 3, name: 'Lucky 777', img: '🎰', jackpot: 100000, hot: true },
    { id: 4, name: 'Wild West', img: '🤠', jackpot: 45000, hot: false },
    { id: 5, name: 'Ocean Treasure', img: '🌊', jackpot: 60000, hot: true },
    { id: 6, name: 'Space Fortune', img: '🚀', jackpot: 85000, hot: false },
  ];

  const tournaments = [
    { id: 1, name: 'Mega Tournament', prize: 500000, players: 234, ends: '2ч 15м' },
    { id: 2, name: 'Speed Race', prize: 250000, players: 156, ends: '45м' },
    { id: 3, name: 'Weekend Cup', prize: 750000, players: 489, ends: '1д 5ч' },
  ];

  const leaderboard = [
    { rank: 1, name: 'DragonSlayer', score: 125000, avatar: '🦸' },
    { rank: 2, name: 'LuckyKing', score: 98000, avatar: '👑' },
    { rank: 3, name: 'CasinoMaster', score: 87000, avatar: '🎩' },
    { rank: 4, name: 'BigWinner', score: 76000, avatar: '💎' },
    { rank: 5, name: 'SlotHero', score: 65000, avatar: '⭐' },
  ];

  const achievements = [
    { id: 1, name: 'Первая победа', desc: 'Выиграй первый раз', progress: 100, icon: '🏆' },
    { id: 2, name: 'Везунчик', desc: 'Выиграй 10 раз подряд', progress: 60, icon: '🍀' },
    { id: 3, name: 'Миллионер', desc: 'Накопи 1,000,000 монет', progress: 35, icon: '💰' },
    { id: 4, name: 'Турнирный боец', desc: 'Участвуй в 50 турнирах', progress: 80, icon: '⚔️' },
  ];

  const dailyBonuses = [
    { day: 1, reward: 100, claimed: true },
    { day: 2, reward: 200, claimed: true },
    { day: 3, reward: 500, claimed: true },
    { day: 4, reward: 1000, claimed: false },
    { day: 5, reward: 2000, claimed: false },
    { day: 6, reward: 5000, claimed: false },
    { day: 7, reward: 10000, claimed: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#221F26] to-[#1A1F2C]">
      <Header balance={balance} level={level} />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <MainContent
        activeSection={activeSection}
        balance={balance}
        level={level}
        exp={exp}
        slots={slots}
        tournaments={tournaments}
        leaderboard={leaderboard}
        achievements={achievements}
        dailyBonuses={dailyBonuses}
      />
      <Footer />
    </div>
  );
};

export default Index;
