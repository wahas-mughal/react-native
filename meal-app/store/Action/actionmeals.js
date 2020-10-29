export const TOGGLE_FAV = 'TOGGLE_FAVOURITE';
export const FILTER_MEALS = 'FILTER_MEALS';

// Favourite Meals
export const toggleFavourite = (id) => {
    return {
        type: TOGGLE_FAV,
        mealId: id
    }
}

// Filtered meals
export const fiterMeals = (filterSettings) => {
    return {
        type: FILTER_MEALS,
        filters: filterSettings
    }
}
