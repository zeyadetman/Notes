---
title: Tailwindcss Tips
---
## Setup themes

```
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

```
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

```
<body className="theme1">
...
```

*Note that we have used `rgba` to handle cases like `class="bg-bg-color/50"` the opacity of the colors.*