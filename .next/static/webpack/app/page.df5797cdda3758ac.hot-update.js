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

/***/ "(app-pages-browser)/./src/app/views/file.js":
/*!*******************************!*\
  !*** ./src/app/views/file.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ \"(app-pages-browser)/./src/app/data.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/app/views/style.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst FileExplorer = ()=>{\n    _s();\n    const [directory, setDirectory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch folder and file data from the backend\n        // fetch(\"http://localhost:8000/api/directory/\")\n        //   .then((response) => response.json())\n        //   .then((data) => {\n        //     setDirectory(data);\n        //     console.log(\"data\", data);\n        //   })\n        //   .catch((error) => console.error(\"Error fetching data:\", error));\n        setDirectory(_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    }, []);\n    const getFolderId = (directory_id)=>{\n        if (directory_id !== null) {\n            let len = directory_id.length;\n            return \"folder_\".concat(directory_id.slice(len - 5, len));\n        }\n    };\n    const toggleSubfolders = (e)=>{\n        e.stopPropagation();\n        let targetSubfolders = e.target.dataset[\"directoryId\"];\n        let subfolder = document.getElementById(getFolderId(targetSubfolders));\n        //check if class already exists\n        if ([\n            ...subfolder.classList\n        ].includes(\"visible\")) {\n            subfolder.classList.remove(\"visible\");\n        } else {\n            subfolder.classList.add(\"visible\");\n        }\n    };\n    // Function to render a directory recursively\n    const renderDirectory = (directory, level)=>{\n        // console.log(directory);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"folder\",\n            \"data-directory-id\": directory._id,\n            onClick: toggleSubfolders,\n            children: [\n                \"-\".repeat(level),\n                directory.name,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"subfolders\",\n                    id: getFolderId(directory._id),\n                    children: directory.directories.length > 0 && directory.directories.map((subdirectory)=>renderDirectory(subdirectory, level + 1))\n                }, void 0, false, {\n                    fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/views/file.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"files\",\n                    id: getFolderId(directory.parentDirectory),\n                    onClick: (e)=>e.stopPropagation,\n                    children: directory.files && directory.files.map((file)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"file\",\n                            children: [\n                                \"-\".repeat(level + 1),\n                                file.name\n                            ]\n                        }, file._id, true, {\n                            fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/views/file.js\",\n                            lineNumber: 66,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/views/file.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, directory._id, true, {\n            fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/views/file.js\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"fileExplorer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"File Explorer\"\n            }, void 0, false, {\n                fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/views/file.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            directory && renderDirectory(directory, 0)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/views/file.js\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FileExplorer, \"avue+aJOdFDy1WhZbNnnRJaFQCQ=\");\n_c = FileExplorer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileExplorer);\nvar _c;\n$RefreshReg$(_c, \"FileExplorer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdmlld3MvZmlsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNtRDtBQUN4QjtBQUNOO0FBRXJCLE1BQU1JLGVBQWU7O0lBQ25CLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDUiw4Q0FBOEM7UUFDOUMsZ0RBQWdEO1FBQ2hELHlDQUF5QztRQUN6QyxzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLGlDQUFpQztRQUNqQyxPQUFPO1FBQ1AscUVBQXFFO1FBQ3JFSSxhQUFhSCw2Q0FBSUE7SUFDbkIsR0FBRyxFQUFFO0lBRUwsTUFBTUksY0FBYyxDQUFDQztRQUNuQixJQUFJQSxpQkFBaUIsTUFBTTtZQUN6QixJQUFJQyxNQUFNRCxhQUFhRSxNQUFNO1lBQzdCLE9BQU8sVUFBMkMsT0FBakNGLGFBQWFHLEtBQUssQ0FBQ0YsTUFBTSxHQUFHQTtRQUMvQztJQUNGO0lBRUEsTUFBTUcsbUJBQW1CLENBQUNDO1FBQ3hCQSxFQUFFQyxlQUFlO1FBQ2pCLElBQUlDLG1CQUFtQkYsRUFBRUcsTUFBTSxDQUFDQyxPQUFPLENBQUMsY0FBYztRQUN0RCxJQUFJQyxZQUFZQyxTQUFTQyxjQUFjLENBQUNiLFlBQVlRO1FBRXBELCtCQUErQjtRQUMvQixJQUFJO2VBQUlHLFVBQVVHLFNBQVM7U0FBQyxDQUFDQyxRQUFRLENBQUMsWUFBWTtZQUNoREosVUFBVUcsU0FBUyxDQUFDRSxNQUFNLENBQUM7UUFDN0IsT0FBTztZQUNMTCxVQUFVRyxTQUFTLENBQUNHLEdBQUcsQ0FBQztRQUMxQjtJQUNGO0lBRUEsNkNBQTZDO0lBQzdDLE1BQU1DLGtCQUFrQixDQUFDcEIsV0FBV3FCO1FBQ2xDLDBCQUEwQjtRQUMxQixxQkFDRSw4REFBQ0M7WUFFQ0MsV0FBVTtZQUNWQyxxQkFBbUJ4QixVQUFVeUIsR0FBRztZQUNoQ0MsU0FBU25COztnQkFFUixJQUFJb0IsTUFBTSxDQUFDTjtnQkFDWHJCLFVBQVU0QixJQUFJOzhCQUNmLDhEQUFDTjtvQkFBSUMsV0FBVTtvQkFBYU0sSUFBSTNCLFlBQVlGLFVBQVV5QixHQUFHOzhCQUN0RHpCLFVBQVU4QixXQUFXLENBQUN6QixNQUFNLEdBQUcsS0FDOUJMLFVBQVU4QixXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxlQUN6QlosZ0JBQWdCWSxjQUFjWCxRQUFROzs7Ozs7OEJBRzVDLDhEQUFDQztvQkFDQ0MsV0FBVTtvQkFDVk0sSUFBSTNCLFlBQVlGLFVBQVVpQyxlQUFlO29CQUN6Q1AsU0FBUyxDQUFDbEIsSUFBTUEsRUFBRUMsZUFBZTs4QkFFaENULFVBQVVrQyxLQUFLLElBQ2RsQyxVQUFVa0MsS0FBSyxDQUFDSCxHQUFHLENBQUMsQ0FBQ0kscUJBQ25CLDhEQUFDYjs0QkFBbUJDLFdBQVU7O2dDQUMzQixJQUFJSSxNQUFNLENBQUNOLFFBQVE7Z0NBQ25CYyxLQUFLUCxJQUFJOzsyQkFGRk8sS0FBS1YsR0FBRzs7Ozs7Ozs7Ozs7V0FwQm5CekIsVUFBVXlCLEdBQUc7Ozs7O0lBNEJ4QjtJQUVBLHFCQUNFLDhEQUFDSDtRQUFJTyxJQUFHOzswQkFDTiw4REFBQ087MEJBQUc7Ozs7OztZQUNIcEMsYUFBYW9CLGdCQUFnQnBCLFdBQVc7Ozs7Ozs7QUFHL0M7R0E1RU1EO0tBQUFBO0FBOEVOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdmlld3MvZmlsZS5qcz83ZjMzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuLi9kYXRhXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBGaWxlRXhwbG9yZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtkaXJlY3RvcnksIHNldERpcmVjdG9yeV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEZldGNoIGZvbGRlciBhbmQgZmlsZSBkYXRhIGZyb20gdGhlIGJhY2tlbmRcbiAgICAvLyBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvZGlyZWN0b3J5L1wiKVxuICAgIC8vICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLy8gICAudGhlbigoZGF0YSkgPT4ge1xuICAgIC8vICAgICBzZXREaXJlY3RvcnkoZGF0YSk7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcbiAgICAvLyAgIH0pXG4gICAgLy8gICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpKTtcbiAgICBzZXREaXJlY3RvcnkoZGF0YSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRGb2xkZXJJZCA9IChkaXJlY3RvcnlfaWQpID0+IHtcbiAgICBpZiAoZGlyZWN0b3J5X2lkICE9PSBudWxsKSB7XG4gICAgICBsZXQgbGVuID0gZGlyZWN0b3J5X2lkLmxlbmd0aDtcbiAgICAgIHJldHVybiBgZm9sZGVyXyR7ZGlyZWN0b3J5X2lkLnNsaWNlKGxlbiAtIDUsIGxlbil9YDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlU3ViZm9sZGVycyA9IChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgdGFyZ2V0U3ViZm9sZGVycyA9IGUudGFyZ2V0LmRhdGFzZXRbXCJkaXJlY3RvcnlJZFwiXTtcbiAgICBsZXQgc3ViZm9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2V0Rm9sZGVySWQodGFyZ2V0U3ViZm9sZGVycykpO1xuXG4gICAgLy9jaGVjayBpZiBjbGFzcyBhbHJlYWR5IGV4aXN0c1xuICAgIGlmIChbLi4uc3ViZm9sZGVyLmNsYXNzTGlzdF0uaW5jbHVkZXMoXCJ2aXNpYmxlXCIpKSB7XG4gICAgICBzdWJmb2xkZXIuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YmZvbGRlci5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gdG8gcmVuZGVyIGEgZGlyZWN0b3J5IHJlY3Vyc2l2ZWx5XG4gIGNvbnN0IHJlbmRlckRpcmVjdG9yeSA9IChkaXJlY3RvcnksIGxldmVsKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZGlyZWN0b3J5KTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9e2RpcmVjdG9yeS5faWR9XG4gICAgICAgIGNsYXNzTmFtZT1cImZvbGRlclwiXG4gICAgICAgIGRhdGEtZGlyZWN0b3J5LWlkPXtkaXJlY3RvcnkuX2lkfVxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVTdWJmb2xkZXJzfVxuICAgICAgPlxuICAgICAgICB7XCItXCIucmVwZWF0KGxldmVsKX1cbiAgICAgICAge2RpcmVjdG9yeS5uYW1lfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YmZvbGRlcnNcIiBpZD17Z2V0Rm9sZGVySWQoZGlyZWN0b3J5Ll9pZCl9PlxuICAgICAgICAgIHtkaXJlY3RvcnkuZGlyZWN0b3JpZXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgZGlyZWN0b3J5LmRpcmVjdG9yaWVzLm1hcCgoc3ViZGlyZWN0b3J5KSA9PlxuICAgICAgICAgICAgICByZW5kZXJEaXJlY3Rvcnkoc3ViZGlyZWN0b3J5LCBsZXZlbCArIDEpXG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGVzXCJcbiAgICAgICAgICBpZD17Z2V0Rm9sZGVySWQoZGlyZWN0b3J5LnBhcmVudERpcmVjdG9yeSl9XG4gICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9ufVxuICAgICAgICA+XG4gICAgICAgICAge2RpcmVjdG9yeS5maWxlcyAmJlxuICAgICAgICAgICAgZGlyZWN0b3J5LmZpbGVzLm1hcCgoZmlsZSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17ZmlsZS5faWR9IGNsYXNzTmFtZT1cImZpbGVcIj5cbiAgICAgICAgICAgICAgICB7XCItXCIucmVwZWF0KGxldmVsICsgMSl9XG4gICAgICAgICAgICAgICAge2ZpbGUubmFtZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImZpbGVFeHBsb3JlclwiPlxuICAgICAgPGgyPkZpbGUgRXhwbG9yZXI8L2gyPlxuICAgICAge2RpcmVjdG9yeSAmJiByZW5kZXJEaXJlY3RvcnkoZGlyZWN0b3J5LCAwKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVFeHBsb3JlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZGF0YSIsIkZpbGVFeHBsb3JlciIsImRpcmVjdG9yeSIsInNldERpcmVjdG9yeSIsImdldEZvbGRlcklkIiwiZGlyZWN0b3J5X2lkIiwibGVuIiwibGVuZ3RoIiwic2xpY2UiLCJ0b2dnbGVTdWJmb2xkZXJzIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInRhcmdldFN1YmZvbGRlcnMiLCJ0YXJnZXQiLCJkYXRhc2V0Iiwic3ViZm9sZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImluY2x1ZGVzIiwicmVtb3ZlIiwiYWRkIiwicmVuZGVyRGlyZWN0b3J5IiwibGV2ZWwiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhLWRpcmVjdG9yeS1pZCIsIl9pZCIsIm9uQ2xpY2siLCJyZXBlYXQiLCJuYW1lIiwiaWQiLCJkaXJlY3RvcmllcyIsIm1hcCIsInN1YmRpcmVjdG9yeSIsInBhcmVudERpcmVjdG9yeSIsImZpbGVzIiwiZmlsZSIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/views/file.js\n"));

/***/ })

});