const desserts = [
    {
        id: 1,
        name: "Classic Chocolate Cake",
        category: "cakes",
        image: "images/chocolate-cake.jpg",
        description: "Rich, moist chocolate layers with creamy frosting",
        ingredients: ["Flour", "Cocoa powder", "Eggs", "Sugar", "Butter", "Vanilla"],
        steps: ["Preheat oven to 350°F", "Mix dry ingredients", "Cream butter and sugar", "Add eggs and vanilla", "Alternate adding flour and milk", "Bake for 18-20 minutes"]

    },
    {
        id: 2,
        name: "Vanilla Cupcakes",
        category: "cakes",
        image: "images/vanilla-cupcakes.webp",
        description: "Light and fluffy vanilla cupcakes with buttercream",
        ingredients: ["Flour", "Sugar", "Butter", "Eggs", "Vanilla esessence", "Milk"],
        steps: ["Preheat oven to 350°F", "Mix dry ingredients", "Cream butter and sugar", "Add eggs and vanilla", "Alternate adding flour and milk", "Bake for 18-20 minutes"]
    },
    {
        id: 3,
        name: "Chocolate Chip Cookies",
        category: "cookies",
        image: "images/chocolate-chip- cookies.jpg",
        description: "Crispy edges with a chewy center, loaded with chocolate chips",
        ingredients: ["Flour", "Butter", "Brown sugar", "White sugar", "Eggs", "Chocolate chips"],
        steps: ["Cream butter and sugars", "Beat in eggs", "Mix in flour", "Fold in chocolate chips", "Chill dough for 30 minutes", "Bake at 375°F for 10-12 minutes"]
    },
    {
        id: 4,
        name: "Oatmeal Raisin Cookies",
        category: "cookies",
        image: "images/oatmeal-raisin- cupcakes.webp",
        description: "Wholesome oats and sweet raisins in every bite",
        ingredients: ["Oats", "Flour", "Raisins", "Butter", "Brown sugar", "Cinnamon"],
        steps: ["Cream butter and sugar", "Mix in eggs and vanilla", "Combine dry ingredients", "Fold in oats and raisins", "Drop spoonfuls on baking sheet", "Bake at 350°F for 12-14 minutes"]
    },
    {
       id: 5,
       name: "Fruit Danish",
       category: "pastries",
       image: "images/fruit-danish.webp",
       description: "Flaky pastry topped with sweet fruit and glaze",
       ingredients: ["Puff pastry", "Cream cheese", "Fresh fruit", "Sugar", "Egg wash", "Vanilla"],
       steps: ["Roll out puff pastry", "Spread cream cheese mixture", "Top with fruit", "Brush with egg wash", "Bake at 400°F for 15-18 minutes", "Drizzle with glaze"] 
    },
    {
        id: 6,
        name: "Cinnamon Rolls",
        category: "pastries",
        image: "images/cinnamon-rolls.jpg",
        description: "Soft, swirled rolls with cinnamon and cream cheese icing",
        ingredients: ["Flour", "Yeast", "Milk", "Butter", "Cinnamon", "Cream cheese"],
        steps: ["Make dough and let rise", "Roll out and spread butter", "Sprinkle cinnamon-sugar mixture", "Roll up and slice", "Let rise again", "Bake at 350°F for 25 minutes"]    
    },
    {
        id: 7,
        name: "Red Velvet Cake",
        category: "cakes",
        image: "images/red-velvet-cake.webp",
        description: "Velvety smooth red cake with tangy cream cheese frosting",
        ingredients: ["Flour", "Cocoa powder", "Red food coloring", "Buttermilk", "Cream cheese", "Sugar"],
        steps: ["Mix dry ingredients with cocoa", "Combine wet ingredients with food coloring", "Mix together gently", "Pour into pans", "Bake at 350°F for 30 minutes", "Frost with cream cheese frosting"]
    },
    {
        id: 8,
        name: "Peanut Butter Cookies",
        category: "cookies",
        image: "images/peanut-butter- cookies.webp",
        description: "Classic cookies with the perfect peanut butter flavor",
        ingredients: ["Peanut butter", "Sugar", "Brown sugar", "Egg", "Vanilla", "Flour"],
        steps: ["Mix peanut butter with sugars", "Beat in egg and vanilla", "Mix in flour", "Roll into balls", "Press with fork to create pattern", "Bake at 350°F for 10-12 minutes"]
    },
    {
        id: 9,
        name: "Apple Turnover",
        category: "pastries",
        image: "images/apple-turnover.webp",
        description: "Crispy puff pastry filled with cinnamon apples",
        ingredients: ["Puff pastry", "Apples", "Sugar", "Cinnamon", "Butter", "Lemon juice"],
        steps: ["Cook apples with cinnamon and sugar", "Cut pastry into squares", "Fill with apple mixture", "Fold and seal edges", "Brush with egg wash", "Bake at 400°F for 20 minutes"]
    },
]
function displayDesserts(category = "all"){
    const grid = document.getElementById("dessertGrid");

    let items = desserts;
    if (category !== "all"){
        items = desserts.filter(d => d.category === category);
    }

    grid.innerHTML = "";

    items.forEach(dessert =>{
        grid.innerHTML += `
            <article class="dessert-card">
                <div class="dessert-image">
                    <img src="${dessert.image}" alt="${dessert.name}">
                </div>
                <div class="dessert-info">
                    <h3>${dessert.name}</h3>
                    <p>${dessert.description}</p>
                    <button onclick="openModal(${dessert.id})" class="view-recipe-btn">
                    View Recipe
                    </button>
                </div>
            </article>
        `;
    });
}

function filterDesserts(category){
    const buttons = document.querySelectorAll(".option-btn");

    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove("active");
    }

    event.target.classList.add("active");
    displayDesserts(category);
}

function generateRandomDessert() {
    const random = desserts[Math.floor(Math.random() * desserts.length)];
    const display = document.getElementById('randomDessert');
    document.getElementById('randomName').textContent = random.name;
    document.getElementById('randomImage').innerHTML = 
    `<img src="${random.image}" alt="${random.name}" 
    style="width: 150px; height: 150px; object-fit: cover; border-radius: 10px;">`;
    document.getElementById('randomDesc').textContent = random.description; 
    display.classList.add('show');
}

function openModal(id){
    let dessert;

    for (let i = 0; i < desserts.length; i++){
        if (desserts[i].id === id) {
            dessert = desserts[i];
            break;
        }
    }

    document.getElementById("recipe-title").textContent = dessert.name;
    document.getElementById("recipe-image").innerHTML= `<img src="${dessert.image}" 
    style="width: 150px; height: 150px; object-fit: cover; border-radius: 10px;">`;
    document.getElementById("recipe-description").textContent = dessert.description;

    let ingredientsList = "";
    for (let i = 0; i < dessert.ingredients.length; i++){
        ingredientsList += "<li>" + dessert.ingredients[i] + "</li>";
    }
    document.getElementById("ingredientsList").innerHTML = ingredientsList;

    let stepsList = "";
    for (let i = 0; i < dessert.steps.length; i++){
        stepsList += "<li>" + dessert.steps[i] + "</li>";
    }
    document.getElementById("stepsList").innerHTML = stepsList;

    document.getElementById("recipeBox").classList.add("show");
}

let currentSlide = 0;
const slides = document.getElementsByClassName("slide");

slides[currentSlide].classList.add("active");

function nextSlide() {
    slides[currentSlide].classList.remove("active");

    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

setInterval(nextSlide, 3000);

