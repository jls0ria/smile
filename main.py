OLED12864_I2C.init(60)
OLED12864_I2C.zoom(False)
for index in range(20):
    OLED12864_I2C.pixel(index + 13, index + 20, 1)
for index2 in range(61):
    OLED12864_I2C.pixel(index2 + 33, 40, 1)
for index3 in range(20):
    OLED12864_I2C.pixel(index3 + 94, 40 - index3, 1)
basic.pause(20000)
OLED12864_I2C.clear()
for index4 in range(101):
    OLED12864_I2C.pixel(index4 + 10, 40, 1)
basic.pause(5000)
for index5 in range(20):
    OLED12864_I2C.pixel(index5 + 13, 60 - index5, 1)
for index22 in range(61):
    OLED12864_I2C.pixel(index22 + 33, 40, 1)
for index32 in range(20):
    OLED12864_I2C.pixel(index32 + 94, index32 + 40, 1)

def on_forever():
    pass
basic.forever(on_forever)
