class Meal {
  constructor(
    id,
    categoryId,
    title,
    affordability,
    complexity,
    imageURI,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
      this.id = id;
      this.categoryId = categoryId;
      this.title = title;
      this.affordability = affordability;
      this.complexity =complexity;
      this.imageURI = imageURI;
      this.duration = duration;
      this.ingredients = ingredients;
      this.steps = steps;
      this.isGlutenFree = isGlutenFree;
      this.isVegan = isVegan;
      this.isVegetarian = isVegetarian;
      this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;