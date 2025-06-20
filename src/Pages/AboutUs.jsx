import img from "../assets/ContainerHome4/iconImg.png";
import img2 from "../assets/ContainerAbout/icon1.png";
import img3 from "../assets/ContainerAbout/icon2.png";
const AboutUs = () => {
  return (
    <div className=" p-10 bg-gray-200">
      <div className=" flex container flex-col gap-8 w-full justify-center items-center ">
        <h1 className="text-[50px] max-md:text-[30px] text-center text-black w-[100%]">
          КТО МЫ ТАКИЕ
        </h1>
        <div className="flex justify-center flex-col after:block w-[150px] left-[-5%] bottom-[-1px] h-[5px] bg-black "></div>
        <div className="w-full max-md:flex max-md:flex-col max-md:gap-10  flex items-center gap-[20px] justify-center">
          <div className="w-[40%] text-[13px] text-center flex gap-[10px]  items-center flex-col justify-center max-md:w-full">
            <img
              className="size-[57px] flex items-center"
              src={img2}
              alt="img1"
            />
            <p>С чего все началось?</p>
            <p className="w-[80%]">
              Это текст. Нажмите один раз и выберите «Редактировать текст» или
              просто кликните дважды, чтобы добавить свой текст и настроить
              шрифт. Вы можете переместить его в любое место на странице.
              Расскажите посетителям сайта о себе.
            </p>
          </div>
          <div className="w-[40%] text-[13px] text-center gap-[10px] items-center flex flex-col justify-center max-md:w-full">
            <img
              className="size-[57px]  flex items-center"
              src={img}
              alt="img2"
            />
            <p>Почему нужно покупать у нас?</p>
            <p className="w-[80%]">
              Это текст. Нажмите один раз и выберите «Редактировать текст» или
              просто кликните дважды, чтобы добавить свой текст и настроить
              шрифт. Вы можете переместить его в любое место на странице.
              Расскажите посетителям сайта о себе.
            </p>
          </div>
        </div>
        <div className="flex gap-5 justify-center w-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center ">
          <div className="w-[20%] flex text-center gap-10 items-center flex-col justify-center max-md:w-full">
            <img className=" size-[47px] flex items-center" src={img3} />
            <p className="w-full max-md:text-[13px]">
              «Это отзыв. Кликните здесь, чтобы отредактировать и написать
              хороший отзыв о вашей компании и услугах».
            </p>
          </div>
          <div className="w-[20%] text-center gap-10 items-center flex flex-col justify-center max-md:w-full">
            <img className=" size-[47px]  flex items-center" src={img3} />
            <p className="w-full max-md:text-[13px]">
              «Это отзыв. Кликните здесь, чтобы отредактировать и написать
              хороший отзыв о вашей компании и услугах».
            </p>
          </div>
          <div className="w-[20%] gap-10 text-center  items-center flex flex-col justify-center max-md:w-full ">
            <img className=" size-[47px]  flex items-center" src={img3} />
            <p className="w-full max-md:text-[13px]">
              «Это отзыв. Кликните здесь, чтобы отредактировать и написать
              хороший отзыв о вашей компании и услугах».
            </p>
          </div>
        </div>
      <div className='w-full flex justify-center '>
        <button  className=' text-white bg-black w-[200px] h-[40px] hover:bg-gray-400 duration-300' >{'В Магазин >'}</button>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
