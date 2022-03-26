const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
var cors = require('cors');

const axios = require('axios').default;

const app = express();
app.use(cors());
// app.use(express.static(path.join(__dirname, '../client/build')));

// axios.defaults.validateStatus = function () {
//     return true;
// };

function detectBrowser(_br) { 
    if((_br.indexOf("Opera") || _br.indexOf('OPR')) != -1 ) {
        return 'Opera';
    } else if(_br.indexOf("Chrome") != -1 ) {
        return 'Chrome';
    } else if(_br.indexOf("Safari") != -1) {
        return 'Safari';
    } else if(_br.indexOf("Firefox") != -1 ){
        return 'Firefox';
    } else if((_br.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
        return 'IE';
    } else {
        return 'Unknown';
    }
} 

function check_device(ua) { // Remember that this function doesn't already work
    var $ = {};
    if (/mobile/i.test(ua))
        $.Mobile = true;

    if (/like Mac OS X/.test(ua)) {
        $.iOS = /CPU( iPhone)? OS ([0-9\._]+) like Mac OS X/.exec(ua)[2].replace(/_/g, '.');
        $.iPhone = /iPhone/.test(ua);
        $.iPad = /iPad/.test(ua);
    }

    if (/Android/.test(ua))
        $.Android = /Android ([0-9\.]+)[\);]/.exec(ua)[1];

    if (/webOS\//.test(ua))
        $.webOS = /webOS\/([0-9\.]+)[\);]/.exec(ua)[1];

    if (/(Intel|PPC) Mac OS X/.test(ua))
        $.Mac = /(Intel|PPC) Mac OS X ?([0-9\._]*)[\)\;]/.exec(ua)[2].replace(/_/g, '.') || true;

    if (/Windows NT/.test(ua))
        $.Windows = /Windows NT ([0-9\._]+)[\);]/.exec(ua)[1];
    
    if ($.Windows != undefined) {return 'Win32'}
    if ($.iPhone != undefined) {return 'iPhone'}
    if ($.iOS != undefined) {return 'MacPPC'}
    
}


app.get("/api", (req, res) => {
    res.json({message: "Hello from GAMch1k"});
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});