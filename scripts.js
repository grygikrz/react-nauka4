var Counter = React.createClass({
    getInitialState: function() {
      console.log('getInitialState - etap tworzenia obiektu, ustaw jego wartości na stan początkowy)');
        return {
            counter: 0
        };
    },
    shouldComponentUpdate: function(nextProps, nextState){
        console.log('shouldComponentUpdate - jeśli obiekt będzie zaktualizowany przygotuj obiekt to renderingu (np zatrzymaj inne animacje))');
        return true;
    },
    componentWillMount: function() {//  before render
        console.log('componentWillMount - istniejący obiekt podmontowany do drzewa DOM, przygotuj na niego miejsce');
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {onClick:this.increment}, '+'),
            React.createElement('button', {onClick:this.decrement}, '-'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
        );
    },
    componentDidMount: function(){
      console.log('componentDidMount - obiekt został stworzony powiadom inne obiekty o jego życiu');
    },
    componentWillUpdate: function(nextProps, nextState){

      console.log('componentWillUpdate - przygotuj obiekt do zmiany stanu');
    },
    componentDidUpdate: function(prevProps, prevState){

      console.log('componentDidUpdate - obiekt został zaktualizowany zaktualizuj dane o innych obiektach');
    },
    componentWillUnmount: function(){

      console.log('componentWillUnmount - obiekt został skasowany, zwolnij miejsce na inny obiekt');
    },
});

var element = React.createElement('div', {},
              React.createElement(Counter),
              React.createElement(Counter),
              React.createElement(Counter)
              );
ReactDOM.render( element, document.getElementById('app'));
