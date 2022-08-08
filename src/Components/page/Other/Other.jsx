import React, { useState } from "react";
import "./other.scss";

const Other = () => {
  const [nameUzb, setNameUzb] = useState([]);
  const [nameEng, setNameEng] = useState([]);
  const [nameRus, setNameRus] = useState([]);
  const [nameAra, setNameAra] = useState([]);
  //
  const [price, setPrice] = useState([]);
  const [oneman, setOneMan] = useState([]);

  //
  const [travelUzb, setTravelUzb] = useState([]);
  const [travelEng, setTravelEng] = useState([]);
  const [travelRus, setTravelRus] = useState([]);
  const [travelAra, setTravelAra] = useState([]);

  return (
    <div className="other bg-white w-[100%] ">
      <div className="umrah-content p-5">
        <h1 className="text-xl mb-5">Umra Ziyorati</h1>
        {/* Name */}
        <div className="flex umrah-content-items">
          <div className="left">
            <label htmlFor="name">Nomi Uzb:</label>
            <input
              type="text"
              placeholder="Nomi"
              value={nameUzb}
              onChange={(e) => setNameUzb(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Nomi Eng:</label>
            <input
              type="text"
              placeholder="Name"
              value={nameEng}
              onChange={(e) => setNameEng(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Nomi Rus:</label>
            <input
              type="text"
              placeholder="имя"
              value={nameRus}
              onChange={(e) => setNameRus(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Nomi Ara:</label>
            <input
              type="text"
              placeholder="emri"
              className=""
              value={nameAra}
              onChange={(e) => setNameAra(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">Narxi:</label>
            <input
              type="nubmer"
              placeholder="1000$"
              className="w-[120px]"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <hr className="w-[100px]" />
        </div>
        {/* Travel */}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Sayohat yo'nalishi Uzb:</label>
            <input
              type="text"
              placeholder="Farg‘ona - Toshkent - Chorvoq"
              value={travelUzb}
              onChange={(e) => setTravelUzb(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Sayohat yo'nalishi Eng:</label>
            <input
              type="text"
              placeholder="Farg‘ona - Toshkent - Chorvoq"
              value={travelEng}
              onChange={(e) => setTravelEng(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Sayohat yo'nalishi Rus:</label>
            <input
              type="text"
              placeholder="Farg‘ona - Toshkent - Chorvoq"
              value={travelRus}
              onChange={(e) => setTravelRus(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Sayohat yo'nalishi Ara:</label>
            <input
              type="text"
              placeholder="Farg‘ona - Toshkent - Chorvoq"
              value={travelAra}
              onChange={(e) => setTravelAra(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">1 kishilik uchun:</label>
            <input
              type="nubmer"
              placeholder="150$"
              className="w-[120px]"
              value={oneman}
              onChange={(e) => setOneMan(e.target.value)}
            />
          </div>
        </div>{" "}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Davomiyligi Uzb:</label>
            <input type="text" placeholder="3 kun/ 2 kecha" className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Davomiyligi Eng:</label>
            <input type="text" placeholder="3 days/ 2 nights" className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Davomiyligi Rus:</label>
            <input type="text" placeholder="3 дня/ 2 ночи" className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Davomiyligi Ara:</label>
            <input type="text" placeholder="3 days/ 2 nights" className="" />
          </div>
          <div>
            <label htmlFor="name">10 kishilik uchun:</label>
            <input type="nubmer" placeholder="130$" className="w-[120px]" />
          </div>
        </div>{" "}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Imtiyozlar: Uzb:</label>
            <input
              type="text"
              placeholder="45 kishilik guruh uchun 2 ta bepul sayohatnoma taqdim etiladi. 45 kishilik guruh uchun 2 ta bepul sayohatnoma taqdim etiladi"
              className=""
            />
          </div>
          <div className="left">
            <label htmlFor="name">Imtiyozlar: Eng:</label>
            <input type="text" placeholder="Privileges" className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Imtiyozlar: Rus:</label>
            <input type="text" placeholder="Привилегии" className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Imtiyozlar: Ara:</label>
            <input type="text" placeholder="Privileges" className="" />
          </div>
          <div>
            <label htmlFor="name">45 kishilik uchun:</label>
            <input type="nubmer" placeholder="100$" className="w-[120px]" />
          </div>
        </div>{" "}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Sayohat rejasi Uzb:</label>
            <input
              type="text"
              placeholder="7 August
Toshkentdan Samarqand avtobuslari orqali jo’nab ketish."
              className=""
            />
          </div>
          <div className="left">
            <label htmlFor="name">Sayohat rejasi Eng:</label>
            <input type="text" placeholder="Travel plan:    " className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Sayohat rejasi Rus:</label>
            <input
              type="text"
              placeholder="Дополнительная информация"
              className=""
            />
          </div>
          <div className="left">
            <label htmlFor="name">Sayohat rejasi Ara:</label>
            <input type="text" placeholder="Travel plan:    " className="" />
          </div>
          <div>
            <label htmlFor="name">Video Qoshish:</label>
            <input type="text" placeholder="Video url:" className="w-[120px]" />
          </div>
        </div>{" "}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Narxga kiritilgan Uzb:</label>
            <input type="text" placeholder="Aeroport-mehmonxona-aeroport." />
          </div>
          <div className="left">
            <label htmlFor="name">Narxga kiritilgan Eng:</label>
            <input type="text" placeholder="Included in the price" />
          </div>
          <div className="left">
            <label htmlFor="name">Narxga kiritilgan Rus:</label>
            <input type="text" placeholder="Включено в цену:" className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Narxga kiritilgan Ara:</label>
            <input type="text" placeholder="Included in the price" />
          </div>
          <div>
            <label htmlFor="name">Lokatsiya Qoshish:</label>
            <input
              type="text"
              placeholder="Lokatsiya url:"
              className="w-[120px]"
            />
          </div>
        </div>{" "}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Narxga kiritilmagan Uzb:</label>
            <input type="text" placeholder="Aeroport-mehmonxona-aeroport." />
          </div>
          <div className="left">
            <label htmlFor="name">Narxga kiritilmagan Eng:</label>
            <input type="text" placeholder="Included in the price" />
          </div>
          <div className="left">
            <label htmlFor="name">Narxga kiritilmagan Rus:</label>
            <input type="text" placeholder="Включено в цену:" className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Narxga kiritilmagan Ara:</label>
            <input type="text" placeholder="Included in the price" />
          </div>
        </div>{" "}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Toliq ma'lumot Uzb:</label>
            <input type="text" placeholder="Toliq ma'lumot" className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Toliq ma'lumot Eng:</label>
            <input type="text" placeholder="Full information" className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Toliq ma'lumot Rus:</label>
            <input type="text" placeholder="Полная информация" className="" />
          </div>
          <div className="left">
            <label htmlFor="name">Toliq ma'lumot Ara:</label>
            <input type="text" placeholder="Full information" className="" />
          </div>
        </div>
        {/* Image */}
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
        <button className="absolute right-[80px] bottom-[-90px]">
          Saqlash
        </button>
      </div>
    </div>
  );
};

export default Other;
