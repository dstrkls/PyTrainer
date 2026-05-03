window.lessons = [
    {
        title: "Print & Variables",
        code: `name = "dstr"
age = 2026
print("Hello", name)
print("Year:", age)`,
        explain: "الدرس الأول: كيفية تعريف المتغيرات وطباعة النصوص والأرقام."
    },
    {
        title: "Basic Math",
        code: `x = 10
y = 5
sum = x + y
multi = x * y
print("Result:", sum, multi)`,
        explain: "الدرس الثاني: العمليات الحسابية البسيطة (الجمع والضرب)."
    },
    {
        title: "Lists",
        code: `fruits = ["Apple", "Banana", "Cherry"]
fruits.append("Orange")
print(fruits[0])
print(len(fruits))`,
        explain: "الدرس الثالث: التعامل مع القوائم (Lists) وإضافة عناصر لها."
    },
    {
        title: "If Statements",
        code: `score = 85
if score >= 50:
    print("Passed")
else:
    print("Failed")`,
        explain: "الدرس الرابع: الجمل الشرطية واتخاذ القرارات."
    },
    {
        title: "For Loops",
        code: `for i in range(5):
    print("Number:", i)
    print("---")`,
        explain: "الدرس الخامس: تكرار الأوامر باستخدام حلقات For."
    },
    {
        title: "While Loops",
        code: `count = 0
while count < 3:
    print("Count is:", count)
    count += 1`,
        explain: "الدرس السادس: التكرار باستخدام شرط معين (While)."
    },
    {
        title: "Functions",
        code: `def greet(user):
    return "Welcome " + user

message = greet("Admin")
print(message)`,
        explain: "الدرس السابع: كيفية بناء الدوال واستدعائها."
    },
    {
        title: "Dictionaries",
        code: `user = {
    "id": 1,
    "name": "Jimi",
    "level": "Pro"
}
print(user["name"])`,
        explain: "الدرس الثامن: القواميس (Dictionaries) لتخزين البيانات كمفتاح وقيمة."
    },
    {
        title: "Error Handling",
        code: `try:
    num = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")`,
        explain: "الدرس التاسع: كيفية التعامل مع الأخطاء ومنع البرنامج من الانهيار."
    },
    {
        title: "Classes & Objects",
        code: `class Robot:
    def __init__(self, name):
        self.name = name
    
    def say_hi(self):
        print("I am", self.name)

bot = Robot("Gemini-3")
bot.say_hi()`,
        explain: "الدرس العاشر: أساسيات البرمجة كائنية التوجه (OOP) وإنشاء الكلاسات."
    }
];
