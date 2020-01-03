import React from 'react'
import classes from './FinishedQuiz.css'
import Button from '../UI/Button/Button'
import {Link} from 'react-router-dom'

const FinishedQuiz = props =>{
    const successCount = Object.keys(props.results).reduce((total,key)=>{
        if(props.results[key] === 'success'){
            total++
        }

        return total
    },0)

    return(
        <div className={classes.FinishedQuiz}>
          <ul>
              {props.quiz.map((quizItem,index)=>{
                  const cls = [
                      'fa',
                      props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                      classes[props.results[quizItem.id]]
                  ]

                  return (
                      <li
                          key={index}
                      >
                       <strong>{index + 1}</strong>.&nbsp;
                          {quizItem.question}.&nbsp;
                          <i className={cls.join(' ')} />
                      </li>
                  )
              })}
              {/*<li>*/}
                  {/*<strong>1.</strong>*/}
                  {/*how r u?*/}
                  {/*<i className={'fa fa-times'}/>*/}
              {/*</li>*/}
              {/*<li>*/}
                  {/*<strong>2.</strong>*/}
                  {/*how r u?*/}
                  {/*<i className={'fa fa-check'}/>*/}
              {/*</li>*/}
          </ul>

            <p>right answers {successCount} from {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} type='primary'>retry</Button>
                <Link to="/">
                <Button type='success'>go to quiz-list</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuiz