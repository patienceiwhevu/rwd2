const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

 let i = 0;
for( ;i < people.length; i++){
if(people[i] === 'Phil' || people[i] === 'Lola'){
 refused.textContent += people[i] + ',' ;
}
else {
 admitted.textContent= admitted.textContent.slice(0,indexOf(',')) + '.'
 refused.textContent = refused.textContent.slice(0,indexOf(',')) + '.'
 }
 }

