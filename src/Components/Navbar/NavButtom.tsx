"use client"
import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import MenuHover from './MenuHover'
// import MenuHover from './MenuHover'





const NavButtom = () => {

  return (
    <Box
        className=' wrap  space-evenly'
        sx={{
            flex:1,
            position:'relative',
        // width: '100%',
        mx: 0,
        display : {xs:'none',md:'flex'}
    }}>
        <Container
            className='flex   '
            sx={{
            justifyContent: 'flex-start',
            maxWidth: 'lg',
            overflow:'hidden',
            py:1.5,

        }}>
{/* <Link className=' decor-none uppercase' href={`/collection/products`}>
                    <Typography  component='p' sx={{width:'max-content',fontWeight:400,fontSize:{xs:'.7em',sm:'.85em'}}}>
                    Sale
                    </Typography>
                </Link> */}
                <Link className='black decor-none ' href={`/collection/products`}>

<Typography 
className=' cursor center flex gap1 black decor-none captialize'
id="button"
component='h1' sx={{width:'max-content',
mx:'1em',
alignItems: 'center',

fontWeight:500,fontSize:{xs:'.86em',sm:'.95em'}}}>
Collection
</Typography>
</Link>
                  <Link className='black decor-none ' href={`/about`}>

<Typography 
className=' cursor center flex gap1 black decor-none captialize'
id="button"
component='h1' sx={{width:'max-content',
mx:'1em',
alignItems: 'center',

fontWeight:500,fontSize:{xs:'.86em',sm:'.95em'}}}>
Gadgets


</Typography>
</Link>
<MenuHover img='' category={'Accessories'} subcategories={[  
`Cases`,
`Chargers`,
`Cables`,
`Headphones`,
`Power Banks`
]}/>

<MenuHover img='' category={'Networking'} subcategories={[  "SEALER BRIHTNER",
`Routers`,
`Switches`,
`Modems`,
`Network Security`,
`Wireless Solutions`,
]}/>


{
    [   
        // `Craft Supplies`,
    // `5D DIY Kits`,
    // 'MATERIELS',
    `Communication`,
   
    ].map(i=>{
        return <Link key={i} className='black decor-none ' href={`/${i.toLocaleLowerCase()}/products`}>

        <Typography 
        component='h1'
        className=' cursor center flex gap1 black decor-none captialize'
        id="button"
        sx={{width:'max-content',
        mx:'1em',
        alignItems: 'center',
        fontWeight:500,fontSize:{xs:'.86em',sm:'.95em'}}}>
        {i}
        </Typography>
        </Link>
    })
}






        </Container>

    </Box>
  )
}

export default NavButtom