import { useState, useEffect } from "react";

const posts = [
  {
    id: 1,
    title: "Panduan Desain UI/UX yang Efisien di Figma",
    image: "/dashboard/uiux.png",
    date: "Sel, 12 Nov 2023",
    author: "Author 1",
    views: 172,
  },
  {
    id: 2,
    title: "Tips Meningkatkan Produktivitas dalam Desain Web",
    image: "/dashboard/uiux.png",
    date: "Rab, 13 Nov 2023",
    author: "Author 2",
    views: 145,
  },
  {
    id: 3,
    title: "Tren Desain Mobile App Terbaru 2023",
    image: "/dashboard/uiux.png",
    date: "Kam, 14 Nov 2023",
    author: "Author 3",
    views: 198,
  },
];

export const Articles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-2 mt-6 p-6 w-full h-auto bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-semibold">Sekilas Ilmu</h2>
        <a href="#" className="text-blue-500">
          Lihat Semua
        </a>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {posts.map((post) => (
              <div key={post.id} className="w-full flex-shrink-0">
                <div className="shadow-md border-2 pb-5 mx-2">
                  <div className="mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-56 object-cover rounded-md"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-4 px-5">
                    <span className="bg-gray-200 px-3 py-1 rounded-full">
                      Terbaru
                    </span>
                    <p className="text-gray-500 text-xl">{post.date}</p>
                  </div>
                  <div className="min-h-36">
                    <h3 className="text-2xl font-semibold my-2 px-4">
                      {post.title}
                    </h3>
                  </div>
                  <div className="px-4 flex justify-between">
                    <div>
                      <p className="text-xl">{post.author}</p>
                      <p className="text-gray-500 text-lg">
                        {post.views} Views
                      </p>
                    </div>
                    <img src="/dashboard/save.png" alt="Save" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Indicators */}
      <div className="flex justify-center pb-4 pt-6 space-x-2">
        {posts.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-blue-500" : "w-2 bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};