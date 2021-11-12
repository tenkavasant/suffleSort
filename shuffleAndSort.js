var mainObj = (function main() {
const list = [{ value:1, className: 'bgcolor1' }, { value:2, className: 'bgcolor2' }, { value:3, className: 'bgcolor3' }, { value:4, className: 'bgcolor2' }, { value:5, className: 'bgcolor3' }, { value:6, className: 'bgcolor4' }, { value: 7, className: 'bgcolor4' },{ value:8, className: 'bgcolor1' }, { value:9, className: 'bgcolor3' }];
function doSort() {
    list.sort(function (x, y) {
        return x.value - y.value;
    });
    cardRender(list);
}
function doShuffle() {
    let arrLenght = list.length,temp,i;
    while (--arrLenght) {
        i = Math.floor(Math.random() * arrLenght);
        temp = list[arrLenght];
        list[arrLenght] = list[i];
        list[i] = temp;
    }
    cardRender(list);
}

function cardRender(list) {
    document.getElementById('shuffleCard').innerHTML = '';
	for(var i = 0; i < list.length; i++)
	{
		var card = document.createElement("div");
		var value = document.createElement("div");
		card.className = "grid-item "+ list[i].className;
		value.innerHTML = list[i].value;
		card.appendChild(value);
		document.getElementById("shuffleCard").appendChild(card);
	}
}
return {
    doShuffle, doSort
}
})();

window.onload=function(){
    mainObj.doSort();
}
