"use client";
import React from 'react';
import { useState,useEffect } from "react";
const Grade3 = ():React.JSX.Element => {
  const [selectedValue1, setSelectedValue1] = useState<string>("");
  const [selectedValue2, setSelectedValue2] = useState<string>("");
  const [selectedValue3, setSelectedValue3] = useState<string>("");
  const [selectedValue4, setSelectedValue4] = useState<string>("");
  const [selectedValue5, setSelectedValue5] = useState<string>("");
  const [textValue1, setTextValue1] = useState<string>("p");
  const [textValue2, setTextValue2] = useState<string>("s");
  const [textValue3, setTextValue3] = useState<string>("t");
  const [textValue4, setTextValue4] = useState<string>("w");
  const [textValue5, setTextValue5] = useState<string>("c");
  const [selectedValue6, setSelectedValue6] = useState<string>("");
  const [selectedValue7, setSelectedValue7] = useState<string>("");
  const [selectedValue8, setSelectedValue8] = useState<string>("");
  const [selectedValue9, setSelectedValue9] = useState<string>("");
  const [selectedValue10, setSelectedValue10] = useState<string>("");
  const [textValue6, setTextValue6] = useState<string>("f a h");
  const [textValue7, setTextValue7] = useState<string>("l f");
  const [textValue8, setTextValue8] = useState<string>("k i t");
  const [textValue9, setTextValue9] = useState<string>("c t");
  const [textValue10, setTextValue10] = useState<string>("l l");
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
      if (textValue1.trim() === "passed") correctWords++;
      if (textValue2.trim() === "shut") correctWords++;
      if (textValue3.trim() === "thirsty") correctWords++;
      if (textValue4.trim() === "wet") correctWords++;
      if (textValue5.trim() === "choosing") correctWords++;
      if (selectedValue6 === "true") correctIdioms++;
      if (selectedValue7 === "true") correctIdioms++;
      if (selectedValue8 === "true") correctIdioms++;
      if (selectedValue9 === "true") correctIdioms++;
      if (selectedValue10 === "true") correctIdioms++;
      if (textValue6.trim() === "feel at home") correctIdioms++;
      if (textValue7.trim() === "looking forward") correctIdioms++;
      if (textValue8.trim() === "keeping in touch") correctIdioms++;
      if (textValue9.trim() === "come true") correctIdioms++;
      if (textValue10.trim() === "looks like") correctIdioms++;
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
      setTextValue1("p");
      setTextValue2("s");
      setTextValue3("t");
      setTextValue4("w");
      setTextValue5("c");
      setTextValue6("f a h");
      setTextValue7("l f");
      setTextValue8("k i t");
      setTextValue9("c t");
      setTextValue10("l l");
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
        <p className="answer"><strong>英単語編:</strong>1.壊す 2.沸騰する 3.利口な 4.食事 5.不可能な 6.passed 7.shut 8.thirsty 9.wet 10.choosing</p>
        <p className="answer"><strong>英熟語編:</strong>1.ご自由にどうぞ 2.参加する 3.～次第で 4.～を表す 5.まもなく 6.feel at home 7.looking forward 8.keeping in touch 9.come true 10.looks like</p>
      </>
    )
  }
  function displayResults():React.ReactNode {
    if ((countWords + countIdioms) <= 8) {
      return results(countWords, countIdioms, "合格可能性:0%～10%", "残念ながら、この級に合格する可能性はかなり低いです。基礎的な英単語・英熟語を一通り暗記してから再挑戦してみてください。また、問題が難しく感じた場合は、4級の問題にも挑戦してみてください。");
    }
    else if (9 <= (countWords + countIdioms) && (countWords + countIdioms) <= 12) {
      return results(countWords, countIdioms, "合格可能性:20%～40%", "この級に合格する可能性は現時点では低いですが、継続して学習を続ければ、合格できる可能性があります。間違えた問題を確認し、英単語・英熟語帳を再度読み込んでから再挑戦してみてください。リーディング、リスニング、スピーキング、ライティングの勉強にも取り組んでください。");
    }
    else if (13 <= (countWords + countIdioms) && (countWords + countIdioms) <= 16) {
      return results(countWords, countIdioms, "合格可能性:60%～80%", "この級に合格する可能性は、英単語・英熟語の習得率で判断すると高いですが、油断はできません。間違えた問題を確認し、英単語・英熟語帳に暗記漏れがないかどうかを確認してください。リーディング、リスニング、スピーキング、ライティングの勉強の継続も合格率をあげるには重要です。");
    }
    else if (17 <= (countWords + countIdioms)) {
      return results(countWords, countIdioms, "合格可能性:90%～100%", "この級に合格する可能性は、英単語・英熟語の習得率で判断すると、かなり高いと言えます。より合格を確実にしたい場合は、リーディング、リスニング、スピーキング、ライティングの勉強を継続してください。また、自信があれば準2級の問題にも挑戦してみてください。");
    }
  }
  return (
    <div>
      <h2>級の概要</h2>
      <p>英検3級では、約2100語が合格するために習得すべき語彙数であるとされています。どの英単語・英熟語も英会話・英文読解では頻出する基本的な語彙であり、特に高校受験においては、英語長文やリスニングなどの対策をする上で必須の語彙であると言えます。</p>
      <h2>問題の解答方法について</h2>
      <p>問題は、英単語編・英熟語編の2部に分かれており、それぞれ10問解答する必要があります。それぞれ10問のうち、前半5問は英単語・英熟語の日本語訳として最も適切なものを1つ選ぶ選択肢問題、後半5問は英文の空欄に当てはまる語彙を英文の下にある日本語訳から推測して半角英数字で解答を記入する記述問題で構成されています。なお、記述問題は問題によっては複数の解答が正解になるため、空欄に初期の状態で入力済みのアルファベット1文字を解答の頭文字として利用してください。（英熟語の記述問題の場合は、複数単語の記入が必要になるため、空欄に初期の状態で入力済みのアルファベット1文字目を最初の単語の頭文字、2文字目を2番目の単語の頭文字、⋯と利用して解答してください。）英熟語の記述問題では、単語の間に半角スペースを1つ必ず空けてください。（2つ以上半角スペースを空けた場合や、全角スペースを空けた場合は、不正解となりますので、注意してください。）また、解答が完了したら「解答を送信」ボタンを押し、各問題の正解・不正解を確認しつつ、あなたが挑戦した級の合否可能性を閲覧してください。問題に再挑戦したい場合は、「結果・解答をクリア」ボタンを押して下さい。</p>
      <form name="grade3" onSubmit={handleSubmit}>
        <h2 id="part1">英単語編</h2>
        <p id="question1">1.break</p>
        <input type="radio" name="destroy" value="false1" checked={selectedValue1 === "false1"} onChange={handleRadioChange1} disabled={submitted} required />ブレーキをかける
        <input type="radio" name="destroy" value="false2" checked={selectedValue1 === "false2"} onChange={handleRadioChange1} disabled={submitted} />消える
        <input type="radio" name="destroy" value="false3" checked={selectedValue1 === "false3"} onChange={handleRadioChange1} disabled={submitted} />解放する
        <input type="radio" name="destroy" value="true" checked={selectedValue1 === "true"} onChange={handleRadioChange1} disabled={submitted} />壊す
        {submitted && selectedValue1 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue1 === "true" && <p className="true">〇正解</p>}
        <p id="question2">2.boil</p>
        <input type="radio" name="boil" value="true" checked={selectedValue2 === "true"} onChange={handleRadioChange2} disabled={submitted} required />沸騰する
        <input type="radio" name="boil" value="false1" checked={selectedValue2 === "false1"} onChange={handleRadioChange2} disabled={submitted} />蒸発する
        <input type="radio" name="boil" value="false2" checked={selectedValue2 === "false2"} onChange={handleRadioChange2} disabled={submitted} />かき混ぜる
        <input type="radio" name="boil" value="false3" checked={selectedValue2 === "false3"} onChange={handleRadioChange2} disabled={submitted} />温める
        {submitted && selectedValue2 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue2 === "true" && <p className="true">〇正解</p>}
        <p id="question3">3.clever</p>
        <input type="radio" name="clever" value="true" checked={selectedValue3 === "true"} onChange={handleRadioChange3} disabled={submitted} required />利口な
        <input type="radio" name="clever" value="false1" checked={selectedValue3 === "false1"} onChange={handleRadioChange3} disabled={submitted} />謙虚な
        <input type="radio" name="clever" value="false2" checked={selectedValue3 === "false2"} onChange={handleRadioChange3} disabled={submitted} />天才的な
        <input type="radio" name="clever" value="false3" checked={selectedValue3 === "false3"} onChange={handleRadioChange3} disabled={submitted} />独創的な
        {submitted && selectedValue3 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue3 === "true" && <p className="true">〇正解</p>}
        <p id="question4">4.dining</p>
        <input type="radio" name="dining" value="false1" checked={selectedValue4 === "false1"} onChange={handleRadioChange4} disabled={submitted} required />台所
        <input type="radio" name="dining" value="true" checked={selectedValue4 === "true"} onChange={handleRadioChange4} disabled={submitted} />食事
        <input type="radio" name="dining" value="false2" checked={selectedValue4 === "false2"} onChange={handleRadioChange4} disabled={submitted} />夕食
        <input type="radio" name="dining" value="false3" checked={selectedValue4 === "false3"} onChange={handleRadioChange4} disabled={submitted} />調理
        {submitted && selectedValue4 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue4 === "true" && <p className="true">〇正解</p>}
        <p id="question5">5.impossible</p>
        <input type="radio" name="impossible" value="false1" checked={selectedValue5 === "false1"} onChange={handleRadioChange5} disabled={submitted} required />不必要な
        <input type="radio" name="impossible" value="false2" checked={selectedValue5 === "false2"} onChange={handleRadioChange5} disabled={submitted} />不審な
        <input type="radio" name="impossible" value="false3" checked={selectedValue5 === "false3"} onChange={handleRadioChange5} disabled={submitted} />不可欠な
        <input type="radio" name="impossible" value="true" checked={selectedValue5 === "true"} onChange={handleRadioChange5} disabled={submitted} />不可能な
        {submitted && selectedValue5 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue5 === "true" && <p className="true">〇正解</p>}
        <p id="question6">6.I <input type="text" id="passed" value={textValue1} onChange={handleTextChange1} disabled={submitted} required /> the exam.</p>
        <p>訳：私はその試験に合格しました。</p>
        {submitted && textValue1.trim() !== "passed" && <p className="false">✕不正解</p>}{submitted && textValue1.trim() === "passed" && <p className="true">〇正解</p>}
        <p id="question7">7.My father <input type="text" id="shut" value={textValue2} onChange={handleTextChange2} disabled={submitted} required /> his shop at 7 p.m. today.</p>
        <p>訳：私の父親は今日は午後7時に店を閉めました。</p>
        {submitted && textValue2.trim() !== "shut" && <p className="false">✕不正解</p>}{submitted && textValue2.trim() === "shut" && <p className="true">〇正解</p>}
        <p id="question8">8.Are you <input type="text" id="thirsty" value={textValue3} onChange={handleTextChange3} disabled={submitted} required /> now?</p>
        <p>訳：あなたは今、のどが渇いていますか。</p>
        {submitted && textValue3.trim() !== "thirsty" && <p className="false">✕不正解</p>}{submitted && textValue3.trim() === "thirsty" && <p className="true">〇正解</p>}
        <p id="question9">9.My clothes got <input type="text" id="wet" value={textValue4} onChange={handleTextChange4} disabled={submitted} required /> because of the heavy rain.</p>
        <p>訳：私の服は激しい雨のせいで濡れました。</p>
        {submitted && textValue4.trim() !== "wet" && <p className="false">✕不正解</p>}{submitted && textValue4.trim() === "wet" && <p className="true">〇正解</p>}
        <p id="question10">10.She is <input type="text" id="choosing" value={textValue5} onChange={handleTextChange5} disabled={submitted} required /> shampoos now.</p>
        <p>訳：彼女は今、シャンプーを選んでいます。</p>
        {submitted && textValue5.trim() !== "choosing" && <p className="false">✕不正解</p>}{submitted && textValue5.trim() === "choosing" && <p className="true">〇正解</p>}
        <h2 id="part2">英熟語編</h2>
        <p id="question11">1.help yourself</p>
        <input type="radio" name="help" value="false1" checked={selectedValue6 === "false1"} onChange={handleRadioChange6} disabled={submitted} required />相手を助ける
        <input type="radio" name="help" value="false2" checked={selectedValue6 === "false2"} onChange={handleRadioChange6} disabled={submitted} />進展させる
        <input type="radio" name="help" value="false3" checked={selectedValue6 === "false3"} onChange={handleRadioChange6} disabled={submitted} />手伝う
        <input type="radio" name="help" value="true" checked={selectedValue6 === "true"} onChange={handleRadioChange6} disabled={submitted} />ご自由にどうぞ
        {submitted && selectedValue6 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue6 === "true" && <p className="true">〇正解</p>}
        <p id="question12">2.take part in</p>
        <input type="radio" name="join" value="true" checked={selectedValue7 === "true"} onChange={handleRadioChange7} disabled={submitted} required />参加する
        <input type="radio" name="join" value="false1" checked={selectedValue7 === "false1"} onChange={handleRadioChange7} disabled={submitted} />出席する
        <input type="radio" name="join" value="false2" checked={selectedValue7 === "false2"} onChange={handleRadioChange7} disabled={submitted} />追加する
        <input type="radio" name="join" value="false3" checked={selectedValue7 === "false3"} onChange={handleRadioChange7} disabled={submitted} />取り出す
        {submitted && selectedValue7 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue7 === "true" && <p className="true">〇正解</p>}
        <p id="question13">3.up to</p>
        <input type="radio" name="depend" value="true" checked={selectedValue8 === "true"} onChange={handleRadioChange8} disabled={submitted} required />～次第で
        <input type="radio" name="depend" value="false1" checked={selectedValue8 === "false1"} onChange={handleRadioChange8} disabled={submitted} />～のせいで
        <input type="radio" name="depend" value="false2" checked={selectedValue8 === "false2"} onChange={handleRadioChange8} disabled={submitted} />～のおかげで
        <input type="radio" name="depend" value="false3" checked={selectedValue8 === "false3"} onChange={handleRadioChange8} disabled={submitted} />～によると
        {submitted && selectedValue8 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue8 === "true" && <p className="true">〇正解</p>}
        <p id="question14">4.stand for</p>
        <input type="radio" name="mean" value="false1" checked={selectedValue9 === "false1"} onChange={handleRadioChange9} disabled={submitted} required />立ち上がる
        <input type="radio" name="mean" value="true" checked={selectedValue9 === "true"} onChange={handleRadioChange9} disabled={submitted} />～を表す
        <input type="radio" name="mean" value="false2" checked={selectedValue9 === "false2"} onChange={handleRadioChange9} disabled={submitted} />～に寄りかかる
        <input type="radio" name="mean" value="false3" checked={selectedValue9 === "false3"} onChange={handleRadioChange9} disabled={submitted} />そばにいる
        {submitted && selectedValue9 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue9 === "true" && <p className="true">〇正解</p>}
        <p id="question15">5.before long</p>
        <input type="radio" name="soon" value="false1" checked={selectedValue10 === "false1"} onChange={handleRadioChange10} disabled={submitted} required />はるか昔に
        <input type="radio" name="soon" value="false2" checked={selectedValue10 === "false2"} onChange={handleRadioChange10} disabled={submitted} />最近
        <input type="radio" name="soon" value="false3" checked={selectedValue10 === "false3"} onChange={handleRadioChange10} disabled={submitted} />すでに
        <input type="radio" name="soon" value="true" checked={selectedValue10 === "true"} onChange={handleRadioChange10} disabled={submitted} />まもなく
        {submitted && selectedValue10 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue10 === "true" && <p className="true">〇正解</p>}
        <p id="question16">6.I don't <input type="text" id="relax" value={textValue6} onChange={handleTextChange6} disabled={submitted} required /> in this class.</p>
        <p>訳：私はこのクラスでは、気が落ち着きません。</p>
        {submitted && textValue6.trim() !== "feel at home" && <p className="false">✕不正解</p>}{submitted && textValue6.trim() === "feel at home" && <p className="true">〇正解</p>}
        <p id="question17">7.I'm <input type="text" id="hope" value={textValue7} onChange={handleTextChange7} disabled={submitted} required /> to talking with you again.</p>
        <p>訳：私はあなたとまた話せるのを楽しみにしています。</p>
        {submitted && textValue7.trim() !== "looking forward" && <p className="false">✕不正解</p>}{submitted && textValue7.trim() === "looking forward" && <p className="true">〇正解</p>}
        <p id="question18">8.Why are you <input type="text" id="contact" value={textValue8} onChange={handleTextChange8} disabled={submitted} required /> with him.</p>
        <p>訳：なぜあなたは彼と連絡を取り続けているのですか。</p>
        {submitted && textValue8.trim() !== "keeping in touch" && <p className="false">✕不正解</p>}{submitted && textValue8.trim() === "keeping in touch" && <p className="true">〇正解</p>}
        <p id="question19">9.My dream will <input type="text" id="realize" value={textValue9} onChange={handleTextChange9} disabled={submitted} required /> soon.</p>
        <p>訳：私の夢は、まもなく実現するでしょう。</p>
        {submitted && textValue9.trim() !== "come true" && <p className="false">✕不正解</p>}{submitted && textValue9.trim() === "come true" && <p className="true">〇正解</p>}
        <p id="question20">10.He <input type="text" id="alike" value={textValue10} onChange={handleTextChange10} disabled={submitted} required /> his father.</p>
        <p>訳：彼は、彼の父親に似ています。</p>
        {submitted && textValue10.trim() !== "looks like" && <p className="false">✕不正解</p>}{submitted && textValue10.trim() === "looks like" && <p className="true">〇正解</p>}
        <button type="submit" value="submit" id="submit" disabled={submitted}>解答を送信</button>
        <button type="button" value="delete" id="clear" onClick={() => handleDeleted("delete")}>結果・解答をクリア</button>
      </form>
      {submitted && displayResults()}
    </div>
  )
};

export default Grade3;