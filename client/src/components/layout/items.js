import React, {Component} from 'react';
import uuid from 'uuid';

class items extends Component{
    state = {
        items: [
            {id:uuid(), name: 'water'},
            {id:uuid(), name: 'eggs'}
        ]
    }
    render(){
        const {items}= this.state;
        return(
            <div>
                <button OnClick={()=>{
                    const name= prompt("nom");
                    this.setState(state => ({
                        Items:[...state.items,{id:uuid(),name}]
                    }))
                }}
                    >
                        ajouter
                        </button>
            </div>
        )
    }
}

export default items;