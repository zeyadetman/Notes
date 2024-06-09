---
title: Tailwindcss Tips
---
## Setup themes
the easiest way to setup multiple themes or just dark mode in tailwindcss.
#tailwindcss


```css
// global.css

.theme1 {
	--bg-color: 234, 246, 255;
}

.theme2 {
	--bg-color: 234, 246, 255;
}

// if you just want to handle dark/light themes

:root {
	--bg-color: 234, 246, 255; // light
}

@media (prefers-color-schema: dark) {
	:root {
		--bg-color: 100, 200, 255; // dark
	}
}
```

```js
// tailwind.config.js

module.exports = {
	theme: {
		extend: {
			colors: {
					bgColor: "rgba(var(--bg-color))",
				}
			}
		}
	}
}
```

And finally you can do something like this to the wrapper element of your app

```html
<body className="theme1">
...
```

*Note that we have used `rgba` to handle cases like `class="bg-bg-color/50"` the opacity of the colors.*


## Merge Classes

[tailwind-merge](https://www.npmjs.com/package/tailwind-merge) is Utility function to efficiently merge [Tailwind CSS](https://tailwindcss.com/) classes in JS without style conflicts.

```ts
import { twMerge } from 'tailwind-merge'

twMerge('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]')
// → 'hover:bg-dark-red p-3 bg-[#B91C1C]'
```


[10 Tailwind Tricks You NEED To Know](https://youtu.be/aSlK3GhRuXA?si=RozkmUBwSMVcpdbv)