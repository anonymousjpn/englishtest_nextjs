"use client";
import React from 'react';
import { useState,useEffect } from "react";
const Gradepre2=():React.JSX.Element=>{
  const [selectedValue1, setSelectedValue1] = useState<string>("");
  const [selectedValue2, setSelectedValue2] = useState<string>("");
  const [selectedValue3, setSelectedValue3] = useState<string>("");
  const [selectedValue4, setSelectedValue4] = useState<string>("");
  const [selectedValue5, setSelectedValue5] = useState<string>("");
  const [textValue1, setTextValue1] = useState<string>("l");
  const [textValue2, setTextValue2] = useState<string>("m");
  const [textValue3, setTextValue3] = useState<string>("n");
  const [textValue4, setTextValue4] = useState<string>("p");
  const [textValue5, setTextValue5] = useState<string>("h");
  const [selectedValue6, setSelectedValue6] = useState<string>("");
  const [selectedValue7, setSelectedValue7] = useState<string>("");
  const [selectedValue8, setSelectedValue8] = useState<string>("");
  const [selectedValue9, setSelectedValue9] = useState<string>("");
  const [selectedValue10, setSelectedValue10] = useState<string>("");
  const [textValue6, setTextValue6] = useState<string>("d o");
  const [textValue7, setTextValue7] = useState<string>("s f");
  const [textValue8, setTextValue8] = useState<string>("p a t");
  const [textValue9, setTextValue9] = useState<string>("c h b i");
  const [textValue10, setTextValue10] = useState<string>("h n t d w");
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
      if (textValue1.trim() === "located") correctWords++;
      if (textValue2.trim() === "measuring") correctWords++;
      if (textValue3.trim() === "notice") correctWords++;
      if (textValue4.trim() === "portable") correctWords++;
      if (textValue5.trim() === "harvest") correctWords++;
      if (selectedValue6 === "true") correctIdioms++;
      if (selectedValue7 === "true") correctIdioms++;
      if (selectedValue8 === "true") correctIdioms++;
      if (selectedValue9 === "true") correctIdioms++;
      if (selectedValue10 === "true") correctIdioms++;
      if (textValue6.trim() === "died out") correctIdioms++;
      if (textValue7.trim() === "suffering from") correctIdioms++;
      if (textValue8.trim() === "pay attention to") correctIdioms++;
      if (textValue9.trim() === "couldn't help being impressed") correctIdioms++;
      if (textValue10.trim() === "has nothing to do with") correctIdioms++;
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
      setTextValue1("l");
      setTextValue2("m");
      setTextValue3("n");
      setTextValue4("p");
      setTextValue5("h");
      setTextValue6("d o");
      setTextValue7("s f");
      setTextValue8("p a t");
      setTextValue9("c h b i");
      setTextValue10("h n t d w");
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
        <p className="answer"><strong>英単語編:</strong>1.能力 2.行動 3.化学 4.説明 5.組織 6.located 7.measuring 8.notice 9.portable 10.harvest</p>
        <p className="answer"><strong>英熟語編:</strong>1.調べる 2.故障する 3.記入する 4.延期する 5.実行する 6.died out 7.suffering from 8.pay attention to 9.couldn't help being impressed 10.has nothing to do with</p>
      </>
    )
  }
  function displayResults():React.ReactNode {
    if ((countWords + countIdioms) <= 8) {
      return results(countWords, countIdioms, "合格可能性:0%～10%", "残念ながら、この級に合格する可能性はかなり低いです。基礎的な英単語・英熟語を一通り暗記してから再挑戦してみてください。また、問題が難しく感じた場合は、3級の問題にも挑戦してみてください。");
    }
    else if (9 <= (countWords + countIdioms) && (countWords + countIdioms) <= 12) {
      return results(countWords, countIdioms, "合格可能性:20%～40%", "この級に合格する可能性は現時点では低いですが、継続して学習を続ければ、合格できる可能性があります。間違えた問題を確認し、英単語・英熟語帳を再度読み込んでから再挑戦してみてください。リーディング、リスニング、スピーキング、ライティングの勉強にも取り組んでください。");
    }
    else if (13 <= (countWords + countIdioms) && (countWords + countIdioms) <= 16) {
      return results(countWords, countIdioms, "合格可能性:60%～80%", "この級に合格する可能性は、英単語・英熟語の習得率で判断すると高いですが、油断はできません。間違えた問題を確認し、英単語・英熟語帳に暗記漏れがないかどうかを確認してください。リーディング、リスニング、スピーキング、ライティングの勉強の継続も合格率をあげるには重要です。");
    }
    else if (17 <= (countWords + countIdioms)) {
      return results(countWords, countIdioms, "合格可能性:90%～100%", "この級に合格する可能性は、英単語・英熟語の習得率で判断すると、かなり高いと言えます。より合格を確実にしたい場合は、リーディング、リスニング、スピーキング、ライティングの勉強を継続してください。また、自信があれば2級の問題にも挑戦してみてください。");
    }
  }
  return (
    <div>
      <h2>級の概要</h2>
      <p>英検準2級では、約3600語が合格するために習得すべき語彙数であるとされています。どの英単語・英熟語も英語圏における社会的な話題を理解するには重要な語彙であり、特に英文読解力や英会話の語彙力を向上させる上で必須の語彙とも言えます。</p>
      <h2>問題の解答方法について</h2>
      <p>問題は、英単語編・英熟語編の2部に分かれており、それぞれ10問解答する必要があります。それぞれ10問のうち、前半5問は英単語・英熟語の日本語訳として最も適切なものを1つ選ぶ選択肢問題、後半5問は英文の空欄に当てはまる語彙を英文の下にある日本語訳から推測して半角英数字で解答を記入する記述問題で構成されています。なお、記述問題は問題によっては複数の解答が正解になるため、空欄に初期の状態で入力済みのアルファベット1文字を解答の頭文字として利用してください。（英熟語の記述問題の場合は、複数単語の記入が必要になるため、空欄に初期の状態で入力済みのアルファベット1文字目を最初の単語の頭文字、2文字目を2番目の単語の頭文字、⋯と利用して解答してください。）英熟語の記述問題では、単語の間に半角スペースを1つ必ず空けてください。（2つ以上半角スペースを空けた場合や、全角スペースを空けた場合は、不正解となりますので、注意してください。）また、解答が完了したら「解答を送信」ボタンを押し、各問題の正解・不正解を確認しつつ、あなたが挑戦した級の合否可能性を閲覧してください。問題に再挑戦したい場合は、「結果・解答をクリア」ボタンを押して下さい。</p>
      <form name="gradepre2" onSubmit={handleSubmit}>
        <h2 id="part1">英単語編</h2>
        <p id="question1">1.ability</p>
        <input type="radio" name="ability" value="false1" checked={selectedValue1 === "false1"} onChange={handleRadioChange1} disabled={submitted} required />安定性
        <input type="radio" name="ability" value="true" checked={selectedValue1 === "true"} onChange={handleRadioChange1} disabled={submitted} />能力
        <input type="radio" name="ability" value="false2" checked={selectedValue1 === "false2"} onChange={handleRadioChange1} disabled={submitted} />柔軟性
        <input type="radio" name="ability" value="false3" checked={selectedValue1 === "false3"} onChange={handleRadioChange1} disabled={submitted} />耐久性
        {submitted && selectedValue1 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue1 === "true" && <p className="true">〇正解</p>}
        <p id="question2">2.behavior</p>
        <input type="radio" name="behavior" value="true" checked={selectedValue2 === "true"} onChange={handleRadioChange2} disabled={submitted} required />行動
        <input type="radio" name="behavior" value="false1" checked={selectedValue2 === "false1"} onChange={handleRadioChange2} disabled={submitted} />労働
        <input type="radio" name="behavior" value="false2" checked={selectedValue2 === "false2"} onChange={handleRadioChange2} disabled={submitted} />活力
        <input type="radio" name="behavior" value="false3" checked={selectedValue2 === "false3"} onChange={handleRadioChange2} disabled={submitted} />勇気
        {submitted && selectedValue2 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue2 === "true" && <p className="true">〇正解</p>}
        <p id="question3">3.chemistry</p>
        <input type="radio" name="chemistry" value="true" checked={selectedValue3 === "true"} onChange={handleRadioChange3} disabled={submitted} required />化学
        <input type="radio" name="chemistry" value="false1" checked={selectedValue3 === "false1"} onChange={handleRadioChange3} disabled={submitted} />科学
        <input type="radio" name="chemistry" value="false2" checked={selectedValue3 === "false2"} onChange={handleRadioChange3} disabled={submitted} />理科
        <input type="radio" name="chemistry" value="false3" checked={selectedValue3 === "false3"} onChange={handleRadioChange3} disabled={submitted} />実験
        {submitted && selectedValue3 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue3 === "true" && <p className="true">〇正解</p>}
        <p id="question4">4.explanation</p>
        <input type="radio" name="explanation" value="false1" checked={selectedValue4 === "false1"} onChange={handleRadioChange4} disabled={submitted} required />探検
        <input type="radio" name="explanation" value="false2" checked={selectedValue4 === "false2"} onChange={handleRadioChange4} disabled={submitted} />期待
        <input type="radio" name="explanation" value="true" checked={selectedValue4 === "true"} onChange={handleRadioChange4} disabled={submitted} />説明
        <input type="radio" name="explanation" value="false3" checked={selectedValue4 === "false3"} onChange={handleRadioChange4} disabled={submitted} />試験
        {submitted && selectedValue4 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue4 === "true" && <p className="true">〇正解</p>}
        <p id="question5">5.organization</p>
        <input type="radio" name="organization" value="false1" checked={selectedValue5 === "false1"} onChange={handleRadioChange5} disabled={submitted} required />臓器
        <input type="radio" name="organization" value="false2" checked={selectedValue5 === "false2"} onChange={handleRadioChange5} disabled={submitted} />有機物
        <input type="radio" name="organization" value="true" checked={selectedValue5 === "true"} onChange={handleRadioChange5} disabled={submitted} />組織
        <input type="radio" name="organization" value="false3" checked={selectedValue5 === "false3"} onChange={handleRadioChange5} disabled={submitted} />オルガン奏者
        {submitted && selectedValue5 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue5 === "true" && <p className="true">〇正解</p>}
        <p id="question6">6.This library is <input type="text" id="located" value={textValue1} onChange={handleTextChange1} disabled={submitted} required /> near a station.</p>
        <p>訳：その図書館は駅の近くに位置しています。</p>
        {submitted && textValue1.trim() !== "located" && <p className="false">✕不正解</p>}{submitted && textValue1.trim() === "located" && <p className="true">〇正解</p>}
        <p id="question7">7.My brother is <input type="text" id="measuring" value={textValue2} onChange={handleTextChange2} disabled={submitted} required /> the length of his foots now.</p>
        <p>訳：私の兄は今、足の長さを測っています。</p>
        {submitted && textValue2.trim() !== "measuring" && <p className="false">✕不正解</p>}{submitted && textValue2.trim() === "measuring" && <p className="true">〇正解</p>}
        <p id="question8">8.Did you <input type="text" id="notice" value={textValue3} onChange={handleTextChange3} disabled={submitted} required /> his letter on a table?</p>
        <p>訳：あなたは机の上にある、彼の手紙に気づきましたか。</p>
        {submitted && textValue3.trim() !== "notice" && <p className="false">✕不正解</p>}{submitted && textValue3.trim() === "notice" && <p className="true">〇正解</p>}
        <p id="question9">9.This chair is <input type="text" id="portable" value={textValue4} onChange={handleTextChange4} disabled={submitted} required /> because it is light.</p>
        <p>訳：この椅子は軽いため、持ち運びができます。</p>
        {submitted && textValue4.trim() !== "portable" && <p className="false">✕不正解</p>}{submitted && textValue4.trim() === "portable" && <p className="true">〇正解</p>}
        <p id="question10">10.What month will farmers <input type="text" id="harvest" value={textValue5} onChange={handleTextChange5} disabled={submitted} required /> the oranges?</p>
        <p>訳：農家は何月にオレンジを収穫しますか。</p>
        {submitted && textValue5.trim() !== "harvest" && <p className="false">✕不正解</p>}{submitted && textValue5.trim() === "harvest" && <p className="true">〇正解</p>}
        <h2 id="part2">英熟語編</h2>
        <p id="question11">1.look up</p>
        <input type="radio" name="research" value="true" checked={selectedValue6 === "true"} onChange={handleRadioChange6} disabled={submitted} required />調べる
        <input type="radio" name="research" value="false1" checked={selectedValue6 === "false1"} onChange={handleRadioChange6} disabled={submitted} />見つめる
        <input type="radio" name="research" value="false2" checked={selectedValue6 === "false2"} onChange={handleRadioChange6} disabled={submitted} />世話をする
        <input type="radio" name="research" value="false3" checked={selectedValue6 === "false3"} onChange={handleRadioChange6} disabled={submitted} />尊敬する
        {submitted && selectedValue6 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue6 === "true" && <p className="true">〇正解</p>}
        <p id="question12">2.break down</p>
        <input type="radio" name="malfunction" value="false1" checked={selectedValue7 === "false1"} onChange={handleRadioChange7} disabled={submitted} required />別れる
        <input type="radio" name="malfunction" value="false2" checked={selectedValue7 === "false2"} onChange={handleRadioChange7} disabled={submitted} />勃発する
        <input type="radio" name="malfunction" value="true" checked={selectedValue7 === "true"} onChange={handleRadioChange7} disabled={submitted} />故障する
        <input type="radio" name="malfunction" value="false3" checked={selectedValue7 === "false3"} onChange={handleRadioChange7} disabled={submitted} />侵入する
        {submitted && selectedValue7 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue7 === "true" && <p className="true">〇正解</p>}
        <p id="question13">3.fill out</p>
        <input type="radio" name="write" value="false1" checked={selectedValue8 === "false1"} onChange={handleRadioChange8} disabled={submitted} required />排出する
        <input type="radio" name="write" value="true" checked={selectedValue8 === "true"} onChange={handleRadioChange8} disabled={submitted} />記入する
        <input type="radio" name="write" value="false2" checked={selectedValue8 === "false2"} onChange={handleRadioChange8} disabled={submitted} />代わりをする
        <input type="radio" name="write" value="false3" checked={selectedValue8 === "false3"} onChange={handleRadioChange8} disabled={submitted} />漏れる
        {submitted && selectedValue8 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue8 === "true" && <p className="true">〇正解</p>}
        <p id="question14">4.put off</p>
        <input type="radio" name="postpone" value="true" checked={selectedValue9 === "true"} onChange={handleRadioChange9} disabled={submitted} required />延期する
        <input type="radio" name="postpone" value="false1" checked={selectedValue9 === "false1"} onChange={handleRadioChange9} disabled={submitted} />脱ぐ
        <input type="radio" name="postpone" value="false2" checked={selectedValue9 === "false2"} onChange={handleRadioChange9} disabled={submitted} />片付ける
        <input type="radio" name="postpone" value="false3" checked={selectedValue9 === "false3"} onChange={handleRadioChange9} disabled={submitted} />解雇する
        {submitted && selectedValue9 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue9 === "true" && <p className="true">〇正解</p>}
        <p id="question15">5.carry out</p>
        <input type="radio" name="execute" value="false1" checked={selectedValue10 === "false1"} onChange={handleRadioChange10} disabled={submitted} required />成功する
        <input type="radio" name="execute" value="false2" checked={selectedValue10 === "false2"} onChange={handleRadioChange10} disabled={submitted} />持ち運ぶ
        <input type="radio" name="execute" value="false3" checked={selectedValue10 === "false3"} onChange={handleRadioChange10} disabled={submitted} />伝える
        <input type="radio" name="execute" value="true" checked={selectedValue10 === "true"} onChange={handleRadioChange10} disabled={submitted} />実行する
        {submitted && selectedValue10 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue10 === "true" && <p className="true">〇正解</p>}
        <p id="question16">6.An animal in this photo <input type="text" id="extinct" value={textValue6} onChange={handleTextChange6} disabled={submitted} required /> ten years ago.</p>
        <p>訳：この写真の動物は、10年前に絶滅しました。</p>
        {submitted && textValue6.trim() !== "died out" && <p className="false">✕不正解</p>}{submitted && textValue6.trim() === "died out" && <p className="true">〇正解</p>}
        <p id="question17">7.I'm <input type="text" id="suffer" value={textValue7} onChange={handleTextChange7} disabled={submitted} required /> headache now.</p>
        <p>訳：私は今、頭痛で苦しんでいます。</p>
        {submitted && textValue7.trim() !== "suffering from" && <p className="false">✕不正解</p>}{submitted && textValue7.trim() === "suffering from" && <p className="true">〇正解</p>}
        <p id="question18">8.You should <input type="text" id="attention" value={textValue8} onChange={handleTextChange8} disabled={submitted} required /> his helpful speech.</p>
        <p>訳：あなたは、彼の役に立つスピーチに注意を払わなければなりません。</p>
        {submitted && textValue8.trim() !== "pay attention to" && <p className="false">✕不正解</p>}{submitted && textValue8.trim() === "pay attention to" && <p className="true">〇正解</p>}
        <p id="question19">9.My friend <input type="text" id="impress" value={textValue9} onChange={handleTextChange9} disabled={submitted} required /> by the movie.</p>
        <p>訳：私の友達は、その映画に感動せずにはいられなかった。</p>
        {submitted && textValue9.trim() !== "couldn't help being impressed" && <p className="false">✕不正解</p>}{submitted && textValue9.trim() === "couldn't help being impressed" && <p className="true">〇正解</p>}
        <p id="question20">10.He <input type="text" id="relation" value={textValue10} onChange={handleTextChange10} disabled={submitted} required /> the accident.</p>
        <p>訳：彼はその事故と全く関係がありません。</p>
        {submitted && textValue10.trim() !== "has nothing to do with" && <p className="false">✕不正解</p>}{submitted && textValue10.trim() === "has nothing to do with" && <p className="true">〇正解</p>}
        <button type="submit" value="submit" id="submit" disabled={submitted}>解答を送信</button>
        <button type="button" value="delete" id="clear" onClick={() => handleDeleted("delete")}>結果・解答をクリア</button>
      </form>
      {submitted && displayResults()}
    </div>
  )
};

export default Gradepre2;