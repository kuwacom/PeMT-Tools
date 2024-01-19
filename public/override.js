// setTimeout(() => {
//     document.dispatchEvent(new CustomEvent('RW759_connectExtension', {
//         detail: window
//     }));
//     // console.log(window)
// }, 0);

console.log("=====================================================")


ace.require("ace/ext/language_tools");
editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    enableEmmet: true,

    fontSize: 16,
});