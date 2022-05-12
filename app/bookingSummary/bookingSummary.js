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
$("#finalPrice").text("$" + bookingSummary.finalPrice);

$("#gym").text(bookingSummary.gym == 1 ? "Yes" : "No");
$("#pool").text(bookingSummary.pool == 1 ? "Yes" : "No");
$("#meals").text(bookingSummary.meals == 1 ? "Yes" : "No");
$("#parking").text(bookingSummary.parking == 1 ? "Yes" : "No");
$("#breakfast").text(bookingSummary.breakfast == 1 ? "Yes" : "No");

