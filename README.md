# حكايتنا ❤️ — Birthday Love Journey

موقع عيد ميلاد رومانسي **Static بالكامل** باستخدام HTML + CSS + Vanilla JavaScript فقط.

## 1. تشغيل الموقع

لا تحتاج إلى Node.js أو npm أو Build Tools.

افتح:

```text
index.html
```

مباشرة في المتصفح.

> ملاحظة: تشغيل الصوت/الفيديو محليًا قد يختلف قليلًا بين المتصفحات بسبب سياسات التشغيل، لكن الموقع نفسه لا يحتاج إلى Server.

## 2. إضافة الصور

ضع صورك داخل:

```text
assets/images/
```

ثم عدّل المسارات داخل `CONFIG` في `script.js`.

مثال:

```js
heroImage: "assets/images/photo-01.jpg"
```

وأضف عناصر جديدة إلى `gallery` أو `memories` عند الحاجة.

## 3. إضافة الفيديوهات

ضع ملفات MP4 داخل:

```text
assets/videos/
```

ثم عدّل:

```js
videos: [
  {
    file: "assets/videos/video-01.mp4",
    title: "عنوان الفيديو",
    description: "وصف قصير"
  }
]
```

## 4. إضافة الأغنية

ضع الأغنية هنا:

```text
assets/music/our-song.mp3
```

ثم عدّل:

```js
song: {
  title: "اسم الأغنية",
  artist: "اسم الفنان",
  file: "assets/music/our-song.mp3",
  cover: "assets/images/photo-01.jpg"
}
```

الموسيقى لا تبدأ قبل تفاعل المستخدم؛ يتم طلب التشغيل بعد الضغط على **ابدئي حكايتنا ❤️**.

## 5. تعديل اسمها

في `script.js`:

```js
herName: "اسمها"
```

## 6. تعديل تاريخ الميلاد

```js
birthday: "19 أغسطس 2026"
```

ويمكن استخدام القيمة داخل الذكريات أيضًا.

## 7. إضافة ذكريات جديدة

أضف عنصرًا داخل `memories`:

```js
{
  date: "التاريخ",
  title: "عنوان الذكرى",
  location: "المكان",
  image: "assets/images/photo-04.jpg",
  description: "تفاصيل الذكرى..."
}
```

الموقع سيبني الـ Timeline والـ Modal تلقائيًا.

## 8. تعديل الرسائل

عدّل `letters`:

```js
{
  title: "عنوان الرسالة",
  message: "نص الرسالة..."
}
```

## 9. تعديل المفاجأة السرية

عدّل:

```js
secretMessage: "رسالتك السرية هنا ❤️"
```

القلب الصغير الموجود في نهاية الصفحة هو الـ Easter Egg.

## 10. رفع الموقع على GitHub Pages

1. أنشئ Repository جديدًا على GitHub.
2. ارفع:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
   - مجلد `assets`
3. افتح إعدادات Repository.
4. ادخل إلى **Pages**.
5. اختر **Deploy from a branch**.
6. اختر الفرع `main` والمجلد `/ (root)`.
7. احفظ وانتظر نشر الموقع.

كل المسارات المستخدمة Relative Paths، مثل:

```text
assets/images/photo-01.jpg
```

ولا يوجد Backend أو API أو Database أو npm أو Build Process.

## هيكل المشروع

```text
birthday-website/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── images/
    ├── videos/
    ├── music/
    └── fonts/
```

## ملاحظات

- يفضّل استخدام صور WebP/JPG مضغوطة للحفاظ على سرعة التحميل.
- لا تحتاج إلى وضع صور أو فيديوهات حقيقية الآن؛ ملفات placeholder الموجودة في `CONFIG` يمكن استبدالها بملفاتك.
- Google Fonts موجودة كتحسين اختياري فقط، وهناك fallback مناسب عند عدم توفر الإنترنت.
