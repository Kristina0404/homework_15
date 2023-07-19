/*Реализовать страницу, на которой будет 1 кнопка.
 Нажатие на кнопку должно вызывать появление каритинки,
  которую вы должны получить, используя fetch и API сервера
 https://dog.ceo/api/breeds/image/random */

 const btnElement= document.getElementById("done");
 const dogImageElement = document.getElementById("dog-image");
 btnElement.addEventListener(('click'),getImage);

 function getImage() {
    let response =fetch("https://dog.ceo/api/breeds/image/random");
    response.then((response)=>{
        dataPromise = response.json();
        dataPromise.then((res)=>{
            //console.log(res);
            const{message} = res;
           // console.log(message);
            dogImageElement.src= message;
        
        })
    });
 }
 