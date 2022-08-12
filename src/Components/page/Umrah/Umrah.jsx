import React, { useState } from "react";
import "./umrah.scss";

const Umrah = () => {
  const [nameUzb, setNameUzb] = useState([]);
  const [nameEng, setNameEng] = useState([]);
  const [nameRus, setNameRus] = useState([]);
  const [nameAra, setNameAra] = useState([]);
  const [price, setPrice] = useState([]);

  const [desctionUzb, setDesctionUzb] = useState([]);
  const [desctionEng, setDesctionEng] = useState([]);
  const [desctionRus, setDesctionRus] = useState([]);
  const [desctionAra, setDesctionAra] = useState([]);

  const [includedInfoUzb, setIncludedInfoUzb] = useState([]);
  const [includedInfoEng, setIncludedInfoEng] = useState([]);
  const [includedInfoRus, setIncludedInfoRus] = useState([]);
  const [includedInfoAra, setIncludedInfoAra] = useState([]);

  const [priceInfoUzb, setPriceInfoUzb] = useState([]);
  const [priceInfoEng, setPriceInfoEng] = useState([]);
  const [priceInfoRus, setPriceInfoRus] = useState([]);
  const [priceInfoAra, setPriceInfoAra] = useState([]);

  const [extraInfoUzb, setExtraInfoUzb] = useState([]);
  const [extraInfoEng, setExtraInfoEng] = useState([]);
  const [extraInfoRus, setExtraInfoRus] = useState([]);
  const [extraInfoAra, setExtraInfoAra] = useState([]);

  const [image1, setImage1] = useState({ data: "" });
  const [image2, setImage2] = useState({ data: "" });
  const [image3, setImage3] = useState({ data: "" });
  const [image4, setImage4] = useState({ data: "" });
  const [image5, setImage5] = useState({ data: "" });
  const [image6, setImage6] = useState({ data: "" });

  const handleFileChange = (e) => {
    const img = {
      data: e.target.files[0],
    };
    setImage1(img);
  };
  const handleFileChange2 = (e) => {
    const img = {
      data: e.target.files[0],
    };
    setImage2(img);
  };
  const handleFileChange3 = (e) => {
    const img = {
      data: e.target.files[0],
    };
    setImage3(img);
  };
  const handleFileChange4 = (e) => {
    const img = {
      data: e.target.files[0],
    };
    setImage4(img);
  };
  const handleFileChange5 = (e) => {
    const img = {
      data: e.target.files[0],
    };
    setImage5(img);
  };
  const handleFileChange6 = (e) => {
    const img = {
      data: e.target.files[0],
    };
    setImage6(img);
  };

  const handleSubmit = () => {
    const axios = require("axios");
    const formData = new FormData();

    formData.append("name_uzb", nameUzb);
    formData.append("name_eng", nameEng);
    formData.append("name_rus", nameRus);
    formData.append("name_arab", nameAra);
    formData.append("price", price);

    formData.append("description_uzb", desctionUzb);
    formData.append("description_eng", desctionEng);
    formData.append("description_rus", desctionRus);
    formData.append("description_arab", desctionAra);

    formData.append("price_information_uzb", includedInfoUzb);
    formData.append("price_information_eng", includedInfoEng);
    formData.append("price_information_rus", includedInfoRus);
    formData.append("price_information_arab", includedInfoAra);

    formData.append("price_information2_uzb", priceInfoUzb);
    formData.append("price_information2_eng", priceInfoEng);
    formData.append("price_information2_rus", priceInfoRus);
    formData.append("price_information2_arab", priceInfoAra);

    formData.append("extra_description_uzb", extraInfoUzb);
    formData.append("extra_description_eng", extraInfoEng);
    formData.append("extra_description_rus", extraInfoRus);
    formData.append("extra_description_arab", extraInfoAra);

    formData.append("image1", image1.data);
    formData.append("image2", image2.data);
    formData.append("image3", image3.data);
    formData.append("image4", image4.data);
    formData.append("image5", image5.data);
    formData.append("image6", image6.data);

    axios.post("http://46.101.191.246:5000/api/places/min", formData).then(
      (response) => {
        console.log(JSON.stringify(response.data));
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="umrah bg-white w-[100%] ">
      <div className="umrah-content p-5">
        <h1 className="text-xl mb-5">Umra Ziyorati</h1>
        <div className="flex umrah-content-items">
          <div className="left">
            <label htmlFor="name">Nomi Uzb:</label>
            <input
              type="text"
              placeholder="nomi"
              value={nameUzb}
              onChange={(e) => setNameUzb(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Nomi Eng:</label>
            <input
              type="text"
              placeholder="name"
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
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Ma'lumoti Uzb:</label>
            <input
              type="text"
              placeholder="Malumoti"
              value={desctionUzb}
              onChange={(e) => setDesctionUzb(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Ma'lumoti Eng:</label>
            <input
              type="text"
              placeholder="Information"
              value={desctionEng}
              onChange={(e) => setDesctionEng(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Ma'lumoti Rus:</label>
            <input
              type="text"
              placeholder="Информация"
              value={desctionRus}
              onChange={(e) => setDesctionRus(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">Ma'lumoti Ara:</label>
            <input
              type="text"
              placeholder="Information"
              value={desctionAra}
              onChange={(e) => setDesctionAra(e.target.value)}
            />
          </div>
        </div>{" "}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Narxi ichidagi ma'lumoti Uzb:</label>
            <input
              type="text"
              placeholder="Narxi Malumoti"
              value={includedInfoUzb}
              onChange={(e) => setIncludedInfoUzb(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Narxi ichidagi ma'lumoti Eng:</label>
            <input
              type="text"
              placeholder="Price Information"
              value={includedInfoEng}
              onChange={(e) => setIncludedInfoEng(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Narxi ichidagi ma'lumoti Rus:</label>
            <input
              type="text"
              placeholder="Информация о ценах"
              value={includedInfoRus}
              onChange={(e) => setIncludedInfoRus(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">Narxi ichidagi ma'lumoti Ara:</label>
            <input
              type="text"
              placeholder="Pric Information"
              value={includedInfoRus}
              onChange={(e) => setIncludedInfoRus(e.target.value)}
            />
          </div>
        </div>{" "}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Narxi ma'lumoti Uzb:</label>
            <input
              type="text"
              placeholder="Narxi ichidagi ma'lumoti"
              value={priceInfoUzb}
              onChange={(e) => setPriceInfoUzb(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Narxi ma'lumoti Eng:</label>
            <input
              type="text"
              placeholder="Price information"
              value={priceInfoEng}
              onChange={(e) => setPriceInfoEng(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Narxi ma'lumoti Rus:</label>
            <input
              type="text"
              placeholder="Информация о цене"
              value={priceInfoRus}
              onChange={(e) => setPriceInfoRus(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">Narxi ma'lumoti Ara:</label>
            <input
              type="text"
              placeholder="Price information"
              value={priceInfoAra}
              onChange={(e) => setPriceInfoAra(e.target.value)}
            />
          </div>
        </div>{" "}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Qoshimcha ma'lumoti Uzb:</label>
            <input
              type="text"
              placeholder="Malumoti"
              value={extraInfoUzb}
              onChange={(e) => setExtraInfoUzb(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Qoshimcha ma'lumoti Eng:</label>
            <input
              type="text"
              placeholder="Additional information"
              value={extraInfoEng}
              onChange={(e) => setExtraInfoEng(e.target.value)}
            />
          </div>
          <div className="left">
            <label htmlFor="name">Qoshimcha ma'lumoti Rus:</label>
            <input
              type="text"
              placeholder="Дополнительная информация"
              value={extraInfoRus}
              onChange={(e) => setExtraInfoRus(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name">Qoshimcha ma'lumoti Ara:</label>
            <input
              type="text"
              placeholder="Additional information"
              value={extraInfoAra}
              onChange={(e) => setExtraInfoAra(e.target.value)}
            />
          </div>
        </div>{" "}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Rasmi:</label>
            <input
              type="file"
              className="border-none"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
          <div className="left">
            <label htmlFor="name">Rasmi:</label>
            <input
              type="file"
              className="border-none"
              onChange={handleFileChange2}
              accept="image/*"
            />
          </div>
          <div className="left">
            <label htmlFor="name">Rasmi:</label>
            <input
              type="file"
              className="border-none"
              onChange={handleFileChange3}
              accept="image/*"
            />
          </div>
        </div>{" "}
        <div className="flex umrah-content-items mt-3">
          <div className="left">
            <label htmlFor="name">Rasmi:</label>
            <input
              type="file"
              className="border-none"
              onChange={handleFileChange4}
              accept="image/*"
            />
          </div>
          <div className="left">
            <label htmlFor="name">Rasmi:</label>
            <input
              type="file"
              placeholder="Information"
              className="border-none"
              onChange={handleFileChange5}
              accept="image/*"
            />
          </div>{" "}
          <div>
            <label htmlFor="name">Rasmi:</label>
            <input
              type="file"
              placeholder="Information"
              className="border-none"
              onChange={handleFileChange6}
              accept="image/*"
            />
          </div>
        </div>
        <button
          className="absolute right-[80px] bottom-12"
          onClick={handleSubmit}
        >
          Saqlash
        </button>
      </div>
    </div>
  );
};

export default Umrah;
