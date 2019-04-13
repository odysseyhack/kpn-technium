This folder the extract of eggnet.bna file. BusinessNetworkLedger is setup using Hyperledger Fabric and Hyperledger Composer

Three major components described in this folder (developed using Hyperledger Composer) are -

1) Models
The model file(.cto) contains the definitions of each class of asset, transaction, participant, and event. It implicitly extends the Hyperledger Composer System Model described in the modelling language documentation.

2) Libraries
The transaction processor function file(.js) contains the JavaScript logic to execute the transactions defined in the model file(.cto)

3) Permissions
Access controls are applied on the assets defined in .cto file based in the participant type. Rules are written in .acl file

4) Queries
Queries are defined in a query file (.qry) in the parent directory of the business network definition. Queries contain a WHERE clause, which defines the criteria by which assets or participants are selected.
