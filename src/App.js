import React from 'react';
import GroceryItem from './GroceryItem';
import NewItemForm from './NewItemForm';
 
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
          name: "Banana",
          number: 3,
          purchased: false
        },
        {
          name: "Naranja",
          number: 4,
          purchased: true
        }
      ]
    }

    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.toggleItem = this.toggleItem.bind(this);
  }
  
  addGroceryItem(groceryItem){
    let items = this.state.items.slice();
    items.push(groceryItem);
    this.setState({items:items});
  }

  toggleItem(index){
    let items = this.state.items.slice();
    let item = items[index];

    item.purchased = !item.purchased;

    this.setState({
      items: items
    })
  }

  render(){
    return(
      <section className="section">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column is-half is-offset-one-querter"> 
              <h1 className="title">Grocery list</h1>
              
              <NewItemForm addItem={this.addGroceryItem} />

              <div className="my-5">
                <ul>
                  {this.state.items.map((item,index) =>
                    <GroceryItem key={index} item={item} toggleItem={()=> this.toggleItem(index)} />
                  )}
                </ul>
              </div>
            </div> 
          </div>
        </div>
      </section>
    );
  }
}

export default App;
