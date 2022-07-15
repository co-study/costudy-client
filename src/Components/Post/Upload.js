import React, { useState } from "react";
import { Editor } from "../../Style/UploadCSS";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
function Upload() {
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
      <h1>UpLoad</h1>

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
      </div>
      <button className="submit-button">입력</button>
    </Editor>
  );
}

export default Upload;
