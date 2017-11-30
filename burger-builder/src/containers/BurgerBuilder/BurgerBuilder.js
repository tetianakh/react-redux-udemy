import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICES = {
  salad: 0.4,
  cheese: 0.5,
  meat: 1.3,
  bacon: 0.7,
}


class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    alert("you purchased")
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
    const disabledInfo = {...this.state.ingredients};
    for (let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}>
            <OrderSummary
              ingredients={this.state.ingredients}
              purchaseCancelled={this.purchaseCancelHandler}
              purchaseContinued={this.purchaseContinueHandler}
              /></Modal>
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
}

export default BurgerBuilder;
