// Global Variables
var billAmount = $("#billAmount").val();
var tipPercent = $("#tipPercent").val();
var people = $("#people").val();
var totalTip = $("#totalTip").text();
var totalPrice = $("#totalPrice").text();
var splitTip = $("#splitTip").text();
var splitPrice = $("#splitPrice").text();
var totalSection = $("#totalSection");
var perPersonSection = $("#perPersonSection");

$(document).ready(function(){

  $("#splitBox").on("click", function(){


  	if (($(this).is(':checked') === true)){

    	$('#betweenDiv').css("display","inherit");
    	$('#betweenHelpText').css("display","inherit");
    	
  	}else {

  		$('#betweenDiv').css("display","none");
  		$('#betweenHelpText').css("display","none");
  		$('#perPersonSection').css("display","none");
  		$("#people").val("");
  	}

  })
	
});

function splitLogic(){

	$("#calculate").on("click", function(event){

		billAmount = $("#billAmount").val();
		tipPercent = $("#tipPercent").val();
		people = $("#people").val();

		totalTip = $("#totalTip").text();
		totalPrice = $("#totalPrice").text();
		splitTip = $("#splitTip").text();
		splitPrice = $("#splitPrice").text();
		totalSection = $("#totalSection");
		perPersonSection = $("#perPersonSection");

		event.preventDefault();
		

		if ((billAmount === "") || ((isFinite(billAmount) === false) || (Math.sign(billAmount) === -1) || (Math.sign(billAmount) === -0) || (Math.sign(billAmount) === NaN))) {

			alert("Bill Amount must be greater than 0");

			$('#totalSection').css("display","none");
			$('#perPersonSection').css("display","none");

			$("#totalTip").text("$" + "0.00");
			$("#totalPrice").text("$" + "0.00");
			$("#splitTip").text("$" + "0.00");
			$("#splitPrice").text("$" + "0.00");

			console.log(billAmount);
			console.log(tipPercent);
			console.log("Converted Bill Amount is finite " + (isFinite(parseFloat(billAmount))));
			console.log("Converted Tip is finite " + (isFinite(parseFloat(tipPercent))));
			console.log("Converted Bill Amount is finite " + Number.isFinite(parseFloat(billAmount)));
			console.log("Converted Tip is finite " + Number.isFinite(parseFloat(tipPercent)));
			console.log("Bill is finite " + (isFinite((billAmount))));
			console.log("Tip is finite " + (isFinite((tipPercent))));
			console.log("Bill Amount is finite " + Number.isFinite((billAmount)));
			console.log("Tip is finite " + Number.isFinite((tipPercent)));

		}else{

			if ((tipPercent === "") || (isFinite(tipPercent) === false) || (Math.sign(tipPercent) === -1) || (Math.sign(tipPercent) === -0) || (Math.sign(tipPercent) === NaN)) {

				var onlyBillSplit = Math.abs(parseFloat(billAmount))/Math.abs(parseFloat(people));

				console.log(billAmount);
				console.log(tipPercent);
				console.log("Converted Bill Amount is finite " + (isFinite(parseFloat(billAmount))));
				console.log("Converted Tip is finite " + (isFinite(parseFloat(tipPercent))));
				console.log("Converted Bill Amount is finite " + Number.isFinite(parseFloat(billAmount)));
				console.log("Converted Tip is finite " + Number.isFinite(parseFloat(tipPercent)));
				console.log("Bill is finite " + (isFinite((billAmount))));
				console.log("Tip is finite " + (isFinite((tipPercent))));
				console.log("Bill Amount is finite " + Number.isFinite((billAmount)));
				console.log("Tip is finite " + Number.isFinite((tipPercent)));

				if (($("#splitBox").is(':checked') === true)){

					if ((people === "") || (isFinite(people) === false) || (Math.sign(people) === -1) || (Math.sign(people) === -0) || (Math.sign(people) === NaN) || (Number.isInteger(parseFloat(people)) === false)) {
						alert("Number of people to be split between must be a whole number greater than 0");
						$('#perPersonSection').css("display","none");
						$("#splitTip").text("$" + "0.00");
						$("#splitPrice").text("$" + "0.00");
					}else{
						$('#perPersonSection').css("display","block");
						$("#splitTip").text("$" + "0.00");
						$("#splitPrice").text("$" + onlyBillSplit.toFixed(2));
						scrollToResult();
					}
				}
				// alert("Tip value must be greater than 0");

				$('#totalSection').css("display","block");

				$("#totalTip").text("$" + "0.00");
				$("#totalPrice").text("$" + Math.abs(parseFloat(billAmount)).toFixed(2));
				scrollToResult();
	
			}else{
				var calculatedTip = Math.abs(parseFloat(tipPercent)) / 100 * Math.abs(parseFloat(billAmount));
				var calculatedPrice = Math.abs(parseFloat(calculatedTip)) + Math.abs(parseFloat(billAmount));
				var calculatedSplitTip = calculatedTip/Math.abs(parseFloat(people));
				var calculatedSplitPrice = calculatedPrice/Math.abs(parseFloat(people));

				console.log(billAmount);
				console.log(tipPercent);
				console.log(calculatedTip);
				console.log(calculatedPrice);
				console.log("Converted Bill Amount is finite " + (isFinite(parseFloat(billAmount))));
				console.log("Converted Tip is finite " + (isFinite(parseFloat(tipPercent))));
				console.log("Converted Bill Amount is finite " + Number.isFinite(parseFloat(billAmount)));
				console.log("Converted Tip is finite " + Number.isFinite(parseFloat(tipPercent)));
				console.log("Bill is finite " + (isFinite((billAmount))));
				console.log("Tip is finite " + (isFinite((tipPercent))));
				console.log("Bill Amount is finite " + Number.isFinite((billAmount)));
				console.log("Tip is finite " + Number.isFinite((tipPercent)));

				if (($("#splitBox").is(':checked') === true)){

					if ((people === "") || (isFinite(people) === false) || (Math.sign(people) === -1) || (Math.sign(people) === -0) || (Math.sign(people) === NaN) || (Number.isInteger(parseFloat(people)) === false)) {
						
						alert("Number of people to be split between must be a whole number greater than 0");

						$('#perPersonSection').css("display","none");
						$("#splitTip").text("$" + "0.00");
						$("#splitPrice").text("$" + "0.00");
					}else{
						$('#perPersonSection').css("display","block");
						$("#splitTip").text("$" + calculatedSplitTip.toFixed(2));
						$("#splitPrice").text("$" + calculatedSplitPrice.toFixed(2));
						scrollToResult();
					}
				}
				
				$('#totalSection').css("display","block");
				$("#totalTip").text("$" + Math.abs(calculatedTip.toFixed(2)));
				$("#totalPrice").text("$" + Math.abs(calculatedPrice.toFixed(2)));
				scrollToResult();
				
			}
		}

		
	})


}

function scrollToResult() {
  // window.scrollTo(0, 500);

//   window.scroll({
//   top: 650, 
//   left: 0, 
//   behavior: 'smooth'
// });

	document.querySelector('#totalSection').scrollIntoView({ 
	  behavior: 'smooth' 
	});
}

splitLogic();