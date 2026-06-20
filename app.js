function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;

/* ============================================================
   DATA
   ============================================================ */
const CATEGORIES = [{
  id: "executive_desk",
  cat: "Кабинет руководителя",
  title: "Стол руководителя",
  img: "images/executive_desk.webp",
  short: "Массивная столешница из ореха на фрезерованном основании — центр представительского кабинета.",
  desc: "Флагман коллекции для кабинета первого лица. Цельный шпон американского ореха, скруглённая кромка ручной шлифовки и рифлёные опоры-колонны. Каждый стол собирается под конкретный кабинет — от размера до раскладки кабель-менеджмента.",
  specs: [["Материал", "Шпон ореха, массив"], ["Покрытие", "Натуральное масло-воск"], ["Основание", "Фрезерованные опоры"], ["Изготовление", "На заказ, 30–45 дней"]]
}, {
  id: "operator_table",
  cat: "Рабочие места",
  title: "Операторский стол",
  img: "images/operator_table.webp",
  short: "Мобильный рабочий стол с интегрированным лючком и стальной опорой на колёсах.",
  desc: "Эргономичное рабочее место для оперативной зоны и приёмных. Тёплая ореховая столешница на графитовом металлическом каркасе, скрытый блок розеток и колёсные опоры для свободной перестановки.",
  specs: [["Материал", "Шпон ореха, сталь"], ["Опции", "Лючок, кабель-канал"], ["Мобильность", "Опоры на колёсах"], ["Изготовление", "На заказ, 20–30 дней"]]
}, {
  id: "wall_mounted_table",
  cat: "Холл и зоны ожидания",
  title: "Пристенный стол",
  img: "images/wall_mounted_table.webp",
  short: "Парящая консоль с рифлёным основанием — акцент входной группы или переговорной.",
  desc: "Консоль-стол с эффектом парящей столешницы и рифлёным пьедесталом. Используется как представительская консоль в холле, зоне ресепшн или переговорной. Точная подгонка под высоту и геометрию стены.",
  specs: [["Материал", "Массив ореха"], ["Монтаж", "Настенное крепление"], ["Основание", "Рифлёный пьедестал"], ["Изготовление", "На заказ, 25–35 дней"]]
}, {
  id: "wine_cabinet",
  cat: "Системы хранения",
  title: "Винный шкаф",
  img: "images/wine_cabinet.webp",
  short: "Витрина из ореха со стеклянными фасадами и вентилируемым цоколем.",
  desc: "Модульная витрина-шкаф со стеклянными дверьми в тонкой металлической рамке и вентилируемым цоколем. Подходит для библиотеки кабинета, винной коллекции и представительских витрин. Собирается в линию любой длины.",
  specs: [["Материал", "Шпон ореха, стекло"], ["Фасады", "Стекло в алюм. рамке"], ["Модульность", "Секции от 1 до N"], ["Изготовление", "На заказ, 35–50 дней"]]
}, {
  id: "chest",
  cat: "Системы хранения",
  title: "Комод-сервант",
  img: "images/chest.webp",
  short: "Низкий сервант с глухими и витринными фасадами на точёных опорах.",
  desc: "Представительский сервант для кабинета и переговорной: верхний ряд глухих фасадов, нижний — витринный со стеклом и бронзовой фурнитурой в форме звезды. Точёные деревянные опоры придают изделию классическую статусность.",
  specs: [["Материал", "Шпон ореха, стекло"], ["Фурнитура", "Бронзовые ручки"], ["Опоры", "Точёные, дерево"], ["Изготовление", "На заказ, 30–45 дней"]]
}, {
  id: "tv_stand",
  cat: "Системы хранения",
  title: "Тумба под ТВ",
  img: "images/tv_stand.webp",
  short: "Открытый стеллаж-тумба с ореховой столешницей и крашеным корпусом.",
  desc: "Открытая тумба-стеллаж под ТВ и технику: контрастное сочетание тёплой ореховой столешницы и корпуса в тёплом greige. Восемь секций для аппаратуры, книг и аксессуаров. Цвет корпуса подбирается под интерьер.",
  specs: [["Материал", "Орех + МДФ эмаль"], ["Секции", "8 открытых ниш"], ["Цвет корпуса", "По палитре RAL"], ["Изготовление", "На заказ, 25–35 дней"]]
}, {
  id: "coffee_table",
  cat: "Холл и зоны ожидания",
  title: "Журнальный столик",
  img: "images/coffee_table.webp",
  short: "Низкий столик с ореховой столешницей на скульптурном основании.",
  desc: "Журнальный столик для зоны отдыха, переговорной или приёмной. Цельная ореховая столешница со скруглённой кромкой опирается на скульптурное основание — лёгкий акцент в представительском интерьере.",
  specs: [["Материал", "Шпон ореха, массив"], ["Покрытие", "Натуральное масло-воск"], ["Основание", "Скульптурное"], ["Изготовление", "На заказ, 20–30 дней"]]
}, {
  id: "table",
  cat: "Кабинет руководителя",
  title: "Стол",
  img: "images/table.webp",
  short: "Универсальный стол из ореха для кабинета и представительских зон.",
  desc: "Стол классической формы с ореховой столешницей и фрезерованным основанием. Подходит как дополнение к кабинету руководителя, библиотеке или зоне приёма посетителей.",
  specs: [["Материал", "Шпон ореха, массив"], ["Покрытие", "Натуральное масло-воск"], ["Основание", "Фрезерованные опоры"], ["Изготовление", "На заказ, 25–35 дней"]]
}, {
  id: "conf_table",
  cat: "Переговорные",
  title: "Стол для конференций",
  img: "images/conf_table.webp",
  short: "Представительский стол переговорной на группе фрезерованных опор.",
  desc: "Крупноформатный стол для переговорной комнаты и конференц-зала. Цельная ореховая столешница и продуманная раскладка кабель-менеджмента под технику и розетки на группе. Размер и конфигурация — под вашу комнату.",
  specs: [["Материал", "Шпон ореха, массив"], ["Опции", "Кабель-менеджмент"], ["Основание", "Группа опор"], ["Изготовление", "На заказ, 35–50 дней"]]
}];
const ADVANTAGES = [{
  n: "01",
  t: "Ручная работа",
  d: "Каждое изделие собирается мастерами вручную: подбор текстуры шпона, шлифовка кромок и финишное масло-воск наносятся в несколько слоёв.",
  ico: "hand"
}, {
  n: "02",
  t: "Изготовление на заказ",
  d: "Размер, цвет корпуса, фурнитура и кабель-менеджмент проектируются под ваш кабинет. Согласование чертежей до запуска в производство.",
  ico: "ruler"
}, {
  n: "03",
  t: "Гарантия качества",
  d: "Фабричная гарантия и контроль на каждом этапе — от сушки массива до упаковки. Сопровождение, доставка и монтаж по России.",
  ico: "shield"
}];
const PHONE = "+7 (495) 123-45-67";
const PHONE_HREF = "+74951234567";
const EMAIL = "info@vm-torg.ru";
const ADDRESS = "г. Смоленск, ул. Николаева, д. 51, офис В13";
const NAV = [["collection", "Коллекция"], ["about", "О компании"], ["advantages", "Преимущества"], ["production", "Производство"], ["contact", "Контакты"]];

