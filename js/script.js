// Это текст для div с id root (все на jsx)
function Text_H1() {
   return <h1>Hello, world!</h1>;
}
// const container = document.getElementById('h1_text');
// const root = ReactDOM.createRoot(container);
// root.render(<Text_H1 />);
//если одна функция render сломается (не найдет id) то дальше код не выполниться
ReactDOM.render(
   <Text_H1 />,
   document.getElementById('h1_text')
);
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
      if (this.state.isToggleOn) {
         return (
            <button class="red" onClick={this.handleClick} >
               red
            </button>
         );
      } else {
         return (
            <button class="blue" onClick={this.handleClick} >
               blue
            </button>
         );
      }
   }
}
ReactDOM.render(
   <Toggle />,
   document.getElementById('butt')
);