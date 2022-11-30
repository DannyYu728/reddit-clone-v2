import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../Comments/Comments.css";

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }],
    [{ indent: "-1" }, { indent: "+1" }],

    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ],
};

function TextEditor({ setToggle }) {
  const editorRef = useRef();
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value); // replace with actual post request for comments model
    setValue("")
    // setToggle((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit} className="comments-flexbox">
      <div style={{ display: "flex" }}>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          style={{ height: "3in", margin: "1em", flex: "1" }}
          ref={editorRef}
        />
      </div>
      <button type="submit" id="comment-button">
          Comment
      </button>
    </form>
  );
}

export default TextEditor;
