// fs file system

const { readFile, writeFile, read } = require("fs");
console.log("before stating the read write funcitons")

readFile('./content/first.txt', 'utf8', (e, res) => {
    if (e) {
        console.log("error", e)
    } else {
        const first = res;
        console.log("fist fille", first)
        readFile('./content/second.txt', 'utf8', () => {
            if (e) {
                console.log("error", e)
            } else {
                const second = res
                console.log("secondfile", second);
                writeFile(
                    './content/result.txt',
                    `result:${first} , ${second} new`,
                    (e, res) => {
                        if (e) console.log(e)
                        else {
                            console.log("result saved sucessfully byy")
                        }
                    }
                )
            }
        })
    }
})

console.log("second last ine of the code")
console.log(" last line of the code")