import { Form} from "react-bootstrap"

interface IDisplayComponent {
    storedCalculation: string
    onChangeDisplay: (value: string) => void
}


export const DisplayComponent = (props: IDisplayComponent) => {

    const onClickValueInputHandler = (value: string) => {
        props.onChangeDisplay(value)
    }

    return (
        <Form.Control className="form-control form-control-md text-dark  my-4 mx-3" type="text" value={props.storedCalculation} onChange={e => onClickValueInputHandler(e.target.value)} placeholder="0"/>
    )
}