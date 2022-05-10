/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTeeStaker, NFTeeStakerInterface } from "../NFTeeStaker";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftContract",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
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
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "getReward",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "stakers",
    outputs: [
      {
        internalType: "uint256",
        name: "currentYield",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastCheckpoint",
        type: "uint256",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenOwners",
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
    inputs: [],
    name: "totalSupply",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002a7a38038062002a7a8339818101604052810190620000379190620001f8565b8181816003908051906020019062000051929190620000bf565b5080600490805190602001906200006a929190620000bf565b505050600160058190555082600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506200043e565b828054620000cd9062000349565b90600052602060002090601f016020900481019282620000f157600085556200013d565b82601f106200010c57805160ff19168380011785556200013d565b828001600101855582156200013d579182015b828111156200013c5782518255916020019190600101906200011f565b5b5090506200014c919062000150565b5090565b5b808211156200016b57600081600090555060010162000151565b5090565b6000620001866200018084620002a9565b62000280565b9050828152602081018484840111156200019f57600080fd5b620001ac84828562000313565b509392505050565b600081519050620001c58162000424565b92915050565b600082601f830112620001dd57600080fd5b8151620001ef8482602086016200016f565b91505092915050565b6000806000606084860312156200020e57600080fd5b60006200021e86828701620001b4565b935050602084015167ffffffffffffffff8111156200023c57600080fd5b6200024a86828701620001cb565b925050604084015167ffffffffffffffff8111156200026857600080fd5b6200027686828701620001cb565b9150509250925092565b60006200028c6200029f565b90506200029a82826200037f565b919050565b6000604051905090565b600067ffffffffffffffff821115620002c757620002c6620003e4565b5b620002d28262000413565b9050602081019050919050565b6000620002ec82620002f3565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b838110156200033357808201518184015260208101905062000316565b8381111562000343576000848401525b50505050565b600060028204905060018216806200036257607f821691505b60208210811415620003795762000378620003b5565b5b50919050565b6200038a8262000413565b810181811067ffffffffffffffff82111715620003ac57620003ab620003e4565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6200042f81620002df565b81146200043b57600080fd5b50565b61262c806200044e6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c806370a08231116100a2578063a9059cbb11610071578063a9059cbb1461030b578063c00007b01461033b578063dd62ed3e1461036b578063e449f3411461039b578063f8a14f46146103b757610116565b806370a082311461025b5780639168ae721461028b57806395d89b41146102bd578063a457c2d7146102db57610116565b806318160ddd116100e957806318160ddd146101b557806323b872dd146101d3578063313ce5671461020357806339509351146102215780634e71d92d1461025157610116565b806306fdde031461011b578063095ea7b3146101395780630fbf0a9314610169578063150b7a0214610185575b600080fd5b6101236103e7565b6040516101309190611d3a565b60405180910390f35b610153600480360381019061014e91906119e4565b610479565b6040516101609190611d04565b60405180910390f35b610183600480360381019061017e9190611a20565b61049c565b005b61019f600480360381019061019a9190611964565b6107f7565b6040516101ac9190611d1f565b60405180910390f35b6101bd610825565b6040516101ca9190611edc565b60405180910390f35b6101ed60048036038101906101e89190611915565b61082f565b6040516101fa9190611d04565b60405180910390f35b61020b61085e565b6040516102189190611f2e565b60405180910390f35b61023b600480360381019061023691906119e4565b610867565b6040516102489190611d04565b60405180910390f35b61025961089e565b005b61027560048036038101906102709190611887565b61095b565b6040516102829190611edc565b60405180910390f35b6102a560048036038101906102a09190611887565b6109a3565b6040516102b493929190611ef7565b60405180910390f35b6102c56109cd565b6040516102d29190611d3a565b60405180910390f35b6102f560048036038101906102f091906119e4565b610a5f565b6040516103029190611d04565b60405180910390f35b610325600480360381019061032091906119e4565b610ad6565b6040516103329190611d04565b60405180910390f35b61035560048036038101906103509190611887565b610af9565b6040516103629190611edc565b60405180910390f35b610385600480360381019061038091906118d9565b610bb3565b6040516103929190611edc565b60405180910390f35b6103b560048036038101906103b09190611a20565b610c3a565b005b6103d160048036038101906103cc9190611a61565b611040565b6040516103de9190611cb2565b60405180910390f35b6060600380546103f69061217f565b80601f01602080910402602001604051908101604052809291908181526020018280546104229061217f565b801561046f5780601f106104445761010080835404028352916020019161046f565b820191906000526020600020905b81548152906001019060200180831161045257829003601f168201915b5050505050905090565b600080610484611073565b905061049181858561107b565b600191505092915050565b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008160000154905060008351905060005b818110156107de573373ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e878481518110610587577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516040518263ffffffff1660e01b81526004016105ab9190611edc565b60206040518083038186803b1580156105c357600080fd5b505afa1580156105d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105fb91906118b0565b73ffffffffffffffffffffffffffffffffffffffff1614610651576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064890611e1c565b60405180910390fd5b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342842e0e33308885815181106106ca577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516040518463ffffffff1660e01b81526004016106f093929190611ccd565b600060405180830381600087803b15801561070a57600080fd5b505af115801561071e573d6000803e3d6000fd5b505050503360086000878481518110610760577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550683635c9adc5dea00000836107c99190611fb6565b925080806107d6906121e2565b9150506104f1565b506107e833611246565b81836000018190555050505050565b60007facb7d9e3059f17bdabc47ad03f0278ec3c162128a4c73cef5bc7ea8fcd3af9a6905095945050505050565b6000600254905090565b60008061083a611073565b90506108478582856112f1565b61085285858561137d565b60019150509392505050565b60006012905090565b600080610872611073565b90506108938185856108848589610bb3565b61088e9190611fb6565b61107b565b600191505092915050565b600260055414156108e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108db90611e7c565b60405180910390fd5b60026005819055506000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905061093833611246565b6109463382600101546115fe565b60008160010181905550506001600581905550565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60076020528060005260406000206000915090508060000154908060010154908060020154905083565b6060600480546109dc9061217f565b80601f0160208091040260200160405190810160405280929190818152602001828054610a089061217f565b8015610a555780601f10610a2a57610100808354040283529160200191610a55565b820191906000526020600020905b815481529060010190602001808311610a3857829003601f168201915b5050505050905090565b600080610a6a611073565b90506000610a788286610bb3565b905083811015610abd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab490611e9c565b60405180910390fd5b610aca828686840361107b565b60019250505092915050565b600080610ae1611073565b9050610aee81858561137d565b600191505092915050565b600080600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820154815250509050600081604001511415610b7d576000915050610bae565b620151808160000151826040015142610b969190612097565b610ba0919061203d565b610baa919061200c565b9150505b919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008160000154905060008351905060005b81811015611027573373ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610d38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2f90611dfc565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e878481518110610dc6577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516040518263ffffffff1660e01b8152600401610dea9190611edc565b60206040518083038186803b158015610e0257600080fd5b505afa158015610e16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3a91906118b0565b73ffffffffffffffffffffffffffffffffffffffff1614610e90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8790611d7c565b60405180910390fd5b600060086000878481518110610ecf577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008314610f4357683635c9adc5dea0000083610f409190612097565b92505b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342842e0e3033888581518110610fbc577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516040518463ffffffff1660e01b8152600401610fe293929190611ccd565b600060405180830381600087803b158015610ffc57600080fd5b505af1158015611010573d6000803e3d6000fd5b50505050808061101f906121e2565b915050610c8f565b5061103133611246565b81836000018190555050505050565b60086020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156110eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e290611e5c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561115b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115290611d9c565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516112399190611edc565b60405180910390a3505050565b61124f81610af9565b600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008282546112a09190611fb6565b9250508190555042600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555050565b60006112fd8484610bb3565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146113775781811015611369576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136090611dbc565b60405180910390fd5b611376848484840361107b565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156113ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113e490611e3c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561145d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161145490611d5c565b60405180910390fd5b61146883838361175e565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156114ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114e590611ddc565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115819190611fb6565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516115e59190611edc565b60405180910390a36115f8848484611763565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561166e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161166590611ebc565b60405180910390fd5b61167a6000838361175e565b806002600082825461168c9190611fb6565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546116e19190611fb6565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516117469190611edc565b60405180910390a361175a60008383611763565b5050565b505050565b505050565b600061177b61177684611f6e565b611f49565b9050808382526020820190508285602086028201111561179a57600080fd5b60005b858110156117ca57816117b08882611872565b84526020840193506020830192505060018101905061179d565b5050509392505050565b6000813590506117e3816125c8565b92915050565b6000815190506117f8816125c8565b92915050565b600082601f83011261180f57600080fd5b813561181f848260208601611768565b91505092915050565b60008083601f84011261183a57600080fd5b8235905067ffffffffffffffff81111561185357600080fd5b60208301915083600182028301111561186b57600080fd5b9250929050565b600081359050611881816125df565b92915050565b60006020828403121561189957600080fd5b60006118a7848285016117d4565b91505092915050565b6000602082840312156118c257600080fd5b60006118d0848285016117e9565b91505092915050565b600080604083850312156118ec57600080fd5b60006118fa858286016117d4565b925050602061190b858286016117d4565b9150509250929050565b60008060006060848603121561192a57600080fd5b6000611938868287016117d4565b9350506020611949868287016117d4565b925050604061195a86828701611872565b9150509250925092565b60008060008060006080868803121561197c57600080fd5b600061198a888289016117d4565b955050602061199b888289016117d4565b94505060406119ac88828901611872565b935050606086013567ffffffffffffffff8111156119c957600080fd5b6119d588828901611828565b92509250509295509295909350565b600080604083850312156119f757600080fd5b6000611a05858286016117d4565b9250506020611a1685828601611872565b9150509250929050565b600060208284031215611a3257600080fd5b600082013567ffffffffffffffff811115611a4c57600080fd5b611a58848285016117fe565b91505092915050565b600060208284031215611a7357600080fd5b6000611a8184828501611872565b91505092915050565b611a93816120cb565b82525050565b611aa2816120dd565b82525050565b611ab1816120e9565b82525050565b6000611ac282611f9a565b611acc8185611fa5565b9350611adc81856020860161214c565b611ae5816122e7565b840191505092915050565b6000611afd602383611fa5565b9150611b08826122f8565b604082019050919050565b6000611b20600a83611fa5565b9150611b2b82612347565b602082019050919050565b6000611b43602283611fa5565b9150611b4e82612370565b604082019050919050565b6000611b66601d83611fa5565b9150611b71826123bf565b602082019050919050565b6000611b89602683611fa5565b9150611b94826123e8565b604082019050919050565b6000611bac601683611fa5565b9150611bb782612437565b602082019050919050565b6000611bcf600d83611fa5565b9150611bda82612460565b602082019050919050565b6000611bf2602583611fa5565b9150611bfd82612489565b604082019050919050565b6000611c15602483611fa5565b9150611c20826124d8565b604082019050919050565b6000611c38601f83611fa5565b9150611c4382612527565b602082019050919050565b6000611c5b602583611fa5565b9150611c6682612550565b604082019050919050565b6000611c7e601f83611fa5565b9150611c898261259f565b602082019050919050565b611c9d81612135565b82525050565b611cac8161213f565b82525050565b6000602082019050611cc76000830184611a8a565b92915050565b6000606082019050611ce26000830186611a8a565b611cef6020830185611a8a565b611cfc6040830184611c94565b949350505050565b6000602082019050611d196000830184611a99565b92915050565b6000602082019050611d346000830184611aa8565b92915050565b60006020820190508181036000830152611d548184611ab7565b905092915050565b60006020820190508181036000830152611d7581611af0565b9050919050565b60006020820190508181036000830152611d9581611b13565b9050919050565b60006020820190508181036000830152611db581611b36565b9050919050565b60006020820190508181036000830152611dd581611b59565b9050919050565b60006020820190508181036000830152611df581611b7c565b9050919050565b60006020820190508181036000830152611e1581611b9f565b9050919050565b60006020820190508181036000830152611e3581611bc2565b9050919050565b60006020820190508181036000830152611e5581611be5565b9050919050565b60006020820190508181036000830152611e7581611c08565b9050919050565b60006020820190508181036000830152611e9581611c2b565b9050919050565b60006020820190508181036000830152611eb581611c4e565b9050919050565b60006020820190508181036000830152611ed581611c71565b9050919050565b6000602082019050611ef16000830184611c94565b92915050565b6000606082019050611f0c6000830186611c94565b611f196020830185611c94565b611f266040830184611c94565b949350505050565b6000602082019050611f436000830184611ca3565b92915050565b6000611f53611f64565b9050611f5f82826121b1565b919050565b6000604051905090565b600067ffffffffffffffff821115611f8957611f886122b8565b5b602082029050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000611fc182612135565b9150611fcc83612135565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156120015761200061222b565b5b828201905092915050565b600061201782612135565b915061202283612135565b9250826120325761203161225a565b5b828204905092915050565b600061204882612135565b915061205383612135565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561208c5761208b61222b565b5b828202905092915050565b60006120a282612135565b91506120ad83612135565b9250828210156120c0576120bf61222b565b5b828203905092915050565b60006120d682612115565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561216a57808201518184015260208101905061214f565b83811115612179576000848401525b50505050565b6000600282049050600182168061219757607f821691505b602082108114156121ab576121aa612289565b5b50919050565b6121ba826122e7565b810181811067ffffffffffffffff821117156121d9576121d86122b8565b5b80604052505050565b60006121ed82612135565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156122205761221f61222b565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4e6f74207374616b656400000000000000000000000000000000000000000000600082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f4e6f7420746865206f726967696e616c206f776e657200000000000000000000600082015250565b7f4e6f7420746865206f776e657200000000000000000000000000000000000000600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00600082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6125d1816120cb565b81146125dc57600080fd5b50565b6125e881612135565b81146125f357600080fd5b5056fea26469706673582212209f2d66e6ec602079177468323ac769f266b1d9a0d5da7cd202f53c9c4f6bd15164736f6c63430008040033";

export class NFTeeStaker__factory extends ContractFactory {
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
    _nftContract: string,
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTeeStaker> {
    return super.deploy(
      _nftContract,
      name,
      symbol,
      overrides || {}
    ) as Promise<NFTeeStaker>;
  }
  getDeployTransaction(
    _nftContract: string,
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _nftContract,
      name,
      symbol,
      overrides || {}
    );
  }
  attach(address: string): NFTeeStaker {
    return super.attach(address) as NFTeeStaker;
  }
  connect(signer: Signer): NFTeeStaker__factory {
    return super.connect(signer) as NFTeeStaker__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTeeStakerInterface {
    return new utils.Interface(_abi) as NFTeeStakerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTeeStaker {
    return new Contract(address, _abi, signerOrProvider) as NFTeeStaker;
  }
}