import { Box, Modal } from "@mui/material";

export default function ProductModal ({open, callback, style} : any, {children} : React.PropsWithChildren)
{
    return (
        <Modal
            open={open}
            onClose={callback}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
            {children}
            </Box>
        </Modal>
    );
}