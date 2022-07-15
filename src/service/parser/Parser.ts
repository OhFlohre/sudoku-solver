import * as O from "fp-ts/lib/Option"

import IParser from "./IParser"


export default class Parser implements IParser {
    parse(str: string) {
        let isValid = this.validate(str)

        if (!isValid) return O.none
        return O.some(str
            .split("_")
            .map(row => row
                .split("")
                .map(char =>
                    parseInt(char)
                )
            )
        )
    }

    validate(str: string) {
        let regex = /^(\d{9}_){8}\d{9}$/
        return regex.test(str)
    }

}