export function injectRequest() {
    if (__DEV__) {
        global.XMLHttpRequest = global.originalXMLHttpRequest ?
            global.originalXMLHttpRequest :
            global.XMLHttpRequest;
        global.FormData = global.originalFormData ?
            global.originalFormData :
            global.FormData;
    }
}