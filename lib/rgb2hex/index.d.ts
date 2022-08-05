declare type TRoundRgbaValue = Array<number>;
declare type TRoundRgba = {
    r: number;
    g: number;
    b: number;
    a: number;
};
declare type TRgbaToHexValue = string | Array<number | string>;
declare type TRgbaToHex = string | undefined;
export declare const round: (number: number) => number;
export declare const roundRgba: (rgba: TRoundRgbaValue) => TRoundRgba;
export declare const parseRgba: (rgba: any) => any;
export declare const rgbToHex: (rgba: TRgbaToHexValue, alpha?: boolean) => TRgbaToHex;
export default rgbToHex;
