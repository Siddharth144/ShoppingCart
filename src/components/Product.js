import React from 'react'

const Product = ({state , dispatch}) => {

  const {products,cart}=state;
  return (
    <div
    style={{
              display:"flex",
              flexWrap:"wrap",
              justifyContent:"space-evenly",
              width:"80%",
          }}
    
    >
      {products.map((prod)=>(
        <div  key={prod.id}
         style={{
          display:"flex",
              flexDirection:"column",
             margin:10,
             border:"1px solid grey",
             padding:10,
             width:"30%",
             marginTop:10,
             gap:10
         }}
        >
          <img 
          src= {prod.thumbnail}
          alt={prod.title}
          style={{height :200 , objectFit :"cover"}}
          />

          <div style={{display : "flex" , justifyContent :"space-between"}}>
           <span>{prod.title}</span>
           <b>${prod.price}</b>
          </div>

          {/* add to cart logic  */}

          {cart.some(p=>p.id===prod.id)?   <button 
            style={{
              padding :5,
              border :0,
              borderRadius :5,
              backgroundColor:" Red",
              color:"white"

            }}
             

            onClick={()=>dispatch ({
              type:"REMOVE_FROM_CART",
              payload :{
                id :prod.id,
                // title:prod.title,
                // thumbnail:prod.thumbnail,
                // qty:1,
                // price:prod.price,
              },
            })}
            
          >
            Remove from cart
          </button>: 
          <button 
            style={{
              padding :5,
              border :0,
              borderRadius :5,
              backgroundColor:"green",
              color:"white"

            }}

            onClick={()=>dispatch ({
              type:"ADD_TO_CART",
              payload :{
                id :prod.id,
                title:prod.title,
                thumbnail:prod.thumbnail,
                qty:1,
                price:prod.price,
              },
            })}
          >
            Add to cart
          </button>
 }

       
        </div>
      ))}
    </div>
  )
}

export default Product










// import React from 'react'

// const Product = ( {products , cart}) => {
   

//   return (
//     <div 
//     // key={prod.id}
//     // style={{
//     //     display:"flex",
//     //     flexWrap:"wrap",
//     //     justifyContent:"space-evenly",
//     //     width:"80%",
//     // }}
//     >
//  <div>
//   {products.map((prod)=>{
//     return <div>
//       {prod.title}
//     </div>
//   })}
//  </div>

//     </div>
//   )
// }

// export default Product