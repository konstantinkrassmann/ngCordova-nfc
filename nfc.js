/*!
 * ngCordova-nfc *
 * Copyright 2014 Konstantin Krassmann
 * @since 30.12.2014
 * See LICENSE in this repository for license information
 */
angular.module("ngCordova.plugins.nfc", [])
    .factory('$cordovaNfcNDef', ['$q','$window', function($q, $window){
        var q = $q.defer();

        document.addEventListener('deviceready', function() {
            q.resolve($window.ndef);
        });
        return q.promise;
    }])
    .factory('$cordovaNfcUtil', ['$q','$window', function($q, $window){
        var q = $q.defer();

        document.addEventListener('deviceready', function() {
            q.resolve($window.util);
        });
        return q.promise;
    }])
    .factory('$cordovaNfc', ['$q', function ($q) {
        var q = $q.defer();

        document.addEventListener('deviceready', function(){
            q.resolve(
                {
                    addNdefListener: function (callback) {
                        var q = $q.defer();

                        if(typeof nfc != "undefined")
                        {
                            nfc.addNdefListener(callback, q.resolve, q.reject);
                        }else
                            q.reject("nfc plugin not defined");
                        return q.promise;
                    },
                    addMimeTypeListener: function (mimeType, callback) {
                        var q = $q.defer();

                        if(typeof nfc != "undefined")
                        {
                            nfc.addMimeTypeListener(mimeType, callback, q.resolve, q.reject);
                        }else
                            q.reject("nfc plugin not defined");
                        return q.promise;
                    },
                    addTagDiscoveredListener: function(callback)
                    {
                        var q = $q.defer();

                        if(typeof nfc != "undefined")
                        {
                            nfc.addTagDiscoveredListener(callback, q.resolve, q.reject);
                        }else
                            q.reject("nfc plugin not defined");

                        return q.promise;
                    },
                    addNdefFormatableListener: function(callback)
                    {
                        var q = $q.defer();

                        if(typeof nfc != "undefined")
                        {
                            nfc.addNdefFormatableListener(callback, q.resolve, q.reject);
                        }else
                            q.reject("nfc plugin not defined");

                        return q.promise;
                    },
                    write : function(ndefMessage)
                    {
                        var q = $q.defer();

                        if(typeof nfc != "undefined")
                        {
                            nfc.write(ndefMessage, q.resolve, q.reject);
                        }else
                            q.reject("nfc plugin not defined");

                        return q.promise;
                    },
                    makeReadOnly: function()
                    {
                        var q = $q.defer();

                        if(typeof nfc != "undefined")
                        {
                            nfc.makeReadOnly(q.resolve, q.reject);
                        }else
                            q.reject("nfc plugin not defined");

                        return q.promise;
                    },
                    share : function(ndefMessage)
                    {
                        var q = $q.defer();

                        if(typeof nfc != "undefined")
                        {
                            nfc.share(ndefMessage, q.resolve, q.reject);
                        }else
                            q.reject("nfc plugin not defined");

                        return q.promise;
                    },
                    unshare: function()
                    {
                        var q = $q.defer();

                        if(typeof nfc != "undefined")
                        {
                            nfc.unshare(q.resolve, q.reject);
                        }else
                            q.reject("nfc plugin not defined");

                        return q.promise;
                    },
                    handover: function (uris) {
                        var q = $q.defer();

                        if(typeof nfc != "undefined")
                        {
                            nfc.handover(uris, q.resolve, q.reject);
                        }else
                            q.reject("nfc plugin not defined");

                        return q.promise;
                    },
                    stopHandover: function()
                    {
                        var q = $q.defer();

                        if(typeof nfc != "undefined")
                        {
                            nfc.stopHandover(uris, q.resolve, q.reject);
                        }else
                            q.reject("nfc plugin not defined");

                        return q.promise;
                    },
                    erase: function()
                    {
                        var q = $q.defer();

                        if(typeof nfc != "undefined")
                        {
                            nfc.erase(q.resolve, q.reject);
                        }else
                            q.reject("nfc plugin not defined");

                        return q.promise;
                    },
                    enabled: function()
                    {
                        var q = $q.defer();

                        if(typeof nfc != "undefined")
                        {
                            nfc.enabled(q.resolve, q.reject);
                        }else
                            q.reject("nfc plugin not defined");

                        return q.promise;
                    },
                    removeTagDiscoveredListener: function (callback) {
                        var q = $q.defer();

                        if(typeof nfc != "undefined")
                        {
                            nfc.removeTagDiscoveredListener(callback, q.resolve, q.reject);
                        }else
                            q.reject("nfc plugin not defined");

                        return q.promise;
                    },
                    removeMimeTypeListener: function(mimeType, callback) {
                        var q = $q.defer();

                        if(typeof nfc != "undefined")
                        {
                            nfc.removeMimeTypeListener(mimeType, callback, q.resolve, q.reject);
                        }else
                            q.reject("nfc plugin not defined");

                        return q.promise;
                    },

                    removeNdefListener: function (callback) {
                        var q = $q.defer();

                        if(typeof nfc != "undefined")
                        {
                            nfc.removeNdefListener(callback, q.resolve, q.reject);
                        }else
                            q.reject("nfc plugin not defined");

                        return q.promise;
                    }
                }
            )
        }, false);

        return q.promise;
    }]);
