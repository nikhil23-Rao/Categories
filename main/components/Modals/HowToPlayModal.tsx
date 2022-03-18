import Help from "@mui/icons-material/Help";
import React from "react";
import { getColor } from "../../utils/customizationsFunctions";

interface IProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const HowToPlayModal = ({ onClick }: any) => {
  return (
    <>
      <Help
        style={{ color: getColor(), cursor: "pointer", fontSize: 30 }}
        onClick={onClick}
      />
      <div
        id="popup-article"
        className="popup"
        style={{ height: "100vh", zIndex: 200 }}
      >
        <div className="popup__container">
          <a href="#" className="popup__close">
            <span className="screen-reader">close</span>
          </a>
          <div className="popup__content">
            <h1 className="popup__title r-title">How To Play </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              eaque optio vitae in explicabo recusandae sit id sapiente
              excepturi tempore, nemo, nulla odio deleniti rerum nisi
              perferendis aut molestias! Incidunt nesciunt iusto praesentium! In
              at maiores quibusdam enim quis, quam!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