/* ============================================================
   ICONS
   ============================================================ */
function Icon({
  name,
  size = 26,
  stroke = 1.4
}) {
  const p = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  switch (name) {
    case "arrow":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M5 12h14M13 6l6 6-6 6"
      }));
    case "plus":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M12 6v12M6 12h12"
      }));
    case "close":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M6 6l12 12M18 6L6 18"
      }));
    case "chevL":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M15 6l-6 6 6 6"
      }));
    case "chevR":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M9 6l6 6-6 6"
      }));
    case "check":
      return /*#__PURE__*/React.createElement("svg", _extends({}, p, {
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M5 12l4.5 4.5L19 7"
      }));
    case "phone":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l1 4v2a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z"
      }));
    case "mail":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "5",
        width: "18",
        height: "14",
        rx: "1.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m3.5 6.5 8.5 6 8.5-6"
      }));
    case "pin":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "10",
        r: "2.5"
      }));
    case "hand":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M8 11V5.5a1.5 1.5 0 0 1 3 0V10m0-.5V4.5a1.5 1.5 0 0 1 3 0V10m0-1.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-2.7L3.5 14a1.6 1.6 0 0 1 2.6-1.8L8 14"
      }));
    case "ruler":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M3 16.5 16.5 3 21 7.5 7.5 21 3 16.5Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M7 11l2 2M10 8l2 2M13 5l2 2"
      }));
    case "shield":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "m9 12 2 2 4-4"
      }));
    case "leaf":
      return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
        d: "M4 20c8 1 14-4 16-15C12 4 5 9 4 20Z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M4 20c2-6 5-9 9-11"
      }));
    default:
      return null;
  }
}

/* ============================================================
   REVEAL HOOK
   ============================================================ */
function useReveal(replayKey) {
  const ioRef = useRef(null);
  const first = useRef(true);

  // initial observer
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px"
    });
    ioRef.current = io;
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // replay when animation type / intensity changes so the difference is visible
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const io = ioRef.current;
    if (!io) return;
    const els = [...document.querySelectorAll(".reveal.in")];
    els.forEach(el => el.classList.remove("in"));
    // force reflow so the reset transform applies before re-observing
    void document.body.offsetHeight;
    requestAnimationFrame(() => els.forEach(el => io.observe(el)));
  }, [replayKey]);
}
const scrollTo = id => {
  const el = document.getElementById(id);
  if (!el) return;
  const se = document.scrollingElement || document.documentElement;
  const top = el.getBoundingClientRect().top + se.scrollTop - 64;
  se.scrollTo({
    top,
    behavior: "smooth"
  });
};

/* ============================================================
   HEADER
   ============================================================ */
