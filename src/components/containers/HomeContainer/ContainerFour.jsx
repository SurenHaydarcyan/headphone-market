import img from "../../../assets/ContainerHome4/iconImg.png";

const ContainerFour = () => {
  return (
    <div className="w-full bg-gray-200">
      <div className="p-10 container gap-10 flex flex-col items-center justify-center">
        <h1 className="text-black text-[60px] md:text-[90px] text-center">СВЯЗЬ</h1>

        <div className="flex justify-center flex-col w-[150px] h-[5px] bg-black"></div>

        <form className="flex flex-wrap justify-center gap-5 items-center w-full">
          <div className="flex flex-col gap-3 w-full md:w-[45%] items-center">
            <input
              className="border w-full max-w-[400px] p-2 placeholder:text-black border-black duration-300 hover:border-gray-400"
              type="text"
              placeholder="Имя"
            />
            <input
              className="border w-full max-w-[400px] p-2 placeholder:text-black border-black duration-300 hover:border-gray-400"
              type="text"
              placeholder="Эл. почта"
            />
            <input
              className="border w-full max-w-[400px] p-2 placeholder:text-black border-black duration-300 hover:border-gray-400"
              type="text"
              placeholder="Телефон"
            />
          </div>

          <div className="flex flex-col gap-3 w-full md:w-[45%] items-center">
            <textarea
              className="border w-full max-w-[400px] p-2 resize-none min-h-[128px] placeholder:text-black border-black duration-300 hover:border-gray-400"
              placeholder="Добавьте сообщение..."
            ></textarea>
            <div className="w-full max-w-[400px] flex justify-end">
              <button className="text-white bg-black w-[100px] h-[40px] hover:bg-gray-400 duration-300">
                Оправить
              </button>
            </div>
          </div>
        </form>

        <div className="flex flex-col gap-6 items-center w-full">
          <div className="w-[45px] h-[45px]">
            <img src={img} alt="icon" />
          </div>

          <div className="w-[90%] md:w-[50%] text-center text-sm md:text-base">
            <p>Это заголовок. Кликните, чтобы отредактировать</p>
          </div>

          <div className="w-[90%] md:w-[50%] text-center text-sm md:text-base">
            <p>
              Это текст. Нажмите один раз и выберите «Редактировать текст» или
              просто кликните дважды, чтобы добавить свой текст и настроить
              шрифт. Расскажите посетителям сайта о себе.
            </p>
          </div>

          <div className="w-[90%] md:w-[50%] text-center text-sm md:text-base">
            <p>Телефон: +7 (495) 000-00-00 / Email: info@mysite.ru</p>
          </div>

          <div className="w-[90%] md:w-[50%] text-center">
            <a href="#" className="text-gray-500 hover:text-black">{'Узнать о нас больше >'}</a>
          </div>

          <button className="text-white bg-black w-[150px] h-[40px] hover:bg-gray-400 duration-300">
            {'В Магазин >'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerFour;
