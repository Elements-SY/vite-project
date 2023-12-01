export function queryForm(formConfig) {
 const formParams = {};
 formConfig.map((item) => {
  if (
   item.hasOwnProperty('prop') &&
   item.hasOwnProperty('propType') &&
   item.propType
  ) {
   if (typeof item.propType == 'string') {
    formParams[item.prop] = item.value || '';
   } else if (typeof item.propType == 'number') {
    formParams[item.prop] = item.value || 1;
   } else if (typeof item.propType == 'object') {
    if (Array.isArray(item.propType) || item.propType == 'array') {
     formParams[item.prop] = [];
    } else {
     formParams[item.prop] = null;
    }
   } else if (typeof item.propType == 'boolean') {
    formParams[item.prop] = item.propType;
   }
  } else {
   formParams[item.prop] = item.value || '';
  }
 });
 return formParams;
}

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string) {
 const isExternal = /^(https?:|http?:|mailto:|tel:)/.test(path);
 return isExternal;
}
