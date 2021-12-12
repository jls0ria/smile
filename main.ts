OLED12864_I2C.init(60)
OLED12864_I2C.zoom(false)
for (let index = 0; index <= 19; index++) {
    OLED12864_I2C.pixel(index + 13, index + 20, 1)
}
for (let index2 = 0; index2 <= 60; index2++) {
    OLED12864_I2C.pixel(index2 + 33, 40, 1)
}
for (let index3 = 0; index3 <= 19; index3++) {
    OLED12864_I2C.pixel(index3 + 94, 40 - index3, 1)
}
basic.pause(5000)
OLED12864_I2C.clear()
for (let index4 = 0; index4 <= 100; index4++) {
    OLED12864_I2C.pixel(index4 + 10, 40, 1)
}
basic.pause(5000)
OLED12864_I2C.clear()
for (let index5 = 0; index5 <= 19; index5++) {
    OLED12864_I2C.pixel(index5 + 13, 60 - index5, 1)
}
for (let index22 = 0; index22 <= 60; index22++) {
    OLED12864_I2C.pixel(index22 + 33, 40, 1)
}
for (let index32 = 0; index32 <= 19; index32++) {
    OLED12864_I2C.pixel(index32 + 94, index32 + 40, 1)
}
basic.forever(function () {
	
})
