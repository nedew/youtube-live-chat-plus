// YouTube の再生ウィンドウ下部に表示するボタンコンポーネントをレンダリングする
console.log('YouTube Toggle Overlay');

const ytpButton = document.createElement('button');
ytpButton.id = 'ytlcp-toggle-overlay';
ytpButton.className = 'ytp-button';
const ytpRightControls = document.querySelector('.ytp-right-controls');

if (ytpRightControls) {
  const reference = document.querySelector('.ytp-settings-button');
  ytpRightControls.insertBefore(ytpButton, reference);
  // console.log(ytpRightControls);
}
