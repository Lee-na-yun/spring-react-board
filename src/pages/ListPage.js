import React from "react";
import { useState } from "react";
import styled from "styled-components";

const StyledItemBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  height: 100px;
  margin: 20px;
  align-items: center;
`;

const ListPage = () => {
  const [no, setNo] = useState(6);

  const [post, setPost] = useState({
    id: no,
    title: "",
    content: "",
  });

  // 최초 데이터
  const [posts, setPosts] = useState([
    { id: 1, title: "제목1", content: "내용1" },
    { id: 2, title: "제목2", content: "내용2" },
    { id: 3, title: "제목3", content: "내용3" },
    { id: 4, title: "제목4", content: "내용4" },
    { id: 5, title: "제목5", content: "내용5" },
  ]);

  const handleWrite = () => {
    console.log(1, post.title);
    console.log(1, post.content);
    setPosts([...posts, { ...post, id: no }]);
    setNo(no + 1);
  };

  // 이벤트  context를 가져옴
  /* const handleChangeTitle = (e) => {
    console.log(e.target.value);
    setPost({ title: e.target.value });
  };
  const handleChangeContent = (e) => {
    console.log(e);
    setPost({ content: e.target.value });
  }; */

  const handleForm = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setPost({ ...post, [e.target.name]: e.target.value });
    console.log(post.title);
    console.log(post.content);
  };

  const onDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <h1>글목록 페이지</h1>
      <form>
        <input
          type="text"
          placeholder="제목을 입력하세요.."
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용을 입력하세요.."
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
      <hr />
      {posts.map((post, onDelete) => (
        <StyledItemBoxDiv>
          <div>
            번호 : {post.id} / 제목 : {post.title} / 내용 : {post.content}
          </div>
          <button onClick={() => onDelete(post.id)}>삭제</button>
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
