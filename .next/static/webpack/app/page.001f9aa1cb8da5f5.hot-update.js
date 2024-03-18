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

/***/ "(app-pages-browser)/./src/app/components/FileExplorer/FileExplorer.js":
/*!*********************************************************!*\
  !*** ./src/app/components/FileExplorer/FileExplorer.js ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/data */ \"(app-pages-browser)/./src/app/utils/data.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/app/components/FileExplorer/style.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst FileExplorer = ()=>{\n    _s();\n    const [directory, setDirectory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch folder and file data from the backend\n        // fetch(\"http://localhost:8000/api/directory/\")\n        //   .then((response) => response.json())\n        //   .then((data) => {\n        //     setDirectory(data);\n        //     console.log(\"data\", data);\n        //   })\n        //   .catch((error) => console.error(\"Error fetching data:\", error));\n        setDirectory(_utils_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    }, []);\n    const getFolderId = (directory_id)=>{\n        if (directory_id !== null) {\n            let len = directory_id.length;\n            return \"folder_\".concat(directory_id.slice(len - 5, len));\n        }\n    };\n    const toggleSubfolders = (e)=>{\n        e.stopPropagation();\n        let targetSubfolders = e.target.dataset[\"directoryId\"];\n        let subfolder = document.getElementById(getFolderId(targetSubfolders));\n        //check if class already exists\n        if ([\n            ...subfolder.classList\n        ].includes(\"visible\")) {\n            subfolder.classList.remove(\"visible\");\n        } else {\n            subfolder.classList.add(\"visible\");\n        }\n    };\n    const handleFileClick = (e)=>{\n        e.stopPropagation();\n    };\n    // Function to render a directory recursively\n    const renderDirectory = (directory, level)=>{\n        // console.log(directory);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"folder\",\n            \"data-directory-id\": directory._id,\n            onClick: toggleSubfolders,\n            children: [\n                \"-\".repeat(level),\n                directory.name,\n                directory.directories && directory.directories.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"subfolders\",\n                    id: getFolderId(directory._id),\n                    onClick: toggleSubfolders,\n                    children: directory.directories.length > 0 && directory.directories.map((subdirectory)=>renderDirectory(subdirectory, level + 1))\n                }, void 0, false, {\n                    fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/components/FileExplorer/FileExplorer.js\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"files\",\n                    id: getFolderId(directory._id),\n                    onClick: handleFileClick,\n                    children: directory.files && directory.files.map((file)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"file\",\n                            children: [\n                                \"-\".repeat(level + 1),\n                                file.name\n                            ]\n                        }, file._id, true, {\n                            fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/components/FileExplorer/FileExplorer.js\",\n                            lineNumber: 76,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/components/FileExplorer/FileExplorer.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, directory._id, true, {\n            fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/components/FileExplorer/FileExplorer.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"fileExplorer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"File Explorer\"\n            }, void 0, false, {\n                fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/components/FileExplorer/FileExplorer.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            directory && renderDirectory(directory, 0)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/components/FileExplorer/FileExplorer.js\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FileExplorer, \"avue+aJOdFDy1WhZbNnnRJaFQCQ=\");\n_c = FileExplorer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileExplorer);\nvar _c;\n$RefreshReg$(_c, \"FileExplorer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9GaWxlRXhwbG9yZXIvRmlsZUV4cGxvcmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ21EO0FBQ2Y7QUFDZjtBQUVyQixNQUFNSSxlQUFlOztJQUNuQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUM7SUFFM0NDLGdEQUFTQSxDQUFDO1FBQ1IsOENBQThDO1FBQzlDLGdEQUFnRDtRQUNoRCx5Q0FBeUM7UUFDekMsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQixpQ0FBaUM7UUFDakMsT0FBTztRQUNQLHFFQUFxRTtRQUNyRUksYUFBYUgsbURBQUlBO0lBQ25CLEdBQUcsRUFBRTtJQUVMLE1BQU1JLGNBQWMsQ0FBQ0M7UUFDbkIsSUFBSUEsaUJBQWlCLE1BQU07WUFDekIsSUFBSUMsTUFBTUQsYUFBYUUsTUFBTTtZQUM3QixPQUFPLFVBQTJDLE9BQWpDRixhQUFhRyxLQUFLLENBQUNGLE1BQU0sR0FBR0E7UUFDL0M7SUFDRjtJQUVBLE1BQU1HLG1CQUFtQixDQUFDQztRQUN4QkEsRUFBRUMsZUFBZTtRQUNqQixJQUFJQyxtQkFBbUJGLEVBQUVHLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLGNBQWM7UUFDdEQsSUFBSUMsWUFBWUMsU0FBU0MsY0FBYyxDQUFDYixZQUFZUTtRQUVwRCwrQkFBK0I7UUFDL0IsSUFBSTtlQUFJRyxVQUFVRyxTQUFTO1NBQUMsQ0FBQ0MsUUFBUSxDQUFDLFlBQVk7WUFDaERKLFVBQVVHLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO1FBQzdCLE9BQU87WUFDTEwsVUFBVUcsU0FBUyxDQUFDRyxHQUFHLENBQUM7UUFDMUI7SUFDRjtJQUVBLE1BQU1DLGtCQUFrQixDQUFDWjtRQUN2QkEsRUFBRUMsZUFBZTtJQUNuQjtJQUVBLDZDQUE2QztJQUM3QyxNQUFNWSxrQkFBa0IsQ0FBQ3JCLFdBQVdzQjtRQUNsQywwQkFBMEI7UUFDMUIscUJBQ0UsOERBQUNDO1lBRUNDLFdBQVU7WUFDVkMscUJBQW1CekIsVUFBVTBCLEdBQUc7WUFDaENDLFNBQVNwQjs7Z0JBRVIsSUFBSXFCLE1BQU0sQ0FBQ047Z0JBQ1h0QixVQUFVNkIsSUFBSTtnQkFDZDdCLFVBQVU4QixXQUFXLElBQUk5QixVQUFVOEIsV0FBVyxDQUFDekIsTUFBTSxHQUFHLG1CQUN2RCw4REFBQ2tCO29CQUNDQyxXQUFVO29CQUNWTyxJQUFJN0IsWUFBWUYsVUFBVTBCLEdBQUc7b0JBQzdCQyxTQUFTcEI7OEJBRVJQLFVBQVU4QixXQUFXLENBQUN6QixNQUFNLEdBQUcsS0FDOUJMLFVBQVU4QixXQUFXLENBQUNFLEdBQUcsQ0FBQyxDQUFDQyxlQUN6QlosZ0JBQWdCWSxjQUFjWCxRQUFROzs7Ozs7OEJBSTlDLDhEQUFDQztvQkFDQ0MsV0FBVTtvQkFDVk8sSUFBSTdCLFlBQVlGLFVBQVUwQixHQUFHO29CQUM3QkMsU0FBU1A7OEJBRVJwQixVQUFVa0MsS0FBSyxJQUNkbEMsVUFBVWtDLEtBQUssQ0FBQ0YsR0FBRyxDQUFDLENBQUNHLHFCQUNuQiw4REFBQ1o7NEJBQW1CQyxXQUFVOztnQ0FDM0IsSUFBSUksTUFBTSxDQUFDTixRQUFRO2dDQUNuQmEsS0FBS04sSUFBSTs7MkJBRkZNLEtBQUtULEdBQUc7Ozs7Ozs7Ozs7O1dBMUJuQjFCLFVBQVUwQixHQUFHOzs7OztJQWtDeEI7SUFFQSxxQkFDRSw4REFBQ0g7UUFBSVEsSUFBRzs7MEJBQ04sOERBQUNLOzBCQUFHOzs7Ozs7WUFDSHBDLGFBQWFxQixnQkFBZ0JyQixXQUFXOzs7Ozs7O0FBRy9DO0dBdEZNRDtLQUFBQTtBQXdGTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvRmlsZUV4cGxvcmVyL0ZpbGVFeHBsb3Jlci5qcz9iYTZlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuLi8uLi91dGlscy9kYXRhXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBGaWxlRXhwbG9yZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtkaXJlY3RvcnksIHNldERpcmVjdG9yeV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEZldGNoIGZvbGRlciBhbmQgZmlsZSBkYXRhIGZyb20gdGhlIGJhY2tlbmRcbiAgICAvLyBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvZGlyZWN0b3J5L1wiKVxuICAgIC8vICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xuICAgIC8vICAgICBzZXREaXJlY3RvcnkoZGF0YSk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcbiAgICAvLyAgIH0pXG4gICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpKTtcbiAgICBzZXREaXJlY3RvcnkoZGF0YSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRGb2xkZXJJZCA9IChkaXJlY3RvcnlfaWQpID0+IHtcbiAgICBpZiAoZGlyZWN0b3J5X2lkICE9PSBudWxsKSB7XG4gICAgICBsZXQgbGVuID0gZGlyZWN0b3J5X2lkLmxlbmd0aDtcbiAgICAgIHJldHVybiBgZm9sZGVyXyR7ZGlyZWN0b3J5X2lkLnNsaWNlKGxlbiAtIDUsIGxlbil9YDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlU3ViZm9sZGVycyA9IChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgdGFyZ2V0U3ViZm9sZGVycyA9IGUudGFyZ2V0LmRhdGFzZXRbXCJkaXJlY3RvcnlJZFwiXTtcbiAgICBsZXQgc3ViZm9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2V0Rm9sZGVySWQodGFyZ2V0U3ViZm9sZGVycykpO1xuXG4gICAgLy9jaGVjayBpZiBjbGFzcyBhbHJlYWR5IGV4aXN0c1xuICAgIGlmIChbLi4uc3ViZm9sZGVyLmNsYXNzTGlzdF0uaW5jbHVkZXMoXCJ2aXNpYmxlXCIpKSB7XG4gICAgICBzdWJmb2xkZXIuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YmZvbGRlci5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmlsZUNsaWNrID0gKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIHRvIHJlbmRlciBhIGRpcmVjdG9yeSByZWN1cnNpdmVseVxuICBjb25zdCByZW5kZXJEaXJlY3RvcnkgPSAoZGlyZWN0b3J5LCBsZXZlbCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGRpcmVjdG9yeSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXtkaXJlY3RvcnkuX2lkfVxuICAgICAgICBjbGFzc05hbWU9XCJmb2xkZXJcIlxuICAgICAgICBkYXRhLWRpcmVjdG9yeS1pZD17ZGlyZWN0b3J5Ll9pZH1cbiAgICAgICAgb25DbGljaz17dG9nZ2xlU3ViZm9sZGVyc31cbiAgICAgID5cbiAgICAgICAge1wiLVwiLnJlcGVhdChsZXZlbCl9XG4gICAgICAgIHtkaXJlY3RvcnkubmFtZX1cbiAgICAgICAge2RpcmVjdG9yeS5kaXJlY3RvcmllcyAmJiBkaXJlY3RvcnkuZGlyZWN0b3JpZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ViZm9sZGVyc1wiXG4gICAgICAgICAgICBpZD17Z2V0Rm9sZGVySWQoZGlyZWN0b3J5Ll9pZCl9XG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTdWJmb2xkZXJzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtkaXJlY3RvcnkuZGlyZWN0b3JpZXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICBkaXJlY3RvcnkuZGlyZWN0b3JpZXMubWFwKChzdWJkaXJlY3RvcnkpID0+XG4gICAgICAgICAgICAgICAgcmVuZGVyRGlyZWN0b3J5KHN1YmRpcmVjdG9yeSwgbGV2ZWwgKyAxKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmlsZXNcIlxuICAgICAgICAgIGlkPXtnZXRGb2xkZXJJZChkaXJlY3RvcnkuX2lkKX1cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVGaWxlQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICB7ZGlyZWN0b3J5LmZpbGVzICYmXG4gICAgICAgICAgICBkaXJlY3RvcnkuZmlsZXMubWFwKChmaWxlKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtmaWxlLl9pZH0gY2xhc3NOYW1lPVwiZmlsZVwiPlxuICAgICAgICAgICAgICAgIHtcIi1cIi5yZXBlYXQobGV2ZWwgKyAxKX1cbiAgICAgICAgICAgICAgICB7ZmlsZS5uYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiZmlsZUV4cGxvcmVyXCI+XG4gICAgICA8aDI+RmlsZSBFeHBsb3JlcjwvaDI+XG4gICAgICB7ZGlyZWN0b3J5ICYmIHJlbmRlckRpcmVjdG9yeShkaXJlY3RvcnksIDApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZUV4cGxvcmVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkYXRhIiwiRmlsZUV4cGxvcmVyIiwiZGlyZWN0b3J5Iiwic2V0RGlyZWN0b3J5IiwiZ2V0Rm9sZGVySWQiLCJkaXJlY3RvcnlfaWQiLCJsZW4iLCJsZW5ndGgiLCJzbGljZSIsInRvZ2dsZVN1YmZvbGRlcnMiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0U3ViZm9sZGVycyIsInRhcmdldCIsImRhdGFzZXQiLCJzdWJmb2xkZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0IiwiaW5jbHVkZXMiLCJyZW1vdmUiLCJhZGQiLCJoYW5kbGVGaWxlQ2xpY2siLCJyZW5kZXJEaXJlY3RvcnkiLCJsZXZlbCIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEtZGlyZWN0b3J5LWlkIiwiX2lkIiwib25DbGljayIsInJlcGVhdCIsIm5hbWUiLCJkaXJlY3RvcmllcyIsImlkIiwibWFwIiwic3ViZGlyZWN0b3J5IiwiZmlsZXMiLCJmaWxlIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/FileExplorer/FileExplorer.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/utils/data.js":
