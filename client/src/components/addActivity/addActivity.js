import axios from 'axios';
import React, {useState} from 'react';
//import {Link} from 'react-router-dom';
import styles from './addActivity.module.css';

function AddActivity (props) {
    let {idPais} = props.match.params
    const [input,setInput] = useState({name:'',difficulty:0,duration:'',season:''});
    const [error,setError] = useState({difficulty:'',season:''});
    
    const handlerChange = (event) => {
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })
    }
    const handlerSubmit = async (event) => {
        event.preventDefault()
        let res = await axios.post(`http://localhost:4001/activity/${idPais}`,input);
        console.log('res :', res.data);
    }

    return(
        <div className={styles.page}>
            {console.log(props)}
            <form onSubmit={handlerSubmit} className={styles.container}>
                <h1>ADD ACTIVITY</h1>
                <label>Name of activity:
                    <input type='text' name='name' value={input.name} placeholder='Example: Sky' onChange={handlerChange}/>
                </label>
                <label>Difficulty:
                    <input type='number' name='difficulty' value={input.difficulty} placeholder='5' onChange={ (evento) => { 
                        if(evento.target.value < 6 && evento.target.value > 0) {
                            handlerChange(evento)
                        }else{
                            setError({
                                ...error,
                                [evento.target.name]: 'Definir dificultad entre 1 y 5'
                            })
                        }
                    } } />
                </label>
                <label>Duration:
                    <input type='text' name='duration' value={input.duration} placeholder='Dos horas' onChange={handlerChange}/>
                </label>
                <label>Season:
                    <input type='text' name='season'  value={input.season} placeholder='invierno' onChange={ handlerChange }/>
                </label>
                <input type='submit' name='agregar' value='ADD ACTIVITY' />
            </form>
        </div>
    )
}



export default AddActivity;