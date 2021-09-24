// Global Variables
const holidaysList = document.getElementById("holidays");
let holidayOptions; // will contain "fetched" data

holidaysList.addEventListener("change", newHolidaySelection);

function newHolidaySelection(event) {
  displayCountryInfo(event.target.value);
}

fetch("https://www.gov.uk/bank-holidays.json")
  .then((res) => res.json())
  .then((data) => initialize(data))
  .catch((err) => console.log("Error:", err));

function initialize(holidayData) {
  holidayOptions = holidayData;
  england = holidayOptions["england-and-wales"].events;
  let options = "";
  england.forEach(
    (uk) => (options += `<option value="${uk.title}">${uk.date}</option>`)
  );
  holidaysList.innerHTML = options;
  displayCountryInfo(holidaysList[holidaysList.selectedIndex].value);
}

function displayCountryInfo(holi) {
  const holidayData = england.find((holiday) => holiday.title === holi);
  document.getElementById("title").innerHTML = holidayData.title;
}
