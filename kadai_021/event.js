// html要素の取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンクリック時にイベント処理実行
btn.addEventListener('click', () => {
  setTimeout(() => {
    // 2秒後にテキストの内容を書き換え
    text.textContent = 'ボタンをクリックしました';
  }, 2000);  
});