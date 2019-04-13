/**
 * Place Import Request Transaction
 * @param {org.smartfoodnetwork.scm.PlaceImportRequest} importRequestData
 * @transaction
 * 
 * 1. Check for the validity of request data - throw error 
 * 2. Create the Import request asset
 * 3. Emit PlaceImportRequestEvent Event
 * 4. Add the importRequest asset to the registry
 */

function    PlaceImportRequest(importRequestData) {

    /**
     * 1. Validate the schedule data
     * If the date is a past date then throw an error
     */
    /**some code for validation */

    // Get the Asset Registry

    return getAssetRegistry('org.smartfoodnetwork.scm.ImportRequest')
    
        .then(function(importRequestRegistry){
            // Now add the ImportRequest - global function getFactory() called
            var  factory = getFactory();

            var  NS =  'org.smartfoodnetwork.scm';

            // Solution to exercise - Removed hardcoded value & invoked
            // generate the importRequest ID
            // 2.1 Set the importNumber... 
            var  importRequestId = generateId(importRequestData.productionType,importRequestData.postcode, importRequestData.importerId);
            var  importRequest = factory.newResource(NS,'ImportRequest',importRequestId);
            var availableExporter = "YCV5646";
            importRequest.address = importRequestData.importRequest;
            importRequest.productionType = importRequestData.productionType;
            importRequest.exporter = availableExporter;
            importRequest.quantity = importRequestData.quantity;
            importRequest.fdaApprovalId = "feg43tjb";
            importRequest.batchId = "def7834";
            importRequest.productId = "433fgvtrbtr";
            importRequest.address = importRequestData.address;

            // 3 Emit the event ImportOrderCreated
            var event = factory.newEvent(NS, 'PlaceImportRequestEvent');
            event.importRequestId = importRequestId;
            emit(event);

            // 4. Add to registry
            return importRequestRegistry.add(importRequest);
        });
}

/****
 * Creates the import request number
 */
function generateId(param1, param2, param3){
    var timeNow = new Date().getTime();
    return param1+'-'+param2+'-'+param3;
}

/**
 * Create Batch Transaction
 * @param {org.smartfoodnetwork.scm.CreateBatch} batchData
 * @transaction
 * 
 * 1. Check for the validity of request data - throw error 
 * 2. Create the asset
 * 3. Emit the Event
 * 4. Add the asset to the registry
 */

function CreateBatch(batchData){
    /**
     * 1. Validate the schedule data
     * If the date is a past date then throw an error
     */
    /**some code for validation */

    // Get the Asset Registry

    return getAssetRegistry('org.smartfoodnetwork.scm.Batch')

    .then(function(registryObj){
        // Now add the Batch - global function getFactory() called
        var  factory = getFactory();

        var  NS =  'org.smartfoodnetwork.scm';

        // Solution to exercise - Removed hardcoded value & invoked
        // generate the Request ID
        // 2.1 Set the Number... 
        var  batchId = generateId(batchData.productType,batchData.productionType, batchData.farmerId);
        var  assetObj = factory.newResource(NS,'Batch',batchId);
        assetObj.productType = batchData.productType;
        assetObj.productionType = batchData.productionType;
        assetObj.farmerId = batchData.farmerId;
        assetObj.batchId = batchId;

        
        // 3 Emit the event ImportOrderCreated
        var event = factory.newEvent(NS, 'CreateBatchEvent');
        event.batchId = batchId;
        emit(event);

        // 4. Add asset to registry
        return registryObj.add(assetObj);
    });
}


/**
 * Create Batch Transaction
 * @param {org.smartfoodnetwork.scm.UpdateBatch} batchData
 * @transaction
 * 
 * 1. Check for the validity of request data - throw error 
 * 2. Create the asset
 * 3. Emit the Event
 * 4. Add the asset to the registry
 */

function UpdateBatch(batchData){
    /**
     * 1. Validate the schedule data
     * If the date is a past date then throw an error
     */
    /**some code for validation */

    // Get the Asset Registry

    return getAssetRegistry('org.smartfoodnetwork.scm.Batch')

    .then(function(registryObj){
        // Now add the Batch - global function getFactory() called
        var  factory = getFactory();

        var  NS =  'org.smartfoodnetwork.scm';

        // Solution to exercise - Removed hardcoded value & invoked
        // generate the Request ID
        // 2.1 Set the Number... 
        var  batchId = batchData.batchId;
        var  assetObj = factory.newResource(NS,'Batch',batchId);
        assetObj.productType = batchData.productType;
        assetObj.productionType = batchData.productionType;
        assetObj.farmerId = batchData.farmerId;
        assetObj.batchId = batchId;

        
        // 3 Emit the event ImportOrderCreated
        var event = factory.newEvent(NS, 'UpdateBatchEvent');
        event.batchId = batchId;
        event.farmerId = batchData.farmerId;
        event.productionType = batchData.productionType;
        event.productType = batchData.productType;
        
        emit(event);

        // 4. Add asset to registry
        return registryObj.add(assetObj);
    });
}


