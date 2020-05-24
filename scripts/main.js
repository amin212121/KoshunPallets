let elMenu = document.querySelectorAll('.navMenuList');
let elList = document.querySelector('.outList');

for (let elem of elMenu) { 
    elem.addEventListener('mouseenter', () =>  {
		elList.style.display = 'block';
	});
	elem.addEventListener('mouseleave', () =>  {
		elList.style.display = 'none';
	});
}

elList.addEventListener('mouseenter', () =>  {
	elList.style.display = 'block';
});






