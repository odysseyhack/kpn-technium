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
     * 1. Validation handled in the application
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
     * 1. Validation handled in the application
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


/**
 * Create Alert Transaction
 * @param {org.smartfoodnetwork.scm.CreateAlert} alertData
 * @transaction
 * 
 * 1. Check for the validity of request data - throw error 
 * 2. Create the asset
 * 3. Emit the Event
 * 4. Add the asset to the registry
 */

function CreateAlert(alertData){
    /**
     * 1. Validation handled in the application
     */
    /**some code for validation */

    // Get the Asset Registry

    return getAssetRegistry('org.smartfoodnetwork.scm.Alert')

    .then(function(registryObj){
        // Now add the Batch - global function getFactory() called
        var  factory = getFactory();

        var  NS =  'org.smartfoodnetwork.scm';

        // Solution to exercise - Removed hardcoded value & invoked

        // 2.1 Set asset object
        var  alertId = alertData.alertId;
        var  assetObj = factory.newResource(NS,'Alert',alertId);
        assetObj.triggerId = alertData.triggerId;
        assetObj.productCode = alertData.productCode;
        assetObj.alertDetails = alertData.alertDetails;
        assetObj.severity = alertData.severity;
        assetObj.assesedBy = alertData.assesedBy;
        assetObj.status = alertData.status;

        
        // 3 Emit the event
        var event = factory.newEvent(NS, 'CreateAlertEvent');
        event.alertId = alertData.alertId;

        
        emit(event);

        // 4. Add asset to registry
        return registryObj.add(assetObj);
    });
}




/**
 * Update Alert Transaction
 * @param {org.smartfoodnetwork.scm.UpdateAlert} alertData
 * @transaction
 * 
 * 1. Check for the validity of request data - throw error 
 * 2. Create the asset
 * 3. Emit the Event
 * 4. Add the asset to the registry
 */

function UpdateAlert(alertData){
    /**
     * 1. Validation handled in the application
     */
    /**some code for validation */

    // Get the Asset Registry

    return getAssetRegistry('org.smartfoodnetwork.scm.Alert')

    .then(function(registryObj){
        // Now add the Batch - global function getFactory() called
        var  factory = getFactory();

        var  NS =  'org.smartfoodnetwork.scm';

        // Solution to exercise - Removed hardcoded value & invoked

        // 2.1 Set asset object
        var  alertId = alertData.alertId;
        var  assetObj = factory.newResource(NS,'Alert',alertId);
        assetObj.triggerId = alertData.triggerId;
        assetObj.productCode = alertData.productCode;
        assetObj.alertDetails = alertData.alertDetails;
        assetObj.severity = alertData.severity;
        assetObj.assesedBy = alertData.assesedBy;
        assetObj.status = alertData.status;

        
        // 3 Emit the event
        var event = factory.newEvent(NS, 'UpdateAlertEvent');
        event.alertId = alertData.alertId;

        
        emit(event);

        // 4. Update asset registry
        return registryObj.update(assetObj);
    });
}


/**
 * Create Trigger Transaction
 * @param {org.smartfoodnetwork.scm.CreateTrigger} triggerData
 * @transaction
 * 
 * 1. Check for the validity of request data - throw error 
 * 2. Create the asset
 * 3. Emit the Event
 * 4. Add the asset to the registry
 */

function CreateTrigger(triggerData){
    /**
     * 1. Validation handled in the application
     */
    /**some code for validation */

    // Get the Asset Registry

    return getAssetRegistry('org.smartfoodnetwork.scm.Trigger')

    .then(function(registryObj){
        // Now add the Batch - global function getFactory() called
        var  factory = getFactory();

        var  NS =  'org.smartfoodnetwork.scm';

        // Solution to exercise - Removed hardcoded value & invoked

        // 2.1 Set asset object
        var  triggerId = triggerData.triggerId;
        var  assetObj = factory.newResource(NS,'Trigger',triggerId);
        assetObj.triggerId = triggerData.triggerId;
        assetObj.productCode = triggerData.productCode;
        assetObj.recordedBy = triggerData.recordedBy;
        assetObj.severity = triggerData.severity;
        assetObj.status = triggerData.status;
        
        // 3 Emit the event
        var event = factory.newEvent(NS, 'CreateTriggerEvent');
        event.triggerId = triggerData.triggerId;

        
        emit(event);

        // 4. Add asset to registry
        return registryObj.add(assetObj);
    });
}

