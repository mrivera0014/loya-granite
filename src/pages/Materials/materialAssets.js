
import graniteImg from '../../Components/Modal/assets/granite-texture-blue.jpg';
import marbleImg from '../../Components/Modal/assets/marble-texture-white.jpg';
import quartziteImg from '../../Components/Modal/assets/quartzite-texture-yellow.jpg';
import quartzImg from '../../Components/Modal/assets/quartz-texture-yellow.jpg';


 export let idealList = [" Bathrooms"," Walls"," Fireplaces"," Kitchens"," Grills"," Outside Countertops"];


export const materials =[
    {
    itemCoverExample: graniteImg,
    itemName:"Granite",
    itemDesc:"Natural Stone",
    itemMaintenance:"Medium maintenance required",
    itemSealRequirement:" Sealer required Recommended once every six months",
    itemIdeal: ` Ideal for ${[idealList[0],idealList[2], idealList[3],idealList[4]]} and ${[idealList[5]]} `,
    // itemIdeal: " Ideal for kitchen, bathrooms and fireplaces ",

    itemOutsideCapability:" Weather resistent" ,
    itemValueDesc:"  Prices vary on the highest grade of granite design and color",
    itemValue:"Average slab cost $1,500.00"
    },
    {
        itemCoverExample:marbleImg,
        itemName:"Marble",
        itemDesc:"Natural Stone ",
        itemMaintenance:" High maintenance required  " ,
        itemSealRequirement: "Sealer required (Recommended once every six months) " ,
        itemIdeal: `Ideal for ${[idealList[0],idealList[1]]} and ${[idealList[2]]}. (Not recommended for kitchens)  `, 
        itemOutsideCapability:"  Not ideal for outside projects.  ", 
        itemValueDesc:"  Marble prices are one of the highest natural stones available.",
        itemValue:" Average slab cost $2,200.00 "
    },
    
{
    itemCoverExample:quartziteImg,
    itemName:"Quartzite", 
    itemDesc: "Natural Stone",
    itemSealRequirement:"Sealer required (Recommended once every six months.)",
    itemMaintenance:"Medium maintenance required",
    itemIdeal: ` Ideal for ${[idealList[0],idealList[2], idealList[3],idealList[4]]} and ${[idealList[5]]} `,

    itemOutsideCapability:" Weather resistent" ,

    itemValueDesc:"Prices on quartzite are some of the highest of natural stone",
    itemValue:"Average slab cost $2,300.00"
   },
   {
    itemName:"Quartz",
    itemCoverExample:quartzImg,
    itemDesc:"Laboratory fabricated",
    itemSealRequirement:"No sealer required",
    itemMaintenance:"Low maintenance required (regular cleaner will do)",
    // itemIdeal:`Ideal for bathrooms, walls, and kitchens. (Not ideal for fireplaces)`,
    itemIdeal:`Ideal for ${[idealList[0],idealList[1]]} and ${[idealList[3]]} (Not ideal for fireplaces)`,
    itemOutsideCapability:"Not Ideal for outside projects. Not weather resistant.",
    itemValueDesc: "Prices on quartz are very flexible depending on the brand or design.",
    itemValue:"Average Slab cost $1,300.00" }    
]

