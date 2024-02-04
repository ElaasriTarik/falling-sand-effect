const area = document.createElement('div');
area.classList.add('area');

const ar = 400;
area.style.width = `${ar}px`
area.style.height = `auto`
area.style.maxHeight = '500px'
for (let i = 0; i < ar / 8; i++) {
	const element = document.createElement('div');
	element.style.maxHeight = '500px'
	element.classList.add(`hor`, `hor${i}`);
	for (let j = 0; j < ar / 6; j++) {
		const sand = document.createElement('div');
		// defining the size of each sand
		sand.classList.add(`sand`, `sand${i}`);
		sand.style.width = '100%'
		sand.style.height = '14px'
		element.append(sand)
	}
	
	area.append(element)
}
const bd = document.querySelector('.box')
bd.append(area)
let all_colored = []
function mouseAction() {
	let w = area.addEventListener('mouseover', (e) => {
		if (e.target.classList[0] == 'sand') {
			e.target.classList.add('cc')
			e.target.style.backgroundColor = 'black';

			startFalling()
		}
	});
	//bd.addEventListener('mouseover', () => {});
}
mouseAction()

function startFalling(trg) {
	setInterval(() => {
		let cced = document.querySelectorAll('.cc')
		cced.forEach((element) => {
			let list_of_sands = element.parentElement.childNodes
			let next_idx = [...list_of_sands].indexOf(element)
			if (next_idx == list_of_sands.lenght - 1 || next_idx + 1 == list_of_sands.length) {
				return
			}
			if (![...list_of_sands[next_idx + 1].classList].includes('cc')) {
				console.log('moving')
				element.classList.remove('cc')
				element.style.backgroundColor = 'aliceblue'
				list_of_sands[next_idx + 1].classList.add('cc')
				list_of_sands[next_idx + 1].style.backgroundColor = 'black';
			} else {
				return 
			}
		});
	}, 500)
}