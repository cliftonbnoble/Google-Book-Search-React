import React from 'react';
import "./style.css"

function Save(props) {

        return <button className="save-btn btn-primary btn-lg" onClick={() => props.saveBook(props)}>Save</button>
}

export default Save;