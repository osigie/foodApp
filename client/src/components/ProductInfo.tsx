
import {ReactNode} from "react"
import Wrapper from "../assets/wrappers/ProductInfo"


type ProductInfoProps = {
  icon: ReactNode,
  text: string;
};  

const ProductInfo = (props: ProductInfoProps) => {
  return (
   <Wrapper> 
       <span className = "icon">{props.icon}</span>
       <span className = "text">{props.text}</span>
   </Wrapper>
  )
}

export default ProductInfo