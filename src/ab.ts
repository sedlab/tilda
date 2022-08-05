import { rgbToHex } from "rgb-to-hex";
import gradient from "gradient-parser";
import { TElem } from "./types";

// linear-gradient
const getColor = (data: any, i: any) => {
    try {
        return data && rgbToHex(`rgba(${gradient.parse(data)?.[0]?.colorStops?.[i]?.value})`);
    } catch {
        return undefined;
    }
};

const getOpacity = (data: any, i: any) => {
    try {
        return data && gradient.parse(data)?.[0]?.colorStops?.[i]?.value?.[3];
    } catch {
        return undefined;
    }
};

export default (elem: TElem, style: any, attr: any) => ({
    ab_height: attr?.['data-artboard-height'], // style?.artboard?.height ||
    ab_bgcolor: ((style?.artboard?.['background-image']?.includes("radial-gradient") || style?.artboard?.['background-image']?.includes("linear-gradient")) ? style?.artboard?.['background-image'] : undefined) || style?.artboard?.['background-color'],
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