import React, { useEffect } from "react";
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
import { postCartThunk, putCartThunk } from "@/store/slices/cartSlice/getCartThunk";

const ProductPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useSelector(selectProducts);
  const carts = useSelector(selectCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = data.find(item => item.id === id);

  useEffect(() => {
    if (!data.length) {
      dispatch(getProductThunk());
    }
  }, [dispatch, data.length]);

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

  const addCart = (product) => {
    const cart = Array.isArray(carts.cart) ? carts.cart : [];
    const existing = cart.find(
      item => parseInt(item.productId, 10) === parseInt(product.id, 10)
    );

    if (existing) {
      const updatedProduct = {
        ...existing,
        count: existing.count + 1,
        price: existing.basePrice * (existing.count + 1),
      };
      dispatch(putCartThunk(updatedProduct));
    } else {
      const newProduct = {
        productId: product.id,
        productName: product.productName,
        img: product.img,
        count: 1,
        basePrice: product.price,
        price: product.price,
      };
      dispatch(postCartThunk(newProduct));
    }
  };

  if (loading === "pending") {
    return <div className="text-center text-gray-600 mt-20">Загрузка товара...</div>;
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
      <div className="text-center text-red-500 mt-20">
        Товар не найден
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-gray-200 p-6 min-h-screen">
      {/* Навигация */}
      <div className="container w-full max-w-7xl flex flex-wrap justify-between mb-6 gap-4 px-4">
        <nav className="flex gap-1 flex-wrap items-center text-sm text-gray-700">
          <button onClick={() => navigate("/")} className="hover:underline cursor-pointer">
            Главная /
          </button>
          <button onClick={() => navigate("/market")} className="hover:underline cursor-pointer">
            Магазин /
          </button>
          <span className="text-gray-500">Ваш товар</span>
        </nav>

        <div className="flex gap-4 items-center text-sm">
          <button onClick={() => nextOrPreview("preview")} className="hover:underline cursor-pointer" aria-label="Previous product">
            {"< Назад"}
          </button>
          <span>|</span>
          <button onClick={() => nextOrPreview("next")} className="hover:underline cursor-pointer" aria-label="Next product">
            {"Далле >"}
          </button>
        </div>
      </div>

      {/* Основной контент */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-10 px-4">
        {/* Изображение и описание */}
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
            напишите о размерах, материалах, уходе и любых других важных моментах.
          </p>
        </div>

        {/* Информация и действия */}
        <div className="md:w-2/5 flex flex-col gap-6">
          <div>
            <p className="text-2xl font-semibold uppercase mb-1">{product.productName}</p>
            <p className="text-xs text-gray-500 mb-4">Артикул 000{product.id}</p>
            <p className="text-xl text-gray-700 font-semibold mb-4">PRICE: {product.price}$</p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              addCart(product);
            }}
            className="w-full bg-black text-white py-3 text-sm rounded hover:bg-gray-400 transition duration-300"
          >
            Добавить в корзинку
          </button>

          <Accordion type="single" collapsible>
            <AccordionItem value="about-product">
              <AccordionTrigger>О Товаре</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Это информация о товаре. Расскажите подробно, что он из себя
                  представляет, и перечислите всю необходимую информацию:
                  размеры, материалы, инструкции по уходу и т. д. Это также
                  хорошая возможность сообщить, в чем особенность вашей продукции и
                  какую выгоду покупатели получат в итоге. Подробные сведения о
                  товаре помогут вашим посетителям определиться с покупкой.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="return-policy">
              <AccordionTrigger>ПОЛИТИКА ВОЗВРАТА</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Это правила и условия возврата товара и денег. Расскажите
                  посетителям, что нужно сделать, если они захотят вернуть товар
                  и получить назад свои деньги. Четкая и ясная политика возврата —
                  это хороший способ построить доверительные отношения с клиентами.
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