/**
 * Request Purchase Order Transaction
 * @param {org.smartfoodnetwork.scm.CreatePurchaseOrder} purchseOrderData
 * @transaction
 * 
 * 1. Check for the validity of request data - throw error 
 * 2. Create the asset
 * 3. Emit the Event
 * 4. Add the asset to the registry
 */

function createPurchaseOrder(purchseOrderData){
   /** farmer, exporter */
   /** exporter, importer */

    /**
     * 1. Validate the schedule data
     * If the date is a past date then throw an error
     */
    /**some code for validation */

    // Get the Asset Registry

    return getAssetRegistry('org.smartfoodnetwork.scm.PurchaseOrder')

    .then(function(registryObj){
        // Now add the Batch - global function getFactory() called
        var  factory = getFactory();

        var  NS =  'org.smartfoodnetwork.scm';

        // Solution to exercise - Removed hardcoded value & invoked
        // generate the Request ID
        // 2.1 Set the Number... 
        var  productId = purchseOrderData.purchaseOrder.productId;
        var  assetObj = factory.newResource(NS,'PurchaseOrder',productId);

         //copy all the elements from transaction object to asset object
        for (var attrname in purchseOrderData.purchaseOrder) 
        { 
            assetObj[attrname] = purchseOrderData.purchaseOrder[attrname]; 
        }
        
        // 3 Emit the event ImportOrderCreated
        var event = factory.newEvent(NS, 'CreatePurchaseOrderEvent');
        event.productId = productId;
        emit(event);

        // 4. Add asset to registry
        return registryObj.add(assetObj);
    });
   }

/**
 * Approve Purchase Order Transaction
 * @param {org.smartfoodnetwork.scm.ApprovePurchaseOrder} purchseOrderData
 * @transaction
 * 
 * 1. Check for the validity of request data - throw error 
 * 2. Create the asset
 * 3. Emit the Event
 * 4. Add the asset to the registry
 */

function approvePurchaseOrder(purchseOrderData){
    /** farmer, exporter */
    /** exporter, importer */
 
     /**
      * 1. Validate the schedule data
      * If the date is a past date then throw an error
      */
     /**some code for validation */
 
     // Get the Asset Registry

     return getAssetRegistry('org.smartfoodnetwork.scm.PurchaseOrder')
 
     .then(function(registryObj){
         // Now add the Batch - global function getFactory() called
         var  factory = getFactory();
 
         var  NS =  'org.smartfoodnetwork.scm';
 
         // Solution to exercise - Removed hardcoded value & invoked
         // generate the Request ID
         // 2.1 Set the Number... 
         var  productId = purchseOrderData.purchaseOrder.productId;
         var  assetObj = factory.newResource(NS,'PurchaseOrder',productId);
 
          //copy all the elements from transaction object to asset object
         for (var attrname in purchseOrderData.purchaseOrder) 
         { 
             assetObj[attrname] = purchseOrderData.purchaseOrder[attrname]; 
         }
         
         // 3 Emit the event 
         var event = factory.newEvent(NS, 'ApprovePurchaseOrderEvent');
         event.productId = productId;
         emit(event);
 
         // 4. Add asset to registry
         return registryObj.add(assetObj);
     });
    
 }

/**
 * Create Farm Product Transaction
 * @param {org.smartfoodnetwork.scm.CreateFarmProduct} farmProductData
 * @transaction
 * 
 * 1. Check for the validity of request data - throw error 
 * 2. Create the asset
 * 3. Emit the Event
 * 4. Add the asset to the registry
 */

