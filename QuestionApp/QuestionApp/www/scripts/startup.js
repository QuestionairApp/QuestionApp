define(["require", "exports", "./application"], function (require, exports, Application) {
    "use strict";
    // Testen und laden Sie plattformspezifischen Code aus dem Ordner "/merges".
    // Weitere Informationen finden Sie unter http://taco.visualstudio.com/de-de/docs/configure-app/#Content.
    require(["./platformOverrides"], function () { return Application.initialize(); }, function () { return Application.initialize(); });
});
//# sourceMappingURL=startup.js.map