let n = 9;

for (let i = 1; i <= n; i++) {
    let line = "";

    if (i <= 5) {
        for (let j = 1; j <= i; j++) {
            line += (j % 2 === 1 ? i : 10 - i) + " ";
        }
        let spaces = (5 - i) * 4;
        line += " ".repeat(spaces);
        for (let j = 1; j <= i; j++) {
            line += (j % 2 === 1 ? 10 - i : i) + " ";
        }
    } else {
        let k = 10 - i;
        for (let j = 1; j <= k; j++) {
            line += (j % 2 === 1 ? i : 10 - i) + " ";
        }

        let spaces = (i - 5) * 4;
        line += " ".repeat(spaces);

        for (let j = 1; j <= k; j++) {
            line += (j % 2 === 1 ? 10 - i : i) + " ";
        }
    }

    console.log(line);
}