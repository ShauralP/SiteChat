var temp = "";
var ip = "";
var time = "";
var message = "";
// var array = [""];
var messageCounter = 0;
var username = "";
var tabUrl = "";

document.addEventListener('click', function() {
  document.getElementById("submit").addEventListener('click', function (e) {
    e.preventDefault();

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        tabUrl = tabs[0].url.toLocaleString();

        
    username = document.getElementById("username").value;
    if (username) {
      document.getElementById("username").value = username;
      document.getElementById("username").disabled = true;

    }
    //chrome.runtime.sendMessage(document.getElementById("msg").value);

    // //Use XMLHTTPRequests for GET
    var xhr = new XMLHttpRequest();

    var pushChat = function() {
      cleanUp();
      messageCounter++;
      //document.getElementById("ta").value = assign();
      //temp += message;
      // array.push(message);
      // for (int i=0; i < array.length; i++) {
      //   temp += array[i];
      // }
      if (temp.indexOf(message) > -1) {

      } else {
        temp += message + "\n";
      }
      document.getElementById("ta").value = temp;
      //document.getElementById("ta").value = message;
    }

    var deletePrevious = function() {
        while (result.includes("||")) {
          var loc = result.indexOf("||");
          result = result.substring(loc+1, result.length);
        }
    }

    var cleanUp = function() {
      deletePrevious();

     var counter = 0;
     while (result.includes("~")) {
       var loc1 = result.indexOf("~");
       var loc2 = result.indexOf("~", loc1+1);
       if (counter ==  0) {
         ip = result.substring(loc1+1, loc2);
       } else if (counter == 1) {
         time = result.substring(loc1+1, loc2);
       } else if (counter ==  2) {
         message = result.substring(loc1+1, loc2) + ": ";
       } else if (counter ==  3) {
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



    var formattedUrl = tabUrl.substring(tabUrl.indexOf('.') + 1, tabUrl.indexOf('.', tabUrl.indexOf('.') + 1));
    var dateTime = new Date().toLocaleString();

    xhr.open("POST", "http://LocalHost:3000/storedata", false);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({"ip": formattedUrl, "time": dateTime, "name": username, "message": document.getElementById("msg").value}));


    //var result = xhr.responseText;


    xhr.open("GET", "http://LocalHost:3000/getdata", false);
    xhr.send();

    var result = xhr.responseText;


    //chrome.runtime.sendMessage(result);
    // function checkFile() {
    //   val = setInterval(pushChat, 200);

    // }
    pushChat();

    });




    // http.onreadystatechange = function() {//Call a function when the state changes.
    //     if(http.readyState == 4 && http.status == 200) {
    //         alert(http.responseText);
    //     }
    // }
    // xhr.send(params);


    //chrome.runtime.sendMessage(chrome.runtime.id); // This gets the extension unique id


  });

});
