import rgb2hex from "./lib/rgb2hex/index.js";
import gradient from "gradient-parser";

// linear-gradient
const getColor = (data, i) => {
    let result;
    try {
        result = data && rgb2hex(`rgba(${gradient.parse(data)?.[0]?.colorStops?.[i]?.value})`);
    } catch {
        result = undefined;
    }
    return result;
};
const getOpacity = (data, i) => {
    let result;
    try {
        result = data && gradient.parse(data)?.[0]?.colorStops?.[i]?.value?.[3]
    } catch {
        result = undefined;
    }
    return result;
};

export default (elem, style, attr) => ({
    ab_height: attr?.['data-artboard-height'], // style?.artboard?.height ||
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