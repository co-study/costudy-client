import React, { useState } from "react";
import { Editor } from "../../Style/UploadCSS";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "html-react-parser";
import axios from "axios";
function Upload() {
  const ListRegion = ["서울", "인천", "대구", "부산"];
  const ListField = ["apple", "banana", "grape", "orange"];
  const ListRecuritment = [
    "1명",
    "2명",
    "3명",
    "4명",
    "5명",
    "6명",
    "7명",
    "8명",
    "제한없음",
  ];
  const [SelectedRegion, setSelected] = useState("");
  const [SelectedField, setSelectedField] = useState("");
  const [SelectedRecruitment, setSelectedRecruitment] = useState("");

  const handleSelectRegion = (e) => {
    setSelected(e.target.value);
  };
  const handleSelectField = (e) => {
    setSelectedField(e.target.value);
  };
  const handleSelectRecruitment = (e) => {
    setSelectedRecruitment(e.target.value);
  };

  const [Content, setContent] = useState({
    title: "",
    content: "",
  });

  const [viewContent, setViewContent] = useState([]);
  const getValue = (e) => {
    const { name, value } = e.target;
    setContent({
      ...Content,
      [name]: value,
    });
    console.log(Content);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setContent(viewContent.concat({ ...Content }));
    if (Content.title === "" || Content.content === "") {
      return alert("모든 항목을 채워주세요");
    }

    let body = {
      title: Content.title,
      content: Content.content,
    };
    axios
      .post("/api/post/submit", body)
      .then((response) => {
        if (response.data.success) {
          alert("글작성이 완료");
        } else {
          alert("글작성이 실패");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Editor>
      <div className="selected">
        <h2>지역</h2>
        <div className="slectedOption">
          <select onChange={handleSelectRegion} value={SelectedRegion}>
            {ListRegion.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <h2>분야</h2>
        <div className="slectedOption">
          <select onChange={handleSelectField} value={SelectedField}>
            {ListField.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <h2>모집 인원</h2>
        <div className="slectedOption">
          <select
            onChange={handleSelectRecruitment}
            value={SelectedRecruitment}
          >
            {ListRecuritment.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        {viewContent.map((element) => (
          <div>
            <h2>{element.title}</h2>
            <div>{ReactHtmlParser(element.content)}</div>
          </div>
        ))}
      </div>
      <div className="form-wrapper">
        <input
          className="title-input"
          type="text"
          placeholder="제목을 입력하세요"
          onChange={getValue}
          name="title"
        />
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setContent({
              ...Content,
              content: data,
            });
            console.log(Content);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
        <div className="submit-botton">
          <button
            onClick={(e) => {
              onSubmit(e);
            }}
          >
            입력
          </button>
        </div>
      </div>
    </Editor>
  );
}

export default Upload;
