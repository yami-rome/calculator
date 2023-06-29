
import Button from 'react-bootstrap/Button';
interface INumberButtonsComponent {
    value: string
    onClickNumberButtonHandler: () => void
}

export const NumberButtonsComponent = (props: INumberButtonsComponent) => {
    return (
        <Button className="btn btn-dark text-warning me-2 my-2"  onClick={props.onClickNumberButtonHandler}>{props.value}</Button>
    )
}