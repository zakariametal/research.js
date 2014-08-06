
var Module;
if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');
if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
    function fetchRemotePackage(packageName, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        if (event.loaded && event.total) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: event.total
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
      fetchRemotePackage('hugs.data', function(data) {
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
Module['FS_createPath']('/', 'home', true, true);
Module['FS_createPath']('/home', 'joel', true, true);
Module['FS_createPath']('/home/joel', 'research.js', true, true);
Module['FS_createPath']('/home/joel/research.js', 'incomplete', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete', 'hugs', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs', 'build', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build', 'hugs98-Sep2006-js', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js', 'hugs-dir', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir', 'lib', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib', 'hugs', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs', 'packages', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages', 'base', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base', 'Control', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control', 'Monad', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Monad', 'ST', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control', 'Concurrent', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base', 'Foreign', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign', 'Marshal', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign', 'C', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base', 'Debug', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base', 'System', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System', 'Console', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System', 'Directory', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System', 'IO', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System', 'Process', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System', 'Mem', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System', 'Posix', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base', 'Data', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data', 'ByteString', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/ByteString', 'Lazy', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data', 'Array', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array', 'IO', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data', 'STRef', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base', 'Text', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text', 'Show', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text', 'PrettyPrint', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text', 'ParserCombinators', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text', 'Read', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages', 'cpphs', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs', 'Text', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Text', 'ParserCombinators', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs', 'Language', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language', 'Preprocessor', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor', 'Cpphs', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages', 'haskell98', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages', 'Cabal', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal', 'Distribution', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution', 'Simple', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution', 'PreProcess', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution', 'Compat', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal', 'Language', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Language', 'Haskell', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages', 'hugsbase', true, true);
Module['FS_createPath']('/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase', 'Hugs', true, true);
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
      new DataRequest(0, 3115, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Numeric.hs');
    new DataRequest(3115, 6996, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/LICENSE');
    new DataRequest(6996, 11096, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Prelude.hs');
    new DataRequest(11096, 12289, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign.hs');
    new DataRequest(12289, 13153, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Paths_base.hs');
    new DataRequest(13153, 22555, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Monad.hs');
    new DataRequest(22555, 39493, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Exception.hs');
    new DataRequest(39493, 48140, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Arrow.hs');
    new DataRequest(48140, 54192, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Applicative.hs');
    new DataRequest(54192, 55599, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Parallel.hs');
    new DataRequest(55599, 65103, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Concurrent.hs');
    new DataRequest(65103, 67505, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Monad/ST.hs');
    new DataRequest(67505, 68336, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Monad/Instances.hs');
    new DataRequest(68336, 70669, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Monad/Fix.hs');
    new DataRequest(70669, 72417, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Monad/ST/Lazy.hs');
    new DataRequest(72417, 73063, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Monad/ST/Strict.hs');
    new DataRequest(73063, 75810, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Concurrent/QSemN.hs');
    new DataRequest(75810, 78883, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Concurrent/MVar.hs');
    new DataRequest(78883, 83606, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Concurrent/Chan.hs');
    new DataRequest(83606, 86975, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Concurrent/SampleVar.hs');
    new DataRequest(86975, 89854, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Concurrent/QSem.hs');
    new DataRequest(89854, 90706, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Marshal.hs');
    new DataRequest(90706, 138756, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Ptr.so');
    new DataRequest(138756, 160598, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Storable.hs');
    new DataRequest(160598, 161285, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/C.hs');
    new DataRequest(161285, 166370, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/ForeignPtr.hs');
    new DataRequest(166370, 168019, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/StablePtr.hs');
    new DataRequest(168019, 187647, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Ptr.hs');
    new DataRequest(187647, 193065, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Marshal/Utils.hs');
    new DataRequest(193065, 207416, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Marshal/Alloc.so');
    new DataRequest(207416, 209877, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Marshal/Error.hs');
    new DataRequest(209877, 216869, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Marshal/Pool.hs');
    new DataRequest(216869, 230721, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Marshal/Utils.so');
    new DataRequest(230721, 236973, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Marshal/Alloc.hs');
    new DataRequest(236973, 245645, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Marshal/Array.hs');
    new DataRequest(245645, 258193, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/C/String.hs');
    new DataRequest(258193, 283315, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/C/Error.hs');
    new DataRequest(283315, 373786, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/C/Types.hs');
    new DataRequest(373786, 421550, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/C/Error.so');
    new DataRequest(421550, 423247, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Debug/Trace.hs');
    new DataRequest(423247, 425898, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Locale.hs');
    new DataRequest(425898, 428114, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Cmd.hs');
    new DataRequest(428114, 429477, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/CPUTime.hs');
    new DataRequest(429477, 430593, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Environment.hs');
    new DataRequest(430593, 431145, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Mem.hs');
    new DataRequest(431145, 432771, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Info.hs');
    new DataRequest(432771, 434788, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Exit.hs');
    new DataRequest(434788, 453271, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Time.hs');
    new DataRequest(453271, 460460, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/IO.hs');
    new DataRequest(460460, 474564, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Random.hs');
    new DataRequest(474564, 484677, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Directory.hs');
    new DataRequest(484677, 497987, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Console/GetOpt.hs');
    new DataRequest(497987, 503677, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Directory/Internals.hs');
    new DataRequest(503677, 504399, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/IO/Unsafe.hs');
    new DataRequest(504399, 515202, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/IO/Error.hs');
    new DataRequest(515202, 528044, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Process/Internals.hs');
    new DataRequest(528044, 548474, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Process/Internals.so');
    new DataRequest(548474, 554279, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Mem/Weak.hs');
    new DataRequest(554279, 556286, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Mem/StableName.hs');
    new DataRequest(556286, 580182, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Posix/Internals.hs');
    new DataRequest(580182, 601285, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Posix/Signals.hs');
    new DataRequest(601285, 690535, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Posix/Internals.so');
    new DataRequest(690535, 738583, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Posix/Types.hs');
    new DataRequest(738583, 758838, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Posix/Signals.so');
    new DataRequest(758838, 771874, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Graph.hs');
    new DataRequest(771874, 774888, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Ratio.hs');
    new DataRequest(774888, 840288, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Map.hs');
    new DataRequest(840288, 843318, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Maybe.hs');
    new DataRequest(843318, 847897, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Traversable.hs');
    new DataRequest(847897, 849798, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Word.hs');
    new DataRequest(849798, 870853, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Typeable.hs');
    new DataRequest(870853, 907410, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Sequence.hs');
    new DataRequest(907410, 912510, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Tree.hs');
    new DataRequest(912510, 913014, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Eq.hs');
    new DataRequest(913014, 928605, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/HashTable.hs');
    new DataRequest(928605, 932650, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Monoid.hs');
    new DataRequest(932650, 961570, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/IntSet.hs');
    new DataRequest(961570, 991481, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/List.hs');
    new DataRequest(991481, 1040458, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/IntMap.hs');
    new DataRequest(1040458, 1045695, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Version.hs');
    new DataRequest(1045695, 1047911, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Ix.hs');
    new DataRequest(1047911, 1061431, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/PackedString.hs');
    new DataRequest(1061431, 1066113, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Dynamic.hs');
    new DataRequest(1066113, 1067208, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Tuple.hs');
    new DataRequest(1067208, 1136086, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/ByteString.hs');
    new DataRequest(1136086, 1137832, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/STRef.hs');
    new DataRequest(1137832, 1145455, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Complex.hs');
    new DataRequest(1145455, 1183290, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Set.hs');
    new DataRequest(1183290, 1192333, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Foldable.hs');
    new DataRequest(1192333, 1195834, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Queue.hs');
    new DataRequest(1195834, 1207711, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Bits.hs');
    new DataRequest(1207711, 1214555, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Char.hs');
    new DataRequest(1214555, 1217380, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array.hs');
    new DataRequest(1217380, 1222193, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Fixed.hs');
    new DataRequest(1222193, 1222825, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Either.hs');
    new DataRequest(1222825, 1223666, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Ord.hs');
    new DataRequest(1223666, 1224387, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Bool.hs');
    new DataRequest(1224387, 1225739, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/FunctorM.hs');
    new DataRequest(1225739, 1227533, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/IORef.hs');
    new DataRequest(1227533, 1229203, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Unique.hs');
    new DataRequest(1229203, 1230844, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Int.hs');
    new DataRequest(1230844, 1252683, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/ByteString/Fusion.hs');
    new DataRequest(1252683, 1304313, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/ByteString/Lazy.hs');
    new DataRequest(1304313, 1327610, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/ByteString/Base.so');
    new DataRequest(1327610, 1365481, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/ByteString/Char8.hs');
    new DataRequest(1365481, 1381226, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/ByteString/Base.hs');
    new DataRequest(1381226, 1411913, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/ByteString/Lazy/Char8.hs');
    new DataRequest(1411913, 1412626, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array/Unboxed.hs');
    new DataRequest(1412626, 1414550, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array/IArray.hs');
    new DataRequest(1414550, 1416994, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array/ST.hs');
    new DataRequest(1416994, 1420455, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array/Storable.hs');
    new DataRequest(1420455, 1437064, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array/Diff.hs');
    new DataRequest(1437064, 1439513, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array/IO.hs');
    new DataRequest(1439513, 1441657, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array/MArray.hs');
    new DataRequest(1441657, 1488608, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array/Base.hs');
    new DataRequest(1488608, 1501205, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array/IO/Internals.hs');
    new DataRequest(1501205, 1502391, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/STRef/Lazy.hs');
    new DataRequest(1502391, 1503016, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/STRef/Strict.hs');
    new DataRequest(1503016, 1503743, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text/PrettyPrint.hs');
    new DataRequest(1503743, 1505073, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text/Show.hs');
    new DataRequest(1505073, 1513547, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text/Printf.hs');
    new DataRequest(1513547, 1515246, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text/Read.hs');
    new DataRequest(1515246, 1515940, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text/Show/Functions.hs');
    new DataRequest(1515940, 1550108, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text/PrettyPrint/HughesPJ.hs');
    new DataRequest(1550108, 1565121, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text/ParserCombinators/ReadP.hs');
    new DataRequest(1565121, 1569613, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text/ParserCombinators/ReadPrec.hs');
    new DataRequest(1569613, 1581673, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text/Read/Lex.hs');
    new DataRequest(1581673, 1582540, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Paths_cpphs.hs');
    new DataRequest(1582540, 1590168, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Text/ParserCombinators/HuttonMeijer.hs');
    new DataRequest(1590168, 1590952, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs.hs');
    new DataRequest(1590952, 1594302, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Unlit.hs');
    new DataRequest(1594302, 1602772, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs/CppIfdef.hs');
    new DataRequest(1602772, 1605193, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs/SymTab.hs');
    new DataRequest(1605193, 1609204, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs/HashDefine.hs');
    new DataRequest(1609204, 1614717, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs/MacroPass.hs');
    new DataRequest(1614717, 1616992, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs/ReadFirst.hs');
    new DataRequest(1616992, 1618278, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs/RunCpphs.hs');
    new DataRequest(1618278, 1631482, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs/Tokenise.hs');
    new DataRequest(1631482, 1632920, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs/Options.hs');
    new DataRequest(1632920, 1635435, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs/Position.hs');
    new DataRequest(1635435, 1635766, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/MarshalError.hs');
    new DataRequest(1635766, 1635875, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Ratio.hs');
    new DataRequest(1635875, 1636134, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Locale.hs');
    new DataRequest(1636134, 1636353, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Maybe.hs');
    new DataRequest(1636353, 1637232, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Paths_haskell98.hs');
    new DataRequest(1637232, 1637288, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Word.hs');
    new DataRequest(1637288, 1638665, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/LICENSE');
    new DataRequest(1638665, 1638725, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/CForeign.hs');
    new DataRequest(1638725, 1638809, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/CPUTime.hs');
    new DataRequest(1638809, 1639172, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Monad.hs');
    new DataRequest(1639172, 1639240, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/CTypes.hs');
    new DataRequest(1639240, 1639433, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/System.hs');
    new DataRequest(1639433, 1640564, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/List.hs');
    new DataRequest(1640564, 1640650, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/MarshalUtils.hs');
    new DataRequest(1640650, 1640729, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Ix.hs');
    new DataRequest(1640729, 1640801, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Storable.hs');
    new DataRequest(1640801, 1640872, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/CString.hs');
    new DataRequest(1640872, 1641473, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Time.hs');
    new DataRequest(1641473, 1641551, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/ForeignPtr.hs');
    new DataRequest(1641551, 1641637, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/MarshalArray.hs');
    new DataRequest(1641637, 1641705, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/CError.hs');
    new DataRequest(1641705, 1643867, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/IO.hs');
    new DataRequest(1643867, 1643953, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/MarshalAlloc.hs');
    new DataRequest(1643953, 1644095, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Complex.hs');
    new DataRequest(1644095, 1644150, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Bits.hs');
    new DataRequest(1644150, 1644481, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Char.hs');
    new DataRequest(1644481, 1644689, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Array.hs');
    new DataRequest(1644689, 1644764, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/StablePtr.hs');
    new DataRequest(1644764, 1644992, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Random.hs');
    new DataRequest(1644992, 1645375, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Directory.hs');
    new DataRequest(1645375, 1645432, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Ptr.hs');
    new DataRequest(1645432, 1645485, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Int.hs');
    new DataRequest(1645485, 1647005, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/LICENSE');
    new DataRequest(1647005, 1647884, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Paths_Cabal.hs');
    new DataRequest(1647884, 1649556, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/copyright');
    new DataRequest(1649556, 1682971, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Setup.hs');
    new DataRequest(1682971, 1693958, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Program.hs');
    new DataRequest(1693958, 1706946, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/PreProcess.hs');
    new DataRequest(1706946, 1710280, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/License.hs');
    new DataRequest(1710280, 1721554, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/InstalledPackageInfo.hs');
    new DataRequest(1721554, 1729288, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Make.hs');
    new DataRequest(1729288, 1732283, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Package.hs');
    new DataRequest(1732283, 1738732, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Version.hs');
    new DataRequest(1738732, 1769528, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/PackageDescription.hs');
    new DataRequest(1769528, 1779463, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Compiler.hs');
    new DataRequest(1779463, 1809788, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple.hs');
    new DataRequest(1809788, 1812898, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/GetOpt.hs');
    new DataRequest(1812898, 1825000, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/ParseUtils.hs');
    new DataRequest(1825000, 1827260, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Extension.hs');
    new DataRequest(1827260, 1832582, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/JHC.hs');
    new DataRequest(1832582, 1849396, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/Utils.hs');
    new DataRequest(1849396, 1862945, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/Register.hs');
    new DataRequest(1862945, 1873161, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/LocalBuildInfo.hs');
    new DataRequest(1873161, 1875966, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/NHC.hs');
    new DataRequest(1875966, 1881162, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/Install.hs');
    new DataRequest(1881162, 1887087, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/GHCPackageConfig.hs');
    new DataRequest(1887087, 1894904, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/SrcDist.hs');
    new DataRequest(1894904, 1912726, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/Configure.hs');
    new DataRequest(1912726, 1927469, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/Hugs.hs');
    new DataRequest(1927469, 1946185, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/GHC.hs');
    new DataRequest(1946185, 1956227, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/Build.hs');
    new DataRequest(1956227, 1960378, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/PreProcess/Unlit.hs');
    new DataRequest(1960378, 1960717, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Compat/Map.hs');
    new DataRequest(1960717, 1960849, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Compat/RawSystem.hs');
    new DataRequest(1960849, 1964228, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Compat/ReadP.hs');
    new DataRequest(1964228, 1964377, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Compat/Exception.hs');
    new DataRequest(1964377, 1977885, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Compat/FilePath.hs');
    new DataRequest(1977885, 1978469, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Compat/Directory.hs');
    new DataRequest(1978469, 1981519, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Language/Haskell/Extension.hs');
    new DataRequest(1981519, 1982395, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Paths_hugsbase.hs');
    new DataRequest(1982395, 1982469, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs.hs');
    new DataRequest(1982469, 1987976, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/ConcBase.hs');
    new DataRequest(1987976, 1991320, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/CVHAssert.hs');
    new DataRequest(1991320, 1991493, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Observe.hs');
    new DataRequest(1991493, 2001125, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/GenericPrint.hs');
    new DataRequest(2001125, 2011497, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Numeric.hs');
    new DataRequest(2011497, 2016222, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Memo.hs');
    new DataRequest(2016222, 2018191, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Weak.hs');
    new DataRequest(2018191, 2033586, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Word.hs');
    new DataRequest(2033586, 2098941, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Prelude.hs');
    new DataRequest(2098941, 2141414, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Storable.so');
    new DataRequest(2141414, 2143756, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Exception.hs');
    new DataRequest(2143756, 2151315, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Internals.hs');
    new DataRequest(2151315, 2153092, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/System.hs');
    new DataRequest(2153092, 2156216, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/IOExts.hs');
    new DataRequest(2156216, 2160805, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/ST.hs');
    new DataRequest(2160805, 2164707, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Storable.hs');
    new DataRequest(2164707, 2165481, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Time.hs');
    new DataRequest(2165481, 2165796, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Dynamic.hs');
    new DataRequest(2165796, 2167331, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Quote.hs');
    new DataRequest(2167331, 2168551, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/ForeignPtr.hs');
    new DataRequest(2168551, 2171108, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/IOArray.hs');
    new DataRequest(2171108, 2176102, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/IO.hs');
    new DataRequest(2176102, 2179255, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/ByteArray.hs');
    new DataRequest(2179255, 2179609, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Bits.hs');
    new DataRequest(2179609, 2181122, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Char.hs');
    new DataRequest(2181122, 2184897, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Array.hs');
    new DataRequest(2184897, 2185320, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/StablePtr.hs');
    new DataRequest(2185320, 2185653, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Stable.hs');
    new DataRequest(2185653, 2186211, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/IORef.hs');
    new DataRequest(2186211, 2189129, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Directory.hs');
    new DataRequest(2189129, 2191068, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/LazyST.hs');
    new DataRequest(2191068, 2193480, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Ptr.hs');
    new DataRequest(2193480, 2195350, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Trex.hs');
    new DataRequest(2195350, 2207723, 0, 0).open('GET', '/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Int.hs');
    var PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    var PACKAGE_NAME = 'hugs.data';
    var REMOTE_PACKAGE_NAME = 'hugs.data';
    var PACKAGE_UUID = 'f5561335-949f-42e2-8a76-a9eb89e5dbc6';
    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though.
      var ptr = Module['_malloc'](byteArray.length);
      Module['HEAPU8'].set(byteArray, ptr);
      DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Numeric.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/LICENSE"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Prelude.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Paths_base.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Monad.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Exception.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Arrow.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Applicative.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Parallel.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Concurrent.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Monad/ST.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Monad/Instances.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Monad/Fix.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Monad/ST/Lazy.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Monad/ST/Strict.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Concurrent/QSemN.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Concurrent/MVar.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Concurrent/Chan.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Concurrent/SampleVar.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Control/Concurrent/QSem.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Marshal.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Ptr.so"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Storable.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/C.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/ForeignPtr.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/StablePtr.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Ptr.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Marshal/Utils.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Marshal/Alloc.so"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Marshal/Error.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Marshal/Pool.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Marshal/Utils.so"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Marshal/Alloc.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/Marshal/Array.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/C/String.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/C/Error.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/C/Types.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Foreign/C/Error.so"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Debug/Trace.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Locale.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Cmd.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/CPUTime.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Environment.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Mem.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Info.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Exit.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Time.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/IO.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Random.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Directory.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Console/GetOpt.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Directory/Internals.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/IO/Unsafe.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/IO/Error.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Process/Internals.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Process/Internals.so"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Mem/Weak.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Mem/StableName.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Posix/Internals.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Posix/Signals.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Posix/Internals.so"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Posix/Types.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/System/Posix/Signals.so"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Graph.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Ratio.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Map.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Maybe.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Traversable.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Word.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Typeable.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Sequence.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Tree.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Eq.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/HashTable.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Monoid.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/IntSet.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/List.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/IntMap.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Version.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Ix.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/PackedString.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Dynamic.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Tuple.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/ByteString.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/STRef.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Complex.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Set.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Foldable.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Queue.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Bits.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Char.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Fixed.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Either.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Ord.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Bool.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/FunctorM.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/IORef.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Unique.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Int.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/ByteString/Fusion.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/ByteString/Lazy.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/ByteString/Base.so"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/ByteString/Char8.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/ByteString/Base.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/ByteString/Lazy/Char8.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array/Unboxed.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array/IArray.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array/ST.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array/Storable.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array/Diff.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array/IO.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array/MArray.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array/Base.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/Array/IO/Internals.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/STRef/Lazy.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Data/STRef/Strict.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text/PrettyPrint.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text/Show.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text/Printf.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text/Read.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text/Show/Functions.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text/PrettyPrint/HughesPJ.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text/ParserCombinators/ReadP.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text/ParserCombinators/ReadPrec.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/base/Text/Read/Lex.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Paths_cpphs.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Text/ParserCombinators/HuttonMeijer.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Unlit.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs/CppIfdef.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs/SymTab.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs/HashDefine.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs/MacroPass.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs/ReadFirst.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs/RunCpphs.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs/Tokenise.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs/Options.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/cpphs/Language/Preprocessor/Cpphs/Position.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/MarshalError.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Ratio.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Locale.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Maybe.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Paths_haskell98.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Word.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/LICENSE"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/CForeign.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/CPUTime.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Monad.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/CTypes.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/System.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/List.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/MarshalUtils.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Ix.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Storable.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/CString.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Time.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/ForeignPtr.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/MarshalArray.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/CError.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/IO.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/MarshalAlloc.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Complex.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Bits.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Char.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Array.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/StablePtr.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Random.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Directory.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Ptr.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/haskell98/Int.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/LICENSE"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Paths_Cabal.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/copyright"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Setup.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Program.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/PreProcess.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/License.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/InstalledPackageInfo.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Make.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Package.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Version.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/PackageDescription.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Compiler.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/GetOpt.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/ParseUtils.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Extension.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/JHC.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/Utils.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/Register.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/LocalBuildInfo.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/NHC.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/Install.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/GHCPackageConfig.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/SrcDist.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/Configure.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/Hugs.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/GHC.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Simple/Build.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/PreProcess/Unlit.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Compat/Map.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Compat/RawSystem.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Compat/ReadP.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Compat/Exception.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Compat/FilePath.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Distribution/Compat/Directory.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/Cabal/Language/Haskell/Extension.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Paths_hugsbase.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/ConcBase.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/CVHAssert.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Observe.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/GenericPrint.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Numeric.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Memo.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Weak.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Word.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Prelude.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Storable.so"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Exception.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Internals.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/System.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/IOExts.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/ST.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Storable.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Time.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Dynamic.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Quote.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/ForeignPtr.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/IOArray.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/IO.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/ByteArray.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Bits.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Char.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Array.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/StablePtr.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Stable.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/IORef.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Directory.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/LazyST.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Ptr.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Trex.hs"].onload();
          DataRequest.prototype.requests["/home/joel/research.js/incomplete/hugs/build/hugs98-Sep2006-js/hugs-dir/lib/hugs/packages/hugsbase/Hugs/Int.hs"].onload();
          Module['removeRunDependency']('datafile_hugs.data');
    };
    Module['addRunDependency']('datafile_hugs.data');
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
})();
// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// The Module object: Our interface to the outside world. We import
// and export values on it, and do the work to get that through
// closure compiler if necessary. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to do an eval in order to handle the closure compiler
// case, where this code here is minified but Module was defined
// elsewhere (e.g. case 4 above). We also need to check if Module
// already exists (e.g. case 3 above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module;
if (!Module) Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');
// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
for (var key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}
// The environment setup code below is customized to use Module.
// *** Environment setup code ***
var ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof require === 'function';
var ENVIRONMENT_IS_WEB = typeof window === 'object';
var ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
if (ENVIRONMENT_IS_NODE) {
  // Expose functionality in the same simple way that the shells work
  // Note that we pollute the global namespace here, otherwise we break in node
  Module['print'] = function print(x) {
    process['stdout'].write(x + '\n');
  };
  Module['printErr'] = function printErr(x) {
    process['stderr'].write(x + '\n');
  };
  var nodeFS = require('fs');
  var nodePath = require('path');
  Module['read'] = function read(filename, binary) {
    filename = nodePath['normalize'](filename);
    var ret = nodeFS['readFileSync'](filename);
    // The path is absolute if the normalized version is the same as the resolved.
    if (!ret && filename != nodePath['resolve'](filename)) {
      filename = path.join(__dirname, '..', 'src', filename);
      ret = nodeFS['readFileSync'](filename);
    }
    if (ret && !binary) ret = ret.toString();
    return ret;
  };
  Module['readBinary'] = function readBinary(filename) { return Module['read'](filename, true) };
  Module['load'] = function load(f) {
    globalEval(read(f));
  };
  Module['arguments'] = process['argv'].slice(2);
  module['exports'] = Module;
}
else if (ENVIRONMENT_IS_SHELL) {
  Module['print'] = print;
  if (typeof printErr != 'undefined') Module['printErr'] = printErr; // not present in v8 or older sm
  if (typeof read != 'undefined') {
    Module['read'] = read;
  } else {
    Module['read'] = function read() { throw 'no read() available (jsc?)' };
  }
  Module['readBinary'] = function readBinary(f) {
    return read(f, 'binary');
  };
  if (typeof scriptArgs != 'undefined') {
    Module['arguments'] = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }
  this['Module'] = Module;
}
else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  Module['read'] = function read(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    return xhr.responseText;
  };
  if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }
  if (typeof console !== 'undefined') {
    Module['print'] = function print(x) {
      console.log(x);
    };
    Module['printErr'] = function printErr(x) {
      console.log(x);
    };
  } else {
    // Probably a worker, and without console.log. We can do very little here...
    var TRY_USE_DUMP = false;
    Module['print'] = (TRY_USE_DUMP && (typeof(dump) !== "undefined") ? (function(x) {
      dump(x);
    }) : (function(x) {
      // self.postMessage(x); // enable this if you want stdout to be sent as messages
    }));
  }
  if (ENVIRONMENT_IS_WEB) {
    this['Module'] = Module;
  } else {
    Module['load'] = importScripts;
  }
}
else {
  // Unreachable because SHELL is dependant on the others
  throw 'Unknown runtime environment. Where are we?';
}
function globalEval(x) {
  eval.call(null, x);
}
if (!Module['load'] == 'undefined' && Module['read']) {
  Module['load'] = function load(f) {
    globalEval(Module['read'](f));
  };
}
if (!Module['print']) {
  Module['print'] = function(){};
}
if (!Module['printErr']) {
  Module['printErr'] = Module['print'];
}
if (!Module['arguments']) {
  Module['arguments'] = [];
}
// *** Environment setup code ***
// Closure helpers
Module.print = Module['print'];
Module.printErr = Module['printErr'];
// Callbacks
Module['preRun'] = [];
Module['postRun'] = [];
// Merge back in the overrides
for (var key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// === Auto-generated preamble library stuff ===
//========================================
// Runtime code shared with compiler
//========================================
var Runtime = {
  stackSave: function () {
    return STACKTOP;
  },
  stackRestore: function (stackTop) {
    STACKTOP = stackTop;
  },
  forceAlign: function (target, quantum) {
    quantum = quantum || 4;
    if (quantum == 1) return target;
    if (isNumber(target) && isNumber(quantum)) {
      return Math.ceil(target/quantum)*quantum;
    } else if (isNumber(quantum) && isPowerOfTwo(quantum)) {
      return '(((' +target + ')+' + (quantum-1) + ')&' + -quantum + ')';
    }
    return 'Math.ceil((' + target + ')/' + quantum + ')*' + quantum;
  },
  isNumberType: function (type) {
    return type in Runtime.INT_TYPES || type in Runtime.FLOAT_TYPES;
  },
  isPointerType: function isPointerType(type) {
  return type[type.length-1] == '*';
},
  isStructType: function isStructType(type) {
  if (isPointerType(type)) return false;
  if (isArrayType(type)) return true;
  if (/<?{ ?[^}]* ?}>?/.test(type)) return true; // { i32, i8 } etc. - anonymous struct types
  // See comment in isStructPointerType()
  return type[0] == '%';
},
  INT_TYPES: {"i1":0,"i8":0,"i16":0,"i32":0,"i64":0},
  FLOAT_TYPES: {"float":0,"double":0},
  or64: function (x, y) {
    var l = (x | 0) | (y | 0);
    var h = (Math.round(x / 4294967296) | Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  and64: function (x, y) {
    var l = (x | 0) & (y | 0);
    var h = (Math.round(x / 4294967296) & Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  xor64: function (x, y) {
    var l = (x | 0) ^ (y | 0);
    var h = (Math.round(x / 4294967296) ^ Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  getNativeTypeSize: function (type) {
    switch (type) {
      case 'i1': case 'i8': return 1;
      case 'i16': return 2;
      case 'i32': return 4;
      case 'i64': return 8;
      case 'float': return 4;
      case 'double': return 8;
      default: {
        if (type[type.length-1] === '*') {
          return Runtime.QUANTUM_SIZE; // A pointer
        } else if (type[0] === 'i') {
          var bits = parseInt(type.substr(1));
          assert(bits % 8 === 0);
          return bits/8;
        } else {
          return 0;
        }
      }
    }
  },
  getNativeFieldSize: function (type) {
    return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE);
  },
  dedup: function dedup(items, ident) {
  var seen = {};
  if (ident) {
    return items.filter(function(item) {
      if (seen[item[ident]]) return false;
      seen[item[ident]] = true;
      return true;
    });
  } else {
    return items.filter(function(item) {
      if (seen[item]) return false;
      seen[item] = true;
      return true;
    });
  }
},
  set: function set() {
  var args = typeof arguments[0] === 'object' ? arguments[0] : arguments;
  var ret = {};
  for (var i = 0; i < args.length; i++) {
    ret[args[i]] = 0;
  }
  return ret;
},
  STACK_ALIGN: 8,
  getAlignSize: function (type, size, vararg) {
    // we align i64s and doubles on 64-bit boundaries, unlike x86
    if (type == 'i64' || type == 'double' || vararg) return 8;
    if (!type) return Math.min(size, 8); // align structures internally to 64 bits
    return Math.min(size || (type ? Runtime.getNativeFieldSize(type) : 0), Runtime.QUANTUM_SIZE);
  },
  calculateStructAlignment: function calculateStructAlignment(type) {
    type.flatSize = 0;
    type.alignSize = 0;
    var diffs = [];
    var prev = -1;
    var index = 0;
    type.flatIndexes = type.fields.map(function(field) {
      index++;
      var size, alignSize;
      if (Runtime.isNumberType(field) || Runtime.isPointerType(field)) {
        size = Runtime.getNativeTypeSize(field); // pack char; char; in structs, also char[X]s.
        alignSize = Runtime.getAlignSize(field, size);
      } else if (Runtime.isStructType(field)) {
        if (field[1] === '0') {
          // this is [0 x something]. When inside another structure like here, it must be at the end,
          // and it adds no size
          // XXX this happens in java-nbody for example... assert(index === type.fields.length, 'zero-length in the middle!');
          size = 0;
          if (Types.types[field]) {
            alignSize = Runtime.getAlignSize(null, Types.types[field].alignSize);
          } else {
            alignSize = type.alignSize || QUANTUM_SIZE;
          }
        } else {
          size = Types.types[field].flatSize;
          alignSize = Runtime.getAlignSize(null, Types.types[field].alignSize);
        }
      } else if (field[0] == 'b') {
        // bN, large number field, like a [N x i8]
        size = field.substr(1)|0;
        alignSize = 1;
      } else if (field[0] === '<') {
        // vector type
        size = alignSize = Types.types[field].flatSize; // fully aligned
      } else if (field[0] === 'i') {
        // illegal integer field, that could not be legalized because it is an internal structure field
        // it is ok to have such fields, if we just use them as markers of field size and nothing more complex
        size = alignSize = parseInt(field.substr(1))/8;
        assert(size % 1 === 0, 'cannot handle non-byte-size field ' + field);
      } else {
        assert(false, 'invalid type for calculateStructAlignment');
      }
      if (type.packed) alignSize = 1;
      type.alignSize = Math.max(type.alignSize, alignSize);
      var curr = Runtime.alignMemory(type.flatSize, alignSize); // if necessary, place this on aligned memory
      type.flatSize = curr + size;
      if (prev >= 0) {
        diffs.push(curr-prev);
      }
      prev = curr;
      return curr;
    });
    if (type.name_[0] === '[') {
      // arrays have 2 elements, so we get the proper difference. then we scale here. that way we avoid
      // allocating a potentially huge array for [999999 x i8] etc.
      type.flatSize = parseInt(type.name_.substr(1))*type.flatSize/2;
    }
    type.flatSize = Runtime.alignMemory(type.flatSize, type.alignSize);
    if (diffs.length == 0) {
      type.flatFactor = type.flatSize;
    } else if (Runtime.dedup(diffs).length == 1) {
      type.flatFactor = diffs[0];
    }
    type.needsFlattening = (type.flatFactor != 1);
    return type.flatIndexes;
  },
  generateStructInfo: function (struct, typeName, offset) {
    var type, alignment;
    if (typeName) {
      offset = offset || 0;
      type = (typeof Types === 'undefined' ? Runtime.typeInfo : Types.types)[typeName];
      if (!type) return null;
      if (type.fields.length != struct.length) {
        printErr('Number of named fields must match the type for ' + typeName + ': possibly duplicate struct names. Cannot return structInfo');
        return null;
      }
      alignment = type.flatIndexes;
    } else {
      var type = { fields: struct.map(function(item) { return item[0] }) };
      alignment = Runtime.calculateStructAlignment(type);
    }
    var ret = {
      __size__: type.flatSize
    };
    if (typeName) {
      struct.forEach(function(item, i) {
        if (typeof item === 'string') {
          ret[item] = alignment[i] + offset;
        } else {
          // embedded struct
          var key;
          for (var k in item) key = k;
          ret[key] = Runtime.generateStructInfo(item[key], type.fields[i], alignment[i]);
        }
      });
    } else {
      struct.forEach(function(item, i) {
        ret[item[1]] = alignment[i];
      });
    }
    return ret;
  },
  dynCall: function (sig, ptr, args) {
    if (args && args.length) {
      if (!args.splice) args = Array.prototype.slice.call(args);
      args.splice(0, 0, ptr);
      return Module['dynCall_' + sig].apply(null, args);
    } else {
      return Module['dynCall_' + sig].call(null, ptr);
    }
  },
  functionPointers: [],
  addFunction: function (func) {
    for (var i = 0; i < Runtime.functionPointers.length; i++) {
      if (!Runtime.functionPointers[i]) {
        Runtime.functionPointers[i] = func;
        return 2*(1 + i);
      }
    }
    throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
  },
  removeFunction: function (index) {
    Runtime.functionPointers[(index-2)/2] = null;
  },
  getAsmConst: function (code, numArgs) {
    // code is a constant string on the heap, so we can cache these
    if (!Runtime.asmConstCache) Runtime.asmConstCache = {};
    var func = Runtime.asmConstCache[code];
    if (func) return func;
    var args = [];
    for (var i = 0; i < numArgs; i++) {
      args.push(String.fromCharCode(36) + i); // $0, $1 etc
    }
    return Runtime.asmConstCache[code] = eval('(function(' + args.join(',') + '){ ' + Pointer_stringify(code) + ' })'); // new Function does not allow upvars in node
  },
  warnOnce: function (text) {
    if (!Runtime.warnOnce.shown) Runtime.warnOnce.shown = {};
    if (!Runtime.warnOnce.shown[text]) {
      Runtime.warnOnce.shown[text] = 1;
      Module.printErr(text);
    }
  },
  funcWrappers: {},
  getFuncWrapper: function (func, sig) {
    assert(sig);
    if (!Runtime.funcWrappers[func]) {
      Runtime.funcWrappers[func] = function dynCall_wrapper() {
        return Runtime.dynCall(sig, func, arguments);
      };
    }
    return Runtime.funcWrappers[func];
  },
  UTF8Processor: function () {
    var buffer = [];
    var needed = 0;
    this.processCChar = function (code) {
      code = code & 0xFF;
      if (buffer.length == 0) {
        if ((code & 0x80) == 0x00) {        // 0xxxxxxx
          return String.fromCharCode(code);
        }
        buffer.push(code);
        if ((code & 0xE0) == 0xC0) {        // 110xxxxx
          needed = 1;
        } else if ((code & 0xF0) == 0xE0) { // 1110xxxx
          needed = 2;
        } else {                            // 11110xxx
          needed = 3;
        }
        return '';
      }
      if (needed) {
        buffer.push(code);
        needed--;
        if (needed > 0) return '';
      }
      var c1 = buffer[0];
      var c2 = buffer[1];
      var c3 = buffer[2];
      var c4 = buffer[3];
      var ret;
      if (buffer.length == 2) {
        ret = String.fromCharCode(((c1 & 0x1F) << 6)  | (c2 & 0x3F));
      } else if (buffer.length == 3) {
        ret = String.fromCharCode(((c1 & 0x0F) << 12) | ((c2 & 0x3F) << 6)  | (c3 & 0x3F));
      } else {
        // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        var codePoint = ((c1 & 0x07) << 18) | ((c2 & 0x3F) << 12) |
                        ((c3 & 0x3F) << 6)  | (c4 & 0x3F);
        ret = String.fromCharCode(
          Math.floor((codePoint - 0x10000) / 0x400) + 0xD800,
          (codePoint - 0x10000) % 0x400 + 0xDC00);
      }
      buffer.length = 0;
      return ret;
    }
    this.processJSString = function processJSString(string) {
      string = unescape(encodeURIComponent(string));
      var ret = [];
      for (var i = 0; i < string.length; i++) {
        ret.push(string.charCodeAt(i));
      }
      return ret;
    }
  },
  stackAlloc: function (size) { var ret = STACKTOP;STACKTOP = (STACKTOP + size)|0;STACKTOP = (((STACKTOP)+7)&-8); return ret; },
  staticAlloc: function (size) { var ret = STATICTOP;STATICTOP = (STATICTOP + size)|0;STATICTOP = (((STATICTOP)+7)&-8); return ret; },
  dynamicAlloc: function (size) { var ret = DYNAMICTOP;DYNAMICTOP = (DYNAMICTOP + size)|0;DYNAMICTOP = (((DYNAMICTOP)+7)&-8); if (DYNAMICTOP >= TOTAL_MEMORY) enlargeMemory();; return ret; },
  alignMemory: function (size,quantum) { var ret = size = Math.ceil((size)/(quantum ? quantum : 8))*(quantum ? quantum : 8); return ret; },
  makeBigInt: function (low,high,unsigned) { var ret = (unsigned ? ((+((low>>>0)))+((+((high>>>0)))*(+4294967296))) : ((+((low>>>0)))+((+((high|0)))*(+4294967296)))); return ret; },
  GLOBAL_BASE: 8,
  QUANTUM_SIZE: 4,
  __dummy__: 0
}
//========================================
// Runtime essentials
//========================================
var __THREW__ = 0; // Used in checking for thrown exceptions.
var ABORT = false; // whether we are quitting the application. no code should run after this. set in exit() and abort()
var EXITSTATUS = 0;
var undef = 0;
// tempInt is used for 32-bit signed values or smaller. tempBigInt is used
// for 32-bit unsigned values or more than 32 bits. TODO: audit all uses of tempInt
var tempValue, tempInt, tempBigInt, tempInt2, tempBigInt2, tempPair, tempBigIntI, tempBigIntR, tempBigIntS, tempBigIntP, tempBigIntD, tempDouble, tempFloat;
var tempI64, tempI64b;
var tempRet0, tempRet1, tempRet2, tempRet3, tempRet4, tempRet5, tempRet6, tempRet7, tempRet8, tempRet9;
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}
var globalScope = this;
// C calling interface. A convenient way to call C functions (in C files, or
// defined with extern "C").
//
// Note: LLVM optimizations can inline and remove functions, after which you will not be
//       able to call them. Closure can also do so. To avoid that, add your function to
//       the exports using something like
//
//         -s EXPORTED_FUNCTIONS='["_main", "_myfunc"]'
//
// @param ident      The name of the C function (note that C++ functions will be name-mangled - use extern "C")
// @param returnType The return type of the function, one of the JS types 'number', 'string' or 'array' (use 'number' for any C pointer, and
//                   'array' for JavaScript arrays and typed arrays; note that arrays are 8-bit).
// @param argTypes   An array of the types of arguments for the function (if there are no arguments, this can be ommitted). Types are as in returnType,
//                   except that 'array' is not possible (there is no way for us to know the length of the array)
// @param args       An array of the arguments to the function, as native JS values (as in returnType)
//                   Note that string arguments will be stored on the stack (the JS string will become a C string on the stack).
// @return           The return value, as a native JS value (as in returnType)
function ccall(ident, returnType, argTypes, args) {
  return ccallFunc(getCFunc(ident), returnType, argTypes, args);
}
Module["ccall"] = ccall;
// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  try {
    var func = Module['_' + ident]; // closure exported function
    if (!func) func = eval('_' + ident); // explicit lookup
  } catch(e) {
  }
  assert(func, 'Cannot call unknown function ' + ident + ' (perhaps LLVM optimizations or closure removed it?)');
  return func;
}
// Internal function that does a C call using a function, not an identifier
function ccallFunc(func, returnType, argTypes, args) {
  var stack = 0;
  function toC(value, type) {
    if (type == 'string') {
      if (value === null || value === undefined || value === 0) return 0; // null string
      value = intArrayFromString(value);
      type = 'array';
    }
    if (type == 'array') {
      if (!stack) stack = Runtime.stackSave();
      var ret = Runtime.stackAlloc(value.length);
      writeArrayToMemory(value, ret);
      return ret;
    }
    return value;
  }
  function fromC(value, type) {
    if (type == 'string') {
      return Pointer_stringify(value);
    }
    assert(type != 'array');
    return value;
  }
  var i = 0;
  var cArgs = args ? args.map(function(arg) {
    return toC(arg, argTypes[i++]);
  }) : [];
  var ret = fromC(func.apply(null, cArgs), returnType);
  if (stack) Runtime.stackRestore(stack);
  return ret;
}
// Returns a native JS wrapper for a C function. This is similar to ccall, but
// returns a function you can call repeatedly in a normal way. For example:
//
//   var my_function = cwrap('my_c_function', 'number', ['number', 'number']);
//   alert(my_function(5, 22));
//   alert(my_function(99, 12));
//
function cwrap(ident, returnType, argTypes) {
  var func = getCFunc(ident);
  return function() {
    return ccallFunc(func, returnType, argTypes, Array.prototype.slice.call(arguments));
  }
}
Module["cwrap"] = cwrap;
// Sets a value in memory in a dynamic way at run-time. Uses the
// type data. This is the same as makeSetValue, except that
// makeSetValue is done at compile-time and generates the needed
// code then, whereas this function picks the right code at
// run-time.
// Note that setValue and getValue only do *aligned* writes and reads!
// Note that ccall uses JS types as for defining types, while setValue and
// getValue need LLVM types ('i8', 'i32') - this is a lower-level operation
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[(ptr)]=value; break;
      case 'i8': HEAP8[(ptr)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= (+1) ? (tempDouble > (+0) ? ((Math_min((+(Math_floor((tempDouble)/(+4294967296)))), (+4294967295)))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/(+4294967296))))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}
Module['setValue'] = setValue;
// Parallel to setValue.
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[(ptr)];
      case 'i8': return HEAP8[(ptr)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for setValue: ' + type);
    }
  return null;
}
Module['getValue'] = getValue;
var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_STATIC = 2; // Cannot be freed
var ALLOC_DYNAMIC = 3; // Cannot be freed except through sbrk
var ALLOC_NONE = 4; // Do not allocate
Module['ALLOC_NORMAL'] = ALLOC_NORMAL;
Module['ALLOC_STACK'] = ALLOC_STACK;
Module['ALLOC_STATIC'] = ALLOC_STATIC;
Module['ALLOC_DYNAMIC'] = ALLOC_DYNAMIC;
Module['ALLOC_NONE'] = ALLOC_NONE;
// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }
  var singleType = typeof types === 'string' ? types : null;
  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [_malloc, Runtime.stackAlloc, Runtime.staticAlloc, Runtime.dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
  }
  if (zeroinit) {
    var ptr = ret, stop;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)|0)]=0;
    }
    return ret;
  }
  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(slab, ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }
  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];
    if (typeof curr === 'function') {
      curr = Runtime.getFunctionIndex(curr);
    }
    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }
    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later
    setValue(ret+i, curr, type);
    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = Runtime.getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }
  return ret;
}
Module['allocate'] = allocate;
function Pointer_stringify(ptr, /* optional */ length) {
  // TODO: use TextDecoder
  // Find the length, and check for UTF while doing so
  var hasUtf = false;
  var t;
  var i = 0;
  while (1) {
    t = HEAPU8[(((ptr)+(i))|0)];
    if (t >= 128) hasUtf = true;
    else if (t == 0 && !length) break;
    i++;
    if (length && i == length) break;
  }
  if (!length) length = i;
  var ret = '';
  if (!hasUtf) {
    var MAX_CHUNK = 1024; // split up into chunks, because .apply on a huge string can overflow the stack
    var curr;
    while (length > 0) {
      curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
      ret = ret ? ret + curr : curr;
      ptr += MAX_CHUNK;
      length -= MAX_CHUNK;
    }
    return ret;
  }
  var utf8 = new Runtime.UTF8Processor();
  for (i = 0; i < length; i++) {
    t = HEAPU8[(((ptr)+(i))|0)];
    ret += utf8.processCChar(t);
  }
  return ret;
}
Module['Pointer_stringify'] = Pointer_stringify;
// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.
function UTF16ToString(ptr) {
  var i = 0;
  var str = '';
  while (1) {
    var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
    if (codeUnit == 0)
      return str;
    ++i;
    // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
    str += String.fromCharCode(codeUnit);
  }
}
Module['UTF16ToString'] = UTF16ToString;
// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr', 
// null-terminated and encoded in UTF16LE form. The copy will require at most (str.length*2+1)*2 bytes of space in the HEAP.
function stringToUTF16(str, outPtr) {
  for(var i = 0; i < str.length; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[(((outPtr)+(i*2))>>1)]=codeUnit
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[(((outPtr)+(str.length*2))>>1)]=0
}
Module['stringToUTF16'] = stringToUTF16;
// Given a pointer 'ptr' to a null-terminated UTF32LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.
function UTF32ToString(ptr) {
  var i = 0;
  var str = '';
  while (1) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0)
      return str;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
}
Module['UTF32ToString'] = UTF32ToString;
// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr', 
// null-terminated and encoded in UTF32LE form. The copy will require at most (str.length+1)*4 bytes of space in the HEAP,
// but can use less, since str.length does not return the number of characters in the string, but the number of UTF-16 code units in the string.
function stringToUTF32(str, outPtr) {
  var iChar = 0;
  for(var iCodeUnit = 0; iCodeUnit < str.length; ++iCodeUnit) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    var codeUnit = str.charCodeAt(iCodeUnit); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++iCodeUnit);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[(((outPtr)+(iChar*4))>>2)]=codeUnit
    ++iChar;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[(((outPtr)+(iChar*4))>>2)]=0
}
Module['stringToUTF32'] = stringToUTF32;
function demangle(func) {
  try {
    if (typeof func === 'number') func = Pointer_stringify(func);
    if (func[0] !== '_') return func;
    if (func[1] !== '_') return func; // C function
    if (func[2] !== 'Z') return func;
    switch (func[3]) {
      case 'n': return 'operator new()';
      case 'd': return 'operator delete()';
    }
    var i = 3;
    // params, etc.
    var basicTypes = {
      'v': 'void',
      'b': 'bool',
      'c': 'char',
      's': 'short',
      'i': 'int',
      'l': 'long',
      'f': 'float',
      'd': 'double',
      'w': 'wchar_t',
      'a': 'signed char',
      'h': 'unsigned char',
      't': 'unsigned short',
      'j': 'unsigned int',
      'm': 'unsigned long',
      'x': 'long long',
      'y': 'unsigned long long',
      'z': '...'
    };
    function dump(x) {
      //return;
      if (x) Module.print(x);
      Module.print(func);
      var pre = '';
      for (var a = 0; a < i; a++) pre += ' ';
      Module.print (pre + '^');
    }
    var subs = [];
    function parseNested() {
      i++;
      if (func[i] === 'K') i++; // ignore const
      var parts = [];
      while (func[i] !== 'E') {
        if (func[i] === 'S') { // substitution
          i++;
          var next = func.indexOf('_', i);
          var num = func.substring(i, next) || 0;
          parts.push(subs[num] || '?');
          i = next+1;
          continue;
        }
        if (func[i] === 'C') { // constructor
          parts.push(parts[parts.length-1]);
          i += 2;
          continue;
        }
        var size = parseInt(func.substr(i));
        var pre = size.toString().length;
        if (!size || !pre) { i--; break; } // counter i++ below us
        var curr = func.substr(i + pre, size);
        parts.push(curr);
        subs.push(curr);
        i += pre + size;
      }
      i++; // skip E
      return parts;
    }
    var first = true;
    function parse(rawList, limit, allowVoid) { // main parser
      limit = limit || Infinity;
      var ret = '', list = [];
      function flushList() {
        return '(' + list.join(', ') + ')';
      }
      var name;
      if (func[i] === 'N') {
        // namespaced N-E
        name = parseNested().join('::');
        limit--;
        if (limit === 0) return rawList ? [name] : name;
      } else {
        // not namespaced
        if (func[i] === 'K' || (first && func[i] === 'L')) i++; // ignore const and first 'L'
        var size = parseInt(func.substr(i));
        if (size) {
          var pre = size.toString().length;
          name = func.substr(i + pre, size);
          i += pre + size;
        }
      }
      first = false;
      if (func[i] === 'I') {
        i++;
        var iList = parse(true);
        var iRet = parse(true, 1, true);
        ret += iRet[0] + ' ' + name + '<' + iList.join(', ') + '>';
      } else {
        ret = name;
      }
      paramLoop: while (i < func.length && limit-- > 0) {
        //dump('paramLoop');
        var c = func[i++];
        if (c in basicTypes) {
          list.push(basicTypes[c]);
        } else {
          switch (c) {
            case 'P': list.push(parse(true, 1, true)[0] + '*'); break; // pointer
            case 'R': list.push(parse(true, 1, true)[0] + '&'); break; // reference
            case 'L': { // literal
              i++; // skip basic type
              var end = func.indexOf('E', i);
              var size = end - i;
              list.push(func.substr(i, size));
              i += size + 2; // size + 'EE'
              break;
            }
            case 'A': { // array
              var size = parseInt(func.substr(i));
              i += size.toString().length;
              if (func[i] !== '_') throw '?';
              i++; // skip _
              list.push(parse(true, 1, true)[0] + ' [' + size + ']');
              break;
            }
            case 'E': break paramLoop;
            default: ret += '?' + c; break paramLoop;
          }
        }
      }
      if (!allowVoid && list.length === 1 && list[0] === 'void') list = []; // avoid (void)
      return rawList ? list : ret + flushList();
    }
    return parse();
  } catch(e) {
    return func;
  }
}
function demangleAll(text) {
  return text.replace(/__Z[\w\d_]+/g, function(x) { var y = demangle(x); return x === y ? x : (x + ' [' + y + ']') });
}
function stackTrace() {
  var stack = new Error().stack;
  return stack ? demangleAll(stack) : '(no stack trace available)'; // Stack trace is not available at least on IE10 and Safari 6.
}
// Memory management
var PAGE_SIZE = 4096;
function alignMemoryPage(x) {
  return (x+4095)&-4096;
}
var HEAP;
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
var STATIC_BASE = 0, STATICTOP = 0, staticSealed = false; // static area
var STACK_BASE = 0, STACKTOP = 0, STACK_MAX = 0; // stack area
var DYNAMIC_BASE = 0, DYNAMICTOP = 0; // dynamic area handled by sbrk
function enlargeMemory() {
  abort('Cannot enlarge memory arrays in asm.js. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value ' + TOTAL_MEMORY + ', or (2) set Module.TOTAL_MEMORY before the program runs.');
}
var TOTAL_STACK = Module['TOTAL_STACK'] || 5242880;
var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 67108864;
var FAST_MEMORY = Module['FAST_MEMORY'] || 2097152;
// Initialize the runtime's memory
// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && !!(new Int32Array(1)['subarray']) && !!(new Int32Array(1)['set']),
       'Cannot fallback to non-typed array case: Code is too specialized');
var buffer = new ArrayBuffer(TOTAL_MEMORY);
HEAP8 = new Int8Array(buffer);
HEAP16 = new Int16Array(buffer);
HEAP32 = new Int32Array(buffer);
HEAPU8 = new Uint8Array(buffer);
HEAPU16 = new Uint16Array(buffer);
HEAPU32 = new Uint32Array(buffer);
HEAPF32 = new Float32Array(buffer);
HEAPF64 = new Float64Array(buffer);
// Endianness check (note: assumes compiler arch was little-endian)
HEAP32[0] = 255;
assert(HEAPU8[0] === 255 && HEAPU8[3] === 0, 'Typed arrays 2 must be run on a little-endian system');
Module['HEAP'] = HEAP;
Module['HEAP8'] = HEAP8;
Module['HEAP16'] = HEAP16;
Module['HEAP32'] = HEAP32;
Module['HEAPU8'] = HEAPU8;
Module['HEAPU16'] = HEAPU16;
Module['HEAPU32'] = HEAPU32;
Module['HEAPF32'] = HEAPF32;
Module['HEAPF64'] = HEAPF64;
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback();
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Runtime.dynCall('v', func);
      } else {
        Runtime.dynCall('vi', func, [callback.arg]);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the runtime has exited
var runtimeInitialized = false;
function preRun() {
  // compatibility - merge in anything from Module['preRun'] at this time
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}
function ensureInitRuntime() {
  if (runtimeInitialized) return;
  runtimeInitialized = true;
  callRuntimeCallbacks(__ATINIT__);
}
function preMain() {
  callRuntimeCallbacks(__ATMAIN__);
}
function exitRuntime() {
  callRuntimeCallbacks(__ATEXIT__);
}
function postRun() {
  // compatibility - merge in anything from Module['postRun'] at this time
  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}
function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}
Module['addOnPreRun'] = Module.addOnPreRun = addOnPreRun;
function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}
Module['addOnInit'] = Module.addOnInit = addOnInit;
function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}
Module['addOnPreMain'] = Module.addOnPreMain = addOnPreMain;
function addOnExit(cb) {
  __ATEXIT__.unshift(cb);
}
Module['addOnExit'] = Module.addOnExit = addOnExit;
function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}
Module['addOnPostRun'] = Module.addOnPostRun = addOnPostRun;
// Tools
// This processes a JS string into a C-line array of numbers, 0-terminated.
// For LLVM-originating strings, see parser.js:parseLLVMString function
function intArrayFromString(stringy, dontAddNull, length /* optional */) {
  var ret = (new Runtime.UTF8Processor()).processJSString(stringy);
  if (length) {
    ret.length = length;
  }
  if (!dontAddNull) {
    ret.push(0);
  }
  return ret;
}
Module['intArrayFromString'] = intArrayFromString;
function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}
Module['intArrayToString'] = intArrayToString;
// Write a Javascript array to somewhere in the heap
function writeStringToMemory(string, buffer, dontAddNull) {
  var array = intArrayFromString(string, dontAddNull);
  var i = 0;
  while (i < array.length) {
    var chr = array[i];
    HEAP8[(((buffer)+(i))|0)]=chr
    i = i + 1;
  }
}
Module['writeStringToMemory'] = writeStringToMemory;
function writeArrayToMemory(array, buffer) {
  for (var i = 0; i < array.length; i++) {
    HEAP8[(((buffer)+(i))|0)]=array[i];
  }
}
Module['writeArrayToMemory'] = writeArrayToMemory;
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; i++) {
    HEAP8[(((buffer)+(i))|0)]=str.charCodeAt(i)
  }
  if (!dontAddNull) HEAP8[(((buffer)+(str.length))|0)]=0
}
Module['writeAsciiToMemory'] = writeAsciiToMemory;
function unSign(value, bits, ignore, sig) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
function reSign(value, bits, ignore, sig) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}
if (!Math['imul']) Math['imul'] = function imul(a, b) {
  var ah  = a >>> 16;
  var al = a & 0xffff;
  var bh  = b >>> 16;
  var bl = b & 0xffff;
  return (al*bl + ((ah*bl + al*bh) << 16))|0;
};
Math.imul = Math['imul'];
var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_min = Math.min;
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// PRE_RUN_ADDITIONS (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
function addRunDependency(id) {
  runDependencies++;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
}
Module['addRunDependency'] = addRunDependency;
function removeRunDependency(id) {
  runDependencies--;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}
Module['removeRunDependency'] = removeRunDependency;
Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data
var memoryInitializer = null;
// === Body ===
STATIC_BASE = 8;
STATICTOP = STATIC_BASE + 3552616;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var _stdout;
var _stdout=_stdout=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_STATIC);
var _stdin;
var _stdin=_stdin=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_STATIC);
var _stderr;
var _stderr=_stderr=allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_STATIC);
/* memory initializer */ allocate([0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,52,2,2,2,2,2,2,53,56,2,72,55,48,61,2,2,2,2,2,2,2,2,2,2,2,2,58,2,42,2,2,44,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,57,46,59,2,71,60,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,69,47,70,50,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,43,45,49,51,54,62,63,64,65,66,67,68,0,0,0,55,0,132,0,135,0,254,0,52,0,173,0,227,0,174,0,64,1,53,1,17,1,251,1,8,1,49,1,49,1,70,2,99,0,50,1,50,1,49,1,9,3,212,2,100,0,50,1,102,0,219,0,60,1,221,0,51,1,51,1,250,0,68,1,250,0,82,0,51,1,102,0,73,1,102,0,131,2,75,1,220,0,192,2,220,0,88,3,105,0,54,3,158,0,158,0,55,0,126,0,140,1,141,0,70,1,162,0,207,1,123,0,195,2,123,0,74,2,144,0,225,2,215,255,99,0,60,1,114,0,106,2,242,1,125,0,185,0,12,2,189,1,83,2,177,2,83,2,74,0,83,2,96,3,114,0,150,0,172,1,245,2,116,0,143,0,48,1,48,1,179,255,194,2,194,0,205,0,48,1,255,2,97,3,60,1,48,0,102,0,63,1,57,0,49,0,106,1,57,1,242,1,141,2,60,0,76,1,190,1,8,1,208,1,243,1,244,1,238,0,13,2,81,0,245,1,232,0,123,0,120,3,85,3,80,0,215,255,95,0,67,1,244,2,163,0,34,1,210,0,151,0,75,2,141,0,193,0,8,1,215,255,141,0,63,1,15,1,141,0,21,3,54,3,251,0,158,0,101,3,18,1,243,1,179,255,203,2,71,1,58,1,245,1,142,2,165,0,65,3,226,1,143,2,146,1,17,2,179,255,49,1,47,3,47,3,50,1,50,1,47,3,63,1,21,2,23,2,147,1,176,2,80,1,232,1,169,0,51,1,51,1,110,0,114,0,31,2,63,0,81,0,116,0,170,0,183,1,133,1,135,1,80,0,249,2,77,1,65,0,80,1,3,2,67,3,171,0,98,1,54,0,234,2,240,1,99,1,47,3,233,1,86,1,87,1,76,1,190,1,95,3,220,2,66,0,152,1,241,1,227,1,153,1,250,2,155,1,127,0,157,1,116,1,241,0,244,0,19,2,42,3,189,2,48,3,240,0,243,0,50,3,112,0,173,0,202,0,224,1,48,1,136,1,204,0,220,1,195,2,189,2,88,1,141,0,141,0,80,3,228,1,94,1,128,0,134,0,48,0,129,0,172,0,188,0,49,0,16,0,48,0,101,1,252,1,253,1,49,0,136,1,130,0,141,0,55,0,91,3,55,0,155,0,55,0,43,254,43,254,8,1,48,0,141,0,40,3,200,1,49,0,53,2,54,2,55,2,229,1,56,2,143,0,43,254,37,2,55,0,27,0,28,0,29,0,187,1,99,0,55,0,51,3,55,0,55,0,205,1,185,0,211,1,215,1,105,3,59,2,147,0,107,3,108,3,87,2,60,2,64,2,62,2,65,2,244,0,236,0,98,3,68,2,107,2,16,3,243,0,88,2,77,1,2,2,250,0,149,0,117,3,158,0,241,1,108,2,194,0,109,2,119,3,195,0,114,0,0,3,1,3,4,3,116,0,9,1,83,2,86,1,87,1,143,1,194,0,196,0,145,1,80,1,197,0,142,1,133,1,46,2,144,1,94,2,141,0,198,0,80,1,80,1,101,2,165,0,76,1,27,2,107,2,230,2,151,2,218,0,116,2,80,1,152,2,199,0,153,2,250,1,96,1,108,2,211,0,147,1,0,2,49,1,155,2,169,0,199,2,50,1,16,0,208,0,209,0,16,0,18,0,202,0,170,0,129,2,133,2,134,2,51,1,201,0,38,3,139,2,43,2,136,1,189,2,171,0,211,0,212,0,245,0,141,0,88,1,189,2,141,0,141,0,141,0,107,2,141,0,147,2,93,255,27,0,28,0,29,0,27,0,28,0,29,0,189,2,108,2,206,0,211,2,141,0,85,2,141,0,86,2,141,0,75,3,141,0,93,255,141,0,134,1,141,0,207,0,141,0,226,0,141,0,67,2,130,2,222,0,141,0,223,0,93,255,93,255,93,255,19,1,48,1,189,2,164,2,224,0,216,0,217,0,60,2,220,0,62,2,9,1,141,0,228,1,154,1,79,2,156,1,48,0,158,1,175,2,106,1,49,0,16,0,140,1,49,1,54,1,199,1,56,1,50,1,172,0,141,0,78,2,141,0,72,1,190,2,188,1,141,0,213,0,74,1,51,1,141,0,206,1,205,0,212,1,216,1,214,0,215,0,165,0,82,1,166,0,4,3,2,2,91,1,27,0,28,0,29,0,83,1,183,1,16,0,173,2,92,1,93,1,49,1,147,1,238,0,84,1,50,1,169,0,141,0,1,0,75,3,2,0,3,0,4,0,186,1,189,2,170,0,51,1,200,1,18,2,196,1,198,1,155,1,254,2,157,1,140,1,24,2,171,0,25,2,27,0,28,0,29,0,28,2,85,1,48,1,32,2,107,1,80,1,0,1,1,1,95,1,80,1,250,1,80,1,0,2,108,1,16,0,168,1,48,0,4,1,5,1,80,1,49,0,109,1,50,0,169,1,170,1,89,1,90,1,110,1,16,0,118,1,162,2,119,1,126,1,141,0,51,0,137,1,141,0,238,0,149,1,238,0,48,1,192,1,138,1,242,2,148,1,27,0,28,0,29,0,8,1,141,0,45,2,141,0,140,1,160,1,161,1,232,2,161,2,44,254,43,3,27,0,28,0,29,0,10,3,150,1,49,3,141,0,141,0,151,1,205,0,193,1,220,0,172,1,14,255,159,1,14,255,238,0,185,1,16,0,173,1,141,0,164,1,165,1,118,2,236,1,61,2,237,1,63,2,16,0,14,255,48,0,166,1,167,1,14,255,49,0,239,1,50,0,11,2,16,0,29,2,48,0,14,255,14,255,33,2,49,0,34,2,50,0,43,2,229,0,27,0,28,0,29,0,137,0,14,255,141,0,141,0,35,2,63,3,51,0,27,0,28,0,29,0,23,3,152,1,16,0,36,2,138,0,16,0,49,1,27,0,28,0,29,0,50,1,38,2,24,3,39,2,173,2,216,0,171,1,64,3,66,3,51,2,52,2,51,1,200,1,12,3,77,1,208,2,209,2,210,2,238,0,71,2,72,2,195,1,232,0,27,0,28,0,29,0,27,0,28,0,29,0,0,1,163,2,126,2,51,2,165,1,79,2,40,2,43,2,141,0,136,1,75,255,47,2,221,2,141,0,16,0,141,0,141,0,48,2,69,255,54,254,193,1,200,0,79,2,14,255,69,2,14,255,141,0,73,2,16,0,76,2,13,3,90,2,141,0,16,0,200,1,141,0,157,2,48,1,89,2,14,255,95,2,97,2,243,2,14,255,98,2,27,0,28,0,29,0,200,1,8,1,78,0,14,255,14,255,162,2,141,0,141,0,141,0,141,0,115,3,27,0,28,0,29,0,100,2,14,255,27,0,28,0,29,0,61,2,103,2,63,2,105,2,141,0,162,2,122,3,141,0,141,0,148,2,245,1,141,0,197,1,141,0,154,2,165,2,140,0,141,0,141,0,141,0,73,255,141,0,72,255,197,2,191,2,141,0,198,2,219,2,188,2,205,2,223,2,78,0,186,0,186,0,226,2,227,2,231,2,78,0,126,2,142,2,193,1,238,0,188,2,14,255,238,0,14,255,141,0,238,2,204,2,239,2,241,2,207,2,240,2,5,3,238,0,141,0,133,1,135,1,89,3,14,255,6,3,141,0,249,2,14,255,113,0,11,3,114,0,17,3,115,0,16,0,116,0,14,255,14,255,28,3,30,3,31,3,32,3,18,3,13,3,19,3,117,0,34,3,39,3,14,255,118,0,202,0,78,3,77,3,249,0,81,3,249,0,82,3,91,0,119,0,42,254,238,0,140,0,27,3,238,0,238,0,27,0,28,0,29,0,136,1,120,0,60,1,99,3,141,0,52,1,52,1,100,3,102,3,236,0,103,3,52,1,141,0,104,3,238,0,16,0,106,3,23,1,24,1,25,1,238,0,109,3,110,3,141,0,8,3,111,3,78,0,141,0,247,2,9,1,31,1,68,0,69,0,167,2,16,0,113,2,17,0,78,0,35,3,114,2,19,0,142,0,78,0,20,3,146,0,78,0,27,0,28,0,29,0,187,0,76,3,70,0,78,0,105,1,32,1,224,2,118,3,116,3,72,0,62,3,115,2,36,3,59,3,112,3,193,2,27,0,28,0,29,0,61,3,60,3,83,3,63,1,73,0,237,2,29,3,29,3,29,3,29,3,114,3,132,2,165,0,66,2,166,0,44,2,146,1,222,1,167,0,113,0,223,1,114,0,113,0,188,2,114,0,116,0,140,0,140,0,147,1,137,2,188,2,156,2,169,0,108,0,16,0,217,1,247,2,247,2,217,1,118,0,247,2,170,0,118,0,117,2,188,2,115,1,140,0,218,1,119,0,26,2,80,2,119,0,171,0,142,0,200,1,140,2,140,0,16,0,236,2,219,1,126,2,235,2,219,1,126,2,234,1,27,0,28,0,29,0,15,2,252,0,118,2,41,2,203,1,90,3,247,2,16,0,103,0,48,0,225,1,52,1,247,2,49,0,235,1,50,0,57,2,37,3,0,0,204,1,27,0,28,0,29,0,159,2,7,3,78,0,0,0,229,0,0,0,0,0,78,0,137,0,186,0,0,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,0,0,0,0,138,0,126,2,228,0,0,0,126,2,126,2,16,0,0,0,48,0,134,1,78,0,0,0,49,0,78,0,50,0,186,0,0,0,0,0,0,0,78,0,78,0,0,0,186,0,126,2,186,0,0,0,51,0,0,0,186,0,126,2,78,0,186,0,188,2,0,0,16,0,0,0,48,0,27,0,28,0,29,0,49,0,142,0,142,0,0,0,16,0,0,0,213,2,0,0,0,0,0,0,31,0,0,0,0,0,0,0,253,0,61,0,62,0,0,0,137,0,0,0,16,1,142,0,0,0,0,0,200,1,27,0,28,0,29,0,140,0,0,0,0,0,142,0,138,0,94,0,107,0,27,0,28,0,29,0,6,0,0,0,0,0,182,1,249,0,7,0,0,0,0,0,0,0,8,0,140,0,0,0,140,0,9,0,140,0,0,0,0,0,0,0,231,1,0,0,0,0,0,0,10,0,0,0,0,0,11,0,12,0,0,0,13,0,14,0,15,0,83,0,16,0,84,0,17,0,85,0,18,0,86,0,19,0,20,0,21,0,0,0,0,0,0,0,140,0,22,0,0,0,87,0,0,0,24,0,0,0,88,0,25,0,0,0,89,0,90,0,26,0,0,0,0,0,91,0,92,0,0,0,140,0,27,0,28,0,29,0,0,0,16,0,140,0,48,0,30,0,93,0,140,0,49,0,0,0,102,2,0,0,0,0,78,0,0,0,78,0,0,0,0,0,0,0,0,0,141,1,0,0,136,0,74,255,111,2,112,2,137,0,0,0,0,0,52,1,0,0,127,2,0,0,27,0,28,0,29,0,0,0,131,1,0,0,16,0,138,0,17,0,102,2,102,2,0,0,138,2,0,0,102,2,0,0,0,0,186,0,0,0,0,0,142,0,0,0,55,1,0,0,0,0,0,0,69,3,69,1,131,1,78,0,16,0,114,0,48,0,78,0,0,0,78,0,49,0,27,0,28,0,29,0,142,0,0,0,142,0,78,0,142,0,0,0,0,0,105,1,186,0,2,3,253,0,74,255,0,0,0,0,137,0,0,0,0,0,255,2,0,0,140,0,0,0,27,0,28,0,29,0,100,1,231,1,0,0,0,0,138,0,0,0,0,0,209,1,0,0,0,0,142,0,140,0,0,0,140,0,0,0,0,0,111,1,0,0,0,0,113,1,0,0,114,1,0,0,0,0,52,1,0,0,117,1,0,0,142,0,0,0,120,1,0,0,125,1,0,0,142,0,0,0,0,0,203,1,142,0,16,0,0,0,48,0,0,0,0,0,0,0,49,0,0,0,50,0,0,0,60,1,0,0,231,1,78,0,78,0,78,0,0,0,218,2,0,0,0,0,51,0,222,2,16,0,52,1,48,0,23,1,24,1,25,1,49,0,0,0,50,0,27,0,28,0,29,0,0,0,0,0,140,0,140,0,31,1,68,0,69,0,0,0,16,0,0,0,17,0,16,0,114,0,48,0,19,0,0,0,61,1,49,0,0,0,27,0,28,0,29,0,131,1,187,0,186,0,70,0,0,0,0,0,32,1,0,0,2,3,253,0,72,0,62,1,0,0,137,0,0,0,228,0,255,2,27,0,28,0,29,0,27,0,28,0,29,0,63,1,73,0,9,2,10,2,138,0,142,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,140,0,14,2,140,0,140,0,142,0,0,0,142,0,16,0,0,0,48,0,0,0,0,0,0,0,49,0,182,1,16,0,0,0,202,0,16,0,140,0,48,0,204,0,140,0,0,0,49,0,6,1,50,0,253,0,0,0,89,0,7,1,137,0,0,0,218,2,0,0,22,3,25,3,26,3,27,0,28,0,29,0,131,0,0,0,0,0,0,0,138,0,27,0,28,0,29,0,27,0,28,0,29,0,231,1,0,0,178,2,0,0,0,0,0,0,0,0,47,0,0,0,140,0,140,0,0,0,47,0,47,0,0,0,140,0,142,0,142,0,0,0,0,0,122,2,140,0,0,0,55,3,58,3,0,0,0,0,58,2,47,0,47,0,47,0,47,0,52,1,0,0,16,0,74,3,174,1,218,2,0,0,0,0,49,0,79,3,50,0,0,0,0,0,47,0,0,0,0,0,140,0,16,0,0,0,48,0,0,0,180,2,86,3,49,0,0,0,16,0,137,0,17,0,0,0,18,0,0,0,19,0,0,0,27,0,28,0,29,0,252,2,253,0,47,0,47,0,138,0,137,0,0,0,0,0,142,0,176,1,142,0,142,0,27,0,28,0,29,0,0,0,0,0,0,0,0,0,138,0,27,0,28,0,29,0,0,0,47,0,0,0,0,0,142,0,0,0,0,0,142,0,0,0,0,0,0,0,231,1,0,0,0,0,0,0,0,0,0,0,47,0,140,0,47,0,0,0,0,0,186,2,55,3,0,0,0,0,58,3,0,0,0,0,128,2,0,0,74,3,122,2,0,0,0,0,0,0,186,2,0,0,47,0,47,0,0,0,0,0,47,0,0,0,0,0,78,1,142,0,142,0,0,0,41,3,77,0,0,0,142,0,149,2,0,0,150,2,0,0,16,0,142,0,202,0,0,0,203,0,0,0,204,0,47,0,0,0,0,0,0,0,0,0,47,0,0,0,47,0,0,0,67,0,68,0,69,0,0,0,16,0,0,0,17,0,158,2,0,0,160,2,19,0,0,0,142,0,75,0,0,0,27,0,28,0,29,0,0,0,0,0,0,0,70,0,0,0,94,3,71,0,77,0,184,0,184,0,72,0,0,0,0,0,77,0,0,0,47,0,0,0,27,0,28,0,29,0,16,0,0,0,48,0,0,0,73,0,0,0,49,0,0,0,16,0,0,0,213,2,47,0,0,0,47,0,47,0,131,1,47,0,228,0,139,1,253,2,136,0,47,0,3,3,75,0,137,0,47,0,47,0,47,0,200,1,75,0,214,2,27,0,28,0,29,0,0,0,142,0,0,0,0,0,138,0,27,0,28,0,29,0,47,0,0,0,127,1,47,0,0,0,0,0,0,0,16,0,248,2,48,0,0,0,0,0,0,0,49,0,121,3,50,0,0,0,0,0,122,2,122,2,122,2,122,2,184,0,184,0,0,0,6,1,0,0,128,1,184,0,89,0,7,1,137,0,233,2,0,0,0,0,186,2,184,1,0,0,27,0,28,0,29,0,0,0,186,2,184,0,228,0,138,0,0,0,0,0,46,3,46,3,0,0,0,0,46,3,0,0,77,0,0,0,186,2,0,0,0,0,77,0,0,0,0,0,184,0,0,0,0,0,0,0,0,0,0,0,0,0,77,0,0,0,0,0,122,2,47,0,47,0,122,2,16,0,0,0,48,0,75,0,0,0,0,0,49,0,0,0,50,0,186,2,46,3,213,1,0,0,47,0,75,0,47,0,0,0,0,0,0,0,75,0,229,0,0,0,75,0,0,0,137,0,0,0,0,0,0,0,0,0,75,0,0,0,27,0,28,0,29,0,0,0,0,0,0,0,0,0,138,0,0,0,0,0,0,0,0,0,16,0,33,3,48,0,0,0,0,0,0,0,49,0,122,2,50,0,0,0,122,2,122,2,0,0,0,0,0,0,131,1,0,0,0,0,0,0,3,3,51,0,0,0,0,0,228,0,47,0,0,0,0,0,131,1,0,0,122,2,0,0,27,0,28,0,29,0,0,0,122,2,0,0,0,0,186,2,0,0,0,0,0,0,0,0,0,0,184,0,184,0,0,0,0,0,47,0,125,2,127,1,0,0,0,0,0,0,0,0,16,0,248,2,48,0,0,0,77,0,84,3,49,0,0,0,50,0,77,0,0,0,184,0,0,0,0,0,0,0,0,0,0,0,0,0,6,1,0,0,128,1,0,0,89,0,129,1,137,0,0,0,0,0,0,0,0,0,78,1,0,0,27,0,28,0,29,0,184,0,0,0,0,0,77,0,138,0,184,0,75,0,0,0,0,0,184,0,184,0,75,0,184,0,0,0,184,0,0,0,0,0,0,0,184,0,0,0,184,0,184,0,0,0,67,0,68,0,69,0,0,0,16,0,0,0,17,0,0,0,0,0,0,0,19,0,0,0,0,0,75,0,0,0,0,0,75,0,0,0,0,0,0,0,0,0,70,0,75,0,75,0,71,0,0,0,0,0,200,0,72,0,47,0,187,2,47,0,0,0,75,0,0,0,27,0,28,0,29,0,6,0,0,0,125,2,0,0,73,0,7,0,187,2,0,0,0,0,8,0,0,0,0,0,0,0,9,0,0,0,47,0,0,0,47,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,11,0,12,0,0,0,13,0,14,0,15,0,0,0,16,0,0,0,17,0,0,0,18,0,0,0,19,0,20,0,21,0,0,0,47,0,47,0,47,0,22,0,178,2,23,0,0,0,24,0,0,0,0,0,25,0,0,0,0,0,0,0,26,0,0,0,106,0,16,0,0,0,17,0,0,0,27,0,28,0,29,0,0,0,0,0,0,0,0,0,30,0,68,3,0,0,179,2,0,0,184,1,0,0,174,2,16,0,69,3,174,1,70,3,184,0,0,0,49,0,77,0,0,0,77,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,246,2,0,0,180,2,181,2,0,0,0,0,184,0,137,0,0,0,0,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,184,0,184,0,138,0,184,0,0,0,184,0,0,0,75,0,184,0,75,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,184,0,0,0,0,0,0,0,184,0,0,0,184,0,125,2,125,2,125,2,125,2,0,0,47,0,47,0,184,0,16,0,0,0,48,0,0,0,184,0,0,0,49,0,0,0,0,0,187,2,0,0,0,0,0,0,228,0,0,0,0,0,187,2,0,0,141,1,0,0,136,0,75,0,246,2,246,2,137,0,75,0,246,2,75,0,0,0,0,0,187,2,27,0,28,0,29,0,0,0,75,0,0,0,0,0,138,0,0,0,127,1,0,0,0,0,0,0,184,0,16,0,125,2,48,0,0,0,125,2,0,0,49,0,0,0,50,0,0,0,0,0,0,0,0,0,0,0,187,2,246,2,0,0,0,0,6,1,0,0,128,1,246,2,89,0,129,1,137,0,0,0,0,0,77,0,77,0,77,0,0,0,27,0,28,0,29,0,0,0,0,0,0,0,184,0,138,0,0,0,0,0,47,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,17,0,174,2,18,0,0,0,19,0,125,2,0,0,0,0,125,2,125,2,168,2,0,0,0,0,75,0,75,0,75,0,0,0,0,0,176,1,6,0,169,2,0,0,184,0,0,0,7,0,0,0,0,0,125,2,8,0,27,0,28,0,29,0,9,0,125,2,0,0,0,0,187,2,0,0,0,0,0,0,0,0,10,0,0,0,0,0,11,0,12,0,0,0,13,0,14,0,15,0,47,0,16,0,0,0,17,0,0,0,18,0,0,0,19,0,20,0,21,0,0,0,0,0,0,0,0,0,22,0,6,0,23,0,0,0,24,0,0,0,7,0,25,0,0,0,0,0,8,0,26,0,0,0,73,254,9,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,10,0,0,0,30,0,11,0,12,0,0,0,13,0,14,0,15,0,0,0,16,0,0,0,17,0,0,0,18,0,0,0,19,0,20,0,21,0,0,0,0,0,0,0,0,0,22,0,6,0,23,0,0,0,24,0,0,0,7,0,25,0,0,0,0,0,8,0,26,0,0,0,74,254,9,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,10,0,0,0,30,0,11,0,12,0,0,0,13,0,14,0,15,0,0,0,16,0,184,0,17,0,0,0,18,0,0,0,19,0,20,0,21,0,0,0,0,0,0,0,0,0,22,0,6,0,23,0,0,0,24,0,0,0,7,0,25,0,0,0,0,0,8,0,26,0,0,0,0,0,121,1,0,0,0,0,0,0,27,0,28,0,29,0,0,0,228,0,10,0,0,0,30,0,11,0,12,0,0,0,13,0,14,0,15,0,0,0,16,0,0,0,17,0,0,0,18,0,0,0,19,0,20,0,21,0,0,0,0,0,0,0,0,0,22,0,0,0,23,0,127,1,24,0,0,0,0,0,25,0,16,0,0,0,48,0,26,0,0,0,0,0,49,0,228,0,50,0,0,0,27,0,28,0,29,0,0,0,0,0,0,0,0,0,30,0,6,1,0,0,128,1,0,0,89,0,7,1,137,0,0,0,0,0,0,0,228,0,0,0,0,0,27,0,28,0,29,0,127,1,0,0,0,0,0,0,138,0,16,0,0,0,48,0,0,0,0,0,178,2,49,0,0,0,228,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,113,3,253,0,16,0,0,0,48,0,137,0,0,0,0,0,49,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,0,0,16,0,138,0,174,1,16,0,253,0,48,0,49,0,103,255,137,0,49,0,228,0,50,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,180,2,181,2,0,0,138,0,253,0,137,0,0,0,0,0,137,0,0,0,0,0,0,0,27,0,28,0,29,0,27,0,28,0,29,0,0,0,138,0,0,0,0,0,138,0,16,0,0,0,48,0,0,0,0,0,0,0,49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,253,0,0,0,0,0,8,0,137,0,0,0,0,0,156,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,10,0,0,0,138,0,11,0,12,0,0,0,13,0,14,0,15,0,0,0,16,0,0,0,17,0,0,0,18,0,0,0,19,0,20,0,21,0,0,0,0,0,0,0,0,0,22,0,0,0,23,0,0,0,24,0,0,0,7,0,25,0,0,0,0,0,8,0,26,0,157,0,0,0,9,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,10,0,0,0,30,0,11,0,12,0,0,0,13,0,14,0,15,0,0,0,16,0,0,0,17,0,0,0,18,0,0,0,19,0,20,0,21,0,0,0,0,0,0,0,0,0,22,0,0,0,242,0,0,0,24,0,0,0,0,0,25,0,0,0,7,0,112,1,26,0,0,0,8,0,0,0,0,0,0,0,9,0,27,0,28,0,29,0,0,0,0,0,0,0,0,0,30,0,10,0,0,0,0,0,11,0,12,0,0,0,13,0,14,0,15,0,0,0,16,0,0,0,17,0,0,0,18,0,0,0,19,0,20,0,21,0,0,0,0,0,0,0,0,0,22,0,0,0,0,0,0,0,24,0,0,0,0,0,25,0,0,0,7,0,200,0,26,0,0,0,8,0,0,0,0,0,0,0,9,0,27,0,28,0,29,0,0,0,0,0,0,0,0,0,30,0,10,0,0,0,0,0,11,0,12,0,0,0,13,0,14,0,15,0,0,0,16,0,0,0,17,0,0,0,18,0,0,0,19,0,20,0,21,0,0,0,0,0,0,0,0,0,22,0,0,0,23,0,0,0,24,0,0,0,7,0,25,0,0,0,0,0,8,0,26,0,0,0,0,0,9,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,10,0,0,0,30,0,11,0,12,0,0,0,13,0,14,0,15,0,0,0,16,0,0,0,17,0,0,0,18,0,0,0,19,0,20,0,21,0,0,0,0,0,0,0,0,0,22,0,0,0,239,0,0,0,24,0,0,0,7,0,25,0,0,0,0,0,8,0,26,0,0,0,0,0,9,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,10,0,0,0,30,0,11,0,12,0,0,0,13,0,14,0,15,0,0,0,16,0,0,0,17,0,0,0,18,0,0,0,19,0,20,0,21,0,0,0,0,0,0,0,0,0,22,0,0,0,242,0,0,0,24,0,0,0,7,0,25,0,0,0,0,0,8,0,26,0,0,0,0,0,156,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,10,0,0,0,30,0,11,0,12,0,0,0,13,0,14,0,15,0,0,0,16,0,0,0,17,0,0,0,18,0,0,0,19,0,20,0,21,0,0,0,0,0,0,0,0,0,22,0,0,0,23,0,0,0,24,0,0,0,7,0,25,0,0,0,0,0,8,0,26,0,0,0,0,0,9,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,10,0,0,0,30,0,11,0,12,0,0,0,13,0,14,0,15,0,0,0,16,0,0,0,17,0,0,0,18,0,0,0,19,0,20,0,21,0,0,0,0,0,0,0,0,0,22,0,0,0,0,0,0,0,24,0,0,0,0,0,25,0,0,0,0,0,0,0,26,0,0,0,0,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,21,1,22,1,0,0,0,0,30,0,0,0,0,0,0,0,23,1,24,1,25,1,26,1,27,1,28,1,0,0,0,0,29,1,30,1,0,0,0,0,0,0,31,1,68,0,69,0,0,0,16,0,0,0,17,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,187,0,0,0,70,0,0,0,0,0,32,1,0,0,0,0,0,0,72,0,33,1,0,0,0,0,0,0,0,0,34,1,27,0,28,0,29,0,35,1,36,1,21,1,22,1,73,0,0,0,0,0,0,0,0,0,0,0,23,1,24,1,25,1,26,1,27,1,28,1,0,0,0,0,29,1,30,1,0,0,0,0,0,0,31,1,68,0,69,0,0,0,16,0,0,0,17,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,187,0,0,0,70,0,0,0,0,0,32,1,0,0,0,0,0,0,72,0,0,0,0,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,35,1,36,1,0,0,12,0,73,0,13,0,14,0,15,0,0,0,16,0,0,0,17,0,0,0,18,0,0,0,19,0,20,0,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0,25,0,0,0,0,0,0,0,26,0,0,0,0,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,0,0,0,0,30,0,67,0,68,0,69,0,113,0,16,0,114,0,17,0,0,0,0,0,116,0,19,0,0,0,0,0,0,0,10,255,194,0,0,0,0,0,0,0,254,1,0,0,70,0,0,0,118,0,71,0,0,0,10,255,0,0,72,0,0,0,0,0,218,1,119,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,0,0,0,0,73,0,255,1,164,0,68,0,69,0,165,0,16,0,166,0,17,0,0,0,0,0,167,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,0,0,0,70,0,0,0,169,0,71,0,0,0,89,0,90,0,72,0,0,0,0,0,0,0,170,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,0,0,0,0,73,0,171,0,31,1,68,0,69,0,165,0,16,0,166,0,17,0,0,0,0,0,167,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,0,0,0,70,0,0,0,169,0,32,1,0,0,89,0,90,0,72,0,0,0,0,0,0,0,170,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,0,0,0,0,73,0,171,0,67,0,68,0,69,0,113,0,16,0,114,0,17,0,0,0,0,0,116,0,19,0,0,0,0,0,0,0,0,0,194,0,0,0,0,0,0,0,254,1,0,0,70,0,0,0,118,0,71,0,0,0,0,0,0,0,72,0,0,0,0,0,218,1,119,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,0,0,0,0,73,0,255,1,164,0,68,0,69,0,0,0,16,0,0,0,17,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,187,0,0,0,70,0,0,0,0,0,71,0,0,0,0,0,0,0,72,0,0,0,106,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,164,0,68,0,69,0,73,0,16,0,0,0,17,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,187,0,0,0,70,0,0,0,0,0,71,0,0,0,0,0,0,0,72,0,4,2,0,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,67,0,68,0,69,0,73,0,16,0,0,0,17,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,70,0,192,0,0,0,71,0,0,0,0,0,0,0,72,0,0,0,0,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,67,0,68,0,69,0,73,0,16,0,0,0,17,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,2,0,0,70,0,0,0,0,0,71,0,0,0,0,0,0,0,72,0,0,0,0,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,164,0,68,0,69,0,73,0,16,0,0,0,17,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,187,0,0,0,70,0,0,0,0,0,71,0,0,0,0,0,0,0,72,0,0,0,0,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,67,0,68,0,69,0,73,0,16,0,0,0,17,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,2,0,0,70,0,0,0,0,0,71,0,0,0,0,0,0,0,72,0,0,0,0,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,67,0,68,0,69,0,73,0,16,0,0,0,17,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,2,0,0,70,0,0,0,0,0,71,0,0,0,0,0,0,0,72,0,0,0,0,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,67,0,68,0,69,0,73,0,16,0,0,0,17,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,2,0,0,70,0,0,0,0,0,71,0,0,0,0,0,0,0,72,0,0,0,0,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,67,0,68,0,69,0,73,0,16,0,0,0,17,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,70,0,0,0,0,0,71,0,0,0,0,0,104,2,72,0,0,0,0,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,135,2,68,0,69,0,73,0,16,0,0,0,17,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,187,0,0,0,70,0,0,0,0,0,71,0,0,0,0,0,0,0,72,0,0,0,0,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,67,0,68,0,69,0,73,0,16,0,0,0,17,0,16,0,0,0,48,0,19,0,0,0,0,0,49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,70,0,0,0,0,0,71,0,141,1,0,0,136,0,72,0,162,1,163,1,137,0,0,0,0,0,0,0,27,0,28,0,29,0,27,0,28,0,29,0,16,0,73,0,48,0,0,0,138,0,0,0,49,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,141,1,16,0,136,0,48,0,49,2,50,2,137,0,49,0,0,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,0,0,141,1,138,0,136,0,0,0,49,2,163,1,137,0,0,0,0,0,0,0,16,0,0,0,48,0,27,0,28,0,29,0,49,0,0,0,0,0,0,0,138,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,136,0,48,0,2,1,3,1,137,0,49,0,0,0,0,0,77,2,0,0,0,0,27,0,28,0,29,0,0,0,16,0,0,0,48,0,138,0,136,0,74,255,49,0,0,0,137,0,0,0,0,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,229,2,0,0,136,0,74,255,138,0,0,0,137,0,0,0,0,0,0,0,16,0,114,0,48,0,27,0,28,0,29,0,49,0,0,0,0,0,0,0,138,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,48,0,0,0,136,0,0,0,49,0,0,0,137,0,91,2,0,0,255,2,0,0,0,0,0,0,27,0,28,0,29,0,0,0,16,0,136,0,48,0,138,0,0,0,137,0,49,0,0,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,16,0,0,0,48,0,138,0,136,0,74,255,49,0,0,0,137,0,0,0,0,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,228,2,0,0,136,0,16,0,138,0,48,0,137,0,0,0,0,0,49,0,0,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,0,0,0,0,138,0,0,0,44,3,253,0,16,0,0,0,48,0,137,0,0,0,0,0,49,0,0,0,50,0,0,0,27,0,28,0,29,0,0,0,0,0,0,0,16,0,138,0,48,0,16,0,229,0,48,0,49,0,0,0,137,0,49,0,0,0,0,0,0,0,0,0,0,0,27,0,28,0,29,0,229,2,16,0,136,0,48,0,138,0,136,0,137,0,49,0,0,0,137,0,0,0,0,0,0,0,27,0,28,0,29,0,27,0,28,0,29,0,0,0,138,0,253,0,16,0,138,0,174,1,137,0,18,0,0,0,175,1,0,0,0,0,0,0,27,0,28,0,29,0,0,0,0,0,0,0,0,0,138,0,0,0,0,0,176,1,0,0,177,1,178,1,16,0,0,0,174,1,0,0,18,0,179,1,175,1,27,0,28,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,176,1,0,0,0,0,166,2,0,0,0,0,0,0,0,0,0,0,179,1,0,0,27,0,28,0,29,0,0,2,3,2,2,1,4,4,7,5,2,0,1,1,1,0,2,1,2,4,0,2,3,3,4,3,1,1,1,4,4,2,0,1,1,2,3,1,1,1,3,2,1,0,3,5,6,4,2,0,4,3,0,1,1,2,3,1,1,1,4,4,0,1,1,2,3,1,1,1,2,3,3,1,1,4,6,2,5,7,2,4,2,5,7,2,2,2,2,1,1,3,1,3,1,3,1,4,1,3,1,4,3,3,3,1,1,4,3,1,3,2,2,3,2,3,2,1,1,1,3,1,3,3,4,0,2,4,0,1,3,1,4,3,1,1,2,1,7,6,8,7,7,4,3,4,2,2,2,3,1,3,1,0,1,3,1,0,2,3,1,3,1,0,2,4,1,3,1,3,3,3,1,4,1,3,5,2,1,3,1,2,1,3,3,1,3,1,3,3,3,3,3,3,3,1,1,1,1,3,3,3,1,1,1,2,1,2,1,1,1,1,2,3,3,3,3,3,3,3,5,3,2,1,3,3,3,3,3,3,3,1,3,3,2,3,2,3,2,3,3,1,0,3,1,3,1,3,3,0,2,2,2,1,2,4,2,1,1,1,3,3,3,3,3,4,4,4,2,2,2,1,2,1,2,1,4,0,2,0,2,3,3,0,2,2,2,3,2,1,1,1,3,1,3,1,1,1,1,1,1,1,2,2,3,4,3,4,3,4,3,4,1,1,1,1,2,2,1,1,1,3,1,4,1,1,1,3,3,3,3,2,3,5,3,3,3,1,0,1,3,1,3,1,3,1,3,1,1,3,1,1,1,1,1,1,1,4,3,2,4,3,4,3,2,4,3,6,4,4,1,4,4,4,3,2,3,2,2,1,2,1,1,3,2,1,1,1,4,4,1,1,1,1,3,3,3,5,1,3,4,4,4,3,3,3,1,3,1,2,3,2,1,3,1,2,1,2,1,4,1,2,3,2,1,3,2,1,0,1,3,1,1,3,1,1,2,3,4,2,5,3,2,3,1,3,1,2,1,2,2,3,2,1,1,1,1,1,1,1,1,3,3,3,3,3,1,3,1,1,3,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,3,1,1,3,1,3,1,1,1,1,1,0,1,1,0,0,0,73,74,74,74,74,75,75,75,75,75,76,77,78,78,79,79,79,79,79,80,80,80,80,80,81,81,82,82,82,82,82,83,83,83,83,84,84,85,85,86,86,86,87,88,88,88,88,88,89,89,89,90,90,90,90,91,91,92,92,92,92,93,93,93,93,94,94,95,95,96,96,96,96,96,97,97,97,97,97,97,97,97,97,97,97,97,97,98,98,98,99,99,100,100,101,101,102,102,103,103,104,104,104,104,104,104,104,104,104,105,105,105,105,105,105,106,106,106,107,108,108,109,109,109,110,110,110,111,111,112,112,97,113,113,113,114,114,97,97,97,97,97,97,97,97,97,97,97,115,115,116,116,117,117,118,118,119,119,120,120,121,121,122,122,123,123,124,124,125,125,125,125,126,126,127,127,128,128,129,129,130,130,130,130,130,130,131,131,132,132,133,133,133,133,133,134,134,135,135,135,135,135,136,136,137,137,138,138,139,139,140,140,140,140,140,140,140,140,140,140,140,140,140,141,141,142,142,142,142,143,143,144,145,145,145,145,145,145,145,145,146,146,147,147,148,148,149,149,150,150,150,151,152,152,152,152,153,153,153,154,154,154,154,154,155,155,155,155,155,156,156,157,157,158,158,159,160,160,161,161,162,162,163,163,163,164,165,165,165,166,166,167,167,168,169,169,169,170,170,171,171,172,172,172,172,172,172,172,172,172,172,173,173,174,174,175,175,176,176,176,177,177,177,177,177,177,177,177,177,177,177,177,177,178,178,179,179,180,180,181,181,182,182,183,183,184,185,185,186,186,187,187,188,188,189,189,190,190,190,190,190,191,191,191,191,191,192,192,192,192,193,193,193,194,194,195,195,196,196,197,197,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,198,199,199,200,200,201,202,202,203,203,203,204,205,205,205,206,206,207,208,208,209,209,209,210,210,210,211,211,212,212,213,213,214,214,214,214,214,214,214,215,215,216,216,217,217,217,218,218,218,218,219,219,220,220,220,220,221,221,222,222,222,222,222,222,223,223,223,224,224,225,225,225,226,226,226,227,227,228,228,229,229,229,229,230,230,231,231,231,232,232,233,233,233,234,234,235,235,236,237,237,0,0,5,253,5,253,5,253,5,253,5,253,92,254,117,255,5,253,5,253,45,1,5,253,5,253,136,0,5,253,137,1,141,1,171,253,163,0,5,253,114,0,5,253,5,253,35,0,25,1,160,1,252,253,5,253,41,0,157,0,221,253,5,253,6,253,5,253,216,253,137,0,5,253,50,0,80,253,5,253,5,253,5,253,59,1,5,253,5,253,5,253,5,253,5,253,5,253,141,0,139,0,210,253,126,0,83,0,63,0,215,3,198,253,251,0,1,0,5,253,206,255,38,2,129,255,132,255,156,253,95,5,187,0,71,255,198,2,207,255,5,253,5,253,251,1,5,253,229,0,212,255,40,253,5,253,5,253,5,253,111,255,5,253,136,2,139,2,218,254,5,253,5,253,170,1,47,254,5,253,152,255,5,253,5,253,5,253,170,0,190,255,192,255,122,255,5,253,181,1,126,255,76,255,137,255,254,255,52,0,78,6,5,253,5,253,5,253,5,253,148,1,5,253,108,2,56,4,237,255,178,255,193,255,5,253,5,253,5,253,94,0,88,0,5,253,5,253,5,253,5,253,9,0,158,3,5,253,238,2,202,1,5,253,61,1,5,253,5,253,67,1,243,255,5,253,145,2,91,3,5,253,86,2,5,253,5,253,96,2,203,1,42,6,247,255,253,255,70,3,197,2,159,255,139,254,184,5,197,255,5,253,5,253,255,255,5,253,202,3,133,254,19,0,52,1,29,0,5,253,133,255,0,0,0,0,0,0,241,1,5,253,22,9,73,2,34,0,102,0,5,253,22,9,22,9,105,0,115,0,133,0,5,253,5,253,5,253,5,253,5,253,5,253,5,253,5,253,5,253,5,253,73,14,69,11,232,11,85,4,179,7,5,253,5,253,5,253,5,253,158,0,5,253,5,253,178,0,5,253,12,3,5,253,12,3,5,253,232,11,140,0,5,253,5,253,5,253,193,0,5,253,171,0,5,253,5,253,208,0,112,5,5,253,5,253,76,15,225,0,5,253,58,0,5,253,221,0,5,253,46,1,67,0,5,253,241,0,253,9,253,9,5,253,5,253,5,253,73,14,63,12,195,12,5,253,5,253,5,253,17,13,5,253,14,1,248,0,5,253,5,253,140,0,17,1,20,1,27,1,41,1,92,10,65,1,5,253,5,253,38,6,93,1,106,1,56,1,12,3,73,1,163,1,5,253,124,1,51,1,5,253,5,253,141,10,5,253,141,10,5,253,123,1,47,1,105,1,105,0,5,253,210,6,5,253,5,253,5,253,5,253,5,253,5,253,5,253,5,253,5,253,5,253,5,253,187,10,233,10,140,0,77,1,232,11,77,1,207,9,5,253,5,253,216,1,157,14,227,1,101,5,9,4,5,253,5,253,5,253,5,253,5,253,53,2,5,253,121,1,5,253,128,11,128,11,129,1,22,9,189,1,87,0,40,5,62,0,22,9,105,0,253,9,157,1,25,0,153,1,5,253,25,0,5,253,138,0,17,1,20,1,41,1,113,7,65,1,93,1,106,1,166,1,173,1,182,1,223,1,5,253,138,0,138,0,73,14,5,253,235,1,178,1,5,253,73,14,231,1,28,1,58,6,5,253,5,253,5,253,134,0,22,9,5,253,73,14,77,1,5,253,5,253,5,253,5,253,5,253,5,253,209,1,218,1,226,1,232,1,5,253,5,253,22,9,5,253,43,10,22,9,5,253,22,9,53,2,5,253,5,253,5,253,22,9,238,1,5,253,240,1,186,8,68,9,22,9,250,1,5,253,5,253,5,253,85,8,249,1,5,253,253,1,5,253,5,253,92,6,120,4,5,253,225,0,69,11,5,253,5,253,69,11,5,253,5,253,116,0,239,1,248,1].concat([5,253,24,2,30,2,140,0,6,2,89,9,5,253,40,8,20,5,5,253,20,5,5,253,20,5,5,253,26,2,5,253,7,2,76,14,34,2,44,2,233,1,5,253,90,2,37,2,5,253,28,2,5,253,113,15,72,2,246,1,69,0,49,2,160,2,247,2,198,1,237,3,53,0,254,4,253,6,138,3,107,12,128,11,204,0,166,0,152,3,22,2,36,2,5,253,45,2,5,253,5,253,149,0,5,253,65,0,5,253,73,14,5,253,99,0,138,3,138,3,19,12,25,0,234,12,5,253,22,9,22,9,93,2,5,253,5,253,68,0,5,253,5,253,5,253,5,253,5,253,5,253,5,253,5,253,241,0,5,253,22,9,5,253,23,11,5,253,188,0,56,13,5,253,5,253,73,14,5,253,95,13,5,253,5,253,207,9,134,13,173,13,5,253,95,13,5,253,95,13,53,2,5,253,5,253,95,13,78,2,212,13,95,13,5,253,5,253,5,253,41,2,58,2,5,253,24,2,82,2,5,253,5,253,5,253,5,253,5,253,5,253,5,253,77,2,5,253,51,1,5,253,5,253,5,253,5,253,105,0,92,2,88,2,5,253,130,2,68,9,53,2,89,9,125,2,124,2,249,1,132,2,133,2,110,14,94,2,36,0,207,9,207,9,207,9,5,253,207,9,5,253,5,253,5,253,5,253,27,1,134,2,5,253,77,1,22,9,5,253,5,253,5,253,76,15,5,253,76,15,5,253,76,15,5,253,207,9,5,253,207,9,5,253,207,9,5,253,207,9,5,253,207,9,53,2,5,253,5,253,207,9,5,253,203,0,135,2,131,3,137,2,5,253,155,1,104,2,5,253,143,2,5,253,5,253,57,0,5,253,144,2,176,14,84,0,5,253,162,1,5,253,5,253,141,3,5,253,141,3,5,253,141,3,5,253,55,1,250,0,5,253,176,2,5,253,146,2,236,14,5,253,149,9,5,253,162,2,156,2,255,14,5,253,200,2,177,2,255,14,5,253,109,5,5,253,95,13,5,253,181,2,251,13,183,2,151,12,5,253,5,253,5,253,155,1,249,0,5,253,5,253,5,253,164,2,164,2,5,253,60,0,5,253,189,11,193,3,164,2,5,253,22,9,207,9,141,10,5,253,200,2,199,2,5,253,5,253,5,253,95,13,95,13,5,253,34,14,5,253,95,13,5,253,5,253,234,12,100,0,25,0,187,2,5,253,5,253,5,253,22,9,5,253,22,9,5,253,5,253,73,14,5,253,5,253,5,253,73,14,5,253,73,14,5,253,5,253,194,2,5,253,231,1,5,253,5,253,73,14,5,253,5,253,5,253,77,1,95,13,5,253,241,0,22,9,68,9,232,8,88,2,4,2,5,253,114,2,129,14,117,2,5,253,207,9,168,9,202,2,168,9,204,2,5,253,5,253,5,253,5,253,5,253,5,253,5,253,5,253,40,8,5,253,40,8,5,253,195,2,5,253,37,2,5,253,5,253,5,253,137,15,5,253,133,8,5,253,128,11,164,0,225,7,207,9,5,253,80,1,205,2,5,253,5,253,5,253,205,2,205,2,63,2,164,2,5,253,164,0,225,7,203,2,207,2,5,253,107,1,200,2,226,0,196,2,5,253,226,0,5,253,43,0,73,14,73,14,73,14,84,1,100,6,210,2,155,1,5,253,150,2,235,2,189,11,5,253,5,253,5,253,5,253,53,2,5,253,5,253,5,253,219,2,217,2,5,253,15,15,192,14,5,253,5,253,99,0,230,2,5,253,5,253,5,253,5,253,138,0,5,253,5,253,43,0,5,253,5,253,5,253,141,10,22,9,200,2,228,2,5,253,5,253,95,13,5,253,5,253,5,253,5,253,5,253,5,253,5,253,5,253,5,253,5,253,5,253,5,253,210,6,5,253,5,253,227,2,5,253,5,253,5,253,229,2,5,253,232,2,231,2,5,253,5,253,5,253,25,0,5,253,169,2,5,253,53,2,76,15,141,6,160,0,5,253,5,253,195,5,30,0,220,14,43,5,220,2,25,3,141,3,5,253,5,253,65,3,5,253,20,3,5,253,207,9,5,253,246,2,5,253,102,2,5,253,76,15,5,253,5,253,76,15,5,253,5,253,5,253,155,1,5,253,250,2,5,253,1,3,4,3,5,253,5,253,100,6,37,1,164,2,99,2,164,2,45,2,16,3,92,15,92,15,92,15,92,15,5,253,22,9,10,3,5,253,5,253,5,253,5,253,5,253,5,253,5,253,5,253,203,5,5,253,225,7,175,3,30,0,76,15,76,15,6,3,210,0,225,7,5,253,76,15,5,253,5,253,30,3,36,15,36,15,76,15,5,253,36,15,211,0,164,2,5,253,225,7,5,253,5,253,107,1,5,253,5,253,84,3,91,0,37,1,206,7,5,253,19,4,11,3,5,253,23,3,164,2,63,2,26,3,28,3,57,15,5,253,73,15,5,253,5,253,5,253,5,253,22,9,5,253,160,0,180,5,36,15,5,3,226,0,5,253,5,253,5,253,76,15,5,253,5,253,5,253,5,253,5,253,5,253,5,253,21,0,5,253,1,1,5,253,31,3,5,253,47,3,20,3,5,253,53,2,5,253,5,253,5,253,5,253,5,253,5,253,35,3,188,1,5,253,37,3,41,3,5,253,5,253,5,253,5,253,5,253,63,2,56,3,5,253,63,2,63,2,5,253,5,253,5,253,52,7,5,253,5,253,50,3,181,4,5,253,49,3,53,3,5,253,5,253,164,2,5,253,128,9,164,2,63,2,5,253,5,253,5,253,157,4,5,253,63,2,5,253,5,253,165,9,5,253,226,0,5,253,207,9,5,253,5,253,5,253,5,253,5,253,5,253,5,253,5,253,5,253,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,5,0,58,0,59,0,145,0,230,1,37,1,20,1,180,1,181,1,170,2,171,2,172,2,38,1,238,1,39,1,110,2,215,2,216,2,217,2,71,3,72,3,73,3,40,1,41,1,191,1,56,3,57,3,182,2,183,2,87,3,184,2,185,2,45,3,196,2,52,3,53,3,251,2,92,3,93,3,201,1,202,1,210,1,214,1,92,2,93,2,96,2,200,2,201,2,202,2,119,2,120,2,121,2,130,1,230,0,42,2,231,0,123,2,132,1,53,0,133,0,233,0,234,0,124,2,235,0,255,0,139,0,237,0,10,1,11,1,12,1,13,1,42,1,194,1,81,2,43,1,206,2,14,3,15,3,44,1,45,1,46,1,47,1,246,1,247,1,248,1,249,1,99,2,111,0,64,0,153,0,154,0,65,1,5,2,189,0,190,0,175,0,136,2,176,0,177,0,79,1,178,0,179,0,81,1,180,0,181,0,191,0,102,1,103,1,104,1,182,0,183,0,122,1,32,0,33,0,34,0,35,0,36,0,37,0,38,0,39,0,152,0,59,1,76,0,40,0,41,0,96,0,97,0,98,0,6,2,7,2,8,2,144,2,145,2,146,2,159,0,160,0,161,0,246,0,247,0,248,0,109,0,225,0,123,1,124,1,42,0,14,1,43,0,56,0,44,0,45,0,46,0,79,0,82,2,101,0,1,2,221,1,121,0,122,0,104,0,97,1,84,2,124,0,148,0,66,1,0,0,0,0,0,0,0,0,5,0,0,0,0,0,11,0,0,0,92,1,0,0,0,0,0,0,0,0,0,0,137,1,134,1,135,1,136,1,198,1,213,1,210,1,215,1,142,1,129,1,0,0,0,0,0,0,0,0,0,0,199,1,200,1,201,1,130,1,23,1,91,1,94,1,95,1,96,1,97,1,99,1,98,1,100,1,114,1,125,1,131,1,204,1,212,1,126,1,217,1,192,1,203,1,202,1,0,0,0,0,3,0,185,0,182,0,0,0,208,0,0,0,4,0,243,1,1,0,0,0,0,0,27,1,0,0,0,0,0,0,62,1,68,1,69,1,0,0,0,0,0,0,70,1,123,1,64,1,0,0,66,1,63,1,192,1,103,1,108,1,128,1,225,1,234,1,231,1,236,1,0,0,227,1,197,1,193,1,0,0,228,1,221,1,0,0,98,1,0,0,0,0,150,1,0,0,204,1,233,1,222,1,0,0,238,1,0,0,194,1,178,1,179,1,0,0,0,0,2,0,0,0,225,1,234,1,231,1,236,1,229,1,227,1,228,1,221,1,241,1,230,1,242,1,0,0,0,0,124,1,172,1,0,0,172,1,0,0,181,0,195,0,0,0,0,0,0,0,0,0,0,0,223,0,207,0,209,0,211,0,210,0,0,0,10,0,20,0,12,0,15,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,171,1,0,0,164,1,168,1,0,0,75,1,40,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,1,34,1,37,1,41,1,45,1,44,1,58,1,59,1,0,0,0,0,89,1,66,1,204,1,39,1,0,0,81,1,35,1,34,1,0,0,0,0,122,1,0,0,82,1,205,1,214,1,211,1,216,1,207,1,208,1,0,0,0,0,0,0,0,0,209,1,206,1,0,0,138,1,0,0,0,0,139,1,0,0,0,0,140,1,196,1,195,1,0,0,0,0,95,1,0,0,0,0,0,0,0,0,180,1,143,1,24,1,202,0,0,0,0,0,93,1,0,0,180,0,196,0,198,0,197,0,206,0,211,0,0,0,102,1,107,1,0,0,105,1,110,1,0,0,0,0,173,1,175,1,176,1,0,0,127,1,0,0,0,0,190,0,197,0,0,0,186,0,0,0,183,0,0,0,184,0,0,0,212,0,0,0,0,0,0,0,0,0,0,0,231,0,0,0,211,0,222,0,0,0,189,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,1,0,0,15,0,0,0,0,0,0,0,0,0,43,0,42,0,17,0,73,0,253,0,0,0,74,0,0,0,1,1,2,1,3,1,0,0,45,1,44,1,39,1,0,0,0,0,119,1,0,0,0,0,0,0,117,1,245,1,0,0,28,1,244,1,33,1,30,1,25,1,29,1,26,1,116,1,170,1,165,1,0,0,112,1,167,1,113,1,0,0,0,0,47,1,46,1,56,1,57,1,0,0,71,1,72,1,0,0,0,0,0,0,60,1,0,0,73,1,0,0,0,0,76,1,61,1,0,0,0,0,0,0,0,0,74,1,115,1,65,1,0,0,83,1,85,1,87,1,0,0,235,1,232,1,237,1,226,1,148,1,144,1,147,1,0,0,149,1,0,0,151,1,145,1,146,1,181,1,0,0,190,1,186,1,188,1,148,1,0,0,0,0,0,0,212,0,0,0,174,0,0,0,195,0,0,0,0,0,211,0,0,0,0,0,0,0,205,0,0,0,101,1,106,1,104,1,109,1,0,0,0,0,133,1,0,0,0,0,132,1,187,0,193,0,192,0,194,0,225,0,191,0,224,0,213,0,0,0,214,0,0,0,215,0,0,0,217,0,0,0,218,0,0,0,0,0,219,0,216,0,0,0,221,0,203,1,215,1,0,0,0,0,21,0,0,0,0,0,26,0,0,0,27,0,28,0,0,0,82,0,0,0,80,0,90,0,89,0,0,0,234,0,241,0,0,0,236,0,0,0,238,0,0,0,135,0,0,0,0,0,134,0,137,0,85,0,0,0,182,0,148,0,0,0,146,0,157,0,0,0,150,0,147,0,21,1,0,0,152,0,219,1,0,0,218,1,0,0,220,1,0,0,0,0,34,1,39,1,16,0,48,0,14,0,0,0,49,0,13,0,87,0,86,0,0,0,0,0,7,0,43,0,18,0,70,0,0,0,0,0,15,1,0,0,0,0,0,0,254,0,21,1,17,1,19,1,13,1,0,1,0,0,0,0,223,1,0,0,12,1,0,0,224,1,6,0,0,0,0,0,0,0,152,1,156,1,118,1,121,1,0,0,32,1,0,0,169,1,166,1,0,0,50,1,79,1,36,1,0,0,54,1,0,0,52,1,78,1,0,0,88,1,0,0,90,1,38,1,0,0,48,1,80,1,67,1,0,0,0,0,141,1,191,1,0,0,0,0,0,0,185,1,0,0,178,0,0,0,0,0,0,0,175,0,0,0,0,0,215,0,0,0,217,0,199,0,179,0,200,0,201,0,174,1,177,1,226,0,227,0,225,0,228,0,224,0,229,0,0,0,230,0,0,0,232,0,22,0,31,0,0,0,23,0,32,0,9,0,15,0,0,0,0,0,0,0,88,0,0,0,233,0,239,1,240,1,244,0,235,0,237,0,0,0,0,0,136,0,0,0,0,0,0,0,154,0,156,0,0,0,21,1,0,0,0,0,144,0,0,0,6,1,39,1,0,0,0,0,72,1,49,0,52,0,0,0,0,0,44,0,0,0,0,0,0,0,40,0,71,0,72,0,240,0,0,0,239,0,166,0,168,0,0,0,0,0,172,0,203,0,204,0,245,0,16,1,0,0,0,0,14,1,18,1,5,1,4,1,38,1,8,1,43,1,42,1,7,1,153,1,160,1,0,0,0,0,21,1,158,1,162,1,111,1,155,1,120,1,31,1,51,1,55,1,53,1,77,1,49,1,84,1,86,1,189,1,187,1,184,1,0,0,177,0,188,0,0,0,220,0,24,0,25,0,0,0,33,0,0,0,34,0,37,0,38,0,39,0,0,0,90,0,81,0,109,0,0,0,0,0,0,0,125,0,96,0,98,0,106,0,0,0,0,0,105,0,0,0,75,0,0,0,132,0,133,0,0,0,119,0,125,0,145,0,0,0,162,0,158,0,160,0,0,0,143,0,149,0,249,0,22,1,151,0,9,1,10,1,11,1,0,0,47,0,59,0,53,0,0,0,54,0,57,0,58,0,52,0,49,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,255,0,0,0,0,0,159,1,157,1,161,1,154,1,173,0,176,0,29,0,30,0,35,0,8,0,0,0,0,0,0,0,203,0,204,0,0,0,0,0,0,0,78,0,0,0,114,0,112,0,0,0,0,0,0,0,0,0,111,0,0,0,0,0,0,0,243,0,0,0,83,0,155,0,0,0,163,0,164,0,0,0,0,0,49,0,62,0,51,0,55,0,0,0,45,0,0,0,0,0,0,0,0,0,0,0,0,0,169,0,204,0,167,0,170,0,171,0,20,1,0,0,36,0,125,0,0,0,0,0,115,0,128,0,126,0,95,0,113,0,0,0,104,0,118,0,117,0,102,0,110,0,103,0,108,0,0,0,121,0,0,0,246,0,76,0,92,0,94,0,125,0,159,0,161,0,250,0,252,0,247,0,251,0,248,0,46,0,0,0,0,0,63,0,0,0,64,0,67,0,68,0,69,0,56,0,50,0,0,0,0,0,139,0,0,0,0,0,165,0,163,1,79,0,0,0,97,0,100,0,0,0,105,0,101,0,0,0,129,0,131,0,116,0,0,0,107,0,0,0,0,0,0,0,84,0,60,0,61,0,65,0,138,0,0,0,141,0,142,0,0,0,127,0,0,0,120,0,0,0,122,0,123,0,91,0,93,0,66,0,140,0,99,0,130,0,124,0,0,0,3,0,51,0,51,0,130,0,3,0,71,0,110,0,71,0,153,0,148,0,137,0,49,1,136,0,147,0,148,0,179,1,25,0,147,0,148,0,153,0,196,2,106,2,25,0,153,0,25,0,103,0,1,0,105,0,147,0,148,0,127,0,154,0,129,0,24,0,153,0,36,0,159,0,38,0,247,1,162,0,103,0,87,2,105,0,37,3,25,0,5,3,65,0,66,0,51,0,40,0,235,0,54,0,156,0,66,0,1,0,36,0,91,2,38,0,1,0,1,0,118,2,1,0,71,0,1,0,34,0,229,1,1,0,38,0,71,0,1,0,1,0,194,1,76,2,196,1,22,0,198,1,55,0,34,0,11,0,43,0,180,2,38,0,46,0,147,0,148,0,1,0,90,2,44,0,91,0,153,0,60,0,70,0,1,0,35,0,95,0,70,0,62,0,39,0,195,0,12,0,1,0,1,0,0,0,60,0,35,0,229,0,53,0,42,0,43,0,112,0,42,0,23,0,47,0,112,0,95,0,109,3,36,3,23,0,58,0,25,0,58,0,179,2,70,0,63,0,95,0,58,0,69,0,130,0,76,0,253,0,70,0,134,0,70,0,136,0,137,0,220,2,96,3,128,0,157,0,59,3,143,0,42,0,58,0,96,2,157,0,58,0,47,0,47,0,32,0,58,0,33,1,51,0,36,0,77,1,70,0,33,1,0,3,1,3,32,1,33,1,4,3,70,0,86,1,87,1,48,0,1,0,168,0,1,0,52,0,32,1,33,1,13,0,34,0,97,1,69,0,87,0,38,0,61,0,19,1,229,0,229,0,87,0,22,0,164,0,69,0,187,0,53,1,16,3,72,0,55,0,3,0,144,2,43,0,59,0,38,3,29,0,177,0,178,0,60,0,35,0,44,3,109,2,69,0,253,0,55,0,1,0,0,1,47,0,2,1,69,0,4,1,214,0,124,0,125,0,85,1,250,2,77,2,1,3,124,0,125,0,4,3,43,0,32,1,35,0,32,1,33,1,229,0,39,0,31,1,8,3,91,2,179,0,235,0,236,0,24,3,31,0,184,0,44,0,51,0,35,0,69,0,71,0,72,0,39,0,33,0,35,0,194,0,50,1,51,1,39,0,253,0,43,0,255,0,0,1,38,3,2,1,15,0,4,1,55,0,56,0,128,1,35,0,9,1,53,0,53,0,39,0,137,1,138,1,139,1,65,0,141,1,46,0,69,0,121,1,21,1,64,0,65,0,66,0,21,1,32,1,27,1,70,0,29,1,30,1,27,1,32,1,29,1,30,1,78,3,160,1,69,0,81,3,82,3,43,0,162,1,166,1,164,1,168,1,210,0,112,0,43,0,172,1,53,0,211,2,210,0,55,0,31,1,52,1,149,1,7,0,100,3,74,1,55,0,64,0,44,0,66,0,106,3,69,0,34,0,186,2,187,2,188,2,38,0,136,0,191,2,50,1,51,1,239,0,44,0,56,0,242,0,77,1,56,0,239,0,128,1,128,1,242,0,208,1,85,1,56,0,86,1,87,1,220,1,32,0,60,0,92,1,53,0,129,2,16,2,42,0,239,1,97,1,20,2,56,0,22,2,47,1,72,0,64,0,55,0,48,0,52,1,239,1,30,2,52,0,1,0,239,1,33,0,55,0,56,0,33,0,37,0,35,0,61,0,244,1,252,1,253,1,239,1,56,0,245,2,1,2,127,1,128,1,243,2,72,0,55,0,56,0,53,0,134,1,80,1,250,2,137,1,138,1,139,1,53,0,141,1,6,2,33,0,64,0,65,0,66,0,64,0,65,0,66,0,8,3,64,0,56,0,66,0,154,1,196,1,156,1,198,1,158,1,17,3,160,1,51,0,162,1,229,0,164,1,56,0,166,1,59,0,168,1,169,1,245,1,45,0,172,1,47,0,64,0,65,0,66,0,53,0,239,1,37,3,48,2,55,0,55,0,56,0,49,2,245,1,51,2,253,0,188,1,31,0,0,1,191,1,2,1,35,0,4,1,75,2,34,2,39,0,33,0,125,2,75,2,69,0,1,0,11,0,75,2,32,1,206,1,42,0,208,1,49,0,78,2,21,1,212,1,47,0,58,0,75,2,216,1,27,1,218,1,29,1,30,1,55,0,56,0,32,0,55,0,34,0,90,3,225,1,47,0,64,0,65,0,66,0,56,0,71,2,33,0,73,2,55,0,56,0,113,2,48,0,240,1,56,0,113,2,52,0,244,1,1,0,104,3,3,0,4,0,5,0,1,0,109,3,61,0,113,2,53,0,82,1,24,1,25,1,49,2,185,2,51,2,187,2,89,1,72,0,91,1,64,0,65,0,66,0,95,1,43,0,75,2,98,1,60,0,16,2,55,0,56,0,42,0,20,2,223,1,22,2,225,1,60,0,33,0,47,0,35,0,55,0,56,0,30,2,39,0,60,0,41,0,55,0,56,0,55,0,56,0,60,0,33,0,56,0,42,2,56,0,47,0,45,2,53,0,51,0,48,2,49,2,55,0,51,2,113,2,1,0,54,0,175,2,70,0,64,0,65,0,66,0,181,2,61,2,128,1,63,2,246,2,55,0,56,0,142,2,61,0,42,0,252,2,64,0,65,0,66,0,198,2,42,0,2,3,77,2,78,2,70,0,80,2,29,0,142,2,43,0,32,0,56,0,34,0,87,2,13,0,33,0,59,0,91,2,55,0,56,0,28,0,70,0,162,1,58,0,164,1,33,0,48,0,35,0,55,0,56,0,52,0,39,0,58,0,41,0,12,0,33,0,29,0,35,0,60,0,61,0,70,0,39,0,55,0,41,0,118,2,53,0,64,0,65,0,66,0,57,0,72,0,125,2,126,2,42,0,14,3,53,0,64,0,65,0,66,0,31,0,181,2,33,0,56,0,71,0,33,0,14,3,64,0,65,0,66,0,14,3,49,0,43,0,55,0,241,2,55,0,56,0,14,3,15,3,55,0,56,0,14,3,53,0,51,0,135,2,103,2,104,2,105,2,161,2,55,0,56,0,1,0,161,2,64,0,65,0,66,0,64,0,65,0,66,0,55,0,56,0,240,1,55,0,56,0,177,2,45,0,179,2,180,2,181,2,54,0,56,0,31,0,185,2,33,0,187,2,188,2,54,0,54,0,53,0,29,0,56,0,194,2,32,0,56,0,34,0,198,2,53,0,33,0,54,0,202,2,54,0,204,2,33,0,53,0,207,2,35,2,14,3,31,0,48,0,47,0,54,0,42,0,52,0,13,0,64,0,65,0,66,0,53,0,86,3,22,0,60,0,61,0,225,2,226,2,227,2,228,2,229,2,98,3,64,0,65,0,66,0,54,0,72,0,64,0,65,0,66,0,49,2,56,0,51,2,56,0,243,2,244,2,113,3,246,2,247,2,58,0,47,0,250,2,1,0,252,2,56,0,56,0,54,0,0,3,1,3,2,3,54,0,4,3,54,0,56,0,55,0,8,3,55,0,53,0,77,2,69,0,31,0,70,0,71,0,72,0,51,0,54,0,42,0,76,0,87,2,47,0,29,0,24,3,91,2,32,0,27,3,34,0,29,3,56,0,97,2,56,0,55,0,100,2,56,0,69,0,37,3,38,3,86,3,86,3,37,3,48,0,15,0,44,3,22,0,52,0,32,0,55,0,34,0,53,0,36,0,33,0,38,0,60,0,61,0,226,2,227,2,228,2,229,2,56,0,61,3,55,0,48,0,51,0,56,0,72,0,52,0,35,0,43,0,56,0,127,0,43,0,129,0,43,0,60,0,61,0,69,0,78,3,134,0,61,0,81,3,82,3,64,0,65,0,66,0,86,3,72,0,1,0,55,0,90,3,147,0,148,0,43,0,56,0,161,2,56,0,153,0,98,3,55,0,100,3,33,0,43,0,16,0,17,0,18,0,106,3,54,0,56,0,109,3,42,0,55,0,168,0,113,3,180,2,181,2,29,0,30,0,31,0,71,2,33,0,237,1,35,0,179,0,241,2,237,1,39,0,54,0,184,0,219,2,57,0,187,0,64,0,65,0,66,0,48,0,19,3,50,0,194,0,195,0,53,0,113,2,104,3,99,3,57,0,58,0,239,1,243,2,8,3,96,3,88,2,64,0,65,0,66,0,12,3,11,3,27,3,70,0,71,0,161,2,226,2,227,2,228,2,229,2,98,3,248,1,32,0,169,1,34,0,128,1,36,0,32,1,38,0,32,0,32,1,34,0,32,0,243,2,34,0,38,0,235,0,236,0,48,0,255,1,250,2,34,2,52,0,26,0,33,0,48,0,0,3,1,3,48,0,52,0,4,3,61,0,52,0,1,0,8,3,214,0,255,0,60,0,61,0,92,1,60,0,61,0,72,0,134,0,53,0,4,2,9,1,33,0,148,2,72,0,24,3,145,2,72,0,27,3,63,0,64,0,65,0,66,0,74,1,129,0,28,0,126,1,26,1,37,3,38,3,33,0,25,0,35,0,32,1,33,1,44,3,39,0,36,1,41,0,149,1,61,0,255,255,1,0,64,0,65,0,66,0,39,2,191,2,47,1,255,255,53,0,255,255,255,255,52,1,57,0,54,1,255,255,255,255,255,255,255,255,255,255,64,0,65,0,66,0,255,255,255,255,255,255,255,255,71,0,78,3,1,0,255,255,81,3,82,3,33,0,255,255,35,0,86,3,77,1,255,255,39,0,80,1,41,0,82,1,255,255,255,255,255,255,86,1,87,1,255,255,89,1,100,3,91,1,255,255,53,0,255,255,95,1,106,3,97,1,98,1,109,3,255,255,33,0,255,255,35,0,64,0,65,0,66,0,39,0,235,0,236,0,255,255,33,0,255,255,35,0,255,255,255,255,255,255,2,0,255,255,255,255,255,255,53,0,7,0,8,0,255,255,57,0,255,255,59,0,255,0,255,255,255,255,53,0,64,0,65,0,66,0,134,1,255,255,255,255,9,1,71,0,25,0,26,0,64,0,65,0,66,0,1,0,255,255,255,255,19,1,149,1,6,0,255,255,255,255,255,255,10,0,154,1,255,255,156,1,14,0,158,1,255,255,255,255,255,255,34,1,255,255,255,255,255,255,23,0,255,255,255,255,26,0,27,0,255,255,29,0,30,0,31,0,32,0,33,0,34,0,35,0,36,0,37,0,38,0,39,0,40,0,41,0,255,255,255,255,255,255,188,1,46,0,255,255,48,0,255,255,50,0,255,255,52,0,53,0,255,255,55,0,56,0,57,0,255,255,255,255,60,0,61,0,255,255,206,1,64,0,65,0,66,0,255,255,33,0,212,1,35,0,71,0,72,0,216,1,39,0,255,255,220,1,255,255,255,255,223,1,255,255,225,1,255,255,255,255,255,255,255,255,51,0,255,255,53,0,54,0,234,1,235,1,57,0,255,255,255,255,239,1,255,255,241,1,255,255,64,0,65,0,66,0,255,255,229,0,255,255,33,0,71,0,35,0,252,1,253,1,255,255,255,1,255,255,1,2,255,255,255,255,4,2,255,255,255,255,134,1,255,255,150,0,255,255,255,255,255,255,53,0,155,0,253,0,16,2,33,0,34,0,35,0,20,2,255,255,22,2,39,0,64,0,65,0,66,0,154,1,255,255,156,1,30,2,158,1,255,255,255,255,34,2,35,2,52,0,53,0,54,0,255,255,255,255,57,0,255,255,255,255,60,0,255,255,45,2,255,255,64,0,65,0,66,0,192,0,179,1,255,255,255,255,71,0,255,255,255,255,1,0,255,255,255,255,188,1,61,2,255,255,63,2,255,255,255,255,208,0,255,255,255,255,211,0,255,255,213,0,255,255,255,255,75,2,255,255,218,0,255,255,206,1,255,255,222,0,255,255,224,0,255,255,212,1,255,255,255,255,88,2,216,1,33,0,255,255,35,0,255,255,255,255,255,255,39,0,255,255,41,0,255,255,1,0,255,255,229,1,103,2,104,2,105,2,255,255,107,2,255,255,255,255,53,0,111,2,33,0,113,2,35,0,16,0,17,0,18,0,39,0,255,255,41,0,64,0,65,0,66,0,255,255,255,255,125,2,126,2,29,0,30,0,31,0,255,255,33,0,255,255,35,0,33,0,34,0,35,0,39,0,255,255,41,0,39,0,255,255,64,0,65,0,66,0,128,1,48,0,148,2,50,0,255,255,255,255,53,0,255,255,52,0,53,0,57,0,58,0,255,255,57,0,255,255,1,0,60,0,64,0,65,0,66,0,64,0,65,0,66,0,70,0,71,0,56,1,57,1,71,0,45,2,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,185,2,72,1,187,2,188,2,61,2,255,255,63,2,33,0,255,255,35,0,255,255,255,255,255,255,39,0,71,2,33,0,255,255,35,0,33,0,204,2,35,0,39,0,207,2,255,255,39,0,51,0,41,0,53,0,255,255,55,0,56,0,57,0,255,255,219,2,255,255,221,2,222,2,223,2,64,0,65,0,66,0,56,0,255,255,255,255,255,255,71,0,64,0,65,0,66,0,64,0,65,0,66,0,109,2,255,255,1,0,255,255,255,255,255,255,255,255,2,0,255,255,246,2,247,2,255,255,7,0,8,0,255,255,252,2,125,2,126,2,255,255,255,255,240,1,2,3,255,255,5,3,6,3,255,255,255,255,150,1,23,0,24,0,25,0,26,0,14,3,255,255,33,0,17,3,35,0,19,3,255,255,255,255,39,0,23,3,41,0,255,255,255,255,40,0,255,255,255,255,29,3,33,0,255,255,35,0,255,255,52,0,53,0,39,0,255,255,33,0,57,0,35,0,255,255,37,0,255,255,39,0,255,255,64,0,65,0,66,0,52,0,53,0,65,0,66,0,71,0,57,0,255,255,255,255,185,2,53,0,187,2,188,2,64,0,65,0,66,0,255,255,255,255,255,255,255,255,71,0,64,0,65,0,66,0,255,255,87,0,255,255,255,255,204,2,255,255,255,255,207,2,255,255,255,255,255,255,211,2,255,255,255,255,255,255,255,255,255,255,103,0,90,3,105,0,255,255,255,255,77,2,96,3,255,255,255,255,99,3,255,255,255,255,243,1,255,255,104,3,87,2,255,255,255,255,255,255,91,2,255,255,124,0,125,0,255,255,255,255,128,0,255,255,255,255,1,0,246,2,247,2,255,255,249,2,22,0,255,255,252,2,11,2,255,255,13,2,255,255,33,0,2,3,35,0,255,255,37,0,255,255,39,0,150,0,255,255,255,255,255,255,255,255,155,0,255,255,157,0,255,255,29,0,30,0,31,0,255,255,33,0,255,255,35,0,38,2,255,255,40,2,39,0,255,255,29,3,22,0,255,255,64,0,65,0,66,0,255,255,255,255,255,255,50,0,255,255,40,3,53,0,70,0,71,0,72,0,57,0,255,255,255,255,76,0,255,255,192,0,255,255,64,0,65,0,66,0,33,0,255,255,35,0,255,255,71,0,255,255,39,0,255,255,33,0,255,255,35,0,208,0,255,255,210,0,211,0,181,2,213,0,1,0,51,0,185,2,53,0,218,0,188,2,70,0,57,0,222,0,223,0,224,0,53,0,76,0,55,0,64,0,65,0,66,0,255,255,90,3,255,255,255,255,71,0,64,0,65,0,66,0,239,0,255,255,28,0,242,0,255,255,255,255,255,255,33,0,34,0,35,0,255,255,255,255,255,255,39,0,111,3,41,0,255,255,255,255,226,2,227,2,228,2,229,2,147,0,148,0,255,255,51,0,255,255,53,0,153,0,55,0,56,0,57,0,143,2,255,255,255,255,243,2,19,1,255,255,64,0,65,0,66,0,255,255,250,2,168,0,1,0,71,0,255,255,255,255,0,3,1,3,255,255,255,255,4,3,255,255,179,0,255,255,8,3,255,255,255,255,184,0,255,255,255,255,187,0,255,255,255,255,255,255,255,255,255,255,255,255,194,0,255,255,255,255,24,3,56,1,57,1,27,3,33,0,255,255,35,0,168,0,255,255,255,255,39,0,255,255,41,0,37,3,38,3,1,0,255,255,72,1,179,0,74,1,255,255,255,255,255,255,184,0,53,0,255,255,187,0,255,255,57,0,255,255,255,255,255,255,255,255,194,0,255,255,64,0,65,0,66,0,255,255,255,255,255,255,255,255,71,0,255,255,255,255,255,255,255,255,33,0,231,2,35,0,255,255,255,255,255,255,39,0,78,3,41,0,255,255,81,3,82,3,255,255,255,255,255,255,86,3,255,255,255,255,255,255,90,3,53,0,255,255,255,255,1,0,126,1,255,255,255,255,98,3,255,255,100,3,255,255,64,0,65,0,66,0,255,255,106,3,255,255,255,255,109,3,255,255,255,255,255,255,255,255,255,255,32,1,33,1,255,255,255,255,150,1,240,1,28,0,255,255,255,255,255,255,255,255,33,0,34,0,35,0,255,255,47,1,34,3,39,0,255,255,41,0,52,1,255,255,54,1,255,255,255,255,255,255,255,255,255,255,255,255,51,0,255,255,53,0,255,255,55,0,56,0,57,0,255,255,255,255,255,255,255,255,1,0,255,255,64,0,65,0,66,0,77,1,255,255,255,255,80,1,71,0,82,1,47,1,255,255,255,255,86,1,87,1,52,1,89,1,255,255,91,1,255,255,255,255,255,255,95,1,255,255,97,1,98,1,255,255,29,0,30,0,31,0,255,255,33,0,255,255,35,0,255,255,255,255,255,255,39,0,255,255,255,255,77,1,255,255,255,255,80,1,255,255,255,255,255,255,255,255,50,0,86,1,87,1,53,0,255,255,255,255,56,0,57,0,243,1,77,2,245,1,255,255,97,1,255,255,64,0,65,0,66,0,1,0,255,255,87,2,255,255,71,0,6,0,91,2,255,255,255,255,10,0,255,255,255,255,255,255,14,0,255,255,11,2,255,255,13,2,255,255,255,255,255,255,255,255,23,0,255,255,255,255,26,0,27,0,255,255,29,0,30,0,31,0,255,255,33,0,255,255,35,0,255,255,37,0,255,255,39,0,40,0,41,0,255,255,38,2,39,2,40,2,46,0,1,0,48,0,255,255,50,0,255,255,255,255,53,0,255,255,255,255,255,255,57,0,255,255,59,0,33,0,255,255,35,0,255,255,64,0,65,0,66,0,255,255,255,255,255,255,255,255,71,0,45,0,255,255,28,0,255,255,71,2,255,255,73,2,33,0,53,0,35,0,55,0,220,1,255,255,39,0,223,1,255,255,225,1,255,255,255,255,64,0,65,0,66,0,255,255,255,255,180,2,255,255,52,0,53,0,255,255,255,255,239,1,57,0,255,255,255,255,255,255,255,255,255,255,255,255,64,0,65,0,66,0,255,255,255,255,252,1,253,1,71,0,255,1,255,255,1,2,255,255,223,1,4,2,225,1,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,16,2,255,255,255,255,255,255,20,2,255,255,22,2,226,2,227,2,228,2,229,2,255,255,142,2,143,2,30,2,33,0,255,255,35,0,255,255,35,2,255,255,39,0,255,255,255,255,243,2,255,255,255,255,255,255,1,0,255,255,255,255,250,2,255,255,51,0,255,255,53,0,16,2,0,3,1,3,57,0,20,2,4,3,22,2,255,255,255,255,8,3,64,0,65,0,66,0,255,255,30,2,255,255,255,255,71,0,255,255,28,0,255,255,255,255,255,255,75,2,33,0,24,3,35,0,255,255,27,3,255,255,39,0,255,255,41,0,255,255,255,255,255,255,255,255,255,255,37,3,38,3,255,255,255,255,51,0,255,255,53,0,44,3,55,0,56,0,57,0,255,255,255,255,103,2,104,2,105,2,255,255,64,0,65,0,66,0,255,255,255,255,255,255,113,2,71,0,255,255,255,255,231,2,255,255,255,255,255,255,255,255,255,255,255,255,33,0,255,255,35,0,241,2,37,0,255,255,39,0,78,3,255,255,255,255,81,3,82,3,45,0,255,255,255,255,103,2,104,2,105,2,255,255,255,255,53,0,1,0,55,0,255,255,148,2,255,255,6,0,255,255,255,255,100,3,10,0,64,0,65,0,66,0,14,0,106,3,255,255,255,255,109,3,255,255,255,255,255,255,255,255,23,0,255,255,255,255,26,0,27,0,255,255,29,0,30,0,31,0,34,3,33,0,255,255,35,0,255,255,37,0,255,255,39,0,40,0,41,0,255,255,255,255,255,255,255,255,46,0,1,0,48,0,255,255,50,0,255,255,6,0,53,0,255,255,255,255,10,0,57,0,255,255,59,0,14,0,255,255,255,255,255,255,64,0,65,0,66,0,255,255,255,255,23,0,255,255,71,0,26,0,27,0,255,255,29,0,30,0,31,0,255,255,33,0,255,255,35,0,255,255,37,0,255,255,39,0,40,0,41,0,255,255,255,255,255,255,255,255,46,0,1,0,48,0,255,255,50,0,255,255,6,0,53,0,255,255,255,255,10,0,57,0,255,255,59,0,14,0,255,255,255,255,255,255,64,0,65,0,66,0,255,255,255,255,23,0,255,255,71,0,26,0,27,0,255,255,29,0,30,0,31,0,255,255,33,0,14,3,35,0,255,255,37,0,255,255,39,0,40,0,41,0,255,255,255,255,255,255,255,255,46,0,1,0,48,0,255,255,50,0,255,255,6,0,53,0,255,255,255,255,10,0,57,0,255,255,255,255,14,0,255,255,255,255,255,255,64,0,65,0,66,0,255,255,1,0,23,0,255,255,71,0,26,0,27,0,255,255,29,0,30,0,31,0,255,255,33,0,255,255,35,0,255,255,37,0,255,255,39,0,40,0,41,0,255,255,255,255,255,255,255,255,46,0,255,255,48,0,28,0,50,0,255,255,255,255,53,0,33,0,255,255,35,0,57,0,255,255,255,255,39,0,1,0,41,0,255,255,64,0,65,0,66,0,255,255,255,255,255,255,255,255,71,0,51,0,255,255,53,0,255,255,55,0,56,0,57,0,255,255,255,255,255,255,1,0,255,255,255,255,64,0,65,0,66,0,28,0,255,255,255,255,255,255,71,0,33,0,255,255,35,0,255,255,255,255,1,0,39,0,255,255,1,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,52,0,53,0,33,0,255,255,35,0,57,0,255,255,255,255,39,0,255,255,255,255,255,255,64,0,65,0,66,0,255,255,255,255,255,255,33,0,71,0,35,0,33,0,53,0,35,0,39,0,56,0,57,0,39,0,1,0,41,0,255,255,255,255,255,255,64,0,65,0,66,0,255,255,52,0,53,0,255,255,71,0,53,0,57,0,255,255,255,255,57,0,255,255,255,255,255,255,64,0,65,0,66,0,64,0,65,0,66,0,255,255,71,0,255,255,255,255,71,0,33,0,255,255,35,0,255,255,255,255,255,255,39,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,6,0,53,0,255,255,255,255,10,0,57,0,255,255,255,255,14,0,255,255,255,255,255,255,64,0,65,0,66,0,255,255,255,255,23,0,255,255,71,0,26,0,27,0,255,255,29,0,30,0,31,0,255,255,33,0,255,255,35,0,255,255,37,0,255,255,39,0,40,0,41,0,255,255,255,255,255,255,255,255,46,0,255,255,48,0,255,255,50,0,255,255,6,0,53,0,255,255,255,255,10,0,57,0,58,0,255,255,14,0,255,255,255,255,255,255,64,0,65,0,66,0,255,255,255,255,23,0,255,255,71,0,26,0,27,0,255,255,29,0,30,0,31,0,255,255,33,0,255,255,35,0,255,255,37,0,255,255,39,0,40,0,41,0,255,255,255,255,255,255,255,255,46,0,255,255,48,0,255,255,50,0,255,255,255,255,53,0,255,255,6,0,56,0,57,0,255,255,10,0,255,255,255,255,255,255,14,0,64,0,65,0,66,0,255,255,255,255,255,255,255,255,71,0,23,0,255,255,255,255,26,0,27,0,255,255,29,0,30,0,31,0,255,255,33,0,255,255,35,0,255,255,37,0,255,255,39,0,40,0,41,0,255,255,255,255,255,255,255,255,46,0,255,255,255,255,255,255,50,0,255,255,255,255,53,0,255,255,6,0,56,0,57,0,255,255,10,0,255,255,255,255,255,255,14,0,64,0,65,0,66,0,255,255,255,255,255,255,255,255,71,0,23,0,255,255,255,255,26,0,27,0,255,255,29,0,30,0,31,0,255,255,33,0,255,255,35,0,255,255,37,0,255,255,39,0,40,0,41,0,255,255,255,255,255,255,255,255,46,0,255,255,48,0,255,255,50,0,255,255,6,0,53,0,255,255,255,255,10,0,57,0,255,255,255,255,14,0,255,255,255,255,255,255,64,0,65,0,66,0,255,255,255,255,23,0,255,255,71,0,26,0,27,0,255,255,29,0,30,0,31,0,255,255,33,0,255,255,35,0,255,255,37,0,255,255,39,0,40,0,41,0,255,255,255,255,255,255,255,255,46,0,255,255,48,0,255,255,50,0,255,255,6,0,53,0,255,255,255,255,10,0,57,0,255,255,255,255,14,0,255,255,255,255,255,255,64,0,65,0,66,0,255,255,255,255,23,0,255,255,71,0,26,0,27,0,255,255,29,0,30,0,31,0,255,255,33,0,255,255,35,0,255,255,37,0,255,255,39,0,40,0,41,0,255,255,255,255,255,255,255,255,46,0,255,255,48,0,255,255,50,0,255,255,6,0,53,0,255,255,255,255,10,0,57,0,255,255,255,255,14,0,255,255,255,255,255,255,64,0,65,0,66,0,255,255,255,255,23,0,255,255,71,0,26,0,27,0,255,255,29,0,30,0,31,0,255,255,33,0,255,255,35,0,255,255,37,0,255,255,39,0,40,0,41,0,255,255,255,255,255,255,255,255,46,0,255,255,48,0,255,255,50,0,255,255,6,0,53,0,255,255,255,255,10,0,57,0,255,255,255,255,14,0,255,255,255,255,255,255,64,0,65,0,66,0,255,255,255,255,23,0,255,255,71,0,26,0,27,0,255,255,29,0,30,0,31,0,255,255,33,0,255,255,35,0,255,255,37,0,255,255,39,0,40,0,41,0,255,255,255,255,255,255,255,255,46,0,255,255,255,255,255,255,50,0,255,255,255,255,53,0,255,255,255,255,255,255,57,0,255,255,255,255,255,255,255,255,255,255,255,255,64,0,65,0,66,0,8,0,9,0,255,255,255,255,71,0,255,255,255,255,255,255,16,0,17,0,18,0,19,0,20,0,21,0,255,255,255,255,24,0,25,0,255,255,255,255,255,255,29,0,30,0,31,0,255,255,33,0,255,255,35,0,255,255,255,255,255,255,39,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,48,0,255,255,50,0,255,255,255,255,53,0,255,255,255,255,255,255,57,0,58,0,255,255,255,255,255,255,255,255,63,0,64,0,65,0,66,0,67,0,68,0,8,0,9,0,71,0,255,255,255,255,255,255,255,255,255,255,16,0,17,0,18,0,19,0,20,0,21,0,255,255,255,255,24,0,25,0,255,255,255,255,255,255,29,0,30,0,31,0,255,255,33,0,255,255,35,0,255,255,255,255,255,255,39,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,48,0,255,255,50,0,255,255,255,255,53,0,255,255,255,255,255,255,57,0,255,255,255,255,255,255,255,255,255,255,255,255,64,0,65,0,66,0,67,0,68,0,255,255,27,0,71,0,29,0,30,0,31,0,255,255,33,0,255,255,35,0,255,255,37,0,255,255,39,0,40,0,41,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,50,0,255,255,255,255,53,0,255,255,255,255,255,255,57,0,255,255,255,255,255,255,255,255,255,255,255,255,64,0,65,0,66,0,255,255,255,255,255,255,255,255,71,0,29,0,30,0,31,0,32,0,33,0,34,0,35,0,255,255,255,255,38,0,39,0,255,255,255,255,255,255,43,0,44,0,255,255,255,255,255,255,48,0,255,255,50,0,255,255,52,0,53,0,255,255,55,0,255,255,57,0,255,255,255,255,60,0,61,0,255,255,255,255,64,0,65,0,66,0,255,255,255,255,255,255,255,255,71,0,72,0,29,0,30,0,31,0,32,0,33,0,34,0,35,0,255,255,255,255,38,0,39,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,48,0,255,255,50,0,255,255,52,0,53,0,255,255,55,0,56,0,57,0,255,255,255,255,255,255,61,0,255,255,255,255,64,0,65,0,66,0,255,255,255,255,255,255,255,255,71,0,72,0,29,0,30,0,31,0,32,0,33,0,34,0,35,0,255,255,255,255,38,0,39,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,48,0,255,255,50,0,255,255,52,0,53,0,255,255,55,0,56,0,57,0,255,255,255,255,255,255,61,0,255,255,255,255,64,0,65,0,66,0,255,255,255,255,255,255,255,255,71,0,72,0,29,0,30,0,31,0,32,0,33,0,34,0,35,0,255,255,255,255,38,0,39,0,255,255,255,255,255,255,255,255,44,0,255,255,255,255,255,255,48,0,255,255,50,0,255,255,52,0,53,0,255,255,255,255,255,255,57,0,255,255,255,255,60,0,61,0,255,255,255,255,64,0,65,0,66,0,255,255,255,255,255,255,255,255,71,0,72,0,29,0,30,0,31,0,255,255,33,0,255,255,35,0,255,255,255,255,255,255,39,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,48,0,255,255,50,0,255,255,255,255,53,0,255,255,255,255,255,255,57,0,255,255,59,0,255,255,255,255,255,255,255,255,64,0,65,0,66,0,255,255,29,0,30,0,31,0,71,0,33,0,255,255,35,0,255,255,255,255,255,255,39,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,48,0,255,255,50,0,255,255,255,255,53,0,255,255,255,255,255,255,57,0,58,0,255,255,255,255,255,255,255,255,255,255,64,0,65,0,66,0,255,255,29,0,30,0,31,0,71,0,33,0,255,255,35,0,255,255,255,255,255,255,39,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,50,0,51,0,255,255,53,0,255,255,255,255,255,255,57,0,255,255,255,255,255,255,255,255,255,255])
.concat([255,255,64,0,65,0,66,0,255,255,29,0,30,0,31,0,71,0,33,0,255,255,35,0,255,255,255,255,255,255,39,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,48,0,255,255,50,0,255,255,255,255,53,0,255,255,255,255,255,255,57,0,255,255,255,255,255,255,255,255,255,255,255,255,64,0,65,0,66,0,255,255,29,0,30,0,31,0,71,0,33,0,255,255,35,0,255,255,255,255,255,255,39,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,48,0,255,255,50,0,255,255,255,255,53,0,255,255,255,255,255,255,57,0,255,255,255,255,255,255,255,255,255,255,255,255,64,0,65,0,66,0,255,255,29,0,30,0,31,0,71,0,33,0,255,255,35,0,255,255,255,255,255,255,39,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,48,0,255,255,50,0,255,255,255,255,53,0,255,255,255,255,255,255,57,0,255,255,255,255,255,255,255,255,255,255,255,255,64,0,65,0,66,0,255,255,29,0,30,0,31,0,71,0,33,0,255,255,35,0,255,255,255,255,255,255,39,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,48,0,255,255,50,0,255,255,255,255,53,0,255,255,255,255,255,255,57,0,255,255,255,255,255,255,255,255,255,255,255,255,64,0,65,0,66,0,255,255,29,0,30,0,31,0,71,0,33,0,255,255,35,0,255,255,255,255,255,255,39,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,48,0,255,255,50,0,255,255,255,255,53,0,255,255,255,255,255,255,57,0,255,255,255,255,255,255,255,255,255,255,255,255,64,0,65,0,66,0,255,255,29,0,30,0,31,0,71,0,33,0,255,255,35,0,255,255,255,255,255,255,39,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,50,0,255,255,255,255,53,0,255,255,255,255,56,0,57,0,255,255,255,255,255,255,255,255,255,255,255,255,64,0,65,0,66,0,255,255,29,0,30,0,31,0,71,0,33,0,255,255,35,0,255,255,255,255,255,255,39,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,48,0,255,255,50,0,255,255,255,255,53,0,255,255,255,255,255,255,57,0,255,255,255,255,255,255,255,255,255,255,255,255,64,0,65,0,66,0,255,255,29,0,30,0,31,0,71,0,33,0,255,255,35,0,33,0,255,255,35,0,39,0,255,255,255,255,39,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,50,0,255,255,255,255,53,0,51,0,255,255,53,0,57,0,55,0,56,0,57,0,255,255,255,255,255,255,64,0,65,0,66,0,64,0,65,0,66,0,33,0,71,0,35,0,255,255,71,0,255,255,39,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,51,0,33,0,53,0,35,0,55,0,56,0,57,0,39,0,255,255,255,255,255,255,255,255,255,255,64,0,65,0,66,0,255,255,255,255,255,255,51,0,71,0,53,0,255,255,55,0,56,0,57,0,255,255,255,255,255,255,33,0,255,255,35,0,64,0,65,0,66,0,39,0,255,255,255,255,255,255,71,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,33,0,53,0,35,0,55,0,56,0,57,0,39,0,255,255,255,255,42,0,255,255,255,255,64,0,65,0,66,0,255,255,33,0,255,255,35,0,71,0,53,0,54,0,39,0,255,255,57,0,255,255,255,255,255,255,255,255,255,255,255,255,64,0,65,0,66,0,51,0,255,255,53,0,54,0,71,0,255,255,57,0,255,255,255,255,255,255,33,0,34,0,35,0,64,0,65,0,66,0,39,0,255,255,255,255,255,255,71,0,255,255,255,255,255,255,255,255,255,255,33,0,255,255,35,0,255,255,53,0,255,255,39,0,255,255,57,0,42,0,255,255,60,0,255,255,255,255,255,255,64,0,65,0,66,0,255,255,33,0,53,0,35,0,71,0,255,255,57,0,39,0,255,255,255,255,255,255,255,255,255,255,64,0,65,0,66,0,255,255,33,0,255,255,35,0,71,0,53,0,54,0,39,0,255,255,57,0,255,255,255,255,255,255,255,255,255,255,255,255,64,0,65,0,66,0,51,0,255,255,53,0,33,0,71,0,35,0,57,0,255,255,255,255,39,0,255,255,255,255,255,255,64,0,65,0,66,0,255,255,255,255,255,255,255,255,71,0,255,255,52,0,53,0,33,0,255,255,35,0,57,0,255,255,255,255,39,0,255,255,41,0,255,255,64,0,65,0,66,0,255,255,255,255,255,255,33,0,71,0,35,0,33,0,53,0,35,0,39,0,255,255,57,0,39,0,255,255,255,255,255,255,255,255,255,255,64,0,65,0,66,0,51,0,33,0,53,0,35,0,71,0,53,0,57,0,39,0,255,255,57,0,255,255,255,255,255,255,64,0,65,0,66,0,64,0,65,0,66,0,255,255,71,0,53,0,33,0,71,0,35,0,57,0,37,0,255,255,39,0,255,255,255,255,255,255,64,0,65,0,66,0,255,255,255,255,255,255,255,255,71,0,255,255,255,255,53,0,255,255,55,0,56,0,33,0,255,255,35,0,255,255,37,0,62,0,39,0,64,0,65,0,66,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,53,0,255,255,255,255,56,0,255,255,255,255,255,255,255,255,255,255,62,0,255,255,64,0,65,0,66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,19,1,0,0,0,0,0,1,0,0,0,0,0,0,0,176,78,1,0,0,0,0,0,176,36,1,0,0,0,0,0,72,36,1,0,0,0,0,0,104,37,1,0,0,0,0,0,16,37,1,0,0,0,0,0,72,40,1,0,0,0,0,0,168,40,1,0,0,0,0,0,96,45,1,0,0,0,0,0,184,46,1,0,0,0,0,0,216,44,1,0,0,0,0,0,80,46,1,0,0,0,0,0,24,47,1,0,0,0,0,0,208,45,1,0,0,0,0,0,104,37,1,0,0,0,0,0,40,61,1,0,0,0,0,0,232,34,1,0,0,0,0,0,72,40,1,0,0,0,0,0,168,40,1,0,0,0,0,0,72,40,1,0,0,0,0,0,168,40,1,0,0,0,0,0,24,44,1,0,0,0,0,0,128,43,1,0,0,0,0,0,184,61,1,0,0,0,0,0,248,61,1,0,0,0,0,0,16,34,1,0,0,0,0,0,0,0,0,0,0,0,0,0,115,0,0,0,1,0,0,0,104,84,1,0,0,235,40,0,116,0,0,0,1,0,0,0,136,86,1,0,64,35,54,0,103,0,0,0,1,0,0,0,248,32,1,0,0,46,44,0,108,0,0,0,1,0,0,0,8,7,1,0,192,25,44,0,46,0,0,0,1,0,0,0,24,248,0,0,88,29,2,0,113,0,0,0,1,0,0,0,200,235,0,0,16,88,0,0,81,0,0,0,1,0,0,0,48,226,0,0,80,29,2,0,119,0,0,0,1,0,0,0,160,218,0,0,216,25,44,0,107,0,0,0,1,0,0,0,184,212,0,0,96,43,44,0,111,0,0,0,0,0,0,0,48,207,0,0,48,35,54,0,79,0,0,0,0,0,0,0,248,95,1,0,40,35,54,0,117,0,0,0,1,0,0,0,224,86,1,0,24,85,0,0,73,0,0,0,1,0,0,0,248,79,1,0,72,79,44,0,84,0,0,0,1,0,0,0,176,72,1,0,184,70,41,0,82,0,0,0,1,0,0,0,240,66,1,0,8,88,0,0,72,0,0,0,0,0,0,0,80,63,1,0,168,45,44,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,16,87,0,0,0,0,0,0,0,0,0,0,72,82,1,0,0,0,0,0,8,0,0,0,216,81,1,0,1,0,0,0,94,1,0,0,16,81,1,0,1,0,0,0,176,1,0,0,136,80,1,0,3,0,0,0,118,2,0,0,32,79,1,0,8,0,0,0,32,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,67,97,110,39,116,32,97,108,108,111,99,97,116,101,32,116,104,117,110,107,32,102,111,114,32,102,111,114,101,105,103,110,32,105,109,112,111,114,116,32,119,114,97,112,112,101,114,0,8,0,1,0,20,0,0,0,168,254,0,0,26,0,0,0,0,0,0,0,0,0,0,0,0,226,4,0,0,0,0,0,2,0,0,0,5,0,0,0,8,0,0,0,11,0,0,0,14,0,0,0,17,0,0,0,20,0,0,0,24,0,0,0,34,0,0,0,36,0,0,0,65,0,0,0,39,0,0,0,43,0,0,0,44,0,0,0,50,0,0,0,63,0,0,0,38,0,0,0,64,0,0,0,37,0,0,0,35,0,0,0,29,0,0,0,64,0,0,0,45,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,100,0,0,0,0,0,0,0,100,0,0,0,1,0,0,0,86,0,0,0,0,0,0,0,86,0,0,0,1,0,0,0,74,0,0,0,0,0,0,0,74,0,0,0,0,0,0,0,0,0,0,0,248,255,255,255,0,0,0,0,1,0,0,0,8,0,0,0,0,0,0,0,8,0,0,0,1,0,0,0,197,255,255,255,0,0,0,0,197,255,255,255,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,208,255,255,255,0,0,0,0,208,255,255,255,0,0,0,0,0,0,0,0,48,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,80,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,249,255,255,255,0,0,0,0,1,0,0,0,160,255,255,255,0,0,0,0,160,255,255,255,0,0,0,0,0,0,0,0,196,255,255,255,0,0,0,0,1,0,0,0,7,0,0,0,0,0,0,0,7,0,0,0,1,0,0,0,176,255,255,255,0,0,0,0,176,255,255,255,1,0,0,0,170,255,255,255,0,0,0,0,170,255,255,255,1,0,0,0,202,255,255,255,0,0,0,0,202,255,255,255,1,0,0,0,209,255,255,255,0,0,0,0,209,255,255,255,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,199,255,255,255,0,0,0,0,199,255,255,255,1,0,0,0,194,255,255,255,0,0,0,0,194,255,255,255,1,0,0,0,193,255,255,255,0,0,0,0,193,255,255,255,1,0,0,0,192,255,255,255,0,0,0,0,192,255,255,255,1,0,0,0,225,255,255,255,0,0,0,0,225,255,255,255,1,0,0,0,219,255,255,255,0,0,0,0,219,255,255,255,1,0,0,0,218,255,255,255,0,0,0,0,218,255,255,255,0,0,0,0,0,0,0,0,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,38,0,0,0,0,0,0,0,5,0,0,0,84,0,0,0,0,0,0,0,84,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,37,255,255,255,0,0,0,0,37,255,255,255,1,0,0,0,39,255,255,255,0,0,0,0,39,255,255,255,1,0,0,0,38,255,255,255,0,0,0,0,38,255,255,255,1,0,0,0,42,255,255,255,0,0,0,0,42,255,255,255,1,0,0,0,43,255,255,255,0,0,0,0,43,255,255,255,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,45,255,255,255,0,0,0,0,45,255,255,255,1,0,0,0,47,255,255,255,0,0,0,0,47,255,255,255,1,0,0,0,49,255,255,255,0,0,0,0,49,255,255,255,1,0,0,0,53,255,255,255,0,0,0,0,53,255,255,255,1,0,0,0,54,255,255,255,0,0,0,0,54,255,255,255,1,0,0,0,51,255,255,255,0,0,0,0,51,255,255,255,1,0,0,0,50,255,255,255,0,0,0,0,50,255,255,255,1,0,0,0,46,255,255,255,0,0,0,0,46,255,255,255,0,0,0,0,0,0,0,0,126,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,200,255,255,255,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,159,255,255,255,0,0,0,0,1,0,0,0,177,255,255,255,0,0,0,0,177,255,255,255,1,0,0,0,254,255,255,255,0,0,0,0,255,255,255,255,2,0,0,0,255,255,255,255,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,1,0,0,0,1,0,0,0,56,0,0,0,0,0,0,0,56,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,219,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,217,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,218,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,214,0,0,0,0,0,0,0,1,0,0,0,130,0,0,0,0,0,0,0,130,0,0,0,0,0,0,0,0,0,0,0,213,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,209,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,211,0,0,0,0,0,0,0,1,0,0,0,97,0,0,0,0,0,0,0,97,0,0,0,0,0,0,0,0,0,0,0,207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,203,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,202,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,79,0,0,0,0,0,0,0,19,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,205,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,206,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0,0,0,0,0,0,1,0,0,0,212,254,255,255,0,0,0,0,212,254,255,255,0,0,0,0,0,0,0,0,135,255,255,255,0,0,0,0,1,0,0,0,24,255,255,255,0,0,0,0,24,255,255,255,0,0,0,0,0,0,0,0,57,255,255,255,0,0,0,0,1,0,0,0,255,255,255,255,0,0,0,0,255,255,255,255,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,121,0,0,0,0,0,0,0,121,0,0,0,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,231,2,0,0,0,0,0,0,231,2,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,216,255,255,255,0,0,0,0,216,255,255,255,0,0,0,0,0,0,0,0,40,0,0,0,0,0,0,0,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,0,0,0,230,255,255,255,0,0,0,0,230,255,255,255,21,0,0,0,0,0,0,0,26,0,0,0,0,0,0,0,1,0,0,0,224,255,255,255,0,0,0,0,224,255,255,255,9,0,0,0,240,255,255,255,0,0,0,0,240,255,255,255,9,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,186,223,255,255,0,0,0,0,0,0,0,0,0,0,0,0,65,223,255,255,0,0,0,0,0,0,0,0,0,0,0,0,163,226,255,255,0,0,0,0,24,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,130,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,128,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,144,255,255,255,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,156,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,170,255,255,255,0,0,0,0,1,0,0,0,219,227,255,255,0,0,0,0,219,227,255,255,2,0,0,0,0,0,0,0,247,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,182,255,255,255,0,0,0,0,1,0,0,0,9,0,0,0,0,0,0,0,9,0,0,0,2,0,0,0,0,0,0,0,248,255,255,255,0,0,0,0,1,0,0,0,126,0,0,0,0,0,0,0,126,0,0,0,1,0,0,0,112,0,0,0,0,0,0,0,112,0,0,0,1,0,0,0,128,0,0,0,0,0,0,0,128,0,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,144,1,0,0,248,95,0,0,0,0,0,0,0,0,0,0,240,9,1,0,3,0,0,0,228,1,0,0,168,9,1,0,3,0,0,0,98,1,0,0,152,9,1,0,2,0,0,0,104,1,0,0,144,9,1,0,2,0,0,0,172,1,0,0,136,9,1,0,2,0,0,0,224,1,0,0,120,9,1,0,2,0,0,0,136,1,0,0,104,9,1,0,3,0,0,0,158,0,0,0,88,9,1,0,3,0,0,0,158,0,0,0,64,9,1,0,3,0,0,0,158,0,0,0,208,8,1,0,3,0,0,0,158,0,0,0,192,8,1,0,3,0,0,0,158,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,64,0,0,0,0,0,0,89,64,0,0,0,0,0,136,195,64,0,0,0,0,132,215,151,65,0,128,224,55,121,195,65,67,23,110,5,181,181,184,147,70,245,249,63,233,3,79,56,77,50,29,48,249,72,119,130,90,60,191,115,127,221,79,21,117,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,36,1,0,0,0,0,0,80,36,1,0,0,0,0,0,0,87,1,0,0,0,0,0,216,88,1,0,0,0,0,0,80,88,1,0,0,0,0,0,40,94,1,0,0,0,0,0,64,90,1,0,0,0,0,0,26,2,0,0,64,97,0,0,0,0,0,0,0,0,0,0,216,219,0,0,2,0,0,0,78,0,0,0,104,76,1,0,3,0,0,0,160,1,0,0,232,75,1,0,3,0,0,0,120,0,0,0,56,75,1,0,1,0,0,0,104,2,0,0,176,74,1,0,2,0,0,0,242,1,0,0,40,74,1,0,2,0,0,0,30,1,0,0,144,73,1,0,1,0,0,0,76,1,0,0,0,73,1,0,1,0,0,0,128,1,0,0,224,71,1,0,1,0,0,0,66,1,0,0,104,71,1,0,2,0,0,0,8,2,0,0,224,70,1,0,2,0,0,0,206,0,0,0,88,70,1,0,2,0,0,0,134,2,0,0,152,69,1,0,3,0,0,0,104,0,0,0,40,69,1,0,3,0,0,0,24,2,0,0,136,68,1,0,1,0,0,0,90,1,0,0,8,68,1,0,2,0,0,0,142,0,0,0,168,67,1,0,3,0,0,0,190,0,0,0,56,67,1,0,3,0,0,0,2,1,0,0,88,66,1,0,5,0,0,0,50,0,0,0,8,66,1,0,2,0,0,0,22,0,0,0,200,65,1,0,0,0,0,0,252,1,0,0,88,65,1,0,0,0,0,0,250,0,0,0,224,64,1,0,0,0,0,0,114,0,0,0,104,64,1,0,2,0,0,0,124,1,0,0,24,64,1,0,2,0,0,0,222,0,0,0,248,63,1,0,2,0,0,0,134,1,0,0,176,63,1,0,2,0,0,0,24,0,0,0,128,63,1,0,3,0,0,0,190,1,0,0,224,62,1,0,4,0,0,0,76,2,0,0,152,62,1,0,2,0,0,0,66,0,0,0,96,62,1,0,4,0,0,0,166,0,0,0,40,62,1,0,2,0,0,0,118,0,0,0,208,61,1,0,2,0,0,0,28,2,0,0,160,61,1,0,2,0,0,0,214,0,0,0,16,61,1,0,2,0,0,0,156,1,0,0,152,60,1,0,2,0,0,0,70,0,0,0,72,60,1,0,2,0,0,0,208,0,0,0,0,60,1,0,2,0,0,0,142,2,0,0,192,58,1,0,3,0,0,0,60,0,0,0,104,58,1,0,2,0,0,0,46,0,0,0,16,58,1,0,1,0,0,0,144,2,0,0,216,57,1,0,3,0,0,0,20,1,0,0,96,57,1,0,4,0,0,0,52,1,0,0,240,56,1,0,4,0,0,0,128,0,0,0,104,56,1,0,2,0,0,0,30,2,0,0,40,56,1,0,2,0,0,0,114,1,0,0,192,55,1,0,3,0,0,0,40,0,0,0,96,55,1,0,2,0,0,0,124,2,0,0,96,54,1,0,2,0,0,0,64,0,0,0,240,53,1,0,3,0,0,0,112,0,0,0,192,53,1,0,2,0,0,0,92,1,0,0,40,53,1,0,2,0,0,0,70,1,0,0,120,52,1,0,2,0,0,0,48,1,0,0,216,51,1,0,2,0,0,0,120,2,0,0,32,51,1,0,1,0,0,0,44,1,0,0,80,50,1,0,1,0,0,0,64,2,0,0,120,49,1,0,3,0,0,0,228,0,0,0,16,49,1,0,2,0,0,0,110,2,0,0,200,47,1,0,2,0,0,0,170,0,0,0,64,47,1,0,3,0,0,0,116,0,0,0,240,46,1,0,4,0,0,0,240,0,0,0,160,46,1,0,2,0,0,0,126,1,0,0,0,46,1,0,1,0,0,0,46,1,0,0,184,45,1,0,2,0,0,0,98,2,0,0,48,45,1,0,4,0,0,0,82,1,0,0,192,44,1,0,2,0,0,0,8,1,0,0,56,44,1,0,3,0,0,0,56,1,0,0,0,44,1,0,2,0,0,0,126,0,0,0,16,43,1,0,1,0,0,0,42,2,0,0,184,42,1,0,1,0,0,0,198,0,0,0,104,42,1,0,2,0,0,0,62,1,0,0,104,41,1,0,1,0,0,0,38,1,0,0,216,40,1,0,1,0,0,0,116,2,0,0,104,40,1,0,2,0,0,0,10,0,0,0,32,40,1,0,3,0,0,0,102,2,0,0,248,39,1,0,2,0,0,0,102,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,64,66,15,0,0,0,0,0,64,66,15,0,0,0,0,0,1,0,0,0,0,0,0,0,40,64,1,0,0,0,0,0,8,64,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,136,70,1,0,7,0,0,0,168,69,1,0,8,0,0,0,48,69,1,0,12,0,0,0,144,68,1,0,10,0,0,0,48,206,0,0,13,0,0,0,24,68,1,0,9,0,0,0,168,225,0,0,92,0,0,0,200,67,1,0,34,0,0,0,72,67,1,0,39,0,0,0,128,66,1,0,11,0,0,0,24,66,1,0,0,0,0,0,208,65,1,0,1,0,0,0,136,65,1,0,2,0,0,0,232,64,1,0,3,0,0,0,112,64,1,0,4,0,0,0,32,64,1,0,5,0,0,0,0,64,1,0,6,0,0,0,216,63,1,0,7,0,0,0,144,63,1,0,8,0,0,0,0,63,1,0,9,0,0,0,168,62,1,0,10,0,0,0,112,62,1,0,11,0,0,0,56,62,1,0,12,0,0,0,216,61,1,0,13,0,0,0,176,61,1,0,14,0,0,0,32,61,1,0,15,0,0,0,168,60,1,0,16,0,0,0,96,60,1,0,17,0,0,0,16,60,1,0,18,0,0,0,232,58,1,0,19,0,0,0,120,58,1,0,20,0,0,0,40,58,1,0,21,0,0,0,232,57,1,0,22,0,0,0,104,57,1,0,23,0,0,0,248,56,1,0,24,0,0,0,128,56,1,0,25,0,0,0,56,56,1,0,26,0,0,0,224,55,1,0,27,0,0,0,112,55,1,0,28,0,0,0,144,54,1,0,29,0,0,0,248,53,1,0,30,0,0,0,200,53,1,0,31,0,0,0,56,53,1,0,32,0,0,0,136,52,1,0,127,0,0,0,0,0,0,0,0,0,0,0,44,2,0,0,160,102,0,0,0,0,0,0,0,0,0,0,104,211,0,0,2,0,0,0,186,1,0,0,24,211,0,0,2,0,0,0,176,0,0,0,216,210,0,0,2,0,0,0,106,2,0,0,56,210,0,0,3,0,0,0,230,1,0,0,144,209,0,0,3,0,0,0,100,2,0,0,8,209,0,0,1,0,0,0,34,1,0,0,184,208,0,0,2,0,0,0,56,2,0,0,120,208,0,0,2,0,0,0,152,1,0,0,224,207,0,0,2,0,0,0,18,1,0,0,32,207,0,0,2,0,0,0,72,0,0,0,80,206,0,0,6,0,0,0,78,1,0,0,16,206,0,0,2,0,0,0,58,1,0,0,200,205,0,0,2,0,0,0,156,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,227,0,0,0,0,0,0,40,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,200,213,0,0,7,0,0,0,72,213,0,0,13,0,0,0,232,212,0,0,3,0,0,0,176,211,0,0,6,0,0,0,72,211,0,0,12,0,0,0,240,210,0,0,2,0,0,0,136,210,0,0,4,0,0,0,224,209,0,0,15,0,0,0,104,209,0,0,0,0,0,0,224,208,0,0,11,0,0,0,144,208,0,0,10,0,0,0,48,208,0,0,1,0,0,0,144,207,0,0,8,0,0,0,120,206,0,0,14,0,0,0,40,206,0,0,16,0,0,0,224,205,0,0,17,0,0,0,136,205,0,0,22,0,0,0,224,204,0,0,19,0,0,0,128,35,54,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,216,95,0,0,32,0,0,0,1,0,0,0,200,95,0,0,33,0,0,0,3,0,0,0,120,93,0,0,36,0,0,0,1,0,0,0,200,92,0,0,37,0,0,0,3,0,0,0,120,93,0,0,40,0,0,0,1,0,0,0,24,92,0,0,41,0,0,0,1,0,0,0,104,91,0,0,42,0,0,0,1,0,0,0,120,93,0,0,43,0,0,0,1,0,0,0,184,90,0,0,44,0,0,0,1,0,0,0,120,93,0,0,45,0,0,0,1,0,0,0,8,90,0,0,46,0,0,0,2,0,0,0,120,93,0,0,48,0,0,0,10,0,0,0,104,89,0,0,58,0,0,0,2,0,0,0,120,93,0,0,60,0,0,0,3,0,0,0,184,90,0,0,63,0,0,0,2,0,0,0,120,93,0,0,65,0,0,0,26,0,0,0,184,88,0,0,91,0,0,0,1,0,0,0,24,92,0,0,92,0,0,0,1,0,0,0,120,93,0,0,93,0,0,0,1,0,0,0,104,91,0,0,94,0,0,0,1,0,0,0,184,95,0,0,95,0,0,0,1,0,0,0,8,95,0,0,96,0,0,0,1,0,0,0,184,95,0,0,97,0,0,0,26,0,0,0,88,94,0,0,123,0,0,0,1,0,0,0,24,92,0,0,124,0,0,0,1,0,0,0,184,90,0,0,125,0,0,0,1,0,0,0,104,91,0,0,126,0,0,0,1,0,0,0,184,90,0,0,127,0,0,0,33,0,0,0,216,95,0,0,160,0,0,0,1,0,0,0,200,95,0,0,161,0,0,0,1,0,0,0,120,93,0,0,162,0,0,0,4,0,0,0,200,92,0,0,166,0,0,0,2,0,0,0,232,93,0,0,168,0,0,0,1,0,0,0,184,95,0,0,169,0,0,0,1,0,0,0,232,93,0,0,170,0,0,0,1,0,0,0,216,93,0,0,171,0,0,0,1,0,0,0,200,93,0,0,172,0,0,0,1,0,0,0,184,90,0,0,173,0,0,0,1,0,0,0,184,93,0,0,174,0,0,0,1,0,0,0,232,93,0,0,175,0,0,0,1,0,0,0,184,95,0,0,176,0,0,0,1,0,0,0,232,93,0,0,177,0,0,0,1,0,0,0,184,90,0,0,178,0,0,0,2,0,0,0,168,93,0,0,180,0,0,0,1,0,0,0,184,95,0,0,181,0,0,0,1,0,0,0,152,93,0,0,182,0,0,0,1,0,0,0,232,93,0,0,183,0,0,0,1,0,0,0,120,93,0,0,184,0,0,0,1,0,0,0,184,95,0,0,185,0,0,0,1,0,0,0,168,93,0,0,186,0,0,0,1,0,0,0,216,93,0,0,187,0,0,0,1,0,0,0,136,93,0,0,188,0,0,0,3,0,0,0,168,93,0,0,191,0,0,0,1,0,0,0,120,93,0,0,192,0,0,0,23,0,0,0,184,88,0,0,215,0,0,0,1,0,0,0,184,90,0,0,216,0,0,0,7,0,0,0,184,88,0,0,223,0,0,0,1,0,0,0,216,93,0,0,224,0,0,0,23,0,0,0,88,94,0,0,247,0,0,0,1,0,0,0,184,90,0,0,248,0,0,0,7,0,0,0,88,94,0,0,255,0,0,0,1,0,0,0,104,93,0,0,0,1,0,0,1,0,0,0,88,93,0,0,1,1,0,0,1,0,0,0,72,93,0,0,2,1,0,0,1,0,0,0,88,93,0,0,3,1,0,0,1,0,0,0,72,93,0,0,4,1,0,0,1,0,0,0,88,93,0,0,5,1,0,0,1,0,0,0,72,93,0,0,6,1,0,0,1,0,0,0,88,93,0,0,7,1,0,0,1,0,0,0,72,93,0,0,8,1,0,0,1,0,0,0,88,93,0,0,9,1,0,0,1,0,0,0,72,93,0,0,10,1,0,0,1,0,0,0,88,93,0,0,11,1,0,0,1,0,0,0,72,93,0,0,12,1,0,0,1,0,0,0,88,93,0,0,13,1,0,0,1,0,0,0,72,93,0,0,14,1,0,0,1,0,0,0,88,93,0,0,15,1,0,0,1,0,0,0,72,93,0,0,16,1,0,0,1,0,0,0,88,93,0,0,17,1,0,0,1,0,0,0,72,93,0,0,18,1,0,0,1,0,0,0,88,93,0,0,19,1,0,0,1,0,0,0,72,93,0,0,20,1,0,0,1,0,0,0,88,93,0,0,21,1,0,0,1,0,0,0,72,93,0,0,22,1,0,0,1,0,0,0,88,93,0,0,23,1,0,0,1,0,0,0,72,93,0,0,24,1,0,0,1,0,0,0,88,93,0,0,25,1,0,0,1,0,0,0,72,93,0,0,26,1,0,0,1,0,0,0,88,93,0,0,27,1,0,0,1,0,0,0,72,93,0,0,28,1,0,0,1,0,0,0,88,93,0,0,29,1,0,0,1,0,0,0,72,93,0,0,30,1,0,0,1,0,0,0,88,93,0,0,31,1,0,0,1,0,0,0,72,93,0,0,32,1,0,0,1,0,0,0,88,93,0,0,33,1,0,0,1,0,0,0,72,93,0,0,34,1,0,0,1,0,0,0,88,93,0,0,35,1,0,0,1,0,0,0,72,93,0,0,36,1,0,0,1,0,0,0,88,93,0,0,37,1,0,0,1,0,0,0,72,93,0,0,38,1,0,0,1,0,0,0,88,93,0,0,39,1,0,0,1,0,0,0,72,93,0,0,40,1,0,0,1,0,0,0,88,93,0,0,41,1,0,0,1,0,0,0,72,93,0,0,42,1,0,0,1,0,0,0,88,93,0,0,43,1,0,0,1,0,0,0,72,93,0,0,44,1,0,0,1,0,0,0,88,93,0,0,45,1,0,0,1,0,0,0,72,93,0,0,46,1,0,0,1,0,0,0,88,93,0,0,47,1,0,0,1,0,0,0,72,93,0,0,48,1,0,0,1,0,0,0,56,93,0,0,49,1,0,0,1,0,0,0,40,93,0,0,50,1,0,0,1,0,0,0,88,93,0,0,51,1,0,0,1,0,0,0,72,93,0,0,52,1,0,0,1,0,0,0,88,93,0,0,53,1,0,0,1,0,0,0,72,93,0,0,54,1,0,0,1,0,0,0,88,93,0,0,55,1,0,0,1,0,0,0,72,93,0,0,56,1,0,0,1,0,0,0,216,93,0,0,57,1,0,0,1,0,0,0,88,93,0,0,58,1,0,0,1,0,0,0,72,93,0,0,59,1,0,0,1,0,0,0,88,93,0,0,60,1,0,0,1,0,0,0,72,93,0,0,61,1,0,0,1,0,0,0,88,93,0,0,62,1,0,0,1,0,0,0,72,93,0,0,63,1,0,0,1,0,0,0,88,93,0,0,64,1,0,0,1,0,0,0,72,93,0,0,65,1,0,0,1,0,0,0,88,93,0,0,66,1,0,0,1,0,0,0,72,93,0,0,67,1,0,0,1,0,0,0,88,93,0,0,68,1,0,0,1,0,0,0,72,93,0,0,69,1,0,0,1,0,0,0,88,93,0,0,70,1,0,0,1,0,0,0,72,93,0,0,71,1,0,0,1,0,0,0,88,93,0,0,72,1,0,0,1,0,0,0,72,93,0,0,73,1,0,0,1,0,0,0,216,93,0,0,74,1,0,0,1,0,0,0,88,93,0,0,75,1,0,0,1,0,0,0,72,93,0,0,76,1,0,0,1,0,0,0,88,93,0,0,77,1,0,0,1,0,0,0,72,93,0,0,78,1,0,0,1,0,0,0,88,93,0,0,79,1,0,0,1,0,0,0,72,93,0,0,80,1,0,0,1,0,0,0,88,93,0,0,81,1,0,0,1,0,0,0,72,93,0,0,82,1,0,0,1,0,0,0,88,93,0,0,83,1,0,0,1,0,0,0,72,93,0,0,84,1,0,0,1,0,0,0,88,93,0,0,85,1,0,0,1,0,0,0,72,93,0,0,86,1,0,0,1,0,0,0,88,93,0,0,87,1,0,0,1,0,0,0,72,93,0,0,88,1,0,0,1,0,0,0,88,93,0,0,89,1,0,0,1,0,0,0,72,93,0,0,90,1,0,0,1,0,0,0,88,93,0,0,91,1,0,0,1,0,0,0,72,93,0,0,92,1,0,0,1,0,0,0,88,93,0,0,93,1,0,0,1,0,0,0,72,93,0,0,94,1,0,0,1,0,0,0,88,93,0,0,95,1,0,0,1,0,0,0,72,93,0,0,96,1,0,0,1,0,0,0,88,93,0,0,97,1,0,0,1,0,0,0,72,93,0,0,98,1,0,0,1,0,0,0,88,93,0,0,99,1,0,0,1,0,0,0,72,93,0,0,100,1,0,0,1,0,0,0,88,93,0,0,101,1,0,0,1,0,0,0,72,93,0,0,102,1,0,0,1,0,0,0,88,93,0,0,103,1,0,0,1,0,0,0,72,93,0,0,104,1,0,0,1,0,0,0,88,93,0,0,105,1,0,0,1,0,0,0,72,93,0,0,106,1,0,0,1,0,0,0,88,93,0,0,107,1,0,0,1,0,0,0,72,93,0,0,108,1,0,0,1,0,0,0,88,93,0,0,109,1,0,0,1,0,0,0,72,93,0,0,110,1,0,0,1,0,0,0,88,93,0,0,111,1,0,0,1,0,0,0,72,93,0,0,112,1,0,0,1,0,0,0,88,93,0,0,113,1,0,0,1,0,0,0,72,93,0,0,114,1,0,0,1,0,0,0,88,93,0,0,115,1,0,0,1,0,0,0,72,93,0,0,116,1,0,0,1,0,0,0,88,93,0,0,117,1,0,0,1,0,0,0,72,93,0,0,118,1,0,0,1,0,0,0,88,93,0,0,119,1,0,0,1,0,0,0,72,93,0,0,120,1,0,0,1,0,0,0,24,93,0,0,121,1,0,0,1,0,0,0,88,93,0,0,122,1,0,0,1,0,0,0,72,93,0,0,123,1,0,0,1,0,0,0,88,93,0,0,124,1,0,0,1,0,0,0,72,93,0,0,125,1,0,0,1,0,0,0,88,93,0,0,126,1,0,0,1,0,0,0,72,93,0,0,127,1,0,0,1,0,0,0,8,93,0,0,128,1,0,0,1,0,0,0,216,93,0,0,129,1,0,0,1,0,0,0,248,92,0,0,130,1,0,0,1,0,0,0,88,93,0,0,131,1,0,0,1,0,0,0,72,93,0,0,132,1,0,0,1,0,0,0,88,93,0,0,133,1,0,0,1,0,0,0,72,93,0,0,134,1,0,0,1,0,0,0,232,92,0,0,135,1,0,0,1,0,0,0,88,93,0,0,136,1,0,0,1,0,0,0,72,93,0,0,137,1,0,0,2,0,0,0,216,92,0,0,139,1,0,0,1,0,0,0,88,93,0,0,140,1,0,0,1,0,0,0,72,93,0,0,141,1,0,0,1,0,0,0,216,93,0,0,142,1,0,0,1,0,0,0,184,92,0,0,143,1,0,0,1,0,0,0,168,92,0,0,144,1,0,0,1,0,0,0,152,92,0,0,145,1,0,0,1,0,0,0,88,93,0,0,146,1,0,0,1,0,0,0,72,93,0,0,147,1,0,0,1,0,0,0,216,92,0,0,148,1,0,0,1,0,0,0,136,92,0,0,149,1,0,0,1,0,0,0,120,92,0,0,150,1,0,0,1,0,0,0,104,92,0,0,151,1,0,0,1,0,0,0,88,92,0,0,152,1,0,0,1,0,0,0,88,93,0,0,153,1,0,0,1,0,0,0,72,93,0,0,154,1,0,0,2,0,0,0,216,93,0,0,156,1,0,0,1,0,0,0,104,92,0,0,157,1,0,0,1,0,0,0,72,92,0,0,158,1,0,0,1,0,0,0,56,92,0,0,159,1,0,0,1,0,0,0,40,92,0,0,160,1,0,0,1,0,0,0,88,93,0,0,161,1,0,0,1,0,0,0,72,93,0,0,162,1,0,0,1,0,0,0,88,93,0,0,163,1,0,0,1,0,0,0,72,93,0,0,164,1,0,0,1,0,0,0,88,93,0,0,165,1,0,0,1,0,0,0,72,93,0,0,166,1,0,0,1,0,0,0,8,92,0,0,167,1,0,0,1,0,0,0,88,93,0,0,168,1,0,0,1,0,0,0,72,93,0,0,169,1,0,0,1,0,0,0,8,92,0,0,170,1,0,0,2,0,0,0,216,93,0,0,172,1,0,0,1,0,0,0,88,93,0,0,173,1,0,0,1,0,0,0,72,93,0,0,174,1,0,0,1,0,0,0,8,92,0,0,175,1,0,0,1,0,0,0,88,93,0,0,176,1,0,0,1,0,0,0,72,93,0,0,177,1,0,0,2,0,0,0,248,91,0,0,179,1,0,0,1,0,0,0,88,93,0,0,180,1,0,0,1,0,0,0,72,93,0,0,181,1,0,0,1,0,0,0,88,93,0,0,182,1,0,0,1,0,0,0,72,93,0,0,183,1,0,0,1,0,0,0,232,91,0,0,184,1,0,0,1,0,0,0,88,93,0,0,185,1,0,0,1,0,0,0,72,93,0,0,186,1,0,0,1,0,0,0,216,93,0,0,187,1,0,0,1,0,0,0,216,91,0,0,188,1,0,0,1,0,0,0,88,93,0,0,189,1,0,0,1,0,0,0,72,93,0,0,190,1,0,0,1,0,0,0,216,93,0,0,191,1,0,0,1,0,0,0,200,91,0,0,192,1,0,0,4,0,0,0,216,91,0,0,196,1,0,0,1,0,0,0,184,91,0,0,197,1,0,0,1,0,0,0,168,91,0,0,198,1,0,0,1,0,0,0,152,91,0,0,199,1,0,0,1,0,0,0,184,91,0,0,200,1,0,0,1,0,0,0,168,91,0,0,201,1,0,0,1,0,0,0,152,91,0,0,202,1,0,0,1,0,0,0,184,91,0,0,203,1,0,0,1,0,0,0,168,91,0,0,204,1,0,0,1,0,0,0,152,91,0,0,205,1,0,0,1,0,0,0,88,93,0,0,206,1,0,0,1,0,0,0,72,93,0,0,207,1,0,0,1,0,0,0,88,93,0,0,208,1,0,0,1,0,0,0,72,93,0,0,209,1,0,0,1,0,0,0,88,93,0,0,210,1,0,0,1,0,0,0,72,93,0,0,211,1,0,0,1,0,0,0,88,93,0,0,212,1,0,0,1,0,0,0,72,93,0,0,213,1,0,0,1,0,0,0,88,93,0,0,214,1,0,0,1,0,0,0,72,93,0,0,215,1,0,0,1,0,0,0,88,93,0,0,216,1,0,0,1,0,0,0,72,93,0,0,217,1,0,0,1,0,0,0,88,93,0,0,218,1,0,0,1,0,0,0,72,93,0,0,219,1,0,0,1,0,0,0,88,93,0,0,220,1,0,0,1,0,0,0,72,93,0,0,221,1,0,0,1,0,0,0,136,91,0,0,222,1,0,0,1,0,0,0,88,93,0,0,223,1,0,0,1,0,0,0,72,93,0,0,224,1,0,0,1,0,0,0,88,93,0,0,225,1,0,0,1,0,0,0,72,93,0,0,226,1,0,0,1,0,0,0,88,93,0,0,227,1,0,0,1,0,0,0,72,93,0,0,228,1,0,0,1,0,0,0,88,93,0,0,229,1,0,0,1,0,0,0,72,93,0,0,230,1,0,0,1,0,0,0,88,93,0,0,231,1,0,0,1,0,0,0,72,93,0,0,232,1,0,0,1,0,0,0,88,93,0,0,233,1,0,0,1,0,0,0,72,93,0,0,234,1,0,0,1,0,0,0,88,93,0,0,235,1,0,0,1,0,0,0,72,93,0,0,236,1,0,0,1,0,0,0,88,93,0,0,237,1,0,0,1,0,0,0,72,93,0,0,238,1,0,0,1,0,0,0,88,93,0,0,239,1,0,0,1,0,0,0,72,93,0,0,240,1,0,0,1,0,0,0,216,93,0,0,241,1,0,0,1,0,0,0,184,91,0,0,242,1,0,0,1,0,0,0,168,91,0,0,243,1,0,0,1,0,0,0,152,91,0,0,244,1,0,0,1,0,0,0,88,93,0,0,245,1,0,0,1,0,0,0,72,93,0,0,246,1,0,0,1,0,0,0,120,91,0,0,247,1,0,0,1,0,0,0,88,91,0,0,248,1,0,0,1,0,0,0,88,93,0,0,249,1,0,0,1,0,0,0,72,93,0,0,250,1,0,0,1,0,0,0,88,93,0,0,251,1,0,0,1,0,0,0,72,93,0,0,252,1,0,0,1,0,0,0,88,93,0,0,253,1,0,0,1,0,0,0,72,93,0,0,254,1,0,0,1,0,0,0,88,93,0,0,255,1,0,0,1,0,0,0,72,93,0,0,0,2,0,0,1,0,0,0,88,93,0,0,1,2,0,0,1,0,0,0,72,93,0,0,2,2,0,0,1,0,0,0,88,93,0,0,3,2,0,0,1,0,0,0,72,93,0,0,4,2,0,0,1,0,0,0,88,93,0,0,5,2,0,0,1,0,0,0,72,93,0,0,6,2,0,0,1,0,0,0,88,93,0,0,7,2,0,0,1,0,0,0,72,93,0,0,8,2,0,0,1,0,0,0,88,93,0,0,9,2,0,0,1,0,0,0,72,93,0,0,10,2,0,0,1,0,0,0,88,93,0,0,11,2,0,0,1,0,0,0,72,93,0,0,12,2,0,0,1,0,0,0,88,93,0,0,13,2,0,0,1,0,0,0,72,93,0,0,14,2,0,0,1,0,0,0,88,93,0,0,15,2,0,0,1,0,0,0,72,93,0,0,16,2,0,0,1,0,0,0,88,93,0,0,17,2,0,0,1,0,0,0,72,93,0,0,18,2,0,0,1,0,0,0,88,93,0,0,19,2,0,0,1,0,0,0,72,93,0,0,20,2,0,0,1,0,0,0,88,93,0,0,21,2,0,0,1,0,0,0,72,93,0,0,22,2,0,0,1,0,0,0,88,93,0,0,23,2,0,0,1,0,0,0,72,93,0,0,24,2,0,0,1,0,0,0,88,93,0,0,25,2,0,0,1,0,0,0,72,93,0,0,26,2,0,0,1,0,0,0,88,93,0,0,27,2,0,0,1,0,0,0,72,93,0,0,28,2,0,0,1,0,0,0,88,93,0,0,29,2,0,0,1,0,0,0,72,93,0,0,30,2,0,0,1,0,0,0,88,93,0,0])
.concat([31,2,0,0,1,0,0,0,72,93,0,0,32,2,0,0,1,0,0,0,72,91,0,0,33,2,0,0,1,0,0,0,216,93,0,0,34,2,0,0,1,0,0,0,88,93,0,0,35,2,0,0,1,0,0,0,72,93,0,0,36,2,0,0,1,0,0,0,88,93,0,0,37,2,0,0,1,0,0,0,72,93,0,0,38,2,0,0,1,0,0,0,88,93,0,0,39,2,0,0,1,0,0,0,72,93,0,0,40,2,0,0,1,0,0,0,88,93,0,0,41,2,0,0,1,0,0,0,72,93,0,0,42,2,0,0,1,0,0,0,88,93,0,0,43,2,0,0,1,0,0,0,72,93,0,0,44,2,0,0,1,0,0,0,88,93,0,0,45,2,0,0,1,0,0,0,72,93,0,0,46,2,0,0,1,0,0,0,88,93,0,0,47,2,0,0,1,0,0,0,72,93,0,0,48,2,0,0,1,0,0,0,88,93,0,0,49,2,0,0,1,0,0,0,72,93,0,0,50,2,0,0,1,0,0,0,88,93,0,0,51,2,0,0,1,0,0,0,72,93,0,0,52,2,0,0,3,0,0,0,216,93,0,0,80,2,0,0,3,0,0,0,216,93,0,0,83,2,0,0,1,0,0,0,56,91,0,0,84,2,0,0,1,0,0,0,40,91,0,0,85,2,0,0,1,0,0,0,216,93,0,0,86,2,0,0,2,0,0,0,24,91,0,0,88,2,0,0,1,0,0,0,216,93,0,0,89,2,0,0,1,0,0,0,8,91,0,0,90,2,0,0,1,0,0,0,216,93,0,0,91,2,0,0,1,0,0,0,248,90,0,0,92,2,0,0,4,0,0,0,216,93,0,0,96,2,0,0,1,0,0,0,24,91,0,0,97,2,0,0,2,0,0,0,216,93,0,0,99,2,0,0,1,0,0,0,232,90,0,0,100,2,0,0,4,0,0,0,216,93,0,0,104,2,0,0,1,0,0,0,216,90,0,0,105,2,0,0,1,0,0,0,200,90,0,0,106,2,0,0,5,0,0,0,216,93,0,0,111,2,0,0,1,0,0,0,200,90,0,0,112,2,0,0,2,0,0,0,216,93,0,0,114,2,0,0,1,0,0,0,168,90,0,0,115,2,0,0,2,0,0,0,216,93,0,0,117,2,0,0,1,0,0,0,152,90,0,0,118,2,0,0,10,0,0,0,216,93,0,0,128,2,0,0,1,0,0,0,136,90,0,0,129,2,0,0,2,0,0,0,216,93,0,0,131,2,0,0,1,0,0,0,136,90,0,0,132,2,0,0,4,0,0,0,216,93,0,0,136,2,0,0,1,0,0,0,136,90,0,0,137,2,0,0,1,0,0,0,216,93,0,0,138,2,0,0,2,0,0,0,120,90,0,0,140,2,0,0,6,0,0,0,216,93,0,0,146,2,0,0,1,0,0,0,104,90,0,0,147,2,0,0,29,0,0,0,216,93,0,0,176,2,0,0,18,0,0,0,88,90,0,0,194,2,0,0,4,0,0,0,184,95,0,0,198,2,0,0,12,0,0,0,88,90,0,0,210,2,0,0,14,0,0,0,184,95,0,0,224,2,0,0,5,0,0,0,88,90,0,0,229,2,0,0,9,0,0,0,184,95,0,0,238,2,0,0,1,0,0,0,88,90,0,0,239,2,0,0,17,0,0,0,184,95,0,0,0,3,0,0,69,0,0,0,72,90,0,0,69,3,0,0,1,0,0,0,56,90,0,0,70,3,0,0,18,0,0,0,72,90,0,0,93,3,0,0,19,0,0,0,72,90,0,0,116,3,0,0,2,0,0,0,184,95,0,0,122,3,0,0,1,0,0,0,88,90,0,0,126,3,0,0,1,0,0,0,120,93,0,0,132,3,0,0,2,0,0,0,184,95,0,0,134,3,0,0,1,0,0,0,40,90,0,0,135,3,0,0,1,0,0,0,120,93,0,0,136,3,0,0,3,0,0,0,24,90,0,0,140,3,0,0,1,0,0,0,248,89,0,0,142,3,0,0,2,0,0,0,232,89,0,0,144,3,0,0,1,0,0,0,216,93,0,0,145,3,0,0,17,0,0,0,184,88,0,0,163,3,0,0,9,0,0,0,184,88,0,0,172,3,0,0,1,0,0,0,216,89,0,0,173,3,0,0,3,0,0,0,200,89,0,0,176,3,0,0,1,0,0,0,216,93,0,0,177,3,0,0,17,0,0,0,88,94,0,0,194,3,0,0,1,0,0,0,184,89,0,0,195,3,0,0,9,0,0,0,88,94,0,0,204,3,0,0,1,0,0,0,168,89,0,0,205,3,0,0,2,0,0,0,152,89,0,0,208,3,0,0,1,0,0,0,136,89,0,0,209,3,0,0,1,0,0,0,120,89,0,0,210,3,0,0,3,0,0,0,144,70,41,0,213,3,0,0,1,0,0,0,88,89,0,0,214,3,0,0,1,0,0,0,72,89,0,0,215,3,0,0,1,0,0,0,216,93,0,0,216,3,0,0,1,0,0,0,88,93,0,0,217,3,0,0,1,0,0,0,72,93,0,0,218,3,0,0,1,0,0,0,88,93,0,0,219,3,0,0,1,0,0,0,72,93,0,0,220,3,0,0,1,0,0,0,88,93,0,0,221,3,0,0,1,0,0,0,72,93,0,0,222,3,0,0,1,0,0,0,88,93,0,0,223,3,0,0,1,0,0,0,72,93,0,0,224,3,0,0,1,0,0,0,88,93,0,0,225,3,0,0,1,0,0,0,72,93,0,0,226,3,0,0,1,0,0,0,88,93,0,0,227,3,0,0,1,0,0,0,72,93,0,0,228,3,0,0,1,0,0,0,88,93,0,0,229,3,0,0,1,0,0,0,72,93,0,0,230,3,0,0,1,0,0,0,88,93,0,0,231,3,0,0,1,0,0,0,72,93,0,0,232,3,0,0,1,0,0,0,88,93,0,0,233,3,0,0,1,0,0,0,72,93,0,0,234,3,0,0,1,0,0,0,88,93,0,0,235,3,0,0,1,0,0,0,72,93,0,0,236,3,0,0,1,0,0,0,88,93,0,0,237,3,0,0,1,0,0,0,72,93,0,0,238,3,0,0,1,0,0,0,88,93,0,0,239,3,0,0,1,0,0,0,72,93,0,0,240,3,0,0,1,0,0,0,56,89,0,0,241,3,0,0,1,0,0,0,40,89,0,0,242,3,0,0,1,0,0,0,24,89,0,0,243,3,0,0,1,0,0,0,216,93,0,0,244,3,0,0,1,0,0,0,8,89,0,0,245,3,0,0,1,0,0,0,248,88,0,0,246,3,0,0,1,0,0,0,184,90,0,0,247,3,0,0,1,0,0,0,88,93,0,0,248,3,0,0,1,0,0,0,72,93,0,0,249,3,0,0,1,0,0,0,232,88,0,0,250,3,0,0,1,0,0,0,88,93,0,0,251,3,0,0,1,0,0,0,72,93,0,0,0,4,0,0,16,0,0,0,216,88,0,0,16,4,0,0,32,0,0,0,184,88,0,0,48,4,0,0,32,0,0,0,88,94,0,0,80,4,0,0,16,0,0,0,40,89,0,0,96,4,0,0,1,0,0,0,88,93,0,0,97,4,0,0,1,0,0,0,72,93,0,0,98,4,0,0,1,0,0,0,88,93,0,0,99,4,0,0,1,0,0,0,72,93,0,0,100,4,0,0,1,0,0,0,88,93,0,0,101,4,0,0,1,0,0,0,72,93,0,0,102,4,0,0,1,0,0,0,88,93,0,0,103,4,0,0,1,0,0,0,72,93,0,0,104,4,0,0,1,0,0,0,88,93,0,0,105,4,0,0,1,0,0,0,72,93,0,0,106,4,0,0,1,0,0,0,88,93,0,0,107,4,0,0,1,0,0,0,72,93,0,0,108,4,0,0,1,0,0,0,88,93,0,0,109,4,0,0,1,0,0,0,72,93,0,0,110,4,0,0,1,0,0,0,88,93,0,0,111,4,0,0,1,0,0,0,72,93,0,0,112,4,0,0,1,0,0,0,88,93,0,0,113,4,0,0,1,0,0,0,72,93,0,0,114,4,0,0,1,0,0,0,88,93,0,0,115,4,0,0,1,0,0,0,72,93,0,0,116,4,0,0,1,0,0,0,88,93,0,0,117,4,0,0,1,0,0,0,72,93,0,0,118,4,0,0,1,0,0,0,88,93,0,0,119,4,0,0,1,0,0,0,72,93,0,0,120,4,0,0,1,0,0,0,88,93,0,0,121,4,0,0,1,0,0,0,72,93,0,0,122,4,0,0,1,0,0,0,88,93,0,0,123,4,0,0,1,0,0,0,72,93,0,0,124,4,0,0,1,0,0,0,88,93,0,0,125,4,0,0,1,0,0,0,72,93,0,0,126,4,0,0,1,0,0,0,88,93,0,0,127,4,0,0,1,0,0,0,72,93,0,0,128,4,0,0,1,0,0,0,88,93,0,0,129,4,0,0,1,0,0,0,72,93,0,0,130,4,0,0,1,0,0,0,232,93,0,0,131,4,0,0,4,0,0,0,72,90,0,0,136,4,0,0,2,0,0,0,200,88,0,0,138,4,0,0,1,0,0,0,88,93,0,0,139,4,0,0,1,0,0,0,72,93,0,0,140,4,0,0,1,0,0,0,88,93,0,0,141,4,0,0,1,0,0,0,72,93,0,0,142,4,0,0,1,0,0,0,88,93,0,0,143,4,0,0,1,0,0,0,72,93,0,0,144,4,0,0,1,0,0,0,88,93,0,0,145,4,0,0,1,0,0,0,72,93,0,0,146,4,0,0,1,0,0,0,88,93,0,0,147,4,0,0,1,0,0,0,72,93,0,0,148,4,0,0,1,0,0,0,88,93,0,0,149,4,0,0,1,0,0,0,72,93,0,0,150,4,0,0,1,0,0,0,88,93,0,0,151,4,0,0,1,0,0,0,72,93,0,0,152,4,0,0,1,0,0,0,88,93,0,0,153,4,0,0,1,0,0,0,72,93,0,0,154,4,0,0,1,0,0,0,88,93,0,0,155,4,0,0,1,0,0,0,72,93,0,0,156,4,0,0,1,0,0,0,88,93,0,0,157,4,0,0,1,0,0,0,72,93,0,0,158,4,0,0,1,0,0,0,88,93,0,0,159,4,0,0,1,0,0,0,72,93,0,0,160,4,0,0,1,0,0,0,88,93,0,0,161,4,0,0,1,0,0,0,72,93,0,0,162,4,0,0,1,0,0,0,88,93,0,0,163,4,0,0,1,0,0,0,72,93,0,0,164,4,0,0,1,0,0,0,88,93,0,0,165,4,0,0,1,0,0,0,72,93,0,0,166,4,0,0,1,0,0,0,88,93,0,0,167,4,0,0,1,0,0,0,72,93,0,0,168,4,0,0,1,0,0,0,88,93,0,0,169,4,0,0,1,0,0,0,72,93,0,0,170,4,0,0,1,0,0,0,88,93,0,0,171,4,0,0,1,0,0,0,72,93,0,0,172,4,0,0,1,0,0,0,88,93,0,0,173,4,0,0,1,0,0,0,72,93,0,0,174,4,0,0,1,0,0,0,88,93,0,0,175,4,0,0,1,0,0,0,72,93,0,0,176,4,0,0,1,0,0,0,88,93,0,0,177,4,0,0,1,0,0,0,72,93,0,0,178,4,0,0,1,0,0,0,88,93,0,0,179,4,0,0,1,0,0,0,72,93,0,0,180,4,0,0,1,0,0,0,88,93,0,0,181,4,0,0,1,0,0,0,72,93,0,0,182,4,0,0,1,0,0,0,88,93,0,0,183,4,0,0,1,0,0,0,72,93,0,0,184,4,0,0,1,0,0,0,88,93,0,0,185,4,0,0,1,0,0,0,72,93,0,0,186,4,0,0,1,0,0,0,88,93,0,0,187,4,0,0,1,0,0,0,72,93,0,0,188,4,0,0,1,0,0,0,88,93,0,0,189,4,0,0,1,0,0,0,72,93,0,0,190,4,0,0,1,0,0,0,88,93,0,0,191,4,0,0,1,0,0,0,72,93,0,0,192,4,0,0,1,0,0,0,144,70,41,0,193,4,0,0,1,0,0,0,88,93,0,0,194,4,0,0,1,0,0,0,72,93,0,0,195,4,0,0,1,0,0,0,88,93,0,0,196,4,0,0,1,0,0,0,72,93,0,0,197,4,0,0,1,0,0,0,88,93,0,0,198,4,0,0,1,0,0,0,72,93,0,0,199,4,0,0,1,0,0,0,88,93,0,0,200,4,0,0,1,0,0,0,72,93,0,0,201,4,0,0,1,0,0,0,88,93,0,0,202,4,0,0,1,0,0,0,72,93,0,0,203,4,0,0,1,0,0,0,88,93,0,0,204,4,0,0,1,0,0,0,72,93,0,0,205,4,0,0,1,0,0,0,88,93,0,0,206,4,0,0,1,0,0,0,72,93,0,0,208,4,0,0,1,0,0,0,88,93,0,0,209,4,0,0,1,0,0,0,72,93,0,0,210,4,0,0,1,0,0,0,88,93,0,0,211,4,0,0,1,0,0,0,72,93,0,0,212,4,0,0,1,0,0,0,88,93,0,0,213,4,0,0,1,0,0,0,72,93,0,0,214,4,0,0,1,0,0,0,88,93,0,0,215,4,0,0,1,0,0,0,72,93,0,0,216,4,0,0,1,0,0,0,88,93,0,0,217,4,0,0,1,0,0,0,72,93,0,0,218,4,0,0,1,0,0,0,88,93,0,0,219,4,0,0,1,0,0,0,72,93,0,0,220,4,0,0,1,0,0,0,88,93,0,0,221,4,0,0,1,0,0,0,72,93,0,0,222,4,0,0,1,0,0,0,88,93,0,0,223,4,0,0,1,0,0,0,72,93,0,0,224,4,0,0,1,0,0,0,88,93,0,0,225,4,0,0,1,0,0,0,72,93,0,0,226,4,0,0,1,0,0,0,88,93,0,0,227,4,0,0,1,0,0,0,72,93,0,0,228,4,0,0,1,0,0,0,88,93,0,0,229,4,0,0,1,0,0,0,72,93,0,0,230,4,0,0,1,0,0,0,88,93,0,0,231,4,0,0,1,0,0,0,72,93,0,0,232,4,0,0,1,0,0,0,88,93,0,0,233,4,0,0,1,0,0,0,72,93,0,0,234,4,0,0,1,0,0,0,88,93,0,0,235,4,0,0,1,0,0,0,72,93,0,0,236,4,0,0,1,0,0,0,88,93,0,0,237,4,0,0,1,0,0,0,72,93,0,0,238,4,0,0,1,0,0,0,88,93,0,0,239,4,0,0,1,0,0,0,72,93,0,0,240,4,0,0,1,0,0,0,88,93,0,0,241,4,0,0,1,0,0,0,72,93,0,0,242,4,0,0,1,0,0,0,88,93,0,0,243,4,0,0,1,0,0,0,72,93,0,0,244,4,0,0,1,0,0,0,88,93,0,0,245,4,0,0,1,0,0,0,72,93,0,0,248,4,0,0,1,0,0,0,88,93,0,0,249,4,0,0,1,0,0,0,72,93,0,0,0,5,0,0,1,0,0,0,88,93,0,0,1,5,0,0,1,0,0,0,72,93,0,0,2,5,0,0,1,0,0,0,88,93,0,0,3,5,0,0,1,0,0,0,72,93,0,0,4,5,0,0,1,0,0,0,88,93,0,0,5,5,0,0,1,0,0,0,72,93,0,0,6,5,0,0,1,0,0,0,88,93,0,0,7,5,0,0,1,0,0,0,72,93,0,0,8,5,0,0,1,0,0,0,88,93,0,0,9,5,0,0,1,0,0,0,72,93,0,0,10,5,0,0,1,0,0,0,88,93,0,0,11,5,0,0,1,0,0,0,72,93,0,0,12,5,0,0,1,0,0,0,88,93,0,0,13,5,0,0,1,0,0,0,72,93,0,0,14,5,0,0,1,0,0,0,88,93,0,0,15,5,0,0,1,0,0,0,72,93,0,0,49,5,0,0,38,0,0,0,168,88,0,0,89,5,0,0,1,0,0,0,88,90,0,0,90,5,0,0,6,0,0,0,120,93,0,0,97,5,0,0,38,0,0,0,152,88,0,0,135,5,0,0,1,0,0,0,216,93,0,0,137,5,0,0,1,0,0,0,120,93,0,0,138,5,0,0,1,0,0,0,8,90,0,0,145,5,0,0,17,0,0,0,72,90,0,0,163,5,0,0,23,0,0,0,72,90,0,0,187,5,0,0,3,0,0,0,72,90,0,0,190,5,0,0,1,0,0,0,120,93,0,0,191,5,0,0,1,0,0,0,72,90,0,0,192,5,0,0,1,0,0,0,120,93,0,0,193,5,0,0,2,0,0,0,72,90,0,0,195,5,0,0,1,0,0,0,120,93,0,0,196,5,0,0,1,0,0,0,72,90,0,0,208,5,0,0,27,0,0,0,216,91,0,0,240,5,0,0,3,0,0,0,216,91,0,0,243,5,0,0,2,0,0,0,120,93,0,0,0,6,0,0,4,0,0,0,184,93,0,0,12,6,0,0,2,0,0,0,120,93,0,0,14,6,0,0,2,0,0,0,232,93,0,0,16,6,0,0,6,0,0,0,72,90,0,0,27,6,0,0,1,0,0,0,120,93,0,0,31,6,0,0,1,0,0,0,120,93,0,0,33,6,0,0,26,0,0,0,216,91,0,0,64,6,0,0,1,0,0,0,88,90,0,0,65,6,0,0,10,0,0,0,216,91,0,0,75,6,0,0,14,0,0,0,72,90,0,0,96,6,0,0,10,0,0,0,104,89,0,0,106,6,0,0,4,0,0,0,120,93,0,0,110,6,0,0,2,0,0,0,216,91,0,0,112,6,0,0,1,0,0,0,72,90,0,0,113,6,0,0,99,0,0,0,216,91,0,0,212,6,0,0,1,0,0,0,120,93,0,0,213,6,0,0,1,0,0,0,216,91,0,0,214,6,0,0,7,0,0,0,72,90,0,0,221,6,0,0,1,0,0,0,184,93,0,0,222,6,0,0,1,0,0,0,200,88,0,0,223,6,0,0,6,0,0,0,72,90,0,0,229,6,0,0,2,0,0,0,88,90,0,0,231,6,0,0,2,0,0,0,72,90,0,0,233,6,0,0,1,0,0,0,232,93,0,0,234,6,0,0,4,0,0,0,72,90,0,0,238,6,0,0,2,0,0,0,216,91,0,0,240,6,0,0,10,0,0,0,104,89,0,0,250,6,0,0,3,0,0,0,216,91,0,0,253,6,0,0,2,0,0,0,232,93,0,0,255,6,0,0,1,0,0,0,216,91,0,0,0,7,0,0,14,0,0,0,120,93,0,0,15,7,0,0,1,0,0,0,184,93,0,0,16,7,0,0,1,0,0,0,216,91,0,0,17,7,0,0,1,0,0,0,72,90,0,0,18,7,0,0,30,0,0,0,216,91,0,0,48,7,0,0,27,0,0,0,72,90,0,0,77,7,0,0,3,0,0,0,216,91,0,0,128,7,0,0,38,0,0,0,216,91,0,0,166,7,0,0,11,0,0,0,72,90,0,0,177,7,0,0,1,0,0,0,216,91,0,0,1,9,0,0,2,0,0,0,72,90,0,0,3,9,0,0,1,0,0,0,136,88,0,0,4,9,0,0,54,0,0,0,216,91,0,0,60,9,0,0,1,0,0,0,72,90,0,0,61,9,0,0,1,0,0,0,216,91,0,0,62,9,0,0,3,0,0,0,136,88,0,0,65,9,0,0,8,0,0,0,72,90,0,0,73,9,0,0,4,0,0,0,136,88,0,0,77,9,0,0,1,0,0,0,72,90,0,0,80,9,0,0,1,0,0,0,216,91,0,0,81,9,0,0,4,0,0,0,72,90,0,0,88,9,0,0,10,0,0,0,216,91,0,0,98,9,0,0,2,0,0,0,72,90,0,0,100,9,0,0,2,0,0,0,120,93,0,0,102,9,0,0,10,0,0,0,104,89,0,0,112,9,0,0,1,0,0,0,120,93,0,0,129,9,0,0,1,0,0,0,72,90,0,0,130,9,0,0,2,0,0,0,136,88,0,0,133,9,0,0,8,0,0,0,216,91,0,0,143,9,0,0,2,0,0,0,216,91,0,0,147,9,0,0,22,0,0,0,216,91,0,0,170,9,0,0,7,0,0,0,216,91,0,0,178,9,0,0,1,0,0,0,216,91,0,0,182,9,0,0,4,0,0,0,216,91,0,0,188,9,0,0,1,0,0,0,72,90,0,0,189,9,0,0,1,0,0,0,216,91,0,0,190,9,0,0,3,0,0,0,136,88,0,0,193,9,0,0,4,0,0,0,72,90,0,0,199,9,0,0,2,0,0,0,136,88,0,0,203,9,0,0,2,0,0,0,136,88,0,0,205,9,0,0,1,0,0,0,72,90,0,0,215,9,0,0,1,0,0,0,136,88,0,0,220,9,0,0,2,0,0,0,216,91,0,0,223,9,0,0,3,0,0,0,216,91,0,0,226,9,0,0,2,0,0,0,72,90,0,0,230,9,0,0,10,0,0,0,104,89,0,0,240,9,0,0,2,0,0,0,216,91,0,0,242,9,0,0,2,0,0,0,200,92,0,0,244,9,0,0,6,0,0,0,168,93,0,0,250,9,0,0,1,0,0,0,232,93,0,0,1,10,0,0,2,0,0,0,72,90,0,0,3,10,0,0,1,0,0,0,136,88,0,0,5,10,0,0,6,0,0,0,216,91,0,0,15,10,0,0,2,0,0,0,216,91,0,0,19,10,0,0,22,0,0,0,216,91,0,0,42,10,0,0,7,0,0,0,216,91,0,0,50,10,0,0,2,0,0,0,216,91,0,0,53,10,0,0,2,0,0,0,216,91,0,0,56,10,0,0,2,0,0,0,216,91,0,0,60,10,0,0,1,0,0,0,72,90,0,0,62,10,0,0,3,0,0,0,136,88,0,0,65,10,0,0,2,0,0,0,72,90,0,0,71,10,0,0,2,0,0,0,72,90,0,0,75,10,0,0,3,0,0,0,72,90,0,0,89,10,0,0,4,0,0,0,216,91,0,0,94,10,0,0,1,0,0,0,216,91,0,0,102,10,0,0,10,0,0,0,104,89,0,0,112,10,0,0,2,0,0,0,72,90,0,0,114,10,0,0,3,0,0,0,216,91,0,0,129,10,0,0,2,0,0,0,72,90,0,0,131,10,0,0,1,0,0,0,136,88,0,0,133,10,0,0,9,0,0,0,216,91,0,0,143,10,0,0,3,0,0,0,216,91,0,0,147,10,0,0,22,0,0,0,216,91,0,0,170,10,0,0,7,0,0,0,216,91,0,0,178,10,0,0,2,0,0,0,216,91,0,0,181,10,0,0,5,0,0,0,216,91,0,0,188,10,0,0,1,0,0,0,72,90,0,0,189,10,0,0,1,0,0,0,216,91,0,0,190,10,0,0,3,0,0,0,136,88,0,0,193,10,0,0,5,0,0,0,72,90,0,0,199,10,0,0,2,0,0,0,72,90,0,0,201,10,0,0,1,0,0,0,136,88,0,0,203,10,0,0,2,0,0,0,136,88,0,0,205,10,0,0,1,0,0,0,72,90,0,0,208,10,0,0,1,0,0,0,216,91,0,0,224,10,0,0,2,0,0,0,216,91,0,0,226,10,0,0,2,0,0,0,72,90,0,0,230,10,0,0,10,0,0,0,104,89,0,0,241,10,0,0,1,0,0,0,200,92,0,0,1,11,0,0,1,0,0,0,72,90,0,0,2,11,0,0,2,0,0,0,136,88,0,0,5,11,0,0,8,0,0,0,216,91,0,0,15,11,0,0,2,0,0,0,216,91,0,0,19,11,0,0,22,0,0,0,216,91,0,0,42,11,0,0,7,0,0,0,216,91,0,0,50,11,0,0,2,0,0,0,216,91,0,0,53,11,0,0,5,0,0,0,216,91,0,0,60,11,0,0,1,0,0,0,72,90,0,0,61,11,0,0,1,0,0,0,216,91,0,0,62,11,0,0,1,0,0,0,136,88,0,0,63,11,0,0,1,0,0,0,72,90,0,0,64,11,0,0,1,0,0,0,136,88,0,0,65,11,0,0,3,0,0,0,72,90,0,0,71,11,0,0,2,0,0,0,136,88,0,0,75,11,0,0,2,0,0,0,136,88,0,0,77,11,0,0,1,0,0,0,72,90,0,0,86,11,0,0,1,0,0,0,72,90,0,0,87,11,0,0,1,0,0,0,136,88,0,0,92,11,0,0,2,0,0,0,216,91,0,0,95,11,0,0,3,0,0,0,216,91,0,0,102,11,0,0,10,0,0,0,104,89,0,0,112,11,0,0,1,0,0,0,232,93,0,0,113,11,0,0,1,0,0,0,216,91,0,0,130,11,0,0,1,0,0,0,72,90,0,0,131,11,0,0,1,0,0,0,216,91,0,0,133,11,0,0,6,0,0,0,216,91,0,0,142,11,0,0,3,0,0,0,216,91,0,0,146,11,0,0,4,0,0,0,216,91,0,0,153,11,0,0,2,0,0,0,216,91,0,0,156,11,0,0,1,0,0,0,216,91,0,0,158,11,0,0,2,0,0,0,216,91,0,0,163,11,0,0,2,0,0,0,216,91,0,0,168,11,0,0,3,0,0,0,216,91,0,0,174,11,0,0,8,0,0,0,216,91,0,0,183,11,0,0,3,0,0,0,216,91,0,0,190,11,0,0,2,0,0,0,136,88,0,0,192,11,0,0,1,0,0,0,72,90,0,0,193,11,0,0,2,0,0,0,136,88,0,0,198,11,0,0,3,0,0,0,136,88,0,0,202,11,0,0,3,0,0,0,136,88,0,0,205,11,0,0,1,0,0,0,72,90,0,0,215,11,0,0,1,0,0,0,136,88,0,0,231,11,0,0,9,0,0,0,104,89,0,0,240,11,0,0,3,0,0,0,168,93,0,0,243,11,0,0,6,0,0,0,232,93,0,0,249,11,0,0,1,0,0,0,200,92,0,0,250,11,0,0,1,0,0,0,232,93,0,0,1,12,0,0,3,0,0,0,136,88,0,0,5,12,0,0,8,0,0,0,216,91,0,0,14,12,0,0,3,0,0,0,216,91,0,0,18,12,0,0,23,0,0,0,216,91,0,0,42,12,0,0,10,0,0,0,216,91,0,0,53,12,0,0,5,0,0,0,216,91,0,0,62,12,0,0,3,0,0,0,72,90,0,0,65,12,0,0,4,0,0,0,136,88,0,0,70,12,0,0,3,0,0,0,72,90,0,0,74,12,0,0,4,0,0,0,72,90,0,0,85,12,0,0,2,0,0,0,72,90,0,0,96,12,0,0,2,0,0,0,216,91,0,0,102,12,0,0,10,0,0,0,104,89,0,0,130,12,0,0,2,0,0,0,136,88,0,0,133,12,0,0,8,0,0,0,216,91,0,0,142,12,0,0,3,0,0,0,216,91,0,0,146,12,0,0,23,0,0,0,216,91,0,0,170,12,0,0,10,0,0,0,216,91,0,0,181,12,0,0,5,0,0,0,216,91,0,0,188,12,0,0,1,0,0,0,72,90,0,0,189,12,0,0,1,0,0,0,216,91,0,0,190,12,0,0,1,0,0,0,136,88,0,0,191,12,0,0,1,0,0,0,72,90,0,0,192,12,0,0,5,0,0,0,136,88,0,0,198,12,0,0,1,0,0,0,72,90,0,0,199,12,0,0,2,0,0,0,136,88,0,0,202,12,0,0,2,0,0,0,136,88,0,0,204,12,0,0,2,0,0,0,72,90,0,0,213,12,0,0,2,0,0,0,136,88,0,0,222,12,0,0,1,0,0,0,216,91,0,0,224,12,0,0,2,0,0,0,216,91,0,0,230,12,0,0,10,0,0,0,104,89,0,0,2,13,0,0,2,0,0,0,136,88,0,0,5,13,0,0,8,0,0,0,216,91,0,0,14,13,0,0,3,0,0,0,216,91,0,0,18,13,0,0,23,0,0,0,216,91,0,0,42,13,0,0,16,0,0,0,216,91,0,0,62,13,0,0,3,0,0,0,136,88,0,0,65,13,0,0,3,0,0,0,72,90,0,0,70,13,0,0,3,0,0,0,136,88,0,0,74,13,0,0,3,0,0,0,136,88,0,0,77,13,0,0,1,0,0,0,72,90,0,0,87,13,0,0,1,0,0,0,136,88,0,0,96,13,0,0,2,0,0,0,216,91,0,0,102,13,0,0,10,0,0,0,104,89,0,0,130,13,0,0,2,0,0,0,136,88,0,0,133,13,0,0,18,0,0,0,216,91,0,0,154,13,0,0,24,0,0,0,216,91,0,0,179,13,0,0,9,0,0,0,216,91,0,0,189,13,0,0,1,0,0,0,216,91,0,0,192,13,0,0,7,0,0,0,216,91,0,0,202,13,0,0,1,0,0,0,72,90,0,0,207,13,0,0,3,0,0,0,136,88,0,0,210,13,0,0,3,0,0,0,72,90,0,0,214,13,0,0,1,0,0,0,72,90,0,0,216,13,0,0,8,0,0,0,136,88,0,0,242,13,0,0,2,0,0,0,136,88,0,0,244,13,0,0,1,0,0,0,120,93,0,0,1,14,0,0,48,0,0,0,216,91,0,0,49,14,0,0,1,0,0,0,72,90,0,0,50,14,0,0,2,0,0,0,216,91,0,0,52,14,0,0,7,0,0,0,72,90,0,0,63,14,0,0,1,0,0,0,200,92,0,0,64,14,0,0,6,0,0,0,216,91,0,0,70,14,0,0,1,0,0,0,88,90,0,0,71,14,0,0,8,0,0,0,72,90,0,0,79,14,0,0,1,0,0,0,120,93,0,0,80,14,0,0,10,0,0,0,104,89,0,0,90,14,0,0,2,0,0,0,120,93,0,0,129,14,0,0,2,0,0,0,216,91,0,0,132,14,0,0,1,0,0,0,216,91,0,0,135,14,0,0,2,0,0,0,216,91,0,0,138,14,0,0,1,0,0,0,216,91,0,0,141,14,0,0,1,0,0,0,216,91,0,0,148,14,0,0,4,0,0,0,216,91,0,0,153,14,0,0,7,0,0,0,216,91,0,0,161,14,0,0,3,0,0,0,216,91,0,0,165,14,0,0,1,0,0,0,216,91,0,0,167,14,0,0,1,0,0,0,216,91,0,0,170,14,0,0,2,0,0,0,216,91,0,0,173,14,0,0,4,0,0,0,216,91,0,0,177,14,0,0,1,0,0,0,72,90,0,0,178,14,0,0,2,0,0,0,216,91,0,0,180,14,0,0,6,0,0,0,72,90,0,0,187,14,0,0,2,0,0,0,72,90,0,0,189,14,0,0,1,0,0,0,216,91,0,0,192,14,0,0,5,0,0,0,216,91,0,0,198,14,0,0,1,0,0,0,88,90,0,0,200,14,0,0,6,0,0,0,72,90,0,0,208,14,0,0,10,0,0,0,104,89,0,0,220,14,0,0,2,0,0,0,216,91,0,0,0,15,0,0,1,0,0,0,216,91,0,0,1,15,0,0,3,0,0,0,232,93,0,0,4,15,0,0,15,0,0,0,120,93,0,0,19,15,0,0,5,0,0,0,232,93,0,0,24,15,0,0,2,0,0,0,72,90,0,0,26,15,0,0,6,0,0,0,232,93,0,0,32,15,0,0,10,0,0,0,104,89,0,0,42,15,0,0,10,0,0,0,168,93,0,0,52,15,0,0,1,0,0,0,232,93,0,0,53,15,0,0,1,0,0,0,72,90,0,0,54,15,0,0,1,0,0,0,232,93,0,0,55,15,0,0,1,0,0,0,72,90,0,0,56,15,0,0,1,0,0,0,232,93,0,0,57,15,0,0,1,0,0,0,72,90,0,0,58,15,0,0,1,0,0,0,24,92,0,0,59,15,0,0,1,0,0,0,104,91,0,0,60,15,0,0,1,0,0,0,24,92,0,0,61,15,0,0,1,0,0,0,104,91,0,0,62,15,0,0,2,0,0,0,136,88,0,0,64,15,0,0,8,0,0,0,216,91,0,0,73,15,0,0,34,0,0,0,216,91,0,0,113,15,0,0,14,0,0,0,72,90,0,0,127,15,0,0,1,0,0,0,136,88,0,0,128,15,0,0,5,0,0,0,72,90,0,0,133,15,0,0,1,0,0,0,120,93,0,0,134,15,0,0,2,0,0,0,72,90,0,0,136,15,0,0,4,0,0,0,216,91,0,0,144,15,0,0,8,0,0,0,72,90,0,0,153,15,0,0,36,0,0,0,72,90,0,0,190,15,0,0,8,0,0,0,232,93,0,0,198,15,0,0,1,0,0,0,72,90,0,0,199,15,0,0,6,0,0,0,232,93,0,0,207,15,0,0,1,0,0,0,232,93,0,0,0,16,0,0,34,0,0,0,216,91,0,0,35,16,0,0,5,0,0,0,216,91,0,0,41,16,0,0,2,0,0,0,216,91,0,0,44,16,0,0,1,0,0,0,136,88,0,0,45,16,0,0,4,0,0,0,72,90,0,0,49,16,0,0,1,0,0,0,136,88,0,0,50,16,0,0,1,0,0,0,72,90,0,0,54,16,0,0,2,0,0,0,72,90,0,0,56,16,0,0,1,0,0,0,136,88,0,0,57,16,0,0,1,0,0,0,72,90,0,0,64,16,0,0,10,0,0,0,104,89,0,0,74,16,0,0,6,0,0,0,120,93,0,0,80,16,0,0,6,0,0,0,216,91,0,0,86,16,0,0,2,0,0,0,136,88,0,0,88,16,0,0,2,0,0,0,72,90,0,0,160,16,0,0,38,0,0,0,144,70,41,0,208,16,0,0,41,0,0,0,216,91,0,0,251,16,0,0,1,0,0,0,120,93,0,0,0,17,0,0,90,0,0,0,216,91,0,0,95,17,0,0,68,0,0,0,216,91,0,0,168,17,0,0,82,0,0,0,216,91,0,0,0,18,0,0,7,0,0,0,216,91,0,0,8,18,0,0,63,0,0,0,216,91,0,0,72,18,0,0,1,0,0,0,216,91,0,0,74,18,0,0,4,0,0,0,216,91,0,0,80,18,0,0,7,0,0,0,216,91,0,0,88,18,0,0,1,0,0,0,216,91,0,0,90,18,0,0,4,0,0,0,216,91,0,0,96,18,0,0,39,0,0,0,216,91,0,0,136,18,0,0,1,0,0,0,216,91,0,0,138,18,0,0,4,0,0,0,216,91,0,0,144,18,0,0,31,0,0,0,216,91,0,0,176,18,0,0,1,0,0,0,216,91,0,0,178,18,0,0,4,0,0,0,216,91,0,0,184,18,0,0,7,0,0,0,216,91,0,0,192,18,0,0,1,0,0,0,216,91,0,0,194,18,0,0,4,0,0,0,216,91,0,0,200,18,0,0,7,0,0,0,216,91,0,0,208,18,0,0,7,0,0,0,216,91,0,0,216,18,0,0,23,0,0,0,216,91,0,0,240,18,0,0,31,0,0,0,216,91,0,0,16,19,0,0,1,0,0,0,216,91,0,0,18,19,0,0,4,0,0,0,216,91,0,0,24,19,0,0,7,0,0,0,216,91,0,0,32,19,0,0,39,0,0,0,216,91,0,0,72,19,0,0,19,0,0,0,216,91,0,0,97,19,0,0,8,0,0,0,120,93,0,0,105,19,0,0,9,0,0,0,104,89,0,0,114,19,0,0,11,0,0,0,168,93,0,0,160,19,0,0,85,0,0,0,216,91,0,0,1,20,0,0,108,2,0,0,216,91,0,0,109,22,0,0,2,0,0,0,120,93,0,0,111,22,0,0,8,0,0,0,216,91,0,0,128,22,0,0,1,0,0,0,200,95,0,0,129,22,0,0,26,0,0,0,216,91,0,0,155,22,0,0,1,0,0,0,24,92,0,0,156,22,0,0,1,0,0,0,104,91,0,0,160,22,0,0,75,0,0,0,216,91,0,0,235,22,0,0,3,0,0,0,120,93,0,0,238,22,0,0,3,0,0,0,120,88,0,0,0,23,0,0,13,0,0,0,216,91,0,0,14,23,0,0,4,0,0,0,216,91,0,0,18,23,0,0,3,0,0,0,72,90,0,0,32,23,0,0,18,0,0,0,216,91,0,0,50,23,0,0,3,0,0,0,72,90,0,0,53,23,0,0,2,0,0,0,120,93,0,0,64,23,0,0,18,0,0,0,216,91,0,0,82,23,0,0,2,0,0,0,72,90,0,0,96,23,0,0,13,0,0,0,216,91,0,0,110,23,0,0,3,0,0,0,216,91,0,0,114,23,0,0,2,0,0,0,72,90,0,0,128,23,0,0,52,0,0,0,216,91,0,0,180,23,0,0,2,0,0,0,184,93,0,0,182,23,0,0,1,0,0,0,136,88,0,0,183,23,0,0,7,0,0,0,72,90,0,0,190,23,0,0,8,0,0,0,136,88,0,0,198,23,0,0,1,0,0,0,72,90,0,0,199,23,0,0,2,0,0,0,136,88,0,0,201,23,0,0,11,0,0,0,72,90,0,0,212,23,0,0,3,0,0,0,120,93,0,0,215,23,0,0,1,0,0,0,88,90,0,0,216,23,0,0,3,0,0,0,120,93,0,0,219,23,0,0,1,0,0,0,200,92,0,0,220,23,0,0,1,0,0,0,216,91,0,0,221,23,0,0,1,0,0,0,72,90,0,0,224,23,0,0,10,0,0,0,104,89,0,0,240,23,0,0,10,0,0,0,168,93,0,0,0,24,0,0,6,0,0,0,120,93,0,0,6,24,0,0,1,0,0,0,8,90,0,0,7,24,0,0,4,0,0,0,120,93,0,0,11,24,0,0,3,0,0,0,72,90,0,0,14,24,0,0,1,0,0,0,200,95,0,0,16,24,0,0,10,0,0,0,104,89,0,0,32,24,0,0,35,0,0,0,216,91,0,0,67,24,0,0,1,0,0,0,88,90,0,0,68,24,0,0,52,0,0,0,216,91,0,0,128,24,0,0,41,0,0,0,216,91,0,0,169,24,0,0,1,0,0,0,72,90,0,0,0,25,0,0,29,0,0,0,216,91,0,0,32,25,0,0,3,0,0,0,72,90,0,0,35,25,0,0,4,0,0,0,136,88,0,0,39,25,0,0,2,0,0,0,72,90,0,0,41,25,0,0,3,0,0,0,136,88,0,0,48,25,0,0,2,0,0,0,136,88,0,0,50,25,0,0,1,0,0,0,72,90,0,0,51,25,0,0,6,0,0,0,136,88,0,0,57,25,0,0,3,0,0,0,72,90,0,0,64,25,0,0,1,0,0,0,232,93,0,0,68,25,0,0,2,0,0,0,120,93,0,0,70,25,0,0,10,0,0,0,104,89,0,0,80,25,0,0,30,0,0,0,216,91,0,0,112,25,0,0,5,0,0,0,216,91,0,0,224,25,0,0,32,0,0,0,232,93,0,0,0,29,0,0,44,0,0,0,216,93,0,0,44,29,0,0,54,0,0,0,88,90,0,0,98,29,0,0,10,0,0,0,216,93,0,0,0,30,0,0,1,0,0,0,88,93,0,0,1,30,0,0,1,0,0,0,72,93,0,0,2,30,0,0,1,0,0,0,88,93,0,0,3,30,0,0,1,0,0,0,72,93,0,0,4,30,0,0,1,0,0,0,88,93,0,0,5,30,0,0,1,0,0,0,72,93,0,0,6,30,0,0,1,0,0,0,88,93,0,0,7,30,0,0,1,0,0,0,72,93,0,0,8,30,0,0,1,0,0,0,88,93,0,0,9,30,0,0,1,0,0,0,72,93,0,0,10,30,0,0,1,0,0,0,88,93,0,0,11,30,0,0,1,0,0,0,72,93,0,0,12,30,0,0,1,0,0,0,88,93,0,0,13,30,0,0,1,0,0,0,72,93,0,0,14,30,0,0,1,0,0,0,88,93,0,0,15,30,0,0,1,0,0,0,72,93,0,0,16,30,0,0,1,0,0,0,88,93,0,0,17,30,0,0,1,0,0,0,72,93,0,0,18,30,0,0,1,0,0,0,88,93,0,0,19,30,0,0,1,0,0,0,72,93,0,0,20,30,0,0,1,0,0,0,88,93,0,0,21,30,0,0,1,0,0,0,72,93,0,0,22,30,0,0,1,0,0,0,88,93,0,0,23,30,0,0,1,0,0,0,72,93,0,0,24,30,0,0,1,0,0,0,88,93,0,0,25,30,0,0,1,0,0,0,72,93,0,0,26,30,0,0,1,0,0,0,88,93,0,0,27,30,0,0,1,0,0,0,72,93,0,0,28,30,0,0,1,0,0,0,88,93,0,0,29,30,0,0,1,0,0,0,72,93,0,0,30,30,0,0,1,0,0,0,88,93,0,0,31,30,0,0,1,0,0,0,72,93,0,0,32,30,0,0,1,0,0,0,88,93,0,0,33,30,0,0,1,0,0,0,72,93,0,0,34,30,0,0,1,0,0,0,88,93,0,0,35,30,0,0,1,0,0,0,72,93,0,0,36,30,0,0,1,0,0,0,88,93,0,0,37,30,0,0,1,0,0,0,72,93,0,0,38,30,0,0,1,0,0,0,88,93,0,0,39,30,0,0,1,0,0,0,72,93,0,0,40,30,0,0,1,0,0,0,88,93,0,0,41,30,0,0,1,0,0,0,72,93,0,0,42,30,0,0,1,0,0,0,88,93,0,0,43,30,0,0,1,0,0,0,72,93,0,0,44,30,0,0,1,0,0,0,88,93,0,0,45,30,0,0,1,0,0,0,72,93,0,0,46,30,0,0,1,0,0,0,88,93,0,0,47,30,0,0,1,0,0,0,72,93,0,0,48,30,0,0,1,0,0,0,88,93,0,0,49,30,0,0,1,0,0,0,72,93,0,0,50,30,0,0,1,0,0,0,88,93,0,0,51,30,0,0,1,0,0,0,72,93,0,0,52,30,0,0,1,0,0,0,88,93,0,0,53,30,0,0,1,0,0,0,72,93,0,0,54,30,0,0,1,0,0,0,88,93,0,0,55,30,0,0,1,0,0,0,72,93,0,0,56,30,0,0,1,0,0,0,88,93,0,0,57,30,0,0,1,0,0,0,72,93,0,0,58,30,0,0,1,0,0,0,88,93,0,0,59,30,0,0,1,0,0,0,72,93,0,0,60,30,0,0,1,0,0,0,88,93,0,0,61,30,0,0,1,0,0,0,72,93,0,0,62,30,0,0,1,0,0,0,88,93,0,0,63,30,0,0,1,0,0,0,72,93,0,0,64,30,0,0,1,0,0,0,88,93,0,0,65,30,0,0,1,0,0,0,72,93,0,0,66,30,0,0,1,0,0,0,88,93,0,0,67,30,0,0,1,0,0,0,72,93,0,0,68,30,0,0,1,0,0,0,88,93,0,0,69,30,0,0,1,0,0,0,72,93,0,0,70,30,0,0,1,0,0,0,88,93,0,0,71,30,0,0,1,0,0,0,72,93,0,0,72,30,0,0,1,0,0,0,88,93,0,0,73,30,0,0,1,0,0,0,72,93,0,0,74,30,0,0,1,0,0,0,88,93,0,0,75,30,0,0,1,0,0,0,72,93,0,0,76,30,0,0,1,0,0,0,88,93,0,0,77,30,0,0,1,0,0,0,72,93,0,0,78,30,0,0,1,0,0,0,88,93,0,0,79,30,0,0,1,0,0,0,72,93,0,0,80,30,0,0,1,0,0,0,88,93,0,0,81,30,0,0,1,0,0,0,72,93,0,0,82,30,0,0,1,0,0,0,88,93,0,0,83,30,0,0,1,0,0,0,72,93,0,0,84,30,0,0,1,0,0,0,88,93,0,0,85,30,0,0,1,0,0,0,72,93,0,0,86,30,0,0,1,0,0,0,88,93,0,0,87,30,0,0,1,0,0,0,72,93,0,0,88,30,0,0,1,0,0,0,88,93,0,0,89,30,0,0,1,0,0,0,72,93,0,0,90,30,0,0,1,0,0,0,88,93,0,0,91,30,0,0,1,0,0,0,72,93,0,0,92,30,0,0,1,0,0,0,88,93,0,0,93,30,0,0,1,0,0,0,72,93,0,0,94,30,0,0,1,0,0,0,88,93,0,0,95,30,0,0,1,0,0,0,72,93,0,0,96,30,0,0,1,0,0,0,88,93,0,0,97,30,0,0,1,0,0,0,72,93,0,0,98,30,0,0,1,0,0,0,88,93,0,0,99,30,0,0,1,0,0,0,72,93,0,0,100,30,0,0,1,0,0,0,88,93,0,0,101,30,0,0,1,0,0,0,72,93,0,0,102,30,0,0,1,0,0,0,88,93,0,0,103,30,0,0,1,0,0,0,72,93,0,0,104,30,0,0,1,0,0,0,88,93,0,0,105,30,0,0,1,0,0,0,72,93,0,0,106,30,0,0,1,0,0,0,88,93,0,0,107,30,0,0,1,0,0,0,72,93,0,0,108,30,0,0,1,0,0,0,88,93,0,0,109,30,0,0,1,0,0,0,72,93,0,0,110,30,0,0,1,0,0,0,88,93,0,0,111,30,0,0,1,0,0,0,72,93,0,0,112,30,0,0,1,0,0,0,88,93,0,0,113,30,0,0,1,0,0,0,72,93,0,0,114,30,0,0,1,0,0,0,88,93,0,0,115,30,0,0,1,0,0,0,72,93,0,0,116,30,0,0,1,0,0,0,88,93,0,0,117,30,0,0,1,0,0,0,72,93,0,0,118,30,0,0,1,0,0,0,88,93,0,0,119,30,0,0,1,0,0,0,72,93,0,0,120,30,0,0,1,0,0,0,88,93,0,0,121,30,0,0,1,0,0,0,72,93,0,0,122,30,0,0,1,0,0,0,88,93,0,0,123,30,0,0,1,0,0,0,72,93,0,0,124,30,0,0,1,0,0,0,88,93,0,0,125,30,0,0,1,0,0,0,72,93,0,0,126,30,0,0,1,0,0,0,88,93,0,0,127,30,0,0,1,0,0,0,72,93,0,0,128,30,0,0,1,0,0,0,88,93,0,0,129,30,0,0,1,0,0,0,72,93,0,0,130,30,0,0,1,0,0,0,88,93,0,0,131,30,0,0])
.concat([1,0,0,0,72,93,0,0,132,30,0,0,1,0,0,0,88,93,0,0,133,30,0,0,1,0,0,0,72,93,0,0,134,30,0,0,1,0,0,0,88,93,0,0,135,30,0,0,1,0,0,0,72,93,0,0,136,30,0,0,1,0,0,0,88,93,0,0,137,30,0,0,1,0,0,0,72,93,0,0,138,30,0,0,1,0,0,0,88,93,0,0,139,30,0,0,1,0,0,0,72,93,0,0,140,30,0,0,1,0,0,0,88,93,0,0,141,30,0,0,1,0,0,0,72,93,0,0,142,30,0,0,1,0,0,0,88,93,0,0,143,30,0,0,1,0,0,0,72,93,0,0,144,30,0,0,1,0,0,0,88,93,0,0,145,30,0,0,1,0,0,0,72,93,0,0,146,30,0,0,1,0,0,0,88,93,0,0,147,30,0,0,1,0,0,0,72,93,0,0,148,30,0,0,1,0,0,0,88,93,0,0,149,30,0,0,1,0,0,0,72,93,0,0,150,30,0,0,5,0,0,0,216,93,0,0,155,30,0,0,1,0,0,0,104,88,0,0,160,30,0,0,1,0,0,0,88,93,0,0,161,30,0,0,1,0,0,0,72,93,0,0,162,30,0,0,1,0,0,0,88,93,0,0,163,30,0,0,1,0,0,0,72,93,0,0,164,30,0,0,1,0,0,0,88,93,0,0,165,30,0,0,1,0,0,0,72,93,0,0,166,30,0,0,1,0,0,0,88,93,0,0,167,30,0,0,1,0,0,0,72,93,0,0,168,30,0,0,1,0,0,0,88,93,0,0,169,30,0,0,1,0,0,0,72,93,0,0,170,30,0,0,1,0,0,0,88,93,0,0,171,30,0,0,1,0,0,0,72,93,0,0,172,30,0,0,1,0,0,0,88,93,0,0,173,30,0,0,1,0,0,0,72,93,0,0,174,30,0,0,1,0,0,0,88,93,0,0,175,30,0,0,1,0,0,0,72,93,0,0,176,30,0,0,1,0,0,0,88,93,0,0,177,30,0,0,1,0,0,0,72,93,0,0,178,30,0,0,1,0,0,0,88,93,0,0,179,30,0,0,1,0,0,0,72,93,0,0,180,30,0,0,1,0,0,0,88,93,0,0,181,30,0,0,1,0,0,0,72,93,0,0,182,30,0,0,1,0,0,0,88,93,0,0,183,30,0,0,1,0,0,0,72,93,0,0,184,30,0,0,1,0,0,0,88,93,0,0,185,30,0,0,1,0,0,0,72,93,0,0,186,30,0,0,1,0,0,0,88,93,0,0,187,30,0,0,1,0,0,0,72,93,0,0,188,30,0,0,1,0,0,0,88,93,0,0,189,30,0,0,1,0,0,0,72,93,0,0,190,30,0,0,1,0,0,0,88,93,0,0,191,30,0,0,1,0,0,0,72,93,0,0,192,30,0,0,1,0,0,0,88,93,0,0,193,30,0,0,1,0,0,0,72,93,0,0,194,30,0,0,1,0,0,0,88,93,0,0,195,30,0,0,1,0,0,0,72,93,0,0,196,30,0,0,1,0,0,0,88,93,0,0,197,30,0,0,1,0,0,0,72,93,0,0,198,30,0,0,1,0,0,0,88,93,0,0,199,30,0,0,1,0,0,0,72,93,0,0,200,30,0,0,1,0,0,0,88,93,0,0,201,30,0,0,1,0,0,0,72,93,0,0,202,30,0,0,1,0,0,0,88,93,0,0,203,30,0,0,1,0,0,0,72,93,0,0,204,30,0,0,1,0,0,0,88,93,0,0,205,30,0,0,1,0,0,0,72,93,0,0,206,30,0,0,1,0,0,0,88,93,0,0,207,30,0,0,1,0,0,0,72,93,0,0,208,30,0,0,1,0,0,0,88,93,0,0,209,30,0,0,1,0,0,0,72,93,0,0,210,30,0,0,1,0,0,0,88,93,0,0,211,30,0,0,1,0,0,0,72,93,0,0,212,30,0,0,1,0,0,0,88,93,0,0,213,30,0,0,1,0,0,0,72,93,0,0,214,30,0,0,1,0,0,0,88,93,0,0,215,30,0,0,1,0,0,0,72,93,0,0,216,30,0,0,1,0,0,0,88,93,0,0,217,30,0,0,1,0,0,0,72,93,0,0,218,30,0,0,1,0,0,0,88,93,0,0,219,30,0,0,1,0,0,0,72,93,0,0,220,30,0,0,1,0,0,0,88,93,0,0,221,30,0,0,1,0,0,0,72,93,0,0,222,30,0,0,1,0,0,0,88,93,0,0,223,30,0,0,1,0,0,0,72,93,0,0,224,30,0,0,1,0,0,0,88,93,0,0,225,30,0,0,1,0,0,0,72,93,0,0,226,30,0,0,1,0,0,0,88,93,0,0,227,30,0,0,1,0,0,0,72,93,0,0,228,30,0,0,1,0,0,0,88,93,0,0,229,30,0,0,1,0,0,0,72,93,0,0,230,30,0,0,1,0,0,0,88,93,0,0,231,30,0,0,1,0,0,0,72,93,0,0,232,30,0,0,1,0,0,0,88,93,0,0,233,30,0,0,1,0,0,0,72,93,0,0,234,30,0,0,1,0,0,0,88,93,0,0,235,30,0,0,1,0,0,0,72,93,0,0,236,30,0,0,1,0,0,0,88,93,0,0,237,30,0,0,1,0,0,0,72,93,0,0,238,30,0,0,1,0,0,0,88,93,0,0,239,30,0,0,1,0,0,0,72,93,0,0,240,30,0,0,1,0,0,0,88,93,0,0,241,30,0,0,1,0,0,0,72,93,0,0,242,30,0,0,1,0,0,0,88,93,0,0,243,30,0,0,1,0,0,0,72,93,0,0,244,30,0,0,1,0,0,0,88,93,0,0,245,30,0,0,1,0,0,0,72,93,0,0,246,30,0,0,1,0,0,0,88,93,0,0,247,30,0,0,1,0,0,0,72,93,0,0,248,30,0,0,1,0,0,0,88,93,0,0,249,30,0,0,1,0,0,0,72,93,0,0,0,31,0,0,8,0,0,0,88,88,0,0,8,31,0,0,8,0,0,0,72,88,0,0,16,31,0,0,6,0,0,0,88,88,0,0,24,31,0,0,6,0,0,0,72,88,0,0,32,31,0,0,8,0,0,0,88,88,0,0,40,31,0,0,8,0,0,0,72,88,0,0,48,31,0,0,8,0,0,0,88,88,0,0,56,31,0,0,8,0,0,0,72,88,0,0,64,31,0,0,6,0,0,0,88,88,0,0,72,31,0,0,6,0,0,0,72,88,0,0,80,31,0,0,1,0,0,0,216,93,0,0,81,31,0,0,1,0,0,0,88,88,0,0,82,31,0,0,1,0,0,0,216,93,0,0,83,31,0,0,1,0,0,0,88,88,0,0,84,31,0,0,1,0,0,0,216,93,0,0,85,31,0,0,1,0,0,0,88,88,0,0,86,31,0,0,1,0,0,0,216,93,0,0,87,31,0,0,1,0,0,0,88,88,0,0,89,31,0,0,1,0,0,0,72,88,0,0,91,31,0,0,1,0,0,0,72,88,0,0,93,31,0,0,1,0,0,0,72,88,0,0,95,31,0,0,1,0,0,0,72,88,0,0,96,31,0,0,8,0,0,0,88,88,0,0,104,31,0,0,8,0,0,0,72,88,0,0,112,31,0,0,2,0,0,0,56,88,0,0,114,31,0,0,4,0,0,0,40,88,0,0,118,31,0,0,2,0,0,0,24,88,0,0,120,31,0,0,2,0,0,0,168,95,0,0,122,31,0,0,2,0,0,0,152,95,0,0,124,31,0,0,2,0,0,0,136,95,0,0,128,31,0,0,8,0,0,0,88,88,0,0,136,31,0,0,8,0,0,0,120,95,0,0,144,31,0,0,8,0,0,0,88,88,0,0,152,31,0,0,8,0,0,0,120,95,0,0,160,31,0,0,8,0,0,0,88,88,0,0,168,31,0,0,8,0,0,0,120,95,0,0,176,31,0,0,2,0,0,0,88,88,0,0,178,31,0,0,1,0,0,0,216,93,0,0,179,31,0,0,1,0,0,0,104,95,0,0,180,31,0,0,1,0,0,0,216,93,0,0,182,31,0,0,2,0,0,0,216,93,0,0,184,31,0,0,2,0,0,0,72,88,0,0,186,31,0,0,2,0,0,0,88,95,0,0,188,31,0,0,1,0,0,0,72,95,0,0,189,31,0,0,1,0,0,0,184,95,0,0,190,31,0,0,1,0,0,0,56,95,0,0,191,31,0,0,3,0,0,0,184,95,0,0,194,31,0,0,1,0,0,0,216,93,0,0,195,31,0,0,1,0,0,0,104,95,0,0,196,31,0,0,1,0,0,0,216,93,0,0,198,31,0,0,2,0,0,0,216,93,0,0,200,31,0,0,4,0,0,0,40,95,0,0,204,31,0,0,1,0,0,0,72,95,0,0,205,31,0,0,3,0,0,0,184,95,0,0,208,31,0,0,2,0,0,0,88,88,0,0,210,31,0,0,2,0,0,0,216,93,0,0,214,31,0,0,2,0,0,0,216,93,0,0,216,31,0,0,2,0,0,0,72,88,0,0,218,31,0,0,2,0,0,0,24,95,0,0,221,31,0,0,3,0,0,0,184,95,0,0,224,31,0,0,2,0,0,0,88,88,0,0,226,31,0,0,3,0,0,0,216,93,0,0,229,31,0,0,1,0,0,0,24,89,0,0,230,31,0,0,2,0,0,0,216,93,0,0,232,31,0,0,2,0,0,0,72,88,0,0,234,31,0,0,2,0,0,0,248,94,0,0,236,31,0,0,1,0,0,0,232,88,0,0,237,31,0,0,3,0,0,0,184,95,0,0,242,31,0,0,1,0,0,0,216,93,0,0,243,31,0,0,1,0,0,0,104,95,0,0,244,31,0,0,1,0,0,0,216,93,0,0,246,31,0,0,2,0,0,0,216,93,0,0,248,31,0,0,2,0,0,0,232,94,0,0,250,31,0,0,2,0,0,0,216,94,0,0,252,31,0,0,1,0,0,0,72,95,0,0,253,31,0,0,2,0,0,0,184,95,0,0,0,32,0,0,12,0,0,0,200,95,0,0,12,32,0,0,4,0,0,0,184,93,0,0,16,32,0,0,6,0,0,0,8,90,0,0,22,32,0,0,2,0,0,0,120,93,0,0,24,32,0,0,1,0,0,0,200,93,0,0,25,32,0,0,1,0,0,0,136,93,0,0,26,32,0,0,1,0,0,0,24,92,0,0,27,32,0,0,2,0,0,0,200,93,0,0,29,32,0,0,1,0,0,0,136,93,0,0,30,32,0,0,1,0,0,0,24,92,0,0,31,32,0,0,1,0,0,0,200,93,0,0,32,32,0,0,8,0,0,0,120,93,0,0,40,32,0,0,1,0,0,0,200,94,0,0,41,32,0,0,1,0,0,0,184,94,0,0,42,32,0,0,5,0,0,0,184,93,0,0,47,32,0,0,1,0,0,0,200,95,0,0,48,32,0,0,9,0,0,0,120,93,0,0,57,32,0,0,1,0,0,0,200,93,0,0,58,32,0,0,1,0,0,0,136,93,0,0,59,32,0,0,4,0,0,0,120,93,0,0,63,32,0,0,2,0,0,0,8,95,0,0,65,32,0,0,3,0,0,0,120,93,0,0,68,32,0,0,1,0,0,0,184,90,0,0,69,32,0,0,1,0,0,0,24,92,0,0,70,32,0,0,1,0,0,0,104,91,0,0,71,32,0,0,11,0,0,0,120,93,0,0,82,32,0,0,1,0,0,0,184,90,0,0,83,32,0,0,1,0,0,0,120,93,0,0,84,32,0,0,1,0,0,0,8,95,0,0,87,32,0,0,1,0,0,0,120,93,0,0,95,32,0,0,1,0,0,0,200,95,0,0,96,32,0,0,4,0,0,0,184,93,0,0,106,32,0,0,6,0,0,0,184,93,0,0,112,32,0,0,1,0,0,0,168,93,0,0,113,32,0,0,1,0,0,0,216,93,0,0,116,32,0,0,6,0,0,0,168,93,0,0,122,32,0,0,3,0,0,0,184,90,0,0,125,32,0,0,1,0,0,0,24,92,0,0,126,32,0,0,1,0,0,0,104,91,0,0,127,32,0,0,1,0,0,0,216,93,0,0,128,32,0,0,10,0,0,0,168,93,0,0,138,32,0,0,3,0,0,0,184,90,0,0,141,32,0,0,1,0,0,0,24,92,0,0,142,32,0,0,1,0,0,0,104,91,0,0,160,32,0,0,18,0,0,0,200,92,0,0,208,32,0,0,13,0,0,0,72,90,0,0,221,32,0,0,4,0,0,0,200,88,0,0,225,32,0,0,1,0,0,0,72,90,0,0,226,32,0,0,3,0,0,0,200,88,0,0,229,32,0,0,6,0,0,0,72,90,0,0,0,33,0,0,2,0,0,0,232,93,0,0,2,33,0,0,1,0,0,0,144,70,41,0,3,33,0,0,4,0,0,0,232,93,0,0,7,33,0,0,1,0,0,0,144,70,41,0,8,33,0,0,2,0,0,0,232,93,0,0,10,33,0,0,1,0,0,0,216,93,0,0,11,33,0,0,3,0,0,0,144,70,41,0,14,33,0,0,2,0,0,0,216,93,0,0,16,33,0,0,3,0,0,0,144,70,41,0,19,33,0,0,1,0,0,0,216,93,0,0,20,33,0,0,1,0,0,0,232,93,0,0,21,33,0,0,1,0,0,0,144,70,41,0,22,33,0,0,3,0,0,0,232,93,0,0,25,33,0,0,5,0,0,0,144,70,41,0,30,33,0,0,6,0,0,0,232,93,0,0,36,33,0,0,1,0,0,0,144,70,41,0,37,33,0,0,1,0,0,0,232,93,0,0,38,33,0,0,1,0,0,0,168,94,0,0,39,33,0,0,1,0,0,0,232,93,0,0,40,33,0,0,1,0,0,0,144,70,41,0,41,33,0,0,1,0,0,0,232,93,0,0,42,33,0,0,1,0,0,0,152,94,0,0,43,33,0,0,1,0,0,0,136,94,0,0,44,33,0,0,2,0,0,0,144,70,41,0,46,33,0,0,1,0,0,0,232,93,0,0,47,33,0,0,1,0,0,0,216,93,0,0,48,33,0,0,2,0,0,0,144,70,41,0,50,33,0,0,1,0,0,0,232,93,0,0,51,33,0,0,1,0,0,0,144,70,41,0,52,33,0,0,1,0,0,0,216,93,0,0,53,33,0,0,4,0,0,0,216,91,0,0,57,33,0,0,1,0,0,0,216,93,0,0,58,33,0,0,2,0,0,0,232,93,0,0,61,33,0,0,1,0,0,0,216,93,0,0,62,33,0,0,2,0,0,0,144,70,41,0,64,33,0,0,5,0,0,0,184,90,0,0,69,33,0,0,1,0,0,0,144,70,41,0,70,33,0,0,4,0,0,0,216,93,0,0,74,33,0,0,1,0,0,0,232,93,0,0,75,33,0,0,1,0,0,0,184,90,0,0,83,33,0,0,13,0,0,0,168,93,0,0,96,33,0,0,16,0,0,0,120,94,0,0,112,33,0,0,16,0,0,0,104,94,0,0,128,33,0,0,4,0,0,0,120,88,0,0,144,33,0,0,5,0,0,0,184,90,0,0,149,33,0,0,5,0,0,0,232,93,0,0,154,33,0,0,2,0,0,0,184,90,0,0,156,33,0,0,4,0,0,0,232,93,0,0,160,33,0,0,1,0,0,0,184,90,0,0,161,33,0,0,2,0,0,0,232,93,0,0,163,33,0,0,1,0,0,0,184,90,0,0,164,33,0,0,2,0,0,0,232,93,0,0,166,33,0,0,1,0,0,0,184,90,0,0,167,33,0,0,7,0,0,0,232,93,0,0,174,33,0,0,1,0,0,0,184,90,0,0,175,33,0,0,31,0,0,0,232,93,0,0,206,33,0,0,2,0,0,0,184,90,0,0,208,33,0,0,2,0,0,0,232,93,0,0,210,33,0,0,1,0,0,0,184,90,0,0,211,33,0,0,1,0,0,0,232,93,0,0,212,33,0,0,1,0,0,0,184,90,0,0,213,33,0,0,31,0,0,0,232,93,0,0,244,33,0,0,12,1,0,0,184,90,0,0,0,35,0,0,8,0,0,0,232,93,0,0,8,35,0,0,4,0,0,0,184,90,0,0,12,35,0,0,20,0,0,0,232,93,0,0,32,35,0,0,2,0,0,0,184,90,0,0,34,35,0,0,7,0,0,0,232,93,0,0,41,35,0,0,1,0,0,0,24,92,0,0,42,35,0,0,1,0,0,0,104,91,0,0,43,35,0,0,81,0,0,0,232,93,0,0,124,35,0,0,1,0,0,0,184,90,0,0,125,35,0,0,30,0,0,0,232,93,0,0,155,35,0,0,25,0,0,0,184,90,0,0,180,35,0,0,1,0,0,0,24,92,0,0,181,35,0,0,1,0,0,0,104,91,0,0,182,35,0,0,1,0,0,0,120,93,0,0,183,35,0,0,26,0,0,0,232,93,0,0,0,36,0,0,39,0,0,0,232,93,0,0,64,36,0,0,11,0,0,0,232,93,0,0,96,36,0,0,60,0,0,0,168,93,0,0,156,36,0,0,26,0,0,0,232,93,0,0,182,36,0,0,26,0,0,0,72,94,0,0,208,36,0,0,26,0,0,0,56,94,0,0,234,36,0,0,22,0,0,0,168,93,0,0,0,37,0,0,183,0,0,0,232,93,0,0,183,37,0,0,1,0,0,0,184,90,0,0,184,37,0,0,9,0,0,0,232,93,0,0,193,37,0,0,1,0,0,0,184,90,0,0,194,37,0,0,54,0,0,0,232,93,0,0,248,37,0,0,8,0,0,0,184,90,0,0,0,38,0,0,24,0,0,0,232,93,0,0,25,38,0,0,86,0,0,0,232,93,0,0,111,38,0,0,1,0,0,0,184,90,0,0,112,38,0,0,14,0,0,0,232,93,0,0,128,38,0,0,18,0,0,0,232,93,0,0,160,38,0,0,2,0,0,0,232,93,0,0,1,39,0,0,4,0,0,0,232,93,0,0,6,39,0,0,4,0,0,0,232,93,0,0,12,39,0,0,28,0,0,0,232,93,0,0,41,39,0,0,35,0,0,0,232,93,0,0,77,39,0,0,1,0,0,0,232,93,0,0,79,39,0,0,4,0,0,0,232,93,0,0,86,39,0,0,1,0,0,0,232,93,0,0,88,39,0,0,7,0,0,0,232,93,0,0,97,39,0,0,7,0,0,0,232,93,0,0,104,39,0,0,1,0,0,0,24,92,0,0,105,39,0,0,1,0,0,0,104,91,0,0,106,39,0,0,1,0,0,0,24,92,0,0,107,39,0,0,1,0,0,0,104,91,0,0,108,39,0,0,1,0,0,0,24,92,0,0,109,39,0,0,1,0,0,0,104,91,0,0,110,39,0,0,1,0,0,0,24,92,0,0,111,39,0,0,1,0,0,0,104,91,0,0,112,39,0,0,1,0,0,0,24,92,0,0,113,39,0,0,1,0,0,0,104,91,0,0,114,39,0,0,1,0,0,0,24,92,0,0,115,39,0,0,1,0,0,0,104,91,0,0,116,39,0,0,1,0,0,0,24,92,0,0,117,39,0,0,1,0,0,0,104,91,0,0,118,39,0,0,30,0,0,0,168,93,0,0,148,39,0,0,1,0,0,0,232,93,0,0,152,39,0,0,24,0,0,0,232,93,0,0,177,39,0,0,14,0,0,0,232,93,0,0,208,39,0,0,22,0,0,0,184,90,0,0,230,39,0,0,1,0,0,0,24,92,0,0,231,39,0,0,1,0,0,0,104,91,0,0,232,39,0,0,1,0,0,0,24,92,0,0,233,39,0,0,1,0,0,0,104,91,0,0,234,39,0,0,1,0,0,0,24,92,0,0,235,39,0,0,1,0,0,0,104,91,0,0,240,39,0,0,16,0,0,0,184,90,0,0,0,40,0,0,0,1,0,0,232,93,0,0,0,41,0,0,131,0,0,0,184,90,0,0,131,41,0,0,1,0,0,0,24,92,0,0,132,41,0,0,1,0,0,0,104,91,0,0,133,41,0,0,1,0,0,0,24,92,0,0,134,41,0,0,1,0,0,0,104,91,0,0,135,41,0,0,1,0,0,0,24,92,0,0,136,41,0,0,1,0,0,0,104,91,0,0,137,41,0,0,1,0,0,0,24,92,0,0,138,41,0,0,1,0,0,0,104,91,0,0,139,41,0,0,1,0,0,0,24,92,0,0,140,41,0,0,1,0,0,0,104,91,0,0,141,41,0,0,1,0,0,0,24,92,0,0,142,41,0,0,1,0,0,0,104,91,0,0,143,41,0,0,1,0,0,0,24,92,0,0,144,41,0,0,1,0,0,0,104,91,0,0,145,41,0,0,1,0,0,0,24,92,0,0,146,41,0,0,1,0,0,0,104,91,0,0,147,41,0,0,1,0,0,0,24,92,0,0,148,41,0,0,1,0,0,0,104,91,0,0,149,41,0,0,1,0,0,0,24,92,0,0,150,41,0,0,1,0,0,0,104,91,0,0,151,41,0,0,1,0,0,0,24,92,0,0,152,41,0,0,1,0,0,0,104,91,0,0,153,41,0,0,63,0,0,0,184,90,0,0,216,41,0,0,1,0,0,0,24,92,0,0,217,41,0,0,1,0,0,0,104,91,0,0,218,41,0,0,1,0,0,0,24,92,0,0,219,41,0,0,1,0,0,0,104,91,0,0,220,41,0,0,32,0,0,0,184,90,0,0,252,41,0,0,1,0,0,0,24,92,0,0,253,41,0,0,1,0,0,0,104,91,0,0,254,41,0,0,2,1,0,0,184,90,0,0,0,43,0,0,14,0,0,0,232,93,0,0,128,46,0,0,26,0,0,0,232,93,0,0,155,46,0,0,89,0,0,0,232,93,0,0,0,47,0,0,214,0,0,0,232,93,0,0,240,47,0,0,12,0,0,0,232,93,0,0,0,48,0,0,1,0,0,0,200,95,0,0,1,48,0,0,3,0,0,0,120,93,0,0,4,48,0,0,1,0,0,0,232,93,0,0,5,48,0,0,1,0,0,0,88,90,0,0,6,48,0,0,1,0,0,0,216,91,0,0,7,48,0,0,1,0,0,0,120,88,0,0,8,48,0,0,1,0,0,0,24,92,0,0,9,48,0,0,1,0,0,0,104,91,0,0,10,48,0,0,1,0,0,0,24,92,0,0,11,48,0,0,1,0,0,0,104,91,0,0,12,48,0,0,1,0,0,0,24,92,0,0,13,48,0,0,1,0,0,0,104,91,0,0,14,48,0,0,1,0,0,0,24,92,0,0,15,48,0,0,1,0,0,0,104,91,0,0,16,48,0,0,1,0,0,0,24,92,0,0,17,48,0,0,1,0,0,0,104,91,0,0,18,48,0,0,2,0,0,0,232,93,0,0,20,48,0,0,1,0,0,0,24,92,0,0,21,48,0,0,1,0,0,0,104,91,0,0,22,48,0,0,1,0,0,0,24,92,0,0,23,48,0,0,1,0,0,0,104,91,0,0,24,48,0,0,1,0,0,0,24,92,0,0,25,48,0,0,1,0,0,0,104,91,0,0,26,48,0,0,1,0,0,0,24,92,0,0,27,48,0,0,1,0,0,0,104,91,0,0,28,48,0,0,1,0,0,0,8,90,0,0,29,48,0,0,1,0,0,0,24,92,0,0,30,48,0,0,2,0,0,0,104,91,0,0,32,48,0,0,1,0,0,0,232,93,0,0,33,48,0,0,9,0,0,0,120,88,0,0,42,48,0,0,6,0,0,0,72,90,0,0,48,48,0,0,1,0,0,0,8,90,0,0,49,48,0,0,5,0,0,0,88,90,0,0,54,48,0,0,2,0,0,0,232,93,0,0,56,48,0,0,3,0,0,0,120,88,0,0,59,48,0,0,1,0,0,0,88,90,0,0,60,48,0,0,1,0,0,0,216,91,0,0,61,48,0,0,1,0,0,0,120,93,0,0,62,48,0,0,2,0,0,0,232,93,0,0,65,48,0,0,86,0,0,0,216,91,0,0,153,48,0,0,2,0,0,0,72,90,0,0,155,48,0,0,2,0,0,0,184,95,0,0,157,48,0,0,2,0,0,0,88,90,0,0,159,48,0,0,1,0,0,0,216,91,0,0,160,48,0,0,1,0,0,0,8,90,0,0,161,48,0,0,90,0,0,0,216,91,0,0,251,48,0,0,1,0,0,0,8,95,0,0,252,48,0,0,3,0,0,0,88,90,0,0,255,48,0,0,1,0,0,0,216,91,0,0,5,49,0,0,40,0,0,0,216,91,0,0,49,49,0,0,94,0,0,0,216,91,0,0,144,49,0,0,2,0,0,0,232,93,0,0,146,49,0,0,4,0,0,0,168,93,0,0,150,49,0,0,10,0,0,0,232,93,0,0,160,49,0,0,24,0,0,0,216,91,0,0,240,49,0,0,16,0,0,0,216,91,0,0,0,50,0,0,31,0,0,0,232,93,0,0,32,50,0,0,10,0,0,0,168,93,0,0,42,50,0,0,26,0,0,0,232,93,0,0,80,50,0,0,1,0,0,0,232,93,0,0,81,50,0,0,15,0,0,0,168,93,0,0,96,50,0,0,30,0,0,0,232,93,0,0,127,50,0,0,1,0,0,0,232,93,0,0,128,50,0,0,10,0,0,0,168,93,0,0,138,50,0,0,39,0,0,0,232,93,0,0,177,50,0,0,15,0,0,0,168,93,0,0,192,50,0,0,63,0,0,0,232,93,0,0,0,51,0,0,0,1,0,0,232,93,0,0,0,52,0,0,182,25,0,0,216,91,0,0,192,77,0,0,64,0,0,0,232,93,0,0,0,78,0,0,166,81,0,0,216,91,0,0,0,160,0,0,141,4,0,0,216,91,0,0,144,164,0,0,55,0,0,0,232,93,0,0,0,172,0,0,164,43,0,0,216,91,0,0,0,216,0,0,0,8,0,0,40,94,0,0,0,224,0,0,0,25,0,0,24,94,0,0,0,249,0,0,46,1,0,0,216,91,0,0,48,250,0,0,59,0,0,0,216,91,0,0,0,251,0,0,7,0,0,0,216,93,0,0,19,251,0,0,5,0,0,0,216,93,0,0,29,251,0,0,1,0,0,0,216,91,0,0,30,251,0,0,1,0,0,0,72,90,0,0,31,251,0,0,10,0,0,0,216,91,0,0,41,251,0,0,1,0,0,0,184,90,0,0,42,251,0,0,13,0,0,0,216,91,0,0,56,251,0,0,5,0,0,0,216,91,0,0,62,251,0,0,1,0,0,0,216,91,0,0,64,251,0,0,2,0,0,0,216,91,0,0,67,251,0,0,2,0,0,0,216,91,0,0,70,251,0,0,108,0,0,0,216,91,0,0,211,251,0,0,107,1,0,0,216,91,0,0,62,253,0,0,1,0,0,0,24,92,0,0,63,253,0,0,1,0,0,0,104,91,0,0,80,253,0,0,64,0,0,0,216,91,0,0,146,253,0,0,54,0,0,0,216,91,0,0,240,253,0,0,12,0,0,0,216,91,0,0,252,253,0,0,1,0,0,0,200,92,0,0,253,253,0,0,1,0,0,0,232,93,0,0,0,254,0,0,16,0,0,0,72,90,0,0,32,254,0,0,4,0,0,0,72,90,0,0,48,254,0,0,1,0,0,0,120,93,0,0,49,254,0,0,2,0,0,0,8,90,0,0,51,254,0,0,2,0,0,0,8,95,0,0,53,254,0,0,1,0,0,0,24,92,0,0,54,254,0,0,1,0,0,0,104,91,0,0,55,254,0,0,1,0,0,0,24,92,0,0,56,254,0,0,1,0,0,0,104,91,0,0,57,254,0,0,1,0,0,0,24,92,0,0,58,254,0,0,1,0,0,0,104,91,0,0,59,254,0,0,1,0,0,0,24,92,0,0,60,254,0,0,1,0,0,0,104,91,0,0,61,254,0,0,1,0,0,0,24,92,0,0,62,254,0,0,1,0,0,0,104,91,0,0,63,254,0,0,1,0,0,0,24,92,0,0,64,254,0,0,1,0,0,0,104,91,0,0,65,254,0,0,1,0,0,0,24,92,0,0,66,254,0,0,1,0,0,0,104,91,0,0,67,254,0,0,1,0,0,0,24,92,0,0,68,254,0,0,1,0,0,0,104,91,0,0,69,254,0,0,2,0,0,0,120,93,0,0,71,254,0,0,1,0,0,0,24,92,0,0,72,254,0,0,1,0,0,0,104,91,0,0,73,254,0,0,4,0,0,0,120,93,0,0,77,254,0,0,3,0,0,0,8,95,0,0,80,254,0,0,3,0,0,0,120,93,0,0,84,254,0,0,4,0,0,0,120,93,0,0,88,254,0,0,1,0,0,0,8,90,0,0,89,254,0,0,1,0,0,0,24,92,0,0,90,254,0,0,1,0,0,0,104,91,0,0,91,254,0,0,1,0,0,0,24,92,0,0,92,254,0,0,1,0,0,0,104,91,0,0,93,254,0,0,1,0,0,0,24,92,0,0,94,254,0,0,1,0,0,0,104,91,0,0,95,254,0,0,3,0,0,0,120,93,0,0,98,254,0,0,1,0,0,0,184,90,0,0,99,254,0,0,1,0,0,0,8,90,0,0,100,254,0,0,3,0,0,0,184,90,0,0,104,254,0,0,1,0,0,0,120,93,0,0,105,254,0,0,1,0,0,0,200,92,0,0,106,254,0,0,2,0,0,0,120,93,0,0,112,254,0,0,5,0,0,0,216,91,0,0,118,254,0,0,135,0,0,0,216,91,0,0,255,254,0,0,1,0,0,0,184,93,0,0,1,255,0,0,3,0,0,0,120,93,0,0,4,255,0,0,1,0,0,0,200,92,0,0,5,255,0,0,3,0,0,0,120,93,0,0,8,255,0,0,1,0,0,0,24,92,0,0,9,255,0,0,1,0,0,0,104,91,0,0,10,255,0,0,1,0,0,0,120,93,0,0,11,255,0,0,1,0,0,0,184,90,0,0,12,255,0,0,1,0,0,0,120,93,0,0,13,255,0,0,1,0,0,0,8,90,0,0,14,255,0,0,2,0,0,0,120,93,0,0,16,255,0,0,10,0,0,0,104,89,0,0,26,255,0,0,2,0,0,0,120,93,0,0,28,255,0,0,3,0,0,0,184,90,0,0,31,255,0,0,2,0,0,0,120,93,0,0,33,255,0,0,26,0,0,0,184,88,0,0,59,255,0,0,1,0,0,0,24,92,0,0,60,255,0,0,1,0,0,0,120,93,0,0,61,255,0,0,1,0,0,0,104,91,0,0,62,255,0,0,1,0,0,0,184,95,0,0,63,255,0,0,1,0,0,0,8,95,0,0,64,255,0,0,1,0,0,0,184,95,0,0,65,255,0,0,26,0,0,0,88,94,0,0,91,255,0,0,1,0,0,0,24,92,0,0,92,255,0,0,1,0,0,0,184,90,0,0,93,255,0,0,1,0,0,0,104,91,0,0,94,255,0,0,1,0,0,0,184,90,0,0,95,255,0,0,1,0,0,0,24,92,0,0,96,255,0,0,1,0,0,0,104,91,0,0,97,255,0,0,1,0,0,0,120,93,0,0,98,255,0,0,1,0,0,0,24,92,0,0,99,255,0,0,1,0,0,0,104,91,0,0,100,255,0,0,1,0,0,0,120,93,0,0,101,255,0,0,1,0,0,0,8,95,0,0,102,255,0,0,10,0,0,0,216,91,0,0,112,255,0,0,1,0,0,0,88,90,0,0,113,255,0,0,45,0,0,0,216,91,0,0,158,255,0,0,2,0,0,0,88,90,0,0,160,255,0,0,31,0,0,0,216,91,0,0,194,255,0,0,6,0,0,0,216,91,0,0,202,255,0,0,6,0,0,0,216,91,0,0,210,255,0,0,6,0,0,0,216,91,0,0,218,255,0,0,3,0,0,0,216,91,0,0,224,255,0,0,2,0,0,0,200,92,0,0,226,255,0,0,1,0,0,0,184,90,0,0,227,255,0,0,1,0,0,0,184,95,0,0,228,255,0,0,1,0,0,0,232,93,0,0,229,255,0,0,2,0,0,0,200,92,0,0,232,255,0,0,1,0,0,0,232,93,0,0,233,255,0,0,4,0,0,0,184,90,0,0,237,255,0,0,2,0,0,0,232,93,0,0,249,255,0,0,3,0,0,0,184,93,0,0,252,255,0,0,2,0,0,0,232,93,0,0,0,0,1,0,12,0,0,0,216,91,0,0,13,0,1,0,26,0,0,0,216,91,0,0,40,0,1,0,19,0,0,0,216,91,0,0,60,0,1,0,2,0,0,0,216,91,0,0,63,0,1,0,15,0,0,0,216,91,0,0,80,0,1,0,14,0,0,0,216,91,0,0,128,0,1,0,123,0,0,0,216,91,0,0,0,1,1,0,2,0,0,0,120,93,0,0,2,1,1,0,1,0,0,0,232,93,0,0,7,1,1,0,45,0,0,0,168,93,0,0,55,1,1,0,9,0,0,0,232,93,0,0,0,3,1,0,31,0,0,0,216,91,0,0,32,3,1,0,4,0,0,0,168,93,0,0,48,3,1,0,26,0,0,0,216,91,0,0,74,3,1,0,1,0,0,0,120,88,0,0,128,3,1,0,30,0,0,0,216,91,0,0,159,3,1,0,1,0,0,0,120,93,0,0,0,4,1,0,40,0,0,0,8,94,0,0,40,4,1,0,40,0,0,0,248,93,0,0,80,4,1,0,78,0,0,0,216,91,0,0,160,4,1,0,10,0,0,0,104,89,0,0,0,8,1,0,6,0,0,0,216,91,0,0,8,8,1,0,1,0,0,0,216,91,0,0,10,8,1,0,44,0,0,0,216,91,0,0,55,8,1,0,2,0,0,0,216,91,0,0,60,8,1,0,1,0,0,0,216,91,0,0,63,8,1,0,1,0,0,0,216,91,0,0,0,208,1,0,246,0,0,0,232,93,0,0,0,209,1,0,39,0,0,0,232,93,0,0,42,209,1,0,59,0,0,0,232,93,0,0,101,209,1,0,2,0,0,0,136,88,0,0,103,209,1,0,3,0,0,0,72,90,0,0,106,209,1,0,3,0,0,0,232,93,0,0,109,209,1,0,6,0,0,0,136,88,0,0,115,209,1,0,8,0,0,0,184,93,0,0,123,209,1,0,8,0,0,0,72,90,0,0,131,209,1,0,2,0,0,0,232,93,0,0,133,209,1,0,7,0,0,0,72,90,0,0,140,209,1,0,30,0,0,0,232,93,0,0,170,209,1,0,4,0,0,0,72,90,0,0,174,209,1,0,48,0,0,0,232,93,0,0,0,211,1,0,87,0,0,0,232,93,0,0,0,212,1,0,26,0,0,0,144,70,41,0,26,212,1,0,26,0,0,0,216,93,0,0,52,212,1,0,26,0,0,0,144,70,41,0,78,212,1,0,7,0,0,0,216,93,0,0,86,212,1,0,18,0,0,0,216,93,0,0,104,212,1,0,26,0,0,0,144,70,41,0,130,212,1,0,26,0,0,0,216,93,0,0,156,212,1,0,1,0,0,0,144,70,41,0,158,212,1,0,2,0,0,0,144,70,41,0,162,212,1,0,1,0,0,0,144,70,41,0,165,212,1,0,2,0,0,0,144,70,41,0,169,212,1,0,4,0,0,0,144,70,41,0,174,212,1,0,8,0,0,0,144,70,41,0,182,212,1,0,4,0,0,0,216,93,0,0,187,212,1,0,1,0,0,0,216,93,0,0,189,212,1,0,7,0,0,0,216,93,0,0,197,212,1,0,11,0,0,0,216,93,0,0,208,212,1,0,26,0,0,0,144,70,41,0,234,212,1,0,26,0,0,0,216,93,0,0,4,213,1,0,2,0,0,0,144,70,41,0,7,213,1,0,4,0,0,0,144,70,41,0,13,213,1,0,8,0,0,0,144,70,41,0,22,213,1,0,7,0,0,0,144,70,41,0,30,213,1,0,26,0,0,0,216,93,0,0,56,213,1,0,2,0,0,0,144,70,41,0,59,213,1,0,4,0,0,0,144,70,41,0,64,213,1,0,5,0,0,0,144,70,41,0,70,213,1,0,1,0,0,0,144,70,41,0,74,213,1,0,7,0,0,0,144,70,41,0,82,213,1,0,26,0,0,0,216,93,0,0,108,213,1,0,26,0,0,0,144,70,41,0,134,213,1,0,26,0,0,0,216,93,0,0,160,213,1,0,26,0,0,0,144,70,41,0,186,213,1,0,26,0,0,0,216,93,0,0,212,213,1,0,26,0,0,0,144,70,41,0,238,213,1,0,26,0,0,0,216,93,0,0,8,214,1,0,26,0,0,0,144,70,41,0,34,214,1,0,26,0,0,0,216,93,0,0,60,214,1,0,26,0,0,0,144,70,41,0,86,214,1,0,26,0,0,0,216,93,0,0,112,214,1,0,26,0,0,0,144,70,41,0,138,214,1,0,26,0,0,0,216,93,0,0,168,214,1,0,25,0,0,0,144,70,41,0,193,214,1,0,1,0,0,0,184,90,0,0,194,214,1,0,25,0,0,0,216,93,0,0,219,214,1,0,1,0,0,0,184,90,0,0,220,214,1,0,6,0,0,0,216,93,0,0,226,214,1,0,25,0,0,0,144,70,41,0,251,214,1,0,1,0,0,0,184,90,0,0,252,214,1,0,25,0,0,0,216,93,0,0,21,215,1,0,1,0,0,0,184,90,0,0,22,215,1,0,6,0,0,0,216,93,0,0,28,215,1,0,25,0,0,0,144,70,41,0,53,215,1,0,1,0,0,0,184,90,0,0,54,215,1,0,25,0,0,0,216,93,0,0,79,215,1,0,1,0,0,0,184,90,0,0,80,215,1,0,6,0,0,0,216,93,0,0,86,215,1,0,25,0,0,0,144,70,41,0,111,215,1,0,1,0,0,0,184,90,0,0,112,215,1,0,25,0,0,0,216,93,0,0,137,215,1,0,1,0,0,0,184,90,0,0,138,215,1,0,6,0,0,0,216,93,0,0,144,215,1,0,25,0,0,0,144,70,41,0,169,215,1,0,1,0,0,0,184,90,0,0,170,215,1,0,25,0,0,0,216,93,0,0,195,215,1,0,1,0,0,0,184,90,0,0,196,215,1,0,6,0,0,0,216,93,0,0,206,215,1,0,50,0,0,0,104,89,0,0,0,0,2,0,215,166,0,0,216,91,0,0,0,248,2,0,30,2,0,0,216,91,0,0,1,0,14,0,1,0,0,0,184,93,0,0,32,0,14,0,96,0,0,0,184,93,0,0,0,1,14,0,240,0,0,0,72,90,0,0,0,0,15,0,254,255,0,0,24,94,0,0,0,0,16,0,254,255,0,0,24,94,0,0,16,2,0,0,200,193,0,0,0,0,0,0,0,0,0,0,160,32,1,0,2,0,0,0,204,1,0,0,184,247,0,0,0,0,0,0,234,1,0,0,200,3,1,0,1,0,0,0,40,1,0,0,248,10,1,0,1,0,0,0,112,1,0,0,168,3,1,0,1,0,0,0,110,0,0,0,112,8,1,0,0,0,0,0,168,0,0,0,248,3,1,0,1,0,0,0,170,1,0,0,104,212,0,0,3,0,0,0,216,0,0,0,16,226,0,0,3,0,0,0,160,0,0,0,192,95,1,0,2,0,0,0,54,0,0,0,176,79,1,0,1,0,0,0,24,1,0,0,152,66,1,0,2,0,0,0,122,1,0,0,32,59,1,0,2,0,0,0,254,0,0,0,88,48,1,0,2,0,0,0,174,1,0,0,56,38,1,0,1,0,0,0,52,2,0,0,176,27,1,0,1,0,0,0,138,2,0,0,0,16,1,0,2,0,0,0,14,0,0,0,0,22,1,0,2,0,0,0,18,0,0,0,152,3,1,0,0,0,0,0,18,2,0,0,136,3,1,0,0,0,0,0,212,0,0,0,136,243,0,0,2,0,0,0,216,1,0,0,88,3,1,0,2,0,0,0,74,2,0,0,72,3,1,0,2,0,0,0,28,1,0,0,48,3,1,0,2,0,0,0,180,0,0,0,32,3,1,0,2,0,0,0,146,0,0,0,248,2,1,0,2,0,0,0,184,0,0,0,232,2,1,0,2,0,0,0,78,2,0,0,96,2,1,0,1,0,0,0,198,1,0,0,72,2,1,0,2,0,0,0,20,2,0,0,56,2,1,0,2,0,0,0,162,1,0,0,40,2,1,0,2,0,0,0,208,1,0,0,240,1,1,0,2,0,0,0,142,1,0,0,216,1,1,0,1,0,0,0,244,1,0,0,160,1,1,0,2,0,0,0,34,2,0,0,144,1,1,0,1,0,0,0,138,1,0,0,80,1,1,0,2,0,0,0,0,1,0,0,64,1,1,0,0,0,0,0,244,0,0,0,192,0,1,0,2,0,0,0,246,0,0,0,168,0,1,0,2,0,0,0,238,1,0,0,152,0,1,0,1,0,0,0,86,2,0,0,136,0,1,0,2,0,0,0,106,0,0,0,104,0,1,0,2,0,0,0,140,0,0,0,72,0,1,0,2,0,0,0,80,0,0,0,48,0,1,0,2,0,0,0,36,2,0,0,16,0,1,0,2,0,0,0,14,1,0,0,224,255,0,0,2,0,0,0,150,1,0,0,208,255,0,0,2,0,0,0,80,1,0,0,120,255,0,0,2,0,0,0,136,0,0,0,72,255,0,0,2,0,0,0,212,1,0,0,48,255,0,0,1,0,0,0,236,0,0,0,32,255,0,0,2,0,0,0,232,1,0,0,232,254,0,0,3,0,0,0,118,1,0,0,216,254,0,0,1,0,0,0,2,2,0,0,192,254,0,0,2,0,0,0,210,0,0,0,176,254,0,0,1,0,0,0,36,0,0,0,136,254,0,0,1,0,0,0,154,1,0,0,120,254,0,0,1,0,0,0,122,0,0,0,16,254,0,0,1,0,0,0,94,0,0,0,248,253,0,0,1,0,0,0,132,1,0,0,232,253,0,0,1,0,0,0,20,0,0,0,208,253,0,0,2,0,0,0,140,1,0,0,176,253,0,0,1,0,0,0,12,2,0,0,160,253,0,0,1,0,0,0,194,1,0,0,128,253,0,0,1,0,0,0,200,0,0,0,104,253,0,0,1,0,0,0,182,0,0,0,72,253,0,0,1,0,0,0,102,1,0,0,48,253,0,0,1,0,0,0,10,1,0,0,184,252,0,0,1,0,0,0,48,0,0,0,152,252,0,0,2,0,0,0,130,1,0,0,128,252,0,0,1,0,0,0,86,0,0,0,104,252,0,0,2,0,0,0,148,0,0,0,80,252,0,0,2,0,0,0,108,0,0,0,64,252,0,0,2,0,0,0,10,2,0,0,40,252,0,0,2,0,0,0,148,1,0,0,24,252,0,0,2,0,0,0,12,0,0,0,0,252,0,0,1,0,0,0,220,1,0,0,240,251,0,0,2,0,0,0,196,1,0,0,160,251,0,0,2,0,0,0,12,1,0,0,136,251,0,0,2,0,0,0,164,0,0,0,120,251,0,0,2,0,0,0,2,0,0,0,104,251,0,0,1,0,0,0,74,1,0,0,80,251,0,0,1,0,0,0,90,0,0,0,64,251,0,0,1,0,0,0,56,0,0,0,40,251,0,0,1,0,0,0,166,1,0,0,24,251,0,0,1,0,0,0,178,0,0,0,0,251,0,0,1,0,0,0,120,1,0,0,240,250,0,0,1,0,0,0,82,0,0,0,176,250,0,0,1,0,0,0,72,2,0,0,152,250,0,0,1,0,0,0,188,1,0,0,136,250,0,0,1,0,0,0,4,2,0,0,112,250,0,0,1,0,0,0,178,1,0,0,56,250,0,0,0,0,0,0,252,0,0,0,40,250,0,0,0,0,0,0,94,2,0,0,16,250,0,0,0,0,0,0,226,0,0,0,0,250,0,0,0,0,0,0,218,0,0,0,208,249,0,0,1,0,0,0,140,2,0,0,192,249,0,0,2,0,0,0,158,1,0,0,112,249,0,0,1,0,0,0,144,0,0,0,80,249,0,0,1,0,0,0,130,2,0,0,64,249,0,0,1,0,0,0,162,0,0,0,48,249,0,0,1,0,0,0,90,2,0,0,24,249,0,0,1,0,0,0,26,0,0,0,8,249,0,0,1,0,0,0,222,1,0,0,240,248,0,0,1,0,0,0,132,2,0,0,224,248,0,0,1,0,0,0,202,0,0,0,168,248,0,0,1,0,0,0,192,0,0,0,120,248,0,0,1,0,0,0,64,1,0,0,208,247,0,0,0,0,0,0,252,0,0,0,128,247,0,0,0,0,0,0,32,1,0,0,80,247,0,0,0,0,0,0,62,0,0,0,56,247,0,0,0,0,0,0,22,2,0,0,24,247,0,0,1,0,0,0,138,0,0,0,200,246,0,0,2,0,0,0,150,0,0,0,176,246,0,0,1,0,0,0,92,0,0,0,160,246,0,0,1,0,0,0,36,1,0,0,96,246,0,0,1,0,0,0,98,0,0,0,72,246,0,0,1,0,0,0,254,1,0,0,16,214,0,0,1,0,0,0,54,1,0,0,176,213,0,0,1,0,0,0,100,1,0,0,40,213,0,0,1,0,0,0,250,1,0,0,160,212,0,0,1,0,0,0,220,0,0,0,216,245,0,0,1,0,0,0,236,1,0,0,176,245,0,0,1,0,0,0,38,0,0,0,168,245,0,0,0,0,0,0,248,1,0,0,160,245,0,0,2,0,0,0,186,0,0,0,136,245,0,0,2,0,0,0,172,0,0,0,120,245,0,0,2,0,0,0,248,0,0,0,96,245,0,0,2,0,0,0,34,0,0,0,80,245,0,0,2,0,0,0,106,1,0,0,32,245,0,0,2,0,0,0,154,0,0,0,16,245,0,0,2,0,0,0,242,0,0,0,168,244,0,0,2,0,0,0,168,1,0,0,136,244,0,0,2,0,0,0,124,0,0,0,120,244,0,0])
.concat([2,0,0,0,60,2,0,0,104,244,0,0,2,0,0,0,74,0,0,0,72,244,0,0,2,0,0,0,66,2,0,0,56,244,0,0,2,0,0,0,6,1,0,0,32,244,0,0,2,0,0,0,88,0,0,0,16,244,0,0,2,0,0,0,136,2,0,0,224,243,0,0,1,0,0,0,48,2,0,0,216,243,0,0,2,0,0,0,62,2,0,0,112,243,0,0,2,0,0,0,204,0,0,0,80,243,0,0,0,0,0,0,210,1,0,0,72,243,0,0,1,0,0,0,84,2,0,0,64,243,0,0,1,0,0,0,50,1,0,0,32,243,0,0,1,0,0,0,58,0,0,0,0,243,0,0,1,0,0,0,200,1,0,0,240,242,0,0,1,0,0,0,130,0,0,0,200,242,0,0,1,0,0,0,128,2,0,0,128,242,0,0,1,0,0,0,32,0,0,0,120,242,0,0,1,0,0,0,88,2,0,0,40,242,0,0,1,0,0,0,192,1,0,0,8,1,1,0,3,0,0,0,146,2,0,0,64,254,0,0,2,0,0,0,226,1,0,0,184,251,0,0,2,0,0,0,16,1,0,0,136,249,0,0,5,0,0,0,96,1,0,0,0,246,0,0,6,0,0,0,184,1,0,0,0,242,0,0,2,0,0,0,182,1,0,0,248,241,0,0,2,0,0,0,82,2,0,0,240,241,0,0,3,0,0,0,234,0,0,0,160,241,0,0,2,0,0,0,202,1,0,0,144,241,0,0,1,0,0,0,96,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,32,1,0,0,0,0,0,216,6,1,0,1,0,0,0,224,247,0,0,2,0,0,0,184,235,0,0,3,0,0,0,0,0,0,0,0,0,0,0,180,1,0,0,168,201,0,0,0,0,0,0,0,0,0,0,120,16,1,0,2,0,0,0,164,1,0,0,176,15,1,0,2,0,0,0,206,1,0,0,64,15,1,0,2,0,0,0,188,0,0,0,232,14,1,0,2,0,0,0,152,0,0,0,192,14,1,0,1,0,0,0,112,2,0,0,64,14,1,0,1,0,0,0,240,1,0,0,8,14,1,0,1,0,0,0,68,0,0,0,200,13,1,0,1,0,0,0,246,1,0,0,136,13,1,0,1,0,0,0,224,0,0,0,64,13,1,0,1,0,0,0,42,0,0,0,24,13,1,0,1,0,0,0,230,0,0,0,152,12,1,0,2,0,0,0,116,1,0,0,96,12,1,0,2,0,0,0,42,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,122,2,0,0,96,202,0,0,0,0,0,0,0,0,0,0,232,11,1,0,3,0,0,0,84,1,0,0,192,11,1,0,2,0,0,0,134,0,0,0,176,11,1,0,3,0,0,0,26,1,0,0,160,11,1,0,5,0,0,0,4,0,0,0,144,11,1,0,2,0,0,0,214,1,0,0,120,11,1,0,2,0,0,0,58,2,0,0,104,11,1,0,1,0,0,0,54,2,0,0,200,10,1,0,1,0,0,0,126,2,0,0,176,10,1,0,0,0,0,0,110,1,0,0,160,10,1,0,4,0,0,0,6,0,0,0,144,10,1,0,3,0,0,0,6,2,0,0,128,10,1,0,4,0,0,0,146,1,0,0,112,10,1,0,2,0,0,0,52,0,0,0,96,10,1,0,1,0,0,0,54,2,0,0,88,10,1,0,2,0,0,0,238,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,80,97,114,115,101,114,32,111,118,101,114,102,108,111,119,0,72,115,70,108,111,97,116,0,47,98,105,110,47,115,104,0,73,110,100,101,120,79,117,116,79,102,66,111,117,110,100,115,0,0,0,0,0,0,0,0,102,105,108,101,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,0,0,0,0,0,10,42,42,42,32,107,105,110,100,32,32,32,32,32,32,32,32,32,32,32,58,32,0,0,45,112,34,37,115,62,32,34,32,45,114,36,36,0,0,0,118,101,114,98,0,0,0,0,72,115,87,111,114,100,54,52,0,0,0,0,0,0,0,0,68,105,118,105,100,101,66,121,90,101,114,111,0,0,0,0,100,105,114,101,99,116,111,114,121,32,97,108,114,101,97,100,121,32,101,120,105,115,116,115,0,0,0,0,0,0,0,0,10,42,42,42,32,99,111,110,115,116,114,117,99,116,111,114,32,32,32,32,58,32,0,0,69,68,73,84,79,82,0,0,108,104,115,0,0,0,0,0,72,115,87,111,114,100,51,50,0,0,0,0,0,0,0,0,79,118,101,114,102,108,111,119,0,0,0,0,0,0,0,0,102,105,108,101,32,97,108,114,101,97,100,121,32,101,120,105,115,116,115,0,0,0,0,0,116,121,112,101,32,100,101,102,110,32,108,104,115,0,0,0,10,42,42,42,32,101,120,112,114,101,115,115,105,111,110,32,32,32,32,32,58,32,0,0,85,110,97,98,108,101,32,116,111,32,108,111,97,100,32,80,114,101,108,117,100,101,0,0,104,115,0,0,0,0,0,0,72,115,87,111,114,100,49,54,0,0,0,0,0,0,0,0,82,101,99,85,112,100,69,114,114,111,114,0,0,0,0,0,105,108,108,101,103,97,108,32,102,105,108,101,32,110,97,109,101,0,0,0,0,0,0,0,75,105,110,100,32,101,114,114,111,114,32,105,110,32,37,115,0,0,0,0,0,0,0,0,58,118,101,114,115,105,111,110,0,0,0,0,0,0,0,0,85,110,97,98,108,101,32,116,111,32,111,112,101,110,32,102,105,108,101,32,34,37,115,34,0,0,0,0,0,0,0,0,72,115,87,111,114,100,56,0,115,116,97,116,105,99,32,72,117,103,115,65,80,73,53,32,42,104,117,103,115,32,61,32,48,59,10,0,0,0,0,0,80,114,111,103,114,97,109,32,101,120,101,99,117,116,105,111,110,0,0,0,0,0,0,0,82,101,99,83,101,108,69,114,114,111,114,0,0,0,0,0,68,105,114,101,99,116,111,114,121,46,103,101,116,77,111,100,105,102,105,99,97,116,105,111,110,84,105,109,101,0,0,0,32,105,110,32,37,115,10,0,58,109,97,105,110,0,0,0,32,34,37,115,34,0,0,0,80,97,114,115,105,110,103,0,112,114,101,67,111,109,112,0,72,115,73,110,116,54,52,0,72,85,71,83,68,73,82,0,82,101,99,67,111,110,69,114,114,111,114,0,0,0,0,0,103,101,116,77,111,100,84,105,109,101,0,0,0,0,0,0,34,0,0,0,0,0,0,0,58,98,114,111,119,115,101,0,114,98,0,0,0,0,0,0,72,115,73,110,116,51,50,0,80,97,116,116,101,114,110,77,97,116,99,104,70,97,105,108,0,0,0,0,0,0,0,0,103,101,116,68,105,114,67,111,110,116,101,110,116,115,0,0,32,34,0,0,0,0,0,0,58,109,111,100,117,108,101,0,114,0,0,0,0,0,0,0,72,115,73,110,116,49,54,0,78,111,110,84,101,114,109,105,110,97,116,105,111,110,0,0,115,101,116,80,101,114,109,115,0,0,0,0,0,0,0,0,73,108,108,101,103,97,108,32,116,121,112,101,0,0,0,0,73,110,116,56,0,0,0,0,58,105,110,102,111,0,0,0,10,42,42,42,32,66,114,101,97,107,32,100,101,112,101,110,100,101,110,99,121,32,58,32,0,0,0,0,0,0,0,0,37,115,32,37,115,0,0,0,72,115,73,110,116,56,0,0,84,121,112,101,32,99,111,110,115,116,114,117,99,116,111,114,32,115,116,111,114,97,103,101,32,115,112,97,99,101,32,101,120,104,97,117,115,116,101,100,0,0,0,0,0,0,0,0,77,117,108,116,105,112,108,101,32,100,101,99,108,97,114,97,116,105,111,110,115,32,111,102,32,99,108,97,115,115,32,34,37,115,34,0,0,0,0,0,95,99,111,110,99,109,112,0,78,111,77,101,116,104,111,100,69,114,114,111,114,0,0,0,103,101,116,80,101,114,109,115,0,0,0,0,0,0,0,0,65,108,108,111,119,32,111,118,101,114,108,97,112,112,105,110,103,32,105,110,115,116,97,110,99,101,115,0,0,0,0,0,102,105,120,75,105,110,100,115,0,0,0,0,0,0,0,0,73,108,108,101,103,97,108,32,101,120,112,111,114,116,32,111,102,32,97,32,108,111,110,101,32,100,97,116,97,32,99,111,110,115,116,114,117,99,116,111,114,32,34,37,115,34,0,0,58,110,97,109,101,115,0,0,85,110,97,98,108,101,32,116,111,32,97,108,108,111,99,97,116,101,32,109,101,109,111,114,121,32,102,111,114,32,102,105,108,116,101,114,32,99,111,109,109,97,110,100,46,0,0,0,72,115,73,110,116,0,0,0,73,79,69,120,99,101,112,116,105,111,110,0,0,0,0,0,100,111,101,115,68,105,114,101,99,116,111,114,121,69,120,105,115,116,0,0,0,0,0,0,68,101,102,97,117,108,116,32,116,121,112,101,115,32,109,117,115,116,32,98,101,32,105,110,115,116,97,110,99,101,115,32,111,102,32,116,104,101,32,78,117,109,32,99,108,97,115,115,0,0,0,0,0,0,0,0,58,102,105,110,100,0,0,0,45,45,32,116,121,112,101,32,99,111,110,115,116,114,117,99,116,111,114,0,0,0,0,0,109,97,105,110,0,0,0,0,72,115,67,104,97,114,0,0,83,72,69,76,76,0,0,0,69,114,114,111,114,67,97,108,108,0,0,0,0,0,0,0,100,111,101,115,70,105,108,101,69,120,105,115,116,0,0,0,78,117,109,0,0,0,0,0,58,115,101,116,0,0,0,0,77,97,105,110,0,0,0,0,41,41,0,0,0,0,0,0,65,114,114,97,121,69,120,99,101,112,116,105,111,110,0,0,115,101,116,67,117,114,114,101,110,116,68,105,114,101,99,116,111,114,121,0,0,0,0,0,100,101,102,97,117,108,116,32,116,121,112,101,0,0,0,0,58,113,117,105,116,0,0,0,102,111,114,97,108,108,0,0,44,32,0,0,0,0,0,0,65,114,105,116,104,69,120,99,101,112,116,105,111,110,0,0,103,101,116,67,117,114,114,101,110,116,68,105,114,101,99,116,111,114,121,0,0,0,0,0,110,101,101,100,112,114,105,109,115,32,100,101,99,108,0,0,102,111,114,101,105,103,110,32,105,109,112,111,114,116,32,38,32,109,117,115,116,32,104,97,118,101,32,116,121,112,101,32,39,80,116,114,32,97,39,32,111,114,32,39,70,117,110,80,116,114,32,97,39,0,0,0,58,101,100,105,116,0,0,0,95,0,0,0,0,0,0,0,32,40,42,41,40,0,0,0,85,115,101,114,69,114,114,111,114,0,0,0,0,0,0,0,114,101,110,97,109,101,70,105,108,101,0,0,0,0,0,0,102,111,114,101,105,103,110,32,105,109,112,111,114,116,32,119,114,97,112,112,101,114,32,109,117,115,116,32,104,97,118,101,32,116,121,112,101,32,39,102,116,32,45,62,32,73,79,32,40,70,117,110,80,116,114,32,102,116,41,39,0,0,0,0,58,103,99,0,0,0,0,0,97,115,0,0,0,0,0,0,118,111,105,100,0,0,0,0,67,97,110,110,111,116,32,102,105,110,100,32,34,115,104,111,119,34,32,102,117,110,99,116,105,111,110,32,102,111,114,58,0,0,0,0,0,0,0,0,80,101,114,109,105,115,115,105,111,110,68,101,110,105,101,100,0,0,0,0,0,0,0,0,114,101,110,97,109,101,68,105,114,101,99,116,111,114,121,0,102,111,114,101,105,103,110,32,105,109,112,111,114,116,32,100,121,110,97,109,105,99,32,109,117,115,116,32,104,97,118,101,32,116,121,112,101,32,39,40,70,117,110,80,116,114,32,102,116,41,32,45,62,32,102,116,39,0,0,0,0,0,0,0,58,114,101,108,111,97,100,0,69,82,82,79,82,0,0,0,116,104,114,101,97,100,115,97,102,101,0,0,0,0,0,0,99,111,109,112,105,108,101,71,108,111,98,97,108,70,117,110,99,116,105,111,110,0,0,0,73,108,108,101,103,97,108,79,112,101,114,97,116,105,111,110,0,0,0,0,0,0,0,0,114,101,109,111,118,101,70,105,108,101,0,0,0,0,0,0,39,10,0,0,0,0,0,0,58,108,111,97,100,0,0,0,117,110,115,97,102,101,0,0,34,0,0,0,0,0,0,0,80,114,111,116,111,99,111,108,69,114,114,111,114,0,0,0,114,101,109,111,118,101,68,105,114,101,99,116,111,114,121,0,67,97,110,39,116,32,112,97,114,115,101,32,101,120,116,101,114,110,97,108,32,101,110,116,105,116,121,32,39,0,0,0,58,33,0,0,0,0,0,0,115,97,102,101,0,0,0,0,32,34,0,0,0,0,0,0,69,79,70,0,0,0,0,0,99,114,101,97,116,101,68,105,114,101,99,116,111,114,121,0,72,117,103,115,32,100,111,101,115,110,39,116,32,117,115,101,32,108,105,98,114,97,114,121,32,115,112,101,99,105,102,105,99,97,116,105,111,110,115,46,0,0,0,0,0,0,0,0,73,110,116,0,0,0,0,0,58,116,121,112,101,0,0,0,10,42,42,42,32,70,111,114,32,99,108,97,115,115,32,32,32,32,32,32,32,32,58,32,0,0,0,0,0,0,0,0,99,99,97,108,108,0,0,0,69,120,116,32,115,116,111,114,97,103,101,32,115,112,97,99,101,32,101,120,104,97,117,115,116,101,100,0,0,0,0,0,73,108,108,101,103,97,108,32,111,117,116,98,111,117,110,100,32,40,97,119,97,121,32,102,114,111,109,32,72,97,115,107,101,108,108,41,32,116,121,112,101,0,0,0,0,0,0,0,114,101,115,116,114,105,99,116,101,100,32,116,121,112,101,32,115,121,110,111,110,121,109,115,0,0,0,0,0,0,0,0,82,101,97,100,105,110,103,32,102,105,108,101,32,34,37,115,34,58,10,0,0,0,0,0,115,101,108,0,0,0,0,0,60,117,110,107,110,111,119,110,80,114,101,100,105,99,97,116,101,62,0,0,0,0,0,0,82,101,115,111,117,114,99,101,69,120,104,97,117,115,116,101,100,0,0,0,0,0,0,0,112,114,105,109,70,108,111,97,116,84,111,68,111,117,98,108,101,0,0,0,0,0,0,0,83,104,111,119,32,107,105,110,100,32,101,114,114,111,114,115,32,105,110,32,102,117,108,108,0,0,0,0,0,0,0,0,91,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,58,97,108,115,111,0,0,0,101,120,112,111,114,116,0,0,37,115,37,100,32,61,32,104,117,103,115,45,62,103,101,116,83,116,97,98,108,101,80,116,114,52,40,41,59,10,0,0,82,101,115,111,117,114,99,101,66,117,115,121,0,0,0,0,112,114,105,109,68,111,117,98,108,101,84,111,70,108,111,97,116,0,0,0,0,0,0,0,38,0,0,0,0,0,0,0,58,99,100,0,0,0,0,0,85,110,107,110,111,119,110,32,109,111,100,117,108,101,32,96,37,115,39,10,0,0,0,0,102,111,114,101,105,103,110,0,37,115,37,100,32,61,32,104,117,103,115,45,62,103,101,116,70,111,114,101,105,103,110,40,41,59,10,0,0,0,0,0,103,99,67,83,116,97,99,107,0,0,0,0,0,0,0,0,78,111,83,117,99,104,84,104,105,110,103,0,0,0,0,0,112,114,105,109,73,110,116,84,111,68,111,117,98,108,101,0,115,116,97,116,105,99,0,0,58,63,0,0,0,0,0,0,110,101,101,100,80,114,105,109,115,95,104,117,103,115,0,0,37,115,37,100,32,61,32,104,117,103,115,45,62,103,101,116,70,117,110,80,116,114,40,41,59,10,0,0,0,0,0,0,65,108,114,101,97,100,121,69,120,105,115,116,115,0,0,0,112,114,105,109,73,110,116,84,111,70,108,111,97,116,0,0,119,114,97,112,112,101,114,0,77,117,108,116,105,112,108,101,32,102,105,108,101,110,97,109,101,115,32,110,111,116,32,112,101,114,109,105,116,116,101,100,0,0,0,0,0,0,0,0,113,117,97,108,105,102,105,101,100,0,0,0,0,0,0,0,37,115,37,100,32,61,32,104,117,103,115,45,62,103,101,116,80,116,114,40,41,59,10,0,73,79,69,114,114,111,114,0,105,110,116,84,111,82,97,116,105,111,0,0,0,0,0,0,110,101,119,116,121,112,101,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,0,0,100,121,110,97,109,105,99,0,78,111,32,99,117,114,114,101,110,116,32,100,101,102,105,110,105,116,105,111,110,32,102,111,114,32,110,97,109,101,32,34,37,115,34,0,0,0,0,0,104,105,100,105,110,103,0,0,37,115,37,100,32,61,32,104,117,103,115,45,62,103,101,116,65,100,100,114,40,41,59,10,0,0,0,0,0,0,0,0,102,97,105,108,0,0,0,0,100,111,117,98,108,101,84,111,82,97,116,105,111,0,0,0,102,111,114,101,105,103,110,32,105,109,112,111,114,116,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,0,0,0,77,117,108,116,105,112,108,101,32,110,97,109,101,115,32,110,111,116,32,112,101,114,109,105,116,116,101,100,0,0,0,0,105,109,112,111,114,116,0,0,37,115,37,100,32,61,32,104,117,103,115,45,62,103,101,116,66,111,111,108,40,41,59,10,0,0,0,0,0,0,0,0,10,42,42,42,32,79,102,32,116,121,112,101,32,32,32,32,58,32,0,0,0,0,0,0,62,62,0,0,0,0,0,0,100,111,117,98,108,101,84,111,82,97,116,105,111,110,97,108,0,0,0,0,0,0,0,0,102,111,114,101,105,103,110,32,101,120,112,111,114,116,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,0,0,0,78,111,32,110,97,109,101,32,115,112,101,99,105,102,105,101,100,0,0,0,0,0,0,0,37,100,32,111,98,115,101,114,118,97,116,105,111,110,115,32,114,101,99,111,114,100,101,100,10,0,0,0,0,0,0,0,109,111,100,117,108,101,0,0,114,101,102,117,116,101,80,97,116,0,0,0,0,0,0,0,37,115,37,100,32,61,32,104,117,103,115,45,62,103,101,116,68,111,117,98,108,101,40,41,59,10,0,0,0,0,0,0,62,62,61,0,0,0,0,0,102,108,111,97,116,84,111,82,97,116,105,111,110,97,108,0,82,101,112,101,97,116,101,100,32,118,97,114,105,97,98,108,101,32,34,37,115,34,32,105,110,32,112,97,116,116,101,114,110,0,0,0,0,0,0,0,67,97,110,110,111,116,32,102,105,110,100,32,109,111,100,117,108,101,32,34,37,115,34,0,78,117,109,0,0,0,0,0,37,115,37,100,32,61,32,104,117,103,115,45,62,103,101,116,70,108,111,97,116,40,41,59,10,0,0,0,0,0,0,0,114,101,116,117,114,110,0,0,114,97,116,105,111,110,97,108,84,111,70,108,111,97,116,0,73,110,116,101,103,101,114,32,107,32,105,110,32,40,110,43,107,41,32,112,97,116,116,101,114,110,32,109,117,115,116,32,98,101,32,62,32,48,0,0,85,110,107,110,111,119,110,32,109,111,100,117,108,101,32,37,115,10,0,0,0,0,0,0,80,114,101,108,117,100,101,0,37,115,37,100,32,61,32,104,117,103,115,45,62,103,101,116,87,111,114,100,54,52,40,41,59,10,0,0,0,0,0,0,109,97,120,66,111,117,110,100,0,0,0,0,0,0,0,0,114,97,116,105,111,110,97,108,84,111,68,111,117,98,108,101,0,0,0,0,0,0,0,0,83,101,99,111,110,100,32,97,114,103,117,109,101,110,116,32,105,110,32,40,110,43,107,41,32,112,97,116,116,101,114,110,32,109,117,115,116,32,98,101,32,97,110,32,105,110,116,101,103,101,114,0,0,0,0,0,69,109,112,116,121,82,101,99,0,0,0,0,0,0,0,0,97,108,108,0,0,0,0,0,10,42,42,42,32,65,110,100,32,99,111,110,115,116,114,97,105,110,116,32,32,32,58,32,0,0,0,0,0,0,0,0,72,117,103,115,46,80,114,101,108,117,100,101,0,0,0,0,67,104,97,114,97,99,116,101,114,32,115,116,114,105,110,103,32,115,116,111,114,97,103,101,32,115,112,97,99,101,32,101,120,104,97,117,115,116,101,100,0,0,0,0,0,0,0,0,37,115,37,100,32,61,32,104,117,103,115,45,62,103,101,116,87,111,114,100,51,50,40,41,59,10,0,0,0,0,0,0,34,37,115,34,32,117,115,101,100,32,97,115,32,98,111,116,104,32,99,108,97,115,115,32,97,110,100,32,116,121,112,101,32,99,111,110,115,116,114,117,99,116,111,114,0,0,0,0,10,37,115,0,0,0,0,0,95,83,69,76,0,0,0,0,109,105,110,66,111,117,110,100,0,0,0,0,0,0,0,0,112,114,105,109,80,109,83,117,98,0,0,0,0,0,0,0,65,108,119,97,121,115,32,115,104,111,119,32,119,104,105,99,104,32,109,111,100,117,108,101,115,32,97,114,101,32,108,111,97,100,101,100,0,0,0,0,70,105,114,115,116,32,97,114,103,117,109,101,110,116,32,105,110,32,40,110,43,107,41,32,112,97,116,116,101,114,110,32,109,117,115,116,32,98,101,32,97,32,118,97,114,105,97,98,108,101,0,0,0,0,0,0,32,32,45,45,32,112,114,105,109,105,116,105,118,101,0,0,67,111,109,112,105,108,101,100,32,99,111,100,101,32,116,111,111,32,99,111,109,112,108,101,120,0,0,0,0,0,0,0,111,98,106,84,111,83,116,114,0,0,0,0,0,0,0,0,37,115,0,0,0,0,0,0,61,62,0,0,0,0,0,0,37,115,37,100,32,61,32,104,117,103,115,45,62,103,101,116,87,111,114,100,49,54,40,41,59,10,0,0,0,0,0,0,43,0,0,0,0,0,0,0,112,114,105,109,80,109,78,112,107,0,0,0,0,0,0,0,115,0,0,0,0,0,0,0,37,115,46,37,115,0,0,0,109,97,105,110,0,0,0,0,46,0,0,0,0,0,0,0,37,115,37,100,32,61,32,104,117,103,115,45,62,103,101,116,87,111,114,100,56,40,41,59,10,0,0,0,0,0,0,0,37,100,125,125,0,0,0,0,42,0,0,0,0,0,0,0,112,114,105,109,114,101,116,73,79,0,0,0,0,0,0,0,10,40,37,100,32,110,97,109,101,115,32,108,105,115,116,101,100,41,10,0,0,0,0,0,33,0,0,0,0,0,0,0,37,115,37,100,32,61,32,104,117,103,115,45,62,103,101,116,73,110,116,54,52,40,41,59,10,0,0,0,0,0,0,0,37,115,0,0,0,0,0,0,114,97,110,103,101,0,0,0,112,114,105,109,80,109,70,108,116,0,0,0,0,0,0,0,67,111,110,115,116,114,117,99,116,111,114,32,34,37,115,34,32,109,117,115,116,32,104,97,118,101,32,101,120,97,99,116,108,121,32,37,100,32,97,114,103,117,109,101,110,116,37,115,32,105,110,32,112,97,116,116,101,114,110,0,0,0,0,0,78,111,32,110,97,109,101,115,32,115,101,108,101,99,116,101,100,0,0,0,0,0,0,0,126,0,0,0,0,0,0,0,37,115,37,100,32,61,32,104,117,103,115,45,62,103,101,116,73,110,116,51,50,40,41,59,10,0,0,0,0,0,0,0,105,110,82,97,110,103,101,0,112,114,105,109,80,109,73,110,116,101,103,101,114,0,0,0,100,97,116,97,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,0,0,0,0,0,34,37,115,34,32,105,115,32,110,111,116,32,97,32,100,97,116,97,32,99,111,110,115,116,114,117,99,116,111,114,0,0,87,97,114,110,105,110,103,58,32,117,110,107,110,111,119,110,32,116,111,103,103,108,101,32,96,37,99,39,59,32,105,103,110,111,114,105,110,103,46,10,0,0,0,0,0,0,0,0,58,113,117,105,116,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,101,120,105,116,32,72,117,103,115,32,105,110,116,101,114,112,114,101,116,101,114,10,0,0,0,0,0,0,45,62,0,0,0,0,0,0,37,115,37,100,32,61,32,104,117,103,115,45,62,103,101,116,73,110,116,49,54,40,41,59,10,0,0,0,0,0,0,0,105,110,100,101,120,0,0,0,112,114,105,109,80,109,73,110,116,0,0,0,0,0,0,0,73,108,108,101,103,97,108,32,117,115,101,32,111,102,32,113,117,97,108,105,102,105,101,100,32,118,97,114,105,97,98,108,101,32,105,110,32,112,97,116,116,101,114,110,0,0,0,0,72,85,71,83,70,76,65,71,83,0,0,0,0,0,0,0,58,118,101,114,115,105,111,110,32,32,32,32,32,32,32,32,32,32,32,32,112,114,105,110,116,32,72,117,103,115,32,118,101,114,115,105,111,110,10,0,60,45,0,0,0,0,0,0,37,115,37,100,32,61,32,104,117,103,115,45,62,103,101,116,73,110,116,56,40,41,59,10,0,0,0,0,0,0,0,0,35,105,110,99,108,117,100,101,32,34,72,115,70,70,73,46,104,34,10,0,0,0,0,0,67,97,110,110,111,116,32,102,105,110,100,32,34,115,104,111,119,34,32,102,117,110,99,116,105,111,110,32,102,111,114,32,73,79,32,114,101,115,117,108,116,58,0,0,0,0,0,0,114,101,97,100,115,80,114,101,99,0,0,0,0,0,0,0,112,114,105,109,67,111,109,112,65,117,120,0,0,0,0,0,73,108,108,101,103,97,108,32,114,101,99,111,114,100,32,112,97,116,116,101,114,110,0,0,85,110,119,97,110,116,101,100,32,99,104,97,114,97,99,116,101,114,115,32,97,102,116,101,114,32,111,112,116,105,111,110,32,115,101,116,116,105,110,103,32,34,37,115,34,0,0,0,58,103,99,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,102,111,114,99,101,32,103,97,114,98,97,103,101,32,99,111,108,108,101,99,116,105,111,110,10,0,0,0,73,110,116,101,114,110,97,108,58,32,111,98,115,101,114,118,97,116,105,111,110,32,115,97,110,105,116,121,32,99,111,117,110,116,101,114,32,62,32,48,10,0,0,0,0,0,0,0,43,0,0,0,0,0,0,0,109,97,116,99,104,80,97,116,0,0,0,0,0,0,0,0,37,115,37,100,32,61,32,104,117,103,115,45,62,103,101,116,73,110,116,40,41,59,10,0,115,104,111,119,115,80,114,101,99,0,0,0,0,0,0,0,114,97,110,103,101,83,105,122,101,0,0,0,0,0,0,0,101,120,116,101,110,115,105,98,108,101,32,114,101,99,111,114,100,115,0,0,0,0,0,0,79,112,116,105,111,110,32,115,101,116,116,105,110,103,32,34,37,115,34,32,105,115,32,116,111,111,32,108,97,114,103,101,0,0,0,0,0,0,0,0,58,99,100,32,100,105,114,32,32,32,32,32,32,32,32,32,32,32,32,32,99,104,97,110,103,101,32,100,105,114,101,99,116,111,114,121,10,0,0,0,45,0,0,0,0,0,0,0,37,115,37,100,32,61,32,104,117,103,115,45,62,103,101,116,67,104,97,114,40,41,59,10,0,0,0,0,0,0,0,0,62,0,0,0,0,0,0,0,108,101,120,0,0,0,0,0,73,108,108,101,103,97,108,32,116,117,112,108,101,32,112,97,116,116,101,114,110,0,0,0,77,105,115,115,105,110,103,32,105,110,116,101,103,101,114,32,105,110,32,111,112,116,105,111,110,32,115,101,116,116,105,110,103,32,34,37,115,34,0,0,58,102,105,110,100,32,60,110,97,109,101,62,32,32,32,32,32,32,32,32,101,100,105,116,32,109,111,100,117,108,101,32,99,111,110,116,97,105,110,105,110,103,32,100,101,102,105,110,105,116,105,111,110,32,111,102,32,110,97,109,101,10,0,0,124,0,0,0,0,0,0,0,104,117,103,115,45,62,103,101,116,85,110,105,116,40,41,59,10,0,0,0,0,0,0,0,60,61,0,0,0,0,0,0,114,101,97,100,80,97,114,101,110,0,0,0,0,0,0,0,73,108,108,101,103,97,108,32,112,97,116,116,101,114,110,32,115,121,110,116,97,120,0,0,67,97,110,110,111,116,32,99,104,97,110,103,101,32,104,101,97,112,32,115,105,122,101,10,0,0,0,0,0,0,0,0,82,101,99,0,0,0,0,0,58,109,97,105,110,32,60,97,114,117,109,101,110,116,115,62,32,32,32,32,114,117,110,32,116,104,101,32,109,97,105,110,32,102,117,110,99,116,105,111,110,32,119,105,116,104,32,116,104,101,32,103,105,118,101,110,32,97,114,103,117,109,101,110,116,115,10,0,0,0,0,0,10,42,42,42,32,67,111,110,115,116,114,97,105,110,116,32,32,32,32,32,32,32,58,32,0,0,0,0,0,0,0,0,92,0,0,0,0,0,0,0,71,101,110,101,114,97,116,101,100,32,110,97,109,101,32,39,37,115,37,115,39,32,101,120,99,101,101,100,115,32,108,105,109,105,116,32,111,102,32,37,100,0,0,0,0,0,0,0,32,32,32,32,114,101,116,117,114,110,59,10,0,0,0,0,10,0,0,0,0,0,0,0,10,72,117,103,115,32,115,101,115,115,105,111,110,32,102,111,114,58,0,0,0,0,0,0,105,102,0,0,0,0,0,0,99,111,109,112,97,114,101,0,114,101,97,100,70,105,101,108,100,0,0,0,0,0,0,0,81,117,97,108,105,102,121,32,110,97,109,101,115,32,119,104,101,110,32,112,114,105,110,116,105,110,103,0,0,0,0,0,112,97,116,116,101,114,110,0,72,97,115,107,101,108,108,32,57,56,32,99,111,109,112,97,116,105,98,105,108,105,116,121,32,99,97,110,110,111,116,32,98,101,32,99,104,97,110,103,101,100,32,119,104,105,108,101,32,116,104,101,32,105,110,116,101,114,112,114,101,116,101,114,32,105,115,32,114,117,110,110,105,110,103,10,0,0,0,0,32,32,45,45,32,115,101,108,101,99,116,111,114,32,102,117,110,99,116,105,111,110,0,0,98,97,100,32,76,97,98,101,108,0,0,0,0,0,0,0,58,98,114,111,119,115,101,32,60,109,111,100,117,108,101,115,62,32,32,32,98,114,111,119,115,101,32,110,97,109,101,115,32,101,120,112,111,114,116,101,100,32,98,121,32,60,109,111,100,117,108,101,115,62,10,0,64,0,0,0,0,0,0,0,32,32,32,32,114,101,116,117,114,110,32,37,115,37,100,59,10,0,0,0,0,0,0,0,61,61,0,0,0,0,0,0,115,104,111,119,80,97,114,101,110,0,0,0,0,0,0,0,73,108,108,101,103,97,108,32,115,121,110,116,97,120,32,105,110,32,37,115,32,116,121,112,101,32,97,110,110,111,116,97,116,105,111,110,0,0,0,0,57,56,0,0,0,0,0,0,58,105,110,102,111,32,60,110,97,109,101,115,62,32,32,32,32,32,32,32,100,101,115,99,114,105,98,101,32,110,97,109,101,100,32,111,98,106,101,99,116,115,10,0,0,0,0,0,72,117,103,115,0,0,0,0,46,46,0,0,0,0,0,0,32,32,32,32,104,117,103,115,45,62,112,117,116,80,116,114,40,38,37,115,41,59,10,0,123,123,71,99,0,0,0,0,102,114,111,109,68,111,117,98,108,101,0,0,0,0,0,0,115,104,111,119,70,105,101,108,100,0,0,0,0,0,0,0,112,97,116,116,101,114,110,32,116,121,112,101,0,0,0,0,69,82,82,79,82,58,32,43,76,32,105,115,32,110,111,32,108,111,110,103,101,114,32,115,117,112,112,111,114,116,101,100,32,102,111,114,32,102,102,105,104,117,103,115,32,45,32,112,117,116,32,116,104,101,32,97,114,103,117,109,101,110,116,32,40,119,105,116,104,111,117,116,32,43,76,41,32,42,97,102,116,101,114,42,32,116,104,101,32,109,111,100,117,108,101,32,45,32,105,103,110,111,114,105,110,103,32,105,116,46,10,0,58,110,97,109,101,115,32,91,112,97,116,93,32,32,32,32,32,32,32,32,108,105,115,116,32,110,97,109,101,115,32,99,117,114,114,101,110,116,108,121,32,105,110,32,115,99,111,112,101,10,0,0,0,0,0,0,61,0,0,0,0,0,0,0,32,32,32,32,104,117,103,115,45,62,112,117,116,70,117,110,80,116,114,40,40,72,115,70,117,110,80,116,114,41,38,37,115,41,59,10,0,0,0,0,102,114,111,109,73,110,116,101,103,101,114,0,0,0,0,0,43,43,0,0,0,0,0,0,112,97,116,116,101,114,110,32,116,121,112,101,32,97,110,110,111,116,97,116,105,111,110,115,0,0,0,0,0,0,0,0,69,82,82,79,82,58,32,105,103,110,111,114,105,110,103,32,111,98,115,111,108,101,116,101,32,37,99,37,99,32,111,112,116,105,111,110,46,10,0,0,58,115,101,116,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,104,101,108,112,32,111,110,32,99,111,109,109,97,110,100,32,108,105,110,101,32,111,112,116,105,111,110,115,10,0,0,0,0,0,0,0,58,58,0,0,0,0,0,0,32,32,32,32,104,117,103,115,45,62,97,112,40,37,100,41,59,10,0,0,0,0,0,0,102,114,111,109,73,110,116,0,46,0,0,0,0,0,0,0,114,101,115,117,108,116,0,0,116,121,112,101,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,0,0,0,0,0,69,82,82,79,82,58,32,117,110,97,98,108,101,32,116,111,32,108,111,99,97,116,101,32,80,114,101,108,117,100,101,32,119,105,116,104,32,110,101,119,32,115,117,102,102,105,120,32,108,105,115,116,58,32,34,37,115,34,32,45,32,105,103,110,111,114,105,110,103,32,105,116,46,10,0,0,0,0,0,0,58,115,101,116,32,60,111,112,116,105,111,110,115,62,32,32,32,32,32,32,115,101,116,32,99,111,109,109,97,110,100,32,108,105,110,101,32,111,112,116,105,111,110,115,10,0,0,0,100,108,101,116,0,0,0,0,32,32,32,32,105,102,32,40,104,117,103,115,45,62,114,117,110,73,79,40,37,100,41,41,32,123,10,0,0,0,0,0,71,84,0,0,0,0,0,0,111,116,104,101,114,119,105,115,101,0,0,0,0,0,0,0,68,101,112,101,110,100,101,110,99,121,32,97,110,97,108,121,115,105,115,0,0,0,0,0,46,104,115,58,46,108,104,115,0,0,0,0,0,0,0,0,58,63,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,100,105,115,112,108,97,121,32,116,104,105,115,32,108,105,115,116,32,111,102,32,99,111,109,109,97,110,100,115,10,0,0,0,0,0,0,119,105,116,104,0,0,0,0,32,32,32,32,104,117,103,115,45,62,112,117,116,73,110,116,40,104,117,103,115,95,115,116,97,98,108,101,95,102,111,114,95,37,115,41,59,10,0,0,35,105,110,99,108,117,100,101,32,60,115,116,100,108,105,98,46,104,62,10,0,0,0,0,10,0,0,0,0,0,0,0,69,81,0,0,0,0,0,0,105,100,0,0,0,0,0,0,68,101,99,108,97,114,97,116,105,111,110,32,111,102,32,37,115,32,34,37,115,34,32,99,108,97,115,104,101,115,32,119,105,116,104,32,105,109,112,111,114,116,0,0,0,0,0,0,69,82,82,79,82,58,32,117,110,97,98,108,101,32,116,111,32,108,111,99,97,116,101,32,80,114,101,108,117,100,101,32,97,108,111,110,103,32,110,101,119,32,112,97,116,104,58,32,34,37,115,34,32,45,32,105,103,110,111,114,105,110,103,32,105,116,46,10,0,0,0,0,58,116,121,112,101,32,60,101,120,112,114,62,32,32,32,32,32,32,32,32,112,114,105,110,116,32,116,121,112,101,32,111,102,32,101,120,112,114,101,115,115,105,111,110,10,0,0,0,83,116,114,105,110,103,32,115,116,111,114,97,103,101,32,115,112,97,99,101,32,101,120,104,97,117,115,116,101,100,0,0,41,10,0,0,0,0,0,0,105,110,115,116,97,110,99,101,0,0,0,0,0,0,0,0,114,101,109,80,97,116,49,0,115,116,97,116,105,99,32,72,117,103,115,83,116,97,98,108,101,80,116,114,32,104,117,103,115,95,115,116,97,98,108,101,95,102,111,114,95,37,115,32,61,32,45,49,59,10,0,0,76,84,0,0,0,0,0,0,124,124,0,0,0,0,0,0,77,117,108,116,105,112,108,101,32,100,101,99,108,97,114,97,116,105,111,110,115,32,102,111,114,32,37,115,32,34,37,115,34,0,0,0,0,0,0,0,80,114,101,108,117,100,101,0,60,101,120,112,114,62,32,32,32,32,32,32,32,32,32,32,32,32,32,32,101,118,97,108,117,97,116,101,32,101,120,112,114,101,115,115,105,111,110,10,0,0,0,0,0,0,0,0,99,108,97,115,115,0,0,0,10,101,120,116,101,114,110,32,0,0,0,0,0,0,0,0,82,105,103,104,116,0,0,0,38,38,0,0,0,0,0,0,118,97,114,105,97,98,108,101,0,0,0,0,0,0,0,0,58,109,111,100,117,108,101,32,60,109,111,100,117,108,101,62,32,32,32,32,115,101,116,32,109,111,100,117,108,101,32,102,111,114,32,101,118,97,108,117,97,116,105,110,103,32,101,120,112,114,101,115,115,105,111,110,115,10,0,0,0,0,0,0,109,100,111,0,0,0,0,0,32,32,32,32,104,117,103,115,45,62,112,117,116,65,100,100,114,40,116,104,117,110,107,41,59,10,32,32,32,32,104,117,103,115,45,62,114,101,116,117,114,110,73,79,40,104,117,103,115,95,114,111,111,116,44,49,41,59,10,125,10,0,0,0,76,101,102,116,0,0,0,0,115,110,100,0,0,0,0,0,78,111,32,116,111,112,32,108,101,118,101,108,32,98,105,110,100,105,110,103,32,111,102,32,34,37,115,34,32,102,111,114,32,114,101,115,116,114,105,99,116,101,100,32,115,121,110,111,110,121,109,32,34,37,115,34,0,0,0,0,0,0,0,0,46,58,123,72,111,109,101,125,47,108,105,98,47,104,117,103,115,47,112,97,99,107,97,103,101,115,47,42,58,47,117,115,114,47,108,111,99,97,108,47,108,105,98,47,104,117,103,115,47,112,97,99,107,97,103,101,115,47,42,58,123,72,117,103,115,125,47,112,97,99,107,97,103,101,115,47,42,0,0,0,46,58,123,72,111,109,101,125,47,108,105,98,47,104,117,103,115,47,112,97,99,107,97,103,101,115,47,42,58,47,117,115,114,47,108,111,99,97,108,47,108,105,98,47,104,117,103,115,47,112,97,99,107,97,103,101,115,47,42,58,123,72,117,103,115,125,47,112,97,99,107,97,103,101,115,47,42,0,0,0,69,109,112,116,121,82,111,119,0,0,0,0,0,0,0,0,58,101,100,105,116,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,101,100,105,116,32,108,97,115,116,32,109,111,100,117,108,101,10,0,0,0,67,111,110,115,116,114,97,105,110,116,115,32,97,114,101,32,110,111,116,32,99,111,110,115,105,115,116,101,110,116,32,119,105,116,104,32,102,117,110,99,116,105,111,110,97,108,32,100,101,112,101,110,100,101,110,99,121,0,0,0,0,0,0,0,100,111,0,0,0,0,0,0,37,115,37,115,0,0,0,0,123,10,32,32,32,32,72,117,103,115,83,116,97,98,108,101,80,116,114,32,97,114,103,49,32,61,32,104,117,103,115,45,62,109,97,107,101,83,116,97,98,108,101,80,116,114,52,40,41,59,10,32,32,32,32,118,111,105,100,42,32,116,104,117,110,107,32,61,32,104,117,103,115,45,62,109,107,84,104,117,110,107,40,40,72,115,70,117,110,80,116,114,41,37,115,44,97,114,103,49,41,59,10,0,37,115,46,37,115,32,0,0,82,101,99,117,114,115,105,118,101,32,105,109,112,111,114,116,32,100,101,112,101,110,100,101,110,99,121,32,98,101,116,119,101,101,110,32,34,37,115,34,32,97,110,100,32,34,37,115,34,0,0,0,0,0,0,0,95,73,70,0,0,0,0,0,78,111,116,104,105,110,103,0,114,0,0,0,0,0,0,0,102,115,116,0,0,0,0,0,80,114,105,110,116,32,110,111,116,104,105,110,103,32,116,111,32,115,104,111,119,32,112,114,111,103,114,101,115,115,0,0,37,115,32,99,108,97,115,115,32,100,111,101,115,32,110,111,116,32,100,101,102,105,110,101,32,116,104,101,32,109,102,105,120,32,109,101,116,104,111,100,0,0,0,0,0,0,0,0,32,32,45,45,32,99,108,97,115,115,32,109,101,109,98,101,114,0,0,0,0,0,0,0,109,97,107,101,0,0,0,0,58,101,100,105,116,32,60,102,105,108,101,110,97,109,101,62,32,32,32,32,101,100,105,116,32,102,105,108,101,10,0,0,100,101,114,105,118,105,110,103,0,0,0,0,0,0,0,0,32,32,32,32,32,32,32,32,101,120,105,116,40,104,117,103,115,45,62,103,101,116,73,110,116,40,41,41,59,10,32,32,32,32,125,10,0,0,0,0,74,117,115,116,0,0,0,0,101,110,117,109,70,114,111,109,84,104,101,110,84,111,0,0,10,42,42,42,32,80,111,115,115,105,98,108,101,32,99,97,117,115,101,58,32,34,37,115,34,32,109,111,100,117,108,101,32,110,111,116,32,105,109,112,111,114,116,101,100,0,0,0,58,114,101,108,111,97,100,32,32,32,32,32,32,32,32,32,32,32,32,32,114,101,112,101,97,116,32,108,97,115,116,32,108,111,97,100,32,99,111,109,109,97,110,100,10,0,0,0,71,97,114,98,97,103,101,32,99,111,108,108,101,99,116,105,111,110,32,114,101,99,111,118,101,114,101,100,32,37,100,32,99,101,108,108,115,10,0,0,100,101,102,97,117,108,116,0,32,32,32,32,105,102,32,40,104,117,103,115,45,62,114,117,110,37,115,40,37,100,41,41,32,123,10,0,0,0,0,0,83,116,114,105,110,103,32,115,116,111,114,97,103,101,32,115,112,97,99,101,32,101,120,104,97,117,115,116,101,100,0,0,84,114,117,101,0,0,0,0,101,110,117,109,70,114,111,109,84,111,0,0,0,0,0,0,37,115,32,99,108,97,115,115,32,110,111,116,32,105,110,32,115,99,111,112,101,0,0,0,58,97,108,115,111,32,60,102,105,108,101,110,97,109,101,115,62,32,32,32,114,101,97,100,32,97,100,100,105,116,105,111,110,97,108,32,109,111,100,117,108,101,115,10,0,0,0,0,110,101,119,116,121,112,101,0,32,32,32,32,104,117,103,115,45,62,100,101,114,101,102,83,116,97,98,108,101,80,116,114,52,40,102,117,110,49,41,59,10,0,0,0,0,0,0,0,40,37,108,117,32,114,101,100,117,99,116,105,111,110,37,115,44,32,0,0,0,0,0,0,70,97,108,115,101,0,0,0,101,110,117,109,70,114,111,109,84,104,101,110,0,0,0,0,109,102,105,120,0,0,0,0,72,117,103,115,32,69,120,116,101,110,115,105,111,110,115,32,40,45,57,56,41,0,0,0,58,108,111,97,100,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,99,108,101,97,114,32,97,108,108,32,102,105,108,101,115,32,101,120,99,101,112,116,32,112,114,101,108,117,100,101,10,0,0,0,0,0,112,114,105,109,105,116,105,118,101,0,0,0,0,0,0,0,10,123,10,0,0,0,0,0,73,79,0,0,0,0,0,0,114,117,110,73,79,58,32,98,97,100,32,114,101,116,117,114,110,32,118,97,108,117,101,0,101,110,117,109,70,114,111,109,0,0,0,0,0,0,0,0,77,111,110,97,100,70,105,120,0,0,0,0,0,0,0,0,105,109,112,111,114,116,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,0,0,0,72,97,115,107,101,108,108,32,57,56,32,40,43,57,56,41,0,0,0,0,0,0,0,0,114,117,110,73,79,58,32,117,110,98,97,108,97,110,99,101,100,32,115,116,97,99,107,32,40,37,100,41,0,0,0,0,114,117,110,73,79,58,32,117,110,99,97,117,103,104,116,32,101,114,114,111,114,0,0,0,58,108,111,97,100,32,60,102,105,108,101,110,97,109,101,115,62,32,32,32,108,111,97,100,32,109,111,100,117,108,101,115,32,102,114,111,109,32,115,112,101,99,105,102,105,101,100,32,102,105,108,101,115,10,0,0,83,116,97,98,108,101,32,112,111,105,110,116,101,114,32,116,97,98,108,101,32,102,117,108,108,0,0,0,0,0,0,0,67,97,110,39,116,32,102,105,110,100,32,113,117,97,108,105,102,105,101,100,32,110,97,109,101,32,39,37,115,46,37,115,39,0,0,0,0,0,0,0,105,110,102,105,120,114,0,0,109,97,108,108,111,99,66,121,116,101,115,82,87,88,58,32,102,97,105,108,101,100,32,116,111,32,112,114,111,116,101,99,116,32,48,120,37,112,10,0,70,111,114,101,105,103,110,32])
.concat([105,109,112,111,114,116,32,119,114,97,112,112,101,114,32,105,115,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,111,110,32,116,104,105,115,32,97,114,99,104,105,116,101,99,116,117,114,101,0,0,0,0,115,116,97,116,105,99,32,0,100,105,115,99,114,65,114,105,116,121,0,0,0,0,0,0,103,101,116,70,111,114,101,105,103,110,80,116,114,58,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,32,105,110,32,72,117,103,115,0,0,112,117,116,70,111,114,101,105,103,110,80,116,114,58,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,32,105,110,32,72,117,103,115,0,0,77,111,110,97,100,0,0,0,112,114,105,109,83,101,108,0,102,108,105,112,0,0,0,0,67,111,110,116,114,111,108,46,77,111,110,97,100,46,70,105,120,0,0,0,0,0,0,0,10,67,111,109,112,97,116,105,98,105,108,105,116,121,32,32,32,58,32,37,115,0,0,0,73,120,46,105,110,100,101,120,58,32,73,110,100,101,120,32,111,117,116,32,111,102,32,114,97,110,103,101,46,0,0,0,116,111,69,110,117,109,58,32,111,117,116,32,111,102,32,114,97,110,103,101,0,0,0,0,99,32,105,115,32,116,104,101,32,102,105,114,115,116,32,99,104,97,114,97,99,116,101,114,32,105,110,32,116,104,101,32,102,117,108,108,32,110,97,109,101,46,10,10,0,0,0,0,97,114,103,117,109,101,110,116,32,111,117,116,32,111,102,32,114,97,110,103,101,0,0,0,99,104,114,58,32,111,117,116,32,111,102,32,114,97,110,103,101,0,0,0,0,0,0,0,105,110,102,105,120,108,0,0,117,110,115,97,102,101,80,116,114,84,111,73,110,116,0,0,117,110,115,97,102,101,80,116,114,69,113,0,0,0,0,0,10,115,116,97,116,105,99,32,0,0,0,0,0,0,0,0,47,42,32,77,97,99,104,105,110,101,32,103,101,110,101,114,97,116,101,100,32,102,105,108,101,44,32,100,111,32,110,111,116,32,109,111,100,105,102,121,32,42,47,10,0,0,0,0,115,101,116,66,107,112,116,0,98,107,112,116,0,0,0,0,111,98,115,101,114,118,101,0,10,42,42,42,32,69,120,112,114,101,115,115,105,111,110,32,58,32,0,0,0,0,0,0,78,117,109,0,0,0,0,0,112,114,105,109,85,110,105,71,101,110,67,97,116,0,0,0,110,101,103,97,116,101,0,0,72,117,103,115,46,84,114,101,120,46,69,113,82,101,99,82,111,119,32,110,111,116,32,105,110,32,115,99,111,112,101,0,10,80,114,101,112,114,111,99,101,115,115,111,114,32,32,32,32,58,32,45,70,0,0,0,116,111,84,105,116,108,101,0,116,111,76,111,119,101,114,0,76,73,83,84,32,79,70,32,67,79,77,77,65,78,68,83,58,32,32,65,110,121,32,99,111,109,109,97,110,100,32,109,97,121,32,98,101,32,97,98,98,114,101,118,105,97,116,101,100,32,116,111,32,58,99,32,119,104,101,114,101,10,0,0,116,111,85,112,112,101,114,0,44,32,37,117,32,103,97,114,98,97,103,101,32,99,111,108,108,101,99,116,105,111,110,37,115,0,0,0,0,0,0,0,105,115,80,114,105,110,116,0,105,110,102,105,120,0,0,0,105,115,65,108,112,104,97,78,117,109,0,0,0,0,0,0,101,109,112,116,121,77,97,116,99,104,0,0,0,0,0,0,105,115,65,108,112,104,97,0,104,117,103,115,45,62,103,101,116,70,117,110,80,116,114,40,41,59,10,0,0,0,0,0,105,115,76,111,119,101,114,0,105,115,85,112,112,101,114,0,112,114,105,109,77,97,120,67,104,97,114,0,0,0,0,0,70,108,111,97,116,105,110,103,0,0,0,0,0,0,0,0,115,101,113,0,0,0,0,0,37,115,32,105,110,32,112,97,116,116,101,114,110,0,0,0,112,114,105,109,80,108,117,115,73,110,116,0,0,0,0,0,72,117,103,115,46,84,114,101,120,46,83,104,111,119,82,101,99,82,111,119,32,99,108,97,115,115,32,110,111,116,32,105,110,32,115,99,111,112,101,0,10,69,100,105,116,111,114,32,115,101,116,116,105,110,103,32,32,58,32,45,69,0,0,0,115,116,114,105,99,116,0,0,112,114,105,109,85,110,115,97,102,101,67,111,101,114,99,101,0,0,0,0,0,0,0,0,84,121,112,101,32,58,63,32,102,111,114,32,104,101,108,112,10,0,0,0,0,0,0,0,112,114,105,109,67,109,112,68,111,117,98,108,101,0,0,0,112,114,105,109,69,113,68,111,117,98,108,101,0,0,0,0,105,110,0,0,0,0,0,0,112,114,105,109,67,109,112,70,108,111,97,116,0,0,0,0,112,114,105,109,69,113,70,108,111,97,116,0,0,0,0,0,32,32,32,32,37,115,32,61,32,0,0,0,0,0,0,0,112,114,105,109,67,109,112,67,104,97,114,0,0,0,0,0,112,114,105,109,69,113,67,104,97,114,0,0,0,0,0,0,112,114,105,109,67,109,112,87,111,114,100,0,0,0,0,0,70,114,97,99,116,105,111,110,97,108,0,0,0,0,0,0,112,114,105,109,69,113,87,111,114,100,0,0,0,0,0,0,101,120,116,114,97,32,116,114,97,105,108,105,110,103,32,96,92,39,0,0,0,0,0,0,95,97,100,100,69,118,0,0,72,117,103,115,46,84,114,101,120,46,101,113,82,101,99,82,111,119,32,110,111,116,32,105,110,32,115,99,111,112,101,0,10,83,111,117,114,99,101,32,115,117,102,102,105,120,101,115,32,58,32,45,83,0,0,0,112,114,105,109,67,109,112,73,110,116,0,0,0,0,0,0,112,114,105,109,69,113,73,110,116,0,0,0,0,0,0,0,67,111,109,109,97,110,100,32,110,111,116,32,114,101,99,111,103,110,105,115,101,100,46,32,32,0,0,0,0,0,0,0,112,114,105,109,67,109,112,80,116,114,0,0,0,0,0,0,112,114,105,109,69,113,80,116,114,0,0,0,0,0,0,0,108,101,116,0,0,0,0,0,109,105,110,117,115,80,116,114,0,0,0,0,0,0,0,0,97,108,105,103,110,80,116,114,0,0,0,0,0,0,0,0,59,10,0,0,0,0,0,0,112,108,117,115,80,116,114,0,110,117,108,108,80,116,114,0,112,114,105,109,82,97,116,105,111,110,97,108,84,111,68,111,117,98,108,101,0,0,0,0,82,101,97,108,70,108,111,97,116,0,0,0,0,0,0,0,112,114,105,109,82,97,116,105,111,110,97,108,84,111,70,108,111,97,116,0,0,0,0,0,109,105,115,115,105,110,103,32,96,93,39,0,0,0,0,0,114,101,99,69,113,0,0,0,72,117,103,115,46,84,114,101,120,46,115,104,111,119,82,101,99,82,111,119,32,110,111,116,32,105,110,32,115,99,111,112,101,0,0,0,0,0,0,0,10,83,101,97,114,99,104,32,112,97,116,104,32,32,32,32,32,58,32,45,80,0,0,0,112,114,105,109,87,111,114,100,84,111,73,110,116,0,0,0,58,0,0,0,0,0,0,0,112,114,105,109,73,110,116,84,111,87,111,114,100,0,0,0,72,79,77,69,0,0,0,0,117,110,105,102,105,99,97,116,105,111,110,32,119,111,117,108,100,32,103,105,118,101,32,105,110,102,105,110,105,116,101,32,107,105,110,100,0,0,0,0,112,114,105,109,67,104,97,114,84,111,73,110,116,0,0,0,112,114,105,109,73,110,116,84,111,67,104,97,114,0,0,0,119,104,101,114,101,0,0,0,112,114,105,109,68,111,117,98,108,101,69,110,99,111,100,101,0,0,0,0,0,0,0,0,115,116,111,114,97,103,101,32,115,112,97,99,101,32,101,120,104,97,117,115,116,101,100,32,102,111,114,32,105,110,116,101,114,110,97,108,32,108,105,116,101,114,97,108,32,115,116,114,105,110,103,0,0,0,0,0,112,114,105,109,68,111,117,98,108,101,68,101,99,111,100,101,0,0,0,0,0,0,0,0,73,100,0,0,0,0,0,0,112,114,105,109,68,111,117,98,108,101,77,97,120,69,120,112,0,0,0,0,0,0,0,0,112,114,105,109,68,111,117,98,108,101,77,105,110,69,120,112,0,0,0,0,0,0,0,0,10,42,42,42,32,67,111,117,108,100,32,114,101,102,101,114,32,116,111,58,32,0,0,0,112,114,105,109,68,111,117,98,108,101,68,105,103,105,116,115,0,0,0,0,0,0,0,0,67,97,110,39,116,32,102,105,110,100,32,105,109,112,111,114,116,101,100,32,109,111,100,117,108,101,32,34,37,115,34,0,102,97,105,108,0,0,0,0,82,101,97,108,70,114,97,99,0,0,0,0,0,0,0,0,112,114,105,109,68,111,117,98,108,101,82,97,100,105,120,0,115,0,0,0,0,0,0,0,79,98,115,101,114,118,97,116,105,111,110,32,115,116,111,114,97,103,101,32,115,112,97,99,101,32,101,120,104,97,117,115,116,101,100,0,0,0,0,0,95,114,101,99,69,113,0,0,80,114,105,110,116,32,100,111,116,115,32,116,111,32,115,104,111,119,32,112,114,111,103,114,101,115,115,0,0,0,0,0,10,42,42,42,32,80,111,115,115,105,98,108,101,32,99,97,117,115,101,58,32,34,72,117,103,115,46,84,114,101,120,34,32,109,111,100,117,108,101,32,110,111,116,32,105,109,112,111,114,116,101,100,0,0,0,0,32,45,99,37,100,0,0,0,112,114,105,109,68,111,117,98,108,101,84,111,73,110,116,0,32,32,45,45,32,100,97,116,97,32,99,111,110,115,116,114,117,99,116,111,114,0,0,0,98,117,105,108,100,0,0,0,112,114,105,109,83,113,114,116,68,111,117,98,108,101,0,0,85,110,97,98,108,101,32,116,111,32,99,104,97,110,103,101,32,116,111,32,100,105,114,101,99,116,111,114,121,32,34,37,115,34,0,0,0,0,0,0,112,114,105,109,76,111,103,68,111,117,98,108,101,0,0,0,112,114,105,109,69,120,112,68,111,117,98,108,101,0,0,0,101,108,115,101,0,0,0,0,112,114,105,109,65,116,97,110,68,111,117,98,108,101,0,0,112,114,105,109,65,99,111,115,68,111,117,98,108,101,0,0,73,79,0,0,0,0,0,0,112,114,105,109,65,115,105,110,68,111,117,98,108,101,0,0,112,114,105,109,84,97,110,68,111,117,98,108,101,0,0,0,112,114,105,109,67,111,115,68,111,117,98,108,101,0,0,0,73,110,116,101,103,114,97,108,0,0,0,0,0,0,0,0,112,114,105,109,83,105,110,68,111,117,98,108,101,0,0,0,104,97,110,100,108,101,115,0,114,101,99,83,104,119,0,0,72,117,103,115,46,84,114,101,120,46,105,110,115,101,114,116,70,105,101,108,100,32,110,111,116,32,105,110,32,115,99,111,112,101,0,0,0,0,0,0,32,45,114,0,0,0,0,0,112,114,105,109,70,108,111,97,116,69,110,99,111,100,101,0,112,114,105,109,70,108,111,97,116,68,101,99,111,100,101,0,37,115,0,0,0,0,0,0,45,45,32,72,117,103,115,32,86,101,114,115,105,111,110,32,37,115,10,0,0,0,0,0,112,114,105,109,70,108,111,97,116,77,97,120,69,120,112,0,112,114,105,109,70,108,111,97,116,77,105,110,69,120,112,0,116,104,101,110,0,0,0,0,112,114,105,109,70,108,111,97,116,68,105,103,105,116,115,0,112,114,105,109,70,108,111,97,116,82,97,100,105,120,0,0,32,32,32,32,104,117,103,115,45,62,114,101,116,117,114,110,37,115,40,104,117,103,115,95,114,111,111,116,44,37,100,41,59,10,0,0,0,0,0,0,112,114,105,109,70,108,111,97,116,84,111,73,110,116,0,0,46,0,0,0,0,0,0,0,112,114,105,109,83,113,114,116,70,108,111,97,116,0,0,0,112,114,105,109,76,111,103,70,108,111,97,116,0,0,0,0,82,101,97,108,0,0,0,0,112,114,105,109,69,120,112,70,108,111,97,116,0,0,0,0,105,110,115,116,97,110,99,101,0,0,0,0,0,0,0,0,95,114,101,99,83,104,119,0,69,113,82,101,99,82,111,119,0,0,0,0,0,0,0,0,32,45,112,0,0,0,0,0,112,114,105,109,65,116,97,110,70,108,111,97,116,0,0,0,112,114,105,109,65,99,111,115,70,108,111,97,116,0,0,0,96,37,115,96,0,0,0,0,112,114,105,109,65,115,105,110,70,108,111,97,116,0,0,0,112,114,105,109,84,97,110,70,108,111,97,116,0,0,0,0,105,102,0,0,0,0,0,0,112,114,105,109,67,111,115,70,108,111,97,116,0,0,0,0,112,114,105,109,83,105,110,70,108,111,97,116,0,0,0,0,32,32,32,32,0,0,0,0,112,114,105,109,78,101,103,68,111,117,98,108,101,0,0,0,112,114,105,109,68,105,118,68,111,117,98,108,101,0,0,0,112,114,105,109,77,117,108,68,111,117,98,108,101,0,0,0,66,111,117,110,100,101,100,0,112,114,105,109,77,105,110,117,115,68,111,117,98,108,101,0,99,108,97,115,115,0,0,0,114,101,99,83,101,108,0,0,83,104,111,119,82,101,99,82,111,119,0,0,0,0,0,0,101,114,114,111,114,32,105,110,32,103,101,116,67,101,108,108,67,104,97,114,0,0,0,0,45,104,37,100,0,0,0,0,112,114,105,109,80,108,117,115,68,111,117,98,108,101,0,0,112,114,105,109,78,101,103,70,108,111,97,116,0,0,0,0,32,37,105,32,0,0,0,0,112,114,105,109,68,105,118,70,108,111,97,116,0,0,0,0,112,114,105,109,77,117,108,70,108,111,97,116,0,0,0,0,116,121,112,101,0,0,0,0,112,114,105,109,77,105,110,117,115,70,108,111,97,116,0,0,112,114,105,109,80,108,117,115,70,108,111,97,116,0,0,0,114,101,115,0,0,0,0,0,102,114,101,101,72,97,115,107,101,108,108,70,117,110,80,116,114,0,0,0,0,0,0,0,112,114,105,109,87,111,114,100,54,52,84,111,87,111,114,100,51,50,0,0,0,0,0,0,112,114,105,109,87,111,114,100,51,50,84,111,87,111,114,100,54,52,0,0,0,0,0,0,82,101,97,100,0,0,0,0,112,114,105,109,87,111,114,100,51,50,84,111,87,111,114,100,0,0,0,0,0,0,0,0,115,99,114,105,112,116,115,0,95,114,101,99,83,101,108,0,101,113,82,101,99,82,111,119,0,0,0,0,0,0,0,0,112,117,116,83,116,114,67,111,110,115,116,0,0,0,0,0,10,67,117,114,114,101,110,116,32,115,101,116,116,105,110,103,115,58,32,0,0,0,0,0,109,111,100,117,108,101,32,100,101,102,105,110,105,116,105,111,110,0,0,0,0,0,0,0,112,114,105,109,87,111,114,100,49,54,84,111,87,111,114,100,0,0,0,0,0,0,0,0,112,114,105,109,87,111,114,100,56,84,111,87,111,114,100,0,105,110,102,105,120,0,0,0,72,79,77,69,0,0,0,0,112,114,105,109,87,111,114,100,84,111,87,111,114,100,51,50,0,0,0,0,0,0,0,0,112,114,105,109,87,111,114,100,84,111,87,111,114,100,49,54,0,0,0,0,0,0,0,0,100,97,116,97,0,0,0,0,112,114,105,109,87,111,114,100,84,111,87,111,114,100,56,0,112,114,105,109,73,110,116,54,52,84,111,73,110,116,51,50,0,0,0,0,0,0,0,0,97,114,103,0,0,0,0,0,112,114,105,109,73,110,116,51,50,84,111,73,110,116,54,52,0,0,0,0,0,0,0,0,112,114,105,109,73,110,116,51,50,84,111,73,110,116,0,0,112,114,105,109,73,110,116,49,54,84,111,73,110,116,0,0,83,104,111,119,0,0,0,0,112,114,105,109,73,110,116,56,84,111,73,110,116,0,0,0,85,110,97,98,108,101,32,116,111,32,97,108,108,111,99,97,116,101,32,103,99,32,109,97,114,107,115,112,97,99,101,0,114,101,99,66,114,107,0,0,115,104,111,119,82,101,99,82,111,119,0,0,0,0,0,0,83,101,116,32,112,114,101,112,114,111,99,101,115,115,111,114,32,102,105,108,116,101,114,32,116,111,32,115,116,114,0,0,112,114,105,109,73,110,116,84,111,73,110,116,51,50,0,0,112,114,105,109,73,110,116,84,111,73,110,116,49,54,0,0,105,110,115,116,97,110,99,101,32,0,0,0,0,0,0,0,72,111,109,101,0,0,0,0,112,114,105,109,73,110,116,84,111,73,110,116,56,0,0,0,112,114,105,109,84,101,115,116,87,111,114,100,0,0,0,0,111,102,0,0,0,0,0,0,112,114,105,109,66,105,116,87,111,114,100,0,0,0,0,0,112,114,105,109,82,111,116,97,116,101,87,111,114,100,0,0,123,10,0,0,0,0,0,0,85,110,97,98,108,101,32,116,111,32,99,114,101,97,116,101,32,102,105,108,101,32,39,37,115,39,0,0,0,0,0,0,112,114,105,109,83,104,105,102,116,87,111,114,100,0,0,0,112,114,105,109,67,111,109,112,108,101,109,101,110,116,87,111,114,100,0,0,0,0,0,0,112,114,105,109,88,111,114,87,111,114,100,0,0,0,0,0,10,42,42,42,32,84,121,112,101,32,32,32,32,32,32,32,58,32,0,0,0,0,0,0,69,110,117,109,0,0,0,0,112,114,105,109,79,114,87,111,114,100,0,0,0,0,0,0,67,97,110,110,111,116,32,97,108,108,111,99,97,116,101,32,104,101,97,112,32,115,116,111,114,97,103,101,32,40,37,100,32,99,101,108,108,115,41,0,95,114,101,99,66,114,107,0,105,110,115,101,114,116,70,105,101,108,100,0,0,0,0,0,70,115,116,114,0,0,0,0,112,114,105,109,65,110,100,87,111,114,100,0,0,0,0,0,112,114,105,109,81,114,109,87,111,114,100,0,0,0,0,0,85,110,107,110,111,119,110,32,114,101,102,101,114,101,110,99,101,32,96,37,115,39,10,0,72,117,103,115,0,0,0,0,112,114,105,109,82,101,109,87,111,114,100,0,0,0,0,0,37,108,117,32,99,101,108,108,37,115,0,0,0,0,0,0,112,114,105,109,77,111,100,87,111,114,100,0,0,0,0,0,99,97,115,101,0,0,0,0,112,114,105,109,81,117,111,116,87,111,114,100,0,0,0,0,105,115,78,117,109,68,105,115,99,114,0,0,0,0,0,0,112,114,105,109,68,105,118,87,111,114,100,0,0,0,0,0,35,117,110,100,101,102,32,37,115,10,0,0,0,0,0,0,112,114,105,109,77,117,108,87,111,114,100,0,0,0,0,0,112,114,105,109,78,101,103,97,116,101,87,111,114,100,0,0,112,114,105,109,77,105,110,117,115,87,111,114,100,0,0,0,73,120,0,0,0,0,0,0,112,114,105,109,80,108,117,115,87,111,114,100,0,0,0,0,103,114,111,119,68,121,110,84,97,98,108,101,58,32,117,110,97,98,108,101,32,116,111,32,103,114,111,119,32,116,97,98,108,101,32,34,37,115,34,32,40,108,105,109,105,116,58,32,37,100,41,0,0,0,0,0,114,101,99,69,120,116,0,0,72,117,103,115,46,84,114,101,120,0,0,0,0,0,0,0,83,101,116,32,99,111,110,115,116,114,97,105,110,116,32,99,117,116,111,102,102,32,108,105,109,105,116,0,0,0,0,0,112,114,105,109,77,97,120,87,111,114,100,0,0,0,0,0,112,114,105,109,84,101,115,116,73,110,116,0,0,0,0,0,10,10,0,0,0,0,0,0,69,114,114,111,114,32,119,104,105,108,101,32,105,109,112,111,114,116,105,110,103,32,68,76,76,32,34,37,115,34,58,10,37,115,10,0,0,0,0,0,112,114,105,109,66,105,116,73,110,116,0,0,0,0,0,0,112,114,105,109,83,104,105,102,116,73,110,116,0,0,0,0,97,32,99,108,111,115,105,110,103,32,113,117,111,116,101,44,32,39,34,39,44,32,119,97,115,32,101,120,112,101,99,116,101,100,0,0,0,0,0,0,112,114,105,109,67,111,109,112,108,101,109,101,110,116,73,110,116,0,0,0,0,0,0,0,112,114,105,109,88,111,114,73,110,116,0,0,0,0,0,0,10,35,105,102,110,100,101,102,32,69,78,65,66,76,69,95,77,65,67,82,79,95,73,78,84,69,82,70,65,67,69,10,0,0,0,0,0,0,0,0,112,114,105,109,79,114,73,110,116,0,0,0,0,0,0,0,112,114,105,109,65,110,100,73,110,116,0,0,0,0,0,0,112,114,105,109,81,114,109,73,110,116,0,0,0,0,0,0,79,114,100,0,0,0,0,0,112,114,105,109,78,101,103,73,110,116,0,0,0,0,0,0,103,114,111,119,68,121,110,84,97,98,108,101,58,32,117,110,97,98,108,101,32,116,111,32,103,114,111,119,32,116,97,98,108,101,32,34,37,115,34,32,102,117,114,116,104,101,114,32,40,114,101,97,99,104,101,100,32,108,105,109,105,116,58,32,37,100,41,0,0,0,0,0,95,114,101,99,69,120,116,0,72,97,115,107,101,108,108,32,57,56,32,100,111,101,115,32,110,111,116,32,115,117,112,112,111,114,116,32,37,115,0,0,99,110,117,109,0,0,0,0,112,114,105,109,82,101,109,73,110,116,0,0,0,0,0,0,112,114,105,109,77,111,100,73,110,116,0,0,0,0,0,0,32,32,32,45,45,32,112,114,105,109,105,116,105,118,101,0,46,37,99,37,115,0,0,0,112,114,105,109,81,117,111,116,73,110,116,0,0,0,0,0,112,114,105,109,68,105,118,73,110,116,0,0,0,0,0,0,92,37,100,0,0,0,0,0,112,114,105,109,77,117,108,73,110,116,0,0,0,0,0,0,112,114,105,109,77,105,110,117,115,73,110,116,0,0,0,0,125,10,35,105,102,100,101,102,32,95,95,99,112,108,117,115,112,108,117,115,10,125,10,35,101,110,100,105,102,10,10,0,112,114,105,109,77,97,120,73,110,116,0,0,0,0,0,0,112,114,105,109,77,105,110,73,110,116,0,0,0,0,0,0,112,114,105,109,67,97,116,99,104,69,120,99,101,112,116,105,111,110,0,0,0,0,0,0,69,113,0,0,0,0,0,0,99,97,116,99,104,69,114,114,111,114,0,0,0,0,0,0,103,114,111,119,68,121,110,84,97,98,108,101,58,32,110,117,108,108,32,116,97,98,108,101,0,0,0,0,0,0,0,0,100,105,99,116,73,110,100,105,114,101,99,116,0,0,0,0,10,42,42,42,32,69,120,112,114,101,115,115,105,111,110,32,58,32,0,0,0,0,0,0,85,115,101,32,101,100,105,116,111,114,32,115,101,116,116,105,110,103,32,103,105,118,101,110,32,98,121,32,115,116,114,0,95,110,115,112,114,105,110,116,0,0,0,0,0,0,0,0,91,93,0,0,0,0,0,0,95,115,112,114,105,110,116,0,32,32,45,45,32,115,101,108,101,99,116,111,114,32,102,117,110,99,116,105,111,110,0,0,69,114,114,111,114,32,108,111,97,100,105,110,103,32,115,121,109,58,10,37,115,10,0,0,105,110,99,111,109,112,97,116,105,98,108,101,32,99,111,110,115,116,114,117,99,116,111,114,115,0,0,0,0,0,0,0,95,110,108,112,114,105,110,116,0,0,0,0,0,0,0,0,95,108,112,114,105,110,116,0,92,37,115,0,0,0,0,0,95,110,112,114,105,110,116,0,105,100,101,110,116,84,111,83,116,114,50,0,0,0,0,0,95,112,114,105,110,116,0,0,115,116,97,116,105,99,32,115,116,114,117,99,116,32,104,117,103,115,95,112,114,105,109,73,110,102,111,32,104,117,103,115,95,112,114,105,109,115,32,61,32,123,32,104,117,103,115,95,112,114,105,109,67,111,110,116,114,111,108,44,32,104,117,103,115,95,112,114,105,109,84,97,98,108,101,44,32,48,32,125,59,10,10,35,105,102,100,101,102,32,95,95,99,112,108,117,115,112,108,117,115,10,101,120,116,101,114,110,32,34,67,34,32,123,10,35,101,110,100,105,102,10,35,105,102,110,100,101,102,32,95,95,99,112,108,117,115,112,108,117,115,10,68,76,76,69,88,80,79,82,84,40,105,110,116,41,32,32,72,117,103,115,65,80,73,86,101,114,115,105,111,110,40,118,111,105,100,41,59,10,35,101,110,100,105,102,10,68,76,76,69,88,80,79,82,84,40,105,110,116,41,32,32,72,117,103,115,65,80,73,86,101,114,115,105,111,110,40,41,32,123,114,101,116,117,114,110,32,40,37,100,41,59,125,10,68,76,76,69,88,80,79,82,84,40,118,111,105,100,41,32,105,110,105,116,77,111,100,117,108,101,40,72,117,103,115,65,80,73,53,32,42,41,59,10,68,76,76,69,88,80,79,82,84,40,118,111,105,100,41,32,105,110,105,116,77,111,100,117,108,101,40,72,117,103,115,65,80,73,53,32,42,104,117,103,115,65,80,73,41,32,123,10,32,32,32,32,104,117,103,115,32,61,32,104,117,103,115,65,80,73,59,10,32,32,32,32,104,117,103,115,45,62,114,101,103,105,115,116,101,114,80,114,105,109,115,40,38,104,117,103,115,95,112,114,105,109,115,41,59,10,0,0,0,65,109,98,105,103,117,111,117,115,32,116,121,112,101,32,99,111,110,115,116,114,117,99,116,111,114,32,111,99,99,117,114,114,101,110,99,101,32,34,37,115,34,0,0,0,0,0,0,67,97,110,39,116,32,102,105,110,100,32,109,111,100,117,108,101,32,34,37,115,34,0,0,37,100,0,0,0,0,0,0,95,70,65,73,76,0,0,0,79,114,100,101,114,105,110,103,0,0,0,0,0,0,0,0,99,0,0,0,0,0,0,0,67,97,110,110,111,116,32,97,108,108,111,99,97,116,101,32,100,121,110,97,109,105,99,32,116,97,98,108,101,32,34,37,115,34,0,0,0,0,0,0,76,105,116,101,114,97,116,101,32,109,111,100,117,108,101,115,32,97,115,32,100,101,102,97,117,108,116,0,0,0,0,0,95,105,110,100,105,114,101,99,116,0,0,0,0,0,0,0,10,42,42,42,32,73,110,115,116,97,110,99,101,32,32,32,58,32,0,0,0,0,0,0,69,115,116,114,0,0,0,0,87,97,114,110,105,110,103,58,32,69,100,105,116,111,114,32,116,101,114,109,105,110,97,116,101,100,32,97,98,110,111,114,109,97,108,108,121,10,0,0,32,58,58,32,0,0,0,0,102,105,120,65,100,100,114,115,0,0,0,0,0,0,0,0,69,114,114,111,114,32,105,110,32,103,114,97,112,104,0,0,32,32,45,45,32,99,108,97,115,115,32,109,101,109,98,101,114,0,0,0,0,0,0,0,85,110,97,98,108,101,32,116,111,32,98,117,105,108,100,32,99,111,109,112,105,108,97,116,105,111,110,32,99,111,109,109,97,110,100,0,0,0,0,0,112,114,105,110,116,101,114,46,99,58,32,112,114,105,110,116,101,114,40,41,58,32,79,66,83,69,82,86,69,0,0,0,35,101,110,100,105,102,10,0,123,109,117,116,97,98,108,101,32,118,97,114,105,97,98,108,101,125,0,0,0,0,0,0,58,33,35,36,37,38,42,43,46,47,60,61,62,63,64,92,94,124,45,126,0,0,0,0,48,120,37,37,46,37,100,120,0,0,0,0,0,0,0,0,77,97,121,98,101,0,0,0,77,97,107,101,46,0,0,0,100,101,114,101,102,83,116,97,98,108,101,80,116,114,0,0,103,99,66,104,111,108,101,0,67,97,110,110,111,116,32,105,110,102,101,114,32,105,110,115,116,97,110,99,101,0,0,0,83,101,116,32,108,105,115,116,32,111,102,32,115,111,117,114,99,101,32,102,105,108,101,32,115,117,102,102,105,120,101,115,32,116,111,32,115,116,114,0,104,105,100,100,101,110,0,0,112,114,105,109,83,104,111,119,115,68,111,117,98,108,101,0,112,114,105,109,83,104,111,119,115,70,108,111,97,116,0,0,32,32,45,45,32,100,97,116,97,32,99,111,110,115,116,114,117,99,116,111,114,0,0,0,87,97,114,110,105,110,103,58,32,83,104,101,108,108,32,101,115,99,97,112,101,32,116,101,114,109,105,110,97,116,101,100,32,97,98,110,111,114,109,97,108,108,121,10,0,0,0,0,10,85,110,101,120,112,101,99,116,101,100,32,115,105,103,110,97,108,10,0,0,0,0,0,112,114,105,109,83,104,111,119,115,73,110,116,101,103,101,114,0,0,0,0,0,0,0,0,112,114,105,109,83,104,111,119,115,80,116,114,0,0,0,0,112,114,105,109,83,104,111,119,115,73,110,116,0,0,0,0,110,115,112,114,105,110,116,0,37,115,10,0,0,0,0,0,115,112,114,105,110,116,0,0,110,108,112,114,105,110,116,0,108,112,114,105,110,116,0,0,73,110,116,101,103,101,114,0,110,112,114,105,110,116,0,0,102,114,101,101,77,97,108,108,111,99,80,116,114,0,0,0,95,71,99,32,66,108,97,99,107,32,72,111,108,101,0,0,122,105,112,37,100,0,0,0,83,115,116,114,0,0,0,0,105,109,112,111,114,116,101,100,0,0,0,0,0,0,0,0,112,114,105,110,116,0,0,0,95,117,110,100,101,102,105,110,101,100,95,97,114,114,97,121,95,101,108,101,109,101,110,116,0,0,0,0,0,0,0,0,60,117,110,107,110,111,119,110,32,116,121,112,101,62,0,0,69,114,114,111,114,32,119,104,105,108,101,32,114,117,110,110,105,110,103,32,99,111,109,112,105,108,97,116,105,111,110,32,99,111,109,109,97,110,100,32,39,37,115,39,0,0,0,0,73,79,65,114,114,69,113,0,73,79,66,111,117,110,100,115,0,0,0,0,0,0,0,0,73,79,70,114,101,101,122,101,0,0,0,0,0,0,0,0,73,79,87,114,105,116,101,65,114,114,0,0,0,0,0,0,73,79,82,101,97,100,65,114,114,0,0,0,0,0,0,0,73,79,78,101,119,65,114,114,0,0,0,0,0,0,0,0,101,108,116,85,110,100,101,102,0,0,0,0,0,0,0,0,83,116,114,105,110,103,0,0,112,114,105,109,69,108,101,109,115,0,0,0,0,0,0,0,84,111,111,32,109,97,110,121,32,70,111,114,101,105,103,110,80,116,114,115,32,111,112,101,110,0,0,0,0,0,0,0,112,114,105,109,84,104,114,111,119,69,120,99,101,112,116,105,111,110,0,0,0,0,0,0,122,105,112,0,0,0,0,0,83,101,116,32,115,101,97,114,99,104,32,112,97,116,104,32,102,111,114,32,109,111,100,117,108,101,115,32,116,111,32,115,116,114,0,0,0,0,0,0,85,110,107,110,111,119,110,32,101,110,116,105,116,121,32,34,37,115,34,32,37,115,32,102,114,111,109,32,109,111,100,117,108,101,32,34,37,115,34,0,112,114,105,109,66,111,117,110,100,115,0,0,0,0,0,0,112,114,105,109,83,117,98,115,99,114,105,112,116,0,0,0,10,32,32,0,0,0,0,0,112,114,105,109,65,109,97,112,0,0,0,0,0,0,0,0,112,114,105,109,65,99,99,117,109,65,114,114,97,121,0,0,112,114,105,109,65,99,99,117,109,0,0,0,0,0,0,0,112,114,105,109,85,112,100,97,116,101,0,0,0,0,0,0,35,100,101,102,105,110,101,32,105,110,105,116,77,111,100,117,108,101,32,105,110,105,116,0,112,114,105,109,65,114,114,97,121,0,0,0,0,0,0,0,39,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,105,110,32,102,111,114,101,105,103,110,32,102,117,110,99,116,105,111,110,32,100,101,99,108,97,114,97,116,105,111,110,115,46,0,0,0,0,0,0,0,66,105,103,110,117,109,32,101,120,112,101,99,116,101,100,0,85,115,101,32,111,102,32,112,111,108,121,109,111,114,112,104,105,99,32,110,101,119,116,121,112,101,32,39,0,0,0,0,112,114,105,109,67,109,112,73,110,116,101,103,101,114,0,0,85,110,100,101,102,105,110,101,100,32,100,97,116,97,32,99,111,110,115,116,114,117,99,116,111,114,32,34,37,115,34,0,66,111,111,108,0,0,0,0,112,114,105,109,69,113,73,110,116,101,103,101,114,0,0,0,110,116,104,0,0,0,0,0,95,116,104,114,111,119,0,0,100,101,112,69,120,112,114,0,80,115,116,114,0,0,0,0,85,110,100,101,102,105,110,101,100,32,113,117,97,108,105,102,105,101,100,32,118,97,114,105,97,98,108,101,32,34,37,115,34,0,0,0,0,0,0,0,99,104,101,99,107,73,109,112,111,114,116,69,110,116,105,116,121,51,0,0,0,0,0,0,100,101,99,108,97,114,97,116,105,111,110,0,0,0,0,0,112,114,105,109,73,110,116,101,103,101,114,84,111,68,111,117,98,108,101,0,0,0,0,0,34,32,119,105,116,104,32,34,0,0,0,0,0,0,0,0,112,114,105,109,73,110,116,101,103,101,114,84,111,70,108,111,97,116,0,0,0,0,0,0,32,119,104,101,114,101,0,0,32,34,0,0,0,0,0,0,65,109,98,105,103,117,111,117,115,32,117,115,101,32,111,102,32,111,112,101,114,97,116,111,114,32,34,0,0,0,0,0,112,114,105,109,73,110,116,101,103,101,114,84,111,87,111,114,100,0,0,0,0,0,0,0,65,109,98,105,103,117,111,117,115,32,117,115,101,32,111,102,32,117,110,97,114,121,32,109,105,110,117,115,32,119,105,116,104,32,34,0,0,0,0,0,112,114,105,109,87,111,114,100,84,111,73,110,116,101,103,101,114,0,0,0,0,0,0,0,108,105,115,116,32,99,111,109,112,114,101,104,101,110,115,105,111,110,0,0,0,0,0,0,116,121,112,101,32,101,120,112,114,101,115,115,105,111,110,0,112,114,105,109,73,110,116,101,103,101,114,84,111,73,110,116,0,0,0,0,0,0,0,0,84,111,111,32,109,97,110,121,32,116,121,112,101,32,118,97,114,105,97,98,108,101,115,32,105,110,32,37,115,10,0,0,112,114,105,109,73,110,116,84,111,73,110,116,101,103,101,114,0,0,0,0,0,0,0,0,35,105,102,100,101,102,32,83,84,65,84,73,67,95,76,73,78,75,65,71,69,10,0,0,67,117,114,114,101,110,116,108,121,32,105,108,108,101,103,97,108,32,116,111,32,98,105,110,100,32,105,109,112,108,105,99,105,116,32,112,97,114,97,109,101,116,101,114,115,32,117,115,105,110,103,32,99,111,109,112,114,101,104,101,110,115,105,111,110,47,100,111,45,108,101,118,101,108,32,108,101,116,115,0,112,114,105,109,78,101,103,73,110,116,101,103,101,114,0,0,109,100,111,58,32,117,110,107,110,111,119,110,32,115,116,97,116,101,109,101,110,116,0,0,112,114,105,109,81,114,109,73,110,116,101,103,101,114,0,0,78,111,116,32,108,101,103,97,108,32,116,111,32,109,105,120,32,105,109,112,108,105,99,105,116,32,112,97,114,97,109,101,116,101,114,32,98,105,110,100,105,110,103,115,32,119,105,116,104,32,111,116,104,101,114,32,98,105,110,100,105,110,103,115,46,0,0,0,0,0,0,0,112,114,105,109,77,117,108,73,110,116,101,103,101,114,0,0,67,117,114,114,101,110,116,108,121,32,105,108,108,101,103,97,108,32,116,111,32,98,105,110,100,32,105,109,112,108,105,99,105,116,32,112,97,114,97,109,101,116,101,114,115,32,105,110,32,116,104,101,32,114,101,99,117,114,115,105,118,101,32,100,111,45,110,111,116,97,116,105,111,110,0,0,0,0,0,0,83,116,97,98,108,101,80,116,114,0,0,0,0,0,0,0,112,114,105,109,77,105,110,117,115,73,110,116,101,103,101,114,0,0,0,0,0,0,0,0,71,97,114,98,97,103,101,32,99,111,108,108,101,99,116,105,111,110,32,102,97,105,108,115,32,116,111,32,114,101,99,108,97,105,109,32,115,117,102,102,105,99,105,101,110,116,32,115,112,97,99,101,0,0,0,0,101,110,70,114,84,104,0,0,73,108,108,101,103,97,108,32,97,112,112,108,105,99,97,116,105,111,110,32,111,102,32,114,101,99,111,114,100,0,0,0,83,101,116,32,114,101,112,101,97,116,32,108,97,115,116,32,101,120,112,114,101,115,115,105,111,110,32,115,116,114,105,110,103,32,116,111,32,115,116,114,0,0,0,0,0,0,0,0,114,101,116,117,114,110,0,0,99,104,101,99,107,73,109,112,111,114,116,69,110,116,105,116,121,50,0,0,0,0,0,0,112,114,105,109,80,108,117,115,73,110,116,101,103,101,114,0,82,101,112,101,97,116,101,100,32,98,105,110,100,105,110,103,40,115,41,32,105,110,32,112,97,114,97,108,108,101,108,32,99,111,109,112,114,101,104,101,110,115,105,111,110,0,0,0,112,117,116,83,116,114,0,0,44,32,0,0,0,0,0,0,82,101,112,101,97,116,101,100,32,112,97,116,116,101,114,110,32,118,97,114,105,97,98,108,101,40,115,41,32,105,110,32,112,97,114,97,108,108,101,108,32,99,111,109,112,114,101,104,101,110,115,105,111,110,0,0,104,117,103,115,73,79,82,117,110,0,0,0,0,0,0,0,117,110,100,101,102,105,110,101,100,32,118,97,114,105,97,98,108,101,32,34,37,115,34,32,40,105,110,116,114,111,100,117,99,101,100,32,98,121,32,112,97,114,97,108,108,101,108,32,99,111,109,112,114,101,104,101,110,115,105,111,110,41,0,0,95,104,114,101,97,100,101,114,0,0,0,0,0,0,0,0,99,97,115,101,32,101,120,112,114,101,115,115,105,111,110,0,68,97,116,97,46,76,105,115,116,0,0,0,0,0,0,0,95,112,97,115,115,0,0,0,76,105,115,116,0,0,0,0,101,110,118,105,114,111,110,109,101,110,116,32,118,97,114,105,97,98,108,101,32,110,111,116,32,102,111,117,110,100,0,0,125,10,0,0,0,0,0,0,65,109,98,105,103,117,111,117,115,32,37,115,32,111,99,99,117,114,114,101,110,99,101,32,34,37,115,34,0,0,0,0,119,0,0,0,0,0,0,0,105,108,108,101,103,97,108,32,101,110,118,105,114,111,110,109,101,110,116,32,118,97,114,105,97,98,108,101,32,110,97,109,101,0,0,0,0,0,0,0,85,110,100,101,102,105,110,101,100,32,118,97,114,105,97,98,108,101,32,34,37,115,34,0,83,121,115,116,101,109,46,103,101,116,69,110,118,0,0,0,65,109,98,105,103,117,111,117,115,32,113,117,97,108,105,102,105,101,100,32,37,115,32,111,99,99,117,114,114,101,110,99,101,32,34,37,115,34,0,0,105,108,108,101,103,97,108,32,115,121,115,116,101,109,32,99,111,109,109,97,110,100,32,115,116,114,105,110,103,0,0,0,85,110,114,101,115,111,108,118,101,100,32,111,118,101,114,108,111,97,100,105,110,103,0,0,85,110,100,101,102,105,110,101,100,32,113,117,97,108,105,102,105,101,100,32,37,115,32,34,37,115,34,0,0,0,0,0,70,111,114,101,105,103,110,79,98,106,0,0,0,0,0,0,83,121,115,116,101,109,46,115,121,115,116,101,109,0,0,0,98,97,100,32,119,101,97,107,32,112,116,114,0,0,0,0,95,102,114,111,109,84,104,101,110,0,0,0,0,0,0,0,73,108,108,101,103,97,108,32,96,95,39,32,105,110,32,101,120,112,114,101,115,115,105,111,110,0,0,0,0,0,0,0,114,115,116,114,0,0,0,0,10,70,105,101,108,100,32,32,32,32,32,32,58,32,0,0,105,109,112,111,114,116,69,110,116,105,116,121,0,0,0,0,73,79,46,104,71,101,116,67,104,97,114,0,0,0,0,0,10,69,120,112,114,101,115,115,105,111,110,32,58,32,0,0,73,79,46,104,80,117,116,67,104,97,114,0,0,0,0,0,32,124,32,0,0,0,0,0,32,45,111,32,34,0,0,0,67,111,110,115,116,114,117,99,116,105,111,110,32,100,111,101,115,32,110,111,116,32,100,101,102,105,110,101,32,115,116,114,105,99,116,32,102,105,101,108,100,0,0,0,0,0,0,0,73,79,46,104,80,117,116,83,116,114,0,0,0,0,0,0,115,0,0,0,0,0,0,0,100,101,112,67,111,110,70,108,100,115,0,0,0,0,0,0,73,79,46,103,101,116,67,111,110,116,101,110,116,115,0,0,101,120,112,114,101,115,115,105,111,110,0,0,0,0,0,0,83,101,112,116,101,109,98,101,114,32,50,48,48,54,0,0,67,111,110,115,116,114,117,99,116,111,114,32,34,37,115,34,32,100,111,101,115,32,110,111,116,32,104,97,118,101,32,115,101,108,101,99,116,101,100,32,102,105,101,108,100,115,32,105,110,32,0,0,0,0,0,0,73,79,46,104,71,101,116,67,111,110,116,101,110,116,115,0,101,113,78,117,109,68,105,115,99,114,0,0,0,0,0,0,78,111,32,99,111,110,115,116,114,117,99,116,111,114,32,104,97,115,32,97,108,108,32,111,102,32,116,104,101,32,102,105,101,108,100,115,32,115,112,101,99,105,102,105,101,100,32,105,110,32,0,0,0,0,0,0,73,79,46,111,112,101,110,70,105,108,101,0,0,0,0,0,32,32,32,32,125,10,0,0,82,101,112,101,97,116,101,100,32,102,105,101,108,100,32,110,97,109,101,32,34,37,115,34,32,105,110,32,102,105,101,108,100,32,108,105,115,116,0,0,119,43,0,0,0,0,0,0,34,37,115,34,32,105,115,32,110,111,116,32,97,32,115,101,108,101,99,116,111,114,32,102,117,110,99,116,105,111,110,47,102,105,101,108,100,32,110,97,109,101,0,0,0,0,0,0,119,98,43,0,0,0,0,0,34,37,115,46,37,115,34,32,105,115,32,110,111,116,32,97,32,115,101,108,101,99,116,111,114,32,102,117,110,99,116,105,111,110,47,102,105,101,108,100,32,110,97,109,101,0,0,0,83,121,115,116,101,109,46,73,79,46,111,112,101,110,66,105,110,97,114,121,70,105,108,101,0,0,0,0,0,0,0,0,109,105,115,115,105,110,103,32,102,105,101,108,100,32,98,105,110,100,105,110,103,115,0,0,70,111,114,101,105,103,110,80,116,114,0,0,0,0,0,0,116,111,111,32,109,97,110,121,32,104,97,110,100,108,101,115,32,111,112,101,110,0,0,0,84,111,111,32,109,97,110,121,32,118,97,114,105,97,98,108,101,115,32,40,37,100,41,32,105,110,32,116,121,112,101,32,99,104,101,99,107,101,114,0,87,101,97,107,32,112,116,114,32,99,111,110,116,97,105,110,115,32,111,98,106,101,99,116,32,119,104,105,99,104,32,105,115,110,39,116,32,104,101,97,112,32,97,108,108,111,99,97,116,101,100,32,37,100,10,0,101,110,70,114,84,111,0,0,73,108,108,101,103,97,108,32,96,126,39,32,105,110,32,101,120,112,114,101,115,115,105,111,110,0,0,0,0,0,0,0,83,101,116,32,112,114,111,109,112,116,32,115,116,114,105,110,103,32,116,111,32,115,116,114,0,0,0,0,0,0,0,0,69,109,112,116,121,32,102,105,101,108,100,32,108,105,115,116,32,105,110,32,117,112,100,97,116,101,0,0,0,0,0,0,37,115,46,37,115,32,0,0,114,0,0,0,0,0,0,0,82,101,112,101,97,116,101,100,32,108,97,98,101,108,32,34,37,115,34,32,105,110,32,114,101,99,111,114,100,32,0,0,114,43,0,0,0,0,0,0,32,61,62,32,0,0,0,0,105,110,99,108,117,100,101,34,0,0,0,0,0,0,0,0,115,97,118,101,83,121,110,116,97,120,0,0,0,0,0,0,119,0,0,0,0,0,0,0,77,111,100,117,108,101,32,34,37,115,34,32,110,111,116,32,112,114,101,118,105,111,117,115,108,121,32,108,111,97,100,101,100,0,0,0,0,0,0,0,97,0,0,0,0,0,0,0,112,97,116,116,101,114,110,0,77,117,108,116,105,112,108,101,32,100,101,99,108,97,114,97,116,105,111,110,115,32,102,111,114,32,115,101,108,101,99,116,111,114,32,34,37,115,34,0,114,98,0,0,0,0,0,0,82,101,112,101,97,116,101,100,32,102,105,101,108,100,32,110,97,109,101,32,34,37,115,34,32,102,111,114,32,99,111,110,115,116,114,117,99,116,111,114,32,34,37,115,34,0,0,0,114,98,43,0,0,0,0,0,41,59,10,0,0,0,0,0,85,110,107,110,111,119,110,32,99,108,97,115,115,32,34,37,115,34,32,105,110,32,100,101,114,105,118,101,100,32,105,110,115,116,97,110,99,101,0,0,119,98,0,0,0,0,0,0,73,108,108,101,103,97,108,32,115,116,114,105,99,116,110,101,115,115,32,97,110,110,111,116,97,116,105,111,110,32,102,111,114,32,110,101,119,116,121,112,101,32,99,111,110,115,116,114,117,99,116,111,114,0,0,0,97,98,0,0,0,0,0,0,65,32,110,101,119,116,121,112,101,32,99,111,110,115,116,114,117,99,116,111,114,32,109,117,115,116,32,104,97,118,101,32])
.concat([101,120,97,99,116,108,121,32,111,110,101,32,97,114,103,117,109,101,110,116,0,0,0,0,105,108,108,101,103,97,108,32,109,111,100,101,0,0,0,0,65,32,110,101,119,116,121,112,101,32,99,111,110,115,116,114,117,99,116,111,114,32,99,97,110,110,111,116,32,104,97,118,101,32,99,108,97,115,115,32,99,111,110,115,116,114,97,105,110,116,115,0,0,0,0,0,67,104,97,114,0,0,0,0,117,110,107,110,111,119,110,32,104,97,110,100,108,101,32,109,111,100,101,0,0,0,0,0,83,117,98,115,116,105,116,117,116,105,111,110,32,101,120,112,97,110,100,105,110,103,32,116,111,111,32,113,117,105,99,107,108,121,0,0,0,0,0,0,95,102,114,111,109,84,111,0,73,108,108,101,103,97,108,32,96,64,39,32,105,110,32,101,120,112,114,101,115,115,105,111,110,0,0,0,0,0,0,0,112,115,116,114,0,0,0,0,67,97,110,110,111,116,32,117,115,101,32,115,101,108,101,99,116,111,114,115,32,119,105,116,104,32,101,120,105,115,116,101,110,116,105,97,108,108,121,32,116,121,112,101,100,32,99,111,109,112,111,110,101,110,116,115,0,0,0,0,0,0,0,0,10,42,42,42,32,67,111,117,108,100,32,114,101,102,101,114,32,116,111,58,32,37,115,46,37,115,32,0,0,0,0,0,105,110,118,97,108,105,100,32,104,97,110,100,108,101,0,0,32,119,105,116,104,32,101,120,105,115,116,101,110,116,105,97,108,108,121,32,116,121,112,101,100,32,99,111,109,112,111,110,101,110,116,115,0,0,0,0,83,121,115,116,101,109,46,80,111,115,105,120,46,73,79,46,104,97,110,100,108,101,84,111,70,100,0,0,0,0,0,0,99,108,97,115,115,32,0,0,32,34,45,73,0,0,0,0,32,119,105,116,104,32,112,111,108,121,109,111,114,112,104,105,99,32,111,114,32,113,117,97,108,105,102,105,101,100,32,99,111,109,112,111,110,101,110,116,115,0,0,0,0,0,0,0,73,79,46,104,73,115,69,79,70,0,0,0,0,0,0,0,67,97,110,110,111,116,32,100,101,114,105,118,101,32,105,110,115,116,97,110,99,101,115,32,102,111,114,32,116,121,112,101,115,0,0,0,0,0,0,0,73,79,46,104,70,108,117,115,104,0,0,0,0,0,0,0,97,32,98,105,110,100,105,110,103,0,0,0,0,0,0,0,86,97,114,105,97,98,108,101,32,34,37,115,34,32,105,110,32,99,111,110,115,116,114,97,105,110,116,32,105,115,32,110,111,116,32,108,111,99,97,108,108,121,32,98,111,117,110,100,0,0,0,0,0,0,0,0,73,79,46,104,71,101,116,80,111,115,110,0,0,0,0,0,99,111,110,116,101,120,116,0,73,79,46,104,83,101,116,80,111,115,110,0,0,0,0,0,44,32,34,37,115,34,0,0,99,104,101,99,107,84,121,99,111,110,68,101,102,110,0,0,105,108,108,101,103,97,108,32,98,117,102,102,101,114,32,109,111,100,101,0,0,0,0,0,82,101,99,117,114,115,105,118,101,32,116,121,112,101,32,115,121,110,111,110,121,109,32,34,37,115,34,0,0,0,0,0,73,79,46,104,83,101,116,66,117,102,102,101,114,105,110,103,0,0,0,0,0,0,0,0,82,101,112,101,97,116,101,100,32,116,121,112,101,32,118,97,114,105,97,98,108,101,32,34,37,115,34,32,111,110,32,108,101,102,116,32,104,97,110,100,32,115,105,100,101,0,0,0,73,79,46,104,71,101,116,66,117,102,102,101,114,105,110,103,0,0,0,0,0,0,0,0,84,121,112,101,32,115,121,110,111,110,121,109,115,32,34,37,115,34,32,97,110,100,32,34,37,115,34,32,97,114,101,32,109,117,116,117,97,108,108,121,32,114,101,99,117,114,115,105,118,101,0,0,0,0,0,0,68,111,117,98,108,101,0,0,73,79,46,104,83,101,101,107,0,0,0,0,0,0,0,0,102,105,110,100,66,116,121,118,115,73,110,116,0,0,0,0,72,117,103,115,46,80,114,101,108,117,100,101,0,0,0,0,101,110,70,114,111,109,0,0,101,120,112,114,101,115,115,105,111,110,0,0,0,0,0,0,32,97,115,32,97,32,99,111,109,112,111,110,101,110,116,32,119,105,116,104,32,97,32,113,117,97,108,105,102,105,101,100,32,116,121,112,101,10,0,0,83,101,116,32,104,101,97,112,32,115,105,122,101,32,40,99,97,110,110,111,116,32,98,101,32,99,104,97,110,103,101,100,32,119,105,116,104,105,110,32,72,117,103,115,41,0,0,0,81,117,97,110,116,105,102,105,101,100,32,116,121,112,101,32,118,97,114,105,97,98,108,101,32,34,37,115,34,32,105,115,32,114,101,112,101,97,116,101,100,0,0,0,0,0,0,0,65,109,98,105,103,117,111,117,115,32,101,120,112,111,114,116,32,111,102,32,101,110,116,105,116,121,32,34,37,115,34,0,101,110,100,32,111,102,32,102,105,108,101,0,0,0,0,0,40,45,62,41,0,0,0,0,67,97,110,110,111,116,32,117,115,101,32,112,97,116,116,101,114,110,32,98,105,110,100,105,110,103,32,102,111,114,32,0,81,117,97,110,116,105,102,105,101,100,32,116,121,112,101,32,118,97,114,105,97,98,108,101,32,34,37,115,34,32,105,115,32,110,111,116,32,117,115,101,100,0,0,0,0,0,0,0,73,79,46,104,76,111,111,107,65,104,101,97,100,0,0,0,32,119,105,116,104,32,97,114,105,116,121,32,0,0,0,0,32,45,68,95,95,72,85,71,83,95,95,0,0,0,0,0,103,101,116,75,105,110,100,0,116,121,112,101,65,112,51,0,81,117,97,110,116,105,102,105,101,114,32,100,111,101,115,32,110,111,116,32,109,101,110,116,105,111,110,32,116,121,112,101,32,118,97,114,105,97,98,108,101,32,34,37,115,34,0,0,110,111,116,32,97,32,114,101,103,117,108,97,114,32,102,105,108,101,0,0,0,0,0,0,116,111,107,101,110,0,0,0,32,119,104,101,114,101,32,97,32,118,97,114,105,97,98,108,101,32,105,115,32,114,101,113,117,105,114,101,100,10,0,0,76,111,99,97,108,108,121,32,113,117,97,110,116,105,102,105,101,100,32,118,97,114,105,97,98,108,101,32,37,115,32,105,115,32,110,111,116,32,117,115,101,100,0,0,0,0,0,0,73,79,46,104,70,105,108,101,83,105,122,101,0,0,0,0,96,61,62,39,0,0,0,0,116,121,112,101,32,115,105,103,110,97,116,117,114,101,0,0,32,105,110,32,112,97,116,116,101,114,110,32,0,0,0,0,82,101,112,101,97,116,101,100,32,113,117,97,110,116,105,102,105,101,100,32,118,97,114,105,97,98,108,101,32,37,115,0,105,110,112,117,116,32,119,97,105,116,105,110,103,32,116,101,114,109,105,110,97,116,101,100,32,98,121,32,115,105,103,110,97,108,0,0,0,0,0,0,115,116,114,105,110,103,32,108,105,116,101,114,97,108,0,0,32,114,101,113,117,105,114,101,115,32,97,116,32,108,101,97,115,116,32,37,100,32,97,114,103,117,109,101,110,116,37,115,10,0,0,0,0,0,0,0,105,100,101,110,116,84,111,83,116,114,0,0,0,0,0,0,10,42,42,42,32,84,121,112,101,32,32,32,32,32,32,32,58,32,0,0,0,0,0,0,73,79,46,104,87,97,105,116,70,111,114,73,110,112,117,116,0,0,0,0,0,0,0,0,99,104,97,114,97,99,116,101,114,32,108,105,116,101,114,97,108,0,0,0,0,0,0,0,34,37,115,34,0,0,0,0,32,105,110,32,0,0,0,0,109,101,109,98,101,114,32,116,121,112,101,0,0,0,0,0,83,121,115,116,101,109,46,73,79,46,104,83,101,116,66,105,110,97,114,121,77,111,100,101,0,0,0,0,0,0,0,0,110,117,109,101,114,105,99,32,108,105,116,101,114,97,108,0,85,115,101,32,111,102,32,0,73,109,112,108,105,99,105,116,32,112,97,114,97,109,101,116,101,114,115,32,110,111,116,32,112,101,114,109,105,116,116,101,100,32,105,110,32,99,108,97,115,115,32,99,111,110,116,101,120,116,0,0,0,0,0,0,104,97,110,100,108,101,32,105,115,32,110,111,116,32,119,114,105,116,101,97,98,108,101,0,115,121,109,98,111,108,32,34,97,115,34,0,0,0,0,0,116,121,112,101,65,112,50,0,82,101,112,101,97,116,101,100,32,118,97,114,105,97,98,108,101,32,34,37,115,34,32,105,110,32,102,117,110,99,116,105,111,110,97,108,32,100,101,112,101,110,100,101,110,99,121,0,77,117,108,116,105,112,108,101,32,100,101,99,108,97,114,97,116,105,111,110,115,32,111,102,32,116,121,112,101,32,99,111,110,115,116,114,117,99,116,111,114,32,34,37,115,34,0,0,83,121,115,116,101,109,46,73,79,46,104,80,117,116,66,117,102,0,0,0,0,0,0,0,115,121,109,98,111,108,32,34,113,117,97,108,105,102,105,101,100,34,0,0,0,0,0,0,84,111,111,32,109,97,110,121,32,109,111,100,117,108,101,32,102,105,108,101,115,32,40,109,97,120,105,109,117,109,32,111,102,32,37,100,32,97,108,108,111,119,101,100,41,0,0,0,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,0,0,0,0,0,0,116,121,112,101,65,112,49,0,84,114,105,118,105,97,108,32,100,101,112,101,110,100,101,110,99,121,32,102,111,114,32,118,97,114,105,97,98,108,101,32,34,37,115,34,0,0,0,0,70,108,111,97,116,0,0,0,102,97,116,98,97,114,0,0,104,97,110,100,108,101,32,105,115,32,110,111,116,32,114,101,97,100,97,98,108,101,0,0,101,120,112,97,110,100,83,121,110,49,0,0,0,0,0,0,115,121,109,98,111,108,32,34,104,105,100,105,110,103,34,0,60,110,111,102,105,108,101,62,0,0,0,0,0,0,0,0,112,0,0,0,0,0,0,0,80,114,105,110,116,32,110,111,46,32,99,101,108,108,115,32,114,101,99,111,118,101,114,101,100,32,97,102,116,101,114,32,103,99,0,0,0,0,0,0,95,102,114,111,109,0,0,0,70,111,114,101,105,103,110,32,101,120,112,111,114,116,32,99,97,108,108,105,110,103,32,99,111,110,118,101,110,116,105,111,110,32,34,37,115,34,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,0,0,0,116,121,112,101,65,112,48,0,104,110,117,109,0,0,0,0,70,117,110,99,116,105,111,110,97,108,32,100,101,112,101,110,100,101,110,99,121,32,105,115,32,116,114,105,118,105,97,108,0,0,0,0,0,0,0,0,10,42,42,42,32,67,111,117,108,100,32,114,101,102,101,114,32,116,111,32,37,115,46,37,115,32,111,114,32,37,115,46,37,115,0,0,0,0,0,0,37,100,0,0,0,0,0,0,105,108,108,101,103,97,108,32,98,117,102,102,101,114,32,115,105,122,101,0,0,0,0,0,115,121,109,98,111,108,32,34,37,115,34,0,0,0,0,0,109,111,100,117,108,101,32,37,115,32,119,104,101,114,101,10,0,0,0,0,0,0,0,0,109,101,109,111,114,121,0,0,97,112,112,108,105,99,97,116,105,111,110,0,0,0,0,0,82,101,112,101,97,116,101,100,32,116,121,112,101,32,118,97,114,105,97,98,108,101,32,34,37,115,34,32,105,110,32,99,108,97,115,115,32,104,101,97,100,0,0,0,0,0,0,0,83,121,115,116,101,109,46,73,79,46,104,71,101,116,66,117,102,0,0,0,0,0,0,0,45,45,32,99,111,110,115,116,114,117,99,116,111,114,32,99,108,97,115,115,0,0,0,0,105,109,112,108,105,99,105,116,32,112,97,114,97,109,101,116,101,114,32,34,63,37,115,34,0,0,0,0,0,0,0,0,47,104,111,109,101,47,106,111,101,108,47,115,104,97,114,101,119,111,114,107,47,101,109,115,99,114,105,112,116,101,110,47,101,109,99,99,32,45,68,78,68,69,66,85,71,61,49,32,32,32,32,45,115,104,97,114,101,100,32,45,102,80,73,67,0,0,0,0,0,0,0,0,118,97,108,117,101,32,99,111,110,115,116,114,117,99,116,105,111,110,0,0,0,0,0,0,84,121,112,101,32,118,97,114,105,97,98,108,101,32,114,101,113,117,105,114,101,100,32,105,110,32,99,108,97,115,115,32,104,101,97,100,0,0,0,0,83,121,115,116,101,109,46,73,79,46,104,73,115,84,101,114,109,105,110,97,108,68,101,118,105,99,101,0,0,0,0,0,115,101,108,101,99,116,111,114,32,34,35,37,115,34,0,0,116,121,112,101,85,112,100,70,108,100,115,0,0,0,0,0,109,101,109,98,101,114,32,102,117,110,99,116,105,111,110,32,116,121,112,101,32,115,105,103,110,97,116,117,114,101,0,0,83,121,115,116,101,109,46,73,79,46,104,71,101,116,69,99,104,111,0,0,0,0,0,0,98,97,99,107,113,117,111,116,101,0,0,0,0,0,0,0,102,105,120,105,116,121,32,100,101,99,108,0,0,0,0,0,83,111,114,114,121,44,32,114,101,99,111,114,100,32,117,112,100,97,116,101,32,115,121,110,116,97,120,32,99,97,110,110,111,116,32,99,117,114,114,101,110,116,108,121,32,98,101,32,117,115,101,100,32,102,111,114,32,112,111,108,121,109,111,114,112,104,105,99,32,99,111,109,112,111,110,101,110,116,115,0,115,121,110,111,110,121,109,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,0,0,104,97,110,100,108,101,32,105,115,32,115,101,109,105,45,99,108,111,115,101,100,0,0,0,116,105,108,100,101,0,0,0,117,112,100,97,116,101,0,0,100,97,116,97,32,99,111,110,115,116,114,117,99,116,111,114,0,0,0,0,0,0,0,0,104,97,110,100,108,101,32,105,115,32,99,108,111,115,101,100,0,0,0,0,0,0,0,0,98,97,99,107,115,108,97,115,104,32,40,108,97,109,98,100,97,41,0,0,0,0,0,0,104,117,103,115,45,62,108,111,111,107,117,112,78,97,109,101,40,0,0,0,0,0,0,0,119,105,116,104,0,0,0,0,83,117,112,101,114,99,108,97,115,115,32,114,101,108,97,116,105,111,110,32,102,111,114,32,34,37,115,34,32,105,115,32,99,121,99,108,105,99,0,0,83,121,115,116,101,109,46,73,79,46,104,83,101,116,69,99,104,111,0,0,0,0,0,0,96,60,45,39,0,0,0,0,84,121,112,101,32,99,104,101,99,107,105,110,103,0,0,0,109,100,111,45,116,114,97,110,115,102,111,114,109,101,100,32,108,101,116,32,103,101,110,101,114,97,116,111,114,0,0,0,99,108,97,115,115,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,0,0,0,0,116,111,111,32,109,97,110,121,32,83,116,97,98,108,101,80,116,114,115,0,0,0,0,0,96,93,39,0,0,0,0,0,102,105,110,97,108,32,103,101,110,101,114,97,116,111,114,0,37,115,0,0,0,0,0,0,70,111,114,101,105,103,110,46,109,97,107,101,83,116,97,98,108,101,80,116,114,0,0,0,96,91,39,0,0,0,0,0,10,42,42,42,32,80,111,115,115,105,98,108,101,32,99,97,117,115,101,58,32,34,37,115,34,32,109,111,100,117,108,101,32,110,111,116,32,105,109,112,111,114,116,101,100,0,0,0,95,115,99,37,100,95,37,115,0,0,0,0,0,0,0,0,65,100,100,114,0,0,0,0,112,114,105,109,68,101,82,101,102,87,101,97,107,0,0,0,99,111,110,115,116,114,117,99,116,111,114,32,118,97,114,105,97,98,108,101,32,107,105,110,100,115,32,100,111,32,110,111,116,32,109,97,116,99,104,0,96,46,46,39,0,0,0,0,102,105,110,100,77,111,100,105,100,0,0,0,0,0,0,0,101,110,70,114,69,110,0,0,70,111,114,101,105,103,110,32,100,101,99,108,97,114,97,116,105,111,110,115,32,109,117,115,116,32,98,101,32,101,105,116,104,101,114,32,105,109,112,111,114,116,32,111,114,32,101,120,112,111,114,116,32,110,111,116,32,34,37,115,34,0,0,0,37,115,32,99,108,97,115,115,32,110,111,116,32,100,101,102,105,110,101,100,0,0,0,0,10,79,84,72,69,82,32,79,80,84,73,79,78,83,58,32,40,108,101,97,100,105,110,103,32,43,32,111,114,32,45,32,109,97,107,101,115,32,110,111,32,100,105,102,102,101,114,101,110,99,101,41,10,0,0,0,77,117,108,116,105,112,108,101,32,100,101,99,108,97,114,97,116,105,111,110,115,32,102,111,114,32,109,101,109,98,101,114,32,102,117,110,99,116,105,111,110,32,34,37,115,34,0,0,67,111,110,102,108,105,99,116,105,110,103,32,101,120,112,111,114,116,115,32,111,102,32,101,110,116,105,116,121,32,34,37,115,34,0,0,0,0,0,0,112,114,105,109,82,101,112,108,97,99,101,70,105,110,97,108,105,122,101,114,0,0,0,0,96,59,39,44,32,112,111,115,115,105,98,108,121,32,100,117,101,32,116,111,32,98,97,100,32,108,97,121,111,117,116,0,77,111,110,97,100,70,105,120,0,0,0,0,0,0,0,0,80,108,101,97,115,101,32,117,115,101,32,97,32,115,104,111,114,116,101,114,32,110,97,109,101,32,102,111,114,32,99,108,97,115,115,32,34,37,115,34,0,0,0,0,0,0,0,0,112,114,105,109,70,105,110,97,108,105,122,101,0,0,0,0,45,45,32,116,121,112,101,32,99,108,97,115,115,0,0,0,91,76,101,97,118,105,110,103,32,72,117,103,115,93,10,0,96,46,39,0,0,0,0,0,67,111,110,116,114,111,108,46,77,111,110,97,100,46,70,105,120,0,0,0,0,0,0,0,99,108,97,115,115,0,0,0,73,79,72,97,115,104,0,0,96,124,39,0,0,0,0,0,116,121,112,101,67,111,109,112,0,0,0,0,0,0,0,0,77,97,107,101,46,37,115,0,73,79,69,113,108,0,0,0,96,95,39,0,0,0,0,0,101,120,116,101,110,115,105,98,108,101,32,114,101,99,111,114,100,115,0,0,0,0,0,0,103,101,110,101,114,97,116,111,114,0,0,0,0,0,0,0,112,114,105,109,105,116,105,118,101,0,0,0,0,0,0,0,101,113,83,116,97,98,108,101,78,97,109,101,0,0,0,0,96,125,39,44,32,112,111,115,115,105,98,108,121,32,100,117,101,32,116,111,32,98,97,100,32,108,97,121,111,117,116,0,109,97,114,107,84,121,112,101,0,0,0,0,0,0,0,0,98,111,111,108,101,97,110,32,113,117,97,108,105,102,105,101,114,0,0,0,0,0,0,0,112,114,105,109,105,116,105,118,101,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,104,97,115,104,83,116,97,98,108,101,78,97,109,101,0,0,96,123,39,44,32,112,111,115,115,105,98,108,121,32,100,117,101,32,116,111,32,98,97,100,32,108,97,121,111,117,116,0,32,32,32,32,32,32,32,32,104,117,103,115,95,115,116,97,98,108,101,95,102,111,114,95,37,115,32,61,32,0,0,0,10,42,42,42,32,80,111,115,115,105,98,108,101,32,99,97,117,115,101,58,32,34,76,105,115,116,34,32,109,111,100,117,108,101,32,110,111,116,32,105,109,112,111,114,116,101,100,0,100,101,112,80,114,101,100,69,120,112,0,0,0,0,0,0,100,101,82,101,102,83,116,97,98,108,101,78,97,109,101,0,96,41,39,0,0,0,0,0,83,116,114,105,110,103,32,115,116,111,114,97,103,101,32,115,112,97,99,101,32,101,120,104,97,117,115,116,101,100,0,0,47,104,111,109,101,47,106,111,101,108,47,114,101,115,101,97,114,99,104,46,106,115,47,105,110,99,111,109,112,108,101,116,101,47,104,117,103,115,47,98,117,105,108,100,47,104,117,103,115,57,56,45,83,101,112,50,48,48,54,45,106,115,47,104,117,103,115,45,100,105,114,47,108,105,98,47,104,117,103,115,0,0,0,0,0,0,0,0,34,37,115,34,32,110,111,116,32,105,110,32,115,99,111,112,101,32,40,105,110,116,114,111,100,117,99,101,100,32,98,121,32,112,97,114,97,108,108,101,108,32,99,111,109,112,114,101,104,101,110,115,105,111,110,41,0,0,0,0,0,0,0,0,87,114,111,110,103,32,110,117,109,98,101,114,32,111,102,32,97,114,103,117,109,101,110,116,115,32,102,111,114,32,108,97,99,107,115,32,112,114,101,100,105,99,97,116,101,0,0,0,109,97,107,101,83,116,97,98,108,101,78,97,109,101,0,0,96,40,39,0,0,0,0,0,76,105,115,116,0,0,0,0,87,114,111,110,103,32,110,117,109,98,101,114,32,111,102,32,97,114,103,117,109,101,110,116,115,32,102,111,114,32,99,108,97,115,115,32,34,37,115,34,0,0,0,0,0,0,0,0,102,105,110,97,108,105,122,101,114,87,97,105,116,105,110,103,0,0,0,0,0,0,0,0,96,64,39,0,0,0,0,0,68,97,116,97,46,76,105,115,116,0,0,0,0,0,0,0,65,109,98,105,103,117,111,117,115,32,99,108,97,115,115,32,111,99,99,117,114,114,101,110,99,101,32,34,37,115,34,0,80,116,114,0,0,0,0,0,114,117,110,70,105,110,97,108,105,122,101,114,0,0,0,0,107,105,110,100,115,32,100,111,32,110,111,116,32,109,97,116,99,104,0,0,0,0,0,0,99,111,109,109,97,0,0,0,77,111,100,117,108,101,32,115,116,111,114,97,103,101,32,115,112,97,99,101,32,101,120,104,97,117,115,116,101,100,0,0,95,102,114,69,110,117,109,0,45,45,70,70,73,95,0,0,100,108,101,116,32,123,46,46,46,125,32,105,110,32,0,0,99,97,115,101,32,101,120,112,114,101,115,115,105,111,110,0,84,79,71,71,76,69,83,58,32,103,114,111,117,112,115,32,98,101,103,105,110,32,119,105,116,104,32,43,47,45,32,116,111,32,116,117,114,110,32,111,112,116,105,111,110,115,32,111,110,47,111,102,102,32,114,101,115,112,46,10,0,0,0,0,85,110,100,101,102,105,110,101,100,32,99,108,97,115,115,32,34,37,115,34,0,0,0,0,99,104,101,99,107,69,120,112,111,114,116,77,111,100,117,108,101,0,0,0,0,0,0,0,102,105,110,97,108,105,122,101,0,0,0,0,0,0,0,0,96,33,39,0,0,0,0,0,99,97,115,101,32,112,97,116,116,101,114,110,0,0,0,0,116,97,103,32,99,108,97,115,115,101,115,0,0,0,0,0,114,101,112,108,97,99,101,70,105,110,97,108,105,122,101,114,0,0,0,0,0,0,0,0,10,45,45,32,105,110,115,116,97,110,99,101,115,58,10,0,96,45,39,0,0,0,0,0,84,104,105,115,32,118,101,114,115,105,111,110,32,111,102,32,72,117,103,115,32,100,111,101,115,32,110,111,116,32,115,117,112,112,111,114,116,32,70,70,73,32,118,101,114,115,105,111,110,32,37,100,10,0,0,0,116,121,112,101,69,120,112,114,0,0,0,0,0,0,0,0,105,110,115,116,97,110,99,101,0,0,0,0,0,0,0,0,100,101,82,101,102,87,101,97,107,0,0,0,0,0,0,0,96,58,58,39,0,0,0,0,108,97,109,98,100,97,32,101,120,112,114,101,115,115,105,111,110,0,0,0,0,0,0,0,70,105,120,105,116,121,32,100,101,99,108,97,114,97,116,105,111,110,115,32,110,111,116,32,112,101,114,109,105,116,116,101,100,32,105,110,32,105,110,115,116,97,110,99,101,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,0,0,0,0,109,107,87,101,97,107,0,0,96,61,39,0,0,0,0,0,97,110,111,110,121,109,111,117,115,32,116,121,112,101,32,118,97,114,105,97,98,108,101,115,0,0,0,0,0,0,0,0,116,121,112,101,32,97,110,110,111,116,97,116,105,111,110,0,84,121,112,101,32,115,105,103,110,97,116,117,114,101,32,100,101,99,108,97,114,97,116,105,111,110,115,32,110,111,116,32,112,101,114,109,105,116,116,101,100,32,105,110,32,105,110,115,116,97,110,99,101,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,0,0,0,0,119,101,97,107,80,116,114,69,113,0,0,0,0,0,0,0,96,45,62,39,0,0,0,0,97,115,32,40,64,41,32,112,97,116,116,101,114,110,0,0,10,42,42,42,32,73,110,115,116,97,110,99,101,32,32,32,32,32,32,32,32,32,58,32,0,0,0,0,0,0,0,0,117,110,115,97,102,101,70,111,114,101,105,103,110,80,116,114,84,111,80,116,114,0,0,0,101,110,100,32,111,102,32,105,110,112,117,116,0,0,0,0,32,32,32,32,115,119,105,116,99,104,32,40,119,104,97,116,41,32,123,10,32,32,32,32,32,32,32,32,99,97,115,101,32,37,100,58,10,0,0,0,99,97,115,101,32,100,105,115,99,114,105,109,105,110,97,110,116,0,0,0,0,0,0,0,73,110,115,116,97,110,99,101,32,105,115,32,109,111,114,101,32,103,101,110,101,114,97,108,32,116,104,97,110,32,97,32,100,101,112,101,110,100,101,110,99,121,32,97,108,108,111,119,115,0,0,0,0,0,0,0,116,111,117,99,104,70,111,114,101,105,103,110,80,116,114,0,107,101,121,119,111,114,100,0,108,105,115,116,0,0,0,0,73,108,108,101,103,97,108,32,112,114,101,100,105,99,97,116,101,32,105,110,32,105,110,115,116,97,110,99,101,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,0,0,0,0,97,100,100,70,111,114,101,105,103,110,80,116,114,70,105,110,97,108,105,122,101,114,69,110,118,0,0,0,0,0,0,0,37,115,32,34,37,115,34,0,99,111,110,100,105,116,105,111,110,97,108,0,0,0,0,0,105,110,115,116,97,110,99,101,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,0,97,100,100,70,111,114,101,105,103,110,80,116,114,70,105,110,97,108,105,122,101,114,0,0,83,121,110,116,97,120,32,101,114,114,111,114,32,105,110,32,37,115,32,40,117,110,101,120,112,101,99,116,101,100,32,37,115,41,0,0,0,0,0,0,67,97,110,110,111,116,32,115,97,116,105,115,102,121,32,99,111,110,115,116,114,97,105,110,116,32,0,0,0,0,0,0,65,109,98,105,103,117,111,117,115,32,116,121,112,101,32,118,97,114,105,97,98,108,101,32,34,37,115,34,0,0,0,0,70,117,110,80,116,114,0,0,110,101,119,70,111,114,101,105,103,110,80,116,114,95,0,0,117,110,105,102,105,99,97,116,105,111,110,32,119,111,117,108,100,32,103,105,118,101,32,105,110,102,105,110,105,116,101,32,116,121,112,101,0,0,0,0,80,114,101,99,101,100,101,110,99,101,32,118,97,108,117,101,32,109,117,115,116,32,98,101,32,97,110,32,105,110,116,101,103,101,114,32,105,110,32,116,104,101,32,114,97,110,103,101,32,91,37,100,46,46,37,100,93,0,0,0,0,0,0,0,67,111,110,116,114,111,108,32,115,116,97,99,107,32,111,118,101,114,102,108,111,119,0,0,101,110,84,111,69,110,0,0,70,111,114,101,105,103,110,32,105,109,112,111,114,116,32,115,97,102,101,116,121,32,108,101,118,101,108,32,34,37,115,34,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,0,100,101,102,97,117,108,116,32,109,101,109,98,101,114,32,98,105,110,100,105,110,103,0,0,37,45,53,99,37,115,10,0,67,97,110,110,111,116,32,117,115,101,32,116,121,112,101,32,115,121,110,111,110,121,109,32,105,110,32,105,110,115,116,97,110,99,101,32,104,101,97,100,0,0,0,0,0,0,0,0,85,110,107,110,111,119,110,32,109,111,100,117,108,101,32,34,37,115,34,32,101,120,112,111,114,116,101,100,32,102,114,111,109,32,109,111,100,117,108,101,32,34,37,115,34,0,0,0,101,113,70,111,114,101,105,103,110,79,98,106,0,0,0,0,99,108,97,115,115,32,101,120,112,114,101,115,115,105,111,110,0,0,0,0,0,0,0,0,115,99,70,105,110,100,0,0,83,121,110,116,97,120,32,101,114,114,111,114,32,105,110,32,105,110,115,116,97,110,99,101,32,104,101,97,100,32,40,99,111,110,115,116,114,117,99,116,111,114,32,101,120,112,101,99,116,101,100,41,0,0,0,0,119,114,105,116,101,70,111,114,101,105,103,110,79,98,106,0,32,61,32,60,114,101,115,116,114,105,99,116,101,100,62,0,76,97,115,116,32,103,101,110,101,114,97,116,111,114,32,105,110,32,100,111,32,123,46,46,46,125,32,109,117,115,116,32,98,101,32,97,110,32,101,120,112,114,101,115,115,105,111,110,0,0,0,0,0,0,0,0,72,117,103,115,65,80,73,86,101,114,115,105,111,110,0,0,42,42,42,32,111,112,116,105,111,110,32,97,110,100,32,116,104,101,110,32,116,114,121,32,97,103,97,105,110,46,32,32,40,84,104,101,32,99,117,114,114,101,110,116,32,115,101,116,116,105,110,103,32,105,115,32,45,99,37,100,41,10,0,0,82,101,112,101,97,116,101,100,32,116,121,112,101,32,118,97,114,105,97,98,108,101,32,34,37,115,34,32,105,110,32,105,110,115,116,97,110,99,101,32,104,101,97,100,0,0,0,0,99,97,115,116,80,116,114,84,111,83,116,97,98,108,101,80,116,114,0,0,0,0,0,0,76,97,115,116,32,103,101,110,101,114,97,116,111,114,32,105,110,32,109,100,111,32,123,46,46,46,125,32,109,117,115,116,32,98,101,32,97,110,32,101,120,112,114,101,115,115,105,111,110,0,0,0,0,0,0,0,42,42,42,32,121,111,117,32,109,97,121,32,115,116,105,108,108,32,116,114,121,32,116,111,32,105,110,99,114,101,97,115,101,32,116,104,101,32,99,117,116,111,102,102,32,108,105,109,105,116,32,117,115,105,110,103,32,116,104,101,32,45,99,10,0,0,0,0,0,0,0,0,83,121,110,116,97,120,32,101,114,114,111,114,32,105,110,32,105,110,115,116,97,110,99,101,32,104,101,97,100,32,40,118,97,114,105,97,98,108,101,32,101,120,112,101,99,116,101,100,41,0,0,0,0,0,0,0,99,97,115,116,83,116,97,98,108,101,80,116,114,84,111,80,116,114,0,0,0,0,0,0,73,108,108,101,103,97,108,32,108,101,102,116,32,104,97,110,100,32,115,105,100,101,32,105,110,32,100,97,116,97,32,116,121,112,101,32,100,101,99,108,97,114,97,116,105,111,110,0,116,121,112,101,32,101,120,112,114,101,115,115,105,111,110,0,10,42,42,42,32,84,104,105,115,32,109,97,121,32,105,110,100,105,99,97,116,101,32,116,104,97,116,32,116,104,101,32,112,114,111,98,108,101,109,32,105,115,32,117,110,100,101,99,105,100,97,98,108,101,46,32,32,72,111,119,101,118,101,114,44,10,0,0,0,0,0,0,34,37,115,34,32,109,117,108,116,105,112,108,121,32,100,101,102,105,110,101,100,0,0,0,102,114,101,101,83,116,97,98,108,101,80,116,114,0,0,0,81,117,97,108,105,102,105,101,100,32,99,111,110,115,116,114,117,99,116,111,114,32,105,110,32,100,97,116,97,32,116,121,112,101,32,100,101,99,108,97,114,97,116,105,111,110,0,0,10,42,42,42,32,99,97,110,32,98,101,32,100,101,100,117,99,101,100,32,102,114,111,109,58,10,42,42,42,32,32,32,32,32,0,0,0,0,0,0,82,101,112,101,97,116,101,100,32,117,115,101,32,111,102,32,118,97,114,105,97,98,108,101,32,34,37,115,34,32,105,110,32,112,97,116,116,101,114,110,32,98,105,110,100,105,110,103,0,0,0,0,0,0,0,0,100,101,82,101,102,83,116,97,98,108,101,80,116,114,0,0,68,69,76,0,0,0,0,0,115,116,97,116,105,99,32,118,111,105,100,32,104,117,103,115,95,112,114,105,109,67,111,110,116,114,111,108,40,105,110,116,41,59,10,115,116,97,116,105,99,32,118,111,105,100,32,104,117,103,115,95,112,114,105,109,67,111,110,116,114,111,108,40,119,104,97,116,41,10,105,110,116,32,119,104,97,116,59,32,123,10,0,0,0,0,0,0,42,42,42,32,100,101,116,101,114,109,105,110,101,32,119,104,101,116,104,101,114,58,10,42,42,42,32,32,32,32,32,0,103,101,116,80,97,116,86,97,114,115,0,0,0,0,0,0,123,73,110,116,101,114,114,117,112,116,101,100,33,125,10,0,109,97,107,101,83,116,97,98,108,101,80,116,114,0,0,0,83,80,0,0,0,0,0,0,108,105,102,116,86,97,114,0,10,42,42,42,32,84,104,101,32,116,121,112,101,32,99,104,101,99,107,101,114,32,104,97,115,32,114,101,97,99,104,101,100,32,116,104,101,32,99,117,116,111,102,102,32,108,105,109,105,116,32,119,104,105,108,101,32,116,114,121,105,110,103,32,116,111,10,0,0,0,0,0,69,113,117,97,116,105,111,110,115,32,103,105,118,101,32,100,105,102,102,101,114,101,110,116,32,97,114,105,116,105,101,115,32,102,111,114,32,34,37,115,34,0,0,0,0,0,0,0,101,113,82,101,102,0,0,0,85,83,0,0,0,0,0,0,10,42,42,42,32,77,105,115,115,105,110,103,32,99,111,110,116,101,120,116,32,58,32,0,70,85,78,66,73,78,68,0,115,101,116,82,101,102,0,0,82,83,0,0,0,0,0,0,10,42,42,42,32,69,120,112,101,99,116,101,100,32,116,121,112,101,32,32,32,58,32,0,84,121,112,101,32,115,105,103,110,97,116,117,114,101,32,102,111,114,32,113,117,97,108,105,102,105,101,100,32,118,97,114,105,97,98,108,101,32,34,37,115,34,32,105,115,32,110,111,116,32,97,108,108,111,119,101,100,0,0,0,0,0,0,0,87,111,114,100,54,52,0,0,103,101,116,82,101,102,0,0,99,97,110,110,111,116,32,105,110,115,116,97,110,116,105,97,116,101,32,83,107,111,108,101,109,32,99,111,110,115,116,97,110,116,0,0,0,0,0,0,71,83,0,0,0,0,0,0,115,102,117,110,80,111,115,0,95,116,111,69,110,117,109,0,70,111,114,101,105,103,110,32,105,109,112,111,114,116,32,99,97,108,108,105,110,103,32,99,111,110,118,101,110,116,105,111,110,32,34,37,115,34,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,0,0,0,73,109,112,108,101,109,101,110,116,97,116,105,111,110,32,111,102,32,37,115,32,114,101,113,117,105,114,101,115,32,101,120,116,114,97,32,99,111,110,116,101,120,116,0,0,0,0,0,37,45,53,115,37,115,10,0,77,117,108,116,105,112,108,101,32,116,121,112,101,32,115,105,103,110,97,116,117,114,101,115,32,102,111,114,32,34,37,115,34,0,0,0,0,0,0,0,69,110,116,105,116,121,32,34,37,115,34,32,105,115,32,110,111,116,32,97,32,37,115,32,34,37,115,34,0,0,0,0,110,101,119,82,101,102,0,0,105,110,112,117,116,0,0,0,70,83,0,0,0,0,0,0,116,121,112,101,77,101,109,98,101,114,49,0,0,0,0,0,77,105,115,115,105,110,103,32,98,105,110,100,105,110,103,32,102,111,114,32,118,97,114,105,97,98,108,101,32,34,37,115,34,32,105,110,32,116,121,112,101,32,115,105,103,110,97,116,117,114,101,0,0,0,0,0,104,83,101,116,69,99,104,111,0,0,0,0,0,0,0,0,10,45,45,32,115,101,108,101,99,116,111,114,115,58,0,0,69,83,67,0,0,0,0,0,105,110,105,116,77,111,100,117,108,101,0,0,0,0,0,0,105,110,115,116,97,110,99,101,32,109,101,109,98,101,114,32,98,105,110,100,105,110,103,0,116,121,112,101,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,0,0,0,0,0,104,71,101,116,69,99,104,111,0,0,0,0,0,0,0,0,83,85,66,0,0,0,0,0,10,42,42,42,32,82,101,113,117,105,114,101,100,32,115,117,112,101,114,99,108,97,115,115,32,58,32,0,0,0,0,0,103,101,116,65,116,116,114,0,104,73,115,84,101,114,109,105,110,97,108,68,101,118,105,99,101,0,0,0,0,0,0,0,69,77,0,0,0,0,0,0,102,117,110,99,116,105,111,110,97,108,32,100,101,112,101,110,100,101,110,99,121,0,0,0,10,42,42,42,32,67,111,110,116,101,120,116,32,115,117,112,112,108,105,101,100,32,32,32,32,58,32,0,0,0,0,0,77,117,108,116,105,112,108,101,32,102,105,120,105,116,121,32,100,101,99,108,97,114,97,116,105,111,110,115,32,102,111,114,32,111,112,101,114,97,116,111,114,32,34,37,115,34,0,0,104,71,101,116,66,117,102,0,67,65,78,0,0,0,0,0,10,42,42,42,32,73,110,115,116,97,110,99,101,32,32,32,32,32,32,32,32,32,32,32,32,58,32,0,0,0,0,0,67,97,110,110,111,116,32,102,105,110,100,32,98,105,110,100,105,110,103,32,102,111,114,32,111,112,101,114,97,116,111,114,32,34,37,115,34,32,105,110,32,102,105,120,105,116,121,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,0,0,104,80,117,116,66,117,102,0,69,84,66,0,0,0,0,0,125,59,10,0,0,0,0,0,85,110,97,98,108,101,32,116,111,32,108,111,97,100,32,112,114,101,108,117,100,101,0,0,67,97,110,110,111,116,32,98,117,105,108,100,32,115,117,112,101,114,99,108,97,115,115,32,105,110,115,116,97,110,99,101,0,0,0,0,0,0,0,0,61,61,0,0,0,0,0,0,10,70,65,84,65,76,32,69,82,82,79,82,58,32,37,115,10,0,0,0,0,0,0,0,104,83,101,116,66,105,110,97,114,121,77,111,100,101,0,0,83,89,78,0,0,0,0,0,108,105,102,116,0,0,0,0,116,121,112,101,73,110,115,116,68,101,102,110,0,0,0,0,99,111,109,112,97,114,101,0,112,114,105,109,71,101,116,72,97,110,100,108,101,78,117,109,98,101,114,0,0,0,0,0,78,65,75,0,0,0,0,0,32,110,111,116,32,112,101,114,109,105,116,116,101,100,32,105,110,32,114,101,115,116,114,105,99,116,101,100,32,98,105,110,100,105,110,103,0,0,0,0,101,110,117,109,70,114,111,109,84,104,101,110,0,0,0,0,112,114,105,109,69,113,72,97,110,100,108,101,0,0,0,0,68,67,52,0,0,0,0,0,69,120,112,108,105,99,105,116,32,111,118,101,114,108,111,97,100,101,100,32,116,121,112,101,32,102,111,114,32,34,37,115,34,0,0,0,0,0,0,0,101,110,117,109,70,114,111,109,84,111,0,0,0,0,0,0,87,111,114,100,51,50,0,0,104,87,97,105,116,70,111,114,73,110,112,117,116,0,0,0,116,121,112,101,115,32,100,111,32,110,111,116,32,109,97,116,99,104,0,0,0,0,0,0,68,67,51,0,0,0,0,0,100,37,100,0,0,0,0,0,85,110,107,110,111,119,110,32,112,114,105,109,105,116,105,118,101,32,114,101,102,101,114,101,110,99,101,32,34,37,115,34,0,0,0,0,0,0,0,0,101,110,73,110,82,110,103,0,82,101,100,101,99,108,97,114,97,116,105,111,110,32,111,102,32,102,111,114,101,105,103,110,32,34,37,115,34,0,0,0,10,42,42,42,32,79,117,116,115,116,97,110,100,105,110,103,32,99,111,110,116,101,120,116,32,58,32,0,0,0,0,0,79,112,116,105,111,110,32,115,116,114,105,110,103,32,109,117,115,116,32,98,101,103,105,110,32,119,105,116,104,32,96,43,39,32,111,114,32,96,45,39,0,0,0,0,0,0,0,0,101,110,117,109,70,114,111,109,0,0,0,0,0,0,0,0,69,120,112,108,105,99,105,116,32,101,120,112,111,114,116,32,108,105,115,116,32,103,105,118,101,110,32,102,111,114,32,110,111,110,45,99,108,97,115,115,47,100,97,116,97,116,121,112,101,32,34,37,115,34,32,105,110,32,101,120,112,111,114,116,32,108,105,115,116,32,111,102,32,109,111,100,117,108,101,32,34,37,115,34,0,0,0,0,104,70,105,108,101,83,105,122,101,0,0,0,0,0,0,0,68,67,50,0,0,0,0,0,10,42,42,42,32,73,110,102,101,114,114,101,100,32,116,121,112,101,32,32,32,32,32,32,32,58,32,0,0,0,0,0,102,114,111,109,69,110,117,109,0,0,0,0,0,0,0,0,104,73,115,83,101,101,107,97,98,108,101,0,0,0,0,0,32,58,58,32,0,0,0,0,68,67,49,0,0,0,0,0,46,99,0,0,0,0,0,0,10,42,42,42,32,66,105,110,100,105,110,103,32,32,32,32,32,32,32,32,32,32,32,32,32,58,32,37,115,0,0,0,116,111,69,110,117,109,0,0,104,73,115,87,114,105,116,97,98,108,101,0,0,0,0,0,68,76,69,0,0,0,0,0,85,110,114,101,115,111,108,118,101,100,32,116,111,112,45,108,101,118,101,108,32,111,118,101,114,108,111,97,100,105,110,103,0,0,0,0,0,0,0,0,67,97,110,32,111,110,108,121,32,100,101,114,105,118,101,32,105,110,115,116,97,110,99,101,115,32,111,102,32,69,110,117,109,32,102,111,114,32,101,110,117,109,101,114,97,116,105,111,110,32,116,121,112,101,115,0,104,73,115,82,101,97,100,97,98,108,101,0,0,0,0,0,83,73,0,0,0,0,0,0,102,117,110,99,116,105,111,110,32,98,105,110,100,105,110,103,0,0,0,0,0,0,0,0,100,101,112,101,110,100,101,110,116,32,112,97,114,97,109,101,116,101,114,115,0,0,0,0,67,97,110,32,111,110,108,121,32,100,101,114,105,118,101,32,105,110,115,116,97,110,99,101,115,32,111,102,32,73,120,32,102,111,114,32,101,110,117,109,101,114,97,116,105,111,110,32,111,114,32,112,114,111,100,117,99,116,32,116,121,112,101,115,0,0,0,0,0,0,0,0,104,73,115,67,108,111,115,101,100,0,0,0,0,0,0,0,83,79,0,0,0,0,0,0,114,105,103,104,116,32,104,97,110,100,32,115,105,100,101,0,105,110,82,97,110,103,101,0,104,73,115,79,112,101,110,0,67,82,0,0,0,0,0,0,104,117,103,115,112,114,105,109,95,37,115,125,44,10,0,0,80,114,101,108,117,100,101,0,108,104,115,32,112,97,116,116,101,114,110,0,0,0,0,0,105,110,100,101,120,0,0,0,10,0,0,0,0,0,0,0,35,105,110,99,108,117,100,101,32,37,115,10,0,0,0,0,104,76,111,111,107,65,104,101,97,100,0,0,0,0,0,0,70,70,0,0,0,0,0,0,112,109,99,84,101,114,109,0,116,121,112,101,66,105,110,100,0,0,0,0,0,0,0,0,114,97,110,103,101,0,0,0,104,83,101,101,107,80,114,105,109,0,0,0,0,0,0,0,86,84,0,0,0,0,0,0,101,113,117,97,108,84,121,112,101,115,0,0,0,0,0,0,115,104,111,119,115,80,114,101,99,0,0,0,0,0,0,0,104,71,101,116,66,117,102,102,0,0,0,0,0,0,0,0,76,70,0,0,0,0,0,0,105,110,102,101,114,114,101,100,32,116,121,112,101,0,0,0,46,104,115,58,46,108,104,115,0,0,0,0,0,0,0,0,125,0,0,0,0,0,0,0,87,111,114,100,49,54,0,0,104,83,101,116,66,117,102,102,0,0,0,0,0,0,0,0,102,105,101,108,100,32,109,105,115,109,97,116,99,104,0,0,72,84,0,0,0,0,0,0,102,105,110,100,81,117,97,108,78,97,109,101,115,0,0,0,95,105,110,82,97,110,103,101,0,0,0,0,0,0,0,0,32,97,32,115,105,110,103,108,101,32,115,99,114,105,112,116,32,102,105,108,101,46,10,0,112,117,116,69,120,116,0,0,103,101,110,65,115,115,0,0,69,110,97,98,108,101,32,96,104,101,114,101,32,100,111,99,117,109,101,110,116,115,39,0,123,0,0,0,0,0,0,0,109,101,109,98,101,114,32,111,102,32,99,108,97,115,115,0,104,83,101,116,80,111,115,110,80,114,105,109,0,0,0,0,66,83,0,0,0,0,0,0,97,100,100,69,118,105,100,80,97,114,97,109,115,0,0,0,44,0,0,0,0,0,0,0,104,71,101,116,80,111,115,110,80,114,105,109,0,0,0,0,10,45,45,32,99,111,110,115,116,114,117,99,116,111,114,115,58,0,0,0,0,0,0,0,66,69,76,0,0,0,0,0,113,117,97,108,105,102,121,66,105,110,100,105,110,103,0,0,41,0,0,0,0,0,0,0,104,67,108,111,115,101,0,0,65,67,75,0,0,0,0,0])
.concat([103,117,97,114,100,0,0,0,40,0,0,0,0,0,0,0,104,70,108,117,115,104,0,0,69,78,81,0,0,0,0,0,103,117,97,114,100,101,100,32,101,120,112,114,101,115,115,105,111,110,0,0,0,0,0,0,100,101,102,97,117,108,116,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,0,0,114,101,97,100,115,80,114,101,99,0,0,0,0,0,0,0,104,73,115,69,79,70,0,0,69,79,84,0,0,0,0,0,67,111,109,112,105,108,105,110,103,0,0,0,0,0,0,0,114,101,115,117,108,116,32,116,121,112,101,0,0,0,0,0,67,97,110,32,111,110,108,121,32,100,101,114,105,118,101,32,105,110,115,116,97,110,99,101,115,32,111,102,32,66,111,117,110,100,101,100,32,102,111,114,32,101,110,117,109,101,114,97,116,105,111,110,32,97,110,100,32,112,114,111,100,117,99,116,32,116,121,112,101,115,0,0,115,116,100,101,114,114,0,0,69,84,88,0,0,0,0,0,32,32,32,32,123,34,37,115,34,44,32,51,44,32,0,0,85,110,97,98,108,101,32,116,111,32,108,111,97,100,32,112,114,101,108,117,100,101,32,105,109,112,108,101,109,101,110,116,97,116,105,111,110,0,0,0,10,42,42,42,32,66,101,99,97,117,115,101,32,32,32,32,32,32,32,32,58,32,37,115,0,0,0,0,0,0,0,0,109,97,120,66,111,117,110,100,0,0,0,0,0,0,0,0,115,116,100,111,117,116,0,0,104,116,116,112,58,47,47,104,97,99,107,97,103,101,46,104,97,115,107,101,108,108,46,111,114,103,47,116,114,97,99,47,104,117,103,115,0,0,0,0,83,84,88,0,0,0,0,0,103,117,97,114,100,32,102,97,105,108,115,0,0,0,0,0,10,42,42,42,32,84,121,112,101,32,32,32,32,32,32,32,32,32,32,32,58,32,0,0,109,105,110,66,111,117,110,100,0,0,0,0,0,0,0,0,115,116,100,105,110,0,0,0,83,79,72,0,0,0,0,0,10,42,42,42,32,84,101,114,109,32,32,32,32,32,32,32,32,32,32,32,58,32,0,0,10,42,42,42,32,67,111,109,109,111,110,32,105,110,115,116,97,110,99,101,32,58,32,0,104,97,110,100,108,101,84,111,70,100,0,0,0,0,0,0,78,85,76,0,0,0,0,0,10,42,42,42,32,69,120,112,114,101,115,115,105,111,110,32,32,32,32,32,58,32,0,0,10,42,42,42,32,79,118,101,114,108,97,112,115,32,119,105,116,104,32,32,32,58,32,0,87,111,114,100,56,0,0,0,111,112,101,110,70,100,0,0,100,105,115,116,105,110,99,116,32,114,111,119,115,32,104,97,118,101,32,99,111,109,109,111,110,32,116,97,105,108,0,0,118,0,0,0,0,0,0,0,102,105,110,100,81,117,97,108,78,97,109,101,50,0,0,0,101,110,73,110,100,101,120,0,77,117,108,116,105,112,108,101,32,100,101,102,97,117,108,116,32,100,101,99,108,97,114,97,116,105,111,110,115,32,97,114,101,32,110,111,116,32,112,101,114,109,105,116,116,101,100,32,105,110,0,0,0,0,0,0,84,121,112,101,32,101,114,114,111,114,32,105,110,32,37,115,0,0,0,0,0,0,0,0,69,110,97,98,108,101,32,114,111,111,116,32,111,112,116,105,109,105,115,97,116,105,111,110,0,0,0,0,0,0,0,0,10,42,42,42,32,84,104,105,115,32,105,110,115,116,97,110,99,101,32,32,32,58,32,0,99,104,101,99,107,69,120,112,111,114,116,49,0,0,0,0,111,112,101,110,66,105,110,97,114,121,70,105,108,101,0,0,39,0,0,0,0,0,0,0,32,117,115,101,100,32,119,104,101,114,101,32,97,32,118,97,114,105,97,98,108,101,32,111,114,32,119,105,108,100,99,97,114,100,32,105,115,32,114,101,113,117,105,114,101,100,10,0,79,118,101,114,108,97,112,112,105,110,103,32,105,110,115,116,97,110,99,101,115,32,102,111,114,32,99,108,97,115,115,32,34,37,115,34,0,0,0,0,111,112,101,110,70,105,108,101,0,0,0,0,0,0,0,0,110,101,119,116,121,112,101,32,0,0,0,0,0,0,0,0,34,0,0,0,0,0,0,0,37,46,49,53,103,0,0,0,65,114,103,117,109,101,110,116,32,0,0,0,0,0,0,0,10,42,42,42,32,85,110,100,101,114,32,100,101,112,101,110,100,101,110,99,121,32,58,32,0,0,0,0,0,0,0,0,104,71,101,116,67,111,110,116,101,110,116,115,0,0,0,0,116,0,0,0,0,0,0,0,35,105,110,99,108,117,100,101,32,34,37,115,34,10,0,0,68,101,102,105,110,105,116,105,111,110,32,114,101,113,117,105,114,101,115,32,97,116,32,108,101,97,115,116,32,37,100,32,112,97,114,97,109,101,116,101,114,115,32,111,110,32,108,104,115,0,0,0,0,0,0,0,10,42,42,42,32,70,111,114,32,99,108,97,115,115,32,32,32,32,32,32,32,32,58,32,0,0,0,0,0,0,0,0,104,114,101,97,100,101,114,0,110,0,0,0,0,0,0,0,10,115,116,97,116,105,99,32,118,111,105,100,32,104,117,103,115,112,114,105,109,95,37,115,95,37,100,40,72,117,103,115,83,116,97,99,107,80,116,114,41,59,10,0,0,0,0,0,32,119,104,101,114,101,32,97,32,115,105,110,103,108,101,32,118,97,114,105,97,98,108,101,32,119,97,115,32,105,110,102,101,114,114,101,100,0,0,0,105,110,115,116,97,110,99,101,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,0,10,42,42,42,32,67,111,110,102,108,105,99,116,115,32,119,105,116,104,32,32,32,58,32,0,0,0,0,0,0,0,0,104,80,117,116,83,116,114,0,102,0,0,0,0,0,0,0,115,116,97,116,105,99,32,118,111,105,100,32,104,117,103,115,112,114,105,109,95,37,115,95,37,100,40,72,117,103,115,83,116,97,99,107,80,116,114,32,104,117,103,115,95,114,111,111,116,41,10,0,0,0,0,0,32,97,110,100,32,0,0,0,10,42,42,42,32,84,104,105,115,32,105,110,115,116,97,110,99,101,32,32,32,32,58,32,0,0,0,0,0,0,0,0,104,80,117,116,67,104,97,114,0,0,0,0,0,0,0,0,98,0,0,0,0,0,0,0,32,37,115,37,100,59,10,0,104,117,103,115,112,114,105,109,95,37,115,95,37,100,125,44,10,0,0,0,0,0,0,0,37,115,32,110,111,116,32,102,111,117,110,100,32,111,110,32,99,117,114,114,101,110,116,32,112,97,116,104,58,32,34,37,115,34,10,0,0,0,0,0,84,121,112,101,32,97,110,110,111,116,97,116,105,111,110,32,117,115,101,115,32,100,105,115,116,105,110,99,116,32,118,97,114,105,97,98,108,101,115,32,0,0,0,0,0,0,0,0,73,110,115,116,97,110,99,101,115,32,97,114,101,32,110,111,116,32,99,111,110,115,105,115,116,101,110,116,32,119,105,116,104,32,100,101,112,101,110,100,101,110,99,105,101,115,0,0,104,71,101,116,67,104,97,114,0,0,0,0,0,0,0,0,80,108,101,97,115,101,32,114,101,112,111,114,116,32,116,104,105,115,32,72,117,103,115,32,98,117,103,32,116,111,32,0,97,0,0,0,0,0,0,0,109,97,116,99,104,32,102,97,105,108,115,0,0,0,0,0,97,114,103,37,100,0,0,0,108,101,97,118,101,80,101,110,100,105,110,103,66,116,121,118,115,0,0,0,0,0,0,0,78,111,32,109,101,109,98,101,114,32,34,37,115,34,32,105,110,32,99,108,97,115,115,32,34,37,115,34,0,0,0,0,112,114,105,109,83,101,116,65,114,103,115,0,0,0,0,0,92,101,110,100,123,99,111,100,101,125,32,101,110,99,111,117,110,116,101,114,101,100,32,111,117,116,115,105,100,101,32,99,111,100,101,32,98,108,111,99,107,0,0,0,0,0,0,0,37,115,40,0,0,0,0,0,32,119,97,115,32,105,110,102,101,114,114,101,100,0,0,0,80,97,116,116,101,114,110,32,98,105,110,100,105,110,103,32,105,108,108,101,103,97,108,32,105,110,32,37,115,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,0,0,0,0,112,114,105,109,83,101,116,80,114,111,103,78,97,109,101,0,92,101,110,100,123,99,111,100,101,125,0,0,0,0,0,0,114,101,115,49,32,61,32,0,32,119,104,101,114,101,32,97,32,109,111,114,101,32,115,112,101,99,105,102,105,99,32,116,121,112,101,32,0,0,0,0,67,97,110,110,111,116,32,100,101,114,105,118,101,32,105,110,115,116,97,110,99,101,115,32,111,102,32,99,108,97,115,115,32,34,37,115,34,0,0,0,87,111,114,100,0,0,0,0,112,114,105,109,71,101,116,65,114,103,115,0,0,0,0,0,114,101,109,111,118,101,114,0,92,98,101,103,105,110,123,99,111,100,101,125,32,101,110,99,111,117,110,116,101,114,101,100,32,105,110,115,105,100,101,32,99,111,100,101,32,98,108,111,99,107,0,0,0,0,0,0,73,108,108,101,103,97,108,32,105,110,98,111,117,110,100,32,40,99,111,109,105,110,103,32,105,110,116,111,32,72,97,115,107,101,108,108,41,32,116,121,112,101,0,0,0,0,0,0,102,105,110,100,81,117,97,108,78,97,109,101,0,0,0,0,95,105,110,100,101,120,0,0,10,42,42,42,32,97,115,115,105,103,110,101,100,32,116,111,32,32,32,32,58,32,0,0,44,32,0,0,0,0,0,0,84,121,112,101,32,97,110,110,111,116,97,116,105,111,110,32,117,115,101,115,32,118,97,114,105,97,98,108,101,32,0,0,65,112,112,108,121,32,39,100,101,102,97,117,108,116,105,110,103,39,32,119,104,101,110,32,112,114,105,110,116,105,110,103,32,116,121,112,101,115,0,0,105,110,105,116,68,101,114,73,110,115,116,0,0,0,0,0,99,111,110,115,116,114,117,99,116,111,114,32,111,102,32,116,121,112,101,0,0,0,0,0,112,114,105,109,71,101,116,80,114,111,103,78,97,109,101,0,92,98,101,103,105,110,123,99,111,100,101,125,0,0,0,0,104,117,103,115,45,62,112,117,116,83,116,97,98,108,101,80,116,114,52,40,37,115,37,100,41,59,10,0,0,0,0,0,67,97,110,110,111,116,32,97,108,108,111,99,97,116,101,32,99,104,97,114,32,99,111,110,115,32,116,97,98,108,101,0,115,116,97,114,116,77,111,100,117,108,101,0,0,0,0,0,10,42,42,42,32,73,110,102,101,114,114,101,100,32,116,121,112,101,32,58,32,0,0,0,99,111,112,121,65,100,106,0,103,101,116,82,97,110,100,111,109,83,101,101,100,0,0,0,100,97,116,97,32,0,0,0,77,97,120,105,109,117,109,32,116,111,107,101,110,32,108,101,110,103,116,104,32,40,37,100,41,32,101,120,99,101,101,100,101,100,0,0,0,0,0,0,104,117,103,115,45,62,112,117,116,70,111,114,101,105,103,110,40,37,115,37,100,41,59,10,0,0,0,0,0,0,0,0,37,46,49,102,0,0,0,0,10,42,42,42,32,69,120,112,101,99,116,101,100,32,116,121,112,101,32,58,32,0,0,0,32,105,115,32,114,101,113,117,105,114,101,100,32,116,111,32,100,101,114,105,118,101,32,0,112,114,105,109,83,121,115,116,101,109,0,0,0,0,0,0,85,110,114,101,99,111,103,110,105,115,101,100,32,101,115,99,97,112,101,32,115,101,113,117,101,110,99,101,32,96,92,94,37,99,39,0,0,0,0,0,104,117,103,115,45,62,112,117,116,70,117,110,80,116,114,40,37,115,37,100,41,59,10,0,73,110,102,101,114,114,101,100,32,116,121,112,101,32,105,115,32,110,111,116,32,103,101,110,101,114,97,108,32,101,110,111,117,103,104,0,0,0,0,0,65,110,32,105,110,115,116,97,110,99,101,32,111,102,32,0,103,101,116,69,110,118,0,0,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,104,117,103,115,45,62,112,117,116,80,116,114,40,37,115,37,100,41,59,10,0,0,0,0,10,42,42,42,32,67,111,110,115,116,114,97,105,110,116,115,32,32,32,58,32,0,0,0,99,108,97,115,115,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,0,0,0,0,32,100,111,101,115,32,110,111,116,32,104,111,108,100,10,0,112,114,105,109,71,67,0,0,103,101,116,83,99,114,105,112,116,78,97,109,101,58,32,73,108,108,101,103,97,108,32,115,99,114,105,112,116,32,105,110,100,101,120,32,37,100,32,40,109,97,120,58,32,37,100,41,0,0,0,0,0,0,0,0,79,99,116,97,108,32,99,104,97,114,97,99,116,101,114,32,101,115,99,97,112,101,32,111,117,116,32,111,102,32,114,97,110,103,101,0,0,0,0,0,104,117,103,115,45,62,112,117,116,65,100,100,114,40,37,115,37,100,41,59,10,0,0,0,10,42,42,42,32,71,105,118,101,110,32,99,111,110,116,101,120,116,32,58,32,0,0,0,32,98,101,99,97,117,115,101,32,112,114,101,100,105,99,97,116,101,32,0,0,0,0,0,112,97,115,115,73,79,0,0,69,109,112,116,121,32,111,99,116,97,108,32,99,104,97,114,97,99,116,101,114,32,101,115,99,97,112,101,0,0,0,0,104,117,103,115,45,62,112,117,116,66,111,111,108,40,37,115,37,100,41,59,10,0,0,0,37,100,44,32,0,0,0,0,72,117,103,115,46,80,114,101,108,117,100,101,0,0,0,0,10,42,42,42,32,84,121,112,101,32,32,32,32,32,32,32,32,32,32,58,32,0,0,0,67,97,110,110,111,116,32,100,101,114,105,118,101,32,0,0,112,114,105,109,98,105,110,100,73,79,0,0,0,0,0,0,73,78,84,69,82,78,65,76,32,69,82,82,79,82,58,32,37,115,10,0,0,0,0,0,72,101,120,97,100,101,99,105,109,97,108,32,99,104,97,114,97,99,116,101,114,32,101,115,99,97,112,101,32,111,117,116,32,111,102,32,114,97,110,103,101,0,0,0,0,0,0,0,77,68,79,58,32,78,111,110,45,114,101,99,117,114,115,105,118,101,44,32,110,111,110,45,115,105,110,103,108,101,116,111,110,32,115,101,103,109,101,110,116,44,32,73,109,112,111,115,115,105,98,108,101,33,0,0,104,117,103,115,45,62,112,117,116,68,111,117,98,108,101,40,37,115,37,100,41,59,10,0,10,42,42,42,32,69,120,112,114,101,115,115,105,111,110,32,32,32,32,58,32,0,0,0,42,42,42,32,111,112,116,105,111,110,32,97,110,100,32,116,104,101,110,32,116,114,121,32,97,103,97,105,110,46,32,32,40,84,104,101,32,99,117,114,114,101,110,116,32,115,101,116,116,105,110,103,32,105,115,32,45,99,37,100,41,10,0,0,84,105,109,101,46,103,101,116,67,108,111,99,107,84,105,109,101,0,0,0,0,0,0,0,69,109,112,116,121,32,104,101,120,97,100,101,99,105,109,97,108,32,99,104,97,114,97,99,116,101,114,32,101,115,99,97,112,101,0,0,0,0,0,0,104,117,103,115,45,62,112,117,116,70,108,111,97,116,40,37,115,37,100,41,59,10,0,0,10,62,62,62,62,62,62,62,32,79,98,115,101,114,118,97,116,105,111,110,115,32,60,60,60,60,60,60,0,0,0,0,67,97,110,110,111,116,32,106,117,115,116,105,102,121,32,99,111,110,115,116,114,97,105,110,116,115,32,105,110,32,37,115,0,0,0,0,0,0,0,0,42,42,42,32,121,111,117,32,109,97,121,32,115,116,105,108,108,32,116,114,121,32,116,111,32,105,110,99,114,101,97,115,101,32,116,104,101,32,99,117,116,111,102,102,32,108,105,109,105,116,32,117,115,105,110,103,32,116,104,101,32,45,99,10,0,0,0,0,0,0,0,0,84,105,109,101,46,116,111,67,108,111,99,107,84,105,109,101,0,0,0,0,0,0,0,0,77,105,115,115,105,110,103,32,96,92,39,32,116,101,114,109,105,110,97,116,105,110,103,32,115,116,114,105,110,103,32,108,105,116,101,114,97,108,32,103,97,112,0,0,0,0,0,0,104,117,103,115,45,62,112,117,116,87,111,114,100,54,52,40,37,115,37,100,41,59,10,0,101,120,112,108,105,99,105,116,108,121,32,116,121,112,101,100,32,98,105,110,100,105,110,103,0,0,0,0,0,0,0,0,10,42,42,42,32,84,104,105,115,32,109,97,121,32,105,110,100,105,99,97,116,101,32,116,104,97,116,32,116,104,101,32,112,114,111,98,108,101,109,32,105,115,32,117,110,100,101,99,105,100,97,98,108,101,46,32,32,72,111,119,101,118,101,114,44,10,0,0,0,0,0,0,73,110,116,54,52,0,0,0,116,111,67,108,111,99,107,84,105,109,101,80,114,105,109,0,10,42,42,42,32,32,0,0,68,101,99,105,109,97,108,32,99,104,97,114,97,99,116,101,114,32,101,115,99,97,112,101,32,111,117,116,32,111,102,32,114,97,110,103,101,0,0,0,104,117,103,115,45,62,112,117,116,87,111,114,100,51,50,40,37,115,37,100,41,59,10,0,78,97,109,101,32,115,116,111,114,97,103,101,32,115,112,97,99,101,32,101,120,104,97,117,115,116,101,100,0,0,0,0,10,42,42,42,32,97,109,98,105,103,117,111,117,115,32,116,121,112,101,32,58,32,0,0,101,110,82,97,110,103,101,0,40,0,0,0,0,0,0,0,69,120,105,115,116,101,110,116,105,97,108,108,121,32,113,117,97,110,116,105,102,105,101,100,32,118,97,114,105,97,98,108,101,32,101,115,99,97,112,101,115,32,102,114,111,109,32,112,97,116,116,101,114,110,32,0,68,105,115,112,108,97,121,32,114,101,115,117,108,116,115,32,111,102,32,73,79,32,112,114,111,103,114,97,109,115,0,0,32,97,102,116,101,114,32,37,100,32,105,116,101,114,97,116,105,111,110,115,46,0,0,0,84,114,97,110,115,112,97,114,101,110,116,32,101,120,112,111,114,116,32,111,102,32,114,101,115,116,114,105,99,116,101,100,32,116,121,112,101,32,115,121,110,111,110,121,109,32,34,37,115,34,32,105,110,32,101,120,112,111,114,116,32,108,105,115,116,32,111,102,32,109,111,100,117,108,101,32,34,37,115,34,0,0,0,0,0,0,0,0,116,111,67,97,108,84,105,109,101,80,114,105,109,0,0,0,73,108,108,101,103,97,108,32,99,104,97,114,97,99,116,101,114,32,101,115,99,97,112,101,32,115,101,113,117,101,110,99,101,32,34,92,37,115,34,0,104,117,103,115,45,62,112,117,116,87,111,114,100,49,54,40,37,115,37,100,41,59,10,0,40,41,0,0,0,0,0,0,10,42,42,42,32,82,101,115,117,108,116,32,116,121,112,101,32,32,58,32,0,0,0,0,10,42,42,42,32,67,97,110,110,111,116,32,100,101,114,105,118,101,32,0,0,0,0,0,103,101,116,67,108,111,99,107,84,105,109,101,80,114,105,109,0,0,0,0,0,0,0,0,32,61,32,0,0,0,0,0,73,108,108,101,103,97,108,32,117,115,101,32,111,102,32,103,97,112,32,105,110,32,99,104,97,114,97,99,116,101,114,32,99,111,110,115,116,97,110,116,0,0,0,0,0,0,0,0,104,117,103,115,45,62,112,117,116,87,111,114,100,56,40,37,115,37,100,41,59,10,0,0,84,111,111,32,109,97,110,121,32,113,117,97,110,116,105,102,105,101,100,32,116,121,112,101,32,118,97,114,105,97,98,108,101,115,0,0,0,0,0,0,101,69,46,0,0,0,0,0,10,42,42,42,32,70,114,111,109,32,112,97,116,116,101,114,110,32,58,32,0,0,0,0,10,42,42,42,32,67,111,110,116,101,120,116,32,32,32,32,58,32,0,0,0,0,0,0,103,101,116,67,80,85,85,115,97,103,101,0,0,0,0,0,73,108,108,101,103,97,108,32,101,115,99,97,112,101,32,115,101,113,117,101,110,99,101,0,104,117,103,115,45,62,112,117,116,73,110,116,54,52,40,37,115,37,100,41,59,10,0,0,10,42,42,42,32,86,97,114,105,97,98,108,101,32,32,32,32,32,58,32,0,0,0,0,10,42,42,42,32,67,111,110,115,116,114,97,105,110,116,32,58,32,0,0,0,0,0,0,99,108,111,99,107,84,105,99,107,115,0,0,0,0,0,0,73,108,108,101,103,97,108,32,117,115,101,32,111,102,32,96,92,38,39,32,105,110,32,99,104,97,114,97,99,116,101,114,32,99,111,110,115,116,97,110,116,0,0,0,0,0,0,0,104,117,103,115,45,62,112,117,116,73,110,116,51,50,40,37,115,37,100,41,59,10,0,0,69,120,105,115,116,101,110,116,105,97,108,108,121,32,113,117,97,110,116,105,102,105,101,100,32,118,97,114,105,97,98,108,101,32,105,110,32,105,110,102,101,114,114,101,100,32,116,121,112,101,0,0,0,0,0,0,112,114,105,109,105,116,105,118,101,32,100,101,102,110,0,0,73,108,108,101,103,97,108,32,72,97,115,107,101,108,108,32,57,56,32,99,108,97,115,115,32,99,111,110,115,116,114,97,105,110,116,32,105,110,32,37,115,0,0,0,0,0,0,0,68,105,114,101,99,116,111,114,121,46,99,114,101,97,116,101,68,105,114,101,99,116,111,114,121,0,0,0,0,0,0,0,84,111,111,32,109,97,110,121,32,108,101,118,101,108,115,32,111,102,32,112,114,111,103,114,97,109,32,110,101,115,116,105,110,103,0,0,0,0,0,0,104,117,103,115,45,62,112,117,116,73,110,116,49,54,40,37,115,37,100,41,59,10,0,0,108,101,97,118,101,83,107,111,108,86,97,114,115,0,0,0,118,37,100,0,0,0,0,0,100,101,114,105,118,101,100,32,105,110,115,116,97,110,99,101,0,0,0,0,0,0,0,0,68,105,114,101,99,116,111,114,121,46,114,101,109,111,118,101,68,105,114,101,99,116,111,114,121,0,0,0,0,0,0,0,73,109,112,114,111,112,101,114,108,121,32,116,101,114,109,105,110,97,116,101,100,32,104,101,114,101,32,100,111,99,117,109,101,110,116,0,0,0,0,0,104,117,103,115,45,62,112,117,116,73,110,116,56,40,37,115,37,100,41,59,10,0,0,0,32,32,32,32,123,34,37,115,34,44,32,0,0,0,0,0,72,117,103,115,32,115,101,97,114,99,104,32,112,97,116,104,32,110,111,116,32,100,101,102,105,110,101,100,0,0,0,0,116,121,112,101,68,101,102,110,71,114,111,117,112,0,0,0,85,110,100,101,102,105,110,101,100,32,116,121,112,101,32,118,97,114,105,97,98,108,101,32,34,37,115,34,0,0,0,0,80,114,105,110,116,32,110,111,46,32,114,101,100,117,99,116,105,111,110,115,47,99,101,108,108,115,32,97,102,116,101,114,32,101,118,97,108,0,0,0,68,105,114,101,99,116,111,114,121,46,114,101,109,111,118,101,70,105,108,101,0,0,0,0,32,45,32,0,0,0,0,0,83,105,110,103,108,101,116,111,110,32,36,32,105,110,32,104,101,114,101,32,100,111,99,117,109,101,110,116,0,0,0,0,116,114,97,110,115,108,97,116,101,0,0,0,0,0,0,0,104,117,103,115,45,62,112,117,116,73,110,116,40,37,115,37,100,41,59,10,0,0,0,0,32,114,101,113,117,105,114,101,100,32,102,111,114,32,100,101,102,105,110,105,116,105,111,110,32,111,102,32,0,0,0,0,68,105,114,101,99,116,111,114,121,46,114,101,110,97,109,101,68,105,114,101,99,116,111,114,121,0,0,0,0,0,0,0,100,101,112,84,121,112,101,69,120,112,0,0,0,0,0,0,66,114,101,97,107,32,64,32,0,0,0,0,0,0,0,0,43,43,0,0,0,0,0,0,104,117,103,115,45,62,112,117,116,67,104,97,114,40,37,115,37,100,41,59,10,0,0,0,115,0,0,0,0,0,0,0,85,110,100,101,102,105,110,101,100,32,116,121,112,101,32,99,111,110,115,116,114,117,99,116,111,114,32,34,37,115,34,0,77,111,100,117,108,101,32,34,37,115,34,32,97,108,114,101,97,100,121,32,108,111,97,100,101,100,0,0,0,0,0,0,105,115,32,97,32,100,105,114,101,99,116,111,114,121,0,0,113,117,111,116,101,0,0,0,81,117,97,108,105,102,105,101,100,32,116,121,112,101,32,118,97,114,105,97,98,108,101,115,32,110,111,116,32,97,108,108,111,119,101,100,0,0,0,0,73,110,116,51,50,0,0,0,95,70,65,84,66,65,82,0,68,105,114,101,99,116,111,114,121,46,114,101,110,97,109,101,70,105,108,101,0,0,0,0,77,105,115,109,97,116,99,104,105,110,103,32,117,115,101,115,32,111,102,32,105,109,112,108,105,99,105,116,32,112,97,114,97,109,101,116,101,114,10,0,80,114,111,103,114,97,109,32,108,105,110,101,32,110,101,120,116,32,116,111,32,99,111,109,109,101,110,116,0,0,0,0,32,97,114,103,37,100,0,0,102,105,110,100,81,117,97,108,84,121,99,111,110,50,0,0,80,114,105,110,116,32,116,121,112,101,32,97,102,116,101,114,32,101,118,97,108,117,97,116,105,111,110,0,0,0,0,0,65,109,98,105,103,117,111,117,115,32,116,121,112,101,32,115,105,103,110,97,116,117,114,101,32,105,110,32,37,115,0,0,95,114,97,110,103,101,0,0,73,110,115,116,97,110,99,101,37,115,32,111,102,32,0,0,85,115,101,32,34,115,104,111,119,34,32,116,111,32,100,105,115,112,108,97,121,32,114,101,115,117,108,116,115,0,0,0,99,108,97,115,115,32,99,111,110,115,116,114,97,105,110,116,0,0,0,0,0,0,0,0,69,120,112,108,105,99,105,116,32,99,111,110,115,116,114,117,99,116,111,114,32,108,105,115,116,32,103,105,118,101,110,32,102,111,114,32,116,121,112,101,32,115,121,110,111,110,121,109,32,34,37,115,34,32,105,110,32,101,120,112,111,114,116,32,108,105,115,116,32,111,102,32,109,111,100,117,108,101,32,34,37,115,34,0,0,0,0,0,68,105,114,101,99,116,111,114,121,46,103,101,116,67,117,114,114,101,110,116,68,105,114,101,99,116,111,114,121,0,0,0,87,97,114,110,105,110,103,58,32,85,110,97,98,108,101,32,116,111,32,115,116,97,114,116,32,101,100,105,116,111,114,10,0,0,0,0,0,0,0,0,99,104,101,99,107,73,109,112,111,114,116,76,105,115,116,0,69,109,112,116,121,32,115,99,114,105,112,116,32,45,32,112,101,114,104,97,112,115,32,121,111,117,32,102,111,114,103,111,116,32,116,104,101,32,96,37,99,39,115,63,0,0,0,0,72,117,103,115,83,116,97,98,108,101,80,116,114,32,102,117,110,49,0,0,0,0,0,0,117,110,99,97,117,103,104,116,32,101,120,99,101,112,116,105,111,110,0,0,0,0,0,0,70,111,114,101,105,103,110,32,101,120,112,111,114,116,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,32,121,101,116,46,0,0,0,0,0,105,112,97,114,97,109,32,112,114,101,100,105,99,97,116,101,0,0,0,0,0,0,0,0,68,105,114,101,99,116,111,114,121,46,115,101,116,67,117,114,114,101,110,116,68,105,114,101,99,116,111,114,121,0,0,0,116,121,112,101,32,0,0,0,85,110,116,101,114,109,105,110,97,116,101,100,32,110,101,115,116,101,100,32,99,111,109,109,101,110,116,32,123,45,32,46,46,46,0,0,0,0,0,0,32,37,115,0,0,0,0,0,37,46,55,103,0,0,0,0,116,121,112,101,83,101,108,50,0,0,0,0,0,0,0,0,108,97,99,107,115,32,112,114,101,100,105,99,97,116,101,0,68,105,114,101,99,116,111,114,121,46,100,111,101,115,70,105,108,101,69,120,105,115,116,0,73,109,112,114,111,112,101,114,108,121,32,116,101,114,109,105,110,97,116,101,100,32,99,104,97,114,97,99,116,101,114,32,99,111,110,115,116,97,110,116,0,0,0,0,0,0,0,0,77,111,100,117,108,101,32,34,37,115,34,32,114,101,99,117,114,115,105,118,101,108,121,32,105,109,112,111,114,116,115,32,105,116,115,101,108,102,0,0,32,40,42,37,115,41,0,0,10,0,0,0,0,0,0,0,105,108,108,101,103,97,108,32,100,105,114,101,99,116,111,114,121,32,110,97,109,101,0,0,107,105,110,100,65,116,111,109,0,0,0,0,0,0,0,0,72,117,103,115,32,105,115,32,110,111,116,32,99,111,110,102,105,103,117,114,101,100,32,116,111,32,117,115,101,32,97,110,32,101,100,105,116,111,114,0,73,108,108,101,103,97,108,32,99,104,97,114,97,99,116,101,114,32,99,111,110,115,116,97,110,116,0,0,0,0,0,0,73,108,108,101,103,97,108,32,102,111,114,101,105,103,110,32,116,121,112,101,0,0,0,0,10,42,42,42,32,68,111,101,115,32,110,111,116,32,109,97,116,99,104,32,58,32,0,0,68,105,114,101,99,116,111,114,121,46,100,111,101,115,68,105,114,101,99,116,111,114,121,69,120,105,115,116,0,0,0,0,100,97,116,97,32,116,121,112,101,32,100,101,99,108,97,114,97,116,105,111,110,0,0,0,99,111,110,115,116,114,117,99,116,111,114,32,97,112,112,108,105,99,97,116,105,111,110,0,124,124,32,32,32,124,124,32,86,101,114,115,105,111,110,58,32,37,45,49,52,115,32,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,10,10,0,0,0,0,0,0,73,109,112,114,111,112,101,114,108,121,32,116,101,114,109,105,110,97,116,101,100,32,115,116,114,105,110,103,0,0,0,0,72,115,83,116,97,98,108,101,80,116,114,0,0,0,0,0,10,42,42,42,32,70,105,101,108,100,32,116,121,112,101,32,32,32,32,32,58,32,0,0,68,105,114,101,99,116,111,114,121,46,103,101,116,80,101,114,109,105,115,115,105,111,110,115,0,0,0,0,0,0,0,0,78,111,116,32,101,110,111,117,103,104,32,97,114,103,117,109,101,110,116,115,32,102,111,114,32,116,121,112,101,32,115,121,110,111,110,121,109,32,34,37,115,34,0,0,0,0,0,0,124,124,32,32,32,124,124,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,66,117,103,115,58,32,104,116,116,112,58,47,47,104,97,99,107,97,103,101,46,104,97,115,107,101,108,108,46,111,114,103,47,116,114,97,99,47,104,117,103,115,10,0,0,0,0,0,67,97,110,110,111,116,32,117,115,101,32,37,115,32,119,105,116,104,111,117,116,32,97,110,121,32,112,114,101,118,105,111,117,115,32,105,110,112,117,116,0,0,0,0,0,0,0,0,72,117,103,115,70,111,114,101,105,103,110,0,0,0,0,0,115,116,97,116,105,99,32,115,116,114,117,99,116,32,104,117,103,115,95,112,114,105,109,105,116,105,118,101,32,104,117,103,115,95,112,114,105,109,84,97,98,108,101,91,93,32,61,32,123,10,0,0,0,0,0,0,32,58,58,32,0,0,0,0,77,105,115,109,97,116,99,104,32,105,110,32,102,105,101,108,100,32,116,121,112,101,115,32,102,111,114,32,115,101,108,101,99,116,111,114,32,34,37,115,34,0,0,0,0,0,0,0,105,108,108,101,103,97,108,32,102,108,97,103,0,0,0,0,73,108,108,101,103,97,108,32,117,115,101,32,111,102,32,114,111,119,32,105,110,32,0,0,124,124,45,45,45,124,124,32,32,32,32,32,32,32,32,32,95,95,95,124,124,32,32,32,32,32,32,32,32,32,32,32,87,111,114,108,100,32,87,105,100,101,32,87,101,98,58,32,104,116,116,112,58,47,47,104,97,115,107,101,108,108,46,111,114,103,47,104,117,103,115,10,0,0,0,0,0,0,0,0,58,37,100,0,0,0,0,0,77,105,115,115,105,110,103,32,100,105,103,105,116,115,32,105,110,32,101,120,112,111,110,101,110,116,0,0,0,0,0,0,116,114,97,110,115,108,97,116,101,58,32,109,111,110,97,100,32,99,111,109,112,115,0,0,72,115,70,117,110,80,116,114,0,0,0,0,0,0,0,0,116,121,112,101,83,101,108,49,0,0,0,0,0,0,0,0,68,105,114,101,99,116,111,114,121,46,115,101,116,80,101,114,109,105,115,115,105,111,110,115,0,0,0,0,0,0,0,0,107,105,110,100,67,111,110,115,116,114,50,0,0,0,0,0,124,124,95,95,95,124,124,32,124,124,95,95,124,124,32,124,124,95,95,124,124,32,32,95,95,124,124,32,32,32,32,32,67,111,112,121,114,105,103,104,116,32,40,99,41,32,49,57,57,52,45,50,48,48,53,10,0,0,0,0,0,0,0,0,85,110,114,101,99,111,103,110,105,115,101,100,32,99,104,97,114,97,99,116,101,114,32,96,92,37,100,39,32,105,110,32,99,111,108,117,109,110,32,37,100,0,0,0,0,0,0,0,67,97,110,110,111,116,32,97,108,108,111,99,97,116,101,32,112,114,111,103,114,97,109,32,109,101,109,111,114,121,0,0,72,115,80,116,114,0,0,0,80,114,101,108,117,100,101,32,100,111,101,115,32,110,111,116,32,100,101,102,105,110,101,32,115,116,97,110,100,97,114,100,32,116,121,112,101,32,34,37,115,34,0,0,0,0,0,0,68,105,114,101,99,116,111,114,121,46,103,101,116,68,105,114,101,99,116,111,114,121,67,111,110,116,101,110,116,115,0,0,112,111,108,121,109,111,114,112,104,105,99,32,116,121,112,101,0,0,0,0,0,0,0,0,124,124,32,32,32,124,124,32,124,124,32,32,124,124,32,124,124,32,32,124,124,32,124,124,95,95,32,32,32,32,32,32,72,117,103,115,32,57,56,58,32,66,97,115,101,100,32,111,110,32,116,104,101,32,72,97,115,107,101,108,108,32,57,56,32,115,116,97,110,100,97,114,100,10,0,0,0,0,0,0,77,105,115,112,108,97,99,101,100,32,96,125,39,0,0,0,72,115,65,100,100,114,0,0,80,114,101,108,117,100,101,32,100,111,101,115,32,110,111,116,32,100,101,102,105,110,101,32,115,116,97,110,100,97,114,100,32,99,108,97,115,115,32,34,37,115,34,0,0,0,0,0,100,101,118,105,99,101,32,105,115,32,102,117,108,108,0,0,107,105,110,100,67,111,110,115,116,114,49,0,0,0,0,0,73,110,116,49,54,0,0,0,95,95,32,32,32,95,95,32,95,95,32,32,95,95,32,32,95,95,95,95,32,32,32,95,95,95,32,32,32,32,32,32,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,95,10,0,0,0,0,0,0,10,0,0,0,0,0,0,0,73,109,112,114,111,112,101,114,108,121,32,101,115,99,97,112,101,100,32,118,97,114,105,97,98,108,101,32,105,110,32,104,101,114,101,32,100,111,99,117,109,101,110,116,0,0,0,0,72,115,66,111,111,108,0,0,102,105,110,100,81,117,97,108,84,121,99,111,110,0,0,0,109,117,108,116,105,112,108,101,32,112,97,114,97,109,101,116,101,114,32,99,108,97,115,115,101,115,0,0,0,0,0,0,99,111,110,67,109,112,0,0,80,114,101,108,117,100,101,32,100,111,101,115,32,110,111,116,32,100,101,102,105,110,101,32,115,116,97,110,100,97,114,100,32,110,97,109,101,32,34,37,115,34,0,0,0,0,0,0,65,108,108,111,119,32,117,110,115,97,102,101,32,111,118,101,114,108,97,112,112,105,110,103,32,105,110,115,116,97,110,99,101,115,0,0,0,0,0,0,10,42,42,42,32,98,101,99,97,117,115,101,32,32,32,32,32,32,32,32,58,32,37,115,0,0,0,0,0,0,0,0,85,110,107,110,111,119,110,32,101,110,116,105,116,121,32,34,37,115,34,32,101,120,112,111,114,116,101,100,32,102,114,111,109,32,109,111,100,117,108,101,32,34,37,115,34,0,0,0,72,117,103,115,32,109,111,100,101,58,32,82,101,115,116,97,114,116,32,119,105,116,104,32,99,111,109,109,97,110,100,32,108,105,110,101,32,111,112,116,105,111,110,32,43,57,56,32,102,111,114,32,72,97,115,107,101,108,108,32,57,56,32,109,111,100,101,10,10,0,0,0,112,97,114,115,101,73,110,112,117,116,0,0,0,0,0,0,72,115,68,111,117,98,108,101,0,0,0,0,0,0,0,0,85,110,100,101,102,105,110,101,100,69,108,101,109,101,110,116,0,0,0,0,0,0,0,0,100,105,114,101,99,116,111,114,121,32,100,111,101,115,32,110,111,116,32,101,120,105,115,116,0,0,0,0,0,0,0,0,10,42,42,42,32,100,111,101,115,32,110,111,116,32,109,97,116,99,104,32,58,32,0,0,72,97,115,107,101,108,108,32,57,56,32,109,111,100,101,58,32,82,101,115,116,97,114,116,32,119,105,116,104,32,99,111,109,109,97,110,100,32,108,105,110,101,32,111,112,116,105,111,110,32,45,57,56,32,116,111,32,101,110,97,98,108,101,32,101,120,116,101,110,115,105,111,110,115,10,10,0,0,0,0,32,119,105,116,104,32,107,105,110,100,32,0,0,0,0,0,37,48,58,32,102,97,105,108,101,100,32,116,111,32,105,110,105,116,105,97,108,105,122,101,44,32,101,120,105,116,105,110,103,10,0,0,0,0,0,0])
, "i8", ALLOC_NONE, Runtime.GLOBAL_BASE)
var tempDoublePtr = Runtime.alignMemory(allocate(12, "i8", ALLOC_STATIC), 8);
assert(tempDoublePtr % 8 == 0);
function copyTempFloat(ptr) { // functions, because inlining this code increases code size too much
  HEAP8[tempDoublePtr] = HEAP8[ptr];
  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];
  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];
  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];
}
function copyTempDouble(ptr) {
  HEAP8[tempDoublePtr] = HEAP8[ptr];
  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];
  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];
  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];
  HEAP8[tempDoublePtr+4] = HEAP8[ptr+4];
  HEAP8[tempDoublePtr+5] = HEAP8[ptr+5];
  HEAP8[tempDoublePtr+6] = HEAP8[ptr+6];
  HEAP8[tempDoublePtr+7] = HEAP8[ptr+7];
}
  Module["_strlen"] = _strlen;
  Module["_strcpy"] = _strcpy;
  function _isalpha(chr) {
      return (chr >= 97 && chr <= 122) ||
             (chr >= 65 && chr <= 90);
    }
  var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};
  var ERRNO_MESSAGES={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can't send after socket shutdown",109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};
  var ___errno_state=0;function ___setErrNo(value) {
      // For convenient setting and returning of errno.
      HEAP32[((___errno_state)>>2)]=value
      return value;
    }
  var PATH={splitPath:function (filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function (parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up--; up) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function (path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function (path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function (path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function (path) {
        return PATH.splitPath(path)[3];
      },join:function () {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function (l, r) {
        return PATH.normalize(l + '/' + r);
      },resolve:function () {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            continue;
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function (from, to) {
        from = PATH.resolve(from).substr(1);
        to = PATH.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  var TTY={ttys:[],init:function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function (dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function (stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function (stream) {
          // flush any pending line data
          if (stream.tty.output.length) {
            stream.tty.ops.put_char(stream.tty, 10);
          }
        },read:function (stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function (stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          for (var i = 0; i < length; i++) {
            try {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function (tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              result = process['stdin']['read']();
              if (!result) {
                if (process['stdin']['_readableState'] && process['stdin']['_readableState']['ended']) {
                  return null;  // EOF
                }
                return undefined;  // no data available
              }
            } else if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function (tty, val) {
          if (val === null || val === 10) {
            Module['print'](tty.output.join(''));
            tty.output = [];
          } else {
            tty.output.push(TTY.utf8.processCChar(val));
          }
        }},default_tty1_ops:{put_char:function (tty, val) {
          if (val === null || val === 10) {
            Module['printErr'](tty.output.join(''));
            tty.output = [];
          } else {
            tty.output.push(TTY.utf8.processCChar(val));
          }
        }}};
  var MEMFS={ops_table:null,CONTENT_OWNING:1,CONTENT_FLEXIBLE:2,CONTENT_FIXED:3,mount:function (mount) {
        return MEMFS.createNode(null, '/', 16384 | 0777, 0);
      },createNode:function (parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            },
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.contents = [];
          node.contentMode = MEMFS.CONTENT_FLEXIBLE;
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },ensureFlexible:function (node) {
        if (node.contentMode !== MEMFS.CONTENT_FLEXIBLE) {
          var contents = node.contents;
          node.contents = Array.prototype.slice.call(contents);
          node.contentMode = MEMFS.CONTENT_FLEXIBLE;
        }
      },node_ops:{getattr:function (node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.contents.length;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function (node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.ensureFlexible(node);
            var contents = node.contents;
            if (attr.size < contents.length) contents.length = attr.size;
            else while (attr.size > contents.length) contents.push(0);
          }
        },lookup:function (parent, name) {
          throw FS.genericErrors[ERRNO_CODES.ENOENT];
        },mknod:function (parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function (old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },unlink:function (parent, name) {
          delete parent.contents[name];
        },rmdir:function (parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
          }
          delete parent.contents[name];
        },readdir:function (node) {
          var entries = ['.', '..']
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function (parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 0777 | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function (node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          return node.link;
        }},stream_ops:{read:function (stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else
          {
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          }
          return size;
        },write:function (stream, buffer, offset, length, position, canOwn) {
          var node = stream.node;
          node.timestamp = Date.now();
          var contents = node.contents;
          if (length && contents.length === 0 && position === 0 && buffer.subarray) {
            // just replace it with the new data
            if (canOwn && offset === 0) {
              node.contents = buffer; // this could be a subarray of Emscripten HEAP, or allocated from some other source.
              node.contentMode = (buffer.buffer === HEAP8.buffer) ? MEMFS.CONTENT_OWNING : MEMFS.CONTENT_FIXED;
            } else {
              node.contents = new Uint8Array(buffer.subarray(offset, offset+length));
              node.contentMode = MEMFS.CONTENT_FIXED;
            }
            return length;
          }
          MEMFS.ensureFlexible(node);
          var contents = node.contents;
          while (contents.length < position) contents.push(0);
          for (var i = 0; i < length; i++) {
            contents[position + i] = buffer[offset + i];
          }
          return length;
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.contents.length;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          stream.ungotten = [];
          stream.position = position;
          return position;
        },allocate:function (stream, offset, length) {
          MEMFS.ensureFlexible(stream.node);
          var contents = stream.node.contents;
          var limit = offset + length;
          while (limit > contents.length) contents.push(0);
        },mmap:function (stream, buffer, offset, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if ( !(flags & 2) &&
                (contents.buffer === buffer || contents.buffer === buffer.buffer) ) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = _malloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOMEM);
            }
            buffer.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        }}};
  var IDBFS={dbs:{},indexedDB:function () {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",mount:function (mount) {
        return MEMFS.mount.apply(null, arguments);
      },syncfs:function (mount, populate, callback) {
        IDBFS.getLocalSet(mount, function(err, local) {
          if (err) return callback(err);
          IDBFS.getRemoteSet(mount, function(err, remote) {
            if (err) return callback(err);
            var src = populate ? remote : local;
            var dst = populate ? local : remote;
            IDBFS.reconcile(src, dst, callback);
          });
        });
      },reconcile:function (src, dst, callback) {
        var total = 0;
        var create = {};
        for (var key in src.files) {
          if (!src.files.hasOwnProperty(key)) continue;
          var e = src.files[key];
          var e2 = dst.files[key];
          if (!e2 || e.timestamp > e2.timestamp) {
            create[key] = e;
            total++;
          }
        }
        var remove = {};
        for (var key in dst.files) {
          if (!dst.files.hasOwnProperty(key)) continue;
          var e = dst.files[key];
          var e2 = src.files[key];
          if (!e2) {
            remove[key] = e;
            total++;
          }
        }
        if (!total) {
          // early out
          return callback(null);
        }
        var completed = 0;
        function done(err) {
          if (err) return callback(err);
          if (++completed >= total) {
            return callback(null);
          }
        };
        // create a single transaction to handle and IDB reads / writes we'll need to do
        var db = src.type === 'remote' ? src.db : dst.db;
        var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readwrite');
        transaction.onerror = function transaction_onerror() { callback(this.error); };
        var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
        for (var path in create) {
          if (!create.hasOwnProperty(path)) continue;
          var entry = create[path];
          if (dst.type === 'local') {
            // save file to local
            try {
              if (FS.isDir(entry.mode)) {
                FS.mkdir(path, entry.mode);
              } else if (FS.isFile(entry.mode)) {
                var stream = FS.open(path, 'w+', 0666);
                FS.write(stream, entry.contents, 0, entry.contents.length, 0, true /* canOwn */);
                FS.close(stream);
              }
              done(null);
            } catch (e) {
              return done(e);
            }
          } else {
            // save file to IDB
            var req = store.put(entry, path);
            req.onsuccess = function req_onsuccess() { done(null); };
            req.onerror = function req_onerror() { done(this.error); };
          }
        }
        for (var path in remove) {
          if (!remove.hasOwnProperty(path)) continue;
          var entry = remove[path];
          if (dst.type === 'local') {
            // delete file from local
            try {
              if (FS.isDir(entry.mode)) {
                // TODO recursive delete?
                FS.rmdir(path);
              } else if (FS.isFile(entry.mode)) {
                FS.unlink(path);
              }
              done(null);
            } catch (e) {
              return done(e);
            }
          } else {
            // delete file from IDB
            var req = store.delete(path);
            req.onsuccess = function req_onsuccess() { done(null); };
            req.onerror = function req_onerror() { done(this.error); };
          }
        }
      },getLocalSet:function (mount, callback) {
        var files = {};
        function isRealDir(p) {
          return p !== '.' && p !== '..';
        };
        function toAbsolute(root) {
          return function(p) {
            return PATH.join2(root, p);
          }
        };
        var check = FS.readdir(mount.mountpoint)
          .filter(isRealDir)
          .map(toAbsolute(mount.mountpoint));
        while (check.length) {
          var path = check.pop();
          var stat, node;
          try {
            var lookup = FS.lookupPath(path);
            node = lookup.node;
            stat = FS.stat(path);
          } catch (e) {
            return callback(e);
          }
          if (FS.isDir(stat.mode)) {
            check.push.apply(check, FS.readdir(path)
              .filter(isRealDir)
              .map(toAbsolute(path)));
            files[path] = { mode: stat.mode, timestamp: stat.mtime };
          } else if (FS.isFile(stat.mode)) {
            files[path] = { contents: node.contents, mode: stat.mode, timestamp: stat.mtime };
          } else {
            return callback(new Error('node type not supported'));
          }
        }
        return callback(null, { type: 'local', files: files });
      },getDB:function (name, callback) {
        // look it up in the cache
        var db = IDBFS.dbs[name];
        if (db) {
          return callback(null, db);
        }
        var req;
        try {
          req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        req.onupgradeneeded = function req_onupgradeneeded() {
          db = req.result;
          db.createObjectStore(IDBFS.DB_STORE_NAME);
        };
        req.onsuccess = function req_onsuccess() {
          db = req.result;
          // add to the cache
          IDBFS.dbs[name] = db;
          callback(null, db);
        };
        req.onerror = function req_onerror() {
          callback(this.error);
        };
      },getRemoteSet:function (mount, callback) {
        var files = {};
        IDBFS.getDB(mount.mountpoint, function(err, db) {
          if (err) return callback(err);
          var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readonly');
          transaction.onerror = function transaction_onerror() { callback(this.error); };
          var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
          store.openCursor().onsuccess = function store_openCursor_onsuccess(event) {
            var cursor = event.target.result;
            if (!cursor) {
              return callback(null, { type: 'remote', db: db, files: files });
            }
            files[cursor.key] = cursor.value;
            cursor.continue();
          };
        });
      }};
  var NODEFS={isWindows:false,staticInit:function () {
        NODEFS.isWindows = !!process.platform.match(/^win/);
      },mount:function (mount) {
        assert(ENVIRONMENT_IS_NODE);
        return NODEFS.createNode(null, '/', NODEFS.getMode(mount.opts.root), 0);
      },createNode:function (parent, name, mode, dev) {
        if (!FS.isDir(mode) && !FS.isFile(mode) && !FS.isLink(mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node = FS.createNode(parent, name, mode);
        node.node_ops = NODEFS.node_ops;
        node.stream_ops = NODEFS.stream_ops;
        return node;
      },getMode:function (path) {
        var stat;
        try {
          stat = fs.lstatSync(path);
          if (NODEFS.isWindows) {
            // On Windows, directories return permission bits 'rw-rw-rw-', even though they have 'rwxrwxrwx', so 
            // propagate write bits to execute bits.
            stat.mode = stat.mode | ((stat.mode & 146) >> 1);
          }
        } catch (e) {
          if (!e.code) throw e;
          throw new FS.ErrnoError(ERRNO_CODES[e.code]);
        }
        return stat.mode;
      },realPath:function (node) {
        var parts = [];
        while (node.parent !== node) {
          parts.push(node.name);
          node = node.parent;
        }
        parts.push(node.mount.opts.root);
        parts.reverse();
        return PATH.join.apply(null, parts);
      },flagsToPermissionStringMap:{0:"r",1:"r+",2:"r+",64:"r",65:"r+",66:"r+",129:"rx+",193:"rx+",514:"w+",577:"w",578:"w+",705:"wx",706:"wx+",1024:"a",1025:"a",1026:"a+",1089:"a",1090:"a+",1153:"ax",1154:"ax+",1217:"ax",1218:"ax+",4096:"rs",4098:"rs+"},flagsToPermissionString:function (flags) {
        if (flags in NODEFS.flagsToPermissionStringMap) {
          return NODEFS.flagsToPermissionStringMap[flags];
        } else {
          return flags;
        }
      },node_ops:{getattr:function (node) {
          var path = NODEFS.realPath(node);
          var stat;
          try {
            stat = fs.lstatSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          // node.js v0.10.20 doesn't report blksize and blocks on Windows. Fake them with default blksize of 4096.
          // See http://support.microsoft.com/kb/140365
          if (NODEFS.isWindows && !stat.blksize) {
            stat.blksize = 4096;
          }
          if (NODEFS.isWindows && !stat.blocks) {
            stat.blocks = (stat.size+stat.blksize-1)/stat.blksize|0;
          }
          return {
            dev: stat.dev,
            ino: stat.ino,
            mode: stat.mode,
            nlink: stat.nlink,
            uid: stat.uid,
            gid: stat.gid,
            rdev: stat.rdev,
            size: stat.size,
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime,
            blksize: stat.blksize,
            blocks: stat.blocks
          };
        },setattr:function (node, attr) {
          var path = NODEFS.realPath(node);
          try {
            if (attr.mode !== undefined) {
              fs.chmodSync(path, attr.mode);
              // update the common node structure mode as well
              node.mode = attr.mode;
            }
            if (attr.timestamp !== undefined) {
              var date = new Date(attr.timestamp);
              fs.utimesSync(path, date, date);
            }
            if (attr.size !== undefined) {
              fs.truncateSync(path, attr.size);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },lookup:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          var mode = NODEFS.getMode(path);
          return NODEFS.createNode(parent, name, mode);
        },mknod:function (parent, name, mode, dev) {
          var node = NODEFS.createNode(parent, name, mode, dev);
          // create the backing node for this in the fs root as well
          var path = NODEFS.realPath(node);
          try {
            if (FS.isDir(node.mode)) {
              fs.mkdirSync(path, node.mode);
            } else {
              fs.writeFileSync(path, '', { mode: node.mode });
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          return node;
        },rename:function (oldNode, newDir, newName) {
          var oldPath = NODEFS.realPath(oldNode);
          var newPath = PATH.join2(NODEFS.realPath(newDir), newName);
          try {
            fs.renameSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },unlink:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.unlinkSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },rmdir:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.rmdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },readdir:function (node) {
          var path = NODEFS.realPath(node);
          try {
            return fs.readdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },symlink:function (parent, newName, oldPath) {
          var newPath = PATH.join2(NODEFS.realPath(parent), newName);
          try {
            fs.symlinkSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },readlink:function (node) {
          var path = NODEFS.realPath(node);
          try {
            return fs.readlinkSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        }},stream_ops:{open:function (stream) {
          var path = NODEFS.realPath(stream.node);
          try {
            if (FS.isFile(stream.node.mode)) {
              stream.nfd = fs.openSync(path, NODEFS.flagsToPermissionString(stream.flags));
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },close:function (stream) {
          try {
            if (FS.isFile(stream.node.mode) && stream.nfd) {
              fs.closeSync(stream.nfd);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },read:function (stream, buffer, offset, length, position) {
          // FIXME this is terrible.
          var nbuffer = new Buffer(length);
          var res;
          try {
            res = fs.readSync(stream.nfd, nbuffer, 0, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          if (res > 0) {
            for (var i = 0; i < res; i++) {
              buffer[offset + i] = nbuffer[i];
            }
          }
          return res;
        },write:function (stream, buffer, offset, length, position) {
          // FIXME this is terrible.
          var nbuffer = new Buffer(buffer.subarray(offset, offset + length));
          var res;
          try {
            res = fs.writeSync(stream.nfd, nbuffer, 0, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          return res;
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              try {
                var stat = fs.fstatSync(stream.nfd);
                position += stat.size;
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
              }
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          stream.position = position;
          return position;
        }}};
  var _stdin=allocate(1, "i32*", ALLOC_STATIC);
  var _stdout=allocate(1, "i32*", ALLOC_STATIC);
  var _stderr=allocate(1, "i32*", ALLOC_STATIC);
  function _fflush(stream) {
      // int fflush(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fflush.html
      // we don't currently perform any user-space buffering of data
    }var FS={root:null,mounts:[],devices:[null],streams:[null],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,ErrnoError:null,genericErrors:{},handleFSError:function (e) {
        if (!(e instanceof FS.ErrnoError)) throw e + ' : ' + stackTrace();
        return ___setErrNo(e.errno);
      },lookupPath:function (path, opts) {
        path = PATH.resolve(FS.cwd(), path);
        opts = opts || { recurse_count: 0 };
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
        }
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
        // start at the root
        var current = FS.root;
        var current_path = '/';
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            current = current.mount.root;
          }
          // follow symlinks
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH.resolve(PATH.dirname(current_path), link);
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
              }
            }
          }
        }
        return { path: current_path, node: current };
      },getPath:function (node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function (parentid, name) {
        var hash = 0;
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:function (parent, name) {
        var err = FS.mayLookup(parent);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function (parent, name, mode, rdev) {
        if (!FS.FSNode) {
          FS.FSNode = function(parent, name, mode, rdev) {
            this.id = FS.nextInode++;
            this.name = name;
            this.mode = mode;
            this.node_ops = {};
            this.stream_ops = {};
            this.rdev = rdev;
            this.parent = null;
            this.mount = null;
            if (!parent) {
              parent = this;  // root node sets parent to itself
            }
            this.parent = parent;
            this.mount = parent.mount;
            FS.hashAddNode(this);
          };
          // compatibility
          var readMode = 292 | 73;
          var writeMode = 146;
          FS.FSNode.prototype = {};
          // NOTE we must use Object.defineProperties instead of individual calls to
          // Object.defineProperty in order to make closure compiler happy
          Object.defineProperties(FS.FSNode.prototype, {
            read: {
              get: function() { return (this.mode & readMode) === readMode; },
              set: function(val) { val ? this.mode |= readMode : this.mode &= ~readMode; }
            },
            write: {
              get: function() { return (this.mode & writeMode) === writeMode; },
              set: function(val) { val ? this.mode |= writeMode : this.mode &= ~writeMode; }
            },
            isFolder: {
              get: function() { return FS.isDir(this.mode); },
            },
            isDevice: {
              get: function() { return FS.isChrdev(this.mode); },
            },
          });
        }
        return new FS.FSNode(parent, name, mode, rdev);
      },destroyNode:function (node) {
        FS.hashRemoveNode(node);
      },isRoot:function (node) {
        return node === node.parent;
      },isMountpoint:function (node) {
        return node.mounted;
      },isFile:function (mode) {
        return (mode & 61440) === 32768;
      },isDir:function (mode) {
        return (mode & 61440) === 16384;
      },isLink:function (mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function (mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function (mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function (mode) {
        return (mode & 61440) === 4096;
      },isSocket:function (mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"rs":1052672,"r+":2,"w":577,"wx":705,"xw":705,"w+":578,"wx+":706,"xw+":706,"a":1089,"ax":1217,"xa":1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function (str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function (flag) {
        var accmode = flag & 2097155;
        var perms = ['r', 'w', 'rw'][accmode];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function (node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.indexOf('r') !== -1 && !(node.mode & 292)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('w') !== -1 && !(node.mode & 146)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('x') !== -1 && !(node.mode & 73)) {
          return ERRNO_CODES.EACCES;
        }
        return 0;
      },mayLookup:function (dir) {
        return FS.nodePermissions(dir, 'x');
      },mayCreate:function (dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return ERRNO_CODES.EEXIST;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function (dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var err = FS.nodePermissions(dir, 'wx');
        if (err) {
          return err;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return ERRNO_CODES.ENOTDIR;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return ERRNO_CODES.EBUSY;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return ERRNO_CODES.EISDIR;
          }
        }
        return 0;
      },mayOpen:function (node, flags) {
        if (!node) {
          return ERRNO_CODES.ENOENT;
        }
        if (FS.isLink(node.mode)) {
          return ERRNO_CODES.ELOOP;
        } else if (FS.isDir(node.mode)) {
          if ((flags & 2097155) !== 0 ||  // opening for write
              (flags & 512)) {
            return ERRNO_CODES.EISDIR;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function (fd_start, fd_end) {
        fd_start = fd_start || 1;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(ERRNO_CODES.EMFILE);
      },getStream:function (fd) {
        return FS.streams[fd];
      },createStream:function (stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = function(){};
          FS.FSStream.prototype = {};
          // compatibility
          Object.defineProperties(FS.FSStream.prototype, {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          });
        }
        if (stream.__proto__) {
          // reuse the object
          stream.__proto__ = FS.FSStream.prototype;
        } else {
          var newStream = new FS.FSStream();
          for (var p in stream) {
            newStream[p] = stream[p];
          }
          stream = newStream;
        }
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function (fd) {
        FS.streams[fd] = null;
      },chrdev_stream_ops:{open:function (stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function () {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }},major:function (dev) {
        return ((dev) >> 8);
      },minor:function (dev) {
        return ((dev) & 0xff);
      },makedev:function (ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function (dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function (dev) {
        return FS.devices[dev];
      },syncfs:function (populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
        var completed = 0;
        var total = FS.mounts.length;
        function done(err) {
          if (err) {
            return callback(err);
          }
          if (++completed >= total) {
            callback(null);
          }
        };
        // sync all mounts
        for (var i = 0; i < FS.mounts.length; i++) {
          var mount = FS.mounts[i];
          if (!mount.type.syncfs) {
            done(null);
            continue;
          }
          mount.type.syncfs(mount, populate, done);
        }
      },mount:function (type, opts, mountpoint) {
        var lookup;
        if (mountpoint) {
          lookup = FS.lookupPath(mountpoint, { follow: false });
          mountpoint = lookup.path;  // use the absolute path
        }
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          root: null
        };
        // create a root node for the fs
        var root = type.mount(mount);
        root.mount = mount;
        mount.root = root;
        // assign the mount info to the mountpoint's node
        if (lookup) {
          lookup.node.mount = mount;
          lookup.node.mounted = true;
          // compatibility update FS.root if we mount to /
          if (mountpoint === '/') {
            FS.root = mount.root;
          }
        }
        // add to our cached list of mounts
        FS.mounts.push(mount);
        return root;
      },lookup:function (parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function (path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var err = FS.mayCreate(parent, name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:function (path, mode) {
        mode = mode !== undefined ? mode : 0666;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function (path, mode) {
        mode = mode !== undefined ? mode : 0777;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdev:function (path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 0666;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function (oldpath, newpath) {
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        var newname = PATH.basename(newpath);
        var err = FS.mayCreate(parent, newname);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:function (old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
        try {
          lookup = FS.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
        } catch (e) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(ERRNO_CODES.EXDEV);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        // new path should not be an ancestor of the old path
        relative = PATH.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var err = FS.mayDelete(old_dir, old_name, isdir);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        err = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          err = FS.nodePermissions(old_dir, 'w');
          if (err) {
            throw new FS.ErrnoError(err);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },rmdir:function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, true);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },readdir:function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        return node.node_ops.readdir(node);
      },unlink:function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, false);
        if (err) {
          // POSIX says unlink should set EPERM, not EISDIR
          if (err === ERRNO_CODES.EISDIR) err = ERRNO_CODES.EPERM;
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },readlink:function (path) {
        var lookup = FS.lookupPath(path, { follow: false });
        var link = lookup.node;
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        return link.node_ops.readlink(link);
      },stat:function (path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return node.node_ops.getattr(node);
      },lstat:function (path) {
        return FS.stat(path, true);
      },chmod:function (path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function (path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function (fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chmod(stream.node, mode);
      },chown:function (path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function (path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function (fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function (path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var err = FS.nodePermissions(node, 'w');
        if (err) {
          throw new FS.ErrnoError(err);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function (fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        FS.truncate(stream.node, len);
      },utime:function (path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function (path, flags, mode, fd_start, fd_end) {
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 0666 : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(ERRNO_CODES.EEXIST);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
          }
        }
        if (!node) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // check permissions
        var err = FS.mayOpen(node, flags);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512);
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            Module['printErr']('read file: ' + path);
          }
        }
        return stream;
      },close:function (stream) {
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
      },llseek:function (stream, offset, whence) {
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        return stream.stream_ops.llseek(stream, offset, whence);
      },read:function (stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var seeking = true;
        if (typeof position === 'undefined') {
          position = stream.position;
          seeking = false;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function (stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var seeking = true;
        if (typeof position === 'undefined') {
          position = stream.position;
          seeking = false;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        if (stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },allocate:function (stream, offset, length) {
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:function (stream, buffer, offset, length, position, prot, flags) {
        // TODO if PROT is PROT_WRITE, make sure we have write access
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EACCES);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.errnoError(ERRNO_CODES.ENODEV);
        }
        return stream.stream_ops.mmap(stream, buffer, offset, length, position, prot, flags);
      },ioctl:function (stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTTY);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function (path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'r';
        opts.encoding = opts.encoding || 'binary';
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = '';
          var utf8 = new Runtime.UTF8Processor();
          for (var i = 0; i < length; i++) {
            ret += utf8.processCChar(buf[i]);
          }
        } else if (opts.encoding === 'binary') {
          ret = buf;
        } else {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        FS.close(stream);
        return ret;
      },writeFile:function (path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'w';
        opts.encoding = opts.encoding || 'utf8';
        var stream = FS.open(path, opts.flags, opts.mode);
        if (opts.encoding === 'utf8') {
          var utf8 = new Runtime.UTF8Processor();
          var buf = new Uint8Array(utf8.processJSString(data));
          FS.write(stream, buf, 0, buf.length, 0);
        } else if (opts.encoding === 'binary') {
          FS.write(stream, data, 0, data.length, 0);
        } else {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        FS.close(stream);
      },cwd:function () {
        return FS.currentPath;
      },chdir:function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        var err = FS.nodePermissions(lookup.node, 'x');
        if (err) {
          throw new FS.ErrnoError(err);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function () {
        FS.mkdir('/tmp');
      },createDefaultDevices:function () {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function() { return 0; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createStandardStreams:function () {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 'r');
        HEAP32[((_stdin)>>2)]=stdin.fd;
        assert(stdin.fd === 1, 'invalid handle for stdin (' + stdin.fd + ')');
        var stdout = FS.open('/dev/stdout', 'w');
        HEAP32[((_stdout)>>2)]=stdout.fd;
        assert(stdout.fd === 2, 'invalid handle for stdout (' + stdout.fd + ')');
        var stderr = FS.open('/dev/stderr', 'w');
        HEAP32[((_stderr)>>2)]=stderr.fd;
        assert(stderr.fd === 3, 'invalid handle for stderr (' + stderr.fd + ')');
      },ensureErrnoError:function () {
        if (FS.ErrnoError) return;
        FS.ErrnoError = function ErrnoError(errno) {
          this.errno = errno;
          for (var key in ERRNO_CODES) {
            if (ERRNO_CODES[key] === errno) {
              this.code = key;
              break;
            }
          }
          this.message = ERRNO_MESSAGES[errno];
          this.stack = stackTrace();
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [ERRNO_CODES.ENOENT].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function () {
        FS.ensureErrnoError();
        FS.nameTable = new Array(4096);
        FS.root = FS.createNode(null, '/', 16384 | 0777, 0);
        FS.mount(MEMFS, {}, '/');
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
      },init:function (input, output, error) {
        assert(!FS.init.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.init.initialized = true;
        FS.ensureErrnoError();
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
        FS.createStandardStreams();
      },quit:function () {
        FS.init.initialized = false;
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function (canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },joinPath:function (parts, forceRelative) {
        var path = PATH.join.apply(null, parts);
        if (forceRelative && path[0] == '/') path = path.substr(1);
        return path;
      },absolutePath:function (relative, base) {
        return PATH.resolve(base, relative);
      },standardizePath:function (path) {
        return PATH.normalize(path);
      },findObject:function (path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          ___setErrNo(ret.error);
          return null;
        }
      },analyzePath:function (path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createFolder:function (parent, name, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.mkdir(path, mode);
      },createPath:function (parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function (parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function (parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 'w');
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function (parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },createLink:function (parent, name, target, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        return FS.symlink(target, path);
      },forceLoadFile:function (obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        var success = true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (Module['read']) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(Module['read'](obj.url), true);
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!success) ___setErrNo(ERRNO_CODES.EIO);
        return success;
      },createLazyFile:function (parent, name, url, canRead, canWrite) {
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
          function LazyUint8Array() {
            this.lengthKnown = false;
            this.chunks = []; // Loaded chunks. Index is the chunk number
          }
          LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
            if (idx > this.length-1 || idx < 0) {
              return undefined;
            }
            var chunkOffset = idx % this.chunkSize;
            var chunkNum = Math.floor(idx / this.chunkSize);
            return this.getter(chunkNum)[chunkOffset];
          }
          LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
            this.getter = getter;
          }
          LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
              // Find length
              var xhr = new XMLHttpRequest();
              xhr.open('HEAD', url, false);
              xhr.send(null);
              if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
              var datalength = Number(xhr.getResponseHeader("Content-length"));
              var header;
              var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
              var chunkSize = 1024*1024; // Chunk size in bytes
              if (!hasByteServing) chunkSize = datalength;
              // Function to get a range from the remote URL.
              var doXHR = (function(from, to) {
                if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
                if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
                // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url, false);
                if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
                // Some hints to the browser that we want binary data.
                if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
                if (xhr.overrideMimeType) {
                  xhr.overrideMimeType('text/plain; charset=x-user-defined');
                }
                xhr.send(null);
                if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                if (xhr.response !== undefined) {
                  return new Uint8Array(xhr.response || []);
                } else {
                  return intArrayFromString(xhr.responseText || '', true);
                }
              });
              var lazyArray = this;
              lazyArray.setDataGetter(function(chunkNum) {
                var start = chunkNum * chunkSize;
                var end = (chunkNum+1) * chunkSize - 1; // including this byte
                end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
                if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
                  lazyArray.chunks[chunkNum] = doXHR(start, end);
                }
                if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
                return lazyArray.chunks[chunkNum];
              });
              this._length = datalength;
              this._chunkSize = chunkSize;
              this.lengthKnown = true;
          }
          var lazyArray = new LazyUint8Array();
          Object.defineProperty(lazyArray, "length", {
              get: function() {
                  if(!this.lengthKnown) {
                      this.cacheLength();
                  }
                  return this._length;
              }
          });
          Object.defineProperty(lazyArray, "chunkSize", {
              get: function() {
                  if(!this.lengthKnown) {
                      this.cacheLength();
                  }
                  return this._chunkSize;
              }
          });
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          if (!FS.forceLoadFile(node)) {
            throw new FS.ErrnoError(ERRNO_CODES.EIO);
          }
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn) {
        Browser.init();
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH.resolve(PATH.join2(parent, name)) : parent;
        function processData(byteArray) {
          function finish(byteArray) {
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency('cp ' + fullname);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency('cp ' + fullname);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency('cp ' + fullname);
        if (typeof url == 'string') {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function () {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function () {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function (paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          console.log('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function (paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      }};function _chdir(path) {
      // int chdir(const char *path);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/chdir.html
      // NOTE: The path argument may be a string, to simplify fchdir().
      if (typeof path !== 'string') path = Pointer_stringify(path);
      try {
        FS.chdir(path);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }
  var _environ=allocate(1, "i32*", ALLOC_STATIC);var ___environ=_environ;function ___buildEnvironment(env) {
      // WARNING: Arbitrary limit!
      var MAX_ENV_VALUES = 64;
      var TOTAL_ENV_SIZE = 1024;
      // Statically allocate memory for the environment.
      var poolPtr;
      var envPtr;
      if (!___buildEnvironment.called) {
        ___buildEnvironment.called = true;
        // Set default values. Use string keys for Closure Compiler compatibility.
        ENV['USER'] = 'root';
        ENV['PATH'] = '/';
        ENV['PWD'] = '/';
        ENV['HOME'] = '/home/emscripten';
        ENV['LANG'] = 'en_US.UTF-8';
        ENV['_'] = './this.program';
        // Allocate memory.
        poolPtr = allocate(TOTAL_ENV_SIZE, 'i8', ALLOC_STATIC);
        envPtr = allocate(MAX_ENV_VALUES * 4,
                          'i8*', ALLOC_STATIC);
        HEAP32[((envPtr)>>2)]=poolPtr
        HEAP32[((_environ)>>2)]=envPtr;
      } else {
        envPtr = HEAP32[((_environ)>>2)];
        poolPtr = HEAP32[((envPtr)>>2)];
      }
      // Collect key=value lines.
      var strings = [];
      var totalSize = 0;
      for (var key in env) {
        if (typeof env[key] === 'string') {
          var line = key + '=' + env[key];
          strings.push(line);
          totalSize += line.length;
        }
      }
      if (totalSize > TOTAL_ENV_SIZE) {
        throw new Error('Environment size exceeded TOTAL_ENV_SIZE!');
      }
      // Make new.
      var ptrSize = 4;
      for (var i = 0; i < strings.length; i++) {
        var line = strings[i];
        writeAsciiToMemory(line, poolPtr);
        HEAP32[(((envPtr)+(i * ptrSize))>>2)]=poolPtr;
        poolPtr += line.length + 1;
      }
      HEAP32[(((envPtr)+(strings.length * ptrSize))>>2)]=0;
    }var ENV={};function _getenv(name) {
      // char *getenv(const char *name);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/getenv.html
      if (name === 0) return 0;
      name = Pointer_stringify(name);
      if (!ENV.hasOwnProperty(name)) return 0;
      if (_getenv.ret) _free(_getenv.ret);
      _getenv.ret = allocate(intArrayFromString(ENV[name]), 'i8', ALLOC_NORMAL);
      return _getenv.ret;
    }
  Module["_strcat"] = _strcat;
  function __reallyNegative(x) {
      return x < 0 || (x === 0 && (1/x) === -Infinity);
    }function __formatString(format, varargs) {
      var textIndex = format;
      var argIndex = 0;
      function getNextArg(type) {
        // NOTE: Explicitly ignoring type safety. Otherwise this fails:
        //       int x = 4; printf("%c\n", (char)x);
        var ret;
        if (type === 'double') {
          ret = HEAPF64[(((varargs)+(argIndex))>>3)];
        } else if (type == 'i64') {
          ret = [HEAP32[(((varargs)+(argIndex))>>2)],
                 HEAP32[(((varargs)+(argIndex+8))>>2)]];
          argIndex += 8; // each 32-bit chunk is in a 64-bit block
        } else {
          type = 'i32'; // varargs are always i32, i64, or double
          ret = HEAP32[(((varargs)+(argIndex))>>2)];
        }
        argIndex += Math.max(Runtime.getNativeFieldSize(type), Runtime.getAlignSize(type, null, true));
        return ret;
      }
      var ret = [];
      var curr, next, currArg;
      while(1) {
        var startTextIndex = textIndex;
        curr = HEAP8[(textIndex)];
        if (curr === 0) break;
        next = HEAP8[((textIndex+1)|0)];
        if (curr == 37) {
          // Handle flags.
          var flagAlwaysSigned = false;
          var flagLeftAlign = false;
          var flagAlternative = false;
          var flagZeroPad = false;
          var flagPadSign = false;
          flagsLoop: while (1) {
            switch (next) {
              case 43:
                flagAlwaysSigned = true;
                break;
              case 45:
                flagLeftAlign = true;
                break;
              case 35:
                flagAlternative = true;
                break;
              case 48:
                if (flagZeroPad) {
                  break flagsLoop;
                } else {
                  flagZeroPad = true;
                  break;
                }
              case 32:
                flagPadSign = true;
                break;
              default:
                break flagsLoop;
            }
            textIndex++;
            next = HEAP8[((textIndex+1)|0)];
          }
          // Handle width.
          var width = 0;
          if (next == 42) {
            width = getNextArg('i32');
            textIndex++;
            next = HEAP8[((textIndex+1)|0)];
          } else {
            while (next >= 48 && next <= 57) {
              width = width * 10 + (next - 48);
              textIndex++;
              next = HEAP8[((textIndex+1)|0)];
            }
          }
          // Handle precision.
          var precisionSet = false;
          if (next == 46) {
            var precision = 0;
            precisionSet = true;
            textIndex++;
            next = HEAP8[((textIndex+1)|0)];
            if (next == 42) {
              precision = getNextArg('i32');
              textIndex++;
            } else {
              while(1) {
                var precisionChr = HEAP8[((textIndex+1)|0)];
                if (precisionChr < 48 ||
                    precisionChr > 57) break;
                precision = precision * 10 + (precisionChr - 48);
                textIndex++;
              }
            }
            next = HEAP8[((textIndex+1)|0)];
          } else {
            var precision = 6; // Standard default.
          }
          // Handle integer sizes. WARNING: These assume a 32-bit architecture!
          var argSize;
          switch (String.fromCharCode(next)) {
            case 'h':
              var nextNext = HEAP8[((textIndex+2)|0)];
              if (nextNext == 104) {
                textIndex++;
                argSize = 1; // char (actually i32 in varargs)
              } else {
                argSize = 2; // short (actually i32 in varargs)
              }
              break;
            case 'l':
              var nextNext = HEAP8[((textIndex+2)|0)];
              if (nextNext == 108) {
                textIndex++;
                argSize = 8; // long long
              } else {
                argSize = 4; // long
              }
              break;
            case 'L': // long long
            case 'q': // int64_t
            case 'j': // intmax_t
              argSize = 8;
              break;
            case 'z': // size_t
            case 't': // ptrdiff_t
            case 'I': // signed ptrdiff_t or unsigned size_t
              argSize = 4;
              break;
            default:
              argSize = null;
          }
          if (argSize) textIndex++;
          next = HEAP8[((textIndex+1)|0)];
          // Handle type specifier.
          switch (String.fromCharCode(next)) {
            case 'd': case 'i': case 'u': case 'o': case 'x': case 'X': case 'p': {
              // Integer.
              var signed = next == 100 || next == 105;
              argSize = argSize || 4;
              var currArg = getNextArg('i' + (argSize * 8));
              var origArg = currArg;
              var argText;
              // Flatten i64-1 [low, high] into a (slightly rounded) double
              if (argSize == 8) {
                currArg = Runtime.makeBigInt(currArg[0], currArg[1], next == 117);
              }
              // Truncate to requested size.
              if (argSize <= 4) {
                var limit = Math.pow(256, argSize) - 1;
                currArg = (signed ? reSign : unSign)(currArg & limit, argSize * 8);
              }
              // Format the number.
              var currAbsArg = Math.abs(currArg);
              var prefix = '';
              if (next == 100 || next == 105) {
                if (argSize == 8 && i64Math) argText = i64Math.stringify(origArg[0], origArg[1], null); else
                argText = reSign(currArg, 8 * argSize, 1).toString(10);
              } else if (next == 117) {
                if (argSize == 8 && i64Math) argText = i64Math.stringify(origArg[0], origArg[1], true); else
                argText = unSign(currArg, 8 * argSize, 1).toString(10);
                currArg = Math.abs(currArg);
              } else if (next == 111) {
                argText = (flagAlternative ? '0' : '') + currAbsArg.toString(8);
              } else if (next == 120 || next == 88) {
                prefix = (flagAlternative && currArg != 0) ? '0x' : '';
                if (argSize == 8 && i64Math) {
                  if (origArg[1]) {
                    argText = (origArg[1]>>>0).toString(16);
                    var lower = (origArg[0]>>>0).toString(16);
                    while (lower.length < 8) lower = '0' + lower;
                    argText += lower;
                  } else {
                    argText = (origArg[0]>>>0).toString(16);
                  }
                } else
                if (currArg < 0) {
                  // Represent negative numbers in hex as 2's complement.
                  currArg = -currArg;
                  argText = (currAbsArg - 1).toString(16);
                  var buffer = [];
                  for (var i = 0; i < argText.length; i++) {
                    buffer.push((0xF - parseInt(argText[i], 16)).toString(16));
                  }
                  argText = buffer.join('');
                  while (argText.length < argSize * 2) argText = 'f' + argText;
                } else {
                  argText = currAbsArg.toString(16);
                }
                if (next == 88) {
                  prefix = prefix.toUpperCase();
                  argText = argText.toUpperCase();
                }
              } else if (next == 112) {
                if (currAbsArg === 0) {
                  argText = '(nil)';
                } else {
                  prefix = '0x';
                  argText = currAbsArg.toString(16);
                }
              }
              if (precisionSet) {
                while (argText.length < precision) {
                  argText = '0' + argText;
                }
              }
              // Add sign if needed
              if (currArg >= 0) {
                if (flagAlwaysSigned) {
                  prefix = '+' + prefix;
                } else if (flagPadSign) {
                  prefix = ' ' + prefix;
                }
              }
              // Move sign to prefix so we zero-pad after the sign
              if (argText.charAt(0) == '-') {
                prefix = '-' + prefix;
                argText = argText.substr(1);
              }
              // Add padding.
              while (prefix.length + argText.length < width) {
                if (flagLeftAlign) {
                  argText += ' ';
                } else {
                  if (flagZeroPad) {
                    argText = '0' + argText;
                  } else {
                    prefix = ' ' + prefix;
                  }
                }
              }
              // Insert the result into the buffer.
              argText = prefix + argText;
              argText.split('').forEach(function(chr) {
                ret.push(chr.charCodeAt(0));
              });
              break;
            }
            case 'f': case 'F': case 'e': case 'E': case 'g': case 'G': {
              // Float.
              var currArg = getNextArg('double');
              var argText;
              if (isNaN(currArg)) {
                argText = 'nan';
                flagZeroPad = false;
              } else if (!isFinite(currArg)) {
                argText = (currArg < 0 ? '-' : '') + 'inf';
                flagZeroPad = false;
              } else {
                var isGeneral = false;
                var effectivePrecision = Math.min(precision, 20);
                // Convert g/G to f/F or e/E, as per:
                // http://pubs.opengroup.org/onlinepubs/9699919799/functions/printf.html
                if (next == 103 || next == 71) {
                  isGeneral = true;
                  precision = precision || 1;
                  var exponent = parseInt(currArg.toExponential(effectivePrecision).split('e')[1], 10);
                  if (precision > exponent && exponent >= -4) {
                    next = ((next == 103) ? 'f' : 'F').charCodeAt(0);
                    precision -= exponent + 1;
                  } else {
                    next = ((next == 103) ? 'e' : 'E').charCodeAt(0);
                    precision--;
                  }
                  effectivePrecision = Math.min(precision, 20);
                }
                if (next == 101 || next == 69) {
                  argText = currArg.toExponential(effectivePrecision);
                  // Make sure the exponent has at least 2 digits.
                  if (/[eE][-+]\d$/.test(argText)) {
                    argText = argText.slice(0, -1) + '0' + argText.slice(-1);
                  }
                } else if (next == 102 || next == 70) {
                  argText = currArg.toFixed(effectivePrecision);
                  if (currArg === 0 && __reallyNegative(currArg)) {
                    argText = '-' + argText;
                  }
                }
                var parts = argText.split('e');
                if (isGeneral && !flagAlternative) {
                  // Discard trailing zeros and periods.
                  while (parts[0].length > 1 && parts[0].indexOf('.') != -1 &&
                         (parts[0].slice(-1) == '0' || parts[0].slice(-1) == '.')) {
                    parts[0] = parts[0].slice(0, -1);
                  }
                } else {
                  // Make sure we have a period in alternative mode.
                  if (flagAlternative && argText.indexOf('.') == -1) parts[0] += '.';
                  // Zero pad until required precision.
                  while (precision > effectivePrecision++) parts[0] += '0';
                }
                argText = parts[0] + (parts.length > 1 ? 'e' + parts[1] : '');
                // Capitalize 'E' if needed.
                if (next == 69) argText = argText.toUpperCase();
                // Add sign.
                if (currArg >= 0) {
                  if (flagAlwaysSigned) {
                    argText = '+' + argText;
                  } else if (flagPadSign) {
                    argText = ' ' + argText;
                  }
                }
              }
              // Add padding.
              while (argText.length < width) {
                if (flagLeftAlign) {
                  argText += ' ';
                } else {
                  if (flagZeroPad && (argText[0] == '-' || argText[0] == '+')) {
                    argText = argText[0] + '0' + argText.slice(1);
                  } else {
                    argText = (flagZeroPad ? '0' : ' ') + argText;
                  }
                }
              }
              // Adjust case.
              if (next < 97) argText = argText.toUpperCase();
              // Insert the result into the buffer.
              argText.split('').forEach(function(chr) {
                ret.push(chr.charCodeAt(0));
              });
              break;
            }
            case 's': {
              // String.
              var arg = getNextArg('i8*');
              var argLength = arg ? _strlen(arg) : '(null)'.length;
              if (precisionSet) argLength = Math.min(argLength, precision);
              if (!flagLeftAlign) {
                while (argLength < width--) {
                  ret.push(32);
                }
              }
              if (arg) {
                for (var i = 0; i < argLength; i++) {
                  ret.push(HEAPU8[((arg++)|0)]);
                }
              } else {
                ret = ret.concat(intArrayFromString('(null)'.substr(0, argLength), true));
              }
              if (flagLeftAlign) {
                while (argLength < width--) {
                  ret.push(32);
                }
              }
              break;
            }
            case 'c': {
              // Character.
              if (flagLeftAlign) ret.push(getNextArg('i8'));
              while (--width > 0) {
                ret.push(32);
              }
              if (!flagLeftAlign) ret.push(getNextArg('i8'));
              break;
            }
            case 'n': {
              // Write the length written so far to the next parameter.
              var ptr = getNextArg('i32*');
              HEAP32[((ptr)>>2)]=ret.length
              break;
            }
            case '%': {
              // Literal percent sign.
              ret.push(curr);
              break;
            }
            default: {
              // Unknown specifiers remain untouched.
              for (var i = startTextIndex; i < textIndex + 2; i++) {
                ret.push(HEAP8[(i)]);
              }
            }
          }
          textIndex += 2;
          // TODO: Support a/A (hex float) and m (last error) specifiers.
          // TODO: Support %1${specifier} for arg selection.
        } else {
          ret.push(curr);
          textIndex += 1;
        }
      }
      return ret;
    }function _snprintf(s, n, format, varargs) {
      // int snprintf(char *restrict s, size_t n, const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      var result = __formatString(format, varargs);
      var limit = (n === undefined) ? result.length
                                    : Math.min(result.length, Math.max(n - 1, 0));
      if (s < 0) {
        s = -s;
        var buf = _malloc(limit+1);
        HEAP32[((s)>>2)]=buf;
        s = buf;
      }
      for (var i = 0; i < limit; i++) {
        HEAP8[(((s)+(i))|0)]=result[i];
      }
      if (limit < n || (n === undefined)) HEAP8[(((s)+(i))|0)]=0;
      return result.length;
    }function _sprintf(s, format, varargs) {
      // int sprintf(char *restrict s, const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      return _snprintf(s, undefined, format, varargs);
    }
  function _strncmp(px, py, n) {
      var i = 0;
      while (i < n) {
        var x = HEAPU8[(((px)+(i))|0)];
        var y = HEAPU8[(((py)+(i))|0)];
        if (x == y && x == 0) return 0;
        if (x == 0) return -1;
        if (y == 0) return 1;
        if (x == y) {
          i ++;
          continue;
        } else {
          return x > y ? 1 : -1;
        }
      }
      return 0;
    }function _strcmp(px, py) {
      return _strncmp(px, py, TOTAL_MEMORY);
    }
  var SOCKFS={mount:function (mount) {
        return FS.createNode(null, '/', 16384 | 0777, 0);
      },createSocket:function (family, type, protocol) {
        var streaming = type == 1;
        if (protocol) {
          assert(streaming == (protocol == 6)); // if SOCK_STREAM, must be tcp
        }
        // create our internal socket structure
        var sock = {
          family: family,
          type: type,
          protocol: protocol,
          server: null,
          peers: {},
          pending: [],
          recv_queue: [],
          sock_ops: SOCKFS.websocket_sock_ops
        };
        // create the filesystem node to store the socket structure
        var name = SOCKFS.nextname();
        var node = FS.createNode(SOCKFS.root, name, 49152, 0);
        node.sock = sock;
        // and the wrapping stream that enables library functions such
        // as read and write to indirectly interact with the socket
        var stream = FS.createStream({
          path: name,
          node: node,
          flags: FS.modeStringToFlags('r+'),
          seekable: false,
          stream_ops: SOCKFS.stream_ops
        });
        // map the new stream to the socket structure (sockets have a 1:1
        // relationship with a stream)
        sock.stream = stream;
        return sock;
      },getSocket:function (fd) {
        var stream = FS.getStream(fd);
        if (!stream || !FS.isSocket(stream.node.mode)) {
          return null;
        }
        return stream.node.sock;
      },stream_ops:{poll:function (stream) {
          var sock = stream.node.sock;
          return sock.sock_ops.poll(sock);
        },ioctl:function (stream, request, varargs) {
          var sock = stream.node.sock;
          return sock.sock_ops.ioctl(sock, request, varargs);
        },read:function (stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          var msg = sock.sock_ops.recvmsg(sock, length);
          if (!msg) {
            // socket is closed
            return 0;
          }
          buffer.set(msg.buffer, offset);
          return msg.buffer.length;
        },write:function (stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          return sock.sock_ops.sendmsg(sock, buffer, offset, length);
        },close:function (stream) {
          var sock = stream.node.sock;
          sock.sock_ops.close(sock);
        }},nextname:function () {
        if (!SOCKFS.nextname.current) {
          SOCKFS.nextname.current = 0;
        }
        return 'socket[' + (SOCKFS.nextname.current++) + ']';
      },websocket_sock_ops:{createPeer:function (sock, addr, port) {
          var ws;
          if (typeof addr === 'object') {
            ws = addr;
            addr = null;
            port = null;
          }
          if (ws) {
            // for sockets that've already connected (e.g. we're the server)
            // we can inspect the _socket property for the address
            if (ws._socket) {
              addr = ws._socket.remoteAddress;
              port = ws._socket.remotePort;
            }
            // if we're just now initializing a connection to the remote,
            // inspect the url property
            else {
              var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
              if (!result) {
                throw new Error('WebSocket URL must be in the format ws(s)://address:port');
              }
              addr = result[1];
              port = parseInt(result[2], 10);
            }
          } else {
            // create the actual websocket object and connect
            try {
              var url = 'ws://' + addr + ':' + port;
              // the node ws library API is slightly different than the browser's
              var opts = ENVIRONMENT_IS_NODE ? {headers: {'websocket-protocol': ['binary']}} : ['binary'];
              // If node we use the ws library.
              var WebSocket = ENVIRONMENT_IS_NODE ? require('ws') : window['WebSocket'];
              ws = new WebSocket(url, opts);
              ws.binaryType = 'arraybuffer';
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EHOSTUNREACH);
            }
          }
          var peer = {
            addr: addr,
            port: port,
            socket: ws,
            dgram_send_queue: []
          };
          SOCKFS.websocket_sock_ops.addPeer(sock, peer);
          SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
          // if this is a bound dgram socket, send the port number first to allow
          // us to override the ephemeral port reported to us by remotePort on the
          // remote end.
          if (sock.type === 2 && typeof sock.sport !== 'undefined') {
            peer.dgram_send_queue.push(new Uint8Array([
                255, 255, 255, 255,
                'p'.charCodeAt(0), 'o'.charCodeAt(0), 'r'.charCodeAt(0), 't'.charCodeAt(0),
                ((sock.sport & 0xff00) >> 8) , (sock.sport & 0xff)
            ]));
          }
          return peer;
        },getPeer:function (sock, addr, port) {
          return sock.peers[addr + ':' + port];
        },addPeer:function (sock, peer) {
          sock.peers[peer.addr + ':' + peer.port] = peer;
        },removePeer:function (sock, peer) {
          delete sock.peers[peer.addr + ':' + peer.port];
        },handlePeerEvents:function (sock, peer) {
          var first = true;
          var handleOpen = function () {
            try {
              var queued = peer.dgram_send_queue.shift();
              while (queued) {
                peer.socket.send(queued);
                queued = peer.dgram_send_queue.shift();
              }
            } catch (e) {
              // not much we can do here in the way of proper error handling as we've already
              // lied and said this data was sent. shut it down.
              peer.socket.close();
            }
          };
          function handleMessage(data) {
            assert(typeof data !== 'string' && data.byteLength !== undefined);  // must receive an ArrayBuffer
            data = new Uint8Array(data);  // make a typed array view on the array buffer
            // if this is the port message, override the peer's port with it
            var wasfirst = first;
            first = false;
            if (wasfirst &&
                data.length === 10 &&
                data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 &&
                data[4] === 'p'.charCodeAt(0) && data[5] === 'o'.charCodeAt(0) && data[6] === 'r'.charCodeAt(0) && data[7] === 't'.charCodeAt(0)) {
              // update the peer's port and it's key in the peer map
              var newport = ((data[8] << 8) | data[9]);
              SOCKFS.websocket_sock_ops.removePeer(sock, peer);
              peer.port = newport;
              SOCKFS.websocket_sock_ops.addPeer(sock, peer);
              return;
            }
            sock.recv_queue.push({ addr: peer.addr, port: peer.port, data: data });
          };
          if (ENVIRONMENT_IS_NODE) {
            peer.socket.on('open', handleOpen);
            peer.socket.on('message', function(data, flags) {
              if (!flags.binary) {
                return;
              }
              handleMessage((new Uint8Array(data)).buffer);  // copy from node Buffer -> ArrayBuffer
            });
            peer.socket.on('error', function() {
              // don't throw
            });
          } else {
            peer.socket.onopen = handleOpen;
            peer.socket.onmessage = function peer_socket_onmessage(event) {
              handleMessage(event.data);
            };
          }
        },poll:function (sock) {
          if (sock.type === 1 && sock.server) {
            // listen sockets should only say they're available for reading
            // if there are pending clients.
            return sock.pending.length ? (64 | 1) : 0;
          }
          var mask = 0;
          var dest = sock.type === 1 ?  // we only care about the socket state for connection-based sockets
            SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) :
            null;
          if (sock.recv_queue.length ||
              !dest ||  // connection-less sockets are always ready to read
              (dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {  // let recv return 0 once closed
            mask |= (64 | 1);
          }
          if (!dest ||  // connection-less sockets are always ready to write
              (dest && dest.socket.readyState === dest.socket.OPEN)) {
            mask |= 4;
          }
          if ((dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {
            mask |= 16;
          }
          return mask;
        },ioctl:function (sock, request, arg) {
          switch (request) {
            case 21531:
              var bytes = 0;
              if (sock.recv_queue.length) {
                bytes = sock.recv_queue[0].data.length;
              }
              HEAP32[((arg)>>2)]=bytes;
              return 0;
            default:
              return ERRNO_CODES.EINVAL;
          }
        },close:function (sock) {
          // if we've spawned a listen server, close it
          if (sock.server) {
            try {
              sock.server.close();
            } catch (e) {
            }
            sock.server = null;
          }
          // close any peer connections
          var peers = Object.keys(sock.peers);
          for (var i = 0; i < peers.length; i++) {
            var peer = sock.peers[peers[i]];
            try {
              peer.socket.close();
            } catch (e) {
            }
            SOCKFS.websocket_sock_ops.removePeer(sock, peer);
          }
          return 0;
        },bind:function (sock, addr, port) {
          if (typeof sock.saddr !== 'undefined' || typeof sock.sport !== 'undefined') {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);  // already bound
          }
          sock.saddr = addr;
          sock.sport = port || _mkport();
          // in order to emulate dgram sockets, we need to launch a listen server when
          // binding on a connection-less socket
          // note: this is only required on the server side
          if (sock.type === 2) {
            // close the existing server if it exists
            if (sock.server) {
              sock.server.close();
              sock.server = null;
            }
            // swallow error operation not supported error that occurs when binding in the
            // browser where this isn't supported
            try {
              sock.sock_ops.listen(sock, 0);
            } catch (e) {
              if (!(e instanceof FS.ErrnoError)) throw e;
              if (e.errno !== ERRNO_CODES.EOPNOTSUPP) throw e;
            }
          }
        },connect:function (sock, addr, port) {
          if (sock.server) {
            throw new FS.ErrnoError(ERRNO_CODS.EOPNOTSUPP);
          }
          // TODO autobind
          // if (!sock.addr && sock.type == 2) {
          // }
          // early out if we're already connected / in the middle of connecting
          if (typeof sock.daddr !== 'undefined' && typeof sock.dport !== 'undefined') {
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
            if (dest) {
              if (dest.socket.readyState === dest.socket.CONNECTING) {
                throw new FS.ErrnoError(ERRNO_CODES.EALREADY);
              } else {
                throw new FS.ErrnoError(ERRNO_CODES.EISCONN);
              }
            }
          }
          // add the socket to our peer list and set our
          // destination address / port to match
          var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
          sock.daddr = peer.addr;
          sock.dport = peer.port;
          // always "fail" in non-blocking mode
          throw new FS.ErrnoError(ERRNO_CODES.EINPROGRESS);
        },listen:function (sock, backlog) {
          if (!ENVIRONMENT_IS_NODE) {
            throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
          }
          if (sock.server) {
             throw new FS.ErrnoError(ERRNO_CODES.EINVAL);  // already listening
          }
          var WebSocketServer = require('ws').Server;
          var host = sock.saddr;
          sock.server = new WebSocketServer({
            host: host,
            port: sock.sport
            // TODO support backlog
          });
          sock.server.on('connection', function(ws) {
            if (sock.type === 1) {
              var newsock = SOCKFS.createSocket(sock.family, sock.type, sock.protocol);
              // create a peer on the new socket
              var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
              newsock.daddr = peer.addr;
              newsock.dport = peer.port;
              // push to queue for accept to pick up
              sock.pending.push(newsock);
            } else {
              // create a peer on the listen socket so calling sendto
              // with the listen socket and an address will resolve
              // to the correct client
              SOCKFS.websocket_sock_ops.createPeer(sock, ws);
            }
          });
          sock.server.on('closed', function() {
            sock.server = null;
          });
          sock.server.on('error', function() {
            // don't throw
          });
        },accept:function (listensock) {
          if (!listensock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          var newsock = listensock.pending.shift();
          newsock.stream.flags = listensock.stream.flags;
          return newsock;
        },getname:function (sock, peer) {
          var addr, port;
          if (peer) {
            if (sock.daddr === undefined || sock.dport === undefined) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            }
            addr = sock.daddr;
            port = sock.dport;
          } else {
            // TODO saddr and sport will be set for bind()'d UDP sockets, but what
            // should we be returning for TCP sockets that've been connect()'d?
            addr = sock.saddr || 0;
            port = sock.sport || 0;
          }
          return { addr: addr, port: port };
        },sendmsg:function (sock, buffer, offset, length, addr, port) {
          if (sock.type === 2) {
            // connection-less sockets will honor the message address,
            // and otherwise fall back to the bound destination address
            if (addr === undefined || port === undefined) {
              addr = sock.daddr;
              port = sock.dport;
            }
            // if there was no address to fall back to, error out
            if (addr === undefined || port === undefined) {
              throw new FS.ErrnoError(ERRNO_CODES.EDESTADDRREQ);
            }
          } else {
            // connection-based sockets will only use the bound
            addr = sock.daddr;
            port = sock.dport;
          }
          // find the peer for the destination address
          var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
          // early out if not connected with a connection-based socket
          if (sock.type === 1) {
            if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            } else if (dest.socket.readyState === dest.socket.CONNECTING) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
          // create a copy of the incoming data to send, as the WebSocket API
          // doesn't work entirely with an ArrayBufferView, it'll just send
          // the entire underlying buffer
          var data;
          if (buffer instanceof Array || buffer instanceof ArrayBuffer) {
            data = buffer.slice(offset, offset + length);
          } else {  // ArrayBufferView
            data = buffer.buffer.slice(buffer.byteOffset + offset, buffer.byteOffset + offset + length);
          }
          // if we're emulating a connection-less dgram socket and don't have
          // a cached connection, queue the buffer to send upon connect and
          // lie, saying the data was sent now.
          if (sock.type === 2) {
            if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
              // if we're not connected, open a new connection
              if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
              }
              dest.dgram_send_queue.push(data);
              return length;
            }
          }
          try {
            // send the actual data
            dest.socket.send(data);
            return length;
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
        },recvmsg:function (sock, length) {
          // http://pubs.opengroup.org/onlinepubs/7908799/xns/recvmsg.html
          if (sock.type === 1 && sock.server) {
            // tcp servers should not be recv()'ing on the listen socket
            throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
          }
          var queued = sock.recv_queue.shift();
          if (!queued) {
            if (sock.type === 1) {
              var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
              if (!dest) {
                // if we have a destination address but are not connected, error out
                throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
              }
              else if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                // return null if the socket has closed
                return null;
              }
              else {
                // else, our socket is in a valid state but truly has nothing available
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
            } else {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
          // queued.data will be an ArrayBuffer if it's unadulterated, but if it's
          // requeued TCP data it'll be an ArrayBufferView
          var queuedLength = queued.data.byteLength || queued.data.length;
          var queuedOffset = queued.data.byteOffset || 0;
          var queuedBuffer = queued.data.buffer || queued.data;
          var bytesRead = Math.min(length, queuedLength);
          var res = {
            buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
            addr: queued.addr,
            port: queued.port
          };
          // push back any unread data for TCP connections
          if (sock.type === 1 && bytesRead < queuedLength) {
            var bytesRemaining = queuedLength - bytesRead;
            queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
            sock.recv_queue.unshift(queued);
          }
          return res;
        }}};function _send(fd, buf, len, flags) {
      var sock = SOCKFS.getSocket(fd);
      if (!sock) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      // TODO honor flags
      return _write(fd, buf, len);
    }
  function _pwrite(fildes, buf, nbyte, offset) {
      // ssize_t pwrite(int fildes, const void *buf, size_t nbyte, off_t offset);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/write.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.write(stream, slab, buf, nbyte, offset);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _write(fildes, buf, nbyte) {
      // ssize_t write(int fildes, const void *buf, size_t nbyte);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/write.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.write(stream, slab, buf, nbyte);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _fputc(c, stream) {
      // int fputc(int c, FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fputc.html
      var chr = unSign(c & 0xFF);
      HEAP8[((_fputc.ret)|0)]=chr
      var ret = _write(stream, _fputc.ret, 1);
      if (ret == -1) {
        var streamObj = FS.getStream(stream);
        if (streamObj) streamObj.error = true;
        return -1;
      } else {
        return chr;
      }
    }function _putchar(c) {
      // int putchar(int c);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/putchar.html
      return _fputc(c, HEAP32[((_stdout)>>2)]);
    } 
  Module["_saveSetjmp"] = _saveSetjmp;
  Module["_testSetjmp"] = _testSetjmp;var _setjmp=undefined;
  function _llvm_lifetime_start() {}
  function _llvm_lifetime_end() {}
  Module["_memcpy"] = _memcpy;var _llvm_memcpy_p0i8_p0i8_i32=_memcpy;
  function _log10(x) {
      return Math.log(x) / Math.LN10;
    }
  function _isspace(chr) {
      return (chr == 32) || (chr >= 9 && chr <= 13);
    }
  function __parseInt(str, endptr, base, min, max, bits, unsign) {
      // Skip space.
      while (_isspace(HEAP8[(str)])) str++;
      // Check for a plus/minus sign.
      var multiplier = 1;
      if (HEAP8[(str)] == 45) {
        multiplier = -1;
        str++;
      } else if (HEAP8[(str)] == 43) {
        str++;
      }
      // Find base.
      var finalBase = base;
      if (!finalBase) {
        if (HEAP8[(str)] == 48) {
          if (HEAP8[((str+1)|0)] == 120 ||
              HEAP8[((str+1)|0)] == 88) {
            finalBase = 16;
            str += 2;
          } else {
            finalBase = 8;
            str++;
          }
        }
      } else if (finalBase==16) {
        if (HEAP8[(str)] == 48) {
          if (HEAP8[((str+1)|0)] == 120 ||
              HEAP8[((str+1)|0)] == 88) {
            str += 2;
          }
        }
      }
      if (!finalBase) finalBase = 10;
      // Get digits.
      var chr;
      var ret = 0;
      while ((chr = HEAP8[(str)]) != 0) {
        var digit = parseInt(String.fromCharCode(chr), finalBase);
        if (isNaN(digit)) {
          break;
        } else {
          ret = ret * finalBase + digit;
          str++;
        }
      }
      // Apply sign.
      ret *= multiplier;
      // Set end pointer.
      if (endptr) {
        HEAP32[((endptr)>>2)]=str
      }
      // Unsign if needed.
      if (unsign) {
        if (Math.abs(ret) > max) {
          ret = max;
          ___setErrNo(ERRNO_CODES.ERANGE);
        } else {
          ret = unSign(ret, bits);
        }
      }
      // Validate range.
      if (ret > max || ret < min) {
        ret = ret > max ? max : min;
        ___setErrNo(ERRNO_CODES.ERANGE);
      }
      if (bits == 64) {
        return ((asm["setTempRet0"]((tempDouble=ret,(+(Math_abs(tempDouble))) >= (+1) ? (tempDouble > (+0) ? ((Math_min((+(Math_floor((tempDouble)/(+4294967296)))), (+4294967295)))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/(+4294967296))))))>>>0) : 0)),ret>>>0)|0);
      }
      return ret;
    }function _strtol(str, endptr, base) {
      return __parseInt(str, endptr, base, -2147483648, 2147483647, 32);  // LONG_MIN, LONG_MAX.
    }function _atoi(ptr) {
      return _strtol(ptr, null, 10);
    }
  var _floor=Math_floor;
  function _fmod(x, y) {
      return x % y;
    }
  function _stat(path, buf, dontResolveLastLink) {
      // http://pubs.opengroup.org/onlinepubs/7908799/xsh/stat.html
      // int stat(const char *path, struct stat *buf);
      // NOTE: dontResolveLastLink is a shortcut for lstat(). It should never be
      //       used in client code.
      path = typeof path !== 'string' ? Pointer_stringify(path) : path;
      try {
        var stat = dontResolveLastLink ? FS.lstat(path) : FS.stat(path);
        HEAP32[((buf)>>2)]=stat.dev;
        HEAP32[(((buf)+(4))>>2)]=0;
        HEAP32[(((buf)+(8))>>2)]=stat.ino;
        HEAP32[(((buf)+(12))>>2)]=stat.mode
        HEAP32[(((buf)+(16))>>2)]=stat.nlink
        HEAP32[(((buf)+(20))>>2)]=stat.uid
        HEAP32[(((buf)+(24))>>2)]=stat.gid
        HEAP32[(((buf)+(28))>>2)]=stat.rdev
        HEAP32[(((buf)+(32))>>2)]=0;
        HEAP32[(((buf)+(36))>>2)]=stat.size
        HEAP32[(((buf)+(40))>>2)]=4096
        HEAP32[(((buf)+(44))>>2)]=stat.blocks
        HEAP32[(((buf)+(48))>>2)]=Math.floor(stat.atime.getTime() / 1000)
        HEAP32[(((buf)+(52))>>2)]=0
        HEAP32[(((buf)+(56))>>2)]=Math.floor(stat.mtime.getTime() / 1000)
        HEAP32[(((buf)+(60))>>2)]=0
        HEAP32[(((buf)+(64))>>2)]=Math.floor(stat.ctime.getTime() / 1000)
        HEAP32[(((buf)+(68))>>2)]=0
        HEAP32[(((buf)+(72))>>2)]=stat.ino
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }
  function ___errno_location() {
      return ___errno_state;
    }
  function _open(path, oflag, varargs) {
      // int open(const char *path, int oflag, ...);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/open.html
      var mode = HEAP32[((varargs)>>2)];
      path = Pointer_stringify(path);
      try {
        var stream = FS.open(path, oflag, mode);
        return stream.fd;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _opendir(dirname) {
      // DIR *opendir(const char *dirname);
      // http://pubs.opengroup.org/onlinepubs/007908799/xsh/opendir.html
      // NOTE: Calculating absolute path redundantly since we need to associate it
      //       with the opened stream.
      var path = Pointer_stringify(dirname);
      if (!path) {
        ___setErrNo(ERRNO_CODES.ENOENT);
        return 0;
      }
      var node;
      try {
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
      } catch (e) {
        FS.handleFSError(e);
        return 0;
      }
      if (!FS.isDir(node.mode)) {
        ___setErrNo(ERRNO_CODES.ENOTDIR);
        return 0;
      }
      var err = _open(dirname, 0, allocate([0, 0, 0, 0], 'i32', ALLOC_STACK));
      // open returns 0 on failure, not -1
      return err === -1 ? 0 : err;
    }
  function _readdir_r(dirp, entry, result) {
      // int readdir_r(DIR *dirp, struct dirent *entry, struct dirent **result);
      // http://pubs.opengroup.org/onlinepubs/007908799/xsh/readdir_r.html
      var stream = FS.getStream(dirp);
      if (!stream) {
        return ___setErrNo(ERRNO_CODES.EBADF);
      }
      var entries;
      try {
        entries = FS.readdir(stream.path);
      } catch (e) {
        return FS.handleFSError(e);
      }
      if (stream.position < 0 || stream.position >= entries.length) {
        HEAP32[((result)>>2)]=0
        return 0;
      }
      var id;
      var type;
      var name = entries[stream.position];
      var offset = stream.position + 1;
      if (!name.indexOf('.')) {
        id = 1;
        type = 4;
      } else {
        var child = FS.lookupNode(stream.node, name);
        id = child.id;
        type = FS.isChrdev(child.mode) ? 2 :  // DT_CHR, character device.
               FS.isDir(child.mode) ? 4 :     // DT_DIR, directory.
               FS.isLink(child.mode) ? 10 :   // DT_LNK, symbolic link.
               8;                             // DT_REG, regular file.
      }
      HEAP32[((entry)>>2)]=id
      HEAP32[(((entry)+(4))>>2)]=offset
      HEAP32[(((entry)+(8))>>2)]=name.length + 1
      for (var i = 0; i < name.length; i++) {
        HEAP8[(((entry + 11)+(i))|0)]=name.charCodeAt(i)
      }
      HEAP8[(((entry + 11)+(i))|0)]=0
      HEAP8[(((entry)+(10))|0)]=type
      HEAP32[((result)>>2)]=entry
      stream.position++;
      return 0;
    }function _readdir(dirp) {
      // struct dirent *readdir(DIR *dirp);
      // http://pubs.opengroup.org/onlinepubs/007908799/xsh/readdir_r.html
      var stream = FS.getStream(dirp);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return 0;
      }
      // TODO Is it supposed to be safe to execute multiple readdirs?
      if (!_readdir.entry) _readdir.entry = _malloc(268);
      if (!_readdir.result) _readdir.result = _malloc(4);
      var err = _readdir_r(dirp, _readdir.entry, _readdir.result);
      if (err) {
        ___setErrNo(err);
        return 0;
      }
      return HEAP32[((_readdir.result)>>2)];
    }
  function _close(fildes) {
      // int close(int fildes);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/close.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        FS.close(stream);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _closedir(dirp) {
      // int closedir(DIR *dirp);
      // http://pubs.opengroup.org/onlinepubs/007908799/xsh/closedir.html
      return _close(dirp);
    }
  function _chmod(path, mode, dontResolveLastLink) {
      // int chmod(const char *path, mode_t mode);
      // http://pubs.opengroup.org/onlinepubs/7908799/xsh/chmod.html
      // NOTE: dontResolveLastLink is a shortcut for lchmod(). It should never be
      //       used in client code.
      path = typeof path !== 'string' ? Pointer_stringify(path) : path;
      try {
        FS.chmod(path, mode);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }
  function _access(path, amode) {
      // int access(const char *path, int amode);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/access.html
      path = Pointer_stringify(path);
      if (amode & ~7) {
        // need a valid mode
        ___setErrNo(ERRNO_CODES.EINVAL);
        return -1;
      }
      var node;
      try {
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
      var perms = '';
      if (amode & 4) perms += 'r';
      if (amode & 2) perms += 'w';
      if (amode & 1) perms += 'x';
      if (perms /* otherwise, they've just passed F_OK */ && FS.nodePermissions(node, perms)) {
        ___setErrNo(ERRNO_CODES.EACCES);
        return -1;
      }
      return 0;
    }
  function _getcwd(buf, size) {
      // char *getcwd(char *buf, size_t size);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/getcwd.html
      if (size == 0) {
        ___setErrNo(ERRNO_CODES.EINVAL);
        return 0;
      }
      var cwd = FS.cwd();
      if (size < cwd.length + 1) {
        ___setErrNo(ERRNO_CODES.ERANGE);
        return 0;
      } else {
        writeAsciiToMemory(cwd, buf);
        return buf;
      }
    }
  function _rename(old_path, new_path) {
      // int rename(const char *old, const char *new);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/rename.html
      old_path = Pointer_stringify(old_path);
      new_path = Pointer_stringify(new_path);
      try {
        FS.rename(old_path, new_path);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }
  function _unlink(path) {
      // int unlink(const char *path);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/unlink.html
      path = Pointer_stringify(path);
      try {
        FS.unlink(path);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }
  function _rmdir(path) {
      // int rmdir(const char *path);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/rmdir.html
      path = Pointer_stringify(path);
      try {
        FS.rmdir(path);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }
  function _mknod(path, mode, dev) {
      // int mknod(const char *path, mode_t mode, dev_t dev);
      // http://pubs.opengroup.org/onlinepubs/7908799/xsh/mknod.html
      path = Pointer_stringify(path);
      // we don't want this in the JS API as the JS API
      // uses mknod to create all nodes.
      switch (mode & 61440) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
          break;
        default:
          ___setErrNo(ERRNO_CODES.EINVAL);
          return -1;
      }
      try {
        FS.mknod(path, mode, dev);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _mkdir(path, mode) {
      // int mkdir(const char *path, mode_t mode);
      // http://pubs.opengroup.org/onlinepubs/7908799/xsh/mkdir.html
      path = Pointer_stringify(path);
      try {
        FS.mkdir(path, mode, 0);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }
  var _tzname=allocate(8, "i32*", ALLOC_STATIC);
  var _daylight=allocate(1, "i32*", ALLOC_STATIC);
  var _timezone=allocate(1, "i32*", ALLOC_STATIC);function _tzset() {
      // TODO: Use (malleable) environment variables instead of system settings.
      if (_tzset.called) return;
      _tzset.called = true;
      HEAP32[((_timezone)>>2)]=-(new Date()).getTimezoneOffset() * 60
      var winter = new Date(2000, 0, 1);
      var summer = new Date(2000, 6, 1);
      HEAP32[((_daylight)>>2)]=Number(winter.getTimezoneOffset() != summer.getTimezoneOffset())
      var winterName = 'GMT'; // XXX do not rely on browser timezone info, it is very unpredictable | winter.toString().match(/\(([A-Z]+)\)/)[1];
      var summerName = 'GMT'; // XXX do not rely on browser timezone info, it is very unpredictable | summer.toString().match(/\(([A-Z]+)\)/)[1];
      var winterNamePtr = allocate(intArrayFromString(winterName), 'i8', ALLOC_NORMAL);
      var summerNamePtr = allocate(intArrayFromString(summerName), 'i8', ALLOC_NORMAL);
      HEAP32[((_tzname)>>2)]=winterNamePtr
      HEAP32[(((_tzname)+(4))>>2)]=summerNamePtr
    }function _mktime(tmPtr) {
      _tzset();
      var year = HEAP32[(((tmPtr)+(20))>>2)];
      var timestamp = new Date(year >= 1900 ? year : year + 1900,
                               HEAP32[(((tmPtr)+(16))>>2)],
                               HEAP32[(((tmPtr)+(12))>>2)],
                               HEAP32[(((tmPtr)+(8))>>2)],
                               HEAP32[(((tmPtr)+(4))>>2)],
                               HEAP32[((tmPtr)>>2)],
                               0).getTime() / 1000;
      HEAP32[(((tmPtr)+(24))>>2)]=new Date(timestamp).getDay()
      var yday = Math.round((timestamp - (new Date(year, 0, 1)).getTime()) / (1000 * 60 * 60 * 24));
      HEAP32[(((tmPtr)+(28))>>2)]=yday
      return timestamp;
    }
  var ___tm_current=allocate(44, "i8", ALLOC_STATIC);
  var ___tm_timezone=allocate(intArrayFromString("GMT"), "i8", ALLOC_STATIC);function _gmtime_r(time, tmPtr) {
      var date = new Date(HEAP32[((time)>>2)]*1000);
      HEAP32[((tmPtr)>>2)]=date.getUTCSeconds()
      HEAP32[(((tmPtr)+(4))>>2)]=date.getUTCMinutes()
      HEAP32[(((tmPtr)+(8))>>2)]=date.getUTCHours()
      HEAP32[(((tmPtr)+(12))>>2)]=date.getUTCDate()
      HEAP32[(((tmPtr)+(16))>>2)]=date.getUTCMonth()
      HEAP32[(((tmPtr)+(20))>>2)]=date.getUTCFullYear()-1900
      HEAP32[(((tmPtr)+(24))>>2)]=date.getUTCDay()
      HEAP32[(((tmPtr)+(36))>>2)]=0
      HEAP32[(((tmPtr)+(32))>>2)]=0
      var start = new Date(date); // define date using UTC, start from Jan 01 00:00:00 UTC
      start.setUTCDate(1);
      start.setUTCMonth(0);
      start.setUTCHours(0);
      start.setUTCMinutes(0);
      start.setUTCSeconds(0);
      start.setUTCMilliseconds(0);
      var yday = Math.floor((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      HEAP32[(((tmPtr)+(28))>>2)]=yday
      HEAP32[(((tmPtr)+(40))>>2)]=___tm_timezone
      return tmPtr;
    }function _gmtime(time) {
      return _gmtime_r(time, ___tm_current);
    }
  function _localtime_r(time, tmPtr) {
      _tzset();
      var date = new Date(HEAP32[((time)>>2)]*1000);
      HEAP32[((tmPtr)>>2)]=date.getSeconds()
      HEAP32[(((tmPtr)+(4))>>2)]=date.getMinutes()
      HEAP32[(((tmPtr)+(8))>>2)]=date.getHours()
      HEAP32[(((tmPtr)+(12))>>2)]=date.getDate()
      HEAP32[(((tmPtr)+(16))>>2)]=date.getMonth()
      HEAP32[(((tmPtr)+(20))>>2)]=date.getFullYear()-1900
      HEAP32[(((tmPtr)+(24))>>2)]=date.getDay()
      var start = new Date(date.getFullYear(), 0, 1);
      var yday = Math.floor((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      HEAP32[(((tmPtr)+(28))>>2)]=yday
      HEAP32[(((tmPtr)+(36))>>2)]=start.getTimezoneOffset() * 60
      var dst = Number(start.getTimezoneOffset() != date.getTimezoneOffset());
      HEAP32[(((tmPtr)+(32))>>2)]=dst
      HEAP32[(((tmPtr)+(40))>>2)]=___tm_timezone
      return tmPtr;
    }function _localtime(time) {
      return _localtime_r(time, ___tm_current);
    }
  function _gettimeofday(ptr) {
      var now = Date.now();
      HEAP32[((ptr)>>2)]=Math.floor(now/1000); // seconds
      HEAP32[(((ptr)+(4))>>2)]=Math.floor((now-1000*Math.floor(now/1000))*1000); // microseconds
      return 0;
    }
  function _getrusage(resource, rlp) {
      // int getrusage(int resource, struct rusage *rlp);
      HEAP32[((rlp)>>2)]=1
      HEAP32[(((rlp)+(4))>>2)]=2
      HEAP32[(((rlp)+(8))>>2)]=3
      HEAP32[(((rlp)+(12))>>2)]=4
      return 0;
    }
  function _fileno(stream) {
      // int fileno(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fileno.html
      // We use file descriptor numbers and FILE* streams interchangeably.
      return stream;
    }
  function _isatty(fildes) {
      // int isatty(int fildes);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/isatty.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return 0;
      }
      // HACK - implement tcgetattr
      if (!stream.tty) {
        ___setErrNo(ERRNO_CODES.ENOTTY);
        return 0;
      }
      return 1;
    }
  function _recv(fd, buf, len, flags) {
      var sock = SOCKFS.getSocket(fd);
      if (!sock) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      // TODO honor flags
      return _read(fd, buf, len);
    }
  function _pread(fildes, buf, nbyte, offset) {
      // ssize_t pread(int fildes, void *buf, size_t nbyte, off_t offset);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/read.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.read(stream, slab, buf, nbyte, offset);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _read(fildes, buf, nbyte) {
      // ssize_t read(int fildes, void *buf, size_t nbyte);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/read.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.read(stream, slab, buf, nbyte);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _fread(ptr, size, nitems, stream) {
      // size_t fread(void *restrict ptr, size_t size, size_t nitems, FILE *restrict stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fread.html
      var bytesToRead = nitems * size;
      if (bytesToRead == 0) {
        return 0;
      }
      var bytesRead = 0;
      var streamObj = FS.getStream(stream);
      while (streamObj.ungotten.length && bytesToRead > 0) {
        HEAP8[((ptr++)|0)]=streamObj.ungotten.pop()
        bytesToRead--;
        bytesRead++;
      }
      var err = _read(stream, ptr, bytesToRead);
      if (err == -1) {
        if (streamObj) streamObj.error = true;
        return 0;
      }
      bytesRead += err;
      if (bytesRead < bytesToRead) streamObj.eof = true;
      return Math.floor(bytesRead / size);
    }
  function _ferror(stream) {
      // int ferror(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/ferror.html
      stream = FS.getStream(stream);
      return Number(stream && stream.error);
    }
  function _lseek(fildes, offset, whence) {
      // off_t lseek(int fildes, off_t offset, int whence);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/lseek.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        return FS.llseek(stream, offset, whence);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _fseek(stream, offset, whence) {
      // int fseek(FILE *stream, long offset, int whence);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fseek.html
      var ret = _lseek(stream, offset, whence);
      if (ret == -1) {
        return -1;
      }
      stream = FS.getStream(stream);
      stream.eof = false;
      return 0;
    }
  function _fwrite(ptr, size, nitems, stream) {
      // size_t fwrite(const void *restrict ptr, size_t size, size_t nitems, FILE *restrict stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fwrite.html
      var bytesToWrite = nitems * size;
      if (bytesToWrite == 0) return 0;
      var bytesWritten = _write(stream, ptr, bytesToWrite);
      if (bytesWritten == -1) {
        var streamObj = FS.getStream(stream);
        if (streamObj) streamObj.error = true;
        return 0;
      } else {
        return Math.floor(bytesWritten / size);
      }
    }
  var ___DEFAULT_POLLMASK=5;function _select(nfds, readfds, writefds, exceptfds, timeout) {
      // readfds are supported,
      // writefds checks socket open status
      // exceptfds not supported
      // timeout is always 0 - fully async
      assert(nfds <= 64, 'nfds must be less than or equal to 64');  // fd sets have 64 bits
      assert(!exceptfds, 'exceptfds not supported');
      var total = 0;
      var srcReadLow = (readfds ? HEAP32[((readfds)>>2)] : 0),
          srcReadHigh = (readfds ? HEAP32[(((readfds)+(4))>>2)] : 0);
      var srcWriteLow = (writefds ? HEAP32[((writefds)>>2)] : 0),
          srcWriteHigh = (writefds ? HEAP32[(((writefds)+(4))>>2)] : 0);
      var srcExceptLow = (exceptfds ? HEAP32[((exceptfds)>>2)] : 0),
          srcExceptHigh = (exceptfds ? HEAP32[(((exceptfds)+(4))>>2)] : 0);
      var dstReadLow = 0,
          dstReadHigh = 0;
      var dstWriteLow = 0,
          dstWriteHigh = 0;
      var dstExceptLow = 0,
          dstExceptHigh = 0;
      var allLow = (readfds ? HEAP32[((readfds)>>2)] : 0) |
                   (writefds ? HEAP32[((writefds)>>2)] : 0) |
                   (exceptfds ? HEAP32[((exceptfds)>>2)] : 0);
      var allHigh = (readfds ? HEAP32[(((readfds)+(4))>>2)] : 0) |
                    (writefds ? HEAP32[(((writefds)+(4))>>2)] : 0) |
                    (exceptfds ? HEAP32[(((exceptfds)+(4))>>2)] : 0);
      function get(fd, low, high, val) {
        return (fd < 32 ? (low & val) : (high & val));
      }
      for (var fd = 0; fd < nfds; fd++) {
        var mask = 1 << (fd % 32);
        if (!(get(fd, allLow, allHigh, mask))) {
          continue;  // index isn't in the set
        }
        var stream = FS.getStream(fd);
        if (!stream) {
          ___setErrNo(ERRNO_CODES.EBADF);
          return -1;
        }
        var flags = ___DEFAULT_POLLMASK;
        if (stream.stream_ops.poll) {
          flags = stream.stream_ops.poll(stream);
        }
        if ((flags & 1) && get(fd, srcReadLow, srcReadHigh, mask)) {
          fd < 32 ? (dstReadLow = dstReadLow | mask) : (dstReadHigh = dstReadHigh | mask);
          total++;
        }
        if ((flags & 4) && get(fd, srcWriteLow, srcWriteHigh, mask)) {
          fd < 32 ? (dstWriteLow = dstWriteLow | mask) : (dstWriteHigh = dstWriteHigh | mask);
          total++;
        }
        if ((flags & 2) && get(fd, srcExceptLow, srcExceptHigh, mask)) {
          fd < 32 ? (dstExceptLow = dstExceptLow | mask) : (dstExceptHigh = dstExceptHigh | mask);
          total++;
        }
      }
      if (readfds) {
        HEAP32[((readfds)>>2)]=dstReadLow;
        HEAP32[(((readfds)+(4))>>2)]=dstReadHigh;
      }
      if (writefds) {
        HEAP32[((writefds)>>2)]=dstWriteLow;
        HEAP32[(((writefds)+(4))>>2)]=dstWriteHigh;
      }
      if (exceptfds) {
        HEAP32[((exceptfds)>>2)]=dstExceptLow;
        HEAP32[(((exceptfds)+(4))>>2)]=dstExceptHigh;
      }
      return total;
    }
  function _fstat(fildes, buf) {
      // int fstat(int fildes, struct stat *buf);
      // http://pubs.opengroup.org/onlinepubs/7908799/xsh/fstat.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      return _stat(stream.path, buf);
    }
  function _feof(stream) {
      // int feof(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/feof.html
      stream = FS.getStream(stream);
      return Number(stream && stream.eof);
    }
  function _ungetc(c, stream) {
      // int ungetc(int c, FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/ungetc.html
      stream = FS.getStream(stream);
      if (!stream) {
        return -1;
      }
      if (c === -1) {
        // do nothing for EOF character
        return c;
      }
      c = unSign(c & 0xFF);
      stream.ungotten.push(c);
      stream.eof = false;
      return c;
    }
  function _fgetc(stream) {
      // int fgetc(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fgetc.html
      var streamObj = FS.getStream(stream);
      if (!streamObj) return -1;
      if (streamObj.eof || streamObj.error) return -1;
      var ret = _fread(_fgetc.ret, 1, 1, stream);
      if (ret == 0) {
        return -1;
      } else if (ret == -1) {
        streamObj.error = true;
        return -1;
      } else {
        return HEAPU8[((_fgetc.ret)|0)];
      }
    }var _getc=_fgetc;
  function _setvbuf(stream, buf, type, size) {
      // int setvbuf(FILE *restrict stream, char *restrict buf, int type, size_t size);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/setvbuf.html
      // TODO: Implement custom buffering.
      return 0;
    }
  function _ftell(stream) {
      // long ftell(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/ftell.html
      stream = FS.getStream(stream);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      if (FS.isChrdev(stream.node.mode)) {
        ___setErrNo(ERRNO_CODES.ESPIPE);
        return -1;
      } else {
        return stream.position;
      }
    }
  function _fsync(fildes) {
      // int fsync(int fildes);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fsync.html
      var stream = FS.getStream(fildes);
      if (stream) {
        // We write directly to the file system, so there's nothing to do here.
        return 0;
      } else {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
    }function _fclose(stream) {
      // int fclose(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fclose.html
      _fsync(stream);
      return _close(stream);
    }
  function _clearerr(stream) {
      // void clearerr(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/clearerr.html
      stream = FS.getStream(stream);
      if (!stream) {
        return;
      }
      stream.eof = false;
      stream.error = false;
    }
  function _fcntl(fildes, cmd, varargs, dup2) {
      // int fcntl(int fildes, int cmd, ...);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/fcntl.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      switch (cmd) {
        case 0:
          var arg = HEAP32[((varargs)>>2)];
          if (arg < 0) {
            ___setErrNo(ERRNO_CODES.EINVAL);
            return -1;
          }
          var newStream;
          try {
            newStream = FS.open(stream.path, stream.flags, 0, arg);
          } catch (e) {
            FS.handleFSError(e);
            return -1;
          }
          return newStream.fd;
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4:
          var arg = HEAP32[((varargs)>>2)];
          stream.flags |= arg;
          return 0;
        case 12:
        case 12:
          var arg = HEAP32[((varargs)>>2)];
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)]=2
          return 0;
        case 13:
        case 14:
        case 13:
        case 14:
          // Pretend that the locking is successful.
          return 0;
        case 8:
        case 9:
          // These are for sockets. We don't have them fully implemented yet.
          ___setErrNo(ERRNO_CODES.EINVAL);
          return -1;
        default:
          ___setErrNo(ERRNO_CODES.EINVAL);
          return -1;
      }
      // Should never be reached. Only to silence strict warnings.
      return -1;
    }function _dup(fildes) {
      // int dup(int fildes);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/dup.html
      return _fcntl(fildes, 0, allocate([0, 0, 0, 0], 'i32', ALLOC_STACK));  // F_DUPFD.
    }
  function _fdopen(fildes, mode) {
      // FILE *fdopen(int fildes, const char *mode);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fdopen.html
      mode = Pointer_stringify(mode);
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return 0;
      }
      if ((mode.indexOf('w') != -1 && !stream.isWrite) ||
          (mode.indexOf('r') != -1 && !stream.isRead) ||
          (mode.indexOf('a') != -1 && !stream.isAppend) ||
          (mode.indexOf('+') != -1 && (!stream.isRead || !stream.isWrite))) {
        ___setErrNo(ERRNO_CODES.EINVAL);
        return 0;
      } else {
        stream.error = false;
        stream.eof = false;
        return fildes;
      }
    }
  function _fopen(filename, mode) {
      // FILE *fopen(const char *restrict filename, const char *restrict mode);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fopen.html
      var flags;
      mode = Pointer_stringify(mode);
      if (mode[0] == 'r') {
        if (mode.indexOf('+') != -1) {
          flags = 2;
        } else {
          flags = 0;
        }
      } else if (mode[0] == 'w') {
        if (mode.indexOf('+') != -1) {
          flags = 2;
        } else {
          flags = 1;
        }
        flags |= 64;
        flags |= 512;
      } else if (mode[0] == 'a') {
        if (mode.indexOf('+') != -1) {
          flags = 2;
        } else {
          flags = 1;
        }
        flags |= 64;
        flags |= 1024;
      } else {
        ___setErrNo(ERRNO_CODES.EINVAL);
        return 0;
      }
      var ret = _open(filename, flags, allocate([0x1FF, 0, 0, 0], 'i32', ALLOC_STACK));  // All creation permissions.
      return (ret == -1) ? 0 : ret;
    }
  function _clock() {
      if (_clock.start === undefined) _clock.start = Date.now();
      return Math.floor((Date.now() - _clock.start) * (1000000/1000));
    }
  function _ldexp(x, exp_) {
      return x * Math.pow(2, exp_);
    }
  function _frexp(x, exp_addr) {
      var sig = 0, exp_ = 0;
      if (x !== 0) {
        var sign = 1;
        if (x < 0) {
          x = -x;
          sign = -1;
        }
        var raw_exp = Math.log(x)/Math.log(2);
        exp_ = Math.ceil(raw_exp);
        if (exp_ === raw_exp) exp_ += 1;
        sig = sign*x/Math.pow(2, exp_);
      }
      HEAP32[((exp_addr)>>2)]=exp_
      return sig;
    }
  var _sqrt=Math_sqrt;
  var _log=Math_log;
  var _exp=Math_exp;
  var _atan=Math_atan;
  var _acos=Math_acos;
  var _asin=Math_asin;
  var _tan=Math_tan;
  var _cos=Math_cos;
  var _sin=Math_sin;
  function __exit(status) {
      // void _exit(int status);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/exit.html
      Module['exit'](status);
    }function _exit(status) {
      __exit(status);
    }
  function _sysconf(name) {
      // long sysconf(int name);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/sysconf.html
      switch(name) {
        case 30: return PAGE_SIZE;
        case 132:
        case 133:
        case 12:
        case 137:
        case 138:
        case 15:
        case 235:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 149:
        case 13:
        case 10:
        case 236:
        case 153:
        case 9:
        case 21:
        case 22:
        case 159:
        case 154:
        case 14:
        case 77:
        case 78:
        case 139:
        case 80:
        case 81:
        case 79:
        case 82:
        case 68:
        case 67:
        case 164:
        case 11:
        case 29:
        case 47:
        case 48:
        case 95:
        case 52:
        case 51:
        case 46:
          return 200809;
        case 27:
        case 246:
        case 127:
        case 128:
        case 23:
        case 24:
        case 160:
        case 161:
        case 181:
        case 182:
        case 242:
        case 183:
        case 184:
        case 243:
        case 244:
        case 245:
        case 165:
        case 178:
        case 179:
        case 49:
        case 50:
        case 168:
        case 169:
        case 175:
        case 170:
        case 171:
        case 172:
        case 97:
        case 76:
        case 32:
        case 173:
        case 35:
          return -1;
        case 176:
        case 177:
        case 7:
        case 155:
        case 8:
        case 157:
        case 125:
        case 126:
        case 92:
        case 93:
        case 129:
        case 130:
        case 131:
        case 94:
        case 91:
          return 1;
        case 74:
        case 60:
        case 69:
        case 70:
        case 4:
          return 1024;
        case 31:
        case 42:
        case 72:
          return 32;
        case 87:
        case 26:
        case 33:
          return 2147483647;
        case 34:
        case 1:
          return 47839;
        case 38:
        case 36:
          return 99;
        case 43:
        case 37:
          return 2048;
        case 0: return 2097152;
        case 3: return 65536;
        case 28: return 32768;
        case 44: return 32767;
        case 75: return 16384;
        case 39: return 1000;
        case 89: return 700;
        case 71: return 256;
        case 40: return 255;
        case 2: return 100;
        case 180: return 64;
        case 25: return 20;
        case 5: return 16;
        case 6: return 6;
        case 73: return 4;
        case 84: return 1;
      }
      ___setErrNo(ERRNO_CODES.EINVAL);
      return -1;
    }
  function _mprotect(addr, len, prot) {
      // int mprotect(void *addr, size_t len, int prot);
      // http://pubs.opengroup.org/onlinepubs/7908799/xsh/mprotect.html
      // Pretend to succeed
      return 0;
    }
  var _sqrtf=Math_sqrt;
  function _fputs(s, stream) {
      // int fputs(const char *restrict s, FILE *restrict stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fputs.html
      return _write(stream, s, _strlen(s));
    }function _puts(s) {
      // int puts(const char *s);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/puts.html
      // NOTE: puts() always writes an extra newline.
      var stdout = HEAP32[((_stdout)>>2)];
      var ret = _fputs(s, stdout);
      if (ret < 0) {
        return ret;
      } else {
        var newlineRet = _fputc(10, stdout);
        return (newlineRet < 0) ? -1 : ret + 1;
      }
    }
  Module["_memset"] = _memset;var _llvm_memset_p0i8_i32=_memset;
  function _longjmp(env, value) {
      asm['setThrew'](env, value || 1);
      throw 'longjmp';
    }
  var _llvm_va_start=undefined;
  function _fprintf(stream, format, varargs) {
      // int fprintf(FILE *restrict stream, const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      var result = __formatString(format, varargs);
      var stack = Runtime.stackSave();
      var ret = _fwrite(allocate(result, 'i8', ALLOC_STACK), 1, result.length, stream);
      Runtime.stackRestore(stack);
      return ret;
    }function _printf(format, varargs) {
      // int printf(const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      var stdout = HEAP32[((_stdout)>>2)];
      return _fprintf(stdout, format, varargs);
    }function _vprintf(format, va_arg) {
      return _printf(format, HEAP32[((va_arg)>>2)]);
    }
  function _llvm_va_end() {}
  function _vfprintf(s, f, va_arg) {
      return _fprintf(s, f, HEAP32[((va_arg)>>2)]);
    }
  function _vsnprintf(s, n, format, va_arg) {
      return _snprintf(s, n, format, HEAP32[((va_arg)>>2)]);
    }
  function _strchr(ptr, chr) {
      ptr--;
      do {
        ptr++;
        var val = HEAP8[(ptr)];
        if (val == chr) return ptr;
      } while (val);
      return 0;
    }
  Module["_tolower"] = _tolower;
  function _popen(command, mode) {
      // FILE *popen(const char *command, const char *mode);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/popen.html
      // We allow only one process, so no pipes.
      ___setErrNo(ERRNO_CODES.EMFILE);
      return 0;
    }
  function _strrchr(ptr, chr) {
      var ptr2 = ptr + _strlen(ptr);
      do {
        if (HEAP8[(ptr2)] == chr) return ptr2;
        ptr2--;
      } while (ptr2 >= ptr);
      return 0;
    }
  function _pclose(stream) {
      // int pclose(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/pclose.html
      // We allow only one process, so no pipes.
      ___setErrNo(ERRNO_CODES.ECHILD);
      return -1;
    }
  function _memchr(ptr, chr, num) {
      chr = unSign(chr);
      for (var i = 0; i < num; i++) {
        if (HEAP8[(ptr)] == chr) return ptr;
        ptr++;
      }
      return 0;
    }
  function _realpath(file_name, resolved_name) {
      // char *realpath(const char *restrict file_name, char *restrict resolved_name);
      // http://pubs.opengroup.org/onlinepubs/009604499/functions/realpath.html
      var absolute = FS.analyzePath(Pointer_stringify(file_name));
      if (absolute.error) {
        ___setErrNo(absolute.error);
        return 0;
      } else {
        var size = Math.min(4095, absolute.path.length);  // PATH_MAX - 1.
        for (var i = 0; i < size; i++) {
          HEAP8[(((resolved_name)+(i))|0)]=absolute.path.charCodeAt(i)
        }
        HEAP8[(((resolved_name)+(size))|0)]=0
        return resolved_name;
      }
    }
  function _tcsetattr(fildes, optional_actions, termios_p) {
      // http://pubs.opengroup.org/onlinepubs/7908799/xsh/tcsetattr.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      if (!stream.tty) {
        ___setErrNo(ERRNO_CODES.ENOTTY);
        return -1;
      }
      return 0;
    }
  function _tcgetattr(fildes, termios_p) {
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/tcgetattr.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      if (!stream.tty) {
        ___setErrNo(ERRNO_CODES.ENOTTY);
        return -1;
      }
      return 0;
    }
  function _ioctl(fd, request, varargs) {
      var stream = FS.getStream(fd);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      var arg = HEAP32[((varargs)>>2)];
      try {
        return FS.ioctl(stream, request, arg);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }
  function _signal(sig, func) {
      // TODO
      return 0;
    }
  function _sigemptyset(set) {
      // int sigemptyset(sigset_t *set);
      HEAP32[((set)>>2)]=0;
      return 0;
    }
  function _sigaddset(set, signum) {
      HEAP32[((set)>>2)]=HEAP32[((set)>>2)]| (1 << (signum-1));
      return 0;
    }
  function _sigaction(set) {
      // TODO:
      return 0;
    }var _sigprocmask=_sigaction;
  function _system(command) {
      // int system(const char *command);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/system.html
      // Can't call external programs.
      ___setErrNo(ERRNO_CODES.EAGAIN);
      return -1;
    }
  var DLFCN={error:null,errorMsg:null,loadedLibs:{},loadedLibNames:{}};function _dlclose(handle) {
      // int dlclose(void *handle);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/dlclose.html
      if (!DLFCN.loadedLibs[handle]) {
        DLFCN.errorMsg = 'Tried to dlclose() unopened handle: ' + handle;
        return 1;
      } else {
        var lib_record = DLFCN.loadedLibs[handle];
        if (--lib_record.refcount == 0) {
          if (lib_record.module.cleanups) {
            lib_record.module.cleanups.forEach(function(cleanup) { cleanup() });
          }
          delete DLFCN.loadedLibNames[lib_record.name];
          delete DLFCN.loadedLibs[handle];
        }
        return 0;
      }
    }
  function _setlocale(category, locale) {
      if (!_setlocale.ret) _setlocale.ret = allocate([0], 'i8', ALLOC_NORMAL);
      return _setlocale.ret;
    }
  function _dlsym(handle, symbol) {
      // void *dlsym(void *restrict handle, const char *restrict name);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/dlsym.html
      symbol = '_' + Pointer_stringify(symbol);
      if (!DLFCN.loadedLibs[handle]) {
        DLFCN.errorMsg = 'Tried to dlsym() from an unopened handle: ' + handle;
        return 0;
      } else {
        var lib = DLFCN.loadedLibs[handle];
        // self-dlopen means that lib.module is not a superset of
        // cached_functions, so check the latter first
        if (lib.cached_functions.hasOwnProperty(symbol)) {
          return lib.cached_functions[symbol];
        } else {
          if (!lib.module.hasOwnProperty(symbol)) {
            DLFCN.errorMsg = ('Tried to lookup unknown symbol "' + symbol +
                                   '" in dynamic lib: ' + lib.name);
            return 0;
          } else {
            var result = lib.module[symbol];
            if (typeof result == 'function') {
              result = lib.module.SYMBOL_TABLE[symbol];
              assert(result);
              lib.cached_functions = result;
            }
            return result;
          }
        }
      }
    }
  function _dlerror() {
      // char *dlerror(void);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/dlerror.html
      if (DLFCN.errorMsg === null) {
        return 0;
      } else {
        if (DLFCN.error) _free(DLFCN.error);
        var msgArr = intArrayFromString(DLFCN.errorMsg);
        DLFCN.error = allocate(msgArr, 'i8', ALLOC_NORMAL);
        DLFCN.errorMsg = null;
        return DLFCN.error;
      }
    }
  function _dlopen(filename, flag) {
      // void *dlopen(const char *file, int mode);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/dlopen.html
      filename = filename === 0 ? '__self__' : (ENV['LD_LIBRARY_PATH'] || '/') + Pointer_stringify(filename);
      abort('need to build with DLOPEN_SUPPORT=1 to get dlopen support in asm.js');
      if (DLFCN.loadedLibNames[filename]) {
        // Already loaded; increment ref count and return.
        var handle = DLFCN.loadedLibNames[filename];
        DLFCN.loadedLibs[handle].refcount++;
        return handle;
      }
      if (filename === '__self__') {
        var handle = -1;
        var lib_module = Module;
        var cached_functions = SYMBOL_TABLE;
      } else {
        var target = FS.findObject(filename);
        if (!target || target.isFolder || target.isDevice) {
          DLFCN.errorMsg = 'Could not find dynamic lib: ' + filename;
          return 0;
        } else {
          FS.forceLoadFile(target);
          var lib_data = intArrayToString(target.contents);
        }
        try {
          var lib_module = eval(lib_data)(
            DLFCN.functionTable.length,
            Module
          );
        } catch (e) {
          DLFCN.errorMsg = 'Could not evaluate dynamic lib: ' + filename;
          return 0;
        }
        // Not all browsers support Object.keys().
        var handle = 1;
        for (var key in DLFCN.loadedLibs) {
          if (DLFCN.loadedLibs.hasOwnProperty(key)) handle++;
        }
        // We don't care about RTLD_NOW and RTLD_LAZY.
        if (flag & 256) { // RTLD_GLOBAL
          for (var ident in lib_module) {
            if (lib_module.hasOwnProperty(ident)) {
              Module[ident] = lib_module[ident];
            }
          }
        }
        var cached_functions = {};
      }
      DLFCN.loadedLibs[handle] = {
        refcount: 1,
        name: filename,
        module: lib_module,
        cached_functions: cached_functions
      };
      DLFCN.loadedLibNames[filename] = handle;
      return handle;
    }
  var _llvm_memset_p0i8_i64=_memset;
  Module["_strncpy"] = _strncpy;
  function _abort() {
      Module['abort']();
    }
  function _sbrk(bytes) {
      // Implement a Linux-like 'memory area' for our 'process'.
      // Changes the size of the memory area by |bytes|; returns the
      // address of the previous top ('break') of the memory area
      // We control the "dynamic" memory - DYNAMIC_BASE to DYNAMICTOP
      var self = _sbrk;
      if (!self.called) {
        DYNAMICTOP = alignMemoryPage(DYNAMICTOP); // make sure we start out aligned
        self.called = true;
        assert(Runtime.dynamicAlloc);
        self.alloc = Runtime.dynamicAlloc;
        Runtime.dynamicAlloc = function() { abort('cannot dynamically allocate, sbrk now has control') };
      }
      var ret = DYNAMICTOP;
      if (bytes != 0) self.alloc(bytes);
      return ret;  // Previous break location.
    }
  function _time(ptr) {
      var ret = Math.floor(Date.now()/1000);
      if (ptr) {
        HEAP32[((ptr)>>2)]=ret
      }
      return ret;
    }
  var Browser={mainLoop:{scheduler:null,shouldPause:false,paused:false,queue:[],pause:function () {
          Browser.mainLoop.shouldPause = true;
        },resume:function () {
          if (Browser.mainLoop.paused) {
            Browser.mainLoop.paused = false;
            Browser.mainLoop.scheduler();
          }
          Browser.mainLoop.shouldPause = false;
        },updateStatus:function () {
          if (Module['setStatus']) {
            var message = Module['statusMessage'] || 'Please wait...';
            var remaining = Browser.mainLoop.remainingBlockers;
            var expected = Browser.mainLoop.expectedBlockers;
            if (remaining) {
              if (remaining < expected) {
                Module['setStatus'](message + ' (' + (expected - remaining) + '/' + expected + ')');
              } else {
                Module['setStatus'](message);
              }
            } else {
              Module['setStatus']('');
            }
          }
        }},isFullScreen:false,pointerLock:false,moduleContextCreatedCallbacks:[],workers:[],init:function () {
        if (!Module["preloadPlugins"]) Module["preloadPlugins"] = []; // needs to exist even in workers
        if (Browser.initted || ENVIRONMENT_IS_WORKER) return;
        Browser.initted = true;
        try {
          new Blob();
          Browser.hasBlobConstructor = true;
        } catch(e) {
          Browser.hasBlobConstructor = false;
          console.log("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : (typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : (!Browser.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null));
        Browser.URLObject = typeof window != "undefined" ? (window.URL ? window.URL : window.webkitURL) : undefined;
        if (!Module.noImageDecoding && typeof Browser.URLObject === 'undefined') {
          console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
          Module.noImageDecoding = true;
        }
        // Support for plugins that can process preloaded files. You can add more of these to
        // your app by creating and appending to Module.preloadPlugins.
        //
        // Each plugin is asked if it can handle a file based on the file's name. If it can,
        // it is given the file's raw data. When it is done, it calls a callback with the file's
        // (possibly modified) data. For example, a plugin might decompress a file, or it
        // might create some side data structure for use later (like an Image element, etc.).
        var imagePlugin = {};
        imagePlugin['canHandle'] = function imagePlugin_canHandle(name) {
          return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
        };
        imagePlugin['handle'] = function imagePlugin_handle(byteArray, name, onload, onerror) {
          var b = null;
          if (Browser.hasBlobConstructor) {
            try {
              b = new Blob([byteArray], { type: Browser.getMimetype(name) });
              if (b.size !== byteArray.length) { // Safari bug #118630
                // Safari's Blob can only take an ArrayBuffer
                b = new Blob([(new Uint8Array(byteArray)).buffer], { type: Browser.getMimetype(name) });
              }
            } catch(e) {
              Runtime.warnOnce('Blob constructor present but fails: ' + e + '; falling back to blob builder');
            }
          }
          if (!b) {
            var bb = new Browser.BlobBuilder();
            bb.append((new Uint8Array(byteArray)).buffer); // we need to pass a buffer, and must copy the array to get the right data range
            b = bb.getBlob();
          }
          var url = Browser.URLObject.createObjectURL(b);
          var img = new Image();
          img.onload = function img_onload() {
            assert(img.complete, 'Image ' + name + ' could not be decoded');
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            Module["preloadedImages"][name] = canvas;
            Browser.URLObject.revokeObjectURL(url);
            if (onload) onload(byteArray);
          };
          img.onerror = function img_onerror(event) {
            console.log('Image ' + url + ' could not be decoded');
            if (onerror) onerror();
          };
          img.src = url;
        };
        Module['preloadPlugins'].push(imagePlugin);
        var audioPlugin = {};
        audioPlugin['canHandle'] = function audioPlugin_canHandle(name) {
          return !Module.noAudioDecoding && name.substr(-4) in { '.ogg': 1, '.wav': 1, '.mp3': 1 };
        };
        audioPlugin['handle'] = function audioPlugin_handle(byteArray, name, onload, onerror) {
          var done = false;
          function finish(audio) {
            if (done) return;
            done = true;
            Module["preloadedAudios"][name] = audio;
            if (onload) onload(byteArray);
          }
          function fail() {
            if (done) return;
            done = true;
            Module["preloadedAudios"][name] = new Audio(); // empty shim
            if (onerror) onerror();
          }
          if (Browser.hasBlobConstructor) {
            try {
              var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
            } catch(e) {
              return fail();
            }
            var url = Browser.URLObject.createObjectURL(b); // XXX we never revoke this!
            var audio = new Audio();
            audio.addEventListener('canplaythrough', function() { finish(audio) }, false); // use addEventListener due to chromium bug 124926
            audio.onerror = function audio_onerror(event) {
              if (done) return;
              console.log('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');
              function encode64(data) {
                var BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                var PAD = '=';
                var ret = '';
                var leftchar = 0;
                var leftbits = 0;
                for (var i = 0; i < data.length; i++) {
                  leftchar = (leftchar << 8) | data[i];
                  leftbits += 8;
                  while (leftbits >= 6) {
                    var curr = (leftchar >> (leftbits-6)) & 0x3f;
                    leftbits -= 6;
                    ret += BASE[curr];
                  }
                }
                if (leftbits == 2) {
                  ret += BASE[(leftchar&3) << 4];
                  ret += PAD + PAD;
                } else if (leftbits == 4) {
                  ret += BASE[(leftchar&0xf) << 2];
                  ret += PAD;
                }
                return ret;
              }
              audio.src = 'data:audio/x-' + name.substr(-3) + ';base64,' + encode64(byteArray);
              finish(audio); // we don't wait for confirmation this worked - but it's worth trying
            };
            audio.src = url;
            // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
            Browser.safeSetTimeout(function() {
              finish(audio); // try to use it even though it is not necessarily ready to play
            }, 10000);
          } else {
            return fail();
          }
        };
        Module['preloadPlugins'].push(audioPlugin);
        // Canvas event setup
        var canvas = Module['canvas'];
        canvas.requestPointerLock = canvas['requestPointerLock'] ||
                                    canvas['mozRequestPointerLock'] ||
                                    canvas['webkitRequestPointerLock'];
        canvas.exitPointerLock = document['exitPointerLock'] ||
                                 document['mozExitPointerLock'] ||
                                 document['webkitExitPointerLock'] ||
                                 function(){}; // no-op if function does not exist
        canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
        function pointerLockChange() {
          Browser.pointerLock = document['pointerLockElement'] === canvas ||
                                document['mozPointerLockElement'] === canvas ||
                                document['webkitPointerLockElement'] === canvas;
        }
        document.addEventListener('pointerlockchange', pointerLockChange, false);
        document.addEventListener('mozpointerlockchange', pointerLockChange, false);
        document.addEventListener('webkitpointerlockchange', pointerLockChange, false);
        if (Module['elementPointerLock']) {
          canvas.addEventListener("click", function(ev) {
            if (!Browser.pointerLock && canvas.requestPointerLock) {
              canvas.requestPointerLock();
              ev.preventDefault();
            }
          }, false);
        }
      },createContext:function (canvas, useWebGL, setInModule, webGLContextAttributes) {
        var ctx;
        try {
          if (useWebGL) {
            var contextAttributes = {
              antialias: false,
              alpha: false
            };
            if (webGLContextAttributes) {
              for (var attribute in webGLContextAttributes) {
                contextAttributes[attribute] = webGLContextAttributes[attribute];
              }
            }
            ['experimental-webgl', 'webgl'].some(function(webglId) {
              return ctx = canvas.getContext(webglId, contextAttributes);
            });
          } else {
            ctx = canvas.getContext('2d');
          }
          if (!ctx) throw ':(';
        } catch (e) {
          Module.print('Could not create canvas - ' + e);
          return null;
        }
        if (useWebGL) {
          // Set the background of the WebGL canvas to black
          canvas.style.backgroundColor = "black";
          // Warn on context loss
          canvas.addEventListener('webglcontextlost', function(event) {
            alert('WebGL context lost. You will need to reload the page.');
          }, false);
        }
        if (setInModule) {
          Module.ctx = ctx;
          Module.useWebGL = useWebGL;
          Browser.moduleContextCreatedCallbacks.forEach(function(callback) { callback() });
          Browser.init();
        }
        return ctx;
      },destroyContext:function (canvas, useWebGL, setInModule) {},fullScreenHandlersInstalled:false,lockPointer:undefined,resizeCanvas:undefined,requestFullScreen:function (lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer === 'undefined') Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas === 'undefined') Browser.resizeCanvas = false;
        var canvas = Module['canvas'];
        function fullScreenChange() {
          Browser.isFullScreen = false;
          if ((document['webkitFullScreenElement'] || document['webkitFullscreenElement'] ||
               document['mozFullScreenElement'] || document['mozFullscreenElement'] ||
               document['fullScreenElement'] || document['fullscreenElement']) === canvas) {
            canvas.cancelFullScreen = document['cancelFullScreen'] ||
                                      document['mozCancelFullScreen'] ||
                                      document['webkitCancelFullScreen'];
            canvas.cancelFullScreen = canvas.cancelFullScreen.bind(document);
            if (Browser.lockPointer) canvas.requestPointerLock();
            Browser.isFullScreen = true;
            if (Browser.resizeCanvas) Browser.setFullScreenCanvasSize();
          } else if (Browser.resizeCanvas){
            Browser.setWindowedCanvasSize();
          }
          if (Module['onFullScreen']) Module['onFullScreen'](Browser.isFullScreen);
        }
        if (!Browser.fullScreenHandlersInstalled) {
          Browser.fullScreenHandlersInstalled = true;
          document.addEventListener('fullscreenchange', fullScreenChange, false);
          document.addEventListener('mozfullscreenchange', fullScreenChange, false);
          document.addEventListener('webkitfullscreenchange', fullScreenChange, false);
        }
        canvas.requestFullScreen = canvas['requestFullScreen'] ||
                                   canvas['mozRequestFullScreen'] ||
                                   (canvas['webkitRequestFullScreen'] ? function() { canvas['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT']) } : null);
        canvas.requestFullScreen();
      },requestAnimationFrame:function requestAnimationFrame(func) {
        if (typeof window === 'undefined') { // Provide fallback to setTimeout if window is undefined (e.g. in Node.js)
          setTimeout(func, 1000/60);
        } else {
          if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = window['requestAnimationFrame'] ||
                                           window['mozRequestAnimationFrame'] ||
                                           window['webkitRequestAnimationFrame'] ||
                                           window['msRequestAnimationFrame'] ||
                                           window['oRequestAnimationFrame'] ||
                                           window['setTimeout'];
          }
          window.requestAnimationFrame(func);
        }
      },safeCallback:function (func) {
        return function() {
          if (!ABORT) return func.apply(null, arguments);
        };
      },safeRequestAnimationFrame:function (func) {
        return Browser.requestAnimationFrame(function() {
          if (!ABORT) func();
        });
      },safeSetTimeout:function (func, timeout) {
        return setTimeout(function() {
          if (!ABORT) func();
        }, timeout);
      },safeSetInterval:function (func, timeout) {
        return setInterval(function() {
          if (!ABORT) func();
        }, timeout);
      },getMimetype:function (name) {
        return {
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'png': 'image/png',
          'bmp': 'image/bmp',
          'ogg': 'audio/ogg',
          'wav': 'audio/wav',
          'mp3': 'audio/mpeg'
        }[name.substr(name.lastIndexOf('.')+1)];
      },getUserMedia:function (func) {
        if(!window.getUserMedia) {
          window.getUserMedia = navigator['getUserMedia'] ||
                                navigator['mozGetUserMedia'];
        }
        window.getUserMedia(func);
      },getMovementX:function (event) {
        return event['movementX'] ||
               event['mozMovementX'] ||
               event['webkitMovementX'] ||
               0;
      },getMovementY:function (event) {
        return event['movementY'] ||
               event['mozMovementY'] ||
               event['webkitMovementY'] ||
               0;
      },mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,calculateMouseEvent:function (event) { // event should be mousemove, mousedown or mouseup
        if (Browser.pointerLock) {
          // When the pointer is locked, calculate the coordinates
          // based on the movement of the mouse.
          // Workaround for Firefox bug 764498
          if (event.type != 'mousemove' &&
              ('mozMovementX' in event)) {
            Browser.mouseMovementX = Browser.mouseMovementY = 0;
          } else {
            Browser.mouseMovementX = Browser.getMovementX(event);
            Browser.mouseMovementY = Browser.getMovementY(event);
          }
          // check if SDL is available
          if (typeof SDL != "undefined") {
          	Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
          	Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
          } else {
          	// just add the mouse delta to the current absolut mouse position
          	// FIXME: ideally this should be clamped against the canvas size and zero
          	Browser.mouseX += Browser.mouseMovementX;
          	Browser.mouseY += Browser.mouseMovementY;
          }        
        } else {
          // Otherwise, calculate the movement based on the changes
          // in the coordinates.
          var rect = Module["canvas"].getBoundingClientRect();
          var x, y;
          if (event.type == 'touchstart' ||
              event.type == 'touchend' ||
              event.type == 'touchmove') {
            var t = event.touches.item(0);
            if (t) {
              x = t.pageX - (window.scrollX + rect.left);
              y = t.pageY - (window.scrollY + rect.top);
            } else {
              return;
            }
          } else {
            x = event.pageX - (window.scrollX + rect.left);
            y = event.pageY - (window.scrollY + rect.top);
          }
          // the canvas might be CSS-scaled compared to its backbuffer;
          // SDL-using content will want mouse coordinates in terms
          // of backbuffer units.
          var cw = Module["canvas"].width;
          var ch = Module["canvas"].height;
          x = x * (cw / rect.width);
          y = y * (ch / rect.height);
          Browser.mouseMovementX = x - Browser.mouseX;
          Browser.mouseMovementY = y - Browser.mouseY;
          Browser.mouseX = x;
          Browser.mouseY = y;
        }
      },xhrLoad:function (url, onload, onerror) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function xhr_onload() {
          if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            onload(xhr.response);
          } else {
            onerror();
          }
        };
        xhr.onerror = onerror;
        xhr.send(null);
      },asyncLoad:function (url, onload, onerror, noRunDep) {
        Browser.xhrLoad(url, function(arrayBuffer) {
          assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
          onload(new Uint8Array(arrayBuffer));
          if (!noRunDep) removeRunDependency('al ' + url);
        }, function(event) {
          if (onerror) {
            onerror();
          } else {
            throw 'Loading data file "' + url + '" failed.';
          }
        });
        if (!noRunDep) addRunDependency('al ' + url);
      },resizeListeners:[],updateResizeListeners:function () {
        var canvas = Module['canvas'];
        Browser.resizeListeners.forEach(function(listener) {
          listener(canvas.width, canvas.height);
        });
      },setCanvasSize:function (width, height, noUpdates) {
        var canvas = Module['canvas'];
        canvas.width = width;
        canvas.height = height;
        if (!noUpdates) Browser.updateResizeListeners();
      },windowedWidth:0,windowedHeight:0,setFullScreenCanvasSize:function () {
        var canvas = Module['canvas'];
        this.windowedWidth = canvas.width;
        this.windowedHeight = canvas.height;
        canvas.width = screen.width;
        canvas.height = screen.height;
        // check if SDL is available   
        if (typeof SDL != "undefined") {
        	var flags = HEAPU32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)];
        	flags = flags | 0x00800000; // set SDL_FULLSCREEN flag
        	HEAP32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)]=flags
        }
        Browser.updateResizeListeners();
      },setWindowedCanvasSize:function () {
        var canvas = Module['canvas'];
        canvas.width = this.windowedWidth;
        canvas.height = this.windowedHeight;
        // check if SDL is available       
        if (typeof SDL != "undefined") {
        	var flags = HEAPU32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)];
        	flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
        	HEAP32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)]=flags
        }
        Browser.updateResizeListeners();
      }};
FS.staticInit();__ATINIT__.unshift({ func: function() { if (!Module["noFSInit"] && !FS.init.initialized) FS.init() } });__ATMAIN__.push({ func: function() { FS.ignorePermissions = false } });__ATEXIT__.push({ func: function() { FS.quit() } });Module["FS_createFolder"] = FS.createFolder;Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPreloadedFile"] = FS.createPreloadedFile;Module["FS_createLazyFile"] = FS.createLazyFile;Module["FS_createLink"] = FS.createLink;Module["FS_createDevice"] = FS.createDevice;
___errno_state = Runtime.staticAlloc(4); HEAP32[((___errno_state)>>2)]=0;
__ATINIT__.unshift({ func: function() { TTY.init() } });__ATEXIT__.push({ func: function() { TTY.shutdown() } });TTY.utf8 = new Runtime.UTF8Processor();
if (ENVIRONMENT_IS_NODE) { var fs = require("fs"); NODEFS.staticInit(); }
___buildEnvironment(ENV);
_fputc.ret = allocate([0], "i8", ALLOC_STATIC);
__ATINIT__.push({ func: function() { SOCKFS.root = FS.mount(SOCKFS, {}, null); } });
_fgetc.ret = allocate([0], "i8", ALLOC_STATIC);
Module["requestFullScreen"] = function Module_requestFullScreen(lockPointer, resizeCanvas) { Browser.requestFullScreen(lockPointer, resizeCanvas) };
  Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) { Browser.requestAnimationFrame(func) };
  Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) { Browser.setCanvasSize(width, height, noUpdates) };
  Module["pauseMainLoop"] = function Module_pauseMainLoop() { Browser.mainLoop.pause() };
  Module["resumeMainLoop"] = function Module_resumeMainLoop() { Browser.mainLoop.resume() };
  Module["getUserMedia"] = function Module_getUserMedia() { Browser.getUserMedia() }
STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP);
staticSealed = true; // seal the static portion of memory
STACK_MAX = STACK_BASE + 5242880;
DYNAMIC_BASE = DYNAMICTOP = Runtime.alignMemory(STACK_MAX);
assert(DYNAMIC_BASE < TOTAL_MEMORY); // Stack must fit in TOTAL_MEMORY; allocations from here on may enlarge TOTAL_MEMORY
var Math_min = Math.min;
function invoke_vd(index,a1) {
  try {
    Module["dynCall_vd"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_d(index) {
  try {
    return Module["dynCall_d"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vf(index,a1) {
  try {
    Module["dynCall_vf"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_f(index) {
  try {
    return Module["dynCall_f"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_i(index) {
  try {
    return Module["dynCall_i"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm=(function(global,env,buffer){"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.STACKTOP|0;var j=env.STACK_MAX|0;var k=env.tempDoublePtr|0;var l=env.ABORT|0;var m=env._stdout|0;var n=env._stdin|0;var o=env._stderr|0;var p=+env.NaN;var q=+env.Infinity;var r=0;var s=0;var t=0;var u=0;var v=0,w=0,x=0,y=0,z=0.0,A=0,B=0,C=0,D=0.0;var E=0;var F=0;var G=0;var H=0;var I=0;var J=0;var K=0;var L=0;var M=0;var N=0;var O=global.Math.floor;var P=global.Math.abs;var Q=global.Math.sqrt;var R=global.Math.pow;var S=global.Math.cos;var T=global.Math.sin;var U=global.Math.tan;var V=global.Math.acos;var W=global.Math.asin;var X=global.Math.atan;var Y=global.Math.atan2;var Z=global.Math.exp;var _=global.Math.log;var $=global.Math.ceil;var aa=global.Math.imul;var ab=env.abort;var ac=env.assert;var ad=env.asmPrintInt;var ae=env.asmPrintFloat;var af=env.min;var ag=env.invoke_vd;var ah=env.invoke_d;var ai=env.invoke_vf;var aj=env.invoke_f;var ak=env.invoke_i;var al=env.invoke_vi;var am=env.invoke_vii;var an=env.invoke_ii;var ao=env.invoke_viii;var ap=env.invoke_v;var aq=env.invoke_iii;var ar=env._llvm_lifetime_end;var as=env._lseek;var at=env._fclose;var au=env._fflush;var av=env._strtol;var aw=env._fputc;var ax=env._fwrite;var ay=env._send;var az=env._mktime;var aA=env._dlerror;var aB=env._isspace;var aC=env._localtime;var aD=env._read;var aE=env._dlclose;var aF=env._fileno;var aG=env._fsync;var aH=env._signal;var aI=env._opendir;var aJ=env._fmod;var aK=env._strcmp;var aL=env._memchr;var aM=env._strncmp;var aN=env._snprintf;var aO=env._fgetc;var aP=env._pclose;var aQ=env._readdir;var aR=env._mknod;var aS=env._sigemptyset;var aT=env._close;var aU=env._tcsetattr;var aV=env._strchr;var aW=env._asin;var aX=env._clock;var aY=env.___setErrNo;var aZ=env._access;var a_=env._ftell;var a$=env._exit;var a0=env._sprintf;var a1=env._strrchr;var a2=env._fcntl;var a3=env._ferror;var a4=env._getcwd;var a5=env._gmtime;var a6=env._localtime_r;var a7=env._recv;var a8=env._dlopen;var a9=env._cos;var ba=env._putchar;var bb=env._popen;var bc=env._acos;var bd=env._rename;var be=env._tzset;var bf=env._setlocale;var bg=env._chmod;var bh=env._ldexp;var bi=env._printf;var bj=env._pread;var bk=env._fopen;var bl=env._open;var bm=env._sqrtf;var bn=env._select;var bo=env._frexp;var bp=env._log;var bq=env._puts;var br=env._fputs;var bs=env._fdopen;var bt=env._sigaction;var bu=env._mkdir;var bv=env._system;var bw=env._isalpha;var bx=env._rmdir;var by=env._dup;var bz=env._log10;var bA=env._isatty;var bB=env.__formatString;var bC=env._sigaddset;var bD=env._getenv;var bE=env._gettimeofday;var bF=env._atoi;var bG=env._vfprintf;var bH=env._chdir;var bI=env._sbrk;var bJ=env.___errno_location;var bK=env._getrusage;var bL=env._fstat;var bM=env._llvm_lifetime_start;var bN=env.__parseInt;var bO=env._ungetc;var bP=env._gmtime_r;var bQ=env._vsnprintf;var bR=env._sysconf;var bS=env._dlsym;var bT=env._mprotect;var bU=env._fread;var bV=env._abort;var bW=env._fprintf;var bX=env._vprintf;var bY=env._tan;var bZ=env.___buildEnvironment;var b_=env._feof;var b$=env._clearerr;var b0=env._floor;var b1=env.__reallyNegative;var b2=env._fseek;var b3=env._sqrt;var b4=env._write;var b5=env._sin;var b6=env._realpath;var b7=env._stat;var b8=env._longjmp;var b9=env._atan;var ca=env._tcgetattr;var cb=env._time;var cc=env._closedir;var cd=env._ioctl;var ce=env._llvm_va_end;var cf=env._unlink;var cg=env.__exit;var ch=env._pwrite;var ci=env._exp;var cj=env._readdir_r;var ck=env._setvbuf;var cl=0.0;
// EMSCRIPTEN_START_FUNCS
function cx(a){a=a|0;var b=0;b=i;i=i+a|0;i=i+7&-8;return b|0}function cy(){return i|0}function cz(a){a=a|0;i=a}function cA(a,b){a=a|0;b=b|0;if((r|0)==0){r=a;s=b}}function cB(b){b=b|0;a[k]=a[b];a[k+1|0]=a[b+1|0];a[k+2|0]=a[b+2|0];a[k+3|0]=a[b+3|0]}function cC(b){b=b|0;a[k]=a[b];a[k+1|0]=a[b+1|0];a[k+2|0]=a[b+2|0];a[k+3|0]=a[b+3|0];a[k+4|0]=a[b+4|0];a[k+5|0]=a[b+5|0];a[k+6|0]=a[b+6|0];a[k+7|0]=a[b+7|0]}function cD(a){a=a|0;E=a}function cE(a){a=a|0;F=a}function cF(a){a=a|0;G=a}function cG(a){a=a|0;H=a}function cH(a){a=a|0;I=a}function cI(a){a=a|0;J=a}function cJ(a){a=a|0;K=a}function cK(a){a=a|0;L=a}function cL(a){a=a|0;M=a}function cM(a){a=a|0;N=a}function cN(){}function cO(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;i=i+8|0;e=d|0;c[e>>2]=a;c[888154]=e;if((lB()|0)==0){if((b|0)==0){f=3548032}else{f=c[b>>2]|0}j2(90504,(g=i,i=i+8|0,c[g>>2]=f,g)|0);i=g;h=1;i=d;return h|0}else{j2(89856,(g=i,i=i+1|0,i=i+7&-8,c[g>>2]=0,g)|0);i=g;j2(89664,(g=i,i=i+1|0,i=i+7&-8,c[g>>2]=0,g)|0);i=g;j2(89408,(g=i,i=i+1|0,i=i+7&-8,c[g>>2]=0,g)|0);i=g;j2(89184,(g=i,i=i+1|0,i=i+7&-8,c[g>>2]=0,g)|0);i=g;j2(88888,(g=i,i=i+1|0,i=i+7&-8,c[g>>2]=0,g)|0);i=g;j2(88664,(g=i,i=i+8|0,c[g>>2]=c[5444],g)|0);i=g;j6();cP(c[e>>2]|0,b);j2(75712,(g=i,i=i+1|0,i=i+7&-8,c[g>>2]=0,g)|0);i=g;kh(4);g=c[723700]|0;if((g|0)!=0){vW(g);c[723700]=0}mB(0,0);ke();h=0;i=d;return h|0}return 0}function cP(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0;e=i;i=i+1e3|0;f=1;g=0;h=i;i=i+168|0;c[h>>2]=0;while(1)switch(f|0){case 1:j=e|0;k=v7(3546632,f,h)|0;f=23;break;case 23:an(10,1)|0;if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;l=ak(38)|0;if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;if((l|0)==0){f=2;break}else{f=8;break};case 2:if((k|0)==0){f=4;break}else{f=3;break};case 3:al(592,52336);if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;;case 4:ap(4);if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;am(2,0,0);if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;l=aq(4,52224,0)|0;if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;m=an(2,l|0)|0;if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;c[723700]=m;am(16,52112,0);if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;ap(8);if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;am(4,b|0,d|0);if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;if((c[6464]|0)==0){f=6;break}else{f=5;break};case 5:am(14,90408,(n=i,i=i+1|0,i=i+7&-8,c[n>>2]=0,n)|0);if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;i=n;f=7;break;case 6:am(14,90224,(n=i,i=i+1|0,i=i+7&-8,c[n>>2]=0,n)|0);if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;i=n;f=7;break;case 7:ap(14);if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;am(6,58272,1);if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;ap(2);if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;am(10,b|0,d|0);if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;am(8,1,26440);if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;m=an(20,3548032)|0;if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;c[725934]=m;al(328,0);if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;am(14,62456,(n=i,i=i+1|0,i=i+7&-8,c[n>>2]=0,n)|0);if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;i=n;f=8;break;case 8:o=j|0;f=9;break;case 9:al(84,1);if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;m=ak(38)|0;if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;al(558,m-1|0);if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;m=an(18,c[725934]|0)|0;if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;if((m|0)==0){f=10;break}else{p=m;f=11;break};case 10:m=ak(22)|0;if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;p=m;f=11;break;case 11:q=an(14,c[2613080+(p-2625<<5)>>2]|0)|0;if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;t=an(8,q|0)|0;if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;m=c[676264]|0;l=a[m]|0;if(l<<24>>24==0){u=o;f=21;break}else{v=o;w=m;x=999;y=l;f=12;break};case 12:z=w+1|0;if(y<<24>>24==37){f=13;break}else{f=18;break};case 13:if((a[z]|0)==115){f=14;break}else{f=18;break};case 14:if((t|0)>(x|0)){f=15;break}else{f=17;break};case 15:if((x|0)>0){A=v;B=q;C=x;f=16;break}else{u=v;f=21;break};case 16:l=C-1|0;a[A]=a[B]|0;if((l|0)>0){A=A+1|0;B=B+1|0;C=l;f=16;break}else{f=20;break};case 17:aq(8,v|0,q|0)|0;if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;D=x-t|0;E=w+2|0;F=v+t|0;f=19;break;case 18:a[v]=y;D=x-1|0;E=z;F=v+1|0;f=19;break;case 19:l=a[E]|0;if(l<<24>>24!=0&(D|0)>0){v=F;w=E;x=D;y=l;f=12;break}else{u=F;f=21;break};case 20:u=v+x|0;f=21;break;case 21:a[u]=0;al(580,o|0);if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;l=ak(18)|0;if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;if((l|0)==0){f=9;break}else{f=22;break};case 22:an(10,0)|0;if((r|0)!=0&(s|0)!=0){g=v8(c[r>>2]|0,h)|0;if((g|0)>0){f=-1;break}else return}r=s=0;i=e;return;case-1:if((g|0)==1){k=s;f=23}r=s=0;break}}function cQ(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0;d=i;i=i+1e3|0;e=v4(b|0)|0;f=d|0;g=c[676264]|0;h=a[g]|0;L13:do{if(h<<24>>24==0){j=f}else{k=f;l=g;m=999;n=h;L14:while(1){o=l+1|0;do{if(n<<24>>24==37){if((a[o]|0)!=115){p=18;break}if((e|0)>(m|0)){break L14}v5(k|0,b|0)|0;q=m-e|0;r=l+2|0;s=k+e|0}else{p=18}}while(0);if((p|0)==18){p=0;a[k]=n;q=m-1|0;r=o;s=k+1|0}t=a[r]|0;if(t<<24>>24!=0&(q|0)>0){k=s;l=r;m=q;n=t}else{j=s;break L13}}if((m|0)>0){u=k;v=b;w=m}else{j=k;break}while(1){n=w-1|0;a[u]=a[v]|0;if((n|0)>0){u=u+1|0;v=v+1|0;w=n}else{break}}j=k+m|0}}while(0);a[j]=0;kB(f);i=d;return}function cR(){var b=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0;b=i;i=i+5152|0;e=b|0;f=b+1024|0;g=b+5128|0;h=b+5136|0;j=b+5144|0;L29:do{switch(kJ(26464,58,33)|0){case 0:{k=kL()|0;do{if((k|0)!=0){mB(k,0);if((kL()|0)==0){break}j3(0);j4(c[m>>2]|0,54824,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j5();return 0}}while(0);k=mC(g)|0;if((k|0)==0){n=r$(rY()|0)|0}else{n=k}if((cU(c[g>>2]|0,n)|0)==0){break L29}nk(1);break};case 1:{k=kL()|0;if((k|0)==0){j3(0);j4(c[m>>2]|0,55256,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j5();return 0}if((kL()|0)!=0){j3(0);j4(c[m>>2]|0,55096,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j5();return 0}o=rn(c[725934]|0)|0;if((o|0)==0){p=rY()|0}else{p=o}rU(p);rV(0)|0;o=q1(k)|0;q=q9(o)|0;if((q|0)!=0){r=c[485084+((q-3425|0)*36|0)>>2]|0;if((cU(r,nc(r_(q)|0)|0)|0)==0){break L29}nk(1);break L29}q=rg(o)|0;if((q|0)==0){j3(0);j4(c[m>>2]|0,54960,(l=i,i=i+8|0,c[l>>2]=k,l)|0);i=l;j5();return 0}if((cU(c[565084+(q-5425<<6)>>2]|0,nc(rZ(q)|0)|0)|0)==0){break L29}nk(1);break};case 2:{ni();c[725934]=q1(3548032)|0;q=kL()|0;if((q|0)!=0){k=q;do{ne(k,1);k=kL()|0;}while((k|0)!=0)}nk(1);break};case 3:{nh(nd()|0);c[725934]=q1(3548032)|0;k=kL()|0;if((k|0)!=0){q=k;do{ne(q,1);q=kL()|0;}while((q|0)!=0)}nk(1);break};case 4:{nk(1);break};case 16:{q=kL()|0;if((q|0)==0){c[725934]=q1(3548032)|0;mB(r$(rY()|0)|0,0);break L29}k=q1(q)|0;o=rn(k)|0;if((o|0)==0){j3(0);j4(c[m>>2]|0,55432,(l=i,i=i+8|0,c[l>>2]=q,l)|0);i=l;j5();return 0}else{c[725934]=k;mB(r$(o)|0,0);break L29}break};case 5:{o=rn(c[725934]|0)|0;if((o|0)==0){s=rY()|0}else{s=o}kf(s);break};case 6:{o=rn(c[725934]|0)|0;if((o|0)==0){t=rY()|0}else{t=o}rU(t);rV(0)|0;kT();oa();c[725992]=c[725940];o=un(c[676270]|0)|0;k=c[m>>2]|0;mP(k,c[723682]|0);j2(80984,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;mR(k,o);j1(10);break};case 17:{o=rn(c[725934]|0)|0;if((o|0)==0){u=rY()|0}else{u=o}rU(u);rV(0)|0;o=kL()|0;if((o|0)==0){v=0}else{k=0;q=0;r=o;L88:while(1){o=q;w=r;while(1){if((aK(w|0,55736)|0)==0){break}x=rn(q1(w)|0)|0;if((x|0)==0){j2(55560,(l=i,i=i+8|0,c[l>>2]=w,l)|0);i=l}else{ml(x,k)}x=o+1|0;y=kL()|0;if((y|0)==0){z=x;A=k;break L88}else{o=x;w=y}}w=kL()|0;if((w|0)==0){z=o;A=1;break}else{k=1;q=o;r=w}}if((z|0)==0){v=A}else{break L29}}r=rn(c[725934]|0)|0;if((r|0)==0){B=rY()|0}else{B=r}ml(B,v);break};case 8:{r=kL()|0;q=(lf()|0)-1|0;k=rn(c[725934]|0)|0;if((k|0)==0){C=rY()|0}else{C=k}if((r|0)==0){D=rv(0,0)|0}else{k=r;r=0;while(1){w=rv(k,r)|0;y=kL()|0;if((y|0)==0){D=w;break}else{k=y;r=w}}}if((D|0)==0){j3(0);j4(c[m>>2]|0,56456,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j5();return 0}else{E=0;F=0;G=D}L114:while(1){r=c[723822]|0;k=c[r+(G<<2)>>2]|0;if((k|0)<0){w=c[r+(k<<2)>>2]|0;H=(w-1|0)>>>0<128>>>0?w:145}else{H=d[90632+k|0]|0}do{if((H|0)==138){w=k-5425|0;r=565080+(w<<6)|0;y=c[565088+(w<<6)>>2]|0;if((y|0)==(C|0)){w=qX(c[r>>2]|0)|0;x=(v4(w|0)|0)+1|0;v9(2719504,w|0,x)|0;break}else{x=qX(c[2613080+(y-2625<<5)>>2]|0)|0;y=qX(c[r>>2]|0)|0;a0(2719504,56208,(l=i,i=i+16|0,c[l>>2]=x,c[l+8>>2]=y,l)|0)|0;i=l;break}}else if((H|0)==139){y=k-3425|0;x=485080+(y*36|0)|0;r=c[485088+(y*36|0)>>2]|0;if((r|0)==(C|0)){y=qX(c[x>>2]|0)|0;w=(v4(y|0)|0)+1|0;v9(2719504,y|0,w)|0;break}else{w=qX(c[2613080+(r-2625<<5)>>2]|0)|0;r=qX(c[x>>2]|0)|0;a0(2719504,56208,(l=i,i=i+16|0,c[l>>2]=w,c[l+8>>2]=r,l)|0)|0;i=l;break}}else if((H|0)==140){r=k-41425|0;w=c[659772]|0;x=c[w+(r*76|0)+8>>2]|0;if((x|0)==(C|0)){y=qX(c[w+(r*76|0)>>2]|0)|0;w=(v4(y|0)|0)+1|0;v9(2719504,y|0,w)|0;break}else{w=qX(c[2613080+(x-2625<<5)>>2]|0)|0;x=qX(c[(c[659772]|0)+(r*76|0)>>2]|0)|0;a0(2719504,56208,(l=i,i=i+16|0,c[l>>2]=w,c[l+8>>2]=x,l)|0)|0;i=l;break}}else{I=95;break L114}}while(0);k=v4(2719504)|0;o=E+1|0;do{if((k+o|0)>(q|0)){j1(10);J=0}else{if((E|0)<=0){J=E;break}j1(32);J=o}}while(0);j2(63968,(l=i,i=i+8|0,c[l>>2]=2719504,l)|0);i=l;K=F+1|0;o=c[(c[723820]|0)+(G<<2)>>2]|0;if((o|0)==0){I=101;break}else{E=J+k|0;F=K;G=o}}if((I|0)==95){ka(56112);return 0}else if((I|0)==101){j2(56296,(l=i,i=i+8|0,c[l>>2]=K,l)|0);i=l;break L29}break};case 7:{j2(62088,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(61736,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(61264,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(61016,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(60840,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(60632,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(60472,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(60040,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(59648,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(59544,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(59320,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(59048,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(58896,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(58680,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(58480,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(58224,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(58064,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(57664,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(57480,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(57320,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(57080,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(56824,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(56648,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;break};case 9:{j2(62768,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;j2(62456,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;break};case 10:{mD();break};case 12:{if((li(kN()|0,1,1)|0)==0){break L29}j2(67832,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0);i=l;break};case 13:{q=f|0;o=kL()|0;if((o|0)==0){break L29}do{if((a[o]|0)==126){x=o+1|0;if((a[x]|0)!=47){I=112;break}w=bD(63088)|0;r=4095-(v4(o|0)|0)|0;if(r>>>0<(v4(w|0)|0)>>>0){I=112;break}v5(q|0,w|0)|0;v6(q|0,x|0)|0}else{I=112}}while(0);if((I|0)==112){v5(q|0,o|0)|0}if((bH(q|0)|0)==0){break L29}j3(0);j4(c[m>>2]|0,63672,(l=i,i=i+8|0,c[l>>2]=o,l)|0);i=l;j5();return 0};case 14:{x=rn(c[725934]|0)|0;if((x|0)==0){L=rY()|0}else{L=x}rU(L);rV(0)|0;x=kL()|0;if((x|0)==0){I=126}else{w=0;r=x;do{c[h>>2]=0;c[j>>2]=0;s$(r,h,j);x=c[h>>2]|0;if((x|0)==0){cS(q1(c[j>>2]|0)|0)}else{y=rn(q1(x)|0)|0;if((y|0)==0){j2(54608,(l=i,i=i+8|0,c[l>>2]=c[h>>2],l)|0);i=l}else{rU(y);cS(q1(c[j>>2]|0)|0)}vW(c[h>>2]|0);c[h>>2]=0}w=w+1|0;r=kL()|0;}while((r|0)!=0);if((w|0)==0){I=126}}if((I|0)==126){nl()}rU(L);break};case 19:{j2(63976,(l=i,i=i+8|0,c[l>>2]=c[5444],l)|0);i=l;break};case 15:{c[6614]=0;r4();c[6614]=1;j2(60680,(l=i,i=i+8|0,c[l>>2]=c[726656],l)|0);i=l;break};case 22:{r=e|0;c[r>>2]=58272;o=1;while(1){q=kL()|0;if((q|0)==0){I=134;break}M=o+1|0;c[e+(o<<2)>>2]=sZ(q)|0;if((M|0)<255){o=M}else{I=133;break}}if((I|0)==133){c9(M,r);N=M;I=135}else if((I|0)==134){c9(o,r);if((o|0)>1){N=o;I=135}}if((I|0)==135){w=1;do{vW(c[e+(w<<2)>>2]|0);w=w+1|0;}while((w|0)<(N|0))}kC(56216);kR(5);cR()|0;break};case 11:{O=1;i=b;return O|0};default:{}}}while(0);O=0;i=b;return O|0}function cS(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0;b=i;d=q9(a)|0;e=ry(a)|0;f=rg(a)|0;if((d|0)!=0){g=d-3425|0;h=485092+(g*36|0)|0;if((c[h>>2]|0)>0){j=0;k=d;while(1){l=q8(k,j+401|0)|0;n=j+1|0;if((n|0)<(c[h>>2]|0)){j=n;k=l}else{o=l;break}}}else{o=d}j2(53304,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;if((c[723672]|0)!=0){j2(90488,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;mW(c[m>>2]|0,c[485096+(g*36|0)>>2]|0)}j1(10);k=c[485100+(g*36|0)>>2]|0;L203:do{if((k|0)==160){j2(88200,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;j=c[m>>2]|0;mR(j,o);j2(86312,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;mR(j,c[485104+(g*36|0)>>2]|0)}else if((k|0)==159|(k|0)==158){j=c[485104+(g*36|0)>>2]|0;if((k|0)==158){j2(84384,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p}else{j2(82872,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p}h=c[m>>2]|0;mR(h,o);j1(10);l=(j|0)==0;if(l){break}else{q=j}do{cT(c[(c[723822]|0)+(q<<2)>>2]|0);q=c[(c[723820]|0)+(q<<2)>>2]|0;}while((q|0)!=0);if(l){break}if((c[565104+((c[(c[723822]|0)+(j<<2)>>2]|0)-5425<<6)>>2]|0)>2){j2(81856,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p}if((j|0)==0){break}else{r=j}while(1){if((c[565104+((c[(c[723822]|0)+(r<<2)>>2]|0)-5425<<6)>>2]|0)<=2){break}j1(10);mP(h,c[(c[723822]|0)+(r<<2)>>2]|0);j2(80984,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;mR(h,c[565108+((c[(c[723822]|0)+(r<<2)>>2]|0)-5425<<6)>>2]|0);n=c[(c[723820]|0)+(r<<2)>>2]|0;if((n|0)==0){break L203}else{r=n}}j2(79824,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;if((r|0)==0){break}else{s=r}do{j1(10);mP(h,c[(c[723822]|0)+(s<<2)>>2]|0);j2(80984,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;mR(h,c[565108+((c[(c[723822]|0)+(s<<2)>>2]|0)-5425<<6)>>2]|0);s=c[(c[723820]|0)+(s<<2)>>2]|0;}while((s|0)!=0)}else if((k|0)==161){j2(88200,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;mR(c[m>>2]|0,o);j2(78216,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p}}while(0);j1(10);o=rD(d)|0;if((o|0)!=0){j2(76880,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;k=c[m>>2]|0;s=o;do{j2(65176,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;o=s-37425|0;r=c[659670]|0;q=c[r+(o<<5)+16>>2]|0;if((q|0)==0){t=r}else{mS(k,q);j2(71328,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;t=c[659670]|0}mU(k,c[t+(o<<5)+12>>2]|0);j1(10);s=rE(d,s)|0;}while((s|0)!=0)}j1(10)}if((e|0)!=0){s=e-41425|0;t=c[659772]|0;k=c[t+(s*76|0)+68>>2]|0;o=c[t+(s*76|0)+24>>2]|0;do{if((o|0)==0){u=174}else{if((c[(c[723820]|0)+(o<<2)>>2]|0)!=0){u=174;break}if((c[(c[723822]|0)+(o<<2)>>2]|0)!=130){u=174;break}j2(75696,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p}}while(0);do{if((u|0)==174){j2(74344,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;if((c[723672]|0)==0){break}j2(72936,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;mY(c[m>>2]|0,o)}}while(0);j1(10);o=c[(c[659772]|0)+(s*76|0)+56>>2]|0;if((o|0)!=0){u=o;do{cT(c[(c[723822]|0)+(u<<2)>>2]|0);u=c[(c[723820]|0)+(u<<2)>>2]|0;}while((u|0)!=0)}j2(72088,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;u=c[659772]|0;o=c[u+(s*76|0)+44>>2]|0;t=c[m>>2]|0;if((o|0)==0){v=u}else{mS(t,o);j2(71328,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;v=c[659772]|0}mU(t,c[v+(s*76|0)+28>>2]|0);v=c[659772]|0;o=c[v+(s*76|0)+32>>2]|0;if((o|0)==0){w=v}else{v=o;o=70504;while(1){j2(o,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;mZ(t,c[(c[723822]|0)+(v<<2)>>2]|0);u=c[(c[723820]|0)+(v<<2)>>2]|0;if((u|0)==0){break}else{v=u;o=69824}}w=c[659772]|0}o=c[w+(s*76|0)+56>>2]|0;if((o|0)!=0){j2(68952,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;s=o;do{o=c[723822]|0;w=c[565108+((c[o+(s<<2)>>2]|0)-5425<<6)>>2]|0;do{if((w|0)<0){if((c[o+(w<<2)>>2]|0)!=60){x=w;break}v=c[723820]|0;x=c[v+(c[v+(w<<2)>>2]<<2)>>2]|0}else{x=w}}while(0);j2(68488,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;mP(t,c[(c[723822]|0)+(s<<2)>>2]|0);j2(80984,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;w=c[723820]|0;o=c[w+(x<<2)>>2]|0;v=c[w+(c[(c[723822]|0)+(o<<2)>>2]<<2)>>2]|0;u=c[w+(o<<2)>>2]|0;if((v|0)==0){y=u}else{y=q8(61,q8(v,u)|0)|0}mR(t,y);s=c[(c[723820]|0)+(s<<2)>>2]|0;}while((s|0)!=0)}j1(10);if((k|0)!=0){j2(76880,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;s=k;do{k=c[(c[723822]|0)+(s<<2)>>2]|0;j2(65176,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;y=k-37425|0;k=c[659670]|0;x=c[k+(y<<5)+16>>2]|0;if((x|0)==0){z=k}else{mS(t,x);j2(71328,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;z=c[659670]|0}mU(t,c[z+(y<<5)+12>>2]|0);j1(10);s=c[(c[723820]|0)+(s<<2)>>2]|0;}while((s|0)!=0)}j1(10)}if((f|0)!=0){cT(f);s=c[m>>2]|0;mP(s,f);j2(80984,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;z=f-5425|0;t=c[565108+(z<<6)>>2]|0;if((t|0)==0){j2(68120,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p}else{mR(s,t)}t=c[565104+(z<<6)>>2]|0;do{if((t|0)>2){j2(67808,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p}else{if((t|0)<0){j2(67496,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p;break}if((t|0)!=1){break}j2(66656,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p}}while(0);if((c[565132+(z<<6)>>2]|0)!=0){j2(66312,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p}j2(65888,(p=i,i=i+1|0,i=i+7&-8,c[p>>2]=0,p)|0);i=p}if((e|d|f|0)!=0){i=b;return}f=qX(a)|0;j2(65520,(p=i,i=i+8|0,c[p>>2]=f,p)|0);i=p;i=b;return}function cT(b){b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=kQ(b)|0;f=c[565080+(b-5425<<6)>>2]|0;b=qX(f)|0;if((e|0)==(kP(f)|0)){i=d;return}j2(64856,(f=i,i=i+1|0,i=i+7&-8,c[f>>2]=0,f)|0);i=f;g=e&3;if((g|0)==1){j1(108)}else if((g|0)==2){j1(114)}j2(64528,(f=i,i=i+8|0,c[f>>2]=e>>>2,f)|0);i=f;e=a[b]|0;do{if(e<<24>>24>-1){if((bw(e<<24>>24|0)|0)==0){h=222;break}j2(64272,(f=i,i=i+8|0,c[f>>2]=b,f)|0);i=f}else{h=222}}while(0);if((h|0)==222){j2(63968,(f=i,i=i+8|0,c[f>>2]=b,f)|0);i=f}j1(10);i=d;return}function cU(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0;e=i;f=c[723700]|0;if((f|0)==0){j3(0);g=c[m>>2]|0;j4(g,88464,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0);i=h;j5();return 0}if((a[f]|0)==0){j3(0);g=c[m>>2]|0;j4(g,88464,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0);i=h;j5();return 0}if((d|0)==0){j=0;i=e;return j|0}g=k_(d)|0;f=v4(g|0)|0;k=v4(d|0)|0;if((b|0)==0){l=1}else{l=~~+bz(+(+(b|0)))+1|0}n=c[723700]|0;o=k+2|0;p=f+2|0;q=0;r=0;s=n;L327:while(1){t=r;u=s;while(1){v=a[u]|0;if(v<<24>>24==0){break L327}w=u+1|0;if(v<<24>>24==37){break}else{t=t+1|0;u=w}}v=a[w]|0;if((v<<24>>24|0)==115){x=1;y=o}else if((v<<24>>24|0)==102){x=1;y=p}else if((v<<24>>24|0)==37){x=q;y=1}else if((v<<24>>24|0)==100){x=q;y=l}else{x=q;y=2}q=x;r=y+t|0;s=u+2|0}if((q|0)==0){z=k+3+t|0}else{z=t}t=vV(z+1|0)|0;if((t|0)==0){j2(87952,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0);i=h;j=0;i=e;return j|0}else{A=1;B=0;C=n}L346:while(1){D=A;E=C;while(1){F=a[E]|0;if((F<<24>>24|0)==33){break}else if((F<<24>>24|0)==0){G=t;H=271;break L346}else if((F<<24>>24|0)!=38){H=249;break L346}D=0;E=E+1|0}A=D;B=1;C=E+1|0}L352:do{if((H|0)==249){C=(b|0)!=0?b:1;A=E;u=t;n=0;z=F;L354:while(1){q=A;s=u;y=z;L356:while(1){I=q+1|0;do{if(y<<24>>24==37){r=a[I]|0;if((r<<24>>24|0)==100){a0(s|0,74176,(h=i,i=i+8|0,c[h>>2]=C,h)|0)|0;i=h;J=s+l|0;K=q+2|0;break}else if((r<<24>>24|0)==115|(r<<24>>24|0)==102){break L356}x=s+1|0;a[s]=37;p=q+2|0;if(r<<24>>24==37){J=x;K=p;break}a[x]=a[I]|0;J=s+2|0;K=p}else{a[s]=y;J=s+1|0;K=I}}while(0);p=a[K]|0;if(p<<24>>24==0){break L354}else{q=K;s=J;y=p}}do{if((aB(a[q-1|0]|0)|0)==0){L=s;M=0}else{y=a[q+2|0]|0;if(y<<24>>24!=0){if((aB(y<<24>>24|0)|0)==0){L=s;M=0;break}}a[s]=34;L=s+1|0;M=1}}while(0);if((a[I]|0)==115){v5(L|0,d|0)|0;N=k}else{v5(L|0,g|0)|0;N=f}s=L+N|0;if(M){a[s]=34;O=L+(N+1)|0}else{O=s}a[O]=0;s=q+2|0;y=a[s]|0;if(y<<24>>24==0){P=O;break L352}else{A=s;u=O;n=1;z=y}}if((n|0)==0){G=J;H=271}else{P=J}}}while(0);if((H|0)==271){a[G]=32;H=G+2|0;a[G+1|0]=34;v5(H|0,d|0)|0;a[G+o|0]=34;P=G+(k+3)|0}a[P]=0;if((li(t,D,B)|0)==0){vW(t);j=D;i=e;return j|0}else{j2(67416,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0);i=h;vW(t);j=0;i=e;return j|0}return 0}function cV(b){b=b|0;var d=0,e=0,f=0,g=0;au(c[m>>2]|0)|0;d=c[670386]|0;c[670386]=d-1;lQ(c[2906632+(d<<2)>>2]|0);if((c[22654]|0)==(c[680426]|0)){d=0;while(1){e=c[670386]|0;c[670386]=e-1;lQ(c[2906632+(e<<2)>>2]|0);if((d|0)<80){a[2719408+d|0]=(sl(c[22654]|0)|0)&255;f=d+1|0}else{f=d}e=c[670386]|0;c[670386]=e-1;lQ(c[2906632+(e<<2)>>2]|0);if((c[22654]|0)==(c[680426]|0)){d=f}else{g=f;break}}}else{g=0}a[2719408+g|0]=0;g=c[670386]|0;c[670386]=g-1;f=q8(84,q8(c[2906632+(g<<2)>>2]|0,0)|0)|0;g=2906632+(b<<2)|0;c[(c[723820]|0)+(c[g>>2]<<2)>>2]=f;c[(c[723822]|0)+(c[g>>2]<<2)>>2]=1;f=rK(2719408,c[g>>2]|0,-1)|0;b=c[723820]|0;c[b+(c[b+(c[b+(c[g>>2]<<2)>>2]<<2)>>2]<<2)>>2]=f;return}function cW(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0;d=i;i=i+80|0;e=d|0;au(c[m>>2]|0)|0;f=c[670386]|0;c[670386]=f-1;lQ(c[2906632+(f<<2)>>2]|0);if((c[22654]|0)==(c[680426]|0)){f=0;while(1){g=c[670386]|0;c[670386]=g-1;lQ(c[2906632+(g<<2)>>2]|0);if((f|0)<80){a[2719408+f|0]=(sl(c[22654]|0)|0)&255;h=f+1|0}else{h=f}g=c[670386]|0;c[670386]=g-1;lQ(c[2906632+(g<<2)>>2]|0);if((c[22654]|0)==(c[680426]|0)){f=h}else{j=h;break}}}else{j=0}a[2719408+j|0]=0;L405:do{if((rO(2719408)|0)!=0){j=e|0;la();L407:while(1){v9(j|0,87368,9)|0;cQ(v6(j|0,2719408)|0);h=kJ(51568,0,33)|0;do{if((h|0)==0){f=kL()|0;if((f|0)==0){mN(3548016);break}else{mN(f);continue L407}}else if((h|0)==1){break L407}else if((h|0)==2){f=kL()|0;if((f|0)==0){continue L407}rP(f,1);continue L407}else if((h|0)==3){f=kL()|0;if((f|0)==0){rP(2719408,0);continue L407}else{rP(f,0);break}}else{continue L407}}while(0);if((h|0)==1){break L405}}j=kL()|0;if((j|0)==0){break}f=bF(j|0)|0;rQ(2719408,(((f|0)>0)<<31>>31)+f|0)}}while(0);e=c[670386]|0;c[670386]=e-1;f=2906632+(b<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=c[2906632+(e<<2)>>2];c[(c[723822]|0)+(c[f>>2]<<2)>>2]=1;i=d;return}function cX(a){a=a|0;var b=0;b=c6(c[2906632+(a+3<<2)>>2]|0)|0;lQ(c[2906632+(a+2<<2)>>2]|0);rP(b,(c[22654]|0)==(c[679930]|0)|0);b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function cY(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;if((a|0)==0){b=136;return b|0}if((a|0)<0){d=-a|0;e=q8(48,0)|0}else{d=a;e=q8(47,0)|0}c[886964]=e;if((d|0)==0){b=e;return b|0}else{f=d;g=e}while(1){e=q8(((f>>>0)%1e4|0)+43705|0,0)|0;c[(c[723820]|0)+(g<<2)>>2]=e;if(f>>>0<1e4>>>0){break}else{f=(f>>>0)/1e4|0;g=c[(c[723820]|0)+(g<<2)>>2]|0}}b=c[886964]|0;return b|0}function cZ(a){a=+a;var b=0,d=0.0,e=0,f=0.0,g=0,h=0,i=0;if(a==0.0){b=136;return b|0}if(a<0.0){d=-0.0-a;e=q8(48,0)|0}else{d=a;e=q8(47,0)|0}c[886964]=e;a=+O(d);if(a>0.0){f=a;g=e}else{lY(q8(c[680442]|0,c[680012]|0)|0);return 0}while(1){a=+aJ(+f,+1.0e4);e=~~a;if((e|0)<0){h=325;break}i=q8(e+43705|0,0)|0;c[(c[723820]|0)+(g<<2)>>2]=i;d=(f-a)/1.0e4;if(d<=0.0){break}f=d;g=c[(c[723820]|0)+(g<<2)>>2]|0}if((h|0)==325){lY(q8(c[680442]|0,c[680012]|0)|0);return 0}b=c[886964]|0;return b|0}function c_(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;do{if((a|0)!=136){b=c[723820]|0;d=c[b+(a<<2)>>2]|0;if((d|0)==0){break}e=c[723822]|0;f=c[e+(d<<2)>>2]|0;L461:do{if((c[e+(a<<2)>>2]|0)==47){g=f-43705|0;h=c[b+(d<<2)>>2]|0;if((h|0)==0){i=g;break}else{j=g;k=1;l=h}while(1){h=(c[e+(l<<2)>>2]|0)-43705|0;if((k|0)>429496){m=0;n=346;break}g=k*1e4|0;if((h|0)>((~j>>>0)/(g>>>0)|0|0)){m=0;n=347;break}o=(aa(h,g)|0)+j|0;h=c[b+(l<<2)>>2]|0;if((h|0)==0){i=o;break L461}else{j=o;k=g;l=h}}if((n|0)==346){return m|0}else if((n|0)==347){return m|0}}else{h=43705-f|0;g=c[b+(d<<2)>>2]|0;if((g|0)==0){i=h;break}else{p=h;q=1;r=g}while(1){g=43705-(c[e+(r<<2)>>2]|0)|0;if((q|0)>214748){m=0;n=348;break}h=q*1e4|0;if((g|0)<((-2147483648-p|0)/(h|0)|0|0)){m=0;n=349;break}o=(aa(g,h)|0)+p|0;g=c[b+(r<<2)>>2]|0;if((g|0)==0){i=o;break L461}else{p=o;q=h;r=g}}if((n|0)==348){return m|0}else if((n|0)==349){return m|0}}}while(0);m=rL(i)|0;return m|0}}while(0);m=rL(0)|0;return m|0}function c$(b){b=b|0;var c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0;c=(a[b]|0)==45?b+1|0:b;d=v4(c|0)|0;e=d&3;do{if((e|0)==0){f=c;g=0}else{h=d&3;i=-h|0;j=((i|0)>-1?i:-1)+h+1|0;h=c;i=e;k=0;while(1){l=i-1|0;m=(k*10|0)-48+(a[h]|0)|0;if((l|0)>0){h=h+1|0;i=l;k=m}else{break}}k=c+j|0;if((m|0)==0){f=k;g=0;break}f=k;g=q8(m+43705|0,0)|0}}while(0);L489:while(1){m=f;do{c=a[m]|0;if(c<<24>>24==0){break L489}n=((((((c<<24>>24)*10|0)-528+(a[m+1|0]|0)|0)*10|0)-48+(a[m+2|0]|0)|0)*10|0)-48+(a[m+3|0]|0)|0;m=m+4|0;}while((n|g|0)==0);f=m;g=q8(n+43705|0,g)|0}if((g|0)==0){o=136;return o|0}o=q8((a[b]|0)==45?48:47,g)|0;return o|0}function c0(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;if((a|0)==136){e=q8(i0(48)|0,b)|0;return e|0}f=c[723822]|0;g=(c[f+(a<<2)>>2]|0)==48;h=c[723820]|0;i=c[h+(a<<2)>>2]|0;c[886964]=i;a=(d|0)==0|g^1;if(a){j=b;k=i;l=f;m=h}else{h=q8(i0(41)|0,b)|0;j=h;k=c[886964]|0;l=c[723822]|0;m=c[723820]|0}h=(c[l+(k<<2)>>2]|0)-43705|0;l=c[m+(k<<2)>>2]|0;c[886964]=l;if((l|0)==0){n=j;o=h}else{l=j;j=h;while(1){h=q8(i0(((j|0)%10|0)+48|0)|0,l)|0;k=q8(i0((((j|0)/10|0|0)%10|0)+48|0)|0,h)|0;h=q8(i0((((j|0)/100|0|0)%10|0)+48|0)|0,k)|0;k=q8(i0((((j|0)/1e3|0|0)%10|0)+48|0)|0,h)|0;h=c[886964]|0;m=(c[(c[723822]|0)+(h<<2)>>2]|0)-43705|0;b=c[(c[723820]|0)+(h<<2)>>2]|0;c[886964]=b;if((b|0)==0){n=k;o=m;break}else{l=k;j=m}}}if((o|0)==0){p=n}else{j=n;n=o;while(1){o=q8(i0(((n|0)%10|0)+48|0)|0,j)|0;if((n+9|0)>>>0<19>>>0){p=o;break}else{j=o;n=(n|0)/10|0}}}if(g){q=q8(i0(45)|0,p)|0}else{q=p}if(a){e=q;return e|0}e=q8(i0(40)|0,q)|0;return e|0}function c1(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0;if((a|0)==136){if((b|0)==0){e=136;return e|0}e=q8(47,q8(b+43705|0,0)|0)|0;return e|0}c[886964]=a;f=c[(c[723820]|0)+(a<<2)>>2]|0;if((f|0)==0){g=b;h=a}else{i=b;b=f;while(1){f=(c[723822]|0)+(b<<2)|0;j=(aa((c[f>>2]|0)-43705|0,d)|0)+i|0;c[f>>2]=((j|0)%1e4|0)+43705;f=(j|0)/1e4|0;j=c[(c[723820]|0)+(b<<2)>>2]|0;if((j|0)==0){g=f;h=b;break}else{i=f;b=j}}}if((g|0)<=0){e=a;return e|0}b=q8(g+43705|0,0)|0;c[(c[723820]|0)+(h<<2)>>2]=b;e=a;return e|0}function c2(a){a=a|0;var b=0;if((a|0)==136){b=136;return b|0}b=q8((c[(c[723822]|0)+(a<<2)>>2]|0)==47?48:47,c[(c[723820]|0)+(a<<2)>>2]|0)|0;return b|0}function c3(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0;if((a|0)==136){if((b|0)==136){d=0;return d|0}d=(c[(c[723822]|0)+(b<<2)>>2]|0)==47?-1:1;return d|0}e=c[723822]|0;f=(b|0)==136;if((c[e+(a<<2)>>2]|0)==48){if(f){d=-1;return d|0}if((c[e+(b<<2)>>2]|0)==47){d=-1;return d|0}g=c[723820]|0;h=c[g+(b<<2)>>2]|0;i=c[g+(a<<2)>>2]|0;j=(h|0)!=0;k=(i|0)!=0;if(j&k){l=0;m=i;i=h;while(1){h=c[e+(i<<2)>>2]|0;n=c[e+(m<<2)>>2]|0;if((h|0)<(n|0)){o=-1}else{o=(h|0)>(n|0)?1:l}n=c[g+(i<<2)>>2]|0;h=c[g+(m<<2)>>2]|0;p=(n|0)!=0;q=(h|0)!=0;if(p&q){l=o;m=h;i=n}else{r=o;s=p;t=q;break}}}else{r=0;s=j;t=k}if(s){d=1;return d|0}d=t?-1:r;return d|0}else{if(f){d=1;return d|0}if((c[e+(b<<2)>>2]|0)==48){d=1;return d|0}f=c[723820]|0;r=c[f+(a<<2)>>2]|0;a=c[f+(b<<2)>>2]|0;b=(r|0)!=0;t=(a|0)!=0;if(b&t){s=0;k=a;a=r;while(1){r=c[e+(a<<2)>>2]|0;j=c[e+(k<<2)>>2]|0;if((r|0)<(j|0)){u=-1}else{u=(r|0)>(j|0)?1:s}j=c[f+(a<<2)>>2]|0;r=c[f+(k<<2)>>2]|0;o=(j|0)!=0;i=(r|0)!=0;if(o&i){s=u;k=r;a=j}else{v=u;w=o;x=i;break}}}else{v=0;w=b;x=t}if(w){d=1;return d|0}d=x?-1:v;return d|0}return 0}function c4(b,d){b=b|0;d=d|0;var e=0,f=0,g=0;if((c[670386]|0)>159998){rG()}do{if((d|0)<0){e=c[(c[723822]|0)+(d<<2)>>2]|0;if(!((e-1|0)>>>0>127>>>0&(e|0)==(c[680386]|0))){f=435;break}g=c[(c[723820]|0)+(d<<2)>>2]|0}else{f=435}}while(0);if((f|0)==435){f=c[680026]|0;c[678804]=0;gi(d);g=r2(c[678804]|0,f)|0}f=(c[670386]|0)+1|0;c[670386]=f;c[2906632+(f<<2)>>2]=g;c[678804]=0;g=i0(10)|0;c[678804]=q8(g,c[678804]|0)|0;g=a[b]|0;if(g<<24>>24!=0){f=b;b=g;do{f=f+1|0;g=i0(b&255)|0;c[678804]=q8(g,c[678804]|0)|0;b=a[f]|0;}while(b<<24>>24!=0)}b=i0(32)|0;c[678804]=q8(b,c[678804]|0)|0;b=i0(101)|0;c[678804]=q8(b,c[678804]|0)|0;b=i0(114)|0;c[678804]=q8(b,c[678804]|0)|0;b=i0(114)|0;c[678804]=q8(b,c[678804]|0)|0;b=i0(111)|0;c[678804]=q8(b,c[678804]|0)|0;b=i0(114)|0;c[678804]=q8(b,c[678804]|0)|0;b=i0(58)|0;c[678804]=q8(b,c[678804]|0)|0;b=i0(32)|0;f=q8(b,c[678804]|0)|0;c[678804]=f;b=r2(f,c[2906632+(c[670386]<<2)>>2]|0)|0;c[2906632+(c[670386]<<2)>>2]=b;c[678804]=0;c5(c[m>>2]|0);j9();return}function c5(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;b=c[670386]|0;d=b+1|0;e=2906632+(d<<2)|0;f=2906632+(b<<2)|0;g=b;while(1){c[670386]=g-1;h=lX(c[2906632+(g<<2)>>2]|0)|0;if((h|0)!=0){c[670386]=b;c[f>>2]=h;i=c[680026]|0;c[678804]=0;gi(h);h=r2(c[678804]|0,i)|0;i=c[670386]|0;c[2906632+(i<<2)>>2]=h;g=i;continue}if((c[22654]|0)!=(c[680426]|0)){break}i=c[670386]|0;c[670386]=i-1;h=lX(c[2906632+(i<<2)>>2]|0)|0;if((h|0)==0){i=sl(c[22654]|0)|0;aw(i|0,a|0)|0;au(a|0)|0;g=c[670386]|0;continue}else{c[670386]=d;c[e>>2]=h;i=c[f>>2]|0;c[678804]=0;gi(h);h=r2(c[678804]|0,i)|0;i=(c[670386]|0)-1|0;c[2906632+(i<<2)>>2]=h;c[670386]=i;g=i;continue}}return}function c6(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0;d=c[670386]|0;lQ(b);b=c[22654]|0;if((b|0)==(c[680426]|0)){e=2899632;while(1){f=c[670386]|0;c[670386]=f-1;lQ(c[2906632+(f<<2)>>2]|0);f=e+1|0;a[e]=(sl(c[22654]|0)|0)&255;g=c[670386]|0;c[670386]=g-1;lQ(c[2906632+(g<<2)>>2]|0);g=c[22654]|0;if((g|0)!=(c[680426]|0)|f>>>0>2903727>>>0){h=f;i=g;break}else{e=f}}}else{h=2899632;i=b}if((i|0)==(c[680026]|0)){a[h]=0;j=2899632;return j|0}else{c[670386]=d;j=0;return j|0}return 0}function c7(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;d=a[b]|0;if(d<<24>>24==0){e=c[670386]|0;if((e|0)>159998){rG();f=c[670386]|0}else{f=e}e=c[680026]|0;g=f+1|0;c[670386]=g;c[2906632+(g<<2)>>2]=e;return}e=q8(i0(d&255)|0,0)|0;d=c[670386]|0;if((d|0)>159998){rG();h=c[670386]|0}else{h=d}d=h+1|0;c[670386]=d;c[2906632+(d<<2)>>2]=e;d=b+1|0;b=a[d]|0;if(b<<24>>24==0){i=e;j=c[723820]|0}else{h=e;e=d;d=b;while(1){b=q8(i0(d&255)|0,0)|0;c[(c[723820]|0)+(h<<2)>>2]=b;b=c[723820]|0;g=c[b+(h<<2)>>2]|0;f=e+1|0;k=a[f]|0;if(k<<24>>24==0){i=g;j=b;break}else{h=g;e=f;d=k}}}c[j+(i<<2)>>2]=c[680026];return}function c8(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0;g=c[670386]|0;if((g|0)>159998){rG();h=c[670386]|0}else{h=g}g=c[680090]|0;i=h+1|0;c[670386]=i;c[2906632+(i<<2)>>2]=g;if((a|0)==0){j=c[680018]|0}else{j=q8(c[680058]|0,c[a>>2]|0)|0}a=q8(g,j)|0;c[2906632+(c[670386]<<2)>>2]=a;j=q8(a,b)|0;c[2906632+(c[670386]<<2)>>2]=j;c7(d);d=c[670386]|0;j=d-1|0;c[670386]=j;b=q8(c[2906632+(j<<2)>>2]|0,c[2906632+(d<<2)>>2]|0)|0;c[2906632+(c[670386]<<2)>>2]=b;c7(e);e=c[670386]|0;b=e-1|0;c[670386]=b;d=q8(c[2906632+(b<<2)>>2]|0,c[2906632+(e<<2)>>2]|0)|0;c[2906632+(c[670386]<<2)>>2]=d;if((f|0)==0){k=c[680018]|0;l=q8(d,k)|0;m=c[670386]|0;n=2906632+(m<<2)|0;c[n>>2]=l;o=m-1|0;c[670386]=o;return l|0}else{k=q8(c[680058]|0,c[f>>2]|0)|0;l=q8(d,k)|0;m=c[670386]|0;n=2906632+(m<<2)|0;c[n>>2]=l;o=m-1|0;c[670386]=o;return l|0}return 0}function c9(a,b){a=a|0;b=b|0;var d=0,e=0;c[723702]=c[680026];c7(c[b>>2]|0);d=c[670386]|0;c[670386]=d-1;c[723696]=c[2906632+(d<<2)>>2];d=a-1|0;if((d|0)>0){e=d}else{return}do{c7(c[b+(e<<2)>>2]|0);d=c[670386]|0;c[670386]=d-1;a=q8(c[680426]|0,c[2906632+(d<<2)>>2]|0)|0;c[723702]=q8(a,c[723702]|0)|0;e=e-1|0;}while((e|0)>0);return}function da(){c[723758]=30;c[723759]=10;c[723760]=24;c[723761]=2;c[723762]=2;c[723763]=8;c[723764]=40;c[723765]=12;c[723766]=44;c[723767]=132;c[723768]=260;c[723769]=2;c[723770]=2;c[723771]=76;c[723772]=12;c[723773]=196;c[723774]=22;c[723775]=20;c[723776]=4;c[723777]=342;c[723778]=324;c[723779]=10;c[723780]=10;c[723781]=660;c[723782]=18;c[723783]=2;c[723784]=16;c[723785]=28;c[723786]=604;c[723787]=4;c[723788]=36;c[723789]=16;c[723790]=50;c[723791]=42;c[723792]=6;c[723793]=34;c[723794]=48;c[723795]=32;c[723796]=46;c[723797]=44;c[723798]=278;c[723799]=562;c[723800]=194;c[723801]=18;c[723802]=474;c[723803]=344;c[723804]=620;c[723805]=24;c[723806]=100;c[723807]=30;c[723808]=608;c[723809]=12;c[723810]=196;c[723811]=174;c[723812]=2;c[723813]=232;c[723814]=6;return 2895032}function db(){var a=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);return c[22652]|0}function dc(){var a=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);return c[22652]|0}function dd(){var a=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);return sp(c[22654]|0)|0}function de(){var a=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);return+(+g[5440])}function df(){var a=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);return+(+h[2721])}function dg(){var a=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);return(sl(c[22654]|0)|0)&255|0}function dh(){var a=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);return c[2730132+(c[(c[723820]|0)+(c[22654]<<2)>>2]<<4)>>2]|0}function di(){var a=0,b=0,d=0;a=i;b=c[670386]|0;c[670386]=b-1;d=sQ(c[2906632+(b<<2)>>2]|0)|0;if((d|0)==0){j3(0);j4(c[m>>2]|0,61320,(b=i,i=i+1|0,i=i+7&-8,c[b>>2]=0,b)|0);i=b;j5();return 0}else{i=a;return d|0}return 0}function dj(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}b=rL(a)|0;a=(c[670386]|0)+1|0;c[670386]=a;c[2906632+(a<<2)>>2]=b;return}function dk(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}b=rL(a)|0;a=(c[670386]|0)+1|0;c[670386]=a;c[2906632+(a<<2)>>2]=b;return}function dl(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}b=so(a)|0;a=(c[670386]|0)+1|0;c[670386]=a;c[2906632+(a<<2)>>2]=b;return}function dm(a){a=+a;var b=0,d=0;if((c[670386]|0)>159998){rG()}b=lj(a)|0;d=(c[670386]|0)+1|0;c[670386]=d;c[2906632+(d<<2)>>2]=b;return}function dn(a){a=+a;var b=0,d=0;if((c[670386]|0)>159998){rG()}b=lp(a)|0;d=(c[670386]|0)+1|0;c[670386]=d;c[2906632+(d<<2)>>2]=b;return}function dp(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}b=sm(a<<24>>24)|0;a=(c[670386]|0)+1|0;c[670386]=a;c[2906632+(a<<2)>>2]=b;return}function dq(a,b){a=a|0;b=b|0;var d=0;if((c[670386]|0)>159998){rG()}d=sP(a,b)|0;b=(c[670386]|0)+1|0;c[670386]=b;c[2906632+(b<<2)>>2]=d;return}function dr(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}b=sR(a)|0;a=(c[670386]|0)+1|0;c[670386]=a;c[2906632+(a<<2)>>2]=b;return}function ds(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;L705:do{if((b|0)==1){d=c[670386]|0}else if((b|0)==0){e=c[670386]|0;if((e|0)>159998){rG();f=c[670386]|0}else{f=e}e=c[679926]|0;g=f+1|0;c[670386]=g;c[2906632+(g<<2)>>2]=e;d=g}else{g=c[670386]|0;if((g|0)>159998){rG();h=c[670386]|0}else{h=g}g=b+201|0;e=h+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=g;if((b|0)>0){i=1;j=e;k=g}else{d=e;break}while(1){e=q8(k,c[2906632+(j-1<<2)>>2]|0)|0;g=(c[670386]|0)-1|0;c[2906632+(g<<2)>>2]=e;c[670386]=g;if((i|0)>=(b|0)){d=g;break L705}i=i+1|0;j=g;k=e}}}while(0);k=2906632+(a<<2)|0;c[(c[723820]|0)+(c[k>>2]<<2)>>2]=c[2906632+(d<<2)>>2];c[(c[723822]|0)+(c[k>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function dt(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0;L720:do{if((b|0)==0){d=c[670386]|0;if((d|0)>159998){rG();e=c[670386]|0}else{e=d}d=c[679926]|0;f=e+1|0;c[670386]=f;c[2906632+(f<<2)>>2]=d}else if((b|0)!=1){d=c[670386]|0;if((d|0)>159998){rG();g=c[670386]|0}else{g=d}d=b+201|0;f=g+1|0;c[670386]=f;c[2906632+(f<<2)>>2]=d;if((b|0)>0){h=1;i=f;j=d}else{break}while(1){d=q8(j,c[2906632+(i-1<<2)>>2]|0)|0;f=(c[670386]|0)-1|0;c[2906632+(f<<2)>>2]=d;c[670386]=f;if((h|0)>=(b|0)){break L720}h=h+1|0;i=f;j=d}}}while(0);j=2906632+(a<<2)|0;a=c[j>>2]|0;if((a|0)>=0){return}c[(c[723820]|0)+(a<<2)>>2]=c[2906632+(c[670386]<<2)>>2];c[(c[723822]|0)+(c[j>>2]<<2)>>2]=1;return}function du(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,n=0,o=0,p=0,q=0,r=0;b=i;d=c[670386]|0;e=d-a|0;f=c[2906632+(e<<2)>>2]|0;if((a|0)>0){g=a;h=d;d=f;while(1){j=g-1|0;k=q8(d,c[2906632+(h-j<<2)>>2]|0)|0;l=c[670386]|0;n=l-a|0;c[2906632+(n<<2)>>2]=k;if((j|0)>0){g=j;h=l;d=k}else{o=n;p=k;break}}}else{o=e;p=f}f=c[680086]|0;c[670386]=o-1;if((lX(q8(f,p)|0)|0)!=0){j3(0);j4(c[m>>2]|0,61240,(q=i,i=i+1|0,i=i+7&-8,c[q>>2]=0,q)|0);i=q;j5();return 0}if((c[670386]|0)!=(e|0)){j3(0);j4(c[m>>2]|0,61208,(q=i,i=i+8|0,c[q>>2]=1-e+(c[670386]|0),q)|0);i=q;j5();return 0}e=c[22654]|0;if((e|0)==(c[679950]|0)){r=0;i=b;return r|0}if((e|0)==(c[680050]|0)){r=1;i=b;return r|0}else{j3(0);j4(c[m>>2]|0,61104,(q=i,i=i+1|0,i=i+7&-8,c[q>>2]=0,q)|0);i=q;j5();return 0}return 0}function dv(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;e=q1(a)|0;f=rm(e,q1(b)|0)|0;if((f|0)==0){j3(0);j4(c[m>>2]|0,61352,(g=i,i=i+16|0,c[g>>2]=a,c[g+8>>2]=b,g)|0);i=g;j5();return 0}b=sQ(f)|0;if((b|0)==0){j3(0);j4(c[m>>2]|0,61320,(g=i,i=i+1|0,i=i+7&-8,c[g>>2]=0,g)|0);i=g;j5();return 0}else{i=d;return b|0}return 0}function dw(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;b=c[670386]|0;d=b-a|0;if((a|0)<=0){e=d;c[670386]=e;return}f=a;g=b;b=c[2906632+(d<<2)>>2]|0;while(1){d=f-1|0;h=q8(b,c[2906632+(g-d<<2)>>2]|0)|0;i=c[670386]|0;j=i-a|0;c[2906632+(j<<2)>>2]=h;if((d|0)>0){f=d;g=i;b=h}else{e=j;break}}c[670386]=e;return}function dx(){var a=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);return}function dy(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0;a=vV(16)|0;d=bR(30)|0;e=-d|0;f=a;g=f&e;if((bT(g|0,d-g+(f+15&e)|0,7)|0)!=0){j3(0);j4(c[m>>2]|0,61400,(h=i,i=i+8|0,c[h>>2]=a,h)|0);i=h;j5();return 0}e=a;if((a|0)==0){bq(22360)|0;a$(1);return 0}f=c[723868]|0;if((f|0)==0){j=0}else{c[f+4>>2]=e;j=c[723868]|0}c[a>>2]=j;c[a+4>>2]=0;c[723868]=e;c[a+8>>2]=b;j3(0);j4(c[m>>2]|0,61440,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0);i=h;j5();return 0}function dz(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=a-12|0;a=b;sS(c[a+8>>2]|0);d=a+4|0;e=c[d>>2]|0;f=a|0;a=c[f>>2]|0;if((e|0)==0){c[723868]=a}else{c[e>>2]=a}a=c[f>>2]|0;if((a|0)==0){g=b;vW(g);return}c[a+4>>2]=c[d>>2];g=b;vW(g);return}function dA(){var a=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);return(c[22654]|0)==(c[679930]|0)|0}function dB(a){a=a|0;var b=0,d=0;b=c[670386]|0;if((b|0)>159998){rG();d=c[670386]|0}else{d=b}b=(a|0)!=0?c[679930]|0:c[680382]|0;a=d+1|0;c[670386]=a;c[2906632+(a<<2)>>2]=b;return}function dC(){var a=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);return c[22652]&255|0}function dD(){var a=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);return c[22652]&65535|0}function dE(){var a=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);return c[22652]|0}function dF(){var a=0,b=0,d=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);a=ru(c[(c[723822]|0)+(c[(c[723820]|0)+(c[22654]<<2)>>2]<<2)>>2]|0)|0;b=c[723820]|0;d=lv(a,ru(c[b+(c[b+(c[22654]<<2)>>2]<<2)>>2]|0)|0)|0;return(E=E,d)|0}function dG(){var a=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);return c[22652]&255|0}function dH(){var a=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);return c[22652]&65535|0}function dI(){var a=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);return c[22652]|0}function dJ(){var a=0,b=0,d=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);a=ru(c[(c[723822]|0)+(c[(c[723820]|0)+(c[22654]<<2)>>2]<<2)>>2]|0)|0;b=c[723820]|0;d=lv(a,ru(c[b+(c[b+(c[22654]<<2)>>2]<<2)>>2]|0)|0)|0;return(E=E,d)|0}function dK(){var a=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);return sp(c[22654]|0)|0}function dL(){var a=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);return sp(c[22654]|0)|0}function dM(){var a=0;j3(0);j4(c[m>>2]|0,61528,(a=i,i=i+1|0,i=i+7&-8,c[a>>2]=0,a)|0);i=a;j5();return 0}function dN(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}b=rL(a<<24>>24)|0;a=(c[670386]|0)+1|0;c[670386]=a;c[2906632+(a<<2)>>2]=b;return}function dO(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}b=rL(a<<16>>16)|0;a=(c[670386]|0)+1|0;c[670386]=a;c[2906632+(a<<2)>>2]=b;return}function dP(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}b=rL(a)|0;a=(c[670386]|0)+1|0;c[670386]=a;c[2906632+(a<<2)>>2]=b;return}function dQ(a,b){a=a|0;b=b|0;var d=0,e=0;if((c[670386]|0)>159998){rG()}d=rL(lt(a,b)|0)|0;e=q8(98,q8(d,rL(lu(a,b)|0)|0)|0)|0;b=(c[670386]|0)+1|0;c[670386]=b;c[2906632+(b<<2)>>2]=e;return}function dR(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}b=rL(a&255)|0;a=(c[670386]|0)+1|0;c[670386]=a;c[2906632+(a<<2)>>2]=b;return}function dS(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}b=rL(a&65535)|0;a=(c[670386]|0)+1|0;c[670386]=a;c[2906632+(a<<2)>>2]=b;return}function dT(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}b=rL(a)|0;a=(c[670386]|0)+1|0;c[670386]=a;c[2906632+(a<<2)>>2]=b;return}function dU(a,b){a=a|0;b=b|0;var d=0,e=0;if((c[670386]|0)>159998){rG()}d=rL(lt(a,b)|0)|0;e=q8(98,q8(d,rL(lu(a,b)|0)|0)|0)|0;b=(c[670386]|0)+1|0;c[670386]=b;c[2906632+(b<<2)>>2]=e;return}function dV(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}b=so(a)|0;a=(c[670386]|0)+1|0;c[670386]=a;c[2906632+(a<<2)>>2]=b;return}function dW(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}b=so(a)|0;a=(c[670386]|0)+1|0;c[670386]=a;c[2906632+(a<<2)>>2]=b;return}function dX(a){a=a|0;j3(0);j4(c[m>>2]|0,61568,(a=i,i=i+1|0,i=i+7&-8,c[a>>2]=0,a)|0);i=a;j5()}function dY(a){a=a|0;var b=0,d=0;b=c[670386]|0;if((b|0)>159998){rG();d=c[670386]|0}else{d=b}b=d+1|0;c[670386]=b;c[2906632+(b<<2)>>2]=a;return}function dZ(){var a=0;a=c[670386]|0;c[670386]=a-1;return c[2906632+(a<<2)>>2]|0}function d_(a){a=a|0;if((a|0)==0){return}sS(a);return}function d$(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;b=c[670386]|0;d=b-a|0;e=c[2906632+(d<<2)>>2]|0;if((a|0)>0){f=a;g=b;b=e;while(1){h=f-1|0;i=q8(b,c[2906632+(g-h<<2)>>2]|0)|0;j=c[670386]|0;k=j-a|0;c[2906632+(k<<2)>>2]=i;if((h|0)>0){f=h;g=j;b=i}else{l=k;m=i;break}}}else{l=d;m=e}c[670386]=l;l=q8(c[679952]|0,m)|0;c[2906632+(c[670386]<<2)>>2]=l;return du(0)|0}function d0(){c[723704]=28;c[723705]=30;c[723706]=10;c[723707]=24;c[723708]=2;c[723709]=2;c[723710]=14;c[723711]=40;c[723713]=4;c[723714]=36;c[723715]=16;c[723716]=50;c[723717]=42;c[723718]=6;c[723719]=34;c[723720]=48;c[723721]=32;c[723722]=46;c[723723]=44;c[723712]=2;c[723724]=604;c[723725]=44;c[723726]=132;c[723727]=260;c[723728]=2;c[723729]=2;c[723730]=28;c[723731]=12;c[723732]=278;c[723733]=562;c[723734]=194;c[723735]=18;c[723736]=474;c[723737]=344;c[723738]=620;c[723739]=24;c[723740]=100;c[723741]=30;c[723742]=608;c[723743]=174;c[723744]=22;c[723745]=4;c[723746]=20;c[723747]=6;c[723748]=324;c[723749]=10;c[723750]=660;c[723751]=18;c[723752]=2;c[723753]=16;c[723754]=12;c[723755]=196;c[723756]=232;return 2894816}function d1(){var a=0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);return sl(c[22654]|0)|0}function d2(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}b=sm(a)|0;a=(c[670386]|0)+1|0;c[670386]=a;c[2906632+(a<<2)>>2]=b;return}function d3(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;if((a|0)==1){b=c[723868]|0;if((b|0)==0){return}else{d=b}do{sS(c[d+8>>2]|0);b=d+4|0;e=c[b>>2]|0;f=d|0;g=c[f>>2]|0;if((e|0)==0){c[723868]=g}else{c[e>>2]=g}g=c[f>>2]|0;if((g|0)!=0){c[g+4>>2]=c[b>>2]}vW(d);d=c[723868]|0;}while((d|0)!=0);return}else if((a|0)==3){rp(49592);rp(24552);rp(51792);rp(51608);rp(24880);rp(22272);rp(26256);rU(c[680462]|0);a=rf(q1(87560)|0,0)|0;c[680380]=a;rr(0,a,73888,c[680462]|0,0);a=rf(q1(67264)|0,0)|0;c[680384]=a;rr(0,a,63416,c[680462]|0,0);a=rf(q1(60328)|0,0)|0;c[680082]=a;rr(0,a,57872,c[680462]|0,0);a=rf(q1(55928)|0,0)|0;c[679946]=a;rr(0,a,54376,c[680462]|0,0);a=rf(q1(53e3)|0,0)|0;c[680428]=a;rr(0,a,90048,c[680462]|0,0);a=rf(q1(87752)|0,0)|0;c[680396]=a;rr(0,a,85936,c[680462]|0,0);a=rf(q1(84072)|0,0)|0;c[680398]=a;rr(0,a,82584,c[680462]|0,0);a=rf(q1(81688)|0,0)|0;c[680400]=a;rr(0,a,80672,c[680462]|0,0);a=rf(q1(79520)|0,0)|0;c[680394]=a;rr(0,a,77912,c[680462]|0,0);a=rf(q1(76640)|0,0)|0;c[680408]=a;rr(0,a,75320,c[680462]|0,0);a=rf(q1(74016)|0,0)|0;c[680402]=a;rr(0,a,72624,c[680462]|0,0);a=rf(q1(71856)|0,0)|0;c[680404]=a;rr(0,a,71168,c[680462]|0,0);a=rf(q1(70368)|0,0)|0;c[680406]=a;rr(0,a,69632,c[680462]|0,0);a=rf(q1(68784)|0,0)|0;c[679992]=a;rr(0,a,68344,c[680462]|0,0);a=rf(q1(68032)|0,0)|0;c[680436]=a;rr(0,a,67696,c[680462]|0,0);a=rf(q1(67368)|0,0)|0;c[680076]=a;rr(0,a,66552,c[680462]|0,0);c[565104+((c[680076]|0)-5425<<6)>>2]=2;a=rf(q1(66232)|0,0)|0;c[679964]=a;rr(0,a,65800,c[680462]|0,0);a=rf(q1(65456)|0,0)|0;c[679970]=a;rr(0,a,65088,c[680462]|0,0);a=rf(q1(64728)|0,0)|0;c[679962]=a;rr(0,a,64440,c[680462]|0,0);a=rf(q1(64208)|0,0)|0;c[679958]=a;rr(0,a,63880,c[680462]|0,0);a=rf(q1(63504)|0,0)|0;c[679966]=a;rr(0,a,62976,c[680462]|0,0);a=rf(q1(62672)|0,0)|0;c[680452]=a;rr(0,a,62344,c[680462]|0,0);c[565104+((c[680452]|0)-5425<<6)>>2]=2;a=rf(q1(62008)|0,0)|0;c[680028]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(61624)|0,0)|0;c[680378]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(61128)|0,0)|0;c[680372]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(60968)|0,0)|0;c[680364]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(60800)|0,0)|0;c[680360]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(60568)|0,0)|0;c[680362]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(60352)|0,0)|0;c[680358]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(59792)|0,0)|0;c[679934]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(59624)|0,0)|0;c[680446]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(59488)|0,0)|0;c[680016]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(59192)|0,0)|0;c[680084]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(58992)|0,0)|0;c[680014]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(58776)|0,0)|0;c[680434]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(58600)|0,0)|0;c[680444]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(58336)|0,0)|0;c[679944]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(58160)|0,0)|0;c[679942]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(57888)|0,0)|0;c[679976]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(57584)|0,0)|0;c[679974]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(57408)|0,0)|0;c[680048]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(57240)|0,0)|0;c[679982]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(56992)|0,0)|0;c[680432]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(56744)|0,0)|0;c[68e4]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(56528)|0,0)|0;c[679998]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(56376)|0,0)|0;c[680002]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(56280)|0,0)|0;c[679952]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(56184)|0,0)|0;c[679996]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(55952)|0,0)|0;c[679994]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(55640)|0,0)|0;c[679980]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(55504)|0,0)|0;c[679978]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(55376)|0,0)|0;c[680374]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(55200)|0,0)|0;c[680416]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(55048)|0,0)|0;c[680418]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(54912)|0,0)|0;c[680062]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(54800)|0,0)|0;c[680066]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(54704)|0,0)|0;c[680068]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(54568)|0,0)|0;c[680420]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(54432)|0,0)|0;c[680376]=a;c[565112+(a-5425<<6)>>2]=164;return}else{return}}function d4(a){a=a|0;return}function d5(a){a=a|0;var b=0,d=0,e=0;b=2906632+(a+2<<2)|0;d=c6(c[b>>2]|0)|0;if((d|0)==0){e=c[680088]|0;lY(q8(e,c8(0,c[680080]|0,86808,88424,b)|0)|0)}if((bu(d|0,511)|0)==0){d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}else{ei(86808,0,-1,b)}}function d6(a){a=a|0;var b=0,d=0,e=0;b=2906632+(a+2<<2)|0;d=c6(c[b>>2]|0)|0;if((d|0)==0){e=c[680088]|0;lY(q8(e,c8(0,c[680080]|0,86952,88424,b)|0)|0)}if((bx(d|0)|0)==0){d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}else{ei(86952,0,-1,b)}}function d7(a){a=a|0;var b=0,d=0,e=0;b=2906632+(a+2<<2)|0;d=c6(c[b>>2]|0)|0;if((d|0)==0){e=c[680088]|0;lY(q8(e,c8(0,c[680080]|0,87184,52400,b)|0)|0)}if((cf(d|0)|0)==0){d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}else{ei(87184,1,-1,b)}}function d8(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=i;d=2906632+(a+2<<2)|0;e=c6(c[d>>2]|0)|0;if((e|0)==0){f=c[680088]|0;lY(q8(f,c8(0,c[680080]|0,87320,88424,d)|0)|0)}f=(v4(e|0)|0)+1|0;g=i;i=i+f|0;i=i+7&-8;v5(g|0,e|0)|0;e=2906632+(a+3<<2)|0;f=c6(c[e>>2]|0)|0;if((f|0)==0){h=c[680088]|0;lY(q8(h,c8(0,c[680080]|0,87320,88424,e)|0)|0)}if((bd(f|0,g|0)|0)==0){g=2906632+(a<<2)|0;c[(c[723820]|0)+(c[g>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[g>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];i=b;return}else{ei(87320,0,-1,d)}}function d9(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0;b=i;i=i+160|0;d=b|0;e=b+80|0;f=a+1|0;g=2906632+(a+2<<2)|0;h=c6(c[g>>2]|0)|0;if((h|0)==0){j=c[680088]|0;lY(q8(j,c8(0,c[680080]|0,87568,52400,g)|0)|0)}j=(v4(h|0)|0)+1|0;k=i;i=i+j|0;i=i+7&-8;v5(k|0,h|0)|0;h=2906632+(a+3<<2)|0;j=c6(c[h>>2]|0)|0;if((j|0)==0){l=c[680088]|0;lY(q8(l,c8(0,c[680080]|0,87568,52400,h)|0)|0)}do{if((b7(j|0,e|0)|0)==0){if((c[e+12>>2]&61440|0)!=16384){break}l=c[680088]|0;lY(q8(l,c8(0,c[680006]|0,87568,87488,h)|0)|0)}}while(0);do{if((b7(k|0,d|0)|0)==0){if((c[d+12>>2]&61440|0)!=16384){break}h=c[680088]|0;lY(q8(h,c8(0,c[680006]|0,87568,87488,g)|0)|0)}}while(0);if((bd(j|0,k|0)|0)==0){k=2906632+(a<<2)|0;c[(c[723820]|0)+(c[k>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[k>>2]<<2)>>2]=c[2906632+(f<<2)>>2];i=b;return}else{ei(87568,1,-1,g)}}function ea(a){a=a|0;var b=0,d=0,e=0;b=i;i=i+4104|0;d=b|0;if((a4(d|0,4096)|0)==0){ei(87920,0,-1,0)}else{c7(d);d=c[670386]|0;c[670386]=d-1;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=c[2906632+(d<<2)>>2];c[(c[723822]|0)+(c[e>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];i=b;return}}function eb(a){a=a|0;var b=0,d=0,e=0;b=2906632+(a+2<<2)|0;d=c6(c[b>>2]|0)|0;if((d|0)==0){e=c[680088]|0;lY(q8(e,c8(0,c[680080]|0,88168,88424,b)|0)|0)}if((bH(d|0)|0)==0){d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}else{ei(88168,0,-1,b)}}function ec(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0;b=i;i=i+80|0;d=b|0;e=a+1|0;f=2906632+(a+2<<2)|0;g=c6(c[f>>2]|0)|0;if((g|0)==0){h=c[680088]|0;lY(q8(h,c8(0,c[680080]|0,88296,52400,f)|0)|0)}if((b7(g|0,d|0)|0)==0){if((c[d+12>>2]&61440|0)==16384){j=708}else{k=2719720}}else{j=708}if((j|0)==708){k=2721528}j=2906632+(a<<2)|0;c[(c[723820]|0)+(c[j>>2]<<2)>>2]=c[k>>2];c[(c[723822]|0)+(c[j>>2]<<2)>>2]=c[2906632+(e<<2)>>2];i=b;return}function ed(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=i;i=i+80|0;d=b|0;e=2906632+(a+2<<2)|0;f=c6(c[e>>2]|0)|0;if((f|0)==0){g=c[680088]|0;lY(q8(g,c8(0,c[680080]|0,88584,88424,e)|0)|0)}if((b7(f|0,d|0)|0)==0){h=(c[d+12>>2]&61440|0)==16384}else{h=0}d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=h?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];i=b;return}function ee(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;b=i;i=i+80|0;d=b|0;e=a+1|0;f=2906632+(a+2<<2)|0;g=c6(c[f>>2]|0)|0;if((g|0)==0){h=c[680088]|0;lY(q8(h,c8(0,c[680080]|0,88808,52400,f)|0)|0)}h=aZ(g|0,4)|0;j=aZ(g|0,2)|0;k=aZ(g|0,1)|0;if((b7(g|0,d|0)|0)!=0){ei(88808,0,-1,f)}f=q8(205,(h|0)==0?c[679930]|0:c[680382]|0)|0;h=q8(f,(j|0)==0?c[679930]|0:c[680382]|0)|0;do{if((k|0)==0){if((c[d+12>>2]&61440|0)==16384){l=2719720;m=q8(h,c[680382]|0)|0;break}else{l=2721528;m=q8(h,c[679930]|0)|0;break}}else{l=2721528;m=q8(h,c[680382]|0)|0}}while(0);h=q8(m,c[l>>2]|0)|0;l=2906632+(a<<2)|0;c[(c[723820]|0)+(c[l>>2]<<2)>>2]=h;c[(c[723822]|0)+(c[l>>2]<<2)>>2]=c[2906632+(e<<2)>>2];i=b;return}function ef(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0;b=i;i=i+80|0;d=b|0;e=a+1|0;lQ(c[2906632+(a+2<<2)>>2]|0);f=c[22654]|0;do{if((f|0)==(c[679930]|0)){g=1}else{if((f|0)==(c[680382]|0)){g=0;break}h=c[680088]|0;lY(q8(h,c8(0,c[680080]|0,89360,89144,0)|0)|0)}}while(0);lQ(c[2906632+(a+3<<2)>>2]|0);f=c[22654]|0;do{if((f|0)==(c[679930]|0)){j=1}else{if((f|0)==(c[680382]|0)){j=0;break}h=c[680088]|0;lY(q8(h,c8(0,c[680080]|0,89360,89144,0)|0)|0)}}while(0);lQ(c[2906632+(a+4<<2)>>2]|0);f=c[22654]|0;do{if((f|0)==(c[679930]|0)){k=1}else{if((f|0)==(c[680382]|0)){k=0;break}h=c[680088]|0;lY(q8(h,c8(0,c[680080]|0,89360,89144,0)|0)|0)}}while(0);lQ(c[2906632+(a+5<<2)>>2]|0);f=c[22654]|0;do{if((f|0)==(c[679930]|0)){l=1}else{if((f|0)==(c[680382]|0)){l=0;break}h=c[680088]|0;lY(q8(h,c8(0,c[680080]|0,89360,89144,0)|0)|0)}}while(0);f=2906632+(a+6<<2)|0;h=c6(c[f>>2]|0)|0;if((h|0)==0){m=c[680088]|0;lY(q8(m,c8(0,c[680080]|0,89360,52400,f)|0)|0)}if((b7(h|0,d|0)|0)!=0){ei(89360,1,-1,f)}if((j|0)==0){n=(g|0)!=0?64:0}else{n=64}if((bg(h|0,((l|0)!=0?256:0)|((k|0)!=0?128:0)|c[d+12>>2]&-449|n|0)|0)==0){n=2906632+(a<<2)|0;c[(c[723820]|0)+(c[n>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[n>>2]<<2)>>2]=c[2906632+(e<<2)>>2];i=b;return}else{ei(89360,1,-1,f)}}function eg(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;b=a+1|0;d=2906632+(a+2<<2)|0;e=c6(c[d>>2]|0)|0;if((e|0)==0){f=c[680088]|0;lY(q8(f,c8(0,c[680080]|0,89608,52400,d)|0)|0)}f=aI(e|0)|0;if((f|0)==0){ei(89608,0,-1,d)}e=c[680026]|0;g=bJ()|0;c[g>>2]=0;h=aQ(f|0)|0;if((h|0)==0){i=e}else{j=e;e=h;while(1){h=c[670386]|0;if((h|0)>159998){rG();k=c[670386]|0}else{k=h}h=k+1|0;c[670386]=h;c[2906632+(h<<2)>>2]=j;c7(e+11|0);h=c[680426]|0;l=c[670386]|0;c[670386]=l-1;m=q8(h,c[2906632+(l<<2)>>2]|0)|0;l=c[670386]|0;c[670386]=l-1;h=q8(m,c[2906632+(l<<2)>>2]|0)|0;l=aQ(f|0)|0;if((l|0)==0){i=h;break}else{j=h;e=l}}}e=c[g>>2]|0;cc(f|0)|0;if((e|0)==0){f=2906632+(a<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=i;c[(c[723822]|0)+(c[f>>2]<<2)>>2]=c[2906632+(b<<2)>>2];return}else{c[g>>2]=e;ei(89608,0,-1,d)}}function eh(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=i;i=i+80|0;d=b|0;e=2906632+(a+2<<2)|0;f=c6(c[e>>2]|0)|0;if((f|0)==0){g=c[680088]|0;lY(q8(g,c8(0,c[680080]|0,52576,52400,e)|0)|0)}if((b7(f|0,d|0)|0)<0){ei(52576,1,-1,e)}else{e=rL(c[d+56>>2]|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];i=b;return}}function ei(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;f=c[680088]|0;if((d|0)==-1){g=0}else{g=(c[723828]|0)+(d*24|0)|0}d=c[(bJ()|0)>>2]|0;switch(d|0){case 28:case 27:{h=2720240;i=769;break};case 2:case 20:{j=2721688;i=770;break};case 1:case 13:{h=2720024;i=769;break};case 17:{k=c[680450]|0;i=771;break};default:{h=2720320;i=769}}if((i|0)==769){j=h;i=770}L1038:do{if((i|0)==770){h=c[j>>2]|0;switch(d|0){case 17:{k=h;i=771;break L1038;break};case 27:case 28:{l=89816;m=h;break L1038;break};case 2:case 20:{l=(b|0)!=0?52064:90352;m=h;break L1038;break};default:{l=3548024;m=h;break L1038}}}}while(0);if((i|0)==771){l=(b|0)!=0?52272:52168;m=k}lY(q8(f,c8(g,m,a,l,e)|0)|0)}function ej(a){a=a|0;return}function ek(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}a=rL(1e6)|0;b=(c[670386]|0)+1|0;c[670386]=b;c[2906632+(b<<2)>>2]=a;return}function el(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=i;i=i+136|0;d=b|0;bK(0,d|0)|0;e=(c[d+4>>2]|0)*1e3|0;f=c[d+8>>2]|0;g=(c[d+12>>2]|0)*1e3|0;h=q8(205,rL(c[d>>2]|0)|0)|0;d=q8(h,rL(e)|0)|0;e=q8(d,rL(f)|0)|0;f=q8(e,rL(g)|0)|0;g=2906632+(a<<2)|0;c[(c[723820]|0)+(c[g>>2]<<2)>>2]=f;c[(c[723822]|0)+(c[g>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];i=b;return}function em(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;i=i+8|0;d=b|0;if((bE(d|0,0)|0)==-1){ei(85352,1,-1,0)}else{e=q8(203,rL(c[d>>2]|0)|0)|0;f=q8(e,rL(c[d+4>>2]|0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=f;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];i=b;return}}function en(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=i;i=i+8|0;d=b|0;lQ(c[2906632+(a+3<<2)>>2]|0);e=c[22652]|0;lQ(c[2906632+(a+2<<2)>>2]|0);c[d>>2]=c[22652];if((e|0)==0){f=aC(d|0)|0}else{f=a5(d|0)|0}d=c[f+36>>2]|0;c7(c[f+40>>2]|0);e=c[670386]|0;c[670386]=e-1;g=c[2906632+(e<<2)>>2]|0;e=q8(212,rL(c[f>>2]|0)|0)|0;h=q8(e,rL(c[f+4>>2]|0)|0)|0;e=q8(h,rL(c[f+8>>2]|0)|0)|0;h=q8(e,rL(c[f+12>>2]|0)|0)|0;e=q8(h,rL(c[f+16>>2]|0)|0)|0;h=q8(e,rL(c[f+20>>2]|0)|0)|0;e=q8(h,rL(c[f+24>>2]|0)|0)|0;h=q8(e,rL(c[f+28>>2]|0)|0)|0;e=q8(q8(h,rL(c[f+32>>2]|0)|0)|0,g)|0;g=q8(e,rL(d)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=g;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];i=b;return}function eo(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0;b=i;i=i+48|0;d=b|0;lQ(c[2906632+(a+8<<2)>>2]|0);e=c[22652]|0;lQ(c[2906632+(a+7<<2)>>2]|0);f=c[22652]|0;lQ(c[2906632+(a+6<<2)>>2]|0);g=c[22652]|0;lQ(c[2906632+(a+5<<2)>>2]|0);h=c[22652]|0;lQ(c[2906632+(a+4<<2)>>2]|0);j=c[22652]|0;lQ(c[2906632+(a+3<<2)>>2]|0);k=c[22652]|0;lQ(c[2906632+(a+2<<2)>>2]|0);l=c[22652]|0;c[d+20>>2]=e;c[d+16>>2]=f;c[d+12>>2]=g;c[d+8>>2]=h;c[d+4>>2]=j;c[d>>2]=k;c[d+32>>2]=-1;k=az(d|0)|0;if((k|0)==-1){ei(85584,1,-1,0)}else{j=rL(k-l+(c[d+36>>2]|0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=j;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];i=b;return}}function ep(a){a=a|0;if((a|0)==2){c[723696]=r5(c[723696]|0)|0;c[723702]=r5(c[723702]|0)|0;return}else if((a|0)==3){rU(c[680462]|0);a=rf(q1(70016)|0,0)|0;c[680010]=a;rr(0,a,84968,c[680462]|0,0);a=rf(q1(69968)|0,0)|0;c[680096]=a;rr(0,a,83080,c[680462]|0,0);a=rf(q1(69888)|0,0)|0;c[680086]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(85096)|0,0)|0;c[680092]=a;c[565112+(a-5425<<6)>>2]=164;a=rf(q1(69816)|0,0)|0;c[679986]=a;c[565112+(a-5425<<6)>>2]=164;return}else{return}}function eq(a){a=a|0;var b=0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+2<<2)>>2];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function er(a){a=a|0;var b=0,d=0;if((c[670386]|0)>159998){rG()}b=q8(c[680010]|0,c[2906632+(a+2<<2)>>2]|0)|0;d=(c[670386]|0)+1|0;c[670386]=d;c[2906632+(d<<2)>>2]=b;d=q8(b,c[2906632+(a+1<<2)>>2]|0)|0;c[2906632+(c[670386]<<2)>>2]=d;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+3<<2)>>2];return}function es(a){a=a|0;var b=0,d=0;if((c[670386]|0)>159998){rG()}b=q8(c[2906632+(a+3<<2)>>2]|0,c[2906632+(a+1<<2)>>2]|0)|0;d=(c[670386]|0)+1|0;c[670386]=d;c[2906632+(d<<2)>>2]=b;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+2<<2)>>2];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(c[670386]<<2)>>2];return}function et(a){a=a|0;var b=0;r4();b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function eu(a){a=a|0;var b=0,d=0,e=0;b=2906632+(a+2<<2)|0;d=c6(c[b>>2]|0)|0;if((d|0)==0){e=c[680088]|0;lY(q8(e,c8(0,c[680080]|0,70176,70112,b)|0)|0)}e=bD(d|0)|0;if((e|0)==0){d=c[680088]|0;lY(q8(d,c8(0,c[680422]|0,70176,70032,b)|0)|0)}else{c7(e);e=c[670386]|0;c[670386]=e-1;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[2906632+(e<<2)>>2];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}}function ev(a){a=a|0;var b=0,d=0,e=0;b=2906632+(a+2<<2)|0;d=c6(c[b>>2]|0)|0;if((d|0)==0){e=c[680088]|0;lY(q8(e,c8(0,c[680080]|0,70336,70232,b)|0)|0)}else{b=rL((li(d,1,1)|0)>>>8&255)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}}function ew(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;b=aX()|0;do{if((b|0)==0){d=136}else{if((b|0)<0){e=-b|0;f=q8(48,0)|0}else{e=b;f=q8(47,0)|0}c[886964]=f;if((e|0)==0){d=f;break}else{g=e;h=f}while(1){i=q8(((g>>>0)%1e4|0)+43705|0,0)|0;c[(c[723820]|0)+(h<<2)>>2]=i;if(g>>>0<1e4>>>0){break}else{g=(g>>>0)/1e4|0;h=c[(c[723820]|0)+(h<<2)>>2]|0}}d=c[886964]|0}}while(0);h=2906632+(a<<2)|0;c[(c[723820]|0)+(c[h>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[h>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function ex(a){a=a|0;var b=0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[723696];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function ey(a){a=a|0;var b=0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[723702];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function ez(a){a=a|0;var b=0;c[723696]=c[2906632+(a+2<<2)>>2];b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function eA(a){a=a|0;var b=0;c[723702]=c[2906632+(a+2<<2)>>2];b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function eB(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;fC(b,70456);d=c[723828]|0;e=c[d+(b*24|0)+8>>2]|0;if((e&18|0)==0){f=c[680088]|0;lY(q8(f,c8(d+(b*24|0)|0,c[680080]|0,70456,73896,0)|0)|0)}if((e&16|0)==0){g=d}else{if((c[d+(b*24|0)+20>>2]|0)==2){e=c[d+(b*24|0)+4>>2]|0;au(e|0)|0;e=c[(c[723828]|0)+(b*24|0)+4>>2]|0;b2(e|0,0,1)|0;h=c[723828]|0}else{h=d}c[h+(b*24|0)+20>>2]=1;g=c[723828]|0}h=aO(c[g+(b*24|0)+4>>2]|0)|0;if((h|0)!=-1){g=sm(h)|0;h=2906632+(a<<2)|0;c[(c[723820]|0)+(c[h>>2]<<2)>>2]=g;c[(c[723822]|0)+(c[h>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}if((b_(c[(c[723828]|0)+(b*24|0)+4>>2]|0)|0)==0){ei(70456,1,b,0)}a=c[723828]|0;if((c[a+(b*24|0)+8>>2]&16|0)==0){i=a;j=c[680088]|0;k=i+(b*24|0)|0;l=c[680414]|0;m=c8(k,l,70456,72816,0)|0;n=q8(j,m)|0;lY(n)}c[a+(b*24|0)+20>>2]=0;i=c[723828]|0;j=c[680088]|0;k=i+(b*24|0)|0;l=c[680414]|0;m=c8(k,l,70456,72816,0)|0;n=q8(j,m)|0;lY(n)}function eC(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;lQ(c[2906632+(a+3<<2)>>2]|0);b=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;d=a+1|0;lQ(c[2906632+(a+2<<2)>>2]|0);e=sl(c[22654]|0)|0;fC(b,70488);f=c[723828]|0;g=c[f+(b*24|0)+8>>2]|0;if((g&28|0)==0){h=c[680088]|0;lY(q8(h,c8(f+(b*24|0)|0,c[680080]|0,70488,73560,0)|0)|0)}if((g&16|0)==0){i=f}else{if((c[f+(b*24|0)+20>>2]|0)==1){g=c[f+(b*24|0)+4>>2]|0;b2(g|0,0,1)|0;j=c[723828]|0}else{j=f}c[j+(b*24|0)+20>>2]=2;i=c[723828]|0}if((aw(e|0,c[i+(b*24|0)+4>>2]|0)|0)==-1){ei(70488,1,b,0)}if((b|0)<3){i=c[(c[723828]|0)+(b*24|0)+4>>2]|0;au(i|0)|0}i=2906632+(a<<2)|0;c[(c[723820]|0)+(c[i>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[i>>2]<<2)>>2]=c[2906632+(d<<2)>>2];return}function eD(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;lQ(c[2906632+(a+3<<2)>>2]|0);b=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;d=c[670386]|0;if((d|0)>159998){rG();e=c[670386]|0}else{e=d}d=a+1|0;f=2906632+(a+2<<2)|0;g=c[f>>2]|0;h=e+1|0;c[670386]=h;c[2906632+(h<<2)>>2]=g;c[f>>2]=0;fC(b,70568);f=c[723828]|0;g=c[f+(b*24|0)+8>>2]|0;if((g&28|0)==0){h=c[680088]|0;lY(q8(h,c8(f+(b*24|0)|0,c[680080]|0,70568,73560,0)|0)|0)}if((g&16|0)!=0){if((c[f+(b*24|0)+20>>2]|0)==1){g=c[f+(b*24|0)+4>>2]|0;b2(g|0,0,1)|0;i=c[723828]|0}else{i=f}c[i+(b*24|0)+20>>2]=2}i=2906632+(a<<2)|0;c[(c[723820]|0)+(c[i>>2]<<2)>>2]=c[680436];c[(c[723822]|0)+(c[i>>2]<<2)>>2]=c[680436];a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);if((c[22654]|0)!=(c[680426]|0)){j=c[679926]|0;k=c[i>>2]|0;l=c[723820]|0;m=l+(k<<2)|0;c[m>>2]=j;n=2906632+(d<<2)|0;o=c[n>>2]|0;p=c[i>>2]|0;q=c[723822]|0;r=q+(p<<2)|0;c[r>>2]=o;return}if((b|0)<3){while(1){a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);a=sl(c[22654]|0)|0;if((aw(a|0,c[(c[723828]|0)+(b*24|0)+4>>2]|0)|0)==-1){s=867;break}au(c[(c[723828]|0)+(b*24|0)+4>>2]|0)|0;a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);if((c[22654]|0)!=(c[680426]|0)){s=870;break}}if((s|0)==870){j=c[679926]|0;k=c[i>>2]|0;l=c[723820]|0;m=l+(k<<2)|0;c[m>>2]=j;n=2906632+(d<<2)|0;o=c[n>>2]|0;p=c[i>>2]|0;q=c[723822]|0;r=q+(p<<2)|0;c[r>>2]=o;return}else if((s|0)==867){ei(70568,1,b,0)}}else{while(1){a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);a=sl(c[22654]|0)|0;if((aw(a|0,c[(c[723828]|0)+(b*24|0)+4>>2]|0)|0)==-1){s=868;break}a=c[670386]|0;c[670386]=a-1;lQ(c[2906632+(a<<2)>>2]|0);if((c[22654]|0)!=(c[680426]|0)){s=869;break}}if((s|0)==869){j=c[679926]|0;k=c[i>>2]|0;l=c[723820]|0;m=l+(k<<2)|0;c[m>>2]=j;n=2906632+(d<<2)|0;o=c[n>>2]|0;p=c[i>>2]|0;q=c[723822]|0;r=q+(p<<2)|0;c[r>>2]=o;return}else if((s|0)==868){ei(70568,1,b,0)}}}function eE(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=2906632+(a+1<<2)|0;lQ(c[b>>2]|0);d=c[723820]|0;e=c[d+(c[22654]<<2)>>2]|0;f=c[723828]|0;if((c[f+(e*24|0)+8>>2]&1|0)==0){g=d}else{d=aO(c[f+(e*24|0)+4>>2]|0)|0;do{if((d|0)==-1){if((b_(c[(c[723828]|0)+(e*24|0)+4>>2]|0)|0)!=0){break}ei(70608,1,e,0)}else{if(d>>>0>=1114112>>>0){break}f=q8(c[680096]|0,c[b>>2]|0)|0;h=2906632+(a<<2)|0;c[(c[723820]|0)+(c[h>>2]<<2)>>2]=f;f=i0(d)|0;c[(c[723822]|0)+(c[h>>2]<<2)>>2]=f;return}}while(0);b$(c[(c[723828]|0)+(e*24|0)+4>>2]|0);g=c[723820]|0}e=2906632+(a<<2)|0;c[g+(c[e>>2]<<2)>>2]=c[680026];c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}function eF(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;b=a+1|0;d=2906632+(a+2<<2)|0;lQ(c[d>>2]|0);e=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;fC(e,70712);f=c[723828]|0;g=c[f+(e*24|0)+8>>2]|0;if((g&18|0)==0){h=c[680088]|0;lY(q8(h,c8(f+(e*24|0)|0,c[680080]|0,70712,73896,0)|0)|0)}if((g&16|0)==0){i=f}else{if((c[f+(e*24|0)+20>>2]|0)==2){g=c[f+(e*24|0)+4>>2]|0;au(g|0)|0;g=c[(c[723828]|0)+(e*24|0)+4>>2]|0;b2(g|0,0,1)|0;j=c[723828]|0}else{j=f}c[j+(e*24|0)+20>>2]=1;i=c[723828]|0}c[i+(e*24|0)+8>>2]=1;e=q8(c[680096]|0,c[d>>2]|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(b<<2)>>2];return}function eG(a){a=a|0;fE(a,0,70800);return}function eH(a){a=a|0;fE(a,1,70976);return}function eI(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0;lQ(c[2906632+(a+5<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+4<<2)>>2]|0);lQ(c[2906632+(a+2<<2)>>2]|0);d=c[22654]|0;e=c[679930]|0;lQ(c[2906632+(a+3<<2)>>2]|0);f=(c[22654]|0)-5425|0;if(f>>>0>=32e3>>>0){g=c[680088]|0;h=c[680080]|0;i=c8(0,h,82520,71792,0)|0;j=q8(g,i)|0;lY(j)}k=c[565104+(f<<6)>>2]|0;if((k|0)<=2){g=c[680088]|0;h=c[680080]|0;i=c8(0,h,82520,71792,0)|0;j=q8(g,i)|0;lY(j)}if((k|0)==4){l=2}else if((k|0)==5){l=4}else if((k|0)==6){l=8}else if((k|0)==7){l=16}else{g=c[680088]|0;h=c[680080]|0;i=c8(0,h,82520,71792,0)|0;j=q8(g,i)|0;lY(j)}j=a+1|0;i=fD(0,82520)|0;g=(l&8|0)!=0;do{if((d|0)==(e|0)){if(g){m=71648;break}if((l&4|0)!=0){m=71584;break}if((l&16|0)!=0){m=71528;break}n=(l&2|0)!=0?71472:0;o=908}else{if(g){m=71416;break}if((l&4|0)!=0){m=71368;break}if((l&16|0)!=0){m=71320;break}n=(l&2|0)!=0?71280:0;o=908}}while(0);do{if((o|0)==908){if((n|0)!=0){m=n;break}g=c[680088]|0;lY(q8(g,c8(0,c[680080]|0,82520,71712,0)|0)|0)}}while(0);n=bs(b|0,m|0)|0;c[(c[723828]|0)+(i*24|0)+4>>2]=n;if((n|0)==0){ei(82520,1,-1,0)}c[(c[723828]|0)+(i*24|0)+8>>2]=l;c[(c[723828]|0)+(i*24|0)+12>>2]=1;c[(c[723828]|0)+(i*24|0)+16>>2]=0;l=c[723828]|0;if((c[l+(i*24|0)+8>>2]&16|0)==0){p=q8(12,i)|0;q=c[723828]|0;r=q+(i*24|0)|0;c[r>>2]=p;s=2906632+(a<<2)|0;t=c[s>>2]|0;u=c[723820]|0;v=u+(t<<2)|0;c[v>>2]=p;w=2906632+(j<<2)|0;x=c[w>>2]|0;y=c[s>>2]|0;z=c[723822]|0;A=z+(y<<2)|0;c[A>>2]=x;return}c[l+(i*24|0)+20>>2]=0;p=q8(12,i)|0;q=c[723828]|0;r=q+(i*24|0)|0;c[r>>2]=p;s=2906632+(a<<2)|0;t=c[s>>2]|0;u=c[723820]|0;v=u+(t<<2)|0;c[v>>2]=p;w=2906632+(j<<2)|0;x=c[w>>2]|0;y=c[s>>2]|0;z=c[723822]|0;A=z+(y<<2)|0;c[A>>2]=x;return}function eJ(a){a=a|0;var b=0,d=0,e=0,f=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;if((b|0)<3){d=c[680088]|0;lY(q8(d,c8(0,c[680080]|0,72056,72e3,0)|0)|0)}else{d=a+1|0;fC(b,72056);e=by(aF(c[(c[723828]|0)+(b*24|0)+4>>2]|0)|0)|0;f=c[(c[723828]|0)+(b*24|0)+4>>2]|0;at(f|0)|0;c[(c[723828]|0)+(b*24|0)+4>>2]=0;c[(c[723828]|0)+(b*24|0)+8>>2]=0;b=rL(e)|0;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=c[2906632+(d<<2)>>2];return}}function eK(a){a=a|0;var b=0,d=0;a=c[670386]|0;if((a|0)>159998){rG();b=c[670386]|0}else{b=a}a=c[c[723828]>>2]|0;d=b+1|0;c[670386]=d;c[2906632+(d<<2)>>2]=a;return}function eL(a){a=a|0;var b=0,d=0;a=c[670386]|0;if((a|0)>159998){rG();b=c[670386]|0}else{b=a}a=c[(c[723828]|0)+24>>2]|0;d=b+1|0;c[670386]=d;c[2906632+(d<<2)>>2]=a;return}function eM(a){a=a|0;var b=0,d=0;a=c[670386]|0;if((a|0)>159998){rG();b=c[670386]|0}else{b=a}a=c[(c[723828]|0)+48>>2]|0;d=b+1|0;c[670386]=d;c[2906632+(d<<2)>>2]=a;return}function eN(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=a+1|0;lQ(c[2906632+(a+2<<2)>>2]|0);d=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;fC(d,72152);e=c[723828]|0;if((c[e+(d*24|0)+8>>2]&18|0)==0){f=c[680088]|0;lY(q8(f,c8(e+(d*24|0)|0,c[680080]|0,72152,73896,0)|0)|0)}f=c[e+(d*24|0)+4>>2]|0;if((b_(f|0)|0)!=0){e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=c[679930];c[(c[723822]|0)+(c[e>>2]<<2)>>2]=c[2906632+(b<<2)>>2];return}e=c[723828]|0;if((c[e+(d*24|0)+8>>2]&16|0)!=0){if((c[e+(d*24|0)+20>>2]|0)==2){g=c[e+(d*24|0)+4>>2]|0;au(g|0)|0;g=c[(c[723828]|0)+(d*24|0)+4>>2]|0;b2(g|0,0,1)|0;h=c[723828]|0}else{h=e}c[h+(d*24|0)+20>>2]=1}h=aO(f|0)|0;e=(b_(f|0)|0)!=0;do{if(e){g=c[723828]|0;if((c[g+(d*24|0)+8>>2]&16|0)==0){break}c[g+(d*24|0)+20>>2]=0}}while(0);bO(h|0,f|0)|0;b$(f|0);f=2906632+(a<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=e?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[f>>2]<<2)>>2]=c[2906632+(b<<2)>>2];return}function eO(a){a=a|0;var b=0,d=0,e=0,f=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;fC(b,72208);d=c[723828]|0;if((c[d+(b*24|0)+8>>2]&28|0)==0){e=c[680088]|0;lY(q8(e,c8(d+(b*24|0)|0,c[680080]|0,72208,73560,0)|0)|0)}else{e=a+1|0;f=c[d+(b*24|0)+4>>2]|0;au(f|0)|0;f=2906632+(a<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[f>>2]<<2)>>2]=c[2906632+(e<<2)>>2];return}}function eP(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;b=a+1|0;lQ(c[2906632+(a+2<<2)>>2]|0);d=c[723820]|0;e=c[d+(c[22654]<<2)>>2]|0;do{if((e|0)<3){f=d}else{g=c[723828]|0;if((c[g+(e*24|0)+8>>2]|0)==0){f=d;break}h=c[g+(e*24|0)+4>>2]|0;if((h|0)==0){i=g}else{at(h|0)|0;i=c[723828]|0}c[i+(e*24|0)+4>>2]=0;c[(c[723828]|0)+(e*24|0)+8>>2]=0;f=c[723820]|0}}while(0);e=2906632+(a<<2)|0;c[f+(c[e>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[e>>2]<<2)>>2]=c[2906632+(b<<2)>>2];return}function eQ(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;fC(b,72296);d=rL(a_(c[(c[723828]|0)+(b*24|0)+4>>2]|0)|0)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function eR(a){a=a|0;var b=0,d=0,e=0,f=0;lQ(c[2906632+(a+3<<2)>>2]|0);b=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;lQ(c[2906632+(a+2<<2)>>2]|0);d=c[22652]|0;fC(b,72320);e=c[723828]|0;if((c[e+(b*24|0)+8>>2]&16|0)==0){f=e}else{c[e+(b*24|0)+20>>2]=0;f=c[723828]|0}au(c[f+(b*24|0)+4>>2]|0)|0;if((b2(c[(c[723828]|0)+(b*24|0)+4>>2]|0,d|0,0)|0)!=0){return}d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function eS(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;lQ(c[2906632+(a+4<<2)>>2]|0);b=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;lQ(c[2906632+(a+3<<2)>>2]|0);d=c[22652]|0;e=a+1|0;lQ(c[2906632+(a+2<<2)>>2]|0);f=c[22652]|0;fC(b,72416);if((d|0)==2){c[(c[723828]|0)+(b*24|0)+12>>2]=3;g=(f|0)==0?1024:f;c[(c[723828]|0)+(b*24|0)+16>>2]=g;h=0;i=g}else if((d|0)==1){c[(c[723828]|0)+(b*24|0)+12>>2]=2;c[(c[723828]|0)+(b*24|0)+16>>2]=0;h=1;i=1024}else if((d|0)==0){c[(c[723828]|0)+(b*24|0)+12>>2]=1;c[(c[723828]|0)+(b*24|0)+16>>2]=0;h=2;i=f}else{f=c[680088]|0;lY(q8(f,c8((c[723828]|0)+(b*24|0)|0,c[680080]|0,72416,72360,0)|0)|0)}if((ck(c[(c[723828]|0)+(b*24|0)+4>>2]|0,0,h|0,i|0)|0)!=0){ei(72416,1,b,0)}i=c[723828]|0;do{if((c[i+(b*24|0)+8>>2]&28|0)!=0){if((bA(aF(c[i+(b*24|0)+4>>2]|0)|0)|0)==0){break}le(aF(c[(c[723828]|0)+(b*24|0)+4>>2]|0)|0,(h|0)!=0|0)}}while(0);h=2906632+(a<<2)|0;c[(c[723820]|0)+(c[h>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[h>>2]<<2)>>2]=c[2906632+(e<<2)>>2];return}function eT(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;b=a+1|0;lQ(c[2906632+(a+2<<2)>>2]|0);d=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;fC(d,72488);e=c[723828]|0;do{if((c[e+(d*24|0)+12>>2]|0)==-1){f=(bA(aF(c[e+(d*24|0)+4>>2]|0)|0)|0)==0;g=c[723828]|0;if(f){c[g+(d*24|0)+12>>2]=3;c[(c[723828]|0)+(d*24|0)+16>>2]=1024;break}if((c[g+(d*24|0)+8>>2]&28|0)==0){h=2;i=g}else{f=(ld(aF(c[g+(d*24|0)+4>>2]|0)|0)|0)!=0;h=f?2:1;i=c[723828]|0}c[i+(d*24|0)+12>>2]=h;c[(c[723828]|0)+(d*24|0)+16>>2]=0}}while(0);h=q8(203,rL(c[(c[723828]|0)+(d*24|0)+12>>2]|0)|0)|0;i=q8(h,rL(c[(c[723828]|0)+(d*24|0)+16>>2]|0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=i;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(b<<2)>>2];return}function eU(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;lQ(c[2906632+(a+4<<2)>>2]|0);b=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;lQ(c[2906632+(a+3<<2)>>2]|0);d=c[22652]|0;e=a+1|0;lQ(c[2906632+(a+2<<2)>>2]|0);f=c[22652]|0;if((d|0)==0){g=0}else if((d|0)==1){g=1}else{g=2}fC(b,72576);if((b2(c[(c[723828]|0)+(b*24|0)+4>>2]|0,f|0,g|0)|0)!=0){ei(72576,1,b,0)}g=c[723828]|0;if((c[g+(b*24|0)+8>>2]&16|0)!=0){c[g+(b*24|0)+20>>2]=0}b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(e<<2)>>2];return}function eV(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0;b=a+1|0;lQ(c[2906632+(a+2<<2)>>2]|0);d=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;fC(d,72920);e=c[723828]|0;f=c[e+(d*24|0)+8>>2]|0;if((f&18|0)==0){g=c[680088]|0;lY(q8(g,c8(e+(d*24|0)|0,c[680080]|0,72920,73896,0)|0)|0)}if((f&16|0)==0){h=e}else{if((c[e+(d*24|0)+20>>2]|0)==2){f=c[e+(d*24|0)+4>>2]|0;au(f|0)|0;f=c[(c[723828]|0)+(d*24|0)+4>>2]|0;b2(f|0,0,1)|0;i=c[723828]|0}else{i=e}c[i+(d*24|0)+20>>2]=1;h=c[723828]|0}do{if((b_(c[h+(d*24|0)+4>>2]|0)|0)==0){i=aO(c[(c[723828]|0)+(d*24|0)+4>>2]|0)|0;e=c[(c[723828]|0)+(d*24|0)+4>>2]|0;if((i|0)!=-1){bO(i|0,e|0)|0;f=sm(i)|0;i=2906632+(a<<2)|0;c[(c[723820]|0)+(c[i>>2]<<2)>>2]=f;c[(c[723822]|0)+(c[i>>2]<<2)>>2]=c[2906632+(b<<2)>>2];return}if((b_(e|0)|0)!=0){break}ei(72920,1,d,0)}}while(0);b=c[723828]|0;if((c[b+(d*24|0)+8>>2]&16|0)==0){j=b;k=c[680088]|0;l=j+(d*24|0)|0;m=c[680414]|0;n=c8(l,m,72920,72816,0)|0;o=q8(k,n)|0;lY(o)}c[b+(d*24|0)+20>>2]=0;j=c[723828]|0;k=c[680088]|0;l=j+(d*24|0)|0;m=c[680414]|0;n=c8(l,m,72920,72816,0)|0;o=q8(k,n)|0;lY(o)}function eW(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[723820]|0;d=2906632+(a<<2)|0;c[b+(c[d>>2]<<2)>>2]=(c[(c[723828]|0)+((c[b+(c[22654]<<2)>>2]|0)*24|0)+8>>2]|0)>>>0<2>>>0?c[680382]|0:c[679930]|0;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function eX(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[723820]|0;d=2906632+(a<<2)|0;c[b+(c[d>>2]<<2)>>2]=(c[(c[723828]|0)+((c[b+(c[22654]<<2)>>2]|0)*24|0)+8>>2]|0)==0?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function eY(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[723820]|0;d=2906632+(a<<2)|0;c[b+(c[d>>2]<<2)>>2]=(c[(c[723828]|0)+((c[b+(c[22654]<<2)>>2]|0)*24|0)+8>>2]&18|0)!=0?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function eZ(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[723820]|0;d=2906632+(a<<2)|0;c[b+(c[d>>2]<<2)>>2]=(c[(c[723828]|0)+((c[b+(c[22654]<<2)>>2]|0)*24|0)+8>>2]&28|0)!=0?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function e_(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0;b=i;i=i+80|0;d=b|0;e=a+1|0;lQ(c[2906632+(a+2<<2)>>2]|0);f=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;g=c[723828]|0;h=c[g+(f*24|0)+8>>2]&30;do{if((h|0)==0){j=0}else{if((bL(aF(c[g+(f*24|0)+4>>2]|0)|0,d|0)|0)!=0){j=h;break}j=(c[d+12>>2]&61440|0)==32768|0}}while(0);d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=(j|0)!=0?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(e<<2)>>2];i=b;return}function e$(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0;b=i;i=i+80|0;d=b|0;e=a+1|0;lQ(c[2906632+(a+2<<2)>>2]|0);f=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;fC(f,73144);g=c[723828]|0;if((c[g+(f*24|0)+8>>2]&28|0)==0){h=g}else{j=c[g+(f*24|0)+4>>2]|0;au(j|0)|0;h=c[723828]|0}if((bL(aF(c[h+(f*24|0)+4>>2]|0)|0,d|0)|0)!=0){k=c[680088]|0;l=c[723828]|0;m=l+(f*24|0)|0;n=c[680080]|0;o=c8(m,n,73144,73032,0)|0;p=q8(k,o)|0;lY(p)}if((c[d+12>>2]&61440|0)!=32768){k=c[680088]|0;l=c[723828]|0;m=l+(f*24|0)|0;n=c[680080]|0;o=c8(m,n,73144,73032,0)|0;p=q8(k,o)|0;lY(p)}p=c[d+36>>2]|0;if((p|0)==0){q=136;r=c[723820]|0;s=2906632+(a<<2)|0;t=c[s>>2]|0;u=r+(t<<2)|0;c[u>>2]=q;v=2906632+(e<<2)|0;w=c[v>>2]|0;x=c[s>>2]|0;y=c[723822]|0;z=y+(x<<2)|0;c[z>>2]=w;i=b;return}d=q8(47,0)|0;c[886964]=d;o=p;p=d;while(1){d=q8(((o>>>0)%1e4|0)+43705|0,0)|0;c[(c[723820]|0)+(p<<2)>>2]=d;A=c[723820]|0;if(o>>>0<1e4>>>0){break}else{o=(o>>>0)/1e4|0;p=c[A+(p<<2)>>2]|0}}q=c[886964]|0;r=A;s=2906632+(a<<2)|0;t=c[s>>2]|0;u=r+(t<<2)|0;c[u>>2]=q;v=2906632+(e<<2)|0;w=c[v>>2]|0;x=c[s>>2]|0;y=c[723822]|0;z=y+(x<<2)|0;c[z>>2]=w;i=b;return}function e0(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;b=i;i=i+136|0;d=b|0;e=b+128|0;lQ(c[2906632+(a+3<<2)>>2]|0);f=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;g=a+1|0;lQ(c[2906632+(a+2<<2)>>2]|0);h=c[22652]|0;fC(f,73368);j=c[723828]|0;if((c[j+(f*24|0)+8>>2]&18|0)==0){k=c[680088]|0;lY(q8(k,c8(j+(f*24|0)|0,c[680080]|0,73368,73896,0)|0)|0)}wa(d|0,0,128);k=aF(c[j+(f*24|0)+4>>2]|0)|0;j=d+(k>>>5<<2)|0;c[j>>2]=1<<(k&31)|c[j>>2];j=k+1|0;c[e>>2]=(h|0)/1e3|0;c[e+4>>2]=(h|0)%1e3|0;while(1){l=bn(j|0,d|0,0,0,e|0)|0;if((l|0)>=0){m=1035;break}if((c[(bJ()|0)>>2]|0)!=4){m=1034;break}}if((m|0)==1034){e=c[680088]|0;lY(q8(e,c8((c[723828]|0)+(f*24|0)|0,c[680080]|0,73368,73232,0)|0)|0)}else if((m|0)==1035){m=2906632+(a<<2)|0;c[(c[723820]|0)+(c[m>>2]<<2)>>2]=(l|0)>0?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[m>>2]<<2)>>2]=c[2906632+(g<<2)>>2];i=b;return}}function e1(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;lQ(c[2906632+(a+2<<2)>>2]|0);d=c[723820]|0;e=2906632+(a<<2)|0;c[d+(c[e>>2]<<2)>>2]=(b|0)==(c[d+(c[22654]<<2)>>2]|0)?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}function e2(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(c[(c[723820]|0)+(c[22654]<<2)>>2]|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function e3(a){a=a|0;var b=0;lQ(c[2906632+(a+3<<2)>>2]|0);b=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;lQ(c[2906632+(a+2<<2)>>2]|0);fC(b,73448);b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function e4(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;lQ(c[2906632+(a+4<<2)>>2]|0);b=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;lQ(c[2906632+(a+3<<2)>>2]|0);d=sp(c[22654]|0)|0;e=a+1|0;lQ(c[2906632+(a+2<<2)>>2]|0);f=c[22652]|0;fC(b,73704);g=c[723828]|0;h=c[g+(b*24|0)+8>>2]|0;if((h&28|0)==0){i=c[680088]|0;lY(q8(i,c8(g+(b*24|0)|0,c[680080]|0,73704,73560,0)|0)|0)}if((f|0)<0){i=c[680088]|0;lY(q8(i,c8(g+(b*24|0)|0,c[680080]|0,73704,74184,0)|0)|0)}if((h&16|0)!=0){if((c[g+(b*24|0)+20>>2]|0)==1){h=c[g+(b*24|0)+4>>2]|0;b2(h|0,0,1)|0;j=c[723828]|0}else{j=g}c[j+(b*24|0)+20>>2]=2}j=bJ()|0;c[j>>2]=0;g=f;while(1){if((g|0)<=0){k=1051;break}f=g-(ax(d|0,1,g|0,c[(c[723828]|0)+(b*24|0)+4>>2]|0)|0)|0;if((c[j>>2]|0)<0){k=1050;break}else{g=f}}if((k|0)==1050){ei(73704,1,b,0)}else if((k|0)==1051){k=2906632+(a<<2)|0;c[(c[723820]|0)+(c[k>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[k>>2]<<2)>>2]=c[2906632+(e<<2)>>2];return}}function e5(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;lQ(c[2906632+(a+4<<2)>>2]|0);b=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;lQ(c[2906632+(a+3<<2)>>2]|0);d=sp(c[22654]|0)|0;e=a+1|0;lQ(c[2906632+(a+2<<2)>>2]|0);f=c[22652]|0;fC(b,74320);g=c[723828]|0;h=c[g+(b*24|0)+8>>2]|0;if((h&18|0)==0){i=c[680088]|0;lY(q8(i,c8(g+(b*24|0)|0,c[680080]|0,74320,73896,0)|0)|0)}if((f|0)<0){i=c[680088]|0;lY(q8(i,c8(g+(b*24|0)|0,c[680080]|0,74320,74184,0)|0)|0)}if((h&16|0)==0){j=g}else{if((c[g+(b*24|0)+20>>2]|0)==2){h=c[g+(b*24|0)+4>>2]|0;au(h|0)|0;h=c[(c[723828]|0)+(b*24|0)+4>>2]|0;b2(h|0,0,1)|0;k=c[723828]|0}else{k=g}c[k+(b*24|0)+20>>2]=1;j=c[723828]|0}k=bU(d|0,1,f|0,c[j+(b*24|0)+4>>2]|0)|0;if((k|0)>=(f|0)){l=rL(k)|0;m=2906632+(a<<2)|0;n=c[m>>2]|0;o=c[723820]|0;p=o+(n<<2)|0;c[p>>2]=l;q=2906632+(e<<2)|0;r=c[q>>2]|0;s=c[m>>2]|0;t=c[723822]|0;u=t+(s<<2)|0;c[u>>2]=r;return}if((a3(c[(c[723828]|0)+(b*24|0)+4>>2]|0)|0)==0){l=rL(k)|0;m=2906632+(a<<2)|0;n=c[m>>2]|0;o=c[723820]|0;p=o+(n<<2)|0;c[p>>2]=l;q=2906632+(e<<2)|0;r=c[q>>2]|0;s=c[m>>2]|0;t=c[723822]|0;u=t+(s<<2)|0;c[u>>2]=r;return}else{ei(74320,1,b,0)}}function e6(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;fC(b,74536);d=(bA(aF(c[(c[723828]|0)+(b*24|0)+4>>2]|0)|0)|0)!=0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function e7(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=a+1|0;lQ(c[2906632+(a+2<<2)>>2]|0);d=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;fC(d,74632);e=aF(c[(c[723828]|0)+(d*24|0)+4>>2]|0)|0;if((bA(e|0)|0)==0){f=1069}else{if((lb(e)|0)==0){f=1069}else{g=2719720}}if((f|0)==1069){g=2721528}f=2906632+(a<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=c[g>>2];c[(c[723822]|0)+(c[f>>2]<<2)>>2]=c[2906632+(b<<2)>>2];return}function e8(a){a=a|0;var b=0,d=0,e=0,f=0;lQ(c[2906632+(a+3<<2)>>2]|0);b=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;lQ(c[2906632+(a+2<<2)>>2]|0);d=c[22654]|0;e=c[679930]|0;fC(b,74976);f=aF(c[(c[723828]|0)+(b*24|0)+4>>2]|0)|0;if((bA(f|0)|0)!=0){lc(f,(d|0)==(e|0)|0)}e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[e>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function e9(a){a=a|0;var b=0,d=0;b=q8(56,c[2906632+(a+2<<2)>>2]|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function fa(a){a=a|0;var b=0,d=0;b=c[670386]|0;c[670386]=b-1;lQ(c[2906632+(b<<2)>>2]|0);b=c[723820]|0;d=2906632+(a<<2)|0;c[b+(c[d>>2]<<2)>>2]=c[b+(c[22654]<<2)>>2];c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function fb(a){a=a|0;var b=0;lQ(c[2906632+(a+3<<2)>>2]|0);c[(c[723820]|0)+(c[22654]<<2)>>2]=c[2906632+(a+2<<2)>>2];b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function fc(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[670386]|0;if((b|0)>159998){rG();d=c[670386]|0}else{d=b}b=c[22654]|0;e=d+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=b;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[670386]|0;c[670386]=b-1;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=(c[2906632+(b<<2)>>2]|0)==(c[22654]|0)?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}function fd(a){a=a|0;var b=0,d=0;b=sQ(c[2906632+(a+2<<2)>>2]|0)|0;if((b|0)==0){d=c[680088]|0;lY(q8(d,c8(0,c[680060]|0,75136,75080,0)|0)|0)}else{d=rL(b)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}}function fe(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=sR(c[22652]|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function ff(a){a=a|0;var b=0;lQ(c[2906632+(a+2<<2)>>2]|0);sS(c[22652]|0);b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function fg(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=so(c[22652]|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function fh(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(sp(c[22654]|0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function fi(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+3<<2)>>2]|0);b=c[22654]|0;lQ(c[2906632+(a+2<<2)>>2]|0);d=sp(c[22654]|0)|0;e=c[723820]|0;c[2730132+(c[e+(b<<2)>>2]<<4)>>2]=d;d=2906632+(a<<2)|0;c[e+(c[d>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function fj(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[670386]|0;if((b|0)>159998){rG();d=c[670386]|0}else{d=b}b=c[22654]|0;e=d+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=b;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[670386]|0;c[670386]=b-1;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=(c[2906632+(b<<2)>>2]|0)==(c[22654]|0)?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}function fk(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=sO(sp(c[22654]|0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function fl(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;lQ(c[2906632+(a+3<<2)>>2]|0);d=2730140+(b<<4)|0;c[d>>2]=q8(c[22654]|0,c[d>>2]|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function fm(a){a=a|0;var b=0,d=0,e=0,f=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;lQ(c[2906632+(a+3<<2)>>2]|0);d=c[670386]|0;if((d|0)>159998){rG();e=c[670386]|0}else{e=d}d=c[22654]|0;f=e+1|0;c[670386]=f;c[2906632+(f<<2)>>2]=d;lQ(c[2906632+(a+4<<2)>>2]|0);d=c[22654]|0;f=c[670386]|0;c[670386]=f-1;e=q8(d,c[2906632+(f<<2)>>2]|0)|0;f=2730140+(b<<4)|0;c[f>>2]=q8(e,c[f>>2]|0)|0;f=2906632+(a<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[f>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function fn(a){a=a|0;var b=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function fo(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=so(c[2730132+(c[(c[723820]|0)+(c[22654]<<2)>>2]<<4)>>2]|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function fp(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[670386]|0;if((b|0)>159998){rG();d=c[670386]|0}else{d=b}b=c[22654]|0;e=d+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=b;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[670386]|0;c[670386]=b-1;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=(c[2906632+(b<<2)>>2]|0)==(c[22654]|0)?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}function fq(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);if((c[22654]|0)==(c[680058]|0)){b=c[670386]|0;c[670386]=b-1;d=c[2906632+(b<<2)>>2]|0}else{d=0}b=q8(0,q8(0,q8(0,d)|0)|0)|0;c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]=c[2906632+(a+4<<2)>>2];d=c[723820]|0;c[(c[723822]|0)+(c[d+(c[d+(b<<2)>>2]<<2)>>2]<<2)>>2]=c[2906632+(a+3<<2)>>2];c[722542]=q8(b,c[722542]|0)|0;c[(c[723822]|0)+(b<<2)>>2]=14;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function fr(a){a=a|0;var b=0,e=0,f=0,g=0;b=a+1|0;lQ(c[2906632+(a+2<<2)>>2]|0);e=c[22654]|0;if((e|0)<0){f=c[(c[723822]|0)+(e<<2)>>2]|0;g=(f-1|0)>>>0<128>>>0?f:145}else{g=d[90632+e|0]|0}if((g|0)!=14){ka(75240)}g=c[723820]|0;f=c[g+(e<<2)>>2]|0;if((f|0)==0){e=2906632+(a<<2)|0;c[g+(c[e>>2]<<2)>>2]=c[680018];c[(c[723822]|0)+(c[e>>2]<<2)>>2]=c[2906632+(b<<2)>>2];return}else{e=q8(c[680058]|0,c[(c[723822]|0)+(c[g+(f<<2)>>2]<<2)>>2]|0)|0;f=2906632+(a<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[f>>2]<<2)>>2]=c[2906632+(b<<2)>>2];return}}function fs(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0,j=0;b=a+1|0;lQ(c[2906632+(a+2<<2)>>2]|0);if((c[22654]|0)!=(c[680058]|0)){e=c[670386]|0;if((e|0)>159998){rG();f=c[670386]|0}else{f=e}e=f+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=0}lQ(c[2906632+(a+3<<2)>>2]|0);e=c[22654]|0;if((e|0)<0){f=c[(c[723822]|0)+(e<<2)>>2]|0;g=(f-1|0)>>>0<128>>>0?f:145}else{g=d[90632+e|0]|0}if((g|0)!=14){ka(75560)}g=c[723820]|0;f=g+(e<<2)|0;e=c[f>>2]|0;do{if((e|0)==0){h=g}else{i=c[g+(c[g+(e<<2)>>2]<<2)>>2]|0;j=c[670386]|0;c[670386]=j-1;c[g+(c[g+(c[f>>2]<<2)>>2]<<2)>>2]=c[2906632+(j<<2)>>2];if((i|0)==0){h=c[723820]|0;break}j=q8(c[680058]|0,i)|0;i=2906632+(a<<2)|0;c[(c[723820]|0)+(c[i>>2]<<2)>>2]=j;c[(c[723822]|0)+(c[i>>2]<<2)>>2]=c[2906632+(b<<2)>>2];return}}while(0);f=2906632+(a<<2)|0;c[h+(c[f>>2]<<2)>>2]=c[680018];c[(c[723822]|0)+(c[f>>2]<<2)>>2]=c[2906632+(b<<2)>>2];return}function ft(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;b=a+1|0;lQ(c[2906632+(a+2<<2)>>2]|0);e=c[22654]|0;if((e|0)<0){f=c[(c[723822]|0)+(e<<2)>>2]|0;g=(f-1|0)>>>0<128>>>0?f:145}else{g=d[90632+e|0]|0}if((g|0)!=14){ka(75680)}g=c[723820]|0;f=c[g+(e<<2)>>2]|0;if((f|0)==0){h=g;i=c[679926]|0;j=2906632+(a<<2)|0;k=c[j>>2]|0;l=h+(k<<2)|0;c[l>>2]=i;m=2906632+(b<<2)|0;n=c[m>>2]|0;o=c[j>>2]|0;p=c[723822]|0;q=p+(o<<2)|0;c[q>>2]=n;return}r=c[g+(f<<2)>>2]|0;if((r|0)<0){s=c[g+(r<<2)>>2]|0;if((s|0)==0){t=f}else{c[(c[723822]|0)+(r<<2)>>2]=s;c[(c[723820]|0)+(r<<2)>>2]=c[724896];c[724896]=r;t=c[(c[723820]|0)+(e<<2)>>2]|0}c[(c[723822]|0)+(t<<2)>>2]=0;t=c[723820]|0;c[t+(c[t+(e<<2)>>2]<<2)>>2]=0;c[(c[723820]|0)+(e<<2)>>2]=0}c[722542]=sJ(e,c[722542]|0)|0;h=c[723820]|0;i=c[679926]|0;j=2906632+(a<<2)|0;k=c[j>>2]|0;l=h+(k<<2)|0;c[l>>2]=i;m=2906632+(b<<2)|0;n=c[m>>2]|0;o=c[j>>2]|0;p=c[723822]|0;q=p+(o<<2)|0;c[q>>2]=n;return}function fu(a){a=a|0;var b=0,d=0;if((c[724896]|0)==0){b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}else{b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];d=q8(c[(c[723822]|0)+(c[724896]<<2)>>2]|0,c[2906632+(a+2<<2)>>2]|0)|0;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=d;c[724896]=c[(c[723820]|0)+(c[724896]<<2)>>2];return}}function fv(a){a=a|0;var b=0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=(c[724896]|0)==0?c[680382]|0:c[679930]|0;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function fw(a){a=a|0;var b=0,d=0;b=q8(58,c[2906632+(a+2<<2)>>2]|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function fx(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[723820]|0;d=2906632+(a<<2)|0;c[b+(c[d>>2]<<2)>>2]=c[b+(c[22654]<<2)>>2];c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function fy(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(c[22654]|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function fz(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[670386]|0;if((b|0)>159998){rG();d=c[670386]|0}else{d=b}b=c[22654]|0;e=d+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=b;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[670386]|0;c[670386]=b-1;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=(c[2906632+(b<<2)>>2]|0)==(c[22654]|0)?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}function fA(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;b=a+1|0;e=2906632+(a+2<<2)|0;f=2906632+(a+3<<2)|0;g=c[f>>2]|0;lQ(c[e>>2]|0);lQ(g);g=c[723822]|0;h=c[723820]|0;i=c[e>>2]|0;while(1){j=(i|0)<0;if(j){e=c[g+(i<<2)>>2]|0;k=(e-1|0)>>>0<128>>>0?e:145}else{k=d[90632+i|0]|0}if((k|0)==138){e=i-5425|0;if((c[565104+(e<<6)>>2]|0)>2){break}if((c[565100+(e<<6)>>2]|0)!=0){break}l=c[565112+(e<<6)>>2]|0;if((l|0)==0){break}else{i=l;continue}}else if((k|0)==84){i=c[g+(c[h+(i<<2)>>2]<<2)>>2]|0;continue}else if((k|0)==1){i=c[h+(i<<2)>>2]|0;continue}else{break}}k=c[f>>2]|0;while(1){m=(k|0)<0;if(m){f=c[g+(k<<2)>>2]|0;n=(f-1|0)>>>0<128>>>0?f:145}else{n=d[90632+k|0]|0}if((n|0)==1){k=c[h+(k<<2)>>2]|0;continue}else if((n|0)==84){k=c[g+(c[h+(k<<2)>>2]<<2)>>2]|0;continue}else if((n|0)==138){f=k-5425|0;if((c[565104+(f<<6)>>2]|0)>2){break}if((c[565100+(f<<6)>>2]|0)!=0){break}l=c[565112+(f<<6)>>2]|0;if((l|0)==0){break}else{k=l;continue}}else{break}}if(j){n=c[g+(i<<2)>>2]|0;o=(n-1|0)>>>0<128>>>0?n:145}else{o=d[90632+i|0]|0}if(m){m=c[g+(k<<2)>>2]|0;p=(m-1|0)>>>0<128>>>0?m:145}else{p=d[90632+k|0]|0}do{if((o|0)==(p|0)){if(j){m=c[g+(i<<2)>>2]|0;q=(m-1|0)>>>0<128>>>0?m:145}else{q=d[90632+i|0]|0}if((q|0)==10){m=ru(i)|0;n=(m|0)==(ru(k)|0);m=2906632+(a<<2)|0;c[(c[723820]|0)+(c[m>>2]<<2)>>2]=n?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[m>>2]<<2)>>2]=c[2906632+(b<<2)>>2];return}else if((q|0)==22){m=sl(i)|0;n=(m|0)==(sl(k)|0);m=2906632+(a<<2)|0;c[(c[723820]|0)+(c[m>>2]<<2)>>2]=n?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[m>>2]<<2)>>2]=c[2906632+(b<<2)>>2];return}else{break}}}while(0);q=2906632+(a<<2)|0;c[h+(c[q>>2]<<2)>>2]=(i|0)==(k|0)?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[q>>2]<<2)>>2]=c[2906632+(b<<2)>>2];return}function fB(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;b=a+1|0;e=2906632+(a+2<<2)|0;lQ(c[e>>2]|0);f=c[723822]|0;g=c[723820]|0;h=c[e>>2]|0;while(1){i=(h|0)<0;if(i){e=c[f+(h<<2)>>2]|0;j=(e-1|0)>>>0<128>>>0?e:145}else{j=d[90632+h|0]|0}if((j|0)==1){h=c[g+(h<<2)>>2]|0;continue}else if((j|0)==84){h=c[f+(c[g+(h<<2)>>2]<<2)>>2]|0;continue}else if((j|0)==138){e=h-5425|0;if((c[565104+(e<<6)>>2]|0)>2){break}if((c[565100+(e<<6)>>2]|0)!=0){break}k=c[565112+(e<<6)>>2]|0;if((k|0)==0){break}else{h=k;continue}}else{break}}if(i){i=c[f+(h<<2)>>2]|0;l=(i-1|0)>>>0<128>>>0?i:145}else{l=d[90632+h|0]|0}if((l|0)==10){i=2906632+(a<<2)|0;c[g+(c[i>>2]<<2)>>2]=(h|0)!=0?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[i>>2]<<2)>>2]=c[2906632+(b<<2)>>2];return}else if((l|0)==22){l=(rL(sl(h)|0)|0)!=0;i=2906632+(a<<2)|0;c[(c[723820]|0)+(c[i>>2]<<2)>>2]=l?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[i>>2]<<2)>>2]=c[2906632+(b<<2)>>2];return}else{i=(rL(h)|0)!=0;h=2906632+(a<<2)|0;c[(c[723820]|0)+(c[h>>2]<<2)>>2]=i?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[h>>2]<<2)>>2]=c[2906632+(b<<2)>>2];return}}function fC(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=c[723828]|0;e=d+(a*24|0)|0;f=c[d+(a*24|0)+8>>2]|0;if((f|0)==1){a=c[680088]|0;lY(q8(a,c8(e|0,c[680080]|0,b,74792,0)|0)|0)}else if((f|0)==0){f=c[680088]|0;lY(q8(f,c8(e|0,c[680080]|0,b,74856,0)|0)|0)}else{return}}function fD(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;d=c[679892]|0;e=c[723828]|0;f=0;while(1){if((f|0)>=(d|0)){g=1225;break}if((c[e+(f*24|0)>>2]|0)==0){h=f;i=d;break}else{f=f+1|0}}L1616:do{if((g|0)==1225){r4();f=c[679892]|0;d=c[723828]|0;e=0;while(1){if((e|0)>=(f|0)){break}if((c[d+(e*24|0)>>2]|0)==0){h=e;i=f;break L1616}else{e=e+1|0}}rx(c[725946]|0);f=c[725946]|0;d=c[f+16>>2]|0;c[723828]=d;j=c[f>>2]|0;c[679892]=j;if((e|0)<(j|0)){k=e;l=d}else{h=e;i=j;break}while(1){c[l+(k*24|0)>>2]=0;j=k+1|0;d=c[679892]|0;if((j|0)>=(d|0)){h=e;i=d;break L1616}k=j;l=c[723828]|0}}}while(0);if((h|0)<(i|0)){return h|0}else{h=c[680088]|0;lY(q8(h,c8(0,c[680080]|0,b,71048,a)|0)|0);return 0}return 0}function fE(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0;lQ(c[2906632+(a+2<<2)>>2]|0);e=(c[22654]|0)-5425|0;if(e>>>0>=32e3>>>0){f=c[680088]|0;g=c[680080]|0;h=a+3|0;i=2906632+(h<<2)|0;j=c8(0,g,d,71792,i)|0;k=q8(f,j)|0;lY(k)}l=c[565104+(e<<6)>>2]|0;if((l|0)<=2){f=c[680088]|0;g=c[680080]|0;h=a+3|0;i=2906632+(h<<2)|0;j=c8(0,g,d,71792,i)|0;k=q8(f,j)|0;lY(k)}if((l|0)==4){m=2}else if((l|0)==5){m=4}else if((l|0)==6){m=8}else if((l|0)==7){m=16}else{f=c[680088]|0;g=c[680080]|0;h=a+3|0;i=2906632+(h<<2)|0;j=c8(0,g,d,71792,i)|0;k=q8(f,j)|0;lY(k)}k=a+1|0;j=2906632+(a+3<<2)|0;f=c6(c[j>>2]|0)|0;i=(m&8|0)!=0;do{if((b|0)==0){if(i){n=71416;break}if((m&4|0)!=0){n=71368;break}if((m&16|0)!=0){n=71320;break}n=(m&2|0)!=0?71280:0}else{if(i){n=71648;break}if((m&4|0)!=0){n=71584;break}if((m&16|0)!=0){n=71528;break}n=(m&2|0)!=0?71472:0}}while(0);if((f|0)==0){i=c[680088]|0;lY(q8(i,c8(0,c[680080]|0,d,52400,0)|0)|0)}i=fD(j,d)|0;if((n|0)==0){g=c[680088]|0;lY(q8(g,c8(0,c[680080]|0,d,71712,0)|0)|0)}g=bk(f|0,n|0)|0;c[(c[723828]|0)+(i*24|0)+4>>2]=g;do{if((m|0)==16){if((c[(c[723828]|0)+(i*24|0)+4>>2]|0)!=0){break}g=bk(f|0,((b|0)!=0?70920:70864)|0)|0;c[(c[723828]|0)+(i*24|0)+4>>2]=g}}while(0);b=c[723828]|0;if((c[b+(i*24|0)+4>>2]|0)==0){ei(d,1,-1,j)}c[b+(i*24|0)+8>>2]=m;c[(c[723828]|0)+(i*24|0)+12>>2]=-1;c[(c[723828]|0)+(i*24|0)+16>>2]=-1;m=c[723828]|0;if((c[m+(i*24|0)+8>>2]&16|0)==0){o=q8(12,i)|0;p=c[723828]|0;q=p+(i*24|0)|0;c[q>>2]=o;r=2906632+(a<<2)|0;s=c[r>>2]|0;t=c[723820]|0;u=t+(s<<2)|0;c[u>>2]=o;v=2906632+(k<<2)|0;w=c[v>>2]|0;x=c[r>>2]|0;y=c[723822]|0;z=y+(x<<2)|0;c[z>>2]=w;return}c[m+(i*24|0)+20>>2]=0;o=q8(12,i)|0;p=c[723828]|0;q=p+(i*24|0)|0;c[q>>2]=o;r=2906632+(a<<2)|0;s=c[r>>2]|0;t=c[723820]|0;u=t+(s<<2)|0;c[u>>2]=o;v=2906632+(k<<2)|0;w=c[v>>2]|0;x=c[r>>2]|0;y=c[723822]|0;z=y+(x<<2)|0;c[z>>2]=w;return}function fF(a){a=a|0;var b=0;if((a|0)==3){b=rf(q1(69184)|0,0)|0;c[680064]=b;c[565112+(b-5425<<6)>>2]=164}else if((a|0)==2){c[886964]=r5(c[886964]|0)|0;c[886970]=r5(c[886970]|0)|0;return}else if((a|0)!=1){return}c[886964]=0;c[886970]=0;return}function fG(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[670386]|0;if((b|0)>159998){rG();d=c[670386]|0}else{d=b}b=c[22654]|0;e=d+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=b;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[22654]|0;e=c[670386]|0;c[670386]=e-1;d=c[2906632+(e<<2)>>2]|0;if((sn(d)|0)==0){ka(68656)}if((sn(b)|0)==0){ka(68656)}do{if((d|0)==136){f=b}else{if((b|0)==136){f=d;break}e=c[723822]|0;g=c[e+(b<<2)>>2]|0;if((c[e+(d<<2)>>2]|0)==47){e=c[723820]|0;h=c[e+(d<<2)>>2]|0;i=c[e+(b<<2)>>2]|0;if((g|0)==47){f=fT(47,h,i)|0;break}else{f=fU(h,i)|0;break}}else{i=c[723820]|0;if((g|0)==48){f=fT(48,c[i+(d<<2)>>2]|0,c[i+(b<<2)>>2]|0)|0;break}else{f=fU(c[i+(b<<2)>>2]|0,c[i+(d<<2)>>2]|0)|0;break}}}}while(0);d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=f;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;c[886964]=0;return}function fH(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[670386]|0;if((b|0)>159998){rG();d=c[670386]|0}else{d=b}b=c[22654]|0;e=d+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=b;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[22654]|0;e=c[670386]|0;c[670386]=e-1;d=c[2906632+(e<<2)>>2]|0;if((sn(d)|0)==0){ka(68656)}if((sn(b)|0)==0){ka(68656)}e=(b|0)==136;do{if((d|0)==136){if(e){f=136;break}f=q8((c[(c[723822]|0)+(b<<2)>>2]|0)==47?48:47,c[(c[723820]|0)+(b<<2)>>2]|0)|0}else{if(e){f=d;break}g=c[723822]|0;h=c[g+(b<<2)>>2]|0;if((c[g+(d<<2)>>2]|0)==47){g=c[723820]|0;i=c[g+(d<<2)>>2]|0;j=c[g+(b<<2)>>2]|0;if((h|0)==48){f=fT(47,i,j)|0;break}else{f=fU(i,j)|0;break}}else{j=c[723820]|0;if((h|0)==47){f=fT(48,c[j+(d<<2)>>2]|0,c[j+(b<<2)>>2]|0)|0;break}else{f=fU(c[j+(b<<2)>>2]|0,c[j+(d<<2)>>2]|0)|0;break}}}}while(0);d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=f;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;c[886964]=0;return}function fI(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[670386]|0;if((b|0)>159998){rG();d=c[670386]|0}else{d=b}b=c[22654]|0;e=d+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=b;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[22654]|0;e=c[670386]|0;c[670386]=e-1;d=c[2906632+(e<<2)>>2]|0;if((sn(d)|0)==0){ka(68656)}if((sn(b)|0)==0){ka(68656)}if((d|0)==136|(b|0)==136){f=136;g=c[723820]|0;h=2906632+(a<<2)|0;i=c[h>>2]|0;j=g+(i<<2)|0;c[j>>2]=f;k=c[h>>2]|0;l=c[723822]|0;m=l+(k<<2)|0;c[m>>2]=1;c[886964]=0;return}e=c[723822]|0;n=q8((c[e+(d<<2)>>2]|0)==(c[e+(b<<2)>>2]|0)?47:48,0)|0;c[886964]=n;e=c[723820]|0;o=c[e+(b<<2)>>2]|0;if((o|0)==0){f=n;g=e;h=2906632+(a<<2)|0;i=c[h>>2]|0;j=g+(i<<2)|0;c[j>>2]=f;k=c[h>>2]|0;l=c[723822]|0;m=l+(k<<2)|0;c[m>>2]=1;c[886964]=0;return}else{p=n;q=e;r=o}while(1){o=c[723822]|0;e=(c[o+(r<<2)>>2]|0)-43705|0;n=c[q+(d<<2)>>2]|0;do{if((n|0)==0){s=q}else{b=p;t=0;u=n;v=q;w=o;while(1){x=(aa((c[w+(u<<2)>>2]|0)-43705|0,e)|0)+t|0;y=c[v+(b<<2)>>2]|0;if((y|0)==0){z=q8(0,0)|0;c[(c[723820]|0)+(b<<2)>>2]=z;A=x;B=z;C=c[723822]|0}else{A=x-43705+(c[w+(y<<2)>>2]|0)|0;B=y;C=w}c[C+(B<<2)>>2]=((A|0)%1e4|0)+43705;D=(A|0)/1e4|0;E=c[723820]|0;y=c[E+(u<<2)>>2]|0;if((y|0)==0){break}b=B;t=D;u=y;v=E;w=c[723822]|0}if((A|0)<=9999){s=E;break}w=q8(D+43705|0,0)|0;c[(c[723820]|0)+(B<<2)>>2]=w;s=c[723820]|0}}while(0);e=c[s+(r<<2)>>2]|0;if((e|0)==0){break}p=c[s+(p<<2)>>2]|0;q=s;r=e}f=c[886964]|0;g=s;h=2906632+(a<<2)|0;i=c[h>>2]|0;j=g+(i<<2)|0;c[j>>2]=f;k=c[h>>2]|0;l=c[723822]|0;m=l+(k<<2)|0;c[m>>2]=1;c[886964]=0;return}function fJ(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,ab=0,ac=0,ad=0,ae=0,af=0,ag=0,ah=0,ai=0,aj=0,ak=0,al=0,am=0,an=0,ao=0,ap=0,aq=0,ar=0,as=0,at=0,au=0,av=0,aw=0,ax=0,ay=0,az=0,aA=0,aB=0,aC=0,aD=0,aE=0,aF=0,aG=0,aH=0,aI=0,aJ=0,aK=0,aL=0,aM=0,aN=0,aO=0,aP=0,aQ=0,aR=0,aS=0,aT=0,aU=0,aV=0,aW=0;b=2906632+(a+2<<2)|0;lQ(c[b>>2]|0);c[b>>2]=c[22654];d=2906632+(a+1<<2)|0;lQ(c[d>>2]|0);e=c[b>>2]|0;b=c[22654]|0;c[d>>2]=b;if((b|0)==136){f=c[680442]|0;g=c[680424]|0;h=q8(f,g)|0;lY(h)}if((e|0)==136){i=q8(q8(203,136)|0,136)|0}else{d=c[723822]|0;j=c[d+(e<<2)>>2]|0;k=c[d+(b<<2)>>2]|0;l=c[723820]|0;m=c[l+(e<<2)>>2]|0;e=c[l+(b<<2)>>2]|0;b=c[6614]|0;c[6614]=1;L1764:do{if((c[l+(e<<2)>>2]|0)==0){n=(c[d+(e<<2)>>2]|0)-43705|0;do{if((m|0)==0){o=0;p=0;q=0;r=l}else{s=q8(c[d+(m<<2)>>2]|0,0)|0;t=c[723820]|0;u=c[t+(m<<2)>>2]|0;if((u|0)==0){o=0;p=s;q=0;r=t;break}else{v=s;w=u}while(1){u=q8(c[(c[723822]|0)+(w<<2)>>2]|0,v)|0;s=c[723820]|0;t=c[s+(w<<2)>>2]|0;if((t|0)==0){o=0;p=u;q=0;r=s;break}else{v=u;w=t}}}}while(0);L1832:while(1){t=c[723822]|0;u=p;x=q;while(1){if((u|0)==0){break L1832}y=c[r+(u<<2)>>2]|0;z=t+(u<<2)|0;s=(x*1e4|0)-43705+(c[z>>2]|0)|0;A=(s|0)%(n|0)|0;B=(s|0)/(n|0)|0;if((B|o|0)==0){u=y;x=A}else{break}}c[z>>2]=B+43705;c[(c[723820]|0)+(u<<2)>>2]=o;o=u;p=y;q=A;r=c[723820]|0}if((x|0)==0){C=o;D=0;E=1387;break}C=o;D=q8(x+43705|0,0)|0;E=1387}else{n=(e|0)==0;L1766:do{if((m|0)==0|n){F=0;G=0;H=0;I=0;J=0;K=0;L=0;M=m;N=n}else{t=e;s=0;O=0;P=0;Q=0;R=1;S=m;T=d;while(1){U=c[T+(t<<2)>>2]|0;V=U-43705|0;W=q8(U,O)|0;U=c[(c[723820]|0)+(t<<2)>>2]|0;X=c[(c[723822]|0)+(S<<2)>>2]|0;Y=X-43705|0;Z=q8(X,s)|0;X=c[(c[723820]|0)+(S<<2)>>2]|0;_=(U|0)==0;if((X|0)==0|_){F=Z;G=W;H=V;I=P;J=Y;K=Q;L=R;M=X;N=_;break L1766}t=U;s=Z;O=W;P=V;Q=Y;R=R+1|0;S=X;T=c[723822]|0}}}while(0);if(!N){c[886970]=m;c[6614]=b;c[886964]=0;$=136;break}n=r2(G,0)|0;if((M|0)==0){ab=F;ac=J;ad=K}else{T=F;S=J;R=M;while(1){Q=c[(c[723822]|0)+(R<<2)>>2]|0;P=Q-43705|0;O=q8(Q,T)|0;Q=c[(c[723820]|0)+(R<<2)>>2]|0;if((Q|0)==0){ab=O;ac=P;ad=S;break}else{T=O;S=P;R=Q}}}R=q8(43705,0)|0;S=c[723820]|0;T=c[S+(n<<2)>>2]|0;if((T|0)==0){ae=ab;af=R}else{Q=ab;P=R;R=T;T=S;while(1){S=T+(Q<<2)|0;O=c[S>>2]|0;c[S>>2]=P;S=c[723820]|0;s=c[S+(R<<2)>>2]|0;if((s|0)==0){ae=O;af=Q;break}else{P=Q;Q=O;R=s;T=S}}}T=1e4/(H+1|0)|0;do{if((T|0)==1){ag=ad;ah=ac;ai=0;aj=I;ak=H;al=ae}else{if((n|0)==0){am=0;an=0}else{R=n;Q=0;P=0;while(1){S=(c[723822]|0)+(R<<2)|0;s=(aa((c[S>>2]|0)-43705|0,T)|0)+P|0;O=(s|0)%1e4|0;c[S>>2]=O+43705;S=c[(c[723820]|0)+(R<<2)>>2]|0;if((S|0)==0){am=O;an=Q;break}else{R=S;Q=O;P=(s|0)/1e4|0}}}P=r2(ae,0)|0;if((P|0)==0){ao=0;ap=0;aq=0;ar=0}else{Q=P;R=0;s=0;O=0;while(1){S=(c[723822]|0)+(Q<<2)|0;t=(aa((c[S>>2]|0)-43705|0,T)|0)+O|0;u=(t|0)/1e4|0;X=(t|0)%1e4|0;c[S>>2]=X+43705;S=c[(c[723820]|0)+(Q<<2)>>2]|0;if((S|0)==0){ao=X;ap=R;aq=s;ar=u;break}else{Q=S;s=R;R=X;O=u}}}O=r2(P,0)|0;if((af|0)==0){ag=aq;ah=ap;ai=ao;aj=an;ak=am;al=O;break}else{as=af;at=ao;au=ap;av=ar}while(1){R=(c[723822]|0)+(as<<2)|0;s=(aa((c[R>>2]|0)-43705|0,T)|0)+av|0;Q=(s|0)%1e4|0;c[R>>2]=Q+43705;R=c[(c[723820]|0)+(as<<2)>>2]|0;if((R|0)==0){ag=au;ah=at;ai=Q;aj=an;ak=am;al=O;break}else{as=R;au=at;at=Q;av=(s|0)/1e4|0}}}}while(0);O=af;P=0;s=ag;Q=ah;R=ai;u=al;L1795:while(1){aw=O;X=s;S=Q;t=R;Y=u;while(1){if((Y|0)==0){break L1795}V=(t*1e4|0)+S|0;if((t|0)==(ak|0)){ax=9999}else{ax=(V|0)/(ak|0)|0}while(1){ay=ax-1|0;if((aa(ax,aj)|0)>(((V-(aa(ax,ak)|0)|0)*1e4|0)+X|0)){ax=ay}else{break}}V=(c[723820]|0)+(Y<<2)|0;az=c[V>>2]|0;c[V>>2]=aw;if((az|0)==0){aA=0}else{aA=(c[(c[723822]|0)+(az<<2)>>2]|0)-43705|0}V=0;W=0;Z=aA;U=n;_=Y;while(1){aB=c[723822]|0;aC=aB+(_<<2)|0;aD=-43705-V+(c[aC>>2]|0)-(aa((c[aB+(U<<2)>>2]|0)-43705|0,ax)|0)|0;if((aD|0)>-1){aE=0;aF=aD}else{aB=(9999-aD|0)/1e4|0;aE=aB;aF=(aB*1e4|0)+aD|0}c[aC>>2]=aF+43705;aC=c[723820]|0;aG=c[aC+(_<<2)>>2]|0;aD=c[aC+(U<<2)>>2]|0;if((aD|0)==0){break}else{V=aE;W=Z;Z=aF;U=aD;_=aG}}_=c[723822]|0;do{if(((c[_+(aG<<2)>>2]|0)-43705|0)<(aE|0)){U=_+(Y<<2)|0;V=(c[U>>2]|0)-87410+(c[_+(n<<2)>>2]|0)|0;aD=(V|0)>9999;aC=aD?V-1e4|0:V;c[U>>2]=aC+43705;U=c[723820]|0;V=c[U+(n<<2)>>2]|0;if((V|0)==0){aH=ay;aI=0;aJ=aA;aK=aC;break}else{aL=Y;aM=aA;aN=aD;aO=aC;aP=U;aQ=V}while(1){V=c[aP+(aL<<2)>>2]|0;U=c[723822]|0;aC=U+(V<<2)|0;aD=(c[aC>>2]|0)+(aN&1|-87410)+(c[U+(aQ<<2)>>2]|0)|0;U=(aD|0)>9999;aB=U?aD-1e4|0:aD;c[aC>>2]=aB+43705;aC=c[723820]|0;aD=c[aC+(aQ<<2)>>2]|0;if((aD|0)==0){aH=ay;aI=aM;aJ=aO;aK=aB;break}else{aL=V;aM=aO;aN=U;aO=aB;aP=aC;aQ=aD}}}else{aH=ax;aI=W;aJ=Z;aK=aF}}while(0);if((aH|P|0)==0){aw=Y;X=aI;S=aJ;t=aK;Y=az}else{break}}O=Y;P=q8(aH+43705|0,P)|0;s=aI;Q=aJ;R=aK;u=az}u=0;R=0;Q=r2(sH(L,aw)|0,0)|0;while(1){s=c[723822]|0;O=c[723820]|0;n=R;t=Q;while(1){if((t|0)==0){C=P;D=u;E=1387;break L1764}S=(n*1e4|0)-43705+(c[s+(t<<2)>>2]|0)|0;aR=(S|0)%(T|0)|0;aS=(S|0)/(T|0)|0;aT=O+(t<<2)|0;aU=c[aT>>2]|0;if((aS|u|0)==0){n=aR;t=aU}else{break}}c[aT>>2]=u;c[(c[723822]|0)+(t<<2)>>2]=aS+43705;u=t;R=aR;Q=aU}}}while(0);do{if((E|0)==1387){c[886970]=D;c[6614]=b;c[886964]=C;if((C|0)==0){$=136;break}$=q8((j|0)==(k|0)?47:48,C)|0}}while(0);c[886964]=$;C=q8(203,$)|0;c[886964]=C;$=c[886970]|0;if(($|0)==0){aV=136;aW=C}else{C=q8(j,$)|0;aV=C;aW=c[886964]|0}c[886970]=aV;C=q8(aW,aV)|0;c[886964]=C;c[886970]=0;i=C}if((i|0)==0){f=c[680442]|0;g=c[680424]|0;h=q8(f,g)|0;lY(h)}else{h=2906632+(a<<2)|0;c[(c[723820]|0)+(c[h>>2]<<2)>>2]=i;c[(c[723822]|0)+(c[h>>2]<<2)>>2]=1;c[886964]=0;return}}function fK(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[22654]|0;if((b|0)==136){d=136}else{d=q8((c[(c[723822]|0)+(b<<2)>>2]|0)==47?48:47,c[(c[723820]|0)+(b<<2)>>2]|0)|0}b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function fL(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[22652]|0;do{if((b|0)==0){d=136}else{if((b|0)<0){e=-b|0;f=q8(48,0)|0}else{e=b;f=q8(47,0)|0}c[886964]=f;if((e|0)==0){d=f;break}else{g=e;h=f}while(1){i=q8(((g>>>0)%1e4|0)+43705|0,0)|0;c[(c[723820]|0)+(h<<2)>>2]=i;if(g>>>0<1e4>>>0){break}else{g=(g>>>0)/1e4|0;h=c[(c[723820]|0)+(h<<2)>>2]|0}}d=c[886964]|0}}while(0);h=2906632+(a<<2)|0;c[(c[723820]|0)+(c[h>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[h>>2]<<2)>>2]=1;return}function fM(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;b=c[2906632+(a+1<<2)>>2]|0;e=c[723822]|0;f=c[723820]|0;g=b;while(1){h=(g|0)<0;if(h){i=c[e+(g<<2)>>2]|0;j=(i-1|0)>>>0<128>>>0?i:145}else{j=d[90632+g|0]|0}if((j|0)==1){g=c[f+(g<<2)>>2]|0;continue}else if((j|0)==138){i=g-5425|0;if((c[565104+(i<<6)>>2]|0)>2){break}if((c[565100+(i<<6)>>2]|0)!=0){break}k=c[565112+(i<<6)>>2]|0;if((k|0)==0){break}else{g=k;continue}}else if((j|0)==84){g=c[e+(c[f+(g<<2)>>2]<<2)>>2]|0;continue}else{break}}do{if(h){j=c[e+(g<<2)>>2]|0;if((j-1|0)>>>0<128>>>0){break}else{l=j}while(1){if((l|0)<0){j=c[e+(l<<2)>>2]|0;m=(j-1|0)>>>0<128>>>0?j:145}else{m=d[90632+l|0]|0}if((m|0)==1){l=c[f+(l<<2)>>2]|0;continue}else if((m|0)==84){l=c[e+(c[f+(l<<2)>>2]<<2)>>2]|0;continue}else if((m|0)==138){j=l-5425|0;if((c[565104+(j<<6)>>2]|0)>2){break}if((c[565100+(j<<6)>>2]|0)!=0){break}k=c[565112+(j<<6)>>2]|0;if((k|0)==0){break}else{l=k;continue}}else{break}}if((l|0)!=(c[680064]|0)){break}k=2906632+(a<<2)|0;c[f+(c[k>>2]<<2)>>2]=c[f+(g<<2)>>2];c[(c[723822]|0)+(c[k>>2]<<2)>>2]=1;return}}while(0);lQ(b);b=c_(c[22654]|0)|0;c[22654]=b;if((b|0)==0){lY(q8(c[680442]|0,c[680012]|0)|0)}g=2906632+(a<<2)|0;c[(c[723820]|0)+(c[g>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[g>>2]<<2)>>2]=1;return}function fN(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[22652]|0;if((b|0)==0){d=136;e=c[723820]|0}else{f=q8(47,0)|0;c[886964]=f;g=b;b=f;while(1){f=q8(((g>>>0)%1e4|0)+43705|0,0)|0;c[(c[723820]|0)+(b<<2)>>2]=f;h=c[723820]|0;if(g>>>0<1e4>>>0){break}else{g=(g>>>0)/1e4|0;b=c[h+(b<<2)>>2]|0}}d=c[886964]|0;e=h}h=2906632+(a<<2)|0;c[e+(c[h>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[h>>2]<<2)>>2]=1;return}function fO(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=c_(c[22654]|0)|0;c[22654]=b;if((b|0)==0){lY(q8(c[680442]|0,c[680012]|0)|0)}else{d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}}function fP(a){a=a|0;var b=0,d=0.0,e=0,f=0,g=0,h=0.0,i=0.0,j=0.0,k=0,l=0.0;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[22654]|0;do{if((b|0)==136){d=0.0}else{e=c[723820]|0;f=c[e+(b<<2)>>2]|0;g=c[723822]|0;if((f|0)==0){h=0.0}else{i=0.0;j=1.0;k=f;while(1){l=i+j*+((c[g+(k<<2)>>2]|0)-43705|0);f=c[e+(k<<2)>>2]|0;if((f|0)==0){h=l;break}else{i=l;j=j*1.0e4;k=f}}}if((c[g+(b<<2)>>2]|0)==47){d=h;break}d=-0.0-h}}while(0);b=lj(d)|0;k=2906632+(a<<2)|0;c[(c[723820]|0)+(c[k>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[k>>2]<<2)>>2]=1;return}function fQ(a){a=a|0;var b=0,d=0.0,e=0,f=0,g=0,h=0.0,i=0.0,j=0.0,k=0,l=0.0;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[22654]|0;do{if((b|0)==136){d=0.0}else{e=c[723820]|0;f=c[e+(b<<2)>>2]|0;g=c[723822]|0;if((f|0)==0){h=0.0}else{i=0.0;j=1.0;k=f;while(1){l=i+j*+((c[g+(k<<2)>>2]|0)-43705|0);f=c[e+(k<<2)>>2]|0;if((f|0)==0){h=l;break}else{i=l;j=j*1.0e4;k=f}}}if((c[g+(b<<2)>>2]|0)==47){d=h;break}d=-0.0-h}}while(0);b=lp(d)|0;k=2906632+(a<<2)|0;c[(c[723820]|0)+(c[k>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[k>>2]<<2)>>2]=1;return}function fR(a){a=a|0;var b=0,d=0;b=2906632+(a+2<<2)|0;lQ(c[b>>2]|0);c[b>>2]=c[22654];lQ(c[2906632+(a+1<<2)>>2]|0);d=(c3(c[b>>2]|0,c[22654]|0)|0)==0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function fS(a){a=a|0;var b=0,d=0;b=2906632+(a+2<<2)|0;lQ(c[b>>2]|0);c[b>>2]=c[22654];lQ(c[2906632+(a+1<<2)>>2]|0);d=c3(c[b>>2]|0,c[22654]|0)|0;if((d|0)==0){b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[680412];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}else if((d|0)==(-1|0)){b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[680054];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}else if((d|0)==1){d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=c[680356];c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}else{return}}function fT(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0;e=q8(a,0)|0;c[886964]=e;a=0;f=e;e=d;d=b;L1943:while(1){do{if((d|0)==0){if((a|0)==0){g=1476;break L1943}if((e|0)==0){h=0;i=0;j=a;break}k=(c[(c[723822]|0)+(e<<2)>>2]|0)-43705|0;l=c[(c[723820]|0)+(e<<2)>>2]|0;m=0;g=1479}else{if((e|0)!=0){b=c[723822]|0;n=c[723820]|0;k=(c[b+(d<<2)>>2]|0)-87410+(c[b+(e<<2)>>2]|0)|0;l=c[n+(e<<2)>>2]|0;m=c[n+(d<<2)>>2]|0;g=1479;break}if((a|0)==0){g=1473;break L1943}k=(c[(c[723822]|0)+(d<<2)>>2]|0)-43705|0;l=0;m=c[(c[723820]|0)+(d<<2)>>2]|0;g=1479}}while(0);do{if((g|0)==1479){g=0;n=k+a|0;if((n|0)<=9999){h=m;i=l;j=n;break}b=q8(n+33705|0,0)|0;c[(c[723820]|0)+(f<<2)>>2]=b;a=1;f=b;e=l;d=m;continue L1943}}while(0);b=q8(j+43705|0,0)|0;c[(c[723820]|0)+(f<<2)>>2]=b;a=0;f=b;e=i;d=h}if((g|0)==1476){c[(c[723820]|0)+(f<<2)>>2]=e;o=c[886964]|0;return o|0}else if((g|0)==1473){c[(c[723820]|0)+(f<<2)>>2]=d;o=c[886964]|0;return o|0}return 0}function fU(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0;d=(a|0)!=0;e=(b|0)!=0;if(d&e){f=c[723822]|0;g=c[723820]|0;h=0;i=b;j=a;while(1){k=c[f+(j<<2)>>2]|0;l=c[f+(i<<2)>>2]|0;if((k|0)<(l|0)){m=-1}else{m=(k|0)>(l|0)?1:h}l=c[g+(j<<2)>>2]|0;k=c[g+(i<<2)>>2]|0;n=(l|0)!=0;o=(k|0)!=0;if(n&o){h=m;i=k;j=l}else{p=m;q=n;r=o;break}}}else{p=0;q=d;r=e}do{if(q){s=1493}else{e=r?-1:p;if((e|0)==(-1|0)){c[886964]=q8(48,0)|0;t=a;u=b;break}else if((e|0)==1){s=1493;break}else if((e|0)==0){v=136;return v|0}else{t=b;u=a;break}}}while(0);if((s|0)==1493){c[886964]=q8(47,0)|0;t=b;u=a}a=0;b=0;s=c[886964]|0;p=t;t=u;L1980:while(1){u=c[723822]|0;w=c[723820]|0;x=a;r=b;q=p;y=t;while(1){if((q|0)==0){if((r|0)==0){break L1980}z=(c[u+(y<<2)>>2]|0)-43705|0;A=0}else{z=(c[u+(y<<2)>>2]|0)-(c[u+(q<<2)>>2]|0)|0;A=c[w+(q<<2)>>2]|0}e=z+r|0;B=c[w+(y<<2)>>2]|0;C=e>>31;D=(e|0)<0?e+1e4|0:e;if((D|0)==0){x=x+1|0;r=C;q=A;y=B}else{break}}if((x|0)>0){q=s;r=x;while(1){u=q8(43705,0)|0;c[(c[723820]|0)+(q<<2)>>2]=u;e=r-1|0;if((e|0)>0){q=u;r=e}else{E=u;F=0;break}}}else{E=s;F=x}r=q8(D+43705|0,0)|0;c[(c[723820]|0)+(E<<2)>>2]=r;a=F;b=C;s=r;p=A;t=B}if((y|0)!=0&(x|0)>0){B=s;t=x;while(1){G=q8(43705,0)|0;c[(c[723820]|0)+(B<<2)>>2]=G;x=t-1|0;if((x|0)>0){B=G;t=x}else{break}}H=G;I=c[723820]|0}else{H=s;I=w}c[I+(H<<2)>>2]=y;v=c[886964]|0;return v|0}function fV(a){a=a|0;if((a|0)!=3){return}rU(c[680462]|0);a=rf(q1(68088)|0,0)|0;c[680410]=a;rr(0,a,68272,c[680462]|0,0);return}function fW(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0;b=c[670386]|0;if((b|0)>159998){rG();d=c[670386]|0}else{d=b}e=d+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=0;lQ(c[2906632+(a+2<<2)>>2]|0);e=c[22652]|0;d=(e|0)>0;f=d?e:0;e=2906632+(b+1<<2)|0;c[e>>2]=0;if(d){d=f;b=0;while(1){g=q8(0,b)|0;c[e>>2]=g;h=d-1|0;if((h|0)>0){d=h;b=g}else{i=g;break}}}else{i=0}c[e>>2]=q8(c[2906632+(a+3<<2)>>2]|0,i)|0;i=c[670386]|0;if((i|0)>159998){rG();j=c[670386]|0}else{j=i}i=2906632+(a+1<<2)|0;b=2906632+(j+1<<2)|0;c[b>>2]=c[i>>2];c[i>>2]=0;c[670386]=j;lQ(c[b>>2]|0);L2017:do{if((c[22654]|0)==(c[680426]|0)){while(1){b=c[670386]|0;c[670386]=b-1;lQ(c[2906632+(b<<2)>>2]|0);lQ(c[2906632+(c[670386]<<2)>>2]|0);b=c[22652]|0;if(!((b|0)>-1&(b|0)<(f|0))){break}j=(c[670386]|0)-1|0;c[670386]=j;i=c[723820]|0;d=c[i+(c[e>>2]<<2)>>2]|0;g=b-1|0;c[22652]=g;if((b|0)>0){b=d;h=g;while(1){g=c[i+(b<<2)>>2]|0;k=h-1|0;c[22652]=k;if((h|0)>0){b=g;h=k}else{l=g;break}}}else{l=d}h=(c[723822]|0)+(l<<2)|0;if((c[h>>2]|0)==0){m=2906632+(j<<2)|0}else{m=2721640}c[h>>2]=c[m>>2];h=c[670386]|0;c[670386]=h-2;lQ(c[2906632+(h-1<<2)>>2]|0);if((c[22654]|0)!=(c[680426]|0)){break L2017}}f8()}}while(0);m=c[e>>2]|0;l=c[723820]|0;f=c[l+(m<<2)>>2]|0;if((f|0)==0){n=m;o=l;p=2906632+(a<<2)|0;q=c[p>>2]|0;r=o+(q<<2)|0;c[r>>2]=n;s=c[p>>2]|0;t=c[723822]|0;u=t+(s<<2)|0;c[u>>2]=55;c[e>>2]=0;return}else{v=f;w=l}while(1){l=(c[723822]|0)+(v<<2)|0;if((c[l>>2]|0)==0){c[l>>2]=c[680410];x=c[723820]|0}else{x=w}l=c[x+(v<<2)>>2]|0;if((l|0)==0){break}else{v=l;w=x}}n=c[e>>2]|0;o=x;p=2906632+(a<<2)|0;q=c[p>>2]|0;r=o+(q<<2)|0;c[r>>2]=n;s=c[p>>2]|0;t=c[723822]|0;u=t+(s<<2)|0;c[u>>2]=55;c[e>>2]=0;return}function fX(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0;b=c[670386]|0;if((b|0)>159998){rG();d=c[670386]|0}else{d=b}e=d+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=0;e=2906632+(a+1<<2)|0;lQ(c[e>>2]|0);d=c[22654]|0;c[e>>2]=d;f=c[(c[723820]|0)+(d<<2)>>2]|0;d=q8(c[(c[723822]|0)+(f<<2)>>2]|0,0)|0;g=2906632+(b+1<<2)|0;c[g>>2]=d;b=c[(c[723820]|0)+(f<<2)>>2]|0;if((b|0)==0){h=0;i=d}else{f=0;j=b;b=d;while(1){d=q8(0,b)|0;c[g>>2]=d;k=f+1|0;l=c[(c[723820]|0)+(j<<2)>>2]|0;if((l|0)==0){h=k;i=d;break}else{f=k;j=l;b=d}}}c[g>>2]=r2(i,0)|0;i=c[670386]|0;if((i|0)>159998){rG();m=c[670386]|0}else{m=i}i=2906632+(a+2<<2)|0;b=2906632+(m+1<<2)|0;c[b>>2]=c[i>>2];c[i>>2]=0;c[670386]=m;lQ(c[b>>2]|0);L2050:do{if((c[22654]|0)==(c[680426]|0)){while(1){b=c[670386]|0;c[670386]=b-1;lQ(c[2906632+(b<<2)>>2]|0);lQ(c[2906632+(c[670386]<<2)>>2]|0);b=c[22652]|0;if(!((b|0)>-1&(b|0)<(h|0))){break}m=(c[670386]|0)-1|0;c[670386]=m;i=c[723820]|0;j=c[i+(c[g>>2]<<2)>>2]|0;f=b-1|0;c[22652]=f;if((b|0)>0){b=j;d=f;while(1){f=c[i+(b<<2)>>2]|0;l=d-1|0;c[22652]=l;if((d|0)>0){b=f;d=l}else{n=f;break}}}else{n=j}d=(c[723822]|0)+(n<<2)|0;if((c[d>>2]|0)==0){o=2906632+(m<<2)|0}else{o=2721640}c[d>>2]=c[o>>2];d=c[670386]|0;c[670386]=d-2;lQ(c[2906632+(d-1<<2)>>2]|0);if((c[22654]|0)!=(c[680426]|0)){break L2050}}f8()}}while(0);o=c[723820]|0;n=c[g>>2]|0;h=c[o+(n<<2)>>2]|0;if((h|0)==0){p=n;q=o;r=2906632+(a<<2)|0;s=c[r>>2]|0;t=q+(s<<2)|0;c[t>>2]=p;u=c[r>>2]|0;v=c[723822]|0;w=v+(u<<2)|0;c[w>>2]=55;c[g>>2]=0;return}n=h;h=o+(c[o+(c[e>>2]<<2)>>2]<<2)|0;e=o;while(1){o=c[h>>2]|0;d=c[723822]|0;b=d+(n<<2)|0;if((c[b>>2]|0)==0){c[b>>2]=c[d+(o<<2)>>2];x=c[723820]|0}else{x=e}d=c[x+(n<<2)>>2]|0;if((d|0)==0){break}n=d;h=x+(o<<2)|0;e=x}p=c[g>>2]|0;q=x;r=2906632+(a<<2)|0;s=c[r>>2]|0;t=q+(s<<2)|0;c[t>>2]=p;u=c[r>>2]|0;v=c[723822]|0;w=v+(u<<2)|0;c[w>>2]=55;c[g>>2]=0;return}function fY(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;b=c[670386]|0;if((b|0)>159998){rG();d=c[670386]|0}else{d=b}e=d+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=0;e=2906632+(a+2<<2)|0;lQ(c[e>>2]|0);d=c[22654]|0;c[e>>2]=d;e=c[(c[723820]|0)+(d<<2)>>2]|0;d=q8(c[(c[723822]|0)+(e<<2)>>2]|0,0)|0;f=2906632+(b+1<<2)|0;c[f>>2]=d;b=c[(c[723820]|0)+(e<<2)>>2]|0;if((b|0)==0){g=0;h=d}else{e=0;i=b;b=d;while(1){d=q8(c[(c[723822]|0)+(i<<2)>>2]|0,b)|0;c[f>>2]=d;j=e+1|0;k=c[(c[723820]|0)+(i<<2)>>2]|0;if((k|0)==0){g=j;h=d;break}else{e=j;i=k;b=d}}}c[f>>2]=r2(h,0)|0;h=c[670386]|0;if((h|0)>159998){rG();l=c[670386]|0}else{l=h}h=2906632+(a+3<<2)|0;b=2906632+(l+1<<2)|0;c[b>>2]=c[h>>2];c[h>>2]=0;c[670386]=l;lQ(c[b>>2]|0);if((c[22654]|0)!=(c[680426]|0)){m=c[f>>2]|0;n=2906632+(a<<2)|0;o=c[n>>2]|0;p=c[723820]|0;q=p+(o<<2)|0;c[q>>2]=m;r=c[n>>2]|0;s=c[723822]|0;t=s+(r<<2)|0;c[t>>2]=55;c[f>>2]=0;return}b=2906632+(a+1<<2)|0;while(1){l=c[670386]|0;c[670386]=l-1;lQ(c[2906632+(l<<2)>>2]|0);lQ(c[2906632+(c[670386]<<2)>>2]|0);l=c[22652]|0;if(!((l|0)>-1&(l|0)<(g|0))){u=1571;break}c[670386]=(c[670386]|0)-1;h=c[723820]|0;i=c[h+(c[f>>2]<<2)>>2]|0;e=l-1|0;c[22652]=e;if((l|0)>0){l=i;d=e;while(1){e=c[h+(l<<2)>>2]|0;k=d-1|0;c[22652]=k;if((d|0)>0){l=e;d=k}else{v=e;break}}}else{v=i}d=q8(c[b>>2]|0,c[(c[723822]|0)+(v<<2)>>2]|0)|0;c[(c[723822]|0)+(v<<2)>>2]=d;d=c[(c[723822]|0)+(v<<2)>>2]|0;l=c[670386]|0;c[670386]=l-1;h=q8(d,c[2906632+(l<<2)>>2]|0)|0;c[(c[723822]|0)+(v<<2)>>2]=h;h=c[670386]|0;c[670386]=h-1;lQ(c[2906632+(h<<2)>>2]|0);if((c[22654]|0)!=(c[680426]|0)){u=1577;break}}if((u|0)==1577){m=c[f>>2]|0;n=2906632+(a<<2)|0;o=c[n>>2]|0;p=c[723820]|0;q=p+(o<<2)|0;c[q>>2]=m;r=c[n>>2]|0;s=c[723822]|0;t=s+(r<<2)|0;c[t>>2]=55;c[f>>2]=0;return}else if((u|0)==1571){f8()}}function fZ(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;b=c[670386]|0;if((b|0)>159998){rG();d=c[670386]|0}else{d=b}e=d+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=0;lQ(c[2906632+(a+4<<2)>>2]|0);e=c[22652]|0;d=(e|0)>0;f=d?e:0;e=2906632+(b+1<<2)|0;c[e>>2]=0;if(d){d=2906632+(a+2<<2)|0;b=f;g=0;while(1){h=q8(c[d>>2]|0,g)|0;c[e>>2]=h;i=b-1|0;if((i|0)>0){b=i;g=h}else{j=h;break}}}else{j=0}c[e>>2]=q8(c[2906632+(a+5<<2)>>2]|0,j)|0;j=c[670386]|0;if((j|0)>159998){rG();k=c[670386]|0}else{k=j}j=2906632+(a+1<<2)|0;g=2906632+(k+1<<2)|0;c[g>>2]=c[j>>2];c[j>>2]=0;c[670386]=k;lQ(c[g>>2]|0);if((c[22654]|0)!=(c[680426]|0)){l=c[e>>2]|0;m=2906632+(a<<2)|0;n=c[m>>2]|0;o=c[723820]|0;p=o+(n<<2)|0;c[p>>2]=l;q=c[m>>2]|0;r=c[723822]|0;s=r+(q<<2)|0;c[s>>2]=55;c[e>>2]=0;return}g=2906632+(a+3<<2)|0;while(1){k=c[670386]|0;c[670386]=k-1;lQ(c[2906632+(k<<2)>>2]|0);lQ(c[2906632+(c[670386]<<2)>>2]|0);k=c[22652]|0;if(!((k|0)>-1&(k|0)<(f|0))){t=1588;break}c[670386]=(c[670386]|0)-1;j=c[723820]|0;b=c[j+(c[e>>2]<<2)>>2]|0;d=k-1|0;c[22652]=d;if((k|0)>0){k=b;h=d;while(1){d=c[j+(k<<2)>>2]|0;i=h-1|0;c[22652]=i;if((h|0)>0){k=d;h=i}else{u=d;break}}}else{u=b}h=q8(c[g>>2]|0,c[(c[723822]|0)+(u<<2)>>2]|0)|0;c[(c[723822]|0)+(u<<2)>>2]=h;h=c[(c[723822]|0)+(u<<2)>>2]|0;k=c[670386]|0;c[670386]=k-1;j=q8(h,c[2906632+(k<<2)>>2]|0)|0;c[(c[723822]|0)+(u<<2)>>2]=j;j=c[670386]|0;c[670386]=j-1;lQ(c[2906632+(j<<2)>>2]|0);if((c[22654]|0)!=(c[680426]|0)){t=1594;break}}if((t|0)==1594){l=c[e>>2]|0;m=2906632+(a<<2)|0;n=c[m>>2]|0;o=c[723820]|0;p=o+(n<<2)|0;c[p>>2]=l;q=c[m>>2]|0;r=c[723822]|0;s=r+(q<<2)|0;c[s>>2]=55;c[e>>2]=0;return}else if((t|0)==1588){f8()}}function f_(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;b=c[670386]|0;if((b|0)>159998){rG();d=c[670386]|0}else{d=b}e=d+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=0;e=2906632+(a+1<<2)|0;lQ(c[e>>2]|0);d=c[22654]|0;c[e>>2]=d;e=c[(c[723820]|0)+(d<<2)>>2]|0;d=q8(c[(c[723822]|0)+(e<<2)>>2]|0,0)|0;f=2906632+(b+1<<2)|0;c[f>>2]=d;b=c[(c[723820]|0)+(e<<2)>>2]|0;if((b|0)==0){g=d}else{e=d;d=b;while(1){b=q8(c[(c[723822]|0)+(d<<2)>>2]|0,e)|0;c[f>>2]=b;h=c[(c[723820]|0)+(d<<2)>>2]|0;if((h|0)==0){g=b;break}else{e=b;d=h}}}d=r2(g,0)|0;c[f>>2]=d;g=c[723820]|0;e=c[g+(d<<2)>>2]|0;if((e|0)==0){i=d;j=g;k=2906632+(a<<2)|0;l=c[k>>2]|0;m=j+(l<<2)|0;c[m>>2]=i;n=c[k>>2]|0;o=c[723822]|0;p=o+(n<<2)|0;c[p>>2]=55;c[f>>2]=0;return}g=2906632+(a+2<<2)|0;d=e;do{e=q8(c[g>>2]|0,c[(c[723822]|0)+(d<<2)>>2]|0)|0;c[(c[723822]|0)+(d<<2)>>2]=e;q=c[723820]|0;d=c[q+(d<<2)>>2]|0;}while((d|0)!=0);i=c[f>>2]|0;j=q;k=2906632+(a<<2)|0;l=c[k>>2]|0;m=j+(l<<2)|0;c[m>>2]=i;n=c[k>>2]|0;o=c[723822]|0;p=o+(n<<2)|0;c[p>>2]=55;c[f>>2]=0;return}function f$(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;b=2906632+(a+2<<2)|0;lQ(c[b>>2]|0);c[b>>2]=c[22654];lQ(c[2906632+(a+1<<2)>>2]|0);d=c[723820]|0;e=c[d+(c[d+(c[b>>2]<<2)>>2]<<2)>>2]|0;b=c[22652]|0;f=b-1|0;c[22652]=f;if((b|0)>0){b=e;g=f;while(1){f=c[d+(b<<2)>>2]|0;h=g-1|0;c[22652]=h;if((g|0)>0){b=f;g=h}else{i=f;break}}}else{i=e}e=c[670386]|0;if((e|0)>159998){rG();j=c[670386]|0;k=c[723820]|0}else{j=e;k=d}d=c[(c[723822]|0)+(i<<2)>>2]|0;i=j+1|0;c[670386]=i;c[2906632+(i<<2)>>2]=d;i=2906632+(a<<2)|0;c[k+(c[i>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[i>>2]<<2)>>2]=1;return}function f0(a){a=a|0;var b=0,d=0,e=0;b=2906632+(a+1<<2)|0;lQ(c[b>>2]|0);d=c[22654]|0;c[b>>2]=d;b=c[723820]|0;e=2906632+(a<<2)|0;c[b+(c[e>>2]<<2)>>2]=c[(c[723822]|0)+(c[b+(d<<2)>>2]<<2)>>2];c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}function f1(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=2906632+(a+1<<2)|0;lQ(c[b>>2]|0);d=c[22654]|0;c[b>>2]=d;lQ(d);d=c[723820]|0;e=c[d+(c[d+(c[b>>2]<<2)>>2]<<2)>>2]|0;b=c[670386]|0;if((b|0)>159997){rG();f=c[670386]|0}else{f=b}c[2906632+(f+1<<2)>>2]=0;b=f+2|0;c[670386]=b;c[2906632+(b<<2)>>2]=0;if((e|0)==0){g=b;h=0}else{b=e;while(1){e=q8(c[680426]|0,c[(c[723822]|0)+(b<<2)>>2]|0)|0;f=c[670386]|0;c[2906632+(f<<2)>>2]=e;d=q8(e,c[2906632+(f-1<<2)>>2]|0)|0;f=c[670386]|0;c[2906632+(f-1<<2)>>2]=d;e=c[(c[723820]|0)+(b<<2)>>2]|0;if((e|0)==0){g=f;h=d;break}else{b=e}}}c[670386]=g-1;g=r2(h,c[680026]|0)|0;h=2906632+(a<<2)|0;c[(c[723820]|0)+(c[h>>2]<<2)>>2]=g;c[(c[723822]|0)+(c[h>>2]<<2)>>2]=1;return}function f2(a){a=a|0;a=c[680440]|0;lY(q8(a,q8(c[679928]|0,c[680026]|0)|0)|0)}function f3(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;b=c[670386]|0;if((b|0)>159998){rG();d=c[670386]|0}else{d=b}e=d+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=0;lQ(c[2906632+(a+3<<2)>>2]|0);e=c[22652]|0;d=2906632+(b+1<<2)|0;c[d>>2]=0;if((e|0)>0){b=2906632+(a+2<<2)|0;f=e;e=0;while(1){g=q8(c[b>>2]|0,e)|0;c[d>>2]=g;h=f-1|0;if((h|0)>0){f=h;e=g}else{i=g;break}}}else{i=0}e=q8(c[2906632+(a+4<<2)>>2]|0,i)|0;c[d>>2]=e;i=q8(55,e)|0;c[d>>2]=i;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=i;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];c[d>>2]=0;return}function f4(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;b=2906632+(a+3<<2)|0;lQ(c[b>>2]|0);c[b>>2]=c[22654];d=a+1|0;lQ(c[2906632+(a+2<<2)>>2]|0);e=c[723820]|0;f=c[e+(c[e+(c[b>>2]<<2)>>2]<<2)>>2]|0;b=c[22652]|0;g=b-1|0;c[22652]=g;if((b|0)>0){b=f;h=g;while(1){g=c[e+(b<<2)>>2]|0;i=h-1|0;c[22652]=i;if((h|0)>0){b=g;h=i}else{j=g;break}}}else{j=f}f=c[670386]|0;if((f|0)>159998){rG();k=c[670386]|0;l=c[723820]|0}else{k=f;l=e}e=c[(c[723822]|0)+(j<<2)>>2]|0;j=k+1|0;c[670386]=j;c[2906632+(j<<2)>>2]=e;j=2906632+(a<<2)|0;c[l+(c[j>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[j>>2]<<2)>>2]=c[2906632+(d<<2)>>2];return}function f5(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;b=2906632+(a+4<<2)|0;lQ(c[b>>2]|0);c[b>>2]=c[22654];lQ(c[2906632+(a+3<<2)>>2]|0);d=c[723820]|0;e=c[d+(c[d+(c[b>>2]<<2)>>2]<<2)>>2]|0;b=c[22652]|0;f=b-1|0;c[22652]=f;if((b|0)>0){b=e;g=f;while(1){f=c[d+(b<<2)>>2]|0;h=g-1|0;c[22652]=h;if((g|0)>0){b=f;g=h}else{i=f;break}}}else{i=e}c[(c[723822]|0)+(i<<2)>>2]=c[2906632+(a+2<<2)>>2];i=2906632+(a<<2)|0;c[(c[723820]|0)+(c[i>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[i>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function f6(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;b=c[670386]|0;if((b|0)>159998){rG();d=c[670386]|0}else{d=b}e=d+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=0;e=a+1|0;d=2906632+(a+2<<2)|0;lQ(c[d>>2]|0);f=c[22654]|0;c[d>>2]=f;d=c[(c[723820]|0)+(f<<2)>>2]|0;f=q8(c[(c[723822]|0)+(d<<2)>>2]|0,0)|0;g=2906632+(b+1<<2)|0;c[g>>2]=f;b=c[(c[723820]|0)+(d<<2)>>2]|0;if((b|0)==0){h=f}else{d=f;f=b;while(1){b=q8(c[(c[723822]|0)+(f<<2)>>2]|0,d)|0;c[g>>2]=b;i=c[(c[723820]|0)+(f<<2)>>2]|0;if((i|0)==0){h=b;break}else{d=b;f=i}}}f=r2(h,0)|0;c[g>>2]=f;h=q8(55,f)|0;c[g>>2]=h;f=2906632+(a<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=h;c[(c[723822]|0)+(c[f>>2]<<2)>>2]=c[2906632+(e<<2)>>2];c[g>>2]=0;return}function f7(a){a=a|0;var b=0,d=0,e=0;b=2906632+(a+1<<2)|0;lQ(c[b>>2]|0);c[b>>2]=c[22654];d=2906632+(a+2<<2)|0;lQ(c[d>>2]|0);e=c[22654]|0;c[d>>2]=e;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=(c[b>>2]|0)==(e|0)?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function f8(){var a=0;a=c[680440]|0;lY(q8(a,q8(c[680072]|0,c[680026]|0)|0)|0)}function f9(a){a=a|0;var b=0;if((a|0)==2){c[678804]=r5(c[678804]|0)|0;return}else if((a|0)==3){rU(c[680462]|0);b=rf(q1(66792)|0,0)|0;c[679990]=b;rr(0,b,68080,c[680462]|0,0);b=rf(q1(66768)|0,0)|0;c[680032]=b;rr(0,b,68008,c[680462]|0,0);b=rf(q1(66752)|0,0)|0;c[680056]=b;rr(0,b,67992,c[680462]|0,0);b=rf(q1(66736)|0,0)|0;c[680034]=b;rr(0,b,67984,c[680462]|0,0);b=rf(q1(66648)|0,0)|0;c[679948]=b;rr(0,b,67976,c[680462]|0,0);b=rf(q1(66624)|0,0)|0;c[680030]=b;rr(0,b,67960,c[680462]|0,0)}else if((a|0)!=1){return}c[678804]=0;return}function ga(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+3<<2)>>2]|0);b=c[22652]|0;d=lX(c[2906632+(a+2<<2)>>2]|0)|0;c[678804]=0;if((d|0)==0){gh(c[679990]|0,b)}else{b=c[670386]|0;if((b|0)>159998){rG();e=c[670386]|0}else{e=b}b=e+1|0;c[670386]=b;c[2906632+(b<<2)>>2]=d;gi(d)}d=r2(c[678804]|0,c[2906632+(a+1<<2)>>2]|0)|0;c[678804]=d;b=c[723820]|0;e=2906632+(a<<2)|0;c[b+(c[e>>2]<<2)>>2]=c[b+(d<<2)>>2];d=c[723822]|0;c[d+(c[e>>2]<<2)>>2]=c[d+(c[678804]<<2)>>2];c[678804]=0;return}function gb(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+3<<2)>>2]|0);b=c[22652]|0;lV(c[2906632+(a+2<<2)>>2]|0);c[678804]=0;gh(c[680032]|0,b);b=r2(c[678804]|0,c[2906632+(a+1<<2)>>2]|0)|0;c[678804]=b;d=c[723820]|0;e=2906632+(a<<2)|0;c[d+(c[e>>2]<<2)>>2]=c[d+(b<<2)>>2];b=c[723822]|0;c[b+(c[e>>2]<<2)>>2]=c[b+(c[678804]<<2)>>2];c[678804]=0;return}function gc(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;b=2906632+(a+2<<2)|0;d=lX(c[b>>2]|0)|0;c[678804]=0;do{if((d|0)==0){e=c[22654]|0;f=c[22656]|0;if((e|0)==(c[680426]|0)&(f|0)==2){g=i0(44)|0;h=q8(g,c[678804]|0)|0;c[678804]=h;g=c[679990]|0;i=c[2906632+(c[670386]<<2)>>2]|0;c[678804]=q8(0,h)|0;h=q8(0,i)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=h;h=q8(g,rL(0)|0)|0;g=c[723822]|0;c[g+(c[g+(c[678804]<<2)>>2]<<2)>>2]=h;h=c[680056]|0;g=c[2906632+((c[670386]|0)-1<<2)>>2]|0;c[678804]=q8(0,c[678804]|0)|0;i=q8(h,g)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=i;break}i=(e|0)==(c[680026]|0)&(f|0)==0;f=i0(93)|0;c[678804]=q8(f,c[678804]|0)|0;if(i){break}i=i0(32)|0;c[678804]=q8(i,c[678804]|0)|0;i=i0(43)|0;c[678804]=q8(i,c[678804]|0)|0;i=i0(43)|0;c[678804]=q8(i,c[678804]|0)|0;i=i0(32)|0;c[678804]=q8(i,c[678804]|0)|0;i=c[b>>2]|0;f=i0(123)|0;e=q8(f,c[678804]|0)|0;c[678804]=e;f=c[680032]|0;c[678804]=q8(0,e)|0;e=q8(0,i)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=e;e=q8(f,rL(0)|0)|0;f=c[723822]|0;c[f+(c[f+(c[678804]<<2)>>2]<<2)>>2]=e;e=i0(125)|0;c[678804]=q8(e,c[678804]|0)|0}else{e=c[670386]|0;if((e|0)>159998){rG();j=c[670386]|0}else{j=e}e=j+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=d;e=i0(93)|0;c[678804]=q8(e,c[678804]|0)|0;e=i0(32)|0;c[678804]=q8(e,c[678804]|0)|0;e=i0(43)|0;c[678804]=q8(e,c[678804]|0)|0;e=i0(43)|0;c[678804]=q8(e,c[678804]|0)|0;e=i0(32)|0;c[678804]=q8(e,c[678804]|0)|0;gi(c[2906632+(c[670386]<<2)>>2]|0)}}while(0);d=r2(c[678804]|0,c[2906632+(a+1<<2)>>2]|0)|0;c[678804]=d;j=c[723820]|0;b=2906632+(a<<2)|0;c[j+(c[b>>2]<<2)>>2]=c[j+(d<<2)>>2];d=c[723822]|0;c[d+(c[b>>2]<<2)>>2]=c[d+(c[678804]<<2)>>2];c[678804]=0;return}function gd(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=2906632+(a+2<<2)|0;lV(c[b>>2]|0);c[678804]=0;d=c[22654]|0;e=c[22656]|0;do{if((d|0)==(c[680426]|0)&(e|0)==2){f=i0(44)|0;g=q8(f,c[678804]|0)|0;c[678804]=g;f=c[680032]|0;h=c[2906632+(c[670386]<<2)>>2]|0;c[678804]=q8(0,g)|0;g=q8(0,h)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=g;g=q8(f,rL(0)|0)|0;f=c[723822]|0;c[f+(c[f+(c[678804]<<2)>>2]<<2)>>2]=g;g=c[680034]|0;f=c[2906632+((c[670386]|0)-1<<2)>>2]|0;c[678804]=q8(0,c[678804]|0)|0;h=q8(g,f)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=h}else{h=(d|0)==(c[680026]|0)&(e|0)==0;f=i0(93)|0;c[678804]=q8(f,c[678804]|0)|0;if(h){break}h=i0(32)|0;c[678804]=q8(h,c[678804]|0)|0;h=i0(43)|0;c[678804]=q8(h,c[678804]|0)|0;h=i0(43)|0;c[678804]=q8(h,c[678804]|0)|0;h=i0(32)|0;f=q8(h,c[678804]|0)|0;c[678804]=f;h=c[680032]|0;g=c[b>>2]|0;c[678804]=q8(0,f)|0;f=q8(0,g)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=f;f=q8(h,rL(10)|0)|0;h=c[723822]|0;c[h+(c[h+(c[678804]<<2)>>2]<<2)>>2]=f}}while(0);b=r2(c[678804]|0,c[2906632+(a+1<<2)>>2]|0)|0;c[678804]=b;e=c[723820]|0;d=2906632+(a<<2)|0;c[e+(c[d>>2]<<2)>>2]=c[e+(b<<2)>>2];b=c[723822]|0;c[b+(c[d>>2]<<2)>>2]=c[b+(c[678804]<<2)>>2];c[678804]=0;return}function ge(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;d=2906632+(b+2<<2)|0;e=lX(c[d>>2]|0)|0;c[678804]=0;do{if((e|0)==0){f=c[22654]|0;g=c[22656]|0;if(!((f|0)==(c[680426]|0)&(g|0)==2)){h=(f|0)==(c[680026]|0)&(g|0)==0;g=i0(34)|0;c[678804]=q8(g,c[678804]|0)|0;if(h){break}h=i0(32)|0;c[678804]=q8(h,c[678804]|0)|0;h=i0(43)|0;c[678804]=q8(h,c[678804]|0)|0;h=i0(43)|0;c[678804]=q8(h,c[678804]|0)|0;h=i0(32)|0;c[678804]=q8(h,c[678804]|0)|0;h=c[d>>2]|0;g=i0(123)|0;f=q8(g,c[678804]|0)|0;c[678804]=f;g=c[680032]|0;c[678804]=q8(0,f)|0;f=q8(0,h)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=f;f=q8(g,rL(0)|0)|0;g=c[723822]|0;c[g+(c[g+(c[678804]<<2)>>2]<<2)>>2]=f;f=i0(125)|0;c[678804]=q8(f,c[678804]|0)|0;break}f=lX(c[2906632+(c[670386]<<2)>>2]|0)|0;c[678804]=0;if((f|0)!=0){g=c[670386]|0;if((g|0)>159998){rG();i=c[670386]|0}else{i=g}g=i+1|0;c[670386]=g;c[2906632+(g<<2)>>2]=f;f=i0(34)|0;c[678804]=q8(f,c[678804]|0)|0;f=i0(32)|0;c[678804]=q8(f,c[678804]|0)|0;f=i0(43)|0;c[678804]=q8(f,c[678804]|0)|0;f=i0(43)|0;c[678804]=q8(f,c[678804]|0)|0;f=i0(32)|0;c[678804]=q8(f,c[678804]|0)|0;f=i0(91)|0;c[678804]=q8(f,c[678804]|0)|0;gi(c[2906632+(c[670386]<<2)>>2]|0);f=c[680056]|0;g=c[2906632+(b+3<<2)>>2]|0;c[678804]=q8(0,c[678804]|0)|0;h=q8(f,g)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=h;break}h=(sk(c[22654]|0)|0)!=0;if(!(h&(c[22656]|0)==0)){h=i0(34)|0;c[678804]=q8(h,c[678804]|0)|0;h=i0(32)|0;c[678804]=q8(h,c[678804]|0)|0;h=i0(43)|0;c[678804]=q8(h,c[678804]|0)|0;h=i0(43)|0;c[678804]=q8(h,c[678804]|0)|0;h=i0(32)|0;c[678804]=q8(h,c[678804]|0)|0;h=i0(91)|0;c[678804]=q8(h,c[678804]|0)|0;h=c[2906632+(b+4<<2)>>2]|0;g=i0(123)|0;f=q8(g,c[678804]|0)|0;c[678804]=f;g=c[680032]|0;c[678804]=q8(0,f)|0;f=q8(0,h)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=f;f=q8(g,rL(0)|0)|0;g=c[723822]|0;c[g+(c[g+(c[678804]<<2)>>2]<<2)>>2]=f;f=i0(125)|0;g=q8(f,c[678804]|0)|0;c[678804]=g;f=c[680056]|0;h=c[2906632+(b+3<<2)>>2]|0;c[678804]=q8(0,g)|0;g=q8(f,h)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=g;break}g=kH(sl(c[22654]|0)|0,34)|0;h=a[g]|0;if(h<<24>>24==0){j=c[678804]|0}else{f=g;g=h;while(1){h=f+1|0;k=i0(g&255)|0;l=q8(k,c[678804]|0)|0;c[678804]=l;k=a[h]|0;if(k<<24>>24==0){j=l;break}else{f=h;g=k}}}g=c[679948]|0;f=c[2906632+(b+3<<2)>>2]|0;c[678804]=q8(0,j)|0;k=q8(g,f)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=k}else{k=c[670386]|0;if((k|0)>159998){rG();m=c[670386]|0}else{m=k}k=m+1|0;c[670386]=k;c[2906632+(k<<2)>>2]=e;k=i0(34)|0;c[678804]=q8(k,c[678804]|0)|0;k=i0(32)|0;c[678804]=q8(k,c[678804]|0)|0;k=i0(43)|0;c[678804]=q8(k,c[678804]|0)|0;k=i0(43)|0;c[678804]=q8(k,c[678804]|0)|0;k=i0(32)|0;c[678804]=q8(k,c[678804]|0)|0;gi(c[2906632+(c[670386]<<2)>>2]|0)}}while(0);e=r2(c[678804]|0,c[2906632+(b+1<<2)>>2]|0)|0;c[678804]=e;m=c[723820]|0;j=2906632+(b<<2)|0;c[m+(c[j>>2]<<2)>>2]=c[m+(e<<2)>>2];e=c[723822]|0;c[e+(c[j>>2]<<2)>>2]=c[e+(c[678804]<<2)>>2];c[678804]=0;return}function gf(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;d=2906632+(b+2<<2)|0;lV(c[d>>2]|0);c[678804]=0;e=c[22654]|0;f=c[22656]|0;do{if((e|0)==(c[680426]|0)&(f|0)==2){lV(c[2906632+(c[670386]<<2)>>2]|0);g=(sk(c[22654]|0)|0)!=0;if(!(g&(c[22656]|0)==0)){g=i0(34)|0;c[678804]=q8(g,c[678804]|0)|0;g=i0(32)|0;c[678804]=q8(g,c[678804]|0)|0;g=i0(43)|0;c[678804]=q8(g,c[678804]|0)|0;g=i0(43)|0;c[678804]=q8(g,c[678804]|0)|0;g=i0(32)|0;c[678804]=q8(g,c[678804]|0)|0;g=i0(91)|0;h=q8(g,c[678804]|0)|0;c[678804]=h;g=c[680032]|0;i=c[2906632+(b+4<<2)>>2]|0;c[678804]=q8(0,h)|0;h=q8(0,i)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=h;h=q8(g,rL(0)|0)|0;g=c[723822]|0;c[g+(c[g+(c[678804]<<2)>>2]<<2)>>2]=h;h=c[680034]|0;g=c[2906632+(b+3<<2)>>2]|0;c[678804]=q8(0,c[678804]|0)|0;i=q8(h,g)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=i;break}i=kH(sl(c[22654]|0)|0,34)|0;g=a[i]|0;if(g<<24>>24==0){j=c[678804]|0}else{h=i;i=g;while(1){g=h+1|0;k=i0(i&255)|0;l=q8(k,c[678804]|0)|0;c[678804]=l;k=a[g]|0;if(k<<24>>24==0){j=l;break}else{h=g;i=k}}}i=c[680030]|0;h=c[2906632+(b+3<<2)>>2]|0;c[678804]=q8(0,j)|0;k=q8(i,h)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=k}else{k=(e|0)==(c[680026]|0)&(f|0)==0;h=i0(34)|0;c[678804]=q8(h,c[678804]|0)|0;if(k){break}k=i0(32)|0;c[678804]=q8(k,c[678804]|0)|0;k=i0(43)|0;c[678804]=q8(k,c[678804]|0)|0;k=i0(43)|0;c[678804]=q8(k,c[678804]|0)|0;k=i0(32)|0;h=q8(k,c[678804]|0)|0;c[678804]=h;k=c[680032]|0;i=c[d>>2]|0;c[678804]=q8(0,h)|0;h=q8(0,i)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=h;h=q8(k,rL(10)|0)|0;k=c[723822]|0;c[k+(c[k+(c[678804]<<2)>>2]<<2)>>2]=h}}while(0);d=r2(c[678804]|0,c[2906632+(b+1<<2)>>2]|0)|0;c[678804]=d;f=c[723820]|0;e=2906632+(b<<2)|0;c[f+(c[e>>2]<<2)>>2]=c[f+(d<<2)>>2];d=c[723822]|0;c[d+(c[e>>2]<<2)>>2]=c[d+(c[678804]<<2)>>2];c[678804]=0;return}function gg(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+3<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+2<<2)>>2]|0);c[678804]=0;gh(c[679990]|0,b);b=r2(c[678804]|0,c[2906632+(a+1<<2)>>2]|0)|0;c[678804]=b;d=c[723820]|0;e=2906632+(a<<2)|0;c[d+(c[e>>2]<<2)>>2]=c[d+(b<<2)>>2];b=c[723822]|0;c[b+(c[e>>2]<<2)>>2]=c[b+(c[678804]<<2)>>2];c[678804]=0;return}function gh(b,e){b=b|0;e=e|0;var f=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0.0,Y=0.0,Z=0.0,_=0;f=i;i=i+48|0;j=f|0;k=f+32|0;l=c[22654]|0;if((l|0)<0){m=c[(c[723822]|0)+(l<<2)>>2]|0;n=(m-1|0)>>>0<128>>>0?m:145}else{n=d[90632+l|0]|0}L2269:do{switch(n|0){case 55:{c[678804]=q8(i0(123)|0,c[678804]|0)|0;c[678804]=q8(i0(97)|0,c[678804]|0)|0;c[678804]=q8(i0(114)|0,c[678804]|0)|0;c[678804]=q8(i0(114)|0,c[678804]|0)|0;c[678804]=q8(i0(97)|0,c[678804]|0)|0;c[678804]=q8(i0(121)|0,c[678804]|0)|0;c[678804]=q8(i0(125)|0,c[678804]|0)|0;o=c[680032]|0;p=0;break};case 57:{c[678804]=q8(i0(123)|0,c[678804]|0)|0;c[678804]=q8(i0(67)|0,c[678804]|0)|0;c[678804]=q8(i0(101)|0,c[678804]|0)|0;c[678804]=q8(i0(108)|0,c[678804]|0)|0;c[678804]=q8(i0(108)|0,c[678804]|0)|0;c[678804]=q8(i0(32)|0,c[678804]|0)|0;c[678804]=q8(i0(46)|0,c[678804]|0)|0;c[678804]=q8(i0(46)|0,c[678804]|0)|0;c[678804]=q8(i0(46)|0,c[678804]|0)|0;c[678804]=q8(i0(125)|0,c[678804]|0)|0;o=c[680032]|0;p=0;break};case 73:{c[678804]=q8(i0(123)|0,c[678804]|0)|0;c[678804]=q8(i0(114)|0,c[678804]|0)|0;c[678804]=q8(i0(101)|0,c[678804]|0)|0;c[678804]=q8(i0(99)|0,c[678804]|0)|0;c[678804]=q8(i0(111)|0,c[678804]|0)|0;c[678804]=q8(i0(114)|0,c[678804]|0)|0;c[678804]=q8(i0(100)|0,c[678804]|0)|0;c[678804]=q8(i0(125)|0,c[678804]|0)|0;o=c[680032]|0;p=0;break};case 138:{m=kQ(l)|0;q=(c[22654]|0)-5425|0;if((c[565104+(q<<6)>>2]|0)>2){r=c[22656]|0;if((c[565100+(q<<6)>>2]|0)>(r|0)){s=r;t=1708}else{u=b;v=r}}else{s=c[22656]|0;t=1708}if((t|0)==1708){u=c[680032]|0;v=s}L2280:do{if((v|0)>0){r=0;q=v;L2282:while(1){w=c[723822]|0;x=c[723820]|0;y=2906632+((c[670386]|0)-r<<2)|0;while(1){z=c[y>>2]|0;if((z|0)<0){A=c[w+(z<<2)>>2]|0;B=(A-1|0)>>>0<128>>>0?A:145}else{B=d[90632+z|0]|0}if((B|0)==145){C=w}else if((B|0)==138){break}else if((B|0)==1){C=x}else{D=q;E=r;break L2282}y=C+(z<<2)|0}y=z-5425|0;if((c[565108+(y<<6)>>2]|0)!=0){D=q;E=r;break}x=c[565096+(y<<6)>>2]|0;if((x|0)<0){A=c[w+(x<<2)>>2]|0;F=(A-1|0)>>>0<128>>>0?A:145}else{F=d[90632+x|0]|0}do{if((F|0)==142){G=q}else{if((c[565104+(y<<6)>>2]|0)==2){G=q;break}x=(aM(qX(c[565080+(y<<6)>>2]|0)|0,67672,5)|0)==0;A=c[22656]|0;if(x){G=A}else{D=A;E=r;break L2282}}}while(0);y=r+1|0;if((y|0)<(G|0)){r=y;q=G}else{D=G;E=y;break}}q=c[22654]|0;r=(D|0)==2;if(!((q|0)==(c[680426]|0)&r)){if(!r){H=q;I=D;J=E;break}if((q|0)==(c[680368]|0)){r=c[2906632+((c[670386]|0)-1<<2)>>2]|0;if((r|0)<0){y=c[(c[723822]|0)+(r<<2)>>2]|0;K=(y-1|0)>>>0<128>>>0?y:145}else{K=d[90632+r|0]|0}if((K|0)==10){L=r}else{t=1750}}else{t=1750}do{if((t|0)==1750){if((q|0)!=(c[680370]|0)){H=q;I=2;J=E;break L2280}r=c[2906632+((c[670386]|0)-1<<2)>>2]|0;y=(r|0)<0;if(y){w=c[(c[723822]|0)+(r<<2)>>2]|0;M=(w-1|0)>>>0<128>>>0?w:145}else{M=d[90632+r|0]|0}if((M|0)==15){L=r;break}if(y){y=c[(c[723822]|0)+(r<<2)>>2]|0;N=(y-1|0)>>>0<128>>>0?y:145}else{N=d[90632+r|0]|0}if((N|0)==97){L=r}else{H=q;I=2;J=E;break L2280}}}while(0);lV(L);gh(u,e);i=f;return}q=c[670386]|0;r=c[2906632+(q<<2)>>2]|0;if((u|0)!=(c[679990]|0)){lV(r);y=(sk(c[22654]|0)|0)!=0;if(!(y&(c[22656]|0)==0)){c[670386]=q;y=i0(91)|0;w=q8(y,c[678804]|0)|0;c[678804]=w;y=c[680032]|0;A=c[2906632+(c[670386]<<2)>>2]|0;c[678804]=q8(0,w)|0;w=q8(0,A)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=w;w=q8(y,rL(0)|0)|0;y=c[723822]|0;c[y+(c[y+(c[678804]<<2)>>2]<<2)>>2]=w;w=c[680034]|0;y=c[2906632+((c[670386]|0)-1<<2)>>2]|0;c[678804]=q8(0,c[678804]|0)|0;A=q8(w,y)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=A;i=f;return}A=i0(34)|0;c[678804]=q8(A,c[678804]|0)|0;A=kH(sl(c[22654]|0)|0,34)|0;y=a[A]|0;if(y<<24>>24==0){O=c[678804]|0}else{w=A;A=y;while(1){y=w+1|0;x=i0(A&255)|0;P=q8(x,c[678804]|0)|0;c[678804]=P;x=a[y]|0;if(x<<24>>24==0){O=P;break}else{w=y;A=x}}}A=c[680030]|0;w=c[2906632+((c[670386]|0)-1<<2)>>2]|0;c[678804]=q8(0,O)|0;x=q8(A,w)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=x;i=f;return}x=lX(r)|0;if((x|0)!=0){w=c[670386]|0;if((w|0)>159998){rG();Q=c[670386]|0}else{Q=w}w=Q+1|0;c[670386]=w;c[2906632+(w<<2)>>2]=x;x=i0(91)|0;c[678804]=q8(x,c[678804]|0)|0;gi(c[2906632+(c[670386]<<2)>>2]|0);c[670386]=q;x=c[680056]|0;w=c[2906632+(q-1<<2)>>2]|0;c[678804]=q8(0,c[678804]|0)|0;A=q8(x,w)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=A;i=f;return}A=(sk(c[22654]|0)|0)!=0;if(!(A&(c[22656]|0)==0)){c[670386]=q;A=i0(91)|0;w=q8(A,c[678804]|0)|0;c[678804]=w;A=c[679990]|0;x=c[2906632+(c[670386]<<2)>>2]|0;c[678804]=q8(0,w)|0;w=q8(0,x)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=w;w=q8(A,rL(0)|0)|0;A=c[723822]|0;c[A+(c[A+(c[678804]<<2)>>2]<<2)>>2]=w;w=c[680056]|0;A=c[2906632+((c[670386]|0)-1<<2)>>2]|0;c[678804]=q8(0,c[678804]|0)|0;x=q8(w,A)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=x;i=f;return}x=i0(34)|0;c[678804]=q8(x,c[678804]|0)|0;x=kH(sl(c[22654]|0)|0,34)|0;A=a[x]|0;if(A<<24>>24==0){R=c[678804]|0}else{w=x;x=A;while(1){A=w+1|0;y=i0(x&255)|0;P=q8(y,c[678804]|0)|0;c[678804]=P;y=a[A]|0;if(y<<24>>24==0){R=P;break}else{w=A;x=y}}}x=c[679948]|0;w=c[2906632+((c[670386]|0)-1<<2)>>2]|0;c[678804]=q8(0,R)|0;q=q8(x,w)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=q;i=f;return}else{H=c[22654]|0;I=v;J=0}}while(0);q=I-J|0;w=(m|0)==0;if(!((q|0)!=1|w)){x=i0(40)|0;r=q8(x,c[678804]|0)|0;c[678804]=r;x=c[2906632+((c[670386]|0)-J<<2)>>2]|0;c[678804]=q8(0,r)|0;r=q8(0,x)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=r;r=q8(u,rL(10)|0)|0;x=c[723822]|0;c[x+(c[x+(c[678804]<<2)>>2]<<2)>>2]=r;r=i0(32)|0;c[678804]=q8(r,c[678804]|0)|0;gj(c[22654]|0);r=i0(41)|0;c[678804]=q8(r,c[678804]|0)|0;o=u;p=J+1|0;break L2269}if(!((q|0)<2|w)){w=m&3;r=m>>>2;x=(r|0)<(e|0);if((q|0)>2|x){q=i0(40)|0;y=q8(q,c[678804]|0)|0;c[678804]=y;S=y}else{S=c[678804]|0}y=r+1|0;q=c[2906632+((c[670386]|0)-J<<2)>>2]|0;c[678804]=q8(0,S)|0;A=q8(0,q)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=A;A=q8(u,rL((w|0)==1?r:y)|0)|0;q=c[723822]|0;c[q+(c[q+(c[678804]<<2)>>2]<<2)>>2]=A;A=i0(32)|0;c[678804]=q8(A,c[678804]|0)|0;gj(c[22654]|0);A=i0(32)|0;q=q8(A,c[678804]|0)|0;c[678804]=q;A=c[2906632+((c[670386]|0)+~J<<2)>>2]|0;c[678804]=q8(0,q)|0;q=q8(0,A)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=q;q=q8(u,rL((w|0)==2?r:y)|0)|0;y=c[723822]|0;c[y+(c[y+(c[678804]<<2)>>2]<<2)>>2]=q;q=J+2|0;if(!(((c[22656]|0)-q|0)>2|x)){o=u;p=q;break L2269}x=i0(41)|0;c[678804]=q8(x,c[678804]|0)|0;o=u;p=q;break L2269}q=qX(c[565080+(H-5425<<6)>>2]|0)|0;x=a[q]|0;do{if(x<<24>>24>-1){if((bw(x<<24>>24|0)|0)!=0){break}T=a[q]|0;t=1771}else{T=x;t=1771}}while(0);do{if((t|0)==1771){if((T<<24>>24|0)==95|(T<<24>>24|0)==91|(T<<24>>24|0)==40){break}x=i0(40)|0;c[678804]=q8(x,c[678804]|0)|0;gk(H);x=i0(41)|0;c[678804]=q8(x,c[678804]|0)|0;o=u;p=J;break L2269}}while(0);gk(H);o=u;p=J;break};case 12:{x=i0(123)|0;c[678804]=q8(x,c[678804]|0)|0;x=i0(104)|0;c[678804]=q8(x,c[678804]|0)|0;x=i0(97)|0;c[678804]=q8(x,c[678804]|0)|0;x=i0(110)|0;c[678804]=q8(x,c[678804]|0)|0;x=i0(100)|0;c[678804]=q8(x,c[678804]|0)|0;x=i0(108)|0;c[678804]=q8(x,c[678804]|0)|0;x=i0(101)|0;c[678804]=q8(x,c[678804]|0)|0;x=i0(125)|0;c[678804]=q8(x,c[678804]|0)|0;o=c[680032]|0;p=0;break};case 48:case 136:case 47:{c[678804]=r2(c0(l,0,(e|0)>5|0)|0,0)|0;o=c[680032]|0;p=0;break};case 10:{x=(e|0)>5;if((ru(l)|0)<0&x){q=i0(41)|0;c[678804]=q8(q,c[678804]|0)|0}q=c[22652]|0;do{m=(q|0)%10|0;y=i0(((m|0)<0?-m|0:m)+48|0)|0;c[678804]=q8(y,c[678804]|0)|0;y=c[22652]|0;q=(y|0)/10|0;c[22652]=q;}while((y+9|0)>>>0>18>>>0);do{if((ru(c[22654]|0)|0)<0){q=i0(45)|0;y=q8(q,c[678804]|0)|0;c[678804]=y;if(!x){U=y;break}y=i0(40)|0;q=q8(y,c[678804]|0)|0;c[678804]=q;U=q}else{U=c[678804]|0}}while(0);c[678804]=r2(U,0)|0;o=c[680032]|0;p=0;break};case 99:{x=sp(l)|0;q=k|0;a0(q|0,67648,(y=i,i=i+8|0,c[y>>2]=16,y)|0)|0;i=y;m=j|0;a0(m|0,q|0,(y=i,i=i+8|0,c[y>>2]=x,y)|0)|0;i=y;y=a[m]|0;if(y<<24>>24!=0){x=m;m=y;do{x=x+1|0;y=i0(m&255)|0;c[678804]=q8(y,c[678804]|0)|0;m=a[x]|0;}while(m<<24>>24!=0)}o=c[680032]|0;p=0;break};case 143:{m=l-201|0;x=c[22656]|0;y=(m|0)<(x|0)?m:x;if((y|0)>0){q=~x;x=200-l|0;r=(x|0)<(q|0)?q:x;x=40;q=0;while(1){w=i0(x)|0;A=q8(w,c[678804]|0)|0;c[678804]=A;w=c[2906632+((c[670386]|0)-q<<2)>>2]|0;c[678804]=q8(0,A)|0;A=q8(0,w)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=A;A=q8(b,rL(0)|0)|0;w=c[723822]|0;c[w+(c[w+(c[678804]<<2)>>2]<<2)>>2]=A;A=q+1|0;if((A|0)<(y|0)){x=44;q=A}else{break}}V=44;W=~r}else{V=40;W=0}if((W|0)<(m|0)){q=V;x=W;while(1){A=i0(q)|0;c[678804]=q8(A,c[678804]|0)|0;A=x+1|0;if((A|0)<(m|0)){q=44;x=A}else{break}}}x=i0(41)|0;c[678804]=q8(x,c[678804]|0)|0;o=c[680032]|0;p=y;break};case 22:{x=i0(39)|0;c[678804]=q8(x,c[678804]|0)|0;x=kH(sl(c[22654]|0)|0,39)|0;q=a[x]|0;if(q<<24>>24!=0){m=x;x=q;do{m=m+1|0;q=i0(x&255)|0;c[678804]=q8(q,c[678804]|0)|0;x=a[m]|0;}while(x<<24>>24!=0)}x=i0(39)|0;c[678804]=q8(x,c[678804]|0)|0;o=c[680032]|0;p=0;break};case 15:{X=+g[5440];x=(e|0)>5;if(X<0.0&x){m=i0(40)|0;c[678804]=q8(m,c[678804]|0)|0;Y=+g[5440]}else{Y=X}m=ll(Y)|0;y=a[m]|0;if(y<<24>>24!=0){q=m;m=y;do{q=q+1|0;y=i0(m&255)|0;c[678804]=q8(y,c[678804]|0)|0;m=a[q]|0;}while(m<<24>>24!=0)}if(+g[5440]<0.0&x){m=i0(41)|0;c[678804]=q8(m,c[678804]|0)|0}o=c[680032]|0;p=0;break};case 97:{X=+h[2721];m=(e|0)>5;if(X<0.0&m){q=i0(40)|0;c[678804]=q8(q,c[678804]|0)|0;Z=+h[2721]}else{Z=X}q=lr(Z)|0;y=a[q]|0;if(y<<24>>24!=0){r=q;q=y;do{r=r+1|0;y=i0(q&255)|0;c[678804]=q8(y,c[678804]|0)|0;q=a[r]|0;}while(q<<24>>24!=0)}if(+h[2721]<0.0&m){q=i0(41)|0;c[678804]=q8(q,c[678804]|0)|0}o=c[680032]|0;p=0;break};case 56:{q=67600;r=123;do{q=q+1|0;x=i0(r&255)|0;c[678804]=q8(x,c[678804]|0)|0;r=a[q]|0;}while(r<<24>>24!=0);o=c[680032]|0;p=0;break};case 84:{r=67560;q=112;while(1){m=r+1|0;x=i0(q&255)|0;c[678804]=q8(x,c[678804]|0)|0;x=a[m]|0;if(x<<24>>24==0){o=b;p=0;break}else{r=m;q=x}}break};default:{ka(67480)}}}while(0);if((p|0)<(c[22656]|0)){_=p}else{i=f;return}do{p=i0(32)|0;b=q8(p,c[678804]|0)|0;c[678804]=b;p=c[2906632+((c[670386]|0)-_<<2)>>2]|0;c[678804]=q8(0,b)|0;b=q8(0,p)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=b;b=q8(o,rL(11)|0)|0;p=c[723822]|0;c[p+(c[p+(c[678804]<<2)>>2]<<2)>>2]=b;_=_+1|0;}while((_|0)<(c[22656]|0));if((e|0)<=10){i=f;return}e=c[678804]|0;c[678804]=sr(e,q8(i0(40)|0,0)|0)|0;e=i0(41)|0;c[678804]=q8(e,c[678804]|0)|0;i=f;return}function gi(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=i0(123)|0;c[678804]=q8(b,c[678804]|0)|0;do{if((a|0)<0){b=c[(c[723822]|0)+(a<<2)>>2]|0;if(!((b-1|0)>>>0>127>>>0&(b|0)==(c[680386]|0))){break}b=i0(101)|0;c[678804]=q8(b,c[678804]|0)|0;b=i0(114)|0;c[678804]=q8(b,c[678804]|0)|0;b=i0(114)|0;c[678804]=q8(b,c[678804]|0)|0;b=i0(111)|0;c[678804]=q8(b,c[678804]|0)|0;b=i0(114)|0;c[678804]=q8(b,c[678804]|0)|0;b=i0(32)|0;d=q8(b,c[678804]|0)|0;c[678804]=d;b=c[680032]|0;e=c[(c[723820]|0)+(a<<2)>>2]|0;c[678804]=q8(0,d)|0;d=q8(0,e)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=d;d=q8(b,rL(11)|0)|0;b=c[723822]|0;c[b+(c[b+(c[678804]<<2)>>2]<<2)>>2]=d;f=i0(125)|0;g=c[678804]|0;h=q8(f,g)|0;c[678804]=h;return}}while(0);d=i0(116)|0;c[678804]=q8(d,c[678804]|0)|0;d=i0(104)|0;c[678804]=q8(d,c[678804]|0)|0;d=i0(114)|0;c[678804]=q8(d,c[678804]|0)|0;d=i0(111)|0;c[678804]=q8(d,c[678804]|0)|0;d=i0(119)|0;c[678804]=q8(d,c[678804]|0)|0;d=i0(32)|0;b=q8(d,c[678804]|0)|0;c[678804]=b;d=c[680032]|0;c[678804]=q8(0,b)|0;b=q8(0,a)|0;c[(c[723822]|0)+(c[678804]<<2)>>2]=b;b=q8(d,rL(11)|0)|0;d=c[723822]|0;c[d+(c[d+(c[678804]<<2)>>2]<<2)>>2]=b;f=i0(125)|0;g=c[678804]|0;h=q8(f,g)|0;c[678804]=h;return}function gj(b){b=b|0;var d=0,e=0;d=a[qX(c[565080+(b-5425<<6)>>2]|0)|0]|0;do{if(d<<24>>24>-1){if((bw(d<<24>>24|0)|0)==0){break}e=i0(96)|0;c[678804]=q8(e,c[678804]|0)|0;gk(b);e=i0(96)|0;c[678804]=q8(e,c[678804]|0)|0;return}}while(0);gk(b);return}function gk(b){b=b|0;var e=0,f=0,g=0,h=0,i=0;e=b-5425|0;b=c[565096+(e<<6)>>2]|0;if((b|0)<0){f=c[(c[723822]|0)+(b<<2)>>2]|0;g=(f-1|0)>>>0<128>>>0?f:145}else{g=d[90632+b|0]|0}if((g|0)==138){gk(b);b=i0(95)|0;c[678804]=q8(b,c[678804]|0)|0}b=qX(c[565080+(e<<6)>>2]|0)|0;e=a[b]|0;if(e<<24>>24==0){return}else{h=b;i=e}do{h=h+1|0;e=i0(i&255)|0;c[678804]=q8(e,c[678804]|0)|0;i=a[h]|0;}while(i<<24>>24!=0);return}function gl(a){a=a|0;return}function gm(a){a=a|0;var b=0,d=0,e=0;b=2906632+(a+2<<2)|0;d=lX(c[b>>2]|0)|0;if((d|0)==0){e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=c[b>>2];c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}if((d|0)!=(c[680384]|0)){lY(d)}d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function gn(a){a=a|0;lY(c[680384]|0)}function go(a){a=a|0;var b=0,d=0;b=2906632+(a+1<<2)|0;if((lX(c[b>>2]|0)|0)==0){d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=c[b>>2];c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[680058];return}else{d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=c[680018];c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}}function gp(a){a=a|0;lY(c[2906632+(a+1<<2)>>2]|0)}function gq(a){a=a|0;var b=0,d=0,e=0;b=2906632+(a+1<<2)|0;d=lX(c[b>>2]|0)|0;if((d|0)==0){e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=c[b>>2];c[(c[723822]|0)+(c[e>>2]<<2)>>2]=c[679950];return}else{e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=c[680050];return}}function gr(a){a=a|0;lY(c[680020]|0)}function gs(a){a=a|0;lY(c[680020]|0)}function gt(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);if((c[22654]|0)==(c[2906632+(a+3<<2)>>2]|0)){b=c[670386]|0;d=c[2906632+(b+1-(ru(c[2906632+(a+1<<2)>>2]|0)|0)<<2)>>2]|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}else{ka(61616)}}function gu(a){a=a|0;var b=0;lQ(c[2906632+(a+3<<2)>>2]|0);if((c[22654]|0)==(c[679930]|0)){b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+2<<2)>>2];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}else{b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}}function gv(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=(c[565104+((c[22654]|0)-5425<<6)>>2]|0)-3|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=(c[565104+((c[22654]|0)-5425<<6)>>2]|0)-3|0;if((b|0)<(d|0)){e=c[680054]|0}else{e=(b|0)>(d|0)?c[680356]|0:c[680412]|0}d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function gw(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+2<<2)>>2];d=q8(c[680404]|0,c[2906632+(a+3<<2)>>2]|0)|0;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=d;return}function gx(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;lQ(c[2906632+(a+2<<2)>>2]|0);lQ(c[2906632+(a+4<<2)>>2]|0);b=(c[565104+((c[22654]|0)-5425<<6)>>2]|0)-3|0;lQ(c[2906632+(a+3<<2)>>2]|0);d=c[565104+((c[22654]|0)-5425<<6)>>2]|0;lQ(c[2906632+(a+1<<2)>>2]|0);e=(c[565104+((c[22654]|0)-5425<<6)>>2]|0)-3|0;if((b|0)>(e|0)){f=c[680386]|0;g=q1(61680)|0;h=q8(9,g)|0;i=q8(f,h)|0;lY(i)}if((e|0)>(d-3|0)){f=c[680386]|0;g=q1(61680)|0;h=q8(9,g)|0;i=q8(f,h)|0;lY(i)}else{i=rL(e-b|0)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=i;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}}function gy(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;lQ(c[2906632+(a+2<<2)>>2]|0);lQ(c[2906632+(a+4<<2)>>2]|0);b=(c[565104+((c[22654]|0)-5425<<6)>>2]|0)-3|0;lQ(c[2906632+(a+3<<2)>>2]|0);d=c[565104+((c[22654]|0)-5425<<6)>>2]|0;lQ(c[2906632+(a+1<<2)>>2]|0);e=(c[565104+((c[22654]|0)-5425<<6)>>2]|0)-3|0;if((b|0)>(e|0)){f=1900}else{if((e|0)>(d-3|0)){f=1900}else{g=2719720}}if((f|0)==1900){g=2721528}f=2906632+(a<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=c[g>>2];c[(c[723822]|0)+(c[f>>2]<<2)>>2]=1;return}function gz(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22654]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=lJ(b,c[22652]|0)|0;if((d|0)==0){b=c[680386]|0;lY(q8(b,q8(9,q1(61712)|0)|0)|0)}else{b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}}function gA(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[565104+((c[22654]|0)-5425<<6)>>2]|0;d=rL((b|0)==3?0:b-4|0)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function gB(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lH(c[22654]|0)|0;if((c[670386]|0)>159998){rG()}if((b|0)==0){d=c[680026]|0}else{d=q8(c[680402]|0,b)|0}b=(c[670386]|0)+1|0;c[670386]=b;c[2906632+(b<<2)>>2]=d;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;d=q8(c[680426]|0,c[22654]|0)|0;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=d;return}function gC(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22654]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=lI(b,c[22654]|0)|0;e=(c[670386]|0)>159998;if((d|0)==0){if(e){rG()}f=q8(c[680426]|0,c[22654]|0)|0;g=(c[670386]|0)+1|0;c[670386]=g;c[2906632+(g<<2)>>2]=f;g=q8(f,c[680026]|0)|0;c[2906632+(c[670386]<<2)>>2]=g;h=g}else{if(e){rG()}e=q8(c[680406]|0,c[22654]|0)|0;g=(c[670386]|0)+1|0;c[670386]=g;c[2906632+(g<<2)>>2]=e;g=q8(e,d)|0;c[2906632+(c[670386]<<2)>>2]=g;h=g}g=2906632+(a<<2)|0;c[(c[723820]|0)+(c[g>>2]<<2)>>2]=h;h=q8(c[680426]|0,b)|0;c[(c[723822]|0)+(c[g>>2]<<2)>>2]=h;return}function gD(a){a=a|0;var b=0,d=0,e=0,f=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22654]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[22654]|0;if((c[565104+(b-5425<<6)>>2]|0)<(c[565104+(d-5425<<6)>>2]|0)){if((c[670386]|0)>159998){rG()}e=c[680404]|0;f=q8(e,lH(b)|0)|0;e=(c[670386]|0)+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=f;e=q8(f,c[22654]|0)|0;f=2906632+(a<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=e;e=q8(c[680426]|0,b)|0;c[(c[723822]|0)+(c[f>>2]<<2)>>2]=e;return}e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=c[680026];if((b|0)==(d|0)){d=q8(c[680426]|0,b)|0;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=d;return}else{c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}}function gE(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}a=rL(-2147483648)|0;b=(c[670386]|0)+1|0;c[670386]=b;c[2906632+(b<<2)>>2]=a;return}function gF(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}a=rL(2147483647)|0;b=(c[670386]|0)+1|0;c[670386]=b;c[2906632+(b<<2)>>2]=a;return}function gG(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=rL((c[22652]|0)+b|0)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function gH(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=rL(b-(c[22652]|0)|0)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function gI(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=rL(aa(c[22652]|0,b)|0)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function gJ(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[22652]|0;if((d|0)==0){lY(q8(c[680442]|0,c[680424]|0)|0)}e=(b|0)%(d|0)|0;f=(b|0)/(d|0)|0;if((d|0)<0&(e|0)>0){g=1944}else{if((d|0)>0&(e|0)<0){g=1944}else{h=f}}if((g|0)==1944){h=f-1|0}f=rL(h)|0;h=2906632+(a<<2)|0;c[(c[723820]|0)+(c[h>>2]<<2)>>2]=f;c[(c[723822]|0)+(c[h>>2]<<2)>>2]=1;return}function gK(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[22652]|0;if((d|0)==0){lY(q8(c[680442]|0,c[680424]|0)|0)}else{e=rL((b|0)/(d|0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}}function gL(a){a=a|0;var b=0,d=0,e=0,f=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[22652]|0;if((d|0)==0){lY(q8(c[680442]|0,c[680424]|0)|0)}e=(b|0)%(d|0)|0;do{if(!((e|0)<0&(d|0)>0)){if((e|0)>0&(d|0)<0){break}b=rL(e)|0;f=2906632+(a<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[f>>2]<<2)>>2]=1;return}}while(0);f=rL(e+d|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=f;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function gM(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[22652]|0;if((d|0)==0){lY(q8(c[680442]|0,c[680424]|0)|0)}else{e=rL((b|0)%(d|0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}}function gN(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(-(c[22652]|0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function gO(a){a=a|0;var b=0,d=0,e=0,f=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[22652]|0;if((d|0)==0){lY(q8(c[680442]|0,c[680424]|0)|0)}if((c[670386]|0)>159998){rG()}e=rL((b|0)/(d|0)|0)|0;f=(c[670386]|0)+1|0;c[670386]=f;c[2906632+(f<<2)>>2]=e;f=q8(203,e)|0;c[2906632+(c[670386]<<2)>>2]=f;f=rL((b|0)%(d|0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=f;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(c[670386]<<2)>>2];return}function gP(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=rL(c[22652]&b)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function gQ(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=rL(c[22652]|b)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function gR(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=rL(c[22652]^b)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function gS(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(~c[22652])|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function gT(a){a=a|0;var b=0,d=0,e=0,f=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[22652]|0;if((d|0)>-1){e=rL(b<<d)|0;f=2906632+(a<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[f>>2]<<2)>>2]=1;return}else{f=rL(b>>-d)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=f;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}}function gU(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(1<<c[22652])|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function gV(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=(1<<c[22652]&b|0)!=0?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function gW(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}a=rL(-1)|0;b=(c[670386]|0)+1|0;c[670386]=b;c[2906632+(b<<2)>>2]=a;return}function gX(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=rL((c[22652]|0)+b|0)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function gY(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=rL(b-(c[22652]|0)|0)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function gZ(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(-(c[22652]|0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function g_(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=rL(aa(c[22652]|0,b)|0)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function g$(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[22652]|0;if((d|0)==0){lY(q8(c[680442]|0,c[680424]|0)|0)}else{e=rL((b>>>0)/(d>>>0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}}function g0(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[22652]|0;if((d|0)==0){lY(q8(c[680442]|0,c[680424]|0)|0)}else{e=rL((b>>>0)/(d>>>0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}}function g1(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[22652]|0;if((d|0)==0){lY(q8(c[680442]|0,c[680424]|0)|0)}else{e=rL((b>>>0)%(d>>>0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}}function g2(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[22652]|0;if((d|0)==0){lY(q8(c[680442]|0,c[680424]|0)|0)}else{e=rL((b>>>0)%(d>>>0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}}function g3(a){a=a|0;var b=0,d=0,e=0,f=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[22652]|0;if((d|0)==0){lY(q8(c[680442]|0,c[680424]|0)|0)}if((c[670386]|0)>159998){rG()}e=rL((b>>>0)/(d>>>0)|0)|0;f=(c[670386]|0)+1|0;c[670386]=f;c[2906632+(f<<2)>>2]=e;f=q8(203,e)|0;c[2906632+(c[670386]<<2)>>2]=f;f=rL((b>>>0)%(d>>>0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=f;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(c[670386]<<2)>>2];return}function g4(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=rL(c[22652]&b)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function g5(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=rL(c[22652]|b)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function g6(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=rL(c[22652]^b)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function g7(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(~c[22652])|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function g8(a){a=a|0;var b=0,d=0,e=0,f=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[22652]|0;if((d|0)>-1){e=rL((d|0)>31?0:b<<d)|0;f=2906632+(a<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[f>>2]<<2)>>2]=1;return}else{f=-d|0;d=rL((f|0)>31?0:b>>>(f>>>0))|0;f=2906632+(a<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[f>>2]<<2)>>2]=1;return}}function g9(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[22652]|0;lQ(c[2906632+(a+3<<2)>>2]|0);e=c[22652]|0;f=(d|0)%(e|0)|0;if((f|0)>-1){d=rL(b>>>((e-f|0)>>>0)|b<<f)|0;g=2906632+(a<<2)|0;c[(c[723820]|0)+(c[g>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[g>>2]<<2)>>2]=1;return}else{g=rL(b<<f+e|b>>>((-f|0)>>>0))|0;f=2906632+(a<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=g;c[(c[723822]|0)+(c[f>>2]<<2)>>2]=1;return}}function ha(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(1<<c[22652])|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hb(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=(1<<c[22652]&b|0)!=0?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hc(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(c[22652]&255)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hd(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(c[22652]&65535)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function he(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(c[22652]|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hf(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(c[22652]<<24>>24)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hg(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(c[22652]<<16>>16)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hh(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(c[22652]|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hi(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[22652]|0;e=rL(b)|0;b=q8(98,q8(e,rL(d)|0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hj(a){a=a|0;var b=0,d=0,e=0,f=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[723820]|0;d=c[b+(c[22654]<<2)>>2]|0;e=c[(c[723822]|0)+(d<<2)>>2]|0;f=2906632+(a<<2)|0;c[b+(c[f>>2]<<2)>>2]=c[b+(d<<2)>>2];d=q8(203,e)|0;c[(c[723822]|0)+(c[f>>2]<<2)>>2]=d;return}function hk(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(c[22652]&255)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hl(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(c[22652]&65535)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hm(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(c[22652]|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hn(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(c[22652]|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function ho(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(c[22652]|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hp(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(c[22652]|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hq(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[22652]|0;e=rL(b)|0;b=q8(98,q8(e,rL(d)|0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hr(a){a=a|0;var b=0,d=0,e=0,f=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[723820]|0;d=c[b+(c[22654]<<2)>>2]|0;e=c[(c[723822]|0)+(d<<2)>>2]|0;f=2906632+(a<<2)|0;c[b+(c[f>>2]<<2)>>2]=c[b+(d<<2)>>2];d=q8(203,e)|0;c[(c[723822]|0)+(c[f>>2]<<2)>>2]=d;return}function hs(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=(sp(c[22654]|0)|0)-12|0;d=b;sS(c[d+8>>2]|0);e=d+4|0;f=c[e>>2]|0;g=d|0;d=c[g>>2]|0;if((f|0)==0){c[723868]=d}else{c[f>>2]=d}d=c[g>>2]|0;if((d|0)!=0){c[d+4>>2]=c[e>>2]}vW(b);b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[679926];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];return}function ht(a){a=a|0;var b=0.0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=+g[5440];lQ(c[2906632+(a+1<<2)>>2]|0);d=lj(b+ +g[5440])|0;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}function hu(a){a=a|0;var b=0.0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=+g[5440];lQ(c[2906632+(a+1<<2)>>2]|0);d=lj(b- +g[5440])|0;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}function hv(a){a=a|0;var b=0.0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=+g[5440];lQ(c[2906632+(a+1<<2)>>2]|0);d=lj(b*+g[5440])|0;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}function hw(a){a=a|0;var b=0.0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=+g[5440];lQ(c[2906632+(a+1<<2)>>2]|0);d=lj(b/+g[5440])|0;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}function hx(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lj(-0.0- +g[5440])|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hy(a){a=a|0;var b=0.0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=+h[2721];lQ(c[2906632+(a+1<<2)>>2]|0);d=lp(b+ +h[2721])|0;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}function hz(a){a=a|0;var b=0.0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=+h[2721];lQ(c[2906632+(a+1<<2)>>2]|0);d=lp(b- +h[2721])|0;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}function hA(a){a=a|0;var b=0.0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=+h[2721];lQ(c[2906632+(a+1<<2)>>2]|0);d=lp(b*+h[2721])|0;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}function hB(a){a=a|0;var b=0.0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=+h[2721];lQ(c[2906632+(a+1<<2)>>2]|0);d=lp(b/+h[2721])|0;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}function hC(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lp(-0.0- +h[2721])|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hD(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lj(+T(+g[5440]))|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hE(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lj(+S(+g[5440]))|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hF(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lj(+U(+g[5440]))|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hG(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lj(+W(+g[5440]))|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hH(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lj(+V(+g[5440]))|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hI(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lj(+X(+g[5440]))|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hJ(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lj(+Z(+g[5440]))|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hK(a){a=a|0;var b=0.0,d=0,e=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=+g[5440];if(b>0.0){d=lj(+_(b))|0;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}else{e=c[680386]|0;lY(q8(e,q8(9,q1(61784)|0)|0)|0)}}function hL(a){a=a|0;var b=0.0,d=0,e=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=+g[5440];if(b<0.0){d=c[680386]|0;lY(q8(d,q8(9,q1(61784)|0)|0)|0)}else{d=lj(+Q(b))|0;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}}function hM(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(~~+g[5440])|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hN(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}a=q8(47,0)|0;c[886964]=a;b=q8(43707,0)|0;c[(c[723820]|0)+(a<<2)>>2]=b;b=c[886964]|0;a=(c[670386]|0)+1|0;c[670386]=a;c[2906632+(a<<2)>>2]=b;c[886964]=0;return}function hO(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}a=rL(24)|0;b=(c[670386]|0)+1|0;c[670386]=b;c[2906632+(b<<2)>>2]=a;return}function hP(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}a=rL(-125)|0;b=(c[670386]|0)+1|0;c[670386]=b;c[2906632+(b<<2)>>2]=a;return}function hQ(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}a=rL(128)|0;b=(c[670386]|0)+1|0;c[670386]=b;c[2906632+(b<<2)>>2]=a;return}function hR(a){a=a|0;var b=0,d=0,e=0.0,f=0,h=0;b=i;i=i+8|0;d=b|0;lQ(c[2906632+(a+1<<2)>>2]|0);e=+bh(+(+bo(+(+g[5440]),d|0)),24);f=(c[d>>2]|0)-24|0;c[d>>2]=f;if((c[670386]|0)>159998){rG()}d=cZ(e)|0;h=(c[670386]|0)+1|0;c[670386]=h;c[2906632+(h<<2)>>2]=d;d=rL(f)|0;f=2906632+(a<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=d;d=q8(203,c[2906632+(c[670386]<<2)>>2]|0)|0;c[(c[723822]|0)+(c[f>>2]<<2)>>2]=d;i=b;return}function hS(a){a=a|0;var b=0,d=0,e=0.0,f=0,g=0,h=0,i=0.0,j=0.0,k=0.0,l=0,m=0.0;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+2<<2)>>2]|0);d=c[22654]|0;do{if((d|0)==136){e=0.0}else{f=c[723820]|0;g=c[f+(d<<2)>>2]|0;h=c[723822]|0;if((g|0)==0){i=0.0}else{j=0.0;k=1.0;l=g;while(1){m=j+k*+((c[h+(l<<2)>>2]|0)-43705|0);g=c[f+(l<<2)>>2]|0;if((g|0)==0){i=m;break}else{j=m;k=k*1.0e4;l=g}}}if((c[h+(d<<2)>>2]|0)==47){e=i;break}e=-0.0-i}}while(0);d=lj(+bh(+e,b|0))|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function hT(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lp(+T(+h[2721]))|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hU(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lp(+S(+h[2721]))|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hV(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lp(+U(+h[2721]))|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hW(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lp(+W(+h[2721]))|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hX(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lp(+V(+h[2721]))|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hY(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lp(+X(+h[2721]))|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function hZ(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lp(+Z(+h[2721]))|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function h_(a){a=a|0;var b=0.0,d=0,e=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=+h[2721];if(b>0.0){d=lp(+_(b))|0;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}else{e=c[680386]|0;lY(q8(e,q8(9,q1(61784)|0)|0)|0)}}function h$(a){a=a|0;var b=0.0,d=0,e=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=+h[2721];if(b<0.0){d=c[680386]|0;lY(q8(d,q8(9,q1(61784)|0)|0)|0)}else{d=lp(+Q(b))|0;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}}function h0(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(~~+h[2721])|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function h1(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}a=rL(53)|0;b=(c[670386]|0)+1|0;c[670386]=b;c[2906632+(b<<2)>>2]=a;return}function h2(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}a=rL(-1021)|0;b=(c[670386]|0)+1|0;c[670386]=b;c[2906632+(b<<2)>>2]=a;return}function h3(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}a=rL(1024)|0;b=(c[670386]|0)+1|0;c[670386]=b;c[2906632+(b<<2)>>2]=a;return}function h4(a){a=a|0;var b=0,d=0,e=0.0,f=0,g=0;b=i;i=i+8|0;d=b|0;lQ(c[2906632+(a+1<<2)>>2]|0);e=+bh(+(+bo(+(+h[2721]),d|0)),53);f=(c[d>>2]|0)-53|0;c[d>>2]=f;if((c[670386]|0)>159998){rG()}d=cZ(e)|0;g=(c[670386]|0)+1|0;c[670386]=g;c[2906632+(g<<2)>>2]=d;d=rL(f)|0;f=2906632+(a<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=d;d=q8(203,c[2906632+(c[670386]<<2)>>2]|0)|0;c[(c[723822]|0)+(c[f>>2]<<2)>>2]=d;i=b;return}function h5(a){a=a|0;var b=0,d=0,e=0.0,f=0,g=0,h=0,i=0.0,j=0.0,k=0.0,l=0,m=0.0;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+2<<2)>>2]|0);d=c[22654]|0;do{if((d|0)==136){e=0.0}else{f=c[723820]|0;g=c[f+(d<<2)>>2]|0;h=c[723822]|0;if((g|0)==0){i=0.0}else{j=0.0;k=1.0;l=g;while(1){m=j+k*+((c[h+(l<<2)>>2]|0)-43705|0);g=c[f+(l<<2)>>2]|0;if((g|0)==0){i=m;break}else{j=m;k=k*1.0e4;l=g}}}if((c[h+(d<<2)>>2]|0)==47){e=i;break}e=-0.0-i}}while(0);d=lp(+bh(+e,b|0))|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function h6(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=c[22652]|0;if(b>>>0>1114111>>>0){d=c[680386]|0;lY(q8(d,q8(9,q1(61808)|0)|0)|0)}else{d=sm(b)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}}function h7(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(sl(c[22654]|0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function h8(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(c[22652]|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function h9(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(c[22652]|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function ia(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lj(+(c[22652]|0))|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function ib(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lp(+(c[22652]|0))|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function ic(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lj(+h[2721])|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function id(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=lp(+g[5440])|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function ie(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;b=c[2906632+(a+1<<2)>>2]|0;e=c[723822]|0;f=c[723820]|0;g=b;while(1){h=(g|0)<0;if(h){i=c[e+(g<<2)>>2]|0;j=(i-1|0)>>>0<128>>>0?i:145}else{j=d[90632+g|0]|0}if((j|0)==1){g=c[f+(g<<2)>>2]|0;continue}else if((j|0)==84){g=c[e+(c[f+(g<<2)>>2]<<2)>>2]|0;continue}else if((j|0)==138){i=g-5425|0;if((c[565104+(i<<6)>>2]|0)>2){break}if((c[565100+(i<<6)>>2]|0)!=0){break}k=c[565112+(i<<6)>>2]|0;if((k|0)==0){break}else{g=k;continue}}else{break}}do{if(h){j=c[e+(g<<2)>>2]|0;if((j-1|0)>>>0<128>>>0){break}else{l=j}while(1){m=(l|0)<0;if(m){j=c[e+(l<<2)>>2]|0;n=(j-1|0)>>>0<128>>>0?j:145}else{n=d[90632+l|0]|0}if((n|0)==138){j=l-5425|0;if((c[565104+(j<<6)>>2]|0)>2){break}if((c[565100+(j<<6)>>2]|0)!=0){break}k=c[565112+(j<<6)>>2]|0;if((k|0)==0){break}else{l=k;continue}}else if((n|0)==1){l=c[f+(l<<2)>>2]|0;continue}else if((n|0)==84){l=c[e+(c[f+(l<<2)>>2]<<2)>>2]|0;continue}else{break}}k=c[f+(g<<2)>>2]|0;if((l|0)==(c[680374]|0)){j=2906632+(a<<2)|0;c[f+(c[j>>2]<<2)>>2]=k;c[(c[723822]|0)+(c[j>>2]<<2)>>2]=1;return}if((l|0)==(c[680416]|0)){j=2906632+(a<<2)|0;c[f+(c[j>>2]<<2)>>2]=k;c[(c[723822]|0)+(c[j>>2]<<2)>>2]=c[680420];return}if(!m){break}j=c[e+(l<<2)>>2]|0;if((j-1|0)>>>0<128>>>0){break}else{o=j}while(1){if((o|0)<0){j=c[e+(o<<2)>>2]|0;p=(j-1|0)>>>0<128>>>0?j:145}else{p=d[90632+o|0]|0}if((p|0)==1){o=c[f+(o<<2)>>2]|0;continue}else if((p|0)==84){o=c[e+(c[f+(o<<2)>>2]<<2)>>2]|0;continue}else if((p|0)==138){j=o-5425|0;if((c[565104+(j<<6)>>2]|0)>2){break}if((c[565100+(j<<6)>>2]|0)!=0){break}i=c[565112+(j<<6)>>2]|0;if((i|0)==0){break}else{o=i;continue}}else{break}}if((o|0)==(c[680418]|0)){i=2906632+(a<<2)|0;c[f+(c[i>>2]<<2)>>2]=k;c[(c[723822]|0)+(c[i>>2]<<2)>>2]=c[680420];return}if((o|0)!=(c[680062]|0)){break}i=2906632+(a<<2)|0;c[f+(c[i>>2]<<2)>>2]=k;c[(c[723822]|0)+(c[i>>2]<<2)>>2]=c[680066];return}}while(0);o=2906632+(a<<2)|0;c[f+(c[o>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[o>>2]<<2)>>2]=c[679978];return}function ig(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;b=c[2906632+(a+1<<2)>>2]|0;e=c[723822]|0;f=c[723820]|0;g=b;while(1){h=(g|0)<0;if(h){i=c[e+(g<<2)>>2]|0;j=(i-1|0)>>>0<128>>>0?i:145}else{j=d[90632+g|0]|0}if((j|0)==84){g=c[e+(c[f+(g<<2)>>2]<<2)>>2]|0;continue}else if((j|0)==138){i=g-5425|0;if((c[565104+(i<<6)>>2]|0)>2){break}if((c[565100+(i<<6)>>2]|0)!=0){break}k=c[565112+(i<<6)>>2]|0;if((k|0)==0){break}else{g=k;continue}}else if((j|0)==1){g=c[f+(g<<2)>>2]|0;continue}else{break}}do{if(h){j=c[e+(g<<2)>>2]|0;if((j-1|0)>>>0<128>>>0){break}else{l=j}while(1){m=(l|0)<0;if(m){j=c[e+(l<<2)>>2]|0;n=(j-1|0)>>>0<128>>>0?j:145}else{n=d[90632+l|0]|0}if((n|0)==1){l=c[f+(l<<2)>>2]|0;continue}else if((n|0)==84){l=c[e+(c[f+(l<<2)>>2]<<2)>>2]|0;continue}else if((n|0)==138){j=l-5425|0;if((c[565104+(j<<6)>>2]|0)>2){break}if((c[565100+(j<<6)>>2]|0)!=0){break}k=c[565112+(j<<6)>>2]|0;if((k|0)==0){break}else{l=k;continue}}else{break}}k=c[f+(g<<2)>>2]|0;if((l|0)==(c[680374]|0)){j=2906632+(a<<2)|0;c[f+(c[j>>2]<<2)>>2]=k;c[(c[723822]|0)+(c[j>>2]<<2)>>2]=c[680376];return}if((l|0)==(c[680416]|0)){j=2906632+(a<<2)|0;c[f+(c[j>>2]<<2)>>2]=k;c[(c[723822]|0)+(c[j>>2]<<2)>>2]=1;return}if(!m){break}j=c[e+(l<<2)>>2]|0;if((j-1|0)>>>0<128>>>0){break}else{o=j}while(1){if((o|0)<0){j=c[e+(o<<2)>>2]|0;p=(j-1|0)>>>0<128>>>0?j:145}else{p=d[90632+o|0]|0}if((p|0)==1){o=c[f+(o<<2)>>2]|0;continue}else if((p|0)==84){o=c[e+(c[f+(o<<2)>>2]<<2)>>2]|0;continue}else if((p|0)==138){j=o-5425|0;if((c[565104+(j<<6)>>2]|0)>2){break}if((c[565100+(j<<6)>>2]|0)!=0){break}i=c[565112+(j<<6)>>2]|0;if((i|0)==0){break}else{o=i;continue}}else{break}}if((o|0)==(c[680418]|0)){i=2906632+(a<<2)|0;c[f+(c[i>>2]<<2)>>2]=k;c[(c[723822]|0)+(c[i>>2]<<2)>>2]=1;return}if((o|0)!=(c[680062]|0)){break}i=2906632+(a<<2)|0;c[f+(c[i>>2]<<2)>>2]=k;c[(c[723822]|0)+(c[i>>2]<<2)>>2]=c[680068];return}}while(0);o=2906632+(a<<2)|0;c[f+(c[o>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[o>>2]<<2)>>2]=c[679980];return}function ih(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}a=so(0)|0;b=(c[670386]|0)+1|0;c[670386]=b;c[2906632+(b<<2)>>2]=a;return}function ii(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=sp(c[22654]|0)|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=so(b+(c[22652]|0)|0)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function ij(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=sp(c[22654]|0)|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[22652]|0;e=so(b+((d-((b|0)%(d|0)|0)|0)%(d|0)|0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function ik(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=sp(c[22654]|0)|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=rL(b-(sp(c[22654]|0)|0)|0)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function il(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=sp(c[22654]|0)|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=(b|0)==(sp(c[22654]|0)|0);b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function im(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=sp(c[22654]|0)|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=sp(c[22654]|0)|0;if(b>>>0<d>>>0){e=c[680054]|0}else{e=b>>>0>d>>>0?c[680356]|0:c[680412]|0}d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function io(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=(b|0)==(c[22652]|0)?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function ip(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[22652]|0;if((b|0)<(d|0)){e=c[680054]|0}else{e=(b|0)>(d|0)?c[680356]|0:c[680412]|0}d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function iq(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=(b|0)==(c[22652]|0)?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function ir(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[22652]|0;if(b>>>0<d>>>0){e=c[680054]|0}else{e=b>>>0>d>>>0?c[680356]|0:c[680412]|0}d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function is(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=sl(c[22654]|0)|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=(b|0)==(sl(c[22654]|0)|0);b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=d?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function it(a){a=a|0;var b=0,d=0,e=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=sl(c[22654]|0)|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=sl(c[22654]|0)|0;if((b|0)<(d|0)){e=c[680054]|0}else{e=(b|0)>(d|0)?c[680356]|0:c[680412]|0}d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function iu(a){a=a|0;var b=0.0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=+g[5440];lQ(c[2906632+(a+1<<2)>>2]|0);d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b==+g[5440]?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function iv(a){a=a|0;var b=0.0,d=0.0,e=0,f=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=+g[5440];lQ(c[2906632+(a+1<<2)>>2]|0);d=+g[5440];if(b<d){e=c[680054]|0}else{e=b>d?c[680356]|0:c[680412]|0}f=2906632+(a<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[f>>2]<<2)>>2]=1;return}function iw(a){a=a|0;var b=0.0,d=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=+h[2721];lQ(c[2906632+(a+1<<2)>>2]|0);d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b==+h[2721]?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function ix(a){a=a|0;var b=0.0,d=0.0,e=0,f=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=+h[2721];lQ(c[2906632+(a+1<<2)>>2]|0);d=+h[2721];if(b<d){e=c[680054]|0}else{e=b>d?c[680356]|0:c[680412]|0}f=2906632+(a<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[f>>2]<<2)>>2]=1;return}function iy(a){a=a|0;var b=0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function iz(a){a=a|0;var b=0,d=0;b=2906632+(a+1<<2)|0;lQ(c[b>>2]|0);d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=c[b>>2];c[(c[723822]|0)+(c[d>>2]<<2)>>2]=c[2906632+(a+2<<2)>>2];return}function iA(a){a=a|0;var b=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[2906632+(a+1<<2)>>2];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=1;return}function iB(a){a=a|0;var b=0;if((c[670386]|0)>159998){rG()}a=sm(1114111)|0;b=(c[670386]|0)+1|0;c[670386]=b;c[2906632+(b<<2)>>2]=a;return}function iC(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=(iU(sl(c[22654]|0)|0)|0)!=0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function iD(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=(iT(sl(c[22654]|0)|0)|0)!=0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function iE(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=(iV(sl(c[22654]|0)|0)|0)!=0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function iF(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=(iW(sl(c[22654]|0)|0)|0)!=0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function iG(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=(iX(sl(c[22654]|0)|0)|0)!=0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function iH(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=sm(iY(sl(c[22654]|0)|0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function iI(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=sm(iZ(sl(c[22654]|0)|0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function iJ(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=sm(i_(sl(c[22654]|0)|0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function iK(a){a=a|0;var b=0,d=0;lQ(c[2906632+(a+1<<2)>>2]|0);b=rL(i$(sl(c[22654]|0)|0)|0)|0;d=2906632+(a<<2)|0;c[(c[723820]|0)+(c[d>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[d>>2]<<2)>>2]=1;return}function iL(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;lQ(c[2906632+(a+3<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[(c[723820]|0)+(c[22654]<<2)>>2]|0;if((b|0)>0){e=b;b=0;f=d;while(1){g=q8(c[(c[723822]|0)+(f<<2)>>2]|0,b)|0;h=e-1|0;i=c[(c[723820]|0)+(f<<2)>>2]|0;if((h|0)>0){e=h;b=g;f=i}else{j=g;k=i;break}}}else{j=0;k=d}d=r2(q8(c[2906632+(a+2<<2)>>2]|0,j)|0,k)|0;k=2906632+(a<<2)|0;c[(c[723820]|0)+(c[k>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[k>>2]<<2)>>2]=73;return}function iM(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=q8(73,0)|0;e=c[723820]|0;f=c[e+(c[22654]<<2)>>2]|0;if((b|0)>0){g=b;b=d;h=f;while(1){i=q8(c[(c[723822]|0)+(h<<2)>>2]|0,b)|0;j=c[723820]|0;k=g-1|0;l=c[j+(h<<2)>>2]|0;if((k|0)>0){g=k;b=i;h=l}else{m=i;n=l;o=j;break}}}else{m=d;n=f;o=e}e=r2(m,c[o+(n<<2)>>2]|0)|0;c[2906632+((c[670386]|0)-1<<2)>>2]=e;e=q8(203,c[(c[723822]|0)+(n<<2)>>2]|0)|0;n=c[670386]|0;c[2906632+(n<<2)>>2]=e;e=2906632+(a<<2)|0;c[(c[723820]|0)+(c[e>>2]<<2)>>2]=c[2906632+(n-1<<2)>>2];c[(c[723822]|0)+(c[e>>2]<<2)>>2]=c[2906632+(c[670386]<<2)>>2];return}function iN(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;lQ(c[2906632+(a+2<<2)>>2]|0);b=c[22652]|0;lQ(c[2906632+(a+1<<2)>>2]|0);d=c[723820]|0;e=c[d+(c[22654]<<2)>>2]|0;if((b|0)>0){f=b;b=e;while(1){g=f-1|0;h=c[d+(b<<2)>>2]|0;if((g|0)>0){f=g;b=h}else{i=h;break}}}else{i=e}e=2906632+(a<<2)|0;c[d+(c[e>>2]<<2)>>2]=c[(c[723822]|0)+(i<<2)>>2];c[(c[723822]|0)+(c[e>>2]<<2)>>2]=1;return}function iO(a){a=a|0;var b=0,d=0,e=0,f=0;b=c[670386]|0;if((b|0)>159998){rG();d=c[670386]|0}else{d=b}b=c[679970]|0;e=d+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=b;e=q8(b,c[2906632+(a+3<<2)>>2]|0)|0;c[2906632+(c[670386]<<2)>>2]=e;b=q8(e,c[2906632+(a+1<<2)>>2]|0)|0;e=c[670386]|0;c[2906632+(e<<2)>>2]=b;c[670386]=e-1;lQ(b);b=2906632+(a+2<<2)|0;c[b>>2]=q8(c[679940]|0,c[b>>2]|0)|0;e=2906632+(a+4<<2)|0;d=q8(c[679936]|0,c[e>>2]|0)|0;c[e>>2]=d;c[e>>2]=q8(d,rL(0)|0)|0;d=2906632+(a+5<<2)|0;c[d>>2]=q8(c[680070]|0,c[d>>2]|0)|0;f=q8(c[b>>2]|0,c[2906632+((c[670386]|0)-1<<2)>>2]|0)|0;b=c[670386]|0;c[2906632+(b-1<<2)>>2]=f;f=q8(c[e>>2]|0,c[2906632+(b<<2)>>2]|0)|0;c[2906632+(c[670386]<<2)>>2]=f;b=q8(c[d>>2]|0,f)|0;f=c[670386]|0;c[2906632+(f<<2)>>2]=b;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[2906632+(f-1<<2)>>2];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[2906632+(c[670386]<<2)>>2];return}function iP(a){a=a|0;var b=0,d=0,e=0,f=0;b=c[670386]|0;if((b|0)>159998){rG();d=c[670386]|0}else{d=b}b=c[679970]|0;e=d+1|0;c[670386]=e;c[2906632+(e<<2)>>2]=b;e=2906632+(a+4<<2)|0;d=q8(b,c[e>>2]|0)|0;c[2906632+(c[670386]<<2)>>2]=d;b=q8(d,c[2906632+(a+2<<2)>>2]|0)|0;d=c[670386]|0;c[2906632+(d<<2)>>2]=b;c[670386]=d-1;lQ(b);b=c[670386]|0;if((b|0)>159998){rG();f=c[670386]|0}else{f=b}b=c[679970]|0;d=f+1|0;c[670386]=d;c[2906632+(d<<2)>>2]=b;d=q8(b,c[e>>2]|0)|0;c[2906632+(c[670386]<<2)>>2]=d;e=q8(d,c[2906632+(a+1<<2)>>2]|0)|0;d=c[670386]|0;c[2906632+(d<<2)>>2]=e;c[670386]=d-1;lQ(e);e=2906632+(a+3<<2)|0;d=q8(c[680390]|0,c[e>>2]|0)|0;c[e>>2]=d;b=q8(d,c[2906632+((c[670386]|0)-3<<2)>>2]|0)|0;c[e>>2]=b;c[e>>2]=q8(b,c[2906632+((c[670386]|0)-1<<2)>>2]|0)|0;b=2906632+(a+5<<2)|0;d=q8(c[680392]|0,c[b>>2]|0)|0;c[b>>2]=d;f=q8(d,c[2906632+((c[670386]|0)-2<<2)>>2]|0)|0;c[b>>2]=f;c[b>>2]=q8(f,c[2906632+(c[670386]<<2)>>2]|0)|0;f=2906632+(a+6<<2)|0;d=q8(c[680070]|0,c[f>>2]|0)|0;c[f>>2]=d;c[f>>2]=q8(d,c[b>>2]|0)|0;b=2906632+(a<<2)|0;c[(c[723820]|0)+(c[b>>2]<<2)>>2]=c[e>>2];c[(c[723822]|0)+(c[b>>2]<<2)>>2]=c[f>>2];return}function iQ(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0,j=0;b=c[723822]|0;e=c[723820]|0;f=c[2906632+(a+2<<2)>>2]|0;while(1){if((f|0)<0){g=c[b+(f<<2)>>2]|0;h=(g-1|0)>>>0<128>>>0?g:145}else{h=d[90632+f|0]|0}if((h|0)==84){f=c[b+(c[e+(f<<2)>>2]<<2)>>2]|0;continue}else if((h|0)==138){g=f-5425|0;if((c[565104+(g<<6)>>2]|0)>2){break}if((c[565100+(g<<6)>>2]|0)!=0){break}i=c[565112+(g<<6)>>2]|0;if((i|0)==0){break}else{f=i;continue}}else if((h|0)==1){f=c[e+(f<<2)>>2]|0;continue}else{break}}h=c[2906632+(a+1<<2)>>2]|0;while(1){if((h|0)<0){i=c[b+(h<<2)>>2]|0;j=(i-1|0)>>>0<128>>>0?i:145}else{j=d[90632+h|0]|0}if((j|0)==138){i=h-5425|0;if((c[565104+(i<<6)>>2]|0)>2){break}if((c[565100+(i<<6)>>2]|0)!=0){break}g=c[565112+(i<<6)>>2]|0;if((g|0)==0){break}else{h=g;continue}}else if((j|0)==84){h=c[b+(c[e+(h<<2)>>2]<<2)>>2]|0;continue}else if((j|0)==1){h=c[e+(h<<2)>>2]|0;continue}else{break}}j=2906632+(a<<2)|0;c[e+(c[j>>2]<<2)>>2]=(f|0)==(h|0)?c[679930]|0:c[680382]|0;c[(c[723822]|0)+(c[j>>2]<<2)>>2]=1;return}function iR(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0;b=c[723822]|0;e=c[723820]|0;f=c[2906632+(a+1<<2)>>2]|0;while(1){if((f|0)<0){g=c[b+(f<<2)>>2]|0;h=(g-1|0)>>>0<128>>>0?g:145}else{h=d[90632+f|0]|0}if((h|0)==1){f=c[e+(f<<2)>>2]|0;continue}else if((h|0)==138){g=f-5425|0;if((c[565104+(g<<6)>>2]|0)>2){break}if((c[565100+(g<<6)>>2]|0)!=0){break}i=c[565112+(g<<6)>>2]|0;if((i|0)==0){break}else{f=i;continue}}else if((h|0)==84){f=c[b+(c[e+(f<<2)>>2]<<2)>>2]|0;continue}else{break}}e=rL(f)|0;f=2906632+(a<<2)|0;c[(c[723820]|0)+(c[f>>2]<<2)>>2]=e;c[(c[723822]|0)+(c[f>>2]<<2)>>2]=1;return}function iS(){var b=0,d=0,e=0,f=0;a[2906392]=a[2906392]|1;a[2906393]=a[2906393]|1;a[2906394]=a[2906394]|1;a[2906395]=a[2906395]|1;a[2906396]=a[2906396]|1;a[2906397]=a[2906397]|1;a[2906398]=a[2906398]|1;a[2906399]=a[2906399]|1;a[2906400]=a[2906400]|1;a[2906401]=a[2906401]|1;b=97;while(1){d=b+1|0;e=2906344+b|0;a[e]=a[e]|2;if((d|0)<123){b=d}else{break}}a[2906514]=a[2906514]|2;a[2906525]=a[2906525]|2;a[2906530]=a[2906530]|2;b=223;while(1){d=b+1|0;e=2906344+b|0;a[e]=a[e]|2;if((d|0)<247){b=d}else{break}}a[2906592]=a[2906592]|2;a[2906593]=a[2906593]|2;a[2906594]=a[2906594]|2;a[2906595]=a[2906595]|2;a[2906596]=a[2906596]|2;a[2906597]=a[2906597]|2;a[2906598]=a[2906598]|2;a[2906599]=a[2906599]|2;a[2906439]=a[2906439]|2;b=65;while(1){d=b+1|0;e=2906344+b|0;a[e]=a[e]|4;if((d|0)<91){b=d}else{f=192;break}}while(1){b=f+1|0;d=2906344+f|0;a[d]=a[d]|4;if((b|0)<215){f=b}else{break}}a[2906560]=a[2906560]|4;a[2906561]=a[2906561]|4;a[2906562]=a[2906562]|4;a[2906563]=a[2906563]|4;a[2906564]=a[2906564]|4;a[2906565]=a[2906565]|4;a[2906566]=a[2906566]|4;f=161;while(1){b=f+1|0;d=2906344+f|0;a[d]=a[d]|8;if((b|0)<192){f=b}else{break}}a[2906559]=a[2906559]|8;a[2906591]=a[2906591]|8;f=67624;b=58;do{f=f+1|0;d=2906344+(b<<24>>24)|0;a[d]=a[d]|8;b=a[f]|0;}while(b<<24>>24!=0);a[2906383]=a[2906383]|16;b=0;do{f=2906344+b|0;d=a[f]|0;if((d&7)!=0){a[f]=d|16}b=b+1|0;}while((b|0)<256);b=a[2906376]|32;a[2906376]=b;a[2906504]=a[2906504]|32;a[2906353]=a[2906353]|32;a[2906354]=a[2906354]|32;a[2906355]=a[2906355]|32;a[2906356]=a[2906356]|32;a[2906357]=a[2906357]|32;d=32;f=b;while(1){b=d+1|0;a[2906344+d|0]=f|64;if((b|0)>=127){break}d=b;f=a[2906344+b|0]|0}a[2906504]=a[2906504]|64;a[2906505]=a[2906505]|64;a[2906506]=a[2906506]|64;a[2906507]=a[2906507]|64;a[2906508]=a[2906508]|64;a[2906509]=a[2906509]|64;a[2906510]=a[2906510]|64;a[2906511]=a[2906511]|64;a[2906512]=a[2906512]|64;a[2906513]=a[2906513]|64;a[2906514]=a[2906514]|64;a[2906515]=a[2906515]|64;a[2906516]=a[2906516]|64;f=174;while(1){d=f+1|0;b=2906344+f|0;a[b]=a[b]|64;if((d|0)<256){f=d}else{break}}c[726650]=1;return}function iT(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0;if(b>>>0<256>>>0){d=(b|0)!=95&(a[2906344+(b&255)|0]&2)!=0;e=d&1;return e|0}else{f=1913;g=0}do{h=(g+1+f|0)/2|0;i=(c[26624+(h*12|0)>>2]|0)>(b|0);f=i?h-1|0:f;g=i?g:h;}while((g|0)!=(f|0));if(((c[26628+(f*12|0)>>2]|0)+(c[26624+(f*12|0)>>2]|0)|0)>(b|0)){j=c[26632+(f*12|0)>>2]|0}else{j=24784}d=(c[j>>2]|0)==1;e=d&1;return e|0}function iU(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;if(b>>>0<256>>>0){d=a[2906344+(b&255)|0]&4;return d|0}else{e=1913;f=0}do{g=(f+1+e|0)/2|0;h=(c[26624+(g*12|0)>>2]|0)>(b|0);e=h?g-1|0:e;f=h?f:g;}while((f|0)!=(e|0));if(((c[26628+(e*12|0)>>2]|0)+(c[26624+(e*12|0)>>2]|0)|0)>(b|0)){i=c[26632+(e*12|0)>>2]|0}else{i=24784}d=(1<<c[i>>2]&5|0)!=0|0;return d|0}function iV(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0;if(b>>>0<256>>>0){d=(b|0)!=95&(a[2906344+(b&255)|0]&6)!=0;e=d&1;return e|0}else{f=1913;g=0}do{h=(g+1+f|0)/2|0;i=(c[26624+(h*12|0)>>2]|0)>(b|0);f=i?h-1|0:f;g=i?g:h;}while((g|0)!=(f|0));if(((c[26628+(f*12|0)>>2]|0)+(c[26624+(f*12|0)>>2]|0)|0)>(b|0)){j=c[26632+(f*12|0)>>2]|0}else{j=24784}d=(c[j>>2]|0)<5;e=d&1;return e|0}function iW(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0;if(b>>>0<256>>>0){d=(b|0)!=39&((b|0)!=95&(a[2906344+(b&255)|0]&16)!=0);e=d&1;return e|0}else{f=1913;g=0}do{h=(g+1+f|0)/2|0;i=(c[26624+(h*12|0)>>2]|0)>(b|0);f=i?h-1|0:f;g=i?g:h;}while((g|0)!=(f|0));if(((c[26628+(f*12|0)>>2]|0)+(c[26624+(f*12|0)>>2]|0)|0)>(b|0)){j=c[26632+(f*12|0)>>2]|0}else{j=24784}d=(c[j>>2]|0)<11;e=d&1;return e|0}function iX(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0;if(b>>>0<256>>>0){d=a[2906344+(b&255)|0]&64;return d|0}else{e=1913;f=0}do{g=(f+1+e|0)/2|0;h=(c[26624+(g*12|0)>>2]|0)>(b|0);e=h?g-1|0:e;f=h?f:g;}while((f|0)!=(e|0));if(((c[26628+(e*12|0)>>2]|0)+(c[26624+(e*12|0)>>2]|0)|0)>(b|0)){i=c[26632+(e*12|0)>>2]|0}else{i=24784}d=(c[i>>2]|0)<23|0;return d|0}function iY(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;b=1913;d=0;do{e=(d+1+b|0)/2|0;f=(c[26624+(e*12|0)>>2]|0)>(a|0);b=f?e-1|0:b;d=f?d:e;}while((d|0)!=(b|0));if(((c[26628+(b*12|0)>>2]|0)+(c[26624+(b*12|0)>>2]|0)|0)<=(a|0)){g=24784;h=g+4|0;i=c[h>>2]|0;j=i+a|0;return j|0}g=c[26632+(b*12|0)>>2]|0;h=g+4|0;i=c[h>>2]|0;j=i+a|0;return j|0}function iZ(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;b=1913;d=0;do{e=(d+1+b|0)/2|0;f=(c[26624+(e*12|0)>>2]|0)>(a|0);b=f?e-1|0:b;d=f?d:e;}while((d|0)!=(b|0));if(((c[26628+(b*12|0)>>2]|0)+(c[26624+(b*12|0)>>2]|0)|0)<=(a|0)){g=24784;h=g+8|0;i=c[h>>2]|0;j=i+a|0;return j|0}g=c[26632+(b*12|0)>>2]|0;h=g+8|0;i=c[h>>2]|0;j=i+a|0;return j|0}function i_(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0;b=1913;d=0;do{e=(d+1+b|0)/2|0;f=(c[26624+(e*12|0)>>2]|0)>(a|0);b=f?e-1|0:b;d=f?d:e;}while((d|0)!=(b|0));if(((c[26628+(b*12|0)>>2]|0)+(c[26624+(b*12|0)>>2]|0)|0)<=(a|0)){g=24784;h=g+12|0;i=c[h>>2]|0;j=i+a|0;return j|0}g=c[26632+(b*12|0)>>2]|0;h=g+12|0;i=c[h>>2]|0;j=i+a|0;return j|0}function i$(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;b=1913;d=0;do{e=(d+1+b|0)/2|0;f=(c[26624+(e*12|0)>>2]|0)>(a|0);b=f?e-1|0:b;d=f?d:e;}while((d|0)!=(b|0));if(((c[26628+(b*12|0)>>2]|0)+(c[26624+(b*12|0)>>2]|0)|0)<=(a|0)){g=24784;h=g|0;i=c[h>>2]|0;return i|0}g=c[26632+(b*12|0)>>2]|0;h=g|0;i=c[h>>2]|0;return i|0}function i0(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0;b=i;if((a|0)<128){d=c[2904056+(a<<2)>>2]|0;i=b;return d|0}e=2906104+(((a|0)/65536|0)<<2)|0;f=c[e>>2]|0;do{if((f|0)==0){g=vV(1024)|0;h=g;c[e>>2]=h;if((g|0)==0){j3(0);j4(c[m>>2]|0,84288,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0);i=j;j5();return 0}else{wa(g|0,0,1024);k=h;break}}else{k=f}}while(0);f=k+((((a|0)/256|0|0)%256|0)<<2)|0;k=c[f>>2]|0;do{if((k|0)==0){e=vV(1024)|0;h=e;c[f>>2]=h;if((e|0)==0){j3(0);j4(c[m>>2]|0,84288,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0);i=j;j5();return 0}else{wa(e|0,0,1024);l=h;break}}else{l=k}}while(0);k=l+(((a|0)%256|0)<<2)|0;l=c[k>>2]|0;if((l|0)!=0){d=l;i=b;return d|0}l=c[680426]|0;j=q8(l,sm(a)|0)|0;c[k>>2]=j;d=j;i=b;return d|0}function i1(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;if((a|0)==3){iS();c[726526]=2905080;c[726270]=2904056;b=0;do{d=c[680426]|0;c[2904056+(b<<2)>>2]=q8(d,sm(b)|0)|0;b=b+1|0;}while((b|0)<128);return}else if((a|0)==2){b=0;do{d=2906104+(b<<2)|0;e=c[d>>2]|0;L3198:do{if((e|0)!=0){f=0;g=e;while(1){h=c[g+(f<<2)>>2]|0;if((h|0)!=0){i=r5(c[h>>2]|0)|0;c[c[(c[d>>2]|0)+(f<<2)>>2]>>2]=i;i=1;do{h=r5(c[(c[(c[d>>2]|0)+(f<<2)>>2]|0)+(i<<2)>>2]|0)|0;c[(c[(c[d>>2]|0)+(f<<2)>>2]|0)+(i<<2)>>2]=h;i=i+1|0;}while((i|0)<256)}i=f+1|0;if((i|0)>=256){break L3198}f=i;g=c[d>>2]|0}}}while(0);b=b+1|0;}while((b|0)<17);return}else if((a|0)==4){a=c[726526]|0;if((a|0)==0){return}else{j=1;k=a}while(1){a=c[k+(j<<2)>>2]|0;if((a|0)!=0){vW(a)}a=j+1|0;if((a|0)>=256){l=1;break}j=a;k=c[726526]|0}do{k=2906104+(l<<2)|0;j=c[k>>2]|0;if((j|0)!=0){a=0;b=j;while(1){j=c[b+(a<<2)>>2]|0;if((j|0)==0){m=b}else{vW(j);m=c[k>>2]|0}j=a+1|0;if((j|0)<256){a=j;b=m}else{break}}vW(m)}l=l+1|0;}while((l|0)<17);return}else{return}}function i2(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;b=a;a=sK(b)|0;if((a|0)<0){do{if(1<=(c[(c[723822]|0)+(a<<2)>>2]|0)){if((c[(c[723822]|0)+(a<<2)>>2]|0)>=129){e=2465;break}f=c[(c[723822]|0)+(a<<2)>>2]|0}else{e=2465}}while(0);if((e|0)==2465){f=145}g=f}else{g=d[90632+a|0]|0}L3241:do{switch(g|0){case 43:case 5:case 4:case 6:case 132:{break};case 147:{if((i2(c[(c[723820]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]|0)|0)!=0){h=(i2(c[(c[723820]|0)+(b<<2)>>2]|0)|0)!=0}else{h=0}i=h&1;j=i;return j|0};case 37:{i=i2(c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;j=i;return j|0};case 138:{f=565104+(a-5425<<6)|0;do{if((d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0)>=3){k=565104+(a-5425<<6)|0;if(((d[k]|d[k+1|0]<<8|d[k+2|0]<<16|d[k+3|0]<<24)-3|0)!=0){break}e=2474;break L3241}}while(0);i=0;j=i;return j|0};case 143:{e=2474;break};case 71:{f=565104+((c[(c[723822]|0)+(c[(c[723820]|0)+(a<<2)>>2]<<2)>>2]|0)-5425<<6)|0;if(((d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24)-3|0)!=0){e=2498;break L3241}f=c[(c[723820]|0)+(c[(c[723820]|0)+(a<<2)>>2]<<2)>>2]|0;while(1){if((f|0)==0){e=2496;break}if((i2(c[(c[723820]|0)+(c[(c[723822]|0)+(f<<2)>>2]<<2)>>2]|0)|0)==0){e=2493;break}f=c[(c[723820]|0)+(f<<2)>>2]|0}if((e|0)==2496){i=1;j=i;return j|0}else if((e|0)==2493){i=0;j=i;return j|0}break};default:{e=2498}}}while(0);if((e|0)==2498){i=0;j=i;return j|0}do{if((e|0)==2474){while(1){if((b|0)<0){if(1<=(c[(c[723822]|0)+(b<<2)>>2]|0)){l=(c[(c[723822]|0)+(b<<2)>>2]|0)<129}else{l=0}m=l^1}else{m=0}if(!m){e=2484;break}if((i2(c[(c[723820]|0)+(b<<2)>>2]|0)|0)==0){break}b=c[(c[723822]|0)+(b<<2)>>2]|0}if((e|0)==2484){break}i=0;j=i;return j|0}}while(0);i=1;j=i;return j|0}function i3(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;b=a;if((b|0)<0){do{if(1<=(c[(c[723822]|0)+(b<<2)>>2]|0)){if((c[(c[723822]|0)+(b<<2)>>2]|0)>=129){e=2512;break}f=c[(c[723822]|0)+(b<<2)>>2]|0}else{e=2512}}while(0);if((e|0)==2512){f=145}g=f}else{g=d[90632+b|0]|0}if((g|0)==143){h=b-201|0;i=h;return i|0}else if((g|0)==138){f=565100+(b-5425<<6)|0;h=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;i=h;return i|0}else if((g|0)==22){h=0;i=h;return i|0}else if((g|0)==145){if((c[(c[723822]|0)+(b<<2)>>2]|0)<0){do{if(1<=(c[(c[723822]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]|0)){if((c[(c[723822]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]|0)>=129){e=2523;break}j=c[(c[723822]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]|0}else{e=2523}}while(0);if((e|0)==2523){j=145}k=j}else{k=d[90632+(c[(c[723822]|0)+(b<<2)>>2]|0)|0]|0}if((k|0)==11){h=1;i=h;return i|0}else if((k|0)==147){h=2;i=h;return i|0}else{h=0;i=h;return i|0}}else{ka(61512);return 0}return 0}function i4(){i5(1);c[726004]=0;c[723682]=i6(0,0,i7(0,0,i8(c[723682]|0)|0)|0)|0;c[724900]=0;c[679904]=0;c[722536]=0;c[722540]=0;c[723682]=i9(c[723682]|0)|0;c[723686]=lK(0,0,c[723682]|0)|0;c[723682]=0;return}function i5(a){a=a|0;var b=0;b=a;if((b|0)==3|(b|0)==1){c[723860]=0;c[723864]=0;c[723866]=401;c[724900]=0;c[679904]=0;c[722536]=0;c[722540]=0;return}else if((b|0)==2){c[723860]=r5(c[723860]|0)|0;c[723864]=r5(c[723864]|0)|0;c[724900]=r5(c[724900]|0)|0;return}else{return}}function i6(a,b,e){a=a|0;b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0;f=a;a=b;b=e;if((b|0)<0){do{if(1<=(c[(c[723822]|0)+(b<<2)>>2]|0)){if((c[(c[723822]|0)+(b<<2)>>2]|0)>=129){g=2550;break}h=c[(c[723822]|0)+(b<<2)>>2]|0}else{g=2550}}while(0);if((g|0)==2550){h=145}i=h}else{i=d[90632+b|0]|0}switch(i|0){case 40:{i=c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0;while(1){if((i|0)==0){break}jV(f,a,c[(c[723822]|0)+(i<<2)>>2]|0);i=c[(c[723820]|0)+(i<<2)>>2]|0}break};case 31:{jX(f,a,c[(c[723820]|0)+(b<<2)>>2]|0);break};case 54:{i=c[(c[723820]|0)+(b<<2)>>2]|0;while(1){if((i|0)==0){break}jU(f,a,c[(c[723822]|0)+(i<<2)>>2]|0);i=c[(c[723820]|0)+(i<<2)>>2]|0}break};case 5:case 4:case 6:{j=jY(a,b)|0;k=j;return k|0};case 30:{j=jZ(f,a,b)|0;k=j;return k|0};case 47:case 136:case 48:case 11:case 147:case 143:case 138:case 10:case 97:case 9:case 144:case 22:{break};case 74:case 41:{jW(f,a,c[(c[723820]|0)+(b<<2)>>2]|0);break};case 145:{jU(f,a,b);break};case 42:{jU(f,a,c[(c[723820]|0)+(b<<2)>>2]|0);break};default:{ka(80368);return 0}}j=b;k=j;return k|0}function i7(a,b,e){a=a|0;b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0;f=a;a=b;b=e;if((b|0)<0){do{if(1<=(c[(c[723822]|0)+(b<<2)>>2]|0)){if((c[(c[723822]|0)+(b<<2)>>2]|0)>=129){g=2581;break}h=c[(c[723822]|0)+(b<<2)>>2]|0}else{g=2581}}while(0);if((g|0)==2581){h=145}i=h}else{i=d[90632+b|0]|0}switch(i|0){case 47:case 136:case 48:case 11:case 147:case 143:case 138:case 22:case 10:case 97:case 9:{break};case 145:{j=jO(f,a,b)|0;k=j;return k|0};case 31:{j=q8(31,jR(f,a,c[(c[723820]|0)+(b<<2)>>2]|0)|0)|0;k=j;return k|0};case 54:{i=c[(c[723820]|0)+(b<<2)>>2]|0;while(1){if((i|0)==0){break}h=jO(f,a,c[(c[723822]|0)+(i<<2)>>2]|0)|0;c[(c[723822]|0)+(i<<2)>>2]=h;i=c[(c[723820]|0)+(i<<2)>>2]|0}break};case 4:case 5:case 6:{j=jQ(a,c[(c[723820]|0)+(b<<2)>>2]|0)|0;k=j;return k|0};case 30:{jP(f,a,c[(c[723820]|0)+(b<<2)>>2]|0);break};default:{ka(81472);return 0}}j=b;k=j;return k|0}function i8(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0;b=a;if((b|0)<0){do{if(1<=(c[(c[723822]|0)+(b<<2)>>2]|0)){if((c[(c[723822]|0)+(b<<2)>>2]|0)>=129){e=2606;break}f=c[(c[723822]|0)+(b<<2)>>2]|0}else{e=2606}}while(0);if((e|0)==2606){f=145}g=f}else{g=d[90632+b|0]|0}switch(g|0){case 138:{if((b|0)==(c[680014]|0)){h=c[679930]|0;i=h;return i|0}g=565104+(b-5425<<6)|0;do{if((d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0)>=3){f=565112+(b-5425<<6)|0;do{if(5425<=(d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0)){e=565112+(b-5425<<6)|0;if((d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0)>=37425){break}e=565112+(b-5425<<6)|0;h=d[e]|d[e+1|0]<<8|d[e+2|0]<<16|d[e+3|0]<<24|0;i=h;return i|0}}while(0);f=565112+(b-5425<<6)|0;if((d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0)>=0){break}f=565112+(b-5425<<6)|0;h=c[(c[723820]|0)+((d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24)<<2)>>2]|0;i=h;return i|0}}while(0);h=b;i=h;return i|0};case 34:{g=i8(c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;h=jH(g,i8(c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]|0)|0,c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]|0)|0;i=h;return i|0};case 53:{g=i8(c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;f=i8(c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]|0)|0;e=c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]|0;if((g|0)!=(c[680046]|0)){ka(89304);return 0}h=jI(f,e,c[680026]|0)|0;i=h;return i|0};case 44:{e=i8(c[(c[723822]|0)+(c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]|0)|0;f=i8(c[(c[723820]|0)+(c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]|0)|0;g=i8(c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]|0)|0;a=c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]|0;j=a;while(1){if((j|0)==0){break}k=jJ(e,f,c[(c[723822]|0)+(j<<2)>>2]|0)|0;c[(c[723822]|0)+(j<<2)>>2]=k;j=c[(c[723820]|0)+(j<<2)>>2]|0}h=jH(f,g,a)|0;i=h;return i|0};case 30:{a=i8(c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]=a;h=jA(b)|0;i=h;return i|0};case 75:{h=c[679962]|0;i=h;return i|0};case 47:case 136:case 48:{h=b;i=h;return i|0};case 147:case 143:case 5:case 4:case 6:case 10:case 97:case 9:case 22:{h=b;i=h;return i|0};case 20:{h=c[680084]|0;i=h;return i|0};case 33:{a=c[(c[723820]|0)+(b<<2)>>2]|0;while(1){if((a|0)==0){break}g=i8(c[(c[723822]|0)+(a<<2)>>2]|0)|0;c[(c[723822]|0)+(a<<2)>>2]=g;a=c[(c[723820]|0)+(a<<2)>>2]|0}h=ju(c[(c[723820]|0)+(b<<2)>>2]|0)|0;i=h;return i|0};case 40:{a=q8(4,qZ()|0)|0;g=c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0;while(1){if((g|0)==0){break}jM(c[(c[723822]|0)+(g<<2)>>2]|0);g=c[(c[723820]|0)+(g<<2)>>2]|0}g=q8(q8(a,c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0,0)|0;h=q8(30,q8(g,q8(a,i8(c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0)|0)|0)|0;i=h;return i|0};case 32:{a=q8(4,qZ()|0)|0;jf(c[(c[723820]|0)+(b<<2)>>2]|0);h=q8(30,q8(q8(q8(a,q8(c[(c[723820]|0)+(b<<2)>>2]|0,0)|0)|0,0)|0,a)|0)|0;i=h;return i|0};case 31:{jG(c[(c[723820]|0)+(b<<2)>>2]|0);h=b;i=h;return i|0};case 145:{a=i8(c[(c[723822]|0)+(b<<2)>>2]|0)|0;c[(c[723822]|0)+(b<<2)>>2]=a;do{if((c[(c[723822]|0)+(b<<2)>>2]|0)!=(c[680084]|0)){if((c[(c[723822]|0)+(b<<2)>>2]|0)==(c[680076]|0)){break}do{if(5425<=(c[(c[723822]|0)+(b<<2)>>2]|0)){if((c[(c[723822]|0)+(b<<2)>>2]|0)>=37425){break}a=565104+((c[(c[723822]|0)+(b<<2)>>2]|0)-5425<<6)|0;if((d[a]|d[a+1|0]<<8|d[a+2|0]<<16|d[a+3|0]<<24|0)>=0){break}a=565104+((c[(c[723822]|0)+(b<<2)>>2]|0)-5425<<6)|0;if((-1-(d[a]|d[a+1|0]<<8|d[a+2|0]<<16|d[a+3|0]<<24)|0)!=0){break}h=i8(c[(c[723820]|0)+(b<<2)>>2]|0)|0;i=h;return i|0}}while(0);a=i8(c[(c[723820]|0)+(b<<2)>>2]|0)|0;c[(c[723820]|0)+(b<<2)>>2]=a;h=b;i=h;return i|0}}while(0);h=i8(c[(c[723820]|0)+(b<<2)>>2]|0)|0;i=h;return i|0};case 71:{h=jK(c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0,c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;i=h;return i|0};case 72:{h=jL(c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0,c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]|0,c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]|0)|0;i=h;return i|0};default:{ka(87248);return 0}}return 0}function i9(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0;b=a;if((b|0)<0){do{if(1<=(c[(c[723822]|0)+(b<<2)>>2]|0)){if((c[(c[723822]|0)+(b<<2)>>2]|0)>=129){e=5;break}f=c[(c[723822]|0)+(b<<2)>>2]|0}else{e=5}}while(0);if((e|0)==5){f=145}g=f}else{g=d[90632+b|0]|0}switch(g|0){case 54:{g=c[(c[723820]|0)+(b<<2)>>2]|0;while(1){if((g|0)==0){break}f=jC(c[(c[723822]|0)+(g<<2)>>2]|0)|0;c[(c[723822]|0)+(g<<2)>>2]=f;g=c[(c[723820]|0)+(g<<2)>>2]|0}break};case 30:{g=c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0;while(1){if((g|0)==0){break}f=i9(c[(c[723822]|0)+(g<<2)>>2]|0)|0;c[(c[723822]|0)+(g<<2)>>2]=f;g=c[(c[723820]|0)+(g<<2)>>2]|0}g=i9(c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]=g;break};case 31:{h=q8(31,jD(c[(c[723820]|0)+(b<<2)>>2]|0)|0)|0;i=h;return i|0};case 42:{h=q8(42,jC(c[(c[723820]|0)+(b<<2)>>2]|0)|0)|0;i=h;return i|0};case 145:{h=jC(b)|0;i=h;return i|0};case 40:{g=i9(c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]=g;g=c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0;while(1){if((g|0)==0){break}jE(c[(c[723822]|0)+(g<<2)>>2]|0);g=c[(c[723820]|0)+(g<<2)>>2]|0}break};case 74:{h=q8(74,jD(c[(c[723820]|0)+(b<<2)>>2]|0)|0)|0;i=h;return i|0};case 41:{h=q8(41,jD(c[(c[723820]|0)+(b<<2)>>2]|0)|0)|0;i=h;return i|0};case 144:{h=jF(b-401|0)|0;i=h;return i|0};case 47:case 136:case 48:case 11:case 147:case 143:case 138:case 10:case 97:case 9:case 22:{break};default:{ka(52640);return 0}}h=b;i=h;return i|0}function ja(){var a=0,b=0,d=0;a=sq(c[34640]|0)|0;b=a+(sq(c[723838]|0)|0)|0;a=0;kx(82040,b+(sq(c[670402]|0)|0)|0);while(1){if((c[34640]|0)==0){break}b=jb(c[(c[723822]|0)+(c[34640]<<2)>>2]|0)|0;c[(c[723822]|0)+(c[34640]<<2)>>2]=b;b=c[(c[723822]|0)+(c[34640]<<2)>>2]|0;while(1){if((b|0)==0){break}jc(c[(c[723822]|0)+(b<<2)>>2]|0);b=c[(c[723820]|0)+(b<<2)>>2]|0}b=a;a=b+1|0;ky(b);c[34640]=c[(c[723820]|0)+(c[34640]<<2)>>2]}while(1){if((c[723838]|0)==0){break}jd(c[(c[723822]|0)+(c[723838]<<2)>>2]|0);b=a;a=b+1|0;ky(b);c[723838]=c[(c[723820]|0)+(c[723838]<<2)>>2]}while(1){if((c[670402]|0)==0){break}b=c[(c[723822]|0)+(c[670402]<<2)>>2]|0;while(1){if((b|0)==0){break}d=je(c[(c[723822]|0)+(b<<2)>>2]|0)|0;c[(c[723822]|0)+(b<<2)>>2]=d;b=c[(c[723820]|0)+(b<<2)>>2]|0}b=a;a=b+1|0;ky(b);c[670402]=c[(c[723820]|0)+(c[670402]<<2)>>2]}kz();return}function jb(a){a=a|0;var b=0,d=0,e=0,f=0;b=a;a=0;while(1){if((b|0)==0){break}d=c[(c[723822]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]|0;while(1){do{if((d|0)<0){if(1<=(c[(c[723822]|0)+(d<<2)>>2]|0)){if((c[(c[723822]|0)+(d<<2)>>2]|0)<129){e=0;break}}e=(c[(c[723822]|0)+(d<<2)>>2]|0)==(c[680076]|0)}else{e=0}}while(0);if(!e){break}d=c[(c[723820]|0)+(d<<2)>>2]|0}c[(c[723822]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]=d;if((se(d)|0)!=0){f=c[(c[723820]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]|0;while(1){if((f|0)==0){break}jf(c[(c[723822]|0)+(f<<2)>>2]|0);f=c[(c[723820]|0)+(f<<2)>>2]|0}a=q8(c[(c[723822]|0)+(b<<2)>>2]|0,a)|0}else{f=c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]|0;d=jz(c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]|0)|0;c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]=d;a=jt(f,d,a)|0}b=c[(c[723820]|0)+(b<<2)>>2]|0}return a|0}function jc(b){b=b|0;var d=0,e=0;d=b;b=rg(c[(c[723820]|0)+(c[(c[723822]|0)+(d<<2)>>2]<<2)>>2]|0)|0;e=c[(c[723820]|0)+(d<<2)>>2]|0;d=sq(c[(c[723822]|0)+(c[(c[723822]|0)+(e<<2)>>2]<<2)>>2]|0)|0;if((b|0)==0){ka(53928)}else{i5(1);c[726004]=b;e=jg(1,d,0,e)|0;jh(b,d,0,d,i6(d,0,ji(d,e)|0)|0);e=565112+(b-5425<<6)|0;w=0;a[e]=w&255;w=w>>8;a[e+1|0]=w&255;w=w>>8;a[e+2|0]=w&255;w=w>>8;a[e+3|0]=w&255;return}}function jd(b){b=b|0;var e=0,f=0,g=0;e=b;b=565112+(e-5425<<6)|0;f=d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0;b=sq(c[(c[723822]|0)+(c[(c[723822]|0)+(f<<2)>>2]<<2)>>2]|0)|0;i5(1);c[726004]=e;g=f;while(1){if((g|0)==0){break}jf(c[(c[723822]|0)+(g<<2)>>2]|0);g=c[(c[723820]|0)+(g<<2)>>2]|0}f=jg(1,b,0,f)|0;jh(e,b,0,b,i6(b,0,ji(b,f)|0)|0);f=565112+(e-5425<<6)|0;w=0;a[f]=w&255;w=w>>8;a[f+1|0]=w&255;w=w>>8;a[f+2|0]=w&255;w=w>>8;a[f+3|0]=w&255;return}function je(a){a=a|0;var b=0,d=0,e=0;b=a;a=c[(c[723822]|0)+(b<<2)>>2]|0;d=c[(c[723820]|0)+(b<<2)>>2]|0;b=sq(c[(c[723822]|0)+(c[(c[723822]|0)+(d<<2)>>2]<<2)>>2]|0)|0;i5(1);e=d;while(1){if((e|0)==0){break}jf(c[(c[723822]|0)+(e<<2)>>2]|0);e=c[(c[723820]|0)+(e<<2)>>2]|0}d=jg(1,b,0,d)|0;jh(a,b,0,b,i6(b,0,ji(b,d)|0)|0);return a|0}function jf(a){a=a|0;var b=0;b=a;a=jz(c[(c[723820]|0)+(b<<2)>>2]|0)|0;c[(c[723820]|0)+(b<<2)>>2]=a;return}function jg(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;f=a;a=b;b=d;d=e;e=0;g=0;while(1){if((a|0)<=0){break}h=f;f=h+1|0;g=q8(h+401|0,g)|0;a=a-1|0}while(1){if((d|0)==0){break}a=q8(c[(c[723822]|0)+(c[(c[723822]|0)+(d<<2)>>2]<<2)>>2]|0,g)|0;e=q8(q8(a,q8(b,c[(c[723820]|0)+(c[(c[723822]|0)+(d<<2)>>2]<<2)>>2]|0)|0)|0,e)|0;d=c[(c[723820]|0)+(d<<2)>>2]|0}return r2(e,0)|0}function jh(b,e,f,g,h){b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;var i=0;i=b;b=e;e=h;c[724900]=f;c[679904]=sq(c[724900]|0)|0;c[722536]=g;c[722540]=b;g=565100+(i-5425<<6)|0;w=b+(c[679904]|0)|0;a[g]=w&255;w=w>>8;a[g+1|0]=w&255;w=w>>8;a[g+2|0]=w&255;w=w>>8;a[g+3|0]=w&255;e=i9(e)|0;g=565100+(i-5425<<6)|0;b=565116+(i-5425<<6)|0;w=lK(i,d[g]|d[g+1|0]<<8|d[g+2|0]<<16|d[g+3|0]<<24|0,e)|0;a[b]=w&255;w=w>>8;a[b+1|0]=w&255;w=w>>8;a[b+2|0]=w&255;w=w>>8;a[b+3|0]=w&255;return}function ji(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0;d=a;a=b;b=0;e=a;a=c[(c[723820]|0)+(a<<2)>>2]|0;c[(c[723820]|0)+(e<<2)>>2]=0;if((jj(c[(c[723822]|0)+(e<<2)>>2]|0)|0)!=0){while(1){if((a|0)!=0){f=(jj(c[(c[723822]|0)+(a<<2)>>2]|0)|0)!=0}else{f=0}if(!f){break}g=c[(c[723820]|0)+(a<<2)>>2]|0;c[(c[723820]|0)+(a<<2)>>2]=e;e=a;a=g}b=jk(d,r2(e,0)|0)|0}else{f=(c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(e<<2)>>2]<<2)>>2]<<2)>>2]<<2)>>2]|0)-401|0;g=jl(c[(c[723822]|0)+(e<<2)>>2]|0)|0;if((jm(g)|0)!=0){h=i3(g)|0;i=i7(d,c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(e<<2)>>2]<<2)>>2]<<2)>>2]|0,g)|0;while(1){do{if((a|0)!=0){if((jj(c[(c[723822]|0)+(a<<2)>>2]|0)|0)!=0){j=0;break}if((f|0)!=((c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]<<2)>>2]<<2)>>2]|0)-401|0)){j=0;break}k=jl(c[(c[723822]|0)+(a<<2)>>2]|0)|0;g=k;if((jm(k)|0)==0){j=0;break}j=(jn(g,i)|0)!=0}else{j=0}}while(0);if(!j){break}k=c[(c[723820]|0)+(a<<2)>>2]|0;c[(c[723820]|0)+(a<<2)>>2]=e;e=a;a=k}e=r2(e,0)|0;j=e;while(1){if((j|0)==0){break}jo(d,h,c[(c[723822]|0)+(j<<2)>>2]|0);j=c[(c[723820]|0)+(j<<2)>>2]|0}b=q8(41,q8(f+401|0,q8(i,ji(d+h|0,e)|0)|0)|0)|0}else{if((jp(g)|0)!=0){h=i3(g)|0;i=i7(d,c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(e<<2)>>2]<<2)>>2]<<2)>>2]|0,g)|0;while(1){do{if((a|0)!=0){if((jj(c[(c[723822]|0)+(a<<2)>>2]|0)|0)!=0){l=0;break}if((f|0)!=((c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]<<2)>>2]<<2)>>2]|0)-401|0)){l=0;break}j=jl(c[(c[723822]|0)+(a<<2)>>2]|0)|0;g=j;if((jp(j)|0)==0){l=0;break}l=(jq(g,i)|0)!=0}else{l=0}}while(0);if(!l){break}j=c[(c[723820]|0)+(a<<2)>>2]|0;c[(c[723820]|0)+(a<<2)>>2]=e;e=a;a=j}e=r2(e,0)|0;l=e;while(1){if((l|0)==0){break}jo(d,h,c[(c[723822]|0)+(l<<2)>>2]|0);l=c[(c[723820]|0)+(l<<2)>>2]|0}b=q8(74,q8(f+401|0,q8(i,ji(d+h|0,e)|0)|0)|0)|0}else{h=jr(g,c[(c[723822]|0)+(e<<2)>>2]|0,0)|0;while(1){do{if((a|0)!=0){if((jj(c[(c[723822]|0)+(a<<2)>>2]|0)|0)!=0){m=0;break}if((f|0)!=((c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]<<2)>>2]<<2)>>2]|0)-401|0)){m=0;break}i=jl(c[(c[723822]|0)+(a<<2)>>2]|0)|0;g=i;m=(jm(i)|0)!=0^1}else{m=0}}while(0);if(!m){break}h=jr(g,c[(c[723822]|0)+(a<<2)>>2]|0,h)|0;a=c[(c[723820]|0)+(a<<2)>>2]|0}h=r2(h,0)|0;while(1){if((h|0)==0){break}g=c[(c[723822]|0)+(c[(c[723822]|0)+(h<<2)>>2]<<2)>>2]|0;e=c[(c[723820]|0)+(c[(c[723822]|0)+(h<<2)>>2]<<2)>>2]|0;m=i3(g)|0;i=e;while(1){if((i|0)==0){break}jo(d,m,c[(c[723822]|0)+(i<<2)>>2]|0);i=c[(c[723820]|0)+(i<<2)>>2]|0}b=q8(q8(g,ji(d+m|0,e)|0)|0,b)|0;h=c[(c[723820]|0)+(h<<2)>>2]|0}b=q8(40,q8(f+401|0,b)|0)|0}}}if((a|0)!=0){n=q8(42,q8(b,ji(d,a)|0)|0)|0;return n|0}else{n=b;return n|0}return 0}function jj(b){b=b|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;e=i;i=i+8|0;f=e|0;g=b;L201:while(1){if((c[(c[723822]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]|0)==0){h=193;break}L204:while(1){b=c[(c[723822]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]<<2)>>2]|0;j=b;if((b|0)<0){b=c[(c[723822]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]<<2)>>2]|0;j=b;do{if(1<=(c[(c[723822]|0)+(b<<2)>>2]|0)){k=c[(c[723822]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]<<2)>>2]|0;j=k;if((c[(c[723822]|0)+(k<<2)>>2]|0)>=129){h=171;break}k=c[(c[723822]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]<<2)>>2]|0;j=k;l=c[(c[723822]|0)+(k<<2)>>2]|0}else{h=171}}while(0);if((h|0)==171){h=0;l=145}m=l}else{b=c[(c[723822]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]<<2)>>2]|0;j=b;m=d[90632+b|0]|0}switch(m|0){case 145:{break};case 22:case 138:case 71:{break L201;break};case 9:{h=180;break L201;break};case 43:{h=175;break L204;break};case 4:case 5:case 6:{h=176;break L204;break};case 132:{break L204;break};case 37:{b=q8(q8(c[(c[723822]|0)+(c[(c[723820]|0)+(j<<2)>>2]<<2)>>2]|0,c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]<<2)>>2]|0)|0,c[(c[723822]|0)+(c[(c[723820]|0)+(g<<2)>>2]<<2)>>2]|0)|0;c[(c[723822]|0)+(c[(c[723820]|0)+(g<<2)>>2]<<2)>>2]=b;c[(c[723822]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]<<2)>>2]=c[(c[723820]|0)+(c[(c[723820]|0)+(j<<2)>>2]<<2)>>2];continue L204;break};case 33:{h=179;break L201;break};default:{h=192;break L201}}if(5425>(c[(c[723822]|0)+(j<<2)>>2]|0)){h=190;break L201}if((c[(c[723822]|0)+(j<<2)>>2]|0)>=37425){h=190;break L201}b=565104+((c[(c[723822]|0)+(j<<2)>>2]|0)-5425<<6)|0;if((d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0)<3){h=190;break L201}b=565104+((c[(c[723822]|0)+(j<<2)>>2]|0)-5425<<6)|0;if(((d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24)-3|0)!=0){h=190;break L201}b=565112+((c[(c[723822]|0)+(j<<2)>>2]|0)-5425<<6)|0;if((d[b]|d[b+1|0]<<8|d[b+2|0]<<16|d[b+3|0]<<24|0)!=(c[680084]|0)){h=190;break L201}c[(c[723822]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]<<2)>>2]=c[(c[723820]|0)+(j<<2)>>2]}if((h|0)==175){h=0;b=q8(4,qZ()|0)|0;k=jt(c[(c[723820]|0)+(j<<2)>>2]|0,b,0)|0;n=q8(30,q8(k,c[(c[723820]|0)+(c[(c[723820]|0)+(g<<2)>>2]<<2)>>2]|0)|0)|0;c[(c[723820]|0)+(c[(c[723820]|0)+(g<<2)>>2]<<2)>>2]=n;j=b;h=176}if((h|0)==176){h=0;b=q8(j,c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]<<2)>>2]|0)|0;n=q8(b,c[(c[723822]|0)+(c[(c[723820]|0)+(g<<2)>>2]<<2)>>2]|0)|0;c[(c[723822]|0)+(c[(c[723820]|0)+(g<<2)>>2]<<2)>>2]=n}c[(c[723822]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]=c[(c[723820]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]<<2)>>2];c[(c[723820]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]=c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]<<2)>>2]}if((h|0)!=190)if((h|0)==192){ka(62224);return 0}else if((h|0)==193){o=1;p=o;i=e;return p|0}else if((h|0)==180){c[f>>2]=qX(c[(c[723820]|0)+(j<<2)>>2]|0)|0;j=0;while(1){if((a[c[f>>2]|0]|0)==0){break}j=q8(i0(kG(f)|0)|0,j)|0}f=r2(j,c[680026]|0)|0;c[(c[723822]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]<<2)>>2]=f;o=0;p=o;i=e;return p|0}else if((h|0)==179){h=ju(c[(c[723820]|0)+(j<<2)>>2]|0)|0;c[(c[723822]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]<<2)>>2]=h;o=0;p=o;i=e;return p|0}o=0;p=o;i=e;return p|0}function jk(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=a;a=b;b=c[(c[723822]|0)+(a<<2)>>2]|0;e=i7(d,c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0,c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;do{if((c[(c[723820]|0)+(a<<2)>>2]|0)!=0){if((js(e)|0)==0){break}f=q8(42,q8(e,jk(d,c[(c[723820]|0)+(a<<2)>>2]|0)|0)|0)|0;g=f;return g|0}}while(0);f=e;g=f;return g|0}function jl(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0;b=c[(c[723822]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]<<2)>>2]|0;a=sK(b)|0;if((a|0)<0){do{if(1<=(c[(c[723822]|0)+(a<<2)>>2]|0)){if((c[(c[723822]|0)+(a<<2)>>2]|0)>=129){e=210;break}f=c[(c[723822]|0)+(a<<2)>>2]|0}else{e=210}}while(0);if((e|0)==210){f=145}g=f}else{g=d[90632+a|0]|0}L262:do{if((g|0)==71){h=c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0;i=h;return i|0}else if((g|0)==11){f=i8(c[(c[723820]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]|0)|0;c[(c[723820]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]=f;h=c[(c[723822]|0)+(b<<2)>>2]|0;i=h;return i|0}else if((g|0)==147){a=c[(c[723822]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]|0;f=i8(c[(c[723820]|0)+(a<<2)>>2]|0)|0;c[(c[723820]|0)+(a<<2)>>2]=f;h=a;i=h;return i|0}else if((g|0)==138){do{if((a|0)!=(c[680368]|0)){if((a|0)==(c[680366]|0)){break}if((a|0)==(c[680370]|0)){break}break L262}}while(0);if((c[886976]|0)==2){f=i8(c[(c[723820]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]|0)|0;c[(c[723820]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]=f}h=b;i=h;return i|0}}while(0);h=a;i=h;return i|0}function jm(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0,j=0;b=a;if((b|0)<0){do{if(1<=(c[(c[723822]|0)+(b<<2)>>2]|0)){if((c[(c[723822]|0)+(b<<2)>>2]|0)>=129){e=235;break}f=c[(c[723822]|0)+(b<<2)>>2]|0}else{e=235}}while(0);if((e|0)==235){f=145}g=f}else{g=d[90632+b|0]|0}if((g|0)==138|(g|0)==143|(g|0)==22){h=0;i=h;return i|0}else if((g|0)==145){if(301<=(c[(c[723822]|0)+(b<<2)>>2]|0)){j=(c[(c[723822]|0)+(b<<2)>>2]|0)<401}else{j=0}h=(j^1)&1;i=h;return i|0}else{ka(65624);return 0}return 0}function jn(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0.0,q=0;e=a;a=b;if((c[(c[723822]|0)+(e<<2)>>2]|0)<0){do{if(1<=(c[(c[723822]|0)+(c[(c[723822]|0)+(e<<2)>>2]<<2)>>2]|0)){if((c[(c[723822]|0)+(c[(c[723822]|0)+(e<<2)>>2]<<2)>>2]|0)>=129){f=251;break}g=c[(c[723822]|0)+(c[(c[723822]|0)+(e<<2)>>2]<<2)>>2]|0}else{f=251}}while(0);if((f|0)==251){g=145}h=g}else{h=d[90632+(c[(c[723822]|0)+(e<<2)>>2]|0)|0]|0}if((h|0)==11){if((c[(c[723822]|0)+(a<<2)>>2]|0)<0){do{if(1<=(c[(c[723822]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]|0)){if((c[(c[723822]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]|0)>=129){f=259;break}i=c[(c[723822]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]|0}else{f=259}}while(0);if((f|0)==259){i=145}j=i}else{j=d[90632+(c[(c[723822]|0)+(a<<2)>>2]|0)|0]|0}if((j|0)==11){k=(c[(c[723820]|0)+(c[(c[723822]|0)+(e<<2)>>2]<<2)>>2]|0)==(c[(c[723820]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]|0)}else{k=0}l=k&1;m=l;return m|0}if((sj(c[(c[723820]|0)+(e<<2)>>2]|0)|0)!=0){if((sj(c[(c[723820]|0)+(a<<2)>>2]|0)|0)!=0){k=ru(c[(c[723820]|0)+(e<<2)>>2]|0)|0;n=(k|0)==(ru(c[(c[723820]|0)+(a<<2)>>2]|0)|0)}else{n=0}l=n&1;m=l;return m|0}do{if((c[(c[723820]|0)+(e<<2)>>2]|0)<0){if((c[(c[723822]|0)+(c[(c[723820]|0)+(e<<2)>>2]<<2)>>2]|0)!=97){break}do{if((c[(c[723820]|0)+(a<<2)>>2]|0)<0){if((c[(c[723822]|0)+(c[(c[723820]|0)+(a<<2)>>2]<<2)>>2]|0)!=97){o=0;break}p=+lq(c[(c[723820]|0)+(e<<2)>>2]|0);o=p==+lq(c[(c[723820]|0)+(a<<2)>>2]|0)}else{o=0}}while(0);l=o&1;m=l;return m|0}}while(0);if((sn(c[(c[723820]|0)+(e<<2)>>2]|0)|0)==0){ka(70728);return 0}if((sn(c[(c[723820]|0)+(a<<2)>>2]|0)|0)!=0){q=(c3(c[(c[723820]|0)+(e<<2)>>2]|0,c[(c[723820]|0)+(a<<2)>>2]|0)|0)==0}else{q=0}l=q&1;m=l;return m|0}function jo(a,b,e){a=a|0;b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0;f=a;a=b;b=e;e=c[(c[723822]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]|0;g=c[(c[723820]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]|0;h=c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]|0;if((e|0)<0){do{if(1<=(c[(c[723822]|0)+(e<<2)>>2]|0)){if((c[(c[723822]|0)+(e<<2)>>2]|0)>=129){i=289;break}j=c[(c[723822]|0)+(e<<2)>>2]|0}else{i=289}}while(0);if((i|0)==289){j=145}k=j}else{k=d[90632+e|0]|0}if((k|0)==71){k=c[(c[723822]|0)+(c[(c[723820]|0)+(e<<2)>>2]<<2)>>2]|0;j=c[(c[723820]|0)+(c[(c[723820]|0)+(e<<2)>>2]<<2)>>2]|0;i=0;l=0;while(1){if((j|0)==0){break}l=q8(f+a+1-(rt(c[(c[723822]|0)+(c[(c[723822]|0)+(j<<2)>>2]<<2)>>2]|0,k)|0)+401|0,l)|0;i=q8(c[(c[723820]|0)+(c[(c[723822]|0)+(j<<2)>>2]<<2)>>2]|0,i)|0;j=c[(c[723820]|0)+(j<<2)>>2]|0}g=r2(i,g)|0;h=r2(l,h)|0;m=g;n=b;o=c[723822]|0;p=o+(n<<2)|0;q=c[p>>2]|0;r=c[723822]|0;s=r+(q<<2)|0;c[s>>2]=m;t=h;u=b;v=c[723822]|0;w=v+(u<<2)|0;x=c[w>>2]|0;y=c[723820]|0;z=y+(x<<2)|0;c[z>>2]=t;return}else{while(1){if((a|0)<=0){break}l=f+1|0;f=l;h=q8(l+401|0,h)|0;g=q8(c[(c[723820]|0)+(e<<2)>>2]|0,g)|0;e=c[(c[723822]|0)+(e<<2)>>2]|0;a=a-1|0}m=g;n=b;o=c[723822]|0;p=o+(n<<2)|0;q=c[p>>2]|0;r=c[723822]|0;s=r+(q<<2)|0;c[s>>2]=m;t=h;u=b;v=c[723822]|0;w=v+(u<<2)|0;x=c[w>>2]|0;y=c[723820]|0;z=y+(x<<2)|0;c[z>>2]=t;return}}function jp(a){a=a|0;var b=0,d=0,e=0,f=0;b=a;if((b|0)>=0){d=0;e=d&1;return e|0}do{if(1<=(c[(c[723822]|0)+(b<<2)>>2]|0)){if((c[(c[723822]|0)+(b<<2)>>2]|0)<129){d=0}else{break}e=d&1;return e|0}}while(0);if(301<=(c[(c[723822]|0)+(b<<2)>>2]|0)){f=(c[(c[723822]|0)+(b<<2)>>2]|0)<401}else{f=0}d=f;e=d&1;return e|0}function jq(a,b){a=a|0;b=b|0;return(c[(c[723822]|0)+(a<<2)>>2]|0)==(c[(c[723822]|0)+(b<<2)>>2]|0)|0}function jr(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=a;a=b;b=d;if((b|0)==0){f=q8(q8(e,q8(a,0)|0)|0,0)|0;g=f;return g|0}if((c[(c[723822]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]|0)==(e|0)){d=c[(c[723820]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]|0;h=sr(d,q8(a,0)|0)|0;c[(c[723820]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]=h}else{h=jr(e,a,c[(c[723820]|0)+(b<<2)>>2]|0)|0;c[(c[723820]|0)+(b<<2)>>2]=h}f=b;g=f;return g|0}function js(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0;b=a;if((b|0)<0){do{if(1<=(c[(c[723822]|0)+(b<<2)>>2]|0)){if((c[(c[723822]|0)+(b<<2)>>2]|0)>=129){e=331;break}f=c[(c[723822]|0)+(b<<2)>>2]|0}else{e=331}}while(0);if((e|0)==331){f=145}g=f}else{g=d[90632+b|0]|0}if((g|0)==54){h=1;i=h;return i|0}else if((g|0)==30){h=js(c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;i=h;return i|0}else{h=0;i=h;return i|0}return 0}function jt(a,b,e){a=a|0;b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;f=a;a=b;b=e;e=jv(f)|0;g=jw(f)|0;if((g|0)==132){h=b;i=h;return i|0}if((e|0)==132){h=jx(g,a,b)|0;i=h;return i|0}f=q8(4,qZ()|0)|0;j=q8(4,qZ()|0)|0;k=q8(f,q8(q8(q8(q8(37,q8(j,e)|0)|0,0)|0,j)|0,0)|0)|0;if((a|0)<0){do{if(1<=(c[(c[723822]|0)+(a<<2)>>2]|0)){if((c[(c[723822]|0)+(a<<2)>>2]|0)>=129){l=349;break}m=c[(c[723822]|0)+(a<<2)>>2]|0}else{l=349}}while(0);if((l|0)==349){m=145}n=m}else{n=d[90632+a|0]|0}if((n|0)==54){b=q8(q8(j,q8(q8(0,a)|0,0)|0)|0,b)|0;a=j;j=q8(4,qZ()|0)|0}if((g|0)<0){do{if(1<=(c[(c[723822]|0)+(g<<2)>>2]|0)){if((c[(c[723822]|0)+(g<<2)>>2]|0)>=129){l=358;break}o=c[(c[723822]|0)+(g<<2)>>2]|0}else{l=358}}while(0);if((l|0)==358){o=145}p=o}else{p=d[90632+g|0]|0}if((p|0)==37){j=c[(c[723822]|0)+(c[(c[723820]|0)+(g<<2)>>2]<<2)>>2]|0;g=c[(c[723820]|0)+(c[(c[723820]|0)+(g<<2)>>2]<<2)>>2]|0}p=q8(k,0)|0;b=q8(q8(j,q8(q8(0,q8(30,q8(p,q8(f,a)|0)|0)|0)|0,0)|0)|0,b)|0;h=jx(g,j,b)|0;i=h;return i|0}function ju(a){a=a|0;var b=0,d=0,e=0;b=a;if((b|0)==0){d=c[680026]|0;e=d;return e|0}else{a=q8(c[680426]|0,c[(c[723822]|0)+(b<<2)>>2]|0)|0;d=q8(a,ju(c[(c[723820]|0)+(b<<2)>>2]|0)|0)|0;e=d;return e|0}return 0}function jv(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0;b=a;if((b|0)<0){do{if(1<=(c[(c[723822]|0)+(b<<2)>>2]|0)){if((c[(c[723822]|0)+(b<<2)>>2]|0)>=129){e=379;break}f=c[(c[723822]|0)+(b<<2)>>2]|0}else{e=379}}while(0);if((e|0)==379){f=145}g=f}else{g=d[90632+b|0]|0}switch(g|0){case 71:{g=0;f=c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0;while(1){if((f|0)==0){break}e=jv(c[(c[723820]|0)+(c[(c[723822]|0)+(f<<2)>>2]<<2)>>2]|0)|0;g=q8(q8(c[(c[723822]|0)+(c[(c[723822]|0)+(f<<2)>>2]<<2)>>2]|0,e)|0,g)|0;f=c[(c[723820]|0)+(f<<2)>>2]|0}f=c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0;h=q8(71,q8(f,r2(g,0)|0)|0)|0;i=h;return i|0};case 9:case 22:case 11:case 143:case 138:{h=b;i=h;return i|0};case 145:{h=jy(b)|0;i=h;return i|0};case 5:case 4:case 6:case 132:case 43:{h=132;i=h;return i|0};case 37:{h=jv(c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;i=h;return i|0};case 33:{g=c[(c[723820]|0)+(b<<2)>>2]|0;b=0;while(1){if((g|0)==0){break}f=c[680426]|0;b=q8(q8(f,jv(c[(c[723822]|0)+(g<<2)>>2]|0)|0)|0,b)|0;g=c[(c[723820]|0)+(g<<2)>>2]|0}h=r2(b,c[680026]|0)|0;i=h;return i|0};default:{ka(55320);return 0}}return 0}function jw(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;b=a;if((b|0)<0){do{if(1<=(c[(c[723822]|0)+(b<<2)>>2]|0)){if((c[(c[723822]|0)+(b<<2)>>2]|0)>=129){e=409;break}f=c[(c[723822]|0)+(b<<2)>>2]|0}else{e=409}}while(0);if((e|0)==409){f=145}g=f}else{g=d[90632+b|0]|0}switch(g|0){case 71:{g=0;f=c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0;a=c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0;h=0;while(1){if((a|0)==0){break}i=jw(c[(c[723820]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]|0)|0;g=q8(q8(c[(c[723822]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]|0,i)|0,g)|0;if((i|0)!=132){h=1}a=c[(c[723820]|0)+(a<<2)>>2]|0}if((h|0)!=0){j=q8(71,q8(f,r2(g,0)|0)|0)|0}else{j=132}k=j;l=k;return l|0};case 132:case 9:case 22:{k=132;l=k;return l|0};case 5:case 4:case 6:{k=b;l=k;return l|0};case 43:{if((jw(c[(c[723820]|0)+(b<<2)>>2]|0)|0)==132){m=132}else{m=b}k=m;l=k;return l|0};case 143:case 138:case 145:{m=sK(b)|0;do{if((m|0)!=(c[680368]|0)){if((m|0)==(c[680366]|0)){break}if((m|0)==(c[680370]|0)){break}if((m|0)<0){do{if(1<=(c[(c[723822]|0)+(m<<2)>>2]|0)){if((c[(c[723822]|0)+(m<<2)>>2]|0)>=129){e=455;break}n=c[(c[723822]|0)+(m<<2)>>2]|0}else{e=455}}while(0);if((e|0)==455){n=145}o=n}else{o=d[90632+m|0]|0}if((o|0)==11){k=b;l=k;return l|0}do{if(301<=(m|0)){if((m|0)>=401){break}j=jw(c[(c[723820]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]|0)|0;g=jw(c[(c[723820]|0)+(b<<2)>>2]|0)|0;do{if((j|0)==132){if((g|0)!=132){e=465;break}p=132}else{e=465}}while(0);if((e|0)==465){p=q8(q8(c[(c[723822]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]|0,j)|0,g)|0}k=p;l=k;return l|0}}while(0);f=0;h=0;while(1){if((b|0)<0){if(1<=(c[(c[723822]|0)+(b<<2)>>2]|0)){q=(c[(c[723822]|0)+(b<<2)>>2]|0)<129}else{q=0}r=q^1}else{r=0}if(!r){break}a=jw(c[(c[723820]|0)+(b<<2)>>2]|0)|0;if((a|0)!=132){h=1}f=q8(a,f)|0;b=c[(c[723822]|0)+(b<<2)>>2]|0}if((h|0)!=0){s=sN(b,f)|0}else{s=132}k=s;l=k;return l|0}}while(0);k=132;l=k;return l|0};case 37:{s=jw(c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;if((s|0)==132){t=c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0}else{t=q8(37,q8(c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0,s)|0)|0}k=t;l=k;return l|0};case 33:{t=c[(c[723820]|0)+(b<<2)>>2]|0;b=0;while(1){if((t|0)==0){break}b=q8(jw(c[(c[723822]|0)+(t<<2)>>2]|0)|0,b)|0;t=c[(c[723820]|0)+(t<<2)>>2]|0}while(1){if((b|0)!=0){u=(c[(c[723822]|0)+(b<<2)>>2]|0)==132}else{u=0}if(!u){break}b=c[(c[723820]|0)+(b<<2)>>2]|0}t=c[680026]|0;while(1){if((b|0)==0){break}t=q8(q8(c[680426]|0,c[(c[723822]|0)+(b<<2)>>2]|0)|0,t)|0;b=c[(c[723820]|0)+(b<<2)>>2]|0}k=t;l=k;return l|0};default:{ka(57184);return 0}}return 0}function jx(a,b,e){a=a|0;b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0;f=a;a=b;b=e;e=sK(f)|0;if((e|0)<0){do{if(1<=(c[(c[723822]|0)+(e<<2)>>2]|0)){if((c[(c[723822]|0)+(e<<2)>>2]|0)>=129){g=497;break}h=c[(c[723822]|0)+(e<<2)>>2]|0}else{g=497}}while(0);if((g|0)==497){h=145}i=h}else{i=d[90632+e|0]|0}L621:do{switch(i|0){case 132:case 9:case 22:{break};case 37:{j=jx(c[(c[723820]|0)+(c[(c[723820]|0)+(f<<2)>>2]<<2)>>2]|0,c[(c[723822]|0)+(c[(c[723820]|0)+(f<<2)>>2]<<2)>>2]|0,q8(q8(c[(c[723822]|0)+(c[(c[723820]|0)+(f<<2)>>2]<<2)>>2]|0,q8(q8(0,a)|0,0)|0)|0,b)|0)|0;k=j;return k|0};case 6:case 4:case 5:{j=q8(q8(f,q8(q8(0,a)|0,0)|0)|0,b)|0;k=j;return k|0};case 33:{j=jx(ju(c[(c[723820]|0)+(f<<2)>>2]|0)|0,a,b)|0;k=j;return k|0};case 147:{h=q8(4,qZ()|0)|0;l=i8(c[(c[723820]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(f<<2)>>2]<<2)>>2]<<2)>>2]|0)|0;c[(c[723820]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(f<<2)>>2]<<2)>>2]<<2)>>2]=l;b=q8(q8(h,q8(q8(0,q8(q8(c[679970]|0,c[(c[723820]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(f<<2)>>2]<<2)>>2]<<2)>>2]|0)|0,a)|0)|0,0)|0)|0,b)|0;b=jx(c[(c[723820]|0)+(c[(c[723822]|0)+(f<<2)>>2]<<2)>>2]|0,q8(c[680358]|0,h)|0,b)|0;b=jx(c[(c[723820]|0)+(f<<2)>>2]|0,q8(c[679934]|0,h)|0,b)|0;break};case 11:{h=c[(c[723820]|0)+(c[(c[723822]|0)+(f<<2)>>2]<<2)>>2]|0;while(1){do{if((h|0)<0){if(1<=(c[(c[723822]|0)+(h<<2)>>2]|0)){if((c[(c[723822]|0)+(h<<2)>>2]|0)<129){m=0;break}}m=(c[(c[723822]|0)+(h<<2)>>2]|0)==(c[680076]|0)}else{m=0}}while(0);if(!m){break}h=c[(c[723820]|0)+(h<<2)>>2]|0}l=c[(c[723820]|0)+(f<<2)>>2]|0;n=q8(c[679994]|0,h)|0;j=jx(l,q8(q8(n,rL(c[(c[723820]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(f<<2)>>2]<<2)>>2]<<2)>>2]|0)|0)|0,a)|0,b)|0;k=j;return k|0};case 43:{do{if((se(a)|0)!=0){g=506}else{if(5425<=(a|0)){if((a|0)<37425){g=506;break}}o=q8(4,qZ()|0)|0;b=q8(q8(o,q8(q8(0,a)|0,0)|0)|0,b)|0}}while(0);if((g|0)==506){o=a}j=jt(c[(c[723820]|0)+(f<<2)>>2]|0,o,b)|0;k=j;return k|0};case 71:{h=c[(c[723822]|0)+(c[(c[723820]|0)+(f<<2)>>2]<<2)>>2]|0;n=565100+(h-5425<<6)|0;l=d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24|0;n=h;p=c[(c[723820]|0)+(c[(c[723820]|0)+(f<<2)>>2]<<2)>>2]|0;q=l;while(1){r=q;q=r-1|0;if(0>=(r|0)){break}n=q8(n,132)|0}while(1){if((p|0)==0){break}r=n;q=l-(rt(c[(c[723822]|0)+(c[(c[723822]|0)+(p<<2)>>2]<<2)>>2]|0,h)|0)|0;while(1){if((q|0)<=0){break}r=c[(c[723822]|0)+(r<<2)>>2]|0;q=q-1|0}c[(c[723820]|0)+(r<<2)>>2]=c[(c[723820]|0)+(c[(c[723822]|0)+(p<<2)>>2]<<2)>>2];p=c[(c[723820]|0)+(p<<2)>>2]|0}j=jx(n,a,b)|0;k=j;return k|0};case 138:{do{if((e|0)!=(c[680368]|0)){if((e|0)==(c[680366]|0)){break}if((e|0)==(c[680370]|0)){break}do{if((c[886976]|0)==1){p=565104+(e-5425<<6)|0;if((d[p]|d[p+1|0]<<8|d[p+2|0]<<16|d[p+3|0]<<24|0)<3){break}p=565104+(e-5425<<6)|0;if(((d[p]|d[p+1|0]<<8|d[p+2|0]<<16|d[p+3|0]<<24)-3|0)!=0){break}p=565112+(e-5425<<6)|0;if((d[p]|d[p+1|0]<<8|d[p+2|0]<<16|d[p+3|0]<<24|0)!=(c[680084]|0)){break}j=jx(c[(c[723820]|0)+(f<<2)>>2]|0,a,b)|0;k=j;return k|0}}while(0);g=543;break L621}}while(0);if((c[886976]|0)==2){n=i8(c[(c[723820]|0)+(c[(c[723822]|0)+(f<<2)>>2]<<2)>>2]|0)|0;c[(c[723820]|0)+(c[(c[723822]|0)+(f<<2)>>2]<<2)>>2]=n}break};case 143:{g=543;break};default:{ka(59424);return 0}}}while(0);if((g|0)==543){o=sL(f)|0;if((o|0)!=0){do{if((se(a)|0)!=0){g=547}else{if(5425<=(a|0)){if((a|0)<37425){g=547;break}}s=q8(4,qZ()|0)|0;b=q8(q8(s,q8(q8(0,a)|0,0)|0)|0,b)|0}}while(0);if((g|0)==547){s=a}a=q8(q8(c[679946]|0,e)|0,s)|0;s=1;while(1){if((o|0)==0){break}e=c[(c[723822]|0)+(o<<2)>>2]|0;b=jx(e,q8(a,rL(s)|0)|0,b)|0;s=s+1|0;o=c[(c[723820]|0)+(o<<2)>>2]|0}}}j=b;k=j;return k|0}function jy(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;b=a;a=sK(b)|0;do{if((a|0)!=(c[680368]|0)){if((a|0)==(c[680366]|0)){break}if((a|0)==(c[680370]|0)){break}if((a|0)<0){do{if(1<=(c[(c[723822]|0)+(a<<2)>>2]|0)){if((c[(c[723822]|0)+(a<<2)>>2]|0)>=129){e=575;break}f=c[(c[723822]|0)+(a<<2)>>2]|0}else{e=575}}while(0);if((e|0)==575){f=145}g=f}else{g=d[90632+a|0]|0}if((g|0)==11){h=c[(c[723822]|0)+(b<<2)>>2]|0;i=q8(h,jv(c[(c[723820]|0)+(b<<2)>>2]|0)|0)|0;j=i;return j|0}do{if(301<=(a|0)){if((a|0)>=401){break}h=jv(c[(c[723820]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]|0)|0;k=jv(c[(c[723820]|0)+(b<<2)>>2]|0)|0;i=q8(q8(c[(c[723822]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]|0,h)|0,k)|0;j=i;return j|0}}while(0);k=sL(b)|0;h=k;while(1){if((h|0)==0){break}l=jv(c[(c[723822]|0)+(h<<2)>>2]|0)|0;c[(c[723822]|0)+(h<<2)>>2]=l;h=c[(c[723820]|0)+(h<<2)>>2]|0}i=sN(a,k)|0;j=i;return j|0}}while(0);i=b;j=i;return j|0}function jz(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,i=0;b=a;if((b|0)<0){do{if(1<=(c[(c[723822]|0)+(b<<2)>>2]|0)){if((c[(c[723822]|0)+(b<<2)>>2]|0)>=129){e=597;break}f=c[(c[723822]|0)+(b<<2)>>2]|0}else{e=597}}while(0);if((e|0)==597){f=145}g=f}else{g=d[90632+b|0]|0}if((g|0)==54){f=c[(c[723820]|0)+(b<<2)>>2]|0;while(1){if((f|0)==0){break}c[(c[723822]|0)+(f<<2)>>2]=c[(c[723820]|0)+(c[(c[723822]|0)+(f<<2)>>2]<<2)>>2];f=c[(c[723820]|0)+(f<<2)>>2]|0}f=c[(c[723820]|0)+(b<<2)>>2]|0;while(1){if((f|0)==0){break}jB(c[(c[723822]|0)+(f<<2)>>2]|0);f=c[(c[723820]|0)+(f<<2)>>2]|0}h=b;i=h;return i|0}else if((g|0)==30){g=jz(c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]=g;h=jA(b)|0;i=h;return i|0}else{h=i8(c[(c[723820]|0)+(b<<2)>>2]|0)|0;i=h;return i|0}return 0}function jA(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=a;a=c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0;d=c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0;if((d|0)==0){e=a;f=e;return f|0}g=d;while(1){if((g|0)==0){break}h=jb(c[(c[723822]|0)+(g<<2)>>2]|0)|0;c[(c[723822]|0)+(g<<2)>>2]=h;g=c[(c[723820]|0)+(g<<2)>>2]|0}g=b;while(1){if((c[(c[723820]|0)+(d<<2)>>2]|0)==0){break}c[(c[723822]|0)+(c[(c[723820]|0)+(g<<2)>>2]<<2)>>2]=c[(c[723822]|0)+(d<<2)>>2];h=q8(30,q8(0,a)|0)|0;c[(c[723820]|0)+(c[(c[723820]|0)+(g<<2)>>2]<<2)>>2]=h;g=c[(c[723820]|0)+(c[(c[723820]|0)+(g<<2)>>2]<<2)>>2]|0;d=c[(c[723820]|0)+(d<<2)>>2]|0}c[(c[723822]|0)+(c[(c[723820]|0)+(g<<2)>>2]<<2)>>2]=c[(c[723822]|0)+(d<<2)>>2];e=b;f=e;return f|0}function jB(a){a=a|0;var b=0;b=a;a=i8(c[(c[723822]|0)+(b<<2)>>2]|0)|0;c[(c[723822]|0)+(b<<2)>>2]=a;a=i8(c[(c[723820]|0)+(b<<2)>>2]|0)|0;c[(c[723820]|0)+(b<<2)>>2]=a;return}function jC(a){a=a|0;var b=0;b=a;a=i9(c[(c[723822]|0)+(b<<2)>>2]|0)|0;return q8(a,i9(c[(c[723820]|0)+(b<<2)>>2]|0)|0)|0}function jD(a){a=a|0;var b=0,d=0;b=a;a=i9(c[(c[723822]|0)+(b<<2)>>2]|0)|0;d=i9(c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;return q8(a,q8(d,i9(c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0)|0)|0}function jE(a){a=a|0;var b=0;b=a;a=i9(c[(c[723820]|0)+(b<<2)>>2]|0)|0;c[(c[723820]|0)+(b<<2)>>2]=a;return}function jF(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=a;if((b|0)>((c[722536]|0)-(c[722540]|0)|0)){if((b|0)>(c[722536]|0)){d=b-(c[722536]|0)+(c[722540]|0)+(c[679904]|0)+401|0;e=d;return e|0}else{d=b-(c[722536]|0)+(c[722540]|0)+401|0;e=d;return e|0}}a=c[724900]|0;f=(c[722540]|0)+(c[679904]|0)|0;while(1){if((a|0)!=0){g=((c[(c[723822]|0)+(a<<2)>>2]|0)-401|0)!=(b|0)}else{g=0}if(!g){break}a=c[(c[723820]|0)+(a<<2)>>2]|0;f=f-1|0}d=f+401|0;e=d;return e|0}function jG(a){a=a|0;var b=0;b=a;a=i8(c[(c[723822]|0)+(b<<2)>>2]|0)|0;c[(c[723822]|0)+(b<<2)>>2]=a;a=i8(c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]=a;a=i8(c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]=a;return}function jH(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;e=a;a=b;b=d;do{if((b|0)!=0){d=c[(c[723822]|0)+(b<<2)>>2]|0;f=c[(c[723820]|0)+(b<<2)>>2]|0;g=c[(c[723822]|0)+(d<<2)>>2]|0;if((g|0)==51){h=0;i=q8(4,qZ()|0)|0;if((i2(c[(c[723822]|0)+(c[(c[723820]|0)+(d<<2)>>2]<<2)>>2]|0)|0)==0){j=q8(9,q1(83600)|0)|0;k=q8(132,0)|0;h=q8(q8(k,q8(q8(c[680044]|0,e)|0,j)|0)|0,h)|0}j=q8(c[(c[723822]|0)+(c[(c[723820]|0)+(d<<2)>>2]<<2)>>2]|0,0)|0;h=q8(q8(j,jH(e,a,f)|0)|0,h)|0;j=q8(q8(i,h)|0,0)|0;h=q8(c[680438]|0,e)|0;l=q8(30,q8(j,q8(q8(h,i8(c[(c[723820]|0)+(c[(c[723820]|0)+(d<<2)>>2]<<2)>>2]|0)|0)|0,i)|0)|0)|0;m=l;return m|0}else if((g|0)==50){i=c[(c[723820]|0)+(d<<2)>>2]|0;l=jA(q8(30,q8(i,jH(e,a,f)|0)|0)|0)|0;m=l;return m|0}else if((g|0)==49){i=i8(c[(c[723820]|0)+(d<<2)>>2]|0)|0;h=jH(e,a,f)|0;j=q8(c[680044]|0,e)|0;l=q8(31,q8(i,q8(h,q8(j,q8(9,q1(82320)|0)|0)|0)|0)|0)|0;m=l;return m|0}else if((g|0)==52){g=q8(c[679932]|0,e)|0;j=q8(g,i8(c[(c[723820]|0)+(d<<2)>>2]|0)|0)|0;l=q8(j,jH(e,a,f)|0)|0;m=l;return m|0}else{break}}}while(0);l=a;m=l;return m|0}function jI(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;e=a;a=b;b=d;do{if((a|0)!=0){d=c[(c[723822]|0)+(a<<2)>>2]|0;f=c[(c[723820]|0)+(a<<2)>>2]|0;g=c[(c[723822]|0)+(d<<2)>>2]|0;if((g|0)==50){h=c[(c[723820]|0)+(d<<2)>>2]|0;i=jA(q8(30,q8(h,jI(e,f,b)|0)|0)|0)|0;j=i;return j|0}else if((g|0)==49){h=i8(c[(c[723820]|0)+(d<<2)>>2]|0)|0;i=q8(31,q8(h,q8(jI(e,f,b)|0,b)|0)|0)|0;j=i;return j|0}else if((g|0)==51){g=0;h=q8(4,qZ()|0)|0;k=q8(4,qZ()|0)|0;if((i2(c[(c[723822]|0)+(c[(c[723820]|0)+(d<<2)>>2]<<2)>>2]|0)|0)==0){l=q8(q8(q8(c[680426]|0,132)|0,k)|0,0)|0;g=q8(q8(l,q8(h,k)|0)|0,g)|0}l=q8(q8(q8(c[680426]|0,c[(c[723822]|0)+(c[(c[723820]|0)+(d<<2)>>2]<<2)>>2]|0)|0,k)|0,0)|0;g=q8(q8(l,jI(e,f,q8(h,k)|0)|0)|0,g)|0;g=q8(q8(q8(c[680026]|0,0)|0,b)|0,g)|0;k=q8(q8(h,g)|0,0)|0;i=q8(30,q8(k,q8(h,i8(c[(c[723820]|0)+(c[(c[723820]|0)+(d<<2)>>2]<<2)>>2]|0)|0)|0)|0)|0;j=i;return j|0}else{break}}}while(0);i=q8(q8(c[680426]|0,e)|0,b)|0;j=i;return j|0}function jJ(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0;e=a;a=b;b=d;d=c[(c[723820]|0)+(b<<2)>>2]|0;f=c[(c[723822]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]|0;g=c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]|0;b=sq(f)|0;h=sq(g)|0;if((f|0)==0){if((sq(d)|0)!=1){ka(85184);return 0}i=c[(c[723822]|0)+(d<<2)>>2]|0;j=i;return j|0}if((h|0)==0){if((b|0)==1){k=c[(c[723822]|0)+(f<<2)>>2]|0}else{k=jN(f)|0}l=k;if((b|0)==1){m=l}else{m=q8(43,l)|0}k=q8(c[680042]|0,e)|0;n=q8(m,0)|0;i=q8(52,q8(k,q8(32,q8(n,q8(0,q8(34,q8(a,q8(q8(q8(c[679954]|0,a)|0,l)|0,d)|0)|0)|0)|0)|0)|0)|0)|0;j=i;return j|0}do{if((b|0)==1){if((h|0)!=1){break}if((sw(c[(c[723820]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]|0,f)|0)==0){break}l=c[(c[723822]|0)+(f<<2)>>2]|0;n=q8(c[680042]|0,e)|0;k=q8(l,0)|0;i=q8(51,q8(l,q8(n,q8(32,q8(k,q8(0,q8(34,q8(a,q8(q8(q8(c[679954]|0,a)|0,l)|0,d)|0)|0)|0)|0)|0)|0)|0)|0)|0;j=i;return j|0}}while(0);do{if((h|0)==1){if((sw(c[(c[723820]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]|0,f)|0)==0){break}if((b|0)==1){o=c[(c[723822]|0)+(f<<2)>>2]|0}else{o=jN(f)|0}l=o;k=c[(c[723822]|0)+(g<<2)>>2]|0;if((b|0)==1){p=l}else{p=q8(43,l)|0}n=q8(c[680438]|0,a)|0;m=q8(c[680042]|0,e)|0;q=q8(p,0)|0;r=q8(n,q8(m,q8(32,q8(q,q8(0,q8(34,q8(a,q8(q8(q8(c[679954]|0,a)|0,l)|0,d)|0)|0)|0)|0)|0)|0)|0)|0;q=q8(l,0)|0;i=q8(51,q8(k,q8(r,q8(32,q8(q,q8(0,q8(q8(c[679954]|0,a)|0,k)|0)|0)|0)|0)|0)|0)|0;j=i;return j|0}}while(0);if((h|0)==1){h=c[(c[723822]|0)+(g<<2)>>2]|0;p=jN(q8(h,f)|0)|0;b=q8(43,p)|0;o=q8(c[680438]|0,a)|0;k=q8(c[680042]|0,e)|0;q=q8(b,0)|0;b=q8(o,q8(k,q8(32,q8(q,q8(0,q8(34,q8(a,q8(q8(q8(c[679954]|0,a)|0,p)|0,d)|0)|0)|0)|0)|0)|0)|0)|0;q=q8(p,0)|0;i=q8(51,q8(h,q8(b,q8(32,q8(q,q8(0,q8(q8(c[679954]|0,a)|0,h)|0)|0)|0)|0)|0)|0)|0;j=i;return j|0}else{h=q8(4,qZ()|0)|0;q=jN(q8(h,f)|0)|0;f=jN(g)|0;g=q8(51,q8(h,q8(q8(c[679954]|0,a)|0,f)|0)|0)|0;b=q8(q8(c[679954]|0,a)|0,q)|0;p=q8(34,q8(a,q8(b,sr(d,q8(g,0)|0)|0)|0)|0)|0;g=q8(43,q)|0;d=q8(c[680438]|0,a)|0;b=q8(c[680042]|0,e)|0;e=q8(g,0)|0;g=q8(d,q8(b,q8(32,q8(e,q8(0,p)|0)|0)|0)|0)|0;p=q8(q,0)|0;i=q8(51,q8(f,q8(g,q8(32,q8(p,q8(0,q8(q8(c[679954]|0,a)|0,h)|0)|0)|0)|0)|0)|0)|0;j=i;return j|0}return 0}function jK(a,b){a=a|0;b=b|0;var e=0,f=0,g=0,h=0,i=0;e=a;a=b;b=e;f=565100+(e-5425<<6)|0;g=d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0;f=565080+(e-5425<<6)|0;h=q8(9,d[f]|d[f+1|0]<<8|d[f+2|0]<<16|d[f+3|0]<<24|0)|0;f=c[679992]|0;i=q8(f,q8(c[679968]|0,h)|0)|0;h=g;while(1){if((h|0)<=0){break}b=q8(b,i)|0;h=h-1|0}while(1){if((a|0)==0){break}i=b;h=g-(rt(c[(c[723822]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]|0,e)|0)|0;while(1){if((h|0)<=0){break}i=c[(c[723822]|0)+(i<<2)>>2]|0;h=h-1|0}f=i8(c[(c[723820]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]|0)|0;c[(c[723820]|0)+(i<<2)>>2]=f;a=c[(c[723820]|0)+(a<<2)>>2]|0}return b|0}function jL(a,b,e){a=a|0;b=b|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;f=b;b=e;e=q8(4,qZ()|0)|0;g=q8(e,i8(a)|0)|0;a=b;h=0;i=0;while(1){if((a|0)==0){break}g=q8(g,i8(c[(c[723820]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]|0)|0)|0;h=q8(q8(4,qZ()|0)|0,h)|0;a=c[(c[723820]|0)+(a<<2)>>2]|0}while(1){if((f|0)==0){break}j=c[(c[723822]|0)+(f<<2)>>2]|0;k=j;l=j;m=h;n=565100+(j-5425<<6)|0;o=d[n]|d[n+1|0]<<8|d[n+2|0]<<16|d[n+3|0]<<24|0;n=o;while(1){if((n|0)<=0){break}p=q8(4,qZ()|0)|0;k=q8(k,p)|0;l=q8(l,p)|0;n=n-1|0}a=b;while(1){if((a|0)==0){break}p=l;n=o-(rt(c[(c[723822]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]|0,j)|0)|0;while(1){if((n|0)<=0){break}p=c[(c[723822]|0)+(p<<2)>>2]|0;n=n-1|0}c[(c[723820]|0)+(p<<2)>>2]=c[(c[723822]|0)+(m<<2)>>2];a=c[(c[723820]|0)+(a<<2)>>2]|0;m=c[(c[723820]|0)+(m<<2)>>2]|0}i=q8(q8(q8(k,h)|0,l)|0,i)|0;f=c[(c[723820]|0)+(f<<2)>>2]|0}return q8(30,q8(q8(q8(e,i)|0,0)|0,g)|0)|0}function jM(a){a=a|0;var b=0;b=a;a=q8(c[(c[723822]|0)+(b<<2)>>2]|0,0)|0;c[(c[723822]|0)+(b<<2)>>2]=a;a=jz(c[(c[723820]|0)+(b<<2)>>2]|0)|0;c[(c[723820]|0)+(b<<2)>>2]=a;return}function jN(a){a=a|0;var b=0,d=0,e=0;b=a;a=0;d=b;do{e=c[(c[723822]|0)+(d<<2)>>2]|0;c[(c[723822]|0)+(d<<2)>>2]=c[(c[723820]|0)+(d<<2)>>2];c[(c[723820]|0)+(d<<2)>>2]=e;e=d;d=c[(c[723822]|0)+(e<<2)>>2]|0;a=a+1|0;}while((d|0)!=0);c[(c[723822]|0)+(e<<2)>>2]=a+201;return b|0}function jO(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=a;a=b;b=d;d=i7(e,a,c[(c[723822]|0)+(b<<2)>>2]|0)|0;return q8(d,i7(e,a,c[(c[723820]|0)+(b<<2)>>2]|0)|0)|0}function jP(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0;e=a;a=b;b=d;d=0;f=0;g=c[(c[723822]|0)+(b<<2)>>2]|0;while(1){if((g|0)==0){break}h=c[(c[723822]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]|0;i=sq(c[(c[723822]|0)+(c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]<<2)>>2]<<2)>>2]|0)|0;if((i|0)==0){f=q8(c[(c[723820]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]|0,f)|0;j=e+1|0;e=j;a=q8(q8(h,j+401|0)|0,a)|0}else{j=q8(4,qZ()|0)|0;k=rL(i)|0;d=q8(q8(j,q8(k,c[(c[723820]|0)+(c[(c[723822]|0)+(g<<2)>>2]<<2)>>2]|0)|0)|0,d)|0;a=q8(q8(h,c[(c[723822]|0)+(d<<2)>>2]|0)|0,a)|0}g=c[(c[723820]|0)+(g<<2)>>2]|0}f=r2(f,0)|0;d=r2(d,0)|0;g=q8(f,d)|0;c[(c[723822]|0)+(b<<2)>>2]=g;g=f;while(1){if((g|0)==0){break}f=jS(e,a,c[(c[723822]|0)+(g<<2)>>2]|0)|0;c[(c[723822]|0)+(g<<2)>>2]=f;g=c[(c[723820]|0)+(g<<2)>>2]|0}g=d;while(1){if((g|0)==0){break}jT(e,a,c[(c[723822]|0)+(g<<2)>>2]|0);g=c[(c[723820]|0)+(g<<2)>>2]|0}g=i7(e,a,c[(c[723820]|0)+(b<<2)>>2]|0)|0;c[(c[723820]|0)+(b<<2)>>2]=g;c[723864]=sG(c[723864]|0,d)|0;return}function jQ(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=b;b=a;while(1){if((b|0)==0){e=785;break}f=c[(c[723822]|0)+(b<<2)>>2]|0;if((d|0)==(c[(c[723820]|0)+(c[(c[723822]|0)+(f<<2)>>2]<<2)>>2]|0)){break}b=c[(c[723820]|0)+(b<<2)>>2]|0}if((e|0)==785){e=rg(d)|0;b=e;if((e|0)==0){b=rf(d,c[726004]|0)|0}g=b;h=g;return h|0}do{if(401<=(c[(c[723820]|0)+(f<<2)>>2]|0)){if((c[(c[723820]|0)+(f<<2)>>2]|0)>=2625){break}do{if((c[(c[723820]|0)+(f<<2)>>2]|0)<=(c[723866]|0)){if((rl(c[(c[723820]|0)+(f<<2)>>2]|0,c[723860]|0)|0)!=0){break}c[723860]=q8(c[(c[723820]|0)+(f<<2)>>2]|0,c[723860]|0)|0}}while(0);g=c[(c[723820]|0)+(f<<2)>>2]|0;h=g;return h|0}}while(0);if((rl(c[(c[723820]|0)+(f<<2)>>2]|0,c[723864]|0)|0)==0){c[723864]=q8(c[(c[723820]|0)+(f<<2)>>2]|0,c[723864]|0)|0}g=c[(c[723822]|0)+(c[(c[723820]|0)+(f<<2)>>2]<<2)>>2]|0;h=g;return h|0}function jR(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=a;a=b;b=d;d=i7(e,a,c[(c[723822]|0)+(b<<2)>>2]|0)|0;f=i7(e,a,c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;return q8(d,q8(f,i7(e,a,c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0)|0)|0}function jS(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0;e=a;a=b;b=d;d=c[(c[723820]|0)+(c[(c[723822]|0)+(b<<2)>>2]<<2)>>2]|0;do{if((c[(c[723820]|0)+(b<<2)>>2]|0)!=0){if((js(d)|0)==0){break}f=i7(e,a,d)|0;g=q8(42,q8(f,jS(e,a,c[(c[723820]|0)+(b<<2)>>2]|0)|0)|0)|0;h=g;return h|0}}while(0);g=i7(e,a,d)|0;h=g;return h|0}function jT(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0;e=a;a=d;d=c[723866]|0;f=c[723860]|0;g=c[723864]|0;h=ru(c[(c[723822]|0)+(c[(c[723820]|0)+(a<<2)>>2]<<2)>>2]|0)|0;i=jg(e+1|0,h,b,c[(c[723820]|0)+(c[(c[723820]|0)+(a<<2)>>2]<<2)>>2]|0)|0;c[723866]=e+401;c[723860]=0;c[723864]=0;i=ji(e+h|0,i)|0;h=c[723860]|0;e=q8(h,q8(c[723864]|0,i)|0)|0;c[(c[723820]|0)+(c[(c[723820]|0)+(a<<2)>>2]<<2)>>2]=e;e=c[723860]|0;while(1){if((e|0)==0){break}do{if((c[(c[723822]|0)+(e<<2)>>2]|0)<=(d|0)){if((rl(c[(c[723822]|0)+(e<<2)>>2]|0,f)|0)!=0){break}f=q8(c[(c[723822]|0)+(e<<2)>>2]|0,f)|0}}while(0);e=c[(c[723820]|0)+(e<<2)>>2]|0}e=c[723864]|0;while(1){if((e|0)==0){break}if((rl(c[(c[723822]|0)+(e<<2)>>2]|0,g)|0)==0){g=q8(c[(c[723822]|0)+(e<<2)>>2]|0,g)|0}e=c[(c[723820]|0)+(e<<2)>>2]|0}c[723866]=d;c[723860]=f;c[723864]=g;return}function jU(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=a;a=b;b=d;d=i6(e,a,c[(c[723822]|0)+(b<<2)>>2]|0)|0;c[(c[723822]|0)+(b<<2)>>2]=d;d=i6(e,a,c[(c[723820]|0)+(b<<2)>>2]|0)|0;c[(c[723820]|0)+(b<<2)>>2]=d;return}function jV(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=d;d=a+(i3(c[(c[723822]|0)+(e<<2)>>2]|0)|0)|0;a=i6(d,b,c[(c[723820]|0)+(e<<2)>>2]|0)|0;c[(c[723820]|0)+(e<<2)>>2]=a;return}function jW(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=a;a=b;b=d;d=i3(c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;f=i6(e,a,c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]=f;f=i6(e+d|0,a,c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]=f;return}function jX(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=a;a=b;b=d;d=i6(e,a,c[(c[723822]|0)+(b<<2)>>2]|0)|0;c[(c[723822]|0)+(b<<2)>>2]=d;d=i6(e,a,c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]=d;d=i6(e,a,c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]=d;return}function jY(a,b){a=a|0;b=b|0;var d=0,e=0;d=a;a=c[(c[723820]|0)+(b<<2)>>2]|0;while(1){if((d|0)!=0){e=(c[(c[723820]|0)+(c[(c[723822]|0)+(c[(c[723822]|0)+(d<<2)>>2]<<2)>>2]<<2)>>2]|0)!=(a|0)}else{e=0}if(!e){break}d=c[(c[723820]|0)+(d<<2)>>2]|0}if((d|0)==0){ka(79168);return 0}else{return c[(c[723820]|0)+(c[(c[723822]|0)+(d<<2)>>2]<<2)>>2]|0}return 0}function jZ(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0;e=a;a=b;b=d;d=c[(c[723822]|0)+(c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]|0;f=c[(c[723820]|0)+(c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]|0;e=e+(sq(d)|0)|0;j_(f);g=f;while(1){if((g|0)==0){break}h=c[(c[723822]|0)+(g<<2)>>2]|0;i=c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(h<<2)>>2]<<2)>>2]<<2)>>2]|0;j=rf(c[(c[723820]|0)+(c[(c[723822]|0)+(h<<2)>>2]<<2)>>2]|0,c[726004]|0)|0;k=j;while(1){if((i|0)==0){break}k=q8(k,c[(c[723822]|0)+(i<<2)>>2]|0)|0;i=c[(c[723820]|0)+(i<<2)>>2]|0}a=q8(q8(c[(c[723822]|0)+(h<<2)>>2]|0,k)|0,a)|0;c[(c[723822]|0)+(h<<2)>>2]=j;g=c[(c[723820]|0)+(g<<2)>>2]|0}g=f;while(1){if((g|0)==0){break}j$(e,a,c[(c[723822]|0)+(g<<2)>>2]|0);g=c[(c[723820]|0)+(g<<2)>>2]|0}if((d|0)==0){l=i6(e,a,c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;m=l;return m|0}g=d;while(1){if((g|0)==0){break}f=i6(e,a,c[(c[723822]|0)+(g<<2)>>2]|0)|0;c[(c[723822]|0)+(g<<2)>>2]=f;g=c[(c[723820]|0)+(g<<2)>>2]|0}c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]=d;d=i6(e,a,c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]=d;l=b;m=l;return m|0}function j_(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0;b=a;a=b;while(1){if((a|0)==0){break}d=c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]<<2)>>2]<<2)>>2]|0;e=0;f=c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]<<2)>>2]<<2)>>2]<<2)>>2]|0;while(1){if((f|0)==0){break}if((rl(c[(c[723822]|0)+(f<<2)>>2]|0,b)|0)!=0){e=q8(c[(c[723822]|0)+(f<<2)>>2]|0,e)|0}else{g=c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(f<<2)>>2]<<2)>>2]<<2)>>2]<<2)>>2]|0;while(1){if((g|0)==0){break}if((rl(c[(c[723822]|0)+(g<<2)>>2]|0,d)|0)==0){d=q8(c[(c[723822]|0)+(g<<2)>>2]|0,d)|0}g=c[(c[723820]|0)+(g<<2)>>2]|0}}f=c[(c[723820]|0)+(f<<2)>>2]|0}c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]<<2)>>2]<<2)>>2]=d;c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]<<2)>>2]<<2)>>2]<<2)>>2]=e;a=c[(c[723820]|0)+(a<<2)>>2]|0}do{g=0;a=b;while(1){if((a|0)==0){break}h=c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]<<2)>>2]<<2)>>2]|0;f=c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]<<2)>>2]<<2)>>2]<<2)>>2]|0;while(1){if((f|0)==0){break}if((c[(c[723822]|0)+(f<<2)>>2]|0)!=(c[(c[723822]|0)+(a<<2)>>2]|0)){i=c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(f<<2)>>2]<<2)>>2]<<2)>>2]<<2)>>2]|0;while(1){if((i|0)==0){break}if((rl(c[(c[723822]|0)+(i<<2)>>2]|0,h)|0)==0){g=1;h=q8(c[(c[723822]|0)+(i<<2)>>2]|0,h)|0}i=c[(c[723820]|0)+(i<<2)>>2]|0}}f=c[(c[723820]|0)+(f<<2)>>2]|0}if((g|0)!=0){c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723822]|0)+(a<<2)>>2]<<2)>>2]<<2)>>2]<<2)>>2]=h}a=c[(c[723820]|0)+(a<<2)>>2]|0}}while((g|0)!=0);return}function j$(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;f=b;b=e;e=ru(c[(c[723822]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]|0)|0;g=c[(c[723822]|0)+(b<<2)>>2]|0;h=c[(c[723822]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]|0;jh(g,e,h,f+e|0,i6(f+e|0,d,c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(c[(c[723820]|0)+(b<<2)>>2]<<2)>>2]<<2)>>2]<<2)>>2]|0)|0);d=565112+((c[(c[723822]|0)+(b<<2)>>2]|0)-5425<<6)|0;w=0;a[d]=w&255;w=w>>8;a[d+1|0]=w&255;w=w>>8;a[d+2|0]=w&255;w=w>>8;a[d+3|0]=w&255;return}function j0(){var b=0,d=0,e=0;b=i;if((c[676268]|0)==0){i=b;return}c[676268]=0;do{if((c[725972]|0)==0){ba(10)|0}else{d=c[678798]|0;if((1e4-d|0)<=1){break}c[678798]=d+1;a[2705192+d|0]=10;a[2705192+(c[678798]|0)|0]=0}}while(0);if((c[670400]|0)!=0){d=c[679898]|0;j2(60936,(e=i,i=i+16|0,c[e>>2]=d,c[e+8>>2]=(d|0)==1?3548e3:70584,e)|0);i=e;d=c[679906]|0;j2(65568,(e=i,i=i+16|0,c[e>>2]=d,c[e+8>>2]=(d|0)==1?3548e3:70584,e)|0);i=e;d=c[679900]|0;if((d|0)>0){j2(62160,(e=i,i=i+16|0,c[e>>2]=d,c[e+8>>2]=(d|0)==1?3548e3:70584,e)|0);i=e}j2(59400,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0);i=e}mN(3548e3);if((c[679874]|0)!=0){j3(0);j4(c[m>>2]|0,57128,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0);i=e;j5()}do{if((c[670400]|0)!=0){d=mM()|0;if((d|0)<=0){break}j2(55280,(e=i,i=i+8|0,c[e>>2]=d,e)|0);i=e}}while(0);if((c[725972]|0)==0){e=c[m>>2]|0;au(e|0)|0}r4();i=b;return}function j1(b){b=b|0;var d=0;if((c[725972]|0)==0){ba(b|0)|0;return}d=c[678798]|0;if((1e4-d|0)<=1){return}c[678798]=d+1;a[2705192+d|0]=b&255;a[2705192+(c[678798]|0)|0]=0;return}function j2(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;i=i+16|0;e=d|0;f=e|0;g=e;c[g>>2]=b;c[g+4>>2]=0;if((c[725972]|0)==0){bX(a|0,f|0)|0;i=d;return}g=c[678798]|0;b=1e4-g|0;e=bQ(2705192+g|0,b|0,a|0,f|0)|0;if((e|0)>-1&(e|0)<(b|0)){h=(c[678798]|0)+e|0}else{h=0}c[678798]=h;i=d;return}function j3(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;kA();j0();d=c[m>>2]|0;j4(d,53904,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0);i=e;f=c[676238]|0;if((f|0)!=0){mB(f,a);j4(d,52624,(e=i,i=i+8|0,c[e>>2]=c[676238],e)|0);i=e;if((a|0)!=0){j4(d,89264,(e=i,i=i+8|0,c[e>>2]=a,e)|0);i=e}c[676238]=0}j4(d,87208,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0);i=e;if((c[725972]|0)!=0){i=b;return}au(d|0)|0;i=b;return}function j4(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0;e=i;i=i+16|0;f=e|0;g=f|0;h=f;c[h>>2]=d;c[h+4>>2]=0;if((c[725972]|0)==0){bG(a|0,b|0,g|0)|0;i=e;return}a=c[678798]|0;h=1e4-a|0;d=bQ(2705192+a|0,h|0,b|0,g|0)|0;if((d|0)>-1&(d|0)<(h|0)){j=(c[678798]|0)+d|0}else{j=0}c[678798]=j;i=e;return}function j5(){var b=0;do{if((c[725972]|0)==0){b=c[m>>2]|0;aw(10,b|0)|0;if((c[725972]|0)!=0){break}b=c[m>>2]|0;au(b|0)|0}else{b=c[678798]|0;if((1e4-b|0)<=1){break}c[678798]=b+1;a[2705192+b|0]=10;a[2705192+(c[678798]|0)|0]=0}}while(0);b8(3546632,1)}function j6(){if((c[725972]|0)!=0){return}au(c[m>>2]|0)|0;return}function j7(a){a=a|0;if((c[725972]|0)!=0){return}au(a|0)|0;return}function j8(b,d){b=b|0;d=d|0;if((c[725972]|0)==0){aw(b|0,d|0)|0;return}d=c[678798]|0;if((1e4-d|0)<=1){return}c[678798]=d+1;a[2705192+d|0]=b&255;a[2705192+(c[678798]|0)|0]=0;return}function j9(){kA();j0();j5()}function ka(a){a=a|0;var b=0;kA();j0();j2(85112,(b=i,i=i+8|0,c[b>>2]=a,b)|0);i=b;j2(83560,(b=i,i=i+1|0,i=i+7&-8,c[b>>2]=0,b)|0);i=b;j2(82272,(b=i,i=i+1|0,i=i+7&-8,c[b>>2]=0,b)|0);i=b;j2(81424,(b=i,i=i+1|0,i=i+7&-8,c[b>>2]=0,b)|0);i=b;if((c[725972]|0)!=0){b8(3546632,1)}au(c[m>>2]|0)|0;b8(3546632,1)}function kb(a){a=a|0;var b=0;if((c[725972]|0)==0){b=c[m>>2]|0;au(b|0)|0}j2(80320,(b=i,i=i+8|0,c[b>>2]=a,b)|0);i=b;kh(4);a$(1)}function kc(a){a=a|0;j2(79128,(a=i,i=i+1|0,i=i+7&-8,c[a>>2]=0,a)|0);i=a;lg(1)|0;kh(5);kA();j0();if((c[725972]|0)==0){a=c[m>>2]|0;au(a|0)|0}b$(c[n>>2]|0);b8(3546632,1)}function kd(){na();c[723698]=k4(sZ(59944)|0)|0;c[723694]=sZ(81600)|0;return}function ke(){var a=0;a=c[723698]|0;if((a|0)!=0){vW(a);c[723698]=0}a=c[723694]|0;if((a|0)!=0){vW(a);c[723694]=0}a=c[676264]|0;if((a|0)!=0){vW(a);c[676264]=0}a=c[676248]|0;if((a|0)==0){return}vW(a);c[676248]=0;return}function kf(a){a=a|0;var b=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0;b=i;rU(a);c[676238]=0;rV(0)|0;kT();oa();c[725992]=c[725940];a=un(1)|0;do{if((a|0)<0){e=c[723822]|0;f=c[e+(a<<2)>>2]|0;if((f|0)==60){g=c[723820]|0;h=c[g+(a<<2)>>2]|0;j=c[e+(h<<2)>>2]|0;k=c[g+(h<<2)>>2]|0;if((k|0)>=0){l=j;n=k;o=994;break}p=j;q=k;r=c[e+(k<<2)>>2]|0}else{p=0;q=a;r=f}s=(r-1|0)>>>0<128>>>0?r:145;t=p;u=q}else{l=0;n=a;o=994}}while(0);if((o|0)==994){s=d[90632+n|0]|0;t=l;u=n}if((s|0)==61){j3(0);s=c[m>>2]|0;j4(s,70264,(v=i,i=i+1|0,i=i+7&-8,c[v>>2]=0,v)|0);i=v;j4(s,65368,(v=i,i=i+1|0,i=i+7&-8,c[v>>2]=0,v)|0);i=v;mR(s,a);j4(s,61960,(v=i,i=i+1|0,i=i+7&-8,c[v>>2]=0,v)|0);i=v;mP(s,c[723682]|0);j4(s,59176,(v=i,i=i+1|0,i=i+7&-8,c[v>>2]=0,v)|0);i=v;j5()}s=tK(t,a)|0;do{if((s|0)==0){do{if((c[5446]|0)==0){w=c[679990]|0}else{n=uf(t,q8(c[726550]|0,u)|0)|0;if((n|0)==0){c[676268]=0;j3(0);l=c[m>>2]|0;j4(l,53752,(v=i,i=i+1|0,i=i+7&-8,c[v>>2]=0,v)|0);i=v;j4(l,61960,(v=i,i=i+1|0,i=i+7&-8,c[v>>2]=0,v)|0);i=v;mP(l,c[723682]|0);j4(l,55168,(v=i,i=i+1|0,i=i+7&-8,c[v>>2]=0,v)|0);i=v;mR(l,a);j4(l,59176,(v=i,i=i+1|0,i=i+7&-8,c[v>>2]=0,v)|0);i=v;j5()}else{w=q8(c[679936]|0,n)|0;break}}}while(0);n=q8(w,rL(0)|0)|0;l=q8(n,c[723682]|0)|0;n=q8(l,c[680026]|0)|0;c[723682]=n;l=q8(c[679986]|0,n)|0;c[723682]=l;x=l}else{if((c[725970]|0)==0){x=c[723682]|0;break}do{if((c[5446]|0)==0){y=c[679990]|0}else{l=uf(t,q8(c[726550]|0,s)|0)|0;if((l|0)==0){c[676268]=0;j3(0);n=c[m>>2]|0;j4(n,56928,(v=i,i=i+1|0,i=i+7&-8,c[v>>2]=0,v)|0);i=v;j4(n,61960,(v=i,i=i+1|0,i=i+7&-8,c[v>>2]=0,v)|0);i=v;mP(n,c[723682]|0);j4(n,55168,(v=i,i=i+1|0,i=i+7&-8,c[v>>2]=0,v)|0);i=v;mR(n,a);j4(n,59176,(v=i,i=i+1|0,i=i+7&-8,c[v>>2]=0,v)|0);i=v;j5()}else{y=q8(c[679936]|0,l)|0;break}}}while(0);l=c[680378]|0;n=q8(l,q8(y,rL(0)|0)|0)|0;l=q8(n,c[680026]|0)|0;n=q8(q8(c[680434]|0,c[679986]|0)|0,l)|0;l=q8(q8(c[680092]|0,c[723682]|0)|0,n)|0;c[723682]=l;x=l}}while(0);c[723682]=q8(c[680086]|0,x)|0;i4();c[670386]=-1;lR(c[723686]|0,-1);c[679906]=0;c[679898]=0;c[679900]=0;c[676268]=1;c[886978]=0;c[679874]=0;rN();rJ();c[6614]=0;x=c[670386]|0;if(!((a|0)!=0&(c[886992]|0)!=0)){c[670386]=x-1;y=lX(c[2906632+(x<<2)>>2]|0)|0;if((y|0)==0){j0();i=b;return}c4(52536,y);j0();i=b;return}y=2906632+(x<<2)|0;s=c[y>>2]|0;c[2906632+(x+1<<2)>>2]=s;c[y>>2]=a;c[670386]=x;x=lX(s)|0;if((x|0)!=0){c4(52536,x)}c[670386]=(c[670386]|0)-1;if((c[22654]|0)!=(c[679950]|0)){j0();i=b;return}j2(89088,(v=i,i=i+1|0,i=i+7&-8,c[v>>2]=0,v)|0);i=v;v=c[m>>2]|0;x=c[670386]|0;c[670386]=x-1;mR(v,c[2906632+(x<<2)>>2]|0);j0();i=b;return}function kg(){var a=0,b=0,d=0,e=0;a=i;if((c[723698]|0)==0){kb(87064)}b=k1(85040)|0;if((b|0)==0){d=c[723698]|0;j2(83408,(e=i,i=i+16|0,c[e>>2]=85040,c[e+8>>2]=d,e)|0);i=e;kb(82176)}ne(b,0);b=k1(81392)|0;if((b|0)==0){d=c[723698]|0;j2(83408,(e=i,i=i+16|0,c[e>>2]=81392,c[e+8>>2]=d,e)|0);i=e;kb(80248)}else{ne(b,0);kh(3);b=c[722550]|0;c[722550]=0;nk(0);c[722550]=b;i=a;return}}function kh(a){a=a|0;lC(a);sW(a);t3(a);kR(a);ob(a);uo(a);i5(a);lZ(a);i1(a);d3(a);sV(a);m9(a);ki(a);nm(a);return}function ki(a){a=a|0;if((a|0)!=1){return}a=c[678802]|0;if((a|0)!=0){at(a|0)|0;c[678802]=0}c[723688]=0;return}function kj(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0;b=i;d=(v4(a|0)|0)+11|0;e=c[726012]|0;if((e|0)==0){f=0;g=vV(d)|0}else{h=v4(e|0)|0;f=h;g=vY(e,h+d|0)|0}c[726012]=g;if((g|0)==0){j3(0);j4(c[m>>2]|0,59368,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0);i=j;j5()}else{d=g+f|0;a0(d|0,81432,(j=i,i=i+8|0,c[j>>2]=a,j)|0)|0;i=j;i=b;return}}function kk(a,b){a=a|0;b=b|0;var c=0;if((a|0)==0){c=(b|0)!=0|0}else{c=1}return c|0}function kl(a){a=a|0;var b=0,d=0,e=0;b=i;d=lx(a)|0;a=bk(d|0,70104)|0;if((a|0)==0){j3(0);j4(c[m>>2]|0,65280,(e=i,i=i+8|0,c[e>>2]=d,e)|0);i=e;j5()}c[678802]=a;ax(61888,44,1,a|0)|0;ax(59152,20,1,c[678802]|0)|0;ax(56904,19,1,c[678802]|0)|0;a=c[726012]|0;if((a|0)!=0){e=c[678802]|0;br(a|0,e|0)|0}aw(10,c[678802]|0)|0;ax(52504,27,1,c[678802]|0)|0;i=b;return}function km(b,d,e,f){b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;g=i;aw(10,c[678802]|0)|0;ax(89032,50,1,c[678802]|0)|0;if((e|0)!=0){h=e;do{e=c[678802]|0;j=(c[(c[723822]|0)+(h<<2)>>2]|0)-5425|0;k=qX(c[565080+(j<<6)>>2]|0)|0;bW(e|0,87048,(l=i,i=i+8|0,c[l>>2]=k,l)|0)|0;i=l;bW(c[678802]|0,85032,(l=i,i=i+8|0,c[l>>2]=c[565100+(j<<6)>>2],l)|0)|0;i=l;k=c[678802]|0;e=qX(c[565120+(j<<6)>>2]|0)|0;m=c[565124+(j<<6)>>2]|0;bW(k|0,83384,(l=i,i=i+16|0,c[l>>2]=e,c[l+8>>2]=m,l)|0)|0;i=l;h=c[(c[723820]|0)+(h<<2)>>2]|0;}while((h|0)!=0)}if((f|0)!=0){h=f;do{m=(c[(c[723822]|0)+(h<<2)>>2]|0)-5425|0;e=565120+(m<<6)|0;if((q$(c[e>>2]|0)|0)!=0){k=c[678802]|0;j=qX(c[565080+(m<<6)>>2]|0)|0;bW(k|0,82160,(l=i,i=i+8|0,c[l>>2]=j,l)|0)|0;i=l;j=c[678802]|0;k=qX(c[e>>2]|0)|0;bW(j|0,81376,(l=i,i=i+8|0,c[l>>2]=k,l)|0)|0;i=l}h=c[(c[723820]|0)+(h<<2)>>2]|0;}while((h|0)!=0)}ax(80240,3,1,c[678802]|0)|0;aw(10,c[678802]|0)|0;ax(78992,82,1,c[678802]|0)|0;h=(f|0)!=0;do{if(h){k=c[678802]|0;bW(k|0,77352,(l=i,i=i+8|0,c[l>>2]=1,l)|0)|0;i=l;k=f;do{j=(c[(c[723822]|0)+(k<<2)>>2]|0)-5425|0;e=c[565120+(j<<6)>>2]|0;if((q$(e)|0)==0){m=c[678802]|0;n=qX(e)|0;bW(m|0,76040,(l=i,i=i+8|0,c[l>>2]=n,l)|0)|0;i=l;n=c[678802]|0;ax(74904,17,1,n|0)|0;n=c[678802]|0;m=qX(c[2613080+((c[565088+(j<<6)>>2]|0)-2625<<5)>>2]|0)|0;bW(n|0,73416,(l=i,i=i+8|0,c[l>>2]=m,l)|0)|0;i=l;m=c[678802]|0;n=qX(c[565080+(j<<6)>>2]|0)|0;bW(m|0,72336,(l=i,i=i+8|0,c[l>>2]=n,l)|0)|0;i=l;n=c[678802]|0;ax(71536,3,1,n|0)|0}k=c[(c[723820]|0)+(k<<2)>>2]|0;}while((k|0)!=0);if(!h){break}ax(70816,6,1,c[678802]|0)|0}}while(0);ax(70064,2,1,c[678802]|0)|0;aw(10,c[678802]|0)|0;ax(69208,22,1,c[678802]|0)|0;ax(68560,23,1,c[678802]|0)|0;h=qX(d)|0;d=aV(h|0,46)|0;f=c[678802]|0;if((d|0)==0){o=h;p=f}else{k=h;h=d;d=f;while(1){aw(a[k]|0,d|0)|0;f=h+1|0;n=aV(f|0,46)|0;m=c[678802]|0;if((n|0)==0){o=f;p=m;break}else{k=f;h=n;d=m}}}bW(p|0,67968,(l=i,i=i+8|0,c[l>>2]=o,l)|0)|0;i=l;ax(67592,7,1,c[678802]|0)|0;aw(10,c[678802]|0)|0;bW(c[678802]|0,66800,(l=i,i=i+8|0,c[l>>2]=5,l)|0)|0;i=l;ax(66408,31,1,c[678802]|0)|0;at(c[678802]|0)|0;c[678802]=0;lA(b,c[724898]|0);b=c[724898]|0;if((b|0)==0){i=g;return}vW(b);c[724898]=0;i=g;return}function kn(a,b,d,e,f,g,h,j,k,l){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;h=h|0;j=j|0;k=k|0;l=l|0;var m=0,n=0,o=0,p=0;h=i;do{if((e|0)!=-1){if((sw(e,c[723688]|0)|0)!=0){break}g=c[678802]|0;b=qX(e)|0;bW(g|0,82976,(m=i,i=i+8|0,c[m>>2]=b,m)|0)|0;i=m;b=q8(4,e)|0;c[723688]=q8(b,c[723688]|0)|0}}while(0);ax(66048,32,1,c[678802]|0)|0;e=c[678802]|0;b=qX(f)|0;bW(e|0,65656,(m=i,i=i+8|0,c[m>>2]=b,m)|0)|0;i=m;ax(67592,7,1,c[678802]|0)|0;b=c[678802]|0;e=qX(f)|0;bW(b|0,83096,(m=i,i=i+16|0,c[m>>2]=e,c[m+8>>2]=d,m)|0)|0;i=m;e=c[678802]|0;b=qX(f)|0;bW(e|0,83256,(m=i,i=i+16|0,c[m>>2]=b,c[m+8>>2]=d,m)|0)|0;i=m;ax(65272,2,1,c[678802]|0)|0;d=(j|0)==0;L1334:do{if(!d){b=j;e=1;while(1){g=c[(c[723822]|0)+(b<<2)>>2]|0;if((c[34698]|0)!=(g|0)){n=c[678802]|0;ax(64352,4,1,n|0)|0;kw(a,g);g=c[678802]|0;bW(g|0,83376,(m=i,i=i+16|0,c[m>>2]=64968,c[m+8>>2]=e,m)|0)|0;i=m}g=c[(c[723820]|0)+(b<<2)>>2]|0;if((g|0)==0){break L1334}b=g;e=e+1|0}}}while(0);if((c[34698]|0)!=(l|0)){e=c[678802]|0;ax(64352,4,1,e|0)|0;kw(a,l);e=c[678802]|0;bW(e|0,83376,(m=i,i=i+16|0,c[m>>2]=64608,c[m+8>>2]=1,m)|0)|0;i=m}if(!d){e=j;b=1;while(1){ax(64352,4,1,c[678802]|0)|0;kt(a,c[(c[723822]|0)+(e<<2)>>2]|0,64968,b);g=c[(c[723820]|0)+(e<<2)>>2]|0;if((g|0)==0){break}else{e=g;b=b+1|0}}}ko(f,j,l);ax(64352,4,1,c[678802]|0)|0;kp(a,l,64608,1);a=(k|0)!=0;if(d&(a^1)){o=c[678802]|0;p=ax(70064,2,1,o|0)|0;i=h;return}d=(c[34698]|0)!=(l|0)|0;bW(c[678802]|0,64072,(m=i,i=i+16|0,c[m>>2]=a?63784:63280,c[m+8>>2]=d,m)|0)|0;i=m;o=c[678802]|0;p=ax(70064,2,1,o|0)|0;i=h;return}function ko(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;e=i;ax(64352,4,1,c[678802]|0)|0;if((c[34698]|0)!=(d|0)){d=c[678802]|0;ax(83848,7,1,d|0)|0}d=c[678802]|0;f=qX(a)|0;bW(d|0,83744,(d=i,i=i+8|0,c[d>>2]=f,d)|0)|0;i=d;f=c[678802]|0;if((b|0)==0){g=f;h=ax(71536,3,1,g|0)|0;i=e;return}else{j=b;k=1;l=f}while(1){bW(l|0,83616,(d=i,i=i+8|0,c[d>>2]=k,d)|0)|0;i=d;f=c[678802]|0;if((c[(c[723820]|0)+(j<<2)>>2]|0)==0){g=f;m=1096;break}ax(53488,2,1,f|0)|0;f=c[(c[723820]|0)+(j<<2)>>2]|0;b=c[678802]|0;if((f|0)==0){g=b;m=1094;break}else{j=f;k=k+1|0;l=b}}if((m|0)==1096){h=ax(71536,3,1,g|0)|0;i=e;return}else if((m|0)==1094){h=ax(71536,3,1,g|0)|0;i=e;return}}function kp(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;f=i;if((c[34698]|0)==(b|0)){g=c[678802]|0;aw(10,g|0)|0;i=f;return}if((c[34750]|0)==(b|0)){g=c[678802]|0;bW(g|0,87392,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34732]|0)==(b|0)){g=c[678802]|0;bW(g|0,87264,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34724]|0)==(b|0)){g=c[678802]|0;bW(g|0,87024,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34730]|0)==(b|0)){g=c[678802]|0;bW(g|0,86880,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34728]|0)==(b|0)){g=c[678802]|0;bW(g|0,86664,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34726]|0)==(b|0)){g=c[678802]|0;bW(g|0,86528,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34686]|0)==(b|0)){g=c[678802]|0;bW(g|0,86368,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34692]|0)==(b|0)){g=c[678802]|0;bW(g|0,86208,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34690]|0)==(b|0)){g=c[678802]|0;bW(g|0,85856,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34688]|0)==(b|0)){g=c[678802]|0;bW(g|0,85656,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34746]|0)==(b|0)){g=c[678802]|0;bW(g|0,85416,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34748]|0)==(b|0)){g=c[678802]|0;bW(g|0,85240,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34752]|0)==(b|0)){g=c[678802]|0;bW(g|0,85008,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34756]|0)==(b|0)){g=c[678802]|0;bW(g|0,84896,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}g=sK(b)|0;if((g|0)==(c[34706]|0)){g=c[678802]|0;bW(g|0,84704,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}g=sK(b)|0;if((g|0)==(c[34738]|0)){g=c[678802]|0;bW(g|0,84576,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}g=sK(b)|0;if((g|0)==(c[34744]|0)){g=c[678802]|0;bW(g|0,84432,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}g=sK(b)|0;if((g|0)!=(c[34702]|0)){j3(a);a=c[m>>2]|0;j4(a,84008,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0);i=h;j4(a,54104,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0);i=h;mR(a,b);j4(a,54016,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0);i=h;j5()}bW(c[678802]|0,84256,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}function kq(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;h=i;j=c[678802]|0;k=qX(d)|0;bW(j|0,83096,(j=i,i=i+16|0,c[j>>2]=k,c[j+8>>2]=b,j)|0)|0;i=j;k=c[678802]|0;l=qX(d)|0;bW(k|0,83256,(j=i,i=i+16|0,c[j>>2]=l,c[j+8>>2]=b,j)|0)|0;i=j;ax(65272,2,1,c[678802]|0)|0;ax(64352,4,1,c[678802]|0)|0;kr(a,d,1,0,e,g);ax(62872,2,1,c[678802]|0)|0;b=(e|0)==0;L1443:do{if(!b){l=e;k=1;while(1){m=c[(c[723822]|0)+(l<<2)>>2]|0;if((c[34698]|0)!=(m|0)){n=c[678802]|0;ax(64352,4,1,n|0)|0;kw(a,m);m=c[678802]|0;bW(m|0,83376,(j=i,i=i+16|0,c[j>>2]=64968,c[j+8>>2]=k,j)|0)|0;i=j}m=c[(c[723820]|0)+(l<<2)>>2]|0;if((m|0)==0){break L1443}l=m;k=k+1|0}}}while(0);if((c[34698]|0)!=(g|0)){k=c[678802]|0;ax(64352,4,1,k|0)|0;kw(a,g);k=c[678802]|0;bW(k|0,83376,(j=i,i=i+16|0,c[j>>2]=64608,c[j+8>>2]=1,j)|0)|0;i=j}k=c[678802]|0;l=qX(d)|0;bW(k|0,62552,(j=i,i=i+8|0,c[j>>2]=l,j)|0)|0;i=j;aw(40,c[678802]|0)|0;if((c[34698]|0)==(g|0)){l=c[678802]|0;ax(53744,4,1,l|0)|0}else{kw(a,g)}ax(53624,5,1,c[678802]|0)|0;if(b){l=c[678802]|0;ax(53408,2,1,l|0)|0;l=c[678802]|0;ax(62248,19,1,l|0)|0}else{l=e;do{kw(a,c[(c[723822]|0)+(l<<2)>>2]|0);if((c[(c[723820]|0)+(l<<2)>>2]|0)==0){break}ax(53488,2,1,c[678802]|0)|0;l=c[(c[723820]|0)+(l<<2)>>2]|0;}while((l|0)!=0);ax(53408,2,1,c[678802]|0)|0;ax(62248,19,1,c[678802]|0)|0;l=e;k=1;while(1){ax(64352,4,1,c[678802]|0)|0;kt(a,c[(c[723822]|0)+(l<<2)>>2]|0,64968,k);m=c[(c[723820]|0)+(l<<2)>>2]|0;if((m|0)==0){break}else{l=m;k=k+1|0}}}ko(d,e,g);ax(64352,4,1,c[678802]|0)|0;kp(a,g,64608,1);a=(f|0)!=0;if(b&(a^1)){o=c[678802]|0;p=ax(70064,2,1,o|0)|0;i=h;return}b=(c[34698]|0)!=(g|0)|0;bW(c[678802]|0,64072,(j=i,i=i+16|0,c[j>>2]=a?63784:63280,c[j+8>>2]=b,j)|0)|0;i=j;o=c[678802]|0;p=ax(70064,2,1,o|0)|0;i=h;return}function kr(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;h=i;if((c[34698]|0)==(g|0)){j=c[678802]|0;ax(53744,4,1,j|0)|0}else{kw(a,g)}g=c[678802]|0;j=qX(b)|0;if((d|0)==0){bW(g|0,88248,(k=i,i=i+8|0,c[k>>2]=j,k)|0)|0;i=k}else{bW(g|0,88408,(k=i,i=i+8|0,c[k>>2]=j,k)|0)|0;i=k}aw(40,c[678802]|0)|0;do{if((e|0)!=0){j=c[678802]|0;ax(88056,18,1,j|0)|0;if((f|0)==0){l=c[678802]|0;m=aw(41,l|0)|0;i=h;return}else{j=c[678802]|0;ax(53488,2,1,j|0)|0;break}}}while(0);if((f|0)==0){l=c[678802]|0;m=aw(41,l|0)|0;i=h;return}else{n=f;o=1}while(1){kw(a,c[(c[723822]|0)+(n<<2)>>2]|0);bW(c[678802]|0,87664,(k=i,i=i+8|0,c[k>>2]=o,k)|0)|0;i=k;if((c[(c[723820]|0)+(n<<2)>>2]|0)==0){p=1190;break}ax(53488,2,1,c[678802]|0)|0;f=c[(c[723820]|0)+(n<<2)>>2]|0;if((f|0)==0){p=1193;break}else{n=f;o=o+1|0}}if((p|0)==1190){l=c[678802]|0;m=aw(41,l|0)|0;i=h;return}else if((p|0)==1193){l=c[678802]|0;m=aw(41,l|0)|0;i=h;return}}function ks(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0;h=i;ax(61872,8,1,c[678802]|0)|0;kr(a,d,0,1,e,g);ax(62872,2,1,c[678802]|0)|0;ax(61504,7,1,c[678802]|0)|0;kr(a,d,0,1,e,g);ax(61088,3,1,c[678802]|0)|0;if((c[34698]|0)!=(g|0)){j=c[678802]|0;ax(64352,4,1,j|0)|0;kw(a,g);j=c[678802]|0;bW(j|0,83376,(k=i,i=i+16|0,c[k>>2]=64608,c[k+8>>2]=1,k)|0)|0;i=k}ax(60896,33,1,c[678802]|0)|0;if((e|0)!=0){j=e;l=1;while(1){ax(64352,4,1,c[678802]|0)|0;kp(a,c[(c[723822]|0)+(j<<2)>>2]|0,64968,l);m=c[(c[723820]|0)+(j<<2)>>2]|0;if((m|0)==0){break}else{j=m;l=l+1|0}}}l=c[678802]|0;j=sq(e)|0;bW(l|0,60728,(k=i,i=i+16|0,c[k>>2]=(f|0)!=0?63784:63280,c[k+8>>2]=j,k)|0)|0;i=k;ax(60520,36,1,c[678802]|0)|0;ax(64352,4,1,c[678802]|0)|0;kt(a,g,64608,1);a=c[678802]|0;if((c[34698]|0)==(g|0)){ax(57824,12,1,a|0)|0}else{bW(a|0,58128,(k=i,i=i+16|0,c[k>>2]=64608,c[k+8>>2]=1,k)|0)|0;i=k}ax(70064,2,1,c[678802]|0)|0;a=c[678802]|0;g=qX(d)|0;bW(a|0,83096,(k=i,i=i+16|0,c[k>>2]=g,c[k+8>>2]=b,k)|0)|0;i=k;g=c[678802]|0;a=qX(d)|0;bW(g|0,83256,(k=i,i=i+16|0,c[k>>2]=a,c[k+8>>2]=b,k)|0)|0;i=k;b=c[678802]|0;a=qX(d)|0;bW(b|0,60160,(k=i,i=i+8|0,c[k>>2]=a,k)|0)|0;i=k;ax(59720,61,1,c[678802]|0)|0;i=h;return}function kt(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0;f=i;if((c[34698]|0)==(b|0)){g=c[678802]|0;ax(57552,17,1,g|0)|0;i=f;return}if((c[34750]|0)==(b|0)){g=c[678802]|0;bW(g|0,57368,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34732]|0)==(b|0)){g=c[678802]|0;bW(g|0,57200,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34724]|0)==(b|0)){g=c[678802]|0;bW(g|0,56872,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34730]|0)==(b|0)){g=c[678802]|0;bW(g|0,56704,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34728]|0)==(b|0)){g=c[678802]|0;bW(g|0,56488,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34726]|0)==(b|0)){g=c[678802]|0;bW(g|0,56328,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34686]|0)==(b|0)){g=c[678802]|0;bW(g|0,56232,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34692]|0)==(b|0)){g=c[678802]|0;bW(g|0,56144,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34690]|0)==(b|0)){g=c[678802]|0;bW(g|0,55840,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34688]|0)==(b|0)){g=c[678802]|0;bW(g|0,55592,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34746]|0)==(b|0)){g=c[678802]|0;bW(g|0,55464,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34748]|0)==(b|0)){g=c[678802]|0;bW(g|0,55336,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34752]|0)==(b|0)){g=c[678802]|0;bW(g|0,55136,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}if((c[34756]|0)==(b|0)){g=c[678802]|0;bW(g|0,55008,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}g=sK(b)|0;if((g|0)==(c[34706]|0)){g=c[678802]|0;bW(g|0,54880,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}g=sK(b)|0;if((g|0)==(c[34738]|0)){g=c[678802]|0;bW(g|0,54752,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}g=sK(b)|0;if((g|0)==(c[34744]|0)){g=c[678802]|0;bW(g|0,54640,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}g=sK(b)|0;if((g|0)!=(c[34702]|0)){j3(a);a=c[m>>2]|0;j4(a,54272,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0);i=h;j4(a,54104,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0);i=h;mR(a,b);j4(a,54016,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0);i=h;j5()}bW(c[678802]|0,54520,(h=i,i=i+16|0,c[h>>2]=d,c[h+8>>2]=e,h)|0)|0;i=h;i=f;return}function ku(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0;b=i;ax(59600,8,1,c[678802]|0)|0;kr(a,d,0,0,e,g);ax(62872,2,1,c[678802]|0)|0;h=c[678802]|0;j=qX(d)|0;bW(h|0,59432,(h=i,i=i+8|0,c[h>>2]=j,h)|0)|0;i=h;kr(a,d,0,0,e,g);ax(61088,3,1,c[678802]|0)|0;if((c[34698]|0)!=(g|0)){j=c[678802]|0;ax(64352,4,1,j|0)|0;kw(a,g);j=c[678802]|0;bW(j|0,83376,(h=i,i=i+16|0,c[h>>2]=64608,c[h+8>>2]=1,h)|0)|0;i=h}j=c[678802]|0;k=qX(d)|0;bW(j|0,59112,(h=i,i=i+8|0,c[h>>2]=k,h)|0)|0;i=h;if((e|0)!=0){k=e;j=1;while(1){ax(64352,4,1,c[678802]|0)|0;kp(a,c[(c[723822]|0)+(k<<2)>>2]|0,64968,j);d=c[(c[723820]|0)+(k<<2)>>2]|0;if((d|0)==0){break}else{k=d;j=j+1|0}}}j=c[678802]|0;k=sq(e)|0;if((f|0)==0){bW(j|0,58744,(h=i,i=i+8|0,c[h>>2]=k,h)|0)|0;i=h}else{bW(j|0,58952,(h=i,i=i+8|0,c[h>>2]=k,h)|0)|0;i=h;k=c[678802]|0;ax(60520,36,1,k|0)|0}ax(64352,4,1,c[678802]|0)|0;kt(a,g,64608,1);a=c[678802]|0;if((c[34698]|0)==(g|0)){ax(57824,12,1,a|0)|0;l=c[678802]|0;m=ax(70064,2,1,l|0)|0;i=b;return}else{bW(a|0,58128,(h=i,i=i+16|0,c[h>>2]=64608,c[h+8>>2]=1,h)|0)|0;i=h;l=c[678802]|0;m=ax(70064,2,1,l|0)|0;i=b;return}}function kv(a,b,d,e,f,g){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0;f=i;do{if((d|0)!=-1){if((sw(d,c[723688]|0)|0)!=0){break}a=c[678802]|0;h=qX(d)|0;bW(a|0,82976,(j=i,i=i+8|0,c[j>>2]=h,j)|0)|0;i=j;h=q8(4,d)|0;c[723688]=q8(h,c[723688]|0)|0}}while(0);ax(66048,32,1,c[678802]|0)|0;d=c[678802]|0;h=qX(e)|0;bW(d|0,65656,(j=i,i=i+8|0,c[j>>2]=h,j)|0)|0;i=j;ax(67592,7,1,c[678802]|0)|0;h=c[678802]|0;d=qX(e)|0;bW(h|0,83096,(j=i,i=i+16|0,c[j>>2]=d,c[j+8>>2]=b,j)|0)|0;i=j;d=c[678802]|0;h=qX(e)|0;bW(d|0,83256,(j=i,i=i+16|0,c[j>>2]=h,c[j+8>>2]=b,j)|0)|0;i=j;ax(65272,2,1,c[678802]|0)|0;b=sK(g)|0;g=(b|0)==(c[34738]|0);b=c[678802]|0;h=qX(e)|0;if(g){bW(b|0,58544,(j=i,i=i+8|0,c[j>>2]=h,j)|0)|0;i=j;k=c[678802]|0;l=ax(70064,2,1,k|0)|0;i=f;return}else{bW(b|0,58288,(j=i,i=i+8|0,c[j>>2]=h,j)|0)|0;i=j;k=c[678802]|0;l=ax(70064,2,1,k|0)|0;i=f;return}}function kw(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;if((c[34750]|0)==(b|0)){e=c[678802]|0;ax(53336,6,1,e|0)|0;i=d;return}if((c[34732]|0)==(b|0)){e=c[678802]|0;ax(53192,5,1,e|0)|0;i=d;return}if((c[34724]|0)==(b|0)){e=c[678802]|0;ax(52904,6,1,e|0)|0;i=d;return}if((c[34730]|0)==(b|0)){e=c[678802]|0;ax(52792,7,1,e|0)|0;i=d;return}if((c[34728]|0)==(b|0)){e=c[678802]|0;ax(52720,7,1,e|0)|0;i=d;return}if((c[34726]|0)==(b|0)){e=c[678802]|0;ax(52648,7,1,e|0)|0;i=d;return}if((c[34686]|0)==(b|0)){e=c[678802]|0;ax(52496,7,1,e|0)|0;i=d;return}if((c[34692]|0)==(b|0)){e=c[678802]|0;ax(52368,8,1,e|0)|0;i=d;return}if((c[34690]|0)==(b|0)){e=c[678802]|0;ax(52240,8,1,e|0)|0;i=d;return}if((c[34688]|0)==(b|0)){e=c[678802]|0;ax(52136,8,1,e|0)|0;i=d;return}if((c[34746]|0)==(b|0)){e=c[678802]|0;ax(52024,7,1,e|0)|0;i=d;return}if((c[34748]|0)==(b|0)){e=c[678802]|0;ax(90312,8,1,e|0)|0;i=d;return}if((c[34752]|0)==(b|0)){e=c[678802]|0;ax(89992,6,1,e|0)|0;i=d;return}if((c[34756]|0)==(b|0)){e=c[678802]|0;ax(89760,6,1,e|0)|0;i=d;return}e=sK(b)|0;if((e|0)==(c[34706]|0)){e=c[678802]|0;ax(89552,5,1,e|0)|0;i=d;return}e=sK(b)|0;if((e|0)==(c[34738]|0)){e=c[678802]|0;ax(89328,8,1,e|0)|0;i=d;return}e=sK(b)|0;if((e|0)==(c[34744]|0)){e=c[678802]|0;ax(89016,11,1,e|0)|0;i=d;return}e=sK(b)|0;if((e|0)!=(c[34702]|0)){j3(a);a=c[m>>2]|0;j4(a,88536,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0);i=e;j4(a,54104,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0);i=e;mR(a,b);j4(a,54016,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0);i=e;j5()}ax(88768,11,1,c[678802]|0)|0;i=d;return}function kx(b,d){b=b|0;d=d|0;var e=0,f=0,g=0;e=i;if((c[5636]|0)!=0){i=e;return}c[726008]=(d|0)!=0?d:1;a[52e3]=1;do{if((c[34646]|0)==0){c[726652]=0;d=a[b]|0;if(d<<24>>24==0){break}else{f=b;g=d}do{f=f+1|0;j1(g<<24>>24);c[726652]=(c[726652]|0)+1;g=a[f]|0;}while(g<<24>>24!=0)}else{c[726010]=v4(b|0)|0;c[682526]=(lf()|0)-1;j2(56360,(d=i,i=i+8|0,c[d>>2]=b,d)|0);i=d}}while(0);j6();i=e;return}function ky(a){a=a|0;var b=0,d=0;if(!((c[5636]|0)==0&(c[34646]|0)!=0)){return}b=c[682526]|0;d=aa(b,a)|0;a=(d|0)/(c[726008]|0)|0;d=(a|0)>(b|0)?b:a;if((d|0)>(c[726010]|0)){do{j1(46);a=(c[726010]|0)+1|0;c[726010]=a;}while((d|0)>(a|0));j6()}j6();return}function kz(){var b=0,d=0;if((c[5636]|0)!=0){return}do{if((c[34646]|0)==0){if((c[726652]|0)<=0){break}do{j1(8);j1(32);j1(8);b=(c[726652]|0)-1|0;c[726652]=b;}while((b|0)>0)}else{b=c[682526]|0;d=c[726010]|0;c[726010]=d+1;if((b|0)>(d|0)){do{j1(46);d=c[682526]|0;b=c[726010]|0;c[726010]=b+1;}while((d|0)>(b|0))}j1(10)}}while(0);a[52e3]=0;j6();return}function kA(){if(!(a[52e3]|0)){return}a[52e3]=0;j1(10);j6();return}function kB(a){a=a|0;var b=0,d=0;b=i;c[676250]=1;c[886698]=32;c[886700]=32;c[726546]=-1;c[676244]=0;c[723816]=0;j2(56128,(d=i,i=i+8|0,c[d>>2]=a,d)|0);i=d;j6();i=b;return}function kC(b){b=b|0;var d=0,e=0,f=0,g=0;c[676250]=3;c[886700]=-1;c[886698]=-1;d=a[b]|0;do{if(d<<24>>24==0){e=b}else{f=b+1|0;c[886700]=d<<24>>24;g=a[f]|0;if(g<<24>>24==0){e=f;break}c[886698]=g<<24>>24;e=b+2|0}}while(0);c[726546]=1;c[676244]=1;c[679912]=e;if((c[726650]|0)!=0){return}iS();return}
// EMSCRIPTEN_END_FUNCS
var cm=[wq,wq,dn,wq];var cn=[wr,wr,df,wr];var co=[ws,ws,dm,ws];var cp=[wt,wt,de,wt];var cq=[wu,wu,dZ,wu,dC,wu,dH,wu,dg,wu,dc,wu,di,wu,d1,wu,dE,wu,cR,wu,kZ,wu,rY,wu,dd,wu,lE,wu,dA,wu,db,wu,dK,wu,dI,wu,dD,wu,nd,wu,dh,wu,dG,wu,dM,wu,dL,wu,dJ,wu,dF,wu,wu,wu,wu,wu,wu,wu,wu,wu,wu,wu,wu,wu];var cr=[wv,wv,hB,wv,fZ,wv,f3,wv,ek,wv,fz,wv,hw,wv,gC,wv,dz,wv,gD,wv,hh,wv,eJ,wv,eQ,wv,hX,wv,d2,wv,dW,wv,iI,wv,il,wv,hc,wv,ig,wv,e8,wv,fP,wv,dj,wv,e1,wv,hp,wv,eI,wv,f6,wv,gv,wv,hE,wv,iE,wv,e0,wv,h2,wv,fa,wv,eT,wv,fM,wv,eZ,wv,ee,wv,it,wv,dp,wv,eq,wv,g0,wv,hI,wv,kh,wv,hr,wv,iw,wv,hD,wv,h6,wv,hf,wv,iR,wv,h8,wv,dV,wv,fB,wv,eC,wv,g_,wv,ht,wv,gq,wv,fb,wv,eM,wv,fl,wv,eV,wv,es,wv,he,wv,ir,wv,ft,wv,e5,wv,iG,wv,dk,wv,fX,wv,g5,wv,h4,wv,g$,wv,eF,wv,hT,wv,gK,wv,hs,wv,h5,wv,fJ,wv,io,wv,eh,wv,gg,wv,gu,wv,hV,wv,hA,wv,eU,wv,gr,wv,fk,wv,ij,wv,dY,wv,d6,wv,hG,wv,gJ,wv,hm,wv,gL,wv,ii,wv,fI,wv,eG,wv,h$,wv,dP,wv,dr,wv,fv,wv,hl,wv,h_,wv,iA,wv,eA,wv,e_,wv,hb,wv,gF,wv,eX,wv,gt,wv,hQ,wv,id,wv,eO,wv,fO,wv,hP,wv,fi,wv,fQ,wv,d_,wv,cX,wv,g7,wv,f7,wv,fm,wv,ip,wv,gW,wv,gX,wv,ik,wv,eL,wv,hN,wv,gy,wv,gV,wv,eH,wv,dl,wv,iv,wv,fr,wv,ho,wv,hz,wv,g2,wv,iN,wv,ed,wv,e3,wv,dN,wv,gw,wv,fY,wv,gI,wv,ev,wv,h1,wv,ea,wv,h7,wv,fx,wv,go,wv,fS,wv,fg,wv,fo,wv,fe,wv,iD,wv,e4,wv,ia,wv,fs,wv,eg,wv,lh,wv,fw,wv,h0,wv,ey,wv,rp,wv,fd,wv,nk,wv,hC,wv,ew,wv,ef,wv,g4,wv,fq,wv,fW,wv,sS,wv,dS,wv,eE,wv,fc,wv,el,wv,iO,wv,gb,wv,ib,wv,hn,wv,gc,wv,im,wv,lQ,wv,f2,wv,gp,wv,e7,wv,fR,wv,g9,wv,hH,wv,gx,wv,eN,wv,fn,wv,ex,wv,hq,wv,hg,wv,eP,wv,gf,wv,gU,wv,hi,wv,gR,wv,f9,wv,f5,wv,hv,wv,g3,wv,ec,wv,hd,wv,eY,wv,hS,wv,er,wv,gP,wv,fG,wv,hF,wv,iq,wv,gs,wv,gd,wv,gz,wv,em,wv,hM,wv,fF,wv,cV,wv,iP,wv,d5,wv,hK,wv,eR,wv,iK,wv,hk,wv,hy,wv,gN,wv,iF,wv,iQ,wv,gm,wv,fH,wv,gQ,wv,iB,wv,g6,wv,f_,wv,gG,wv,dR,wv,hx,wv,hY,wv,ge,wv,iM,wv,ga,wv,d8,wv,g8,wv,gn,wv,ie,wv,gY,wv,fL,wv,eu,wv,gS,wv,fN,wv,ih,wv,ic,wv,eK,wv,h9,wv,ej,wv,ha,wv,hL,wv,f4,wv,ez,wv,hu,wv,hj,wv,kc,wv,gl,wv,gE,wv,gO,wv,h3,wv,eD,wv,ep,wv,eW,wv,e6,wv,eo,wv,gT,wv,g1,wv,lD,wv,k8,wv,fu,wv,d4,wv,r1,wv,iy,wv,dO,wv,gA,wv,f0,wv,eb,wv,f$,wv,is,wv,iz,wv,fh,wv,iu,wv,kB,wv,ka,wv,hJ,wv,gH,wv,eS,wv,gM,wv,kb,wv,cW,wv,iC,wv,gZ,wv,iJ,wv,hW,wv,dB,wv,hO,wv,dX,wv,fp,wv,d9,wv,fA,wv,et,wv,d7,wv,dT,wv,fj,wv,fK,wv,j3,wv,fy,wv,en,wv,ff,wv,fV,wv,e9,wv,f1,wv,iH,wv,hU,wv,hZ,wv,eB,wv,ix,wv,gB,wv,hR,wv,e$,wv,e2,wv,iL,wv,dw,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv,wv];var cs=[ww,ww,mB,ww,mJ,ww,ne,ww,c9,ww,ng,ww,dq,ww,j2,ww,mG,ww,dQ,ww,dt,ww,ds,ww,dU,ww,r9,ww,ww,ww,ww,ww];var ct=[wx,wx,sZ,wx,du,wx,d$,wx,v4,wx,lg,wx,r6,wx,qX,wx,wd,wx,rn,wx,q1,wx,wx,wx,wx,wx,wx,wx,wx,wx,wx,wx];var cu=[wy,wy,j4,wy];var cv=[wz,wz,nb,wz,kd,wz,k6,wz,mK,wz,r4,wz,j5,wz,kg,wz,k7,wz,dx,wz,wz,wz,wz,wz,wz,wz,wz,wz,wz,wz,wz,wz];var cw=[wA,wA,dy,wA,k5,wA,we,wA,v5,wA,dv,wA,wA,wA,wA,wA];return{_testSetjmp:v8,_saveSetjmp:v7,_strcat:v6,_free:vW,_main:cO,_realloc:vY,_strncpy:wc,_tolower:wb,_memset:wa,_malloc:vV,_memcpy:v9,_strlen:v4,_strcpy:v5,_calloc:vX,runPostSets:cN,stackAlloc:cx,stackSave:cy,stackRestore:cz,setThrew:cA,setTempRet0:cD,setTempRet1:cE,setTempRet2:cF,setTempRet3:cG,setTempRet4:cH,setTempRet5:cI,setTempRet6:cJ,setTempRet7:cK,setTempRet8:cL,setTempRet9:cM,dynCall_vd:wf,dynCall_d:wg,dynCall_vf:wh,dynCall_f:wi,dynCall_i:wj,dynCall_vi:wk,dynCall_vii:wl,dynCall_ii:wm,dynCall_viii:wn,dynCall_v:wo,dynCall_iii:wp}})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vd": invoke_vd, "invoke_d": invoke_d, "invoke_vf": invoke_vf, "invoke_f": invoke_f, "invoke_i": invoke_i, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_lseek": _lseek, "_fclose": _fclose, "_fflush": _fflush, "_strtol": _strtol, "_fputc": _fputc, "_fwrite": _fwrite, "_send": _send, "_mktime": _mktime, "_dlerror": _dlerror, "_isspace": _isspace, "_localtime": _localtime, "_read": _read, "_dlclose": _dlclose, "_fileno": _fileno, "_fsync": _fsync, "_signal": _signal, "_opendir": _opendir, "_fmod": _fmod, "_strcmp": _strcmp, "_memchr": _memchr, "_strncmp": _strncmp, "_snprintf": _snprintf, "_fgetc": _fgetc, "_pclose": _pclose, "_readdir": _readdir, "_mknod": _mknod, "_sigemptyset": _sigemptyset, "_close": _close, "_tcsetattr": _tcsetattr, "_strchr": _strchr, "_asin": _asin, "_clock": _clock, "___setErrNo": ___setErrNo, "_access": _access, "_ftell": _ftell, "_exit": _exit, "_sprintf": _sprintf, "_strrchr": _strrchr, "_fcntl": _fcntl, "_ferror": _ferror, "_getcwd": _getcwd, "_gmtime": _gmtime, "_localtime_r": _localtime_r, "_recv": _recv, "_dlopen": _dlopen, "_cos": _cos, "_putchar": _putchar, "_popen": _popen, "_acos": _acos, "_rename": _rename, "_tzset": _tzset, "_setlocale": _setlocale, "_chmod": _chmod, "_ldexp": _ldexp, "_printf": _printf, "_pread": _pread, "_fopen": _fopen, "_open": _open, "_sqrtf": _sqrtf, "_select": _select, "_frexp": _frexp, "_log": _log, "_puts": _puts, "_fputs": _fputs, "_fdopen": _fdopen, "_sigaction": _sigaction, "_mkdir": _mkdir, "_system": _system, "_isalpha": _isalpha, "_rmdir": _rmdir, "_dup": _dup, "_log10": _log10, "_isatty": _isatty, "__formatString": __formatString, "_sigaddset": _sigaddset, "_getenv": _getenv, "_gettimeofday": _gettimeofday, "_atoi": _atoi, "_vfprintf": _vfprintf, "_chdir": _chdir, "_sbrk": _sbrk, "___errno_location": ___errno_location, "_getrusage": _getrusage, "_fstat": _fstat, "_llvm_lifetime_start": _llvm_lifetime_start, "__parseInt": __parseInt, "_ungetc": _ungetc, "_gmtime_r": _gmtime_r, "_vsnprintf": _vsnprintf, "_sysconf": _sysconf, "_dlsym": _dlsym, "_mprotect": _mprotect, "_fread": _fread, "_abort": _abort, "_fprintf": _fprintf, "_vprintf": _vprintf, "_tan": _tan, "___buildEnvironment": ___buildEnvironment, "_feof": _feof, "_clearerr": _clearerr, "_floor": _floor, "__reallyNegative": __reallyNegative, "_fseek": _fseek, "_sqrt": _sqrt, "_write": _write, "_sin": _sin, "_realpath": _realpath, "_stat": _stat, "_longjmp": _longjmp, "_atan": _atan, "_tcgetattr": _tcgetattr, "_time": _time, "_closedir": _closedir, "_ioctl": _ioctl, "_llvm_va_end": _llvm_va_end, "_unlink": _unlink, "__exit": __exit, "_pwrite": _pwrite, "_exp": _exp, "_readdir_r": _readdir_r, "_setvbuf": _setvbuf, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "_stdout": _stdout, "_stdin": _stdin, "_stderr": _stderr }, buffer);
var _testSetjmp = Module["_testSetjmp"] = asm["_testSetjmp"];
var _saveSetjmp = Module["_saveSetjmp"] = asm["_saveSetjmp"];
var _strcat = Module["_strcat"] = asm["_strcat"];
var _free = Module["_free"] = asm["_free"];
var _main = Module["_main"] = asm["_main"];
var _realloc = Module["_realloc"] = asm["_realloc"];
var _strncpy = Module["_strncpy"] = asm["_strncpy"];
var _tolower = Module["_tolower"] = asm["_tolower"];
var _memset = Module["_memset"] = asm["_memset"];
var _malloc = Module["_malloc"] = asm["_malloc"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _strcpy = Module["_strcpy"] = asm["_strcpy"];
var _calloc = Module["_calloc"] = asm["_calloc"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vd = Module["dynCall_vd"] = asm["dynCall_vd"];
var dynCall_d = Module["dynCall_d"] = asm["dynCall_d"];
var dynCall_vf = Module["dynCall_vf"] = asm["dynCall_vf"];
var dynCall_f = Module["dynCall_f"] = asm["dynCall_f"];
var dynCall_i = Module["dynCall_i"] = asm["dynCall_i"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
Runtime.stackAlloc = function(size) { return asm['stackAlloc'](size) };
Runtime.stackSave = function() { return asm['stackSave']() };
Runtime.stackRestore = function(top) { asm['stackRestore'](top) };
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
if (memoryInitializer) {
  function applyData(data) {
    HEAPU8.set(data, STATIC_BASE);
  }
  if (ENVIRONMENT_IS_NODE || ENVIRONMENT_IS_SHELL) {
    applyData(Module['readBinary'](memoryInitializer));
  } else {
    addRunDependency('memory initializer');
    Browser.asyncLoad(memoryInitializer, function(data) {
      applyData(data);
      removeRunDependency('memory initializer');
    }, function(data) {
      throw 'could not load memory initializer ' + memoryInitializer;
    });
  }
}
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
};
ExitStatus.prototype = new Error();
ExitStatus.prototype.constructor = ExitStatus;
var initialStackTop;
var preloadStartTime = null;
var calledMain = false;
dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!Module['calledRun'] && shouldRunNow) run();
  if (!Module['calledRun']) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
}
Module['callMain'] = Module.callMain = function callMain(args) {
  assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
  assert(__ATPRERUN__.length == 0, 'cannot call main when preRun functions remain to be called');
  args = args || [];
  if (ENVIRONMENT_IS_WEB && preloadStartTime !== null) {
    Module.printErr('preload time: ' + (Date.now() - preloadStartTime) + ' ms');
  }
  ensureInitRuntime();
  var argc = args.length+1;
  function pad() {
    for (var i = 0; i < 4-1; i++) {
      argv.push(0);
    }
  }
  var argv = [allocate(intArrayFromString("/bin/this.program"), 'i8', ALLOC_NORMAL) ];
  pad();
  for (var i = 0; i < argc-1; i = i + 1) {
    argv.push(allocate(intArrayFromString(args[i]), 'i8', ALLOC_NORMAL));
    pad();
  }
  argv.push(0);
  argv = allocate(argv, 'i32', ALLOC_NORMAL);
  initialStackTop = STACKTOP;
  try {
    var ret = Module['_main'](argc, argv, 0);
    // if we're not running an evented main loop, it's time to exit
    if (!Module['noExitRuntime']) {
      exit(ret);
    }
  }
  catch(e) {
    if (e instanceof ExitStatus) {
      // exit() throws this once it's done to make sure execution
      // has been stopped completely
      return;
    } else if (e == 'SimulateInfiniteLoop') {
      // running an evented main loop, don't immediately exit
      Module['noExitRuntime'] = true;
      return;
    } else {
      if (e && typeof e === 'object' && e.stack) Module.printErr('exception thrown: ' + [e, e.stack]);
      throw e;
    }
  } finally {
    calledMain = true;
  }
}
function run(args) {
  args = args || Module['arguments'];
  if (preloadStartTime === null) preloadStartTime = Date.now();
  if (runDependencies > 0) {
    Module.printErr('run() called, but dependencies remain, so not running');
    return;
  }
  preRun();
  if (runDependencies > 0) {
    // a preRun added a dependency, run will be called later
    return;
  }
  function doRun() {
    ensureInitRuntime();
    preMain();
    Module['calledRun'] = true;
    if (Module['_main'] && shouldRunNow) {
      Module['callMain'](args);
    }
    postRun();
  }
  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      if (!ABORT) doRun();
    }, 1);
  } else {
    doRun();
  }
}
Module['run'] = Module.run = run;
function exit(status) {
  ABORT = true;
  EXITSTATUS = status;
  STACKTOP = initialStackTop;
  // exit the runtime
  exitRuntime();
  // TODO We should handle this differently based on environment.
  // In the browser, the best we can do is throw an exception
  // to halt execution, but in node we could process.exit and
  // I'd imagine SM shell would have something equivalent.
  // This would let us set a proper exit status (which
  // would be great for checking test exit statuses).
  // https://github.com/kripken/emscripten/issues/1371
  // throw an exception to halt the current execution
  throw new ExitStatus(status);
}
Module['exit'] = Module.exit = exit;
function abort(text) {
  if (text) {
    Module.print(text);
    Module.printErr(text);
  }
  ABORT = true;
  EXITSTATUS = 1;
  throw 'abort() at ' + stackTrace();
}
Module['abort'] = Module.abort = abort;
// {{PRE_RUN_ADDITIONS}}
if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}
// shouldRunNow refers to calling main(), not run().
var shouldRunNow = true;
if (Module['noInitialRun']) {
  shouldRunNow = false;
}
run();
// {{POST_RUN_ADDITIONS}}
// {{MODULE_ADDITIONS}}