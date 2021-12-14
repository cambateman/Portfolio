import react from "react"

import SUKI from '../assets/SUKI.png'

import Card from '../Components/Card'
import Card1 from '../Components/Card1'


function Test() {
    return (
        <div>
            <Card />

            <Card1
            frontTitle="SUKI"
            img={SUKI}
            backTitle="SUKI"
            backInformation="blah blah blah"
            bullets="stuff"
            />
        </div>
    )
}

export default Test