import React from 'react';

function MassageBox(props) {
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
            {props.children}
        </div>
    );
}

export default MassageBox;