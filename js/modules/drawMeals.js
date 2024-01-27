export function getHTMLMeals(meals) {
    let html = '';
    for (let i = 0; i < meals.length && i < 20; i++) {
        html +=
            `<div class="col-md-3">
            <div class="meal position-relative overflow-hidden rounded-2 mt-3" data-id = "${meals[i].idMeal}">
                <div class="meal-img">
                    <img src="${meals[i].strMealThumb}" class="w-100" alt="">
                </div>
                <div class="meal-name position-absolute w-100 h-100 d-flex align-items-center">
                    <h3 class="ms-2">${meals[i].strMeal}</h3>
                </div>
            </div>
        </div>`;
    }
    return html;
}