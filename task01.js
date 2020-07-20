const someXML = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(someXML, "text/xml");

const listNode = xmlDOM.querySelector("list");
const listInResult = listNode.tagName;
const result = {};
result[listInResult] = [];

for (let child of listNode.children) {
  let nameNode = child.querySelector("name");
  let firstName = nameNode.querySelector("first");
  let secondName = nameNode.querySelector("second");
  let name = firstName.textContent + " " + secondName.textContent;
  let nameAttr = nameNode.getAttribute("lang")
  let age = child.querySelector("age");
  let prof = child.querySelector("prof");
  result.list.push({
    name: name,
    age: Number(age.textContent),
    prof: prof.textContent,
    lang: nameAttr
  });
}

console.log(result)