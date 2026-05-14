import{b2 as _,bO as P,bP as N,bQ as Ue,bR as W,bS as Ae,bT as I,bU as ne,bV as Re,bW as qe,bX as G,bY as E,bZ as be,d as H,a as U,P as i,x as A,b3 as oe,bb as ae,aq as it,ar as Ee,O as Ne,b_ as se,b$ as $e,c0 as _e,c1 as Ve,aR as st,D as te,E as b,c2 as ut,aE as C,H as Ie,I as ct,J as Oe,c3 as dt,ax as ht,aH as He,az as Ce,p as pt,L as Te,M as ft,c4 as gt,c5 as ze,c6 as Fe,c7 as vt,c8 as bt,c9 as mt,T as xt,ca as kt,cb as wt,cc as yt,aL as he,b6 as St}from"./index-d5951ac2.js";import{N as Ct}from"./Input-0f612b33.js";import{_ as Ut}from"./InputGroup-dd240c0a.js";import{u as At}from"./use-form-item-fed27f35.js";import{u as Rt}from"./use-locale-7405a9c4.js";import{_ as pe}from"./Button-fc1c4666.js";function $t(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function ue(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function _t(e,t=[255,255,255],l="AA"){const[n,a,o,s]=_(P(e));if(s===1){const T=fe([n,a,o]),L=fe(t);return(Math.max(T,L)+.05)/(Math.min(T,L)+.05)>=(l==="AA"?4.5:7)}const u=Math.round(n*s+t[0]*(1-s)),g=Math.round(a*s+t[1]*(1-s)),R=Math.round(o*s+t[2]*(1-s)),O=fe([u,g,R]),V=fe(t);return(Math.max(O,V)+.05)/(Math.min(O,V)+.05)>=(l==="AA"?4.5:7)}function fe(e){const[t,l,n]=e.map(a=>(a/=255,a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4)));return .2126*t+.7152*l+.0722*n}function Vt(e){return e=Math.round(e),e>=360?359:e<0?0:e}function zt(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const Dt={rgb:{hex(e){return N(_(e))},hsl(e){const[t,l,n,a]=_(e);return P([...Ue(t,l,n),a])},hsv(e){const[t,l,n,a]=_(e);return W([...Ae(t,l,n),a])}},hex:{rgb(e){return I(_(e))},hsl(e){const[t,l,n,a]=_(e);return P([...Ue(t,l,n),a])},hsv(e){const[t,l,n,a]=_(e);return W([...Ae(t,l,n),a])}},hsl:{hex(e){const[t,l,n,a]=ne(e);return N([...Re(t,l,n),a])},rgb(e){const[t,l,n,a]=ne(e);return I([...Re(t,l,n),a])},hsv(e){const[t,l,n,a]=ne(e);return W([...qe(t,l,n),a])}},hsv:{hex(e){const[t,l,n,a]=G(e);return N([...E(t,l,n),a])},rgb(e){const[t,l,n,a]=G(e);return I([...E(t,l,n),a])},hsl(e){const[t,l,n,a]=G(e);return P([...be(t,l,n),a])}}};function Le(e,t,l){return l=l||ue(e),l?l===t?e:Dt[l][t](e):null}const ie="12px",Mt=12,Z="6px",Pt=H({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=A(null);function l(o){!t.value||!e.rgba||(oe("mousemove",document,n),oe("mouseup",document,a),n(o))}function n(o){const{value:s}=t;if(!s)return;const{width:u,left:g}=s.getBoundingClientRect(),R=(o.clientX-g)/(u-Mt);e.onUpdateAlpha(zt(R))}function a(){var o;ae("mousemove",document,n),ae("mouseup",document,a),(o=e.onComplete)===null||o===void 0||o.call(e)}return{railRef:t,railBackgroundImage:U(()=>{const{rgba:o}=e;return o?`linear-gradient(to right, rgba(${o[0]}, ${o[1]}, ${o[2]}, 0) 0%, rgba(${o[0]}, ${o[1]}, ${o[2]}, 1) 100%)`:""}),handleMouseDown:l}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:ie,borderRadius:Z},onMousedown:this.handleMouseDown},i("div",{style:{borderRadius:Z,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},i("div",{class:`${e}-color-picker-checkboard`}),i("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&i("div",{style:{position:"absolute",left:Z,right:Z,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${Z})`,borderRadius:Z,width:ie,height:ie}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:I(this.rgba),borderRadius:Z,width:ie,height:ie}}))))}}),De=it("n-color-picker");function It(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function Ht(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function Tt(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function Ft(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Bt(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const qt={paddingSmall:"0 4px"},Be=H({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=A(""),{themeRef:l}=Ee(De,null);Ne(()=>{t.value=n()});function n(){const{value:s}=e;if(s===null)return"";const{label:u}=e;return u==="HEX"?s:u==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function a(s){t.value=s}function o(s){let u,g;switch(e.label){case"HEX":g=Ft(s),g&&e.onUpdateValue(s),t.value=n();break;case"H":u=Ht(s),u===!1?t.value=n():e.onUpdateValue(u);break;case"S":case"L":case"V":u=Tt(s),u===!1?t.value=n():e.onUpdateValue(u);break;case"A":u=Bt(s),u===!1?t.value=n():e.onUpdateValue(u);break;case"R":case"G":case"B":u=It(s),u===!1?t.value=n():e.onUpdateValue(u);break}}return{mergedTheme:l,inputValue:t,handleInputChange:o,handleInputUpdateValue:a}},render(){const{mergedTheme:e}=this;return i(Ct,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:qt,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Et=H({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,l){const{showAlpha:n}=e;if(e.mode==="hex"){e.onUpdateValue((n?N:se)(l));return}let a;switch(e.valueArr===null?a=[0,0,0,0]:a=Array.from(e.valueArr),e.mode){case"hsv":a[t]=l,e.onUpdateValue((n?W:Ve)(a));break;case"rgb":a[t]=l,e.onUpdateValue((n?I:_e)(a));break;case"hsl":a[t]=l,e.onUpdateValue((n?P:$e)(a));break}}}},render(){const{clsPrefix:e,modes:t}=this;return i("div",{class:`${e}-color-picker-input`},i("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),i(Ut,null,{default:()=>{const{mode:l,valueArr:n,showAlpha:a}=this;if(l==="hex"){let o=null;try{o=n===null?null:(a?N:se)(n)}catch{}return i(Be,{label:"HEX",showAlpha:a,value:o,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(l+(a?"a":"")).split("").map((o,s)=>i(Be,{label:o.toUpperCase(),value:n===null?null:n[s],onUpdateValue:u=>{this.handleUnitUpdateValue(s,u)}}))}}))}});function Nt(e,t){if(t==="hsv"){const[l,n,a,o]=G(e);return I([...E(l,n,a),o])}return e}function Ot(e){const t=document.createElement("canvas").getContext("2d");return t?(t.fillStyle=e,t.fillStyle):"#000000"}const Lt=H({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=U(()=>e.swatches.map(o=>{const s=ue(o);return{value:o,mode:s,legalValue:Nt(o,s)}}));function l(o){const{mode:s}=e;let{value:u,mode:g}=o;return g||(g="hex",/^[a-zA-Z]+$/.test(u)?u=Ot(u):(st("color-picker",`color ${u} in swatches is invalid.`),u="#000000")),g===s?u:Le(u,s,g)}function n(o){e.onUpdateColor(l(o))}function a(o,s){o.key==="Enter"&&n(s)}return{parsedSwatchesRef:t,handleSwatchSelect:n,handleSwatchKeyDown:a}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>i("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:l=>{this.handleSwatchKeyDown(l,t)}},i("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),jt=H({name:"ColorPickerTrigger",slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:l}=Ee(De,null);return()=>{const{hsla:n,value:a,clsPrefix:o,onClick:s,disabled:u}=e,g=t.label||l.value;return i("div",{class:[`${o}-color-picker`,u&&`${o}-color-picker--disabled`],onClick:u?void 0:s},i("div",{class:`${o}-color-picker__fill`},i("div",{class:`${o}-color-picker-checkboard`}),i("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:n?P(n):""}}),a&&n?i("div",{class:`${o}-color-picker__value`,style:{color:_t(n)?"white":"black"}},g?g(a):a):null))}}}),Xt=H({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=ue(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(l){var n;const a=l.target.value;(n=e.onUpdateColor)===null||n===void 0||n.call(e,Le(a.toUpperCase(),e.mode,"hex")),l.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-preview__preview`},i("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),i("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),re="12px",Zt=12,K="6px",Kt=6,Wt="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",Gt=H({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=A(null);function l(o){t.value&&(oe("mousemove",document,n),oe("mouseup",document,a),n(o))}function n(o){const{value:s}=t;if(!s)return;const{width:u,left:g}=s.getBoundingClientRect(),R=Vt((o.clientX-g-Kt)/(u-Zt)*360);e.onUpdateHue(R)}function a(){var o;ae("mousemove",document,n),ae("mouseup",document,a),(o=e.onComplete)===null||o===void 0||o.call(e)}return{railRef:t,handleMouseDown:l}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-slider`,style:{height:re,borderRadius:K}},i("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Wt,height:re,borderRadius:K,position:"relative"},onMousedown:this.handleMouseDown},i("div",{style:{position:"absolute",left:K,right:K,top:0,bottom:0}},i("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${K})`,borderRadius:K,width:re,height:re}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:K,width:re,height:re}})))))}}),ge="12px",ve="6px",Yt=H({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=A(null);function l(o){t.value&&(oe("mousemove",document,n),oe("mouseup",document,a),n(o))}function n(o){const{value:s}=t;if(!s)return;const{width:u,height:g,left:R,bottom:O}=s.getBoundingClientRect(),V=(O-o.clientY)/g,z=(o.clientX-R)/u,T=100*(z>1?1:z<0?0:z),L=100*(V>1?1:V<0?0:V);e.onUpdateSV(T,L)}function a(){var o;ae("mousemove",document,n),ae("mouseup",document,a),(o=e.onComplete)===null||o===void 0||o.call(e)}return{palleteRef:t,handleColor:U(()=>{const{rgba:o}=e;return o?`rgb(${o[0]}, ${o[1]}, ${o[2]})`:""}),handleMouseDown:l}},render(){const{clsPrefix:e}=this;return i("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},i("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),i("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&i("div",{class:`${e}-color-picker-handle`,style:{width:ge,height:ge,borderRadius:ve,left:`calc(${this.displayedSv[0]}% - ${ve})`,bottom:`calc(${this.displayedSv[1]}% - ${ve})`}},i("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:ve,width:ge,height:ge}})))}}),Jt=te([b("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[ut(),b("input",`
 text-align: center;
 `)]),b("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[te("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),b("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[C("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),te("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),b("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[C("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),b("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[C("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[Ie("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),b("color-picker-preview",`
 display: flex;
 `,[C("sliders",`
 flex: 1 0 auto;
 `),C("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),C("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),C("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),b("color-picker-input",`
 display: flex;
 align-items: center;
 `,[b("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),C("mode",`
 width: 72px;
 text-align: center;
 `)]),b("color-picker-control",`
 padding: 12px;
 `),b("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[b("button","margin-left: 8px;")]),b("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 cursor: pointer;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[Ie("disabled","cursor: not-allowed"),C("value",`
 white-space: nowrap;
 position: relative;
 `),C("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),b("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[te("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),b("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[b("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[C("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),te("&:focus",`
 outline: none;
 `,[C("fill",[te("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),Qt=Object.assign(Object.assign({},Oe.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:ze.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),lr=H({name:"ColorPicker",props:Qt,slots:Object,setup(e,{slots:t}){let l=null;function n(r){l=r}let a=null;const{mergedClsPrefixRef:o,namespaceRef:s,inlineThemeDisabled:u,mergedComponentPropsRef:g}=ct(e),R=At(e,{mergedSize:r=>{var c,d;const{size:p}=e;if(p)return p;const{mergedSize:f}=r||{};if(f?.value)return f.value;const h=(d=(c=g?.value)===null||c===void 0?void 0:c.ColorPicker)===null||d===void 0?void 0:d.size;return h||"medium"}}),{mergedSizeRef:O,mergedDisabledRef:V}=R,{localeRef:z}=Rt("global"),T=Oe("ColorPicker","-color-picker",Jt,dt,e,o);ht(De,{themeRef:T,renderLabelRef:Ce(e,"renderLabel"),colorPickerSlots:t});const L=A(e.defaultShow),me=He(Ce(e,"show"),L);function ce(r){const{onUpdateShow:c,"onUpdate:show":d}=e;c&&he(c,r),d&&he(d,r),L.value=r}const{defaultValue:Me}=e,Pe=A(Me===void 0?$t(e.modes,e.showAlpha):Me),x=He(Ce(e,"value"),Pe),Y=A([x.value]),D=A(0),xe=U(()=>ue(x.value)),{modes:je}=e,$=A(ue(x.value)||je[0]||"rgb");function Xe(){const{modes:r}=e,{value:c}=$,d=r.findIndex(p=>p===c);~d?$.value=r[(d+1)%r.length]:$.value="rgb"}let w,y,J,Q,F,B,q,S;const le=U(()=>{const{value:r}=x;if(!r)return null;switch(xe.value){case"hsv":return G(r);case"hsl":return[w,y,J,S]=ne(r),[...qe(w,y,J),S];case"rgb":case"hex":return[F,B,q,S]=_(r),[...Ae(F,B,q),S]}}),j=U(()=>{const{value:r}=x;if(!r)return null;switch(xe.value){case"rgb":case"hex":return _(r);case"hsv":return[w,y,Q,S]=G(r),[...E(w,y,Q),S];case"hsl":return[w,y,J,S]=ne(r),[...Re(w,y,J),S]}}),ke=U(()=>{const{value:r}=x;if(!r)return null;switch(xe.value){case"hsl":return ne(r);case"hsv":return[w,y,Q,S]=G(r),[...be(w,y,Q),S];case"rgb":case"hex":return[F,B,q,S]=_(r),[...Ue(F,B,q),S]}}),Ze=U(()=>{switch($.value){case"rgb":case"hex":return j.value;case"hsv":return le.value;case"hsl":return ke.value}}),de=A(0),we=A(1),ye=A([0,0]);function Ke(r,c){const{value:d}=le,p=de.value,f=d?d[3]:1;ye.value=[r,c];const{showAlpha:h}=e;switch($.value){case"hsv":v((h?W:Ve)([p,r,c,f]),"cursor");break;case"hsl":v((h?P:$e)([...be(p,r,c),f]),"cursor");break;case"rgb":v((h?I:_e)([...E(p,r,c),f]),"cursor");break;case"hex":v((h?N:se)([...E(p,r,c),f]),"cursor");break}}function We(r){de.value=r;const{value:c}=le;if(!c)return;const[,d,p,f]=c,{showAlpha:h}=e;switch($.value){case"hsv":v((h?W:Ve)([r,d,p,f]),"cursor");break;case"rgb":v((h?I:_e)([...E(r,d,p),f]),"cursor");break;case"hex":v((h?N:se)([...E(r,d,p),f]),"cursor");break;case"hsl":v((h?P:$e)([...be(r,d,p),f]),"cursor");break}}function Ge(r){switch($.value){case"hsv":[w,y,Q]=le.value,v(W([w,y,Q,r]),"cursor");break;case"rgb":[F,B,q]=j.value,v(I([F,B,q,r]),"cursor");break;case"hex":[F,B,q]=j.value,v(N([F,B,q,r]),"cursor");break;case"hsl":[w,y,J]=ke.value,v(P([w,y,J,r]),"cursor");break}we.value=r}function v(r,c){c==="cursor"?a=r:a=null;const{nTriggerFormChange:d,nTriggerFormInput:p}=R,{onUpdateValue:f,"onUpdate:value":h}=e;f&&he(f,r),h&&he(h,r),d(),p(),Pe.value=r}function Ye(r){v(r,"input"),St(ee)}function ee(r=!0){const{value:c}=x;if(c){const{nTriggerFormChange:d,nTriggerFormInput:p}=R,{onComplete:f}=e;f&&f(c);const{value:h}=Y,{value:k}=D;r&&(h.splice(k+1,h.length,c),D.value=k+1),d(),p()}}function Je(){const{value:r}=D;r-1<0||(v(Y.value[r-1],"input"),ee(!1),D.value=r-1)}function Qe(){const{value:r}=D;r<0||r+1>=Y.value.length||(v(Y.value[r+1],"input"),ee(!1),D.value=r+1)}function et(){v(null,"input");const{onClear:r}=e;r&&r(),ce(!1)}function tt(){const{value:r}=x,{onConfirm:c}=e;c&&c(r),ce(!1)}const rt=U(()=>D.value>=1),nt=U(()=>{const{value:r}=Y;return r.length>1&&D.value<r.length-1});pt(me,r=>{r||(Y.value=[x.value],D.value=0)}),Ne(()=>{if(!(a&&a===x.value)){const{value:r}=le;r&&(de.value=r[0],we.value=r[3],ye.value=[r[1],r[2]])}a=null});const Se=U(()=>{const{value:r}=O,{common:{cubicBezierEaseInOut:c},self:{textColor:d,color:p,panelFontSize:f,boxShadow:h,border:k,borderRadius:m,dividerColor:X,[Te("height",r)]:at,[Te("fontSize",r)]:lt}}=T.value;return{"--n-bezier":c,"--n-text-color":d,"--n-color":p,"--n-panel-font-size":f,"--n-font-size":lt,"--n-box-shadow":h,"--n-border":k,"--n-border-radius":m,"--n-height":at,"--n-divider-color":X}}),M=u?ft("color-picker",U(()=>O.value[0]),Se,e):void 0;function ot(){var r;const{value:c}=j,{value:d}=de,{internalActions:p,modes:f,actions:h}=e,{value:k}=T,{value:m}=o;return i("div",{class:[`${m}-color-picker-panel`,M?.themeClass.value],onDragstart:X=>{X.preventDefault()},style:u?void 0:Se.value},i("div",{class:`${m}-color-picker-control`},i(Yt,{clsPrefix:m,rgba:c,displayedHue:d,displayedSv:ye.value,onUpdateSV:Ke,onComplete:ee}),i("div",{class:`${m}-color-picker-preview`},i("div",{class:`${m}-color-picker-preview__sliders`},i(Gt,{clsPrefix:m,hue:d,onUpdateHue:We,onComplete:ee}),e.showAlpha?i(Pt,{clsPrefix:m,rgba:c,alpha:we.value,onUpdateAlpha:Ge,onComplete:ee}):null),e.showPreview?i(Xt,{clsPrefix:m,mode:$.value,color:j.value&&se(j.value),onUpdateColor:X=>{v(X,"input")}}):null),i(Et,{clsPrefix:m,showAlpha:e.showAlpha,mode:$.value,modes:f,onUpdateMode:Xe,value:x.value,valueArr:Ze.value,onUpdateValue:Ye}),((r=e.swatches)===null||r===void 0?void 0:r.length)&&i(Lt,{clsPrefix:m,mode:$.value,swatches:e.swatches,onUpdateColor:X=>{v(X,"input")}})),h?.length?i("div",{class:`${m}-color-picker-action`},h.includes("confirm")&&i(pe,{size:"small",onClick:tt,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>z.value.confirm}),h.includes("clear")&&i(pe,{size:"small",onClick:et,disabled:!x.value,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>z.value.clear})):null,t.action?i("div",{class:`${m}-color-picker-action`},{default:t.action}):p?i("div",{class:`${m}-color-picker-action`},p.includes("undo")&&i(pe,{size:"small",onClick:Je,disabled:!rt.value,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>z.value.undo}),p.includes("redo")&&i(pe,{size:"small",onClick:Qe,disabled:!nt.value,theme:k.peers.Button,themeOverrides:k.peerOverrides.Button},{default:()=>z.value.redo})):null)}return{mergedClsPrefix:o,namespace:s,hsla:ke,rgba:j,mergedShow:me,mergedDisabled:V,isMounted:gt(),adjustedTo:ze(e),mergedValue:x,handleTriggerClick(){V.value||ce(!0)},setTriggerRef:n,handleClickOutside(r){if(l instanceof Element){if(l.contains(Fe(r)))return}else if(l&&l.$el.contains(Fe(r)))return;ce(!1)},renderPanel:ot,cssVars:u?void 0:Se,themeClass:M?.themeClass,onRender:M?.onRender}},render(){const{mergedClsPrefix:e,onRender:t}=this;return t?.(),i(yt,null,{default:()=>[i(vt,null,{default:()=>bt(this.$slots.trigger,{value:this.mergedValue,onClick:this.handleTriggerClick,ref:this.setTriggerRef},l=>l||i(jt,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,style:this.cssVars,ref:this.setTriggerRef,disabled:this.mergedDisabled,class:this.themeClass,onClick:this.mergedDisabled?void 0:this.handleTriggerClick}))}),i(mt,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===ze.tdkey,to:this.adjustedTo},{default:()=>i(xt,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?kt(this.renderPanel(),[[wt,this.handleClickOutside,void 0,{capture:!0}]]):null})})]})}});export{lr as _};
