[NumberKit](../README.md) / core

# Module: core

## Functions

### add

▸ **add**(`augend`, `addend`): `number`

Adds two numbers.

**`Throws`**

If either `augend` or `addend` is not a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `augend` | `number` | The first number in an addition. |
| `addend` | `number` | The second number in an addition. |

#### Returns

`number`

The sum of the two numbers.

___

### addAll

▸ **addAll**(`numbers`): `number`

Adds all numbers in the array each other.

**`Throws`**

If the `numbers` array is less than two numbers long.

**`Throws`**

If the `numbers` array contains any non-number values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `numbers` | `number`[] | The numbers to be added. |

#### Returns

`number`

The sum of all numbers in the array.

___

### divide

▸ **divide**(`dividend`, `divisor`): `number`

Divides two numbers.

**`Throws`**

If either `dividend` or `divisor` is not a number.

**`Throws`**

If `divisor` is zero.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dividend` | `number` | The first number in a division. |
| `divisor` | `number` | The second number in a division. |

#### Returns

`number`

The quotient of the two numbers.

___

### divideAll

▸ **divideAll**(`numbers`): `number`

Divides all numbers in the array each other.

**`Throws`**

If the `numbers` array is less than two numbers long.

**`Throws`**

If the `numbers` array contains any non-number values.

**`Throws`**

If the `numbers` array contains any zero values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `numbers` | `number`[] | The numbers to be divided. |

#### Returns

`number`

The quotient of all numbers in the array.

___

### multiply

▸ **multiply**(`multiplier`, `multiplicand`): `number`

Multiplies two numbers.

**`Throws`**

If either `multiplier` or `multiplicand` is not a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `multiplier` | `number` | The first number in a multiplication. |
| `multiplicand` | `number` | The second number in a multiplication. |

#### Returns

`number`

The product of the two numbers.

___

### multiplyAll

▸ **multiplyAll**(`numbers`): `number`

Multiplies all numbers in the array each other.

**`Throws`**

If the `numbers` array is less than two numbers long.

**`Throws`**

If the `numbers` array contains any non-number values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `numbers` | `number`[] | The numbers to be multiplied. |

#### Returns

`number`

The product of all numbers in the array.

___

### subtract

▸ **subtract**(`minuend`, `subtrahend`): `number`

Subtracts two numbers.

**`Throws`**

If either `minuend` or `subtrahend` is not a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `minuend` | `number` | The first number in a subtraction. |
| `subtrahend` | `number` | The second number in a subtraction. |

#### Returns

`number`

The difference between the two numbers.

___

### subtractAll

▸ **subtractAll**(`numbers`): `number`

Subtracts all numbers in an array from each other.

**`Throws`**

If the `numbers` array is less than two numbers long.

**`Throws`**

If the `numbers` array contains any non-number values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `numbers` | `number`[] | The numbers to be subtracted. |

#### Returns

`number`

The difference of all numbers in the array.
