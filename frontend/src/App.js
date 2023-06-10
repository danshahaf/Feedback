import { useState } from "react";

import "./styles/sidebar.css";

const Canvas = (props) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <Canvas>
      <Menu />
      <Section open={open}> 
        <div className="Header">
          
          <Icon onClick={onOpen} />
          <div className="logo-wrapper" onClick={onOpen} >
            <img src="./attachments/logo/3.png" alt="Logo" className="centered-image" />
          </div>
          
        </div>

        <Main>

        </Main>
      </Section>

      <Backdrop open={open} onClick={onClose} /> 
    </Canvas>
  );
};
export default Canvas;
