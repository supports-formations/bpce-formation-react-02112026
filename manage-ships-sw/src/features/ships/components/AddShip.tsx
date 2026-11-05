import { useRef, useState, type ChangeEvent } from "react";
import { Button, Form } from "react-bootstrap";
import type { Ship } from "../models";

export type ControlInForm<T> = {
    value: T,
    error ?: unknown
}

export type AddShipForm = {
    matricule: ControlInForm<string>,
    size: ControlInForm<number>,
    valid: boolean
}

export type AddShipProps = {
    saveNewShip: (item: Ship) => void
} 

const AddShip = ({saveNewShip}: AddShipProps) => {
    let counter = 0;
    const inputRef = useRef<HTMLInputElement>(null);
    const internalCounter = useRef<number>(0);
    const [formState, setFormState] = useState<AddShipForm>({matricule: {value: ''}, size: {value: 0}, valid: false})

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        const form = e.currentTarget;

        e.preventDefault();
        e.stopPropagation();

        if(formState.valid) {
            internalCounter.current = internalCounter.current + 1;
            counter ++;
            saveNewShip({
                id: 0,
                matricule: formState.matricule.value,
                size: formState.size.value
            });
        } else {
            inputRef.current?.focus()
        }   
        
    };

  const changeValueMatricule = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            matricule: { value: e.target.value},
            valid: formState.size.value > 0 && e.target.value != ''
        })
  }

    return (
        <>
        <i>Vous avez cliqué trop de fois (rappel : {internalCounter.current})</i>

         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Matricule</Form.Label>
                <Form.Control type="text" value={formState.matricule.value} onChange={changeValueMatricule} placeholder="1234DGXX" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Taille</Form.Label>
                <Form.Control ref={inputRef} type="number" value={formState.size.value} />
            </Form.Group>
            </Form>

            <Button variant="primary" type="submit">Primary</Button>
        </>
    )
}

export default AddShip;