// フローティング絵文字を生成する関数
function createFloatingEmojis() {
    const emojis = ['💖', '✨', '💕', '💫', '🌟', '💝', '💞', '💓', '💗', '💘', '💌', '🎀', '🌸', '🌈', '🍭', '🍬', '🍦', '🧁', '🍰', '🎂', '🍓', '🍒', '🌷', '🌹', '🦄', '🦋', '🌺', '🌻', '🌼', '🍩', '🍪', '🍧', '🍨'];
    const container = document.body;
    const count = 50; // 絵文字の数

    for (let i = 0; i < count; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'floating-emoji';

        // ランダムな絵文字を選択
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.textContent = randomEmoji;

        // ランダムな位置に配置
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        emoji.style.left = `${posX}%`;
        emoji.style.top = `${posY}%`;

        // ランダムなサイズ
        const size = Math.random() * 2 + 1;
        emoji.style.fontSize = `${size}rem`;

        // ランダムな移動方向と回転
        const moveX = (Math.random() - 0.5) * 200;
        const moveY = (Math.random() - 0.5) * 200;
        const rotateDeg = Math.random() * 360;
        emoji.style.setProperty('--move-x', `${moveX}px`);
        emoji.style.setProperty('--move-y', `${moveY}px`);
        emoji.style.setProperty('--rotate-deg', `${rotateDeg}deg`);

        // ランダムなアニメーション時間
        const duration = Math.random() * 60 + 30;
        emoji.style.animationDuration = `${duration}s`;

        // ランダムな遅延
        const delay = Math.random() * 10;
        emoji.style.animationDelay = `-${delay}s`;

        container.appendChild(emoji);
    }
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', function () {
    createFloatingEmojis();
}); 