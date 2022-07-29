import React, { useState } from "react";
import { Editor } from "../../Style/UploadCSS";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
function Upload() {
  const ListRegion = ["서울", "인천", "대구", "부산"];
  const ListField = ["apple", "banana", "grape", "orange"];
  const ListRecuritment = ["1명","2명","3명","4명","5명","6명","7명","8명","제한없음"]
  const [SelectedRegion, setSelected] = useState("");
  const [SelectedField, setSelectedField] = useState("");
  const [SelectedRecruitment,setSelectedRecruitment] =useState("");

  const handleSelectRegion = (e) => {
    setSelected(e.target.value);
  };
  const handleSelectField = (e) => {
    setSelectedField(e.target.value);
  };
  const handleSelectRecruitment= (e) => {
    setSelectedRecruitment(e.target.value);
  };




  const [movieContent, setMovieContent] = useState({
    title: "",
    content: "",
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    setMovieContent({
      ...movieContent,
      [name]: value,
    });
    console.log(movieContent);
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
        <select onChange={handleSelectRecruitment} value={SelectedRecruitment}>
          {ListRecuritment.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
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
            setMovieContent({
              ...movieContent,
              content: data,
            });
            console.log(movieContent);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
        <div className="submit-button" >
        <button>입력</button>
      </div>
      </div>
      
    </Editor>
  );
}

export default Upload;
