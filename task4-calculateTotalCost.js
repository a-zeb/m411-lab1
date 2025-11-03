function calculateTotalCost(price, quantity, taxRate, discount = 0) {
    if (typeof price === 'number' && typeof quantity === 'number' && typeof taxRate === 'number') {
        let totalCost
        if (typeof discount === 'number') {
            totalCost = (price * quantity) * (1 + taxRate) - discount
        } else {
            totalCost = (price * quantity) * (1 + taxRate)
        }
        console.log(totalCost)
    } else {
        console.log("Invalid input.")
    }
}

calculateTotalCost(10, 2, 10) // 220
calculateTotalCost(10, 2, 10, 20) // 200
