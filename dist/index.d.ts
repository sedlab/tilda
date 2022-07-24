import { THtml, TId, TRecordId, TElem, TNodeListHtml, TMode, TObj, TCode, TCodes, TIdBlocks } from "./types";
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
    getAdaptiveElemStyles: (elem: TElem, elemId: TId, constElemStyles: (stylis: TObj) => TObj) => TObj;
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
export default Tilda;
