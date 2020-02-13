/** Declaration file generated by dts-gen */

export class AWSAccessCredentials {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class ApiClient {
    constructor();

    applyAuthToRequest(request: any, authNames: any): void;

    buildCollectionParam(param: any, collectionFormat: any): any;

    buildUrl(path: any, pathParams: any, apiBasePath: any): any;

    callApi(path: any, httpMethod: any, pathParams: any, queryParams: any, headerParams: any, formParams: any, bodyParam: any, authNames: any, contentTypes: any, accepts: any, returnType: any, apiBasePath: any): any;

    deserialize(response: any, returnType: any): any;

    getBasePathFromSettings(index: any, ...args: any[]): any;

    hostSettings(): any;

    isFileParam(param: any): any;

    isJsonMime(contentType: any): any;

    jsonPreferredMime(contentTypes: any): any;

    normalizeParams(params: any): any;

    paramToString(param: any): any;

    static CollectionFormatEnum: {
        CSV: string;
        MULTI: string;
        PIPES: string;
        SSV: string;
        TSV: string;
    };

    static constructFromObject(data: any, obj: any, itemType: any): void;

    static convertToType(data: any, type: any): any;

    static parseDate(str: any): any;

}

export class ArrayActivityLog {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class ArrayApi {
    constructor(apiClient: any);

    arrayActivityLog(namespace: any, _array: any, opts: any): any;

    arrayActivityLogWithHttpInfo(namespace: any, _array: any, opts: any): any;

    createArray(namespace: any, _array: any, contentType: any, arraySchema: any): any;

    createArrayWithHttpInfo(namespace: any, _array: any, contentType: any, arraySchema: any): any;

    deleteArray(namespace: any, _array: any, contentType: any): any;

    deleteArrayWithHttpInfo(namespace: any, _array: any, contentType: any): any;

    deregisterArray(namespace: any, _array: any): any;

    deregisterArrayWithHttpInfo(namespace: any, _array: any): any;

    getAllArrayMetadata(opts: any): any;

    getAllArrayMetadataWithHttpInfo(opts: any): any;

    getArray(namespace: any, _array: any, contentType: any): any;

    getArrayMaxBufferSizes(namespace: any, _array: any, subarray: any, contentType: any, opts: any): any;

    getArrayMaxBufferSizesWithHttpInfo(namespace: any, _array: any, subarray: any, contentType: any, opts: any): any;

    getArrayMetaDataJson(namespace: any, _array: any): any;

    getArrayMetaDataJsonWithHttpInfo(namespace: any, _array: any): any;

    getArrayMetadata(namespace: any, _array: any): any;

    getArrayMetadataWithHttpInfo(namespace: any, _array: any): any;

    getArrayNonEmptyDomain(namespace: any, _array: any, contentType: any, opts: any): any;

    getArrayNonEmptyDomainWithHttpInfo(namespace: any, _array: any, contentType: any, opts: any): any;

    getArraySampleData(namespace: any, _array: any, opts: any): any;

    getArraySampleDataWithHttpInfo(namespace: any, _array: any, opts: any): any;

    getArraySharingPolicies(namespace: any, _array: any): any;

    getArraySharingPoliciesWithHttpInfo(namespace: any, _array: any): any;

    getArrayWithHttpInfo(namespace: any, _array: any, contentType: any): any;

    getArraysInNamespace(namespace: any): any;

    getArraysInNamespaceWithHttpInfo(namespace: any): any;

    getLastAccessedArrays(): any;

    getLastAccessedArraysWithHttpInfo(): any;

    registerArray(namespace: any, _array: any, arrayMetadata: any): any;

    registerArrayWithHttpInfo(namespace: any, _array: any, arrayMetadata: any): any;

    shareArray(namespace: any, _array: any, arraySharing: any): any;

    shareArrayWithHttpInfo(namespace: any, _array: any, arraySharing: any): any;

    updateArrayMetadata(namespace: any, _array: any, arrayMetadata: any): any;

    updateArrayMetadataWithHttpInfo(namespace: any, _array: any, arrayMetadata: any): any;

}

export class ArrayInfo {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class ArrayInfoUpdate {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class ArrayMetadata {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class ArrayMetadataEntry {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class ArraySample {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class ArraySchema {
    constructor(version: any, arrayType: any, tileOrder: any, cellOrder: any, capacity: any, coordsFilterPipeline: any, offsetFilterPipeline: any, domain: any, attributes: any);

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any, version: any, arrayType: any, tileOrder: any, cellOrder: any, capacity: any, coordsFilterPipeline: any, offsetFilterPipeline: any, domain: any, attributes: any): void;

}

export class ArraySharing {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class ArrayTask {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class ArrayTaskBrowserSidebar {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class ArrayTaskData {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class ArrayTaskLog {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class ArrayTasksApi {
    constructor(apiClient: any);

