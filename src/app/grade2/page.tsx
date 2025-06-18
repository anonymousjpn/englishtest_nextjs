"use client";
import React from 'react';
import { useState,useEffect } from "react";
const Grade2=():React.JSX.Element=>{
  const [selectedValue1, setSelectedValue1] = useState<string>("");
  const [selectedValue2, setSelectedValue2] = useState<string>("");
  const [selectedValue3, setSelectedValue3] = useState<string>("");
  const [selectedValue4, setSelectedValue4] = useState<string>("");
  const [selectedValue5, setSelectedValue5] = useState<string>("");
  const [textValue1, setTextValue1] = useState<string>("h");
  const [textValue2, setTextValue2] = useState<string>("i");
  const [textValue3, setTextValue3] = useState<string>("o");
  const [textValue4, setTextValue4] = useState<string>("a");
  const [textValue5, setTextValue5] = useState<string>("i");
  const [selectedValue6, setSelectedValue6] = useState<string>("");
  const [selectedValue7, setSelectedValue7] = useState<string>("");
  const [selectedValue8, setSelectedValue8] = useState<string>("");
  const [selectedValue9, setSelectedValue9] = useState<string>("");
  const [selectedValue10, setSelectedValue10] = useState<string>("");
  const [textValue6, setTextValue6] = useState<string>("a f");
  const [textValue7, setTextValue7] = useState<string>("d h t");
  const [textValue8, setTextValue8] = useState<string>("r f");
  const [textValue9, setTextValue9] = useState<string>("I t l r");
  const [textValue10, setTextValue10] = useState<string>("W r t");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [deleted, setDeleted] = useState<boolean>(false);
  const [countWords, setCountWords] = useState<number>(0);
  const [countIdioms, setCountIdioms] = useState<number>(0);
  useEffect(():void => {
    if (submitted) {
      let correctWords:number = 0;
      let correctIdioms:number = 0;
      if (selectedValue1 === "true") correctWords++;
      if (selectedValue2 === "true") correctWords++;
      if (selectedValue3 === "true") correctWords++;
      if (selectedValue4 === "true") correctWords++;
      if (selectedValue5 === "true") correctWords++;
      if (textValue1.trim() === "hesitated") correctWords++;
      if (textValue2.trim() === "imitating") correctWords++;
      if (textValue3.trim() === "offended") correctWords++;
      if (textValue4.trim() === "accomplish") correctWords++;
      if (textValue5.trim() === "ignore") correctWords++;
      if (selectedValue6 === "true") correctIdioms++;
      if (selectedValue7 === "true") correctIdioms++;
      if (selectedValue8 === "true") correctIdioms++;
      if (selectedValue9 === "true") correctIdioms++;
      if (selectedValue10 === "true") correctIdioms++;
      if (textValue6.trim() === "account for") correctIdioms++;
      if (textValue7.trim() === "devoting himself to") correctIdioms++;
      if (textValue8.trim() === "refrain from") correctIdioms++;
      if (textValue9.trim() === "In the long run") correctIdioms++;
      if (textValue10.trim() === "With respect to") correctIdioms++;
      setCountWords(correctWords);
      setCountIdioms(correctIdioms);
    }
  }, [submitted]);
  type handleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>void;
  const handleRadioChange1:handleInputChange = (event) => {
    setSelectedValue1(event.target.value);
    setSubmitted(false);
  };
  const handleRadioChange2:handleInputChange = (event) => {
    setSelectedValue2(event.target.value);
    setSubmitted(false);
  };
  const handleRadioChange3:handleInputChange = (event) => {
    setSelectedValue3(event.target.value);
    setSubmitted(false);
  };
  const handleRadioChange4:handleInputChange = (event) => {
    setSelectedValue4(event.target.value);
    setSubmitted(false);
  };
  const handleRadioChange5:handleInputChange = (event) => {
    setSelectedValue5(event.target.value);
    setSubmitted(false);
  };
  const handleTextChange1:handleInputChange = (event) => {
    setTextValue1(event.target.value);
    setSubmitted(false);
  };
  const handleTextChange2:handleInputChange = (event) => {
    setTextValue2(event.target.value);
    setSubmitted(false);
  };
  const handleTextChange3:handleInputChange = (event) => {
    setTextValue3(event.target.value);
    setSubmitted(false);
  };
  const handleTextChange4:handleInputChange = (event) => {
    setTextValue4(event.target.value);
    setSubmitted(false);
  };
  const handleTextChange5:handleInputChange = (event) => {
    setTextValue5(event.target.value);
    setSubmitted(false);
  };
  const handleRadioChange6:handleInputChange = (event) => {
    setSelectedValue6(event.target.value);
    setSubmitted(false);
  };
  const handleRadioChange7:handleInputChange = (event) => {
    setSelectedValue7(event.target.value);
    setSubmitted(false);
  };
  const handleRadioChange8:handleInputChange = (event) => {
    setSelectedValue8(event.target.value);
    setSubmitted(false);
  };
  const handleRadioChange9:handleInputChange = (event) => {
    setSelectedValue9(event.target.value);
    setSubmitted(false);
  };
  const handleRadioChange10:handleInputChange = (event) => {
    setSelectedValue10(event.target.value);
    setSubmitted(false);
  };
  const handleTextChange6:handleInputChange = (event) => {
    setTextValue6(event.target.value);
    setSubmitted(false);
  };
  const handleTextChange7:handleInputChange = (event) => {
    setTextValue7(event.target.value);
    setSubmitted(false);
  };
  const handleTextChange8:handleInputChange = (event) => {
    setTextValue8(event.target.value);
    setSubmitted(false);
  };
  const handleTextChange9:handleInputChange = (event) => {
    setTextValue9(event.target.value);
    setSubmitted(false);
  };
  const handleTextChange10:handleInputChange = (event) => {
    setTextValue10(event.target.value);
    setSubmitted(false);
  };
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>):void => {
    event.preventDefault();
    const NativeEvent=event.nativeEvent as SubmitEvent;
    const button = NativeEvent.submitter as HTMLButtonElement;
    if (button.value == "submit") {
      setSubmitted(true);
    }
  };
  const handleDeleted = (value:string):void => {
    if (value == "delete") {
      setDeleted(!deleted);
      setSubmitted(false);
      setSelectedValue1("");
      setSelectedValue2("");
      setSelectedValue3("");
      setSelectedValue4("");
      setSelectedValue5("");
      setSelectedValue6("");
      setSelectedValue7("");
      setSelectedValue8("");
      setSelectedValue9("");
      setSelectedValue10("");
      setTextValue1("h");
      setTextValue2("i");
      setTextValue3("o");
      setTextValue4("a");
      setTextValue5("i");
      setTextValue6("a f");
      setTextValue7("d h t");
      setTextValue8("r f");
      setTextValue9("I t l r");
      setTextValue10("W r t");
      setCountWords(0);
      setCountIdioms(0);
    }
  }
  function results(countWords:number, countIdioms:number, possibility:string, explain:string):React.ReactNode {
    return (
      <>
        <h2 className="result">結果</h2>
        <h3 className="result">20問中、英単語問題は{countWords}問、英熟語問題は{countIdioms}問正解です。</h3>
        <h3 className="result">{possibility}</h3>
        <p className="result">{explain}</p>
        <h2 className="answer">解答</h2>
        <p className="answer"><strong>英単語編:</strong>1.宿泊設備 2.分類 3.目的地 4.基礎 5.幻覚 6.hesitated 7.imitating 8.offended 9.accomplish 10.ignore</p>
        <p className="answer"><strong>英熟語編:</strong>1.～を請求する 2.見せびらかす 3.引き継ぐ 4.～の埋め合わせをする 5.一時解雇する 6.account for 7.devoting himself to 8.refrain from 9.In the long run 10.With respect to</p>
      </>
    )
  }
  function displayResults():React.ReactNode {
    if ((countWords + countIdioms) <= 8) {
      return results(countWords, countIdioms, "合格可能性:0%～10%", "残念ながら、この級に合格する可能性はかなり低いです。基礎的な英単語・英熟語を一通り暗記してから再挑戦してみてください。また、問題が難しく感じた場合は、準2級の問題にも挑戦してみてください。");
    }
    else if (9 <= (countWords + countIdioms) && (countWords + countIdioms) <= 12) {
      return results(countWords, countIdioms, "合格可能性:20%～40%", "この級に合格する可能性は現時点では低いですが、継続して学習を続ければ、合格できる可能性があります。間違えた問題を確認し、英単語・英熟語帳を再度読み込んでから再挑戦してみてください。リーディング、リスニング、スピーキング、ライティングの勉強にも取り組んでください。");
    }
    else if (13 <= (countWords + countIdioms) && (countWords + countIdioms) <= 16) {
      return results(countWords, countIdioms, "合格可能性:60%～80%", "この級に合格する可能性は、英単語・英熟語の習得率で判断すると高いですが、油断はできません。間違えた問題を確認し、英単語・英熟語帳に暗記漏れがないかどうかを確認してください。リーディング、リスニング、スピーキング、ライティングの勉強の継続も合格率をあげるには重要です。");
    }
    else if (17 <= (countWords + countIdioms)) {
      return results(countWords, countIdioms, "合格可能性:90%～100%", "この級に合格する可能性は、英単語・英熟語の習得率で判断すると、かなり高いと言えます。より合格を確実にしたい場合は、リーディング、リスニング、スピーキング、ライティングの勉強を継続してください。また、自信があれば準1級の問題にも挑戦してみてください。");
    }
  }
  return (
    <div>
      <h2>級の概要</h2>
      <p>英検2級では、約5100語が合格するために習得すべき語彙数であるとされています。どの英単語・英熟語も英語圏における社会的な話題を理解するには重要な語彙であり、特に大学受験において、英語長文や英作文、リスニングなどの対策をする上で必須の語彙とも言えます。</p>
      <h2>問題の解答方法について</h2>
      <p>問題は、英単語編・英熟語編の2部に分かれており、それぞれ10問解答する必要があります。それぞれ10問のうち、前半5問は英単語・英熟語の日本語訳として最も適切なものを1つ選ぶ選択肢問題、後半5問は英文の空欄に当てはまる語彙を英文の下にある日本語訳から推測して半角英数字で解答を記入する記述問題で構成されています。なお、記述問題は問題によっては複数の解答が正解になるため、空欄に初期の状態で入力済みのアルファベット1文字を解答の頭文字として利用してください。（英熟語の記述問題の場合は、複数単語の記入が必要になるため、空欄に初期の状態で入力済みのアルファベット1文字目を最初の単語の頭文字、2文字目を2番目の単語の頭文字、⋯と利用して解答してください。）英熟語の記述問題では、単語の間に半角スペースを1つ必ず空けてください。（2つ以上半角スペースを空けた場合や、全角スペースを空けた場合は、不正解となりますので、注意してください。）また、解答が完了したら「解答を送信」ボタンを押し、各問題の正解・不正解を確認しつつ、あなたが挑戦した級の合否可能性を閲覧してください。問題に再挑戦したい場合は、「結果・解答をクリア」ボタンを押して下さい。</p>
      <form name="grade2" onSubmit={handleSubmit}>
        <h2 id="part1">英単語編</h2>
        <p id="question1">1.accommodation</p>
        <input type="radio" name="accommodation" value="false1" checked={selectedValue1 === "false1"} onChange={handleRadioChange1} disabled={submitted} required />推薦
        <input type="radio" name="accommodation" value="false2" checked={selectedValue1 === "false2"} onChange={handleRadioChange1} disabled={submitted} />賞賛
        <input type="radio" name="accommodation" value="false3" checked={selectedValue1 === "false3"} onChange={handleRadioChange1} disabled={submitted} />結合
        <input type="radio" name="accommodation" value="true" checked={selectedValue1 === "true"} onChange={handleRadioChange1} disabled={submitted} />宿泊設備
        {submitted && selectedValue1 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue1 === "true" && <p className="true">〇正解</p>}
        <p id="question2">2.classification</p>
        <input type="radio" name="classification" value="true" checked={selectedValue2 === "true"} onChange={handleRadioChange2} disabled={submitted} required />分類
        <input type="radio" name="classification" value="false1" checked={selectedValue2 === "false1"} onChange={handleRadioChange2} disabled={submitted} />明確化
        <input type="radio" name="classification" value="false2" checked={selectedValue2 === "false2"} onChange={handleRadioChange2} disabled={submitted} />正当化
        <input type="radio" name="classification" value="false3" checked={selectedValue2 === "false3"} onChange={handleRadioChange2} disabled={submitted} />多様化
        {submitted && selectedValue2 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue2 === "true" && <p className="true">〇正解</p>}
        <p id="question3">3.destination</p>
        <input type="radio" name="destination" value="false1" checked={selectedValue3 === "false1"} onChange={handleRadioChange3} disabled={submitted} required />運命
        <input type="radio" name="destination" value="false2" checked={selectedValue3 === "false2"} onChange={handleRadioChange3} disabled={submitted} />指定
        <input type="radio" name="destination" value="true" checked={selectedValue3 === "true"} onChange={handleRadioChange3} disabled={submitted} />目的地
        <input type="radio" name="destination" value="false3" checked={selectedValue3 === "false3"} onChange={handleRadioChange3} disabled={submitted} />決定
        {submitted && selectedValue3 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue3 === "true" && <p className="true">〇正解</p>}
        <p id="question4">4.foundation</p>
        <input type="radio" name="foundation" value="false1" checked={selectedValue4 === "false1"} onChange={handleRadioChange4} disabled={submitted} required />資金
        <input type="radio" name="foundation" value="true" checked={selectedValue4 === "true"} onChange={handleRadioChange4} disabled={submitted} />基礎
        <input type="radio" name="foundation" value="false2" checked={selectedValue4 === "false2"} onChange={handleRadioChange4} disabled={submitted} />公式
        <input type="radio" name="foundation" value="false3" checked={selectedValue4 === "false3"} onChange={handleRadioChange4} disabled={submitted} />形成
        {submitted && selectedValue4 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue4 === "true" && <p className="true">〇正解</p>}
        <p id="question5">5.illusion</p>
        <input type="radio" name="illusion" value="false1" checked={selectedValue5 === "false1"} onChange={handleRadioChange5} disabled={submitted} required />混乱
        <input type="radio" name="illusion" value="false2" checked={selectedValue5 === "false2"} onChange={handleRadioChange5} disabled={submitted} />分散
        <input type="radio" name="illusion" value="true" checked={selectedValue5 === "true"} onChange={handleRadioChange5} disabled={submitted} />幻覚
        <input type="radio" name="illusion" value="false3" checked={selectedValue5 === "false3"} onChange={handleRadioChange5} disabled={submitted} />妄想
        {submitted && selectedValue5 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue5 === "true" && <p className="true">〇正解</p>}
        <p id="question6">6.I <input type="text" id="hesitated" value={textValue1} onChange={handleTextChange1} disabled={submitted} required /> to purchase the ticket.</p>
        <p>訳：私は、そのチケットを購入することをためらった。</p>
        {submitted && textValue1.trim() !== "hesitated" && <p className="false">✕不正解</p>}{submitted && textValue1.trim() === "hesitated" && <p className="true">〇正解</p>}
        <p id="question7">7.He dislikes <input type="text" id="imitating" value={textValue2} onChange={handleTextChange2} disabled={submitted} required /> other people's behavior.</p>
        <p>訳：彼は、他人の行動を真似するのを嫌います。</p>
        {submitted && textValue2.trim() !== "imitating" && <p className="false">✕不正解</p>}{submitted && textValue2.trim() === "imitating" && <p className="true">〇正解</p>}
        <p id="question8">8.If my story <input type="text" id="offended" value={textValue3} onChange={handleTextChange3} disabled={submitted} required /> you, I would like to apologize to you.</p>
        <p>訳：もし私の話があなたの気分を害したのなら、私はあなたに謝りたい。</p>
        {submitted && textValue3.trim() !== "offended" && <p className="false">✕不正解</p>}{submitted && textValue3.trim() === "offended" && <p className="true">〇正解</p>}
        <p id="question9">9.He managed to <input type="text" id="accomplish" value={textValue4} onChange={handleTextChange4} disabled={submitted} required /> his work.</p>
        <p>訳：彼は、何とか仕事をやり遂げることができました。</p>
        {submitted && textValue4.trim() !== "accomplish" && <p className="false">✕不正解</p>}{submitted && textValue4.trim() === "accomplish" && <p className="true">〇正解</p>}
        <p id="question10">10.Why did you <input type="text" id="ignore" value={textValue5} onChange={handleTextChange5} disabled={submitted} required /> his message?</p>
        <p>訳：なぜあなたは彼のメッセージを無視したのですか。</p>
        {submitted && textValue5.trim() !== "ignore" && <p className="false">✕不正解</p>}{submitted && textValue5.trim() === "ignore" && <p className="true">〇正解</p>}
        <h2 id="part2">英熟語編</h2>
        <p id="question11">1.charge for</p>
        <input type="radio" name="charge" value="false1" checked={selectedValue6 === "false1"} onChange={handleRadioChange6} disabled={submitted} required />～を担当する
        <input type="radio" name="charge" value="false2" checked={selectedValue6 === "false2"} onChange={handleRadioChange6} disabled={submitted} />～に突進する
        <input type="radio" name="charge" value="false3" checked={selectedValue6 === "false3"} onChange={handleRadioChange6} disabled={submitted} />～を訴える
        <input type="radio" name="charge" value="true" checked={selectedValue6 === "true"} onChange={handleRadioChange6} disabled={submitted} />～を請求する
        {submitted && selectedValue6 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue6 === "true" && <p className="true">〇正解</p>}
        <p id="question12">2.show off</p>
        <input type="radio" name="show" value="false1" checked={selectedValue7 === "false1"} onChange={handleRadioChange7} disabled={submitted} required />現れる
        <input type="radio" name="show" value="false2" checked={selectedValue7 === "false2"} onChange={handleRadioChange7} disabled={submitted} />案内する
        <input type="radio" name="show" value="true" checked={selectedValue7 === "true"} onChange={handleRadioChange7} disabled={submitted} />見せびらかす
        <input type="radio" name="show" value="false3" checked={selectedValue7 === "false3"} onChange={handleRadioChange7} disabled={submitted} />見送りする
        {submitted && selectedValue7 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue7 === "true" && <p className="true">〇正解</p>}
        <p id="question13">3.take over</p>
        <input type="radio" name="take" value="false1" checked={selectedValue8 === "false1"} onChange={handleRadioChange8} disabled={submitted} required />離陸する
        <input type="radio" name="take" value="false2" checked={selectedValue8 === "false2"} onChange={handleRadioChange8} disabled={submitted} />騙す
        <input type="radio" name="take" value="true" checked={selectedValue8 === "true"} onChange={handleRadioChange8} disabled={submitted} />引き継ぐ
        <input type="radio" name="take" value="false3" checked={selectedValue8 === "false3"} onChange={handleRadioChange8} disabled={submitted} />似ている
        {submitted && selectedValue8 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue8 === "true" && <p className="true">〇正解</p>}
        <p id="question14">4.make up for</p>
        <input type="radio" name="make" value="false1" checked={selectedValue9 === "false1"} onChange={handleRadioChange9} disabled={submitted} required />～を理解する
        <input type="radio" name="make" value="true" checked={selectedValue9 === "true"} onChange={handleRadioChange9} disabled={submitted} />～の埋め合わせをする
        <input type="radio" name="make" value="false2" checked={selectedValue9 === "false2"} onChange={handleRadioChange9} disabled={submitted} />～に役立つ
        <input type="radio" name="make" value="false3" checked={selectedValue9 === "false3"} onChange={handleRadioChange9} disabled={submitted} />～で間に合わせる
        {submitted && selectedValue9 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue9 === "true" && <p className="true">〇正解</p>}
        <p id="question15">5.lay off</p>
        <input type="radio" name="lay" value="true" checked={selectedValue10 === "true"} onChange={handleRadioChange10} disabled={submitted} required />一時解雇する
        <input type="radio" name="lay" value="false1" checked={selectedValue10 === "false1"} onChange={handleRadioChange10} disabled={submitted} />計画する
        <input type="radio" name="lay" value="false2" checked={selectedValue10 === "false2"} onChange={handleRadioChange10} disabled={submitted} />非難する
        <input type="radio" name="lay" value="false3" checked={selectedValue10 === "false3"} onChange={handleRadioChange10} disabled={submitted} />備蓄する
        {submitted && selectedValue10 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue10 === "true" && <p className="true">〇正解</p>}
        <p id="question16">6.He has to <input type="text" id="account" value={textValue6} onChange={handleTextChange6} disabled={submitted} required /> the cause of the accident.</p>
        <p>訳：彼は、その事故の原因を説明する責任を果たさなければなりません。</p>
        {submitted && textValue6.trim() !== "account for" && <p className="false">✕不正解</p>}{submitted && textValue6.trim() === "account for" && <p className="true">〇正解</p>}
        <p id="question17">7.My father is <input type="text" id="devote" value={textValue7} onChange={handleTextChange7} disabled={submitted} required /> his work now.</p>
        <p>訳：私の父親は今、業務に専念しています。</p>
        {submitted && textValue7.trim() !== "devoting himself to" && <p className="false">✕不正解</p>}{submitted && textValue7.trim() === "devoting himself to" && <p className="true">〇正解</p>}
        <p id="question18">8.You should <input type="text" id="refrain" value={textValue8} onChange={handleTextChange8} disabled={submitted} required /> smoking in order to maintain your health.</p>
        <p>訳：あなたは健康を維持するために、喫煙を控えなければなりません。</p>
        {submitted && textValue8.trim() !== "refrain from" && <p className="false">✕不正解</p>}{submitted && textValue8.trim() === "refrain from" && <p className="true">〇正解</p>}
        <p id="question19">9.<input type="text" id="long" value={textValue9} onChange={handleTextChange9} disabled={submitted} required />,saving money is important.</p>
        <p>訳：長い目で見れば、お金を節約することは重要です。</p>
        {submitted && textValue9.trim() !== "In the long run" && <p className="false">✕不正解</p>}{submitted && textValue9.trim() === "In the long run" && <p className="true">〇正解</p>}
        <p id="question20">10.<input type="text" id="respect" value={textValue10} onChange={handleTextChange10} disabled={submitted} required /> the question,I can't give an answer.</p>
        <p>訳：その質問に関しては、私は答えることができません。</p>
        {submitted && textValue10.trim() !== "With respect to" && <p className="false">✕不正解</p>}{submitted && textValue10.trim() === "With respect to" && <p className="true">〇正解</p>}
        <button type="submit" value="submit" id="submit" disabled={submitted}>解答を送信</button>
        <button type="button" value="delete" id="clear" onClick={() => handleDeleted("delete")}>結果・解答をクリア</button>
      </form>
      {submitted && displayResults()}
    </div>
  )
};

export default Grade2;