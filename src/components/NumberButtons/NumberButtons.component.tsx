interface INumberButtonsComponent {
    value: string
    onClickNumberButtonHandler: () => void
}

export const NumberButtonsComponent = (props: INumberButtonsComponent) => {
    return (
        <button onClick={props.onClickNumberButtonHandler}>{props.value}</button>
    )
}