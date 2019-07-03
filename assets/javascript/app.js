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

function splitLogic(){
	
	// $("#billAmount").focusout(function() {
 //    		alert("Please enter a valid non-negative number.")
 // 	})

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
		// alert("You clicked calculate!");

		// || (!billAmount.match(/^\d+$/))
		// || (!billAmount.match(/^\d+\.?\d*$/))
		// || (!tipPercent.match(/^\d+$/))
		// || (!tipPercent.match(/^\d+\.?\d*$/)) 
		// || (!Number.isFinite(parseFloat(billAmount))) 
		// || (!Number.isFinite(parseFloat(tipPercent))) 
		// (isFinite(parseFloat(tipPercent)))
		// (isFinite(parseFloat(billAmount)))

		
		if ((billAmount === "") || ((isFinite(billAmount) === false) || (Math.sign(billAmount) === -1) || (Math.sign(billAmount) === -0) || (Math.sign(billAmount) === NaN))) {

			$("#totalTip").text(0);
			$("#totalPrice").text(0);
			$("#splitTip").text(0);
			$("#splitPrice").text(0);

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

				if ((people === "") || (isFinite(people) === false) || (Math.sign(people) === -1) || (Math.sign(people) === -0) || (Math.sign(people) === NaN) || (Number.isInteger(parseFloat(people)) === false)) {
					$("#splitTip").text(0);
					$("#splitPrice").text(0);
				}else{
					$("#splitTip").text(0);
					$("#splitPrice").text(onlyBillSplit);
				}

				$("#totalTip").text(0);
				$("#totalPrice").text(Math.abs(parseFloat(billAmount)));
				// $("#splitTip").text(0);
				// $("#splitPrice").text(onlyBillSplit);

			}else{
				var calculatedTip = Math.abs(parseFloat(tipPercent)) / 100 * Math.abs(parseFloat(billAmount));
				var calculatedPrice = Math.abs(parseFloat(calculatedTip)) + Math.abs(parseFloat(billAmount));
				var calculatedSplitTip = calculatedTip/Math.abs(parseFloat(people));
				var calculatedSplitPrice = calculatedPrice/Math.abs(parseFloat(people));

				// console.log(billAmount);
				// console.log(tipPercent);
				// console.log(calculatedTip);
				// console.log(calculatedPrice);
				// console.log("Converted Bill Amount is finite " + (isFinite(parseFloat(billAmount))));
				// console.log("Converted Tip is finite " + (isFinite(parseFloat(tipPercent))));
				// console.log("Converted Bill Amount is finite " + Number.isFinite(parseFloat(billAmount)));
				// console.log("Converted Tip is finite " + Number.isFinite(parseFloat(tipPercent)));
				// console.log("Bill is finite " + (isFinite((billAmount))));
				// console.log("Tip is finite " + (isFinite((tipPercent))));
				// console.log("Bill Amount is finite " + Number.isFinite((billAmount)));
				// console.log("Tip is finite " + Number.isFinite((tipPercent)));

				if ((people === "") || (isFinite(people) === false) || (Math.sign(people) === -1) || (Math.sign(people) === -0) || (Math.sign(people) === NaN) || (Number.isInteger(parseFloat(people)) === false)) {
					$("#splitTip").text(0);
					$("#splitPrice").text(0);
				}else{
					$("#splitTip").text(calculatedSplitTip);
					$("#splitPrice").text(calculatedSplitPrice);
				}


				$("#totalTip").text(Math.abs(calculatedTip));
				$("#totalPrice").text(Math.abs(calculatedPrice));
				
			}
		}

		// else if((billAmount !== "") || (parseInt(billAmount) !== 0) || (billAmount !== NaN)){
			
		// 	if ((tipPercent === "") || (parseInt(tipPercent === 0)) || (tipPercent === NaN)) {

		// 		console.log(billAmount);
		// 		console.log(tipPercent);

		// 		$("#totalPrice").text(billAmount);

		// 	}else{
		// 		var calculatedTip = parseInt(tipPercent) / 100 * parseInt(billAmount);
		// 		var calculatedPrice = parseInt(calculatedTip) + parseInt(billAmount);

		// 		console.log(billAmount);
		// 		console.log(tipPercent);
		// 		console.log(calculatedTip);
		// 		console.log(calculatedPrice);

		// 		$("#totalTip").text(calculatedTip);
		// 		$("#totalPrice").text(calculatedPrice);
		// 	}
			
		// }

		// if ((tipPercent === "") || (parseInt(tipPercent === 0)) || (tipPercent === NaN)) {
		// 	var calculatedTip = parseInt(tipPercent) / 100 * parseInt(billAmount);
		// 	var calculatedPrice = parseInt(calculatedTip) + parseInt(billAmount);

		// 	console.log(calculatedTip);
		// 	console.log(calculatedPrice);

		// 	$("#totalTip").text(calculatedTip);
		// 	$("#totalPrice").text(calculatedPrice);
		// }

	})


}

splitLogic();

function init(){
	totalSection.hide();
	perPersonSection.hide();
}

// init();