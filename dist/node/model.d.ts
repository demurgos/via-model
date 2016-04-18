import * as Bluebird from "bluebird";
import { model, proxy, schema, utils, dotPath, type } from "via-core";
import { ModelsGroup } from "./models-group";
export declare class Model implements model.Model {
    _: Model;
    protected _name: string;
    protected _id: string;
    protected _data: any;
    protected _oldData: any;
    protected _defaultProxy: proxy.Proxy;
    protected _schema: schema.ViaModelSchema;
    constructor();
    setId(id: string): Model;
    getId(): string;
    getName(): string;
    getToken(): model.ModelToken;
    getProxy(options?: model.GetProxyOptions): Bluebird<proxy.Proxy>;
    exists(options: model.ExistsOptions): Bluebird<boolean>;
    getDefaultData(options?: any): Bluebird<any>;
    create(options?: any): Bluebird<Model>;
    updateLocal(data: utils.Document): Model;
    updateOneLocal(path: dotPath.DotPath, value: any, opt?: any): Bluebird<Model>;
    readLocal(fields: dotPath.DotPath[]): model.ReadLocalResult;
    clearLocal(): this;
    load(fields: dotPath.DotPath[], getProxyOptions?: model.LoadOptions): Bluebird<Model>;
    decode(data: any, format: string | Bluebird<string>): Bluebird<any>;
    encode(data: any, format: string | Bluebird<string>): Bluebird<any>;
    importData(data: any, format: string): Bluebird<Model>;
    exportData(paths: dotPath.DotPath[], format: string): Bluebird<any>;
    diff(): Bluebird<type.DocumentDiff>;
    commit(options?: model.CommitOptions): Bluebird<Model>;
    get(paths: dotPath.DotPath[]): Bluebird<any>;
    getOne(path: dotPath.DotPath): Bluebird<any>;
    set(query: utils.Document, opt?: any): Bluebird<Model>;
    setOne(path: dotPath.DotPath, value: any, opt?: any): Bluebird<Model>;
    getSchema(): Bluebird<schema.ViaModelSchema>;
    test(query: any, opt?: any): Bluebird<Error>;
    testOne(field: dotPath.DotPath, val: any, opt?: any): Bluebird<Error>;
    ensureValid(): Bluebird<Model>;
    toPlain(paths: dotPath.DotPath[], opt?: any): any;
    toJSON(): model.ModelToken;
}
export declare function getNewSync(ctor: model.ModelConstructor, opt?: any): model.Model;
export declare function getNew(ctor: model.ModelConstructor, opt?: any): Bluebird<Model>;
export declare function getByIdSync(ctor: model.ModelConstructor, id: string, opt?: any): model.Model;
export declare function getById(ctor: model.ModelConstructor, id: string, opt?: any): Bluebird<Model>;
export declare function find(ctor: model.ModelConstructor, filter: Object, opt?: model.FindOptions): Bluebird<Model[]>;
export declare function cast(list: any[], modelsGroup: ModelsGroup): model.Model[];
export declare function castOne(token: model.ModelToken, modelsGroup: ModelsGroup): any;
export interface ModelConstructor extends model.ModelConstructor {
    new (options?: any): Model;
}
export interface StaticModel extends ModelConstructor, model.StaticModel {
    getNewSync(opt?: any): Model;
    getNew(opt?: any): Bluebird<Model>;
    getByIdSync(id: string, opt?: any): Model;
    getById(id: string, opt?: any): Bluebird<Model>;
    find(filter: Object, opt?: model.FindOptions): Bluebird<Model[]>;
}
export declare function generateAccessors(ctor: ModelConstructor): StaticModel;