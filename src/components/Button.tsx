import { ReactNode } from "react";
import "./Button.css";
interface Props {
  children: ReactNode;
  onclick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({ children, onclick }: Props) => {
  return (
    <div>
      <button type="button" onClick={onclick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
