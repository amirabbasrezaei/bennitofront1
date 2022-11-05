import classNames from "classnames";
import { FC } from "react";
type propsType = {
  isTop?: boolean;
  theme?: string;
};
// bg-red-500
const Toolbar: FC<propsType> = ({ children, isTop = true, theme }) => {
  return (
    <div
      className={classNames(
        "h-10 w-full px-6",
        "flex flex-row-reverse justify-between items-center",
        `bg-${theme}-500`
      )}
    >
      {children}
    </div>
  );
};
export default Toolbar;
