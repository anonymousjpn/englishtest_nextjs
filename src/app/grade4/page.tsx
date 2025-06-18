"use client";
import React from 'react';
import { useState,useEffect } from "react";
const Grade4=():React.JSX.Element=>{
  const [selectedValue1, setSelectedValue1] = useState<string>("");
  const [selectedValue2, setSelectedValue2] = useState<string>("");
  const [selectedValue3, setSelectedValue3] = useState<string>("");
  const [selectedValue4, setSelectedValue4] = useState<string>("");
  const [selectedValue5, setSelectedValue5] = useState<string>("");
  const [textValue1, setTextValue1] = useState<string>("v");
  const [textValue2, setTextValue2] = useState<string>("a");
  const [textValue3, setTextValue3] = useState<string>("s");
  const [textValue4, setTextValue4] = useState<string>("d");
  const [textValue5, setTextValue5] = useState<string>("b");
  const [selectedValue6, setSelectedValue6] = useState<string>("");
  const [selectedValue7, setSelectedValue7] = useState<string>("");
  const [selectedValue8, setSelectedValue8] = useState<string>("");
  const [selectedValue9, setSelectedValue9] = useState<string>("");
  const [selectedValue10, setSelectedValue10] = useState<string>("");
  const [textValue6, setTextValue6] = useState<string>("p u");
  const [textValue7, setTextValue7] = useState<string>("t c");
  const [textValue8, setTextValue8] = useState<string>("r a");
  const [textValue9, setTextValue9] = useState<string>("l f");
  const [textValue10, setTextValue10] = useState<string>("e o");
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
      if (textValue1.trim() === "visited") correctWords++;
      if (textValue2.trim() === "asked") correctWords++;
      if (textValue3.trim() === "stay") correctWords++;
      if (textValue4.trim() === "dropped") correctWords++;
      if (textValue5.trim() === "backing") correctWords++;
      if (selectedValue6 === "true") correctIdioms++;
      if (selectedValue7 === "true") correctIdioms++;
      if (selectedValue8 === "true") correctIdioms++;
      if (selectedValue9 === "true") correctIdioms++;
      if (selectedValue10 === "true") correctIdioms++;
      if (textValue6.trim() === "picked up") correctIdioms++;
      if (textValue7.trim() === "take care") correctIdioms++;
      if (textValue8.trim() === "run away") correctIdioms++;
      if (textValue9.trim() === "leave for") correctIdioms++;
      if (textValue10.trim() === "each other") correctIdioms++;
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
      setTextValue1("v");
      setTextValue2("a");
      setTextValue3("s");
      setTextValue4("d");
      setTextValue5("b");
      setTextValue6("p u");
      setTextValue7("t c");
      setTextValue8("r a");
      setTextValue9("l f");
      setTextValue10("e o");
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
        <p className="answer"><strong>英単語編:</strong>1.劇 2.聞く 3.素早い 4.裕福な 5.地下鉄 6.visited 7.asked 8.stay 9.dropped 10.backing</p>
        <p className="answer"><strong>英熟語編:</strong>1.降りる 2.片付ける 3.脱ぐ 4.（電気を）つける 5.ところで 6.picked up 7.take care 8.run away 9.leave for 10.each other</p>
      </>
    )
  }
  function displayResults():React.ReactNode {
    if ((countWords + countIdioms) <= 8) {
      return results(countWords, countIdioms, "合格可能性:0%～10%", "残念ながら、この級に合格する可能性はかなり低いです。基礎的な英単語・英熟語を一通り暗記してから再挑戦してみてください。また、問題が難しく感じた場合は、5級の問題にも挑戦してみてください。");
    }
    else if (9 <= (countWords + countIdioms) && (countWords + countIdioms) <= 12) {
      return results(countWords, countIdioms, "合格可能性:20%～40%", "この級に合格する可能性は現時点では低いですが、継続して学習を続ければ、合格できる可能性があります。間違えた問題を確認し、英単語・英熟語帳を再度読み込んでから再挑戦してみてください。リーディング、リスニング、スピーキング、ライティングの勉強にも取り組んでください。");
    }
    else if (13 <= (countWords + countIdioms) && (countWords + countIdioms) <= 16) {
      return results(countWords, countIdioms, "合格可能性:60%～80%", "この級に合格する可能性は、英単語・英熟語の習得率で判断すると高いですが、油断はできません。間違えた問題を確認し、英単語・英熟語帳に暗記漏れがないかどうかを確認してください。リーディング、リスニング、スピーキング、ライティングの勉強の継続も合格率をあげるには重要です。");
    }
    else if (17 <= (countWords + countIdioms)) {
      return results(countWords, countIdioms, "合格可能性:90%～100%", "この級に合格する可能性は、英単語・英熟語の習得率で判断すると、かなり高いと言えます。より合格を確実にしたい場合は、リーディング、リスニング、スピーキング、ライティングの勉強を継続してください。また、自信があれば3級の問題にも挑戦してみてください。");
    }
  }
  return (
    <div>
      <h2>級の概要</h2>
      <p>英検4級では、約1300語が合格するために習得すべき語彙数であるとされています。どの英単語・英熟語も英会話・英文読解では頻出する基本的な語彙であると言えるため、この級に合格することが英語4技能の基本的な理解には重要になります。</p>
      <h2>問題の解答方法について</h2>
      <p>問題は、英単語編・英熟語編の2部に分かれており、それぞれ10問解答する必要があります。それぞれ10問のうち、前半5問は英単語・英熟語の日本語訳として最も適切なものを1つ選ぶ選択肢問題、後半5問は英文の空欄に当てはまる語彙を英文の下にある日本語訳から推測して半角英数字で解答を記入する記述問題で構成されています。なお、記述問題は問題によっては複数の解答が正解になるため、空欄に初期の状態で入力済みのアルファベット1文字を解答の頭文字として利用してください。（英熟語の記述問題の場合は、複数単語の記入が必要になるため、空欄に初期の状態で入力済みのアルファベット1文字目を最初の単語の頭文字、2文字目を2番目の単語の頭文字、⋯と利用して解答してください。）英熟語の記述問題では、単語の間に半角スペースを1つ必ず空けてください。（2つ以上半角スペースを空けた場合や、全角スペースを空けた場合は、不正解となりますので、注意してください。）また、解答が完了したら「解答を送信」ボタンを押し、各問題の正解・不正解を確認しつつ、あなたが挑戦した級の合否可能性を閲覧してください。問題に再挑戦したい場合は、「結果・解答をクリア」ボタンを押して下さい。</p>
      <form name="grade4" onSubmit={handleSubmit}>
        <h2 id="part1">英単語編</h2>
        <p id="question1">1.drama</p>
        <input type="radio" name="play" value="true" checked={selectedValue1 === "true"} onChange={handleRadioChange1} disabled={submitted} required />劇
        <input type="radio" name="play" value="false1" checked={selectedValue1 === "false1"} onChange={handleRadioChange1} disabled={submitted} />ドラム
        <input type="radio" name="play" value="false2" checked={selectedValue1 === "false2"} onChange={handleRadioChange1} disabled={submitted} />脚本家
        <input type="radio" name="play" value="false3" checked={selectedValue1 === "false3"} onChange={handleRadioChange1} disabled={submitted} />感動的な
        {submitted && selectedValue1 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue1 === "true" && <p className="true">〇正解</p>}
        <p id="question2">2.hear</p>
        <input type="radio" name="feel" value="false1" checked={selectedValue2 === "false1"} onChange={handleRadioChange2} disabled={submitted} required />髪
        <input type="radio" name="feel" value="false2" checked={selectedValue2 === "false2"} onChange={handleRadioChange2} disabled={submitted} />ここ
        <input type="radio" name="feel" value="true" checked={selectedValue2 === "true"} onChange={handleRadioChange2} disabled={submitted} />聞く
        <input type="radio" name="feel" value="false3" checked={selectedValue2 === "false3"} onChange={handleRadioChange2} disabled={submitted} />耳
        {submitted && selectedValue2 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue2 === "true" && <p className="true">〇正解</p>}
        <p id="question3">3.quick</p>
        <input type="radio" name="fast" value="true" checked={selectedValue3 === "true"} onChange={handleRadioChange3} disabled={submitted} required />素早い
        <input type="radio" name="fast" value="false1" checked={selectedValue3 === "false1"} onChange={handleRadioChange3} disabled={submitted} />静かな
        <input type="radio" name="fast" value="false2" checked={selectedValue3 === "false2"} onChange={handleRadioChange3} disabled={submitted} />クイズ
        <input type="radio" name="fast" value="false3" checked={selectedValue3 === "false3"} onChange={handleRadioChange3} disabled={submitted} />クリックする
        {submitted && selectedValue3 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue3 === "true" && <p className="true">〇正解</p>}
        <p id="question4">4.rich</p>
        <input type="radio" name="luxury" value="false1" checked={selectedValue4 === "false1"} onChange={handleRadioChange4} disabled={submitted} required />ライチ
        <input type="radio" name="luxury" value="false2" checked={selectedValue4 === "false2"} onChange={handleRadioChange4} disabled={submitted} />お金
        <input type="radio" name="luxury" value="false3" checked={selectedValue4 === "false3"} onChange={handleRadioChange4} disabled={submitted} />高級品
        <input type="radio" name="luxury" value="true" checked={selectedValue4 === "true"} onChange={handleRadioChange4} disabled={submitted} />裕福な
        {submitted && selectedValue4 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue4 === "true" && <p className="true">〇正解</p>}
        <p id="question5">5.subway</p>
        <input type="radio" name="metro" value="false1" checked={selectedValue5 === "false1"} onChange={handleRadioChange5} disabled={submitted} required />高速道路
        <input type="radio" name="metro" value="false2" checked={selectedValue5 === "false2"} onChange={handleRadioChange5} disabled={submitted} />幹線道路
        <input type="radio" name="metro" value="false3" checked={selectedValue5 === "false3"} onChange={handleRadioChange5} disabled={submitted} />鉄道
        <input type="radio" name="metro" value="true" checked={selectedValue5 === "true"} onChange={handleRadioChange5} disabled={submitted}/>地下鉄
        {submitted && selectedValue5 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue5 === "true" && <p className="true">〇正解</p>}
        <p id="question6">6.I <input type="text" id="visited" value={textValue1} onChange={handleTextChange1} disabled={submitted} required /> the zoo.</p>
        <p>訳：私はその動物園を訪れました。</p>
        {submitted && textValue1.trim() !== "visited" && <p className="false">✕不正解</p>}{submitted && textValue1.trim() === "visited" && <p className="true">〇正解</p>}
        <p id="question7">7.My brother <input type="text" id="asked" value={textValue2} onChange={handleTextChange2} disabled={submitted} required /> about my hairstyle.</p>
        <p>訳：私の兄は私の髪型について尋ねました。</p>
        {submitted && textValue2.trim() !== "asked" && <p className="false">✕不正解</p>}{submitted && textValue2.trim() === "asked" && <p className="true">〇正解</p>}
        <p id="question8">8.Do you <input type="text" id="stay" value={textValue3} onChange={handleTextChange3} disabled={submitted} required /> in United States?</p>
        <p>訳：あなたはアメリカに滞在していますか。</p>
        {submitted && textValue3.trim() !== "stay" && <p className="false">✕不正解</p>}{submitted && textValue3.trim() === "stay" && <p className="true">〇正解</p>}
        <p id="question9">9.My pencil <input type="text" id="dropped" value={textValue4} onChange={handleTextChange4} disabled={submitted} required /> from my desk.</p>
        <p>訳：私の鉛筆が机から落ちました。</p>
        {submitted && textValue4.trim() !== "dropped" && <p className="false">✕不正解</p>}{submitted && textValue4.trim() === "dropped" && <p className="true">〇正解</p>}
        <p id="question10">10.He is <input type="text" id="backing" value={textValue5} onChange={handleTextChange5} disabled={submitted} required /> his car now.</p>
        <p>訳：彼は今、車を後退させています。</p>
        {submitted && textValue5.trim() !== "backing" && <p className="false">✕不正解</p>}{submitted && textValue5.trim() === "backing" && <p className="true">〇正解</p>}
        <h2 id="part2">英熟語編</h2>
        <p id="question11">1.get off</p>
        <input type="radio" name="off" value="false1" checked={selectedValue6 === "false1"} onChange={handleRadioChange6} disabled={submitted} required />手放す
        <input type="radio" name="off" value="true" checked={selectedValue6 === "true"} onChange={handleRadioChange6} disabled={submitted} />降りる
        <input type="radio" name="off" value="false2" checked={selectedValue6 === "false2"} onChange={handleRadioChange6} disabled={submitted} />伏せる
        <input type="radio" name="off" value="false3" checked={selectedValue6 === "false3"} onChange={handleRadioChange6} disabled={submitted} />漏れる
        {submitted && selectedValue6 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue6 === "true" && <p className="true">〇正解</p>}
        <p id="question12">2.put away</p>
        <input type="radio" name="clean" value="false1" checked={selectedValue7 === "false1"} onChange={handleRadioChange7} disabled={submitted} required />奪う
        <input type="radio" name="clean" value="false2" checked={selectedValue7 === "false2"} onChange={handleRadioChange7} disabled={submitted} />無視する
        <input type="radio" name="clean" value="false3" checked={selectedValue7 === "false3"} onChange={handleRadioChange7} disabled={submitted} />放置する
        <input type="radio" name="clean" value="true" checked={selectedValue7 === "true"} onChange={handleRadioChange7} disabled={submitted} />片付ける
        {submitted && selectedValue7 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue7 === "true" && <p className="true">〇正解</p>}
        <p id="question13">3.take off</p>
        <input type="radio" name="remove" value="false1" checked={selectedValue8 === "false1"} onChange={handleRadioChange8} disabled={submitted} required />持ち帰る
        <input type="radio" name="remove" value="true" checked={selectedValue8 === "true"} onChange={handleRadioChange8} disabled={submitted} />脱ぐ
        <input type="radio" name="remove" value="false2" checked={selectedValue8 === "false2"} onChange={handleRadioChange8} disabled={submitted} />切り取る
        <input type="radio" name="remove" value="false3" checked={selectedValue8 === "false3"} onChange={handleRadioChange8} disabled={submitted} />解放する
        {submitted && selectedValue8 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue8 === "true" && <p className="true">〇正解</p>}
        <p id="question14">4.turn on</p>
        <input type="radio" name="on" value="false1" checked={selectedValue9 === "false1"} onChange={handleRadioChange9} disabled={submitted} required />曲がる
        <input type="radio" name="on" value="true" checked={selectedValue9 === "true"} onChange={handleRadioChange9} disabled={submitted} />（電気を）つける
        <input type="radio" name="on" value="false2" checked={selectedValue9 === "false2"} onChange={handleRadioChange9} disabled={submitted} />回転する
        <input type="radio" name="on" value="false3" checked={selectedValue9 === "false3"} onChange={handleRadioChange9} disabled={submitted} />（利益を）得る
        {submitted && selectedValue9 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue9 === "true" && <p className="true">〇正解</p>}
        <p id="question15">5.by the way</p>
        <input type="radio" name="incidentally" value="false1" checked={selectedValue10 === "false1"} onChange={handleRadioChange10} disabled={submitted} required />その方法で
        <input type="radio" name="incidentally" value="false2" checked={selectedValue10 === "false2"} onChange={handleRadioChange10} disabled={submitted} />従って
        <input type="radio" name="incidentally" value="true" checked={selectedValue10 === "true"} onChange={handleRadioChange10} disabled={submitted} />ところで
        <input type="radio" name="incidentally" value="false3" checked={selectedValue10 === "false3"} onChange={handleRadioChange10} disabled={submitted} />一方で
        {submitted && selectedValue10 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue10 === "true" && <p className="true">〇正解</p>}
        <p id="question16">6.I <input type="text" id="picked" value={textValue6} onChange={handleTextChange6} disabled={submitted} required /> the money at the station.</p>
        <p>訳：私は駅でお金を拾った。</p>
        {submitted && textValue6.trim() !== "picked up" && <p className="false">✕不正解</p>}{submitted && textValue6.trim() === "picked up" && <p className="true">〇正解</p>}
        <p id="question17">7.I have to <input type="text" id="care" value={textValue7} onChange={handleTextChange7} disabled={submitted} required /> of my dog every day.</p>
        <p>訳：私は毎日犬の世話をしなければなりません。</p>
        {submitted && textValue7.trim() !== "take care" && <p className="false">✕不正解</p>}{submitted && textValue7.trim() === "take care" && <p className="true">〇正解</p>}
        <p id="question18">8.I couldn't <input type="text" id="flee" value={textValue8} onChange={handleTextChange8} disabled={submitted} required /> from that job.</p>
        <p>訳：私はその仕事から逃げられませんでした。</p>
        {submitted && textValue8.trim() !== "run away" && <p className="false">✕不正解</p>}{submitted && textValue8.trim() === "run away" && <p className="true">〇正解</p>}
        <p id="question19">9.He will <input type="text" id="departure" value={textValue9} onChange={handleTextChange9} disabled={submitted} required /> London next week.</p>
        <p>訳：彼は来週、ロンドンに向けて出発します。</p>
        {submitted && textValue9.trim() !== "leave for" && <p className="false">✕不正解</p>}{submitted && textValue9.trim() === "leave for" && <p className="true">〇正解</p>}
        <p id="question20">10.Why didn't they talk to <input type="text" id="each" value={textValue10} onChange={handleTextChange10} disabled={submitted} required /> to win the game?</p>
        <p>訳：なぜ彼らはその試合で勝つためにお互いに話し合わなかったのですか。</p>
        {submitted && textValue10.trim() !== "each other" && <p className="false">✕不正解</p>}{submitted && textValue10.trim() === "each other" && <p className="true">〇正解</p>}
        <button type="submit" value="submit" id="submit" disabled={submitted}>解答を送信</button>
        <button type="button" value="delete" id="clear" onClick={() => handleDeleted("delete")}>結果・解答をクリア</button>
      </form>
      {submitted && displayResults()}
    </div>
  )
};

export default Grade4;