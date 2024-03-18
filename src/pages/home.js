import React, {useState} from "react"

class Home extends React.Component {
    render(){
        return <body id="mainframe">
        <AnimatedHeading />
        <button id="make-transparent-btn" class="button">Show background</button>
        <div class="gridcontainer">
            <div class="griditem">
                <table>
                    <tr>
                        <td>Lunch</td>
                        <td>100kr</td>
                    </tr>
                    <tr>
                        <td>Mån - Fre</td>
                        <td>Kl. 11.00-14.00</td>
                    </tr>
                    <tr>
                        <td>Välj valfri rätt från hela menyn</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Ingår:</td>
                        <td>Dricka, Kaffe, Bröd & Smör</td>
                    </tr>
                    <tr>
                        <td>Extra stor pizza kortar</td>
                        <td>70 kr extra</td>
                    </tr>
                    <tr>
                        <td>Glutenfri pizzabotten kostar</td>
                        <td>30 kr extra</td>
                    </tr>
                    <tr>
                        <td>Barnpizzor</td>
                        <td>10 kr billigare än originalpri</td>
                    </tr>
                </table>
                
            </div>
            <div class="griditem">
                <table>
                    <tr>
                        <td>Dagens erbjudande 2 för</td>
                        <td>180kr</td>
                    </tr>
                    <tr>
                        <td>Mån - Fre</td>
                        <td>Kl. 14.00-20.00</td>
                    </tr>
                    <tr>
                        <td>Välj valfritt 2 pizzor bland nummer 1-8</td>
                        <td></td>
                    </tr>
                </table>
                <h2> OBS! allergisk eller överkänsligt, kontakta gärna restaurangpersonalen</h2>
            </div>/
        </div>
        </body>
    }
}
function AnimatedHeading(){
    const [isMoved, setIsMoved] = useState(false);

    function handleHeadingClick(){
        setIsMoved(!isMoved);
    }

    return (
        <h4 id="animated-heading" onClick={handleHeadingClick} style={{
            marginLeft: isMoved ? "10%" : "25%",
            marginRight: isMoved ? "10%" : "25%",
            fontSize: isMoved ? "10vw" : "5vw"
        }}>
            Tegs Pizzeria
        </h4>
    )
}

export default Home;