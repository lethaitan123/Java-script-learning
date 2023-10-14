function fetchData(url, callback) {
  // Mô phỏng việc tải dữ liệu từ url
  setTimeout(function () {
    const data = "Dữ liệu từ " + url;
    callback(data);
  }, 1000);
}

fetchData("https://example.com/api/data", function (result) {
  console.log(result);
});
