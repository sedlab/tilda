type THtml = string;
type TId = number | string | undefined;
type TRecordId = string;
type TElem = any;
type TNodeListHtml = (content: TElem) => any;
type TMode = "all" | undefined;
type TObj = {
    [key: string]: string | number;
};
type TCode = string | undefined;
type TCodes = Array<string>;
type TIdBlocks = Array<string>;

declare class Tilda {
    html: THtml;
    id: TId;
    recordId: TRecordId;
    NodeListHtml: TNodeListHtml;
    mode: TMode;
    /**
     * Конструктор.
     */
    constructor(html: THtml, id: TId, mode?: TMode);
    /**
     */
    getRecordId: (elem?: TElem) => any;
    /**
     * Получение css стилей.
     */
    getCssObjRecordId: () => any;
    /**
     * Получение списка атрибутов.
     */
    getAttrElemId: (elem: TElem, res: string) => TObj;
    /**
     * Получение всех стилей эллемента.
     */
    getAdaptiveElemStyles: (elem: TElem, elemId: TId, constElemStyles: (styles: TObj) => TObj) => TObj;
    /**
     * Фон z-block.
     * @return {{*}} obj.
     */
    getAdaptiveAB: () => {};
    /**
     * Получение стилей элемента.
     * @return {{*}} obj.
     */
    getElemStyles: (elem: TElem) => {};
    /**
     * Получает стили всех эллементов.
     */
    getElementsRecordId: () => any;
    /**
     * Получает скрипт "cоздания z-block и редактирования его содержимого".
     */
    getReqestCode: (code: TCode, codes?: TCodes) => string;
    /**
     * Код для вставки в консоль браузера.
     */
    getCode: () => string;
    /**
     * Зашифрованный код для вставки в консоль браузера.
     * @return {string}
     */
    getCodeEncrypted: () => TCode;
    /**
     * Получение списка блоков id.
     */
    getIdBlocks: (id?: string) => TIdBlocks;
}

export { Tilda };
