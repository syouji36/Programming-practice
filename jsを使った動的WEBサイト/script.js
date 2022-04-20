(() => {
    const $circle = document.getElementById('circle');
    const $upBtn = document.getElementById('upBtn');
    const $downBtn = document.getElementById('downBtn');

    let rotateValue = $circle.style.transform;
    console.log(rotateValue);
    let rotateSam;

    $upBtn.onclick = () => {
        rotateSam = rotateValue + 'rotate(-90deg)';
        $circle.style.transform = rotateSam;
        rotateValue = rotateSam;
    };

    $downBtn.onclick = () => {
        rotateSam = rotateValue + 'rotate(90deg)';
        $circle.style.transform = rotateSam;
        rotateValue = rotateSam;
    };

})();  