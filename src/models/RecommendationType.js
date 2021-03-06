/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/* eslint-disable dot-notation */
/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 17.8
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient'

/**
* The RecommendationType model module.
* @module models/RecommendationType
* @version 17.8
*/
export default class RecommendationType {
    /**
    * Constructs a new <code>RecommendationType</code>.
    * Document representing a recommendation type.
    * @alias module:models/RecommendationType
    * @class
    */
    constructor() {
        /**
        * The localized display value of the recommendation type.
        * @member {String} display_value
        */
        this.display_value = undefined

        /**
        * The value of the recommendation type.
        * @member {Number} value
        */
        this.value = undefined
    }

    /**
    * Constructs a <code>RecommendationType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:models/RecommendationType} obj Optional instance to populate.
    * @return {module:models/RecommendationType} The populated <code>RecommendationType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecommendationType()

            if (data.hasOwnProperty('display_value')) {
                obj['display_value'] = ApiClient.convertToType(data['display_value'], 'String')
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number')
            }
        }

        return obj
    }
}
