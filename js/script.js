// Это текст для div с id root
function MyApp() {
   return <h1>Hello, world!</h1>;
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);

// Это кнопка с id butt
class Toggle extends React.Component {
   constructor(props) {
      super(props);
      this.state = { isToggleOn: true };
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
   }
   handleClick() {
      this.setState(prevState => ({
         isToggleOn: !prevState.isToggleOn
      }));
   }
   render() {
      return (
         <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
         </button>
      );
   }
}
ReactDOM.render(
   <Toggle />,
   document.getElementById('butt')
);