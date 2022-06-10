import * as cheerio from "cheerio";
import cssToObject from "./lib/css-to-object/index.js";
import styles from "./styles.js";
import ab from "./ab.js";
import { button, form, gallery, html, image, shape, text, tooltip, video } from "./elements/index.js";

class Tilda {
    html = "";
    id = "";
    recordId = "";

    /**
     * Конструктор.
     * @param {string} html
     * @param {number | string} id z-block.
     */
    constructor(html, id) {
        this.html = html;
        this.id = id;
        this.recordId = `#rec${id}`;
    }

    /**
     * Получение ...
     * @return {*}
     */
    getRecordId = () => {
        const $ = cheerio.load(this.html);
        return $(this.recordId);
    }

    /**
     * Получение css стилей.
     * @return {*} obj.
     */
    getCssObjRecordId = () => cssToObject(this.getRecordId().find("style").html(), { numbers: true });

    /**
     * Получение списка атрибутов.
     * @param {*} elem
     * @param {string} res
     * @return {*} obj.
     */
    getAttrElemId = (elem, res) => {
        const $ = cheerio.load(this.html), node = $(elem).get(0), obj = {};
        Object.keys(node.attribs).map(name => obj[name.includes(res) && node.attribs[name] && node.attribs[name] !== '' && name.replace(res, '')] = node.attribs[name]);
        return obj;
    };

    /**
     * Получение всех стилей эллемента.
     * @param {*} elem
     * @param {number | string} elemId
     * @param {*} constElemStyles function.
     * @return {*} obj.
     */
    getAdaptiveElemStyles = (elem, elemId, constElemStyles) => {
        const res0 = this.getCssObjRecordId(),
            res320 = this.getCssObjRecordId()?.['@media screen and (max-width: 479px)'],
            res480 = this.getCssObjRecordId()?.['@media screen and (max-width: 639px)'],
            res640 = this.getCssObjRecordId()?.['@media screen and (max-width: 959px)'],
            res960 = this.getCssObjRecordId()?.['@media screen and (max-width: 1199px)'];

        const size = [
            { res: "", data: res0 },
            { res: "-res-320", data: res320 },
            { res: "-res-480", data: res480 },
            { res: "-res-640", data: res640 },
            { res: "-res-960", data: res960 }
        ];

        const id = `${this.recordId} .tn-elem[data-elem-id="${elemId}"]`, adaptiveElemStyles = {};

        size.forEach(s => {
            const elemStyles = constElemStyles(styles({ ...s.data[id], ...s.data[id + ' .tn-atom'], 'hover': s.data[id + ' .tn-atom:hover'], 'tip': s.data[id + ' .tn-atom__tip'] }, this.getAttrElemId(elem, s.res))), newElemStyles = {};
            Object.keys(elemStyles).map(style => newElemStyles[style + s.res] = elemStyles[style]);
            return Object.assign(adaptiveElemStyles, newElemStyles);
        });

        return adaptiveElemStyles;
    }

    // Фон z-block.
    getAdaptiveAB = () => {
        const $ = cheerio.load(this.html);

        const res0 = this.getCssObjRecordId(),
            res320 = this.getCssObjRecordId()?.['@media screen and (max-width: 479px)'],
            res480 = this.getCssObjRecordId()?.['@media screen and (max-width: 639px)'],
            res640 = this.getCssObjRecordId()?.['@media screen and (max-width: 959px)'],
            res960 = this.getCssObjRecordId()?.['@media screen and (max-width: 1199px)'];

        const size = [
            { res: "", data: res0 },
            { res: "-res-320", data: res320 },
            { res: "-res-480", data: res480 },
            { res: "-res-640", data: res640 },
            { res: "-res-960", data: res960 }
        ];

        const adaptiveElemStyles = {};

        size.forEach(s => {
            const elemId = `[data-artboard-recid="${this.id}"]`;
            const elemStyles = ab(
                s.res === "" && $(elemId),
                {
                    artboard: s.data?.[`${this.recordId} .t396__artboard`],
                    carrier: s.data?.[`${this.recordId} .t396__carrier`],
                    filter: s.data?.[`${this.recordId} .t396__filter`]
                }, this.getAttrElemId(elemId, s.res)
            ), newElemStyles = {};
            Object.keys(elemStyles).map(style => newElemStyles[style + s.res] = elemStyles[style]);
            return Object.assign(adaptiveElemStyles, newElemStyles);
        });

        return JSON.parse(JSON.stringify(adaptiveElemStyles));
    }

