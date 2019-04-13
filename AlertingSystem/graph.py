# imports
from collections import defaultdict 
import requests
import json

# function for adding edge to graph 
graph = defaultdict(list) 
def addEdge(graph,u,v): 
	graph[u].append(v) 

# definition of function 
def generate_edges(graph): 
	edges = [] 

	# for each node in graph 
	for node in graph: 
		
		# for each neighbour node of a single node 
		for neighbour in graph[node]: 
			
			# if edge exists then append 
			edges.append((node, neighbour)) 
	return edges 

# compromised
def compromised_nodes(graphs, node, tab): 
    tab += 1
    for source, destination in graphs:
        if(source is node[0]):
            spacer = ''
            for x in range(tab):
                spacer += ' '         
            print(spacer + 'Contaminated: ' + source + ', ' + destination[0]+ ', ' + destination[1])
            compromised_nodes(graphs, destination, tab)
           


class FridgeOwnerClass:
    def __init__(self, name, phoneNumber):
        self.name = name
        self.phoneNumber = phoneNumber



# Send SMS to fridge owners
def sms_leaf_nodes(graphs, fridgeOwners, node): 
    for source, destination in graphs:
        if(source is node[0]):
            if(destination[2] is 'fridge'):
                for owner in FridgeOwners:
                    if(owner.name is destination[0]):
                        print('SMS Alert to ' + owner.phoneNumber + ' : Product ' + destination[1] + ' is part of a contaminated supply chain')
                        # #FridgeOwners = []
                        
                        # # TODO 
                        
                        
                        # data = {}
                        # data['phoneNumber'] = owner.phoneNumber
                        # data['product'] = destination[1]
                        # json_data = json.dumps(data)
                        # print(json_data)


            sms_leaf_nodes(graphs, fridgeOwners, destination)



# Blockchain transactions
class TransactionClass:
    def __init__(self, seller, buyer, smartfoodId, buyerType):
        self.seller = seller
        self.buyer = buyer
        self.smartfoodId = smartfoodId
        self.buyerType = buyerType

# Blockchain fridge owners
class FridgeOwnerClass:
    def __init__(self, name, phoneNumber):
        self.name = name
        self.phoneNumber = phoneNumber

# http://smartfood.network:3000/api/queries/FarmerByParticipantId?participantId=a
FridgeOwners = []
FridgeOwners.append(FridgeOwnerClass('g','0646092115'))
FridgeOwners.append(FridgeOwnerClass('h','0646092116'))
FridgeOwners.append(FridgeOwnerClass('i','0646092117'))
FridgeOwners.append(FridgeOwnerClass('j','0646092118'))
FridgeOwners.append(FridgeOwnerClass('k','0646092119'))
FridgeOwners.append(FridgeOwnerClass('l','0646092120'))




##
#
#   Transactions
#
##

useMockTransactions = True


if(useMockTransactions):
    Transactions = []
    Transactions.append(TransactionClass('a', 'c', '001', 'farmer'))
    Transactions.append(TransactionClass('a', 'd', '001', 'farmer'))

    Transactions.append(TransactionClass('c', 'g', '001', 'fridge'))
    Transactions.append(TransactionClass('c', 'h', '001', 'fridge'))
    Transactions.append(TransactionClass('c', 'i', '001', 'fridge'))

    Transactions.append(TransactionClass('d', 'h', '001', 'fridge'))
    Transactions.append(TransactionClass('d', 'i', '001', 'fridge'))
    Transactions.append(TransactionClass('d', 'j', '001', 'fridge'))


    Transactions.append(TransactionClass('b', 'd', '002', 'lifter'))
    Transactions.append(TransactionClass('b', 'e', '002', 'lifter'))
    Transactions.append(TransactionClass('b', 'f', '002', 'lifter'))

    Transactions.append(TransactionClass('d', 'h', '002', 'fridge'))
    Transactions.append(TransactionClass('d', 'i', '002', 'fridge'))
    Transactions.append(TransactionClass('d', 'j', '002', 'fridge'))

    Transactions.append(TransactionClass('e', 'i', '002', 'fridge'))

    Transactions.append(TransactionClass('f', 'j', '002', 'fridge'))
    Transactions.append(TransactionClass('f', 'k', '002', 'fridge'))
    Transactions.append(TransactionClass('f', 'l', '002', 'fridge'))

    # declaration of graph as dictionary based on transactions in the chain
    for Transaction in Transactions:
        addEdge(graph,Transaction.seller,(Transaction.buyer, Transaction.smartfoodId, Transaction.buyerType)) 

else:

    # Get transactions from the blockchain
    link = "http://smartfood.network:3000/api/system/historian"
    f = requests.get(link)
    HistorianRecords = json.loads(f.text)

    i = 0
    for HistorianRecord in HistorianRecords:
        if(len(HistorianRecord["eventsEmitted"]) != 0):
            d = HistorianRecord["eventsEmitted"][0]
            addEdge(graph,d['sender'],(d['receiver'], d['productCode'], d['receiverType'])) 
            print('sender: ' + d['sender'])   
            print('receiver: ' +d['receiver'])
            print('productCode: ' +d['productCode'])
            print('receiverType: ' +d['receiverType'])




##
#
#   Debug information
#
##


# to print generated graph 
graphs = generate_edges(graph)
print('All transactions')
print(graphs)
print(' ')

# all nodes that follow the 'a' node
print('Contaminated farmer product 001 from farmer \'a\'')
compromised_nodes(graphs, 'a', 0)
print(' ')

# send SMS to all the fridges
print('Send warning to fridge owners')
result = []
sms_leaf_nodes(graphs, FridgeOwners, 'a')
print(' ')


print(json.dumps(result))

