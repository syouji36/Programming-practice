(() => {
    let $snowContainer = document.querySelector('.snow-container');

    const createSnow = () => {
        //雪の要素を生成
        let $snow = document.createElement('span');
        $snow.className = 'snow';

        //雪の大きさをランダムにする
        let maxSize = 10;
        let miniSize = 5;
        let snowSize = Math.random() * (maxSize);

        $snow.style.width = snowSize + 'px';
        $snow.style.height = snowSize + 'px';

        //雪の降る位置をランダムにする
        $snow.style.left = Math.random() * 100 + '%';

        $snowContainer.appendChild($snow);

        //10秒後に雪を消す
        setTimeout(() => {
            $snow.remove();
        }, 10000);
    };

    setInterval(createSnow, 150);

})();