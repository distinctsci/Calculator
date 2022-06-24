function Calculate(){
    alert("This is a simple calculator that performs an operation on two numbers, and returns the output!");
    var result;
    var opera;
    var first = prompt(("Input the first number: ").trim());
    first = Number(first);
    var second = prompt("Input the second number: ");
    second = Number(second);
    opera = prompt("Choose an operation ('+, -, /, *'): ");
    if (opera == '+'){
        result = first + second;
    }
    else if (opera == '-'){
        result = first - second;
    }
    else if (opera == '/'){
        result = first / second;
    }
    else if (opera == '*'){
        result = first * second;
    }
    else{
        alert("Wrong operation!")
        return ("Reload page!")
    }
    return (first + " " + opera + " " + second + " = " + result);
}

alert(Calculate())