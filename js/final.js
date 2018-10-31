// JS of final Drill.

var total = 0;
var meatText = "";
var sauceText = [];
var cheeseText = [];
var crustText = [];
var vegText = "";
var sizeText = [];
var checkedMeat = 0;
var checkedVeg = 0;
// global variables

function main(){
    var vegPrice = "+$0.00<br>";
    var meatPrice ="+$0.00<br>";
    total = 0;
    meatText = "";
    //----------------------------------------------//
    sizeText = [];
    sauceText = [];
    cheeseText = [];
    crustText = [];
    // these Four arrays are assumed to have the
    // Item name in the 0th element and the 
    // price name in the 1st element both as strings.
    //---------------------------------------------//
    vegText = "";
    checkedMeat = 0;
    checkedVeg = 0;
    // resetting the values of global variables every click
    getSize();
    getMeat();
    getCheese();
    getSauce();
    getCrust();
    getVeg();

    if (checkedMeat == 0) {
        meatText = "None";
    }
    if (checkedVeg == 0) { 
        vegText = "None";
    }
    for (var counter = 0; counter < checkedVeg-1; counter++){
        vegPrice = (vegPrice + "+$1.00<br>")
    }
    for (var counter2 = 0; counter2 < checkedMeat-1; counter2++){
        meatPrice = (meatPrice + "+$1.00<br>")
    }
    console.log(meatPrice)
    document.getElementById("ingredientsOne").innerHTML = (sizeText[0] +"<br>" + sauceText[0] +"<br>" + cheeseText[0]  +"<br>"+ crustText[0] +"<br>");
    document.getElementById("ingredientsOnePrice").innerHTML = (sizeText[1] +"<br>" + sauceText[1] +"<br>" + cheeseText[1]  +"<br>"+ crustText[1] +"<br>")
    document.getElementById("ingredientsTwo").innerHTML = (vegText);
    document.getElementById("ingredientsTwoPrice").innerHTML = (vegPrice);
    document.getElementById("ingredientsThree").innerHTML = (meatText);
    document.getElementById("ingredientsThreePrice").innerHTML = (meatPrice);
    document.getElementById("totalPrice").innerHTML = ("<h4>$<u>" + total + ".00</u></h4>");

}

function getSize()  {

    var selectedSize = document.getElementsByClassName("size");
    // Taking in radial selection for size in a var.
    var i = 0;
    // Counter
    while (i < selectedSize.length) {
        // loop to check which radial is selected.
        if (selectedSize[i].checked) {

            sizeText.push(selectedSize[i].value);
            //pushed the value of the checked option onto an array.
            //value is presumed to have exact string of what selection was made.
        }
        i = i + 1; 
        // counter for while loop
    }

    if (sizeText[0] === "Personal Pizza") {
        total = (total + 6);
        console.log(total);
        sizeText = ["Personal Pizza","$6.00"];
    } 
    if (sizeText[0] === "Medium Pizza") {
        total = (total + 10);
        console.log(total);
        sizeText = ["Medium Pizza","$10.00"];
    } 
    if (sizeText[0] === "Large Pizza") {
        total = (total + 14);
        console.log(total);
        sizeText = ["Large Pizza","$14.00"];
    } 
    if (sizeText[0] === "Extra Large Pizza") {
        total = (total + 16);
        console.log(total);
        sizeText = ["Extra Large Pizza","$16.00"];
    }
    // the sizeText[0] is presumed to have exact string. if it matches one of these
    // criteria it will add on to an array with string data of price and name
    // in the 0 and 1 elements. it is presumed to only have one of these criteria
    // be matched.
    return (total);
}

function getMeat() {

    var selectedMeat = document.getElementsByClassName("meats");
    // Grabbing selections of meats
    var meatCounter = 0;
    // since all items except the first are worth 1.00
    // it will simply count each meat item. Needs recoding
    // if required to have different prices for each meat item.

    while (meatCounter < selectedMeat.length){
        // loop  to count how many ingredients there are and saves
        // which ingredients in an array. Is presumed to be a string
        // in the value.
        if (selectedMeat[meatCounter].checked){
            checkedMeat = checkedMeat + 1;  
            if (checkedMeat == 1){
                meatText = (meatText + selectedMeat[meatCounter].value + "(First One's free!)<br>");
                // First choice has special text.
            } else {
            meatText = (meatText + selectedMeat[meatCounter].value + "<br>");
            // pushes value(should be string) of selectedVeg for later use.
            }
        }
        meatCounter = meatCounter + 1;
    }
    if (checkedMeat != 0) {
    total = (total + checkedMeat - 1);
    // The -1 is to represent the first ingredient being free.
    // the != is to avoid running error.
    }
    return total;
}


