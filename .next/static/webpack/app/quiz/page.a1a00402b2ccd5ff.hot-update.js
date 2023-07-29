/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/quiz/page",{

/***/ "(app-client)/./app/quiz/Quiz.tsx":
/*!***************************!*\
  !*** ./app/quiz/Quiz.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\nconst Quiz = (param)=>{\n    let { questions , totalQuestions  } = param;\n    _s();\n    const [currentQuestionIndex, setCurrentQuestionIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [userAnswers, setUserAnswers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const isQuestionAnswered = userAnswers[currentQuestionIndex] ? true : false;\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleOnAnserClick = (answer, currentQuestionIndex)=>{\n        if (isQuestionAnswered) return;\n        const isCorrect = questions[currentQuestionIndex].correct_answer === answer;\n        if (isCorrect) setScore((prev)=>prev + 1);\n        setUserAnswers((prev)=>({\n                ...prev,\n                [currentQuestionIndex]: answer\n            }));\n    };\n    const handleChangeQuestion = (step)=>{\n        const newQuestionIndex = currentQuestionIndex + step;\n        if (newQuestionIndex < 0 || newQuestionIndex >= totalQuestions) return;\n        setCurrentQuestionIndex(newQuestionIndex);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-white text-center\",\n        children: \"Quiz Component\"\n    }, void 0, false, {\n        fileName: \"E:\\\\study\\\\next-quiz-app\\\\react-quiz-2023-start-here\\\\app\\\\quiz\\\\Quiz.tsx\",\n        lineNumber: 36,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Quiz, \"dB/RaZOIY5zUpkBLZ9ZUQod/bq4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Quiz;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\nvar _c;\n$RefreshReg$(_c, \"Quiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3F1aXovUXVpei50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHNEM7QUFDWDtBQU9qQyxNQUFNRSxPQUFPLFNBQTBDO1FBQXpDLEVBQUVDLFVBQVMsRUFBRUMsZUFBYyxFQUFTOztJQUNoRCxNQUFNLENBQUNDLHNCQUFzQkMsd0JBQXdCLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ2pFLE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQXlCLENBQUM7SUFFeEUsTUFBTVUscUJBQXFCRixXQUFXLENBQUNKLHFCQUFxQixHQUFHLElBQUksR0FBRyxLQUFLO0lBQzNFLE1BQU1PLFNBQVNaLDBEQUFTQTtJQUV4QixNQUFNYSxxQkFBcUIsQ0FBQ0MsUUFBZ0JULHVCQUFpQztRQUMzRSxJQUFJTSxvQkFBb0I7UUFFeEIsTUFBTUksWUFBWVosU0FBUyxDQUFDRSxxQkFBcUIsQ0FBQ1csY0FBYyxLQUFLRjtRQUNyRSxJQUFJQyxXQUFXUCxTQUFTLENBQUNTLE9BQVNBLE9BQU87UUFFekNQLGVBQWUsQ0FBQ08sT0FBVTtnQkFBRSxHQUFHQSxJQUFJO2dCQUFFLENBQUNaLHFCQUFxQixFQUFFUztZQUFPO0lBQ3RFO0lBRUEsTUFBTUksdUJBQXVCLENBQUNDLE9BQWlCO1FBQzdDLE1BQU1DLG1CQUFtQmYsdUJBQXVCYztRQUVoRCxJQUFJQyxtQkFBbUIsS0FBS0Esb0JBQW9CaEIsZ0JBQWdCO1FBQ2hFRSx3QkFBd0JjO0lBQzFCO0lBRUEscUJBQU8sOERBQUNDO1FBQUlDLFdBQVU7a0JBQXlCOzs7Ozs7QUFDakQ7R0F6Qk1wQjs7UUFNV0Ysc0RBQVNBOzs7S0FOcEJFO0FBMkJOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9xdWl6L1F1aXoudHN4PzdmMjgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBRdWVzdGlvbnNTdGF0ZSB9IGZyb20gXCJAL3R5cGVzL3F1aXpcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBxdWVzdGlvbnM6IFF1ZXN0aW9uc1N0YXRlO1xyXG4gIHRvdGFsUXVlc3Rpb25zOiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBRdWl6ID0gKHsgcXVlc3Rpb25zLCB0b3RhbFF1ZXN0aW9ucyB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50UXVlc3Rpb25JbmRleCwgc2V0Q3VycmVudFF1ZXN0aW9uSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdXNlckFuc3dlcnMsIHNldFVzZXJBbnN3ZXJzXSA9IHVzZVN0YXRlPFJlY29yZDxudW1iZXIsIHN0cmluZz4+KHt9KTtcclxuXHJcbiAgY29uc3QgaXNRdWVzdGlvbkFuc3dlcmVkID0gdXNlckFuc3dlcnNbY3VycmVudFF1ZXN0aW9uSW5kZXhdID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPbkFuc2VyQ2xpY2sgPSAoYW5zd2VyOiBzdHJpbmcsIGN1cnJlbnRRdWVzdGlvbkluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIGlmIChpc1F1ZXN0aW9uQW5zd2VyZWQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBpc0NvcnJlY3QgPSBxdWVzdGlvbnNbY3VycmVudFF1ZXN0aW9uSW5kZXhdLmNvcnJlY3RfYW5zd2VyID09PSBhbnN3ZXI7XHJcbiAgICBpZiAoaXNDb3JyZWN0KSBzZXRTY29yZSgocHJldikgPT4gcHJldiArIDEpO1xyXG5cclxuICAgIHNldFVzZXJBbnN3ZXJzKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbY3VycmVudFF1ZXN0aW9uSW5kZXhdOiBhbnN3ZXIgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVF1ZXN0aW9uID0gKHN0ZXA6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgbmV3UXVlc3Rpb25JbmRleCA9IGN1cnJlbnRRdWVzdGlvbkluZGV4ICsgc3RlcDtcclxuXHJcbiAgICBpZiAobmV3UXVlc3Rpb25JbmRleCA8IDAgfHwgbmV3UXVlc3Rpb25JbmRleCA+PSB0b3RhbFF1ZXN0aW9ucykgcmV0dXJuO1xyXG4gICAgc2V0Q3VycmVudFF1ZXN0aW9uSW5kZXgobmV3UXVlc3Rpb25JbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWNlbnRlclwiPlF1aXogQ29tcG9uZW50PC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUXVpejtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwiUXVpeiIsInF1ZXN0aW9ucyIsInRvdGFsUXVlc3Rpb25zIiwiY3VycmVudFF1ZXN0aW9uSW5kZXgiLCJzZXRDdXJyZW50UXVlc3Rpb25JbmRleCIsInNjb3JlIiwic2V0U2NvcmUiLCJ1c2VyQW5zd2VycyIsInNldFVzZXJBbnN3ZXJzIiwiaXNRdWVzdGlvbkFuc3dlcmVkIiwicm91dGVyIiwiaGFuZGxlT25BbnNlckNsaWNrIiwiYW5zd2VyIiwiaXNDb3JyZWN0IiwiY29ycmVjdF9hbnN3ZXIiLCJwcmV2IiwiaGFuZGxlQ2hhbmdlUXVlc3Rpb24iLCJzdGVwIiwibmV3UXVlc3Rpb25JbmRleCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/quiz/Quiz.tsx\n"));

/***/ }),

/***/ "(app-client)/./node_modules/next/navigation.js":
/*!*****************************************!*\
  !*** ./node_modules/next/navigation.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/components/navigation */ \"(app-client)/./node_modules/next/dist/client/components/navigation.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbm9kZV9tb2R1bGVzL25leHQvbmF2aWdhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSx3SkFBK0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbmF2aWdhdGlvbi5qcz8zZTAwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9jb21wb25lbnRzL25hdmlnYXRpb24nKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./node_modules/next/navigation.js\n"));

/***/ })

});