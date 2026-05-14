import{aB as de,aC as ce,aD as ue,E as U,aE as i,aF as A,D as O,H as l,aG as E,d as he,I as be,J as I,x as L,aH as fe,a as F,L as x,K as M,a0 as s,M as ve,aI as W,P as a,aJ as y,aK as ge,Q as me,az as we,aL as H}from"./index-d5951ac2.js";import{u as pe}from"./use-form-item-fed27f35.js";function xe(e){const{primaryColor:d,opacityDisabled:v,borderRadius:o,textColor3:g}=e,c="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},ce),{iconColor:g,textColor:"white",loadingColor:d,opacityDisabled:v,railColor:c,railColorActive:d,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:o,railBorderRadiusMedium:o,railBorderRadiusLarge:o,buttonBorderRadiusSmall:o,buttonBorderRadiusMedium:o,buttonBorderRadiusLarge:o,boxShadowFocus:`0 0 0 2px ${ue(d,{alpha:.2})}`})}const ye={name:"Switch",common:de,self:xe},ke=ye,Se=U("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[i("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),i("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),i("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),U("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[A({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),i("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),i("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),i("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),O("&:focus",[i("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),l("round",[i("rail","border-radius: calc(var(--n-rail-height) / 2);",[i("button","border-radius: calc(var(--n-button-height) / 2);")])]),E("disabled",[E("icon",[l("rubber-band",[l("pressed",[i("rail",[i("button","max-width: var(--n-button-width-pressed);")])]),i("rail",[O("&:active",[i("button","max-width: var(--n-button-width-pressed);")])]),l("active",[l("pressed",[i("rail",[i("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),i("rail",[O("&:active",[i("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),l("active",[i("rail",[i("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),i("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[i("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[A()]),i("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),l("active",[i("rail","background-color: var(--n-rail-color-active);")]),l("loading",[i("rail",`
 cursor: wait;
 `)]),l("disabled",[i("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Ce=Object.assign(Object.assign({},I.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]});let _;const _e=he({name:"Switch",props:Ce,slots:Object,setup(e){_===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?_=CSS.supports("width","max(1px)"):_=!1:_=!0);const{mergedClsPrefixRef:d,inlineThemeDisabled:v,mergedComponentPropsRef:o}=be(e),g=I("Switch","-switch",Se,ke,e,d),c=pe(e,{mergedSize(t){var u,h;if(e.size!==void 0)return e.size;if(t)return t.mergedSize.value;const p=(h=(u=o?.value)===null||u===void 0?void 0:u.Switch)===null||h===void 0?void 0:h.size;return p||"medium"}}),{mergedSizeRef:S,mergedDisabledRef:m}=c,C=L(e.defaultValue),$=we(e,"value"),w=fe($,C),z=F(()=>w.value===e.checkedValue),n=L(!1),r=L(!1),B=F(()=>{const{railStyle:t}=e;if(t)return t({focused:r.value,checked:z.value})});function V(t){const{"onUpdate:value":u,onChange:h,onUpdateValue:p}=e,{nTriggerFormInput:P,nTriggerFormChange:j}=c;u&&H(u,t),p&&H(p,t),h&&H(h,t),C.value=t,P(),j()}function J(){const{nTriggerFormFocus:t}=c;t()}function X(){const{nTriggerFormBlur:t}=c;t()}function Y(){e.loading||m.value||(w.value!==e.checkedValue?V(e.checkedValue):V(e.uncheckedValue))}function G(){r.value=!0,J()}function Q(){r.value=!1,X(),n.value=!1}function q(t){e.loading||m.value||t.key===" "&&(w.value!==e.checkedValue?V(e.checkedValue):V(e.uncheckedValue),n.value=!1)}function Z(t){e.loading||m.value||t.key===" "&&(t.preventDefault(),n.value=!0)}const N=F(()=>{const{value:t}=S,{self:{opacityDisabled:u,railColor:h,railColorActive:p,buttonBoxShadow:P,buttonColor:j,boxShadowFocus:ee,loadingColor:te,textColor:ie,iconColor:ne,[x("buttonHeight",t)]:b,[x("buttonWidth",t)]:ae,[x("buttonWidthPressed",t)]:oe,[x("railHeight",t)]:f,[x("railWidth",t)]:R,[x("railBorderRadius",t)]:re,[x("buttonBorderRadius",t)]:le},common:{cubicBezierEaseInOut:se}}=g.value;let D,T,K;return _?(D=`calc((${f} - ${b}) / 2)`,T=`max(${f}, ${b})`,K=`max(${R}, calc(${R} + ${b} - ${f}))`):(D=M((s(f)-s(b))/2),T=M(Math.max(s(f),s(b))),K=s(f)>s(b)?R:M(s(R)+s(b)-s(f))),{"--n-bezier":se,"--n-button-border-radius":le,"--n-button-box-shadow":P,"--n-button-color":j,"--n-button-width":ae,"--n-button-width-pressed":oe,"--n-button-height":b,"--n-height":T,"--n-offset":D,"--n-opacity-disabled":u,"--n-rail-border-radius":re,"--n-rail-color":h,"--n-rail-color-active":p,"--n-rail-height":f,"--n-rail-width":R,"--n-width":K,"--n-box-shadow-focus":ee,"--n-loading-color":te,"--n-text-color":ie,"--n-icon-color":ne}}),k=v?ve("switch",F(()=>S.value[0]),N,e):void 0;return{handleClick:Y,handleBlur:Q,handleFocus:G,handleKeyup:q,handleKeydown:Z,mergedRailStyle:B,pressed:n,mergedClsPrefix:d,mergedValue:w,checked:z,mergedDisabled:m,cssVars:v?void 0:N,themeClass:k?.themeClass,onRender:k?.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:d,checked:v,mergedRailStyle:o,onRender:g,$slots:c}=this;g?.();const{checked:S,unchecked:m,icon:C,"checked-icon":$,"unchecked-icon":w}=c,z=!(W(C)&&W($)&&W(w));return a("div",{role:"switch","aria-checked":v,class:[`${e}-switch`,this.themeClass,z&&`${e}-switch--icon`,v&&`${e}-switch--active`,d&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},a("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:o},y(S,n=>y(m,r=>n||r?a("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),n),a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),r)):null)),a("div",{class:`${e}-switch__button`},y(C,n=>y($,r=>y(w,B=>a(ge,null,{default:()=>this.loading?a(me,Object.assign({key:"loading",clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(r||n)?a("div",{class:`${e}-switch__button-icon`,key:r?"checked-icon":"icon"},r||n):!this.checked&&(B||n)?a("div",{class:`${e}-switch__button-icon`,key:B?"unchecked-icon":"icon"},B||n):null})))),y(S,n=>n&&a("div",{key:"checked",class:`${e}-switch__checked`},n)),y(m,n=>n&&a("div",{key:"unchecked",class:`${e}-switch__unchecked`},n)))))}});export{_e as _};
