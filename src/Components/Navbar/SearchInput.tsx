"use client"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import {IoIosSearch} from 'react-icons/io'
import { useRouter } from 'next/navigation';
// import DirectionsIcon from '@mui/icons-material/Directions';
// 
export default function SearchInput({sx,mobile,handleSubmit,newValue}:{newValue?:string,mobile?:boolean,sx?:any,handleSubmit?:any}) {
  const router = useRouter()
  
  const [value,
    setValue] = React.useState(newValue ? newValue : '');
    const handleSearch = (e : React.FormEvent < HTMLFormElement >) => {
        e.preventDefault()
        console.log('q: ', value);
        // if (value.length > 2) {
            router.push(`/collection/products?limit=80&search=${value}`)
        // }
    }
 
  return (
    <Paper
    onSubmit={(e)=>handleSubmit ? handleSubmit(true) : handleSearch(e)}
      component="form"
      className='searchinput bg'
      sx={{
        py:'.25em',
        mx:1,
        // my:'.25em',
        mb: mobile ? '.25em' : '0',
        px:'.25em',
        // mb:'.5em',
        flex:1,
        flexBasis:'100%',
        boxShadow:'none',
        border:'1px solid #00000036',
        borderRadius:'4000px',
        
        //  display: mobile ? {xs:'flex',md:'none'} : {xs:'none',md:'flex'},
         display:'flex',
         alignItems: 'center',maxWidth:{xs:'fit-content',md:'500px',lg:'60%'}
         ,...sx
        }}
    >
   
      <InputBase
      className='bg'
      value={`${value}`}
      onChange={(e)=>{ 
        
        setValue && setValue(`${e.target.value as string}`)}}
        sx={{
          display: 'flex',
          ml: 1,w:'max-content',minWidth:'150px',
           flex: 1 }}
        placeholder="Search Anything"
        inputProps={{ 'aria-label': 'search products' }}
      />
      <IconButton
       
      type="submit" className='searchIcon   trans' sx={{borderRadius:0,p: '5px' }} aria-label="search">
        <IoIosSearch />
      </IconButton>
     
    </Paper>
  );
}