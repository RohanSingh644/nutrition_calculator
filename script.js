const apiId = "3ea9de3e"; // Replace with your Edamam App ID
const apiKey = "fc4fd873ef505b24b4679f99639ee3a5"; // Replace with your Edamam App Key

async function calculateCalories() {
    const foodItem = document.getElementById("food").value;
    const weight = parseFloat(document.getElementById("weight").value);

    if (foodItem && weight > 0) {
        try {
            const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${apiId}&app_key=${apiKey}&ingr=${weight}g%20${foodItem}`);
            const data = await response.json();
            
            if (data.totalNutrients) {
                const totalCalories = data.calories;
                document.getElementById("calorieResult").textContent = 
                    `Total Calories for ${weight}g of ${foodItem}: ${totalCalories} kcal`;
            } else {
                document.getElementById("calorieResult").textContent = "No nutritional data found. Please try a different food item.";
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            document.getElementById("calorieResult").textContent = "Error fetching data. Please try again.";
        }
    } else {
        document.getElementById("calorieResult").textContent = "Please enter a valid food item and weight.";
    }
}
