import{aq as ae,P as a,D as i,E as r,H as f,aE as u,aF as le,bi as de,bj as ie,d as te,I as se,x as T,aH as be,at as ue,J as K,Z as he,a as B,L as I,M as ke,aP as fe,aJ as ve,aK as xe,b3 as me,ar as ge,az as pe,bk as Ce,aL as _}from"./index-d5951ac2.js";import{u as we}from"./use-form-item-fed27f35.js";const ye=ae("n-checkbox-group"),ze=()=>a("svg",{viewBox:"0 0 64 64",class:"check-icon"},a("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Re=()=>a("svg",{viewBox:"0 0 100 100",class:"line-icon"},a("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),Se=i([r("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[f("show-label","line-height: var(--n-label-line-height);"),i("&:hover",[r("checkbox-box",[u("border","border: var(--n-border-checked);")])]),i("&:focus:not(:active)",[r("checkbox-box",[u("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),f("inside-table",[r("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),f("checked",[r("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[r("checkbox-icon",[i(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),f("indeterminate",[r("checkbox-box",[r("checkbox-icon",[i(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),i(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),f("checked, indeterminate",[i("&:focus:not(:active)",[r("checkbox-box",[u("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),r("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[u("border",{border:"var(--n-border-checked)"})])]),f("disabled",{cursor:"not-allowed"},[f("checked",[r("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[u("border",{border:"var(--n-border-disabled-checked)"}),r("checkbox-icon",[i(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),r("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[u("border",`
 border: var(--n-border-disabled);
 `),r("checkbox-icon",[i(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),u("label",`
 color: var(--n-text-color-disabled);
 `)]),r("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),r("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[u("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),r("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[i(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),le({left:"1px",top:"1px"})])]),u("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[i("&:empty",{display:"none"})])]),de(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),ie(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),De=Object.assign(Object.assign({},K.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),$e=te({name:"Checkbox",props:De,setup(o){const c=ge(ye,null),v=T(null),{mergedClsPrefixRef:x,inlineThemeDisabled:p,mergedRtlRef:M,mergedComponentPropsRef:C}=se(o),w=T(o.defaultChecked),S=pe(o,"checked"),n=be(S,w),h=ue(()=>{if(c){const e=c.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return n.value===o.checkedValue}),y=we(o,{mergedSize(e){var l,d;const{size:t}=o;if(t!==void 0)return t;if(c){const{value:b}=c.mergedSizeRef;if(b!==void 0)return b}if(e){const{mergedSize:b}=e;if(b!==void 0)return b.value}const s=(d=(l=C?.value)===null||l===void 0?void 0:l.Checkbox)===null||d===void 0?void 0:d.size;return s||"medium"},mergedDisabled(e){const{disabled:l}=o;if(l!==void 0)return l;if(c){if(c.disabledRef.value)return!0;const{maxRef:{value:d},checkedCountRef:t}=c;if(d!==void 0&&t.value>=d&&!h.value)return!0;const{minRef:{value:s}}=c;if(s!==void 0&&t.value<=s&&h.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:z,mergedSizeRef:D}=y,R=K("Checkbox","-checkbox",Se,Ce,o,x);function k(e){if(c&&o.value!==void 0)c.toggleCheckbox(!h.value,o.value);else{const{onChange:l,"onUpdate:checked":d,onUpdateChecked:t}=o,{nTriggerFormInput:s,nTriggerFormChange:b}=y,g=h.value?o.uncheckedValue:o.checkedValue;d&&_(d,g,e),t&&_(t,g,e),l&&_(l,g,e),s(),b(),w.value=g}}function P(e){z.value||k(e)}function V(e){if(!z.value)switch(e.key){case" ":case"Enter":k(e)}}function j(e){switch(e.key){case" ":e.preventDefault()}}const E={focus:()=>{var e;(e=v.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=v.value)===null||e===void 0||e.blur()}},F=he("Checkbox",M,x),$=B(()=>{const{value:e}=D,{common:{cubicBezierEaseInOut:l},self:{borderRadius:d,color:t,colorChecked:s,colorDisabled:b,colorTableHeader:g,colorTableHeaderModal:H,colorTableHeaderPopover:U,checkMarkColor:L,checkMarkColorDisabled:N,border:A,borderFocus:O,borderDisabled:G,borderChecked:J,boxShadowFocus:W,textColor:q,textColorDisabled:Y,checkMarkColorDisabledChecked:Z,colorDisabledChecked:Q,borderDisabledChecked:X,labelPadding:ee,labelLineHeight:oe,labelFontWeight:re,[I("fontSize",e)]:ne,[I("size",e)]:ce}}=R.value;return{"--n-label-line-height":oe,"--n-label-font-weight":re,"--n-size":ce,"--n-bezier":l,"--n-border-radius":d,"--n-border":A,"--n-border-checked":J,"--n-border-focus":O,"--n-border-disabled":G,"--n-border-disabled-checked":X,"--n-box-shadow-focus":W,"--n-color":t,"--n-color-checked":s,"--n-color-table":g,"--n-color-table-modal":H,"--n-color-table-popover":U,"--n-color-disabled":b,"--n-color-disabled-checked":Q,"--n-text-color":q,"--n-text-color-disabled":Y,"--n-check-mark-color":L,"--n-check-mark-color-disabled":N,"--n-check-mark-color-disabled-checked":Z,"--n-font-size":ne,"--n-label-padding":ee}}),m=p?ke("checkbox",B(()=>D.value[0]),$,o):void 0;return Object.assign(y,E,{rtlEnabled:F,selfRef:v,mergedClsPrefix:x,mergedDisabled:z,renderedChecked:h,mergedTheme:R,labelId:fe(),handleClick:P,handleKeyUp:V,handleKeyDown:j,cssVars:p?void 0:$,themeClass:m?.themeClass,onRender:m?.onRender})},render(){var o;const{$slots:c,renderedChecked:v,mergedDisabled:x,indeterminate:p,privateInsideTable:M,cssVars:C,labelId:w,label:S,mergedClsPrefix:n,focusable:h,handleKeyUp:y,handleKeyDown:z,handleClick:D}=this;(o=this.onRender)===null||o===void 0||o.call(this);const R=ve(c.default,k=>S||k?a("span",{class:`${n}-checkbox__label`,id:w},S||k):null);return a("div",{ref:"selfRef",class:[`${n}-checkbox`,this.themeClass,this.rtlEnabled&&`${n}-checkbox--rtl`,v&&`${n}-checkbox--checked`,x&&`${n}-checkbox--disabled`,p&&`${n}-checkbox--indeterminate`,M&&`${n}-checkbox--inside-table`,R&&`${n}-checkbox--show-label`],tabindex:x||!h?void 0:0,role:"checkbox","aria-checked":p?"mixed":v,"aria-labelledby":w,style:C,onKeyup:y,onKeydown:z,onClick:D,onMousedown:()=>{me("selectstart",window,k=>{k.preventDefault()},{once:!0})}},a("div",{class:`${n}-checkbox-box-wrapper`}," ",a("div",{class:`${n}-checkbox-box`},a(xe,null,{default:()=>this.indeterminate?a("div",{key:"indeterminate",class:`${n}-checkbox-icon`},Re()):a("div",{key:"check",class:`${n}-checkbox-icon`},ze())}),a("div",{class:`${n}-checkbox-box__border`}))),R)}});export{$e as _};
