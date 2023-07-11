import { load } from "cheerio";
import { cssToObject } from "css-to-object";
import { getFullPathImg } from "./utils";

import styles from "./styles";
import ab from "./ab";
import { button, form, gallery, html, image, shape, text, tooltip, video } from "./elements";

import { THtml, TId, TRecordId, TElem, TNodeListHtml, TMode, TObj, TCode, TCodes, TIdBlocks } from "./types";

export class Tilda {
  html: THtml;
  id: TId;
  recordId: TRecordId;
  NodeListHtml: TNodeListHtml;
  mode: TMode;

  /**
   * Конструктор.
   */
  constructor(html: THtml, id: TId, mode?: TMode) {
    this.html = html;
    this.id = id;
    this.recordId = `#rec${id}`;
    this.mode = mode;
  };

  /**
   */
  getRecordId = (elem?: TElem): any => {
    try {
      if (!this.NodeListHtml) {
        const $ = load(this.html);
        this.NodeListHtml = (data) => $(data);
      };
      return this.NodeListHtml(elem ? elem : this.recordId);
    } catch (err) {
      console.log("Error getRecordId: ", err);
      return {};
    };
  };

  /**
   * Получение css стилей.
   */
  getCssObjRecordId = (): any => cssToObject(this.getRecordId().find("style").html(), { numbers: true, camel: true });

  /**
   * Получение списка атрибутов.
   */
  getAttrElemId = (elem: TElem, res: string): TObj => {
    try {
      const node = this.getRecordId(elem).get(0), obj: TObj = {};
      if (!node) throw "this.getRecordId(elem).get(0)";
      Object.keys(node.attribs).map(name => obj[name.includes(res) && node.attribs[name] && node.attribs[name] !== "" && name.replace(res, "").replace("data-field-", "").replace("-value", "")] = node.attribs[name]);
      return obj;
    } catch (err) {
      console.log("Error getAttrElemId: ", err);
      return {};
    };
  };

  /**
   * Получение всех стилей эллемента.
   */
  getAdaptiveElemStyles = (elem: TElem, elemId: TId, constElemStyles: (styles: TObj) => TObj): TObj => {
    try {
      const res0 = this.getCssObjRecordId(),
        res320 = this.getCssObjRecordId()?.["@media screen and (max-width: 479px)"],
        res480 = this.getCssObjRecordId()?.["@media screen and (max-width: 639px)"],
        res640 = this.getCssObjRecordId()?.["@media screen and (max-width: 959px)"],
        res960 = this.getCssObjRecordId()?.["@media screen and (max-width: 1199px)"];

      const size = [
        { res: "", data: res0 },
        { res: "-res-320", data: res320 },
        { res: "-res-480", data: res480 },
        { res: "-res-640", data: res640 },
        { res: "-res-960", data: res960 }
      ];

      const id = `${this.recordId} .tn-elem[data-elem-id="${elemId}"]`, adaptiveElemStyles = {};

      size.forEach(s => {
        const elemStyles = constElemStyles(styles({ ...s.data?.[id], ...s.data?.[id + " .tn-atom"], "hover": s.data?.[id + " .tn-atom:hover"], "tip": s.data?.[id + " .tn-atom__tip"] }, this.getAttrElemId(elem, s.res))), newElemStyles: TObj = {};
        Object.keys(elemStyles).map(style => newElemStyles[style + s.res] = elemStyles[style]);
        return Object.assign(adaptiveElemStyles, newElemStyles);
      });

      return adaptiveElemStyles;
    } catch (err) {
      console.log("Error getAdaptiveElemStyles: ", err);
      return {};
    };
  };

  /**
   * Фон z-block.
   * @return {{*}} obj.
   */
  getAdaptiveAB = (): {} => {
    try {
      const res0 = this.getCssObjRecordId(),
        res320 = this.getCssObjRecordId()?.["@media screen and (max-width: 479px)"],
        res480 = this.getCssObjRecordId()?.["@media screen and (max-width: 639px)"],
        res640 = this.getCssObjRecordId()?.["@media screen and (max-width: 959px)"],
        res960 = this.getCssObjRecordId()?.["@media screen and (max-width: 1199px)"];

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
        const elemStyles: any = ab(
          s.res === "" && this.getRecordId(elemId),
          {
            artboard: s.data?.[`${this.recordId} .t396__artboard`],
            carrier: s.data?.[`${this.recordId} .t396__carrier`],
            filter: s.data?.[`${this.recordId} .t396__filter`]
          }, this.getAttrElemId(elemId, s.res)
        ), newElemStyles: TObj = {};
        Object.keys(elemStyles).map(style => newElemStyles[style + s.res] = elemStyles[style]);
        return Object.assign(adaptiveElemStyles, newElemStyles);
      });