    /**
     * Получение стилей элемента.
     * @param {string} html
     * @param {*} elem
     * @return {*} obj.
     */
    getElemStyles = (elem) => {
        const $ = cheerio.load(this.html),
            elemId = $(elem).attr("data-elem-id"),
            elemType = $(elem).attr("data-elem-type"),
            link = {
                link: $(elem).find("a").attr("href"),
                linktarget: $(elem).find("a").attr("target"),
                relnofollow: $(elem).find("a").attr("rel"),
            },
            img = $(elem).find("img").attr("data-original") || $(elem).find("img").attr("src"),
            bgimg = $(elem).find(".t-bgimg").attr("data-original") || cssToObject($(elem).find(".tn-atom").attr("style") || '')?.['background-image']?.match(/url\(["']?([^"']*)["']?\)/)[1],
            tipimg = $(elem).find("img").attr("data-tipimg-original") || $(elem).find("img").attr("src"),
            result = {};

        switch (elemType) {
            case "text":
                Object.assign(result, {
                    ...this.getAdaptiveElemStyles(elem, elemId, text),
                    text: $(elem).children().text()
                });
                break;
            case "image":
                Object.assign(result, {
                    ...this.getAdaptiveElemStyles(elem, elemId, image),
                    img,
                    alt: $(elem).find("img").attr("alt"),
                    zoomable: $(elem).find("img").parent().attr("data-zoomable") === "yes" ? "y" : undefined
                });
                break;
            case "shape":
                Object.assign(result, {
                    ...this.getAdaptiveElemStyles(elem, elemId, shape),
                    figure: 'rectangle',
                    bgimg,
                    zoomable: $(elem).children().attr("data-zoomable") === "yes" ? "y" : undefined
                });
                break;
            case "button":
                Object.assign(result, {
                    ...this.getAdaptiveElemStyles(elem, elemId, button),
                    caption: $(elem).children().text(),
                    buttonstat: $(elem).find("a").attr("data-tilda-event-name") && "buttonstatsend"
                });
                break;
            case "video":
                Object.assign(result, {
                    ...this.getAdaptiveElemStyles(elem, elemId, video),
                    bgimg,
                    youtubeid: $(elem).find('.tn-atom__videoiframe').attr('data-youtubeid'),
                    vimeoid: $(elem).find('.tn-atom__videoiframe').attr('data-vimeoid')
                });
                break;
            case "tooltip":
                Object.assign(result, {
                    ...this.getAdaptiveElemStyles(elem, elemId, tooltip),
                    bgimg,
                    tipimg,
                    tipcaption: $(elem).find('.tn-atom__tip-text').text()
                });
                break;
            case "html":
                Object.assign(result, {
                    ...this.getAdaptiveElemStyles(elem, elemId, html),
                    code: $(elem).children().html()
                });
                break;
            case "form":
                Object.assign(result, {
                    ...this.getAdaptiveElemStyles(elem, elemId, form),
                    inputs: $(elem).find(".tn-atom__inputs-textarea").text()
                });
                break;
            case "gallery":
                Object.assign(result, this.getAdaptiveElemStyles(elem, elemId, gallery));
                break;
        }

        Object.assign(result, {
            "elem_id": elemId,
            "elem_type": elemType,
            ...link
        });
        return JSON.parse(JSON.stringify(result));
    }

    /**
     * Получает стили всех эллементов.
     * @return {*} obj
     */
    getElementsRecordId = () => this.getRecordId().find('.t396__elem').toArray().map(elem => this.getElemStyles(elem));

    /**
     * Получает скрипт tilda, создает z-block и редактирует его содержимое.
     * @param {*} obj
     * @return {*} js code.
     */
    getReqestCode = (obj) => String(`
const pageid = window.pageid;

function httpBuildQuery(object_to_convert) {
    var params = new URLSearchParams();
    var paramsGenerator = function(parent_key, iterate_object) {
        for (var current_key in iterate_object) {
            if (typeof iterate_object[current_key] == 'string' || typeof iterate_object[current_key] == 'number') {
                if (parent_key.length > 0) {
                    var property_path = parent_key + '[' + current_key + ']';
                } else {
                    var property_path = current_key;
                }
                params.append(property_path, iterate_object[current_key]);
            } else if (typeof iterate_object[current_key] == 'object') {
                if (parent_key.length > 0) {
                    var property_path = parent_key + '[' + current_key + ']';
                } else {
                    var property_path = current_key;
                }
                paramsGenerator(property_path, iterate_object[current_key]);
            }
        }
    }
    paramsGenerator('', object_to_convert);
    return params.toString();
}

$.ajax({
    url: "/page/submit/",
    type: "POST",
    data: {
        comm: "addnewrecord",
        pageid,
        afterid: '',
        tplid: 396,
    },
    dataType: "text",
    success: function(t) {
        const recordid = $(t).attr("recordid");

        $.ajax({
            type: "POST",
            url: "/zero/submit/",
            data: httpBuildQuery({
                comm: "savezerocode",
                pageid,
                recordid,
                onlythisfield: "code",
                fromzero: "yes",
                code: ${obj}
            }),
            dataType: "text",
            success: function(data) {
                location.reload();
            }
        });
    }
});
`);

    /**
     * Код для вставки в консоль браузера.
     * @return {string}
     */
    getCode = () => {
        const code = JSON.stringify(JSON.stringify({
            ...this.getElementsRecordId(),
            ...this.getAdaptiveAB(),
            timestamp: new Date().getTime()
        }));
        return this.getReqestCode(code);
    };

    /**
     * Зашифрованный код для вставки в консоль браузера.
     * @param {*} code
     * @return {*}
     */
    getCodeEncrypted = () => `eval(decodeURIComponent(escape(window.atob('${Buffer.from(this.getCode()).toString('base64')}'))));`;
}

export default Tilda;