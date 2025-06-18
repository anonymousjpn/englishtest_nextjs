"use client";
import React from 'react';
import { useState,useEffect } from "react";
const Grade1 = ():React.JSX.Element => {
  const [selectedValue1, setSelectedValue1] = useState<string>("");
  const [selectedValue2, setSelectedValue2] = useState<string>("");
  const [selectedValue3, setSelectedValue3] = useState<string>("");
  const [selectedValue4, setSelectedValue4] = useState<string>("");
  const [selectedValue5, setSelectedValue5] = useState<string>("");
  const [textValue1, setTextValue1] = useState<string>("s");
  const [textValue2, setTextValue2] = useState<string>("T");
  const [textValue3, setTextValue3] = useState<string>("d");
  const [textValue4, setTextValue4] = useState<string>("c");
  const [textValue5, setTextValue5] = useState<string>("c");
  const [selectedValue6, setSelectedValue6] = useState<string>("");
  const [selectedValue7, setSelectedValue7] = useState<string>("");
  const [selectedValue8, setSelectedValue8] = useState<string>("");
  const [selectedValue9, setSelectedValue9] = useState<string>("");
  const [selectedValue10, setSelectedValue10] = useState<string>("");
  const [textValue6, setTextValue6] = useState<string>("w u");
  const [textValue7, setTextValue7] = useState<string>("p t");
  const [textValue8, setTextValue8] = useState<string>("b t");
  const [textValue9, setTextValue9] = useState<string>("t d");
  const [textValue10, setTextValue10] = useState<string>("C d o");
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
      if (textValue1.trim() === "sympathetic") correctWords++;
      if (textValue2.trim() === "Tragic") correctWords++;
      if (textValue3.trim() === "diabetes") correctWords++;
      if (textValue4.trim() === "comprehend") correctWords++;
      if (textValue5.trim() === "convicted") correctWords++;
      if (selectedValue6 === "true") correctIdioms++;
      if (selectedValue7 === "true") correctIdioms++;
      if (selectedValue8 === "true") correctIdioms++;
      if (selectedValue9 === "true") correctIdioms++;
      if (selectedValue10 === "true") correctIdioms++;
      if (textValue6.trim() === "wrapped up") correctIdioms++;
      if (textValue7.trim() === "piecing together") correctIdioms++;
      if (textValue8.trim() === "browsing through") correctIdioms++;
      if (textValue9.trim() === "torn down") correctIdioms++;
      if (textValue10.trim() === "Cracking down on") correctIdioms++;
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
    const NativeEvent = event.nativeEvent as SubmitEvent;
    const button=NativeEvent.submitter as HTMLButtonElement;
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
      setTextValue1("s");
      setTextValue2("T");
      setTextValue3("d");
      setTextValue4("c");
      setTextValue5("c");
      setTextValue6("w u");
      setTextValue7("p t");
      setTextValue8("b t");
      setTextValue9("t d");
      setTextValue10("C d o");
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
        <p className="answer"><strong>英単語編:</strong>1.仮説 2.考古学の 3.贈収賄 4.栄養 5.異議 6.sympathetic 7.Tragic 8.diabetes 9.comprehend 10.convicted</p>
        <p className="answer"><strong>英熟語編:</strong>1.成功する 2.決定する 3.追いつく 4.区画する 5.勧誘する 6.wrapped up 7.piecing together 8.browsing through 9.torn down 10.Cracking down on</p>
      </>
    )
  }
  function displayResults():React.ReactNode {
    if ((countWords + countIdioms) <= 8) {
      return results(countWords, countIdioms, "合格可能性:0%～10%", "残念ながら、この級に合格する可能性はかなり低いです。基礎的な英単語・英熟語を一通り暗記してから再挑戦してみてください。また、問題が難しく感じた場合は、準1級の問題にも挑戦してみてください。");
    }
    else if (9 <= (countWords + countIdioms) && (countWords + countIdioms) <= 12) {
      return results(countWords, countIdioms, "合格可能性:20%～40%", "この級に合格する可能性は現時点では低いですが、継続して学習を続ければ、合格できる可能性があります。間違えた問題を確認し、英単語・英熟語帳を再度読み込んでから再挑戦してみてください。リーディング、リスニング、スピーキング、ライティングの勉強にも取り組んでください。");
    }
    else if (13 <= (countWords + countIdioms) && (countWords + countIdioms) <= 16) {
      return results(countWords, countIdioms, "合格可能性:60%～80%", "この級に合格する可能性は、英単語・英熟語の習得率で判断すると高いですが、油断はできません。間違えた問題を確認し、英単語・英熟語帳に暗記漏れがないかどうかを確認してください。リーディング、リスニング、スピーキング、ライティングの勉強の継続も合格率をあげるには重要です。");
    }
    else if (17 <= (countWords + countIdioms)) {
      return results(countWords, countIdioms, "合格可能性:90%～100%", "この級に合格する可能性は、英単語・英熟語の習得率で判断すると、かなり高いと言えます。より合格を確実にしたい場合は、リーディング、リスニング、スピーキング、ライティングの勉強を継続してください。");
    }
  }
  return (
    <div>
      <h2>級の概要</h2>
      <p>英検1級では、約10000～15000語が合格するために習得すべき語彙数であるとされています。どの英単語・英熟語も英語圏における社会的・学術的な話題を理解するには重要な語彙であり、特に海外留学や海外就職等を検討している場合は、高度な知識が求められる場面で役に立つ語彙とも言えます。また、通訳者や外交官を目指している方にとっては、合格しておくと就職時に有利な資格であるとされています。</p>
      <h2>問題の解答方法について</h2>
      <p>問題は、英単語編・英熟語編の2部に分かれており、それぞれ10問解答する必要があります。それぞれ10問のうち、前半5問は英単語・英熟語の日本語訳として最も適切なものを1つ選ぶ選択肢問題、後半5問は英文の空欄に当てはまる語彙を英文の下にある日本語訳から推測して半角英数字で解答を記入する記述問題で構成されています。なお、記述問題は問題によっては複数の解答が正解になるため、空欄に初期の状態で入力済みのアルファベット1文字を解答の頭文字として利用してください。（英熟語の記述問題の場合は、複数単語の記入が必要になるため、空欄に初期の状態で入力済みのアルファベット1文字目を最初の単語の頭文字、2文字目を2番目の単語の頭文字、⋯と利用して解答してください。）英熟語の記述問題では、単語の間に半角スペースを1つ必ず空けてください。（2つ以上半角スペースを空けた場合や、全角スペースを空けた場合は、不正解となりますので、注意してください。）また、解答が完了したら「解答を送信」ボタンを押し、各問題の正解・不正解を確認しつつ、あなたが挑戦した級の合否可能性を閲覧してください。問題に再挑戦したい場合は、「結果・解答をクリア」ボタンを押して下さい。</p>
      <form name="grade1" onSubmit={handleSubmit}>
        <h2 id="part1">英単語編</h2>
        <p id="question1">1.hypothesis</p>
        <input type="radio" name="hypothesis" value="false1" checked={selectedValue1 === "false1"} onChange={handleRadioChange1} disabled={submitted} required />実体
        <input type="radio" name="hypothesis" value="false2" checked={selectedValue1 === "false2"} onChange={handleRadioChange1} disabled={submitted} />括弧
        <input type="radio" name="hypothesis" value="false3" checked={selectedValue1 === "false3"} onChange={handleRadioChange1} disabled={submitted} />強調
        <input type="radio" name="hypothesis" value="true" checked={selectedValue1 === "true"} onChange={handleRadioChange1} disabled={submitted} />仮説
        {submitted && selectedValue1 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue1 === "true" && <p className="true">〇正解</p>}
        <p id="question2">2.archaeological</p>
        <input type="radio" name="archaeological" value="true" checked={selectedValue2 === "true"} onChange={handleRadioChange2} disabled={submitted} required />考古学の
        <input type="radio" name="archaeological" value="false1" checked={selectedValue2 === "false1"} onChange={handleRadioChange2} disabled={submitted} />人類学の
        <input type="radio" name="archaeological" value="false2" checked={selectedValue2 === "false2"} onChange={handleRadioChange2} disabled={submitted} />地質学の
        <input type="radio" name="archaeological" value="false3" checked={selectedValue2 === "false3"} onChange={handleRadioChange2} disabled={submitted} />生物学の
        {submitted && selectedValue2 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue2 === "true" && <p className="true">〇正解</p>}
        <p id="question3">3.bribery</p>
        <input type="radio" name="bribery" value="false1" checked={selectedValue3 === "false1"} onChange={handleRadioChange3} disabled={submitted} required />強盗
        <input type="radio" name="bribery" value="false2" checked={selectedValue3 === "false2"} onChange={handleRadioChange3} disabled={submitted} />窃盗
        <input type="radio" name="bribery" value="true" checked={selectedValue3 === "true"} onChange={handleRadioChange3} disabled={submitted} />贈収賄
        <input type="radio" name="bribery" value="false3" checked={selectedValue3 === "false3"} onChange={handleRadioChange3} disabled={submitted} />偽証
        {submitted && selectedValue3 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue3 === "true" && <p className="true">〇正解</p>}
        <p id="question4">4.nourishment</p>
        <input type="radio" name="nourishment" value="false1" checked={selectedValue4 === "false1"} onChange={handleRadioChange4} disabled={submitted} required />看護
        <input type="radio" name="nourishment" value="true" checked={selectedValue4 === "true"} onChange={handleRadioChange4} disabled={submitted} />栄養
        <input type="radio" name="nourishment" value="false2" checked={selectedValue4 === "false2"} onChange={handleRadioChange4} disabled={submitted} />飼育
        <input type="radio" name="nourishment" value="false3" checked={selectedValue4 === "false3"} onChange={handleRadioChange4} disabled={submitted} />処罰
        {submitted && selectedValue4 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue4 === "true" && <p className="true">〇正解</p>}
        <p id="question5">5.dissent</p>
        <input type="radio" name="dissent" value="false1" checked={selectedValue5 === "false1"} onChange={handleRadioChange5} disabled={submitted} required />不和
        <input type="radio" name="dissent" value="false2" checked={selectedValue5 === "false2"} onChange={handleRadioChange5} disabled={submitted} />不満
        <input type="radio" name="dissent" value="true" checked={selectedValue5 === "true"} onChange={handleRadioChange5} disabled={submitted} />異議
        <input type="radio" name="dissent" value="false3" checked={selectedValue5 === "false3"} onChange={handleRadioChange5} disabled={submitted} />解雇
        {submitted && selectedValue5 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue5 === "true" && <p className="true">〇正解</p>}
        <p id="question6">6.I think he is a <input type="text" id="sympathetic" value={textValue1} onChange={handleTextChange1} disabled={submitted} required /> person because he always helps people in need when he sees them.</p>
        <p>訳：困っている人々を見かけるといつも助けているため、彼は思いやりのある人物であると思います。</p>
        {submitted && textValue1.trim() !== "sympathetic" && <p className="false">✕不正解</p>}{submitted && textValue1.trim() === "sympathetic" && <p className="true">〇正解</p>}
        <p id="question7">7.<input type="text" id="Tragic" value={textValue2} onChange={handleTextChange2} disabled={submitted} required /> accidents usually happen when people forget past accidents.</p>
        <p>訳：人々が過去の事故を忘れた時に、悲惨な事故がよく起こります。</p>
        {submitted && textValue2.trim() !== "Tragic" && <p className="false">✕不正解</p>}{submitted && textValue2.trim() === "Tragic" && <p className="true">〇正解</p>}
        <p id="question8">8.If you eat a lot of sweets now,you will suffer from <input type="text" id="diabetes" value={textValue3} onChange={handleTextChange3} disabled={submitted} required /> in the future.</p>
        <p>訳：もしあなたが今沢山お菓子を食べれば、将来糖尿病で苦しむことになるでしょう。</p>
        {submitted && textValue3.trim() !== "diabetes" && <p className="false">✕不正解</p>}{submitted && textValue3.trim() === "diabetes" && <p className="true">〇正解</p>}
        <p id="question9">9.It is difficult for me to <input type="text" id="comprehend" value={textValue4} onChange={handleTextChange4} disabled={submitted} required /> the universe.</p>
        <p>訳：私にとって、宇宙を理解することは難しい。</p>
        {submitted && textValue4.trim() !== "comprehend" && <p className="false">✕不正解</p>}{submitted && textValue4.trim() === "comprehend" && <p className="true">〇正解</p>}
        <p id="question10">10.He was <input type="text" id="convicted" value={textValue5} onChange={handleTextChange5} disabled={submitted} required /> of a scam after he was arrested by the police.</p>
        <p>訳：彼は警察に逮捕された後、詐欺で有罪になった。</p>
        {submitted && textValue5.trim() !== "convicted" && <p className="false">✕不正解</p>}{submitted && textValue5.trim() === "convicted" && <p className="true">〇正解</p>}
        <h2 id="part2">英熟語編</h2>
        <p id="question11">1.pull off</p>
        <input type="radio" name="pull" value="false1" checked={selectedValue6 === "false1"} onChange={handleRadioChange6} disabled={submitted} required />辞退する
        <input type="radio" name="pull" value="false2" checked={selectedValue6 === "false2"} onChange={handleRadioChange6} disabled={submitted} />取り壊す
        <input type="radio" name="pull" value="true" checked={selectedValue6 === "true"} onChange={handleRadioChange6} disabled={submitted} />成功する
        <input type="radio" name="pull" value="false3" checked={selectedValue6 === "false3"} onChange={handleRadioChange6} disabled={submitted} />後退する
        {submitted && selectedValue6 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue6 === "true" && <p className="true">〇正解</p>}
        <p id="question12">2.settle on</p>
        <input type="radio" name="settle" value="true" checked={selectedValue7 === "true"} onChange={handleRadioChange7} disabled={submitted} required />決定する
        <input type="radio" name="settle" value="false1" checked={selectedValue7 === "false1"} onChange={handleRadioChange7} disabled={submitted} />満足する
        <input type="radio" name="settle" value="false2" checked={selectedValue7 === "false2"} onChange={handleRadioChange7} disabled={submitted} />定住する
        <input type="radio" name="settle" value="false3" checked={selectedValue7 === "false3"} onChange={handleRadioChange7} disabled={submitted} />精算する
        {submitted && selectedValue7 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue7 === "true" && <p className="true">〇正解</p>}
        <p id="question13">3.gain on</p>
        <input type="radio" name="gain" value="false1" checked={selectedValue8 === "false1"} onChange={handleRadioChange8} disabled={submitted} required />獲得する
        <input type="radio" name="gain" value="true" checked={selectedValue8 === "true"} onChange={handleRadioChange8} disabled={submitted} />追いつく
        <input type="radio" name="gain" value="false2" checked={selectedValue8 === "false2"} onChange={handleRadioChange8} disabled={submitted} />味方にする
        <input type="radio" name="gain" value="false3" checked={selectedValue8 === "false3"} onChange={handleRadioChange8} disabled={submitted} />回復する
        {submitted && selectedValue8 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue8 === "true" && <p className="true">〇正解</p>}
        <p id="question14">4.mark out</p>
        <input type="radio" name="mark" value="true" checked={selectedValue9 === "true"} onChange={handleRadioChange9} disabled={submitted} required />区画する
        <input type="radio" name="mark" value="false1" checked={selectedValue9 === "false1"} onChange={handleRadioChange9} disabled={submitted} />値下げする
        <input type="radio" name="mark" value="false2" checked={selectedValue9 === "false2"} onChange={handleRadioChange9} disabled={submitted} />書き留める
        <input type="radio" name="mark" value="false3" checked={selectedValue9 === "false3"} onChange={handleRadioChange9} disabled={submitted} />注釈をつける
        {submitted && selectedValue9 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue9 === "true" && <p className="true">〇正解</p>}
        <p id="question15">5.draw in</p>
        <input type="radio" name="draw" value="false1" checked={selectedValue10 === "false1"} onChange={handleRadioChange10} disabled={submitted} required />引き出す
        <input type="radio" name="draw" value="false2" checked={selectedValue10 === "false2"} onChange={handleRadioChange10} disabled={submitted} />作成する
        <input type="radio" name="draw" value="true" checked={selectedValue10 === "true"} onChange={handleRadioChange10} disabled={submitted} />勧誘する
        <input type="radio" name="draw" value="false3" checked={selectedValue10 === "false3"} onChange={handleRadioChange10} disabled={submitted} />活用する
        {submitted && selectedValue10 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue10 === "true" && <p className="true">〇正解</p>}
        <p id="question16">6.I had <input type="text" id="wrap" value={textValue6} onChange={handleTextChange6} disabled={submitted} required /> studying English before I ate lunch.</p>
        <p>訳：私は昼食を食べる前に、英語の勉強を終えました。</p>
        {submitted && textValue6.trim() !== "wrapped up" && <p className="false">✕不正解</p>}{submitted && textValue6.trim() === "wrapped up" && <p className="true">〇正解</p>}
        <p id="question17">7.He remembered impressive landscapes that he had seen before by <input type="text" id="piece" value={textValue7} onChange={handleTextChange7} disabled={submitted} required /> his memories.</p>
        <p>訳：彼は記憶を繋ぎ合わせることによって、以前見た印象的な風景を思い出しました。</p>
        {submitted && textValue7.trim() !== "piecing together" && <p className="false">✕不正解</p>}{submitted && textValue7.trim() === "piecing together" && <p className="true">〇正解</p>}
        <p id="question18">8.My hobby is <input type="text" id="browse" value={textValue8} onChange={handleTextChange8} disabled={submitted} required /> new novels in bookstores.</p>
        <p>訳：私の趣味は、本屋で新しい小説を眺めることです。</p>
        {submitted && textValue8.trim() !== "browsing through" && <p className="false">✕不正解</p>}{submitted && textValue8.trim() === "browsing through" && <p className="true">〇正解</p>}
        <p id="question19">9.My grandfather's house was <input type="text" id="tear" value={textValue9} onChange={handleTextChange9} disabled={submitted} required /> because it might collapse in near future.</p>
        <p>訳：近い将来、倒壊するかもしれなかったため、私の祖父の家は取り壊された。</p>
        {submitted && textValue9.trim() !== "torn down" && <p className="false">✕不正解</p>}{submitted && textValue9.trim() === "torn down" && <p className="true">〇正解</p>}
        <p id="question20">10.<input type="text" id="crack" value={textValue10} onChange={handleTextChange10} disabled={submitted} required /> graffiti leads to an improvement in safety.</p>
        <p>訳：落書きを厳しく取り締まることが、治安の改善に繋がります。</p>
        {submitted && textValue10.trim() !== "Cracking down on" && <p className="false">✕不正解</p>}{submitted && textValue10.trim() === "Cracking down on" && <p className="true">〇正解</p>}
        <button type="submit" value="submit" id="submit" disabled={submitted}>解答を送信</button>
        <button type="button" value="delete" id="clear" onClick={() => handleDeleted("delete")}>結果・解答をクリア</button>
      </form>
      {submitted && displayResults()}
    </div>
  )
};

export default Grade1;