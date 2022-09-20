# C++ notes for PS

This is my notes for problem solving in c++, that I've learned while coding in C++ and found them helpful.

#### convert string to lowercase.

```cpp
trasform(s.begin(),s.end(),s.begin(),::tolower);
```

#### check this character is alpha.

```cpp
isalpha(char);
```

#### check the character is in upper case

```cpp
isupper(char);
```

#### Import all libs

```cpp
<bits/stdc++.h>
```

#### copy contents of deque of chars into string

```cpp
std::string ss(dqu.begin(),dqu.end());
```

#### Modulo of a negative number [\[Example\]](http://codeforces.com/contest/450/problem/B)

```cpp
(?n)%k == (k?(n%k))%k
```

#### Find substring

```cpp
std::size_t zero7 = s.find("0000000"); if(zero7!=std::string::npos) found=true;
```
