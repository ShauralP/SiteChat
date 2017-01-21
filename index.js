document.addEventListener('click', function() {
  document.getElementById("submit").addEventListener('click', function (e) {
    e.preventDefault();

    //chrome.runtime.sendMessage(document.getElementById("msg").value);
    var data = document.getElementById("msg").value;
    chrome.runtime.sendMessage(data);

    $.ajax({
      type: "POST",
      data: {data1: document.getElementById("msg").value},
      dataType: 'json',
      url: 'http://localhost:3000',
      success: function(data) {
        console.log("Success");
      }
    });

    chrome.runtime.sendMessage("test");

  });

  //alert("working");

  //appendLog("sending to localhost:8888");
  //chrome.runtime.sendMessage("working");
    // {myMessage: text.value},
    // function(response) {
    //   appendLog("response: "+JSON.stringify(reponse));
    // })
});

// chrome.runtime.sendMessage("hello");
//
// var main = document.getElementById("main");
// var body = main.getElementById("body");
// var form = body.getElementById("frm");
// var text = form.getElementById("msg");
// var send = body.getElementById("submit");
//
// chrome.runtime.sendMessage("test");
//
//
// console.log(text.value);
// console.log(form.value);
//
// function myalert(){
//   alert("test");
// }
//
// var helloWorld = function () {
//   chrome.runtime.sendMessage('hI');
// };
//
//
// document.addEventListener('click', function() {
//   body.getElementById("submit").addEventListener('click', function (e) {
//     e.preventDefault();
//     chrome.runtime.sendMessage('runtime message');
//   });
//
//   //alert("working");
//
//   //appendLog("sending to localhost:8888");
//   //chrome.runtime.sendMessage("working");
//     // {myMessage: text.value},
//     // function(response) {
//     //   appendLog("response: "+JSON.stringify(reponse));
//     // })
// });


// chrome.runtime.sendMessage('Hello World!');
