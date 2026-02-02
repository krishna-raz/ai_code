const Founder = () => {
  return (
    <div className="bg-gray-50/80 backdrop-blur-sm min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 rounded-2xl shadow-xl overflow-hidden animate-fade-in-up">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-64 w-full object-cover md:h-full md:w-96"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Mr. Shiv Kumar"
              />
            </div>
            <div className="p-8 md:p-12">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-bold mb-2">Founder Profile</div>
              <h1 className="block mt-1 text-3xl leading-tight font-bold text-gray-900">Mr. Shiv Kumar</h1>
              <p className="mt-2 text-gray-500 font-medium">Founder – Andes Foundation</p>

              <div className="mt-6 text-gray-600 leading-relaxed italic border-l-4 border-blue-200 pl-4">
                <p className="mb-4">
                  "I believe that every child deserves a chance to learn and grow. Education is not just about literacy; it is about empowerment.
                  My journey with Andes Foundation started with a simple dream: to see every child in my community holding a book instead of a tool."
                </p>
                <p>
                  "We are committed to bridging the gap for those who have been left behind. With the support of our volunteers and donors,
                  we are building a foundation for a stronger, more educated India."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
