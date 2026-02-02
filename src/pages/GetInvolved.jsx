const GetInvolved = () => {
  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Volunteer Application:', data);
    alert('Thank you for your interest! We will contact you soon.');
    e.target.reset();
  };

  return (
    <div className="bg-gray-50/80 backdrop-blur-sm min-h-screen">
      {/* Hero */}
      <div className="bg-blue-700/95 py-16 text-center text-white">
        <h1 className="text-4xl font-bold animate-fade-in-up">Get Involved</h1>
        <p className="mt-4 text-xl text-blue-100 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Join us in making a difference</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Donate Section */}
        <div className="bg-white/95 rounded-2xl shadow-xl overflow-hidden animate-fade-in-up">
          <div className="md:flex">
             <div className="md:w-1/2 bg-blue-600/95 p-8 md:p-12 text-white flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Donate Now</h2>
                <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                  Your contribution can change a life. Every donation helps us provide books, education, and support to children who need it most.
                </p>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                  <h3 className="font-semibold text-xl mb-4">Bank Details</h3>
                  <div className="space-y-2 font-mono text-sm">
                    <p>Bank Name: <span className="font-bold">State Bank of India</span></p>
                    <p>Account Name: <span className="font-bold">Andes Foundation</span></p>
                    <p>Account No.: <span className="font-bold">XXXX XXXX XXXX</span></p>
                    <p>IFSC Code: <span className="font-bold">SBIN000XXXX</span></p>
                    <p>Branch: <span className="font-bold">New Delhi</span></p>
                  </div>
                </div>
                <div className="mt-8">
                   <p className="text-sm text-blue-200 italic">
                     * All donations are eligible for tax exemption under section 80G.
                   </p>
                </div>
             </div>
             <div className="md:w-1/2 p-8 md:p-12 flex flex-col items-center justify-center bg-gray-50/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Scan to Pay</h3>
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                  {/* Placeholder QR Code */}
                   <img
                     src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=andesfoundation@upi&pn=Andes%20Foundation"
                     alt="UPI QR Code"
                     className="w-48 h-48"
                   />
                </div>
                <p className="mt-4 text-gray-600 text-center">
                  Use any UPI app to donate
                </p>
             </div>
          </div>
        </div>

        {/* Volunteer Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
           <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Become a Volunteer</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Join our team of dedicated volunteers. Whether you can teach, organize events, or help with awareness drives, your time and skills can make a huge impact.
              </p>
              <img
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Volunteers working together"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
           </div>

           <div className="bg-white/95 p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Registration</h3>
              <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="name" id="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" name="phone" id="phone" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
                  </div>
                </div>

                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills / How can you help?</label>
                  <textarea name="skills" id="skills" rows="4" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"></textarea>
                </div>

                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                  Submit Application
                </button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
