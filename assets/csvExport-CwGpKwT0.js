function a(e){if(e==null)return"";const n=String(e);return/[",\n]/.test(n)?`"${n.replace(/"/g,'""')}"`:n}function l(e,n){if(!e.length)return"";const o=Array.from(new Set(e.flatMap(r=>Object.keys(r)))),c=o.map(a).join(","),t=e.map(r=>o.map(s=>a(r[s])).join(",")).join(`
`);return`${c}
${t}`}function d(e,n){const o=new Blob([n],{type:"text/csv;charset=utf-8"}),c=URL.createObjectURL(o),t=document.createElement("a");t.href=c,t.download=e,document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(c)}export{d,l as t};
