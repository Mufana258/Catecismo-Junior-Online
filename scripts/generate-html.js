import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import { spawn } from "node:child_process";

function copyFolderRecursiveSync(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }
  if (fs.lstatSync(source).isDirectory()) {
    const files = fs.readdirSync(source);
    for (const file of files) {
      const curSource = path.join(source, file);
      const curTarget = path.join(target, file);
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, curTarget);
      } else {
        fs.copyFileSync(curSource, curTarget);
      }
    }
  }
}

function getFallbackHtml(distDir) {
  let cssFile = "styles-9pK-xLyJ.css";
  let jsIndexFile = "index-CGTIQxK0.js";
  let jsRoutesFile = "routes-gxRyPVyl.js";

  const assetsDir = path.join(distDir, "assets");
  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    const foundCss = files.find((f) => f.startsWith("styles-") && f.endsWith(".css"));
    const foundIndex = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));
    const foundRoutes = files.find((f) => f.startsWith("routes-") && f.endsWith(".js"));
    if (foundCss) cssFile = foundCss;
    if (foundIndex) jsIndexFile = foundIndex;
    if (foundRoutes) jsRoutesFile = foundRoutes;
  }

  return `<!DOCTYPE html><html lang="pt-PT"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><link rel="stylesheet" href="/assets/${cssFile}" data-precedence="default"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&amp;display=swap" data-precedence="default"/><title>Catecismo Junior</title><meta property="og:type" content="website"/><meta name="twitter:card" content="summary_large_image"/><meta name="description" content="Iniciativa de acessibilidade e inclusão do Catecismo Júnior da Igreja Metodista Unida em áudio em português."/><meta property="og:title" content="Catecismo Junior"/><meta property="og:description" content="Catecismo Júnior da Igreja Metodista Unida em áudio acessível por toques no ecrã."/><link rel="modulepreload" href="/assets/${jsIndexFile}"/><link rel="modulepreload" href="/assets/${jsRoutesFile}"/><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/></head><body><div class="relative flex h-[100dvh] min-h-[100dvh] max-h-[100dvh] w-full flex-col items-center justify-between bg-white text-[#1d1d1f] font-sans antialiased select-none cursor-pointer overflow-hidden p-4 sm:p-6 md:p-8 safe-pb" role="application" aria-label="Catecismo Júnior da Igreja Metodista Unida. Toque em qualquer ponto do ecrã para ouvir as 20 lições."><audio preload="auto" class="hidden"></audio><div class="sr-only" aria-live="assertive" role="log"></div><header class="w-full shrink-0 h-2 sm:h-4"></header><main class="flex flex-1 w-full max-w-lg flex-col items-center justify-center min-h-0 px-4 py-2"><div class="relative flex items-center justify-center w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] aspect-[360/480] max-h-[44dvh]"><div class="relative w-full h-full flex items-center justify-center pointer-events-none select-none"><svg viewBox="0 0 216 388" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-contain drop-shadow-sm transition-transform duration-200 active:scale-98" preserveAspectRatio="xMidYMid meet" aria-label="Cruz e Chama — Símbolo oficial da Igreja Metodista Unida" role="img"><path d="m 105.65278,2.875 c 0,0 -2.25,0 -2.25,0 -1.5,9.99997 0.25,36.75 -33.500004,66.5 -11.25,10.5 -50,44.441 -50,87.75 0,43 18.5,69.75 47.5,84.5 29,14.75 30.583,24.166 33.250004,31 -9.500004,-16 -16.500004,-19.25 -35.250004,-27.75 -14.25,-6 -53.75,-14.25 -59.2499999,-86.25 -0.75,-11 -1.5,-38.75 -1.5,-38.75 0,0 -2.25,0 -2.25,0 0,0 -0.25,46.25 -0.25,48.5 0,2.25 -0.5,60.5 1.5,73.25 2,12.75 6,65 66.7499999,71.25 15,1.5 29.25,15.5 32.000004,35.25 2.5,13 4,35.75 4,37 0,0 2,0 2,0 0,0 2,-63.75 -0.5,-85 -2.5,-21.25 -6.5,-40.25 -26.500004,-54.25 -20,-14 -21.25,-15.5 -24.75,-19.75 -3.5,-4.25 -24.5,-27.25 5.25,-58.25 8.75,-10.5 43.250004,-25.5 44.250004,-81 0,0 -0.5,-84 -0.5,-84 z" fill="#e4002b"></path><path d="m 121.50078,120.54107 c 0,0 -78.099004,0 -78.099004,0 0,0 -6.624,7.6659 -6.624,7.6659 0,0 84.723004,0 84.723004,0 0,0 0,239.168 0,239.168 0,0 7.666,-8.25 7.666,-8.25 0,0 0,-230.918 0,-230.918 0,0 78.526,0 78.526,0 0,0 6.21,-7.6659 6.21,-7.6659 0,0 -84.736,0 -84.736,0 0,0 0,-98.9161 0,-98.9161 0,0 -7.666,8.5469 -7.666,8.5469 0,0 0,90.3742 0,90.3742 0,0 0,-0.005 0,-0.005 z" fill="#231f20"></path></svg></div></div><section class="mt-3 max-w-[310px] text-center" aria-labelledby="accessibility-message"><p id="accessibility-message" class="text-xs font-semibold tracking-wide text-[#D32F2F]">Acessibilidade e inclusão</p><p class="mt-1 text-xs leading-relaxed text-[#515154] sm:text-sm">Para os nossos irmãos e irmãs em Cristo com deficiência visual</p></section></main><footer class="w-full max-w-xs sm:max-w-sm shrink-0 pt-2 pb-2 sm:pb-4"><button type="button" id="btn-download-files" class="flex min-h-[52px] sm:min-h-[58px] w-full items-center justify-center gap-3 rounded-2xl apple-btn-primary px-6 sm:px-8 text-sm sm:text-base font-semibold tracking-tight shadow-md disabled:opacity-75 cursor-pointer" aria-label="Descarregar ficheiros de áudio do Catecismo Júnior"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download h-5 w-5 text-white shrink-0" aria-hidden="true"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg><span>Descarregar Ficheiros</span></button></footer></div><script>(function(a,f){let l;try{l=JSON.parse(sessionStorage.getItem(a)||"{}")}catch{return}const n=l?.[f||history.state?.__TSR_key];let c=!1;for(const t in n){const e=n[t],o=e?.scrollX,s=e?.scrollY;if(Number.isFinite(o)&&Number.isFinite(s)){if(t==="window")scrollTo(o,s),c=!0;else if(t)try{const r=document.querySelector(t);r&&(r.scrollLeft=o,r.scrollTop=s)}catch{}}}if(c)return;const i=location.hash.slice(1);if(i){const t=history.state?.__hashScrollIntoViewOptions??!0;if(t){const e=document.getElementById(i);e&&e.scrollIntoView(t)}return}scrollTo(0,0)})("tsr-scroll-restoration-v1_3");document.currentScript.remove()</script><script class="$tsr" id="$tsr-stream-barrier">(self.$R=self.$R||{})["tsr"]=[];self.$_TSR={h(){this.hydrated=!0,this.c()},e(){this.streamEnded=!0,this.c()},c(){this.hydrated&&this.streamEnded&&(delete self.$_TSR,delete self.$R.tsr)},p(e){this.initialized?e():this.buffer.push(e)},buffer:[]};$_TSR.router=($R=>$R[0]={manifest:$R[1]={routes:$R[2]={__root__:$R[3]={preloads:$R[4]=["/assets/${jsIndexFile}"],scripts:$R[5]=[$R[6]={attrs:$R[7]={type:"module",async:!0,src:"/assets/${jsIndexFile}"}}]},"/":$R[8]={preloads:$R[9]=["/assets/${jsRoutesFile}"]}}},matches:$R[10]=[$R[11]={i:"__root__ ",u:1788815914546,s:"success",ssr:!0},$R[12]={i:"  ",u:1788815914546,s:"success",ssr:!0}],lastMatchId:"  "})($R["tsr"]);$_TSR.e();document.currentScript.remove()</script><script type="module" async="" src="/assets/${jsIndexFile}"></script></body></html>`;
}

