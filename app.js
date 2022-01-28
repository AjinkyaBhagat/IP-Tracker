const lookupBtn = document.querySelector(".lookup-btn");
const ipDisplay = document.querySelector(".ip-display");
const locationDisplay = document.querySelector(".location-display");
const geoLocation = document.querySelector(".geo-display");
const pinCode = document.querySelector(".pincode-display");
const network = document.querySelector(".network-display");

lookupBtn.addEventListener("click", () => {
  axios.get("https://ipapi.co/json/").then((response) => {
    console.log(response);
    ipDisplay.textContent = `IP Address:${response.data.ip}`;
    locationDisplay.textContent = `Location:${response.data.city},${response.data.region},${response.data.country_name}`;
    geoLocation.textContent = `GeoLocation:${response.data.latitude},${response.data.longitude}`;
    pinCode.textContent = `PinCode:${response.data.postal}`;
    network.textContent = `Network:${response.data.org}`;
  });
});

function resetBtn() {
  ipDisplay.textContent = "IP Address:";
  locationDisplay.textContent = "Location:";
  geoLocation.textContent = "GeoLocation:";
  pinCode.textContent = "PinCode:";
  network.textContent = "Network:";
}
