


function sum(x: string, y: string, z: string): string
function sum(x: string, y: string): string {
    return x + "  " + y;
}

function totalLength(x: string, y: string): number
function totalLength(x: any[], y: any[]): number
function totalLength(x: (string | string[]), y: (string | string[])): number {

    var total: number = x.length + y.length;

    if (x instanceof Array) {

    }
    if (x instanceof String) {

    }

    return total;
}

