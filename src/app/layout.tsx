import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Image from 'next/image';
import logo from './images/englishlogo.png';
import Link from "next/link";
export const metadata: Metadata = {
  title: "英語のレベル別問題集",
  description: "english vocabulary test",
  icons:{icon:"/englishlogo.png"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>):React.JSX.Element {
  return (
    <html lang="en">
      <body className="wrapper">
        <header className="App-header">
          <div className="flexdisplay1">
            <h1 id="logo"><Link href='/' className="urladjustimage"><Image src={logo} alt=""/></Link></h1>
            <h1 id="title">英語のレベル別問題集</h1>
          </div>
          <ul className="flexdisplay2">
            <li className="level" id="home"><Link href='/'>ホーム</Link></li>
            <li className="level" id="gradefive"><Link href='/grade5'>英検5級</Link></li>
            <li className="level" id="gradefour"><Link href='/grade4'>英検4級</Link></li>
            <li className="level" id="gradethree"><Link href='/grade3'>英検3級</Link></li>
            <li className="level" id="gradepretwo"><Link href='/gradepre2'>英検準2級</Link></li>
            <li className="level" id="gradetwo"><Link href='/grade2'>英検2級</Link></li>
            <li className="level" id="gradepreone"><Link href='/gradepre1'>英検準1級</Link></li>
            <li className="level" id="gradeone"><Link href='/grade1'>英検1級</Link></li>
          </ul>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}