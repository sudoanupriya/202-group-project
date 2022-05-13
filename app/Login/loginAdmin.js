const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (event) {
    // stop form submission
    event.preventDefault();

    const email = form.elements["email"].value;
    const password = form.elements["password"].value;

    var settings = {
      url: "http://ec2-18-144-53-161.us-west-1.compute.amazonaws.com:8090/userLogin",
      method: "POST",
      timeout: 0,
      headers: {
        "Content-Type": "application/json",
        Cookie: document.cookie,
      },
      data: JSON.stringify({
        userName: email,
        password: password,
      }),
    };

    $.ajax(settings).done(function (response) {
      console.log(response);

      //Thread.sleep(1000);

      if (response.email == email) {
        localStorage.setItem("email", response.email);
        localStorage.setItem("userId", response.id);
        localStorage.setItem("user", JSON.stringify(response));
        window.location.href = "../adminInfo/adminInfo.html";
      } else {
        alert(response);
      }
    });

    //
  });
}
