

function jsonbase(){
    fetch("https://dummyjson.com/products")
.then(response => response.json())
.then(data => {
    let product = data.products;
for (let i = 0; i < product.length; i++) {
  console.log(product[i]);
}
}

   )
  
.catch(error => console.table("Erreur : " + error));
}



export default jsonbase