import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import ArticleItem from './articleitem'

export const Articles = ({ articleItems, addTodo }) => (
    <div className="first">
        <ul className="">
            {todoItems.map(({text, id, done}) => (
                <ToDoItem key={id} id={id} text={text} done={done} />
            ))}
        </ul>
    </div>
)
