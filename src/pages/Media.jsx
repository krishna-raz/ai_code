const newsItems = [
  {
    id: 1,
    title: "Successful Completion of Beti Bachao Beti Padhao Awareness Drive",
    date: "March 15, 2024",
    summary: "Our volunteers successfully conducted an awareness drive in North Delhi, reaching over 500 families. The event highlighted the importance of girl child education and rights.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Annual Quiz Competition Winners Announced",
    date: "February 28, 2024",
    summary: "Students from 10 different schools participated in our annual science quiz. It was a day filled with learning and excitement. Congratulations to the winners!",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "New Batch of Free Education Center Starts",
    date: "January 10, 2024",
    summary: "We are excited to welcome 50 new students to our free education center in Delhi. Books and stationery were distributed to all the new joiners.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Media = () => {
  return (
    <div className="bg-gray-50/80 backdrop-blur-sm min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Media & News</h1>
          <p className="text-xl text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Latest updates from Andes Foundation
          </p>
        </div>

        <div className="grid gap-12 max-w-4xl mx-auto">
          {newsItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden md:flex hover:shadow-xl transition-shadow duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="md:w-1/3 overflow-hidden">
                <img
                  className="h-48 w-full object-cover md:h-full transform group-hover:scale-105 transition-transform duration-500"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">{item.date}</div>
                <h2 className="block mt-1 text-2xl leading-tight font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h2>
                <p className="mt-4 text-gray-600">
                  {item.summary}
                </p>
                <div className="mt-6">
                    <span className="text-blue-600 font-semibold hover:text-blue-800 transition-colors cursor-pointer">
                    Read more &rarr;
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