/*!*******************************!*\
  !*** ./src/app/utils/data.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nconst data = {\n    _id: \"65f56d03332aa3c514e9d15b\",\n    name: \"root\",\n    parentDirectory: null,\n    directories: [\n        {\n            name: \"Folder1\",\n            parentDirectory: \"65f56d03332aa3c514e9d15b\",\n            directories: [\n                {\n                    name: \"Subfolder1\",\n                    parentDirectory: \"65f56d04332aa3c514e9d15d\",\n                    directories: [],\n                    files: [\n                        {\n                            _id: \"65f56d04332aa3c514e9d163\",\n                            name: \"file1.txt\",\n                            url: \"https://example.com/file1.txt\",\n                            directory: \"65f56d04332aa3c514e9d160\",\n                            __v: 0\n                        },\n                        {\n                            _id: \"65f56d04332aa3c514e9d165\",\n                            name: \"file2.txt\",\n                            url: \"https://example.com/file2.txt\",\n                            directory: \"65f56d04332aa3c514e9d160\",\n                            __v: 0\n                        }\n                    ],\n                    _id: \"65f56d04332aa3c514e9d160\",\n                    __v: 1\n                },\n                {\n                    name: \"Subfolder2\",\n                    parentDirectory: \"65f56d04332aa3c514e9d15d\",\n                    directories: [],\n                    files: [\n                        {\n                            _id: \"65f56d04332aa3c514e9d16b\",\n                            name: \"file3.txt\",\n                            url: \"https://example.com/file3.txt\",\n                            directory: \"65f56d04332aa3c514e9d168\",\n                            __v: 0\n                        }\n                    ],\n                    _id: \"65f56d04332aa3c514e9d168\",\n                    __v: 1\n                }\n            ],\n            files: [],\n            _id: \"65f56d04332aa3c514e9d15d\",\n            __v: 2\n        },\n        {\n            name: \"Folder2\",\n            parentDirectory: \"65f56d03332aa3c514e9d15b\",\n            directories: [],\n            files: [\n                {\n                    _id: \"65f56d04332aa3c514e9d171\",\n                    name: \"file4.txt\",\n                    url: \"https://example.com/file4.txt\",\n                    directory: \"65f56d04332aa3c514e9d16e\",\n                    __v: 0\n                },\n                {\n                    _id: \"65f56d04332aa3c514e9d173\",\n                    name: \"file5.txt\",\n                    url: \"https://example.com/file5.txt\",\n                    directory: \"65f56d04332aa3c514e9d16e\",\n                    __v: 0\n                }\n            ],\n            _id: \"65f56d04332aa3c514e9d16e\",\n            __v: 1\n        },\n        {\n            name: \"Folder3\",\n            parentDirectory: \"65f56d03332aa3c514e9d15b\",\n            directories: [],\n            files: [\n                {\n                    _id: \"65f56d04332aa3c514e9d179\",\n                    name: \"file6.txt\",\n                    url: \"https://example.com/file6.txt\",\n                    directory: \"65f56d04332aa3c514e9d176\",\n                    __v: 0\n                },\n                {\n                    _id: \"65f56d04332aa3c514e9d17b\",\n                    name: \"file7.txt\",\n                    url: \"https://example.com/file7.txt\",\n                    directory: \"65f56d04332aa3c514e9d176\",\n                    __v: 0\n                }\n            ],\n            _id: \"65f56d04332aa3c514e9d176\",\n            __v: 1\n        }\n    ],\n    files: [],\n    __v: 3\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdXRpbHMvZGF0YS5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsT0FBTztJQUNYQyxLQUFLO0lBQ0xDLE1BQU07SUFDTkMsaUJBQWlCO0lBQ2pCQyxhQUFhO1FBQ1g7WUFDRUYsTUFBTTtZQUNOQyxpQkFBaUI7WUFDakJDLGFBQWE7Z0JBQ1g7b0JBQ0VGLE1BQU07b0JBQ05DLGlCQUFpQjtvQkFDakJDLGFBQWEsRUFBRTtvQkFDZkMsT0FBTzt3QkFDTDs0QkFDRUosS0FBSzs0QkFDTEMsTUFBTTs0QkFDTkksS0FBSzs0QkFDTEMsV0FBVzs0QkFDWEMsS0FBSzt3QkFDUDt3QkFDQTs0QkFDRVAsS0FBSzs0QkFDTEMsTUFBTTs0QkFDTkksS0FBSzs0QkFDTEMsV0FBVzs0QkFDWEMsS0FBSzt3QkFDUDtxQkFDRDtvQkFDRFAsS0FBSztvQkFDTE8sS0FBSztnQkFDUDtnQkFDQTtvQkFDRU4sTUFBTTtvQkFDTkMsaUJBQWlCO29CQUNqQkMsYUFBYSxFQUFFO29CQUNmQyxPQUFPO3dCQUNMOzRCQUNFSixLQUFLOzRCQUNMQyxNQUFNOzRCQUNOSSxLQUFLOzRCQUNMQyxXQUFXOzRCQUNYQyxLQUFLO3dCQUNQO3FCQUNEO29CQUNEUCxLQUFLO29CQUNMTyxLQUFLO2dCQUNQO2FBQ0Q7WUFDREgsT0FBTyxFQUFFO1lBQ1RKLEtBQUs7WUFDTE8sS0FBSztRQUNQO1FBQ0E7WUFDRU4sTUFBTTtZQUNOQyxpQkFBaUI7WUFDakJDLGFBQWEsRUFBRTtZQUNmQyxPQUFPO2dCQUNMO29CQUNFSixLQUFLO29CQUNMQyxNQUFNO29CQUNOSSxLQUFLO29CQUNMQyxXQUFXO29CQUNYQyxLQUFLO2dCQUNQO2dCQUNBO29CQUNFUCxLQUFLO29CQUNMQyxNQUFNO29CQUNOSSxLQUFLO29CQUNMQyxXQUFXO29CQUNYQyxLQUFLO2dCQUNQO2FBQ0Q7WUFDRFAsS0FBSztZQUNMTyxLQUFLO1FBQ1A7UUFDQTtZQUNFTixNQUFNO1lBQ05DLGlCQUFpQjtZQUNqQkMsYUFBYSxFQUFFO1lBQ2ZDLE9BQU87Z0JBQ0w7b0JBQ0VKLEtBQUs7b0JBQ0xDLE1BQU07b0JBQ05JLEtBQUs7b0JBQ0xDLFdBQVc7b0JBQ1hDLEtBQUs7Z0JBQ1A7Z0JBQ0E7b0JBQ0VQLEtBQUs7b0JBQ0xDLE1BQU07b0JBQ05JLEtBQUs7b0JBQ0xDLFdBQVc7b0JBQ1hDLEtBQUs7Z0JBQ1A7YUFDRDtZQUNEUCxLQUFLO1lBQ0xPLEtBQUs7UUFDUDtLQUNEO0lBQ0RILE9BQU8sRUFBRTtJQUNURyxLQUFLO0FBQ1A7QUFFQSwrREFBZVIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3V0aWxzL2RhdGEuanM/MDI4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkYXRhID0ge1xuICBfaWQ6IFwiNjVmNTZkMDMzMzJhYTNjNTE0ZTlkMTViXCIsXG4gIG5hbWU6IFwicm9vdFwiLFxuICBwYXJlbnREaXJlY3Rvcnk6IG51bGwsXG4gIGRpcmVjdG9yaWVzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJGb2xkZXIxXCIsXG4gICAgICBwYXJlbnREaXJlY3Rvcnk6IFwiNjVmNTZkMDMzMzJhYTNjNTE0ZTlkMTViXCIsXG4gICAgICBkaXJlY3RvcmllczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJTdWJmb2xkZXIxXCIsXG4gICAgICAgICAgcGFyZW50RGlyZWN0b3J5OiBcIjY1ZjU2ZDA0MzMyYWEzYzUxNGU5ZDE1ZFwiLFxuICAgICAgICAgIGRpcmVjdG9yaWVzOiBbXSxcbiAgICAgICAgICBmaWxlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfaWQ6IFwiNjVmNTZkMDQzMzJhYTNjNTE0ZTlkMTYzXCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwiZmlsZTEudHh0XCIsXG4gICAgICAgICAgICAgIHVybDogXCJodHRwczovL2V4YW1wbGUuY29tL2ZpbGUxLnR4dFwiLFxuICAgICAgICAgICAgICBkaXJlY3Rvcnk6IFwiNjVmNTZkMDQzMzJhYTNjNTE0ZTlkMTYwXCIsXG4gICAgICAgICAgICAgIF9fdjogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9pZDogXCI2NWY1NmQwNDMzMmFhM2M1MTRlOWQxNjVcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJmaWxlMi50eHRcIixcbiAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vZXhhbXBsZS5jb20vZmlsZTIudHh0XCIsXG4gICAgICAgICAgICAgIGRpcmVjdG9yeTogXCI2NWY1NmQwNDMzMmFhM2M1MTRlOWQxNjBcIixcbiAgICAgICAgICAgICAgX192OiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIF9pZDogXCI2NWY1NmQwNDMzMmFhM2M1MTRlOWQxNjBcIixcbiAgICAgICAgICBfX3Y6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIlN1YmZvbGRlcjJcIixcbiAgICAgICAgICBwYXJlbnREaXJlY3Rvcnk6IFwiNjVmNTZkMDQzMzJhYTNjNTE0ZTlkMTVkXCIsXG4gICAgICAgICAgZGlyZWN0b3JpZXM6IFtdLFxuICAgICAgICAgIGZpbGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9pZDogXCI2NWY1NmQwNDMzMmFhM2M1MTRlOWQxNmJcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJmaWxlMy50eHRcIixcbiAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vZXhhbXBsZS5jb20vZmlsZTMudHh0XCIsXG4gICAgICAgICAgICAgIGRpcmVjdG9yeTogXCI2NWY1NmQwNDMzMmFhM2M1MTRlOWQxNjhcIixcbiAgICAgICAgICAgICAgX192OiAwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIF9pZDogXCI2NWY1NmQwNDMzMmFhM2M1MTRlOWQxNjhcIixcbiAgICAgICAgICBfX3Y6IDEsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgZmlsZXM6IFtdLFxuICAgICAgX2lkOiBcIjY1ZjU2ZDA0MzMyYWEzYzUxNGU5ZDE1ZFwiLFxuICAgICAgX192OiAyLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJGb2xkZXIyXCIsXG4gICAgICBwYXJlbnREaXJlY3Rvcnk6IFwiNjVmNTZkMDMzMzJhYTNjNTE0ZTlkMTViXCIsXG4gICAgICBkaXJlY3RvcmllczogW10sXG4gICAgICBmaWxlczogW1xuICAgICAgICB7XG4gICAgICAgICAgX2lkOiBcIjY1ZjU2ZDA0MzMyYWEzYzUxNGU5ZDE3MVwiLFxuICAgICAgICAgIG5hbWU6IFwiZmlsZTQudHh0XCIsXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vZXhhbXBsZS5jb20vZmlsZTQudHh0XCIsXG4gICAgICAgICAgZGlyZWN0b3J5OiBcIjY1ZjU2ZDA0MzMyYWEzYzUxNGU5ZDE2ZVwiLFxuICAgICAgICAgIF9fdjogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIF9pZDogXCI2NWY1NmQwNDMzMmFhM2M1MTRlOWQxNzNcIixcbiAgICAgICAgICBuYW1lOiBcImZpbGU1LnR4dFwiLFxuICAgICAgICAgIHVybDogXCJodHRwczovL2V4YW1wbGUuY29tL2ZpbGU1LnR4dFwiLFxuICAgICAgICAgIGRpcmVjdG9yeTogXCI2NWY1NmQwNDMzMmFhM2M1MTRlOWQxNmVcIixcbiAgICAgICAgICBfX3Y6IDAsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgX2lkOiBcIjY1ZjU2ZDA0MzMyYWEzYzUxNGU5ZDE2ZVwiLFxuICAgICAgX192OiAxLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJGb2xkZXIzXCIsXG4gICAgICBwYXJlbnREaXJlY3Rvcnk6IFwiNjVmNTZkMDMzMzJhYTNjNTE0ZTlkMTViXCIsXG4gICAgICBkaXJlY3RvcmllczogW10sXG4gICAgICBmaWxlczogW1xuICAgICAgICB7XG4gICAgICAgICAgX2lkOiBcIjY1ZjU2ZDA0MzMyYWEzYzUxNGU5ZDE3OVwiLFxuICAgICAgICAgIG5hbWU6IFwiZmlsZTYudHh0XCIsXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vZXhhbXBsZS5jb20vZmlsZTYudHh0XCIsXG4gICAgICAgICAgZGlyZWN0b3J5OiBcIjY1ZjU2ZDA0MzMyYWEzYzUxNGU5ZDE3NlwiLFxuICAgICAgICAgIF9fdjogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIF9pZDogXCI2NWY1NmQwNDMzMmFhM2M1MTRlOWQxN2JcIixcbiAgICAgICAgICBuYW1lOiBcImZpbGU3LnR4dFwiLFxuICAgICAgICAgIHVybDogXCJodHRwczovL2V4YW1wbGUuY29tL2ZpbGU3LnR4dFwiLFxuICAgICAgICAgIGRpcmVjdG9yeTogXCI2NWY1NmQwNDMzMmFhM2M1MTRlOWQxNzZcIixcbiAgICAgICAgICBfX3Y6IDAsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgX2lkOiBcIjY1ZjU2ZDA0MzMyYWEzYzUxNGU5ZDE3NlwiLFxuICAgICAgX192OiAxLFxuICAgIH0sXG4gIF0sXG4gIGZpbGVzOiBbXSxcbiAgX192OiAzLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcbiJdLCJuYW1lcyI6WyJkYXRhIiwiX2lkIiwibmFtZSIsInBhcmVudERpcmVjdG9yeSIsImRpcmVjdG9yaWVzIiwiZmlsZXMiLCJ1cmwiLCJkaXJlY3RvcnkiLCJfX3YiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/utils/data.js\n"));

/***/ })

});