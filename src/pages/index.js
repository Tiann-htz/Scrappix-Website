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

export default function Home() {
  const [isVisible, setIsVisible] = useState({});

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-green-100 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/Logo/scrappix_logo.png"
                alt="Scrappix Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-green-800">Scrappix</span>
            </div>
            <button 
              onClick={handleDownload}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Download App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              data-animate 
              className={`transform transition-all duration-1000 ${
                isVisible[0] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-green-800 leading-tight mb-6">
                Turn Trash Into
                <span className="text-green-600 block">Treasure</span>
              </h1>
              <p className="text-lg text-green-700 mb-8 leading-relaxed">
                Scrappix helps Filipino households identify recyclable materials and transform them into useful products through AI-powered scanning and creative tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleDownload}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Download Now
                </button>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
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
              <div className="relative">
                <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-8 shadow-2xl">
                  <Smartphone className="w-48 h-80 mx-auto text-white/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                      <Camera className="w-12 h-12 text-white mx-auto mb-4" />
                      <p className="text-white font-semibold">AI-Powered Recognition</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div 
            data-animate 
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-green-800 mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-green-700 max-w-2xl mx-auto">
              Everything you need to start your sustainable journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-animate
                className={`group bg-green-50 hover:bg-green-100 rounded-2xl p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-lg ${
                  isVisible[index + 2] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-green-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 bg-gradient-to-br from-green-100 to-emerald-100">
        <div className="max-w-6xl mx-auto px-4">
          <div 
            data-animate 
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible[7] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-green-800 mb-4">
              Make a Difference
            </h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              Join thousands of Filipinos creating positive environmental impact through sustainable practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {impacts.map((impact, index) => (
              <div
                key={index}
                data-animate
                className={`text-center transform transition-all duration-1000 ${
                  isVisible[index + 8] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <impact.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  {impact.title}
                </h3>
                <p className="text-green-700">
                  {impact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div 
            data-animate 
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible[12] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-green-800 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-green-700">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                className={`text-center transform transition-all duration-1000 ${
                  isVisible[index + 13] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-green-600 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-green-700">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/Logo/scrappix_logo.png"
                  alt="Scrappix Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold">Scrappix</span>
              </div>
              <p className="text-green-200 mb-4">
                AI-powered recycling and repurposing for sustainable Filipino households.
              </p>
              <p className="text-green-300 text-sm">
                Version 1.0
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Features</h4>
              <ul className="space-y-2 text-green-200">
                <li>AI Material Scanning</li>
                <li>Tutorial Library</li>
                <li>Community Marketplace</li>
                <li>Disposal Guidance</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <p className="text-green-200 mb-2">
                Email: scrappix01@gmail.com
              </p>
              <p className="text-green-300 text-sm">
                We'd love to hear from you! Share your feedback and success stories.
              </p>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-8 pt-8 text-center">
            <p className="text-green-300">
              © 2024 Scrappix. Developed with passion for environmental conservation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}