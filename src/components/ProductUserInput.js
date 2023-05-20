import React, { useState, useEffect } from "react"
import styles from "../css/ProductUserForms.css"
import { useTranslation } from 'react-i18next'
import LoadingButton from "./LoadingButton"

export default function ProductUserInput() {
    const [topInput, setTopInput] = useState('')
    const [midInput, setMidInput] = useState('')
    const [lowInput, setLowInput] = useState('Neutral')
    const [situationCheck, setSituationCheck] = useState(false)
    const [psichologyCheck, setPsichologyCheck] = useState(false)
    const [planCheck, setPlanCheck] = useState(false)

    const { t } = useTranslation('translation', { keyPrefix: 'Product' });

    const [loading, setLoading] = useState(false)

    return (
        <div className="create">
            <h2>{t('Title')}</h2>
            <from>
                <label>{t('Motive.Title')}</label>
                <input
                    type="text"
                    placeholder={t('Motive.Hint')}
                    required
                    onChange={(e) => setTopInput(e.target.value)}
                />
                <label>{t('Clue.Title')}</label>
                <textarea
                    required
                    placeholder={t('Clue.Hint')}
                    onChange={(e) => setMidInput(e.target.value)}
                />
                <label>{t('Strictness.Title')}</label>
                <select
                    onChange={(e) => setLowInput(e.target.value)}
                >
                    <option value="Neutral">{t('Strictness.Option1')}</option>
                    <option value="Strict">{t('Strictness.Option2')}</option>
                    <option value="Friendly">{t('Strictness.Option3')}</option>
                </select>
                <label>{t('Info.Title')}</label>
                <div className="checkbox-grid">
                    <label className="container">{t('Info.Solutions')}
                        <input
                            type="checkbox"
                            onChange={(e) => setSituationCheck(!situationCheck)}
                        />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">{t('Info.Suggestion')}
                        <input
                            type="checkbox"
                            onChange={(e) => setPsichologyCheck(!psichologyCheck)}
                        />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">{t('Info.Plan')}
                        <input
                            type="checkbox"
                            onChange={(e) => setPlanCheck(!planCheck)}
                        />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <LoadingButton loading={loading} onClick={() => {
                    setLoading(true)


                    fetch('https://jsonplaceholder.typicode.com/todos/1')
                        .then(response => response.json())
                        .then(json => console.log(json))


                    /* Time taken by API to send data */
                    setTimeout(() => {
                        setLoading(false)
                    }, 2000)
                }} />
            </from>
        </div>
    )
}