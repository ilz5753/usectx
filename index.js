"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useCtx(ctx, errorMsg) {
    var value = react_1.default.useContext(ctx);
    if (value === undefined)
        throw new Error(errorMsg);
    return value;
}
exports.default = useCtx;
