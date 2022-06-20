import needle from "needle";
import Tilda from "./script/index.js";

try {
    const URL = "";
    const ID = "";

    // Получение содержимого сайта.
    needle(URL)
        .then(resp => {
            // 1. Получение списка блоков.
            // const tilda = new Tilda(resp.body);
            // console.log(tilda.getIdBlocks());

            // 2. Получение блока.
            // const tilda = new Tilda(resp.body, ID);
            // console.log(tilda.getCssObjRecordId());
            // console.log(tilda.getAdaptiveAB());
            // console.log(tilda.getElementsRecordId());
            // console.log(tilda.getCode());
            // console.log(tilda.getCodeEncrypted());
        })
        .catch(err => {
            throw "Ошибка открытия сайта", err;
        });
} catch (err) {
    console.log(err);
}