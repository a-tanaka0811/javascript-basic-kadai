// HTML要素取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// クリック時にイベント処理を実行
btn.addEventListener('click', () => {
  // textの内容を変更
  text.textContent = 'ボタンをクリックしました';
});