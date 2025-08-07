import React, { useEffect, useState, useRef } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ShoppingBasket } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { IoTrashBinOutline } from "react-icons/io5";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import {
  decrementCount,
  incrementCount,
  selectCart,
} from "@/store/slices/cartSlice/CartSlice";
import {
  deleteCartThunks,
  getCartThunk,
} from "@/store/slices/cartSlice/getCartThunk";
import Modal from "../Modal";

const CartSlide = () => {
  const carts = useSelector(selectCart);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const prevCartLength = useRef(0);
  const hasInitializedCartCheck = useRef(false);

  useEffect(() => {
    dispatch(getCartThunk()).then((res) => {
      const fetchedCart = res.payload;
      prevCartLength.current = fetchedCart?.length || 0;
      hasInitializedCartCheck.current = true;
    });
  }, []);

  useEffect(() => {
    if (!hasInitializedCartCheck.current) return;

    if (carts.cart.length > prevCartLength.current) {
      setOpen(true);
    }

    prevCartLength.current = carts.cart.length;
  }, [carts.cart]);

  const totalPrice = Array.isArray(carts?.cart)
    ? carts.cart.reduce((acc, item) => {
        const price = Number(item.basePrice || item.price || 0);
        const count = Number(item.count || 0);
        return acc + price * count;
      }, 0)
    : 0;

  const goCart = () => {
    navigate("/cart");
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="relative">
          <ShoppingBasket className="text-black w-10 h-8 hover:text-gray-400 duration-300" />
          {carts.cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {carts.cart.length}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent className="w-full z-[999] max-w-full sm:w-[500px] md:w-[700px] lg:w-[900px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-center text-black font-bold italic underline text-2xl">
            Ваша корзина
          </SheetTitle>
          <SheetClose className="text-black bg-black" />
        </SheetHeader>

        <div className="flex flex-col justify-between py-5 h-[85vh] mt-4">
          <div className="flex flex-col gap-4 overflow-y-auto max-h-[55vh] pr-2">
            {Array.isArray(carts.cart) && carts.cart.length > 0 ? (
              carts.cart.map((el, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border border-gray-300 rounded-xl p-4"
                >
                  <div className="w-[15%]">
                    <img
                      src={el.img}
                      alt={el.productName}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <div className="w-[50%] flex flex-col gap-2 text-black text-sm font-semibold uppercase">
                    <p>Name: {el.productName}</p>
                    <div className="w-[90px] h-[40px] flex justify-center items-center gap-2 border border-gray-300 rounded">
                      <CiCircleMinus
                        onClick={() => dispatch(decrementCount(el.id))}
                        className="text-xl cursor-pointer hover:text-gray-500 duration-300"
                      />
                      <p>{el.count}</p>
                      <CiCirclePlus
                        onClick={() => dispatch(incrementCount(el.id))}
                        className="text-xl cursor-pointer hover:text-gray-500 duration-300"
                      />
                    </div>
                  </div>

                  <div className="w-[20%] text-black text-sm font-semibold uppercase text-center">
                    <p>{el.price}$</p>
                  </div>

                  <div className="w-[10%] flex justify-center">
                    <IoTrashBinOutline
                      onClick={() => dispatch(deleteCartThunks(el.id))}
                      className="text-black cursor-pointer text-2xl hover:text-red-600 duration-300"
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 text-sm">Корзина пуста</p>
            )}
          </div>

          <div className="border-t border-gray-300 pt-4 flex flex-col gap-4">
            <div className="flex justify-between text-xl font-semibold px-2">
              <span>Сумма:</span>
              <span>{totalPrice}$</span>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full max-w-[300px] bg-black text-white py-2 rounded hover:bg-gray-400 transition"
              >
                Оформление заказа
              </button>
              <button
                onClick={goCart}
                className="w-full max-w-[300px] border border-gray-400 text-black py-2 rounded hover:bg-gray-400 hover:text-white transition"
              >
                Смотреть в корзину
              </button>
            </div>
          </div>
        </div>
        {isModalOpen && <Modal open={isModalOpen} setOpen={setIsModalOpen} />}
      </SheetContent>
    </Sheet>
  );
};

export default CartSlide;
