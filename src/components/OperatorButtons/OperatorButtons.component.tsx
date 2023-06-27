interface IOperatorButtonsComponent {
    value: string
    onClickOperatorButtonHandler: () => void
}

export const OperatorButtonsComponent = (props: IOperatorButtonsComponent) => {
    return (

        <button onClick={props.onClickOperatorButtonHandler}>{props.value}</button>

    )
}