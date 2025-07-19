import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const achievements = [
    { 
      name: "Первая кровь", 
      description: "Уничтожь 10 врагов", 
      progress: 85, 
      unlocked: false,
      icon: "Target"
    },
    { 
      name: "Асс пилот", 
      description: "Пролети 1000 км без урона", 
      progress: 100, 
      unlocked: true,
      icon: "Award"
    },
    { 
      name: "Коллекционер", 
      description: "Собери все улучшения", 
      progress: 45, 
      unlocked: false,
      icon: "Package"
    },
    { 
      name: "Разрушитель", 
      description: "Уничтожь 5 боссов", 
      progress: 60, 
      unlocked: false,
      icon: "Skull"
    }
  ];

  const gameStats = [
    { label: "Уровень", value: "27", icon: "Star" },
    { label: "Очки опыта", value: "15,847", icon: "TrendingUp" },
    { label: "Убийств", value: "2,341", icon: "Zap" },
    { label: "Время игры", value: "47ч", icon: "Clock" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-space-dark via-space-deep to-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 bg-space-dark/80 backdrop-blur-md border-b border-space-blue/20">
        <div className="flex items-center space-x-2">
          <Icon name="Rocket" size={32} className="text-space-blue" />
          <h1 className="text-2xl font-bold orbitron text-space-blue">ORBITRON</h1>
        </div>
        <div className="hidden md:flex space-x-8 roboto">
          <a href="#" className="hover:text-space-blue transition-colors">Геймплей</a>
          <a href="#" className="hover:text-space-blue transition-colors">Скриншоты</a>
          <a href="#" className="hover:text-space-blue transition-colors">Скачать</a>
          <a href="#" className="hover:text-space-blue transition-colors">Новости</a>
          <a href="#" className="hover:text-space-blue transition-colors">Сообщество</a>
        </div>
        <Button className="bg-space-blue hover:bg-space-blue/80 text-black font-semibold">
          Играть сейчас
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/3ae2126a-1683-4762-9f81-8941a85c4bc6.jpg" 
            alt="Space Shooter Hero" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-space-dark via-transparent to-space-dark/50"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black orbitron mb-6 bg-gradient-to-r from-space-blue to-space-orange bg-clip-text text-transparent">
            ORBITRON
          </h1>
          <p className="text-xl md:text-2xl roboto mb-8 text-gray-300 max-w-2xl mx-auto">
            Эпический 2D космический шутер с бесконечными возможностями. 
            Исследуй галактику, сражайся с врагами и становись легендой космоса.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-space-blue hover:bg-space-blue/80 text-black font-bold text-lg px-8 py-4"
            >
              <Icon name="Download" className="mr-2" />
              Скачать игру
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-space-orange text-space-orange hover:bg-space-orange hover:text-black font-bold text-lg px-8 py-4"
            >
              <Icon name="Play" className="mr-2" />
              Смотреть трейлер
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 animate-pulse">
          <Icon name="Star" size={24} className="text-space-blue opacity-60" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-pulse" style={{animationDelay: '1s'}}>
          <Icon name="Sparkles" size={32} className="text-space-orange opacity-40" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 animate-pulse" style={{animationDelay: '2s'}}>
          <Icon name="Zap" size={20} className="text-space-blue opacity-50" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold orbitron text-center mb-12 text-space-blue">
            Твой прогресс
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {gameStats.map((stat, index) => (
              <Card key={index} className="bg-space-deep/50 border-space-blue/30 text-center">
                <CardContent className="pt-6">
                  <Icon name={stat.icon as any} size={32} className="text-space-blue mx-auto mb-2" />
                  <div className="text-3xl font-bold orbitron text-space-blue mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 roboto text-sm">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-6 bg-space-deep/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold orbitron mb-4 text-space-blue">
              Система достижений
            </h2>
            <p className="text-gray-400 roboto text-lg max-w-2xl mx-auto">
              Открывай новые достижения, получай награды и становись элитным пилотом галактики
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-space-deep/50 border-space-blue/30 hover:border-space-blue/60 transition-all hover:scale-105">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className={`p-2 rounded-lg ${achievement.unlocked ? 'bg-space-blue' : 'bg-gray-600'}`}>
                      <Icon 
                        name={achievement.icon as any} 
                        size={24} 
                        className={achievement.unlocked ? 'text-black' : 'text-gray-400'} 
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg orbitron text-space-blue">
                        {achievement.name}
                      </CardTitle>
                      <CardDescription className="roboto text-gray-400">
                        {achievement.description}
                      </CardDescription>
                    </div>
                  </div>
                  {achievement.unlocked && (
                    <Badge className="bg-space-orange text-black font-semibold">
                      Разблокировано
                    </Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm roboto">
                      <span className="text-gray-400">Прогресс</span>
                      <span className="text-space-blue font-semibold">{achievement.progress}%</span>
                    </div>
                    <Progress 
                      value={achievement.progress} 
                      className="h-2"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold orbitron text-center mb-12 text-space-blue">
            Скриншоты игры
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="aspect-video rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
              <img 
                src="/img/36f28947-bffb-459f-b875-c100ba02fb0d.jpg" 
                alt="Gameplay Screenshot 1" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer bg-gradient-to-br from-space-blue/20 to-space-orange/20 flex items-center justify-center">
              <div className="text-center">
                <Icon name="Camera" size={48} className="text-space-blue mx-auto mb-2" />
                <p className="text-gray-400 roboto">Больше скриншотов скоро</p>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer bg-gradient-to-br from-space-orange/20 to-space-blue/20 flex items-center justify-center">
              <div className="text-center">
                <Icon name="Play" size={48} className="text-space-orange mx-auto mb-2" />
                <p className="text-gray-400 roboto">Трейлер игры</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-space-dark border-t border-space-blue/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Rocket" size={24} className="text-space-blue" />
            <h3 className="text-xl font-bold orbitron text-space-blue">ORBITRON</h3>
          </div>
          <p className="text-gray-400 roboto mb-6">
            Присоединяйся к космической одиссее и стань легендой галактики
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="sm" className="border-space-blue text-space-blue hover:bg-space-blue hover:text-black">
              <Icon name="MessageSquare" className="mr-2" size={16} />
              Discord
            </Button>
            <Button variant="outline" size="sm" className="border-space-blue text-space-blue hover:bg-space-blue hover:text-black">
              <Icon name="Users" className="mr-2" size={16} />
              Сообщество
            </Button>
            <Button variant="outline" size="sm" className="border-space-blue text-space-blue hover:bg-space-blue hover:text-black">
              <Icon name="Bell" className="mr-2" size={16} />
              Новости
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}