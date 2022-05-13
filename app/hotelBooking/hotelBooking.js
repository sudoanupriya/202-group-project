const form = document.getElementById("bookForm");

console.log(form);
flag = localStorage.getItem("modifyBooking");

if (flag == "True") {
  $("#pageHeading").html("Modify Booking");
  $("#pageDescription").html("Please make changes to your booking");

  let bookingSummary = JSON.parse(localStorage.getItem("bookingHistory"));

  // find the booking summary to be modified
  let bookingIdToBeModified = localStorage.getItem("bookingToBeModified");

  let bookingToBeModified = null;
  for (let i = 0; i < bookingSummary.length; i++) {
    if (bookingIdToBeModified == bookingSummary[i].bookingId) {
      bookingToBeModified = bookingSummary[i];
      break;
    }
  }

  $("#adultCount").val(bookingToBeModified.adultCount);
  $("#childrenCount").val(bookingToBeModified.childrenCount);
  $("#singleroomsBooked").val(bookingToBeModified.checkinDate);
  $("#checkOutDate").text(bookingToBeModified.checkoutDate);
  $("#singleroomsBooked").val(bookingToBeModified.singleroomsBooked);
  $("#doubleroomsBooked").val(bookingToBeModified.doubleroomsBooked);
  $("#suitesBooked").val(bookingToBeModified.suitesBooked);

  bookingToBeModified.breakfast == 1
    ? $("#breakfast").prop("checked", true)
    : $("#breakfast").prop("checked", false);
  bookingToBeModified.gym == 1
    ? $("#gym").attr("checked", true)
    : $("#gym").prop("checked", false);
  bookingToBeModified.pool == 1
    ? $("#pool").prop("checked", true)
    : $("#pool").prop("checked", false);
  bookingToBeModified.parking == 1
    ? $("#parking").prop("checked", true)
    : $("#parking").prop("checked", false);
  bookingToBeModified.meals == 1
    ? $("#meals").prop("checked", true)
    : $("#meals").prop("checked", false);

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const adultCount = form.elements["adultCount"].value;
      const childrenCount = form.elements["childrenCount"].value;
      const checkinDate = form.elements["checkinDate"].value;
      const checkoutDate = form.elements["checkoutDate"].value;
      const singleroomsBooked = form.elements["singleroomsBooked"].value;
      const doubleroomsBooked = form.elements["doubleroomsBooked"].value;
      const suitesBooked = form.elements["suitesBooked"].value;
      //const bookingEmail = form.elements["bookingEmail"].value;
      const loggedInUserEmail = localStorage.getItem("email");
      const hotelId = localStorage.getItem("hotelId");
      const pool = $("#pool").is(":checked") ? 1 : 0;
      const gym = $("#gym").is(":checked") ? 1 : 0;
      const parking = $("#parking").is(":checked") ? 1 : 0;
      const meals = $("#meals").is(":checked") ? 1 : 0;
      const breakfast = $("#breakfast").is(":checked") ? 1 : 0;
      //console.log(loggedInUserEmail);
      var settings = {
        url: "http://http://ec2-18-144-53-161.us-west-1.compute.amazonaws.com:8090/createBooking",
        method: "POST",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
          Cookie: "SESSION=ZWRkYzI0ZDctMzJmZS00ODRjLWJkZDgtN2RlMDU2ZmM3NThm",
        },
        data: JSON.stringify({
          newBooking: {
            userId: localStorage.getItem("userId"),
            hotelId: hotelId,
            adultCount: adultCount,
            childrenCount: childrenCount,
            checkinDate: checkinDate,
            checkoutDate: checkoutDate,
            singleroomsBooked: singleroomsBooked,
            doubleroomsBooked: doubleroomsBooked,
            suitesBooked: suitesBooked,
            bookingEmail: loggedInUserEmail,
            pool: pool,
            gym: gym,
            parking: parking,
            meals: meals,
            breakfast: breakfast,
          },
          user: JSON.parse(localStorage.getItem("user")),
        }),
      };

      $.ajax(settings).done(function (response) {
        console.log(response);
        if (response.statusMessage == "Booking successful.") {
          localStorage.setItem("bookingSummary", JSON.stringify(response));
          window.location.href = "../bookingSummary/bookingSummary.html";
        } else {
          alert(response);
        }
      });
    });
    localStorage.removeItem("modifyBooking");
  }
} else {
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const adultCount = form.elements["adultCount"].value;
      const childrenCount = form.elements["childrenCount"].value;
      const checkinDate = form.elements["checkinDate"].value;
      const checkoutDate = form.elements["checkoutDate"].value;
      const singleroomsBooked = form.elements["singleroomsBooked"].value;
      const doubleroomsBooked = form.elements["doubleroomsBooked"].value;
      const suitesBooked = form.elements["suitesBooked"].value;
      //const bookingEmail = form.elements["bookingEmail"].value;
      const loggedInUserEmail = localStorage.getItem("email");
      const hotelId = localStorage.getItem("hotelId");
      const pool = $("#pool").is(":checked") ? 1 : 0;
      const gym = $("#gym").is(":checked") ? 1 : 0;
      const parking = $("#parking").is(":checked") ? 1 : 0;
      const meals = $("#meals").is(":checked") ? 1 : 0;
      const breakfast = $("#breakfast").is(":checked") ? 1 : 0;
      //console.log(loggedInUserEmail);
      var settings = {
        url: "http://http://ec2-18-144-53-161.us-west-1.compute.amazonaws.com:8090/createBooking",
        method: "POST",
        timeout: 0,
        headers: {
          "Content-Type": "application/json",
          Cookie: "SESSION=ZWRkYzI0ZDctMzJmZS00ODRjLWJkZDgtN2RlMDU2ZmM3NThm",
        },
        data: JSON.stringify({
          newBooking: {
            userId: localStorage.getItem("userId"),
            hotelId: hotelId,
            adultCount: adultCount,
            childrenCount: childrenCount,
            checkinDate: checkinDate,
            checkoutDate: checkoutDate,
            singleroomsBooked: singleroomsBooked,
            doubleroomsBooked: doubleroomsBooked,
            suitesBooked: suitesBooked,
            bookingEmail: loggedInUserEmail,
            pool: pool,
            gym: gym,
            parking: parking,
            meals: meals,
            breakfast: breakfast,
          },
          user: JSON.parse(localStorage.getItem("user")),
        }),
      };

      $.ajax(settings).done(function (response) {
        console.log(response);
        if (response.statusMessage == "Booking successful.") {
          localStorage.setItem("bookingSummary", JSON.stringify(response));
          window.location.href = "../bookingSummary/bookingSummary.html";
        } else {
          alert(response);
        }
      });
    });
  }
}
let bookingSummary = JSON.parse(localStorage.getItem("bookingSummary"));

if (bookingSummary.rewardPoints) {
  $("#rewardPoints").text(bookingSummary.rewardPoints);
}
