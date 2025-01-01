import client from '@/database/mongodb';
import type {NextApiResponse}
from 'next';
import {NextResponse} from 'next/server'
import {type NextRequest} from 'next/server'

export async function GET(req : NextRequest, res : NextApiResponse) {
try {

    const ProductsCollection = await client
        .db("LEB")
        .collection("Products");
    let featuredProducts : any = [];
    // let products : any = []

    const featuredProductsQuery = await ProductsCollection
        // .find({isFeatured: true})
        .find({})
        .limit(20)
        .sort({_id: -1})   

    // const ProductsQuery = await ProductsCollection
    //     // .find({isFeatured: false})
    //     .find({})
    //     .sort({_id: -1})
    //     .limit(20)

    // await ProductsQuery.forEach((doc : any) => {

    //     products.push(doc)

    // });

    await featuredProductsQuery.forEach((doc : any) => {

        featuredProducts.push(doc)

    })




    // const vidsCollection = await client.db("LEB").collection("Videos")
    //    const docs = await vidsCollection.find({}).limit(20).toArray();
    //    console.log('docs: ', docs);
      const vids : any[] = [];
    //    await docs.forEach((prod:any) =>{
      
    //           vids.push(prod);
    //     })
       





    if (!featuredProducts  || featuredProducts.length < 0) {

    // if (!featuredProducts || !products || featuredProducts.length < 0 || products.length < 0) {
        return NextResponse.json({success: false});
    }

    return NextResponse.json({
        success: true,
        data: {
            // products,
            featuredProducts,
            vids
        }
    });
}

catch (error) {
    console.log('error get-data: ', error);

}
}

export const dynamic = 'force-dynamic'
