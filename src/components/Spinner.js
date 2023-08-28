import React from 'react';
import Ghost from './Ghost.gif'

class Spinner extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return <div className='text-center my-4'>
            <img src={Ghost} alt="Loading" />
        </div>;
    }
}

export default Spinner;