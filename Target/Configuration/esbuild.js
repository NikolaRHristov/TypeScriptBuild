import { copy as e } from "esbuild-plugin-copy";
import { rm as i } from "fs/promises";
const t="Target";var a={format:"esm",minify:!0,outdir:t,platform:"node",target:"esnext",write:!0,plugins:[{name:"Target",setup(o){o.onStart(async()=>{try{await i(t,{recursive:!0})}catch(r){console.log(r)}})}},e({resolveFrom:"out",assets:[{from:"./Source/Configuration/TypeScript.json",to:"./Configuration/"}]})]};export { a as default };

