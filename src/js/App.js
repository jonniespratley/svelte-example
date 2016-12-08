import App from '../components/App.html';

const AppComponent = new App({
  target: document.querySelector('.app'),
  data: {
    items: [
      {id: 'test'}
    ]
  }
});

export default AppComponent;
