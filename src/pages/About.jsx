const About = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-blue-700 py-16 text-center text-white">
        <h1 className="text-4xl font-bold animate-fade-in-up">About Us</h1>
        <p className="mt-4 text-xl text-blue-100 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Building a brighter future through education</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section 1: Who We Are */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            The Andes Foundation is a registered NGO (Registration No.: DL/2021/0291837) dedicated to empowering underprivileged children in Delhi, India.
            We believe that education is the most powerful tool which you can use to change the world.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our primary mission is to provide free, quality education to children who cannot afford it, ensuring that financial constraints do not hinder a child's potential.
            Through our various awareness programs, we also strive to create a socially conscious community.
          </p>
        </div>

        {/* Section 2: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  Providing free education for underprivileged children.
                </li>
                 <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  Conducting awareness programs for social upliftment.
                </li>
                 <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  Empowering communities through knowledge and support.
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-600 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
               <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">•</span>
                  Every child should be educated and self-reliant.
                </li>
                 <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">•</span>
                  Equal opportunity for girls (Beti Bachao Beti Padhao).
                </li>
                 <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">•</span>
                  A society free from poverty and ignorance.
                </li>
              </ul>
            </div>
          </div>

          <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl group">
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              alt="Volunteers teaching children"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <p className="text-white text-lg font-medium">Volunteers and children working together for a better tomorrow.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
