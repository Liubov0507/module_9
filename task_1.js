//Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

/*Этап 1 - Подготовка данных.*/
//Создание экземпляра класса DOMParser. Он позволит нам парсить XML
//Парсить — собирать и систематизировать информацию
const parser = new DOMParser();

//XML объект, который мы будем парсить
const xmlString = `
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
//console.log(xmlString);

/*Этап 2 - Получение данных.*/
//Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

//Получение всех DOM-нод
const listNode = xmlDOM.querySelector("list");
const studentNodes = listNode.querySelectorAll("student");
const list = [];
studentNodes.forEach(function(studentNode) {
  
  const nameNode = studentNode.querySelector("name");
  const langAttr = nameNode.getAttribute('lang');
  const firstNode = nameNode.querySelector("first");
  const secondNode = nameNode.querySelector("second");
  const ageNode = studentNode.querySelector("age");
  const profNode = studentNode.querySelector("prof");
  const pushed = list.push({
      name: firstNode.textContent + " " + secondNode.textContent,
      age: Number(ageNode.textContent),
      prof: profNode.textContent,
      lang: langAttr,
   });
 });

const result = {list};
console.log(result);