function Header({
  onBurger
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    className: "header" + (scrolled ? " scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "brand",
    onClick: () => scrollTo("top")
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-mark"
  }, "\u0412\u041C"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "brand-name"
  }, "\u0412\u041C-\u0422\u043E\u0440\u0433"), /*#__PURE__*/React.createElement("span", {
    className: "brand-sub"
  }, "\u043C\u0435\u0431\u0435\u043B\u044C \u043D\u0430 \u0437\u0430\u043A\u0430\u0437"))), /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, NAV.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => scrollTo(id)
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "header-cta"
  }, /*#__PURE__*/React.createElement("a", {
    className: "header-phone",
    href: "tel:" + PHONE_HREF
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, PHONE), /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "\u0437\u0432\u043E\u043D\u043E\u043A \u043F\u043E \u0420\u043E\u0441\u0441\u0438\u0438")), /*#__PURE__*/React.createElement("button", {
    className: "burger",
    onClick: onBurger,
    "aria-label": "\u041C\u0435\u043D\u044E"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)))));
}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-bg"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/hero.webp",
    alt: "\u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442 \u0412\u041C-\u0422\u043E\u0440\u0433",
    fetchpriority: "high",
    decoding: "async"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow hero-eyebrow rule"
  }, "\u042D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0439 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C \u0432 \u0420\u043E\u0441\u0441\u0438\u0438"), /*#__PURE__*/React.createElement("h1", null, "\u041F\u0440\u0435\u043C\u0438\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u0435\u0431\u0435\u043B\u044C ", /*#__PURE__*/React.createElement("em", null, "\u0440\u0443\u0447\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B")), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "\u041E\u041E\u041E \xAB\u0412\u041C-\u0422\u043E\u0440\u0433\xBB \u2014 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u043C\u0435\u0431\u0435\u043B\u0438 \u0434\u043B\u044F \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u043E\u0432, \u043F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u043D\u044B\u0445 \u0438 \u0437\u043E\u043D \u043F\u0440\u0438\u0451\u043C\u0430. \u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u0437\u0430\u043A\u0430\u0437 \u0438\u0437 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0440\u0435\u0445\u0430."), /*#__PURE__*/React.createElement("div", {
    className: "hero-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn on-dark",
    onClick: () => scrollTo("collection")
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044E ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    size: 17
  }))), /*#__PURE__*/React.createElement("a", {
    className: "btn ghost on-dark",
    onClick: () => scrollTo("contact")
  }, "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "15"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "\u043B\u0435\u0442 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435 \u043F\u0440\u0435\u043C\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u0435\u0431\u0435\u043B\u0438")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "100%"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "\u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u0434 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043A\u0430\u0437")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "\u0420\u0424"), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "\u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043C\u043E\u043D\u0442\u0430\u0436 \u043F\u043E \u0432\u0441\u0435\u0439 \u0420\u043E\u0441\u0441\u0438\u0438"))))), /*#__PURE__*/React.createElement("div", {
    className: "scroll-hint"
  }, /*#__PURE__*/React.createElement("span", null, "\u043F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u0435"), /*#__PURE__*/React.createElement("span", {
    className: "ln"
  })));
}

/* ============================================================
   COLLECTION
   ============================================================ */
function Collection({
  onOpen,
  onImage
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section collection",
    id: "collection"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "coll-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow rule"
  }, "\u041A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F"), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "\u041C\u0435\u0431\u0435\u043B\u044C \u0434\u043B\u044F \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u043E\u0432")), /*#__PURE__*/React.createElement("p", {
    className: "lead reveal d1",
    style: {
      maxWidth: "30ch",
      marginBottom: 6
    }
  }, "\u0414\u0435\u0432\u044F\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439 \u0438\u0437\u0434\u0435\u043B\u0438\u0439 \u0440\u0443\u0447\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u2014 \u043E\u0442 \u0441\u0442\u043E\u043B\u0430 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u0434\u043E \u0441\u0438\u0441\u0442\u0435\u043C \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F. \u041A\u0430\u0436\u0434\u0430\u044F \u043F\u043E\u0437\u0438\u0446\u0438\u044F \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0434 \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442.")), /*#__PURE__*/React.createElement("div", {
    className: "grid-cards"
  }, CATEGORIES.map((c, i) => /*#__PURE__*/React.createElement("article", {
    key: c.id,
    className: "card reveal d" + (i % 3 + 1),
    onClick: () => onOpen(i)
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-media",
    onClick: e => {
      e.stopPropagation();
      onImage(i);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "card-idx"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("img", {
    src: c.img,
    alt: c.title,
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "card-cat"
  }, c.cat), /*#__PURE__*/React.createElement("h3", {
    className: "card-title"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "card-desc"
  }, c.short), /*#__PURE__*/React.createElement("div", {
    className: "card-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "link-arrow"
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"), /*#__PURE__*/React.createElement("span", {
    className: "plus"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 18
  })))))))));
}

/* ============================================================
   ABOUT
   ============================================================ */
