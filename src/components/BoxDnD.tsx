import React from "react";

interface IProps {
  id: string;
  boxName?: string;
  img?: string;
  className?: string;
  draggable: boolean | "true" | "false" | undefined;
  dragStart: (e: any) => void;
  dragEnd: (e: any) => void;
  dragOverOption: (e: any) => void;
  zIndex?: number;
}

export const BoxDnD: React.FC<IProps> = (props) => {
  if (props.zIndex !== undefined) {
    return (
      <div
        id={props.id}
        className={`dnd-box ${props.className}`}
        draggable={props.draggable}
        onDragStart={props.dragStart}
        onDragOver={props.dragOverOption}
        onDragEnd={props.dragEnd}
        style={{ zIndex: props.zIndex, position: "absolute" }}
      >
        {props.img ? <img src={props.img} alt="" /> : props.boxName}
      </div>
    );
  } else {
    return (
      <div
        id={props.id}
        className="dnd-box"
        draggable={props.draggable}
        onDragStart={props.dragStart}
        onDragOver={props.dragOverOption}
        onDragEnd={props.dragEnd}
      >
        {props.img ? <img src={props.img} alt="" /> : props.boxName}
      </div>
    );
  }
};
