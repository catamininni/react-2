import React from 'react';


const ZeroInitialSelected = () => {
    return (  
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="danger">Add Items (0)</Button>
      </OverlayTrigger>
    );
}
 
export default ZeroInitialSelected;