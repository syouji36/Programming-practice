(() => {
const $doc = document;
const $tab = $doc.getElementById('js-tab');
const $nav = $tab.querySelectorAll('[data-nav]');
const $content = $tab.querySelectorAll('[data-content]');

//初期化
const init = () => {
  $content[0].style.display = 'block';
};
init();

//クリックされたら起こるイベント
 const handleClick = (e) => {
     e.preventDefault();
     //クリックされたDATAを取得
     const $this = e.target;
     const targetVal = $this.dataset.nav;
     console.log('targetVal',targetVal);
     //対象外のnav,contentを全て一旦リセットする
     let index = 0;
     while(index < $nav.length){
       $content[index].style.display='none';
       $nav[index].classList.remove('is-active');
       index++;
     }
     
 
      //対象のコンテンツをアクティブ化する
      $content[targetVal].style.display = 'block';
      $nav[targetVal].classList.add('is-active');
 } ;

//全NAV要素に対して関数を適応・発火
 let index = 0;
 while(index < $nav.length){
    $nav[index].addEventListener('click',(e) => handleClick(e));
    index++;
 }

 







console.log($content);
})();