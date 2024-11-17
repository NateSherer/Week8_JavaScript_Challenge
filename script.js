// Challenge #1 Easy

function todayExercise(workout) {
    let exerciseOfTheDay = workout;
    return function(){
        console.log(`Today's Exercise ${exerciseOfTheDay}`)
    }
}
let exercise = todayExercise('dancing');
exercise()