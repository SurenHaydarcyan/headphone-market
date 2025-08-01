import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectProducts } from "../store/slices/productsSlice/productsSlice";
import { getProductThunk } from "../store/slices/productsSlice/getProductThunk";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { selectCart } from "@/store/slices/cartSlice/CartSlice";
import {
  postCartThunk,
  putCartThunk,
} from "@/store/slices/cartSlice/getCartThunk";
import { toast } from "react-toastify";

const ProductPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useSelector(selectProducts);
  const {
    cart: reduxCart,
    status: cartStatus,
    error: cartError,
  } = useSelector(selectCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [localCart, setLocalCart] = useState([]);

  const product = data.find((item) => item.id === id);

  useEffect(() => {
    if (!data.length) {
      dispatch(getProductThunk());
    }
  }, [dispatch, data.length]);

  useEffect(() => {
    if (reduxCart) {
      setLocalCart(reduxCart);
    }
  }, [reduxCart]);

  useEffect(() => {
    if (cartStatus === "rejected") {
      toast.error(cartError || "Ошибка при обновлении корзины");
    } else if (cartStatus === "fulfilled") {
      toast.success("Корзина успешно обновлена");
    }
  }, [cartStatus, cartError]);

  const nextOrPreview = (type) => {
    const currentId = parseInt(id, 10);
    const total = data.length;
    if (!total) return;
    let newId;
    if (type === "next") {
      newId = currentId === total ? 1 : currentId + 1;
    } else {
      newId = currentId === 1 ? total : currentId - 1;
    }
    navigate(`/product/${newId}`);
  };

  const addCart = async (product) => {
    const existing = localCart.find(
      (item) => parseInt(item.productId, 10) === parseInt(product.id, 10)
    );

    try {
      if (existing) {
        const updatedProduct = {
          ...existing,
          count: existing.count + 1,
          price: existing.basePrice * (existing.count + 1),
        };
        await dispatch(putCartThunk(updatedProduct)).unwrap();
      } else {
        const newProduct = {
          productId: product.id,
          productName: product.productName,
          img: product.img,
          count: 1,
          basePrice: product.price,
          price: product.price,
        };
        await dispatch(postCartThunk(newProduct)).unwrap();
      }
    } catch (error) {
      console.error("Failed to update cart:", error);
    }
  };

  if (loading === "pending") {
    return (
      <div className="text-center text-gray-600 mt-20">Загрузка товара...</div>
    );
  }

  if (loading === "rejected") {
    return (
      <div className="text-center text-red-500 mt-20">
        Ошибка загрузки: {error}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center text-red-500 mt-20">Товар не найден</div>
    );
  }

  const isInCart = localCart.some((item) => item.productId === product.id);
  const cartItem = localCart.find((item) => item.productId === product.id);

  return (
    <div className="flex flex-col items-center bg-gray-200 p-20 min-h-screen">
      <div className="container w-full max-w-7xl flex flex-wrap justify-between mb-6 gap-4 px-4">
        <nav className="flex gap-1 flex-wrap items-center text-sm text-gray-700">
          <button
            onClick={() => navigate("/")}
            className="hover:underline cursor-pointer"
          >
            Главная /
          </button>
          <button
            onClick={() => navigate("/market")}
            className="hover:underline cursor-pointer"
          >
            Магазин /
          </button>
          <span className="text-gray-500">Ваш товар</span>
        </nav>

        <div className="flex gap-4 items-center text-sm">
          <button
            onClick={() => nextOrPreview("preview")}
            className="hover:underline cursor-pointer"
            aria-label="Previous product"
          >
            {"< Назад"}
          </button>
          <span>|</span>
          <button
            onClick={() => nextOrPreview("next")}
            className="hover:underline cursor-pointer"
            aria-label="Next product"
          >
            {"Далле >"}
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-10 px-4">
        <div className="md:w-3/5 flex flex-col gap-6">
          <div className="border border-gray-400 p-2 inline-block max-w-[400px] max-h-[400px]">
            <img
              src={product.img}
              alt={product.productName}
              className="w-full h-auto object-contain"
            />
          </div>

          <p className="text-gray-700 text-base leading-relaxed">
            Это описание товара. Здесь вы можете рассказать о товаре подробнее:
            напишите о размерах, материалах, уходе и любых других важных
            моментах.
          </p>
        </div>
        <div className="md:w-2/5 flex flex-col gap-6">
          <div>
            <p className="text-2xl font-semibold uppercase mb-1">
              {product.productName}
            </p>
            <p className="text-xs text-gray-500 mb-4">
              Артикул 000{product.id}
            </p>
            <p className="text-xl text-gray-700 font-semibold mb-4">
              PRICE: {product.price}$
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                addCart(product);
              }}
              disabled={cartStatus === "pending"}
              className={`w-full py-3 text-sm rounded transition duration-300 ${
                isInCart
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-black text-white hover:bg-gray-800"
              } ${
                cartStatus === "pending" ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {cartStatus === "pending"
                ? "Обновляем корзину..."
                : isInCart
                ? `В корзине (${cartItem?.count || 1} шт)`
                : "Добавить в корзину"}
            </button>

            {cartStatus === "rejected" && (
              <p className="text-red-500 text-sm text-center">
                Ошибка: {cartError || "Не удалось обновить корзину"}
              </p>
            )}
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="about-product">
              <AccordionTrigger>О Товаре</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Это информация о товаре. Расскажите подробно, что он из себя
                  представляет, и перечислите всю необходимую информацию:
                  размеры, материалы, инструкции по уходу и т. д.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="return-policy">
              <AccordionTrigger>ПОЛИТИКА ВОЗВРАТА</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Это правила и условия возврата товара и денег. Расскажите
                  посетителям, что нужно сделать, если они захотят вернуть
                  товар.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex gap-4 mt-4">
            <Facebook className="w-10 h-8 text-black cursor-pointer hover:text-blue-600 transition duration-300" />
            <Twitter className="w-10 h-8 text-black cursor-pointer hover:text-blue-600 transition duration-300" />
            <Instagram className="w-10 h-8 text-black cursor-pointer hover:text-rose-600 transition duration-300" />
            <FaWhatsapp className="w-10 h-8 text-black cursor-pointer hover:text-green-600 transition duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
