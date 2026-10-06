function getTime(): number {
    return new Date().getTime();
}

function add1(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}

function add2(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}


console.log("Add", add2(1, 2, 3, 4, 5));