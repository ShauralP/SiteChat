var temp = "";
var ip = "";
var time = "";
var message = "";
var messageCounter = 0;

document.addEventListener('click', function() {
  document.getElementById("submit").addEventListener('click', function (e) {
    e.preventDefault();

    //chrome.runtime.sendMessage(document.getElementById("msg").value);

    // //Use XMLHTTPRequests for GET
    var xhr = new XMLHttpRequest();

    var pushChat = function() {
      //cleanUp();
      //messageCounter++;
      //document.getElementById("ta").value = assign();
      //temp += message;
      document.getElementById("ta").value = result;
      //document.getElementById("ta").value = message;
    }

    var deletePrevious = function() {
        while (result.includes("||")) {
          var loc = result.indexOf("||");
          result = result.substring(loc+1, result.length);
        }
    }

    var cleanUp = function() {
      var counter = 0;
      while (result.includes("~")) {
        var loc1 = result.indexOf("~");
        var loc2 = result.indexOf("~", loc1+1);
        if (counter == messageCounter*4 + 0) {
          ip = result.substring(loc1+1, loc2);
        } else if (counter == messageCounter*4 + 1) {
          time = result.substring(loc1+1, loc2);
        } else if (counter == messageCounter*4 + 2) {
          message = result.substring(loc1+1, loc2) + ": ";
        } else if (counter == messageCounter*4 + 3) {
          message += result.substring(loc1+1, loc2);
          break;
        }
        result = result.substring(loc2, result.length);
        counter++;
      }
    }

    var assign = function() {
      //cleanUp();
      //deletePrevious();
      //temp += result;
      //result = temp;
      //temp = temp.replace(result, '');
      //temp += result;
      return results;
    }


    // var result = xhr.responseText;







    //Use XMLHTTPRequests for POST
    // var http = new XMLHttpRequest();
    // var url = "get_data.php";
    // var params = {"id": "123", "name": "shaural",  "message": "this is a test message"};
    // var j = JSON.stringify(params);

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        var tabUrl = tabs[0].url;
    });


//new Date().toLocaleString()
//tabUrl

    xhr.open("POST", "http://LocalHost:3000/storedata", false);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({"ip": "123", "time": "12:12", "name": "shaural", "message": document.getElementById("msg").value}));


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
