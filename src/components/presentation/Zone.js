import React from 'react';
import styles from '../styles'
class Zone extends React.Component{
    render() {
        return (
        <div>

                <a href="#" className="h3" style={styles.container}>{this.props.curntzone.name}</a>
             <h5>12001</h5>


            <h5>comments</h5>

        </div>
        )
    }
}
export default Zone;
