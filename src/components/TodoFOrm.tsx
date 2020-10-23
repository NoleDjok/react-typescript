import React, {useRef} from "react";
import {Simulate} from "react-dom/test-utils";

export const TodoForm: React.FC = () => {
    const ref = useRef(null);
const keyPressHandler = (event:React.KeyboardEvent)=>{
    if(event.key==='Enter'){

    }

}
    return (
        <div className='input-field mt2'>
            <input
                type="text"
                id='title'
                placeholder='Введите название дела'
                ref={ref}
                onKeyPress={keyPressHandler}

            />
            <label htmlFor='title' className='active'>
                Введите название дела
            </label>

        </div>
    )
}
