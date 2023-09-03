import React from 'react';
import Card from './Card';


const DisplayWord = ({ data }) => {

    console.log("data in display", data)
    return (
        <div className="p-4 mb-4">
            {
                data?.map((word, idx) => (
                    <Card word={word} key={idx} />
                ))
            }
        </div>
    )
}

export default DisplayWord
