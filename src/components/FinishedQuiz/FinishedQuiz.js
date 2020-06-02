import React from "react";
import styles from './FinishedQuiz.module.scss'
import Button from "../UI/Button/Button"

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total,key)=>{
        if(props.results[key] === 'success')
            total++;
        return total
    }, 0);

    return(
        <div className={styles.FinishedQuiz}>
            <ul>
                {props.quiz.map( (quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                    ];
                    return(
                        <li key={index}>
                            <strong>{index + 1}</strong>. &nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}
            </ul>
            <p> результат: {successCount}/{props.quiz.length} </p>
            <div>

                <Button
                    onClick={props.onRetry}
                >
                   повторить
                </Button>
                <Button
                >
                    перейти в список тестов
                </Button>
            </div>
        </div>
    )
}

export default FinishedQuiz