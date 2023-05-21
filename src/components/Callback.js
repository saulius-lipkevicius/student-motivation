import React from 'react'

export default function Translation({ result }) {
    console.log(result)
    return (
        <div>
            {result.length > 0 &&
                <textarea
                    className="text-area"
                    cols={50}
                    rows={15}
                    autoFocus
                >{result.length > 0 ? result : ""}</textarea>
            }
        </div>
    )
}