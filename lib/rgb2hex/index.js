"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbToHex = exports.parseRgba = exports.roundRgba = exports.round = void 0;
const format = (number) => {
    if (number === -1)
        return "";
    const hex = number.toString(16);
    return hex.length < 2 ? "0" + hex : hex;
};
const round = (number) => Math.round(number);
exports.round = round;
const roundRgba = (rgba) => ({
    r: (0, exports.round)(rgba[0]),
    g: (0, exports.round)(rgba[1]),
    b: (0, exports.round)(rgba[2]),
    a: (0, exports.round)(rgba[3] > 1 && rgba[3] <= 100 ? 255 * rgba[3] / 100 : rgba[3] > 0 && rgba[3] !== 1 ? 255 * rgba[3] : -1)
});
exports.roundRgba = roundRgba;
const parseRgba = (rgba) => rgba.match(/[0-9]*[.]?[0-9]*[e]*[0-9]/g).map((i) => +i);
exports.parseRgba = parseRgba;
const rgbToHex = (rgba, alpha = false) => {
    try {
        const math = typeof rgba === "string" ? (0, exports.parseRgba)(rgba) : rgba;
        const { r, g, b, a } = (0, exports.roundRgba)(math);
        // return ((b | g << 8 | r << 16) | 1 << 24).toString(16).slice(1);
        return "#" + format(r) + format(g) + format(b) + (alpha ? format(a) : "");
    }
    catch (err) {
        console.error(err);
        return undefined;
    }
};
exports.rgbToHex = rgbToHex;
exports.default = exports.rgbToHex;
