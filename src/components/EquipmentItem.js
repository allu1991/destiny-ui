import React from 'react'

const EquipmentItem = (props) => {



    let rarityString = (
        props.rarity === 1 ? "exotic" :
        props.rarity === 2 ? "legendary" :
        props.rarity === 3 ? "rare" :
        props.rarity === 4 ? "uncommon" :
        "common"
    );

    return (
        <div className={`equipment-item equipment-item-${rarityString}`}>

            <div className='item-info'>
                <div className='item-info-container'>
                    <div className='item-info-header'>
                        <h3>{props.title}</h3>
                        <p className='item-info-header-category'>{props.category}</p>
                        <p className='item-info-header-rarity'>{rarityString.charAt(0).toUpperCase() + rarityString.slice(1)}</p>
                    </div>
                    <div className='item-info-content'>
                        <h3>{props.mainStatValue}<span>{props.mainStatTitle}</span></h3>
                        <p className='item-info-content-description small-paragraph'>{props.description}</p>

                        {props.stats && (
                            <ul className='item-info-content-stats'>
                                {props.stats.map( (stat, i) => 
                                    <li key={i}><p>{stat.title}<span>{stat.value}</span></p></li>
                                )}
                            </ul>
                        )}

                        {props.perks && (
                            <div className='item-info-content-perks'>
                                {props.perks.map( (perk, i) => 
                                    <p key={i} className="small-paragraph">{perk}</p>
                                )}
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>

            <div className='item-image'>
                <img src={props.image} alt="equipment" width={100} height={100} />
            </div>

            {props.otherOptions && (
                <div className='item-other-options'>
                    {props.otherOptions.map( (option, i) => 
                        <div key={i} className='other-option'>
                            <img src={option} alt="" width={30} height={30} />
                        </div>
                    )}
                </div>
            )}
            
        </div>
    )
}

export default EquipmentItem