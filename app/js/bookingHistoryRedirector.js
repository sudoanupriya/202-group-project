function getBooking() {
  const userId = localStorage.getItem("userId");
  var settings = {
    url:
      "http://http://ec2-18-144-53-161.us-west-1.compute.amazonaws.com:8090/getAllUserBookings/" +
      userId,
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    localStorage.setItem("bookingHistory", JSON.stringify(response));
    window.location.href = "../bookingHistory/bookingHistory.html";
  });
}
