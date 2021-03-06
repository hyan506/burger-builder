import React, { Component } from 'react';
import Aux from "../../hoc/Aux"
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const INGREDIENT_PRICES ={
    salad:0.5,
    cheese:0.4,
    meat:1,
    bacon:0.8
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients){

        const sum = Object.keys(ingredients)
        .map(igKey =>{
            return ingredients[igKey];
        }).reduce((sum,el) =>{
            return sum+el;
        },0);
        this.setState({purchasable: sum > 0});
    };


    addIngredientHandler =(type)=>{
        //update the number
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        //update the price
        const extraPrice = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + extraPrice;
        this.setState(
            {totalPrice: newPrice,
            ingredients: updatedIngredients}
        );
        this.updatePurchaseState(updatedIngredients);

    };

    removeIngredientHandler =(type)=>{
        //update the number
        const oldCount = this.state.ingredients[type];
        if(oldCount === 0) {
            return;
        }
        const updatedCount = oldCount -1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        //update the price
        const lessPrice = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice - lessPrice;
        this.setState(
            {totalPrice: newPrice,
            ingredients: updatedIngredients}
        );
        this.updatePurchaseState(updatedIngredients);
    };
    
    purchaseHandler =() =>{
        this.setState({purchasing: true});
    };
    purchaseCancelHandler =() =>{
        this.setState({purchasing: false});
    };
    purchaseContinueHandler =() =>{
        alert('Continued');
    };

    render(){
        const disabledInfo ={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0;
        }
        return (
            <Aux>
                <Modal show ={this.state.purchasing}
                        modalClosed ={this.purchaseCancelHandler}>
                    <OrderSummary 
                        purchaseCancelled ={this.purchaseCancelHandler}
                        purchaseContinued ={this.purchaseContinueHandler}
                        ingredients={this.state.ingredients} 
                        price = {this.state.totalPrice}/>
                </Modal>
                <Burger ingredients ={this.state.ingredients}/>
                <BuildControls 
                    ingredientsAdded = {this.addIngredientHandler}
                    ingredientsRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price ={this.state.totalPrice}
                    purchasable ={this.state.purchasable}
                    ordered = {this.purchaseHandler}
                    />

            </Aux>
        );
    }
}

export default BurgerBuilder;