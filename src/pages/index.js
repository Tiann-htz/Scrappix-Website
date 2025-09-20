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
      <section className="min-h-screen flex items-center justify-center pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div 
              data-animate 
              className={`transform transition-all duration-1000 ${
                isVisible[0] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-green-800 leading-tight mb-8">
                Turn Trash Into
                <span className="text-green-600 block">Treasure</span>
              </h1>
              <p className="text-xl text-green-700 mb-10 leading-relaxed max-w-lg">
                Scrappix helps Filipino households identify recyclable materials and transform them into useful products through AI-powered scanning and creative tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={handleDownload}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 sm:px-10 sm:py-5 rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Download Now
                </button>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 sm:px-10 sm:py-5 rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 shadow-lg">
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
                <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-12 shadow-2xl">
                  <Smartphone className="w-56 h-96 mx-auto text-white/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                      <Camera className="w-16 h-16 text-white mx-auto mb-6" />
                      <p className="text-white text-lg font-semibold">AI-Powered Recognition</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-full p-6 shadow-xl">
                  <Leaf className="w-10 h-10 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen flex items-center justify-center py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div 
            data-animate 
            className={`text-center mb-20 transform transition-all duration-1000 ${
              isVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Everything you need to start your sustainable journey and make a positive environmental impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                data-animate
                className={`group bg-green-50 hover:bg-green-100 rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 hover:shadow-xl ${
                  isVisible[index + 2] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-700 transition-colors shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-green-700 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="min-h-screen flex items-center justify-center py-32 bg-gradient-to-br from-green-100 to-emerald-100">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div 
            data-animate 
            className={`text-center mb-20 transform transition-all duration-1000 ${
              isVisible[7] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
              Make a Difference
            </h2>
            <p className="text-xl text-green-700 max-w-4xl mx-auto leading-relaxed">
              Join thousands of Filipinos creating positive environmental impact through sustainable practices and creative repurposing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {impacts.map((impact, index) => (
              <div
                key={index}
                data-animate
                className={`text-center transform transition-all duration-1000 ${
                  isVisible[index + 8] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <impact.icon className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  {impact.title}
                </h3>
                <p className="text-green-700 text-lg leading-relaxed">
                  {impact.description}
                </p>
              </div>
            ))}
          </div>

          <div 
            data-animate 
            className={`bg-white rounded-3xl p-12 shadow-xl transform transition-all duration-1000 ${
              isVisible[11] ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-800 mb-8">
                How You're Making a Difference
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-green-700 text-lg">Reducing household waste through creative repurposing</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-green-700 text-lg">Learning proper disposal methods for non-recyclable items</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-green-700 text-lg">Supporting circular economy by selling repurposed products</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 w-6 h-6 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-green-700 text-lg">Inspiring others to adopt sustainable practices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="min-h-screen flex items-center justify-center py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div 
            data-animate 
            className={`text-center mb-20 transform transition-all duration-1000 ${
              isVisible[12] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Get started with Scrappix in three simple steps and begin your sustainable journey today
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Scan Items",
                description: "Use your camera to scan household items and get instant AI-powered identification of recyclable materials"
              },
              {
                step: "02",
                title: "Follow Tutorials",
                description: "Access comprehensive step-by-step guides to transform your items into beautiful, useful products"
              },
              {
                step: "03",
                title: "Share & Sell",
                description: "Showcase your amazing creations in our marketplace and connect with interested buyers in your community"
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
                <div className="bg-green-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-6">
                  {step.title}
                </h3>
                <p className="text-green-700 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/Logo/ic_scrappix_circle.webp"
                  alt="Scrappix Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="text-2xl font-bold">Scrappix</span>
              </div>
              <p className="text-green-200 mb-6 text-lg leading-relaxed">
                AI-powered recycling and repurposing for sustainable Filipino households. Together, we're building a greener future.
              </p>
              <p className="text-green-300">
                Version 1.0
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Features</h4>
              <ul className="space-y-3 text-green-200">
                <li className="text-lg">AI Material Scanning</li>
                <li className="text-lg">Tutorial Library</li>
                <li className="text-lg">Community Marketplace</li>
                <li className="text-lg">Disposal Guidance</li>
                <li className="text-lg">Eco Community Chat</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Contact</h4>
              <p className="text-green-200 mb-4 text-lg">
                Email: scrappix01@gmail.com
              </p>
              <p className="text-green-300 leading-relaxed">
                We'd love to hear from you! Share your feedback, success stories, and suggestions for making Scrappix even better.
              </p>
            </div>
          </div>
          
          <div className="border-t border-green-700 mt-12 pt-8 text-center">
            <p className="text-green-300 text-lg">
              © 2025 Scrappix. Developed with passion for environmental conservation and sustainable technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}