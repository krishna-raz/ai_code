import { Link } from 'react-router-dom';
import { Heart, Users, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-64px)] min-h-[600px] flex items-center justify-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Children studying outdoors"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Free Education for Every Child
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-gray-100">
            Empowering poor children through education & awareness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              <Heart className="mr-2 h-5 w-5" /> Donate
            </Link>
            <Link
              to="/get-involved"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-blue-900 bg-white hover:bg-gray-100 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              <Users className="mr-2 h-5 w-5" /> Volunteer
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white border-2 border-white hover:bg-white/20 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              <Mail className="mr-2 h-5 w-5" /> Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Empowering the Future</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            See how we are making a difference in the lives of children through education and awareness programs.
          </p>
           <div className="aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-gray-200 flex items-center justify-center relative group">
              {/* Placeholder for video */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 bg-gray-200/50">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 group-hover:scale-110 transition-transform cursor-pointer">
                    <span className="text-4xl ml-2 text-blue-600">▶</span>
                  </div>
                  <p className="font-medium">Video: Children studying, teacher explaining, quiz competition clips</p>
                  <p className="text-sm text-gray-500">(Loop 5-10 sec)</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
