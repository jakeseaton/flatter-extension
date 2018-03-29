// import axios from 'axios'
// import urls from './constants/urls'
// chrome.runtime.onInstalled.addListener(function() {
//     // chrome.storage.sync.set({color: '#3aa757'}, function() {
//     //   console.log("The color is green.");
//     // });

//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//         chrome.declarativeContent.onPageChanged.addRules([{
//             conditions: [
//                 new chrome.declarativeContent.PageStateMatcher({
//                         pageUrl: {hostEquals: 'hanes.com'},
//                     })
//             ],
//             actions: [new chrome.declarativeContent.ShowPageAction()]
//       }]);
//     });
// });

  //https://www.hanes.com/shop/hanes/men/t-shirts/short-sleeve

// console.log("YOOOO")


// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//     console.log(response.farewell);
//   });
// });
debugger;
chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
    console.log("Message received!", request);

    switch (request.action){
        case actions.QUERY_SHOULD_RUN:
            chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
                console.log("Queried tabs", tabs);
                sendResponse({ shouldRun: tabs[0].url.includes(urls.hanes) });
            })
            return true;
            break;

        // case actions.QUERY_ACTIVE_TAB:
        //     chrome.tabs.query({active: true, lastFocusedWindow: true}, (tabs) => {
        //         console.log("Queried tabs", tabs)
        //         sendResponse(tabs[0].url);

        //     });
        //     break;
        case actions.FOLLOWERS_BUTTON_CLICKED:
        case actions.FOLLOWING_BUTTON_CLICKED:
        default:
            sendResponse(request);
    }

})

// chrome.pageAction.onClicked.addListener((tab) => {
//     console.log("Page action was clicked!", tab);
// })

// function processRequest(request){
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, request, function(response) {
//             console.log(response);
//         });
//     });
// }

// chrome.webRequest.onCompleted.addListener(
//     processRequest,
//     {urls:["*://*.instagram.com/graphql/query*"]},
//     ["responseHeaders"]
// )