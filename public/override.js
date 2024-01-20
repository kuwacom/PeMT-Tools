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

// テーマCSSが部分的に適応されない問題の対処
function changeThemaCSSPriority() {
    // クラス名の中からテーマ名(ace-xxxx)を取得
    const themeName = $("#editor").attr('class').match(/ace-[a-zA-Z0-9-]+/)[0];
    console.log("Change Theme: " + themeName);
    // headタグ内にあるテーマ名と同じIDを持つstyleタグをheadの中の末尾に移動
    const style = $(`head > style#${themeName}`).clone();
    $(`head > style#${themeName}`).remove();
    $('head').append(style);
}

$(function(){
    // #editorのクラスの変更を監視
    const target = document.querySelector('#editor');
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.attributeName === 'class') {
                changeThemaCSSPriority();
            }
        });
    });
    // オブザーバの設定
    const config = {
        attributes: true
    };
    // 対象ノードとオブザーバの設定を渡す
    observer.observe(target, config);

    // デフォルトテーマにも対応
    changeThemaCSSPriority();
})