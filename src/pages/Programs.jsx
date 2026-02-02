const programs = [
  {
    title: "Free Education",
    description: "Providing quality education to underprivileged children who lack resources. We provide books, stationery, and tuition support to ensure every child gets a chance to learn.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Beti Bachao Beti Padhao",
    description: "A focused campaign to generate awareness and improve the efficiency of welfare services intended for girls in India. We advocate for equal educational opportunities for girls.",
    image: "https://images.unsplash.com/photo-1532330393533-443990a51d10?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Quiz Competition (Class 8–12)",
    description: "Organizing annual quiz competitions to encourage academic excellence and general knowledge among students. Winners are awarded medals and certificates.",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Social Awareness",
    description: "Educating the community about hygiene, health, environment, and social rights through workshops, rallies, and interactive sessions.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Programs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Our Programs</h1>
          <p className="text-xl text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Driving change through targeted initiatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="h-64 overflow-hidden relative group">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-blue-800 mb-3">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
