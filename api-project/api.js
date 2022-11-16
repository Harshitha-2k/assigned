fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    let datas = "";
    data.map((items) => {
    datas = datas + `<p>${items.id}</p>
    <p>${items.title}</p>`
      document.body.innerHTML = datas;
    })
  });
    
