export class SearchMeal {
    async searchByMealName(mealName) {
        return await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
            .then(res => res.json())
            .then(data => data.meals)
    }
    async searchByLetter(letter) {
        return await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
            .then(res => res.json())
            .then(data => data.meals)
    }
}