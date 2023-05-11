

function jsonbase(){
    fetch("https://dummyjson.com/products")
.then(response => response.json())
.then(data => {
    let product = data.products;
for (let i = 0; i < product.length; i++) {
 
  const para = document.createElement("p")
  para.textContent = `titre ${product[i].title}`
    para.value = [product[i].title,  product[i].description, product[i].category];
    
    console.log(para.value)
}
}

   )
  
.catch(error => console.table("Erreur : " + error));
}



export default jsonbase