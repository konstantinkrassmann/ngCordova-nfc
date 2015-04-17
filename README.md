ngCordova-NFC
==============

ngCordova Wrapper for cordova-plugin-nfc feature

This is a unofficial ngCordova plugin (just adapts the way the functionality got wrapped).

It will replace the success and fail callbacks with promises.

#Install
##via bower:
```bower install git://github.com/konstantinkrassmann/ngCordova-nfc --save-dev```

#How it works:
Set as dependency of your application
``` javascript
angular.module("myApp", ["ngCordova.plugins.nfc"]);
```

Include into application:
``` html
<script src="lib/ngCordova-nfc/nfc.js"></script>
```

Make sure you have the phone-gap nfc plugin installed (can be used for cordova, too)
```
cordova plugin add https://github.com/chariotsolutions/phonegap-nfc
```

Use in componentens:
``` javascript
app.controller("StartCtrl", function($cordovaNfc, $cordovaNfcUtil){

  //Because of the problem about the async-ness of the nfc plugin, we need to wait
  //for it to be ready.
   $cordovaNfc.then(function(nfcInstance){

        //Use the plugins interface as you go, in a more "angular" way
      nfcInstance.addNdefListener(function(event){
            //Callback when ndef got triggered
      })
      .then(
        //Success callback
        function(event){
            console.log("bound success");
        },
        //Fail callback
        function(err){
            console.log("error");
        });
   });

   $cordovaNfcUtil.then(function(nfcUtil){
        console.log( nfcUtil.bytesToString("some bytes") )
   });    
});
```
