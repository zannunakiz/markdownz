import React from "react";
import { GoCodescan, GoPencil } from 'react-icons/go';
import ReactMarkdown from "react-markdown";
import "./index.css";
export default function App(){
  const defaultMarkdown = `
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
      if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
      }
    }
  \`\`\`

  You can also make text **bold**... whoa!
  Or _italic_.
  Or... **_both!_**

  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!

  ![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

  - And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
          - That look like this.
  `;

  const [markDownText, setMarkdownText] = React.useState(defaultMarkdown);


  
  const [zoomedE, newZoomedE] = React.useState(false)
  let stylesEditor = {height: zoomedE ? "550px" : "200px" }
  function zoomEditor(){
    newZoomedE(!zoomedE)
  }
  const [zoomedP, newZoomedP] = React.useState(false)
  let stylesPreview = {height: zoomedP ? "1000px" : "450px" }
  function zoomPreview(){
    newZoomedP(!zoomedP)
  }
  function editText(event){
    setMarkdownText(event.target.value)
  }
  

return(
  <div>

    <div className="editor-box">
      <header>
        <h3>Editor</h3>
        <button className="btn" onClick={zoomEditor}>
          {zoomedE ? <GoCodescan /> : <GoPencil />}
        </button>
      </header>
      <textarea onChange={editText} id="editor" style={stylesEditor}>{defaultMarkdown}</textarea>
    </div>


    <div className="preview-box">
      <header>
        <h3>Preview</h3>
        <button className="btn" onClick={zoomPreview}>
          {zoomedP ? <GoCodescan /> : <GoPencil />}
        </button>
      </header>

      <div id="preview" style={stylesPreview}>
        <ReactMarkdown>{markDownText}</ReactMarkdown>
      </div>
    </div>



  </div>

)

}