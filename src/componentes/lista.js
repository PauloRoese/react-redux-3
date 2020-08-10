import React, { useState } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

// import { Container } from './styles';

import * as actions from '../Acitons/actionList';

function Lista(props) {

    const { addItem, removeItem, itens } = props;

    const [text, setText] = useState('')

    const onChangeText = (ev) => {
        setText(ev.target.value);
    }
    const addList = (ev, text) => {
        addItem(text);
        setText('');
        console.log(props)
    }

    const removeItemList = (ev, id) => {
        removeItem(id);
    }
    return (
        <div>
            <ul>
                {itens.map(item => (
                    <>
                        <li key={item.id}>
                            {item.text}
                        </li>
                        <button
                            onClick={(ev) => removeItemList(ev, item.id)}
                        >excluir</button>
                    </>
                ))}
            </ul>

            <input
                type="text"
                value={text}
                onChange={(ev) => onChangeText(ev)}
            />
            <button
                onClick={(ev) => addList(ev, text)}
            >adciona lista</button>
        </div>
    );
}

const mapStateToProps = state => ({
    itens: state
})

const mapDispatchToProps = dispatch => (
    bindActionCreators(actions, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Lista);