import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    let post = 'MY BLOG';
    let [title, titleChange] = useState(['옷 추천', '맛집 추천', '핫플레이스 추천']);
    let [like, likePlus] = useState(0);
    let [modal, setModal] = useState(false);
    
  return (
    <div className="App">
        <div className="black-nav">
            <h4>{post}</h4>
        </div>

        <button className="btn1" onClick={()=> {
            let copy = [...title]
            copy = copy.sort()
            titleChange(copy)
        }}>오름차순정렬</button>


        <div className="list">
            <h4>{ title[0] } <span className="like_icon" onClick={()=> {likePlus(like+1)}}>❤</span> {like}</h4>
            <p>2월 17일 발행</p>
        </div>
        <div className="list">
            <h4>{ title[1] }</h4>
            <p>2월 17일 발행</p>
        </div>
        <div className="list">
            <h4 onClick={()=>{setModal(!modal)}}>{ title[2] }</h4>
            <p>2월 17일 발행</p>
        </div>

        {
            modal == true ? <Modal/> : null
        }

    </div>
  );
}

// Modal component
function Modal(){
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}



export default App;
