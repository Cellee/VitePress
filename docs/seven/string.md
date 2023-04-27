### 1. 将字符串在左边加times次char字符    ------ 向左补齐指定长度 字符
```
str.addLeft(5,'*')
```
### 2. 将字符串填充至指定的长度。  ------ 向左补齐指定长度  
```
str.padLeft(5, "0")   
```
### 3. 将字符串填充至指定的长度。  ------ 向右补齐指定长度  
```
str.padRight(5, "0")   
```
### 4. 判断一个字符串是否以某个字符串开头或结尾 
```
str.startWith("???")   
str.endWith("???")   
```
### 5. 将字符串中的字符转换为Unicode编码表示形式 
```
str.toUnicode()
```
### 6. 格式化字符串
```
//  它可以接受至少一个参数，第一个参数是需要格式化的字符串，可以在其中使用花括号 {} 来指定参数的位置
//  参数则是字符串中要替换的值。这些值可以是单个值、数组或对象
//  特殊的 {0:N2} 表示将第一个参数作为数字，保留小数点后两位，并添加千位分隔符
String.format()

// 字符
var firstName = "John",lastName = "Doe", age = 30;
var formattedString = String.format("My name is {0} {1} and I am {2} years old.", firstName, lastName, age);

// 数字千分位
var number = 1234567.89;
var formattedString = String.format("{0:N2}", number);  // '1,234,567.89'

// 数组
var values = ["apple", "banana", "cherry"];
var formattedString = String.format("I like {0}, {1}, and {2}.", values);
```

### 7.将一个字符串表示的日期转换为毫秒数
```
'2023-03-03'.getTime()
```

### 8.将一个字符串表示的日期转换为指定格式的日期字符串
```
'/date(毫秒数)/'.toDate('long')
```