"use client";

const clients = [
  { name: "DHS", src: "/assets/DHS.png" },
  { name: "Gnanasamrudhi", src: "/assets/gnanasamrudhi.png" },
  { name: "Plumeria", src: "/assets/Plumeria.png" },
  { name: "SriMatru", src: "/assets/SriMathru2.jpg" },
  { name: "RRPL", src: "/assets/clientlogo.png" },
];

const OurClients = () => {
  return (
    <div className="mt-16 md:mt-20">
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
