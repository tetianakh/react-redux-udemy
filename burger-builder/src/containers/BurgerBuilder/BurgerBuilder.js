import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';


const INGREDIENT_PRICES = {
  salad: 0.4,
  cheese: 0.5,
  meat: 1.3,
  bacon: 0.7,
}


class BurgerBuilder extends Component {

  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  }

  componentDidMount () {
    axios.get('/ingredients.json')
    /* if `catch` block is absent, `then` block is executed
    even if error occured.
    */
      .then(resp => {
        this.setState({ingredients: resp.data})
      })
      .catch (err => {
        this.setState({error: true})
      });
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    // alert("you purchased");
    this.setState({loading: true});
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Max',
        address: {
          street: 'Teststreet 1',
          zipcode: '12345'
        },
        phone: '74527852'
      },
      deliveryMethod: 'fastest',
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false, purchasing: false});
        console.log(response)
      })
      .catch(error => {
        this.setState({loading: false, purchasing: false});
        console.log(error)
      });

  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((partialSum, el) => {return partialSum + el;}, 0);

    this.setState({purchasable: sum > 0})
  }

  addIngredientHandler = (type) => {
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedIngredients[type] + 1;
    const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice})
    this.updatePurchaseState(updatedIngredients)
  }

  removeIngredientHandler = (type) => {
    if( this.state.ingredients[type] <= 0 ) return;

    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedIngredients[type] - 1;
    const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice})
    this.updatePurchaseState(updatedIngredients)
  }

  render = () => {
    let modalContent = null;
    let burger = this.state.error ? <p>Can't load ingredients :( </p> : <Spinner />;

    if (this.state.ingredients){
      if (this.state.loading) {
        modalContent = <Spinner />
      } else {
        modalContent = (
          <OrderSummary
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            />
          );
      }
      const disabledInfo = {...this.state.ingredients};
      for (let key in disabledInfo){
        disabledInfo[key] = disabledInfo[key] <= 0;
      }
      burger = (
        <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          price={this.state.totalPrice}
          add={this.addIngredientHandler}
          remove={this.removeIngredientHandler}
          purchasable={this.state.purchasable}
          purchase={this.purchaseHandler}
          disabled={disabledInfo}/>
        </Aux>
      );
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}>
          {modalContent}</Modal>
          {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
