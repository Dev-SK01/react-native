import{p as i,s as u}from"./FileSizeBadge.vue.9X-6oYv4.js";import{e as v,j as l,k as d,q as b,o as m,O as k,n as f,w as y,a as B,g as C}from"../entry.BBXTE6X0.js";function w(o){const a=i.compareA.has(o),s=i.compareB.has(o);return a&&s?"both":a?"a":s?"b":"none"}const z=v({__name:"PackageBorder",props:{pkg:{},outer:{},inner:{},as:{default:"div"},fade:{type:Boolean,default:!1},borderBase:{default:"border-base"},highlightMode:{default:"focus"}},setup(o){const a=o,s=l(()=>u.value===a.pkg),n=l(()=>u.value?s.value||i.avaliable.flatDependents(u.value).includes(a.pkg)||i.avaliable.flatDependencies(u.value).includes(a.pkg):!1),c=l(()=>u.value&&!n.value),p=l(()=>{var e,t;return a.pkg?((e=d.state.focus)==null?void 0:e.includes(a.pkg.spec))||((t=d.state.why)==null?void 0:t.includes(a.pkg.spec)):!1}),r=l(()=>a.highlightMode!=="compare"?"none":w(a.pkg)),h=l(()=>{var t;const e=[];return n.value?e.push("z-graph-node-active"):e.push("z-graph-node"),p.value?e.push("border-teal:50"):s.value?e.push("border-primary"):n.value?e.push("border-primary:50"):r.value==="none"&&e.push(a.borderBase),r.value==="both"?e.push("border-pink5:50"):r.value==="a"?e.push("border-yellow5:50"):r.value==="b"&&e.push("border-purple5:50"),s.value&&(p.value?e.push("ring-3 ring-teal:25! text-teal-600 dark:text-teal-300 border-teal!"):e.push("ring-3 ring-primary:25! text-primary-600 dark:text-primary-300")),(t=a.pkg)!=null&&t.private&&e.push("border-dashed!"),e}),g=l(()=>{const e=[];return p.value?e.push("bg-teal:10!"):s.value?e.push("bg-primary:10!"):r.value==="both"?e.push("bg-pink5:10"):r.value==="a"?e.push("bg-yellow5:10"):r.value==="b"&&e.push("bg-purple5:10"),c.value&&a.fade&&e.push("op75"),e});return(e,t)=>(m(),b(k(e.as),{class:f([h.value,e.outer]),"bg-base":""},{default:y(()=>[B("div",{class:f([g.value,e.inner])},[C(e.$slots,"default")],2)]),_:3},8,["class"]))}});export{z as _,w as g};
