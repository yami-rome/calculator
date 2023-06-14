import React, { useState } from "react"

export const DisplayComponent = () => {

    const [value, setValue] = useState<string>('')

    const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        console.log(value)
    }
    return (
        <>
            <input type="text" value={value} onChange={onChangeInputValue} />
        </>
    )
}