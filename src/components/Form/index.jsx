import './style.css';
import Total from '../Total';
import { useState } from "react";

const Form = ({setCard, setCardEntrada, setCardSaida, card, id}) => {
    const [description, setDescription ] = useState('')
    const [value, setValue ] = useState('')
    const [type, setType ] = useState('true')
    
    function handleRegister(event) {
        event.preventDefault()
        const data = {
            id,
            description,
            value,
            type
        }
        if (data.description === "" || data.value === "" || data.value < 0) {
            return false
        }
        
        if(data.type === 'true') {
            setCardEntrada((previousData) => [...previousData, { data }]) 
        } else {
            setCardSaida((previousData) => [...previousData, { data }]) 
        }

        setCard((previousData) => [...previousData, { data }])
        setDescription('')
        setValue('')
        setType('true')
    }

    return (
    <>
    <div className="formContent">
        <form className="formCard" onSubmit={handleRegister}>
            <h4 className="descriptionTitle">Descrição</h4>
            <input className="formDescription"type="text" placeholder="Digite aqui sua descrição" onChange={(event) => setDescription(event.target.value)} value={description}/>
            <p className="formExample">Ex: Compra de roupas</p>
            <div className="formSections">
                <section>
                    <p>Valor</p>
                    <input className="formValues" type="number" placeholder="Valor                               R$" onChange={(event) => setValue(event.target.value)} value={value}/>
                </section>
                <section>
                    <p>Tipo de valor</p>
                    <select className="formTypes" value={type} onChange={(event) => setType(event.target.value)}>
                        <option value={true} selected>Entrada</option>
                        <option value="">Saída</option>
                    </select>
                </section>
            </div>
            <button type="submit" className="formButton">Inserir valor</button>
        </form>


        {card.length !== 0 
        ?
        <Total cardTotal={card}/>
        :
        <></>
        }
    </div>
    </>
    )
}

export default Form;