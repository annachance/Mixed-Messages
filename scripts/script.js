// Group Project: Mixed Messages by Anna Maddocks 

const suspectedElements = {
    athletes: ['Matt Fraser', 'Rich Froning', 'Katrin DavisDottir', 'Tia Toomey', 'Brooke Wells', 'Patrick Vellner'],
    event: ['Event1', 'Event2', 'Event3', 'Event4', 'Event5', 'Event6'],
    exercise: ['Deadlift', 'Squat Clean', 'Handstand Walking', 'Snatch', 'Box Jumps', 'Double Unders', 'OverHead Squat', 'Handstand Pushups']

};

let accusation = [];
let randomeSelect = arrayLength => {
    return Math.floor(Math.random() * arrayLength);

}

for (let element in suspectedElements) {
    let randomIndex = randomSelect(suspectedElements[element].length);
    switch (element) {
        case 'athletes':
            accusation.push(`Competitor ${suspectedElements[element][randomIndex]},`);  break;
        case 'event':
            accusation.push(`in ${suspectedElements[element][randomIndex]},`);  break;
        case 'exercise':
            accusation.push(`hit an amazing new PB in their ${suspectedElements[element][randomIndex]}.`);  break;
    }
}

console.log(accusation.join(' '));