    getArrayTasksSidebar(opts: any): any;

    getArrayTasksSidebarWithHttpInfo(opts: any): any;

}

export class Attribute {
    constructor(name: any, type: any, filterPipeline: any, cellValNum: any);

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any, name: any, type: any, filterPipeline: any, cellValNum: any): void;

}

export class AttributeBufferHeader {
    constructor(name: any, fixedLenBufferSizeInBytes: any, varLenBufferSizeInBytes: any);

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any, name: any, fixedLenBufferSizeInBytes: any, varLenBufferSizeInBytes: any): void;

}

export class AttributeBufferSize {
    constructor(attribute: any, offsetBytes: any, dataBytes: any);

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any, attribute: any, offsetBytes: any, dataBytes: any): void;

}

export class Dimension {
    constructor(type: any, domain: any, nullTileExtent: any);

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any, type: any, domain: any, nullTileExtent: any): void;

}

export class DimensionCoordinate {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class DimensionTileExtent {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class Domain {
    constructor(type: any, tileOrder: any, cellOrder: any, dimensions: any);

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any, type: any, tileOrder: any, cellOrder: any, dimensions: any): void;

}

export class DomainArray {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class Error {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class Filter {
    constructor(type: any);

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any, type: any): void;

}

export class FilterData {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class FilterPipeline {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class InlineObject {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class InlineResponse200 {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class LastAccessedArray {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class MaxBufferSizes {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class ModelArray {
    constructor(timestamp: any, queryType: any, uri: any);

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any, timestamp: any, queryType: any, uri: any): void;

}

export class NonEmptyDomain {
    constructor(nonEmptyDomain: any, isEmpty: any);

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any, nonEmptyDomain: any, isEmpty: any): void;

}

export class Organization {
    constructor(name: any);

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any, name: any): void;

}

export class OrganizationApi {
    constructor(apiClient: any);

    addAWSAccessCredentials(namespace: any, awsAccessCredentials: any): any;

    addAWSAccessCredentialsWithHttpInfo(namespace: any, awsAccessCredentials: any): any;

    addUserToOrganization(organization: any, user: any): any;

    addUserToOrganizationWithHttpInfo(organization: any, user: any): any;

    checkAWSAccessCredentials(namespace: any): any;

    checkAWSAccessCredentialsByName(namespace: any, name: any): any;

    checkAWSAccessCredentialsByNameWithHttpInfo(namespace: any, name: any): any;

    checkAWSAccessCredentialsWithHttpInfo(namespace: any): any;

    createOrganization(organization: any): any;

    createOrganizationWithHttpInfo(organization: any): any;

    deleteAWSAccessCredentials(namespace: any, name: any): any;

    deleteAWSAccessCredentialsWithHttpInfo(namespace: any, name: any): any;

    deleteOrganization(organization: any): any;

    deleteOrganizationWithHttpInfo(organization: any): any;

    deleteUserFromOrganization(organization: any, username: any): any;

    deleteUserFromOrganizationWithHttpInfo(organization: any, username: any): any;

    getAllOrganizations(): any;

    getAllOrganizationsWithHttpInfo(): any;

    getOrganization(organization: any): any;

    getOrganizationUser(organization: any, username: any): any;

    getOrganizationUserWithHttpInfo(organization: any, username: any): any;

    getOrganizationWithHttpInfo(organization: any): any;

    updateAWSAccessCredentials(namespace: any, name: any, awsAccessCredentials: any): any;

    updateAWSAccessCredentialsWithHttpInfo(namespace: any, name: any, awsAccessCredentials: any): any;

    updateOrganization(organization: any, organizationDetails: any): any;

    updateOrganizationWithHttpInfo(organization: any, organizationDetails: any): any;

    updateUserInOrganization(organization: any, username: any, user: any): any;

    updateUserInOrganizationWithHttpInfo(organization: any, username: any, user: any): any;

}

export class OrganizationUser {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class PaginationMetadata {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class Query {
    constructor(type: any, layout: any, status: any, attributeBufferHeaders: any, _array: any, totalFixedLengthBufferBytes: any, totalVarLenBufferBytes: any);

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any, type: any, layout: any, status: any, attributeBufferHeaders: any, _array: any, totalFixedLengthBufferBytes: any, totalVarLenBufferBytes: any): void;

}

export class QueryApi {
    constructor(apiClient: any);

    finalizeQuery(namespace: any, _array: any, type: any, contentType: any, query: any, opts: any): any;

