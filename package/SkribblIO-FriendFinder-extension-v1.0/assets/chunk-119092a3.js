const r={sync:{get:(o,e)=>{const t={};o.forEach(c=>{t[c]=localStorage.getItem(c)}),e(t)},set:(o,e)=>{Object.keys(o).forEach(t=>{localStorage.setItem(t,o[t])}),e&&e()}}};export{r as m};
