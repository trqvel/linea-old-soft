export const bridgeLineaMain = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "BlockTimestampError",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "EmptyBlock",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "EmptyBlockDataArray",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "FeePaymentFailed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "FeeTooLow",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidProof",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidProofType",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "pauseType",
        "type": "bytes32"
      }
    ],
    "name": "IsNotPaused",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "pauseType",
        "type": "bytes32"
      }
    ],
    "name": "IsPaused",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "messageHash",
        "type": "bytes32"
      }
    ],
    "name": "L1L2MessageNotSent",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LimitIsZero",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "inde",
        "type": "uint256"
      }
    ],
    "name": "MemoryOutOfBounds",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "messageHash",
        "type": "bytes32"
      }
    ],
    "name": "MessageAlreadyReceived",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MessageAlreadySent",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MessageDoesNotExistOrHasAlreadyBeenClaimed",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "destination",
        "type": "address"
      }
    ],
    "name": "MessageSendingFailed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotList",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "PeriodIsZero",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ProofIsEmpty",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "RateLimitExceeded",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "StartingRootHashDoesNotMatch",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TransactionShort",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "UnknownTransactionType",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ValueSentTooLow",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ValueShouldBeGreaterThanFee",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "WrongBytesLength",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ZeroAddressNotAllowed",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "resettingAddress",
        "type": "address"
      }
    ],
    "name": "AmountUsedInPeriodReset",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "blockNumber",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "stateRootHash",
        "type": "bytes32"
      }
    ],
    "name": "BlockFinalized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "lastBlockFinalized",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "startingRootHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "finalRootHash",
        "type": "bytes32"
      }
    ],
    "name": "BlocksVerificationDone",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32[]",
        "name": "messageHashes",
        "type": "bytes32[]"
      }
    ],
    "name": "L1L2MessagesReceivedOnL2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "messageHash",
        "type": "bytes32"
      }
    ],
    "name": "L2L1MessageHashAddedToInbox",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "amountChangeBy",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "amountUsedLoweredToLimit",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "usedAmountResetToZero",
        "type": "bool"
      }
    ],
    "name": "LimitAmountChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "_messageHash",
        "type": "bytes32"
      }
    ],
    "name": "MessageClaimed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_fee",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_nonce",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "_calldata",
        "type": "bytes"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "_messageHash",
        "type": "bytes32"
      }
    ],
    "name": "MessageSent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "messageSender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "pauseType",
        "type": "bytes32"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "newAdminRole",
        "type": "bytes32"
      }
    ],
    "name": "RoleAdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "messageSender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "pauseType",
        "type": "bytes32"
      }
    ],
    "name": "UnPaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "verifierAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "proofType",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "verifierSetBy",
        "type": "address"
      }
    ],
    "name": "VerifierAddressChanged",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "GENERAL_PAUSE_TYPE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "INBOX_STATUS_RECEIVED",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "INBOX_STATUS_UNKNOWN",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "L1_L2_PAUSE_TYPE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "L2_L1_PAUSE_TYPE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "OPERATOR_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "OUTBOX_STATUS_RECEIVED",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "OUTBOX_STATUS_SENT",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "OUTBOX_STATUS_UNKNOWN",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "PAUSE_MANAGER_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "PROVING_SYSTEM_PAUSE_TYPE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "RATE_LIMIT_SETTER_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_fee",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "_feeRecipient",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "_calldata",
        "type": "bytes"
      },
      {
        "internalType": "uint256",
        "name": "_nonce",
        "type": "uint256"
      }
    ],
    "name": "claimMessage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentL2BlockNumber",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentPeriodAmountInWei",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentPeriodEnd",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentTimestamp",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "blockRootHash",
            "type": "bytes32"
          },
          {
            "internalType": "uint32",
            "name": "l2BlockTimestamp",
            "type": "uint32"
          },
          {
            "internalType": "bytes[]",
            "name": "transactions",
            "type": "bytes[]"
          },
          {
            "internalType": "bytes32[]",
            "name": "l2ToL1MsgHashes",
            "type": "bytes32[]"
          },
          {
            "internalType": "bytes",
            "name": "fromAddresses",
            "type": "bytes"
          },
          {
            "internalType": "uint16[]",
            "name": "batchReceptionIndices",
            "type": "uint16[]"
          }
        ],
        "internalType": "struct IZkEvmV2.BlockData[]",
        "name": "_blocksData",
        "type": "tuple[]"
      },
      {
        "internalType": "bytes",
        "name": "_proof",
        "type": "bytes"
      },
      {
        "internalType": "uint256",
        "name": "_proofType",
        "type": "uint256"
      },
      {
        "internalType": "bytes32",
        "name": "_parentStateRootHash",
        "type": "bytes32"
      }
    ],
    "name": "finalizeBlocks",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "blockRootHash",
            "type": "bytes32"
          },
          {
            "internalType": "uint32",
            "name": "l2BlockTimestamp",
            "type": "uint32"
          },
          {
            "internalType": "bytes[]",
            "name": "transactions",
            "type": "bytes[]"
          },
          {
            "internalType": "bytes32[]",
            "name": "l2ToL1MsgHashes",
            "type": "bytes32[]"
          },
          {
            "internalType": "bytes",
            "name": "fromAddresses",
            "type": "bytes"
          },
          {
            "internalType": "uint16[]",
            "name": "batchReceptionIndices",
            "type": "uint16[]"
          }
        ],
        "internalType": "struct IZkEvmV2.BlockData[]",
        "name": "_blocksData",
        "type": "tuple[]"
      }
    ],
    "name": "finalizeBlocksWithoutProof",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleAdmin",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "grantRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "inboxL2L1MessageStatus",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_initialStateRootHash",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "_initialL2BlockNumber",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "_defaultVerifier",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_securityCouncil",
        "type": "address"
      },
      {
        "internalType": "address[]",
        "name": "_operators",
        "type": "address[]"
      },
      {
        "internalType": "uint256",
        "name": "_rateLimitPeriodInSeconds",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_rateLimitAmountInWei",
        "type": "uint256"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "limitInWei",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nextMessageNumber",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "outboxL1L2MessageStatus",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_pauseType",
        "type": "bytes32"
      }
    ],
    "name": "pauseByType",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "pauseTypeStatuses",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "periodInSeconds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "renounceRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "resetAmountUsedInPeriod",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "resetRateLimitAmount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "revokeRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_fee",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "_calldata",
        "type": "bytes"
      }
    ],
    "name": "sendMessage",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "sender",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newVerifierAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_proofType",
        "type": "uint256"
      }
    ],
    "name": "setVerifierAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "stateRootHashes",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "_pauseType",
        "type": "bytes32"
      }
    ],
    "name": "unPauseByType",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "verifiers",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]

export const abiToken = [
  {
      "type":"function",
      "name":"balanceOf",
      "inputs": [{"name":"account","type":"address"}],
      "outputs": [{"name":"amount","type":"uint256"}]
  },
  {
      "type":"function",
      "name":"allowance",
      "inputs": [
          {"name":"owner","type":"address"},
          {"name":"spender","type":"address"}
      ],
      "outputs": [{"name":"amount","type":"uint256"}]
  },
  {
      "type":"function",
      "name":"decimals",
      "inputs": [],
      "outputs": [{"name":"","type":"uint8"}]
  },
  {
      "type":"function",
      "name":"transfer",
      "inputs": [
          {"name":"recipient","type":"address"},
          {"name":"amount","type":"uint256"}
      ]
  },
  {
      "type":"function",
      "name":"transferFrom",
      "inputs": [
          {"name":"sender","type":"address"},
          {"name":"recipient","type":"address"},
          {"name":"amount","type":"uint256"}
      ]
  },
  {
      "type":"function",
      "name":"approve",
      "inputs": [
          {"name":"spender","type":"address"},
          {"name":"amount","type":"uint256"}
      ]
  }
]