"use client";

const clients = [
  { name: "DHS", src: "/assets/DHS.png" },
  { name: "Gnanasamrudhi", src: "/assets/gnanasamrudhi.png" },
  { name: "Plumeria", src: "/assets/Plumeria.png" },
  { name: "SriMatru", src: "/assets/SriMathru.jpg" },
  { name: "RRPL", src: "/assets/RRPL.jpg" },
];

const OurClients = () => {
  return (
    <div className="mt-16 md:mt-20">
      {/* <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8">
        Our Clients
      </h3> */}
      {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2ba7ff] via-[#ca45ff] to-[#fe881b]">
        Our Clients
      </h2> */}
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
        {clients.map((client, idx) => (
          <div
            key={idx}
            className="flex justify-center items-center p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={client.src}
              alt={client.name}
              className="h-12 sm:h-16 md:h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
