let i= 0;

let sliderBlock = document.querySelector('.slider');

let sliderData = ['<div class="sliderContent"><div class="prevBtn"> </div><div class="sliderContentTextInfo text-focus-in"><h1> Висококласні сертифіковані піддони EPAL, UIC та CP</h1><span> Виробництво, продаж, закупівля та ремонт, доставка</span><a class="button" href=""><span>Детальніше</span></a></div><div class="nextBtn"> </div></div>'
	
	, '<div class="sliderContent"><div class="prevBtn"> </div><div class="sliderContentTextInfo text-focus-in"><h1> Закупівля, ремонт та продаж вживаних піддонів</h1><span> Будь-які об’єми та всі види палет. Купуємо по всій Україні із вивезенням нашим транспортом</span><a class="button" href=""><span>Детальніше</span></a></div><div class="nextBtn"> </div></div>'
	
, '<div class="sliderContent"><div class="prevBtn"> </div><div class="sliderContentTextInfo text-focus-in"><h1> Тест 3</h1><span> Виробництво, продаж, закупівля та ремонт, доставка</span><a class="button" href=""><span>Детальніше</span></a></div><div class="nextBtn"> </div></div>'];


let ShowSlides = (i) => {
	
	sliderBlock.innerHTML = sliderData[i];
	
	let prevBtn = document.querySelector('.prevBtn');
	prevBtn.addEventListener('click', () => {
		alert(i);		
	});
	
};







let SliderShowLoop = (time) => {
	
	let CheckShowAddSlider = () => {
		
		i++;
		
		if (i > sliderData.length-1) {
			i= 0;
		};
		
		ShowSlides(i);
		
	};
	
	let timerId = setInterval(CheckShowAddSlider, (time*1000));
	
	
	sliderBlock.addEventListener('mouseenter', () =>  {
		clearInterval(timerId);
	});
	
	
	sliderBlock.addEventListener('mouseleave', () =>  {
		timerId = setInterval(CheckShowAddSlider, (time*1000));
	});
	
	
};


SliderShowLoop(1);