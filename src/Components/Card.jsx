import React from 'react'

const Card = ({ word, key }) => {

    return (
        <div key={key} className="bg-white mb-10 p-6 rounded-lg box-shadow" >
            <h2 className="font-bold text-2xl">{word.word}</h2>
            {
                word.phonetics?.map((aud, idx) => (
                    <div key={idx} className="mb-4">
                        <p>{aud.text}</p>
                        <audio controls>
                            <source src={aud.audio} type={
                                aud.audio?.slice(-3) === "mp3" ? "audio/mpeg" : "audio/ogg"
                            }></source>
                        </audio>
                    </div>
                ))
            }
                <p>{word.phonetic}</p>
            {
                word.meanings?.map((mean) => (
                    <div className="mb-4">
                        <h3 className="font-bold text-lg">{mean.partOfSpeech}</h3>
                        {
                            mean.definitions?.map((dif) => (
                                <p>{dif.definition}</p>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Card
