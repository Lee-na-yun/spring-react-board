import React from "react";
import { useState } from "react";
import styled from "styled-components";

const StyledItemBoxDiv = styled.div`
  border: 1px solid black;
  padding: 10px;
  height:100px;
  margin:20px;
`;

const ListPage = () => {
  // 최초 데이터
  const [posts, setPosts] = useState([
    { id: 1, title: "내용1" },
    { id: 2, title: "내용2" },
    { id: 3, title: "내용3" },
    { id: 4, title: "내용4" },
    { id: 5, title: "내용5" },
  ]);

  return (
    <div>
      <h1>글목록 페이지</h1>
      <hr />
      {posts.map((posts) => (
        <StyledItemBoxDiv>
          번호 : {posts.id} 제목 : {posts.title}
        </StyledItemBoxDiv>
      ))}
    </div>
  );
};

export default ListPage;
