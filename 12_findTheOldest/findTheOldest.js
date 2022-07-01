const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();
    return people.reduce(
        (oldest, person) => {
            const personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
            const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
            return personAge > oldestAge ? person : oldest;
        },
    );
};

// Do not edit below this line
module.exports = findTheOldest;
