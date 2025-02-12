console.log("archivo");

const socket = io();

socket.on("users", (data) => {
  const usersTemplate = data
    .map(
      (each) => `<article class="card my-2" style="width: 18rem;">
        ${
          each.avatar
            ? `<img src="${each.avatar}" class="card-img-top" alt=${each._id} style="height: 18rem; object-fit: cover">`
            : `<img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt=${each._id} style="height: 18rem; object-fit: cover">`
        }
        <div class="card-body">
            <h5 class="card-title">${each.email}</h5>
        </div>
        </article>
      `
    )
    .join("");
  document.querySelector("#users").innerHTML = usersTemplate;
});

document.querySelector("#register").addEventListener("click", async () => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const avatar = document.querySelector("#avatar").value;
  const user = { email, password, avatar };
  socket.emit("new user", user);
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
  document.querySelector("#avatar").value = "";
});