const toggle = document.getElementById("toggle");
const toggleLabel = document.getElementsByClassName("toggle__label");
const monthlyPriceBasic = document.getElementById('monthly-price-basic');
const monthlyPriceProfessional = document.getElementById('monthly-price-professional');
const monthlyPriceMaster = document.getElementById('monthly-price-master');
const yearlyPriceBasic = document.getElementById('yearly-price-basic');
const yearlyPriceProfessional = document.getElementById('yearly-price-professional');
const yearlyPriceMaster = document.getElementById('yearly-price-master');

let monthly;

toggle.addEventListener("click", switchToggle);

function switchToggle() {
  if (toggle.checked) {
    monthly = false;
    yearlyPriceBasic.style.display = "block";
    yearlyPriceProfessional.style.display = "block";
    yearlyPriceMaster.style.display = "block";
    monthlyPriceBasic.style.display = "none";
    monthlyPriceProfessional.style.display = "none";
    monthlyPriceMaster.style.display = "none";
  } else {
    monthly = true;
    yearlyPriceBasic.style.display = "none";
    yearlyPriceProfessional.style.display = "none";
    yearlyPriceMaster.style.display = "none";
    monthlyPriceBasic.style.display = "block";
    monthlyPriceProfessional.style.display = "block";
    monthlyPriceMaster.style.display = "block";
  }
  console.log(monthly + "h");
}
