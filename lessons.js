// 1. الدروس الأساسية (الافتراضية)
const defaultLessons = [
    {
        title: "Print & Variables",
        code: `name = "DSTR"\nage = 2026\nprint("Hello", name)\nprint("Year:", age)`,
        explain: "الدرس الأول: كيفية تعريف المتغيرات وطباعة النصوص والأرقام.",
        lineNotes: ["تعريف متغير نصي يحمل اسمك", "تعريف متغير رقمي للسنة الحالية", "طباعة ترحيب مع قيمة المتغير الأول", "طباعة السنة باستخدام المتغير الثاني"]
    },
    {
        title: "Basic Math",
        code: `x = 10\ny = 5\nsum = x + y\nmulti = x * y\nprint("Result:", sum, multi)`,
        explain: "الدرس الثاني: العمليات الحسابية البسيطة (الجمع والضرب).",
        lineNotes: ["تخزين القيمة 10 في المتغير x", "تخزين القيمة 5 في المتغير y", "جمع القيمتين وتخزين الناتج في sum", "ضرب القيمتين وتخزين الناتج في multi", "عرض نواتج العمليات الحسابية"]
    },
    {
        title: "Lists",
        code: `fruits = ["Apple", "Banana", "Cherry"]\nfruits.append("Orange")\nprint(fruits[0])\nprint(len(fruits))`,
        explain: "الدرس الثالث: التعامل مع القوائم (Lists) وإضافة عناصر لها.",
        lineNotes: ["إنشاء قائمة تحتوي على 3 عناصر", "إضافة عنصر رابع إلى نهاية القائمة", "الوصول وطباعة العنصر الأول (يبدأ بـ 0)", "حساب وطباعة طول القائمة الكلي"]
    },
    {
        title: "If Statements",
        code: `score = 85\nif score >= 50:\n    print("Passed")\nelse:\n    print("Failed")`,
        explain: "الدرس الرابع: الجمل الشرطية واتخاذ القرارات.",
        lineNotes: ["تحديد قيمة الدرجة", "التحقق إذا كانت الدرجة أكبر من أو تساوي 50", "تنفيذ هذا السطر في حالة تحقق الشرط فقط", "في حال لم يتحقق الشرط السابق", "تنفيذ هذا السطر في حالة الرسوب"]
    },
    {
        title: "For Loops",
        code: `for i in range(5):\n    print("Number:", i)\n    print("---")`,
        explain: "الدرس الخامس: تكرار الأوامر باستخدام حلقات For.",
        lineNotes: ["بدء حلقة تكرار من 0 إلى 4", "طباعة رقم الدورة الحالية", "طباعة فاصل للتنسيق"]
    },
    {
        title: "While Loops",
        code: `count = 0\nwhile count < 3:\n    print("Count is:", count)\n    count += 1`,
        explain: "الدرس السادس: التكرار باستخدام شرط معين (While).",
        lineNotes: ["تصفير العداد", "استمرار التكرار ما دام العداد أقل من 3", "طباعة القيمة الحالية للعداد", "زيادة العداد بـ 1 لضمان توقف الحلقة لاحقاً"]
    },
    {
        title: "Functions",
        code: `def greet(user):\n    return "Welcome " + user\n\nmessage = greet("Admin")\nprint(message)`,
        explain: "الدرس السابع: كيفية بناء الدوال واستدعائها.",
        lineNotes: ["تعريف دالة باسم greet تأخذ بارامتر user", "إرجاع نص الترحيب مدمجاً مع الاسم", "", "استدعاء الدالة وتخزين النتيجة في متغير", "طباعة النتيجة النهائية"]
    },
    {
        title: "Dictionaries",
        code: `user = {\n    "id": 1,\n    "name": "Jimi",\n    "level": "Pro"\n}\nprint(user["name"])`,
        explain: "الدرس الثامن: القواميس (Dictionaries) لتخزين البيانات كمفتاح وقيمة.",
        lineNotes: ["بدء تعريف القاموس", "تخزين الرقم التعريفي", "تخزين اسم المستخدم", "تخزين مستوى الخبرة", "إغلاق القاموس", "طباعة قيمة الاسم عن طريق المفتاح name"]
    },
    {
        title: "Error Handling",
        code: `try:\n    num = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")`,
        explain: "الدرس التاسع: كيفية التعامل مع الأخطاء ومنع البرنامج من الانهيار.",
        lineNotes: ["بدء تجربة الكود الذي قد يسبب خطأ", "محاولة قسمة رقم على صفر (خطأ رياضي)", "تحديد نوع الخطأ المراد معالجته", "الرسالة التي ستظهر بدلاً من انهيار البرنامج"]
    },
    {
        title: "Classes & Objects",
        code: `class Robot:\n    def __init__(self, name):\n        self.name = name\n    \n    def say_hi(self):\n        print("I am", self.name)\n\nbot = Robot("Gemini-3")\nbot.say_hi()`,
        explain: "الدرس العاشر: أساسيات البرمجة كائنية التوجه (OOP) وإنشاء الكلاسات.",
        lineNotes: ["تعريف صنف (كلاس) جديد باسم Robot", "دالة البناء التي تعمل عند إنشاء كائن جديد", "تخصيص الاسم الممرر للكائن الحالي", "", "تعريف دالة (Method) داخل الكلاس", "طباعة رسالة تعريفية بالروبوت", "", "إنشاء نسخة (Object) من الكلاس باسم Gemini-3", "استدعاء الدالة الخاصة بالكائن"]
    }
];

// 2. جلب الدروس الإضافية من الذاكرة المحلية (إن وجدت)
const addedLessons = JSON.parse(localStorage.getItem('add_lessons')) || [];

// 3. دمج الدروس الأساسية مع الدروس المضافة حديثاً
window.lessons = [...defaultLessons, ...addedLessons];

// وظيفة مساعدة لمسح الدروس المضافة والعودة للافتراضي
window.clearCustomLessons = function() {
    localStorage.removeItem('add_lessons');
    location.reload();
};
