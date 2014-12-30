ngCordova-NFC
==============

ngCordova Wrapper for cordova-plugin-nfc feature

This is a unofficial ngCordova plugin (just adapts the way the functionality got wrapped).

It will replace the success and fail callbacks with promises.

#Install
##via bower:
bower install git://github.com/konstantinkrassmann/ngCordova-nfc --save-dev

#How it works:
1.Set as dependency of your application
``` javascript
angular.module("myApp", ["ngCordova.plugins.nfc"]);
```

2.Use in componentens:
``` javascript
app.controller("StartCtrl", function($cordovaNfc){

  //Because of the problem about the async-ness of the nfc plugin, we need to wait
  //for it to be ready.
   $cordovaNfc.then(function(nfcInstance){

        //Use the plugins interface as you go, in a more "angular" way
        nfcInstance.addNdefListener(function(event){
            console.log("success");
        }, function(event){
            console.log("error");
        });
   })
});
```
