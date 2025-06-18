"use client";
import React from "react";
import { useState,useEffect } from "react";
const Grade5 = ():React.JSX.Element => {
  const [selectedValue1, setSelectedValue1] = useState<string>("");
  const [selectedValue2, setSelectedValue2] = useState<string>("");
  const [selectedValue3, setSelectedValue3] = useState<string>("");
  const [selectedValue4, setSelectedValue4] = useState<string>("");
  const [selectedValue5, setSelectedValue5] = useState<string>("");
  const [textValue1, setTextValue1] = useState<string>("c");
  const [textValue2, setTextValue2] = useState<string>("f");
  const [textValue3, setTextValue3] = useState<string>("l");
  const [textValue4, setTextValue4] = useState<string>("k");
  const [textValue5, setTextValue5] = useState<string>("w");
  const [selectedValue6, setSelectedValue6] = useState<string>("");
  const [selectedValue7, setSelectedValue7] = useState<string>("");
  const [selectedValue8, setSelectedValue8] = useState<string>("");
  const [selectedValue9, setSelectedValue9] = useState<string>("");
  const [selectedValue10, setSelectedValue10] = useState<string>("");
  const [textValue6, setTextValue6] = useState<string>("c f");
  const [textValue7, setTextValue7] = useState<string>("g u");
  const [textValue8, setTextValue8] = useState<string>("l i");
  const [textValue9, setTextValue9] = useState<string>("o w");
  const [textValue10, setTextValue10] = useState<string>("o t");
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
      if (textValue1.trim() === "closed") correctWords++;
      if (textValue2.trim() === "favorite") correctWords++;
      if (textValue3.trim() === "learn") correctWords++;
      if (textValue4.trim() === "knows") correctWords++;
      if (textValue5.trim() === "washing") correctWords++;
      if (selectedValue6 === "true") correctIdioms++;
      if (selectedValue7 === "true") correctIdioms++;
      if (selectedValue8 === "true") correctIdioms++;
      if (selectedValue9 === "true") correctIdioms++;
      if (selectedValue10 === "true") correctIdioms++;
      if (textValue6.trim() === "come from") correctIdioms++;
      if (textValue7.trim() === "got up") correctIdioms++;
      if (textValue8.trim() === "live in") correctIdioms++;
      if (textValue9.trim() === "on weekends") correctIdioms++;
      if (textValue10.trim() === "over there") correctIdioms++;
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
  const handleRadioChange4:handleInputChange= (event) => {
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
  const handleTextChange6:handleInputChange = (event)=> {
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
      setTextValue1("c");
      setTextValue2("f");
      setTextValue3("l");
      setTextValue4("k");
      setTextValue5("w");
      setTextValue6("c f");
      setTextValue7("g u");
      setTextValue8("l i");
      setTextValue9("o w");
      setTextValue10("o t");
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
        <p className="answer"><strong>英単語編:</strong>1.4月 2.美術 3.鞄 4.朝食 5.兄弟 6.closed 7.favorite 8.learn 9.knows 10.washing</p>
        <p className="answer"><strong>英熟語編:</strong>1.電話をかけ直す 2.待つ 3.探す 4.到着する 5.宿題をする 6.come from 7.got up 8.live in 9.on weekends 10.over there</p>
      </>
    )
  }
  function displayResults():React.ReactNode {
    if ((countWords + countIdioms) <= 8) {
      return results(countWords, countIdioms, "合格可能性:0%～10%", "残念ながら、この級に合格する可能性はかなり低いです。基礎的な英単語・英熟語を一通り暗記してから再挑戦してみてください。");
    }
    else if (9 <= (countWords + countIdioms) && (countWords + countIdioms) <= 12) {
      return results(countWords, countIdioms, "合格可能性:20%～40%", "この級に合格する可能性は現時点では低いですが、継続して学習を続ければ、合格できる可能性があります。間違えた問題を確認し、英単語・英熟語帳を再度読み込んでから再挑戦してみてください。リーディング、リスニング、スピーキング、ライティングの勉強にも取り組んでください。");
    }
    else if (13 <= (countWords + countIdioms) && (countWords + countIdioms) <= 16) {
      return results(countWords, countIdioms, "合格可能性:60%～80%", "この級に合格する可能性は、英単語・英熟語の習得率で判断すると高いですが、油断はできません。間違えた問題を確認し、英単語・英熟語帳に暗記漏れがないかどうかを確認してください。リーディング、リスニング、スピーキング、ライティングの勉強の継続も合格率をあげるには重要です。");
    }
    else if (17 <= (countWords + countIdioms)) {
      return results(countWords, countIdioms, "合格可能性:90%～100%", "この級に合格する可能性は、英単語・英熟語の習得率で判断すると、かなり高いと言えます。より合格を確実にしたい場合は、リーディング、リスニング、スピーキング、ライティングの勉強を継続してください。また、自信があれば4級の問題にも挑戦してみてください。");
    }
  }
  return (
    <div>
      <h2>級の概要</h2>
      <p>英検5級では、約600語が合格するために習得すべき語彙数であるとされています。どの英単語・英熟語も英会話では頻出する基本的な語彙であると言えるため、この級に合格することが英語力の基礎固めとしてはかなり重要になります。</p>
      <h2>問題の解答方法について</h2>
      <p>問題は、英単語編・英熟語編の2部に分かれており、それぞれ10問解答する必要があります。それぞれ10問のうち、前半5問は英単語・英熟語の日本語訳として最も適切なものを1つ選ぶ選択肢問題、後半5問は英文の空欄に当てはまる語彙を英文の下にある日本語訳から推測して半角英数字で解答を記入する記述問題で構成されています。なお、記述問題は問題によっては複数の解答が正解になるため、空欄に初期の状態で入力済みのアルファベット1文字を解答の頭文字として利用してください。（英熟語の記述問題の場合は、複数単語の記入が必要になるため、空欄に初期の状態で入力済みのアルファベット1文字目を最初の単語の頭文字、2文字目を2番目の単語の頭文字、⋯と利用して解答してください。）英熟語の記述問題では、単語の間に半角スペースを1つ必ず空けてください。（2つ以上半角スペースを空けた場合や、全角スペースを空けた場合は、不正解となりますので、注意してください。）また、解答が完了したら「解答を送信」ボタンを押し、各問題の正解・不正解を確認しつつ、あなたが挑戦した級の合否可能性を閲覧してください。問題に再挑戦したい場合は、「結果・解答をクリア」ボタンを押して下さい。</p>
      <form name="grade5" onSubmit={handleSubmit}>
        <h2 id="part1">英単語編</h2>
        <p id="question1">1.April</p>
        <input type="radio" name="month" value="false1" checked={selectedValue1 === "false1"} onChange={handleRadioChange1} disabled={submitted} required />8月
        <input type="radio" name="month" value="false2" checked={selectedValue1 === "false2"} onChange={handleRadioChange1} disabled={submitted} />9月
        <input type="radio" name="month" value="true" checked={selectedValue1 === "true"} onChange={handleRadioChange1} disabled={submitted} />4月
        <input type="radio" name="month" value="false3" checked={selectedValue1 === "false3"} onChange={handleRadioChange1} disabled={submitted} />5月
        {submitted && selectedValue1 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue1 === "true" && <p className="true">〇正解</p>}
        <p id="question2">2.art</p>
        <input type="radio" name="subject" value="false1" checked={selectedValue2 === "false1"} onChange={handleRadioChange2} disabled={submitted} required />肖像
        <input type="radio" name="subject" value="true" checked={selectedValue2 === "true"} onChange={handleRadioChange2} disabled={submitted} />美術
        <input type="radio" name="subject" value="false2" checked={selectedValue2 === "false2"} onChange={handleRadioChange2} disabled={submitted} />絵画
        <input type="radio" name="subject" value="false3" checked={selectedValue2 === "false3"} onChange={handleRadioChange2} disabled={submitted} />映画
        {submitted && selectedValue2 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue2 === "true" && <p className="true">〇正解</p>}
        <p id="question3">3.bag</p>
        <input type="radio" name="belonging" value="true" checked={selectedValue3 === "true"} onChange={handleRadioChange3} disabled={submitted} required />鞄
        <input type="radio" name="belonging" value="false1" checked={selectedValue3 === "false1"} onChange={handleRadioChange3} disabled={submitted} />虫
        <input type="radio" name="belonging" value="false2" checked={selectedValue3 === "false2"} onChange={handleRadioChange3} disabled={submitted} />後ろ
        <input type="radio" name="belonging" value="false3" checked={selectedValue3 === "false3"} onChange={handleRadioChange3} disabled={submitted} />紐
        {submitted && selectedValue3 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue3 === "true" && <p className="true">〇正解</p>}
        <p id="question4">4.breakfast</p>
        <input type="radio" name="meal" value="false1" checked={selectedValue4 === "false1"} onChange={handleRadioChange4} disabled={submitted} required />早朝
        <input type="radio" name="meal" value="true" checked={selectedValue4 === "true"} onChange={handleRadioChange4} disabled={submitted} />朝食
        <input type="radio" name="meal" value="false2" checked={selectedValue4 === "false2"} onChange={handleRadioChange4} disabled={submitted} />朝会
        <input type="radio" name="meal" value="false3" checked={selectedValue4 === "false3"} onChange={handleRadioChange4} disabled={submitted} />起床
        {submitted && selectedValue4 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue4 === "true" && <p className="true">〇正解</p>}
        <p id="question5">5.brother</p>
        <input type="radio" name="family" value="false1" checked={selectedValue5 === "false1"} onChange={handleRadioChange5} disabled={submitted} required />友達
        <input type="radio" name="family" value="false2" checked={selectedValue5 === "false2"} onChange={handleRadioChange5} disabled={submitted} />親子
        <input type="radio" name="family" value="false3" checked={selectedValue5 === "false3"} onChange={handleRadioChange5} disabled={submitted} />家族
        <input type="radio" name="family" value="true" checked={selectedValue5 === "true"} onChange={handleRadioChange5} disabled={submitted}/>兄弟
        {submitted && selectedValue5 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue5 === "true" && <p className="true">〇正解</p>}
        <p id="question6">6.I <input type="text" id="shut" value={textValue1} onChange={handleTextChange1} disabled={submitted} required /> the window.</p>
        <p>訳：私は窓を閉めました。</p>
        {submitted && textValue1.trim() !== "closed" && <p className="false">✕不正解</p>}{submitted && textValue1.trim() === "closed" && <p className="true">〇正解</p>}
        <p id="question7">7.My <input type="text" id="favorite" value={textValue2} onChange={handleTextChange2} disabled={submitted} required /> book is Harry Potter.</p>
        <p>訳：私のお気に入りの本はハリーポッターです。</p>
        {submitted && textValue2.trim() !== "favorite" && <p className="false">✕不正解</p>}{submitted && textValue2.trim() === "favorite" && <p className="true">〇正解</p>}
        <p id="question8">8.Do you <input type="text" id="learn" value={textValue3} onChange={handleTextChange3} disabled={submitted} required /> about French?</p>
        <p>訳：あなたはフランス語について学んでいますか。</p>
        {submitted && textValue3.trim() !== "learn" && <p className="false">✕不正解</p>}{submitted && textValue3.trim() === "learn" && <p className="true">〇正解</p>}
        <p id="question9">9.My father <input type="text" id="know" value={textValue4} onChange={handleTextChange4} disabled={submitted} required /> about the mountain.</p>
        <p>訳：私の父親はその山について知っています。</p>
        {submitted && textValue4.trim() !== "knows" && <p className="false">✕不正解</p>}{submitted && textValue4.trim() === "knows" && <p className="true">〇正解</p>}
        <p id="question10">10.I'm <input type="text" id="wash" value={textValue5} onChange={handleTextChange5} disabled={submitted} required /> my hands now.</p>
        <p>訳：私は今、手を洗っています。</p>
        {submitted && textValue5.trim() !== "washing" && <p className="false">✕不正解</p>}{submitted && textValue5.trim() === "washing" && <p className="true">〇正解</p>}
        <h2 id="part2">英熟語編</h2>
        <p id="question11">1.call back</p>
        <input type="radio" name="call" value="false1" checked={selectedValue6 === "false1"} onChange={handleRadioChange6} disabled={submitted} required />呼ぶ
        <input type="radio" name="call" value="true" checked={selectedValue6 === "true"} onChange={handleRadioChange6} disabled={submitted} />電話をかけ直す
        <input type="radio" name="call" value="false2" checked={selectedValue6 === "false2"} onChange={handleRadioChange6} disabled={submitted} />叫ぶ
        <input type="radio" name="call" value="false3" checked={selectedValue6 === "false3"} onChange={handleRadioChange6} disabled={submitted} />電話をする
        {submitted && selectedValue6 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue6 === "true" && <p className="true">〇正解</p>}
        <p id="question12">2.hold on</p>
        <input type="radio" name="wait" value="false1" checked={selectedValue7 === "false1"} onChange={handleRadioChange7} disabled={submitted} required />かかえる
        <input type="radio" name="wait" value="false2" checked={selectedValue7 === "false2"} onChange={handleRadioChange7} disabled={submitted} />手を挙げる
        <input type="radio" name="wait" value="true" checked={selectedValue7 === "true"} onChange={handleRadioChange7} disabled={submitted} />待つ
        <input type="radio" name="wait" value="false3" checked={selectedValue7 === "false3"} onChange={handleRadioChange7} disabled={submitted} />落ち着く
        {submitted && selectedValue7 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue7 === "true" && <p className="true">〇正解</p>}
        <p id="question13">3.look for</p>
        <input type="radio" name="find" value="true" checked={selectedValue8 === "true"} onChange={handleRadioChange8} disabled={submitted} required />探す
        <input type="radio" name="find" value="false1" checked={selectedValue8 === "false1"} onChange={handleRadioChange8} disabled={submitted} />見つける
        <input type="radio" name="find" value="false2" checked={selectedValue8 === "false2"} onChange={handleRadioChange8} disabled={submitted} />見つめる
        <input type="radio" name="find" value="false3" checked={selectedValue8 === "false3"} onChange={handleRadioChange8} disabled={submitted} />睨む
        {submitted && selectedValue8 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue8 === "true" && <p className="true">〇正解</p>}
        <p id="question14">4.get to</p>
        <input type="radio" name="arrive" value="false1" checked={selectedValue9 === "false1"} onChange={handleRadioChange9} disabled={submitted} required />出発する
        <input type="radio" name="arrive" value="false2" checked={selectedValue9 === "false2"} onChange={handleRadioChange9} disabled={submitted} />得る
        <input type="radio" name="arrive" value="true" checked={selectedValue9 === "true"} onChange={handleRadioChange9} disabled={submitted} />到着する
        <input type="radio" name="arrive" value="false3" checked={selectedValue9 === "false3"} onChange={handleRadioChange9} disabled={submitted} />受け取る
        {submitted && selectedValue9 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue9 === "true" && <p className="true">〇正解</p>}
        <p id="question15">5.do homework</p>
        <input type="radio" name="homework" value="false1" checked={selectedValue10 === "false1"} onChange={handleRadioChange10} disabled={submitted} required />手伝いをする
        <input type="radio" name="homework" value="false2" checked={selectedValue10 === "false2"} onChange={handleRadioChange10} disabled={submitted} />掃除をする
        <input type="radio" name="homework" value="true" checked={selectedValue10 === "true"} onChange={handleRadioChange10} disabled={submitted} />宿題をする
        <input type="radio" name="homework" value="false3" checked={selectedValue10 === "false3"} onChange={handleRadioChange10} disabled={submitted} />洗濯する
        {submitted && selectedValue10 !== "true" && <p className="false">✕不正解</p>}{submitted && selectedValue10 === "true" && <p className="true">〇正解</p>}
        <p id="question16">6.I <input type="text" id="come" value={textValue6} onChange={handleTextChange6} disabled={submitted} required /> Tokyo.</p>
        <p>訳：私は東京出身です。</p>
        {submitted && textValue6.trim() !== "come from" && <p className="false">✕不正解</p>}{submitted && textValue6.trim() === "come from" && <p className="true">〇正解</p>}
        <p id="question17">7.I <input type="text" id="wake" value={textValue7} onChange={handleTextChange7} disabled={submitted} required /> at 7a.m.</p>
        <p>訳：私は7時に起きました。</p>
        {submitted && textValue7.trim() !== "got up" && <p className="false">✕不正解</p>}{submitted && textValue7.trim() === "got up" && <p className="true">〇正解</p>}
        <p id="question18">8.I <input type="text" id="live" value={textValue8} onChange={handleTextChange8} disabled={submitted} required /> Japan.</p>
        <p>訳：私は日本に住んでいます。</p>
        {submitted && textValue8.trim() !== "live in" && <p className="false">✕不正解</p>}{submitted && textValue8.trim() === "live in" && <p className="true">〇正解</p>}
        <p id="question19">9.I go shopping <input type="text" id="weekend" value={textValue9} onChange={handleTextChange9} disabled={submitted} required />.</p>
        <p>訳：私は毎週末に買い物に行きます。</p>
        {submitted && textValue9.trim() !== "on weekends" && <p className="false">✕不正解</p>}{submitted && textValue9.trim() === "on weekends" && <p className="true">〇正解</p>}
        <p id="question20">10.Did you see the clock <input type="text" id="there" value={textValue10} onChange={handleTextChange10} disabled={submitted} required />?</p>
        <p>訳：あなたは向こうにある時計を見ましたか。</p>
        {submitted && textValue10.trim() !== "over there" && <p className="false">✕不正解</p>}{submitted && textValue10.trim() === "over there" && <p className="true">〇正解</p>}
        <button type="submit" value="submit" id="submit" disabled={submitted}>解答を送信</button>
        <button type="button" value="delete" id="clear" onClick={() => handleDeleted("delete")}>結果・解答をクリア</button>
      </form>
      {submitted && displayResults()}
    </div>
  )
};

export default Grade5;