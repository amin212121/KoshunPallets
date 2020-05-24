let i= 0;

let sliderTextBlock = document.querySelector('.sliderContentTextInfo');
let sliderBlock = document.querySelector('.sliderContent');

let sliderData = ['<h1 class="slide-in-fwd-center"> Висококласні сертифіковані піддони EPAL, UIC та CP</h1><span class="focus-in-expand"> Виробництво, продаж, закупівля та ремонт, доставка</span><a class="button slide-left" href=""><span>Детальніше</span>'
	
	, '<h1 class="slide-in-fwd-center"> Закупівля, ремонт та продаж вживаних піддонів</h1><span class="focus-in-expand"> Будь-які об’єми та всі види палет. Купуємо по всій Україні із вивезенням нашим транспортом</span><a class="button slide-left" href=""><span>Детальніше</span></a>'];
	
	
	let ShowSlides = (i) => {
		
		sliderTextBlock.innerHTML = sliderData[i];
		
	};
	
	let ButtonControl = () => {
		
		let prevBtn = document.querySelector('.prevBtn');
		
		prevBtn.addEventListener('click', () => {
			
			if (i < sliderData.length && i >= 1) {
				
				i = i-1;
				
				} else {
				i = sliderData.length - 1;
			}
			
			ShowSlides(i);		
		});
		
		
		let NextBtn = document.querySelector('.nextBtn');
		
		NextBtn.addEventListener('click', () => {
			
			if (i < sliderData.length-1) {
				
			i = i+1;
			
			} else {
			i = 0;
			}
			
			ShowSlides(i);		
		});
		
	}
	
	
	
	
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
	
	
	ButtonControl();
	SliderShowLoop(4);	