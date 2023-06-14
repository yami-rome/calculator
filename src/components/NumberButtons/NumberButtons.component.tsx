interface INumberButtonsComponent {
    label: string
    onClickNumberButton: () => void
}

export const NumberButtonsComponent = (props: INumberButtonsComponent) => {
    return (
        <button onClick={props.onClickNumberButton}>{props.label}</button>
    )
}