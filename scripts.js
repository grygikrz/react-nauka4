var Counter = React.createClass({
    getInitialState: function() {
      console.log('getInitialState - etap tworzenia obiektu, ustaw jego wartości na stan początkowy)');
        return {
            counter: 0
        };
    },
    shouldComponentUpdate: function(nextProps, nextState){
        console.log('shouldComponentUpdate - jeśli obiekt będzie zaktualizowany przygotuj obiekt to renderingu (np zatrzymaj inne animacje))');
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
            React.createElement(Counter, {},  ),
            React.createElement(Counter2, {},  ),
        );
    },
    componentDidMount: function(){
    // - after render
      console.log('componentDidMount - obiekt został stworzony powiadom inne obiekty o jego życiu');
    },
    componentWillUpdate: function(nextProps, nextState){
    // perform any preparations for an upcoming update - after render
      console.log('componentWillUpdate - przygotuj obiekt do zmiany stanu');
    },
    componentDidUpdate: function(prevProps, prevState){
    // - after render
      console.log('componentDidUpdate - obiekt został zaktualizowany zaktualizuj dane o innych obiektach');
    },
    componentWillUnmount: function(){
      // Destroy
      console.log('componentWillUnmount - obiekt został skasowany, zwolnij miejsce na inny obiekt');
    },
});

var Counter2 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
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
        return React.createElement(Counter, {},
            React.createElement('button', {onClick:this.increment}, '+'),
            React.createElement('button', {onClick:this.decrement}, '-'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var Counter3 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    shouldComponentUpdate: function(nextProps, nextState){
    // return a boolean value - before render
        console.log('shouldComponentUpdate');
    },
    componentWillMount: function() {//  before render
        console.log('componentWillMount');
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
            React.createElement(Counter, {},  ),
            React.createElement(Counter2, {},  ),
        );
    },
    componentWillUpdate: function(nextProps, nextState){
    // perform any preparations for an upcoming update - after render
      console.log('componentWillUpdate');
    },
    componentDidUpdate: function(prevProps, prevState){
    // - after render
      console.log('componentDidUpdate');
    },
    componentWillUnmount: function(){
      // Destroy
      console.log('componentWillUnmount');
    }
});

var element = React.createElement(Counter3);
ReactDOM.render(element, document.getElementById('app'));
