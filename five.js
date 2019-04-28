(function () {
  'use strict';
  const makeButton = document.getElementById('make');
  const resultDivided = document.getElementById('result-area');
  const tweetDivided = document.getElementById('tweet-area');
 
  var count = 0;


   /**
  * 指定した要素の子どもを全て削除する
  * @param {HTMLElement} element HTMLの要素
  */
 function removeAllChildren(element) {
  while (element.firstChild) { // 子どもの要素があるかぎり削除
    element.removeChild(element.firstChild);
  }
}
  makeButton.onclick = function() {
    console.log('ボタンが押されました');
    count++;
   

  

    // 診断結果表示エリアの作成
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = count +"回目の生成";
    resultDivided.appendChild(header);
  
    const paragraph = document.createElement('p');
    const result = five();
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);


    // ツイートエリアの作成
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
            + encodeURIComponent('ランダム5文字メーカー')
            + '&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', "「" + result + "」を生成しました (試行回数" + count + "回)");
    anchor.innerText = 'Tweet #ランダム5文字メーカー';
    tweetDivided.appendChild(anchor);
    
    twttr.widgets.load();

  };



  
  function five(){
    var l = 5;
    var c = "がぎぐげごっざじずせぞだぢゃゅょづてどばびぶべぼぱぴぷぺぽあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよわをんらりるれろ";
    
    var cl = c.length;
    var r = "";
    for(var i=0; i<l; i++){
      r += c[Math.floor(Math.random()*cl)];
    }
    return r;
  }
  



})();
