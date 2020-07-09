// functions

//1
function calculateSquare(x, y) {
    if (x != null && y != null)
        return x * y;
    else
        return x * x;
}
console.log(calculateSquare(5));
console.log(calculateSquare(5, 2));

//2 
function calculateSeconds(h, m, s) {
    return h * 3600 + m * 60 + s;
}
console.log(calculateSeconds(5, 24, 17));

//3
function calculateHMS(seconds) {
    let h = Math.floor(+seconds / 60 / 60);
    let m = Math.floor(+seconds / 60) - h * 60;
    let s = +seconds % 60;
    return h + ':' + m + ':' + s;
}
console.log(calculateHMS(19547));

//4
class PlainMarker {
    constructor(color, amount) {
        document.body.style.color = color;
        if (amount > 0 && amount <= 100)
            this.amount = amount;
        else
            this.amount = 100;
    }
    Print(text) {
        let arr = Array.from(text);
        let i = 0;
        while (this.amount > 0 && i < arr.length) {
            document.write(arr[i++]);
            this.amount -= 0.5;
        }
        document.write("<br \/>");
    }
}

class Marker extends PlainMarker {
    constructor(color, amount) {
        super(color, amount);
    }
    AddAmount(amount) {
        if (amount > 0) {
            this.amount += amount;
            if (this.amount > 100)
                this.amount = 100;
        }
    }
}

let marker = new Marker("red", 2);
marker.Print("Hello world");
marker.AddAmount(50);
marker.Print("Hello world");

//5
let checkArr = [{
        name: 'iPhone',
        price: 20000,
        amount: 1
    }, {
        name: 'Samsung',
        price: 23000,
        amount: 1
    },
    {
        name: 'MiBand',
        price: 800,
        amount: 7
    }, {
        name: 'Case',
        price: 300,
        amount: 2
    }, {
        name: 'SmartWatch',
        price: 3000,
        amount: 1
    }
]

function printCheck(check) {
    document.writeln(`Check data: <br \/>`);
    for (let i = 0; i < check.length; ++i)
        document.writeln(`${i+1}. ${check[i].name} --> ${check[i].amount} : ${check[i].price} <br \/>`);
}

printCheck(checkArr);

function calculateOrder(check) {
    let res = 0;
    for (let i of check)
        res += i.price * i.amount;
    return res;
}

document.writeln(`Total order cost: ${calculateOrder(checkArr)} <br \/>`);

function maxValue(check) {
    let res = 0;
    for (let i of check) {
        if (i.price * i.amount > res)
            res = i.price * i.amount;
    }
    return res;
}

document.writeln(`Max value in order: ${maxValue(checkArr)} <br \/>`);

function calculateAverage(check) {
    let a = 0,
        p = 0;
    for (let i of check) {
        a += i.amount;
        p += i.price;
    }
    return p / a;
}

document.writeln(`Average value in check: ${calculateAverage(checkArr)} <br \/>`);

//6
let cssStyles = [{
    name: 'color',
    value: 'yellow'
}, {
    name: 'font-weight',
    value: 'bold'
}, {
    name: 'font-size',
    value: '30px'
}, {
    name: 'font-style',
    value: 'italic'
}]

function printTextWithStyles(styles, text) {
    let css = '';
    for (let item of styles)
        css += item["name"] + ": " + item["value"] + "; ";

    document.write(`<p style="${css}">${text} </p>`);
}

let text = "Hello World";
printTextWithStyles(cssStyles, text);

//7
class Css {
    constructor(name, styles) {
        this.name = name;
        this.styles = styles;
    }
    addStyle(n, v) {
        let style = {
            name: n,
            value: v
        }
        this.styles.push(style);
    }

    removeStyle(style) {
        this.styles.splice(this.styles.findIndex(item => item.name === style), 1);
    }
    getCss() {
        let css = '';
        for (let item of this.styles)
            css += item["name"] + ": " + item["value"] + "; ";
        return css;
    }
}

let myCss = new Css("CSS", cssStyles);

document.write(`<p style="${myCss.getCss()}">${text} </p>`);
myCss.removeStyle('color');
myCss.removeStyle('font-style');
document.write(`<p style="${myCss.getCss()}">${text} </p>`);
myCss.addStyle('color', 'yellow');
document.write(`<p style="${myCss.getCss()}">${text} </p>`);