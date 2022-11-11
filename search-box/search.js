const input = document.querySelector('.input');
input.addEventListener('input', (e) => {
    const values = e.target.value;
    //Array of 5 objects added here.
    const array = [{ productName: "Mobile" }, { productName: "Laptop" }, { productName: "Watch" }, { productName: "Charger" }, { productName: "Shoes" }];
   //here we have to filter all items from an array.
    let variable = array.filter((items) => items.productName.toLowerCase().includes(values));
    let simple = variable[0].productName;
    if(simple){
    const ele = document.createElement('p');
    ele.innerHTML += simple;
    document.body.appendChild(ele);
    }
    console.log(simple)
})




