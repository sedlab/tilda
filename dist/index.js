'use strict';

var cheerio = require('cheerio');
var cssToObject = require('css-to-object');
var rgbToHex = require('rgb-to-hex');
var cssBoxShadow = require('css-box-shadow');
var gradient = require('gradient-parser');

var styles = (style, attr) => {
  const boxShadow = style?.boxShadow?.match(/[^\s\(]+(\(.+\))?/g);
  return {
    pos: {
      left: attr?.left || style?.left,
      // X.
      leftunits: attr?.leftunits,
      // X.
      top: attr?.top || style?.top,
      // Y.
      topunits: attr?.topunits,
      // Y.
      width: attr?.width || style?.width,
      // W.
      widthunits: attr?.widthunits,
      // W.
      height: attr?.height || style?.height,
      // H.
      heightunits: attr?.heightunits
      // H.
    },
    container: {
      container: attr?.container,
      // Container.
      axisx: attr?.axisx,
      // Axis X.
      axisy: attr?.axisy
      // Axis Y.
    },
    image: {
      // img // Image.
      filewidth: attr?.filewidth,
      fileheight: attr?.fileheight
    },
    slds: {
      imgs: attr?.imgs,
      // Images.
      slds_stretch: attr?.slds_stretch,
      // Stretch.
      slds_imgposition: attr?.slds_imgposition,
      // Position.
      slds_loop: attr?.slds_loop,
      // Loop.
      slds_speed: attr?.slds_speed,
      // Slide speed.
      slds_autoplay: attr?.slds_autoplay,
      // Autoplay (s).
      slds_arrowcontrols: attr?.slds_arrowcontrols,
      // Controls.
      slds_arrowtype: attr?.slds_arrowtype,
      // Type.
      slds_arrowsize: attr?.slds_arrowsize,
      // Size.
      slds_arrowlinesize: attr?.slds_arrowlinesize,
      // Line size.
      slds_arrowborder: attr?.slds_arrowborder,
      // Border.
      slds_arrowcolor: attr?.slds_arrowcolor,
      // Color.
      slds_arrowbgcolor: attr?.slds_arrowbgcolor,
      // Bg. color.
      slds_arrowbgopacity: attr?.slds_arrowbgopacity,
      // Bg. opacity.
      slds_arrowcolorhover: attr?.slds_arrowcolorhover,
      // Hover color.
      slds_arrowbgcolorhover: attr?.slds_arrowbgcolorhover,
      // Hover bg. color.
      slds_arrowbgopacityhover: attr?.slds_arrowbgopacityhover,
      // Hover bg. opacity.
      slds_arrowalign: attr?.slds_arrowalign,
      // Align.
      slds_arrowvmargin: attr?.slds_arrowvmargin,
      // Vertical spacing, px.
      slds_arrowbetweenmargin: attr?.slds_arrowbetweenmargin,
      // Spacing between, px.
      slds_arrowhmargin: attr?.slds_arrowhmargin,
      // Horizontal margin.
      slds_dotscontrols: attr?.slds_dotscontrols,
      // Controls.
      slds_dotssize: attr?.slds_dotssize,
      // Size.
      slds_dotsbgcolor: attr?.slds_dotsbgcolor,
      // Color.
      slds_dotsbgcoloractive: attr?.slds_dotsbgcoloractive,
      // Active color.
      slds_dotsvmargin: attr?.slds_dotsvmargin,
      // Vertical spacing, px.
      slds_dotshmargin: attr?.slds_dotshmargin,
      // Spacing between, px.
      slds_playiconsize: attr?.slds_playiconsize,
      // Size.
      slds_playiconcolor: attr?.slds_playiconcolor,
      // Color.
      slds_captionwidth: attr?.slds_captionwidth
      // Caption width.
    },
    videosett: {
      autoplay: attr?.autoplay,
      // Autoplay.
      mute: attr?.mute,
      // Mute.
      loop: attr?.loop,
      // Loop.
      startsec: attr?.startsec,
      // Start sec.
      endsec: attr?.endsec
      // End sec.
    },
    inputs: {
      // inputs,
      inputpos: attr?.inputpos,
      // Form design.
      inputfontfamily: attr?.inputfontfamily,
      // Font family.
      inputfontsize: attr?.inputfontsize,
      // Input font size.
      inputfontweight: attr?.inputfontweight,
      // Input font weight.
      inputvariationweight: attr?.inputvariationweight,
      inputcolor: attr?.inputcolor,
      // Input color.
      inputbgcolor: attr?.inputbgcolor,
      // Input bg.color.
      inputbordercolor: attr?.inputbordercolor,
      // Input border color.
      inputbordersize: attr?.inputbordersize,
      // Input border size.
      inputradius: attr?.inputradius,
      // Input radius.
      inputheight: attr?.inputheight,
      // Input height.
      inputmargbottom: attr?.inputmargbottom,
      // Input margin bottom.
      inputmargright: attr?.inputmargright,
      inputelscolor: attr?.inputelscolor,
      // Color of checkboxes, radio btns, and other elements.
      inputelsfontsize: attr?.inputelsfontsize,
      // Checkbox label font size.
      inputelsfontweight: attr?.inputelsfontweight,
      // Checkbox label font weight.
      inputelsvariationweight: attr?.inputelsvariationweight,
      inputtitlefontsize: attr?.inputtitlefontsize,
      // Input title font size.
      inputtitlefontweight: attr?.inputtitlefontweight,
      // Input title font weight.
      inputtitlevariationweight: attr?.inputtitlevariationweight,
      inputtitlecolor: attr?.inputtitlecolor,
      // Input title color.
      inputtitlemargbottom: attr?.inputtitlemargbottom,
      // Input title padding bottom.
      inputsstyle: attr?.inputsstyle,
      // Input style.
      inputsstyle2: attr?.inputsstyle2
      // Placeholder style.
    },
    form: {
      formmsgsuccess: attr?.formmsgsuccess,
      // Success message.
      formmsgurl: attr?.formmsgurl,
      // Success url.
      formname: attr?.formname,
      // Formname.
      formerrreq: attr?.formerrreq,
      // Error: required field.
      formerremail: attr?.formerremail,
      // Error: email is incorrect.
      formerrphone: attr?.formerrphone,
      // Error: phone is incorrect.
      formerrname: attr?.formerrname,
      // Error: name is incorrect.
      formbottomtext: attr?.formbottomtext
      // Text under form.
    },
    button: {
      buttontitle: attr?.buttontitle,
      // Btn title.
      buttonalign: attr?.buttonalign,
      // Btn align.
      buttoncolor: attr?.buttoncolor,
      // Text color.
      buttonbgcolor: attr?.buttonbgcolor,
      // Bg.color.
      buttonbordercolor: attr?.buttonbordercolor,
      // Btn border color.
      buttonbordersize: attr?.buttonbordersize,
      // Btn border size.
      buttonradius: attr?.buttonradius,
      // Btn corner radius.
      buttonmargtop: attr?.buttonmargtop,
      // Btn margin top.
      buttonwidth: attr?.buttonwidth,
      // Btn width.
      buttonheight: attr?.buttonheight,
      // Btn height.
      buttonfontfamily: attr?.buttonfontfamily,
      // Btn font family.
      buttonfontsize: attr?.buttonfontsize,
      // Btn font size.
      buttonfontweight: attr?.buttonfontweight,
      // Btn font weight.
      buttonvariationweight: attr?.buttonvariationweight,
      buttonshadowsize: attr?.buttonshadowsize,
      // Btn shadow size.
      buttonshadowopacity: attr?.buttonshadowopacity
      // Btn shadow opacity.
    },
    font: {
      align: style?.textAlign,
      color: style?.color !== "transparent" ? style?.color : void 0,
      // Color.
      fontsize: style?.fontSize,
      // Size.
      // fontfamily: style?.fontFamily?.match(/'(.*?)'/g)?.[0]?.replaceAll("'", "") || "Roboto", // Typeface.
      fontweight: style?.fontWeight,
      // Weight.
      lineheight: style?.lineHeight,
      // Spacing.
      letterspacing: style?.letterSpacing,
      // Spacing.
      lettercase: style?.textTransform
      // Letter case.
    },
    other: {
      bgcolor: (style?.backgroundImage?.includes("radial-gradient") || style?.backgroundImage?.includes("linear-gradient") ? style?.backgroundImage : void 0) || (style?.backgroundColor !== "transparent" ? style?.backgroundColor : void 0),
      // Bg. color.
      bgposition: style?.backgroundPosition,
      // Position. 
      bgattachment: style?.backgroundAttachment === "fixed" ? "fixed" : void 0,
      // Behavior.
      opacity: style?.opacity,
      // Opacity.
      rotate: style?.transform?.includes("rotate") && style?.transform?.match(/(\d+)/)?.[0],
      // Rotate.
      zindex: style?.zIndex,
      // Arrange.
      // lock, // Actions.
      effects: style?.filter && `filter: ${style?.filter};`,
      // Effect.
      // classname, // Css class name.
      // groupid, // Groupid.
      animmobile: attr?.["data-animate-mobile"]
      // Mobile animation.
    },
    border: {
      bordercolor: style?.borderColor !== "transparent" ? style?.borderColor : void 0,
      // Border.
      borderwidth: style?.borderWidth,
      // Brdr.size, px.
      borderradius: style?.borderRadius,
      // Radius.
      borderstyle: [
        /*"solid",*/
        "dotted",
        "dashed",
        "none"
      ].includes(style?.borderStyle) ? style?.borderStyle : void 0
      // Style.
    },
    shadow: {
      shadowcolor: rgbToHex.rgbToHex(cssBoxShadow.cssBoxShadow(style?.boxShadow)?.[0].color),
      // Shadow.
      shadowopacity: boxShadow?.[4]?.split(",")?.[3]?.match(/^[0-9]{1,2}([,.][0-9]{1,2})?/g)?.[0],
      // Opacity.
      shadowx: cssBoxShadow.cssBoxShadow(style?.boxShadow)?.[0].x,
      // Offset x.
      shadowy: cssBoxShadow.cssBoxShadow(style?.boxShadow)?.[0].y,
      // Offset y.
      shadowblur: cssBoxShadow.cssBoxShadow(style?.boxShadow)?.[0].blur,
      // Blur.
      shadowspread: cssBoxShadow.cssBoxShadow(style?.boxShadow)?.[0].spread
      // Spread.
    },
    tip: {
      tipposition: attr?.tipposition,
      // Position.
      tipopen: attr?.tipopen,
      // Show.
      tipbgcolor: style?.backgroundColor,
      // Bg. color.
      tipradius: style?.tip?.borderRadius,
      // Corner radius.
      tipshadowblur: cssBoxShadow.cssBoxShadow(style?.tip?.boxShadow)?.[0].blur,
      // Shadow blur.
      tipwidth: style?.tip?.width
      // Width.
      // tipimg, // Tip image.
    },
    hover: {
      bgcolorhover: style?.hover?.backgroundColor !== "transparent" ? style?.hover?.backgroundColor : void 0,
      // Bgcolor on hover.
      colorhover: style?.hover?.color !== "transparent" ? style?.hover?.color : void 0,
      // Color on hover.
      bordercolorhover: style?.hover?.borderColor !== "transparent" ? style?.hover?.borderColor : void 0,
      // Border on hover.
      speedhover: style?.transition?.split(" ")?.[1]?.replace("s", "")
      // Duration.
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
      // Zoomable.
      lazyoff: attr?.lazyoff,
      // Lazyload.
      pevent: attr?.["pointer-events"]
      // Pointer events.
    },
    anim: {
      animstyle: attr?.["data-animate-style"],
      // Animation.
      animduration: attr?.["data-animate-duration"],
      // Duration.
      animdistance: attr?.["data-animate-distance"],
      // Distance.
      animscale: attr?.["data-animate-scale"],
      // Scale.
      animdelay: attr?.["data-animate-delay"],
      // Delay.
      animtriggeroffset: attr?.["data-animate-trigger-offset"],
      // Trigger offset.
      animprx: attr?.["data-animate-prx"],
      // Parallax.
      animprxs: attr?.["data-animate-prx-s"],
      // Speed, %.
      animprxdx: attr?.["data-animate-prx-dx"],
      // Dist X, px.
      animprxdy: attr?.["data-animate-prx-dy"],
      // Dist Y, px.
      animfix: attr?.["data-animate-fix"],
      // Fixing.
      animfixtrgofst: attr?.["data-animate-fix-trgofst"],
      // Trigger offset.
      animfixdist: attr?.["data-animate-fix-dist"]
      // Distance.
    },
    sbsopenbtn: {
      sbsevent: attr?.["data-animate-sbs-event"],
      // Event.
      sbstrg: attr?.["data-animate-sbs-trg"],
      // Start trigger.
      sbstrgofst: attr?.["data-animate-sbs-trgofst"],
      // Trigger offset.
      sbsloop: attr?.["data-animate-sbs-loop"],
      // Loop.
      sbstrgels: attr?.["data-animate-sbs-trgels"],
      // Trigger.
      sbsopts: attr?.["data-animate-sbs-opts"]
      // Steps.
    }
  };
};

const getColor = (data, i) => {
  try {
    return data && rgbToHex.rgbToHex(`rgba(${gradient.parse(data)?.[0]?.colorStops?.[i]?.value})`);
  } catch {
    return void 0;
  }
};
const getOpacity = (data, i) => {
  try {
    return data && gradient.parse(data)?.[0]?.colorStops?.[i]?.value?.[3];
  } catch {
    return void 0;
  }
};
var ab = (elem, style, attr) => ({
  ab_height: attr?.["data-artboard-height"],
  // style?.artboard?.height ||
  ab_bgcolor: (style?.artboard?.backgroundImage?.includes("radial-gradient") || style?.artboard?.backgroundImage?.includes("linear-gradient") ? style?.artboard?.backgroundImage : void 0) || style?.artboard?.backgroundColor,
  ab_bgimg: elem && elem.find(".t396__carrier").attr("data-original") || attr?.["data-original"] || style?.carrier?.backgroundImage?.match(/url\(["']?([^"']*)["']?\)/)?.[1],
  ab_filteropacity: getOpacity(style?.filter?.backgroundImage, 0),
  ab_filtercolor: getColor(style?.filter?.backgroundImage, 0),
  ab_filteropacity2: getOpacity(style?.filter?.backgroundImage, 1),
  ab_filtercolor2: getColor(style?.filter?.backgroundImage, 1),
  ab_bgattachment: style?.carrier?.backgroundAttachment,
  ab_bgposition: style?.carrier?.backgroundPosition,
  ab_height_vh: attr?.["data-artboard-height_vh"]?.replace("vh", ""),
  ab_valign: attr?.["data-artboard-valign"],
  ab_ovrflw: attr?.["data-artboard-ovrflw"],
  // ab_title,
  // ab_grid,
  // ab_gridcolor,
  // ab_gridopacity,
  // ab_gridlineopacity,
  // ab_gridglobal,
  ab_upscale: attr?.["data-artboard-upscale"]
});

var button = (styles) => ({
  groupid: styles?.other?.groupid,
  classname: styles?.other?.classname,
  top: styles?.pos?.top,
  left: styles?.pos?.left,
  align: styles?.font?.align,
  fontsize: styles?.font?.fontsize,
  width: styles?.pos?.width,
  height: styles?.pos?.height,
  color: styles?.font?.color,
  // fontfamily: styles?.font?.fontfamily,
  lineheight: styles?.font?.lineheight,
  fontweight: styles?.font?.fontweight,
  // variationweight,
  letterspacing: styles?.font?.letterspacing,
  lettercase: styles?.font?.lettercase,
  bgcolor: styles?.other?.bgcolor,
  opacity: styles?.other?.opacity,
  rotate: styles?.other?.rotate,
  zindex: styles?.other?.zindex,
  container: styles?.container?.container,
  axisx: styles?.container?.axisx,
  axisy: styles?.container?.axisy,
  caption: styles?.buttonLink?.caption,
  link: styles?.buttonLink?.link,
  linktarget: styles?.buttonLink?.linktarget,
  relnofollow: styles?.buttonLink?.relnofollow,
  buttonstat: styles?.buttonLink?.buttonstat,
  borderwidth: styles?.border?.borderwidth,
  borderradius: styles?.border?.borderradius,
  bordercolor: styles?.border?.bordercolor,
  borderstyle: styles?.border?.borderstyle,
  shadowcolor: styles?.shadow?.shadowcolor,
  shadowopacity: styles?.shadow?.shadowopacity,
  shadowblur: styles?.shadow?.shadowblur,
  shadowspread: styles?.shadow?.shadowspread,
  shadowx: styles?.shadow?.shadowx,
  shadowy: styles?.shadow?.shadowy,
  pevent: styles?.tag?.pevent,
  animduration: styles?.anim?.animduration,
  animdelay: styles?.anim?.animdelay,
  animdistance: styles?.anim?.animdistance,
  animscale: styles?.anim?.animscale,
  animtriggeroffset: styles?.anim?.animtriggeroffset,
  animprx: styles?.anim?.animprx,
  animprxs: styles?.anim?.animprxs,
  animprxdy: styles?.anim?.animprxdy,
  animprxdx: styles?.anim?.animprxdx,
  animfix: styles?.anim?.animfix,
  animfixdist: styles?.anim?.animfixdist,
  animfixtrgofst: styles?.anim?.animfixtrgofst,
  animmobile: styles?.other?.animmobile,
  bgcolorhover: styles?.hover?.bgcolorhover,
  bordercolorhover: styles?.hover?.bordercolorhover,
  colorhover: styles?.hover?.colorhover,
  speedhover: styles?.hover?.speedhover,
  lock: styles?.other?.lock,
  // invisible,
  leftunits: styles?.pos?.leftunits,
  topunits: styles?.pos?.topunits,
  animstyle: styles?.anim?.animstyle,
  sbsevent: styles?.sbsopenbtn?.sbsevent,
  sbstrg: styles?.sbsopenbtn?.sbstrg,
  sbstrgofst: styles?.sbsopenbtn?.sbstrgofst,
  sbsloop: styles?.sbsopenbtn?.sbsloop,
  sbsopts: styles?.sbsopenbtn?.sbsopts,
  sbstrgels: styles?.sbsopenbtn?.sbstrgels,
  // layer,
  effects: styles?.other?.effects
});

var form = (styles) => ({
  groupid: styles?.other?.groupid,
  classname: styles?.other?.classname,
  width: styles?.pos?.width,
  top: styles?.pos?.top,
  left: styles?.pos?.left,
  zindex: styles?.other?.zindex,
  container: styles?.container?.container,
  axisx: styles?.container?.axisx,
  axisy: styles?.container?.axisy,
  animduration: styles?.anim?.animduration,
  animdelay: styles?.anim?.animdelay,
  animdistance: styles?.anim?.animdistance,
  animscale: styles?.anim?.animscale,
  animtriggeroffset: styles?.anim?.animtriggeroffset,
  animprx: styles?.anim?.animprx,
  animprxs: styles?.anim?.animprxs,
  animprxdy: styles?.anim?.animprxdy,
  animprxdx: styles?.anim?.animprxdx,
  animfix: styles?.anim?.animfix,
  animfixdist: styles?.anim?.animfixdist,
  animfixtrgofst: styles?.anim?.animfixtrgofst,
  animmobile: styles?.other?.animmobile,
  lock: styles?.other?.lock,
  // invisible,
  leftunits: styles?.pos?.leftunits,
  topunits: styles?.pos?.topunits,
  widthunits: styles?.pos?.widthunits,
  animstyle: styles?.anim?.animstyle,
  sbsevent: styles?.sbsopenbtn?.sbsevent,
  sbstrg: styles?.sbsopenbtn?.sbstrg,
  sbstrgofst: styles?.sbsopenbtn?.sbstrgofst,
  sbsloop: styles?.sbsopenbtn?.sbsloop,
  sbsopts: styles?.sbsopenbtn?.sbsopts,
  sbstrgels: styles?.sbsopenbtn?.sbstrgels,
  // layer,
  inputs: styles?.inputs?.inputs,
  // receivers,
  // receivers_names,
  inputpos: styles?.inputs?.inputpos,
  inputfontfamily: styles?.inputs?.inputfontfamily,
  inputfontsize: styles?.inputs?.inputfontsize,
  inputfontweight: styles?.inputs?.inputfontweight,
  inputvariationweight: styles?.inputs?.inputvariationweight,
  inputcolor: styles?.inputs?.inputcolor,
  inputbgcolor: styles?.inputs?.inputbgcolor,
  inputbordercolor: styles?.inputs?.inputbordercolor,
  inputbordersize: styles?.inputs?.inputbordersize,
  inputradius: styles?.inputs?.inputradius,
  inputheight: styles?.inputs?.inputheight,
  inputmargbottom: styles?.inputs?.inputmargbottom,
  inputmargright: styles?.inputs?.inputmargright,
  inputelscolor: styles?.inputs?.inputelscolor,
  inputelsfontsize: styles?.inputs?.inputelsfontsize,
  inputelsfontweight: styles?.inputs?.inputelsfontweight,
  inputelsvariationweight: styles?.inputs?.inputelsvariationweight,
  inputtitlefontsize: styles?.inputs?.inputtitlefontsize,
  inputtitlefontweight: styles?.inputs?.inputtitlefontweight,
  inputtitlevariationweight: styles?.inputs?.inputtitlevariationweight,
  inputtitlecolor: styles?.inputs?.inputtitlecolor,
  inputtitlemargbottom: styles?.inputs?.inputtitlemargbottom,
  inputsstyle: styles?.inputs?.inputsstyle,
  inputsstyle2: styles?.inputs?.inputsstyle2,
  buttontitle: styles?.button?.buttontitle,
  buttonalign: styles?.button?.buttonalign,
  buttoncolor: styles?.button?.buttoncolor,
  buttonbgcolor: styles?.button?.buttonbgcolor,
  buttonbordercolor: styles?.button?.buttonbordercolor,
  buttonbordersize: styles?.button?.buttonbordersize,
  buttonradius: styles?.button?.buttonradius,
  buttonmargtop: styles?.button?.buttonmargtop,
  buttonwidth: styles?.button?.buttonwidth,
  buttonheight: styles?.button?.buttonheight,
  buttonfontfamily: styles?.button?.buttonfontfamily,
  buttonfontsize: styles?.button?.buttonfontsize,
  buttonfontweight: styles?.button?.buttonfontweight,
  buttonvariationweight: styles?.button?.buttonvariationweight,
  buttonshadowsize: styles?.button?.buttonshadowsize,
  buttonshadowopacity: styles?.button?.buttonshadowopacity,
  formmsgsuccess: styles?.form?.formmsgsuccess,
  formmsgurl: styles?.form?.formmsgurl,
  formname: styles?.form?.formname,
  formerrreq: styles?.form?.formerrreq,
  formerremail: styles?.form?.formerremail,
  formerrphone: styles?.form?.formerrphone,
  formerrname: styles?.form?.formerrname,
  formbottomtext: styles?.form?.formbottomtext
});

var gallery = (styles) => ({
  groupid: styles?.other?.groupid,
  classname: styles?.other?.classname,
  imgs: styles?.slds?.imgs,
  width: styles?.pos?.width,
  height: styles?.pos?.height,
  filewidth: styles?.image?.filewidth,
  fileheight: styles?.image?.fileheight,
  top: styles?.pos?.top,
  left: styles?.pos?.left,
  opacity: styles?.other?.opacity,
  rotate: styles?.other?.rotate,
  zindex: styles?.other?.zindex,
  container: styles?.container?.container,
  axisx: styles?.container?.axisx,
  axisy: styles?.container?.axisy,
  lock: styles?.other?.lock,
  // invisible,
  leftunits: styles?.pos?.leftunits,
  topunits: styles?.pos?.topunits,
  widthunits: styles?.pos?.widthunits,
  heightunits: styles?.pos?.heightunits,
  lazyoff: styles?.tag?.lazyoff,
  slds_arrowsize: styles?.slds?.slds_arrowsize,
  slds_arrowlinesize: styles?.slds?.slds_arrowlinesize,
  slds_arrowcolor: styles?.slds?.slds_arrowcolor,
  slds_arrowcolorhover: styles?.slds?.slds_arrowcolorhover,
  slds_arrowbgcolor: styles?.slds?.slds_arrowbgcolor,
  slds_arrowbgcolorhover: styles?.slds?.slds_arrowbgcolorhover,
  slds_arrowbgopacity: styles?.slds?.slds_arrowbgopacity,
  slds_arrowbgopacityhover: styles?.slds?.slds_arrowbgopacityhover,
  slds_dotssize: styles?.slds?.slds_dotssize,
  slds_dotsbgcolor: styles?.slds?.slds_dotsbgcolor,
  slds_dotsbgcoloractive: styles?.slds?.slds_dotsbgcoloractive,
  slds_loop: styles?.slds?.slds_loop,
  slds_speed: styles?.slds?.slds_speed,
  slds_autoplay: styles?.slds?.slds_autoplay,
  animstyle: styles?.anim?.animstyle,
  animduration: styles?.anim?.animduration,
  animdelay: styles?.anim?.animdelay,
  animdistance: styles?.anim?.animdistance,
  animscale: styles?.anim?.animscale,
  animtriggeroffset: styles?.anim?.animtriggeroffset,
  animprx: styles?.anim?.animprx,
  animprxs: styles?.anim?.animprxs,
  animprxdy: styles?.anim?.animprxdy,
  animprxdx: styles?.anim?.animprxdx,
  animfix: styles?.anim?.animfix,
  animfixdist: styles?.anim?.animfixdist,
  animfixtrgofst: styles?.anim?.animfixtrgofst,
  animmobile: styles?.other?.animmobile,
  sbsevent: styles?.sbsopenbtn?.sbsevent,
  sbstrg: styles?.sbsopenbtn?.sbstrg,
  sbstrgofst: styles?.sbsopenbtn?.sbstrgofst,
  sbsloop: styles?.sbsopenbtn?.sbsloop,
  sbsopts: styles?.sbsopenbtn?.sbsopts,
  align: styles?.font?.align,
  color: styles?.font?.color,
  fontsize: styles?.font?.fontsize,
  // fontfamily: styles?.font?.fontfamily,
  fontweight: styles?.font?.fontweight,
  // variationweight,
  lineheight: styles?.font?.lineheight,
  letterspacing: styles?.font?.letterspacing,
  lettercase: styles?.font?.lettercase,
  // layer,
  slds_arrowcontrols: styles?.slds?.slds_arrowcontrols,
  slds_dotscontrols: styles?.slds?.slds_dotscontrols,
  slds_stretch: styles?.slds?.slds_stretch,
  slds_playiconsize: styles?.slds?.slds_playiconsize,
  slds_playiconcolor: styles?.slds?.slds_playiconcolor,
  slds_imgposition: styles?.slds?.slds_imgposition,
  slds_captiontopmargin: styles?.slds?.slds_captiontopmargin,
  slds_dotsvmargin: styles?.slds?.slds_dotsvmargin,
  slds_captionwidth: styles?.slds?.slds_captionwidth,
  slds_arrowhmargin: styles?.slds?.slds_arrowhmargin,
  slds_dotshmargin: styles?.slds?.slds_dotshmargin,
  slds_arrowvmargin: styles?.slds?.slds_arrowvmargin,
  slds_arrowbetweenmargin: styles?.slds?.slds_arrowbetweenmargin,
  slds_arrowalign: styles?.slds?.slds_arrowalign,
  slds_arrowtype: styles?.slds?.slds_arrowtype,
  sbstrgels: styles?.sbsopenbtn?.sbstrgels,
  borderwidth: styles?.border?.borderwidth,
  borderradius: styles?.border?.borderradius,
  bordercolor: styles?.border?.bordercolor,
  borderstyle: styles?.border?.borderstyle,
  shadowcolor: styles?.shadow?.shadowcolor,
  shadowopacity: styles?.shadow?.shadowopacity,
  shadowblur: styles?.shadow?.shadowblur,
  shadowspread: styles?.shadow?.shadowspread,
  shadowx: styles?.shadow?.shadowx,
  shadowy: styles?.shadow?.shadowy,
  zoomable: styles?.tag?.zoomable,
  slds_arrowborder: styles?.slds?.slds_arrowborder
});

var html = (styles) => ({
  groupid: styles?.other?.groupid,
  classname: styles?.other?.classname,
  width: styles?.pos?.width,
  height: styles?.pos?.height,
  top: styles?.pos?.top,
  left: styles?.pos?.left,
  zindex: styles?.other?.zindex,
  container: styles?.container?.container,
  axisx: styles?.container?.axisx,
  axisy: styles?.container?.axisy,
  // code,
  animduration: styles?.anim?.animduration,
  animdelay: styles?.anim?.animdelay,
  animdistance: styles?.anim?.animdistance,
  animscale: styles?.anim?.animscale,
  animtriggeroffset: styles?.anim?.animtriggeroffset,
  animprx: styles?.anim?.animprx,
  animprxs: styles?.anim?.animprxs,
  animprxdy: styles?.anim?.animprxdy,
  animprxdx: styles?.anim?.animprxdx,
  animfix: styles?.anim?.animfix,
  animfixdist: styles?.anim?.animfixdist,
  animfixtrgofst: styles?.anim?.animfixtrgofst,
  animmobile: styles?.other?.animmobile,
  lock: styles?.other?.lock,
  // invisible,
  leftunits: styles?.pos?.leftunits,
  topunits: styles?.pos?.topunits,
  widthunits: styles?.pos?.widthunits,
  heightunits: styles?.pos?.heightunits,
  animstyle: styles?.anim?.animstyle,
  sbsevent: styles?.sbsopenbtn?.sbsevent,
  sbstrg: styles?.sbsopenbtn?.sbstrg,
  sbstrgofst: styles?.sbsopenbtn?.sbstrgofst,
  sbsloop: styles?.sbsopenbtn?.sbsloop,
  sbsopts: styles?.sbsopenbtn?.sbsopts,
  sbstrgels: styles?.sbsopenbtn?.sbstrgels
  // layer,
});

var image = (styles) => ({
  // amazonsrc,
  // uploaderror,
  groupid: styles?.other?.groupid,
  classname: styles?.other?.classname,
  img: styles?.image?.img,
  width: styles?.pos?.width,
  filewidth: styles?.image?.filewidth,
  fileheight: styles?.image?.fileheight,
  top: styles?.pos?.top,
  left: styles?.pos?.left,
  opacity: styles?.other?.opacity,
  rotate: styles?.other?.rotate,
  zindex: styles?.other?.zindex,
  container: styles?.container?.container,
  axisx: styles?.container?.axisx,
  axisy: styles?.container?.axisy,
  link: styles?.link?.link,
  buttonstat: styles?.link?.buttonstat,
  linktarget: styles?.link?.linktarget,
  relnofollow: styles?.link?.relnofollow,
  borderwidth: styles?.border?.borderwidth,
  borderradius: styles?.border?.borderradius,
  bordercolor: styles?.border?.bordercolor,
  borderstyle: styles?.border?.borderstyle,
  shadowcolor: styles?.shadow?.shadowcolor,
  shadowopacity: styles?.shadow?.shadowopacity,
  shadowblur: styles?.shadow?.shadowblur,
  shadowspread: styles?.shadow?.shadowspread,
  shadowx: styles?.shadow?.shadowx,
  shadowy: styles?.shadow?.shadowy,
  alt: styles?.tag?.alt,
  animduration: styles?.anim?.animduration,
  animdelay: styles?.anim?.animdelay,
  animdistance: styles?.anim?.animdistance,
  animscale: styles?.anim?.animscale,
  animtriggeroffset: styles?.anim?.animtriggeroffset,
  animprx: styles?.anim?.animprx,
  animprxs: styles?.anim?.animprxs,
  animprxdy: styles?.anim?.animprxdy,
  animprxdx: styles?.anim?.animprxdx,
  animfix: styles?.anim?.animfix,
  animfixdist: styles?.anim?.animfixdist,
  animfixtrgofst: styles?.anim?.animfixtrgofst,
  animmobile: styles?.other?.animmobile,
  lock: styles?.other?.lock,
  // invisible,
  leftunits: styles?.pos?.leftunits,
  topunits: styles?.pos?.topunits,
  widthunits: styles?.pos?.widthunits,
  zoomable: styles?.tag?.zoomable,
  lazyoff: styles?.tag?.lazyoff,
  pevent: styles?.tag?.pevent,
  animstyle: styles?.anim?.animstyle,
  sbsevent: styles?.sbsopenbtn?.sbsevent,
  sbstrg: styles?.sbsopenbtn?.sbstrg,
  sbstrgofst: styles?.sbsopenbtn?.sbstrgofst,
  sbsloop: styles?.sbsopenbtn?.sbsloop,
  sbsopts: styles?.sbsopenbtn?.sbsopts,
  sbstrgels: styles?.sbsopenbtn?.sbstrgels,
  // layer,
  effects: styles?.other?.effects
});

var shape = (styles) => ({
  // amazonsrc,
  // uploaderror,
  groupid: styles?.other?.groupid,
  classname: styles?.other?.classname,
  width: styles?.pos?.width,
  height: styles?.pos?.height,
  // figure,
  bgcolor: styles?.other?.bgcolor,
  // bgimg,
  bgattachment: styles?.other?.bgattachment,
  bgposition: styles?.other?.bgposition,
  top: styles?.pos?.top,
  left: styles?.pos?.left,
  opacity: styles?.other?.opacity,
  rotate: styles?.other?.rotate,
  zindex: styles?.other?.zindex,
  container: styles?.container?.container,
  axisx: styles?.container?.axisx,
  axisy: styles?.container?.axisy,
  link: styles?.link?.link,
  buttonstat: styles?.link?.buttonstat,
  linktarget: styles?.link?.linktarget,
  relnofollow: styles?.link?.relnofollow,
  borderwidth: styles?.border?.borderwidth,
  borderradius: styles?.border?.borderradius,
  bordercolor: styles?.border?.bordercolor,
  borderstyle: styles?.border?.borderstyle,
  shadowcolor: styles?.shadow?.shadowcolor,
  shadowopacity: styles?.shadow?.shadowopacity,
  shadowblur: styles?.shadow?.shadowblur,
  shadowspread: styles?.shadow?.shadowspread,
  shadowx: styles?.shadow?.shadowx,
  shadowy: styles?.shadow?.shadowy,
  animduration: styles?.anim?.animduration,
  animdelay: styles?.anim?.animdelay,
  animdistance: styles?.anim?.animdistance,
  animscale: styles?.anim?.animscale,
  animtriggeroffset: styles?.anim?.animtriggeroffset,
  animprx: styles?.anim?.animprx,
  animprxs: styles?.anim?.animprxs,
  animprxdy: styles?.anim?.animprxdy,
  animprxdx: styles?.anim?.animprxdx,
  animfix: styles?.anim?.animfix,
  animfixdist: styles?.anim?.animfixdist,
  animfixtrgofst: styles?.anim?.animfixtrgofst,
  animmobile: styles?.other?.animmobile,
  lock: styles?.other?.lock,
  // invisible,
  leftunits: styles?.pos?.leftunits,
  topunits: styles?.pos?.topunits,
  widthunits: styles?.pos?.widthunits,
  heightunits: styles?.pos?.heightunits,
  zoomable: styles?.tag?.zoomable,
  lazyoff: styles?.tag?.lazyoff,
  pevent: styles?.tag?.pevent,
  animstyle: styles?.anim?.animstyle,
  sbsevent: styles?.sbsopenbtn?.sbsevent,
  sbstrg: styles?.sbsopenbtn?.sbstrg,
  sbstrgofst: styles?.sbsopenbtn?.sbstrgofst,
  sbsloop: styles?.sbsopenbtn?.sbsloop,
  sbsopts: styles?.sbsopenbtn?.sbsopts,
  sbstrgels: styles?.sbsopenbtn?.sbstrgels,
  // layer,
  effects: styles?.other?.effects
});

var text = (styles) => ({
  groupid: styles?.other?.groupid,
  classname: styles?.other?.classname,
  top: styles?.pos?.top,
  left: styles?.pos?.left,
  align: styles?.font?.align,
  fontsize: styles?.font?.fontsize,
  width: styles?.pos?.width,
  color: styles?.font?.color,
  // fontfamily: styles?.font?.fontfamily,
  lineheight: styles?.font?.lineheight,
  fontweight: styles?.font?.fontweight,
  // variationweight,
  letterspacing: styles?.font?.letterspacing,
  lettercase: styles?.font?.lettercase,
  opacity: styles?.other?.opacity,
  rotate: styles?.other?.rotate,
  zindex: styles?.other?.zindex,
  container: styles?.container?.container,
  axisx: styles?.container?.axisx,
  axisy: styles?.container?.axisy,
  tag: styles?.tag?.tag,
  link: styles?.link?.link,
  linktarget: styles?.link?.linktarget,
  relnofollow: styles?.link?.relnofollow,
  animduration: styles?.anim?.animduration,
  animdelay: styles?.anim?.animdelay,
  animdistance: styles?.anim?.animdistance,
  animscale: styles?.anim?.animscale,
  animtriggeroffset: styles?.anim?.animtriggeroffset,
  animprx: styles?.anim?.animprx,
  animprxs: styles?.anim?.animprxs,
  animprxdy: styles?.anim?.animprxdy,
  animprxdx: styles?.anim?.animprxdx,
  animfix: styles?.anim?.animfix,
  animfixdist: styles?.anim?.animfixdist,
  animfixtrgofst: styles?.anim?.animfixtrgofst,
  animmobile: styles?.other?.animmobile,
  lock: styles?.other?.lock,
  // invisible,
  leftunits: styles?.pos?.leftunits,
  topunits: styles?.pos?.topunits,
  widthunits: styles?.pos?.widthunits,
  pevent: styles?.tag?.pevent,
  animstyle: styles?.anim?.animstyle,
  sbsevent: styles?.sbsopenbtn?.sbsevent,
  sbstrg: styles?.sbsopenbtn?.sbstrg,
  sbstrgofst: styles?.sbsopenbtn?.sbstrgofst,
  sbsloop: styles?.sbsopenbtn?.sbsloop,
  sbsopts: styles?.sbsopenbtn?.sbsopts,
  sbstrgels: styles?.sbsopenbtn?.sbstrgels,
  // layer,
  effects: styles?.other?.effects
});

var tooltip = (styles) => ({
  groupid: styles?.other?.groupid,
  classname: styles?.other?.classname,
  width: styles?.pos?.width,
  align: styles?.font?.align,
  // bgimg,
  fontsize: styles?.font?.fontsize,
  bgcolor: styles?.other?.bgcolor,
  borderwidth: styles?.border?.borderwidth,
  bordercolor: styles?.border?.bordercolor,
  top: styles?.pos?.top,
  left: styles?.pos?.left,
  opacity: styles?.other?.opacity,
  color: styles?.font?.color,
  // fontfamily: styles?.font?.fontfamily,
  lineheight: styles?.font?.lineheight,
  fontweight: styles?.font?.fontweight,
  // variationweight,
  letterspacing: styles?.font?.letterspacing,
  lettercase: styles?.font?.lettercase,
  zindex: styles?.other?.zindex,
  container: styles?.container?.container,
  axisx: styles?.container?.axisx,
  axisy: styles?.container?.axisy,
  shadowcolor: styles?.shadow?.shadowcolor,
  shadowopacity: styles?.shadow?.shadowopacity,
  shadowblur: styles?.shadow?.shadowblur,
  shadowspread: styles?.shadow?.shadowspread,
  shadowx: styles?.shadow?.shadowx,
  shadowy: styles?.shadow?.shadowy,
  lock: styles?.other?.lock,
  // invisible,
  leftunits: styles?.pos?.leftunits,
  topunits: styles?.pos?.topunits,
  // pinicon,
  // pincolor,
  tipimg: styles?.tip?.tipimg,
  tipbgcolor: styles?.tip?.tipbgcolor,
  tipradius: styles?.tip?.tipradius,
  tipshadowblur: styles?.tip?.tipshadowblur,
  tipwidth: styles?.tip?.tipwidth,
  tipposition: styles?.tip?.tipposition,
  tipopen: styles?.tip?.tipopen,
  animduration: styles?.anim?.animduration,
  animdelay: styles?.anim?.animdelay,
  animdistance: styles?.anim?.animdistance,
  animscale: styles?.anim?.animscale,
  animtriggeroffset: styles?.anim?.animtriggeroffset,
  animprx: styles?.anim?.animprx,
  animprxs: styles?.anim?.animprxs,
  animprxdy: styles?.anim?.animprxdy,
  animprxdx: styles?.anim?.animprxdx,
  animfix: styles?.anim?.animfix,
  animfixdist: styles?.anim?.animfixdist,
  animfixtrgofst: styles?.anim?.animfixtrgofst,
  animmobile: styles?.other?.animmobile,
  animstyle: styles?.anim?.animstyle,
  sbsevent: styles?.sbsopenbtn?.sbsevent,
  sbstrg: styles?.sbsopenbtn?.sbstrg,
  sbstrgofst: styles?.sbsopenbtn?.sbstrgofst,
  sbsloop: styles?.sbsopenbtn?.sbsloop,
  sbsopts: styles?.sbsopenbtn?.sbsopts,
  sbstrgels: styles?.sbsopenbtn?.sbstrgels
  // layer,
});

var video = (styles) => ({
  groupid: styles?.other?.groupid,
  classname: styles?.other?.classname,
  width: styles?.pos?.width,
  height: styles?.pos?.height,
  // bgimg,
  top: styles?.pos?.top,
  left: styles?.pos?.left,
  opacity: styles?.other?.opacity,
  rotate: styles?.other?.rotate,
  zindex: styles?.other?.zindex,
  container: styles?.container?.container,
  axisx: styles?.container?.axisx,
  axisy: styles?.container?.axisy,
  // vidtype,
  // youtubeid,
  // vimeoid,
  // showinfo,
  mute: styles?.videosett?.mute,
  loop: styles?.videosett?.loop,
  autoplay: styles?.videosett?.autoplay,
  startsec: styles?.videosett?.startsec,
  endsec: styles?.videosett?.endsec,
  shadowcolor: styles?.shadow?.shadowcolor,
  shadowopacity: styles?.shadow?.shadowopacity,
  shadowblur: styles?.shadow?.shadowblur,
  shadowspread: styles?.shadow?.shadowspread,
  shadowx: styles?.shadow?.shadowx,
  shadowy: styles?.shadow?.shadowy,
  animduration: styles?.anim?.animduration,
  animdelay: styles?.anim?.animdelay,
  animdistance: styles?.anim?.animdistance,
  animscale: styles?.anim?.animscale,
  animtriggeroffset: styles?.anim?.animtriggeroffset,
  animprx: styles?.anim?.animprx,
  animprxs: styles?.anim?.animprxs,
  animprxdy: styles?.anim?.animprxdy,
  animprxdx: styles?.anim?.animprxdx,
  animfix: styles?.anim?.animfix,
  animfixdist: styles?.anim?.animfixdist,
  animfixtrgofst: styles?.anim?.animfixtrgofst,
  animmobile: styles?.other?.animmobile,
  lock: styles?.other?.lock,
  // invisible,
  leftunits: styles?.pos?.leftunits,
  topunits: styles?.pos?.topunits,
  widthunits: styles?.pos?.widthunits,
  heightunits: styles?.pos?.heightunits,
  animstyle: styles?.anim?.animstyle,
  sbsevent: styles?.sbsopenbtn?.sbsevent,
  sbstrg: styles?.sbsopenbtn?.sbstrg,
  sbstrgofst: styles?.sbsopenbtn?.sbstrgofst,
  sbsloop: styles?.sbsopenbtn?.sbsloop,
  sbsopts: styles?.sbsopenbtn?.sbsopts,
  sbstrgels: styles?.sbsopenbtn?.sbstrgels
  // layer,
});

class Tilda {
  html;
  id;
  recordId;
  NodeListHtml;
  mode;
  /**
   * Конструктор.
   */
  constructor(html2, id, mode) {
    this.html = html2;
    this.id = id;
    this.recordId = `#rec${id}`;
    this.mode = mode;
  }
  /**
   */
  getRecordId = (elem) => {
    try {
      if (!this.NodeListHtml) {
        const $ = cheerio.load(this.html);
        this.NodeListHtml = (data) => $(data);
      }
      ;
      return this.NodeListHtml(elem ? elem : this.recordId);
    } catch (err) {
      console.log("Error getRecordId: ", err);
      return {};
    }
  };
  /**
   * Получение css стилей.
   */
  getCssObjRecordId = () => cssToObject.cssToObject(this.getRecordId().find("style").html(), { numbers: true, camel: true });
  /**
   * Получение списка атрибутов.
   */
  getAttrElemId = (elem, res) => {
    try {
      const node = this.getRecordId(elem).get(0), obj = {};
      if (!node)
        throw "this.getRecordId(elem).get(0)";
      Object.keys(node.attribs).map((name) => obj[name.includes(res) && node.attribs[name] && node.attribs[name] !== "" && name.replace(res, "").replace("data-field-", "").replace("-value", "")] = node.attribs[name]);
      return obj;
    } catch (err) {
      console.log("Error getAttrElemId: ", err);
      return {};
    }
  };
  /**
   * Получение всех стилей эллемента.
   */
  getAdaptiveElemStyles = (elem, elemId, constElemStyles) => {
    try {
      const res0 = this.getCssObjRecordId(), res320 = this.getCssObjRecordId()?.["@media screen and (max-width: 479px)"], res480 = this.getCssObjRecordId()?.["@media screen and (max-width: 639px)"], res640 = this.getCssObjRecordId()?.["@media screen and (max-width: 959px)"], res960 = this.getCssObjRecordId()?.["@media screen and (max-width: 1199px)"];
      const size = [
        { res: "", data: res0 },
        { res: "-res-320", data: res320 },
        { res: "-res-480", data: res480 },
        { res: "-res-640", data: res640 },
        { res: "-res-960", data: res960 }
      ];
      const id = `${this.recordId} .tn-elem[data-elem-id="${elemId}"]`, adaptiveElemStyles = {};
      size.forEach((s) => {
        const elemStyles = constElemStyles(styles({ ...s.data?.[id], ...s.data?.[id + " .tn-atom"], "hover": s.data?.[id + " .tn-atom:hover"], "tip": s.data?.[id + " .tn-atom__tip"] }, this.getAttrElemId(elem, s.res))), newElemStyles = {};
        Object.keys(elemStyles).map((style) => newElemStyles[style + s.res] = elemStyles[style]);
        return Object.assign(adaptiveElemStyles, newElemStyles);
      });
      return adaptiveElemStyles;
    } catch (err) {
      console.log("Error getAdaptiveElemStyles: ", err);
      return {};
    }
  };
  /**
   * Фон z-block.
   * @return {{*}} obj.
   */
  getAdaptiveAB = () => {
    try {
      const res0 = this.getCssObjRecordId(), res320 = this.getCssObjRecordId()?.["@media screen and (max-width: 479px)"], res480 = this.getCssObjRecordId()?.["@media screen and (max-width: 639px)"], res640 = this.getCssObjRecordId()?.["@media screen and (max-width: 959px)"], res960 = this.getCssObjRecordId()?.["@media screen and (max-width: 1199px)"];
      const size = [
        { res: "", data: res0 },
        { res: "-res-320", data: res320 },
        { res: "-res-480", data: res480 },
        { res: "-res-640", data: res640 },
        { res: "-res-960", data: res960 }
      ];
      const adaptiveElemStyles = {};
      size.forEach((s) => {
        const elemId = `[data-artboard-recid="${this.id}"]`;
        const elemStyles = ab(
          s.res === "" && this.getRecordId(elemId),
          {
            artboard: s.data?.[`${this.recordId} .t396__artboard`],
            carrier: s.data?.[`${this.recordId} .t396__carrier`],
            filter: s.data?.[`${this.recordId} .t396__filter`]
          },
          this.getAttrElemId(elemId, s.res)
        ), newElemStyles = {};
        Object.keys(elemStyles).map((style) => newElemStyles[style + s.res] = elemStyles[style]);
        return Object.assign(adaptiveElemStyles, newElemStyles);
      });
      return JSON.parse(JSON.stringify(adaptiveElemStyles));
    } catch (err) {
      console.log("Error getAdaptiveAB: ", err);
      return {};
    }
  };
  /**
   * Получение стилей элемента.
   * @return {{*}} obj.
   */
  getElemStyles = (elem) => {
    try {
      const elemId = this.getRecordId(elem).attr("data-elem-id"), elemType = this.getRecordId(elem).attr("data-elem-type"), link = {
        link: this.getRecordId(elem).find("a").attr("href"),
        linktarget: this.getRecordId(elem).find("a").attr("target"),
        relnofollow: this.getRecordId(elem).find("a").attr("rel")
      }, font = {
        fontfamily: "TildaSans"
      }, img = this.getRecordId(elem).find("img").attr("data-original") || this.getRecordId(elem).find("img").attr("src"), bgimg = this.getRecordId(elem).find(".t-bgimg").attr("data-original") || cssToObject.cssToObject(this.getRecordId(elem).find(".tn-atom").attr("style") || "", { numbers: true })?.["background-image"]?.match(/url\(["']?([^"']*)["']?\)/)?.[1], tipimg = this.getRecordId(elem).find("img").attr("data-tipimg-original") || this.getRecordId(elem).find("img").attr("src"), result = {};
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
            zoomable: this.getRecordId(elem).find("img").parent().attr("data-zoomable") === "yes" ? "y" : void 0
          });
          break;
        case "shape":
          Object.assign(result, {
            ...this.getAdaptiveElemStyles(elem, elemId, shape),
            figure: "rectangle",
            bgimg,
            zoomable: this.getRecordId(elem).children().attr("data-zoomable") === "yes" ? "y" : void 0
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
      }
      ;
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
    }
  };
  /**
   * Получает стили всех эллементов.
   */
  getElementsRecordId = () => {
    try {
      return this.getRecordId().find(".t396__elem").toArray().map((elem) => this.getElemStyles(elem));
    } catch (err) {
      console.log("Error getElementsRecordId: ", err);
    }
  };
  /**
   * Получает скрипт "cоздания z-block и редактирования его содержимого".
   */
  getReqestCode = (code, codes) => {
    try {
      let result = `let success=0,error=0;const pageid=window.pageid,httpBuildQuery=(object)=>{const params=new URLSearchParams(),paramsGenerator=(parent_key,iterate_object)=>{for(let current_key in iterate_object){let property_path;if(typeof iterate_object[current_key]=="string"||typeof iterate_object[current_key]=="number"){if(parent_key.length>0)property_path=parent_key+"["+current_key+"]";else property_path=current_key;params.append(property_path,iterate_object[current_key])}else if(typeof iterate_object[current_key]=="object"){if(parent_key.length>0)property_path=parent_key+"["+current_key+"]";else property_path=current_key;paramsGenerator(property_path,iterate_object[current_key])}}};paramsGenerator("",object);return params.toString()},log=(message="")=>{console.clear();console.log("%c"+message,"color:#fff;background-color:#fa8669;font-size:large;")},statistics=(count)=>{console.clear();console.log("%c\u0421\u043E\u0437\u0434\u0430\u043D\u043E: "+success+" \u0438\u0437 "+count+"; \u041E\u0448\u0438\u0431\u043E\u043A: "+error,"color:#fff;background-color:#fa8669;font-size:large;")};`;
      if (code) {
        result += `$.ajax({url:"/page/submit/",type:"POST",data:{comm:"addnewrecord",pageid,afterid:"",tplid:396},dataType:"text",success:(t)=>{const recordid=$(t).attr("recordid");$.ajax({type:"POST",url:"/zero/submit/",data:httpBuildQuery({comm:"savezerocode",pageid,recordid,onlythisfield:"code",fromzero:"yes",code:${code}}),dataType:"text",success:()=>location.reload(),error:()=>log("\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 Tilda")})},error:()=>log("\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 Tilda")});`;
      } else if (codes) {
        for (const [i, code2] of codes.entries()) {
          const newCode = `$.ajax({url:"/page/submit/",type:"POST",data:{comm:"addnewrecord",pageid,afterid:"",tplid:396},dataType:"text",success:(t)=>{const recordid=$(t).attr("recordid");$.ajax({type:"POST",url:"/zero/submit/",data:httpBuildQuery({comm:"savezerocode",pageid,recordid,onlythisfield:"code",fromzero:"yes",code:${code2}}),dataType:"text",success:()=>{success++;statistics(${codes.length});NEXTCODE},error:()=>{error++;statistics(${codes.length});NEXTCODE}});},error:()=>{error++;statistics(${codes.length});NEXTCODE}});`;
          if (result.includes("NEXTCODE")) {
            result = result.replace("NEXTCODE", newCode);
          } else {
            result += newCode;
          }
          ;
          if (i === codes.length - 1) {
            result = result.replace("NEXTCODE", "location.reload();");
          }
          ;
        }
        ;
      }
      ;
      return result;
    } catch (err) {
      console.log("Error getReqestCode: ", err);
      return "";
    }
  };
  /**
   * Код для вставки в консоль браузера.
   */
  getCode = () => {
    if (this.mode === "all") {
      const codes = [];
      for (let id of this.getIdBlocks()) {
        this.id = id;
        this.recordId = `#rec${id}`;
        codes.push(JSON.stringify(JSON.stringify({
          ...this.getElementsRecordId(),
          ...this.getAdaptiveAB(),
          timestamp: (/* @__PURE__ */ new Date()).getTime()
        })));
      }
      return this.getReqestCode(void 0, codes);
    } else {
      const code = JSON.stringify(JSON.stringify({
        ...this.getElementsRecordId(),
        ...this.getAdaptiveAB(),
        timestamp: (/* @__PURE__ */ new Date()).getTime()
      }));
      return this.getReqestCode(code);
    }
  };
  /**
   * Зашифрованный код для вставки в консоль браузера.
   * @return {string}
   */
  getCodeEncrypted = () => Buffer.from(this.getCode()).toString("base64");
  /**
   * Получение списка блоков id.
   */
  getIdBlocks = (id = "396") => {
    const idBlocks = [];
    try {
      this.getRecordId("div").toArray().map((item) => this.getRecordId(item)?.attr("data-record-type") === id && idBlocks.push(this.getRecordId(item)?.attr("id")?.replace("rec", "")));
    } catch (err) {
      console.log("Error getIdBlocks: ", err);
    }
    return idBlocks;
  };
}

exports.Tilda = Tilda;
