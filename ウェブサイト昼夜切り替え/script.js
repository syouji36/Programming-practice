(() => {
    let $body = document.querySelector('#js-body');   
    let $logo = document.querySelector('#js-logo');
    
    
    $logo.onclick = () => {
        $body.classList.toggle('dark-mode');
        if($body.classList.contains('dark-mode')){
            console.log('hello');
            $logo.src = 'img/sun.png';
        }else{
            console.log('unko');
            $logo.src = 'img/moon.png';
        }
    };



})();