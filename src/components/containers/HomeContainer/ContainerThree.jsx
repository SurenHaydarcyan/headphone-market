import icon1 from "../../../assets/ContainerHome3/icon1.png";
import icon2 from "../../../assets/ContainerHome3/icon2.png";
import icon3 from "../../../assets/ContainerHome3/icon3.png";
import icon4 from "../../../assets/ContainerHome3/icon4.png";
import icon5 from "../../../assets/ContainerHome3/icon5.png";
import icon6 from "../../../assets/ContainerHome3/icon6.png";

const ContainerThree = () => {
  return (
    <div className="p-10 md:p-20 bg-[url(https://static.wixstatic.com/media/68c56f_99a70d7cbfff426e86825a1eb7addd80~mv2.png)] bg-cover bg-center w-full">
      <div className="container mx-auto flex flex-col items-center justify-center gap-7">
        <h1 className="text-white w-full text-[70px] text-center max-md:text-[35px] font-bold">
          О НАШИХ НАУШНИКАХ
        </h1>

        <div className="w-full max-w-[600px] aspect-video rounded-xl shadow-xl overflow-hidden mx-auto">
          <iframe
            src="https://www.youtube.com/embed/0iXSUDM9Y9I?controls=0&rel=0&modestbranding=1"
            title="Sony WH-1000XM6 Headphones Review"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl">
          {[icon1, icon2, icon3, icon4, icon5, icon6].map((icon, i) => {
            const titles = [
              "Первоклассные материалы",
              "Мягкие подушки",
              "Съемный провод",
              "Жесткая конструкция",
              "Отличное качество звука",
              "Легко сложить",
            ];
            return (
              <div
                key={i}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-6 w-[30%] max-sm:w-full max-sm:text-[12px]"
              >
                <div className="flex justify-center w-[50px] sm:w-[50%]">
                  <img src={icon} alt={`icon${i + 1}`} className="max-w-full" />
                </div>
                <div className="flex flex-col text-white text-center sm:text-left justify-center">
                  <p className="font-semibold">{titles[i]}</p>
                  <span>Это текст. Кликните, чтобы отредактировать.</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContainerThree;
