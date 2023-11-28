let formBtns = document.getElementById('form-btns')
let optionList = document.querySelectorAll('.service')
let formSelect = document.getElementById('form-select')

document.getElementById('btn1').onclick = () =>{
    if (formSelect.value == '') {
        document.getElementById('message').textContent ='Выберите категорию'
    }else{
        document.getElementById('message').textContent =''

    }

}

optionList.forEach(item => {
    let btn = document.createElement('button');
    btn.textContent = item.textContent;
    btn.className = "form-btn";
    
    btn.setAttribute('data-value', item.value);
    btn.onclick = () => {
       formSelect.value = item.value;
      
       document.querySelectorAll('.form-btn').forEach(item =>{
        item.style.borderColor = '#9faffc'
       });
        btn.style.border = ' red';
        
       console.log(formSelect.value);
    }
    formBtns.appendChild(btn);
});

formSelect.value='';


fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
 
    console.log(data);
    data.forEach(post => {'страницу'
    });
  })
  .catch(error => {
    console.error('Error:', error);

  });


  const postData = {
    title: 'Заголовок поста',
    body: 'Текст поста',
    userId: 1
  };
  


  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Успешно отправлен POST запрос:', data);
  })
  .catch(error => {
    console.error('Ошибка при отправке POST запроса:', error);
  });
  

