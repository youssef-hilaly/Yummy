export class SingleMeal {
    // get meal data by id
    async getMeal(id) {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        let data = await response.json();
        return data.meals[0];
    }

    getHTMLMeal(meal) {
        let html = `
        <div class="col-md-4">
            <div class="single-meal-img text-white">
                <img src="${meal.strMealThumb}" class="w-100 rounded-2" alt="">
                <h2>${meal.strMeal}</h2>
            </div>
        </div>
        <div class="col-md-8">
            <div class="single-meal-info text-white">
                <h3>Instructions</h3>
                <p>${meal.strInstructions}</p>
                <h3>Area : ${meal.strArea}</h3>
                <h3>Category : ${meal.strCategory}/h2>
                <h3>Recipes :</h3>
                <ul class="list-unstyled">
            `;

        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                html += `<li class="btn-meal btn-recipes">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`;
            }
        }
        html += `</ul>`

        if (meal.strTags) {
            let tags = meal.strTags.split(', ');
            html += `<h3>Tags :</h3>
            <ul class="list-unstyled">`;
            tags.forEach(tag => {
                html += `<li class="btn-meal btn-tag">${tag}</li>`;
            });
            html += `</ul>`;

        }
        html += `
                <div class="meal-links">
                    <button class="btn btn-success"><a href="${meal.strSource}" class="text-white text-decoration-none">Source</a></button>
                    <button class="btn btn-danger"><a href="${meal.strYoutube}" class="text-white text-decoration-none">Youtube</a></button>
                </div>
            </div>
        </div>`;

        return html;
    }

}