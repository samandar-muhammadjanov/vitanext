# Assets Directory

Хранилище всех статических файлов проекта VitaNext.

## Структура

```
assets/
├── images/       # Изображения продуктов, баннеры, фотографии
├── icons/        # SVG иконки и символы
└── fonts/        # Пользовательские шрифты (если требуются)
```

## Подпапки

### images/
- `logo.png` - Логотип VitaNext
- `hero-*.jpg` - Фоны для hero секции
- `product-*.jpg` - Изображения продуктов
- `about-*.jpg` - Фотографии для about секции

### icons/
- `check.svg` - Галочка для чек-листов
- `star.svg` - Звёзды для рейтингов
- `nav-*.svg` - Иконки меню навигации
- `social-*.svg` - Иконки социальных сетей

### fonts/
- Локальные шрифты (если нужны альтернативы Google Fonts)

## Использование в коде

```html
<!-- Изображения -->
<img src="assets/images/product-001.jpg" alt="Vitamin C">

<!-- Иконки -->
<img src="assets/icons/check.svg" alt="Check">
```

```css
/* В CSS */
background-image: url('../assets/images/hero-bg.jpg');
```
