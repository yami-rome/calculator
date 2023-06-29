import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { DisplayComponent } from "../../components/Display/Display.component"
import { NumberButtonsComponent } from "../../components/NumberButtons/NumberButtons.component"
import { OperatorButtonsComponent } from "../../components/OperatorButtons/OperatorButtons.component"
import { validateIfIsAllowedCharacter } from "../../helpers"


export const CalculatorPage = () => {
    const [storedCalculation, setStoredCalculation] = useState<string>('')

    const numberButtons = [
        { value: '0', onClick: () => onClickAddNumber('0') },
        { value: '1', onClick: () => onClickAddNumber('1') },
        { value: '2', onClick: () => onClickAddNumber('2') },
        { value: '3', onClick: () => onClickAddNumber('3') },
        { value: '4', onClick: () => onClickAddNumber('4') },
        { value: '5', onClick: () => onClickAddNumber('5') },
        { value: '6', onClick: () => onClickAddNumber('6') },
        { value: '7', onClick: () => onClickAddNumber('7') },
        { value: '8', onClick: () => onClickAddNumber('8') },
        { value: '9', onClick: () => onClickAddNumber('9') }
    ]


    const operatorButton = [
        { value: '+', onClick: () => onClickAddOperator('+') },
        { value: '-', onClick: () => onClickAddOperator('-') },
        { value: '*', onClick: () => onClickAddOperator('*') },
        { value: '/', onClick: () => onClickAddOperator('/') },
        { value: 'c', onClick: () => onClickClearCalculation() },
        { value: '.', onClick: () => onClickAddOperator('.') },
        { value: '=', onClick: () => onClickEqual() }
    ]


    const onClickAddNumber = (value: string) => {

        setStoredCalculation(storedCalculation + value)

    }

    const onClickAddOperator = (value: string) => {
        setStoredCalculation(storedCalculation + value)
    }

    const onClickClearCalculation = () => {
        setStoredCalculation('')
    }

    const onChangeDisplayHandler = (value: string) => {
        if (validateIfIsAllowedCharacter(value)) {
            setStoredCalculation(value)
        }
    }


    const currentValueIsNumber = (currentValue: string) => ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(currentValue)
    const currentValueIsOperator = (currentValue: string) => ['+', '-', '/', '*'].includes(currentValue)



    const onClickEqual = () => {
        const storedCalculationToCharacterArray = storedCalculation.split('')

        const storedCalculationWithValuesExtracted: string[] = storedCalculationToCharacterArray.reduce((accumulator, currentValue) => {

            const lastValue = accumulator[accumulator.length - 1]

            if (currentValueIsNumber(currentValue) && currentValueIsNumber(lastValue) === false) {
                accumulator.push(currentValue)
            }

            if (currentValueIsNumber(currentValue) && currentValueIsNumber(lastValue)) {
                accumulator[accumulator.length - 1] = accumulator[accumulator.length - 1] + currentValue
            }

            if (currentValueIsOperator(currentValue)) {
                accumulator.push(currentValue)
            }

            return accumulator

        }, [] as string[])


        type TOperator = '*' | '/' | '+' | '-'

        const arrayWithNumbersAndOperator: Array<number | TOperator> = storedCalculationWithValuesExtracted.map(value => {
            if (value === '*') {
                return value
            }
            if (value === '/') {
                return value
            }

            if (value === '+') {
                return value
            }

            if (value === '-') {
                return value
            }


            return Number(value)

        })



        const storedCalculationResult = arrayWithNumbersAndOperator.reduce((accumulator, currentValue) => {

            let { operator, value } = accumulator

            if (typeof currentValue === 'number') {
                if (operator === '+') {
                    value += currentValue
                } else if (operator === '-') {
                    value -= currentValue
                } else if (operator === '*') {
                    value *= currentValue
                } else if (operator === '/') {
                    value /= currentValue
                }
            } else {
                operator = currentValue
            }
            return { value, operator }

        }, { value: 0, operator: '+' } as { value: number, operator: TOperator }).value

        const calculationResult = storedCalculationResult.toString()
        setStoredCalculation(calculationResult)

    }

    return (
        <>
            <Container className="container border bg-secondary"  >
                <Row className="w-50">

                    <DisplayComponent
                        storedCalculation={storedCalculation}
                        onChangeDisplay={onChangeDisplayHandler}

                    />

                </Row>

                <Row className="">
                    <Col md={3}>
                        {
                            numberButtons.map((button, index) => (
                                <NumberButtonsComponent
                                    key={index}
                                    value={button.value}
                                    onClickNumberButtonHandler={button.onClick}
                                />
                            )).reverse()
                        }

                    </Col>

                    <Col md={3}>
                        {
                            operatorButton.map((button, index) => (
                                <OperatorButtonsComponent
                                    key={index}
                                    value={button.value}
                                    onClickOperatorButtonHandler={button.onClick}
                                />
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        </>
    )
}


