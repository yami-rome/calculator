import { DisplayComponent } from "../../components/Display/Display.component"
import { NumberButtonsComponent } from "../../components/NumberButtons/NumberButtons.component"
import { OperatorButtonsComponent } from "../../components/OperatorButtons/OperatorButtons.component"


export const CalculatorPage = () => {

    const numberButtons = [
        { label: '1', onClick: () => console.log('boton 1') },
        { label: '2', onClick: () => console.log('boton 2') },
        { label: '3', onClick: () => console.log('boton 3') },
        { label: '4', onClick: () => console.log('boton 4') },
        { label: '5', onClick: () => console.log('boton 5') },
        { label: '6', onClick: () => console.log('boton 6') },
        { label: '7', onClick: () => console.log('boton 7') },
        { label: '8', onClick: () => console.log('boton 8') },
        { label: '9', onClick: () => console.log('boton 9') }
    ]


    const operatorButton = [
        { label: '+', onClick: () => console.log('boton +') },
        { label: '-', onClick: () => console.log('boton -') },
        { label: '*', onClick: () => console.log('boton *') },
        { label: '/', onClick: () => console.log('boton /') },
        { label: '=', onClick: () => console.log('boton =') },
        { label: 'c', onClick: () => console.log('boton c') },
        { label: '.', onClick: () => console.log('boton .') }
    ]

    return (
        <>
            <div>Calculator</div>

            <div>
                <DisplayComponent />
            </div>

            <div>
                {
                    operatorButton.map((button, index) => (
                        <OperatorButtonsComponent
                            key={index}
                            label={button.label}
                            onClickOperatorButton={button.onClick}
                        />
                    ))
                }
            </div>

            <div>
                {
                    numberButtons.map((button, index) => (
                        <NumberButtonsComponent
                            key={index}
                            label={button.label}
                            onClickNumberButton={button.onClick}
                        />
                    ))
                }
            </div>
        </>
    )
}