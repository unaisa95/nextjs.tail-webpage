import React from 'react'

const watches = () => {
const watcheData =[
  
  { id :1,name :"Rolex",price:12000,description:"Luxury watch",image:"/Rolex1.jpg"},
  { id :2,name :"Omega",price:8000,description:"Sporty design",image:"/omega2.jpg"},
  { id :3,name :"Patek Philippe",price:25000,description:"Elegant timepiece",image:"/patek-3.jpg"},
  { id :4,name :"TAG Heuer",price:5000,description:"Sporty and stylish",image:"/Tag4.jpg"},
  { id :5,name :"Breitling",price:7000,description:"Bold and rugged",image:"/breitiling3.jpg"},
  { id :6,name :"Seiko",price:1000,description:"Affordable and reliable",image:"/Seiko.jpg"},

]



  return (
    <div>
      <div className='watches'>
      {watcheData.map((watch)=> (
      <div key={watch.id} className='watch-card'>
      <img  src={watch.image} alt={watch.name}/>
      <h3>{watch.name}</h3>
      <p>{watch.description}</p>
      <div className='price'>${watch.price}</div>
      <button>Add to Cart</button>
      

      </div>
      ))}
      </div>
    </div>
  )
}

export default watches
