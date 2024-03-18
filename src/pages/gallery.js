import React from "react"

class Gallery extends React.Component{
    render(){
        return(
            <body id="mainframe">
            <h4>Galleri</h4>
            <div class="gridcontainer">
                    <div class="myiframe">
                        <iframe width="560" height="315" 
                        src="https://www.youtube.com/embed/T3AHBe0I0yc?si=gMY3sp28nRj4dtS4" 
                        title="YouTube video player" allow="accelerometer; autoplay; 
                        clipboard-write; encrypted-media; 
                        gyroscope; picture-in-picture; 
                        web-share" 
                        allowfullscreen>
                    </iframe>
                    </div>
                </div>
                <div class="griditem">
                </div>
                <div class="griditem">
                </div>
                </body>
        )
    }
}

export default Gallery;