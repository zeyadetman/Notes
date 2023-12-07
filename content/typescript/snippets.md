---
title: Typescript code snippets
---

## Append Strings

```typescript
type AppendGood<A> = {
	[K in keyof A as `good_${string & K}`]: A[K]
 };

type WellBehavedList = {
	tom: { address: '1 candy cane lane' };
	timmy: { address: '43 chocolate dr' };
};

type test_wellBehaved_actual = AppendGood<WellBehavedList>;

type test_wellBehaved_expected = {
	good_tom: { address: '1 candy cane lane' };
	good_timmy: { address: '43 chocolate dr' };
};

```
