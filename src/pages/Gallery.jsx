import { useState } from 'react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('images');

  const images = [
    { src: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Quiz Competition" },
    { src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Awareness Drive" },
    { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Community Event" },
    { src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Children's Day" },
    { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Outdoor Classes" },
    { src: "https://images.unsplash.com/photo-1529390003868-6c01d73923f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: "Team Meeting" },
  ];

  const videos = [
    { id: "y881t8ilMyc", title: "Free Education Program Highlights" },
    { id: "L_jWHffIx5E", title: "Beti Bachao Beti Padhao Quiz Program" },
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Gallery</h1>
          <p className="text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Glimpses of our journey and impact.</p>

          <div className="flex justify-center space-x-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={() => setActiveTab('images')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === 'images'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Photos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === 'videos'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Videos
            </button>
          </div>
        </div>

        {activeTab === 'images' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in-up">
            {images.map((img, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-xl shadow-md cursor-pointer">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
            {videos.map((video, index) => (
              <div key={index} className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-gray-900">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
