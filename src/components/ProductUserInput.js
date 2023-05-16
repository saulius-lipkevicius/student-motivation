import React, { useState } from "react"
import styles from "../css/ProductUserForms.css"
import { useTranslation } from 'react-i18next'

export default function ProductUserInput() {
    const [topInput, setTopInput] = useState('')
    const [midInput, setMidInput] = useState('')
    const [lowInput, setLowInput] = useState('')

    const { t } = useTranslation('translation', { keyPrefix: 'Product' });

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
                    <option value="Strict">{t('Strictness.Option1')}</option>
                    <option value="Neutral">{t('Strictness.Option2')}</option>
                    <option value="Friendly">{t('Strictness.Option3')}</option>
                </select>
                <label>{t('Info.Title')}</label>
                <div className="checkbox-grid">
                    <label className="container">{t('Info.Solutions')}
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">{t('Info.Suggestion')}
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">{t('Info.Plan')}
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <button>{t('Button')}</button>
            </from>
        </div>
    )
}