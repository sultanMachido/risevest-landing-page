import { ReactNode } from "react";

const Button = ({children,style}:{children:ReactNode;style:string}) => {
    return ( <button className={style}>{children}</button> );
}
 
export default Button;