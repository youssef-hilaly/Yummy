import { getHTMLMeals } from './modules/drawMeals.js';
import { SingleMeal } from './modules/singleMeal.js';
import { SearchMeal } from './modules/searchMeal.js';
import { Category } from './modules/category.js';
import { Area } from './modules/area.js';
import { Ingredient } from './modules/Ingredient.js';
import { getHTMLContact } from './modules/contact.js';
import { validate } from './modules/validate.js';


const singleMealObj = new SingleMeal();
const searchMealObj = new SearchMeal();
const categoryObj = new Category();
const areaObj = new Area();
const ingredientObj = new Ingredient();
const validateObj = new validate();

let loadingPage = $('.load-page');
// meal data
let meals;

// --------------------- get meals data home page ---------------------
getMealsData();
async function getMealsData() {
    await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(response => response.json())
        .then(data => {
            meals = data.meals;
            drawMeals();
            loadingPage.fadeOut(500);
        })
        .catch(error => {
            console.log(error);
        })
}
// --------------------- end get meals data home page ---------------------


// --------------------- nav functions ---------------------
function isNavOpen() {
    if ($('nav').css('left') === '0px') {
        return true;
    }
    return false;
}
function animateNavLinks() {
    let value = 200
    let links = $('nav .links a').get().reverse();

    if (!isNavOpen()) {
        value = 0;
        links = $('nav .links a');
    }

    $(links).each(function (index) {
        setTimeout(() => {
            $(this).css({ "transform": `translateY(${value}px)` });
        }, index * 100);
    });
}
// Delete Content before Navigation
function deleteContent() {
    $('#meals .row').html('');
    $('#category .row').html('');
    $('#area .row').html('');
    $('#ingredients .row').html('');
    $('#contact .container').html('');
    $('#search').addClass('d-none');
}
// click on nav btn
$('.toggle-btn').click(function () {
    $('.toggle-btn').children().toggleClass('d-none');
    let navWidth = $('nav .content').outerWidth() * -1;

    if (!isNavOpen()) {
        navWidth = 0;
    }
    $('nav').animate({ left: navWidth }, 500);

    animateNavLinks();
});
// Page navigation (click on nav links)
$('nav .links a').click(function () {
    let page = $(this).data('page');
    // delete content before navigation
    deleteContent();

    switch (page) {
        case 'search':
            $('#search').removeClass('d-none');
            break;
        case 'category':
            drawCategories();
            break;
        case 'area':
            drawArea();
            break;
        case 'ingredients':
            drawIngredients();
            break;
        case 'contact':
            drawContact();
            break;
    }
    // toggle btn click
    // click on nav btn to close nav after navigation
    $('.toggle-btn').children().not('.d-none').click();
    loadingPage.fadeOut(500);
});
// --------------------- end nav functions ---------------------


// --------------------- draw functions ---------------------
function drawMeals() {
    let mealDiv = $('#meals .row');
    let html = "";
    if (meals !== null) {
        html = getHTMLMeals(meals);
    }
    mealDiv.html(html);
}

function drawCategories() {
    let categoryDiv = $('#category .row');
    let html = categoryObj.getHTMLCategories();
    categoryDiv.html(html);
}

function drawArea() {
    let areaDiv = $('#area .row');
    let html = areaObj.getHTMLAreas();
    areaDiv.html(html);
}

function drawIngredients() {
    let ingredientDiv = $('#ingredients .row');
    let html = ingredientObj.getHTMLIngredients();
    ingredientDiv.html(html);
}

function drawContact() {
    let html = getHTMLContact();
    $('#contact .container').html(html);
}
// --------------------- end draw functions ---------------------


// --------------------- click on card ---------------------
// click on meal
$('#meals .row').on('click', '.meal', async function () {
    loadingPage.fadeIn(0);
    deleteContent();
    let id = $(this).data('id');
    let meal = await singleMealObj.getMeal(id);
    let html = singleMealObj.getHTMLMeal(meal);
    $('#meals .row').html(html);
    loadingPage.fadeOut(500);
});
// click on category
$('#category .row').on('click', '.meal', async function () {
    loadingPage.fadeIn(0);
    deleteContent();
    let category = $(this).data('category');
    meals = await categoryObj.getCategoryMeals(category);
    drawMeals();
    loadingPage.fadeOut(500);
});
// click on area
$('#area .row').on('click', '.meal', async function () {
    loadingPage.fadeIn(0);
    deleteContent();
    let area = $(this).data('area');
    meals = await areaObj.getAreaMeals(area);
    drawMeals();
    loadingPage.fadeOut(500);
});

// click on ingredient
$('#ingredients .row').on('click', '.meal', async function () {
    loadingPage.fadeIn(0);
    deleteContent();
    let ingredient = $(this).data('ingredient');
    meals = await ingredientObj.getIngredientMeals(ingredient);
    drawMeals();
    loadingPage.fadeOut(500);
});
// --------------------- end click on card ---------------------


// --------------------- search ---------------------
// search by name
$('.search.search-name input').on('keyup', async function () {
    let value = $(this).val().toLowerCase();
    if (value.length > 0) {
        meals = await searchMealObj.searchByMealName(value);
        drawMeals();
    }
});

// search by first letter
$('.search.meal-letter input').on('keyup', async function () {
    let value = $(this).val().toLowerCase();
    if (value.length > 0) {
        meals = await searchMealObj.searchByLetter(value);
        drawMeals();
    }
});
// --------------------- end search ---------------------


// --------------------- contact form ---------------------
$('#contact .container').on('keyup', 'input', function () {
    let val = $(this).val();
    let id = $(this).attr('id');

    switch (id) {
        case 'form-name':
            (validateObj.validateName(val)) ?
                $('#form-name-alert').addClass('d-none') :
                $('#form-name-alert').removeClass('d-none');
            break;
        case 'form-phone':
            (validateObj.validatePhone(val)) ?
                $('#form-phone-alert').addClass('d-none') :
                $('#form-phone-alert').removeClass('d-none');
            break;
        case 'form-email':
            (validateObj.validateEmail(val)) ?
                $('#form-email-alert').addClass('d-none') :
                $('#form-email-alert').removeClass('d-none');
            break;
        case 'form-age':
            (validateObj.validateAge(val)) ?
                $('#form-age-alert').addClass('d-none') :
                $('#form-age-alert').removeClass('d-none');
            break;
        case 'form-password':
            (validateObj.validatePassword(val)) ?
                $('#form-password-alert').addClass('d-none') :
                $('#form-password-alert').removeClass('d-none');
            // check re-password
            (validateObj.validateRePassword($('#form-repassword').val(), val)) ?
                $('#form-repassword-alert').addClass('d-none') :
                $('#form-repassword-alert').removeClass('d-none');
            break;
        case 'form-repassword':
            (validateObj.validateRePassword($('#form-password').val(), val)) ?
                $('#form-repassword-alert').addClass('d-none') :
                $('#form-repassword-alert').removeClass('d-none');
            break;
    }
    // enable/disable submit button
    (validateObj.validateAll($('#form-name').val(),
        $('#form-phone').val(),
        $('#form-email').val(),
        $('#form-age').val(),
        $('#form-password').val(),
        $('#form-repassword').val())) ? // condition
        // enable submit button
        $('#contact .btn').removeClass('disabled') :
        // disable submit button
        $('#contact .btn').addClass('disabled');

});
// on submit
$('#contact .container').on('click', '.btn', function (e) {
    e.preventDefault();
    $('form input').val('')
    $('#contact .btn').addClass('disabled');
});
// --------------------- end contact form ---------------------