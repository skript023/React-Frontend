import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import MUIDataTable from "mui-datatables";
import React, {useEffect, useState} from 'react'
import Sidenav from "../../navigation/sidebar";
import AddCircleIcon from "@mui/icons-material/AddCircle"

import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import AddProduct from "./add";
import ProductModal from "./product_modal";
import EditProduct from "./edit";

export default function Product() 
{
    const [openAdd, setOpenAdd] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);

    const [products, setProduct] = useState([] as any)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users?_limit=12")
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
            .catch((err) => {
                console.log(err.message);
        });
    }, []);

    const handleEditClick = (index: number) => {
        console.log("Edit clicked for column index:", index);
        // Add your edit logic here using the index
    };
      
    const handleDeleteClick = (index: number) => {
        console.log("Delete clicked for column index:", index);
        // Add your delete logic here using the index
    };
    
    const columns = [
        { 
            name: "id", 
            label: "ID",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "name",
            label: "Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "phone",
            label: "Phone Number",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "email",
            label: "Email",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "cost",
            label: "Cost",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "date",
            label: "Date",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "id",
            label: "Action",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value: any, _tableMeta: any, _updateValue: any) => (
                    <Stack spacing={2} direction={"row"}>
                        <EditIcon style={{ fontSize: "20px", color: "blue", cursor: "pointer" }}
                        onClick={() => {handleEditClick(value); setOpenEdit(true)} }/>
                        <DeleteIcon style={{ fontSize: "20px", color: "darkred", cursor: "pointer" }}
                        onClick={() => handleDeleteClick(value) }/>
                    </Stack>
                ),
            },
        },
    ];

    const options = {
        onRowsDelete: (rowsDeleted: any) => {
            JSON.stringify(rowsDeleted)
            rowsDeleted.data.map((data : any) => {
                console.log(`${products[data.index].id}`)
            })
        },
    };

    return (
        <Box height={70}>
            <Box sx={{ display: "flex" }}>
                <Sidenav/>
                <Box component={"main"} sx={{ flexGrow: 1, p: 3, mt: 8 }}>
                    <Box m="20px">
                        <Grid container justifyContent="center">
                            <Typography variant="h4" component="div">
                                Products
                            </Typography>
                        </Grid>
                        <Box
                            m="40px 0 0 0"
                            height="75vh"
                            display={'contents'}
                        >
                            <Box height={10}/>
                            <Button variant="contained" endIcon={<AddCircleIcon/>} onClick={() => setOpenAdd(true)}>
                                Add
                            </Button>
                            <Box height={10}/>
                            <MUIDataTable title={""} data={products} columns={columns} options={options}/>
                        </Box>
                    </Box>
                    <ProductModal open={openAdd} callback={() => setOpenAdd(false)} children={<AddProduct/>}/>
                    <ProductModal open={openEdit} callback={() => setOpenEdit(false)} children={<EditProduct/>}/>
                </Box>
            </Box>
        </Box>
    );
};