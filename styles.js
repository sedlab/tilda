"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rgb_to_hex_1 = require("rgb-to-hex");
exports.default = (style, attr) => {
    const boxShadow = style?.boxShadow?.match(/[^\s\(]+(\(.+\))?/g);
    return {
        pos: {
            left: attr?.left || style?.left,
            leftunits: attr?.leftunits,
            top: attr?.top || style?.top,
            topunits: attr?.topunits,
            width: attr?.width || style?.width,
            widthunits: attr?.widthunits,
            height: attr?.height || style?.height,
            heightunits: attr?.heightunits // H.
        },
        container: {
            container: attr?.container,
            axisx: attr?.axisx,
            axisy: attr?.axisy // Axis Y.
        },
        image: {
            // img // Image.
            filewidth: attr?.filewidth,
            fileheight: attr?.fileheight
        },
        slds: {
            imgs: attr?.imgs,
            slds_stretch: attr?.slds_stretch,
            slds_imgposition: attr?.slds_imgposition,
            slds_loop: attr?.slds_loop,
            slds_speed: attr?.slds_speed,
            slds_autoplay: attr?.slds_autoplay,
            slds_arrowcontrols: attr?.slds_arrowcontrols,
            slds_arrowtype: attr?.slds_arrowtype,
            slds_arrowsize: attr?.slds_arrowsize,
            slds_arrowlinesize: attr?.slds_arrowlinesize,
            slds_arrowborder: attr?.slds_arrowborder,
            slds_arrowcolor: attr?.slds_arrowcolor,
            slds_arrowbgcolor: attr?.slds_arrowbgcolor,
            slds_arrowbgopacity: attr?.slds_arrowbgopacity,
            slds_arrowcolorhover: attr?.slds_arrowcolorhover,
            slds_arrowbgcolorhover: attr?.slds_arrowbgcolorhover,
            slds_arrowbgopacityhover: attr?.slds_arrowbgopacityhover,
            slds_arrowalign: attr?.slds_arrowalign,
            slds_arrowvmargin: attr?.slds_arrowvmargin,
            slds_arrowbetweenmargin: attr?.slds_arrowbetweenmargin,
            slds_arrowhmargin: attr?.slds_arrowhmargin,
            slds_dotscontrols: attr?.slds_dotscontrols,
            slds_dotssize: attr?.slds_dotssize,
            slds_dotsbgcolor: attr?.slds_dotsbgcolor,
            slds_dotsbgcoloractive: attr?.slds_dotsbgcoloractive,
            slds_dotsvmargin: attr?.slds_dotsvmargin,
            slds_dotshmargin: attr?.slds_dotshmargin,
            slds_playiconsize: attr?.slds_playiconsize,
            slds_playiconcolor: attr?.slds_playiconcolor,
            slds_captionwidth: attr?.slds_captionwidth // Caption width.
        },
        videosett: {
            autoplay: attr?.autoplay,
            mute: attr?.mute,
            loop: attr?.loop,
            startsec: attr?.startsec,
            endsec: attr?.endsec // End sec.
        },
        inputs: {
            // inputs,
            inputpos: attr?.inputpos,
            inputfontfamily: attr?.inputfontfamily,
            inputfontsize: attr?.inputfontsize,
            inputfontweight: attr?.inputfontweight,
            inputvariationweight: attr?.inputvariationweight,
            inputcolor: attr?.inputcolor,
            inputbgcolor: attr?.inputbgcolor,
            inputbordercolor: attr?.inputbordercolor,
            inputbordersize: attr?.inputbordersize,
            inputradius: attr?.inputradius,
            inputheight: attr?.inputheight,
            inputmargbottom: attr?.inputmargbottom,
            inputmargright: attr?.inputmargright,
            inputelscolor: attr?.inputelscolor,
            inputelsfontsize: attr?.inputelsfontsize,
            inputelsfontweight: attr?.inputelsfontweight,
            inputelsvariationweight: attr?.inputelsvariationweight,
            inputtitlefontsize: attr?.inputtitlefontsize,
            inputtitlefontweight: attr?.inputtitlefontweight,
            inputtitlevariationweight: attr?.inputtitlevariationweight,
            inputtitlecolor: attr?.inputtitlecolor,
            inputtitlemargbottom: attr?.inputtitlemargbottom,
            inputsstyle: attr?.inputsstyle,
            inputsstyle2: attr?.inputsstyle2, // Placeholder style.
        },
        form: {
            formmsgsuccess: attr?.formmsgsuccess,
            formmsgurl: attr?.formmsgurl,
            formname: attr?.formname,
            formerrreq: attr?.formerrreq,
            formerremail: attr?.formerremail,
            formerrphone: attr?.formerrphone,
            formerrname: attr?.formerrname,
            formbottomtext: attr?.formbottomtext // Text under form.
        },
        button: {
            buttontitle: attr?.buttontitle,
            buttonalign: attr?.buttonalign,
            buttoncolor: attr?.buttoncolor,
            buttonbgcolor: attr?.buttonbgcolor,
            buttonbordercolor: attr?.buttonbordercolor,
            buttonbordersize: attr?.buttonbordersize,
            buttonradius: attr?.buttonradius,
            buttonmargtop: attr?.buttonmargtop,
            buttonwidth: attr?.buttonwidth,
            buttonheight: attr?.buttonheight,
            buttonfontfamily: attr?.buttonfontfamily,
            buttonfontsize: attr?.buttonfontsize,
            buttonfontweight: attr?.buttonfontweight,
            buttonvariationweight: attr?.buttonvariationweight,
            buttonshadowsize: attr?.buttonshadowsize,
            buttonshadowopacity: attr?.buttonshadowopacity // Btn shadow opacity.
        },
        font: {
            align: style?.textAlign,
            color: style?.color !== "transparent" ? style?.color : undefined,
            fontsize: style?.fontSize,
            fontfamily: style?.fontFamily?.match(/'(.*?)'/g)?.[0]?.replaceAll("'", "") && "FuturaPT",
            fontweight: style?.fontWeight,
            lineheight: style?.lineHeight,
            letterspacing: style?.letterSpacing,
            lettercase: style?.textTransform // Letter case.
        },
        other: {
            bgcolor: ((style?.backgroundImage?.includes("radial-gradient") || style?.backgroundImage?.includes("linear-gradient")) ? style?.backgroundImage : undefined) || (style?.backgroundColor !== "transparent" ? style?.backgroundColor : undefined),
            bgposition: style?.backgroundPosition,
            bgattachment: style?.backgroundAttachment === "fixed" ? "fixed" : undefined,
            opacity: style?.opacity,
            rotate: style?.transform?.includes("rotate") && style?.transform?.match(/(\d+)/)?.[0],
            zindex: style?.zIndex,
            // lock, // Actions.
            effects: style?.filter && `filter: ${style?.filter};`,
            // classname, // Css class name.
            // groupid, // Groupid.
            animmobile: attr?.['data-animate-mobile'], // Mobile animation.
        },
        border: {
            bordercolor: style?.borderColor !== "transparent" ? style?.borderColor : undefined,
            borderwidth: style?.borderWidth,
            borderradius: style?.borderRadius,
            borderstyle: [/*"solid",*/ "dotted", "dashed", "none"].includes(style?.borderStyle) ? style?.borderStyle : undefined // Style.
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
            tipposition: attr?.tipposition,
            tipopen: attr?.tipopen,
            tipbgcolor: style?.backgroundColor,
            tipradius: style?.tip?.borderRadius,
            tipshadowblur: style?.tip?.boxShadow?.match(/[^\s\(]+(\(.+\))?/g)?.[2]?.replace("px", ""),
            tipwidth: style?.tip?.width, // Width.
            // tipimg, // Tip image.
        },
        hover: {
            bgcolorhover: style?.hover?.backgroundColor !== "transparent" ? style?.hover?.backgroundColor : undefined,
            colorhover: style?.hover?.color !== "transparent" ? style?.hover?.color : undefined,
            bordercolorhover: style?.hover?.borderColor !== "transparent" ? style?.hover?.borderColor : undefined,
            speedhover: style?.transition?.split(" ")?.[1]?.replace("s", ""), // Duration.
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
            zoomable: attr?.zoomable,
            lazyoff: attr?.lazyoff,
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
