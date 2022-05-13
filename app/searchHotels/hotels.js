const form = document.getElementById("searchForm");

console.log(form);

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchQuery = form.elements["search_info"].value;

    console.log(searchQuery);

    // if valid, submit the form.
    // console.log(fname + " type " +user_type);

    var settings = {
      url:
        "http://http://ec2-18-144-53-161.us-west-1.compute.amazonaws.com:8090/searchHotels?searchkey=" +
        searchQuery,
      method: "GET",
      timeout: 0,
      headers: {
        Cookie: document.cookie,
      },
      credentials: "same-origin",
    };

    $.ajax(settings).done(function (response) {
      if (response.length != 0) {
        console.log(response);
        JSON.stringify;
        localStorage.setItem("infoReceived", JSON.stringify(response));
        window.location.href = "../hotelSearchResults/hotelSearchResults.html";
      } else {
        alert("No hotels found!");
      }
    });
  });
}
