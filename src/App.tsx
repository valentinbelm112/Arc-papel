import "./App.css";
import React, { useState, useEffect } from "react";
import { BoxDnD } from "./components/BoxDnD";
import { ContainerDnD } from "./components/ContainerDnD";
import "./assets/styles.css";

import chupetin1 from "./assets/images/chupetin1.png";
import chupetin2 from "./assets/images/chupetin2.png";
import chupetin3 from "./assets/images/chupetin3.png";
import chupetin4 from "./assets/images/chupetin4.png";
import chupetin5 from "./assets/images/chupetin5.png";
import barra from "./assets/images/barra.png";
import fondo from "./assets/images/fondo.png";

function App() {
  const [click, setClick] = useState(false);
  const [checkCircul1, setCheckCircul1] = useState(false);
  const [checkCircul2, setCheckCircul2] = useState(false);
  const [checkCircul3, setCheckCircul3] = useState(false);
  const [checkCircul4, setCheckCircul4] = useState(false);
  const [checkCircul5, setCheckCircul5] = useState(false);
  const [clickreloj, setClickReloj] = useState(false);
  const [intento, setIntento] = useState(0);
  const [active, setActive] = useState(true);
  const [puntuacion, setPuntuacion] = useState(0);
  const [reloj, setReloj] = useState(30);
  let excerciseMap = new Map<string, number[]>();
  excerciseMap.set("caja1", [2]);
  excerciseMap.set("caja2", [1]);
  excerciseMap.set("caja3", [3]);

  const checkEtiquetas = ["drag2", "drag1", "drag4", "drag5", "drag3"];
  const excerciseAnswer: boolean[] = [];
  const drop = (e: any) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");

    const card = document.getElementById(card_id) as HTMLElement;
    card.style.display = "flex";
    card.draggable = false;

    const cardId = parseInt(card_id);

    if (excerciseMap.get(e.target.id)?.indexOf(cardId) !== -1) {
      excerciseAnswer.push(true);
    } else {
      excerciseAnswer.push(false);
    }

    e.target.appendChild(card);
  };
  const dragOver = (e: any) => {
    e.preventDefault();
  };
  const dragStart = (e: any) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
    if (target.draggable) {
      setTimeout(() => {
        target.style.display = "none";
      }, 0);
    }
  };

  const dragOverOption = (e: any) => {
    e.stopPropagation();
  };
  const dragEnd = (e: any) => {
    const target = e.target;
    target.style.display = "flex";
    target.style.flexDirection = "column";
    target.style.alignItems = "center";
    target.style.justifyContent = "center";
  };
  return (
    <div className="quiz-container Ini5MateForma3">
      <div className="main__5forma__3">
        <div className="row">
          <div className="col-12">
            <div className="container__images relative full-width full-height">
              <div className="image__fondo full-width full-height">
                <img
                  src={fondo}
                  className="responsive-image_cantidad_044"
                  alt=""
                />
              </div>

              <div className="barra__right absolute">
                <div className="relative full-width full-height">
                  <div className="drag__image__container absolute">
                    <ContainerDnD
                      id="opcion1"
                      className="drag__image full-height full-width relative"
                    >
                      <BoxDnD
                        key="1"
                        id="drag1"
                        draggable="true"
                        dragStart={dragStart}
                        dragEnd={dragEnd}
                        dragOverOption={dragOverOption}
                        img={chupetin1}
                      />
                      <BoxDnD
                        key="2"
                        id="drag2"
                        draggable="true"
                        dragStart={dragStart}
                        dragEnd={dragEnd}
                        dragOverOption={dragOverOption}
                        img={chupetin2}
                      />
                      <BoxDnD
                        key="3"
                        id="drag3"
                        draggable="true"
                        dragStart={dragStart}
                        dragEnd={dragEnd}
                        dragOverOption={dragOverOption}
                        img={chupetin3}
                      />
                      <BoxDnD
                        key="4"
                        id="drag4"
                        draggable="true"
                        dragStart={dragStart}
                        dragEnd={dragEnd}
                        dragOverOption={dragOverOption}
                        img={chupetin4}
                      />
                      <BoxDnD
                        key="5"
                        id="drag5"
                        draggable="true"
                        dragStart={dragStart}
                        dragEnd={dragEnd}
                        dragOverOption={dragOverOption}
                        img={chupetin5}
                      />
                    </ContainerDnD>
                  </div>
                  <div className="container__barra full-width full-height">
                    <img
                      src={barra}
                      alt=""
                      className="full-width full-height"
                    />
                  </div>
                </div>
              </div>

              <div className="container__drop absolute" id="item1">
                <ContainerDnD
                  key="drop1"
                  id="drop1"
                  className="image__drop"
                  drop={drop}
                  dragOver={dragOver}
                ></ContainerDnD>
              </div>
              <div className="container__drop absolute" id="item2">
                <ContainerDnD
                  key="drop2"
                  id="drop2"
                  className="image__drop"
                  drop={drop}
                  dragOver={dragOver}
                ></ContainerDnD>
              </div>
              <div className="container__drop absolute" id="item3">
                <ContainerDnD
                  key="drop3"
                  id="drop3"
                  className="image__drop"
                  drop={drop}
                  dragOver={dragOver}
                ></ContainerDnD>
              </div>
              <div className="container__drop absolute" id="item4">
                <ContainerDnD
                  key="drop4"
                  id="drop4"
                  className="image__drop"
                  drop={drop}
                  dragOver={dragOver}
                ></ContainerDnD>
              </div>
              <div className="container__drop absolute" id="item5">
                <ContainerDnD
                  key="drop5"
                  id="drop5"
                  className="image__drop"
                  drop={drop}
                  dragOver={dragOver}
                ></ContainerDnD>
              </div>

              <div
                id={click ? (checkCircul1 ? "item6t" : "item6f") : "item6"}
                className="container__drop absolute"
              ></div>
              <div
                id={click ? (checkCircul2 ? "item7t" : "item7f") : "item7"}
                className="container__drop absolute"
              ></div>
              <div
                id={click ? (checkCircul3 ? "item8t" : "item8f") : "item8"}
                className="container__drop absolute"
              ></div>
              <div
                id={click ? (checkCircul4 ? "item9t" : "item9f") : "item9"}
                className="container__drop absolute"
              ></div>
              <div
                id={click ? (checkCircul5 ? "item10t" : "item10f") : "item10"}
                className="container__drop absolute"
              ></div>
              <div className="container__drop absolute" id="item11">
                <p className="puntuacion-titulo">Puntuación :</p>
                <div className="puntuacion-titulo">{puntuacion}</div>
              </div>
              <div className="container__drop absolute" id="item12">
                <div className="puntuacion-titulo">{reloj}</div>
              </div>
              {
                <div className="container__drop absolute" id="item13">
                  <p className="puntuacion-titulo">Intentos:</p>
                  <div className="puntuacion-titulo">{intento}</div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      <div className="Container-button">
        {active ? (
          <button className="css-button css-button-gradient css-button-gradient--7">
            {" "}
            Verificar
          </button>
        ) : puntuacion !== 20 ? (
          <button className="css-button2 css-button-gradient css-button-gradient--7">
            {" "}
            Intentar Nuevamente
          </button>
        ) : (
          <button className="css-button css-button-gradient css-button-gradient--7">
            {" "}
            Verificar
          </button>
        )}
      </div>

      {/* <FooterButtons setShowAnswer={setCorrectAnswer} />*/}
    </div>
  );
}

export default App;
