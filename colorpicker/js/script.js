console.log(document.querySelector('#colorPicker') . value);

const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {
    // 選択したカラーコードを表示
    text.textContent = `カラーコード：${color.value}`;
    // 選択したカラーを背景色に反映
    document.body.style.backgroundColor = color.value;
}

color.addEventListener('input', colorBg);

