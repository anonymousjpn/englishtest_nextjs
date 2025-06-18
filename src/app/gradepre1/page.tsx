"use client";
import React from 'react';
import { useState,useEffect } from "react";
const Gradepre1=():React.JSX.Element=>{
  const [selectedValue1, setSelectedValue1] = useState<string>("");
  const [selectedValue2, setSelectedValue2] = useState<string>("");
  const [selectedValue3, setSelectedValue3] = useState<string>("");
  const [selectedValue4, setSelectedValue4] = useState<string>("");
  const [selectedValue5, setSelectedValue5] = useState<string>("");
  const [textValue1, setTextValue1] = useState<string>("i");
  const [textValue2, setTextValue2] = useState<string>("m");
  const [textValue3, setTextValue3] = useState<string>("p");
  const [textValue4, setTextValue4] = useState<string>("g");
  const [textValue5, setTextValue5] = useState<string>("h");
  const [selectedValue6, setSelectedValue6] = useState<string>("");
  const [selectedValue7, setSelectedValue7] = useState<string>("");
  const [selectedValue8, setSelectedValue8] = useState<string>("");
  const [selectedValue9, setSelectedValue9] = useState<string>("");
  const [selectedValue10, setSelectedValue10] = useState<string>("");
  const [textValue6, setTextValue6] = useState<string>("a o");
  const [textValue7, setTextValue7] = useState<string>("m o");
  const [textValue8, setTextValue8] = useState<string>("d o");
  const [textValue9, setTextValue9] = useState<string>("i p o");
  const [textValue10, setTextValue10] = useState<string>("I s o");
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
      if (textValue1.trim() === "intervene") correctWords++;
      if (textValue2.trim() === "modified") correctWords++;
      if (textValue3.trim() === "passionate") correctWords++;
      if (textValue4.trim() === "guarantee") correctWords++;
      if (textValue5.trim() === "hostile") correctWords++;
      if (selectedValue6 === "true") correctIdioms++;
      if (selectedValue7 === "true") correctIdioms++;
      if (selectedValue8 === "true") correctIdioms++;
      if (selectedValue9 === "true") correctIdioms++;
      if (selectedValue10 === "true") correctIdioms++;
      if (textValue6.trim() === "aired out") correctIdioms++;
      if (textValue7.trim() === "missed out") correctIdioms++;
      if (textValue8.trim() === "drag on") correctIdioms++;
      if (textValue9.trim() === "in place of") correctIdioms++;
      if (textValue10.trim() === "In spite of") correctIdioms++;
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
      setTextValue1("i");
      setTextValue2("m");
      setTextValue3("p");
      setTextValue4("g");
      setTextValue5("h");
      setTextValue6("a o");
      setTextValue7("m o");
      setTextValue8("d o");
      setTextValue9("i p o");
      setTextValue10("I s o");
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
        <p className="answer"><strong>英単語編:</strong>1.中毒 2.予算 3.衝突 4.不景気 5.詐欺 6.intervene 7.modified 8.passionate 9.guarantee 10.hostile</p>
        <p className="answer"><strong>英熟語編:</strong>1.除外する 2.放出する 3.騙される 4.荒廃する 5.無視する 6.aired out 7.missed out 8.drag on 9.in place of 10.In spite of</p>    
      </>
    )
  }
  function displayResults():React.ReactNode {
    if ((countWords + countIdioms) <= 8) {
      return results(countWords, countIdioms, "合格可能性:0%～10%", "残念ながら、この級に合格する可能性はかなり低いです。基礎的な英単語・英熟語を一通り暗記してから再挑戦してみてください。また、問題が難しく感じた場合は、2級の問題にも挑戦してみてください。");
    }
    else if (9 <= (countWords + countIdioms) && (countWords + countIdioms) <= 12) {
      return results(countWords, countIdioms, "合格可能性:20%～40%", "この級に合格する可能性は現時点では低いですが、継続して学習を続ければ、合格できる可能性があります。間違えた問題を確認し、英単語・英熟語帳を再度読み込んでから再挑戦してみてください。リーディング、リスニング、スピーキング、ライティングの勉強にも取り組んでください。");
    }
    else if (13 <= (countWords + countIdioms) && (countWords + countIdioms) <= 16) {
      return results(countWords, countIdioms, "合格可能性:60%～80%", "この級に合格する可能性は、英単語・英熟語の習得率で判断すると高いですが、油断はできません。間違えた問題を確認し、英単語・英熟語帳に暗記漏れがないかどうかを確認してください。リーディング、リスニング、スピーキング、ライティングの勉強の継続も合格率をあげるには重要です。");
    }
    else if (17 <= (countWords + countIdioms)) {
      return results(countWords, countIdioms, "合格可能性:90%～100%", "この級に合格する可能性は、英単語・英熟語の習得率で判断すると、かなり高いと言えます。より合格を確実にしたい場合は、リーディング、リスニング、スピーキング、ライティングの勉強を継続してください。また、自信があれば1級の問題にも挑戦してみてください。");
    }
  }
  return (
    <div>
      <h2>級の概要</h2>
      <p>英検準1級では、約7500語が合格するために習得すべき語彙数であるとされています。どの英単語・英熟語も英語圏における社会的・学術的な話題を理解するには重要な語彙であり、特に海外留学や海外就職等を検討している場合は、前提知識として身につけるべき必須の語彙とも言えます。</p>
      <h2>問題の解答方法について</h2>
      <p>問題は、英単語編・英熟語編の2部に分かれており、それぞれ10問解答する必要があります。それぞれ10問のうち、前半5問は英単語・英熟語の日本語訳として最も適切なものを1つ選ぶ選択肢問題、後半5問は英文の空欄に当てはまる語彙を英文の下にある日本語訳から推測して半角英数字で解答を記入する記述問題で構成されています。なお、記述問題は問題によっては複数の解答が正解になるため、空欄に初期の状態で入力済みのアルファベット1文字を解答の頭文字として利用してください。（英熟語の記述問題の場合は、複数単語の記入が必要になるため、空欄に初期の状態で入力済みのアルファベット1文字目を最初の単語の頭文字、2文字目を2番目の単語の頭文字、⋯と利用して解答してください。）英熟語の記述問題では、単語の間に半角スペースを1つ必ず空けてください。（2つ以上半角スペースを空けた場合や、全角スペースを空けた場合は、不正解となりますので、注意してください。）また、解答が完了したら「解答を送信」ボタンを押し、各問題の正解・不正解を確認しつつ、あなたが挑戦した級の合否可能性を閲覧してください。問題に再挑戦したい場合は、「結果・解答をクリア」ボタンを押して下さい。</p>
      <form name="gradepre1" onSubmit={handleSubmit}>
        <h2 id="part1">英単語編</h2>
        <p id="question1">1.addiction</p>
        <input type="radio" name="addiction" value="false1" checked={selectedValue1 === "false1"} onChange={handleRadioChange1} disabled={submitted} required />苦痛
        <input type="radio" name="addiction" value="true" checked={selectedValue1 === "true"} onChange={handleRadioChange1} disabled={submitted} />中毒
        <input type="radio" name="addiction" value="false2" checked={selectedValue1 === "false2"} onChange={handleRadioChange1} disabled={submitted} />添加物
        <input type="radio" name="addiction" value="false3" checked={selectedValue1 === "false3"} onChange={handleRadioChange1} disabled={submitted} />適応
        {submitted && selectedValue1 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue1 === "true" && <p className="true">〇正解</p>}
        <p id="question2">2.budget</p>
        <input type="radio" name="budget" value="false1" checked={selectedValue2 === "false1"} onChange={handleRadioChange2} disabled={submitted} required />道具
        <input type="radio" name="budget" value="false2" checked={selectedValue2 === "false2"} onChange={handleRadioChange2} disabled={submitted} />名札
        <input type="radio" name="budget" value="true" checked={selectedValue2 === "true"} onChange={handleRadioChange2} disabled={submitted} />予算
        <input type="radio" name="budget" value="false3" checked={selectedValue2 === "false3"} onChange={handleRadioChange2} disabled={submitted} />象徴
        {submitted && selectedValue2 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue2 === "true" && <p className="true">〇正解</p>}
        <p id="question3">3.collision</p>
        <input type="radio" name="collision" value="false1" checked={selectedValue3 === "false1"} onChange={handleRadioChange3} disabled={submitted} required />競争
        <input type="radio" name="collision" value="false2" checked={selectedValue3 === "false2"} onChange={handleRadioChange3} disabled={submitted} />収集
        <input type="radio" name="collision" value="true" checked={selectedValue3 === "true"} onChange={handleRadioChange3} disabled={submitted} />衝突
        <input type="radio" name="collision" value="false3" checked={selectedValue3 === "false3"} onChange={handleRadioChange3} disabled={submitted} />混乱
        {submitted && selectedValue3 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue3 === "true" && <p className="true">〇正解</p>}
        <p id="question4">4.depression</p>
        <input type="radio" name="depression" value="false1" checked={selectedValue4 === "false1"} onChange={handleRadioChange4} disabled={submitted} required />抑圧
        <input type="radio" name="depression" value="false2" checked={selectedValue4 === "false2"} onChange={handleRadioChange4} disabled={submitted} />圧縮
        <input type="radio" name="depression" value="false3" checked={selectedValue4 === "false3"} onChange={handleRadioChange4} disabled={submitted} />脱線
        <input type="radio" name="depression" value="true" checked={selectedValue4 === "true"} onChange={handleRadioChange4} disabled={submitted} />不景気
        {submitted && selectedValue4 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue4 === "true" && <p className="true">〇正解</p>}
        <p id="question5">5.fraud</p>
        <input type="radio" name="fraud" value="false1" checked={selectedValue5 === "false1"} onChange={handleRadioChange5} disabled={submitted} required />奇人
        <input type="radio" name="fraud" value="false2" checked={selectedValue5 === "false2"} onChange={handleRadioChange5} disabled={submitted} />偽造
        <input type="radio" name="fraud" value="true" checked={selectedValue5 === "true"} onChange={handleRadioChange5} disabled={submitted} />詐欺
        <input type="radio" name="fraud" value="false3" checked={selectedValue5 === "false3"} onChange={handleRadioChange5} disabled={submitted} />凍結
        {submitted && selectedValue5 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue5 === "true" && <p className="true">〇正解</p>}
        <p id="question6">6.Other countries shouldn't <input type="text" id="intervene" value={textValue1} onChange={handleTextChange1} disabled={submitted} required /> in this problem.</p>
        <p>訳：他国はその問題に干渉するべきではありません。</p>
        {submitted && textValue1.trim() !== "intervene" && <p className="false">✕不正解</p>}{submitted && textValue1.trim() === "intervene" && <p className="true">〇正解</p>}
        <p id="question7">7.Japan <input type="text" id="modified" value={textValue2} onChange={handleTextChange2} disabled={submitted} required /> the constitution in order to keep up with the changes of the times.</p>
        <p>訳：日本は、時代の変化に遅れないように、憲法を改正した。</p>
        {submitted && textValue2.trim() !== "modified" && <p className="false">✕不正解</p>}{submitted && textValue2.trim() === "modified" && <p className="true">〇正解</p>}
        <p id="question8">8.He is <input type="text" id="passionate" value={textValue3} onChange={handleTextChange3} disabled={submitted} required /> about reading books.</p>
        <p>訳：彼は、本を読むことに熱中しています。</p>
        {submitted && textValue3.trim() !== "passionate" && <p className="false">✕不正解</p>}{submitted && textValue3.trim() === "passionate" && <p className="true">〇正解</p>}
        <p id="question9">9. If you use this product in that way,I can't <input type="text" id="guarantee" value={textValue4} onChange={handleTextChange4} disabled={submitted} required /> its safety.</p>
        <p>訳：もしあなたがこの商品をそのように使うのであれば、安全性は保証できません。</p>
        {submitted && textValue4.trim() !== "guarantee" && <p className="false">✕不正解</p>}{submitted && textValue4.trim() === "guarantee" && <p className="true">〇正解</p>}
        <p id="question10">10.Why are you <input type="text" id="hostile" value={textValue5} onChange={handleTextChange5} disabled={submitted} required /> to me?</p>
        <p>訳：なぜあなたは私に対して敵対的なのですか。</p>
        {submitted && textValue5.trim() !== "hostile" && <p className="false">✕不正解</p>}{submitted && textValue5.trim() === "hostile" && <p className="true">〇正解</p>}
        <h2 id="part2">英熟語編</h2>
        <p id="question11">1.rule out</p>
        <input type="radio" name="rule" value="true" checked={selectedValue6 === "true"} onChange={handleRadioChange6} disabled={submitted} required />除外する
        <input type="radio" name="rule" value="false1" checked={selectedValue6 === "false1"} onChange={handleRadioChange6} disabled={submitted} />支配する
        <input type="radio" name="rule" value="false2" checked={selectedValue6 === "false2"} onChange={handleRadioChange6} disabled={submitted} />反対する
        <input type="radio" name="rule" value="false3" checked={selectedValue6 === "false3"} onChange={handleRadioChange6} disabled={submitted} />判断を下す
        {submitted && selectedValue6 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue6 === "true" && <p className="true">〇正解</p>}
        <p id="question12">2.give off</p>
        <input type="radio" name="give" value="false1" checked={selectedValue7 === "false1"} onChange={handleRadioChange7} disabled={submitted} required />諦める
        <input type="radio" name="give" value="false2" checked={selectedValue7 === "false2"} onChange={handleRadioChange7} disabled={submitted} />配る
        <input type="radio" name="give" value="true" checked={selectedValue7 === "true"} onChange={handleRadioChange7} disabled={submitted} />放出する
        <input type="radio" name="give" value="false3" checked={selectedValue7 === "false3"} onChange={handleRadioChange7} disabled={submitted} />譲歩する
        {submitted && selectedValue7 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue7 === "true" && <p className="true">〇正解</p>}
        <p id="question13">3.fall for</p>
        <input type="radio" name="fall" value="false1" checked={selectedValue8 === "false1"} onChange={handleRadioChange8} disabled={submitted} required />落ちる
        <input type="radio" name="fall" value="true" checked={selectedValue8 === "true"} onChange={handleRadioChange8} disabled={submitted} />騙される
        <input type="radio" name="fall" value="false2" checked={selectedValue8 === "false2"} onChange={handleRadioChange8} disabled={submitted} />喧嘩する
        <input type="radio" name="fall" value="false3" checked={selectedValue8 === "false3"} onChange={handleRadioChange8} disabled={submitted} />転ぶ
        {submitted && selectedValue8 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue8 === "true" && <p className="true">〇正解</p>}
        <p id="question14">4.run down</p>
        <input type="radio" name="run" value="false1" checked={selectedValue9 === "false1"} onChange={handleRadioChange9} disabled={submitted} required />長引く
        <input type="radio" name="run" value="false2" checked={selectedValue9 === "false2"} onChange={handleRadioChange9} disabled={submitted} />出会う
        <input type="radio" name="run" value="false3" checked={selectedValue9 === "false3"} onChange={handleRadioChange9} disabled={submitted} />逃げる
        <input type="radio" name="run" value="true" checked={selectedValue9 === "true"} onChange={handleRadioChange9} disabled={submitted} />荒廃する
        {submitted && selectedValue9 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue9 === "true" && <p className="true">〇正解</p>}
        <p id="question15">5.brush off</p>
        <input type="radio" name="brush" value="false1" checked={selectedValue10 === "false1"} onChange={handleRadioChange10} disabled={submitted} required />復習する
        <input type="radio" name="brush" value="false2" checked={selectedValue10 === "false2"} onChange={handleRadioChange10} disabled={submitted} />掠める
        <input type="radio" name="brush" value="true" checked={selectedValue10 === "true"} onChange={handleRadioChange10} disabled={submitted} />無視する
        <input type="radio" name="brush" value="false3" checked={selectedValue10 === "false3"} onChange={handleRadioChange10} disabled={submitted} />赤面する
        {submitted && selectedValue10 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue10 === "true" && <p className="true">〇正解</p>}
        <p id="question16">6.I <input type="text" id="air" value={textValue6} onChange={handleTextChange6} disabled={submitted} required /> my clothes after I washed them.</p>
        <p>訳：私は服を洗った後、乾燥させました。</p>
        {submitted && textValue6.trim() !== "aired out" && <p className="false">✕不正解</p>}{submitted && textValue6.trim() === "aired out" && <p className="true">〇正解</p>}
        <p id="question17">7.My friend <input type="text" id="miss" value={textValue7} onChange={handleTextChange7} disabled={submitted} required /> on meeting celebrities.</p>
        <p>訳：私の友達は、有名人に会う機会を逃しました。</p>
        {submitted && textValue7.trim() !== "missed out" && <p className="false">✕不正解</p>}{submitted && textValue7.trim() === "missed out" && <p className="true">〇正解</p>}
        <p id="question18">8.This conference is expected to <input type="text" id="drag" value={textValue8} onChange={handleTextChange8} disabled={submitted} required /> because all participants have different opinions.</p>
        <p>訳：全ての参加者が異なる意見を持っているため、この会議は長引くことが予想されます。</p>
        {submitted && textValue8.trim() !== "drag on" && <p className="false">✕不正解</p>}{submitted && textValue8.trim() === "drag on" && <p className="true">〇正解</p>}
        <p id="question19">9.Using cars <input type="text" id="place" value={textValue9} onChange={handleTextChange9} disabled={submitted} required /> public transportation causes serious environmental problems.</p>
        <p>訳：公共交通機関の代わりに自家用車を利用することは、深刻な環境問題を引き起こします。</p>
        {submitted && textValue9.trim() !== "in place of" && <p className="false">✕不正解</p>}{submitted && textValue9.trim() === "in place of" && <p className="true">〇正解</p>}
        <p id="question20">10.<input type="text" id="spite" value={textValue10} onChange={handleTextChange10} disabled={submitted} required /> my advice,he didn't stop gambling.</p>
        <p>訳：私の忠告にも関わらず、彼はギャンブルをやめなかった。</p>
        {submitted && textValue10.trim() !== "In spite of" && <p className="false">✕不正解</p>}{submitted && textValue10.trim() === "In spite of" && <p className="true">〇正解</p>}
        <button type="submit" value="submit" id="submit" disabled={submitted}>解答を送信</button>
        <button type="button" value="delete" id="clear" onClick={() => handleDeleted("delete")}>結果・解答をクリア</button>
      </form>
      {submitted && displayResults()}
    </div>
  )
};

export default Gradepre1;