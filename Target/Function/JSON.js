var t=async(...[e,a])=>JSON.parse((await(await import("node:fs/promises")).readFile(`${a??"."}/${e}`,"utf-8")).toString());export{t as default};
