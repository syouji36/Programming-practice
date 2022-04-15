const quiz = [
    {
        question: 'ゲーム市場、最も売れたゲーム機は次の内どれ？',
        answers: [
            'スーパーファミコン',
            'プレイステーション２',
            'ニンテンドーDS',
            'ニンテンドースイッチ'
        ],
        correct: 'ニンテンドーDS'
    },{
        question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers: [
            'MOZHER2',
            'スーパーマリオブラザーズ3',
            'スーパードンキーコング',
            '星のカービィ'
        ],
        correct: 'MOZHER2'
    },{
        question: 'ファイナルファンタジーⅣの主人公の名前は？',
        answers: [
            'フリオニール',
            'クラウド',
            'ティーダ',
            'セシル'
        ],
        correct: 'セシル'
    }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByClassName('button');
const buttonLength = $button.length;
//クイズの問題
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

//クリックしたら正誤判定をする
 const clickHandler = (e) => {
     if(quiz[quizIndex].correct === e.target.textContent){
         window.alert('正解！！');
         score++;
     }else {
         window.alert('不正解！');
     }

     quizIndex++;

     if(quizIndex < quizLength){
         setupQuiz();
     }else{
         window.alert('終了！あなたのスコアは' + score + '/' + quizLength + 'です!');
     }
 };

let handerIndex = 0;

while(handerIndex < buttonLength){
    $button[handerIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handerIndex++;
};

