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

	console.log('get data', items);
	AppComponent.fire( 'thingHappened', {
  	thing: 'this event was fired'
	});

}, 1000);


class HackerNewsApi{
	constructor(){

	}
	//
	getStory(id){
		return new Promise((resolve, reject) =>{
			fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((resp) =>{
			resp.json().then((text)=>{
				resolve(text);
			});
		 });
		});
	}
	getStories(){
		return new Promise((resolve, reject) =>{
			fetch('https://hacker-news.firebaseio.com/v0/topstories.json').then((resp) =>{
			resp.json().then((text)=>{
				resolve(text);
			});
		 });
		});
	}
}

var max = 250;
var api = new HackerNewsApi();
var stories = [];
api.getStories().then((resp) =>{
	console.log('Stories', resp);
	for (var i = 0; i < max; i++) {
		api.getStory(resp[i]).then((item) =>{
			stories.push(item);
			AppComponent.set({items: stories});
			console.log('Story', item);
		});
	}
	console.log('Setting Items');
	//AppComponent.set({items: items});

});

export default AppComponent;
