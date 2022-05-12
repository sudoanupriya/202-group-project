const rowClass = document.querySelector(".row");

let searchResult = JSON.parse(localStorage.getItem("infoReceived"));

console.log(searchResult);

for (let i = 0; i < searchResult.length; i++) {
  $("#hotelList").append(
    '<div class="card text-white bg-warning mb-12 col-md-12" style="margin-bottom: 50px" ><div class="card-body"><img src="../image/hotel.jpeg" class="card-img-top" alt="..." style="width: 500px; height: 300px; padding-bottom: 2%;"><h5 class="card-title">' +
      searchResult[i]["hotelName"] +
      '</h5><p class="card-text">Rooms starting from $' +
      searchResult[i]["singlePrice"] +
      "</br>Hotel Address : " +
      searchResult[i]["address"] +
      '</p><button id="button' +
      i +
      '" data-hotelid="' +
      searchResult[i]["hotelId"] +
      '" class="btn btn-info">Select Hotel</button></div></div>'
  );

  //   let div = document.createElement("div");

  //   div.classList.add("childDiv" + i.toString());

  //   let img = document.createElement("img");
  //   img.src =
  //     "/Users/dsk/Documents/Dsk/Github/team-project-ackermen/app/StaticResources/logo.png";
  //   console.log(img);
  //   img.setAttribute("width", "100px");
  //   img.setAttribute("height", "100px");

  //   let h2 = document.createElement("h2");
  //   h2.textContent = "" + searchResult[i]["hotelName"];

  //   let p1 = document.createElement("p");
  //   p1.textContent = "from $ " + searchResult[i]["singlePrice"];

  //   let p2 = document.createElement("p");
  //   p2.textContent = "address is: " + searchResult[i]["address"];

  //   let button = document.createElement("button");
  //   button.setAttribute("type", "submit");
  //   button.setAttribute("font-size", "15px");
  //   button.textContent = "submit";
  //   button.setAttribute("id", "button" + i.toString());
  //   button.setAttribute("data-hotelid", searchResult[i]["hotelId"].toString());

  //   button.style.cssText =
  //     "background-color: white; border-radius: 8px; border: 2px solid #4CAF50";
  //   // button.cla

  //   div.appendChild(img);
  //   div.appendChild(h2);
  //   div.appendChild(p1);
  //   div.appendChild(p2);
  //   div.appendChild(button);

  //   rowClass.appendChild(div);

  console.log(searchResult[i]);
}

const btns = document.querySelectorAll("button[id^=button]");

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    localStorage.setItem(
      "hotelId",
      "" + event.target.getAttribute("data-hotelid")
    );
    window.location.href = "../hotelBooking/hotelBooking.html";
  });
});
