// import { Base } from "../../../assets/images/Iocns";
import { STRING } from "../../Modal/InputTypes";

export const UmrahTemplate = {
  text: "Umra ziyorati",
  path: "/umrah",
  icon: "Base",
  isOpenModal: false,
  form: [
    {
      grid: {
        columns: "repeat(4, 1fr)",
        rows: ".2fr .2fr",
      },
      inputs: [
        {
          name: "name",
          type: STRING,
          placeholder: "Name",
          gridColumn: "1 / 3",
        },
      ],
    },
  ],

  columns: [
    {
      text: "#",
    },
  ],
};
