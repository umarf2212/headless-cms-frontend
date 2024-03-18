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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"(app-pages-browser)/./src/app/data.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst FileExplorer = ()=>{\n    _s();\n    const [directory, setDirectory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch folder and file data from the backend\n        // fetch(\"http://localhost:8000/api/directory/\")\n        //   .then((response) => response.json())\n        //   .then((data) => {\n        //     setDirectory(data);\n        //     console.log(\"data\", data);\n        //   })\n        //   .catch((error) => console.error(\"Error fetching data:\", error));\n        setDirectory(_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    }, []);\n    const getFolderId = (directory_id)=>{\n        let len = directory_id.length;\n        return \"folder_\".concat(directory_id.slice(len - 5, len));\n    };\n    const toggleSubfolders = (e)=>{\n        e.stopPropagation();\n        let folder_id = e.target.dataset[\"directoryId\"];\n        let subfolder = document.getElementById(getFolderId(folder_id));\n        subfolder.classList.add(\"visible\");\n    };\n    // Function to render a directory recursively\n    const renderDirectory = (directory, level)=>{\n        console.log(directory);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"folder\",\n            \"data-directory-id\": directory._id,\n            onClick: toggleSubfolders,\n            children: [\n                \"-\".repeat(level),\n                directory.name,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"subfolders\",\n                    id: getFolderId(directory._id),\n                    children: [\n                        directory.directories && directory.directories.map((subdirectory)=>renderDirectory(subdirectory, level + 1)),\n                        directory.files && directory.files.map((file)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"file\",\n                                children: [\n                                    \"-\".repeat(level + 1),\n                                    file.name\n                                ]\n                            }, file._id, true, {\n                                fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/file.js\",\n                                lineNumber: 50,\n                                columnNumber: 15\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/file.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, directory._id, true, {\n            fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/file.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"fileExplorer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"File Explorer\"\n            }, void 0, false, {\n                fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/file.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            directory && renderDirectory(directory, 0)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/file.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FileExplorer, \"avue+aJOdFDy1WhZbNnnRJaFQCQ=\");\n_c = FileExplorer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileExplorer);\nvar _c;\n$RefreshReg$(_c, \"FileExplorer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZmlsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ21EO0FBQ3pCO0FBQzFCLE1BQU1JLGVBQWU7O0lBQ25CLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDUiw4Q0FBOEM7UUFDOUMsZ0RBQWdEO1FBQ2hELHlDQUF5QztRQUN6QyxzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLGlDQUFpQztRQUNqQyxPQUFPO1FBQ1AscUVBQXFFO1FBQ3JFSSxhQUFhSCw2Q0FBSUE7SUFDbkIsR0FBRyxFQUFFO0lBRUwsTUFBTUksY0FBYyxDQUFDQztRQUNuQixJQUFJQyxNQUFNRCxhQUFhRSxNQUFNO1FBQzdCLE9BQU8sVUFBMkMsT0FBakNGLGFBQWFHLEtBQUssQ0FBQ0YsTUFBTSxHQUFHQTtJQUMvQztJQUVBLE1BQU1HLG1CQUFtQixDQUFDQztRQUN4QkEsRUFBRUMsZUFBZTtRQUNqQixJQUFJQyxZQUFZRixFQUFFRyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxjQUFjO1FBQy9DLElBQUlDLFlBQVlDLFNBQVNDLGNBQWMsQ0FBQ2IsWUFBWVE7UUFDcERHLFVBQVVHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO0lBQzFCO0lBRUEsNkNBQTZDO0lBQzdDLE1BQU1DLGtCQUFrQixDQUFDbEIsV0FBV21CO1FBQ2xDQyxRQUFRQyxHQUFHLENBQUNyQjtRQUNaLHFCQUNFLDhEQUFDc0I7WUFFQ0MsV0FBVTtZQUNWQyxxQkFBbUJ4QixVQUFVeUIsR0FBRztZQUNoQ0MsU0FBU25COztnQkFFUixJQUFJb0IsTUFBTSxDQUFDUjtnQkFDWG5CLFVBQVU0QixJQUFJOzhCQUNmLDhEQUFDTjtvQkFBSUMsV0FBVTtvQkFBYU0sSUFBSTNCLFlBQVlGLFVBQVV5QixHQUFHOzt3QkFDdER6QixVQUFVOEIsV0FBVyxJQUNwQjlCLFVBQVU4QixXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxlQUN6QmQsZ0JBQWdCYyxjQUFjYixRQUFRO3dCQUV6Q25CLFVBQVVpQyxLQUFLLElBQ2RqQyxVQUFVaUMsS0FBSyxDQUFDRixHQUFHLENBQUMsQ0FBQ0cscUJBQ25CLDhEQUFDWjtnQ0FBbUJDLFdBQVU7O29DQUMzQixJQUFJSSxNQUFNLENBQUNSLFFBQVE7b0NBQ25CZSxLQUFLTixJQUFJOzsrQkFGRk0sS0FBS1QsR0FBRzs7Ozs7Ozs7Ozs7O1dBZG5CekIsVUFBVXlCLEdBQUc7Ozs7O0lBc0J4QjtJQUVBLHFCQUNFLDhEQUFDSDtRQUFJTyxJQUFHOzswQkFDTiw4REFBQ007MEJBQUc7Ozs7OztZQUNIbkMsYUFBYWtCLGdCQUFnQmxCLFdBQVc7Ozs7Ozs7QUFHL0M7R0E5RE1EO0tBQUFBO0FBZ0VOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZmlsZS5qcz9mZjYwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGFcIjtcbmNvbnN0IEZpbGVFeHBsb3JlciA9ICgpID0+IHtcbiAgY29uc3QgW2RpcmVjdG9yeSwgc2V0RGlyZWN0b3J5XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRmV0Y2ggZm9sZGVyIGFuZCBmaWxlIGRhdGEgZnJvbSB0aGUgYmFja2VuZFxuICAgIC8vIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9kaXJlY3RvcnkvXCIpXG4gICAgLy8gICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAvLyAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgLy8gICAgIHNldERpcmVjdG9yeShkYXRhKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuICAgIC8vICAgfSlcbiAgICAvLyAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcikpO1xuICAgIHNldERpcmVjdG9yeShkYXRhKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldEZvbGRlcklkID0gKGRpcmVjdG9yeV9pZCkgPT4ge1xuICAgIGxldCBsZW4gPSBkaXJlY3RvcnlfaWQubGVuZ3RoO1xuICAgIHJldHVybiBgZm9sZGVyXyR7ZGlyZWN0b3J5X2lkLnNsaWNlKGxlbiAtIDUsIGxlbil9YDtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVTdWJmb2xkZXJzID0gKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCBmb2xkZXJfaWQgPSBlLnRhcmdldC5kYXRhc2V0W1wiZGlyZWN0b3J5SWRcIl07XG4gICAgbGV0IHN1YmZvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldEZvbGRlcklkKGZvbGRlcl9pZCkpO1xuICAgIHN1YmZvbGRlci5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgfTtcblxuICAvLyBGdW5jdGlvbiB0byByZW5kZXIgYSBkaXJlY3RvcnkgcmVjdXJzaXZlbHlcbiAgY29uc3QgcmVuZGVyRGlyZWN0b3J5ID0gKGRpcmVjdG9yeSwgbGV2ZWwpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkaXJlY3RvcnkpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGtleT17ZGlyZWN0b3J5Ll9pZH1cbiAgICAgICAgY2xhc3NOYW1lPVwiZm9sZGVyXCJcbiAgICAgICAgZGF0YS1kaXJlY3RvcnktaWQ9e2RpcmVjdG9yeS5faWR9XG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVN1YmZvbGRlcnN9XG4gICAgICA+XG4gICAgICAgIHtcIi1cIi5yZXBlYXQobGV2ZWwpfVxuICAgICAgICB7ZGlyZWN0b3J5Lm5hbWV9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViZm9sZGVyc1wiIGlkPXtnZXRGb2xkZXJJZChkaXJlY3RvcnkuX2lkKX0+XG4gICAgICAgICAge2RpcmVjdG9yeS5kaXJlY3RvcmllcyAmJlxuICAgICAgICAgICAgZGlyZWN0b3J5LmRpcmVjdG9yaWVzLm1hcCgoc3ViZGlyZWN0b3J5KSA9PlxuICAgICAgICAgICAgICByZW5kZXJEaXJlY3Rvcnkoc3ViZGlyZWN0b3J5LCBsZXZlbCArIDEpXG4gICAgICAgICAgICApfVxuICAgICAgICAgIHtkaXJlY3RvcnkuZmlsZXMgJiZcbiAgICAgICAgICAgIGRpcmVjdG9yeS5maWxlcy5tYXAoKGZpbGUpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2ZpbGUuX2lkfSBjbGFzc05hbWU9XCJmaWxlXCI+XG4gICAgICAgICAgICAgICAge1wiLVwiLnJlcGVhdChsZXZlbCArIDEpfVxuICAgICAgICAgICAgICAgIHtmaWxlLm5hbWV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJmaWxlRXhwbG9yZXJcIj5cbiAgICAgIDxoMj5GaWxlIEV4cGxvcmVyPC9oMj5cbiAgICAgIHtkaXJlY3RvcnkgJiYgcmVuZGVyRGlyZWN0b3J5KGRpcmVjdG9yeSwgMCl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlRXhwbG9yZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRhdGEiLCJGaWxlRXhwbG9yZXIiLCJkaXJlY3RvcnkiLCJzZXREaXJlY3RvcnkiLCJnZXRGb2xkZXJJZCIsImRpcmVjdG9yeV9pZCIsImxlbiIsImxlbmd0aCIsInNsaWNlIiwidG9nZ2xlU3ViZm9sZGVycyIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJmb2xkZXJfaWQiLCJ0YXJnZXQiLCJkYXRhc2V0Iiwic3ViZm9sZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbmRlckRpcmVjdG9yeSIsImxldmVsIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEtZGlyZWN0b3J5LWlkIiwiX2lkIiwib25DbGljayIsInJlcGVhdCIsIm5hbWUiLCJpZCIsImRpcmVjdG9yaWVzIiwibWFwIiwic3ViZGlyZWN0b3J5IiwiZmlsZXMiLCJmaWxlIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/file.js\n"));

/***/ })

});