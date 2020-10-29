import {MEALS} from '../../data/dummy-data';
import { TOGGLE_FAV } from '../Action/actionmeals';
import {FILTER_MEALS} from '../Action/actionmeals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    FavouriteMeals: []
}

const mealsReducer = (state = initialState, action) => {

     switch(action.type) {
         
        case TOGGLE_FAV:
            const existingMealIndex = state.FavouriteMeals.findIndex(meals => meals.id === action.mealId);
            if(existingMealIndex >= 0){
                const updatedFavMeals = [state.FavouriteMeals]
                updatedFavMeals.splice(existingMealIndex, 1);
                return {...state, FavouriteMeals: updatedFavMeals }
            }
            else {
                const meals = state.meals.find(meals => meals.id === action.mealId);
                return {...state, FavouriteMeals : state.FavouriteMeals.concat(meals)}
            }     

        case FILTER_MEALS:
            const appliedFilters = action.filters;

            const updatedFilteredMeals = state.meals.filter(meals => {
                if(appliedFilters.GlutenFree && !meals.isGlutenFree){
                    return false;
                }
                if(appliedFilters.LactoseFree && !meals.isLactoseFree){
                    return false;
                }
                if(appliedFilters.VeganFree && !meals.isVegan){
                    return false;
                }
                if(appliedFilters.VegetarianFree && !meals.isVegetarian){
                    return false;
                }
                return true;
            });

            return {...state, filteredMeals: updatedFilteredMeals}

         default :
         return state;
     }
}

export default mealsReducer;

