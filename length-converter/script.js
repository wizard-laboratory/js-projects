let factors1 = new Array(1, 0.001, 0.000621,3.28084,1.09361);
let factors2 = new Array(1000, 1, 0.621,3280.84,1093.61);
let factors3 = new Array(1609.34, 1.60934, 1,5280,1760);
let factors4 = new Array(0.3048,0.0003048,0.000189394,1,0.333333);
let factors5 = new Array(0.9144,0.0009144,0.000568182,3,1);
let factors = new Array(factors1,factors2,factors3,factors4,factors5);

function convertUnit()
{
  // Grab the correct conversion factor from our arrays
  fromIndex = document.lengthCon.fromUnit.selectedIndex;
  toIndex = document.lengthCon.toUnit.selectedIndex;
  factor = factors[fromIndex][toIndex];
  // Create the text that we want to write on the middle line
  fromUnitText = document.lengthCon.fromUnit.options[document.lengthCon.fromUnit.selectedIndex].text;
  toUnitText = document.lengthCon.toUnit.options[document.lengthCon.toUnit.selectedIndex].text;
  document.getElementById("formula").innerHTML = fromUnitText + ' = ' + factor + ' ' + toUnitText;
  // Check the input box to make sure we have a valid number
  if(isNaN(document.lengthCon.fromValue.value))
    document.getElementById("toValue").innerHTML = "Not a valid number.";
  // Output the converted number...last number on last line
  else {
    document.getElementById("toValue").innerHTML = factor * document.lengthCon.fromValue.value;
  }
}