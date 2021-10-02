const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        if (undefDeath(currentPerson) - currentPerson.yearOfBirth 
            > undefDeath(oldest) - oldest.yearOfBirth)
            oldest = currentPerson;
        return oldest;
    });
};

const undefDeath = function undefinedYearOfDeath(obj) {
    return obj.yearOfDeath === undefined 
        ? new Date().getFullYear() 
        : obj.yearOfDeath;
};

// Do not edit below this line
module.exports = findTheOldest;
