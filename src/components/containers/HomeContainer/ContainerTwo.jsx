import { useEffect, useState } from "react";
import img from "../../../assets/ContainerHome2/containerTwoImg.jpg";
import img2 from "../../../assets/ContainerHome2/containerTwoImg2.jpg";
import img3 from "../../../assets/ContainerHome2/containerTwoImg3.jpg";
import { useNavigate } from "react-router-dom";

const ContainerTwo = () => {
  const productSlides = [
    { id: 1, src: img },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
  ];

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImgIndex((prevIndex) => (prevIndex + 1) % productSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [productSlides.length]);

  const handleNavigate = () => {
    const currentProductId = productSlides[activeImgIndex].id;
    navigate(`/product/${currentProductId}`);
  };

  return (
    <div className="w-full bg-white">
      <div className="container p-10 flex justify-center items-center gap-10 flex-col-reverse md:flex-row">
        
        {/* Text Section */}
        <div className="flex flex-col items-center text-center gap-6 w-full md:w-1/2 text-[18px] md:text-[20px]">
          <h1 className="font-semibold">Это заголовок. Кликните, чтобы отредактировать</h1>
          <p className="max-w-[90%] text-gray-700">
            Это текст. Нажмите один раз и выберите «Редактировать текст» или
            просто кликните дважды, чтобы добавить свой текст и настроить шрифт.
            Вы можете переместить его в любое место на странице. Расскажите
            посетителям сайта о себе.
          </p>
          <button
            onClick={handleNavigate}
            className="text-sm bg-black text-white px-6 py-2 rounded hover:bg-gray-400 duration-300"
          >
            В МАГАЗИНЕ &gt;
          </button>
        </div>

        {/* Image Slider */}
        <div className="w-full md:w-[40%] h-[300px] md:h-[500px] relative overflow-hidden">
          {productSlides.map((slide, idx) => (
            <img
              key={slide.id}
              src={slide.src}
              alt={`Slide ${idx + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ${
                idx === activeImgIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContainerTwo;
