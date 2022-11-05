import classNames from "classnames";
import Router from "next/router";
import { FC, MouseEventHandler } from "react";
type propsType = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
const defaultHandler = () => {
  // TODO Maybe change later
  Router.back();
};
const BackButton: FC<propsType> = ({ children, onClick = defaultHandler }) => {
  return <button onClick={onClick}>back</button>;
};
export default BackButton;
