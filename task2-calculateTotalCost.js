function calculateTotalCost(price, quantity, taxRate) {
    if (typeof price === 'number' && typeof quantity === 'number' && typeof taxRate === 'number') {
        let totalCost = (price * quantity) * (1 + taxRate)
        console.log(totalCost)
    } else {
        console.log("Invalid input.")
    }
}

calculateTotalCost(10, 2, 10) // 220