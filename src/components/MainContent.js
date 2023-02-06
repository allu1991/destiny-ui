import React, { useRef, useEffect } from 'react'
import Parallax from 'parallax-js'
import EquipmentItem from './EquipmentItem'
import backgroundEmblem from '../images/bg-emblem.svg';
import placeholderCharacter from '../images/placeholder-character.webp';
import equipmentHelmet from '../images/item_e_solstice_mask.webp';
import equipmentGauntlets from '../images/item_e_antiextinction_grasps.webp';
import equipmentChest from '../images/item_e_ophidia_spathe.webp';
import equipmentLegs from '../images/item_e_solstice_strides.webp';
import equipmentCloak from '../images/item_e_scorched_hunter_cloak.webp';
import weaponRocket from '../images/item_w_deathbringer.webp';
import weaponFusionRifle from '../images/item_w_bastion.webp';
import weaponSubmachineGun from '../images/item_w_coldfront.webp';
import weaponSword from '../images/item_w_nasreddin.webp';


const MainContent = () => {

    const weaponItems = [
        {
            title: "Deathbringer",
            category: "Rocket launcher",
            rarity: 1,
            image: weaponRocket,
            mainStatValue: 280,
            mainStatTitle: "Attack",
            description: "Sing them a lullaby of death and nothing more.",
            stats: [
                {title: "Explosion radius", value: "+12"}
            ],
            perks: ["Fires remotely detonated projectiles that drop Void orbs on combatants"],
            otherOptions: [weaponRocket, weaponRocket, weaponRocket, weaponFusionRifle, weaponSword]
        },
        {
            title: "Bastion",
            category: "Fusion rifle",
            rarity: 1,
            image: weaponFusionRifle,
            mainStatValue: 128,
            mainStatTitle: "Attack",
            description: "\"The final stand is wherever I plant my feet. Not one step more.\" —Saint-14",
            stats: [
                {title: "Precision", value: "+5"},
                {title: "Strength", value: "+9"}
            ],
            perks: ["Charge to fire 3 spreads of Kinetic slugs.", "This weapon fires staggering projectiles. Strong against Unstoppable Champions"],
            otherOptions: [weaponFusionRifle, weaponFusionRifle, weaponSubmachineGun, weaponSword]
        },
        {
            title: "Cold front",
            category: "Submachine gun",
            rarity: 2,
            image: weaponSubmachineGun,
            mainStatValue: 88,
            mainStatTitle: "Attack",
            description: "Sweep in like a force of nature. Leave destruction in your wake.",
            stats: [
                {title: "Precision", value: "+4"},
                {title: "Mobility", value: "+2"}
            ],
            perks: [],
            otherOptions: [weaponSubmachineGun, weaponFusionRifle, weaponFusionRifle]
        },
        {
            title: "Nasreddin",
            category: "Sword",
            rarity: 4,
            image: weaponSword,
            mainStatValue: 115,
            mainStatTitle: "Attack",
            description: "This weapon was forged by Devrim Kay VIII for the survivors.",
            stats: [
                {title: "Mobility", value: "+6"}
            ],
            perks: ["Heavy attacks are stronger with full energy"],
            otherOptions: [weaponSword, weaponSword, weaponSword]
        },
    ]





    const equipmentItems = [
        {
            title: "Solstice mask",
            category: "Helmet",
            rarity: 3,
            image: equipmentHelmet,
            mainStatValue: 33,
            mainStatTitle: "Defence",
            description: "Complete the Chosen Redux mission, defeat enemies with Void Energy weapons, and complete a Nightfall.",
            stats: [
                {title: "Revovery", value: "+7"}
            ],
            perks: ["Improved recovery"],
            otherOptions: [equipmentHelmet, equipmentHelmet, equipmentGauntlets, equipmentChest]
        },
        {
            title: "Anti-extinction grasps",
            category: "Gauntlets",
            rarity: 2,
            image: equipmentGauntlets,
            mainStatValue: 7,
            mainStatTitle: "Defence",
            description: "\"As birds are touched by a sudden and invisible instinct to fly to safer ground, so are we.\" —The Book of Departures, Canto VII",
            stats: [
                {title: "Resilience", value: "+6"}
            ],
            perks: ["Improved resilience"],
            otherOptions: [equipmentGauntlets, equipmentLegs]
        },
        {
            title: "Ophidia spathe",
            category: "Chest armor",
            rarity: 1,
            image: equipmentChest,
            mainStatValue: 54,
            mainStatTitle: "Defence",
            description: "Listen carefully when the serpent speaks, for its tongue is forked, and its words have two meanings.",
            stats: [
                {title: "Discipline", value: "+10"},
                {title: "Strength", value: "+7"},
                {title: "Recovery", value: "+5"}
            ],
            perks: ["Grants two knives per charge"],
            otherOptions: [equipmentChest, equipmentChest, equipmentChest, equipmentGauntlets, equipmentLegs, equipmentHelmet]
        },
        {
            title: "Solstice strides",
            category: "Leg armor",
            rarity: 4,
            image: equipmentLegs,
            mainStatValue: 19,
            mainStatTitle: "Defence",
            description: "Complete public events on Nessus, complete Solstice bounties, and defeat opposing Guardians in the Crucible or Gambit.",
            stats: [
                {title: "Recovery", value: "+2"},
                {title: "Mobility", value: "+4"}
            ],
            perks: ["Improved recovery"],
            otherOptions: [equipmentLegs, equipmentLegs, equipmentGauntlets]
        },
        {
            title: "Scorched hunter cloak",
            category: "Hunter cloak",
            rarity: 5,
            image: equipmentCloak,
            mainStatValue: 7,
            mainStatTitle: "Defence",
            description: "Before, you wouldn't have been caught dead with a tattered cloak. But that was before.",
            stats: [
                {title: "Mobility", value: "+1"},
            ],
            perks: [],
            otherOptions: [equipmentCloak, equipmentCloak, equipmentGauntlets]
        },
    ]




    // Define DOM element ref
    const mainContent = useRef(null);

    useEffect(() => {

        // Initialize parallaxJS
        const parallaxInstance = new Parallax(mainContent.current, {
            relativeInput: true,
            //hoverOnly: true,
            pointerEvents: true,
            selector: ".parallax-elem"
        })
    
        parallaxInstance.enable();


    
        return () => parallaxInstance.disable();
    }, [])


    return (
        
        <div className='main-content' ref={mainContent}>

            <div className='main-content-wrapper'>

                <div data-depth="0.1" className='main-content-bg-emblem parallax-elem'>
                    <img src={backgroundEmblem} alt="" />
                </div>

                <div data-depth="0.3" className='character-container parallax-elem'>
                    <img src={placeholderCharacter} alt="Character" width={800} height={750} />
                </div>

                <div data-depth="0.8" className='content-columns parallax-elem'>

                    <div className='content-columns-container'>

                        <div className='content-column content-column-left'>

                            {weaponItems.map( (weapon, index) => 
                                <EquipmentItem 
                                    key={weapon.title + index}
                                    title={weapon.title}
                                    category={weapon.category}
                                    rarity={weapon.rarity}
                                    image={weapon.image}
                                    mainStatValue={weapon.mainStatValue}
                                    mainStatTitle={weapon.mainStatTitle}
                                    description={weapon.description}
                                    stats={weapon.stats}
                                    perks={weapon.perks}
                                    otherOptions={weapon.otherOptions}
                                />
                            )}
                        </div>

                        <div className='content-column content-column-right'>
                            
                            {equipmentItems.map( (equipment, index) => 
                                <EquipmentItem 
                                    key={equipment.title + index}
                                    title={equipment.title}
                                    category={equipment.category}
                                    rarity={equipment.rarity}
                                    image={equipment.image}
                                    mainStatValue={equipment.mainStatValue}
                                    mainStatTitle={equipment.mainStatTitle}
                                    description={equipment.description}
                                    stats={equipment.stats}
                                    perks={equipment.perks}
                                    otherOptions={equipment.otherOptions}
                                />
                            )}

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default MainContent