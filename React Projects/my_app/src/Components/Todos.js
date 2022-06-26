import React from 'react'
import Todos_Item from './Todos_Item'

export default function Todos(props) {
    return (
        <div>
            {props.todos.length === 0 ? <h3></h3> : <h3 className="text-center mb-3">"My all Tasks for the day"</h3>}

            {props.todos.length === 0 ? <h4 className="text-center ">"No Todos to Display yet, Fill the Above form to create new"</h4> :

                props.todos.map((task) => {
                    return (
                        <Todos_Item key={task.sno} todos_item_list={task} onDelete={props.onDelete} onUpdate={props.onUpdate} />
                    )
                }

                )

            }

        </div>
    )
}
