import needle from "needle";
import Tilda from "./script/index.js";

try {
    const URL = "http://temed.tilda.ws/";
    const ID = "446657978";

    // Получение содержимого сайта.
    needle(URL)
        .then(resp => {
            const tilda = new Tilda(resp.body, ID);
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