function About() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section about",
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow rule reveal"
  }, "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"), /*#__PURE__*/React.createElement("h2", {
    className: "display reveal d1"
  }, "\u042D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0439 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u043E\u0439 \u043C\u0435\u0431\u0435\u043B\u044C\u043D\u043E\u0439 \u0444\u0430\u0431\u0440\u0438\u043A\u0438"), /*#__PURE__*/React.createElement("p", {
    className: "reveal d2"
  }, "\u041E\u041E\u041E \xAB\u0412\u041C-\u0422\u043E\u0440\u0433\xBB \u2014 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0438 \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u043F\u0440\u0435\u043C\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u0435\u0431\u0435\u043B\u0438 \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0420\u043E\u0441\u0441\u0438\u0438. \u041C\u044B \u0441\u043E\u0435\u0434\u0438\u043D\u044F\u0435\u043C \u0444\u0430\u0431\u0440\u0438\u0447\u043D\u043E\u0435 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0440\u0443\u0447\u043D\u043E\u0439 \u0441\u0431\u043E\u0440\u043A\u0438 \u0441 \u043F\u0440\u044F\u043C\u044B\u043C\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0430\u043C\u0438 \u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C."), /*#__PURE__*/React.createElement("p", {
    className: "reveal d2"
  }, "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0430\u043C\u0438 \u043F\u0435\u0440\u0432\u044B\u0445 \u043B\u0438\u0446, \u043F\u0435\u0440\u0435\u0433\u043E\u0432\u043E\u0440\u043D\u044B\u043C\u0438, \u043F\u0440\u0438\u0451\u043C\u043D\u044B\u043C\u0438 \u0438 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C\u0438 \u0437\u043E\u043D\u0430\u043C\u0438. \u041E\u0442 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u044D\u0441\u043A\u0438\u0437\u0430 \u0434\u043E \u043C\u043E\u043D\u0442\u0430\u0436\u0430 \u043D\u0430 \u043E\u0431\u044A\u0435\u043A\u0442\u0435 \u043F\u0440\u043E\u0435\u043A\u0442 \u0432\u0435\u0434\u0451\u0442 \u043E\u0434\u0438\u043D \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440."), /*#__PURE__*/React.createElement("div", {
    className: "about-copy sign reveal d3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "seal"
  }, "\u0412\u041C"), /*#__PURE__*/React.createElement("span", {
    className: "who"
  }, /*#__PURE__*/React.createElement("b", null, "\u041E\u041E\u041E \xAB\u0412\u041C-\u0422\u043E\u0440\u0433\xBB"), /*#__PURE__*/React.createElement("span", null, "\u043F\u0440\u044F\u043C\u044B\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0441 \u0444\u0430\u0431\u0440\u0438\u043A\u0438 \xB7 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C \u2192 \u0420\u043E\u0441\u0441\u0438\u044F")))), /*#__PURE__*/React.createElement("div", {
    className: "about-media reveal d2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "frame"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/wine_cabinet.webp",
    alt: "\u0418\u0437\u0434\u0435\u043B\u0438\u0435 \u0440\u0443\u0447\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B",
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    className: "badge"
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C"), /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, "\u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0446\u0438\u043A\u043B\u0430")))));
}

/* ============================================================
   ADVANTAGES
   ============================================================ */
function Advantages() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section adv",
    id: "advantages"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow rule"
  }, "\u041F\u043E\u0447\u0435\u043C\u0443 \u0412\u041C-\u0422\u043E\u0440\u0433"), /*#__PURE__*/React.createElement("h2", {
    className: "display"
  }, "\u0422\u0440\u0438 \u043F\u0440\u0438\u0447\u0438\u043D\u044B \u0434\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043D\u0430\u043C \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440")), /*#__PURE__*/React.createElement("div", {
    className: "adv-grid"
  }, ADVANTAGES.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: a.n,
    className: "adv-item reveal d" + (i + 1)
  }, /*#__PURE__*/React.createElement("div", {
    className: "adv-num"
  }, a.n), /*#__PURE__*/React.createElement("div", {
    className: "adv-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a.ico,
    size: 34,
    stroke: 1.3
  })), /*#__PURE__*/React.createElement("h3", null, a.t), /*#__PURE__*/React.createElement("p", null, a.d))))));
}

/* ============================================================
   PRODUCTION
   ============================================================ */
