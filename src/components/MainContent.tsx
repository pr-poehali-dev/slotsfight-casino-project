import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface MainContentProps {
  activeSection: string;
  balance: number;
  level: number;
  exp: number;
  slots: Array<{ id: number; name: string; img: string; jackpot: number; hot: boolean }>;
  tournaments: Array<{ id: number; name: string; prize: number; players: number; ends: string }>;
  leaderboard: Array<{ rank: number; name: string; score: number; avatar: string }>;
  achievements: Array<{ id: number; name: string; desc: string; progress: number; icon: string }>;
  dailyBonuses: Array<{ day: number; reward: number; claimed: boolean }>;
}

const MainContent = ({
  activeSection,
  balance,
  level,
  exp,
  slots,
  tournaments,
  leaderboard,
  achievements,
  dailyBonuses,
}: MainContentProps) => {
  return (
    <main className="container mx-auto px-4 py-8">
      {activeSection === 'lobby' && (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-8 border border-primary/30 glow-gold">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold font-montserrat mb-2 text-glow-gold">
                  Добро пожаловать в SLOTSFIGHT!
                </h2>
                <p className="text-lg text-white/80">Испытай удачу в лучших слотах и выиграй джекпот!</p>
              </div>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg glow-red animate-pulse-glow">
                <Icon name="Play" size={24} />
                <span className="ml-2">Играть сейчас</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-primary/30 p-6 glow-gold">
              <div className="flex items-center gap-4">
                <div className="text-5xl">🎁</div>
                <div>
                  <h3 className="font-bold font-montserrat text-xl mb-1">Ежедневный бонус</h3>
                  <p className="text-sm text-white/60">Забери свою награду</p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-secondary/30 p-6 glow-purple">
              <div className="flex items-center gap-4">
                <div className="text-5xl">🏆</div>
                <div>
                  <h3 className="font-bold font-montserrat text-xl mb-1">Турниры</h3>
                  <p className="text-sm text-white/60">3 активных соревнования</p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-accent/30 p-6 glow-red">
              <div className="flex items-center gap-4">
                <div className="text-5xl">🔥</div>
                <div>
                  <h3 className="font-bold font-montserrat text-xl mb-1">Горячие слоты</h3>
                  <p className="text-sm text-white/60">Выплачивают прямо сейчас</p>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold font-montserrat mb-6 flex items-center gap-2">
              <Icon name="Flame" className="text-accent" />
              Популярные игры
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {slots.slice(0, 6).map((slot) => (
                <Card
                  key={slot.id}
                  className="bg-card border-white/10 overflow-hidden hover:scale-105 transition-transform cursor-pointer group relative"
                >
                  {slot.hot && (
                    <Badge className="absolute top-2 right-2 bg-accent text-white border-0 z-10 animate-pulse-glow">
                      HOT 🔥
                    </Badge>
                  )}
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform">
                    {slot.img}
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold font-montserrat mb-1">{slot.name}</h4>
                    <div className="flex items-center gap-1 text-primary text-sm font-semibold">
                      <Icon name="Trophy" size={14} />
                      {slot.jackpot.toLocaleString()}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'games' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold font-montserrat">Все игры</h2>
            <Tabs defaultValue="all" className="w-auto">
              <TabsList className="bg-card">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="hot">🔥 Горячие</TabsTrigger>
                <TabsTrigger value="new">✨ Новые</TabsTrigger>
                <TabsTrigger value="popular">⭐ Популярные</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {slots.map((slot) => (
              <Card
                key={slot.id}
                className="bg-card border-white/10 overflow-hidden hover:scale-105 transition-all cursor-pointer group relative hover:border-primary/50"
              >
                {slot.hot && (
                  <Badge className="absolute top-2 right-2 bg-accent text-white border-0 z-10 glow-red">
                    HOT 🔥
                  </Badge>
                )}
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform">
                  {slot.img}
                </div>
                <div className="p-4">
                  <h4 className="font-bold font-montserrat mb-2">{slot.name}</h4>
                  <div className="flex items-center gap-1 text-primary text-sm font-semibold mb-3">
                    <Icon name="Trophy" size={14} />
                    {slot.jackpot.toLocaleString()}
                  </div>
                  <Button className="w-full bg-gradient-gold text-[#1A1F2C] hover:opacity-90 border-0">
                    Играть
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'tournaments' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl p-6 border border-secondary/30 glow-purple">
            <h2 className="text-3xl font-bold font-montserrat mb-2">🏆 Турниры</h2>
            <p className="text-white/80">Соревнуйся с другими игроками и выигрывай крупные призы!</p>
          </div>

          <div className="grid gap-4">
            {tournaments.map((tournament) => (
              <Card key={tournament.id} className="bg-card border-secondary/30 p-6 hover:border-secondary transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="text-6xl">🏆</div>
                    <div>
                      <h3 className="text-2xl font-bold font-montserrat mb-2">{tournament.name}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-primary font-semibold">
                          <Icon name="Trophy" size={16} />
                          {tournament.prize.toLocaleString()} монет
                        </div>
                        <div className="flex items-center gap-1 text-white/60">
                          <Icon name="Users" size={16} />
                          {tournament.players} игроков
                        </div>
                        <div className="flex items-center gap-1 text-accent">
                          <Icon name="Clock" size={16} />
                          Осталось {tournament.ends}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 glow-purple">
                    Участвовать
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'leaderboard' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-6 border border-primary/30 glow-gold">
            <h2 className="text-3xl font-bold font-montserrat mb-2">👑 Рейтинг игроков</h2>
            <p className="text-white/80">Лучшие игроки этой недели</p>
          </div>

          <div className="grid gap-3">
            {leaderboard.map((player) => (
              <Card
                key={player.rank}
                className={`p-6 flex items-center justify-between transition-all hover:scale-[1.02] ${
                  player.rank === 1
                    ? 'bg-gradient-to-r from-primary/30 to-primary/10 border-primary glow-gold'
                    : player.rank === 2
                    ? 'bg-gradient-to-r from-white/10 to-white/5 border-white/30'
                    : player.rank === 3
                    ? 'bg-gradient-to-r from-amber-700/20 to-amber-700/10 border-amber-700/30'
                    : 'bg-card border-white/10'
                }`}
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`text-3xl font-bold font-montserrat w-12 h-12 rounded-full flex items-center justify-center ${
                      player.rank === 1
                        ? 'bg-primary text-[#1A1F2C]'
                        : player.rank === 2
                        ? 'bg-white/20'
                        : player.rank === 3
                        ? 'bg-amber-700/50'
                        : 'bg-white/10'
                    }`}
                  >
                    {player.rank}
                  </div>
                  <div className="text-5xl">{player.avatar}</div>
                  <div>
                    <h3 className="text-xl font-bold font-montserrat">{player.name}</h3>
                    <div className="flex items-center gap-1 text-primary font-semibold">
                      <Icon name="Coins" size={16} />
                      {player.score.toLocaleString()} очков
                    </div>
                  </div>
                </div>
                {player.rank <= 3 && <div className="text-4xl">{player.rank === 1 ? '🥇' : player.rank === 2 ? '🥈' : '🥉'}</div>}
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'profile' && (
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-card border-primary/30 p-6">
            <div className="flex items-center gap-6 mb-6">
              <div className="text-8xl">👤</div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold font-montserrat mb-1">Player_12345</h2>
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-gradient-purple border-0">Level {level}</Badge>
                  <Badge variant="outline">VIP Gold</Badge>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-white/60">Опыт до следующего уровня</span>
                    <span className="font-semibold">{exp}%</span>
                  </div>
                  <Progress value={exp} className="h-2" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-2xl mb-1">💰</div>
                <div className="text-2xl font-bold font-montserrat text-primary">{balance.toLocaleString()}</div>
                <div className="text-sm text-white/60">Баланс</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-2xl mb-1">🎰</div>
                <div className="text-2xl font-bold font-montserrat">1,234</div>
                <div className="text-sm text-white/60">Игр сыграно</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-2xl mb-1">🏆</div>
                <div className="text-2xl font-bold font-montserrat text-secondary">567</div>
                <div className="text-sm text-white/60">Побед</div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-2xl mb-1">⚔️</div>
                <div className="text-2xl font-bold font-montserrat text-accent">23</div>
                <div className="text-sm text-white/60">Турниров</div>
              </div>
            </div>
          </Card>

          <Card className="bg-card border-secondary/30 p-6">
            <h3 className="text-xl font-bold font-montserrat mb-4 flex items-center gap-2">
              <Icon name="Award" className="text-secondary" />
              Достижения
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="bg-black/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold font-montserrat">{achievement.name}</h4>
                      <p className="text-sm text-white/60">{achievement.desc}</p>
                    </div>
                    <div className="text-sm font-semibold">{achievement.progress}%</div>
                  </div>
                  <Progress value={achievement.progress} className="h-2" />
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-card border-primary/30 p-6 md:col-span-2">
            <h3 className="text-xl font-bold font-montserrat mb-4 flex items-center gap-2">
              <Icon name="Gift" className="text-primary" />
              Ежедневные бонусы
            </h3>
            <div className="grid grid-cols-7 gap-3">
              {dailyBonuses.map((bonus) => (
                <div
                  key={bonus.day}
                  className={`rounded-lg p-4 text-center transition-all ${
                    bonus.claimed
                      ? 'bg-black/30 opacity-50'
                      : bonus.day === 4
                      ? 'bg-gradient-gold border-2 border-primary glow-gold cursor-pointer hover:scale-105'
                      : 'bg-black/20 border border-white/10'
                  }`}
                >
                  <div className="text-3xl mb-2">🎁</div>
                  <div className="text-xs text-white/60 mb-1">День {bonus.day}</div>
                  <div className="font-bold text-sm">{bonus.reward}</div>
                  {bonus.claimed && <div className="text-xs text-green-500 mt-1">✓</div>}
                  {bonus.day === 4 && !bonus.claimed && (
                    <Button size="sm" className="w-full mt-2 bg-[#1A1F2C] hover:bg-[#1A1F2C]/80 text-primary">
                      Забрать
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {activeSection === 'friends' && (
        <div className="space-y-6">
          <Card className="bg-gradient-to-r from-secondary/20 to-primary/20 border-secondary/30 p-6">
            <h2 className="text-3xl font-bold font-montserrat mb-2">👥 Друзья</h2>
            <p className="text-white/80">Приглашай друзей и получай бонусы!</p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-primary/30 p-6">
              <h3 className="text-xl font-bold font-montserrat mb-4">Пригласить друга</h3>
              <div className="bg-black/30 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/60 mb-2">Твой реферальный код:</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 bg-black/50 px-4 py-2 rounded font-mono text-primary">SLOTS-12345</code>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-[#1A1F2C]">
                    <Icon name="Copy" size={16} />
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-gold rounded-lg p-4 text-[#1A1F2C]">
                <p className="font-bold mb-1">🎁 Бонус за друга</p>
                <p className="text-sm">Получи 5,000 монет за каждого приглашенного друга!</p>
              </div>
            </Card>

            <Card className="bg-card border-white/10 p-6">
              <h3 className="text-xl font-bold font-montserrat mb-4">Список друзей (12)</h3>
              <div className="space-y-3">
                {[
                  { name: 'DragonSlayer', online: true, level: 15 },
                  { name: 'LuckyKing', online: true, level: 18 },
                  { name: 'CasinoMaster', online: false, level: 12 },
                  { name: 'BigWinner', online: false, level: 20 },
                ].map((friend, i) => (
                  <div key={i} className="flex items-center justify-between bg-black/20 rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="text-3xl">👤</div>
                        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-card ${friend.online ? 'bg-green-500' : 'bg-gray-500'}`} />
                      </div>
                      <div>
                        <p className="font-semibold">{friend.name}</p>
                        <p className="text-xs text-white/60">Level {friend.level}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Icon name="MessageCircle" size={14} />
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      )}

      {activeSection === 'support' && (
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="bg-gradient-to-r from-accent/20 to-secondary/20 border-accent/30 p-6">
            <h2 className="text-3xl font-bold font-montserrat mb-2">💬 Поддержка</h2>
            <p className="text-white/80">Мы всегда готовы помочь! Свяжись с нами любым удобным способом.</p>
          </Card>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-card border-primary/30 p-6 text-center hover:border-primary transition-colors cursor-pointer">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="font-bold font-montserrat mb-2">Email</h3>
              <p className="text-sm text-white/60">support@slotsfight.com</p>
            </Card>

            <Card className="bg-card border-secondary/30 p-6 text-center hover:border-secondary transition-colors cursor-pointer">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="font-bold font-montserrat mb-2">Онлайн чат</h3>
              <p className="text-sm text-white/60">Ответим за 2 минуты</p>
            </Card>

            <Card className="bg-card border-accent/30 p-6 text-center hover:border-accent transition-colors cursor-pointer">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="font-bold font-montserrat mb-2">Telegram</h3>
              <p className="text-sm text-white/60">@slotsfight_support</p>
            </Card>
          </div>

          <Card className="bg-card border-white/10 p-6">
            <h3 className="text-xl font-bold font-montserrat mb-4">Часто задаваемые вопросы</h3>
            <div className="space-y-4">
              {[
                { q: 'Как пополнить баланс?', a: 'Нажмите на кнопку "Купить монеты" в шапке сайта и выберите удобный способ оплаты.' },
                { q: 'Как участвовать в турнирах?', a: 'Перейдите в раздел "Турниры" и нажмите кнопку "Участвовать" у интересующего турнира.' },
                { q: 'Как получить ежедневный бонус?', a: 'Заходите в игру каждый день и забирайте награду в разделе "Профиль".' },
                { q: 'Как пригласить друга?', a: 'В разделе "Друзья" скопируйте свой реферальный код и отправьте его другу.' },
              ].map((faq, i) => (
                <div key={i} className="bg-black/20 rounded-lg p-4">
                  <h4 className="font-bold mb-2">{faq.q}</h4>
                  <p className="text-sm text-white/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </main>
  );
};

export default MainContent;
