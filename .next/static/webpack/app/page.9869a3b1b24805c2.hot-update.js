"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/file.js":
/*!*************************!*\
  !*** ./src/app/file.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"(app-pages-browser)/./src/app/data.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst FileExplorer = ()=>{\n    _s();\n    const [directory, setDirectory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch folder and file data from the backend\n        // fetch(\"http://localhost:8000/api/directory/\")\n        //   .then((response) => response.json())\n        //   .then((data) => {\n        //     setDirectory(data);\n        //     console.log(\"data\", data);\n        //   })\n        //   .catch((error) => console.error(\"Error fetching data:\", error));\n        setDirectory(_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    }, []);\n    const getFolderId = (directory_id)=>{\n        let len = directory_id.length;\n        return \"folder_\".concat(directory_id.slice(len - 5, len));\n    };\n    const toggleSubfolders = (e)=>{\n        e.stopPropagation();\n        let targetSubfolders = e.target.dataset[\"directoryId\"];\n        let subfolder = document.getElementById(getFolderId(targetSubfolders));\n        subfolder.classList.add(\"visible\");\n    };\n    // Function to render a directory recursively\n    const renderDirectory = (directory, level)=>{\n        console.log(directory);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"folder\",\n            \"data-directory-id\": directory._id,\n            onClick: toggleSubfolders,\n            children: [\n                \"-\".repeat(level),\n                directory.name,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"subfolders\",\n                    id: getFolderId(directory._id),\n                    children: [\n                        directory.directories && directory.directories.map((subdirectory)=>renderDirectory(subdirectory, level + 1)),\n                        directory.files && directory.files.map((file)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"file\",\n                                children: [\n                                    \"-\".repeat(level + 1),\n                                    file.name\n                                ]\n                            }, file._id, true, {\n                                fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/file.js\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/file.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, directory._id, true, {\n            fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/file.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"fileExplorer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"File Explorer\"\n            }, void 0, false, {\n                fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/file.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            directory && renderDirectory(directory, 0)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/file.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FileExplorer, \"avue+aJOdFDy1WhZbNnnRJaFQCQ=\");\n_c = FileExplorer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileExplorer);\nvar _c;\n$RefreshReg$(_c, \"FileExplorer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZmlsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ3pCO0FBQzFCLE1BQU1JLGVBQWU7O0lBQ25CLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDUiw4Q0FBOEM7UUFDOUMsZ0RBQWdEO1FBQ2hELHlDQUF5QztRQUN6QyxzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLGlDQUFpQztRQUNqQyxPQUFPO1FBQ1AscUVBQXFFO1FBQ3JFSSxhQUFhSCw2Q0FBSUE7SUFDbkIsR0FBRyxFQUFFO0lBRUwsTUFBTUksY0FBYyxDQUFDQztRQUNuQixJQUFJQyxNQUFNRCxhQUFhRSxNQUFNO1FBQzdCLE9BQU8sVUFBMkMsT0FBakNGLGFBQWFHLEtBQUssQ0FBQ0YsTUFBTSxHQUFHQTtJQUMvQztJQUVBLE1BQU1HLG1CQUFtQixDQUFDQztRQUN4QkEsRUFBRUMsZUFBZTtRQUNqQixJQUFJQyxtQkFBbUJGLEVBQUVHLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLGNBQWM7UUFDdEQsSUFBSUMsWUFBWUMsU0FBU0MsY0FBYyxDQUFDYixZQUFZUTtRQUNwREcsVUFBVUcsU0FBUyxDQUFDQyxHQUFHLENBQUM7SUFDMUI7SUFFQSw2Q0FBNkM7SUFDN0MsTUFBTUMsa0JBQWtCLENBQUNsQixXQUFXbUI7UUFDbENDLFFBQVFDLEdBQUcsQ0FBQ3JCO1FBQ1oscUJBQ0UsOERBQUNzQjtZQUVDQyxXQUFVO1lBQ1ZDLHFCQUFtQnhCLFVBQVV5QixHQUFHO1lBQ2hDQyxTQUFTbkI7O2dCQUVSLElBQUlvQixNQUFNLENBQUNSO2dCQUNYbkIsVUFBVTRCLElBQUk7OEJBQ2YsOERBQUNOO29CQUFJQyxXQUFVO29CQUFhTSxJQUFJM0IsWUFBWUYsVUFBVXlCLEdBQUc7O3dCQUN0RHpCLFVBQVU4QixXQUFXLElBQ3BCOUIsVUFBVThCLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLGVBQ3pCZCxnQkFBZ0JjLGNBQWNiLFFBQVE7d0JBRXpDbkIsVUFBVWlDLEtBQUssSUFDZGpDLFVBQVVpQyxLQUFLLENBQUNGLEdBQUcsQ0FBQyxDQUFDRyxxQkFDbkIsOERBQUNaO2dDQUFtQkMsV0FBVTs7b0NBQzNCLElBQUlJLE1BQU0sQ0FBQ1IsUUFBUTtvQ0FDbkJlLEtBQUtOLElBQUk7OytCQUZGTSxLQUFLVCxHQUFHOzs7Ozs7Ozs7Ozs7V0FkbkJ6QixVQUFVeUIsR0FBRzs7Ozs7SUFzQnhCO0lBRUEscUJBQ0UsOERBQUNIO1FBQUlPLElBQUc7OzBCQUNOLDhEQUFDTTswQkFBRzs7Ozs7O1lBQ0huQyxhQUFha0IsZ0JBQWdCbEIsV0FBVzs7Ozs7OztBQUcvQztHQTlETUQ7S0FBQUE7QUFnRU4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9maWxlLmpzP2ZmNjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4vZGF0YVwiO1xuY29uc3QgRmlsZUV4cGxvcmVyID0gKCkgPT4ge1xuICBjb25zdCBbZGlyZWN0b3J5LCBzZXREaXJlY3RvcnldID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBGZXRjaCBmb2xkZXIgYW5kIGZpbGUgZGF0YSBmcm9tIHRoZSBiYWNrZW5kXG4gICAgLy8gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2RpcmVjdG9yeS9cIilcbiAgICAvLyAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAvLyAgICAgc2V0RGlyZWN0b3J5KGRhdGEpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XG4gICAgLy8gICB9KVxuICAgIC8vICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKSk7XG4gICAgc2V0RGlyZWN0b3J5KGRhdGEpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZ2V0Rm9sZGVySWQgPSAoZGlyZWN0b3J5X2lkKSA9PiB7XG4gICAgbGV0IGxlbiA9IGRpcmVjdG9yeV9pZC5sZW5ndGg7XG4gICAgcmV0dXJuIGBmb2xkZXJfJHtkaXJlY3RvcnlfaWQuc2xpY2UobGVuIC0gNSwgbGVuKX1gO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVN1YmZvbGRlcnMgPSAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IHRhcmdldFN1YmZvbGRlcnMgPSBlLnRhcmdldC5kYXRhc2V0W1wiZGlyZWN0b3J5SWRcIl07XG4gICAgbGV0IHN1YmZvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldEZvbGRlcklkKHRhcmdldFN1YmZvbGRlcnMpKTtcbiAgICBzdWJmb2xkZXIuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gdG8gcmVuZGVyIGEgZGlyZWN0b3J5IHJlY3Vyc2l2ZWx5XG4gIGNvbnN0IHJlbmRlckRpcmVjdG9yeSA9IChkaXJlY3RvcnksIGxldmVsKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGlyZWN0b3J5KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9e2RpcmVjdG9yeS5faWR9XG4gICAgICAgIGNsYXNzTmFtZT1cImZvbGRlclwiXG4gICAgICAgIGRhdGEtZGlyZWN0b3J5LWlkPXtkaXJlY3RvcnkuX2lkfVxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVTdWJmb2xkZXJzfVxuICAgICAgPlxuICAgICAgICB7XCItXCIucmVwZWF0KGxldmVsKX1cbiAgICAgICAge2RpcmVjdG9yeS5uYW1lfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YmZvbGRlcnNcIiBpZD17Z2V0Rm9sZGVySWQoZGlyZWN0b3J5Ll9pZCl9PlxuICAgICAgICAgIHtkaXJlY3RvcnkuZGlyZWN0b3JpZXMgJiZcbiAgICAgICAgICAgIGRpcmVjdG9yeS5kaXJlY3Rvcmllcy5tYXAoKHN1YmRpcmVjdG9yeSkgPT5cbiAgICAgICAgICAgICAgcmVuZGVyRGlyZWN0b3J5KHN1YmRpcmVjdG9yeSwgbGV2ZWwgKyAxKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICB7ZGlyZWN0b3J5LmZpbGVzICYmXG4gICAgICAgICAgICBkaXJlY3RvcnkuZmlsZXMubWFwKChmaWxlKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtmaWxlLl9pZH0gY2xhc3NOYW1lPVwiZmlsZVwiPlxuICAgICAgICAgICAgICAgIHtcIi1cIi5yZXBlYXQobGV2ZWwgKyAxKX1cbiAgICAgICAgICAgICAgICB7ZmlsZS5uYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiZmlsZUV4cGxvcmVyXCI+XG4gICAgICA8aDI+RmlsZSBFeHBsb3JlcjwvaDI+XG4gICAgICB7ZGlyZWN0b3J5ICYmIHJlbmRlckRpcmVjdG9yeShkaXJlY3RvcnksIDApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZUV4cGxvcmVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkYXRhIiwiRmlsZUV4cGxvcmVyIiwiZGlyZWN0b3J5Iiwic2V0RGlyZWN0b3J5IiwiZ2V0Rm9sZGVySWQiLCJkaXJlY3RvcnlfaWQiLCJsZW4iLCJsZW5ndGgiLCJzbGljZSIsInRvZ2dsZVN1YmZvbGRlcnMiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0U3ViZm9sZGVycyIsInRhcmdldCIsImRhdGFzZXQiLCJzdWJmb2xkZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVuZGVyRGlyZWN0b3J5IiwibGV2ZWwiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGF0YS1kaXJlY3RvcnktaWQiLCJfaWQiLCJvbkNsaWNrIiwicmVwZWF0IiwibmFtZSIsImlkIiwiZGlyZWN0b3JpZXMiLCJtYXAiLCJzdWJkaXJlY3RvcnkiLCJmaWxlcyIsImZpbGUiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/file.js\n"));

/***/ })

});