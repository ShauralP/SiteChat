var temp = "";
var ip = "";
var time = "";
var message = "";
// var array = [""];
var messageCounter = 0;
var username = "";
var tabUrl = "";
var result = "";
var xhr = new XMLHttpRequest();
// var checkf = function() {
//   val = setInterval(function(){
//
//
//     xhr.open("GET", "http://LocalHost:3000/getdata", false);
//     xhr.send();
//
//     result = xhr.responseText;
//   }, 10000);
// }

chrome.storage.local.get('username', function (result) {
        var usernames = result.username;
        if (usernames) {
          document.getElementById("username").value = usernames;
          document.getElementById("username").disabled = true;
          username = usernames;
    }
      });

document.addEventListener('click', function() {
  document.getElementById("refresh").addEventListener('click', function(e){
    xhr.open("GET", "http://LocalHost:3000/getdata", false);
    xhr.send();

    var stored = xhr.responseText;

    //alert("YOU PRESSED A BUTTON");
    //alert(stored);

    var loop = function() {
      var array = [""];
      var nameandmessage = "";
      while (stored.includes("||")) {
        var end = stored.indexOf("||");
        var temporary = stored.substring(0, end+1);
        stored = stored.substring(end+1, stored.length);
        array.push(temporary);
      }
      array.push(stored);
      //alert(array);

      var ip = "";
      var datetime = "";
      var name = "";
      var message = "";

      for (var i = 0; i < array.length; i++) {
        var temporary = array[i];
        //alert(temporary);
        var count = 0;
        //alert("gets here");
        while (temporary.includes('~')) {
          var loc1 = temporary.indexOf("~");
          var loc2 = temporary.indexOf("~", loc1+1);
          var template = temporary.substring(loc1+1, loc2);
          if (count == 0) {
            ip = template;
            alert(ip);
          } else if (count == 1) {
            datetime = template;
            alert(datetime);

          } else if (count == 2) {
            name = template;
            alert(name);

          } else if (count == 3) {
            message = template;
            count = -1;
            alert(message);
          }
          count++;
          temporary = temporary.substring(loc2, temporary.length);
          if (count == 0 && temporary.length > 3) {
            temporary = temporary.substring(temporary.indexOf("~", loc2), temporary.length);
          } else {
            break;
          }
          //alert(temporary);
        }

        //nameandmessage = name.concat(": ").concat(message).concat("\n");
        // alert(nameandmessage);
      }
      document.getElementById("ta").value = "TEST";

    }

    loop();

  });
});



document.addEventListener('click', function() {
  document.getElementById("submit").addEventListener('click', function (e) {
    e.preventDefault();

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        tabUrl = tabs[0].url.toLocaleString();





        if (!username) {
            username = document.getElementById("username").value;
            if (username) {
                chrome.storage.local.set({'username': username}, function(){
                });
            }else alert("Please enter username");
        }







    //chrome.runtime.sendMessage(document.getElementById("msg").value);

    // //Use XMLHTTPRequests for GET
    // var xhr = new XMLHttpRequest();

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

    result = xhr.responseText;


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
//checkf();
});
