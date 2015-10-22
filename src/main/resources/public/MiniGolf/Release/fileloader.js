
var Module;

if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');

if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
 var loadPackage = function(metadata) {

    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else if (typeof location !== 'undefined') {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }
    var PACKAGE_NAME = 'Build.data';
    var REMOTE_PACKAGE_BASE = 'Build.data';
    if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
      Module['locateFile'] = Module['locateFilePackage'];
      Module.printErr('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
    }
    var REMOTE_PACKAGE_NAME = typeof Module['locateFile'] === 'function' ?
                              Module['locateFile'](REMOTE_PACKAGE_BASE) :
                              ((Module['filePackagePrefixURL'] || '') + REMOTE_PACKAGE_BASE);
  
      var REMOTE_PACKAGE_SIZE = 12097935;
      var PACKAGE_UUID = '098607ed-b0cf-4651-9852-8b47b3f590c1';
    
    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onload = function(event) {
        var packageData = xhr.response;
        callback(packageData);
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };
  
      var fetched = null, fetchedCallback = null;
      fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
    
  function runWithFS() {

    function assert(check, msg) {
      if (!check) throw msg + new Error().stack;
    }
Module['FS_createPath']('/', 'Il2CppData', true, true);
Module['FS_createPath']('/Il2CppData', 'Metadata', true, true);
Module['FS_createPath']('/', 'Resources', true, true);

    function DataRequest(start, end, crunched, audio) {
      this.start = start;
      this.end = end;
      this.crunched = crunched;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);

          this.finish(byteArray);

      },
      finish: function(byteArray) {
        var that = this;
        Module['FS_createPreloadedFile'](this.name, null, byteArray, true, true, function() {
          Module['removeRunDependency']('fp ' + that.name);
        }, function() {
          if (that.audio) {
            Module['removeRunDependency']('fp ' + that.name); // workaround for chromium bug 124926 (still no audio with this, but at least we don't hang)
          } else {
            Module.printErr('Preloading file ' + that.name + ' failed');
          }
        }, false, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        this.requests[this.name] = null;
      },
    };

      new DataRequest(0, 146880, 0, 0).open('GET', '/level0');
    new DataRequest(146880, 294540, 0, 0).open('GET', '/level1');
    new DataRequest(294540, 446808, 0, 0).open('GET', '/level10');
    new DataRequest(446808, 599068, 0, 0).open('GET', '/level11');
    new DataRequest(599068, 751280, 0, 0).open('GET', '/level12');
    new DataRequest(751280, 907988, 0, 0).open('GET', '/level13');
    new DataRequest(907988, 1057792, 0, 0).open('GET', '/level14');
    new DataRequest(1057792, 1204660, 0, 0).open('GET', '/level15');
    new DataRequest(1204660, 1352040, 0, 0).open('GET', '/level16');
    new DataRequest(1352040, 1504652, 0, 0).open('GET', '/level17');
    new DataRequest(1504652, 1655088, 0, 0).open('GET', '/level18');
    new DataRequest(1655088, 1803020, 0, 0).open('GET', '/level19');
    new DataRequest(1803020, 1950064, 0, 0).open('GET', '/level2');
    new DataRequest(1950064, 2100188, 0, 0).open('GET', '/level20');
    new DataRequest(2100188, 2248120, 0, 0).open('GET', '/level21');
    new DataRequest(2248120, 2401120, 0, 0).open('GET', '/level22');
    new DataRequest(2401120, 2554964, 0, 0).open('GET', '/level23');
    new DataRequest(2554964, 2710336, 0, 0).open('GET', '/level24');
    new DataRequest(2710336, 2857880, 0, 0).open('GET', '/level25');
    new DataRequest(2857880, 3009268, 0, 0).open('GET', '/level26');
    new DataRequest(3009268, 3154952, 0, 0).open('GET', '/level27');
    new DataRequest(3154952, 3301500, 0, 0).open('GET', '/level28');
    new DataRequest(3301500, 3460608, 0, 0).open('GET', '/level29');
    new DataRequest(3460608, 3606964, 0, 0).open('GET', '/level3');
    new DataRequest(3606964, 3757584, 0, 0).open('GET', '/level30');
    new DataRequest(3757584, 3915700, 0, 0).open('GET', '/level31');
    new DataRequest(3915700, 4056508, 0, 0).open('GET', '/level32');
    new DataRequest(4056508, 4204168, 0, 0).open('GET', '/level4');
    new DataRequest(4204168, 4351828, 0, 0).open('GET', '/level5');
    new DataRequest(4351828, 4500480, 0, 0).open('GET', '/level6');
    new DataRequest(4500480, 4650528, 0, 0).open('GET', '/level7');
    new DataRequest(4650528, 4801204, 0, 0).open('GET', '/level8');
    new DataRequest(4801204, 4951328, 0, 0).open('GET', '/level9');
    new DataRequest(4951328, 5182948, 0, 0).open('GET', '/mainData');
    new DataRequest(5182948, 5185191, 0, 0).open('GET', '/methods_pointedto_by_uievents.xml');
    new DataRequest(5185191, 6272019, 0, 0).open('GET', '/sharedassets0.assets');
    new DataRequest(6272019, 8089959, 0, 0).open('GET', '/sharedassets1.assets');
    new DataRequest(8089959, 8096871, 0, 0).open('GET', '/sharedassets10.assets');
    new DataRequest(8096871, 8101459, 0, 0).open('GET', '/sharedassets11.assets');
    new DataRequest(8101459, 8106023, 0, 0).open('GET', '/sharedassets12.assets');
    new DataRequest(8106023, 8110599, 0, 0).open('GET', '/sharedassets13.assets');
    new DataRequest(8110599, 8115127, 0, 0).open('GET', '/sharedassets14.assets');
    new DataRequest(8115127, 8124987, 0, 0).open('GET', '/sharedassets15.assets');
    new DataRequest(8124987, 8129515, 0, 0).open('GET', '/sharedassets16.assets');
    new DataRequest(8129515, 8134043, 0, 0).open('GET', '/sharedassets17.assets');
    new DataRequest(8134043, 8138607, 0, 0).open('GET', '/sharedassets18.assets');
    new DataRequest(8138607, 8143171, 0, 0).open('GET', '/sharedassets19.assets');
    new DataRequest(8143171, 8149351, 0, 0).open('GET', '/sharedassets2.assets');
    new DataRequest(8149351, 8153903, 0, 0).open('GET', '/sharedassets20.assets');
    new DataRequest(8153903, 8158431, 0, 0).open('GET', '/sharedassets21.assets');
    new DataRequest(8158431, 8162983, 0, 0).open('GET', '/sharedassets22.assets');
    new DataRequest(8162983, 8167511, 0, 0).open('GET', '/sharedassets23.assets');
    new DataRequest(8167511, 8172039, 0, 0).open('GET', '/sharedassets24.assets');
    new DataRequest(8172039, 8176567, 0, 0).open('GET', '/sharedassets25.assets');
    new DataRequest(8176567, 8181131, 0, 0).open('GET', '/sharedassets26.assets');
    new DataRequest(8181131, 8185659, 0, 0).open('GET', '/sharedassets27.assets');
    new DataRequest(8185659, 8190175, 0, 0).open('GET', '/sharedassets28.assets');
    new DataRequest(8190175, 8194691, 0, 0).open('GET', '/sharedassets29.assets');
    new DataRequest(8194691, 8199255, 0, 0).open('GET', '/sharedassets3.assets');
    new DataRequest(8199255, 8203795, 0, 0).open('GET', '/sharedassets30.assets');
    new DataRequest(8203795, 8208323, 0, 0).open('GET', '/sharedassets31.assets');
    new DataRequest(8208323, 8212851, 0, 0).open('GET', '/sharedassets32.assets');
    new DataRequest(8212851, 8217199, 0, 0).open('GET', '/sharedassets33.assets');
    new DataRequest(8217199, 8221727, 0, 0).open('GET', '/sharedassets4.assets');
    new DataRequest(8221727, 8226291, 0, 0).open('GET', '/sharedassets5.assets');
    new DataRequest(8226291, 8230855, 0, 0).open('GET', '/sharedassets6.assets');
    new DataRequest(8230855, 8240699, 0, 0).open('GET', '/sharedassets7.assets');
    new DataRequest(8240699, 8245263, 0, 0).open('GET', '/sharedassets8.assets');
    new DataRequest(8245263, 8249827, 0, 0).open('GET', '/sharedassets9.assets');
    new DataRequest(8249827, 9706779, 0, 0).open('GET', '/Il2CppData/Metadata/global-metadata.dat');
    new DataRequest(9706779, 11594203, 0, 0).open('GET', '/Resources/unity_default_resources');
    new DataRequest(11594203, 12097935, 0, 0).open('GET', '/Resources/unity_builtin_extra');

    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
      // Reuse the bytearray from the XHR as the source for file reads.
      DataRequest.prototype.byteArray = byteArray;
          DataRequest.prototype.requests["/level0"].onload();
          DataRequest.prototype.requests["/level1"].onload();
          DataRequest.prototype.requests["/level10"].onload();
          DataRequest.prototype.requests["/level11"].onload();
          DataRequest.prototype.requests["/level12"].onload();
          DataRequest.prototype.requests["/level13"].onload();
          DataRequest.prototype.requests["/level14"].onload();
          DataRequest.prototype.requests["/level15"].onload();
          DataRequest.prototype.requests["/level16"].onload();
          DataRequest.prototype.requests["/level17"].onload();
          DataRequest.prototype.requests["/level18"].onload();
          DataRequest.prototype.requests["/level19"].onload();
          DataRequest.prototype.requests["/level2"].onload();
          DataRequest.prototype.requests["/level20"].onload();
          DataRequest.prototype.requests["/level21"].onload();
          DataRequest.prototype.requests["/level22"].onload();
          DataRequest.prototype.requests["/level23"].onload();
          DataRequest.prototype.requests["/level24"].onload();
          DataRequest.prototype.requests["/level25"].onload();
          DataRequest.prototype.requests["/level26"].onload();
          DataRequest.prototype.requests["/level27"].onload();
          DataRequest.prototype.requests["/level28"].onload();
          DataRequest.prototype.requests["/level29"].onload();
          DataRequest.prototype.requests["/level3"].onload();
          DataRequest.prototype.requests["/level30"].onload();
          DataRequest.prototype.requests["/level31"].onload();
          DataRequest.prototype.requests["/level32"].onload();
          DataRequest.prototype.requests["/level4"].onload();
          DataRequest.prototype.requests["/level5"].onload();
          DataRequest.prototype.requests["/level6"].onload();
          DataRequest.prototype.requests["/level7"].onload();
          DataRequest.prototype.requests["/level8"].onload();
          DataRequest.prototype.requests["/level9"].onload();
          DataRequest.prototype.requests["/mainData"].onload();
          DataRequest.prototype.requests["/methods_pointedto_by_uievents.xml"].onload();
          DataRequest.prototype.requests["/sharedassets0.assets"].onload();
          DataRequest.prototype.requests["/sharedassets1.assets"].onload();
          DataRequest.prototype.requests["/sharedassets10.assets"].onload();
          DataRequest.prototype.requests["/sharedassets11.assets"].onload();
          DataRequest.prototype.requests["/sharedassets12.assets"].onload();
          DataRequest.prototype.requests["/sharedassets13.assets"].onload();
          DataRequest.prototype.requests["/sharedassets14.assets"].onload();
          DataRequest.prototype.requests["/sharedassets15.assets"].onload();
          DataRequest.prototype.requests["/sharedassets16.assets"].onload();
          DataRequest.prototype.requests["/sharedassets17.assets"].onload();
          DataRequest.prototype.requests["/sharedassets18.assets"].onload();
          DataRequest.prototype.requests["/sharedassets19.assets"].onload();
          DataRequest.prototype.requests["/sharedassets2.assets"].onload();
          DataRequest.prototype.requests["/sharedassets20.assets"].onload();
          DataRequest.prototype.requests["/sharedassets21.assets"].onload();
          DataRequest.prototype.requests["/sharedassets22.assets"].onload();
          DataRequest.prototype.requests["/sharedassets23.assets"].onload();
          DataRequest.prototype.requests["/sharedassets24.assets"].onload();
          DataRequest.prototype.requests["/sharedassets25.assets"].onload();
          DataRequest.prototype.requests["/sharedassets26.assets"].onload();
          DataRequest.prototype.requests["/sharedassets27.assets"].onload();
          DataRequest.prototype.requests["/sharedassets28.assets"].onload();
          DataRequest.prototype.requests["/sharedassets29.assets"].onload();
          DataRequest.prototype.requests["/sharedassets3.assets"].onload();
          DataRequest.prototype.requests["/sharedassets30.assets"].onload();
          DataRequest.prototype.requests["/sharedassets31.assets"].onload();
          DataRequest.prototype.requests["/sharedassets32.assets"].onload();
          DataRequest.prototype.requests["/sharedassets33.assets"].onload();
          DataRequest.prototype.requests["/sharedassets4.assets"].onload();
          DataRequest.prototype.requests["/sharedassets5.assets"].onload();
          DataRequest.prototype.requests["/sharedassets6.assets"].onload();
          DataRequest.prototype.requests["/sharedassets7.assets"].onload();
          DataRequest.prototype.requests["/sharedassets8.assets"].onload();
          DataRequest.prototype.requests["/sharedassets9.assets"].onload();
          DataRequest.prototype.requests["/Il2CppData/Metadata/global-metadata.dat"].onload();
          DataRequest.prototype.requests["/Resources/unity_default_resources"].onload();
          DataRequest.prototype.requests["/Resources/unity_builtin_extra"].onload();
          Module['removeRunDependency']('datafile_Build.data');

    };
    Module['addRunDependency']('datafile_Build.data');
  
    if (!Module.preloadResults) Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
    
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

 }
 loadPackage();

})();
