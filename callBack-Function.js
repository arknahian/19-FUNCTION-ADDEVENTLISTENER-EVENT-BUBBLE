function explain_call_back(name, age, tasks) {
    console.log("Your Name", name);
    console.log("Age", age);
    tasks();
}

function washHand() {
    console.log("Wash your hands");
}
function takeShower() {
    console.log("take a Shower");
}
function sleep() {
    console.log("Go and Sleep");
}


explain_call_back("Tom", 56, washHand);
explain_call_back("Dom", 54, takeShower);
explain_call_back("vin", 55, takeShower);
explain_call_back("Manoban", 22, sleep);