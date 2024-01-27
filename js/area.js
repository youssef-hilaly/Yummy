export class Area {
    constructor() {
        this.areas = null;
        this.getAreas();
    }

    async getAreas() {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
        let data = await response.json();
        this.areas = data.meals;
    }

    async getAreaMeals(area) {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
        let data = await response.json();
        return data.meals;
    }

    getHTMLAreas() {
        let html = '';
        for (let i = 0; i < this.areas.length; i++) {
            html +=
                `<div class="col-sm-3">
                <div class="meal position-relative overflow-hidden rounded-2 mt-3" data-area = "${this.areas[i].strArea}">
                    <div class="meal-img text-white text-center">
                        <i class="fa-solid fa-house-laptop fs-4rem"></i>
                        <h3>${this.areas[i].strArea}</h3>
                    </div>
                </div>
            </div>`;
        }
        return html;
    }

}