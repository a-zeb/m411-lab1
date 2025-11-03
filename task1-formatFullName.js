function formatFullName(firstName, lastName) {
    if (firstName.length === 0 || lastName.length === 0) {
        console.log("Invalid name input.")
    } else {
        console.log(lastName + ", " + firstName)
    }
}

formatFullName("Anwar", "Zeb")