      return JSON.parse(JSON.stringify(adaptiveElemStyles));
    } catch (err) {
      console.log("Error getAdaptiveAB: ", err);
      return {};
    };
  };

  /**
   * Получение стилей элемента.
   * @return {{*}} obj.
   */
  getElemStyles = (elem: TElem): {} => {
    try {
      const elemId = this.getRecordId(elem).attr("data-elem-id"),
        elemType = this.getRecordId(elem).attr("data-elem-type"),
        link = {
          link: this.getRecordId(elem).find("a").attr("href"),
          linktarget: this.getRecordId(elem).find("a").attr("target"),
          relnofollow: this.getRecordId(elem).find("a").attr("rel"),
        },
        font = {
          fontfamily: "TildaSans"
        },
        img = getFullPathImg(this.getRecordId(elem).find("img").attr("data-original") || this.getRecordId(elem).find("img").attr("src")),
        bgimg = getFullPathImg(this.getRecordId(elem).find(".t-bgimg").attr("data-original") || cssToObject(this.getRecordId(elem).find(".tn-atom").attr("style") || "", { numbers: true })?.["background-image"]?.match(/url\(["']?([^"']*)["']?\)/)?.[1]),
        tipimg = getFullPathImg(this.getRecordId(elem).find("img").attr("data-tipimg-original") || this.getRecordId(elem).find("img").attr("src")),
        result = {};

      switch (elemType) {
        case "text":
          Object.assign(result, {
            ...this.getAdaptiveElemStyles(elem, elemId, text),
            text: this.getRecordId(elem).children().html()
          });
          break;
        case "image":
          Object.assign(result, {
            ...this.getAdaptiveElemStyles(elem, elemId, image),
            img,
            alt: this.getRecordId(elem).find("img").attr("alt"),
            zoomable: this.getRecordId(elem).find("img").parent().attr("data-zoomable") === "yes" ? "y" : undefined
          });
          break;
        case "shape":
          Object.assign(result, {
            ...this.getAdaptiveElemStyles(elem, elemId, shape),
            figure: "rectangle",
            bgimg,
            zoomable: this.getRecordId(elem).children().attr("data-zoomable") === "yes" ? "y" : undefined
          });
          break;
        case "button":
          Object.assign(result, {
            ...this.getAdaptiveElemStyles(elem, elemId, button),
            caption: this.getRecordId(elem).children().html(),
            buttonstat: this.getRecordId(elem).find("a").attr("data-tilda-event-name") && "buttonstatsend"
          });
          break;
        case "video":
          Object.assign(result, {
            ...this.getAdaptiveElemStyles(elem, elemId, video),
            bgimg,
            youtubeid: this.getRecordId(elem).find(".tn-atom__videoiframe").attr("data-youtubeid"),
            vimeoid: this.getRecordId(elem).find(".tn-atom__videoiframe").attr("data-vimeoid")
          });
          break;
        case "tooltip":
          Object.assign(result, {
            ...this.getAdaptiveElemStyles(elem, elemId, tooltip),
            bgimg,
            tipimg,
            tipcaption: this.getRecordId(elem).find(".tn-atom__tip-text").text()
          });
          break;
        case "html":
          Object.assign(result, {
            ...this.getAdaptiveElemStyles(elem, elemId, html),
            code: this.getRecordId(elem).children().html()
          });
          break;
        case "form":
          Object.assign(result, {
            ...this.getAdaptiveElemStyles(elem, elemId, form),
            inputs: this.getRecordId(elem).find(".tn-atom__inputs-textarea").text()
          });
          break;
        case "gallery":
          Object.assign(result, this.getAdaptiveElemStyles(elem, elemId, gallery));
          break;
      };

      Object.assign(result, {
        "elem_id": elemId,
        "elem_type": elemType,
        ...link,
        ...font
      });

      return JSON.parse(JSON.stringify(result));
    } catch (err) {
      console.log("Error getElemStyles: ", err);
      return {};
    };
  };

  /**
   * Получает стили всех эллементов.
   */
  getElementsRecordId = (): any => {
    try {
      return this.getRecordId().find(".t396__elem").toArray().map((elem: TElem) => this.getElemStyles(elem));
    } catch (err) {
      console.log("Error getElementsRecordId: ", err);
    };
  };

  /**
   * Получает скрипт "cоздания z-block и редактирования его содержимого".
   */
  getReqestCode = (code: TCode, codes?: TCodes): string => {
    try {
      let result = `let success=0,error=0;const pageid=window.pageid,httpBuildQuery=(object)=>{const params=new URLSearchParams(),paramsGenerator=(parent_key,iterate_object)=>{for(let current_key in iterate_object){let property_path;if(typeof iterate_object[current_key]=="string"||typeof iterate_object[current_key]=="number"){if(parent_key.length>0)property_path=parent_key+"["+current_key+"]";else property_path=current_key;params.append(property_path,iterate_object[current_key])}else if(typeof iterate_object[current_key]=="object"){if(parent_key.length>0)property_path=parent_key+"["+current_key+"]";else property_path=current_key;paramsGenerator(property_path,iterate_object[current_key])}}};paramsGenerator("",object);return params.toString()},log=(message="")=>{console.clear();console.log("%c"+message,"color:#fff;background-color:#fa8669;font-size:large;")},statistics=(count)=>{console.clear();console.log("%cСоздано: "+success+" из "+count+"; Ошибок: "+error,"color:#fff;background-color:#fa8669;font-size:large;")};`;
      if (code) {
        result += `$.ajax({url:"/page/submit/",type:"POST",data:{comm:"addnewrecord",pageid,afterid:"",tplid:396},dataType:"text",success:(t)=>{const recordid=$(t).attr("recordid");$.ajax({type:"POST",url:"/zero/submit/",data:httpBuildQuery({comm:"savezerocode",pageid,recordid,onlythisfield:"code",fromzero:"yes",code:${code}}),dataType:"text",success:()=>location.reload(),error:()=>log("Ошибка выполнения запроса на сервере Tilda")})},error:()=>log("Ошибка выполнения запроса на сервере Tilda")});`
      } else if (codes) {
        for (const [i, code] of codes.entries()) {
          const newCode = `$.ajax({url:"/page/submit/",type:"POST",data:{comm:"addnewrecord",pageid,afterid:"",tplid:396},dataType:"text",success:(t)=>{const recordid=$(t).attr("recordid");$.ajax({type:"POST",url:"/zero/submit/",data:httpBuildQuery({comm:"savezerocode",pageid,recordid,onlythisfield:"code",fromzero:"yes",code:${code}}),dataType:"text",success:()=>{success++;statistics(${codes.length});NEXTCODE},error:()=>{error++;statistics(${codes.length});NEXTCODE}});},error:()=>{error++;statistics(${codes.length});NEXTCODE}});`
          if (result.includes("NEXTCODE")) {
            result = result.replace("NEXTCODE", newCode);
          } else {
            result += newCode;
          };
          if (i === codes.length - 1) {
            result = result.replace("NEXTCODE", "location.reload();");
          };
        };
      };
      return result;
    } catch (err) {
      console.log("Error getReqestCode: ", err);
      return "";
    };
  };

  /**
   * Код для вставки в консоль браузера.
   */
  getCode = (): string => {
    if (this.mode === "all") {
      const codes: TCodes = [];
      for (let id of this.getIdBlocks()) {
        this.id = id;
        this.recordId = `#rec${id}`;
        // console.log(id);
        codes.push(JSON.stringify(JSON.stringify({
          ...this.getElementsRecordId(),
          ...this.getAdaptiveAB(),
          timestamp: new Date().getTime()
        })));
      };
      return this.getReqestCode(undefined, codes);
    } else {
      const code: TCode = JSON.stringify(JSON.stringify({
        ...this.getElementsRecordId(),
        ...this.getAdaptiveAB(),
        timestamp: new Date().getTime()
      }));
      return this.getReqestCode(code);
    };
  };

  /**
   * Зашифрованный код для вставки в консоль браузера.
   * @return {string}
   */
  getCodeEncrypted = (): TCode => Buffer.from(this.getCode()).toString("base64");

  /**
   * Получение списка блоков id.
   */
  getIdBlocks = (id: string = "396") => {
    const idBlocks: TIdBlocks = [];
    try {
      this.getRecordId("div").toArray().map((item: any) => this.getRecordId(item)?.attr("data-record-type") === id && idBlocks.push(this.getRecordId(item)?.attr("id")?.replace("rec", "")));
    } catch (err) {
      console.log("Error getIdBlocks: ", err);
    };
    return idBlocks;
  };
};
