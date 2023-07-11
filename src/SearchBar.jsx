import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import Product from './Product.jsx';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';



// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const api = "https://dummyjson.com/products/categories";

export default function FreeSolo() {

let categories = ["Smartphone"];
let prodList = [];
const [list,setList] = useState([categories]);
const [prod,setProd] = useState(prodList);

const getName = (evt) => {
    let catApi = 'https://dummyjson.com/products/category/';
    let selectedCategory = evt.target.value;
    let lmt = "?limit=0"
    catApi = catApi + selectedCategory + lmt;
    if(selectedCategory==''){
      let catApi = 'https://dummyjson.com/products/';
      async function fetchText2() {
          let response = await fetch(catApi);
          let data = await response.json();
          const {products} = data;
          // console.log(products);
          setProd([...products]);
      }
      fetchText2();
    }
    async function fetchText() {
        let response = await fetch(catApi);
        let data = await response.json();
        const {products} = data;
        // console.log(products);
        setProd([...products]);
    }
    fetchText();
}

useEffect(()=>{
    async function fetchText() {
        let response = await fetch(api);
        let data = await response.json();
        setList([...data]);
    }
    fetchText();
    let catApi = 'https://dummyjson.com/products/';
    async function fetchText2() {
        let response = await fetch(catApi);
        let data = await response.json();
        const {products} = data;
        // console.log(products);
        setProd([...products]);
    }
    fetchText2();
},[]);

  return (
<>
    <Stack spacing={4} sx={{ width: 500, m: 5 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={list.map((option) => option)}
        renderInput={(params) => (
          <TextField
            id={crypto.randomUUID()}
            {...params}
            label="I want to find ..."
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
            onSelect={getName}
          />
        )}
      />
    </Stack>
    

    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} 
      direction="row"
      justifyContent="center"
      alignItems="center">
    {prod.map((x)=>{
        return (
        
          <Grid id={x.id} item xs={2} md={3}>
            <Paper elevation={24} >
            <Product id={x.id} 
                title={x.title} 
                rating={x.rating} 
                prodImage={x.thumbnail}
                desc={x.description}
            />
            </Paper>
          </Grid>
    
        )
    })}
    </Grid> 
    </Box>
  

</>
  );
}

//Array :
// const list = [];