
// import { useDispatch, useSelector } from "react-redux";
// import { getPortions } from "../../redux/addWater/addWaterSelector"
// import { useEffect } from "react";
// import { getWaterPortionsThunk } from "../../redux/addWater/addWaterOperations";
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { StyledAddWaterListContainer, StyledAddWaterListFrame, StyledAddWaterMainContainer, StyledListHeader } from './StyledaddWaterList'
export const AddWaterList = ()=>{
//  const dispatch = useDispatch();
//  const {portions, isLoading, error} = useSelector(getPortions);
// useEffect(()=>{
// dispatch(getWaterPortionsThunk())
// })
// if (!portions || portions.length === 0 ) return;
// const portionsListItem = portions.map((portion)=>{
//     return(
//         <li key={portion.id}>
//             {portion.amount}{portion.time}
//         </li>
//     )
// })
const PortionsListItem = ()=>{
    return(
        <li>
     <time></time>
     <p>200ml</p>
               </li>
    )
}
const PortionsList = ()=>{
    return(
        // {portions.length>0? portionsListItem :null}
        <ul> <PortionsListItem/></ul>
    )
}

    return (
        <StyledAddWaterMainContainer>
            <StyledAddWaterListContainer>
            {/* {error && <b>{error}</b>} */}
            <StyledListHeader>Today</StyledListHeader>
            <StyledAddWaterListFrame>
           
      <PortionsList/>
      </StyledAddWaterListFrame>
      </StyledAddWaterListContainer>
      </StyledAddWaterMainContainer>
        
    )
}
// portions:[
//     {id:"", amount:"", date:"", time:"" },
//     {id:"", amount:"", date:"", time:"" },
//     {id:"", amount:"", date:"", time:"" }
// ]