function getCheese() {

    var selectedCheese = document.getElementsByClassName("Cheese");
    // grabbing radial cheese selection
    var k = 0;
    // Counter
    while (k < selectedCheese.length) {
        // loop to check which radial is selected.
        if (selectedCheese[k].checked) {

            cheeseText.push(selectedCheese[k].value);
            //pushed the value of the checked option onto an array.
            //value is presumed to have exact string of what selection was made.
        }
        k = k + 1; 
    }

    if (cheeseText[0] === "Regular Cheese") {
        cheeseText = ["Regular Cheese","+$0.00"];
    } 
    if (cheeseText[0] === "No Cheese") {
        cheeseText = ["No Cheese","+$0.00"];
    } 
    if (cheeseText[0] === "Extra Cheese") {
        total = total + 3;
        cheeseText = ["Extra Cheese","+$3.00"];
    } 
    // only adds to total for extra option, adds a second element to array
    // with string of price.
    
    return total;
}

function getSauce() {

    var selectedSauce = document.getElementsByClassName("Sauce");
    // Taking in radial selection for size in a var.
    var l = 0;
    // Counter
    while (l < selectedSauce.length) {
        // loop to check which radial is selected.
        if (selectedSauce[l].checked) {

            sauceText.push(selectedSauce[l].value);
            //pushed the value of the checked option onto an array.
            //value is presumed to have exact string of what selection was made.
        }
        l = l + 1; 
        // counter for while loop
    }

    if (sauceText[0] === "Marinara sauce") {
        sauceText = ["Marinara sauce","+$0.00"];
    } 
    if (sauceText[0] === "White sauce") {
        sauceText = ["White sauce","+$0.00"];
    } 
    if (sauceText[0] === "Barbeque sauce") {
        sauceText = ["Barbeque sauce","+$0.00"];
    } 
    if (sauceText[0] === "No sauce") {
        sauceText = ["No sauce","+$0.00"];
    }
    // the sauceText[0] is presumed to have exact string. if it matches one of these
    // criteria it will add on to an array with string data of price and name
    // in the 0 and 1 elements. it is presumed to only have one of these criteria
    // be matched.
    return total;
}

function getCrust() {

    var selectedCrust= document.getElementsByClassName("Crust");
    // Taking in radial selection for size in var.
    var y = 0;
    // Counter
    while (y < selectedCrust.length) {
        // loop to check which radial is selected.
        if (selectedCrust[y].checked) {

            crustText.push(selectedCrust[y].value);
            //pushed the value of the checked option onto an array.
            //value is presumed to have exact string of what selection was made.
        }
        y = y + 1; 
        // counter for while loop
    }

    if (crustText[0] === "Plain Crust") {
        crustText = ["Plain Crust","+$0.00"];
    } 
    if (crustText[0] === "Garlic Butter Crust") {
        crustText = ["Garlic Butter Crust","+$0.00"];
    } 
    if (crustText[0] === "Cheese Stuffed Crust") {
        crustText = ["Cheese Stuffed Crust","+$3.00"];
        total = (total + 3);
    } 
    if (crustText[0] === "Spicy Crust") {
        crustText = ["Spicy Crust","+$0.00"];
    }
    if (crustText[0] === "House Special Crust") {
        crustText = ["House Special Crust","+$0.00"];
    }
    // the crustText is presumed to have exact string. if it matches one of these
    // criteria it will add on to an array with string data of price and name
    // in the 0 and 1 elements. it is presumed to only have one of these criteria
    // be matched.

    return total;
}

function getVeg() {

    var selectedVeg = document.getElementsByClassName("Veggies");
    // Grabbing selections of meats
    var vegCounter = 0;
    // loop counter
   
    //checked item counter

    while (vegCounter < selectedVeg.length){
        // loop  to count how many ingredients there are and saves
        // which ingredients in an array. Is presumed to be a string
        // in the value.  
        if (selectedVeg[vegCounter].checked) {
            checkedVeg = checkedVeg + 1;
            if (checkedVeg == 1){
                vegText = (vegText + selectedVeg[vegCounter].value + "(First One's free!)<br>");
                // First choice has special text.
            } else {
            vegText = (vegText + selectedVeg[vegCounter].value + "<br>");
            // pushes value(should be string) of selectedVeg for later use.
            }
        }
        vegCounter = vegCounter + 1; 
    }
    console.log(vegText);
 
    if (checkedVeg != 0) {
    total = (total + checkedVeg - 1);
    // The -1 is to represent the first ingredient being free.
    // the != is to avoid running error.
    }
    return (total);
}