    finalizeQueryWithHttpInfo(namespace: any, _array: any, type: any, contentType: any, query: any, opts: any): any;

    submitQuery(namespace: any, _array: any, type: any, contentType: any, query: any, opts: any): any;

    submitQueryWithHttpInfo(namespace: any, _array: any, type: any, contentType: any, query: any, opts: any): any;

}

export class QueryReader {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class ReadState {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class SQLParameters {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class SqlApi {
    constructor(apiClient: any);

    runSQL(namespace: any, sql: any, opts: any): any;

    runSQLWithHttpInfo(namespace: any, sql: any, opts: any): any;

}

export class StatsApi {
    constructor(apiClient: any);

    getTiledbStats(): any;

    getTiledbStatsWithHttpInfo(): any;

}

export class Subarray {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class SubarrayPartitioner {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class SubarrayPartitionerCurrent {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class SubarrayPartitionerState {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class SubarrayRanges {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class TasksApi {
    constructor(apiClient: any);

    runSQL(namespace: any, sql: any, opts: any): any;

    runSQLWithHttpInfo(namespace: any, sql: any, opts: any): any;

    taskIdGet(id: any): any;

    taskIdGetWithHttpInfo(id: any): any;

    tasksGet(opts: any): any;

    tasksGetWithHttpInfo(opts: any): any;

}

export class Token {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class TokenRequest {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class UDF {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class UDFSubarray {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class UDFSubarrayRange {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export class UdfApi {
    constructor(apiClient: any);

    submitUDF(namespace: any, _array: any, udf: any, opts: any): any;

    submitUDFWithHttpInfo(namespace: any, _array: any, udf: any, opts: any): any;

}

export class User {
    constructor(username: any);

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any, username: any): void;

}

export class UserApi {
    constructor(apiClient: any);

    addAWSAccessCredentials(namespace: any, awsAccessCredentials: any): any;

    addAWSAccessCredentialsWithHttpInfo(namespace: any, awsAccessCredentials: any): any;

    addUserToOrganization(organization: any, user: any): any;

    addUserToOrganizationWithHttpInfo(organization: any, user: any): any;

    checkAWSAccessCredentials(namespace: any): any;

    checkAWSAccessCredentialsByName(namespace: any, name: any): any;

    checkAWSAccessCredentialsByNameWithHttpInfo(namespace: any, name: any): any;

    checkAWSAccessCredentialsWithHttpInfo(namespace: any): any;

    confirmEmail(): any;

    confirmEmailWithHttpInfo(): any;

    createUser(user: any): any;

    createUserWithHttpInfo(user: any): any;

    deleteAWSAccessCredentials(namespace: any, name: any): any;

    deleteAWSAccessCredentialsWithHttpInfo(namespace: any, name: any): any;

    deleteUser(username: any): any;

    deleteUserFromOrganization(organization: any, username: any): any;

    deleteUserFromOrganizationWithHttpInfo(organization: any, username: any): any;

    deleteUserWithHttpInfo(username: any): any;

    getOrganizationUser(organization: any, username: any): any;

    getOrganizationUserWithHttpInfo(organization: any, username: any): any;

    getSession(opts: any): any;

    getSessionWithHttpInfo(opts: any): any;

    getUser(): any;

    getUserWithHttpInfo(): any;

    getUserWithUsername(username: any): any;

    getUserWithUsernameWithHttpInfo(username: any): any;

    requestToken(opts: any): any;

    requestTokenWithHttpInfo(opts: any): any;

    resetUserPassword(user: any): any;

    resetUserPasswordWithHttpInfo(user: any): any;

    revokeToken(token: any): any;

    revokeTokenWithHttpInfo(token: any): any;

    tokensGet(): any;

    tokensGetWithHttpInfo(): any;

    updateAWSAccessCredentials(namespace: any, name: any, awsAccessCredentials: any): any;

    updateAWSAccessCredentialsWithHttpInfo(namespace: any, name: any, awsAccessCredentials: any): any;

    updateUser(username: any, user: any): any;

    updateUserInOrganization(organization: any, username: any, user: any): any;

    updateUserInOrganizationWithHttpInfo(organization: any, username: any, user: any): any;

    updateUserWithHttpInfo(username: any, user: any): any;

}

export class Writer {
    constructor();

    static constructFromObject(data: any, obj: any): any;

