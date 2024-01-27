export class Category {
    constructor() {
        this.categories = null;
        this.getCategories();
    }

    async getCategories() {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        let data = await response.json();
        this.categories = data.categories;
    }

    async getCategoryMeals(category) {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        let data = await response.json();
        return data.meals;
    }

    getHTMLCategories() {
        let html = '';
        for (let i = 0; i < this.categories.length; i++) {
            html +=
                `<div class="col-md-3">
                <div class="meal position-relative overflow-hidden rounded-2 mt-3" data-category = "${this.categories[i].strCategory}">
                    <div class="meal-img">
                        <img src="${this.categories[i].strCategoryThumb}" class="w-100" alt="">
                    </div>
                    <div class="meal-name position-absolute w-100 h-100 d-flex align-items-center">
                        <h3 class="ms-2">${this.categories[i].strCategory}</h3>
                    </div>
                </div>
            </div>`;
        }
        return html;
    }



}