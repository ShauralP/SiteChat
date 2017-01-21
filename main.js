chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
  alert(response);
});

// chrome.runtime.onLaunched.addListener(function() {
//   chrome.app.window.create('index.html',
//     {bounds: {width: 800, height: 800 }});
// });



// chrome.app.runtime.onLaunched.addListener(function() {
//   chrome.app.window.create('index.html',
//   {bounds: {width:}});
// });
