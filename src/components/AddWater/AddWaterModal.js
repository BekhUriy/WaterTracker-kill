import { Overlay, StyledCounter, StyledModal, StyledModalHeader } from "./StyledEditWater"

export const AddWaterModal= ()=>{
return(
    <div>
        <Overlay >
     <StyledModal>
         <StyledModalHeader>
             <p>Edit the entered amount of water</p>
         <button type="button">x</button>
         </StyledModalHeader>
         <div>visualization</div>

<p>Correct entered data:</p>
<p>Amount of water:</p>
<StyledCounter>
<button type="button"></button>

<button type="button"></button>
</StyledCounter>
</StyledModal>
</Overlay>
    </div>
)
}