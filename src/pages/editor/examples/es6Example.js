export const es6Example = "function addDigits(num) {\n" +
    "    const numArr = [...num.toString()];\n" +
    "    \n" +
    "    const newNum = numArr.reduce((total, digit) =>{\n" +
    "        return total + Number(digit);\n" +
    "    }, 0)\n" +
    "    if(numArr.length === 1){\n" +
    "        return newNum;    \n" +
    "    }  \n" +
    "    return addDigits(newNum); \n" +
    "}\n" +
    "\n" +
    "const finalValue = addDigits(38);\n" +
    "\n" +
    "console.log(finalValue);";

