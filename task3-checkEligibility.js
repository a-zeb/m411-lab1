function checkEligibility(age, isEmployed) {
    if (age >= 18 && isEmployed === true) {
        console.log("You are over 18 and employed thus eligible")
    } else if (age >= 18 && isEmployed === false) {
        console.log("You are over 18 but unemployed thus conditionally eligible")
    } else if (age <= 18) {
        console.log("You are under 18 thus ineligible")
    }
}

checkEligibility(18, true)
checkEligibility(18, false)
checkEligibility(17)