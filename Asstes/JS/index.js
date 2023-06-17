let arrFruits = ["apple","banana","berry","cherry","orange"]
let counter = 3
let f = false
function welcome(){
        if (counter > 0){
        let admin = prompt("Please enter your Username")
        let password = prompt("Please enter your Password")
        if (admin == "admin" && password=="123"){
        console.log("Welcome", admin)
        console.log(arrFruits) 
        D()  
        }
        else{
            counter --
            console.log("Error, please try aagain")
            console.log("you still have", counter, "attemps")
            welcome()
        }
    }
        else{
            console.log("You are blocked")
            counter = 3
        }
}
function D(){
    let fruits = prompt ("Please enter fruit name from the array below")
    if (arrFruits.includes(fruits)){
    // if (arrFruits["apple","banana","berry","cherry","orange"]==fruits){
        console.log("You have selected",fruits)
    }
    else{
        console.log("This fruit is not in the basket")
        console.log(arrFruits)
        D()
    }
}
