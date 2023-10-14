const loop = () => {
  let currentdate = new Date();
  let datetime =
    "Current time: " +
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " time " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  let html = document.querySelector("#current-date");

  html.innerHTML = datetime;
};
setInterval(loop, 1000);
