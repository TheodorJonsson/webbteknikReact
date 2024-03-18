import React from "react";

class Footer extends React.Component{
    render(){
        return(
        <footer>
            <ul class="contact" >
                <li>Bryggargatan 46, Umeå</li>
                <li>090 - 13  20 15</li>
            </ul>
            <ul class="hours" >
                <li>Mån-Fre 11.00 - 20.00</li>
                <li>Lör-Sön 12.00 - 20.00</li>
                </ul>
            </footer> 
            );
    }
}


export default Footer;