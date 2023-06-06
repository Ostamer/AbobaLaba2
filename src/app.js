import Handlebars from 'handlebars';
import template1 from "./comp/cards.hbs";
import template3 from "./comp/header.hbs";
import template2 from "./comp/footer.hbs";
import template4 from "./comp/modal.hbs";
import template5 from "./comp/modal_new.hbs";


let xhttp_select = new XMLHttpRequest();
xhttp_select.addEventListener('readystatechange', function(){
    // если с запросом, который пришел от сервера, все в порядке
    if (xhttp_select.readyState === 4 && xhttp_select.status === 200){
        console.log(xhttp_select.response);
        console.log("событие сработало");

        // распарсили ответ от сервера, т.е распарсим файл JSON
        let response = JSON.parse(xhttp_select.response);

        render(response);
    }
});




const render = (info) => {
  console.log("функция render() вызвана");
  console.log(info)
  const formattedData = {
    objects: info.map(item => ({
      id: item.id,
      img: item.img,
      name: item.name,
      description: item.description
    }))
  };
  info = formattedData;
  let html = template1(info);
  console.log(info)
  let app = document.getElementById('cards');
  app.innerHTML = html;
  html = template3();
  app = document.getElementById('nav');
  app.innerHTML = html;
  html = template2();
  app = document.getElementById('footer');
  app.innerHTML = html;

  html = template4();
  app = document.getElementById('modal_1');
  app.innerHTML = html;

  html = template5();
  app = document.getElementById('new_modal');
  app.innerHTML = html;
  console.log("мы тут");
};


// посылаем запрос на сервер
xhttp_select.open('GET', "http://rhp/src/logic.php", true);
xhttp_select.send();
