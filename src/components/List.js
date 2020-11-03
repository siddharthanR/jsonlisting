import React from 'react'

class Button extends React.Component {
    render() {
        const list = this.props.value
        return(
        <div>
            <ul>
                {list.map ? list.map((data, index) => (
                    <li key={index}>{data.name}</li>
                )) : null}
            </ul>
        </div>
        )
    }
}

export default Button;