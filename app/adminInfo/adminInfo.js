var settings = {
  url: "http://ec2-18-144-53-161.us-west-1.compute.amazonaws.com:8090/getAllBookings",
  method: "GET",
  timeout: 0,
  headers: {
    user: '{id : "some"}',
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);

  let bookingHistory = response;

  for (let i = 0; i < bookingHistory.length; i++) {
    if (bookingHistory[i].bookingStatus != "Deleted") {
      $("#bookings").append(
        '<div class="card"><div class="card-header"><p>Booking Id : <span id="bookingId-' +
          i +
          '"> ' +
          bookingHistory[i].bookingId +
          ' </span></p></div><div class="card-body"><ul><li>Booking Status : <span id="bookingStatus-' +
          i +
          '">' +
          bookingHistory[i].bookingStatus +
          '</span></li><li>Check In Date : <span id="checkInDate-' +
          i +
          '">' +
          bookingHistory[i].checkinDate +
          '</span></li><li>Check Out Date : <span id="checkOutDate-' +
          i +
          '">' +
          bookingHistory[i].checkoutDate +
          '</span></li>   <li>Number of Single Rooms : <span id="singleRooms' +
          i +
          '">' +
          bookingHistory[i].singleroomsBooked +
          '</span></li><li>Number of Double Rooms : <span id="doubleRooms' +
          i +
          '">' +
          bookingHistory[i].doubleroomsBooked +
          '</span></li><li>Number of Suites : <span id="suites' +
          i +
          '">' +
          bookingHistory[i].suitesBooked +
          '</span></li>  <address style="padding-top: 1%"><strong>Email ID: </strong><br /><p><span id="bookingEmail' +
          i +
          '">' +
          bookingHistory[i].bookingEmail +
          '</span></p></address><address><strong>Final Price: </strong><br /><p><span id="finalPrice' +
          i +
          '">$' +
          bookingHistory[i].finalPrice +
          '</span></p></address></ul><button class="btn btn-danger" onclick="deleteBooking(this)" id="deleteButton-' +
          i
      );
    }
  }
});

// let bookingHistory = JSON.parse(localStorage.getItem("bookingHistory"));

// for (let i = 0; i < bookingHistory.length; i++) {
//   if (bookingHistory[i].bookingStatus != "Deleted") {
//     $("#bookings").append(
//       '<div class="card"><div class="card-header"><p>Booking Id : <span id="bookingId-' +
//         i +
//         '"> ' +
//         bookingHistory[i].bookingId +
//         ' </span></p></div><div class="card-body"><ul><li>Booking Status : <span id="bookingStatus-' +
//         i +
//         '">' +
//         bookingHistory[i].bookingStatus +
//         '</span></li><li>Check In Date : <span id="checkInDate-' +
//         i +
//         '">' +
//         bookingHistory[i].checkinDate +
//         '</span></li><li>Check Out Date : <span id="checkOutDate-' +
//         i +
//         '">' +
//         bookingHistory[i].checkoutDate +
//         '</span></li>   <li>Number of Single Rooms : <span id="singleRooms' +
//         i +
//         '">' +
//         bookingHistory[i].singleroomsBooked +
//         '</span></li><li>Number of Double Rooms : <span id="doubleRooms' +
//         i +
//         '">' +
//         bookingHistory[i].doubleroomsBooked +
//         '</span></li><li>Number of Suites : <span id="suites' +
//         i +
//         '">' +
//         bookingHistory[i].suitesBooked +
//         '</span></li>  <address style="padding-top: 1%"><strong>Email ID: </strong><br /><p><span id="bookingEmail' +
//         i +
//         '">' +
//         bookingHistory[i].bookingEmail +
//         '</span></p></address><address><strong>Final Price: </strong><br /><p><span id="finalPrice' +
//         i +
//         '">$' +
//         bookingHistory[i].finalPrice +
//         '</span></p></address></ul><button class="btn btn-danger" onclick="deleteBooking(this)" id="deleteButton-' +
//         i +
//         '">Delete</button></div></div>'
//     );
//   }
// }

// function reloadLocalStorage() {
//   //localStorage.removeItem("bookingHistory");
//   const userId = localStorage.getItem("userId");
//   var settings = {
//     url: "http://ec2-18-144-53-161.us-west-1.compute.amazonaws.com:8090/getAllUserBookings/" + userId,
//     method: "GET",
//     timeout: 0,
//   };

//   $.ajax(settings).done(function (response) {
//     localStorage.setItem("bookingHistory", JSON.stringify(response));
//   });

//   window.location.href = "bookingDeleted.html";

//   // $("#hiddenButton").click();
// }

// function deleteBooking(elem) {
//   var settings = {
//     url:
//       "http://ec2-18-144-53-161.us-west-1.compute.amazonaws.com:8090/deleteBooking/" +
//       bookingHistory[elem.id.split("-")[1]].bookingId,
//     method: "DELETE",
//     timeout: 0,
//   };

//   $.ajax(settings).done(function (response) {
//     reloadLocalStorage();
//   });
// }

// function reloadPage() {
//   location.reload(true);
// }
