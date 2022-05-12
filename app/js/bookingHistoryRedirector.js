function getBooking() {
    const userId = localStorage.getItem("userId");
    var settings = {
        "url": "http://localhost:8090/getAllUserBookings/"+userId,
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
        localStorage.setItem("bookingHistory", JSON.stringify(response))
        window.location.href = "../bookingHistory/bookingHistory.html";
      });
    
}