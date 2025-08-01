import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../store/slices/productsSlice/productsSlice";
import { useEffect, useState } from "react";
import { getProductThunk } from "../store/slices/productsSlice/getProductThunk";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const Market = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(selectProducts);

  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    dispatch(getProductThunk());

    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 1;
      setProgress(progressValue);
      if (progressValue >= 100) {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  const goProductPage = (id) => {
    navigate(`/product/${id}`);
  };

  if (error) {
    return (
      <div>
        <h1>Error: {error}</h1>
      </div>
    );
  }

  const isReady = loading === "fulfilled" && progress === 100;

  return (
    <div className="flex bg-gray-200 w-full flex-col justify-center items-center min-h-screen">
      <div className="flex container flex-col items-center justify-center px-4 sm:px-0 mt-10">
        <h1 className="text-black w-full sm:w-[70%] md:w-[40%] text-center text-[40px] sm:text-[50px] md:text-[70px] uppercase">
          Наши наушники
        </h1>
        <div className="w-[100px] sm:w-[150px] h-[4px] sm:h-[5px] bg-black mt-2"></div>
      </div>

      <div className="w-full p-4 sm:p-10 flex flex-wrap justify-center gap-4 sm:gap-6">
        {isReady ? (
          data?.map((el) => (
            <div
              onClick={() => goProductPage(el.id)}
              key={el.id}
              className="relative group w-full max-w-[220px] sm:max-w-[180px] md:max-w-[220px] overflow-hidden shadow-md rounded-lg cursor-pointer bg-white"
            >
              <div className="relative w-full">
                <img
                  src={el.img}
                  alt={el.productName}
                  className="w-full h-auto max-h-[220px] object-contain transition-transform duration-300 group-hover:scale-110"
                />

                <div className="absolute inset-0 top-50 bg-white bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <span className="text-black text-[14px] sm:text-[15px]">
                    Быстрый просмотр
                  </span>
                </div>
              </div>

              <div className="p-3 sm:p-4 text-center">
                <p className="uppercase font-bold text-gray-800 text-sm sm:text-base">
                  {el.productName}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">{el.price} ₽</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center w-full mt-20">
            <h1 className="text-lg mb-4 text-gray-700">Загрузка товаров...</h1>
            <Progress value={progress} className="w-[60%]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Market;
