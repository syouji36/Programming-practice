(() => {
    console.log('hello');
class Accordion {
    //初期化
    constructor(obj){
        const $elm = document.querySelector(obj.hookName);
        const $trigger = $elm.getElementsByTagName(obj.tagName);
        
        let index = 0;
        while(index < $trigger.length){
            $trigger[index].addEventListener('click',(e) => this.clickHandler(e));
            index++;
        }     
    }
    clickHandler = (e) => {
        const $content = e.target.nextElementSibling;
        if($content.style.display === 'block'){
            $content.style.display = 'none';
        }else{
            $content.style.display = 'block';
        }
    }
}
const fuckingAccordion = new Accordion({
    hookName: '#js-accordion',
    tagName: 'a'
});
const dummyAccordion = new Accordion({
    hookName: '#js-accordion-dummy',
    tagName: 'a'
});
const miniAccordion = new Accordion({
    hookName: '#js-accordion-mini',
    tagName: 'a'
});





})();