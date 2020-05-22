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


let i = 0;
setInterval(()=> {
	
	if (i>1) {
		i=0;
		}
	
	let sliderBlock = document.querySelector('.slider');
	let sliderData = ['<div class="sliderContent"><div class="prevBtn"> </div><div class="sliderContentTextInfo text-focus-in"><h1> Висококласні сертифіковані піддони EPAL, UIC та CP</h1><span> Виробництво, продаж, закупівля та ремонт, доставка</span><a class="button" href=""><span>Детальніше</span></a></div><div class="nextBtn"> </div></div>'
	, '<div class="sliderContent"><div class="prevBtn"> </div><div class="sliderContentTextInfo text-focus-in"><h1> Тест 2</h1><span> Виробництво, продаж, закупівля та ремонт, доставка</span><a class="button" href=""><span>Детальніше</span></a></div><div class="nextBtn"> </div></div>'];
	
	sliderBlock.innerHTML = sliderData[i];
	i++;
	
	
	
}, 3000);