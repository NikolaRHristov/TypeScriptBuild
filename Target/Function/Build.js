var l=async(...[s,a])=>{for(const e of s)for(const p of await(await import("fast-glob")).default(e.replaceAll("'","").replaceAll('"',"")))i.push(p);i.reverse();const t=r((await import("../Variable/ESBuild.js")).default,{entryPoints:Object.fromEntries(i.map(e=>[e.replace("Source/","").split(".").slice(0,-1).join("."),e])),tsconfig:a?.TypeScript??"tsconfig.json"});console.log(await(await import("esbuild")).analyzeMetafile((await(await import("esbuild")).build(a?.ESBuild?r(t,await(await import("../Function/File.js")).default(a.ESBuild)):t))?.metafile??"",{verbose:!0})),o(`tsc -p ${t.tsconfig}`),o(`tsc-alias -p ${t.tsconfig}`)};const{default:o}=await import("../Function/Exec.js"),{default:r}=await import("../Function/Merge.js"),{resolve:c}=await import("path"),i=[],n=(await import("url")).fileURLToPath((await import("path")).dirname(import.meta.url));export{n as Current,o as Exec,r as Merge,i as Pipe,l as default,c as resolve};