    static initialize(obj: any): void;

}

export function ActivityEventType(): void;

export function ArrayActions(): void;

export function ArrayTaskStatus(): void;

export function ArrayTaskType(): void;

export function ArrayType(): void;

export function Datatype(): void;

export function FilterOption(): void;

export function FilterType(): void;

export function Layout(): void;

export function NamespaceActions(): void;

export function OrganizationRoles(): void;

export function PublicShareFilter(): void;

export function Querystatus(): void;

export function Querytype(): void;

export function SSOProvider(): void;

export function UDFType(): void;

export namespace ActivityEventType {
    function constructFromObject(object: any): any;

}

export namespace ApiClient {
    namespace instance {
        const authentications: {
            ApiKeyAuth: {
                in: string;
                name: string;
                type: string;
            };
            BasicAuth: {
                type: string;
            };
            OAuth2: {
                type: string;
            };
        };

        const basePath: string;

        const cache: boolean;

        const defaultHeaders: {
        };

        const enableCookies: boolean;

        const plugins: any;

        const requestAgent: any;

        const timeout: number;

        function applyAuthToRequest(request: any, authNames: any): void;

        function buildCollectionParam(param: any, collectionFormat: any): any;

        function buildUrl(path: any, pathParams: any, apiBasePath: any): any;

        function callApi(path: any, httpMethod: any, pathParams: any, queryParams: any, headerParams: any, formParams: any, bodyParam: any, authNames: any, contentTypes: any, accepts: any, returnType: any, apiBasePath: any): any;

        function deserialize(response: any, returnType: any): any;

        function getBasePathFromSettings(index: any, ...args: any[]): any;

        function hostSettings(): any;

        function isFileParam(param: any): any;

        function isJsonMime(contentType: any): any;

        function jsonPreferredMime(contentTypes: any): any;

        function normalizeParams(params: any): any;

        function paramToString(param: any): any;

        namespace agent {
            function acl(url: any, fn: any): any;

            function bind(url: any, fn: any): any;

            function checkout(url: any, fn: any): any;

            function connect(url: any, fn: any): any;

            function copy(url: any, fn: any): any;

            function del(url: any, fn: any): any;

            function get(url: any, fn: any): any;

            function head(url: any, fn: any): any;

            function link(url: any, fn: any): any;

            function lock(url: any, fn: any): any;

            function merge(url: any, fn: any): any;

            function mkactivity(url: any, fn: any): any;

            function mkcalendar(url: any, fn: any): any;

            function mkcol(url: any, fn: any): any;

            function move(url: any, fn: any): any;

            function notify(url: any, fn: any): any;

            function options(url: any, fn: any): any;

            function patch(url: any, fn: any): any;

            function post(url: any, fn: any): any;

            function propfind(url: any, fn: any): any;

            function proppatch(url: any, fn: any): any;

            function purge(url: any, fn: any): any;

            function put(url: any, fn: any): any;

            function rebind(url: any, fn: any): any;

            function report(url: any, fn: any): any;

            function search(url: any, fn: any): any;

            function source(url: any, fn: any): any;

            function subscribe(url: any, fn: any): any;

            function trace(url: any, fn: any): any;

            function unbind(url: any, fn: any): any;

            function unlink(url: any, fn: any): any;

            function unlock(url: any, fn: any): any;

            function unsubscribe(url: any, fn: any): any;

            namespace jar {
                // Too-deep object hierarchy from tiledb_cloud.ApiClient.instance.agent.jar
                const getCookie: any;

                // Too-deep object hierarchy from tiledb_cloud.ApiClient.instance.agent.jar
                const getCookies: any;

                // Too-deep object hierarchy from tiledb_cloud.ApiClient.instance.agent.jar
                const setCookie: any;

                // Too-deep object hierarchy from tiledb_cloud.ApiClient.instance.agent.jar
                const setCookies: any;

            }

        }

    }

}

export namespace ArrayActions {
    function constructFromObject(object: any): any;

}

export namespace ArrayTaskStatus {
    function constructFromObject(object: any): any;

}

export namespace ArrayTaskType {
    function constructFromObject(object: any): any;

}

export namespace ArrayType {
    function constructFromObject(object: any): any;

}

export namespace Datatype {
    function constructFromObject(object: any): any;

}

export namespace FilterOption {
    function constructFromObject(object: any): any;

}

export namespace FilterType {
    function constructFromObject(object: any): any;

}

export namespace Layout {
    function constructFromObject(object: any): any;

}

export namespace NamespaceActions {
    function constructFromObject(object: any): any;

}

export namespace OrganizationRoles {
    function constructFromObject(object: any): any;

}

export namespace PublicShareFilter {
    function constructFromObject(object: any): any;

}

export namespace Querystatus {
    function constructFromObject(object: any): any;

}

export namespace Querytype {
    function constructFromObject(object: any): any;

}

export namespace SSOProvider {
    function constructFromObject(object: any): any;

}

export namespace UDFType {
    function constructFromObject(object: any): any;

}

