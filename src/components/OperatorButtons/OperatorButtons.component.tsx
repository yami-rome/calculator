import { Button } from "react-bootstrap"

interface IOperatorButtonsComponent {
    value: string
    onClickOperatorButtonHandler: () => void
}

export const OperatorButtonsComponent = (props: IOperatorButtonsComponent) => {
    return (
            <Button className="btn btn-dark text-warning fw-bold me-2 my-2" onClick={props.onClickOperatorButtonHandler}>{props.value}</Button>
    )
}