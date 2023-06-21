import React, { useEffect, useState } from 'react'

const Cart = ({state,dispatch}) => {
 const {cart} =state;

 const [total, setTotal] = useState(0)

 const changeQty=(id,qty)=>{
        dispatch ({
          type :"CHANGE_CART_QTY",
          payload:{
            id,
            qty
          }
        })
 }

 useEffect(()=>{
  setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty,0))
 },[cart])

  return (
    <div 
    style={{
              display:"flex",
              flexDirection:"column",
             margin:10,
             backgroundColor:"#ececec",
             padding:10,
             width:"20%"

          }}
    
    >
       <b style={{fontSize:30 , alignSelf :"center"}}>Cart</b>
       <b style={{ alignSelf :"center"}}>Subtotal:${total}</b>
      
{/*  render all cart items  */}

     {cart.length>0 ?(
      cart.map((prod)=>(
        <div 
        key={prod.title}
        style={{
          display:"flex",
          margin:5,
          border:"1px solid grey",
          padding:10,
          justifyContent:"space-between"
        }}
        >
          {/* Adding img and title ,price to cart  */}
             
             <div style={{display :"flex" , gap:10}}>
            
             <img 
          src= {prod.thumbnail}
          alt={prod.title}
          style={{width:70 , objectFit :"cover"}}
          />

          <div style={{display : "flex" ,flexDirection:"column", justifyContent :"space-evenly"}}>
           <span>{prod.title}</span>
           <b>${prod.price}</b>
          </div>
          {/* upper div */}
          </div>

          {/* another div */}
          <div style={{display :"flex" ,alignItems:"center", gap:10}}>
             <button onClick={()=>changeQty(prod.id, prod.qty-1)}> -</button>
             <button>{prod.qty}</button>
             <button  onClick={()=>changeQty(prod.id, prod.qty+1)}> +</button>
          </div>

        </div>
      ))
     ) : (
      <span style={{padding :20 , alignSelf :"center"}}>Empty Cart</span>
     )
      
     }

    </div>
  )
}

export default Cart