function Production() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section prod",
    id: "production"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap prod-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prod-copy"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow rule reveal"
  }, "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0432 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u0438"), /*#__PURE__*/React.createElement("h2", {
    className: "display reveal d1"
  }, "\u0424\u0430\u0431\u0440\u0438\u043A\u0430 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u0446\u0438\u043A\u043B\u0430"), /*#__PURE__*/React.createElement("p", {
    className: "reveal d2"
  }, "\u0418\u0437\u0434\u0435\u043B\u0438\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u044F\u0442\u0441\u044F \u043D\u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0439 \u0444\u0430\u0431\u0440\u0438\u043A\u0435 \u0432 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0435 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C \u2014 \u043E\u0442 \u0441\u0443\u0448\u043A\u0438 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0438 \u043F\u043E\u0434\u0431\u043E\u0440\u0430 \u0448\u043F\u043E\u043D\u0430 \u0434\u043E \u0440\u0443\u0447\u043D\u043E\u0439 \u0448\u043B\u0438\u0444\u043E\u0432\u043A\u0438 \u0438 \u0444\u0438\u043D\u0438\u0448\u043D\u043E\u0433\u043E \u043F\u043E\u043A\u0440\u044B\u0442\u0438\u044F. \u041F\u0440\u044F\u043C\u044B\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0431\u0435\u0437 \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u043E\u0432 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u044E\u0442 \u0447\u0435\u0441\u0442\u043D\u0443\u044E \u0446\u0435\u043D\u0443 \u0438 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u043C \u044D\u0442\u0430\u043F\u0435."), /*#__PURE__*/React.createElement("ul", {
    className: "prod-points"
  }, /*#__PURE__*/React.createElement("li", {
    className: "reveal d2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "01"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, /*#__PURE__*/React.createElement("b", null, "\u041D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B"), /*#__PURE__*/React.createElement("span", null, "\u041C\u0430\u0441\u0441\u0438\u0432 \u0438 \u0448\u043F\u043E\u043D \u043E\u0440\u0435\u0445\u0430, \u0437\u0430\u043A\u0430\u043B\u0451\u043D\u043D\u043E\u0435 \u0441\u0442\u0435\u043A\u043B\u043E, \u0431\u0440\u043E\u043D\u0437\u043E\u0432\u0430\u044F \u0444\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430"))), /*#__PURE__*/React.createElement("li", {
    className: "reveal d3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "02"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, /*#__PURE__*/React.createElement("b", null, "\u0420\u0443\u0447\u043D\u0430\u044F \u0441\u0431\u043E\u0440\u043A\u0430 \u0438 \u0444\u0438\u043D\u0438\u0448"), /*#__PURE__*/React.createElement("span", null, "\u0428\u043B\u0438\u0444\u043E\u0432\u043A\u0430 \u043A\u0440\u043E\u043C\u043E\u043A \u0438 \u043C\u0430\u0441\u043B\u043E-\u0432\u043E\u0441\u043A \u0432 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u043B\u043E\u0451\u0432"))), /*#__PURE__*/React.createElement("li", {
    className: "reveal d4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, "03"), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, /*#__PURE__*/React.createElement("b", null, "\u041B\u043E\u0433\u0438\u0441\u0442\u0438\u043A\u0430 \u043F\u043E \u0420\u043E\u0441\u0441\u0438\u0438"), /*#__PURE__*/React.createElement("span", null, "\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430, \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0438 \u043C\u043E\u043D\u0442\u0430\u0436 \u0441\u0438\u043B\u0430\u043C\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"))))), /*#__PURE__*/React.createElement("div", {
    className: "prod-media reveal d2"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/chest.webp",
    alt: "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043C\u0435\u0431\u0435\u043B\u0438",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("span", {
    className: "prod-flag"
  }, "made in belarus"))));
}

/* ============================================================
   CONTACT
   ============================================================ */
