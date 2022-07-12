import React from "react";

interface IProps {
  id: string;
  className: string;
  text?: string;
  drop?: (e: any) => void;
  dragOver?: (e: any) => void;
  children?: JSX.Element | JSX.Element[];
}

export const ContainerDnD: React.FC<IProps> = (props) => {
  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={props.drop}
      onDragOver={props.dragOver}
    >
      {props.text ? <div className="title">{props.id}</div> : null}

      {props.children}
    </div>
  );
};
