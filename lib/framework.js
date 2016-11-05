var path = require("path");
var requirejs = require("karma-requirejs");

function hasRequireJsFramework(config) {
    return config.frameworks.indexOf("requirejs") !== -1;
}

var createFramework = function(config) {
    if(!hasRequireJsFramework(config)){
        requirejs["framework:requirejs"][1](config.files);
    }
};

module.exports = createFramework;
