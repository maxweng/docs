# BancorNetwork

The BancorNetwork contract is the main entry point for Bancor token conversions.

It also allows for the conversion of any token in the Bancor Network to any other token in a single transaction by providing a conversion path.

A note on Conversion Path: Conversion path is a data structure that is used when converting a token to another token in the Bancor Network,

when the conversion cannot necessarily be done by a single converter and might require multiple 'hops'.

The path defines which converters should be used and what kind of conversion should be done in each step.

The path format doesn't include complex structure; instead, it is represented by a single array in which each 'hop' is represented by a 2-tuple - smart token & to token.

In addition, the first element is always the source token.

The smart token is only used as a pointer to a converter \(since converter addresses are more likely to change as opposed to smart token addresses\).

Format:

\[source token, smart token, to token, smart token, to token...\]

## Functions:

* [`constructor(contract IContractRegistry _registry)`](bancornetwork.md#BancorNetwork-constructor-contract-IContractRegistry-)
* [`setMaxAffiliateFee(uint256 _maxAffiliateFee)`](bancornetwork.md#BancorNetwork-setMaxAffiliateFee-uint256-)
* [`registerEtherToken(contract IEtherToken _token, bool _register)`](bancornetwork.md#BancorNetwork-registerEtherToken-contract-IEtherToken-bool-)
* [`convertFor2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, address _affiliateAccount, uint256 _affiliateFee)`](bancornetwork.md#BancorNetwork-convertFor2-contract-IERC20Token---uint256-uint256-address-address-uint256-)
* [`xConvert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId, address _affiliateAccount, uint256 _affiliateFee)`](bancornetwork.md#BancorNetwork-xConvert2-contract-IERC20Token---uint256-uint256-bytes32-bytes32-uint256-address-uint256-)
* [`getReturnByPath(contract IERC20Token[] _path, uint256 _amount)`](bancornetwork.md#BancorNetwork-getReturnByPath-contract-IERC20Token---uint256-)
* [`claimAndConvertFor2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, address _affiliateAccount, uint256 _affiliateFee)`](bancornetwork.md#BancorNetwork-claimAndConvertFor2-contract-IERC20Token---uint256-uint256-address-address-uint256-)
* [`convert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _affiliateAccount, uint256 _affiliateFee)`](bancornetwork.md#BancorNetwork-convert2-contract-IERC20Token---uint256-uint256-address-uint256-)
* [`claimAndConvert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _affiliateAccount, uint256 _affiliateFee)`](bancornetwork.md#BancorNetwork-claimAndConvert2-contract-IERC20Token---uint256-uint256-address-uint256-)
* [`convert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn)`](bancornetwork.md#BancorNetwork-convert-contract-IERC20Token---uint256-uint256-)
* [`claimAndConvert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn)`](bancornetwork.md#BancorNetwork-claimAndConvert-contract-IERC20Token---uint256-uint256-)
* [`convertFor(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for)`](bancornetwork.md#BancorNetwork-convertFor-contract-IERC20Token---uint256-uint256-address-)
* [`claimAndConvertFor(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for)`](bancornetwork.md#BancorNetwork-claimAndConvertFor-contract-IERC20Token---uint256-uint256-address-)
* [`xConvert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId)`](bancornetwork.md#BancorNetwork-xConvert-contract-IERC20Token---uint256-uint256-bytes32-bytes32-uint256-)
* [`xConvertPrioritized3(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId, uint256[], address _affiliateAccount, uint256 _affiliateFee)`](bancornetwork.md#BancorNetwork-xConvertPrioritized3-contract-IERC20Token---uint256-uint256-bytes32-bytes32-uint256-uint256---address-uint256-)
* [`xConvertPrioritized2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId, uint256[])`](bancornetwork.md#BancorNetwork-xConvertPrioritized2-contract-IERC20Token---uint256-uint256-bytes32-bytes32-uint256-uint256---)
* [`xConvertPrioritized(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId, uint256, uint8, bytes32, bytes32)`](bancornetwork.md#BancorNetwork-xConvertPrioritized-contract-IERC20Token---uint256-uint256-bytes32-bytes32-uint256-uint256-uint8-bytes32-bytes32-)
* [`convertForPrioritized4(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, uint256[], address _affiliateAccount, uint256 _affiliateFee)`](bancornetwork.md#BancorNetwork-convertForPrioritized4-contract-IERC20Token---uint256-uint256-address-uint256---address-uint256-)
* [`convertForPrioritized3(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, uint256, uint256, uint8, bytes32, bytes32)`](bancornetwork.md#BancorNetwork-convertForPrioritized3-contract-IERC20Token---uint256-uint256-address-uint256-uint256-uint8-bytes32-bytes32-)
* [`convertForPrioritized2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, uint256, uint8, bytes32, bytes32)`](bancornetwork.md#BancorNetwork-convertForPrioritized2-contract-IERC20Token---uint256-uint256-address-uint256-uint8-bytes32-bytes32-)
* [`convertForPrioritized(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, uint256, uint256, uint8, bytes32, bytes32)`](bancornetwork.md#BancorNetwork-convertForPrioritized-contract-IERC20Token---uint256-uint256-address-uint256-uint256-uint8-bytes32-bytes32-)

## Events:

* [`Conversion(address _smartToken, address _fromToken, address _toToken, uint256 _fromAmount, uint256 _toAmount, address _trader)`](bancornetwork.md#BancorNetwork-Conversion-address-address-address-uint256-uint256-address-)

## Function `constructor(contract IContractRegistry _registry)` <a id="BancorNetwork-constructor-contract-IContractRegistry-"></a>

initializes a new BancorNetwork instance

### Parameters:

* `_registry`:    address of a contract registry contract

## Function `setMaxAffiliateFee(uint256 _maxAffiliateFee)` <a id="BancorNetwork-setMaxAffiliateFee-uint256-"></a>

allows the owner to update the maximum affiliate-fee

### Parameters:

* `_maxAffiliateFee`:   maximum affiliate-fee

## Function `registerEtherToken(contract IEtherToken _token, bool _register)` <a id="BancorNetwork-registerEtherToken-contract-IEtherToken-bool-"></a>

allows the owner to register/unregister ether tokens

### Parameters:

* `_token`: ether token contract address
* `_register`: true to register, false to unregister

## Function `convertFor2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, address _affiliateAccount, uint256 _affiliateFee) → uint256` <a id="BancorNetwork-convertFor2-contract-IERC20Token---uint256-uint256-address-address-uint256-"></a>

converts the token to any other token in the bancor network by following

a predefined conversion path and transfers the result tokens to a target account

note that the network should already own the source tokens

### Parameters:

* `_path`: conversion path, see conversion path format above
* `_amount`: amount to convert from \(in the initial source token\)
* `_minReturn`: if the conversion results in an amount smaller than the minimum return - it is cancelled, must be nonzero
* `_for`: account that will receive the conversion result
* `_affiliateAccount`: affiliate account
* `_affiliateFee`: affiliate fee in PPM

### Return Values:

* tokens issued in return

## Function `xConvert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId, address _affiliateAccount, uint256 _affiliateFee) → uint256` <a id="BancorNetwork-xConvert2-contract-IERC20Token---uint256-uint256-bytes32-bytes32-uint256-address-uint256-"></a>

converts any other token to BNT in the bancor network

by following a predefined conversion path and transfers the resulting

tokens to BancorX.

note that the network should already have been given allowance of the source token \(if not ETH\)

### Parameters:

* `_path`: conversion path, see conversion path format above
* `_amount`: amount to convert from \(in the initial source token\)
* `_minReturn`: if the conversion results in an amount smaller than the minimum return - it is cancelled, must be nonzero
* `_toBlockchain`: blockchain BNT will be issued on
* `_to`: address/account on \_toBlockchain to send the BNT to
* `_conversionId`: pre-determined unique \(if non zero\) id which refers to this transaction
* `_affiliateAccount`: affiliate account
* `_affiliateFee`: affiliate fee in PPM

### Return Values:

* the amount of BNT received from this conversion

## Function `getReturnByPath(contract IERC20Token[] _path, uint256 _amount) → uint256, uint256` <a id="BancorNetwork-getReturnByPath-contract-IERC20Token---uint256-"></a>

calculates the expected return of converting a given amount on a given path

note that there is no support for circular paths

### Parameters:

* `_path`: conversion path \(see conversion path format above\)
* `_amount`: amount of \_path\[0\] tokens received from the user

### Return Values:

* amount of \_path\[\_path.length - 1\] tokens that the user will receive
* amount of \_path\[\_path.length - 1\] tokens that the user will pay as fee

## Function `claimAndConvertFor2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, address _affiliateAccount, uint256 _affiliateFee) → uint256` <a id="BancorNetwork-claimAndConvertFor2-contract-IERC20Token---uint256-uint256-address-address-uint256-"></a>

claims the caller's tokens, converts them to any other token in the bancor network

by following a predefined conversion path and transfers the result tokens to a target account

note that allowance must be set beforehand

### Parameters:

* `_path`: conversion path, see conversion path format above
* `_amount`: amount to convert from \(in the initial source token\)
* `_minReturn`: if the conversion results in an amount smaller than the minimum return - it is cancelled, must be nonzero
* `_for`: account that will receive the conversion result
* `_affiliateAccount`: affiliate account
* `_affiliateFee`: affiliate fee in PPM

### Return Values:

* tokens issued in return

## Function `convert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _affiliateAccount, uint256 _affiliateFee) → uint256` <a id="BancorNetwork-convert2-contract-IERC20Token---uint256-uint256-address-uint256-"></a>

converts the token to any other token in the bancor network by following

a predefined conversion path and transfers the result tokens back to the sender

note that the network should already own the source tokens

### Parameters:

* `_path`: conversion path, see conversion path format above
* `_amount`: amount to convert from \(in the initial source token\)
* `_minReturn`: if the conversion results in an amount smaller than the minimum return - it is cancelled, must be nonzero
* `_affiliateAccount`: affiliate account
* `_affiliateFee`: affiliate fee in PPM

### Return Values:

* tokens issued in return

## Function `claimAndConvert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _affiliateAccount, uint256 _affiliateFee) → uint256` <a id="BancorNetwork-claimAndConvert2-contract-IERC20Token---uint256-uint256-address-uint256-"></a>

claims the caller's tokens, converts them to any other token in the bancor network

by following a predefined conversion path and transfers the result tokens back to the sender

note that allowance must be set beforehand

### Parameters:

* `_path`: conversion path, see conversion path format above
* `_amount`: amount to convert from \(in the initial source token\)
* `_minReturn`: if the conversion results in an amount smaller than the minimum return - it is cancelled, must be nonzero
* `_affiliateAccount`: affiliate account
* `_affiliateFee`: affiliate fee in PPM

### Return Values:

* tokens issued in return

## Function `convert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn) → uint256` <a id="BancorNetwork-convert-contract-IERC20Token---uint256-uint256-"></a>

deprecated, backward compatibility

## Function `claimAndConvert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn) → uint256` <a id="BancorNetwork-claimAndConvert-contract-IERC20Token---uint256-uint256-"></a>

deprecated, backward compatibility

## Function `convertFor(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for) → uint256` <a id="BancorNetwork-convertFor-contract-IERC20Token---uint256-uint256-address-"></a>

deprecated, backward compatibility

## Function `claimAndConvertFor(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for) → uint256` <a id="BancorNetwork-claimAndConvertFor-contract-IERC20Token---uint256-uint256-address-"></a>

deprecated, backward compatibility

## Function `xConvert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId) → uint256` <a id="BancorNetwork-xConvert-contract-IERC20Token---uint256-uint256-bytes32-bytes32-uint256-"></a>

deprecated, backward compatibility

## Function `xConvertPrioritized3(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId, uint256[], address _affiliateAccount, uint256 _affiliateFee) → uint256` <a id="BancorNetwork-xConvertPrioritized3-contract-IERC20Token---uint256-uint256-bytes32-bytes32-uint256-uint256---address-uint256-"></a>

deprecated, backward compatibility

## Function `xConvertPrioritized2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId, uint256[]) → uint256` <a id="BancorNetwork-xConvertPrioritized2-contract-IERC20Token---uint256-uint256-bytes32-bytes32-uint256-uint256---"></a>

deprecated, backward compatibility

## Function `xConvertPrioritized(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId, uint256, uint8, bytes32, bytes32) → uint256` <a id="BancorNetwork-xConvertPrioritized-contract-IERC20Token---uint256-uint256-bytes32-bytes32-uint256-uint256-uint8-bytes32-bytes32-"></a>

deprecated, backward compatibility

## Function `convertForPrioritized4(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, uint256[], address _affiliateAccount, uint256 _affiliateFee) → uint256` <a id="BancorNetwork-convertForPrioritized4-contract-IERC20Token---uint256-uint256-address-uint256---address-uint256-"></a>

deprecated, backward compatibility

## Function `convertForPrioritized3(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, uint256, uint256, uint8, bytes32, bytes32) → uint256` <a id="BancorNetwork-convertForPrioritized3-contract-IERC20Token---uint256-uint256-address-uint256-uint256-uint8-bytes32-bytes32-"></a>

deprecated, backward compatibility

## Function `convertForPrioritized2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, uint256, uint8, bytes32, bytes32) → uint256` <a id="BancorNetwork-convertForPrioritized2-contract-IERC20Token---uint256-uint256-address-uint256-uint8-bytes32-bytes32-"></a>

deprecated, backward compatibility

## Function `convertForPrioritized(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, uint256, uint256, uint8, bytes32, bytes32) → uint256` <a id="BancorNetwork-convertForPrioritized-contract-IERC20Token---uint256-uint256-address-uint256-uint256-uint8-bytes32-bytes32-"></a>

deprecated, backward compatibility

## Event `Conversion(address _smartToken, address _fromToken, address _toToken, uint256 _fromAmount, uint256 _toAmount, address _trader)` <a id="BancorNetwork-Conversion-address-address-address-uint256-uint256-address-"></a>

triggered when a conversion between two tokens occurs

### Parameters:

* `_smartToken`: smart token governed by the converter
* `_fromToken`: ERC20 token converted from
* `_toToken`: ERC20 token converted to
* `_fromAmount`: amount converted, in fromToken
* `_toAmount`: amount returned, minus conversion fee
* `_trader`: wallet that initiated the trade

