import './style.css'

const Card = ({cardList, handleDelete, setId, filteredState}) => {

    const removeList = (event) =>  {
        setId([event.target.id])
        handleDelete(event.target.id)
    }

    return (
        <div>
        {filteredState.length !== 0 ?
        <>
            <ul className='cardListUl'>
                {filteredState.map((card, index) => (
                    <>
                        {card.data.type ? (
                        <>
                            <li key = {index} className="cardContentTrue">
                                <header className="cardHeader">
                                    <h2>{card.data.description}</h2>
                                    <p>R$ {card.data.value},00</p>
                                    <img id = {index} onClick={removeList} src="../../trash.png" alt="Lixeira" />
                                </header>
                                <p className="cardType">Entrada</p>
                            </li>
                        </>
                        )
                        :
                        (
                            <li id = {index} key = {index} className="cardContentFalse">
                            <header className="cardHeader">
                                <h2>{card.data.description}</h2>
                                <p>R$ {card.data.value},00</p>
                                <img id = {index} onClick={removeList} src="../../trash.png" alt="Lixeira" />
                            </header>
                            <p className="cardType"> Saída</p>
                            </li>
                        )
                        }
                    </>
                ))}
            </ul>
        </>
        :
        <>
        <ul className='cardListUl'>
            {cardList.map((card, index) => (
                <>
                    {card.data.type ? (
                    <>
                        <li key = {index} className='cardContentTrue'>
                            <header className="cardHeader">
                                <h2>{card.data.description}</h2>
                                <p>R$ {card.data.value},00</p>
                                <img id = {index} onClick={removeList} src="../../trash.png" alt="Lixeira" />
                            </header>
                            <p className="cardType">Entrada</p>
                        </li>
                    </>
                    )
                    :
                    (
                        <li id = {index} key = {index} className='cardContentFalse'>
                        <header className="cardHeader">
                            <h2>{card.data.description}</h2>
                            <p>R$ {card.data.value},00</p>
                            <img id = {index} onClick={removeList} src="../../trash.png" alt="Lixeira" />
                        </header>
                        <p className="cardType"> Saída</p>
                        </li>
                    )
                    }
                </>
            ))}
        </ul>
        </>
        }
    </div>
    );
}

export default Card;