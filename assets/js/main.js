window.onload = () => {
    "use strict";

    const LOWER_CASE = "abcdefghijklmnopqrstuvwxyz";
    const UPPER_CASE = LOWER_CASE.toUpperCase();
    const NUMBER = "0123456789";
    const SYMBOL = "~!@#$%^&*()_+-=.,</?;:{}[]\\'\"";

    document.querySelector("#copy").onclick = () => copyToClipboard();

    document.querySelector("#run").onclick = () => {
        let sequence = LOWER_CASE;

        let isUpper = document.querySelector("#upper-case:checked") ? true : false;
        let isNumber = document.querySelector("#number:checked") ? true : false;
        let isSymbol = document.querySelector("#symbol:checked") ? true : false;
        let lengthOfPassword = document.querySelector("#length-password").value;

        if (lengthOfPassword != 0) {
            if (isUpper) {
                sequence += UPPER_CASE;
            }
            if (isNumber) {
                sequence += NUMBER;
            }
            if (isSymbol) {
                sequence += SYMBOL;
            }

            let result = getRandomPassword(sequence, lengthOfPassword);

            let element = document.querySelector("#result");
            element.value = result;
        }
    }

    const chooseLetter = (inputText) => {
        return inputText[Math.floor(Math.random() * inputText.length)];
    }

    const getRandomPassword = (sequence, lengthOfPassword) => {
        let result = "";

        for (let i = 0; i < lengthOfPassword; i++) {
            result += chooseLetter(sequence);
        }

        return result;
    }

    const copyToClipboard = () => {
        /* Get the text field */
        var copyText = document.getElementById("result");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);

        if (copyText.value) {
            /* Alert the copied text */
            Swal.fire({
                icon: "success",
                html: `<p>Copied Text: <strong>${copyText.value}</strong></p>`,
                showCloseButton: true,
                showConfirmButton: false
            })
        }
    }
}