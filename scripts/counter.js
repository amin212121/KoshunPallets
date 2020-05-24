let stop = 0;
let initialNumber = 1;
let limit = 14785;
let numberHTML = document.querySelectorAll('.number');


let ValueStep = () => {
	return step = 40; 
};

let CounterShow = () => {

if (stop == 0 && window.pageYOffset > (numberHTML[0].offsetTop*0.20)) {
	
	
	stop = stop + 1;
	
	
let int = setInterval(()=> {
	
	if (initialNumber < limit) {
		
		for (let elem of numberHTML) {
			
			MaxValue = Number(elem.getAttribute('data-value'));
			CurrentValue = Number(elem.textContent);
			
			if (MaxValue > CurrentValue) {
							
			initialNumber = Math.ceil(CurrentValue+(MaxValue*0.01));
				
				
				elem.textContent = initialNumber;
				
			}
		}
		
		
		} else {
		clearInterval(int);
	}	
	
	
	
}, ValueStep());

}
};


window.addEventListener('scroll', CounterShow);
window.addEventListener('load', CounterShow);