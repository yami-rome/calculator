import { isPropertySignature } from "typescript"

interface IOperatorButtonsComponent {
    label: string
    onClickOperatorButton: () => void
}

export const OperatorButtonsComponent = (props: IOperatorButtonsComponent) => {
    return (

        <button onClick={props.onClickOperatorButton}>{props.label}</button>

    )
}