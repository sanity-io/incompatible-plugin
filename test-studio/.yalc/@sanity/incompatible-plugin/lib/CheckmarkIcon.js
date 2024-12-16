"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckmarkIcon = void 0;
var react_1 = __importStar(require("react"));
/**
 * @public
 */
exports.CheckmarkIcon = (0, react_1.forwardRef)(function CheckmarkIcon(props, ref) {
    return (react_1.default.createElement("svg", __assign({ "data-sanity-icon": "checkmark", width: "1em", height: "1em", viewBox: "0 0 25 25", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: ref }, props),
        react_1.default.createElement("path", { d: "M5.5 11.5L10.5 16.5L19.5 7.60001", stroke: "currentColor", strokeWidth: 1.2, strokeLinejoin: "round" })));
});
exports.CheckmarkIcon.displayName = 'ForwardRef(CheckmarkIcon)';
//# sourceMappingURL=CheckmarkIcon.js.map