function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const set = k => e => {
    setForm(f => ({
      ...f,
      [k]: e.target.value
    }));
    setErrors(er => ({
      ...er,
      [k]: undefined
    }));
  };
  const submit = e => {
    e.preventDefault();
    const er = {};
    if (form.name.trim().length < 2) er.name = "Укажите имя";
    if (!/[0-9]{6,}/.test(form.phone.replace(/\D/g, ""))) er.phone = "Укажите корректный телефон";
    if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = "Проверьте e-mail";
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section contact",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap contact-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-info"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow rule reveal"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /*#__PURE__*/React.createElement("h2", {
    className: "display reveal d1"
  }, "\u041E\u0431\u0441\u0443\u0434\u0438\u043C \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442"), /*#__PURE__*/React.createElement("p", {
    className: "reveal d2"
  }, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u0438\u043B\u0438 \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u2014 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043C \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E, \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0435\u043C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0438 \u0441\u0440\u043E\u043A\u0438 \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u043E\u0434 \u0432\u0430\u0448 \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440."), /*#__PURE__*/React.createElement("div", {
    className: "info-list"
  }, /*#__PURE__*/React.createElement("a", {
    className: "info-row reveal d2",
    href: "tel:" + PHONE_HREF
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 22
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, PHONE))), /*#__PURE__*/React.createElement("a", {
    className: "info-row reveal d3",
    href: "mailto:" + EMAIL
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 22
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, EMAIL))), /*#__PURE__*/React.createElement("div", {
    className: "info-row reveal d4"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    size: 22
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "val"
  }, ADDRESS))))), /*#__PURE__*/React.createElement("div", {
    className: "form-card reveal d2"
  }, !sent ? /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("h3", null, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "\u041E\u0442\u0432\u0435\u0442\u0438\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0434\u043D\u044F."), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F"), /*#__PURE__*/React.createElement("input", {
    className: errors.name ? "" : "",
    value: form.name,
    onChange: set("name"),
    placeholder: "\u041A\u0430\u043A \u043A \u0432\u0430\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F"
  }), /*#__PURE__*/React.createElement("div", {
    className: "msg"
  }, errors.name)), /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.phone ? " err" : "")
  }, /*#__PURE__*/React.createElement("label", null, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), /*#__PURE__*/React.createElement("input", {
    value: form.phone,
    onChange: set("phone"),
    placeholder: "+7 (___) ___-__-__"
  }), /*#__PURE__*/React.createElement("div", {
    className: "msg"
  }, errors.phone)), /*#__PURE__*/React.createElement("div", {
    className: "field" + (errors.email ? " err" : "")
  }, /*#__PURE__*/React.createElement("label", null, "E-mail"), /*#__PURE__*/React.createElement("input", {
    value: form.email,
    onChange: set("email"),
    placeholder: "name@company.ru"
  }), /*#__PURE__*/React.createElement("div", {
    className: "msg"
  }, errors.email))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"), /*#__PURE__*/React.createElement("textarea", {
    value: form.message,
    onChange: set("message"),
    placeholder: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0438\u0437\u0434\u0435\u043B\u0438\u044F, \u0440\u0430\u0437\u043C\u0435\u0440\u044B, \u0441\u0440\u043E\u043A\u0438\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-foot"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn"
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    size: 17
  }))), /*#__PURE__*/React.createElement("span", {
    className: "form-note"
  }, "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445."))) : /*#__PURE__*/React.createElement("div", {
    className: "form-success"
  }, /*#__PURE__*/React.createElement("div", {
    className: "check"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 30
  })), /*#__PURE__*/React.createElement("h3", null, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430"), /*#__PURE__*/React.createElement("p", null, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E, ", form.name || "коллега", "! \u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0412\u041C-\u0422\u043E\u0440\u0433 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn ghost",
    onClick: () => {
      setSent(false);
      setForm({
        name: "",
        phone: "",
        email: "",
        message: ""
      });
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043E\u0434\u043D\u0443"))))));
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    className: "brand",
    onClick: () => scrollTo("top")
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-mark"
  }, "\u0412\u041C"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "brand-name"
  }, "\u0412\u041C-\u0422\u043E\u0440\u0433"), /*#__PURE__*/React.createElement("span", {
    className: "brand-sub"
  }, "\u043C\u0435\u0431\u0435\u043B\u044C \u043D\u0430 \u0437\u0430\u043A\u0430\u0437"))), /*#__PURE__*/React.createElement("p", {
    className: "footer-about"
  }, "\u042D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0439 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u043F\u0440\u0435\u043C\u0438\u0430\u043B\u044C\u043D\u043E\u0439 \u043C\u0435\u0431\u0435\u043B\u0438 \u0440\u0443\u0447\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0432 \u0420\u043E\u0441\u0441\u0438\u0438.")), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "\u041A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F"), CATEGORIES.map(c => /*#__PURE__*/React.createElement("a", {
    key: c.id,
    onClick: () => scrollTo("collection")
  }, c.title))), /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), /*#__PURE__*/React.createElement("a", {
    href: "tel:" + PHONE_HREF
  }, PHONE), /*#__PURE__*/React.createElement("a", {
    href: "mailto:" + EMAIL
  }, EMAIL), /*#__PURE__*/React.createElement("p", null, ADDRESS))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 \u041E\u041E\u041E \xAB\u0412\u041C-\u0422\u043E\u0440\u0433\xBB. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."), /*#__PURE__*/React.createElement("span", null, "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u2014 \u0420\u0435\u0441\u043F\u0443\u0431\u043B\u0438\u043A\u0430 \u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C \xB7 \u041F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u043F\u043E \u0420\u0424"))));
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
function Lightbox({
  index,
  onClose,
  onNav
}) {
  const open = index !== null;
  const c = open ? CATEGORIES[index] : null;
  useEffect(() => {
    const onKey = e => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, onNav]);
  return /*#__PURE__*/React.createElement("div", {
    className: "lb-overlay" + (open ? " open" : ""),
    onClick: onClose
  }, c && /*#__PURE__*/React.createElement("div", {
    className: "lb",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "lb-close",
    onClick: onClose,
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    className: "lb-nav prev",
    onClick: () => onNav(-1),
    "aria-label": "\u041D\u0430\u0437\u0430\u0434"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevL",
    size: 22
  })), /*#__PURE__*/React.createElement("button", {
    className: "lb-nav next",
    onClick: () => onNav(1),
    "aria-label": "\u0412\u043F\u0435\u0440\u0451\u0434"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevR",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "lb-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: c.img,
    alt: c.title
  })), /*#__PURE__*/React.createElement("div", {
    className: "lb-body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lb-cat"
  }, c.cat), /*#__PURE__*/React.createElement("h3", {
    className: "lb-title"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "lb-desc"
  }, c.desc), /*#__PURE__*/React.createElement("div", {
    className: "lb-specs"
  }, c.specs.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    className: "row",
    key: k
  }, /*#__PURE__*/React.createElement("span", {
    className: "k"
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "v"
  }, v)))), /*#__PURE__*/React.createElement("div", {
    className: "lb-actions"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn",
    onClick: () => {
      onClose();
      setTimeout(() => scrollTo("contact"), 240);
    }
  }, "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0446\u0435\u043D\u0443 ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow",
    size: 17
  }))), /*#__PURE__*/React.createElement("button", {
    className: "btn ghost",
    onClick: onClose
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")))));
}

/* ============================================================
   IMAGE POPUP (full-size product image)
   ============================================================ */
function ImagePopup({
  index,
  onClose,
  onNav
}) {
  const open = index !== null;
  const c = open ? CATEGORIES[index] : null;
  useEffect(() => {
    const onKey = e => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    if (open) document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, onNav]);
  return /*#__PURE__*/React.createElement("div", {
    className: "img-overlay" + (open ? " open" : ""),
    onClick: onClose
  }, c && /*#__PURE__*/React.createElement("div", {
    className: "img-pop",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "img-close",
    onClick: onClose,
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "close",
    size: 22
  })), /*#__PURE__*/React.createElement("button", {
    className: "img-nav prev",
    onClick: () => onNav(-1),
    "aria-label": "\u041D\u0430\u0437\u0430\u0434"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevL",
    size: 24
  })), /*#__PURE__*/React.createElement("button", {
    className: "img-nav next",
    onClick: () => onNav(1),
    "aria-label": "\u0412\u043F\u0435\u0440\u0451\u0434"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevR",
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    className: "img-stage"
  }, /*#__PURE__*/React.createElement("img", {
    src: c.img,
    alt: c.title
  })), /*#__PURE__*/React.createElement("div", {
    className: "img-cap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ttl"
  }, c.title))));
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function MobileMenu({
  open,
  onClose
}) {
  const go = id => {
    onClose();
    setTimeout(() => scrollTo(id), 220);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "mobile-menu" + (open ? " open" : "")
  }, NAV.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go(id)
  }, label)), /*#__PURE__*/React.createElement("a", {
    className: "mm-contact",
    href: "tel:" + PHONE_HREF
  }, PHONE));
}

