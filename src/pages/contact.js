import React from "react"

class Contact extends React.Component{
    render(){
        return(
            <body>        
                <h4>Kontakt</h4>
                <div class="container">
                <form id = "myForm">
                    <input type="text" id="name" placeholder="Your Name" required onfocus="myFocusFunction(event)" onblur="myBlurFunction(event)"></input>
                    <input type="email" id="email" placeholder="Email" required onfocus="myFocusFunction(event)" onblur="myBlurFunction(event)"></input>
                    <input type="text" id="phone" placeholder="Phone number" required onfocus="myFocusFunction(event)" onblur="myBlurFunction(event)"></input>
                    <textarea id="message" rows="4" placeholder="How can we be of assistance" required onfocus="myFocusFunction(event)" onblur="myBlurFunction(event)"></textarea>
                    <button>Send</button>
                </form>
            </div>
            </body>
        )
    }
}

export default Contact;