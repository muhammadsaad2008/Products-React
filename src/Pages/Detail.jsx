import { useParams } from "react-router";
function Detail() {
    const param=useParams();
    const id = param.id;
    const products = [
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
    const ProductsInfo = products.filter(
        (product)=>product.id === parseInt(id)
    )[0];
    return(
      <div>
        <h1>Detail for Product ID:{id}</h1>
        <p>{ProductsInfo.name}</p>
        <p>{ProductsInfo.Description}</p>
        <p>{ProductsInfo.price}</p>
        <img src={ProductsInfo.imgurl} alt={ProductsInfo.name} width={200} />
      </div>
    )
}
export default Detail;