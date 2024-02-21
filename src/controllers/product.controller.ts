import { Request, Response } from "express";
import { products } from "../data/product.data";
import { Product } from "../types/product.type";
import { generateNeWId } from "../utilities/utilities";


export const getProducts=async (req:Request,res:Response) => {
    res.status(200).json(products)
}

export const getProductById=async (req:Request,res:Response) => {
    const productFound = products.find(product => product.id === req.params.id)
    if(productFound){
        res.status(200).json(productFound)
    }
    else{
        res.status(404).json({message: "product by id not found"})
    }
}
export const addNewProduct=async (req:Request,res:Response) => {
    const product:Product = req.body
    if (product){
        products.push({...product, id: generateNeWId({elements:products}).toString()})
        res.status(200).json(product)
    }else{
        res.status(400).json({message:"Error"});
    }
}
export const deleteOldProduct=async (req:Request, res:Response) => {
    const indexOldProduct = products.findIndex(product => product.id === req.params.id);
if (indexOldProduct !==-1) {
    products.splice(indexOldProduct,1)
    res.status(200).json({
        message:"old product deleted",
        product: products[indexOldProduct] 
    })
    
} else {
    res.status(400).json({message: "impossible to delete"});
}
}

export const updateProduct=async (req:Request, res:Response) => {
    const indexOldProduct= products.findIndex(product => product.id === req.params.id);
    if (indexOldProduct!==-1) {
        Object.assign(products[indexOldProduct],req.body);
        console.log(products[indexOldProduct])
        res.status(200).json({
        message:"old product updated",
        product: products[indexOldProduct] 
        }) 

    }else {
        res.status(400).json({message:"product not found"})
        
    }
}