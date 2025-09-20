import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Camera, 
  BookOpen, 
  ShoppingCart, 
  MessageCircle, 
  Recycle,
  Leaf,
  Users,
  Award,
  Download,
  ChevronDown,
  Check,
  Smartphone,
  Star
} from 'lucide-react';
import LearnMoreModal from '../components/LearnMoreModal';

export default function Home() {
  const [isVisible, setIsVisible] = useState({});
  const [showLearnMore, setShowLearnMore] = useState(false);

  const handleDownload = () => {
    const downloadUrl = 'https://drive.google.com/uc?export=download&id=15uhQtHCAaGSsxlL3M_zpU0L3ebTvAO45';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Scrappix.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const observers = {};
    const elements = document.querySelectorAll('[data-animate]');
    
    elements.forEach((el, index) => {
      observers[index] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [index]: true }));
          }
        },
        { threshold: 0.1 }
      );
      observers[index].observe(el);
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  const features = [
    {
      icon: Camera,
      title: "AI-Powered Scanning",
      description: "Instantly identify recyclable materials using advanced AI technology"
    },
    {
      icon: BookOpen,
      title: "Step-by-Step Tutorials",
      description: "Learn creative repurposing techniques with easy-to-follow guides"
    },
    {
      icon: ShoppingCart,
      title: "Built-in Marketplace",
      description: "Sell your repurposed creations and earn from sustainable practices"
    },
    {
      icon: MessageCircle,
      title: "Community Chat",
      description: "Connect with buyers and sellers in our eco-friendly community"
    },
    {
      icon: Recycle,
      title: "Disposal Guidance",
      description: "Get proper disposal methods for non-recyclable materials"
    }
  ];

  const impacts = [
    {
      icon: Leaf,
      title: "Reduce Waste",
      description: "Transform household items into useful products"
    },
    {
      icon: Users,
      title: "Build Community",
      description: "Connect with like-minded eco-conscious individuals"
    },
    {
      icon: Award,
      title: "Earn Income",
      description: "Generate revenue from your creative repurposing projects"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 w-full overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-green-100 z-50">
        <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Image
                src="/Logo/scrappix_logo.png"
                alt="Scrappix Logo"
                width={32}
                height={32}
                className="rounded-lg sm:w-10 sm:h-10"
              />
              <span className="text-lg sm:text-xl font-bold text-green-800">Scrappix</span>
            </div>
            <button 
              onClick={handleDownload}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 sm:px-6 text-sm sm:text-base rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Download App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 sm:pb-16 px-3 sm:px-4 w-full">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div 
              data-animate 
              className={`transform transition-all duration-1000 ${
                isVisible[0] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-green-800 leading-tight mb-4 sm:mb-6">
                Turn Trash Into
                <span className="text-green-600 block">Treasure</span>
              </h1>
              <p className="text-base sm:text-lg text-green-700 mb-6 sm:mb-8 leading-relaxed">
                Scrappix helps Filipino households identify recyclable materials and transform them into useful products through AI-powered scanning and creative tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={handleDownload}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                >
                  Download Now
                </button>
                <button 
                  onClick={() => setShowLearnMore(true)}
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div 
              data-animate 
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible[0] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <div className="relative max-w-sm mx-auto md:max-w-none">
                <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-6 sm:p-8 shadow-2xl">
                  <Smartphone className="w-32 h-48 sm:w-48 sm:h-80 mx-auto text-white/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center">
                      <Camera className="w-8 h-8 sm:w-12 sm:h-12 text-white mx-auto mb-2 sm:mb-4" />
                      <p className="text-white font-semibold text-sm sm:text-base">AI-Powered Recognition</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 sm:p-4 shadow-lg">
                  <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-white w-full">
        <div className="w-full max-w-6xl mx-auto px-3 sm:px-4">
          <div 
            data-animate 
            className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
              isVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-800 mb-4">
              Powerful Features
            </h2>
            <p className="text-base sm:text-lg text-green-700 max-w-2xl mx-auto px-4">
              Everything you need to start your sustainable journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-animate
                className={`group bg-green-50 hover:bg-green-100 rounded-2xl p-4 sm:p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-lg ${
                  isVisible[index + 2] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-green-600 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-green-700 transition-colors">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-green-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-green-100 to-emerald-100 w-full">
        <div className="w-full max-w-6xl mx-auto px-3 sm:px-4">
          <div 
            data-animate 
            className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
              isVisible[7] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-800 mb-4">
              Make a Difference
            </h2>
            <p className="text-base sm:text-lg text-green-700 max-w-3xl mx-auto px-4">
              Join thousands of Filipinos creating positive environmental impact through sustainable practices
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {impacts.map((impact, index) => (
              <div
                key={index}
                data-animate
                className={`text-center transform transition-all duration-1000 ${
                  isVisible[index + 8] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <impact.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-2">
                  {impact.title}
                </h3>
                <p className="text-sm sm:text-base text-green-700 px-2">
                  {impact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 bg-white w-full">
        <div className="w-full max-w-6xl mx-auto px-3 sm:px-4">
          <div 
            data-animate 
            className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${
              isVisible[12] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-800 mb-4">
              How It Works
            </h2>
            <p className="text-base sm:text-lg text-green-700">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Scan Items",
                description: "Use your camera to scan household items and get instant AI-powered identification"
              },
              {
                step: "02",
                title: "Follow Tutorials",
                description: "Access step-by-step guides to transform your items into useful products"
              },
              {
                step: "03",
                title: "Share & Sell",
                description: "Showcase your creations in our marketplace and connect with buyers"
              }
            ].map((step, index) => (
              <div
                key={index}
                data-animate
                className={`text-center transform transition-all duration-1000 px-2 ${
                  isVisible[index + 13] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-green-600 text-white text-lg sm:text-xl font-bold w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-green-700">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 sm:py-12 w-full">
        <div className="w-full max-w-6xl mx-auto px-3 sm:px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
                <Image
                  src="/Logo/scrappix_logo.png"
                  alt="Scrappix Logo"
                  width={28}
                  height={28}
                  className="rounded-lg sm:w-8 sm:h-8"
                />
                <span className="text-lg sm:text-xl font-bold">Scrappix</span>
              </div>
              <p className="text-green-200 mb-4 text-sm sm:text-base">
                AI-powered recycling and repurposing for sustainable Filipino households.
              </p>
              <p className="text-green-300 text-xs sm:text-sm">
                Version 1.0
              </p>
            </div>
            
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-4">Features</h4>
              <ul className="space-y-2 text-green-200 text-sm sm:text-base">
                <li>AI Material Scanning</li>
                <li>Tutorial Library</li>
                <li>Community Marketplace</li>
                <li>Disposal Guidance</li>
              </ul>
            </div>
            
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-base sm:text-lg font-bold mb-4">Contact</h4>
              <p className="text-green-200 mb-2 text-sm sm:text-base">
                Email: scrappix01@gmail.com
              </p>
              <p className="text-green-300 text-xs sm:text-sm">
                We'd love to hear from you! Share your feedback and success stories.
              </p>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-green-300 text-xs sm:text-sm px-4">
              © 2024 Scrappix. Developed with passion for environmental conservation.
            </p>
          </div>
        </div>
      </footer>

      {/* Learn More Modal */}
      <LearnMoreModal 
        isOpen={showLearnMore} 
        onClose={() => setShowLearnMore(false)} 
      />
    </div>
  );
}