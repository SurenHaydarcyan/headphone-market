import React, { useEffect, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { IoTrashBinOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { FaLock } from "react-icons/fa";
import {
  decrementCount,
  incrementCount,
  selectCart,
} from "@/store/slices/cartSlice/CartSlice";
import { deleteCartThunks } from "@/store/slices/cartSlice/getCartThunk";
import { useNavigate } from "react-router-dom";

import Modal from "@/components/Modal";

const CartPage = () => {
  const cartProduct = useSelector(selectCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loading, error, cart } = cartProduct;

  const totalPrice = cart.reduce((acc, item) => {
    const price = Number(item.basePrice || item.price || 0);
    const count = Number(item.count || 0);
    return acc + price * count;
  }, 0);

  async function deleteProduct(id) {
    await dispatch(deleteCartThunks(id));
  }

  useEffect(() => {
    if (cart.length <= 0) {
      setTimeout(() => {
        navigate("/market");
      }, 2000);
    }
  }, [cart.length, navigate]);

  if (loading === "pending") {
    return (
      <div className="bg-gray-200 min-h-screen flex items-center justify-center p-6">
        <p className="text-lg font-semibold text-gray-700 text-center max-w-xs">
          Загрузка корзины...
        </p>
      </div>
    );
  }

  if (loading === "rejected") {
    return (
      <div className="bg-gray-200 min-h-screen flex items-center justify-center p-6">
        <p className="text-lg font-semibold text-red-600 text-center max-w-xs">
          Ошибка загрузки корзины: {error}
        </p>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="bg-gray-200 min-h-screen flex items-center justify-center p-6">
        <p className="text-lg font-semibold text-gray-700 text-center max-w-xs">
          Ваша корзина пуста. Переадресация в магазин...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="md:w-3/5 flex flex-col gap-6">
          <h1 className="text-2xl font-bold">Моя корзина</h1>
          <div className="flex flex-col gap-6">
            {cart.map((el) => (
              <div
                key={el.id}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border border-gray-300 p-4 rounded bg-white"
              >
                <img
                  src={el.img}
                  alt={el.productName}
                  className="w-full sm:w-32 h-32 object-contain border border-gray-200"
                />
                <div className="flex flex-col justify-between flex-grow w-full">
                  <div>
                    <p className="uppercase font-bold text-base">
                      {el.productName}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {el.basePrice} $
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4 sm:mt-auto w-full max-md:justify-between ">
                    <div className="flex items-center border border-gray-300 rounded h-10">
                      <CiCircleMinus
                        onClick={() => dispatch(decrementCount(el.id))}
                        className="text-2xl cursor-pointer px-2 hover:text-gray-500 transition"
                      />
                      <p className="px-4">{el.count}</p>
                      <CiCirclePlus
                        onClick={() => dispatch(incrementCount(el.id))}
                        className="text-2xl cursor-pointer px-2 hover:text-gray-500 transition"
                      />
                    </div>
                    <p className="font-bold">{el.price.toFixed(2)} $</p>
                    <IoTrashBinOutline
                      onClick={() => deleteProduct(el.id)}
                      className="text-xl cursor-pointer hover:text-red-600 transition"
                      title="Удалить товар"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-2/5 bg-white rounded p-6 flex flex-col gap-6 shadow-md">
          <h2 className="text-2xl font-bold">Детали заказа</h2>
          <div className="border-t border-gray-300" />
          <div className="flex justify-between text-lg font-medium">
            <span>Сумма</span>
            <span>{totalPrice.toFixed(2)} $</span>
          </div>
          <p className="underline cursor-pointer text-sm text-gray-600 hover:text-gray-400">
            Примерная сумма доставки
          </p>
          <div className="border-t border-gray-300" />
          <div className="flex justify-between text-xl font-semibold">
            <span>Итого</span>
            <span>{totalPrice.toFixed(2)} $</span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-white py-3 rounded hover:bg-gray-700 transition"
          >
            Оформить заказ
          </button>
          <div className="flex items-center justify-center gap-2 text-gray-600 text-sm mt-4">
            <FaLock />
            <span>Безопасный заказ</span>
          </div>
        </div>
      </div>
      {isModalOpen && <Modal open={isModalOpen} setOpen={setIsModalOpen} />}
    </div>
  );
};

export default CartPage;
