import { Autocomplete, Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {useEffect, useState} from 'react'
import Sidenav from "../../navigation/sidebar";
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import AddCircleIcon from "@mui/icons-material/AddCircle"

export default function Product() {
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
    
    const columns = [
    { 
        field: "id", 
        headerName: "ID" 
    },
    {
        field: "name",
        headerName: "Name",
        cellClassName: "name-column--cell",
        flex: 1
    },
    {
        field: "phone",
        headerName: "Phone Number",
        flex: 1
    },
    {
        field: "email",
        headerName: "Email",
        flex: 1
    },
    {
        field: "cost",
        headerName: "Cost",
        flex: 1,
        renderCell: (params : any) => (
            <Typography>
            ${params.row.cost}
            </Typography>
        ),
    },
    {
        field: "date",
        headerName: "Date",
        flex: 1
    },
    {
        field: "action",
        headerName: "Action",
        flex: 1,
        renderCell: () => (
            <Stack spacing={2} direction={"row"}>
                <EditIcon style={{ fontSize: "20px", color: "blue", cursor: "pointer" }}
                onClick={() => {}}/>
                <DeleteIcon style={{ fontSize: "20px", color: "darkred", cursor: "pointer" }}
                onClick={() => {}}/>
            </Stack>
        ),
    },
];

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
                            <Stack spacing={2} direction={"row"} className="my-2 mb-2">
                                <Autocomplete disablePortal
                                id="combo-search"
                                options={products}
                                sx={{ width: 300 }}
                                getOptionLabel={(products : any) => products.name}
                                renderInput={(params) => (<TextField {...params} size="small" label="Search"/>)}/>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                                <Button variant="contained" endIcon={<AddCircleIcon/>}>
                                    Add
                                </Button>
                            </Stack>
                            <Box height={10}/>
                            <DataGrid rows={products} columns={columns} sx={{ margin: "auto" }}/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};