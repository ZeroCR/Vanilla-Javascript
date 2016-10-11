const userService = function () {
  
  const getData = (url, cb) => {
    const myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = () => {
      if (myRequest.readyState == 4 && myRequest.status == 200) {
        cb(JSON.parse(myRequest.responseText));
      }
    };
    myRequest.open("GET", url, true);
    myRequest.send();
  };
  
  return {
    getData: getData
  };
  
}();