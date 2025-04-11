// CSS
let resetCSS = document.createElement("link");
    resetCSS.rel = "stylesheet";
    resetCSS.href = "CSS/reset.css";
    document.head.appendChild(resetCSS);

let colorThemeCSS = document.createElement("link");
    colorThemeCSS.rel = "stylesheet";
    colorThemeCSS.href = "CSS/colorTheme.css";
    document.head.appendChild(colorThemeCSS);

//favicon
let appleTouchIcon = document.createElement("link");
    appleTouchIcon.rel = "apple-touch-icon";
    appleTouchIcon.sizes = "180x180";
    appleTouchIcon.href = "Assets/favicon/apple-touch-icon.png";
    document.head.appendChild(appleTouchIcon);

let favicon32 = document.createElement("link");
    favicon32.rel = "icon";
    favicon32.type = "image/png";
    favicon32.sizes = "32x32";
    favicon32.href = "Assets/favicon/favicon-32x32.png";
    document.head.appendChild(favicon32);

let favicon16 = document.createElement("link");
    favicon16.rel = "icon";
    favicon16.type = "image/png";
    favicon16.sizes = "16x16";
    favicon16.href = "Assets/favicon/favicon-16x16.png";
    document.head.appendChild(favicon16);

let manifest = document.createElement("link");
    manifest.rel = "manifest";
    manifest.href = "Assets/favicon/site.webmanifest";
    document.head.appendChild(manifest);