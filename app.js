//import React from 'react';

class GroceryListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        done: false
      };
    }
    onMouseOver() {
        this.setState({
            done: !this.state.done
          });
        }
        render() {
          var style = {
              fontWeight: this.state.done ? 'bold' : 'normal'
            };

            return(
              <li style={style} onMouseOver={this.onMouseOver.bind(this)}>{this.props.groceryItem}</li>
              );
            }
          };

  var GroceryList = (props) => (
    <ul>
      {props.groceryItems.map(groceryItem =>
        <GroceryListItem groceryItem={groceryItem} />
      )}
    </ul>
);

ReactDOM.render(<GroceryList groceryItems={['milk', 'eggs', 'coffee']}/>, document.getElementById("app"));