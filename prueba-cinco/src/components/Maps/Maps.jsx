import { useEffect, useState } from "react";
import { getProducts } from "../../productMock";
import { Card } from "../Card/Card";

export const Maps = () => {

const [products, setProducts] = useState([]);
const [isLoading, setIsLoading]= useState(true);
useEffect(()=> {
    getProducts()
    .then(resp => {{
    console.log(resp)
    setProducts(resp)
setIsLoading(!isLoading)
  }})
    .catch(error => console.log(error))
}, [])
  return (
    <div>
<h1>Mostrar productos con el map</h1>
{
  isLoading ? <h3>Cargando productos...</h3>:

  products.map(product => <Card key ={product.id} name ={product.name} description={product.description}/>
  )
} 
</div>
  )
}