import { useEffect } from 'react';
import { Smartphone, TestTube, Users, Lightbulb, Recycle, Target } from 'lucide-react';

const LearnMoreModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const developmentHighlights = [
    {
      icon: TestTube,
      title: "Beta Testing Phase",
      description: "Currently conducting extensive testing with Filipino households to perfect our AI recognition system"
    },
    {
      icon: Users,
      title: "Community Feedback",
      description: "Actively gathering user insights to improve the app's functionality and user experience"
    },
    {
      icon: Lightbulb,
      title: "Feature Development",
      description: "Continuously adding new tutorials and enhancing our marketplace features based on user needs"
    },
    {
      icon: Recycle,
      title: "AI Training",
      description: "Training our AI with local Filipino materials and waste patterns for better accuracy"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center space-x-3 mb-2">
            <Smartphone className="w-8 h-8" />
            <h2 className="text-2xl sm:text-3xl font-bold">About Scrappix Development</h2>
          </div>
          <p className="text-green-100 text-sm sm:text-base">
            Building the future of sustainable waste management in the Philippines
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Current Status */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Target className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">Development Status</h3>
            </div>
            <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-500">
              <p className="text-gray-700 leading-relaxed">
                Scrappix is currently in active development and beta testing phase. We're working closely with Filipino communities to create an app that truly understands local recycling needs and waste patterns. Our team is dedicated to building a solution that makes sustainable living accessible and profitable for every Filipino household.
              </p>
            </div>
          </div>

          {/* Development Highlights */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">What We're Working On</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {developmentHighlights.map((highlight, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-600 rounded-lg p-2 flex-shrink-0">
                      <highlight.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{highlight.title}</h4>
                      <p className="text-sm text-gray-600">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testing Information */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Join Our Testing Community</h3>
            <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-500">
              <p className="text-gray-700 mb-3">
                We're looking for enthusiastic users to help us test Scrappix! Your feedback is invaluable in making this app better for everyone.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Test new AI recognition features</li>
                <li>• Try out tutorial content</li>
                <li>• Provide feedback on user experience</li>
                <li>• Help us improve marketplace functionality</li>
              </ul>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              We envision a Philippines where every household can easily transform waste into wealth. Through AI-powered technology and community collaboration, we're building a platform that makes recycling intuitive, educational, and economically beneficial. Our goal is to empower Filipino families to contribute to environmental sustainability while creating additional income streams.
            </p>
          </div>

          {/* Contact for Testing */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-green-800 mb-2">Get Involved</h3>
            <p className="text-green-700 text-sm mb-3">
              Interested in being part of our testing community or have suggestions for improvement?
            </p>
            <p className="text-green-800 font-semibold">
              📧 Contact us: scrappix01@gmail.com
            </p>
          </div>
        </div>

        {/* Footer Button */}
        <div className="p-6 pt-0">
          <button
            onClick={onClose}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors duration-200 transform hover:scale-[1.02]"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreModal;