import React from 'react'

export default function Translation({ result }) {
    console.log(result)
    return (
        <div>{result.length > 0 ? result : ""}</div>
    )
}