"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rgb_to_hex_1 = require("rgb-to-hex");
exports.default = (style, attr) => {
    const boxShadow = style?.['box-shadow']?.match(/[^\s\(]+(\(.+\))?/g);
    return {
        pos: {
            left: attr?.['data-field-left-value'] || style?.['left'],
            leftunits: attr?.['data-field-leftunits-value'],
            top: attr?.['data-field-top-value'] || style?.['top'],
            topunits: attr?.['data-field-topunits-value'],
            width: attr?.['data-field-width-value'] || style?.['width'],
            widthunits: attr?.['data-field-widthunits-value'],
            height: attr?.['data-field-height-value'] || style?.['height'],
            heightunits: attr?.['data-field-heightunits-value'] // H.
        },
        container: {
            container: attr?.['data-field-container-value'],
            axisx: attr?.['data-field-axisx-value'],
            axisy: attr?.['data-field-axisy-value'] // Axis Y.
        },
        image: {
            // img // Image.
            filewidth: attr?.['data-field-filewidth-value'],
            fileheight: attr?.['data-field-fileheight-value']
        },
        slds: {
            imgs: attr?.['data-field-imgs-value'],
            slds_stretch: attr?.['data-field-slds_stretch-value'],
            slds_imgposition: attr?.['data-field-slds_imgposition-value'],
            slds_loop: attr?.['data-field-slds_loop-value'],
            slds_speed: attr?.['data-field-slds_speed-value'],
            slds_autoplay: attr?.['data-field-slds_autoplay-value'],
            slds_arrowcontrols: attr?.['data-field-slds_arrowcontrols-value'],
            slds_arrowtype: attr?.['data-field-slds_arrowtype-value'],
            slds_arrowsize: attr?.['data-field-slds_arrowsize-value'],
            slds_arrowlinesize: attr?.['data-field-slds_arrowlinesize-value'],
            slds_arrowborder: attr?.['data-field-slds_arrowborder-value'],
            slds_arrowcolor: attr?.['data-field-slds_arrowcolor-value'],
            slds_arrowbgcolor: attr?.['data-field-slds_arrowbgcolor-value'],
            slds_arrowbgopacity: attr?.['data-field-slds_arrowbgopacity-value'],
            slds_arrowcolorhover: attr?.['data-field-slds_arrowcolorhover-value'],
            slds_arrowbgcolorhover: attr?.['data-field-slds_arrowbgcolorhover-value'],
            slds_arrowbgopacityhover: attr?.['data-field-slds_arrowbgopacityhover-value'],
            slds_arrowalign: attr?.['data-field-slds_arrowalign-value'],
            slds_arrowvmargin: attr?.['data-field-slds_arrowvmargin-value'],
            slds_arrowbetweenmargin: attr?.['data-field-slds_arrowbetweenmargin-value'],
            slds_arrowhmargin: attr?.['data-field-slds_arrowhmargin-value'],
            slds_dotscontrols: attr?.['data-field-slds_dotscontrols-value'],
            slds_dotssize: attr?.['data-field-slds_dotssize-value'],
            slds_dotsbgcolor: attr?.['data-field-slds_dotsbgcolor-value'],
            slds_dotsbgcoloractive: attr?.['data-field-slds_dotsbgcoloractive-value'],
            slds_dotsvmargin: attr?.['data-field-slds_dotsvmargin-value'],
            slds_dotshmargin: attr?.['data-field-slds_dotshmargin-value'],
            slds_playiconsize: attr?.['data-field-slds_playiconsize-value'],
            slds_playiconcolor: attr?.['data-field-slds_playiconcolor-value'],
            slds_captionwidth: attr?.['data-field-slds_captionwidth-value'] // Caption width.
        },
        videosett: {
            autoplay: attr?.['data-field-autoplay-value'],
            mute: attr?.['data-field-mute-value'],
            loop: attr?.['data-field-loop-value'],
            startsec: attr?.['data-field-startsec-value'],
            endsec: attr?.['data-field-endsec-value'] // End sec.
        },
        inputs: {
            // inputs,
            inputpos: attr?.['data-field-inputpos-value'],
            inputfontfamily: attr?.['data-field-inputfontfamily-value'],
            inputfontsize: attr?.['data-field-inputfontsize-value'],
            inputfontweight: attr?.['data-field-inputfontweight-value'],
            inputvariationweight: attr?.['data-field-inputvariationweight-value'],
            inputcolor: attr?.['data-field-inputcolor-value'],
            inputbgcolor: attr?.['data-field-inputbgcolor-value'],
            inputbordercolor: attr?.['data-field-inputbordercolor-value'],
            inputbordersize: attr?.['data-field-inputbordersize-value'],
            inputradius: attr?.['data-field-inputradius-value'],
            inputheight: attr?.['data-field-inputheight-value'],
            inputmargbottom: attr?.['data-field-inputmargbottom-value'],
            inputmargright: attr?.['data-field-inputmargright-value'],
            inputelscolor: attr?.['data-field-inputelscolor-value'],
            inputelsfontsize: attr?.['data-field-inputelsfontsize-value'],
            inputelsfontweight: attr?.['data-field-inputelsfontweight-value'],
            inputelsvariationweight: attr?.['data-field-inputelsvariationweight-value'],
            inputtitlefontsize: attr?.['data-field-inputtitlefontsize-value'],
            inputtitlefontweight: attr?.['data-field-inputtitlefontweight-value'],
            inputtitlevariationweight: attr?.['data-field-inputtitlevariationweight-value'],
            inputtitlecolor: attr?.['data-field-inputtitlecolor-value'],
            inputtitlemargbottom: attr?.['data-field-inputtitlemargbottom-value'],
            inputsstyle: attr?.['data-field-inputsstyle-value'],
            inputsstyle2: attr?.['data-field-inputsstyle2-value'], // Placeholder style.
        },
        form: {
            formmsgsuccess: attr?.['data-field-formmsgsuccess-value'],
            formmsgurl: attr?.['data-field-formmsgurl-value'],
            formname: attr?.['data-field-formname-value'],
            formerrreq: attr?.['data-field-formerrreq-value'],
            formerremail: attr?.['data-field-formerremail-value'],
            formerrphone: attr?.['data-field-formerrphone-value'],
            formerrname: attr?.['data-field-formerrname-value'],
            formbottomtext: attr?.['data-field-formbottomtext-value'] // Text under form.
        },
        button: {
            buttontitle: attr?.['data-field-buttontitle-value'],
            buttonalign: attr?.['data-field-buttonalign-value'],
            buttoncolor: attr?.['data-field-buttoncolor-value'],
            buttonbgcolor: attr?.['data-field-buttonbgcolor-value'],
            buttonbordercolor: attr?.['data-field-buttonbordercolor-value'],
            buttonbordersize: attr?.['data-field-buttonbordersize-value'],
            buttonradius: attr?.['data-field-buttonradius-value'],
            buttonmargtop: attr?.['data-field-buttonmargtop-value'],
            buttonwidth: attr?.['data-field-buttonwidth-value'],
            buttonheight: attr?.['data-field-buttonheight-value'],
            buttonfontfamily: attr?.['data-field-buttonfontfamily-value'],
            buttonfontsize: attr?.['data-field-buttonfontsize-value'],
            buttonfontweight: attr?.['data-field-buttonfontweight-value'],
            buttonvariationweight: attr?.['data-field-buttonvariationweight-value'],
            buttonshadowsize: attr?.['data-field-buttonshadowsize-value'],
            buttonshadowopacity: attr?.['data-field-buttonshadowopacity-value'] // Btn shadow opacity.
        },
        font: {
            align: style?.['text-align'],
            color: style?.['color'] !== 'transparent' ? style?.['color'] : undefined,
            fontsize: style?.['font-size'],
            fontfamily: style?.['font-family']?.match(/'(.*?)'/g)?.[0]?.replaceAll("'", "") && "FuturaPT",
            fontweight: style?.['font-weight'],
            lineheight: style?.['line-height'],
            letterspacing: style?.['letter-spacing'],
            lettercase: style?.['text-transform'] // Letter case.
        },
        other: {
            bgcolor: ((style?.['background-image']?.includes("radial-gradient") || style?.['background-image']?.includes("linear-gradient")) ? style?.['background-image'] : undefined) || (style?.['background-color'] !== "transparent" ? style?.['background-color'] : undefined),
            bgposition: style?.['background-position'],
            bgattachment: style?.['background-attachment'] === 'fixed' ? 'fixed' : undefined,
            opacity: style?.['opacity'],
            rotate: style?.['transform']?.includes('rotate') && style?.['transform']?.match(/(\d+)/)?.[0],
            zindex: style?.['z-index'],
            // lock, // Actions.
            effects: style?.['filter'] && `filter: ${style?.['filter']};`,
            // classname, // Css class name.
            // groupid, // Groupid.
            animmobile: attr?.['data-animate-mobile'], // Mobile animation.
        },
        border: {
            bordercolor: style?.['border-color'] !== 'transparent' ? style?.['border-color'] : undefined,
            borderwidth: style?.['border-width'],
            borderradius: style?.['border-radius'],
            borderstyle: [/*'solid',*/ 'dotted', 'dashed', 'none'].includes(style?.['border-style']) ? style?.['border-style'] : undefined // Style.
        },
        shadow: {
            shadowcolor: boxShadow?.[4] && (0, rgb_to_hex_1.rgbToHex)(boxShadow?.[4] || ''),
            shadowopacity: (boxShadow?.[4])?.split(",")?.[3]?.match(/^[0-9]{1,2}([,.][0-9]{1,2})?/g)?.[0],
            shadowx: boxShadow?.[0]?.replace("px", ""),
            shadowy: boxShadow?.[1]?.replace("px", ""),
            shadowblur: boxShadow?.[2]?.replace("px", ""),
            shadowspread: boxShadow?.[3]?.replace("px", ""), // Spread.
        },
        tip: {
            tipposition: attr?.['data-field-tipposition-value'],
            tipopen: attr?.['data-field-tipopen-value'],
            tipbgcolor: style?.['background-color'],
            tipradius: style?.tip?.['border-radius'],
            tipshadowblur: style?.tip?.['box-shadow']?.match(/[^\s\(]+(\(.+\))?/g)?.[2]?.replace("px", ""),
            tipwidth: style?.tip?.width, // Width.
            // tipimg, // Tip image.
        },
        hover: {
            bgcolorhover: style?.hover?.['background-color'] !== 'transparent' ? style?.hover?.['background-color'] : undefined,
            colorhover: style?.hover?.['color'] !== 'transparent' ? style?.hover?.['color'] : undefined,
            bordercolorhover: style?.hover?.['border-color'] !== 'transparent' ? style?.hover?.['border-color'] : undefined,
            speedhover: style?.transition?.split(' ')?.[1]?.replace('s', ''), // Duration.
        },
        link: {
        // link, // Url.
        // linktarget, // Target.
        // relnofollow // Rel nofollow.
        // buttonstat // Click tracking.
        },
        buttonLink: {
        // caption, // Caption.
        // link, // Url.
        // linktarget, // Target.
        // relnofollow, // Rel nofollow.
        // buttonstat // Click tracking.
        },
        tag: {
            // tag, // dev, h1, h2, h3 // Tag.
            // alt, // Alt.
            zoomable: attr?.['data-field-zoomable-value'],
            lazyoff: attr?.['data-field-lazyoff-value'],
            pevent: attr?.['pointer-events'] // Pointer events.
        },
        anim: {
            animstyle: attr?.['data-animate-style'],
            animduration: attr?.['data-animate-duration'],
            animdistance: attr?.['data-animate-distance'],
            animscale: attr?.['data-animate-scale'],
            animdelay: attr?.['data-animate-delay'],
            animtriggeroffset: attr?.['data-animate-trigger-offset'],
            animprx: attr?.['data-animate-prx'],
            animprxs: attr?.['data-animate-prx-s'],
            animprxdx: attr?.['data-animate-prx-dx'],
            animprxdy: attr?.['data-animate-prx-dy'],
            animfix: attr?.['data-animate-fix'],
            animfixtrgofst: attr?.['data-animate-fix-trgofst'],
            animfixdist: attr?.['data-animate-fix-dist'] // Distance.
        },
        sbsopenbtn: {
            sbsevent: attr?.['data-animate-sbs-event'],
            sbstrg: attr?.['data-animate-sbs-trg'],
            sbstrgofst: attr?.['data-animate-sbs-trgofst'],
            sbsloop: attr?.['data-animate-sbs-loop'],
            sbstrgels: attr?.['data-animate-sbs-trgels'],
            sbsopts: attr?.['data-animate-sbs-opts'], // Steps.
        },
    };
};
