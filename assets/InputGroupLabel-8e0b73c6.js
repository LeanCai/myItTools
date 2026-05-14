import{E as _,aE as R,d as B,I as L,J as h,b1 as S,a as c,L as g,M as P,P as p}from"./index-d5951ac2.js";import{u as k}from"./use-form-item-fed27f35.js";const y=_("input-group-label",`
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 box-sizing: border-box;
 padding: 0 12px;
 display: inline-block;
 border-radius: var(--n-border-radius);
 background-color: var(--n-group-label-color);
 color: var(--n-group-label-text-color);
 font-size: var(--n-font-size);
 line-height: var(--n-height);
 height: var(--n-height);
 flex-shrink: 0;
 white-space: nowrap;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[R("border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]),I=Object.assign(Object.assign({},h.props),{size:String,bordered:{type:Boolean,default:void 0}}),T=B({name:"InputGroupLabel",props:I,setup(e){const{mergedBorderedRef:l,mergedClsPrefixRef:r,inlineThemeDisabled:n,mergedComponentPropsRef:d}=L(e),v=h("Input","-input-group-label",y,S,e,r),{mergedSizeRef:u}=k(e,{mergedSize(i){var s,t;if(e.size!==void 0)return e.size;if(i)return i.mergedSize.value;const a=(t=(s=d?.value)===null||s===void 0?void 0:s.Input)===null||t===void 0?void 0:t.size;return a||"medium"}}),b=c(()=>{const{value:i}=u,{common:{cubicBezierEaseInOut:s},self:{groupLabelColor:t,borderRadius:a,groupLabelTextColor:m,lineHeight:f,groupLabelBorder:z,[g("fontSize",i)]:C,[g("height",i)]:x}}=v.value;return{"--n-bezier":s,"--n-group-label-color":t,"--n-group-label-border":z,"--n-border-radius":a,"--n-group-label-text-color":m,"--n-font-size":C,"--n-line-height":f,"--n-height":x}}),o=n?P("input-group-label",c(()=>u.value[0]),b,e):void 0;return{mergedClsPrefix:r,mergedBordered:l,cssVars:n?void 0:b,themeClass:o?.themeClass,onRender:o?.onRender}},render(){var e,l,r;const{mergedClsPrefix:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),p("div",{class:[`${n}-input-group-label`,this.themeClass],style:this.cssVars},(r=(l=this.$slots).default)===null||r===void 0?void 0:r.call(l),this.mergedBordered?p("div",{class:`${n}-input-group-label__border`}):null)}});export{T as _};