/**
 * Update Trigger Transaction
 * @param {org.smartfoodnetwork.scm.UpdateTrigger} triggerData
 * @transaction
 * 
 * 1. Check for the validity of request data - throw error 
 * 2. Create the asset
 * 3. Emit the Event
 * 4. Add the asset to the registry
 */

function UpdateTrigger(triggerData){
    /**
     * 1. Validation handled in the application
     */
    /**some code for validation */

    // Get the Asset Registry

    return getAssetRegistry('org.smartfoodnetwork.scm.Trigger')

    .then(function(registryObj){
        // Now add the Batch - global function getFactory() called
        var  factory = getFactory();

        var  NS =  'org.smartfoodnetwork.scm';

        // Solution to exercise - Removed hardcoded value & invoked

        // 2.1 Set asset object
        var  triggerId = triggerData.triggerId;
        var  assetObj = factory.newResource(NS,'Trigger',triggerId);
        assetObj.triggerId = triggerData.triggerId;
        assetObj.productCode = triggerData.productCode;
        assetObj.recordedBy = triggerData.recordedBy;
        assetObj.severity = triggerData.severity;
        assetObj.status = triggerData.status;
        
        // 3 Emit the event
        var event = factory.newEvent(NS, 'UpdateTriggerEvent');
        event.triggerId = triggerData.triggerId;

        
        emit(event);

        // 4. update registry
        return registryObj.update(assetObj);
    });
}


/**
 * Create AlertSent Transaction
 * @param {org.smartfoodnetwork.scm.CreateAlertSent} alertSentData
 * @transaction
 * 
 * 1. Check for the validity of request data - throw error 
 * 2. Create the asset
 * 3. Emit the Event
 * 4. Add the asset to the registry
 */

function CreateAlertSent(alertSentData){
    /**
     * 1. Validation handled in the application
     */
    /**some code for validation */

    // Get the Asset Registry

    return getAssetRegistry('org.smartfoodnetwork.scm.AlertSent')

    .then(function(registryObj){
        // Now add the Batch - global function getFactory() called
        var  factory = getFactory();

        var  NS =  'org.smartfoodnetwork.scm';

        // Solution to exercise - Removed hardcoded value & invoked

        // 2.1 Set asset object
        var  alertSentId = alertSentData.alertSentId;
        var  assetObj = factory.newResource(NS,'AlertSent',alertSentId);
        assetObj.alertSentId = alertSentData.alertSentId;
        assetObj.alertId = alertSentData.alertId;
        assetObj.deviceAddressId = alertSentData.deviceAddressId;
        assetObj.deviceAddressType = alertSentData.deviceAddressType;
        assetObj.time = alertSentData.time;
        
        // 3 Emit the event
        var event = factory.newEvent(NS, 'CreateAlertSentEvent');
        event.alertSentId = alertSentData.alertSentId;

        
        emit(event);

        // 4. Add asset to registry
        return registryObj.add(assetObj);
    });
}

/**
 * Update AlertSent Transaction
 * @param {org.smartfoodnetwork.scm.UpdateAlertSent} alertSentData
 * @transaction
 * 
 * 1. Check for the validity of request data - throw error 
 * 2. Create the asset
 * 3. Emit the Event
 * 4. Add the asset to the registry
 */

function UpdateAlertSent(alertSentData){
    /**
     * 1. Validation handled in the application
     */
    /**some code for validation */

    // Get the Asset Registry

    return getAssetRegistry('org.smartfoodnetwork.scm.AlertSent')

    .then(function(registryObj){
        // Now add the Batch - global function getFactory() called
        var  factory = getFactory();

        var  NS =  'org.smartfoodnetwork.scm';

        // Solution to exercise - Removed hardcoded value & invoked

        // 2.1 Set asset object
        var  alertSentId = alertSentData.alertSentId;
        var  assetObj = factory.newResource(NS,'AlertSent',alertSentId);
        assetObj.alertSentId = alertSentData.alertSentId;
        assetObj.alertId = alertSentData.alertId;
        assetObj.deviceAddressId = alertSentData.deviceAddressId;
        assetObj.deviceAddressType = alertSentData.deviceAddressType;
        assetObj.time = alertSentData.time;
        
        // 3 Emit the event
        var event = factory.newEvent(NS, 'CreateAlertSentEvent');
        event.alertSentId = alertSentData.alertSentId;

        
        emit(event);

        // 4. update the registry
        return registryObj.update(assetObj);
    });
}