import rgb2hex from "./lib/rgb2hex/index.js";

export default (style, attr) => {
    const boxShadow = style?.['box-shadow']?.match(/[^\s\(]+(\(.+\))?/g);
    return {
        pos: {
            left: attr?.['data-field-left-value'] || style?.['left'], // X.
            leftunits: attr?.['data-field-leftunits-value'], // X.
            top: attr?.['data-field-top-value'] || style?.['top'], // Y.
            topunits: attr?.['data-field-topunits-value'], // Y.
            width: attr?.['data-field-width-value'] || style?.['width'], // W.
            widthunits: attr?.['data-field-widthunits-value'], // W.
            height: attr?.['data-field-height-value'] || style?.['height'], // H.
            heightunits: attr?.['data-field-heightunits-value'] // H.
        },
        container: {
            container: attr?.['data-field-container-value'], // Container.
            axisx: attr?.['data-field-axisx-value'], // Axis X.
            axisy: attr?.['data-field-axisy-value'] // Axis Y.
        },
        image: {
            // img // Image.
            filewidth: attr?.['data-field-filewidth-value'],
            fileheight: attr?.['data-field-fileheight-value']
        },
        slds: {
            imgs: attr?.['data-field-imgs-value'], // Images.
            slds_stretch: attr?.['data-field-slds_stretch-value'], // Stretch.
            slds_imgposition: attr?.['data-field-slds_imgposition-value'], // Position.
            slds_loop: attr?.['data-field-slds_loop-value'], // Loop.
            slds_speed: attr?.['data-field-slds_speed-value'], // Slide speed.
            slds_autoplay: attr?.['data-field-slds_autoplay-value'], // Autoplay (s).
            slds_arrowcontrols: attr?.['data-field-slds_arrowcontrols-value'], // Controls.
            slds_arrowtype: attr?.['data-field-slds_arrowtype-value'], // Type.
            slds_arrowsize: attr?.['data-field-slds_arrowsize-value'], // Size.
            slds_arrowlinesize: attr?.['data-field-slds_arrowlinesize-value'], // Line size.
            slds_arrowborder: attr?.['data-field-slds_arrowborder-value'], // Border.
            slds_arrowcolor: attr?.['data-field-slds_arrowcolor-value'], // Color.
            slds_arrowbgcolor: attr?.['data-field-slds_arrowbgcolor-value'], // Bg. color.
            slds_arrowbgopacity: attr?.['data-field-slds_arrowbgopacity-value'], // Bg. opacity.
            slds_arrowcolorhover: attr?.['data-field-slds_arrowcolorhover-value'], // Hover color.
            slds_arrowbgcolorhover: attr?.['data-field-slds_arrowbgcolorhover-value'], // Hover bg. color.
            slds_arrowbgopacityhover: attr?.['data-field-slds_arrowbgopacityhover-value'], // Hover bg. opacity.
            slds_arrowalign: attr?.['data-field-slds_arrowalign-value'], // Align.
            slds_arrowvmargin: attr?.['data-field-slds_arrowvmargin-value'], // Vertical spacing, px.
            slds_arrowbetweenmargin: attr?.['data-field-slds_arrowbetweenmargin-value'], // Spacing between, px.
            slds_arrowhmargin: attr?.['data-field-slds_arrowhmargin-value'], // Horizontal margin.
            slds_dotscontrols: attr?.['data-field-slds_dotscontrols-value'], // Controls.
            slds_dotssize: attr?.['data-field-slds_dotssize-value'], // Size.
            slds_dotsbgcolor: attr?.['data-field-slds_dotsbgcolor-value'], // Color.
            slds_dotsbgcoloractive: attr?.['data-field-slds_dotsbgcoloractive-value'], // Active color.
            slds_dotsvmargin: attr?.['data-field-slds_dotsvmargin-value'], // Vertical spacing, px.
            slds_dotshmargin: attr?.['data-field-slds_dotshmargin-value'], // Spacing between, px.
            slds_playiconsize: attr?.['data-field-slds_playiconsize-value'], // Size.
            slds_playiconcolor: attr?.['data-field-slds_playiconcolor-value'], // Color.
            slds_captionwidth: attr?.['data-field-slds_captionwidth-value'] // Caption width.
        },
        videosett: {
            autoplay: attr?.['data-field-autoplay-value'], // Autoplay.
            mute: attr?.['data-field-mute-value'], // Mute.
            loop: attr?.['data-field-loop-value'], // Loop.
            startsec: attr?.['data-field-startsec-value'], // Start sec.
            endsec: attr?.['data-field-endsec-value'] // End sec.
        },
        inputs: {
            // inputs,
            inputpos: attr?.['data-field-inputpos-value'], // Form design.
            inputfontfamily: attr?.['data-field-inputfontfamily-value'], // Font family.
            inputfontsize: attr?.['data-field-inputfontsize-value'], // Input font size.
            inputfontweight: attr?.['data-field-inputfontweight-value'], // Input font weight.
            inputvariationweight: attr?.['data-field-inputvariationweight-value'],
            inputcolor: attr?.['data-field-inputcolor-value'], // Input color.
            inputbgcolor: attr?.['data-field-inputbgcolor-value'], // Input bg.color.
            inputbordercolor: attr?.['data-field-inputbordercolor-value'], // Input border color.
            inputbordersize: attr?.['data-field-inputbordersize-value'], // Input border size.
            inputradius: attr?.['data-field-inputradius-value'], // Input radius.
            inputheight: attr?.['data-field-inputheight-value'], // Input height.
            inputmargbottom: attr?.['data-field-inputmargbottom-value'], // Input margin bottom.
            inputmargright: attr?.['data-field-inputmargright-value'],
            inputelscolor: attr?.['data-field-inputelscolor-value'], // Color of checkboxes, radio btns, and other elements.
            inputelsfontsize: attr?.['data-field-inputelsfontsize-value'], // Checkbox label font size.
            inputelsfontweight: attr?.['data-field-inputelsfontweight-value'], // Checkbox label font weight.
            inputelsvariationweight: attr?.['data-field-inputelsvariationweight-value'],
            inputtitlefontsize: attr?.['data-field-inputtitlefontsize-value'], // Input title font size.
            inputtitlefontweight: attr?.['data-field-inputtitlefontweight-value'], // Input title font weight.
            inputtitlevariationweight: attr?.['data-field-inputtitlevariationweight-value'],
            inputtitlecolor: attr?.['data-field-inputtitlecolor-value'], // Input title color.
            inputtitlemargbottom: attr?.['data-field-inputtitlemargbottom-value'], // Input title padding bottom.
            inputsstyle: attr?.['data-field-inputsstyle-value'], // Input style.
            inputsstyle2: attr?.['data-field-inputsstyle2-value'], // Placeholder style.
        },
        form: {
            formmsgsuccess: attr?.['data-field-formmsgsuccess-value'], // Success message.
            formmsgurl: attr?.['data-field-formmsgurl-value'], // Success url.
            formname: attr?.['data-field-formname-value'], // Formname.
            formerrreq: attr?.['data-field-formerrreq-value'], // Error: required field.
            formerremail: attr?.['data-field-formerremail-value'], // Error: email is incorrect.
            formerrphone: attr?.['data-field-formerrphone-value'], // Error: phone is incorrect.
            formerrname: attr?.['data-field-formerrname-value'], // Error: name is incorrect.
            formbottomtext: attr?.['data-field-formbottomtext-value'] // Text under form.
        },
        button: {
            buttontitle: attr?.['data-field-buttontitle-value'], // Btn title.
            buttonalign: attr?.['data-field-buttonalign-value'], // Btn align.
            buttoncolor: attr?.['data-field-buttoncolor-value'], // Text color.
            buttonbgcolor: attr?.['data-field-buttonbgcolor-value'], // Bg.color.
            buttonbordercolor: attr?.['data-field-buttonbordercolor-value'], // Btn border color.
            buttonbordersize: attr?.['data-field-buttonbordersize-value'], // Btn border size.
            buttonradius: attr?.['data-field-buttonradius-value'], // Btn corner radius.
            buttonmargtop: attr?.['data-field-buttonmargtop-value'], // Btn margin top.
            buttonwidth: attr?.['data-field-buttonwidth-value'], // Btn width.
            buttonheight: attr?.['data-field-buttonheight-value'], // Btn height.
            buttonfontfamily: attr?.['data-field-buttonfontfamily-value'], // Btn font family.
            buttonfontsize: attr?.['data-field-buttonfontsize-value'], // Btn font size.
            buttonfontweight: attr?.['data-field-buttonfontweight-value'], // Btn font weight.
            buttonvariationweight: attr?.['data-field-buttonvariationweight-value'],
            buttonshadowsize: attr?.['data-field-buttonshadowsize-value'], // Btn shadow size.
            buttonshadowopacity: attr?.['data-field-buttonshadowopacity-value'] // Btn shadow opacity.
        },
        font: {
            align: style?.['text-align'],
            color: style?.['color'] !== 'transparent' ? style?.['color'] : undefined, // Color.
            fontsize: style?.['font-size'], // Size.
            fontfamily: style?.['font-family']?.match(/'(.*?)'/g)?.[0]?.replaceAll("'", "") && "FuturaPT", // Typeface.
            fontweight: style?.['font-weight'], // Weight.
            lineheight: style?.['line-height'], // Spacing.
            letterspacing: style?.['letter-spacing'], // Spacing.
            lettercase: style?.['text-transform'] // Letter case.
        },
        other: {
            bgcolor: style?.['background-color'] !== 'transparent' ? style?.['background-color'] : undefined, // Bg. color.
            bgposition: style?.['background-position'], // Position. 
            bgattachment: style?.['background-attachment'] === 'fixed' ? 'fixed' : undefined, // Behavior.
            opacity: style?.['opacity'], // Opacity.
            rotate: style?.['transform']?.includes('rotate') && style?.['transform']?.match(/(\d+)/)?.[0], // Rotate.
            zindex: style?.['z-index'], // Arrange.
            // lock, // Actions.
            effects: style?.['filter'] && `filter: ${style?.['filter']};`, // Effect.
            // classname, // Css class name.
            // groupid, // Groupid.
            animmobile: attr?.['data-animate-mobile'], // Mobile animation.
        },
        border: {
            bordercolor: style?.['border-color'] !== 'transparent' ? style?.['border-color'] : undefined, // Border.
            borderwidth: style?.['border-width'], // Brdr.size, px.
            borderradius: style?.['border-radius'], // Radius.
            borderstyle: [/*'solid',*/ 'dotted', 'dashed', 'none'].includes(style?.['border-style']) ? style?.['border-style'] : undefined // Style.
        },
        shadow: {
            shadowcolor: boxShadow?.[4] && rgb2hex(boxShadow?.[4] || ''), // Shadow.
            shadowopacity: (boxShadow?.[4])?.split(",")?.[3]?.match(/^[0-9]{1,2}([,.][0-9]{1,2})?/g)?.[0], // Opacity.
            shadowx: boxShadow?.[0]?.replace("px", ""), // Offset x.
            shadowy: boxShadow?.[1]?.replace("px", ""), // Offset y.
            shadowblur: boxShadow?.[2]?.replace("px", ""), // Blur.
            shadowspread: boxShadow?.[3]?.replace("px", ""), // Spread.
        },
        tip: {
            tipposition: attr?.['data-field-tipposition-value'], // Position.
            tipopen: attr?.['data-field-tipopen-value'], // Show.
            tipbgcolor: style?.['background-color'], // Bg. color.
            tipradius: style?.tip?.['border-radius'], // Corner radius.
            tipshadowblur: style?.tip?.['box-shadow']?.match(/[^\s\(]+(\(.+\))?/g)?.[2]?.replace("px", ""), // Shadow blur.
            tipwidth: style?.tip?.width, // Width.
            // tipimg, // Tip image.
        },
        hover: {
            bgcolorhover: style?.hover?.['background-color'] !== 'transparent' ? style?.hover?.['background-color'] : undefined, // Bgcolor on hover.
            colorhover: style?.hover?.['color'] !== 'transparent' ? style?.hover?.['color'] : undefined, // Color on hover.
            bordercolorhover: style?.hover?.['border-color'] !== 'transparent' ? style?.hover?.['border-color'] : undefined, // Border on hover.
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
            zoomable: attr?.['data-field-zoomable-value'], // Zoomable.
            lazyoff: attr?.['data-field-lazyoff-value'], // Lazyload.
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