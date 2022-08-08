import { rgbToHex } from "rgb-to-hex";
import { cssBoxShadow } from "css-box-shadow";

export default (style: any, attr: any): any => {
    const boxShadow = style?.boxShadow?.match(/[^\s\(]+(\(.+\))?/g);
    return {
        pos: {
            left: attr?.left || style?.left, // X.
            leftunits: attr?.leftunits, // X.
            top: attr?.top || style?.top, // Y.
            topunits: attr?.topunits, // Y.
            width: attr?.width || style?.width, // W.
            widthunits: attr?.widthunits, // W.
            height: attr?.height || style?.height, // H.
            heightunits: attr?.heightunits // H.
        },
        container: {
            container: attr?.container, // Container.
            axisx: attr?.axisx, // Axis X.
            axisy: attr?.axisy // Axis Y.
        },
        image: {
            // img // Image.
            filewidth: attr?.filewidth,
            fileheight: attr?.fileheight
        },
        slds: {
            imgs: attr?.imgs, // Images.
            slds_stretch: attr?.slds_stretch, // Stretch.
            slds_imgposition: attr?.slds_imgposition, // Position.
            slds_loop: attr?.slds_loop, // Loop.
            slds_speed: attr?.slds_speed, // Slide speed.
            slds_autoplay: attr?.slds_autoplay, // Autoplay (s).
            slds_arrowcontrols: attr?.slds_arrowcontrols, // Controls.
            slds_arrowtype: attr?.slds_arrowtype, // Type.
            slds_arrowsize: attr?.slds_arrowsize, // Size.
            slds_arrowlinesize: attr?.slds_arrowlinesize, // Line size.
            slds_arrowborder: attr?.slds_arrowborder, // Border.
            slds_arrowcolor: attr?.slds_arrowcolor, // Color.
            slds_arrowbgcolor: attr?.slds_arrowbgcolor, // Bg. color.
            slds_arrowbgopacity: attr?.slds_arrowbgopacity, // Bg. opacity.
            slds_arrowcolorhover: attr?.slds_arrowcolorhover, // Hover color.
            slds_arrowbgcolorhover: attr?.slds_arrowbgcolorhover, // Hover bg. color.
            slds_arrowbgopacityhover: attr?.slds_arrowbgopacityhover, // Hover bg. opacity.
            slds_arrowalign: attr?.slds_arrowalign, // Align.
            slds_arrowvmargin: attr?.slds_arrowvmargin, // Vertical spacing, px.
            slds_arrowbetweenmargin: attr?.slds_arrowbetweenmargin, // Spacing between, px.
            slds_arrowhmargin: attr?.slds_arrowhmargin, // Horizontal margin.
            slds_dotscontrols: attr?.slds_dotscontrols, // Controls.
            slds_dotssize: attr?.slds_dotssize, // Size.
            slds_dotsbgcolor: attr?.slds_dotsbgcolor, // Color.
            slds_dotsbgcoloractive: attr?.slds_dotsbgcoloractive, // Active color.
            slds_dotsvmargin: attr?.slds_dotsvmargin, // Vertical spacing, px.
            slds_dotshmargin: attr?.slds_dotshmargin, // Spacing between, px.
            slds_playiconsize: attr?.slds_playiconsize, // Size.
            slds_playiconcolor: attr?.slds_playiconcolor, // Color.
            slds_captionwidth: attr?.slds_captionwidth // Caption width.
        },
        videosett: {
            autoplay: attr?.autoplay, // Autoplay.
            mute: attr?.mute, // Mute.
            loop: attr?.loop, // Loop.
            startsec: attr?.startsec, // Start sec.
            endsec: attr?.endsec // End sec.
        },
        inputs: {
            // inputs,
            inputpos: attr?.inputpos, // Form design.
            inputfontfamily: attr?.inputfontfamily, // Font family.
            inputfontsize: attr?.inputfontsize, // Input font size.
            inputfontweight: attr?.inputfontweight, // Input font weight.
            inputvariationweight: attr?.inputvariationweight,
            inputcolor: attr?.inputcolor, // Input color.
            inputbgcolor: attr?.inputbgcolor, // Input bg.color.
            inputbordercolor: attr?.inputbordercolor, // Input border color.
            inputbordersize: attr?.inputbordersize, // Input border size.
            inputradius: attr?.inputradius, // Input radius.
            inputheight: attr?.inputheight, // Input height.
            inputmargbottom: attr?.inputmargbottom, // Input margin bottom.
            inputmargright: attr?.inputmargright,
            inputelscolor: attr?.inputelscolor, // Color of checkboxes, radio btns, and other elements.
            inputelsfontsize: attr?.inputelsfontsize, // Checkbox label font size.
            inputelsfontweight: attr?.inputelsfontweight, // Checkbox label font weight.
            inputelsvariationweight: attr?.inputelsvariationweight,
            inputtitlefontsize: attr?.inputtitlefontsize, // Input title font size.
            inputtitlefontweight: attr?.inputtitlefontweight, // Input title font weight.
            inputtitlevariationweight: attr?.inputtitlevariationweight,
            inputtitlecolor: attr?.inputtitlecolor, // Input title color.
            inputtitlemargbottom: attr?.inputtitlemargbottom, // Input title padding bottom.
            inputsstyle: attr?.inputsstyle, // Input style.
            inputsstyle2: attr?.inputsstyle2, // Placeholder style.
        },
        form: {
            formmsgsuccess: attr?.formmsgsuccess, // Success message.
            formmsgurl: attr?.formmsgurl, // Success url.
            formname: attr?.formname, // Formname.
            formerrreq: attr?.formerrreq, // Error: required field.
            formerremail: attr?.formerremail, // Error: email is incorrect.
            formerrphone: attr?.formerrphone, // Error: phone is incorrect.
            formerrname: attr?.formerrname, // Error: name is incorrect.
            formbottomtext: attr?.formbottomtext // Text under form.
        },
        button: {
            buttontitle: attr?.buttontitle, // Btn title.
            buttonalign: attr?.buttonalign, // Btn align.
            buttoncolor: attr?.buttoncolor, // Text color.
            buttonbgcolor: attr?.buttonbgcolor, // Bg.color.
            buttonbordercolor: attr?.buttonbordercolor, // Btn border color.
            buttonbordersize: attr?.buttonbordersize, // Btn border size.
            buttonradius: attr?.buttonradius, // Btn corner radius.
            buttonmargtop: attr?.buttonmargtop, // Btn margin top.
            buttonwidth: attr?.buttonwidth, // Btn width.
            buttonheight: attr?.buttonheight, // Btn height.
            buttonfontfamily: attr?.buttonfontfamily, // Btn font family.
            buttonfontsize: attr?.buttonfontsize, // Btn font size.
            buttonfontweight: attr?.buttonfontweight, // Btn font weight.
            buttonvariationweight: attr?.buttonvariationweight,
            buttonshadowsize: attr?.buttonshadowsize, // Btn shadow size.
            buttonshadowopacity: attr?.buttonshadowopacity // Btn shadow opacity.
        },
        font: {
            align: style?.textAlign,
            color: style?.color !== "transparent" ? style?.color : undefined, // Color.
            fontsize: style?.fontSize, // Size.
            fontfamily: style?.fontFamily?.match(/'(.*?)'/g)?.[0]?.replaceAll("'", "") && "FuturaPT", // Typeface.
            fontweight: style?.fontWeight, // Weight.
            lineheight: style?.lineHeight, // Spacing.
            letterspacing: style?.letterSpacing, // Spacing.
            lettercase: style?.textTransform // Letter case.
        },
        other: {
            bgcolor: ((style?.backgroundImage?.includes("radial-gradient") || style?.backgroundImage?.includes("linear-gradient")) ? style?.backgroundImage : undefined) || (style?.backgroundColor !== "transparent" ? style?.backgroundColor : undefined), // Bg. color.
            bgposition: style?.backgroundPosition, // Position. 
            bgattachment: style?.backgroundAttachment === "fixed" ? "fixed" : undefined, // Behavior.
            opacity: style?.opacity, // Opacity.
            rotate: style?.transform?.includes("rotate") && style?.transform?.match(/(\d+)/)?.[0], // Rotate.
            zindex: style?.zIndex, // Arrange.
            // lock, // Actions.
            effects: style?.filter && `filter: ${style?.filter};`, // Effect.
            // classname, // Css class name.
            // groupid, // Groupid.
            animmobile: attr?.['data-animate-mobile'], // Mobile animation.
        },
        border: {
            bordercolor: style?.borderColor !== "transparent" ? style?.borderColor : undefined, // Border.
            borderwidth: style?.borderWidth, // Brdr.size, px.
            borderradius: style?.borderRadius, // Radius.
            borderstyle: [/*"solid",*/ "dotted", "dashed", "none"].includes(style?.borderStyle) ? style?.borderStyle : undefined // Style.
        },
        shadow: {
            shadowcolor: rgbToHex(cssBoxShadow(style?.boxShadow)?.[0].color), // Shadow.
            shadowopacity: (boxShadow?.[4])?.split(",")?.[3]?.match(/^[0-9]{1,2}([,.][0-9]{1,2})?/g)?.[0], // Opacity.
            shadowx: cssBoxShadow(style?.boxShadow)?.[0].x, // Offset x.
            shadowy: cssBoxShadow(style?.boxShadow)?.[0].y, // Offset y.
            shadowblur: cssBoxShadow(style?.boxShadow)?.[0].blur, // Blur.
            shadowspread: cssBoxShadow(style?.boxShadow)?.[0].spread, // Spread.
        },
        tip: {
            tipposition: attr?.tipposition, // Position.
            tipopen: attr?.tipopen, // Show.
            tipbgcolor: style?.backgroundColor, // Bg. color.
            tipradius: style?.tip?.borderRadius, // Corner radius.
            tipshadowblur: cssBoxShadow(style?.tip?.boxShadow)?.[0].blur, // Shadow blur.
            tipwidth: style?.tip?.width, // Width.
            // tipimg, // Tip image.
        },
        hover: {
            bgcolorhover: style?.hover?.backgroundColor !== "transparent" ? style?.hover?.backgroundColor : undefined, // Bgcolor on hover.
            colorhover: style?.hover?.color !== "transparent" ? style?.hover?.color : undefined, // Color on hover.
            bordercolorhover: style?.hover?.borderColor !== "transparent" ? style?.hover?.borderColor : undefined, // Border on hover.
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
            zoomable: attr?.zoomable, // Zoomable.
            lazyoff: attr?.lazyoff, // Lazyload.
            pevent: attr?.['pointer-events'] // Pointer events.
        },
        anim: {
            animstyle: attr?.['data-animate-style'], // Animation.
            animduration: attr?.['data-animate-duration'], // Duration.
            animdistance: attr?.['data-animate-distance'], // Distance.
            animscale: attr?.['data-animate-scale'], // Scale.
            animdelay: attr?.['data-animate-delay'], // Delay.
            animtriggeroffset: attr?.['data-animate-trigger-offset'], // Trigger offset.
            animprx: attr?.['data-animate-prx'], // Parallax.
            animprxs: attr?.['data-animate-prx-s'], // Speed, %.
            animprxdx: attr?.['data-animate-prx-dx'], // Dist X, px.
            animprxdy: attr?.['data-animate-prx-dy'], // Dist Y, px.
            animfix: attr?.['data-animate-fix'], // Fixing.
            animfixtrgofst: attr?.['data-animate-fix-trgofst'], // Trigger offset.
            animfixdist: attr?.['data-animate-fix-dist'] // Distance.
        },
        sbsopenbtn: {
            sbsevent: attr?.['data-animate-sbs-event'], // Event.
            sbstrg: attr?.['data-animate-sbs-trg'], // Start trigger.
            sbstrgofst: attr?.['data-animate-sbs-trgofst'], // Trigger offset.
            sbsloop: attr?.['data-animate-sbs-loop'], // Loop.
            sbstrgels: attr?.['data-animate-sbs-trgels'], // Trigger.
            sbsopts: attr?.['data-animate-sbs-opts'], // Steps.
        },
    }
};