import { NavLink } from "react-router";
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const product = [
    {
      id: 1,
      name: "RTX 5070",
      Description: "The NVIDIA GeForce RTX 5070 is a high-performance graphics card featuring 12GB of GDDR7 memory and the Blackwell architecture",
      price: 20000,
      imgurl: "https://store.supermicro.com/us_en/pub/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/1/-/1-pny-rtx-5070-std-triple-fan-ra.png"
    },
    {
      id: 2,
      name: "Smasung S Ultra",
      Description: "The Samsung Galaxy S26 Ultra is a flagship smartphone featuring a 6.9-inch display, Snapdragon 8 Elite Gen 5 processor, and a built-in privacy display.",
      price: 500000,
      imgurl: "https://images.samsung.com/pk/smartphones/galaxy-s26-ultra/images/galaxy-s26-ultra-features-ecosystem-mo.jpg?imbypass=true"
    },
  ];
  return (
    <>
      <div>
        <h1>Products List</h1>
        <div>
          {product.map((product) => {
            return (
              <div key={product.id}>
                <h2 key={product.name}></h2>
                <p key={product.price.toFixed(2)}></p>
                <p key={product.Description}></p>
                <img src={product.imgurl} alt={product.name} />
                <NavLink to={`/product/${product.id}`}>Details</NavLink>


              </div>
            )
          })}
        </div>
      </div>
    </>

  )
}

export default App
