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

export default function App() {
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
  //CONTAINER
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

  const validacion = () => {
    const arrayFigures = [];
    let puntuacion = 0;
    setClick(true);
    setClickReloj(true);
    //Extraer el id del elemento 1
    let item1: HTMLMediaElement | null = document.querySelector("#item1");
    let dropselectItem1 = item1?.querySelector("#drop1");
    let idfigItem1 = dropselectItem1?.children[0]?.getAttribute("id");
    arrayFigures.push(idfigItem1);

    console.log(item1);
    //Extraer el id del elemento 2

    let item2: HTMLMediaElement | null = document.querySelector("#item2");
    let dropselectItem2 = item2?.querySelector("#drop2");
    let idfigItem2 = dropselectItem2?.children[0]?.getAttribute("id");
    arrayFigures.push(idfigItem2);

    //Extraer el id del elemento 3

    let item3: HTMLMediaElement | null = document.querySelector("#item3");
    let dropselectItem3 = item3?.querySelector("#drop3");
    let idfigItem3 = dropselectItem3?.children[0]?.getAttribute("id");
    arrayFigures.push(idfigItem3);

    //Extraer el id del elemento 4

    let item4: HTMLMediaElement | null = document.querySelector("#item4");
    let dropselectItem4 = item4?.querySelector("#drop4");
    let idfigItem4 = dropselectItem4?.children[0]?.getAttribute("id");
    arrayFigures.push(idfigItem4);

    //Extraer el id del elemento 5

    let item5: HTMLMediaElement | null = document.querySelector("#item5");
    let dropselectItem5 = item5?.querySelector("#drop5");
    let idfigItem5 = dropselectItem5?.children[0]?.getAttribute("id");
    arrayFigures.push(idfigItem5);

    if (arrayFigures[0] === checkEtiquetas[0]) {
      setCheckCircul1(true);
      puntuacion = puntuacion + 4;
    }
    if (arrayFigures[1] === checkEtiquetas[1]) {
      setCheckCircul2(true);

      puntuacion = puntuacion + 4;
    }

    if (arrayFigures[2] === checkEtiquetas[2]) {
      setCheckCircul3(true);

      puntuacion = puntuacion + 4;
    }
    if (arrayFigures[3] === checkEtiquetas[3]) {
      setCheckCircul4(true);
      puntuacion = puntuacion + 4;
    }
    if (arrayFigures[4] === checkEtiquetas[4]) {
      setCheckCircul5(true);
      puntuacion = puntuacion + 4;
    }

    setPuntuacion(puntuacion);

    setActive(false);
    arrayFigures.splice(0, arrayFigures.length);
    console.log(arrayFigures);
  };

  const borrarEstilos = () => {
    setCheckCircul1(false);
    setCheckCircul2(false);
    setCheckCircul3(false);
    setCheckCircul4(false);
    setCheckCircul5(false);
    /* $("#drag1").remove();
    $("#drag2").remove();
    $("#drag3").remove();
    $("#drag4").remove();
    $("#drag5").remove();*/
    // añade el elemento creado y su contenido al DOM

    let div1 = document.createElement("div");
    div1.id = "drag1";
    div1.className = "dnd-box";
    div1.draggable = true;
    div1.ondragstart = dragStart;
    div1.ondragover = dragOverOption;
    div1.ondragend = dragEnd;

    var imagen1 = document.createElement("img");
    imagen1.src = chupetin1;
    const menu1: Element | null = document.querySelector("#opcion1");
    div1?.appendChild(imagen1);
    menu1?.appendChild(div1);

    let div2 = document.createElement("div");
    div2.id = "drag2";
    div2.className = "dnd-box";
    div2.draggable = true;
    div2.ondragstart = dragStart;
    div2.ondragover = dragOverOption;
    div2.ondragend = dragEnd;
    var imagen2 = document.createElement("img");
    imagen2.src = chupetin2;
    const menu2: Element | null = document.querySelector("#opcion1");
    div2?.appendChild(imagen2);
    menu2?.appendChild(div2);

    let div3 = document.createElement("div");
    div3.id = "drag3";
    div3.className = "dnd-box";
    div3.draggable = true;
    div3.ondragstart = dragStart;
    div3.ondragover = dragOverOption;
    div3.ondragend = dragEnd;
    var imagen3 = document.createElement("img");
    imagen3.src = chupetin3;
    const menu3: Element | null = document.querySelector("#opcion1");
    div3?.appendChild(imagen3);
    menu3?.appendChild(div3);

    let div4 = document.createElement("div");
    div4.id = "drag4";
    div4.className = "dnd-box";
    div4.draggable = true;
    div4.ondragstart = dragStart;
    div4.ondragover = dragOverOption;
    div4.ondragend = dragEnd;
    var imagen4 = document.createElement("img");
    imagen4.src = chupetin4;
    const menu4: Element | null = document.querySelector("#opcion1");
    div4?.appendChild(imagen4);
    menu4?.appendChild(div4);

    let div5 = document.createElement("div");
    div5.id = "drag5";
    div5.className = "dnd-box";
    div5.draggable = true;
    div5.ondragstart = dragStart;
    div5.ondragover = dragOverOption;
    div5.ondragend = dragEnd;
    var imagen5 = document.createElement("img");
    imagen5.src = chupetin5;
    const menu5: Element | null = document.querySelector("#opcion1");
    div5?.appendChild(imagen5);
    menu5?.appendChild(div5);

    setIntento(intento + 1);
    setClick(false);
    setActive(true);
    setClickReloj(false);
    setReloj(30);
    setPuntuacion(0);
  };
  const dragOver = (e: any) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (reloj === 0) {
      // window.location.reload();
    }
    const timer = click
      ? setTimeout(() => {}, 1000)
      : setTimeout(() => setReloj(reloj - 1), 1000);

    return () => clearTimeout(timer);
  }, [reloj, click]);
  //OPTIONS
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
          <button
            onClick={validacion}
            className="css-button css-button-gradient css-button-gradient--7"
          >
            {" "}
            Verificar
          </button>
        ) : puntuacion !== 20 ? (
          <button
            onClick={borrarEstilos}
            className="css-button2 css-button-gradient css-button-gradient--7"
          >
            {" "}
            Intentar Nuevamente
          </button>
        ) : (
          <button
            onClick={validacion}
            className="css-button css-button-gradient css-button-gradient--7"
          >
            {" "}
            Verificar
          </button>
        )}
      </div>

      {/* <FooterButtons setShowAnswer={setCorrectAnswer} />*/}
    </div>
  );
}
