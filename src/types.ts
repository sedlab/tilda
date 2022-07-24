export type THtml = string;
export type TId = number | string | undefined;
export type TRecordId = string;
export type TElem = any; // string | Node | Node[]
export type TNodeListHtml = (content: TElem) => any; // Cheerio<Node>
export type TMode = "all" | undefined;
export type TObj = { [key: string]: string | number };
export type TCode = string | undefined;
export type TCodes = Array<string>;
export type TIdBlocks = Array<string>;