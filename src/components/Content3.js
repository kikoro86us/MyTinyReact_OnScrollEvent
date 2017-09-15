import React, { Component } from 'react';
import ryan from './../img/ryan.png'

class Content3 extends Component {
    render() {
        return (
            <div>
                <div className='content3containner'>
                    <div className='content3body'>
                            <img id='ryan' src={ryan} alt='ryan' />
                            <p id='content3p'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quod nostrum voluptatibus ducimus delectus, cumque adipisci atque unde, dicta esse voluptatum repellendus similique, in modi ipsa nobis aspernatur placeat ut!
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content3;