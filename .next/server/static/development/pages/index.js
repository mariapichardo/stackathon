module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/WorldMap.js":
/*!********************************!*\
  !*** ./components/WorldMap.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-geo */ "d3-geo");
/* harmony import */ var d3_geo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_geo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! topojson-client */ "topojson-client");
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(topojson_client__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mariapichardo/stackathon/stackathon/components/WorldMap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const cities = [{
  name: "Tokyo",
  coordinates: [139.6917, 35.6895],
  population: 37843000
}, {
  name: "Jakarta",
  coordinates: [106.8650, -6.1751],
  population: 30539000
}, {
  name: "Delhi",
  coordinates: [77.1025, 28.7041],
  population: 24998000
}, {
  name: "Manila",
  coordinates: [120.9842, 14.5995],
  population: 24123000
}, {
  name: "Seoul",
  coordinates: [126.9780, 37.5665],
  population: 23480000
}, {
  name: "Shanghai",
  coordinates: [121.4737, 31.2304],
  population: 23416000
}, {
  name: "Karachi",
  coordinates: [67.0099, 24.8615],
  population: 22123000
}, {
  name: "Beijing",
  coordinates: [116.4074, 39.9042],
  population: 21009000
}, {
  name: "New York",
  coordinates: [-74.0059, 40.7128],
  population: 20630000
}, {
  name: "Guangzhou",
  coordinates: [113.2644, 23.1291],
  population: 20597000
}, {
  name: "Sao Paulo",
  coordinates: [-46.6333, -23.5505],
  population: 20365000
}, {
  name: "Mexico City",
  coordinates: [-99.1332, 19.4326],
  population: 20063000
}, {
  name: "Mumbai",
  coordinates: [72.8777, 19.0760],
  population: 17712000
}, {
  name: "Osaka",
  coordinates: [135.5022, 34.6937],
  population: 17444000
}, {
  name: "Moscow",
  coordinates: [37.6173, 55.7558],
  population: 16170000
}, {
  name: "Dhaka",
  coordinates: [90.4125, 23.8103],
  population: 15669000
}, {
  name: "Greater Cairo",
  coordinates: [31.2357, 30.0444],
  population: 15600000
}, {
  name: "Los Angeles",
  coordinates: [-118.2437, 34.0522],
  population: 15058000
}, {
  name: "Bangkok",
  coordinates: [100.5018, 13.7563],
  population: 14998000
}, {
  name: "Kolkata",
  coordinates: [88.3639, 22.5726],
  population: 14667000
}, {
  name: "Buenos Aires",
  coordinates: [-58.3816, -34.6037],
  population: 14122000
}, {
  name: "Tehran",
  coordinates: [51.3890, 35.6892],
  population: 13532000
}, {
  name: "Istanbul",
  coordinates: [28.9784, 41.0082],
  population: 13287000
}, {
  name: "Lagos",
  coordinates: [3.3792, 6.5244],
  population: 13123000
}, {
  name: "Shenzhen",
  coordinates: [114.0579, 22.5431],
  population: 12084000
}, {
  name: "Rio de Janeiro",
  coordinates: [-43.1729, -22.9068],
  population: 11727000
}, {
  name: "Kinshasa",
  coordinates: [15.2663, -4.4419],
  population: 11587000
}, {
  name: "Tianjin",
  coordinates: [117.3616, 39.3434],
  population: 10920000
}, {
  name: "Paris",
  coordinates: [2.3522, 48.8566],
  population: 10858000
}, {
  name: "Lima",
  coordinates: [-77.0428, -12.0464],
  population: 10750000
}];
const projection = Object(d3_geo__WEBPACK_IMPORTED_MODULE_1__["geoEqualEarth"])().scale(160).translate([800 / 2, 450 / 2]);

const WorldMap = () => {
  const {
    0: geographies,
    1: setGeographies
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetch("/world-110m.json").then(response => {
      if (response.status !== 200) {
        console.log(`There was a problem: ${response.status}`);
        return;
      }

      response.json().then(worlddata => {
        setGeographies(Object(topojson_client__WEBPACK_IMPORTED_MODULE_2__["feature"])(worlddata, worlddata.objects.countries).features);
      });
    });
  }, []);

  const handleCountryClick = countryIndex => {
    console.log("Clicked on country: ", geographies[countryIndex]);
  };

  const handleMarkerClick = i => {
    console.log("Marker: ", cities[i]);
  };

  return __jsx("svg", {
    width: 800,
    height: 450,
    viewBox: "0 0 800 450",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("g", {
    className: "countries",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, geographies.map((d, i) => __jsx("path", {
    key: `path-${i}`,
    d: Object(d3_geo__WEBPACK_IMPORTED_MODULE_1__["geoPath"])().projection(projection)(d),
    className: "country",
    fill: `rgba(38,50,56,${1 / geographies.length * i})`,
    stroke: "#FFFFFF",
    strokeWidth: 0.5,
    onClick: () => handleCountryClick(i),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }))), __jsx("g", {
    className: "markers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, cities.map((city, i) => __jsx("circle", {
    key: `marker-${i}`,
    cx: projection(city.coordinates)[0],
    cy: projection(city.coordinates)[1],
    r: city.population / 3000000,
    fill: "#E91E63",
    stroke: "#FFFFFF",
    className: "marker",
    onClick: () => handleMarkerClick(i),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (WorldMap);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_WorldMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/WorldMap */ "./components/WorldMap.js");
var _jsxFileName = "/Users/mariapichardo/stackathon/stackathon/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Page = () => {
  return __jsx(_components_WorldMap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mariapichardo/stackathon/stackathon/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "d3-geo":
/*!*************************!*\
  !*** external "d3-geo" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-geo");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "topojson-client":
/*!**********************************!*\
  !*** external "topojson-client" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("topojson-client");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map