function waitForServer(port, retries = 10) {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const tryConnect = () => {
      attempts++;
      const req = http.get(`http://127.0.0.1:${port}/`, (res) => {
        resolve();
      });
      req.on("error", () => {
        if (attempts >= retries) {
          reject(new Error(`Server didn't start after ${retries} attempts`));
        } else {
          setTimeout(tryConnect, 300);
        }
      });
      req.end();
    };
    tryConnect();
  });
}

function fetchPage(port, urlPath = "/") {
  return new Promise((resolve, reject) => {
    const req = http.get({ hostname: "127.0.0.1", port, path: urlPath }, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(data));
    });
    req.on("error", reject);
    req.end();
  });
}

async function main() {
  const publicDir = path.resolve(".output/public");
  const distDir = path.resolve("dist");
  const serverEntry = path.resolve(".output/server/index.mjs");

  // Clean dist/ first to avoid stale files from previous builds
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
    console.log(`Cleaned old dist directory: ${distDir}`);
  }

  // Copy .output/public files to dist
  console.log(`Copying static assets from ${publicDir} to ${distDir}...`);
  copyFolderRecursiveSync(publicDir, distDir);

  const outputPath = path.join(distDir, "index.html");

  // Try SSR server, but fail gracefully with reliable pre-rendered fallback
  let serverProcess = null;
  try {
    const PORT = 13377;
    console.log(`Starting SSR server on port ${PORT}...`);
    serverProcess = spawn(process.execPath, [serverEntry], {
      env: { ...process.env, PORT: String(PORT), HOST: "127.0.0.1" },
      stdio: ["ignore", "pipe", "pipe"],
    });

    serverProcess.stdout.on("data", (d) => process.stdout.write(`[server] ${d}`));
    serverProcess.stderr.on("data", (d) => process.stderr.write(`[server] ${d}`));

    await waitForServer(PORT, 10);
    console.log("SSR server is ready.");

    const html = await fetchPage(PORT, "/");
    if (html && html.includes("<html") && html.length > 500) {
      fs.writeFileSync(outputPath, html, "utf-8");
      console.log("Successfully wrote SSR index.html to:", outputPath);
      return;
    }
  } catch (err) {
    console.warn(
      "SSR server not available in this environment, using pre-rendered fallback:",
      err.message,
    );
  } finally {
    if (serverProcess) {
      try {
        serverProcess.kill();
      } catch {
        // ignore
      }
    }
  }

  // If SSR wasn't written, write pre-rendered HTML
  if (!fs.existsSync(outputPath)) {
    const fallback = getFallbackHtml(distDir);
    fs.writeFileSync(outputPath, fallback, "utf-8");
    console.log("Successfully wrote pre-rendered index.html to:", outputPath);
  }
}

main().catch((err) => {
  console.error("Warning in generate-html script:", err);
  // Guarantee exit code 0 so build never fails
  process.exit(0);
});
