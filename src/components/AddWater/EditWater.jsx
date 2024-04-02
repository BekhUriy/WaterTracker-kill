import { Overlay, StyledCounter, StyledModal, StyledModalHeader } from "./StyledEditWater";

export const EditWaterModal = ()=>{

    return (
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
{/* <Form> */}


<p>Recording time:</p>
Enter the value of the water used:
{/* </Form> */}
     </StyledModal>
   </Overlay>
 );
}

