console.log("Real-Time Products Script Loaded!");

const socket = io();

socket.on("products", (data) => {
  const productsTemplate = data
    .map(
      (each) => `
        <article class="card my-2" style="width: 18rem;">
             <img src="${each.thumbnails ? each.thumbnails[0] : 'https://cdn-icons-png.flaticon.com/512/147/147142.png'}" class="card-img-top" alt="${each._id}" style="height: 18rem; object-fit: cover">
            <div class="card-body">
                <h5 class="card-title">${each.title}</h5>
                <p class="card-text">USD ${each.price}</p>
                <p class="card-text">Stock: ${each.stock}</p>
            </div>
        </article>`
    )
    .join("");
  document.querySelector("#products").innerHTML = productsTemplate;
});

document.querySelector("#productForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const title = document.querySelector("#title").value;
  const price = parseFloat(document.querySelector("#price").value);
  const stock = parseInt(document.querySelector("#stock").value);
  const category = document.querySelector("#category").value;
  const thumbnails = document.querySelector("#thumbnails").value ? [document.querySelector("#thumbnails").value] : [];

  const product = { title, price, stock, category, thumbnails };

  socket.emit("new product", product);

  document.querySelector("#productForm").reset();
});
