import React from "react";

interface IProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const Modal = () => {
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
        <h1 className="popup__title r-title">
          The my adventure in the France and photography with Tour De France
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          eaque optio vitae in explicabo recusandae sit id sapiente excepturi
          tempore, nemo, nulla odio deleniti rerum nisi perferendis aut
          molestias! Incidunt nesciunt iusto praesentium! In at maiores
          quibusdam enim quis, quam!
        </p>
        <p>
          Architecto magni dolores cumque tenetur nemo id aperiam, ratione
          temporibus at, consectetur totam, fuga et illo rerum earum dicta.
          Vitae ullam harum enim aliquid hic commodi voluptas cumque iste ex
          accusantium architecto doloremque reprehenderit, asperiores vero
          dolor, esse inventore dolorem.
        </p>
        <p>
          Excepturi eaque, reprehenderit dolores, cum molestias repellendus in
          expedita. Placeat totam, quos pariatur quidem explicabo id harum ab
          voluptatum. Necessitatibus, aliquam! Dolorum voluptatem ut laudantium
          excepturi cumque, hic iure impedit ullam accusantium error natus
          recusandae, quia fuga quo voluptates officiis?
        </p>
        <p>
          Dignissimos debitis eos necessitatibus accusantium natus voluptates
          illo blanditiis corporis minus. Repudiandae libero quae, illo error
          expedita consectetur possimus voluptate eum esse quam molestiae
          tempore dignissimos ipsam similique ab quod. Ea earum adipisci rem
          voluptatem aliquid voluptatum deleniti necessitatibus provident.
        </p>
        <p>
          Dicta eum amet impedit maiores accusamus numquam saepe necessitatibus
          temporibus ut! Velit ducimus repellendus fuga repudiandae culpa
          voluptatibus delectus praesentium totam odit ratione, tenetur
          assumenda, labore esse et nostrum a, aut veritatis. Nihil, voluptas,
          impedit? Magnam dolorum, iure repellendus vitae.
        </p>
        <p>
          Temporibus voluptatum voluptatibus iste, nam atque dignissimos quam
          labore sequi adipisci tempore exercitationem quos, libero,
          reprehenderit facere quasi soluta, itaque at eum cum possimus!
          Facilis, tempora soluta at quis. Nemo expedita voluptate esse nam ex
          odit, sequi eveniet quibusdam, dolores?
        </p>
        <p>
          Praesentium laboriosam iste dolore cumque voluptatibus deleniti quia,
          delectus provident, illum aperiam, atque molestiae. Cum delectus,
          doloribus expedita eius veritatis assumenda deleniti veniam
          reprehenderit animi ut, eaque asperiores, dicta incidunt omnis
          repellendus dolorum enim inventore rerum voluptatem saepe error id.
        </p>
      </div>
    </div>
  </div>;
};
