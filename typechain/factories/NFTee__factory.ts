/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTee, NFTeeInterface } from "../NFTee";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxNfts",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_NFTS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "freeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162002adf38038062002adf8339818101604052810190620000379190620001ad565b6040518060400160405280600581526020017f4e465465650000000000000000000000000000000000000000000000000000008152506040518060400160405280600581526020017f4e465445450000000000000000000000000000000000000000000000000000008152508160009080519060200190620000bb929190620000e6565b508060019080519060200190620000d4929190620000e6565b50505080608081815250505062000262565b828054620000f490620001e3565b90600052602060002090601f01602090048101928262000118576000855562000164565b82601f106200013357805160ff191683800117855562000164565b8280016001018555821562000164579182015b828111156200016357825182559160200191906001019062000146565b5b50905062000173919062000177565b5090565b5b808211156200019257600081600090555060010162000178565b5090565b600081519050620001a78162000248565b92915050565b600060208284031215620001c057600080fd5b6000620001d08482850162000196565b91505092915050565b6000819050919050565b60006002820490506001821680620001fc57607f821691505b6020821081141562000213576200021262000219565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6200025381620001d9565b81146200025f57600080fd5b50565b60805161285a620002856000396000818161050501526106c1015261285a6000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80635b70ea9f11610097578063a22cb46511610066578063a22cb46514610272578063b88d4fde1461028e578063c87b56dd146102aa578063e985e9c5146102da576100f5565b80635b70ea9f146101ea5780636352211e146101f457806370a082311461022457806395d89b4114610254576100f5565b8063093d8c64116100d3578063093d8c6414610178578063095ea7b31461019657806323b872dd146101b257806342842e0e146101ce576100f5565b806301ffc9a7146100fa57806306fdde031461012a578063081812fc14610148575b600080fd5b610114600480360381019061010f91906119f0565b61030a565b6040516101219190611dd3565b60405180910390f35b6101326103ec565b60405161013f9190611dee565b60405180910390f35b610162600480360381019061015d9190611a42565b61047e565b60405161016f9190611d6c565b60405180910390f35b610180610503565b60405161018d9190611ff0565b60405180910390f35b6101b060048036038101906101ab91906119b4565b610527565b005b6101cc60048036038101906101c791906118ae565b61063f565b005b6101e860048036038101906101e391906118ae565b61069f565b005b6101f26106bf565b005b61020e60048036038101906102099190611a42565b610749565b60405161021b9190611d6c565b60405180910390f35b61023e60048036038101906102399190611849565b6107fb565b60405161024b9190611ff0565b60405180910390f35b61025c6108b3565b6040516102699190611dee565b60405180910390f35b61028c60048036038101906102879190611978565b610945565b005b6102a860048036038101906102a391906118fd565b61095b565b005b6102c460048036038101906102bf9190611a42565b6109bd565b6040516102d19190611dee565b60405180910390f35b6102f460048036038101906102ef9190611872565b610a64565b6040516103019190611dd3565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103d557507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103e557506103e482610af8565b5b9050919050565b6060600080546103fb90612215565b80601f016020809104026020016040519081016040528092919081815260200182805461042790612215565b80156104745780601f1061044957610100808354040283529160200191610474565b820191906000526020600020905b81548152906001019060200180831161045757829003601f168201915b5050505050905090565b600061048982610b62565b6104c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104bf90611f50565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600061053282610749565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059a90611f90565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105c2610bce565b73ffffffffffffffffffffffffffffffffffffffff1614806105f157506105f0816105eb610bce565b610a64565b5b610630576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062790611ed0565b60405180910390fd5b61063a8383610bd6565b505050565b61065061064a610bce565b82610c8f565b61068f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068690611fb0565b60405180910390fd5b61069a838383610d6d565b505050565b6106ba8383836040518060200160405280600081525061095b565b505050565b7f000000000000000000000000000000000000000000000000000000000000000060065410610723576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071a90611fd0565b60405180910390fd5b6006600081548092919061073690612278565b919050555061074733600654610fd4565b565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e990611f10565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561086c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086390611ef0565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546108c290612215565b80601f01602080910402602001604051908101604052809291908181526020018280546108ee90612215565b801561093b5780601f106109105761010080835404028352916020019161093b565b820191906000526020600020905b81548152906001019060200180831161091e57829003601f168201915b5050505050905090565b610957610950610bce565b8383610ff2565b5050565b61096c610966610bce565b83610c8f565b6109ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109a290611fb0565b60405180910390fd5b6109b78484848461115f565b50505050565b60606109c882610b62565b610a07576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109fe90611f70565b60405180910390fd5b6000610a116111bb565b90506000815111610a315760405180602001604052806000815250610a5c565b80610a3b846111d2565b604051602001610a4c929190611d48565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610c4983610749565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610c9a82610b62565b610cd9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd090611eb0565b60405180910390fd5b6000610ce483610749565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610d265750610d258185610a64565b5b80610d6457508373ffffffffffffffffffffffffffffffffffffffff16610d4c8461047e565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610d8d82610749565b73ffffffffffffffffffffffffffffffffffffffff1614610de3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dda90611e30565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e53576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4a90611e70565b60405180910390fd5b610e5e83838361137f565b610e69600082610bd6565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610eb9919061212b565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f1091906120a4565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610fcf838383611384565b505050565b610fee828260405180602001604052806000815250611389565b5050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611061576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161105890611e90565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516111529190611dd3565b60405180910390a3505050565b61116a848484610d6d565b611176848484846113e4565b6111b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ac90611e10565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b6060600082141561121a576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061137a565b600082905060005b6000821461124c57808061123590612278565b915050600a8261124591906120fa565b9150611222565b60008167ffffffffffffffff81111561128e577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156112c05781602001600182028036833780820191505090505b5090505b60008514611373576001826112d9919061212b565b9150600a856112e891906122c1565b60306112f491906120a4565b60f81b818381518110611330577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561136c91906120fa565b94506112c4565b8093505050505b919050565b505050565b505050565b611393838361157b565b6113a060008484846113e4565b6113df576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113d690611e10565b60405180910390fd5b505050565b60006114058473ffffffffffffffffffffffffffffffffffffffff16611755565b1561156e578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261142e610bce565b8786866040518563ffffffff1660e01b81526004016114509493929190611d87565b602060405180830381600087803b15801561146a57600080fd5b505af192505050801561149b57506040513d601f19601f820116820180604052508101906114989190611a19565b60015b61151e573d80600081146114cb576040519150601f19603f3d011682016040523d82523d6000602084013e6114d0565b606091505b50600081511415611516576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150d90611e10565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611573565b600190505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156115eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115e290611f30565b60405180910390fd5b6115f481610b62565b15611634576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161162b90611e50565b60405180910390fd5b6116406000838361137f565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461169091906120a4565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461175160008383611384565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600061178b61178684612030565b61200b565b9050828152602081018484840111156117a357600080fd5b6117ae8482856121d3565b509392505050565b6000813590506117c5816127c8565b92915050565b6000813590506117da816127df565b92915050565b6000813590506117ef816127f6565b92915050565b600081519050611804816127f6565b92915050565b600082601f83011261181b57600080fd5b813561182b848260208601611778565b91505092915050565b6000813590506118438161280d565b92915050565b60006020828403121561185b57600080fd5b6000611869848285016117b6565b91505092915050565b6000806040838503121561188557600080fd5b6000611893858286016117b6565b92505060206118a4858286016117b6565b9150509250929050565b6000806000606084860312156118c357600080fd5b60006118d1868287016117b6565b93505060206118e2868287016117b6565b92505060406118f386828701611834565b9150509250925092565b6000806000806080858703121561191357600080fd5b6000611921878288016117b6565b9450506020611932878288016117b6565b935050604061194387828801611834565b925050606085013567ffffffffffffffff81111561196057600080fd5b61196c8782880161180a565b91505092959194509250565b6000806040838503121561198b57600080fd5b6000611999858286016117b6565b92505060206119aa858286016117cb565b9150509250929050565b600080604083850312156119c757600080fd5b60006119d5858286016117b6565b92505060206119e685828601611834565b9150509250929050565b600060208284031215611a0257600080fd5b6000611a10848285016117e0565b91505092915050565b600060208284031215611a2b57600080fd5b6000611a39848285016117f5565b91505092915050565b600060208284031215611a5457600080fd5b6000611a6284828501611834565b91505092915050565b611a748161215f565b82525050565b611a8381612171565b82525050565b6000611a9482612061565b611a9e8185612077565b9350611aae8185602086016121e2565b611ab7816123ae565b840191505092915050565b6000611acd8261206c565b611ad78185612088565b9350611ae78185602086016121e2565b611af0816123ae565b840191505092915050565b6000611b068261206c565b611b108185612099565b9350611b208185602086016121e2565b80840191505092915050565b6000611b39603283612088565b9150611b44826123bf565b604082019050919050565b6000611b5c602583612088565b9150611b678261240e565b604082019050919050565b6000611b7f601c83612088565b9150611b8a8261245d565b602082019050919050565b6000611ba2602483612088565b9150611bad82612486565b604082019050919050565b6000611bc5601983612088565b9150611bd0826124d5565b602082019050919050565b6000611be8602c83612088565b9150611bf3826124fe565b604082019050919050565b6000611c0b603883612088565b9150611c168261254d565b604082019050919050565b6000611c2e602a83612088565b9150611c398261259c565b604082019050919050565b6000611c51602983612088565b9150611c5c826125eb565b604082019050919050565b6000611c74602083612088565b9150611c7f8261263a565b602082019050919050565b6000611c97602c83612088565b9150611ca282612663565b604082019050919050565b6000611cba602f83612088565b9150611cc5826126b2565b604082019050919050565b6000611cdd602183612088565b9150611ce882612701565b604082019050919050565b6000611d00603183612088565b9150611d0b82612750565b604082019050919050565b6000611d23601283612088565b9150611d2e8261279f565b602082019050919050565b611d42816121c9565b82525050565b6000611d548285611afb565b9150611d608284611afb565b91508190509392505050565b6000602082019050611d816000830184611a6b565b92915050565b6000608082019050611d9c6000830187611a6b565b611da96020830186611a6b565b611db66040830185611d39565b8181036060830152611dc88184611a89565b905095945050505050565b6000602082019050611de86000830184611a7a565b92915050565b60006020820190508181036000830152611e088184611ac2565b905092915050565b60006020820190508181036000830152611e2981611b2c565b9050919050565b60006020820190508181036000830152611e4981611b4f565b9050919050565b60006020820190508181036000830152611e6981611b72565b9050919050565b60006020820190508181036000830152611e8981611b95565b9050919050565b60006020820190508181036000830152611ea981611bb8565b9050919050565b60006020820190508181036000830152611ec981611bdb565b9050919050565b60006020820190508181036000830152611ee981611bfe565b9050919050565b60006020820190508181036000830152611f0981611c21565b9050919050565b60006020820190508181036000830152611f2981611c44565b9050919050565b60006020820190508181036000830152611f4981611c67565b9050919050565b60006020820190508181036000830152611f6981611c8a565b9050919050565b60006020820190508181036000830152611f8981611cad565b9050919050565b60006020820190508181036000830152611fa981611cd0565b9050919050565b60006020820190508181036000830152611fc981611cf3565b9050919050565b60006020820190508181036000830152611fe981611d16565b9050919050565b60006020820190506120056000830184611d39565b92915050565b6000612015612026565b90506120218282612247565b919050565b6000604051905090565b600067ffffffffffffffff82111561204b5761204a61237f565b5b612054826123ae565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006120af826121c9565b91506120ba836121c9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156120ef576120ee6122f2565b5b828201905092915050565b6000612105826121c9565b9150612110836121c9565b9250826121205761211f612321565b5b828204905092915050565b6000612136826121c9565b9150612141836121c9565b925082821015612154576121536122f2565b5b828203905092915050565b600061216a826121a9565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156122005780820151818401526020810190506121e5565b8381111561220f576000848401525b50505050565b6000600282049050600182168061222d57607f821691505b6020821081141561224157612240612350565b5b50919050565b612250826123ae565b810181811067ffffffffffffffff8211171561226f5761226e61237f565b5b80604052505050565b6000612283826121c9565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156122b6576122b56122f2565b5b600182019050919050565b60006122cc826121c9565b91506122d7836121c9565b9250826122e7576122e6612321565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b7f4d41585f535550504c595f524541434845440000000000000000000000000000600082015250565b6127d18161215f565b81146127dc57600080fd5b50565b6127e881612171565b81146127f357600080fd5b50565b6127ff8161217d565b811461280a57600080fd5b50565b612816816121c9565b811461282157600080fd5b5056fea26469706673582212201b1e093c3a79471de67c28bb42c69ad00e543da74ad2e6b89a6db2fa9b027fd764736f6c63430008040033";

export class NFTee__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    maxNfts: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTee> {
    return super.deploy(maxNfts, overrides || {}) as Promise<NFTee>;
  }
  getDeployTransaction(
    maxNfts: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(maxNfts, overrides || {});
  }
  attach(address: string): NFTee {
    return super.attach(address) as NFTee;
  }
  connect(signer: Signer): NFTee__factory {
    return super.connect(signer) as NFTee__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTeeInterface {
    return new utils.Interface(_abi) as NFTeeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NFTee {
    return new Contract(address, _abi, signerOrProvider) as NFTee;
  }
}
