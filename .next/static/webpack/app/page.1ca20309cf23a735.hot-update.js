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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/data */ \"(app-pages-browser)/./src/app/utils/data.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/app/components/FileExplorer/style.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst FileExplorer = ()=>{\n    _s();\n    const [directory, setDirectory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch folder and file data from the backend\n        // fetch(\"http://localhost:8000/api/directory/\")\n        //   .then((response) => response.json())\n        //   .then((data) => {\n        //     setDirectory(data);\n        //     console.log(\"data\", data);\n        //   })\n        //   .catch((error) => console.error(\"Error fetching data:\", error));\n        setDirectory(_utils_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    }, []);\n    const getFolderId = (directory_id)=>{\n        if (directory_id !== null) {\n            let len = directory_id.length;\n            return \"folder_\".concat(directory_id.slice(len - 5, len));\n        }\n    };\n    const toggleSubfolders = (e)=>{\n        e.stopPropagation();\n        let targetSubfolders = e.target.dataset[\"directoryId\"];\n        let subfolder = document.getElementById(getFolderId(targetSubfolders));\n        //check if class already exists\n        if ([\n            ...subfolder.classList\n        ].includes(\"visible\")) {\n            subfolder.classList.remove(\"visible\");\n        } else {\n            subfolder.classList.add(\"visible\");\n        }\n    };\n    const handleFileClick = (e)=>{\n        e.stopPropagation();\n    };\n    // Function to render a directory recursively\n    const renderDirectory = (directory, level)=>{\n        // console.log(directory);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"folder\",\n                \"data-directory-id\": directory._id,\n                onClick: toggleSubfolders,\n                children: [\n                    \"-\".repeat(level),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            directory.name,\n                            \" | \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"New File\"\n                            }, void 0, false, {\n                                fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/components/FileExplorer/FileExplorer.js\",\n                                lineNumber: 58,\n                                columnNumber: 32\n                            }, undefined),\n                            \" |\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"New File\"\n                            }, void 0, false, {\n                                fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/components/FileExplorer/FileExplorer.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/components/FileExplorer/FileExplorer.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined),\n                    directory.directories && directory.directories.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"subfolders\",\n                        id: getFolderId(directory._id),\n                        onClick: toggleSubfolders,\n                        children: directory.directories.length > 0 && directory.directories.map((subdirectory)=>renderDirectory(subdirectory, level + 1))\n                    }, void 0, false, {\n                        fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/components/FileExplorer/FileExplorer.js\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"files\",\n                        id: getFolderId(directory._id),\n                        onClick: handleFileClick,\n                        children: directory.files && directory.files.map((file)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"file\",\n                                children: [\n                                    \"-\".repeat(level + 1),\n                                    file.name\n                                ]\n                            }, file._id, true, {\n                                fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/components/FileExplorer/FileExplorer.js\",\n                                lineNumber: 80,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/components/FileExplorer/FileExplorer.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, directory._id, true, {\n                fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/components/FileExplorer/FileExplorer.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"fileExplorer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"File Explorer\"\n            }, void 0, false, {\n                fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/components/FileExplorer/FileExplorer.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined),\n            directory && renderDirectory(directory, 0)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/umarfarooque/Desktop/projects/hcms-react/src/app/components/FileExplorer/FileExplorer.js\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FileExplorer, \"avue+aJOdFDy1WhZbNnnRJaFQCQ=\");\n_c = FileExplorer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileExplorer);\nvar _c;\n$RefreshReg$(_c, \"FileExplorer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9GaWxlRXhwbG9yZXIvRmlsZUV4cGxvcmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ21EO0FBQ2Y7QUFDZjtBQUVyQixNQUFNSSxlQUFlOztJQUNuQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUM7SUFFM0NDLGdEQUFTQSxDQUFDO1FBQ1IsOENBQThDO1FBQzlDLGdEQUFnRDtRQUNoRCx5Q0FBeUM7UUFDekMsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQixpQ0FBaUM7UUFDakMsT0FBTztRQUNQLHFFQUFxRTtRQUNyRUksYUFBYUgsbURBQUlBO0lBQ25CLEdBQUcsRUFBRTtJQUVMLE1BQU1JLGNBQWMsQ0FBQ0M7UUFDbkIsSUFBSUEsaUJBQWlCLE1BQU07WUFDekIsSUFBSUMsTUFBTUQsYUFBYUUsTUFBTTtZQUM3QixPQUFPLFVBQTJDLE9BQWpDRixhQUFhRyxLQUFLLENBQUNGLE1BQU0sR0FBR0E7UUFDL0M7SUFDRjtJQUVBLE1BQU1HLG1CQUFtQixDQUFDQztRQUN4QkEsRUFBRUMsZUFBZTtRQUNqQixJQUFJQyxtQkFBbUJGLEVBQUVHLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLGNBQWM7UUFDdEQsSUFBSUMsWUFBWUMsU0FBU0MsY0FBYyxDQUFDYixZQUFZUTtRQUVwRCwrQkFBK0I7UUFDL0IsSUFBSTtlQUFJRyxVQUFVRyxTQUFTO1NBQUMsQ0FBQ0MsUUFBUSxDQUFDLFlBQVk7WUFDaERKLFVBQVVHLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO1FBQzdCLE9BQU87WUFDTEwsVUFBVUcsU0FBUyxDQUFDRyxHQUFHLENBQUM7UUFDMUI7SUFDRjtJQUVBLE1BQU1DLGtCQUFrQixDQUFDWjtRQUN2QkEsRUFBRUMsZUFBZTtJQUNuQjtJQUVBLDZDQUE2QztJQUM3QyxNQUFNWSxrQkFBa0IsQ0FBQ3JCLFdBQVdzQjtRQUNsQywwQkFBMEI7UUFDMUIscUJBQ0U7c0JBQ0UsNEVBQUNDO2dCQUVDQyxXQUFVO2dCQUNWQyxxQkFBbUJ6QixVQUFVMEIsR0FBRztnQkFDaENDLFNBQVNwQjs7b0JBRVIsSUFBSXFCLE1BQU0sQ0FBQ047a0NBQ1osOERBQUNPOzs0QkFDRTdCLFVBQVU4QixJQUFJOzRCQUFDOzBDQUFHLDhEQUFDQzswQ0FBTzs7Ozs7OzRCQUFpQjs0QkFBRzswQ0FDL0MsOERBQUNBOzBDQUFPOzs7Ozs7Ozs7Ozs7b0JBRVQvQixVQUFVZ0MsV0FBVyxJQUFJaEMsVUFBVWdDLFdBQVcsQ0FBQzNCLE1BQU0sR0FBRyxtQkFDdkQsOERBQUNrQjt3QkFDQ0MsV0FBVTt3QkFDVlMsSUFBSS9CLFlBQVlGLFVBQVUwQixHQUFHO3dCQUM3QkMsU0FBU3BCO2tDQUVSUCxVQUFVZ0MsV0FBVyxDQUFDM0IsTUFBTSxHQUFHLEtBQzlCTCxVQUFVZ0MsV0FBVyxDQUFDRSxHQUFHLENBQUMsQ0FBQ0MsZUFDekJkLGdCQUFnQmMsY0FBY2IsUUFBUTs7Ozs7O2tDQUk5Qyw4REFBQ0M7d0JBQ0NDLFdBQVU7d0JBQ1ZTLElBQUkvQixZQUFZRixVQUFVMEIsR0FBRzt3QkFDN0JDLFNBQVNQO2tDQUVScEIsVUFBVW9DLEtBQUssSUFDZHBDLFVBQVVvQyxLQUFLLENBQUNGLEdBQUcsQ0FBQyxDQUFDRyxxQkFDbkIsOERBQUNkO2dDQUFtQkMsV0FBVTs7b0NBQzNCLElBQUlJLE1BQU0sQ0FBQ04sUUFBUTtvQ0FDbkJlLEtBQUtQLElBQUk7OytCQUZGTyxLQUFLWCxHQUFHOzs7Ozs7Ozs7OztlQTdCbkIxQixVQUFVMEIsR0FBRzs7Ozs7O0lBc0MxQjtJQUVBLHFCQUNFLDhEQUFDSDtRQUFJVSxJQUFHOzswQkFDTiw4REFBQ0s7MEJBQUc7Ozs7OztZQUNIdEMsYUFBYXFCLGdCQUFnQnJCLFdBQVc7Ozs7Ozs7QUFHL0M7R0EzRk1EO0tBQUFBO0FBNkZOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9GaWxlRXhwbG9yZXIvRmlsZUV4cGxvcmVyLmpzP2JhNmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4uLy4uL3V0aWxzL2RhdGFcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IEZpbGVFeHBsb3JlciA9ICgpID0+IHtcbiAgY29uc3QgW2RpcmVjdG9yeSwgc2V0RGlyZWN0b3J5XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRmV0Y2ggZm9sZGVyIGFuZCBmaWxlIGRhdGEgZnJvbSB0aGUgYmFja2VuZFxuICAgIC8vIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9kaXJlY3RvcnkvXCIpXG4gICAgLy8gICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAvLyAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgLy8gICAgIHNldERpcmVjdG9yeShkYXRhKTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuICAgIC8vICAgfSlcbiAgICAvLyAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcikpO1xuICAgIHNldERpcmVjdG9yeShkYXRhKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldEZvbGRlcklkID0gKGRpcmVjdG9yeV9pZCkgPT4ge1xuICAgIGlmIChkaXJlY3RvcnlfaWQgIT09IG51bGwpIHtcbiAgICAgIGxldCBsZW4gPSBkaXJlY3RvcnlfaWQubGVuZ3RoO1xuICAgICAgcmV0dXJuIGBmb2xkZXJfJHtkaXJlY3RvcnlfaWQuc2xpY2UobGVuIC0gNSwgbGVuKX1gO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b2dnbGVTdWJmb2xkZXJzID0gKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCB0YXJnZXRTdWJmb2xkZXJzID0gZS50YXJnZXQuZGF0YXNldFtcImRpcmVjdG9yeUlkXCJdO1xuICAgIGxldCBzdWJmb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnZXRGb2xkZXJJZCh0YXJnZXRTdWJmb2xkZXJzKSk7XG5cbiAgICAvL2NoZWNrIGlmIGNsYXNzIGFscmVhZHkgZXhpc3RzXG4gICAgaWYgKFsuLi5zdWJmb2xkZXIuY2xhc3NMaXN0XS5pbmNsdWRlcyhcInZpc2libGVcIikpIHtcbiAgICAgIHN1YmZvbGRlci5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViZm9sZGVyLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVGaWxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gdG8gcmVuZGVyIGEgZGlyZWN0b3J5IHJlY3Vyc2l2ZWx5XG4gIGNvbnN0IHJlbmRlckRpcmVjdG9yeSA9IChkaXJlY3RvcnksIGxldmVsKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZGlyZWN0b3J5KTtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17ZGlyZWN0b3J5Ll9pZH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmb2xkZXJcIlxuICAgICAgICAgIGRhdGEtZGlyZWN0b3J5LWlkPXtkaXJlY3RvcnkuX2lkfVxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVN1YmZvbGRlcnN9XG4gICAgICAgID5cbiAgICAgICAgICB7XCItXCIucmVwZWF0KGxldmVsKX1cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHtkaXJlY3RvcnkubmFtZX0gfCA8YnV0dG9uPk5ldyBGaWxlPC9idXR0b24+IHx7XCIgXCJ9XG4gICAgICAgICAgICA8YnV0dG9uPk5ldyBGaWxlPC9idXR0b24+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIHtkaXJlY3RvcnkuZGlyZWN0b3JpZXMgJiYgZGlyZWN0b3J5LmRpcmVjdG9yaWVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJmb2xkZXJzXCJcbiAgICAgICAgICAgICAgaWQ9e2dldEZvbGRlcklkKGRpcmVjdG9yeS5faWQpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVTdWJmb2xkZXJzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZGlyZWN0b3J5LmRpcmVjdG9yaWVzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICBkaXJlY3RvcnkuZGlyZWN0b3JpZXMubWFwKChzdWJkaXJlY3RvcnkpID0+XG4gICAgICAgICAgICAgICAgICByZW5kZXJEaXJlY3Rvcnkoc3ViZGlyZWN0b3J5LCBsZXZlbCArIDEpXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsZXNcIlxuICAgICAgICAgICAgaWQ9e2dldEZvbGRlcklkKGRpcmVjdG9yeS5faWQpfVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRmlsZUNsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtkaXJlY3RvcnkuZmlsZXMgJiZcbiAgICAgICAgICAgICAgZGlyZWN0b3J5LmZpbGVzLm1hcCgoZmlsZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtmaWxlLl9pZH0gY2xhc3NOYW1lPVwiZmlsZVwiPlxuICAgICAgICAgICAgICAgICAge1wiLVwiLnJlcGVhdChsZXZlbCArIDEpfVxuICAgICAgICAgICAgICAgICAge2ZpbGUubmFtZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJmaWxlRXhwbG9yZXJcIj5cbiAgICAgIDxoMj5GaWxlIEV4cGxvcmVyPC9oMj5cbiAgICAgIHtkaXJlY3RvcnkgJiYgcmVuZGVyRGlyZWN0b3J5KGRpcmVjdG9yeSwgMCl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlRXhwbG9yZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRhdGEiLCJGaWxlRXhwbG9yZXIiLCJkaXJlY3RvcnkiLCJzZXREaXJlY3RvcnkiLCJnZXRGb2xkZXJJZCIsImRpcmVjdG9yeV9pZCIsImxlbiIsImxlbmd0aCIsInNsaWNlIiwidG9nZ2xlU3ViZm9sZGVycyIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXRTdWJmb2xkZXJzIiwidGFyZ2V0IiwiZGF0YXNldCIsInN1YmZvbGRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGFzc0xpc3QiLCJpbmNsdWRlcyIsInJlbW92ZSIsImFkZCIsImhhbmRsZUZpbGVDbGljayIsInJlbmRlckRpcmVjdG9yeSIsImxldmVsIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGF0YS1kaXJlY3RvcnktaWQiLCJfaWQiLCJvbkNsaWNrIiwicmVwZWF0Iiwic3BhbiIsIm5hbWUiLCJidXR0b24iLCJkaXJlY3RvcmllcyIsImlkIiwibWFwIiwic3ViZGlyZWN0b3J5IiwiZmlsZXMiLCJmaWxlIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/FileExplorer/FileExplorer.js\n"));

/***/ })

});