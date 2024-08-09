import{c as ue,s as pe,u as he,_ as d,h as K,r as q,a as me,d as fe,m as be,b as h,e as ge,f as A,j as l,g as I,i as V,k as _,l as Q,n as G,o as w,B as ve,p as Se,q as ke,t as H,v as y,w as x,x as O,y as se,T as E,z as Y,A as W,C as ye,D as Ce,E as xe,F as we,G as $e,H as Fe,I as Re,P as Pe,J as Z,K as Be,L as Me,M as Te,N as Le,R as De}from"./chunk-d62a75fb.js";import{m as Ne}from"./chunk-119092a3.js";const Ee=["component","direction","spacing","divider","children","className","useFlexGap"],Ie=ue(),Ae=pe("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function Ve(e){return he({props:e,name:"MuiStack",defaultTheme:Ie})}function _e(e,o){const t=h.exports.Children.toArray(e).filter(Boolean);return t.reduce((r,a,s)=>(r.push(a),s<t.length-1&&r.push(h.exports.cloneElement(o,{key:`separator-${s}`})),r),[])}const ze=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Ue=({ownerState:e,theme:o})=>{let t=d({display:"flex",flexDirection:"column"},K({theme:o},q({values:e.direction,breakpoints:o.breakpoints.values}),r=>({flexDirection:r})));if(e.spacing){const r=me(o),a=Object.keys(o.breakpoints.values).reduce((n,c)=>((typeof e.spacing=="object"&&e.spacing[c]!=null||typeof e.direction=="object"&&e.direction[c]!=null)&&(n[c]=!0),n),{}),s=q({values:e.direction,base:a}),u=q({values:e.spacing,base:a});typeof s=="object"&&Object.keys(s).forEach((n,c,p)=>{if(!s[n]){const g=c>0?s[p[c-1]]:"column";s[n]=g}}),t=fe(t,K({theme:o},u,(n,c)=>e.useFlexGap?{gap:Q(r,n)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${ze(c?s[c]:e.direction)}`]:Q(r,n)}}))}return t=be(o.breakpoints,t),t};function Ge(e={}){const{createStyledComponent:o=Ae,useThemeProps:t=Ve,componentName:r="MuiStack"}=e,a=()=>V({root:["root"]},n=>_(r,n),{}),s=o(Ue);return h.exports.forwardRef(function(n,c){const p=t(n),f=ge(p),{component:g="div",direction:$="column",spacing:F=0,divider:B,children:k,className:i,useFlexGap:b=!1}=f,C=A(f,Ee),N={direction:$,spacing:F,useFlexGap:b},M=a();return l(s,d({as:g,ownerState:N,ref:c,className:I(M.root,i)},C,{children:B?_e(k,B):k}))})}function Oe(e){return _("PrivateSwitchBase",e)}G("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const je=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],qe=e=>{const{classes:o,checked:t,disabled:r,edge:a}=e,s={root:["root",t&&"checked",r&&"disabled",a&&`edge${x(a)}`],input:["input"]};return V(s,Oe,o)},We=w(ve)(({ownerState:e})=>d({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),He=w("input",{shouldForwardProp:Se})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Xe=h.exports.forwardRef(function(o,t){const{autoFocus:r,checked:a,checkedIcon:s,className:u,defaultChecked:m,disabled:n,disableFocusRipple:c=!1,edge:p=!1,icon:f,id:g,inputProps:$,inputRef:F,name:B,onBlur:k,onChange:i,onFocus:b,readOnly:C,required:N=!1,tabIndex:M,type:R,value:T}=o,P=A(o,je),[S,ne]=ke({controlled:a,default:Boolean(m),name:"SwitchBase",state:"checked"}),D=H(),ie=L=>{b&&b(L),D&&D.onFocus&&D.onFocus(L)},ce=L=>{k&&k(L),D&&D.onBlur&&D.onBlur(L)},le=L=>{if(L.nativeEvent.defaultPrevented)return;const J=L.target.checked;ne(J),i&&i(L,J)};let z=n;D&&typeof z=="undefined"&&(z=D.disabled);const de=R==="checkbox"||R==="radio",j=d({},o,{checked:S,disabled:z,disableFocusRipple:c,edge:p}),X=qe(j);return y(We,d({component:"span",className:I(X.root,u),centerRipple:!0,focusRipple:!c,disabled:z,tabIndex:null,role:void 0,onFocus:ie,onBlur:ce,ownerState:j,ref:t},P,{children:[l(He,d({autoFocus:r,checked:a,defaultChecked:m,className:X.input,disabled:z,id:de?g:void 0,name:B,onChange:le,readOnly:C,ref:F,required:N,ownerState:j,tabIndex:M,type:R},R==="checkbox"&&T===void 0?{}:{value:T},$)),S?s:f]}))});var Je=Xe;const Ke=Ge({createStyledComponent:w("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>O({props:e,name:"MuiStack"})});var Qe=Ke;function Ye(e){return _("MuiFormControlLabel",e)}const Ze=G("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]);var U=Ze;const eo=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],oo=e=>{const{classes:o,disabled:t,labelPlacement:r,error:a,required:s}=e,u={root:["root",t&&"disabled",`labelPlacement${x(r)}`,a&&"error",s&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",a&&"error"]};return V(u,Ye,o)},to=w("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${U.label}`]:o.label},o.root,o[`labelPlacement${x(t.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>d({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${U.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${U.label}`]:{[`&.${U.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),ro=w("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${U.error}`]:{color:(e.vars||e).palette.error.main}})),so=h.exports.forwardRef(function(o,t){var r,a;const s=O({props:o,name:"MuiFormControlLabel"}),{className:u,componentsProps:m={},control:n,disabled:c,disableTypography:p,label:f,labelPlacement:g="end",required:$,slotProps:F={}}=s,B=A(s,eo),k=H(),i=(r=c!=null?c:n.props.disabled)!=null?r:k==null?void 0:k.disabled,b=$!=null?$:n.props.required,C={disabled:i,required:b};["checked","name","onChange","value","inputRef"].forEach(S=>{typeof n.props[S]=="undefined"&&typeof s[S]!="undefined"&&(C[S]=s[S])});const N=se({props:s,muiFormControl:k,states:["error"]}),M=d({},s,{disabled:i,labelPlacement:g,required:b,error:N.error}),R=oo(M),T=(a=F.typography)!=null?a:m.typography;let P=f;return P!=null&&P.type!==E&&!p&&(P=l(E,d({component:"span"},T,{className:I(R.label,T==null?void 0:T.className),children:P}))),y(to,d({className:I(R.root,u),ownerState:M,ref:t},B,{children:[h.exports.cloneElement(n,C),b?y(Qe,{display:"block",children:[P,y(ro,{ownerState:M,"aria-hidden":!0,className:R.asterisk,children:["\u2009","*"]})]}):P]}))});var ee=so;function ao(e){return _("MuiFormGroup",e)}G("MuiFormGroup",["root","row","error"]);const no=["className","row"],io=e=>{const{classes:o,row:t,error:r}=e;return V({root:["root",t&&"row",r&&"error"]},ao,o)},co=w("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.row&&o.row]}})(({ownerState:e})=>d({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),lo=h.exports.forwardRef(function(o,t){const r=O({props:o,name:"MuiFormGroup"}),{className:a,row:s=!1}=r,u=A(r,no),m=H(),n=se({props:r,muiFormControl:m,states:["error"]}),c=d({},r,{row:s,error:n.error}),p=io(c);return l(co,d({className:I(p.root,a),ownerState:c,ref:t},u))});var uo=lo;function po(e){return _("MuiLink",e)}const ho=G("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var mo=ho;const ae={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},fo=e=>ae[e]||e,bo=({theme:e,ownerState:o})=>{const t=fo(o.color),r=Y(e,`palette.${t}`,!1)||o.color,a=Y(e,`palette.${t}Channel`);return"vars"in e&&a?`rgba(${a} / 0.4)`:W(r,.4)};var go=bo;const vo=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],So=e=>{const{classes:o,component:t,focusVisible:r,underline:a}=e,s={root:["root",`underline${x(a)}`,t==="button"&&"button",r&&"focusVisible"]};return V(s,po,o)},ko=w(E,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[`underline${x(t.underline)}`],t.component==="button"&&o.button]}})(({theme:e,ownerState:o})=>d({},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},o.underline==="always"&&d({textDecoration:"underline"},o.color!=="inherit"&&{textDecorationColor:go({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${mo.focusVisible}`]:{outline:"auto"}})),yo=h.exports.forwardRef(function(o,t){const r=O({props:o,name:"MuiLink"}),{className:a,color:s="primary",component:u="a",onBlur:m,onFocus:n,TypographyClasses:c,underline:p="always",variant:f="inherit",sx:g}=r,$=A(r,vo),{isFocusVisibleRef:F,onBlur:B,onFocus:k,ref:i}=ye(),[b,C]=h.exports.useState(!1),N=Ce(t,i),M=S=>{B(S),F.current===!1&&C(!1),m&&m(S)},R=S=>{k(S),F.current===!0&&C(!0),n&&n(S)},T=d({},r,{color:s,component:u,focusVisible:b,underline:p,variant:f}),P=So(T);return l(ko,d({color:s,className:I(P.root,a),classes:c,component:u,onBlur:M,onFocus:R,ref:N,ownerState:T,variant:f,sx:[...Object.keys(ae).includes(s)?[]:[{color:s}],...Array.isArray(g)?g:[g]]},$))});var Co=yo;function xo(e){return _("MuiSwitch",e)}const wo=G("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);var v=wo;const $o=["className","color","edge","size","sx"],Fo=e=>{const{classes:o,edge:t,size:r,color:a,checked:s,disabled:u}=e,m={root:["root",t&&`edge${x(t)}`,`size${x(r)}`],switchBase:["switchBase",`color${x(a)}`,s&&"checked",u&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},n=V(m,xo,o);return d({},o,n)},Ro=w("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.edge&&o[`edge${x(t.edge)}`],o[`size${x(t.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${v.thumb}`]:{width:16,height:16},[`& .${v.switchBase}`]:{padding:4,[`&.${v.checked}`]:{transform:"translateX(16px)"}}}}]}),Po=w(Je,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.switchBase,{[`& .${v.input}`]:o.input},t.color!=="default"&&o[`color${x(t.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${v.checked}`]:{transform:"translateX(20px)"},[`&.${v.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${v.checked} + .${v.track}`]:{opacity:.5},[`&.${v.disabled} + .${v.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${v.input}`]:{left:"-100%",width:"300%"}}),({theme:e})=>({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:W(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(e.palette).filter(([,o])=>o.main&&o.light).map(([o])=>({props:{color:o},style:{[`&.${v.checked}`]:{color:(e.vars||e).palette[o].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:W(e.palette[o].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${v.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${o}DisabledColor`]:`${e.palette.mode==="light"?xe(e.palette[o].main,.62):we(e.palette[o].main,.55)}`}},[`&.${v.checked} + .${v.track}`]:{backgroundColor:(e.vars||e).palette[o].main}}}))]})),Bo=w("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,o)=>o.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`})),Mo=w("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,o)=>o.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),To=h.exports.forwardRef(function(o,t){const r=O({props:o,name:"MuiSwitch"}),{className:a,color:s="primary",edge:u=!1,size:m="medium",sx:n}=r,c=A(r,$o),p=d({},r,{color:s,edge:u,size:m}),f=Fo(p),g=l(Mo,{className:f.thumb,ownerState:p});return y(Ro,{className:I(f.root,a),sx:n,ownerState:p,children:[l(Po,d({type:"checkbox",icon:g,checkedIcon:g,ref:t,ownerState:p},c,{classes:d({},f,{root:f.switchBase})})),l(Bo,{className:f.track,ownerState:p})]})});var oe=To;const te=typeof chrome!="undefined"&&chrome.storage?chrome.storage:Ne,re=e=>Te({palette:{mode:e},components:{MuiPaper:{styleOverrides:{root:{transition:"background-color 0.3s ease, color 0.3s ease"}}}}});function Lo(){const[o,t]=h.exports.useState(750),[r,a]=h.exports.useState(""),[s,u]=h.exports.useState(""),[m,n]=h.exports.useState(!1),[c,p]=h.exports.useState(!1),[f,g]=h.exports.useState(!1);h.exports.useEffect(()=>{te.sync.get(["searchSpeed","caseSensitiveSearch","containsSearch"],i=>{i.searchSpeed!==void 0&&(t(Number(i.searchSpeed)),a(i.searchSpeed.toString())),i.caseSensitiveSearch!==void 0&&n(i.caseSensitiveSearch==="true"),i.containsSearch!==void 0&&p(i.containsSearch==="true")})},[]),h.exports.useEffect(()=>{const i=()=>{const C=window.matchMedia("(prefers-color-scheme: dark)").matches;g(C)};i();const b=window.matchMedia("(prefers-color-scheme: dark)");return b.addEventListener("change",i),()=>{b.removeEventListener("change",i)}},[]);const $=h.exports.useMemo(()=>re("light"),[]),F=h.exports.useMemo(()=>re("dark"),[]);return y($e,{theme:f?F:$,children:[l(Fe,{}),l(Re,{maxWidth:"sm",children:y(Pe,{elevation:3,className:"container",children:[l(E,{variant:"h4",gutterBottom:!0,children:"Options"}),y(Z,{display:"flex",flexDirection:"column",alignItems:"center",mb:2,children:[l(Be,{label:"Search Speed (ms)",variant:"outlined",value:r,onChange:i=>{const b=i.target.value;a(b),b===""||/^\d+$/.test(b)?u(""):u("Please enter a valid number.")},error:!!s,helperText:s||"Enter the search speed in milliseconds",fullWidth:!0}),y(uo,{children:[l(ee,{control:l(oe,{checked:m,onChange:i=>n(i.target.checked),name:"Case Sensitivity"}),label:y(E,{children:[l("strong",{children:"Case-sensitive"})," search"]})}),l(ee,{control:l(oe,{checked:c,onChange:i=>p(i.target.checked),name:"Contains Search"}),label:y(E,{children:["Search with"," ",l("strong",{children:"contains term"})," ","('Supercool Friend' could be found with 'Supercool', 'Super', 'Friend', ...)"]})})]})]}),l(Me,{variant:"contained",color:"primary",onClick:()=>{if(s){console.error("Invalid input.");return}const i=r===""?750:Number(r);te.sync.set({searchSpeed:i,caseSensitiveSearch:m.toString(),containsSearch:c.toString()},()=>{t(i),a(i.toString()),alert("Settings saved!")})},fullWidth:!0,children:"Save"}),l(Z,{mt:2,children:y(E,{children:["This chrome addon was created by"," ",l(Co,{href:"https://serhat.gueler.dev",target:"_blank",children:"Serhat G\xFCler (sero583)"})]})})]})})]})}Le.createRoot(document.getElementById("app")).render(l(De.StrictMode,{children:l(Lo,{})}));
