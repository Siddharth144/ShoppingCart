
import './App.css';
import axios from "axios"
 import {useEffect, useReducer} from "react"
import { cartReducer } from './reducers/cartReducer';
import Product from './components/Product';
import Cart from './components/Cart';
function App() {

  const [state, dispatch] = useReducer(cartReducer,{
    products:[],
    cart : []
  })
 console.log(state);

  const fetchProducts = async()=>{
       const {data} = await axios.get("https://dummyjson.com/products")
      //  console.log(data.products);

       dispatch({
        type :"ADD_PRODUCTS",
        payload:data.products,
       })
  }
useEffect(()=>{
  fetchProducts();
},[])
  

  return (
    <div  style={{ display:'flex'}}>
     <Product  state={state} dispatch={dispatch}/>
    <Cart  state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;











// using fetch Api

// const Api="https://dummyjson.com/products";
 
// const fetchProducts=async(url)=>{
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data);
// }

// useEffect(()=>{
// fetchProducts(Api)
// },[])