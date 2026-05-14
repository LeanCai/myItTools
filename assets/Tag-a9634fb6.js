import{aB as so,bC as to,aD as e,E as io,H as u,aE as k,aG as I,D as z,d as ho,I as go,a as w,J as N,ax as bo,Z as Co,L as d,ba as vo,M as uo,aJ as D,P as x,bs as po,aq as fo,x as mo,az as ko,aL as xo}from"./index-14a7552b.js";import{c as U}from"./color-to-class-8578b472.js";function Po(a){const{textColor2:g,primaryColorHover:r,primaryColorPressed:p,primaryColor:c,infoColor:i,successColor:n,warningColor:s,errorColor:t,baseColor:f,borderColor:m,opacityDisabled:b,tagColor:S,closeIconColor:P,closeIconColorHover:v,closeIconColorPressed:o,borderRadiusSmall:l,fontSizeMini:C,fontSizeTiny:h,fontSizeSmall:B,fontSizeMedium:$,heightMini:H,heightTiny:R,heightSmall:_,heightMedium:M,closeColorHover:T,closeColorPressed:E,buttonColor2Hover:O,buttonColor2Pressed:W,fontWeightStrong:j}=a;return Object.assign(Object.assign({},to),{closeBorderRadius:l,heightTiny:H,heightSmall:R,heightMedium:_,heightLarge:M,borderRadius:l,opacityDisabled:b,fontSizeTiny:C,fontSizeSmall:h,fontSizeMedium:B,fontSizeLarge:$,fontWeightStrong:j,textColorCheckable:g,textColorHoverCheckable:g,textColorPressedCheckable:g,textColorChecked:f,colorCheckable:"#0000",colorHoverCheckable:O,colorPressedCheckable:W,colorChecked:c,colorCheckedHover:r,colorCheckedPressed:p,border:`1px solid ${m}`,textColor:g,color:S,colorBordered:"rgb(250, 250, 252)",closeIconColor:P,closeIconColorHover:v,closeIconColorPressed:o,closeColorHover:T,closeColorPressed:E,borderPrimary:`1px solid ${e(c,{alpha:.3})}`,textColorPrimary:c,colorPrimary:e(c,{alpha:.12}),colorBorderedPrimary:e(c,{alpha:.1}),closeIconColorPrimary:c,closeIconColorHoverPrimary:c,closeIconColorPressedPrimary:c,closeColorHoverPrimary:e(c,{alpha:.12}),closeColorPressedPrimary:e(c,{alpha:.18}),borderInfo:`1px solid ${e(i,{alpha:.3})}`,textColorInfo:i,colorInfo:e(i,{alpha:.12}),colorBorderedInfo:e(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:e(i,{alpha:.12}),closeColorPressedInfo:e(i,{alpha:.18}),borderSuccess:`1px solid ${e(n,{alpha:.3})}`,textColorSuccess:n,colorSuccess:e(n,{alpha:.12}),colorBorderedSuccess:e(n,{alpha:.1}),closeIconColorSuccess:n,closeIconColorHoverSuccess:n,closeIconColorPressedSuccess:n,closeColorHoverSuccess:e(n,{alpha:.12}),closeColorPressedSuccess:e(n,{alpha:.18}),borderWarning:`1px solid ${e(s,{alpha:.35})}`,textColorWarning:s,colorWarning:e(s,{alpha:.15}),colorBorderedWarning:e(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:e(s,{alpha:.12}),closeColorPressedWarning:e(s,{alpha:.18}),borderError:`1px solid ${e(t,{alpha:.23})}`,textColorError:t,colorError:e(t,{alpha:.1}),colorBorderedError:e(t,{alpha:.08}),closeIconColorError:t,closeIconColorHoverError:t,closeIconColorPressedError:t,closeColorHoverError:e(t,{alpha:.12}),closeColorPressedError:e(t,{alpha:.18})})}const yo={name:"Tag",common:so,self:Po},Io=yo,zo={color:Object,type:{type:String,default:"default"},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},So=io("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[u("strong",`
 font-weight: var(--n-font-weight-strong);
 `),k("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),k("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),k("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),k("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),u("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[k("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),k("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),u("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),u("icon, avatar",[u("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),u("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),u("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[I("disabled",[z("&:hover","background-color: var(--n-color-hover-checkable);",[I("checked","color: var(--n-text-color-hover-checkable);")]),z("&:active","background-color: var(--n-color-pressed-checkable);",[I("checked","color: var(--n-text-color-pressed-checkable);")])]),u("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[I("disabled",[z("&:hover","background-color: var(--n-color-checked-hover);"),z("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Bo=Object.assign(Object.assign(Object.assign({},N.props),zo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),$o=fo("n-tag"),_o=ho({name:"Tag",props:Bo,slots:Object,setup(a){const g=mo(null),{mergedBorderedRef:r,mergedClsPrefixRef:p,inlineThemeDisabled:c,mergedRtlRef:i,mergedComponentPropsRef:n}=go(a),s=w(()=>{var o,l;return a.size||((l=(o=n?.value)===null||o===void 0?void 0:o.Tag)===null||l===void 0?void 0:l.size)||"medium"}),t=N("Tag","-tag",So,Io,a,p);bo($o,{roundRef:ko(a,"round")});function f(){if(!a.disabled&&a.checkable){const{checked:o,onCheckedChange:l,onUpdateChecked:C,"onUpdate:checked":h}=a;C&&C(!o),h&&h(!o),l&&l(!o)}}function m(o){if(a.triggerClickOnClose||o.stopPropagation(),!a.disabled){const{onClose:l}=a;l&&xo(l,o)}}const b={setTextContent(o){const{value:l}=g;l&&(l.textContent=o)}},S=Co("Tag",i,p),P=w(()=>{const{type:o,color:{color:l,textColor:C}={}}=a,h=s.value,{common:{cubicBezierEaseInOut:B},self:{padding:$,closeMargin:H,borderRadius:R,opacityDisabled:_,textColorCheckable:M,textColorHoverCheckable:T,textColorPressedCheckable:E,textColorChecked:O,colorCheckable:W,colorHoverCheckable:j,colorPressedCheckable:V,colorChecked:K,colorCheckedHover:J,colorCheckedPressed:q,closeBorderRadius:A,fontWeightStrong:G,[d("colorBordered",o)]:Z,[d("closeSize",h)]:Q,[d("closeIconSize",h)]:X,[d("fontSize",h)]:Y,[d("height",h)]:F,[d("color",o)]:oo,[d("textColor",o)]:eo,[d("border",o)]:ro,[d("closeIconColor",o)]:L,[d("closeIconColorHover",o)]:lo,[d("closeIconColorPressed",o)]:ao,[d("closeColorHover",o)]:co,[d("closeColorPressed",o)]:no}}=t.value,y=vo(H);return{"--n-font-weight-strong":G,"--n-avatar-size-override":`calc(${F} - 8px)`,"--n-bezier":B,"--n-border-radius":R,"--n-border":ro,"--n-close-icon-size":X,"--n-close-color-pressed":no,"--n-close-color-hover":co,"--n-close-border-radius":A,"--n-close-icon-color":L,"--n-close-icon-color-hover":lo,"--n-close-icon-color-pressed":ao,"--n-close-icon-color-disabled":L,"--n-close-margin-top":y.top,"--n-close-margin-right":y.right,"--n-close-margin-bottom":y.bottom,"--n-close-margin-left":y.left,"--n-close-size":Q,"--n-color":l||(r.value?Z:oo),"--n-color-checkable":W,"--n-color-checked":K,"--n-color-checked-hover":J,"--n-color-checked-pressed":q,"--n-color-hover-checkable":j,"--n-color-pressed-checkable":V,"--n-font-size":Y,"--n-height":F,"--n-opacity-disabled":_,"--n-padding":$,"--n-text-color":C||eo,"--n-text-color-checkable":M,"--n-text-color-checked":O,"--n-text-color-hover-checkable":T,"--n-text-color-pressed-checkable":E}}),v=c?uo("tag",w(()=>{let o="";const{type:l,color:{color:C,textColor:h}={}}=a;return o+=l[0],o+=s.value[0],C&&(o+=`a${U(C)}`),h&&(o+=`b${U(h)}`),r.value&&(o+="c"),o}),P,a):void 0;return Object.assign(Object.assign({},b),{rtlEnabled:S,mergedClsPrefix:p,contentRef:g,mergedBordered:r,handleClick:f,handleCloseClick:m,cssVars:c?void 0:P,themeClass:v?.themeClass,onRender:v?.onRender})},render(){var a,g;const{mergedClsPrefix:r,rtlEnabled:p,closable:c,color:{borderColor:i}={},round:n,onRender:s,$slots:t}=this;s?.();const f=D(t.avatar,b=>b&&x("div",{class:`${r}-tag__avatar`},b)),m=D(t.icon,b=>b&&x("div",{class:`${r}-tag__icon`},b));return x("div",{class:[`${r}-tag`,this.themeClass,{[`${r}-tag--rtl`]:p,[`${r}-tag--strong`]:this.strong,[`${r}-tag--disabled`]:this.disabled,[`${r}-tag--checkable`]:this.checkable,[`${r}-tag--checked`]:this.checkable&&this.checked,[`${r}-tag--round`]:n,[`${r}-tag--avatar`]:f,[`${r}-tag--icon`]:m,[`${r}-tag--closable`]:c}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},m||f,x("span",{class:`${r}-tag__content`,ref:"contentRef"},(g=(a=this.$slots).default)===null||g===void 0?void 0:g.call(a)),!this.checkable&&c?x(po,{clsPrefix:r,class:`${r}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:n,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?x("div",{class:`${r}-tag__border`,style:{borderColor:i}}):null)}});export{_o as _};
