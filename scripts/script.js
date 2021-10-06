// Group Project: Mixed Messages by Anna Maddocks 

const fitnessElements = {
    athletes: ['Matt Fraser', 'Rich Froning', 'Katrin DavisDottir', 'Tia Toomey', 'Brooke Wells', 'Patrick Vellner'],
    event: ['Event1', 'Event2', 'Event3', 'Event4', 'Event5', 'Event6'],
    exercise: ['Deadlift', 'Squat Clean', 'Handstand Walking', 'Snatch', 'Box Jumps', 'Double Unders', 'OverHead Squat', 'Handstand Pushups']

};

let step = [];
let randomSelect() = arrayLength => {
    return Math.floor(Math.random() * arrayLength);

}

for (let element in fitnessElements) {
    let randomIndex = randomSelect(fitnessElements[element].length);
    switch (element) {
        case 'athletes':
            step.push(`Competitor ${fitnessElements[element][randomIndex]},`);  break;
        case 'event':
            step.push(`in ${fitnessElements[element][randomIndex]},`);  break;
        case 'exercise':
            step.push(`hit an amazing new PB in their ${fitnessElements[element][randomIndex]}.`);  break;
    }
}

console.log(step.join(' '));
