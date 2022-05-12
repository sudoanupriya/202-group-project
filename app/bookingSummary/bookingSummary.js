let bookingSummary = JSON.parse(localStorage.getItem("bookingSummary"));

$("#bookingId").text(bookingSummary.bookingId + " ");
$("#rewardPoints").text(bookingSummary.rewardPoints);

$("#numAdults").text(bookingSummary.adultCount);
$("#numChildren").text(bookingSummary.childrenCount);
$("#checkInDate").text(bookingSummary.checkinDate);
$("#checkOutDate").text(bookingSummary.checkoutDate);
$("#singleRooms").text(bookingSummary.singleroomsBooked);
$("#doubleRooms").text(bookingSummary.doubleroomsBooked);
$("#suites").text(bookingSummary.suitesBooked);
$("#bookingEmail").text(bookingSummary.bookingEmail);

let flag = localStorage.getItem("useRewardPoints");

//alert(flag);

if (flag == "True") {
  //alert("in if");
  let finalPrice = bookingSummary.finalPrice;
  let reward = bookingSummary.rewardPoints;

  let price = parseFloat(finalPrice) - parseFloat(reward);
  if (price <= 0) {
    price = 0;
  }
  //alert(finalPrice);
  $("#finalPrice").text(
    "[Initial Price]$" +
      finalPrice +
      " - [Reward points used]$" +
      reward +
      " = " +
      "[Final Price]$" +
      price
  );

  bookingSummary.rewardPoints = "0";

  localStorage.setItem("useRewardPoints", "False");
} else {
  $("#finalPrice").text("$" + bookingSummary.finalPrice);
}

$("#gym").text(bookingSummary.gym == 1 ? "Yes" : "No");
$("#pool").text(bookingSummary.pool == 1 ? "Yes" : "No");
$("#meals").text(bookingSummary.meals == 1 ? "Yes" : "No");
$("#parking").text(bookingSummary.parking == 1 ? "Yes" : "No");
$("#breakfast").text(bookingSummary.breakfast == 1 ? "Yes" : "No");
