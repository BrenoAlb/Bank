import { useState } from 'react';
import Card from '../Card';
import Empty from '../Empty';
import './style.css';

const Summary = ({card, handleDelete, setId, setCard }) => {

    const [ filteredState, setFiltered ] = useState([])

    const filterEntry = () => {
        const arrayFiltered = card.filter(card => {
            return card.data.type !== '';
        })
        setFiltered(arrayFiltered)
    }

    const filterExpense = () => {
        const arrayFiltered = card.filter(card => {
            return card.data.type !== 'true';
        })
        setFiltered(arrayFiltered);
    }

    const filterAll = () => {
        setFiltered([]);
    }

    return (
        <>
            <section className="financialSection">
                <div className="financialSummary">
                        <header className="summaryHeader">
                            <h2>Resumo Financeiro</h2>
                            <section className="summaryButtons">
                                <button onClick={filterAll}>Todos</button>
                                <button onClick={filterEntry}>Entrada</button>
                                <button onClick={filterExpense}>Despesa</button>
                            </section>
                        </header>
                </div>
                    
                    {card.length !== 0 ?
                        <Card cardList={card} filteredState={filteredState} handleDelete={handleDelete} setId = {setId}/>
                        :
                        <>
                        <Empty/>
                        <Empty/>
                        <Empty/>
                        </>
                    }

            </section>
        </>
    )
}

export default Summary;