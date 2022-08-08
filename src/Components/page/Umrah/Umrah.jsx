import React from "react";
import "./umrah.scss";

const Umrah = () => {
  return (
    <div className="umrah bg-white w-[100%] ">
      <div className="umrah-content p-5">
        <h1 className="text-xl mb-5">Umra Ziyorati</h1>
        <div className="flex umrah-content-items">
          <div className="left">
            <label htmlFor="name">Nomi Uzb:</label>
            <input type="text" placeholder="nomi" className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Nomi Eng:</label>
            <input type="text" placeholder="name" className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Nomi Rus:</label>
            <input type="text" placeholder="имя" className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Nomi Ara:</label>
            <input type="text" placeholder="emri" className="" />
          </div>
          <div>
            <label htmlFor="name">Narxi:</label>
            <input type="nubmer" placeholder="1000$" className="w-[120px]" />
          </div>
          <hr className="w-[100px]" />
        </div>
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Ma'lumoti Uzb:</label>
            <input type="text" placeholder="Malumoti" className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Ma'lumoti Eng:</label>
            <input type="text" placeholder="Information" className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Ma'lumoti Rus:</label>
            <input type="text" placeholder="Информация" className="" />
          </div>
          <div>
            <label htmlFor="name">Ma'lumoti Ara:</label>
            <input type="text" placeholder="Information" className="" />
          </div>
        </div>{" "}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Narxi ichidagi ma'lumoti Uzb:</label>
            <input type="text" placeholder="Narxi Malumoti" className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Narxi ichidagi ma'lumoti Eng:</label>
            <input type="text" placeholder="Price Information" className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Narxi ichidagi ma'lumoti Rus:</label>
            <input type="text" placeholder="Информация о ценах" className="" />
          </div>
          <div>
            <label htmlFor="name">Narxi ichidagi ma'lumoti Ara:</label>
            <input type="text" placeholder="Pric Information" className="" />
          </div>
        </div>{" "}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Narxi ichidagi ma'lumoti Uzb:</label>
            <input
              type="text"
              placeholder="Narxi ichidagi ma'lumoti"
              className=""
            />
          </div>
          <div className="left">
            <label htmlFor="name">Narxi ichidagi ma'lumoti Eng:</label>
            <input type="text" placeholder="Price information" className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Narxi ichidagi ma'lumoti Rus:</label>
            <input type="text" placeholder="Информация о цене" className="" />
          </div>
          <div>
            <label htmlFor="name">Narxi ichidagi ma'lumoti Ara:</label>
            <input type="text" placeholder="Price information" className="" />
          </div>
        </div>{" "}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Qoshimcha ma'lumoti Uzb:</label>
            <input type="text" placeholder="Malumoti" className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Qoshimcha ma'lumoti Eng:</label>
            <input
              type="text"
              placeholder="Additional information"
              className=""
            />
          </div>
          <div className="left">
            <label htmlFor="name">Qoshimcha ma'lumoti Rus:</label>
            <input
              type="text"
              placeholder="Дополнительная информация"
              className=""
            />
          </div>
          <div>
            <label htmlFor="name">Qoshimcha ma'lumoti Ara:</label>
            <input
              type="text"
              placeholder="Additional information"
              className=""
            />
          </div>
        </div>{" "}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Rasmi:</label>
            <input type="file" className="border-none" />
          </div>
          <div className="left">
            <label htmlFor="name">Rasmi:</label>
            <input
              type="file"
              placeholder="Information"
              className="border-none"
            />
          </div>
          <div className="left">
            <label htmlFor="name">Rasmi:</label>
            <input
              type="file"
              placeholder="Информация"
              className="border-none"
            />
          </div>
        </div>{" "}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Rasmi:</label>
            <input type="file" className="border-none" />
          </div>
          <div className="left">
            <label htmlFor="name">Rasmi:</label>
            <input
              type="file"
              placeholder="Information"
              className="border-none"
            />
          </div>{" "}
          <div>
            <label htmlFor="name">Rasmi:</label>
            <input
              type="file"
              placeholder="Information"
              className="border-none"
            />
          </div>
        </div>
        <button className="absolute right-[80px] bottom-12">Saqlash</button>
      </div>
    </div>
  );
};

export default Umrah;
