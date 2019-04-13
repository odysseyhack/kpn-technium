/**
 * Create Product Transaction
 * @param {org.smartfoodnetwork.scm.CreateProduct} productData
 * @transaction
 * 
 * 1. Check for the validity of request data - throw error 
 * 2. Create the asset
 * 3. Emit the Event
 * 4. Add the asset to the registry
 */

function CreateProduct(productData){
    /**
     * 1. Validate the schedule data
     * If the date is a past date then throw an error
     */
    /**some code for validation */

    // Get the Asset Registry

    return getAssetRegistry('org.smartfoodnetwork.scm.Product')

    .then(function(registryObj){
        // Now add the Batch - global function getFactory() called
        var  factory = getFactory();

        var  NS =  'org.smartfoodnetwork.scm';

        // Solution to exercise - Removed hardcoded value & invoked

        // 2.1 Set asset object
        var  productCode = productData.productCode;
        var  assetObj = factory.newResource(NS,'Product',productCode);
        assetObj.sender = productData.sender;
        assetObj.receiver = productData.receiver;
        assetObj.productCode = productData.productCode;
        assetObj.receiverType = productData.receiverType;

        
        // 3 Emit the event
        var event = factory.newEvent(NS, 'CreateProductEvent');
        event.sender = productData.sender;
        event.receiver = productData.receiver;
        event.productCode = productData.productCode;
        event.receiverType = productData.receiverType;
        
        emit(event);

        // 4. Add asset to registry
        return registryObj.add(assetObj);
    });
}


/**
 * Update Product Transaction
 * @param {org.smartfoodnetwork.scm.UpdateProduct} productData
 * @transaction
 * 
 * 1. Check for the validity of request data - throw error 
 * 2. Create the asset
 * 3. Emit the Event
 * 4. Add the asset to the registry
 */

function UpdateProduct(productData){
    /**
     * 1. Validate the schedule data
     * If the date is a past date then throw an error
     */
    /**some code for validation */

    // Get the Asset Registry

    return getAssetRegistry('org.smartfoodnetwork.scm.Product')

    .then(function(registryObj){
        // Now add the Batch - global function getFactory() called
        var  factory = getFactory();

        var  NS =  'org.smartfoodnetwork.scm';

        // Solution to exercise - Removed hardcoded value & invoked

        // 2.1 Set asset object
        var  productCode = productData.productCode;
        var  assetObj = factory.newResource(NS,'Product',productCode);
        assetObj.sender = productData.sender;
        assetObj.receiver = productData.receiver;
        assetObj.productCode = productData.productCode;
        assetObj.receiverType = productData.receiverType;

        
        // 3 Emit the event
        var event = factory.newEvent(NS, 'UpdateProductEvent');
        event.sender = productData.sender;
        event.receiver = productData.receiver;
        event.productCode = productData.productCode;
        event.receiverType = productData.receiverType;
        
        emit(event);

        // 4. Add asset to registry
        return registryObj.update(assetObj);
    });
}

