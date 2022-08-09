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
  const [tenman, setTenMan] = useState([]);
  const [fortyfiveman, setFortyFiveMan] = useState([]);
  const [videourl, setVidoUrl] = useState([]);
  const [locationurl, setLocationUrl] = useState([]);

  //
  const [travelUzb, setTravelUzb] = useState([]);
  const [travelEng, setTravelEng] = useState([]);
  const [travelRus, setTravelRus] = useState([]);
  const [travelAra, setTravelAra] = useState([]);
  //
  const [durationUzb, setDurationUzb] = useState([]);
  const [durationEng, setDurationEng] = useState([]);
  const [durationRus, setDurationRus] = useState([]);
  const [durationAra, setDurationAra] = useState([]);
  //
  const [privilegesUzb, setPrivilegeUzb] = useState([]);
  const [privilegesEng, setPrivilegeEng] = useState([]);
  const [privilegesRus, setPrivilegeRus] = useState([]);
  const [privilegesAra, setPrivilegeAra] = useState([]);
  //
  const [planUzb, setPlanUzb] = useState([]);
  const [planEng, setPlanEng] = useState([]);
  const [planRus, setPlanRus] = useState([]);
  const [planAra, setPlanAra] = useState([]);
  //
  const [includedUzb, setIncludedUzb] = useState([]);
  const [includedEng, setIncludedEng] = useState([]);
  const [includedRus, setIncludedRus] = useState([]);
  const [includedAra, setIncludedAra] = useState([]);
  //
  const [notincludedUzb, setNotIncludedUzb] = useState([]);
  const [notincludedEng, setNotIncludedEng] = useState([]);
  const [notincludedRus, setNotIncludedRus] = useState([]);
  const [notincludedAra, setNotIncludedAra] = useState([]);
  //
  const [fullinfoUzb, setFullInfoUzb] = useState([]);
  const [fullinfoEng, setFullInfoEng] = useState([]);
  const [fullinfoRus, setFullInfoRus] = useState([]);
  const [fullinfoAra, setFullInfoAra] = useState([]);

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
        {/* Duration */}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Davomiyligi Uzb:</label>
            <input
              type="text"
              placeholder="3 kun/ 2 kecha"
              value={durationUzb}
              onChange={(e) => setDurationUzb(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Davomiyligi Eng:</label>
            <input
              type="text"
              placeholder="3 days/ 2 nights"
              value={durationEng}
              onChange={(e) => setDurationEng(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Davomiyligi Rus:</label>
            <input
              type="text"
              placeholder="3 дня/ 2 ночи"
              value={durationRus}
              onChange={(e) => setDurationRus(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Davomiyligi Ara:</label>
            <input
              type="text"
              placeholder="3 days/ 2 nights"
              value={durationAra}
              onChange={(e) => setDurationAra(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">10 kishilik uchun:</label>
            <input
              type="nubmer"
              placeholder="130$"
              className="w-[120px]"
              value={tenman}
              onChange={(e) => setTenMan(e.target.value)}
            />
          </div>
        </div>{" "}
        {/* Privilege */}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Imtiyozlar: Uzb:</label>
            <input
              type="text"
              placeholder="45 kishilik guruh"
              value={privilegesUzb}
              onChange={(e) => setPrivilegeUzb(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Imtiyozlar: Eng:</label>
            <input
              type="text"
              placeholder="Privileges"
              value={privilegesEng}
              onChange={(e) => setPrivilegeEng(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Imtiyozlar: Rus:</label>
            <input
              type="text"
              placeholder="Привилегии"
              value={privilegesRus}
              onChange={(e) => setPrivilegeRus(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Imtiyozlar: Ara:</label>
            <input
              type="text"
              placeholder="Privileges"
              value={privilegesAra}
              onChange={(e) => setPrivilegeAra(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">45 kishilik uchun:</label>
            <input
              type="nubmer"
              placeholder="100$"
              className="w-[120px]"
              value={fortyfiveman}
              onChange={(e) => setFortyFiveMan(e.target.value)}
            />
          </div>
        </div>{" "}
        {/* Travel Plan */}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Sayohat rejasi Uzb:</label>
            <input
              type="text"
              placeholder="7 August Toshkentdan Samarqand"
              value={planUzb}
              onChange={(e) => setPlanUzb(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Sayohat rejasi Eng:</label>
            <input
              type="text"
              placeholder="Travel plan:"
              value={planEng}
              onChange={(e) => setPlanEng(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Sayohat rejasi Rus:</label>
            <input
              type="text"
              placeholder="Дополнительная информация"
              value={planRus}
              onChange={(e) => setPlanRus(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Sayohat rejasi Ara:</label>
            <input
              type="text"
              placeholder="Travel plan:"
              value={planAra}
              onChange={(e) => setPlanAra(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">Video Qoshish:</label>
            <input
              type="text"
              placeholder="Video url:"
              className="w-[120px]"
              value={videourl}
              onChange={(e) => setVidoUrl(e.target.value)}
            />
          </div>
        </div>{" "}
        {/* Price Included */}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Narxga kiritilgan Uzb:</label>
            <input
              type="text"
              placeholder="Aeroport-mehmonxona-aeroport."
              value={includedUzb}
              onChange={(e) => setIncludedUzb(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Narxga kiritilgan Eng:</label>
            <input
              type="text"
              placeholder="Included in the price"
              value={includedEng}
              onChange={(e) => setIncludedEng(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Narxga kiritilgan Rus:</label>
            <input
              type="text"
              placeholder="Включено в цену:"
              value={includedRus}
              onChange={(e) => setIncludedRus(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Narxga kiritilgan Ara:</label>
            <input
              type="text"
              placeholder="Included in the price"
              value={includedAra}
              onChange={(e) => setIncludedAra(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">Lokatsiya Qoshish:</label>
            <input
              type="text"
              placeholder="Lokatsiya url:"
              className="w-[120px]"
              value={locationurl}
              onChange={(e) => setLocationUrl(e.target.value)}
            />
          </div>
        </div>{" "}
        {/* Price not Included */}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Narxga kiritilmagan Uzb:</label>
            <input
              type="text"
              placeholder="Aeroport-mehmonxona-aeroport."
              value={notincludedUzb}
              onChange={(e) => setNotIncludedUzb(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Narxga kiritilmagan Eng:</label>
            <input
              type="text"
              placeholder="Included in the price"
              value={notincludedEng}
              onChange={(e) => setNotIncludedEng(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Narxga kiritilmagan Rus:</label>
            <input
              type="text"
              placeholder="Включено в цену:"
              value={notincludedRus}
              onChange={(e) => setNotIncludedRus(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Narxga kiritilmagan Ara:</label>
            <input
              type="text"
              placeholder="Included in the price"
              value={notincludedAra}
              onChange={(e) => setNotIncludedAra(e.target.value)}
            />
          </div>
        </div>{" "}
        {/* Full Info */}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Toliq ma'lumot Uzb:</label>
            <input
              type="text"
              placeholder="Toliq ma'lumot"
              value={fullinfoUzb}
              onChange={(e) => setFullInfoUzb(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Toliq ma'lumot Eng:</label>
            <input
              type="text"
              placeholder="Full information"
              value={fullinfoEng}
              onChange={(e) => setFullInfoEng(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Toliq ma'lumot Rus:</label>
            <input
              type="text"
              placeholder="Полная информация"
              value={fullinfoRus}
              onChange={(e) => setFullInfoRus(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Toliq ma'lumot Ara:</label>
            <input
              type="text"
              placeholder="Full information"
              value={fullinfoAra}
              onChange={(e) => setFullInfoAra(e.target.value)}
            />
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
