import * as Application from './application';

declare var require: (modules: string[], ready: Function, errback: Function) => void;

// Testen und laden Sie plattformspezifischen Code aus dem Ordner "/merges".
// Weitere Informationen finden Sie unter http://taco.visualstudio.com/de-de/docs/configure-app/#Content.
require(["./platformOverrides"],
    () => Application.initialize(),
    () => Application.initialize());