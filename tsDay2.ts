type custom = (string | number)[];

function kalimat(cases: custom): string
{
    let result: string = '';
    cases.map((text, i) => 
    {
        result += (i ? ' ':'' ) + text;
    })

    return result;
}

const case1 = [1, "data",3, "result"];
const case2 = ["Bejo", "has", 4, "sport", "car"];

console.log(kalimat(case1));
console.log(kalimat(case2));