/* ============================================================
   TWEAKS
   ============================================================ */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#5e3c25", "#834e33", "#9c7b58"],
  "displayFont": "Cormorant",
  "heroShade": 74,
  "cardRadius": 0,
  "hoverAnim": "Подъём + зум",
  "hoverIntensity": 45,
  "revealAnim": "Снизу вверх",
  "revealIntensity": 50
} /*EDITMODE-END*/;

// Локальное сохранение выбранных в панели значений (на машине пользователя).
// На «боевой» дефолт для всех посетителей влияет только блок EDITMODE выше —
// кнопка «Подтвердить» копирует его в буфер, чтобы вставить сюда вручную.
const TWEAKS_LS_KEY = "vmtorg_tweaks_v1";
function loadDefaults() {
  try {
    const saved = JSON.parse(localStorage.getItem(TWEAKS_LS_KEY) || "null");
    if (saved && typeof saved === "object") return {
      ...TWEAK_DEFAULTS,
      ...saved
    };
  } catch (e) {/* ignore */}
  return TWEAK_DEFAULTS;
}
const FONT_MAP = {
  "Cormorant": '"Cormorant Garamond", Georgia, serif',
  "Playfair": '"Playfair Display", Georgia, serif',
  "PT Serif": '"PT Serif", Georgia, serif',
  "EB Garamond": '"EB Garamond", Georgia, serif',
  "Spectral": '"Spectral", Georgia, serif'
};
const PALETTES = [["#5e3c25", "#834e33", "#9c7b58"],
// Орех
["#3a2820", "#5e3c25", "#8a6a4a"],
// Эспрессо
["#834e33", "#9a5d3a", "#b08861"],
// Коньяк
["#43413c", "#6b6961", "#928f85"] // Графит
];

