let result = document.getElementById('res');

function Clear() {
    result.value = '';
}

function Back() {
    result.value = result.value.slice(0, -1);
}

function Solve(val) {
    result.value += val;
}

function Result() {
    let x = result.value;
    let y = eval(x);
    result.value = y;
}

