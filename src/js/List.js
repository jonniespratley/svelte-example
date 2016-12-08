import List from '../components/List.html';

const ListComponent = new List({
  target: document.querySelector('.list-example'),
  data: {
    items: [
      { name: 'Bella' },
      {
        name: 'Tiger'
      },
      {
        name: 'Chloe'
      },
      {
        name: 'Shadow'
      },
      {
        name: 'Luna'
      },
      {
        name: 'Oreo'
      }
    ]
  }
});

export default ListComponent;
