import {NextFunction, Request, Response} from 'express';
import {createProduct, deleteProduct, findAndUpdateProduct, findProduct,} from '../services/product-service';
import RESTFul from '../helpers/rest-maker';
import {wrapSend} from '../helpers/protocol';
import {
    CreateProductBody,
    DeleteProductParams,
    GetProductParams,
    UpdateProductBody,
    UpdateProductParams
} from '../schemas/product-schema';
import {ParamsDictionary} from 'express-serve-static-core';

export async function createProductCtrl(req: Request<ParamsDictionary, any, CreateProductBody>, res: Response, next: NextFunction) {
    const {body} = req;

    try {
        const product = await createProduct(body);
        return wrapSend(res, RESTFul.ok(res), product);
    } catch (e) {
        next(e);
    }
}

export async function updateProductCtrl(req: Request<UpdateProductParams, any, UpdateProductBody>, res: Response, next: NextFunction) {
    const {id} = req.params;
    const {body} = req;

    try {
        const product = await findProduct({id});

        if (!product) {
            return wrapSend(res, RESTFul.notFound(res));
        }

        const updatedProduct = await findAndUpdateProduct({id}, body);

        return wrapSend(res, RESTFul.ok(res), updatedProduct);
    } catch (e) {
        next(e);
    }

}

export async function getProductCtrl(req: Request<GetProductParams, any, any>, res: Response, next: NextFunction) {
    const {id} = req.params;
    try {
        const product = await findProduct({id});
        if (!product) {
            return wrapSend(res, RESTFul.notFound(res));
        }
        return wrapSend(res, RESTFul.ok(res), product);
    } catch (e) {
        next(e);
    }
}

export async function deleteProductCtrl(req: Request<DeleteProductParams, any, any>, res: Response, next: NextFunction) {
    const {id} = req.params;
    try {
        const product = await findProduct({id});

        if (!product) {
            return wrapSend(res, RESTFul.notFound(res));
        }

        const deletedProduct = await deleteProduct({id});

        return wrapSend(res, RESTFul.ok(res), deletedProduct);
    } catch (e) {
        next(e);
    }
}
