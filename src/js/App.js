import App from '../components/App.html';
var items = [
];



const AppComponent = new App({
  target: document.querySelector('.app'),
  data: {
    items: items
  }
});


var index = 0;
var poll = setInterval(() =>{
	index++;
	items.push({
		name: 'Item -' + index
	});
	console.log('get data', items);
	AppComponent.set({items: items});
	AppComponent.fire( 'thingHappened', {
  	thing: 'this event was fired'
	});

}, 1000);

export default AppComponent;
