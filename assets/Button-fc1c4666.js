import{D as b,aM as Be,E as O,d as oe,b8 as Pe,az as Te,an as ke,b6 as Re,P as p,x as k,bc as re,aq as He,H as x,aE as d,aG as U,aF as Ee,J as te,at as Ie,ar as _e,I as Oe,a as E,b0 as je,Z as De,L as r,aD as I,M as Fe,aJ as Z,bd as Me,aI as Ne,aK as Ke,Q as Ge,aL as Ve}from"./index-d5951ac2.js";import{i as j}from"./is-browser-fc34c9a6.js";import{u as We}from"./use-form-item-fed27f35.js";import{c as ee}from"./color-to-class-8578b472.js";const{cubicBezierEaseInOut:C}=Be;function qe({duration:e=".2s",delay:f=".1s"}={}){return[b("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),b("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),b("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${C},
 max-width ${e} ${C} ${f},
 margin-left ${e} ${C} ${f},
 margin-right ${e} ${C} ${f};
 `),b("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${C} ${f},
 max-width ${e} ${C},
 margin-left ${e} ${C},
 margin-right ${e} ${C};
 `)]}const Qe=O("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Le=oe({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){Pe("-base-wave",Qe,Te(e,"clsPrefix"));const f=k(null),h=k(!1);let u=null;return ke(()=>{u!==null&&window.clearTimeout(u)}),{active:h,selfRef:f,play(){u!==null&&(window.clearTimeout(u),h.value=!1,u=null),Re(()=>{var v;(v=f.value)===null||v===void 0||v.offsetHeight,h.value=!0,u=window.setTimeout(()=>{h.value=!1,u=null},1e3)})}}},render(){const{clsPrefix:e}=this;return p("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),Ae=j&&"chrome"in window;j&&navigator.userAgent.includes("Firefox");const Je=j&&navigator.userAgent.includes("Safari")&&!Ae;function S(e){return re(e,[255,255,255,.16])}function _(e){return re(e,[0,0,0,.12])}const Xe=He("n-button-group"),Ye=b([O("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("color",[d("border",{borderColor:"var(--n-border-color)"}),x("disabled",[d("border",{borderColor:"var(--n-border-color-disabled)"})]),U("disabled",[b("&:focus",[d("state-border",{borderColor:"var(--n-border-color-focus)"})]),b("&:hover",[d("state-border",{borderColor:"var(--n-border-color-hover)"})]),b("&:active",[d("state-border",{borderColor:"var(--n-border-color-pressed)"})]),x("pressed",[d("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),x("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[d("border",{border:"var(--n-border-disabled)"})]),U("disabled",[b("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[d("state-border",{border:"var(--n-border-focus)"})]),b("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[d("state-border",{border:"var(--n-border-hover)"})]),b("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[d("state-border",{border:"var(--n-border-pressed)"})]),x("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[d("state-border",{border:"var(--n-border-pressed)"})])]),x("loading","cursor: wait;"),O("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[x("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),j&&"MozBoxSizing"in document.createElement("div").style?b("&::moz-focus-inner",{border:0}):null,d("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),d("border",`
 border: var(--n-border);
 `),d("state-border",`
 border: var(--n-border);
 border-color: #0000;
 z-index: 1;
 `),d("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[O("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Ee({top:"50%",originalTransform:"translateY(-50%)"})]),qe()]),d("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[b("~",[d("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),x("block",`
 display: flex;
 width: 100%;
 `),x("dashed",[d("border, state-border",{borderStyle:"dashed !important"})]),x("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),b("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),b("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),Ue=Object.assign(Object.assign({},te.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!Je},spinProps:Object}),ne=oe({name:"Button",props:Ue,slots:Object,setup(e){const f=k(null),h=k(null),u=k(!1),v=Ie(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),ie=_e(Xe,{}),{inlineThemeDisabled:L,mergedClsPrefixRef:D,mergedRtlRef:ae,mergedComponentPropsRef:F}=Oe(e),{mergedSizeRef:M}=We({},{defaultSize:"medium",mergedSize:t=>{var l,m;const{size:o}=e;if(o)return o;const{size:P}=ie;if(P)return P;const{mergedSize:w}=t||{};if(w)return w.value;const T=(m=(l=F?.value)===null||l===void 0?void 0:l.Button)===null||m===void 0?void 0:m.size;return T||"medium"}}),N=E(()=>e.focusable&&!e.disabled),se=t=>{var l;N.value||t.preventDefault(),!e.nativeFocusBehavior&&(t.preventDefault(),!e.disabled&&N.value&&((l=f.value)===null||l===void 0||l.focus({preventScroll:!0})))},le=t=>{var l;if(!e.disabled&&!e.loading){const{onClick:m}=e;m&&Ve(m,t),e.text||(l=h.value)===null||l===void 0||l.play()}},de=t=>{switch(t.key){case"Enter":if(!e.keyboard)return;u.value=!1}},ce=t=>{switch(t.key){case"Enter":if(!e.keyboard||e.loading){t.preventDefault();return}u.value=!0}},ue=()=>{u.value=!1},be=te("Button","-button",Ye,je,e,D),fe=De("Button",ae,D),A=E(()=>{const t=be.value,{common:{cubicBezierEaseInOut:l,cubicBezierEaseOut:m},self:o}=t,{rippleDuration:P,opacityDisabled:w,fontWeight:T,fontWeightStrong:K}=o,g=M.value,{dashed:G,type:z,ghost:V,text:y,color:i,round:J,circle:W,textColor:$,secondary:he,tertiary:X,quaternary:ve,strong:pe}=e,me={"--n-font-weight":pe?K:T};let a={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const R=z==="tertiary",Y=z==="default",n=R?"default":z;if(y){const s=$||i;a={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":s||o[r("textColorText",n)],"--n-text-color-hover":s?S(s):o[r("textColorTextHover",n)],"--n-text-color-pressed":s?_(s):o[r("textColorTextPressed",n)],"--n-text-color-focus":s?S(s):o[r("textColorTextHover",n)],"--n-text-color-disabled":s||o[r("textColorTextDisabled",n)]}}else if(V||G){const s=$||i;a={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":i||o[r("rippleColor",n)],"--n-text-color":s||o[r("textColorGhost",n)],"--n-text-color-hover":s?S(s):o[r("textColorGhostHover",n)],"--n-text-color-pressed":s?_(s):o[r("textColorGhostPressed",n)],"--n-text-color-focus":s?S(s):o[r("textColorGhostHover",n)],"--n-text-color-disabled":s||o[r("textColorGhostDisabled",n)]}}else if(he){const s=Y?o.textColor:R?o.textColorTertiary:o[r("color",n)],c=i||s,H=z!=="default"&&z!=="tertiary";a={"--n-color":H?I(c,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":H?I(c,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":H?I(c,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":H?I(c,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":c,"--n-text-color-hover":c,"--n-text-color-pressed":c,"--n-text-color-focus":c,"--n-text-color-disabled":c}}else if(X||ve){const s=Y?o.textColor:R?o.textColorTertiary:o[r("color",n)],c=i||s;X?(a["--n-color"]=o.colorTertiary,a["--n-color-hover"]=o.colorTertiaryHover,a["--n-color-pressed"]=o.colorTertiaryPressed,a["--n-color-focus"]=o.colorSecondaryHover,a["--n-color-disabled"]=o.colorTertiary):(a["--n-color"]=o.colorQuaternary,a["--n-color-hover"]=o.colorQuaternaryHover,a["--n-color-pressed"]=o.colorQuaternaryPressed,a["--n-color-focus"]=o.colorQuaternaryHover,a["--n-color-disabled"]=o.colorQuaternary),a["--n-ripple-color"]="#0000",a["--n-text-color"]=c,a["--n-text-color-hover"]=c,a["--n-text-color-pressed"]=c,a["--n-text-color-focus"]=c,a["--n-text-color-disabled"]=c}else a={"--n-color":i||o[r("color",n)],"--n-color-hover":i?S(i):o[r("colorHover",n)],"--n-color-pressed":i?_(i):o[r("colorPressed",n)],"--n-color-focus":i?S(i):o[r("colorFocus",n)],"--n-color-disabled":i||o[r("colorDisabled",n)],"--n-ripple-color":i||o[r("rippleColor",n)],"--n-text-color":$||(i?o.textColorPrimary:R?o.textColorTertiary:o[r("textColor",n)]),"--n-text-color-hover":$||(i?o.textColorHoverPrimary:o[r("textColorHover",n)]),"--n-text-color-pressed":$||(i?o.textColorPressedPrimary:o[r("textColorPressed",n)]),"--n-text-color-focus":$||(i?o.textColorFocusPrimary:o[r("textColorFocus",n)]),"--n-text-color-disabled":$||(i?o.textColorDisabledPrimary:o[r("textColorDisabled",n)])};let q={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};y?q={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:q={"--n-border":o[r("border",n)],"--n-border-hover":o[r("borderHover",n)],"--n-border-pressed":o[r("borderPressed",n)],"--n-border-focus":o[r("borderFocus",n)],"--n-border-disabled":o[r("borderDisabled",n)]};const{[r("height",g)]:Q,[r("fontSize",g)]:ge,[r("padding",g)]:xe,[r("paddingRound",g)]:ye,[r("iconSize",g)]:Ce,[r("borderRadius",g)]:we,[r("iconMargin",g)]:ze,waveOpacity:$e}=o,Se={"--n-width":W&&!y?Q:"initial","--n-height":y?"initial":Q,"--n-font-size":ge,"--n-padding":W||y?"initial":J?ye:xe,"--n-icon-size":Ce,"--n-icon-margin":ze,"--n-border-radius":y?"initial":W||J?Q:we};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":l,"--n-bezier-ease-out":m,"--n-ripple-duration":P,"--n-opacity-disabled":w,"--n-wave-opacity":$e},me),a),q),Se)}),B=L?Fe("button",E(()=>{let t="";const{dashed:l,type:m,ghost:o,text:P,color:w,round:T,circle:K,textColor:g,secondary:G,tertiary:z,quaternary:V,strong:y}=e;l&&(t+="a"),o&&(t+="b"),P&&(t+="c"),T&&(t+="d"),K&&(t+="e"),G&&(t+="f"),z&&(t+="g"),V&&(t+="h"),y&&(t+="i"),w&&(t+=`j${ee(w)}`),g&&(t+=`k${ee(g)}`);const{value:i}=M;return t+=`l${i[0]}`,t+=`m${m[0]}`,t}),A,e):void 0;return{selfElRef:f,waveElRef:h,mergedClsPrefix:D,mergedFocusable:N,mergedSize:M,showBorder:v,enterPressed:u,rtlEnabled:fe,handleMousedown:se,handleKeydown:ce,handleBlur:ue,handleKeyup:de,handleClick:le,customColorCssVars:E(()=>{const{color:t}=e;if(!t)return null;const l=S(t);return{"--n-border-color":t,"--n-border-color-hover":l,"--n-border-color-pressed":_(t),"--n-border-color-focus":l,"--n-border-color-disabled":t}}),cssVars:L?void 0:A,themeClass:B?.themeClass,onRender:B?.onRender}},render(){const{mergedClsPrefix:e,tag:f,onRender:h}=this;h?.();const u=Z(this.$slots.default,v=>v&&p("span",{class:`${e}-button__content`},v));return p(f,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&u,p(Me,{width:!0},{default:()=>Z(this.$slots.icon,v=>(this.loading||this.renderIcon||v)&&p("span",{class:`${e}-button__icon`,style:{margin:Ne(this.$slots.default)?"0":""}},p(Ke,null,{default:()=>this.loading?p(Ge,Object.assign({clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20},this.spinProps)):p("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():v)})))}),this.iconPlacement==="left"&&u,this.text?null:p(Le,{ref:"waveElRef",clsPrefix:e}),this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),to=ne,no=ne;export{no as X,to as _,Xe as b,Je as i};
