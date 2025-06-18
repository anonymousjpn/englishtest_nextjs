"use client";
import React from "react";
import Image from 'next/image';
import cefr from './images/cefr.png';
import cefrexpand from './images/cefrexpand.png';
import {useState} from 'react';
const Home=():React.JSX.Element=>{
    const [isExpand, setIsExpand] = useState<boolean>(false);
    const handleOpen = ():void => setIsExpand(true);
    const handleClose = ():void => setIsExpand(false);
    const stopPropagation = (event:React.MouseEvent<HTMLImageElement>):void => event.stopPropagation();
    const [searchValue, setSearchValue] = useState<string>("");
    const [searchResult, setSearchResult] = useState<React.ReactNode>("");
    const [searchStart, setSearchStart] = useState<boolean>(false);
    const handleSearchValue = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setSearchValue(event.target.value);
    };
    type Japanese={
        word:string;
    }
    type dataItem={
        japanese:Japanese[];
    }
    type ApiResponce={
        data:dataItem[];
    }
    const handleSearch = ():void => {
        setSearchStart(true);
        const url = `https://jisho.org/api/v1/search/words?keyword=${searchValue}`;
        fetch('/api', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url: url, method: 'GET' })  // URLをボディとして送る
        })
        .then(response => response.json())  // レスポンスをJSONに変換
        .then((data:ApiResponce) => {
            console.log(data);
            let japaneseWord:string | undefined;
            if (data && data.data && data.data[0] && data.data[0].japanese && data.data[0].japanese[0] && data.data[0].japanese[0].word) {
                japaneseWord = data.data[0].japanese[0].word;
            }
            // 結果を表示
            if (japaneseWord) {
                setSearchResult(<span><strong>英単語・英熟語の意味:</strong> {japaneseWord}</span>);
            } else {
                setSearchResult("日本語の意味が見つかりませんでした。");
            }
        })
        .catch(error => {
            setSearchResult("エラーが発生しました。再試行してください。");
        })
        .finally(()=>{
            setSearchStart(false);
        });
    };
    return (
        <div>
            <h2>はじめに</h2>
            <p>英語学習を始める際に、自分で達成すべき目標を設定することが一般的ですが、目標設定の前に自分の現在の英語技能がどの程度なのか理解してから目標を立てなければ、目標達成が難しくなるだけではなく、英語学習を続けるモチベーションの低下につながる可能性が高まります。そのような事態を防ぐためには、自分の現在の英語の実力を知ることが重要になりますが、ひとえに英語の実力を測るといっても、リーディングスキル、リスニングスキル、ライティングスキル、スピーキングスキルといった、複数の測定方法があるため、正確に実力を測ろうとするとかなり時間がかかってしまいます。そこで、先程挙げた4技能全てを向上させるための基本となる、英単語・英熟語の理解度チェックを通じて、簡易的に実力を測定できればと思い、このサイトを制作しました。</p>
            <h2>このサイトについて</h2>
            <p>このサイトでは、英語力を測る指標として日本ではよく利用される、英語検定を活用しています。まずは、下記（表1:各級の受験対象者の目安）を参考にしつつ、自分が挑戦したい級のページを開き、英単語問題10問、英熟語問題10問の計20問を解答して下さい。その後、正答率に応じてあなたが挑戦した級のおおまかな合否可能性が表示されます。基本的には、合格可能性が60%～80%を達成できた級が合格を目標にすべき級（＝自分の現在の実力に近い級）になります。もし合格可能性が0%～40%であれば、1つ下のレベルの級の問題も解いてみて下さい。また、合格可能性が90%～100%の場合は、1つ上のレベルの級の問題にも挑戦してみて下さい。英語検定の受験を検討している場合は、英語学習のモチベーションを最大限維持するためには、自分の実力に近い級を特定し、その級の合格に向けて学習することが重要です。</p>
            <p>英語検定以外の資格・検定試験の受験を検討している方は、下記（表2:各試験・検定試験とCEFRとの対照表）を参考にし、自分の実力に近い級の合格スコアと同じ列の受験予定の試験のスコア（範囲が設定されている場合は範囲内の最高スコア）を目標にして下さい（例：自分の現在の実力に近い級が英検2級であり、IELTSを受験予定の場合はIELTS5.0を目標スコアとして設定する。）。</p>
            <div className="flexdisplay3">
                <figure id="lefttable">
                    <div id="threecontent">
                        <figcaption className="figtext" id="topfig">表1:各級の受験対象者の目安</figcaption>
                        <table id="tablesize">
                            <tbody>
                                <tr>
                                    <th id="grade">級</th>
                                    <th id="grade-thin">受験対象者</th>
                                </tr>
                                <tr>
                                    <th id="five">5級</th>
                                    <th id="five-thin">中学校入学レベル</th>
                                </tr>
                                <tr>
                                    <th id="four">4級</th>
                                    <th id="four-thin">中学校在学レベル</th>
                                </tr>
                                <tr>
                                    <th id="three">3級</th>
                                    <th id="three-thin">中学校卒業レベル</th>
                                </tr>
                                <tr>
                                    <th id="pretwo">準2級</th>
                                    <th id="pretwo-thin">高校在学レベル</th>
                                </tr>
                                <tr>
                                    <th id="two">2級</th>
                                    <th id="two-thin">高校卒業レベル</th>
                                </tr>
                                <tr>
                                    <th id="preone">準1級</th>
                                    <th id="preone-thin">大学在学レベル</th>
                                </tr>
                                <tr>
                                    <th id="one">1級</th>
                                    <th id="one-thin">大学卒業レベル</th>
                                </tr>
                            </tbody>
                        </table>
                        <figcaption className="figtext" id="bottomfig">出典：著者作成</figcaption>
                    </div>
                </figure>
                <figure id="rightimage">
                    <figcaption className="figtext">表2:各試験・検定試験とCEFRとの対照表</figcaption>
                    <figcaption className="figtext" id="figtips">※画像をクリックすると拡大表示できます</figcaption>
                    <Image src={cefr} alt="" id="cefr" onClick={handleOpen} />
                    {isExpand && (<div className="modal" onClick={handleClose}>
                        <Image src={cefrexpand} alt="" id="cefrexpand" onClick={stopPropagation} />
                    </div>)}
                    <figcaption className="figtext">出典：<cite><a
                        href="https://www.mext.go.jp/b_menu/shingi/chousa/koutou/091/gijiroku/__icsFiles/afieldfile/2018/07/27/1407616_003.pdf">各試験・検定試験とCEFRとの対照表</a></cite>
                    </figcaption>
                </figure>
            </div>
            <h2>英単語・英熟語の検索</h2>
            <p>こちらの検索機能では、<a href="https://jisho.org/" target="_blank">jisho.org</a>のAPIを活用しています。問題の解答の際に、文章中に分からない英単語・英熟語がありましたら下記のフォームに単語・熟語を入力して検索してみて下さい。（なお、英単語や英熟語によってはAPIにその意味を掲載していない場合がありますので、予めご了承ください。）</p>
            <input type="text" id="search" placeholder='検索したい英単語・英熟語を入力' value={searchValue} onChange={handleSearchValue} />
            <button type="button" onClick={() => handleSearch()} id="searchbutton">検索</button>
            {searchStart&&<p id="searching">検索中．．．</p>}
            {!searchStart && searchResult && <p>{searchResult}</p>}
            <h2>備考</h2>
            <p>英単語・英熟語の英検の級による分類は、「英和辞典・和英辞典-weblio辞書」・「英ナビ！ | 英語で結果を出したい人のパートナー」にもとづいています。また、英検の合否可能性に関しては、あくまでも目安として利用して下さい。</p>
        </div>
    )
};

export default Home;
