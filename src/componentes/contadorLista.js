import React from 'react';

import { connect } from 'react-redux';
// import { Container } from './styles';

function ContadorLista(props) {
    const { items } = props;
    return (
        <div>
            <h2> Quantidade de elementos da Lista {items.length}</h2>
        </div>
    );
}
const mapStateToProps = state => ({
    items: state
})
export default connect(mapStateToProps)(ContadorLista);