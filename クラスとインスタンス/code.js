(() => {
    const $elm = document.querySelector('#js-accordion');
    const $trigger = $elm.getElementsByTagName('a');
    
    let index = 0;
    while(index < $trigger.length){
        $trigger[index].addEventListener('click',(e) => clickHandler(e));
        index++;
    }

    const clickHandler = (e) => {
        console.log('clicked');

        const $content = e.target.nextElementSibling;
        if($content.style.display === 'block'){
            $content.style.display = 'none';
        }else{
            $content.style.display = 'block';
        }
    }


})();