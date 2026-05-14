import{D as r,E as i,H as n,aG as V,bi as D,bj as I,d as F,I as G,a as s,J as h,Z as J,L as b,M as K,P as N,bl as W}from"./index-d5951ac2.js";const Z=r([i("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[r("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[r("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),r("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[r("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),n("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[r("tr",[r("&:last-child",[r("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),n("single-line",[r("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),r("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),n("single-column",[r("tr",[r("&:not(:last-child)",[r("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),n("striped",[r("tr:nth-of-type(even)",[r("td","background-color: var(--n-td-color-striped)")])]),V("bottom-bordered",[r("tr",[r("&:last-child",[r("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),D(i("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[r("th",`
 background-color: var(--n-th-color-modal);
 `),r("td",`
 background-color: var(--n-td-color-modal);
 `)])),I(i("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[r("th",`
 background-color: var(--n-th-color-popover);
 `),r("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),q=Object.assign(Object.assign({},h.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:String}),Q=F({name:"Table",props:q,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:c,mergedRtlRef:p,mergedComponentPropsRef:a}=G(e),v=s(()=>{var d,l;return e.size||((l=(d=a?.value)===null||d===void 0?void 0:d.Table)===null||l===void 0?void 0:l.size)||"medium"}),m=h("Table","-table",Z,W,e,o),u=J("Table",p,o),g=s(()=>{const d=v.value,{self:{borderColor:l,tdColor:f,tdColorModal:C,tdColorPopover:x,thColor:z,thColorModal:P,thColorPopover:k,thTextColor:R,tdTextColor:B,borderRadius:T,thFontWeight:M,lineHeight:_,borderColorModal:$,borderColorPopover:w,tdColorStriped:y,tdColorStripedModal:S,tdColorStripedPopover:E,[b("fontSize",d)]:L,[b("tdPadding",d)]:j,[b("thPadding",d)]:H},common:{cubicBezierEaseInOut:O}}=m.value;return{"--n-bezier":O,"--n-td-color":f,"--n-td-color-modal":C,"--n-td-color-popover":x,"--n-td-text-color":B,"--n-border-color":l,"--n-border-color-modal":$,"--n-border-color-popover":w,"--n-border-radius":T,"--n-font-size":L,"--n-th-color":z,"--n-th-color-modal":P,"--n-th-color-popover":k,"--n-th-font-weight":M,"--n-th-text-color":R,"--n-line-height":_,"--n-td-padding":j,"--n-th-padding":H,"--n-td-color-striped":y,"--n-td-color-striped-modal":S,"--n-td-color-striped-popover":E}}),t=c?K("table",s(()=>v.value[0]),g,e):void 0;return{rtlEnabled:u,mergedClsPrefix:o,cssVars:c?void 0:g,themeClass:t?.themeClass,onRender:t?.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),N("table",{class:[`${o}-table`,this.themeClass,{[`${o}-table--rtl`]:this.rtlEnabled,[`${o}-table--bottom-bordered`]:this.bottomBordered,[`${o}-table--bordered`]:this.bordered,[`${o}-table--single-line`]:this.singleLine,[`${o}-table--single-column`]:this.singleColumn,[`${o}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}});export{Q as _};
