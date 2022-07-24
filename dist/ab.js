"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rgb2hex_1 = __importDefault(require("./lib/rgb2hex"));
const gradient_parser_1 = __importDefault(require("gradient-parser"));
// linear-gradient
const getColor = (data, i) => {
    try {
        return data && (0, rgb2hex_1.default)(`rgba(${gradient_parser_1.default.parse(data)?.[0]?.colorStops?.[i]?.value})`);
    }
    catch {
        return undefined;
    }
};
const getOpacity = (data, i) => {
    try {
        return data && gradient_parser_1.default.parse(data)?.[0]?.colorStops?.[i]?.value?.[3];
    }
    catch {
        return undefined;
    }
};
exports.default = (elem, style, attr) => ({
    ab_height: attr?.['data-artboard-height'],
    ab_bgcolor: style?.artboard?.['background-color'],
    ab_bgimg: elem && elem.find('.t396__carrier').attr('data-original') || attr?.['data-original'] || style?.carrier?.['background-image']?.match(/url\(["']?([^"']*)["']?\)/)[1],
    ab_filteropacity: getOpacity(style?.filter?.['background-image'], 0),
    ab_filtercolor: getColor(style?.filter?.['background-image'], 0),
    ab_filteropacity2: getOpacity(style?.filter?.['background-image'], 1),
    ab_filtercolor2: getColor(style?.filter?.['background-image'], 1),
    ab_bgattachment: style?.carrier?.['background-attachment'],
    ab_bgposition: style?.carrier?.['background-position'],
    ab_height_vh: attr?.['data-artboard-height_vh']?.replace("vh", ""),
    ab_valign: attr?.['data-artboard-valign'],
    ab_ovrflw: attr?.['data-artboard-ovrflw'],
    // ab_title,
    // ab_grid,
    // ab_gridcolor,
    // ab_gridopacity,
    // ab_gridlineopacity,
    // ab_gridglobal,
    ab_upscale: attr?.['data-artboard-upscale']
});
