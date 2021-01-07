const moreBtn = document.querySelector('.info .metadata .moreBtn'); //info 밑에 metadata 밑에 moreBtn을 moreBtn에 할당함
const title = document.querySelector('.info .metadata .title'); 

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked'); //moreBtn이 클릭이 되면 moreBtn의 class를 클릭이 되었는지 안됬는지 토클한다.
    title.classList.toggle('clamp'); //title의 class를 clamp하려는지 안하는지 토클할거다.
});


