export class Ingredient {
    constructor() {
        this.ingredients = null;
        this.getIngredients();
    }

    async getIngredients() {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
        let data = await response.json();
        this.ingredients = data.meals;
    }

    async getIngredientMeals(ingredient) {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        let data = await response.json();
        return data.meals;
    }

    getHTMLIngredients() {
        console.log(this.ingredients);
        let html = '';
        for (let i = 0; i < this.ingredients.length && i < 20; i++) {
            let description = String(this.ingredients[i].strDescription);
            if (description === "null") {
                description = "No description available";
            }
            html +=
                `<div class="col-md-3">
                <div class="meal position-relative overflow-hidden rounded-2 mt-3" data-ingredient = "${this.ingredients[i].strIngredient}">
                    <div class="meal-img text-white text-center">
                        <i class="fa-solid fa-drumstick-bite fs-4rem"></i>
                        <h3>${this.ingredients[i].strIngredient}</h3>
                        <p>${description.length >= 200 ? description.substring(0, 200) : description}</p>
                    </div>
                </div>
            </div>`;
        }
        return html;
    }
}