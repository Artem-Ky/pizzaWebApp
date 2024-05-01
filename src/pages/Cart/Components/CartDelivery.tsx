import { useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../customHooks/redux/redux";
import { orderSlice } from "../../../stores/RTKQuery/cart";
import { toast } from "react-toastify";
import { orderCreated } from "../../../stores/slices/cartSlice/cartSlice";

const CartDelivery = () => {
  const { totalPrice, cartList } = useAppSelector((state) => state.cart);
  const [createOrder] = orderSlice.useCreateOrderMutation();
  const [formData, setFormData] = useState({
    address_house: "",
    address_apart: "",
    address_entr: "",
    address_floor: "",
    phone: "",
    name: "",
  });
  const dispatch = useAppDispatch();

  const handlePayment = async () => {
    if (cartList.length > 0) {
      if (
        formData.address_house.length > 0 &&
        formData.address_apart.length > 0 &&
        formData.address_entr.length > 0 &&
        formData.address_floor.length > 0 &&
        formData.phone.length === 16 &&
        formData.name.length > 0
      ) {
        const address = [
          formData.address_house,
          formData.address_apart,
          formData.address_entr,
          formData.address_floor,
          formData.phone,
          formData.name,
        ].join("||");

        const products = cartList.map((product) => ({
          id: product.id,
          count: product.count,
        }));

        const orderData = {
          address,
          orderItems: products,
        };

        try {
          console.log("tost");
          toast.info("Создаем ваш заказ...");
          await createOrder(orderData);

          setFormData({
            address_house: "",
            address_apart: "",
            address_entr: "",
            address_floor: "",
            phone: "",
            name: "",
          });
          dispatch(orderCreated());
          toast.dismiss();
          toast.success("Заказ успешно создан!");
        } catch (error) {
          console.error("Ошибка при создании заказа:", error);
          toast.dismiss();
          toast.error("Ошибка при создании заказа!");
        }
      } else {
        toast.dismiss();
        toast.error("Заполните адрес!");
      }
    } else {
      toast.dismiss();
      toast.error("Корзина пустая!");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    const { name, value } = e.target;

    if (name === "phone") {
      const numbers = value.replace(/[^\d]/g, "");
      let formattedPhone = "";

      numbers.split("").forEach((number: string, index: number) => {
        if (index === 1) formattedPhone += "(";
        if (index === 4) formattedPhone += ") ";
        if (index === 7 || index === 9) formattedPhone += "-";
        formattedPhone += number;
      });

      setFormData((prevState) => ({
        ...prevState,
        phone: formattedPhone,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <section className="delivery">
      <div className="container">
        <div className="cart__title">Доставка: </div>
        <div className="cart__subtitle">Иваново</div>
        <div className="delivery__item">
          <input
            type="text"
            className="delivery__address"
            placeholder="Например: Улица Мира, Дом 1"
            name="address_house"
            value={formData.address_house}
            onChange={handleChange}
          />
        </div>
        <div className="delivery__item">
          <input
            type="text"
            className="delivery__address-small"
            placeholder="№ квартиры"
            name="address_apart"
            maxLength={5}
            value={formData.address_apart}
            onChange={handleChange}
          />
          <input
            type="text"
            className="delivery__address-small"
            placeholder="подъезд"
            name="address_entr"
            maxLength={5}
            value={formData.address_entr}
            onChange={handleChange}
          />
          <input
            type="text"
            className="delivery__address-small"
            placeholder="этаж"
            name="address_floor"
            maxLength={5}
            value={formData.address_floor}
            onChange={handleChange}
          />
        </div>
        <div className="delivery__item">
          <input
            type="tel"
            className="delivery__address-small"
            placeholder="8 (9__) ___ - __ - __"
            name="phone"
            maxLength={16}
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            className="delivery__address-medium"
            placeholder="Введите ваше имя"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="pay">
          <div className="pay__total">К оплате: {totalPrice} ₽</div>
          <button onClick={handlePayment} type="button" className="pay__btn">
            Оплатить
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartDelivery;