function creatFarmProduct(farmProductData){
    /** farmer, exporter */
    /** exporter, importer */
 
     /**
      * 1. Validate the schedule data
      * If the date is a past date then throw an error
      */
     /**some code for validation */
 
     // Get the Asset Registry
 
     return getAssetRegistry('org.smartfoodnetwork.scm.FarmProduct')
 
     .then(function(registryObj){
         // Now add the Batch - global function getFactory() called
         var  factory = getFactory();
 
         var  NS =  'org.smartfoodnetwork.scm';

         var NS_FarmProduct = 'org.smartfoodnetwork.scm.FarmProduct';
 
         // Solution to exercise - Removed hardcoded value & invoked
         // generate the Request ID
         // 2.1 Set the Number... 
         var  productId = farmProductData.farmProduct.productId;
         var  assetObj = factory.newResource(NS,'FarmProduct',productId);

         //copy all the elements from transaction object to asset object
        for (var attrname in farmProductData.farmProduct) 
        { 
            assetObj[attrname] = farmProductData.farmProduct[attrname]; 
        }

        assetObj.productId = productId;
         
        // 3 Emit the event
         var event = factory.newEvent(NS, 'CreateFarmProductEvent');
         event.productId = productId;
         emit(event);
 
         // 4. Add asset to registry
         return registryObj.add(assetObj);
     });
    
 }


function confirmOrder(){
    /**farmer or exporter */
}

function createSalesAgreement(){
    /**farmer and importer */
}

function createInsuranceAgreement(){

}

function logisticAgreement(){

}

function trackDelivery(){
/**from farmer - exporter */
/**from exporter to importer */
} 

function deliveryNotification(){

}

function createLetterOfCredit(){

}

function createLetterOfShipment(){

}
function regulatorCheck(){

}

function paymentNotification(){

}



/**
 * transfer Smart Food Transaction
 * @param {org.smartfoodnetwork.scm.transferSmartFood} smartFoodData
 * @transaction
 * 
 * 1. Check for the validity of request data - throw error 
 * 2. Create the asset
 * 3. Emit the Event
 * 4. Add the asset to the registry
 */

function transferSmartFood(smartFoodData){
 
     /**
      * 1. Validate the schedule data
      * If the date is a past date then throw an error
      */
     /**some code for validation */
 
     // Get the Asset Registry
 
     return getAssetRegistry('org.smartfoodnetwork.scm.SmartFood')
 
     .then(function(registryObj){
         // Now add the Batch - global function getFactory() called
         var  factory = getFactory();
 
         var  NS =  'org.smartfoodnetwork.scm';

         var NS_FarmProduct = 'org.smartfoodnetwork.scm.transferSmartFood';
 
         // Solution to exercise - Removed hardcoded value & invoked
         // generate the Request ID
         // 2.1 Set the Number... 
         var  smartFoodId = smartFoodData.smartFoodId;
         var requestId = smartFoodData.requestId;

         var  assetObj = factory.newResource(NS,'SmartFood',smartFoodId);

         //copy all the elements from transaction object to asset object
         for (var attrname in smartFoodData) 
         { 
             assetObj[attrname] = smartFoodData[attrname]; 
         }

        /*assetObj.movementStatus = "Exporter";
        assetObj.buyer = smartFoodData.buyer;
        assetObj.seller = smartFoodData.seller;*/
    
         
        // 3 Emit the event
         var eventObj = factory.newEvent(NS, 'transferSmartFoodEvent');
         /*for (var attrname in smartFoodData.smartFood) 
         { 
            eventObj[attrname] = smartFoodData.smartFood[attrname]; 
         }*/
         eventObj.buyer = smartFoodData.buyer;
         eventObj.seller = smartFoodData.seller;
         eventObj.requestId = smartFoodData.requestId;
         eventObj.smartFoodId = smartFoodData.smartFoodId;
         emit(eventObj);
 
         // 4. Add asset to registry
         return registryObj.add(assetObj);
     });
    
 }


 /**
 *
 * @param {org.smartfoodnetwork.scm.transferSmartFood1} smartFoodData - model instance
 * @transaction
 */
async function transferSmartFood1(smartFoodData) {  // eslint-disable-line no-unused-vars
    //console.log('transferSmartFood');

    //smartFoodData.buyer = "andre";
	var  NS =  'org.smartfoodnetwork.scm';
    var smartFoodId = smartFoodData.smartFoodId;
  var  factory = getFactory();
  	var  movementRequest = factory.newResource(NS,'SmartFood',smartFoodId);
  
           for (var attrname in smartFoodData) 
         { 
             movementRequest[attrname] = smartFoodData[attrname]; 
         }
  
  //movementRequest.buyer = smartFoodData.buyer;
  
  const ar = await getAssetRegistry('org.smartfoodnetwork.scm.SmartFood');
    await ar.update(movementRequest);

    
}
//////////////////////////////////////////////////////////////////


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

