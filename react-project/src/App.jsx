import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Chap01 from "./pages/Chap01";
import Chap02 from "./pages/Chap02";
import Chap03 from "./pages/Chap03";

import Header from "./pages/common/Header/Header";
import Footer from "./pages/common/Footer/Footer";

import Example from "./pages/Feel";
import { Route, Routes } from "react-router-dom";
import Chap04 from "./pages/Chap04";
import Chap05 from "./pages/Chap05";
import NoticeList from "./pages/Notice/NoticeList/NoticeList";
import ReplyList from "./pages/Notice/NoticeList/ReplyList";
import MemberList from "./pages/Notice/NoticeList/MemberList";
import MemberDetail from "./pages/Notice/NoticeDetail/MemberDetail";
import NoticeDetail from "./pages/Notice/NoticeDetail/NoticeDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>요기는 메인이에용</h1>} />
        <Route path="/notices" element={<NoticeList />} />
        <Route path="/notices/:id" element={<NoticeDetail />} />
        <Route path="/replies" element={<ReplyList />} />
        <Route path="/members" element={<MemberList />} />
        <Route path="/members/:id" element={<MemberDetail />} />
        <Route path="/chap01" element={<Chap01 />} />
        <Route path="/chap02" element={<Chap02 />} />
        <Route path="/chap03" element={<Chap03 />} />
        <Route path="/chap04" element={<Chap04 />} />
        <Route path="/chap05" element={<Chap05 />} />
        <Route path="*" element={<h1>존재하지 않는 페이지입니다.</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
