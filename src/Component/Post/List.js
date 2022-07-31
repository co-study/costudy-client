import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function List() {
  const [PostList, setPostList] = useState(["으앙", 2, 3, 4, 5, 6]);
  useEffect(() => {
    axios
      .post()
      .then((response) => {
        if (response.data.success) {
          setPostList([...response.data.PostList]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="items">
      {PostList.map((post, idx) => {
        return (
          <Link to={`/detail/${idx}`}>
            <div className="box" key={idx}>
              <p className="title">{post}</p>
              <button>코딩테스트</button>
              <button>서울</button>
              <button>모집중</button>
              <hr />
              <div className="info">
                <div className="avatar_user">
                  <img src="/user.png"></img>
                  <span>noah</span>
                </div>
                <div className="avatar_Bookmark">
                  <img src="/ribon.png"></img>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default List;
