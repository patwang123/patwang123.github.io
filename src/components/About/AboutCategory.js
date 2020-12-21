import React from 'react';

export default class AboutCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const {
            category,
            list_items} = this.props;
        return (
            <div>
                <h5 className='profile-subtitle'>{category}</h5>
                <ul className='profile-list'>
                    {
                        list_items.map((item,idx) => {return <li key={`About-${category}-${idx}`}>{item}</li>})
                    }
                </ul>
            </div>
        )
    }
}