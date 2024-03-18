import React from "react"

class Menu extends React.Component{
    render(){
        return(
            <body id="mainframe">
            <h4>Vår Meny</h4>
            <div class="container">
                <h2>Pizza</h2>
                    <table> 
                        <tr>
                            <td>1. Margarita</td>
                            <td>Skinka</td>
                            <td>85 SEK</td>
                        </tr>
                        <tr>
                            <td>2. Vesuvio</td>
                            <td>Skinka, färska champinjoner</td>
                            <td>95 SEK</td>
                        </tr>
                        <tr>
                            <td>3. Capricciosa</td>
                            <td>Skinka, oliver, ananas, salami, paprika, lök</td>
                            <td>95 SEK</td>
                        </tr>
                    </table> 
                <h2>Ostkant Pizzor</h2>
                    <table>
                        <tr>
                            <td>33</td>
                            <td>Ostkant nr 1</td>
                            <td>Skinka, salami, Arbyás</td>
                            <td>130 SEK</td>
                          </tr>
                          <tr>
                            <td>34</td>
                            <td>Ostkant nr 2</td>
                            <td>Bacon, lök, ägg, salumi</td>
                            <td>130 SEK</td>
                          </tr>
                          <tr>
                            <td>35</td>
                            <td>Ostkant nr 3</td>
                            <td>Oxfilé, champinjoner, lök, färska tomater, bearnaisesås</td>
                            <td>130 SEK</td>
                          </tr>
                          <tr>
                            <td>36</td>
                            <td>Ostkant nr 4</td>
                            <td>Kyckling, färska champinjoner, smörsås</td>
                            <td>130 SEK</td>
                          </tr>
                          <tr>
                            <td>37</td>
                            <td>Ostkant nr 5</td>
                            <td>Kebab, lök, färska tomater, pepperoni, kebabsås</td>
                            <td>130 SEK</td>
                          </tr>
                    </table>
                    <h2>Sallader</h2>
                    <table>
                        <tr>
                            <td>38</td>
                            <td>Kycklingsallad</td>
                            <td>Kyckling, isbergssallad, tomat, lök, paprika, vitlöksadressing</td>
                            <td>100 SEK</td>
                          </tr>
                          <tr>
                            <td>39</td>
                            <td>Kebabsallad</td>
                            <td>Kebab, isbergssallad, tomat, gurka, lök, pepperoni, kebabsås</td>
                            <td>100 SEK</td>
                          </tr>
                    </table>
                    <h2>Hamburgarmeny</h2>
                    <table>
                        <tr>
                            <td>41</td>
                            <td>Original</td>
                            <td>Hamburgare, ost, lök, tomat, sallad</td>
                            <td>90 SEK</td>
                          </tr>
                          <tr>
                            <td>42</td>
                            <td>Deluxe</td>
                            <td>Hamburgare, ost, bacon, lök, tomat, sallad</td>
                            <td>100 SEK</td>
                          </tr>
                          <tr>
                            <td>43</td>
                            <td>Baconcheeseburgare</td>
                            <td>Hamburgare, bacon, ost, lök, tomat, sallad</td>
                            <td>110 SEK</td>
                          </tr>
                          <tr>
                            <td>44</td>
                            <td>Cheeseburger med extra ost</td>
                            <td>Hamburgare, extra ost, lök, tomat, sallad</td>
                            <td>120 SEK</td>
                          </tr>
                          <tr>
                            <td>45</td>
                            <td>Kycklingburgare</td>
                            <td>Kycklingburgare, ost, lök, tomat, sallad</td>
                            <td>95 SEK</td>
                          </tr>
                    </table>
                    <h2>Rullpizzor</h2>
                    <table>
                        <tr>
                            <td>46</td>
                            <td>KEBABRULLE</td>
                            <td>Kebab, ost, isbergstallad, tomat, gurka, likörsås</td>
                            <td>105 SEK</td>
                          </tr>
                          <tr>
                            <td>47</td>
                            <td>SUPERKEBABRULLE</td>
                            <td>Kebab, ost, tomater, pepperoni, kebabsås</td>
                            <td>120 SEK</td>
                          </tr>
                          <tr>
                            <td>48</td>
                            <td>GYROSRULLE</td>
                            <td>Gyroskébab, tomat, lök, vitlöksdressing</td>
                            <td>105 SEK</td>
                          </tr>
                          <tr>
                            <td>49</td>
                            <td>KYCKLINGRULLE</td>
                            <td>Kyckling, dressing</td>
                            <td>105 SEK</td>
                          </tr>
                          <tr>
                            <td>50</td>
                            <td>FALAFELRULLE</td>
                            <td>Falafel, lök, tomater, sallad, dressing</td>
                            <td>105 SEK</td>
                          </tr>
                    </table>
                    <h2>Inbakade Pizzor</h2>
                    <table>
                        <tr>
                            <td>51</td>
                            <td>Vulkanpizza</td>
                            <td>Oxfilé, skinka, salami, bacon, kyckling, gyros, strips, grönsaker, dressing</td>
                            <td>95</td>
                            </tr>
                    </table>
                    <h2>Amerikanska Pizzor</h2>
                    <table>
                        <tr>
                            <td>62</td>
                            <td>Chicago Style Deep Dish</td>
                            <td>Ost, skinka, pepperoni, tomatsås</td>
                            <td>140 SEK</td>
                          </tr>
                          <tr>
                            <td>63</td>
                            <td>New York Style Thin Crust</td>
                            <td>Ost, skinka, pepperoni, tomatsås</td>
                            <td>125 SEK</td>
                          </tr>
                          <tr>
                            <td>64</td>
                            <td>California Style Deep Dish Vegetarisk</td>
                            <td>Ost, grönsaker, tomatsås</td>
                            <td>135 SEK</td>
                          </tr>
                          <tr>
                            <td>65</td>
                            <td>California Style Thin Crust Vegetarisk</td>
                            <td>Ost, grönsaker, tomatsås</td>
                            <td>115 SEK</td>
                          </tr>
                          <tr>
                            <td>66</td>
                            <td>Texas Style BBQ Pizza</td>
                            <td>Ost, pulled pork, BBQ-sås, lök, paprika</td>
                            <td>135 SEK</td>
                          </tr>
                    </table>    
                </div>
                <div class="container">
                </div>s   
            
        </body>
        )
    }
}

export default Menu;