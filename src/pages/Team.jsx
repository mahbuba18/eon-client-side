import React from 'react';

const images = [
  { src: '/src/assets/team1.jpg', alt: 'Team Meeting' },
  { src: '/src/assets/team2.jpg', alt: 'Our Office' },
  { src: '/src/assets/team3.jpg', alt: 'Company Event' },
 
];

const Team = () => {
  return (
    <section id="gallery" className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-sky-500 mb-6">Our Company Gallery</h2>
        <p className="text-gray-600 mb-10">
          A glimpse into our workspace, team spirit, and creative environment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
