import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    let post = 'MY BLOG';
    let [title, titleChange] = useState(['옷 추천', '맛집 추천', '핫플레이스 추천']);
    let [modal, setModal] = useState(false);
    let [like, likePlus] = useState( [0,0,0])

  return (
    <div className="App">
        <div className="black-nav">
            <h4>{post}</h4>
        </div>

        <div className="sort-box"><button className="btn1" onClick={()=> {
            let copy = [...title]
            copy = copy.sort()
            titleChange(copy)
        }}>오름차순정렬</button></div>


        {
            title.map(function(a, i){
                return (
                    <div className="list" key={i}>
                        <h4 onClick={()=>{setModal(!modal)}}>{ title[i] }</h4>
                        <div className="like_icon" onClick={()=>{
                            let likeCopy = [...like];
                            likeCopy[i] = likeCopy[i] + 1;
                            likePlus(likeCopy)
                        }}>👍 {like[i]}</div>
                        <p>2월 17일 발행</p>
                    </div>
                )
            })
        }



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
