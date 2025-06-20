import { useState, useEffect, useRef } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import img from "../../../assets/ContainerHome1/headphone7.avif";
import img2 from "../../../assets/ContainerHome1/headphone6.avif";
import img3 from "../../../assets/ContainerHome1/headphone5.avif";
import img4 from "../../../assets/ContainerHome1/headphone2.avif";

const slides = [
  {
    title: "Звук, который захватывает",
    text: "Отключитесь от мира с помощью передовой системы шумоподавления.",
    background: "bg-gradient-to-r from-stone-900 to-gray-900 text-white",
    image: img4,
  },
  {
    title: "Почувствуй каждый бит",
    text: "Насыщенные басы и кристально чистый звук с премиальными драйверами.",
    background: "bg-gradient-to-r from-slate-200 to-zinc-300 text-black",
    image: img3,
  },
  {
    title: "Дизайн, который говорит",
    text: "Современный. Лёгкий. Создан для движения и стиля.",
    background: "bg-gradient-to-r from-yellow-900 to-yellow-800 text-white",
    image: img2,
  },
  {
    title: "Свобода без проводов",
    text: "Bluetooth 5.3 — надёжная и стабильная связь без ограничений.",
    background: "bg-gradient-to-t from-red-900 to-red-600 text-white",
    image: img,
  },
];

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesCount = slides.length;
  const intervalRef = useRef(null);

  const changeSlide = (direction) => {
    if (direction === "up") {
      setActiveSlide((prev) => (prev + 1) % slidesCount);
    } else {
      setActiveSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
    }
  };

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slidesCount);
    }, 5000);
  };

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleArrowClick = (direction) => {
    changeSlide(direction);
    startAutoplay();
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-['Roboto']">
      <div
        className="h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${activeSlide * 100}vh)`,
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`w-full h-screen min-h-[100dvh] flex flex-col md:flex-row ${slide.background}`}
          >
            <div className="w-full md:w-[40%] flex items-center justify-center p-6 text-center md:text-left">
              <div className="transition-opacity duration-700 ease-in-out opacity-100">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl opacity-80 leading-relaxed">
                  {slide.text}
                </p>
              </div>
            </div>

            <div className="w-full md:w-[60%] h-[50vh] md:h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute z-10 flex items-end w-[40%] flex-col gap-3 top-1/2 transform -translate-y-1/2 max-md:right-[20px] max-md:w-full">
        <button
          onClick={() => handleArrowClick("down")}
          className="bg-white text-gray-700 hover:text-black p-3 rounded-full shadow"
        >
          <FaArrowUp />
        </button>
        <button
          onClick={() => handleArrowClick("up")}
          className="bg-white text-gray-700 hover:text-black p-3 rounded-full shadow"
        >
          <FaArrowDown />
        </button>
      </div>
    </div>
  );
}




