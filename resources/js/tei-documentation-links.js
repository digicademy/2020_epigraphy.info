const codeList = document.getElementsByClassName('xml tei-doc-link');
console.log(codeList);
console.log(codeList[0].textContent);
//codeList[0].textContent = "Blub";
let count = 0;
Array.from(codeList)
  .forEach((n) => {
    const text = n.textContent.replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const regexEl = `&lt;(\/{0,1})([-A-Za-z:]*?)(\\s.*?.*?){0,1}(\/{0,1})&gt;`;
    const regularExpressionEl = new RegExp(regexEl, 'g');
    const newSnippetEl = text.replace(regularExpressionEl, "<span class='delimiters'>&lt;$1</span><span class='element'><a class='tei-doc-link' href='http://www.tei-c.org/release/doc/tei-p5-doc/en/html/ref-$2.html'>$2</a>$3</span><span class='delimiters'>$4&gt;</span>");

    const regexAttr = `([A-Za-z:]*?)="(.*?)"`;
    const regularExpressionAttr = new RegExp(regexAttr, 'g');
    const newSnippetAttr = newSnippetEl.replace(regularExpressionAttr, '<span class="attribute">$1</span><span class="delimiters">=</span><span class="value">"$2"</span>')

    const regexCommStr = `(&lt;\!)(.*?)(&gt;)`;
    const regularExpressionCommStr = new RegExp(regexCommStr, 'g');
    const newSnippetCommStr = newSnippetAttr.replace(regularExpressionCommStr, '<span class="comment-string">$1$2$3</span>')

    n.innerHTML = newSnippetCommStr;
  });