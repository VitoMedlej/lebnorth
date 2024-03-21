"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { BiMenuAltRight ,BiSearchAlt  ,BiCart } from "react-icons/bi";
// import {BiCart} from 'react-icons/ci'

import { useEffect, useState} from 'react';

import SearchModal from './SearchModal';
import Link from 'next/link';
import {Badge, Container, Divider, Typography} from '@mui/material';
// import { loadState } from '../../Utils/LocalstorageFn';
import {useRouter} from 'next/navigation';
// import {AiOutlinePhone, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import {AiOutlineHome,AiOutlineShoppingCart} from 'react-icons/ai'
import SearchInput from './SearchInput';

import NavButtom from './NavButtom';
import { useCartContext, useDrawerContext, useLangContext } from '@/context/Contexts';
import Btn from '../Btn/Btn';
import useLanguage from '@/Hooks/useLanguage';



export const categories =  [`Craft Supplies`,
`DIY Kits`,
`customized`,

`Home Decor`];
export default function Navbar() {
    const {open, setOpen} = useDrawerContext();
    const [openModal,
        setOpenModal] = useState(false);
    
    const [localCart,
        setLocalCart] = useState([]);

    const {cartOpen, setCartOpen} = useCartContext();
    const router = useRouter()
    // const localCart = [1]
    useEffect(() => {
        const cart : any = []
        // const cart = loadState('clartloclal51z') || []
        if (cart) {

            setLocalCart(cart)
        }
    }, [cartOpen])

    return ( <>
     <Box
     id='navy'
    className='center auto relative   bg flex'
        sx={{
            zIndex:12,
        flexWrap: 'wrap',
                width:'100%',
                boxShadow:'none',
        background:'white',
        border: 'none',
        px:0,
        flexGrow: 1
    }}>
      
        <AppBar
     id='navy2'

    className='center relative  flex'

            sx={{

                boxShadow:'none',

                background:'white',
            // maxWidth: 'lg',
                width:'100%',
            margin: '0 auto',
        }}>
              <Box className='flex items-center row bg'
                   sx={{justifyContent:'flex-end',py:.3}}>
<Container className='flex wrap' sx={{margin:0,px:.5,justifyContent:'space-evenly',
maxWidth:{xs:'100%',sm:'lg'}}}>

            <Box className='flex row items-center'>
                <Box sx={{pr:.1,height:'20px'}}>

            <img src="https://www.svgrepo.com/show/533285/phone.svg" alt="" className="img" />
                </Box>
            <Typography sx={{color:'black',fontSize:'.70em',textAlign:'end',fontWeight:600}}>
            +961 3 545 717
            </Typography>
            </Box>
            <Box className='flex row items-center'>
                <Box sx={{pr:.1,height:'20px'}}>

            <img src="https://cdn-icons-png.flaticon.com/128/535/535239.png" alt="" className="img" />
                </Box>
            <Typography sx={{color:'black',fontSize:'.70em',textAlign:'end',fontWeight:600}}>
            Beirut | Lebanon

            </Typography>
            </Box>


            <Box className='flex row items-center'>
                <Box sx={{pr:.1,height:'20px'}}>

            <img src="https://www.svgrepo.com/show/520798/instagram.svg" alt="" className="img" />
                </Box>
            <Typography sx={{color:'black',fontSize:'.70em',textAlign:'end',fontWeight:600}}>
            @shineplus_carspa
            </Typography>
            </Box>
            <a className='decor-none' href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`}>
            <Btn sx={{display:{xs:'none',sm:'flex'},py:.2}}>
                                         
                                    BOOK NOW
                                  </Btn>
      </a>                        
       
</Container>

            </Box>
            {/* <Box className='center text-center' sx={{background:'#0f0f0f',width:'100%',py:.25}}>
                <Typography className='clr' component='p' sx={{py:.2,fontSize:{xs:'.75em',sm:'.75em'}}}>
            DELIVERY AVAILABLE ALL OVER LEBANON
                </Typography>
            </Box> */}
            <Toolbar
     id='navy3'

    className='center relative  flex  w100  auto'

                sx={{
                
                background:'white',
                    maxWidth:'lg',
                px:'0 !important',
                
                flexWrap: 'wrap'
            }}> 
                  <Link className='flex center  aling-center items-center '  href='/' color='inherit'>

<Box className='flex'
    sx={{
    mx: {
        xs:'.15em',
        sm: '1em'
    },
    width:{xs:'90px',sm: '100px'}
}}>
    <img
        className='img'
        src={`https://ucarecdn.com/0f2afae9-efff-4c52-b21d-61b31fb19f75/logopng.jpg`}
        alt="diy_crafts_diamond_painting logo"/>
</Box>
</Link>

                <Box
                    sx={{
                    px:1,
                    display:{xs:'flex',md:'flex'},

                    flex: 1,
                    flexWrap: 'wrap',
                    justifyContent: {
                        xs: 'right',
                    },
                 
                }}>
 
                    <Box
                        sx={{
                        display: {
                            xs: 'flex'
                        },
                        // justifyContent: 'end'
                    }}
                        className='flex right'>
                             
                        
                       
                        {/* <IconButton
                            onClick={() => setOpenModal(!openModal)}
                            sx={{
                            color: 'black'
                        }}>

                                <CiSearch color='black'/>
                          
                        </IconButton> */}
                   <IconButton
                            onClick={() => setOpenModal(!openModal)}
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                            margin : '8px',padding:0,
                            color: 'black',
                       
                        }}>
                            <BiSearchAlt  color='black'/>
                        </IconButton>


                     <IconButton
                              onClick={() => setCartOpen(!cartOpen)}

                            // onClick={() => router.push('/collection/products')}
                            sx={{
                                margin : '8px',padding:0,
                            color: 'black'
                        }}>
                            {/* <Badge color='primary' badgeContent={`${localCart.length || '0'}`}> */}

                                <BiCart color='black'/>
                            {/* </Badge> */}
                         
                        </IconButton>
   

                        <IconButton
                            onClick={() => setOpen(!open)}
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{
                            margin : '8px',padding:0,
                            color: 'black',
                            // margin: '0.1em',
                            display: {
                                md: 'none'
                            }
                        }}>
                            <BiMenuAltRight color='black'/>
                        </IconButton>

                        
                   
   {/* <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' className='flex decor-none' rel='noopener'>

                        <IconButton
                            onClick={() => setCartOpen(!cartOpen)}
                            sx={{
                            color: 'black'
                        }}>
                     
                            <AiOutlinePhone color='black'/>

                        </IconButton>
    </a> */}
                    
                    </Box>

                </Box>



  {/* <SearchInput/> */}
  {/* <SearchInput
mobile
                    />  */}


<SearchModal openModal={openModal} setOpenModal={setOpenModal }/>
             
            </Toolbar>
<NavButtom/>

        </AppBar>
    </Box> 

    < Divider sx={{color : '#00000017'}} />
     </>
    
    );
}