// Цвет шрифта подбирается под выбранный тон дерева
const PALETTE_INK = ["#43291a", "#251913", "#5a3320", "#36332e"];
function inkForPalette(pal) {
  const key = (pal || []).join(",");
  const i = PALETTES.findIndex(p => p.join(",") === key);
  return PALETTE_INK[i] || PALETTE_INK[0];
}
const HOVER_MAP = {
  "Подъём": "lift",
  "Зум фото": "zoom",
  "Подъём + зум": "both",
  "Мягкая": "soft",
  "Выключено": "off"
};
const ANIM_MAP = {
  "Снизу вверх": "up",
  "Плавное": "fade",
  "Увеличение": "scale",
  "Сбоку": "side",
  "Расфокус": "blur",
  "Выключено": "off"
};
function TweaksUI({
  t,
  setTweak
}) {
  const [saved, setSaved] = useState(false);
  const [jsonOut, setJsonOut] = useState("");
  const taRef = useRef(null);
  const confirmDefaults = () => {
    // 1) локальное сохранение (переживает Refresh в этом браузере)
    try {
      localStorage.setItem(TWEAKS_LS_KEY, JSON.stringify(t));
    } catch (e) {/* ignore */}
    // 2) показать готовый блок для вставки в TWEAK_DEFAULTS и выделить его
    const json = JSON.stringify(t, null, 2);
    setJsonOut(json);
    setTimeout(() => {
      const ta = taRef.current;
      if (ta) {
        ta.focus();
        ta.select();
      }
    }, 0);
    setSaved(true);
    setTimeout(() => setSaved(false), 2400);
  };
  return /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    label: "\u041F\u0430\u043B\u0438\u0442\u0440\u0430"
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "\u0422\u043E\u043D \u0434\u0435\u0440\u0435\u0432\u0430",
    value: t.palette,
    options: PALETTES,
    labels: ["Орех", "Эспрессо", "Коньяк", "Графит"],
    onChange: v => setTweak("palette", v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "\u0422\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0430"
  }), /*#__PURE__*/React.createElement(TweakSelect, {
    label: "\u0428\u0440\u0438\u0444\u0442 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u0432",
    value: t.displayFont,
    options: ["Cormorant", "Playfair", "PT Serif", "EB Garamond", "Spectral"],
    onChange: v => setTweak("displayFont", v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Hero"
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "\u0417\u0430\u0442\u0435\u043C\u043D\u0435\u043D\u0438\u0435 \u0444\u043E\u0442\u043E",
    value: t.heroShade,
    min: 30,
    max: 88,
    unit: "%",
    onChange: v => setTweak("heroShade", v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u2014 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435"
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "\u0420\u0430\u0434\u0438\u0443\u0441 \u0441\u043A\u0440\u0443\u0433\u043B\u0435\u043D\u0438\u044F \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A",
    value: t.cardRadius,
    min: 0,
    max: 40,
    unit: "px",
    onChange: v => setTweak("cardRadius", v)
  }), /*#__PURE__*/React.createElement(TweakSelect, {
    label: "\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F \u043F\u0440\u0438 \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0438",
    value: t.hoverAnim,
    options: ["Подъём", "Зум фото", "Подъём + зум", "Мягкая", "Выключено"],
    onChange: v => setTweak("hoverAnim", v)
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "\u0418\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F",
    value: t.hoverIntensity,
    min: 0,
    max: 100,
    unit: "%",
    onChange: v => setTweak("hoverIntensity", v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435"
  }), /*#__PURE__*/React.createElement(TweakButton, {
    label: saved ? "\u2713 Сохранено" : "Подтвердить как дефолт",
    onClick: confirmDefaults
  }), jsonOut ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      opacity: 0.62,
      lineHeight: 1.35
    }
  }, "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u0435 \u0438 \u0441\u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 (Ctrl/\u2318+C), \u0437\u0430\u0442\u0435\u043C \u0432\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0432 app.jsx \u043C\u0435\u0436\u0434\u0443 \u043C\u0430\u0440\u043A\u0435\u0440\u0430\u043C\u0438 EDITMODE."), /*#__PURE__*/React.createElement("textarea", {
    ref: taRef,
    readOnly: true,
    value: jsonOut,
    onFocus: e => e.target.select(),
    spellCheck: false,
    style: {
      width: "100%",
      height: 116,
      resize: "vertical",
      boxSizing: "border-box",
      font: "10.5px/1.45 ui-monospace, SFMono-Regular, Menlo, monospace",
      color: "#29261b",
      background: "rgba(255,255,255,.6)",
      border: ".5px solid rgba(0,0,0,.16)",
      borderRadius: 8,
      padding: "7px 8px"
    }
  })) : null);
}

/* ============================================================
   APP
   ============================================================ */
function App() {
  const [lb, setLb] = useState(null);
  const [img, setImg] = useState(null);
  const [menu, setMenu] = useState(false);
  const [t, setTweak] = useTweaks(loadDefaults());
  useReveal(t.revealAnim + ":" + t.revealIntensity);
  useEffect(() => {
    const r = document.documentElement.style;
    const [walnut, cognac, bronze] = t.palette || PALETTES[0];
    r.setProperty("--walnut", walnut);
    r.setProperty("--cognac", cognac);
    r.setProperty("--bronze", bronze);
    r.setProperty("--font-display", FONT_MAP[t.displayFont] || FONT_MAP.Cormorant);
    r.setProperty("--ink", inkForPalette(t.palette));
    r.setProperty("--hero-shade", (t.heroShade / 100).toFixed(2));
    r.setProperty("--card-radius", (t.cardRadius || 0) + "px");
    const hk = (t.hoverIntensity == null ? 45 : t.hoverIntensity) / 100;
    r.setProperty("--hover-lift", Math.round(2 + hk * 16) + "px");
    r.setProperty("--hover-zoom", (1 + hk * 0.14).toFixed(3));
    document.body.setAttribute("data-hover", HOVER_MAP[t.hoverAnim] || "both");
    const k = (t.revealIntensity == null ? 50 : t.revealIntensity) / 100;
    r.setProperty("--reveal-dist", Math.round(10 + k * 86) + "px");
    r.setProperty("--reveal-amt", (0.03 + k * 0.24).toFixed(3));
    r.setProperty("--reveal-blur", Math.round(2 + k * 24) + "px");
    document.body.setAttribute("data-anim", ANIM_MAP[t.revealAnim] || "up");
  }, [t]);
  const nav = useCallback(dir => {
    setLb(i => i === null ? i : (i + dir + CATEGORIES.length) % CATEGORIES.length);
  }, []);
  const navImg = useCallback(dir => {
    setImg(i => i === null ? i : (i + dir + CATEGORIES.length) % CATEGORIES.length);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    onBurger: () => setMenu(m => !m)
  }), /*#__PURE__*/React.createElement(MobileMenu, {
    open: menu,
    onClose: () => setMenu(false)
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Collection, {
    onOpen: setLb,
    onImage: setImg
  }), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Advantages, null), /*#__PURE__*/React.createElement(Production, null), /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(Lightbox, {
    index: lb,
    onClose: () => setLb(null),
    onNav: nav
  }), /*#__PURE__*/React.createElement(ImagePopup, {
    index: img,
    onClose: () => setImg(null),
    onNav: navImg
  }), /*#__PURE__*/React.createElement(TweaksUI, {
    t: t,
    setTweak: setTweak
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));