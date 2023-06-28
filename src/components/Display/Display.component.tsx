interface IDisplayComponent {
    storedCalculation: string
    onChangeDisplay: (value: string) => void
}


export const DisplayComponent = (props: IDisplayComponent) => {

    const onClickValueInputHandler = (value: string) => {
        props.onChangeDisplay(value)
    }

    return (
        <input type="text" value={props.storedCalculation} onChange={e => onClickValueInputHandler(e.target.value)} />
    )
}