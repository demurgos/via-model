import * as Promise from "bluebird";
import * as objectPath from "./object-path";
import { ModelToken, Query } from "./interfaces";
import { Proxy, ViaSchema, Dictionary } from "via-core";
import { IModel, StaticModel, FindOptions } from "./interfaces";
import { GetProxyOptions, ExistsOptions, CommitOptions, LoadOptions } from "./interfaces";
export declare class Model implements IModel {
    _name: "model";
    _: Model;
    private _id;
    private _data;
    private _changes;
    private _updatedProperties;
    private _defaultProxy;
    private _schema;
    constructor();
    setId(id: string): Model;
    getId(): string;
    getToken(): ModelToken;
    getProxy(options?: GetProxyOptions): Promise<Proxy>;
    exists(options: ExistsOptions): Promise<boolean>;
    getDefaultData(options?: any): Promise<any>;
    create(options?: any): Promise<Model>;
    updateLocal(data: Dictionary<any>): Model;
    readLocal(fields: objectPath.ObjectPath[]): {
        data: any;
        missing: (string | number)[][];
    };
    clearLocal(): this;
    load(fields: objectPath.ObjectPath[], getProxyOptions?: LoadOptions): Promise<Model>;
    decode(data: any, format: string | Promise<string>): Promise<any>;
    encode(data: any, format: string | Promise<string>): Promise<any>;
    importData(data: any, format: string): Promise<Model>;
    exportData(paths: objectPath.ObjectPath[], format: string): Promise<any>;
    commit(options?: CommitOptions): Promise<Model>;
    get(paths: objectPath.ObjectPath[]): Promise<any>;
    getOne(path: objectPath.ObjectPath): Promise<any>;
    prepare(path: objectPath.ObjectPath, value: any, opt?: any): Promise<Model>;
    set(query: Query, opt?: any): Promise<Model>;
    setOne(path: objectPath.ObjectPath, value: any, opt?: any): Promise<Model>;
    getSchema(): Promise<ViaSchema>;
    test(query: any, opt?: any): Promise<Error>;
    testOne(field: objectPath.ObjectPath, val: any, opt?: any): Promise<Error>;
    ensureValid(): Promise<Model>;
    toPlain(paths: objectPath.ObjectPath[], opt?: any): any;
    toJSON(): ModelToken;
}
export declare function getStaticModel(model: string | StaticModel, ensureExists: boolean): StaticModel;
export declare function setModelClass(name: string, ctor: StaticModel, opt?: any): StaticModel;
export declare function getNewSync(ctor: StaticModel, opt?: any): Model;
export declare function getNew(ctor: StaticModel, opt?: any): Promise<Model>;
export declare function getByIdSync(ctor: StaticModel, id: string, opt?: any): Model;
export declare function getById(ctor: StaticModel, id: string, opt?: any): Promise<Model>;
export declare function find(ctor: StaticModel, filter: Object, opt?: FindOptions): Promise<Model[]>;
export declare function cast(list: any[]): Model[];
export declare function castOne(token: ModelToken): any;
export declare function generateAccessors(ctor: StaticModel): void;
