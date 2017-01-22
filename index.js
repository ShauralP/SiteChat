var temp = "";

document.addEventListener('click', function() {
  document.getElementById("submit").addEventListener('click', function (e) {
    e.preventDefault();

    //chrome.runtime.sendMessage(document.getElementById("msg").value);

    // //Use XMLHTTPRequests for GET
    var xhr = new XMLHttpRequest();

    var pushChat = function() {
      document.getElementById("ta").value = assign();
    }

    var deletePrevious = function() {
        while (result.includes("||")) {
          var loc = result.indexOf("||");
          result = result.substring(loc+1, result.length);
        }
    }

    var assign = function() {
      deletePrevious();
      //temp += result;
      //result = temp;
      //temp = temp.replace(result, '');
      //temp += result;
      return result;
    }


    // var result = xhr.responseText;







    //Use XMLHTTPRequests for POST
    // var http = new XMLHttpRequest();
    // var url = "get_data.php";
    // var params = {"id": "123", "name": "shaural",  "message": "this is a test message"};
    // var j = JSON.stringify(params);
    xhr.open("POST", "http://LocalHost:3000/storedata", false);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({"id": "123", "name": "shaural",  "message": document.getElementById("msg").value}));


    //var result = xhr.responseText;


    xhr.open("GET", "http://LocalHost:3000/getdata", false);
    xhr.send();
    var result = xhr.responseText;

    //chrome.runtime.sendMessage(result);
    // function checkFile() {
    //   val = setInterval(pushChat, 200);
    // }
    pushChat();

    // http.onreadystatechange = function() {//Call a function when the state changes.
    //     if(http.readyState == 4 && http.status == 200) {
    //         alert(http.responseText);
    //     }
    // }
    // xhr.send(params);


    //chrome.runtime.sendMessage(chrome.runtime.id); // This gets the extension unique id


  });

});
