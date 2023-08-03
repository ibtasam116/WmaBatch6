import React from 'react'
import Cards_Header from '../../components/cards_header/Cards_Header'
import Happy_Menu_Card from '../../components/happy_menu_card/Happy_Menu_Card'

import deals4 from "../../assets/images/deals/4.jpg"
import deals5 from "../../assets/images/deals/5.jpg"
import deals6 from "../../assets/images/deals/6.jpg"

export default function Happy_Menu() {
    return (
        <>
            <div id="menu" className="py-5">
                <div className="container">
                    <Cards_Header
                        heading="Our Happy Menu"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Perspiciatis fugiat eos perferendis ex, doloribus ratione saepe cumque 
                    dolore culpa aperiam voluptate quis, recusandae." />

                    <div className="row">
                        <Happy_Menu_Card imgSrc={deals4} title="Rango Tango" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis." />
                        <Happy_Menu_Card imgSrc={deals5} title="Burgizza Grill" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis." />
                        <Happy_Menu_Card imgSrc={deals6} title="Crunchy Zinger Burger" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis." />
                    </div>
                </div>
            </div>
        </>
    )
}
