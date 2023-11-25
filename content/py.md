+++
title=Python Learning Stage 1
description=First lesson for python learners
author=Jingo
date=2023-11-25 21:20:00
+++

# Hello Word

在命令行中输入 python 来运行解释器, 随后输入 print('Hello World!')

```python
print('Hello World!')
Hello World!
```

## 运算符

```python
1 + 1 # 2, 加法
3 - 2 # 1, 减法
2 * 2 # 4, 乘法
12 / 2 # 6.0, 浮点数除法, 返回一个浮点数
20 // 4 # 5, 整数除法, 返回一个整数
11 % 4 # 3, 取余数
2 ** 4 # 16, 幂运算
```

## 值和类型

值是在程序中操作的基本对象之一, 比如一个字母, 或者数字. 上面就有值的例子, 比如 2, 42.0, 还有那个字符串'Hello World'

如果想确认一个值是什么类型, 可以使用 type()函数来确认

```python
type(1) # <class 'int'>
type('Hello World') # <class 'str'>
type(2.0) # <class 'float'>
```

上面的例子里, class 表示这是一个类, 一种类就是对值的一个划分

# 变量, 表达式, 语句

## 赋值语句

使用赋值语句为一个变量赋值

```python
a = 'hello'
b = 'world'
```

## 变量命名

python 中变量命名规则是:

1. 只能包含大小写字母, 下划线和数字
2. 不能以数字开头
3. 不能命名为保留字

## 运算符优先级

1. 括号内最优先

```python
2 ** (4 - 1) # 8
2 ** 4 - 1 # 15
```

2. 除了括号, 幂运算最优先

```python
1 + 2 ** 3 # 9
2 * 3 ** 2 # 18
```

3. 乘除比加减优先
4. 同类运算符从左往右进行, 幂运算除外

## 字符串操作

一般情况下, 对字符串进行数学运算都是非法操作, 但'+'和'\*'除外

1. '+'号运用在字符串中表示拼接两个字符串

```python
a = 'hello'
b = 'world'
print(a + b)
helloworld
```

2. '\*'运算符运用在字符串中表示重复

```python
a = 'hello'
print(a * 3)
hellohellohello
```

## 注释

1. python 中使用'#'来单行注释

```python
# 这是一个单行注释
a = 'hello' # 行末也可以注释
```

2. python 中使用三个单引号或双引号来包裹多行注释

```python
'''
这是一个多行注释
第二行
第三行
'''
```

## 调试

程序一般有三种错误:

1. 语法错误 Syntax error
2. 运行时错误 Runtime error
3. 语义错误 Semantic error: 通常指代码没有达到设计目的的错误

# 函数

## 调用函数

```python
type(1) # <class 'int'>
```

上面这个例子表示调用了 type 函数, 括号中传入函数需要的参数, 函数的结构是返回参数的类型

通常来说, 函数都要传入一个参数, 返回一个结果. python 内部提供了一些类型转换函数, 如 int 函数可以把值转为整形, 但遇到不能转的就会报错

```python
int('32') # 32
int(42.33) # 42
int('hello')
ValueError: invalid literal for int(): hello
```

## 数学函数

python 内置了一个数学模块, 提供绝大部分常用的数学函数. 模块就是一系列相关函数集合成的文件

在使用 math 模块前需要先导入:

```python
import math

print(math)
<module 'math' (built-in)>
```

使用 math 模块中的函数时, 要用'.'来连接模块名和函数名

```python
import math

math.floor(1.55) # 1 小数向下取整
math.ceil(2.65) # 3 小数向上取整
radians = 0.7
math.sin(radians) # 0.644217687237691
```

## 自定义函数

Python 中除了自带函数, 也能自己定义函数来实现想要的效果

函数定义要指定函数名, 在函数体内写语句, 当调用这个自定义函数时就会执行内部的语句

```python
def my_print():
  print('hello')
  print('python')
```

def 是定义函数使用的保留字, 函数名就是 my_print, 函数名命名规则和变量名命名规则差不多, 要尽量注意不要和变量名重复; 函数名后面的括号是空的, 意味着这个函数不需要传递参数; 第一行叫做头部, 剩下的就是函数体

注意: python 中的每行的缩进是强制要求, 函数定义完成后必须留一行空白行

看看函数的类型是什么

```python
type(my_print)
<class 'function'>
```

一旦定义了一个函数, 你也可以在其他自定义函数中调用这个函数

```python
def my_function():
  my_print()
```

## 运行流程

要确保一个函数或变量在被使用之前已经定义, 那就需要知道 Python 程序的运行流程

Python 中的代码都是从第一行开始逐行运行, 每次运行一个语句, 函数的定义不会改变运行的流程, 只是内部的函数体语句需要在调用时才运行

## 形式参数和实际参数

在编程语言的范畴里, 实际参数指调用函数时传给函数的那个参数, 形式参数指写在函数体内部定义用的参数

在函数里面, 实参会被赋值给形参

```python
def call_name(name):
  print('My name is ' + name)

call_name('Jeff')
My name is Jeff
```

在这个例子中, 调用函数时传入的实参将其值赋值给了定义函数时括号内和函数体内定义的形参, 即'name'

在传递实参时使用表达式也是适用的, 同样适用于传递变量

```python
call_name('Jeff' * 3)
My name is JeffJeffJeff

name = 'Amy'
call_name(name)
My name is Amy
```

## 函数作用域

函数内部变量和形参都是仅在函数体中有效, 即他们的作用域局限于函数体内部

```python
def say_something(something):
  print(something)

thing = 'this is a thing'
say_something(thing)
this is a thing
print(something)
NameError: name 'something' is not defined.
```

上述示例中, 当函数运行完毕, 这个 something 变量就被销毁了, 调用这个变量就会抛出异常

## 函数的返回

前面用过的一些函数, 比如 math 模块中的函数, 通常都是有返回值的函数, 而上述示例中的 call_name 和 say_somthing 则是没有返回值的函数
无返回值的函数在调用时的结果赋值给一个变量, 那么就会得到一个特殊的值, None

```python
a = call_name('Jeff')
print(a)
None

print(type(None))
<class 'NoneType'>
```

如上所示, None 的类型是 NoneType 类

## 定义函数的意义

将代码划分成一个个的函数是一件很费力的事情, 那么为什么要这么做呢?

- 创建一个新函数可以用语义化的名称来命名, 让别人可以一眼看出这个函数是做什么的
- 避免代码冗余, 一个函数可以在多个地方使用, 让重复性的代码减少, 后期修改时只需要改一个地方就可以在多个地方生效
- 把程序切分成函数, 就可以一步步的 debug, 每次只对应一个部分, 然后再进行组合就行了
- 设计好的函数对很多程序都适用, 一旦写好了就可以再次利用
