const { useState, useEffect, useRef, useCallback } = React;

/* ============================================================
   DATA
   ============================================================ */
const CATEGORIES = [
  {
    id: "executive_desk",
    cat: "Кабинет руководителя",
    title: "Стол руководителя",
    img: "images/executive_desk.webp",
    short: "Массивная столешница из ореха на фрезерованном основании — центр представительского кабинета.",
    desc: "Флагман коллекции для кабинета первого лица. Цельный шпон американского ореха, скруглённая кромка ручной шлифовки и рифлёные опоры-колонны. Каждый стол собирается под конкретный кабинет — от размера до раскладки кабель-менеджмента.",
    specs: [["Материал", "Шпон ореха, массив"], ["Покрытие", "Натуральное масло-воск"], ["Основание", "Фрезерованные опоры"], ["Изготовление", "На заказ, 30–45 дней"]],
  },
  {
    id: "operator_table",
    cat: "Рабочие места",
    title: "Операторский стол",
    img: "images/operator_table.webp",
    short: "Мобильный рабочий стол с интегрированным лючком и стальной опорой на колёсах.",
    desc: "Эргономичное рабочее место для оперативной зоны и приёмных. Тёплая ореховая столешница на графитовом металлическом каркасе, скрытый блок розеток и колёсные опоры для свободной перестановки.",
    specs: [["Материал", "Шпон ореха, сталь"], ["Опции", "Лючок, кабель-канал"], ["Мобильность", "Опоры на колёсах"], ["Изготовление", "На заказ, 20–30 дней"]],
  },
  {
    id: "wall_mounted_table",
    cat: "Холл и зоны ожидания",
    title: "Пристенный стол",
    img: "images/wall_mounted_table.webp",
    short: "Парящая консоль с рифлёным основанием — акцент входной группы или переговорной.",
    desc: "Консоль-стол с эффектом парящей столешницы и рифлёным пьедесталом. Используется как представительская консоль в холле, зоне ресепшн или переговорной. Точная подгонка под высоту и геометрию стены.",    specs: [["Материал", "Массив ореха"], ["Монтаж", "Настенное крепление"], ["Основание", "Рифлёный пьедестал"], ["Изготовление", "На заказ, 25–35 дней"]],
  },
  {
    id: "wine_cabinet",
    cat: "Системы хранения",
    title: "Винный шкаф",
    img: "images/wine_cabinet.webp",
    short: "Витрина из ореха со стеклянными фасадами и вентилируемым цоколем.",
    desc: "Модульная витрина-шкаф со стеклянными дверьми в тонкой металлической рамке и вентилируемым цоколем. Подходит для библиотеки кабинета, винной коллекции и представительских витрин. Собирается в линию любой длины.",
    specs: [["Материал", "Шпон ореха, стекло"], ["Фасады", "Стекло в алюм. рамке"], ["Модульность", "Секции от 1 до N"], ["Изготовление", "На заказ, 35–50 дней"]],
  },
  {
    id: "chest",
    cat: "Системы хранения",
    title: "Комод-сервант",
    img: "images/chest.webp",
    short: "Низкий сервант с глухими и витринными фасадами на точёных опорах.",
    desc: "Представительский сервант для кабинета и переговорной: верхний ряд глухих фасадов, нижний — витринный со стеклом и бронзовой фурнитурой в форме звезды. Точёные деревянные опоры придают изделию классическую статусность.",
    specs: [["Материал", "Шпон ореха, стекло"], ["Фурнитура", "Бронзовые ручки"], ["Опоры", "Точёные, дерево"], ["Изготовление", "На заказ, 30–45 дней"]],
  },
  {
    id: "tv_stand",
    cat: "Системы хранения",
    title: "Тумба под ТВ",
    img: "images/tv_stand.webp",
    short: "Открытый стеллаж-тумба с ореховой столешницей и крашеным корпусом.",
    desc: "Открытая тумба-стеллаж под ТВ и технику: контрастное сочетание тёплой ореховой столешницы и корпуса в тёплом greige. Восемь секций для аппаратуры, книг и аксессуаров. Цвет корпуса подбирается под интерьер.",
    specs: [["Материал", "Орех + МДФ эмаль"], ["Секции", "8 открытых ниш"], ["Цвет корпуса", "По палитре RAL"], ["Изготовление", "На заказ, 25–35 дней"]],
  },
];

const ADVANTAGES = [
  { n: "01", t: "Ручная работа", d: "Каждое изделие собирается мастерами вручную: подбор текстуры шпона, шлифовка кромок и финишное масло-воск наносятся в несколько слоёв.", ico: "hand" },
  { n: "02", t: "Изготовление на заказ", d: "Размер, цвет корпуса, фурнитура и кабель-менеджмент проектируются под ваш кабинет. Согласование чертежей до запуска в производство.", ico: "ruler" },
  { n: "03", t: "Гарантия качества", d: "Фабричная гарантия и контроль на каждом этапе — от сушки массива до упаковки. Сопровождение, доставка и монтаж по России.", ico: "shield" },
];

const PHONE = "+7 (495) 123-45-67";
const PHONE_HREF = "+74951234567";
const EMAIL = "info@vm-torg.ru";
const ADDRESS = "г. Смоленск, ул. Николаева, д. 51, офис В13";

const NAV = [
  ["collection", "Коллекция"],
  ["about", "О компании"],
  ["advantages", "Преимущества"],
  ["production", "Производство"],
  ["contact", "Контакты"],
];

/* ============================================================
   ICONS
   ============================================================ */
function Icon({ name, size = 26, stroke = 1.4 }) {
  const p = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "arrow": return <svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    case "plus": return <svg {...p}><path d="M12 6v12M6 12h12" /></svg>;
    case "close": return <svg {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>;
    case "chevL": return <svg {...p}><path d="M15 6l-6 6 6 6" /></svg>;
    case "chevR": return <svg {...p}><path d="M9 6l6 6-6 6" /></svg>;
    case "check": return <svg {...p} strokeWidth="2"><path d="M5 12l4.5 4.5L19 7" /></svg>;
    case "phone": return <svg {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l1 4v2a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z" /></svg>;
    case "mail": return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="m3.5 6.5 8.5 6 8.5-6" /></svg>;
    case "pin": return <svg {...p}><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
    case "hand": return <svg {...p}><path d="M8 11V5.5a1.5 1.5 0 0 1 3 0V10m0-.5V4.5a1.5 1.5 0 0 1 3 0V10m0-1.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-2.7L3.5 14a1.6 1.6 0 0 1 2.6-1.8L8 14" /></svg>;
    case "ruler": return <svg {...p}><path d="M3 16.5 16.5 3 21 7.5 7.5 21 3 16.5Z" /><path d="M7 11l2 2M10 8l2 2M13 5l2 2" /></svg>;
    case "shield": return <svg {...p}><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></svg>;
    case "leaf": return <svg {...p}><path d="M4 20c8 1 14-4 16-15C12 4 5 9 4 20Z" /><path d="M4 20c2-6 5-9 9-11" /></svg>;
    default: return null;
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
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
    ioRef.current = io;
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // replay when animation type / intensity changes so the difference is visible
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    const io = ioRef.current;
    if (!io) return;
    const els = [...document.querySelectorAll(".reveal.in")];
    els.forEach((el) => el.classList.remove("in"));
    // force reflow so the reset transform applies before re-observing
    void document.body.offsetHeight;
    requestAnimationFrame(() => els.forEach((el) => io.observe(el)));
  }, [replayKey]);
}

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const se = document.scrollingElement || document.documentElement;
  const top = el.getBoundingClientRect().top + se.scrollTop - 64;
  se.scrollTo({ top, behavior: "smooth" });
};

/* ============================================================
   HEADER
   ============================================================ */
function Header({ onBurger }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={"header" + (scrolled ? " scrolled" : "")}>
      <div className="header-inner">
        <a className="brand" onClick={() => scrollTo("top")}>
          <span className="brand-mark">ВМ</span>
          <span>
            <span className="brand-name">ВМ-Торг</span>
            <span className="brand-sub">мебель на заказ</span>
          </span>
        </a>
        <nav className="nav">
          {NAV.map(([id, label]) => (
            <a key={id} onClick={() => scrollTo(id)}>{label}</a>
          ))}
        </nav>
        <div className="header-cta">
          <a className="header-phone" href={"tel:" + PHONE_HREF}>
            <span className="num">{PHONE}</span>
            <span className="lbl">звонок по России</span>
          </a>
          <button className="burger" onClick={onBurger} aria-label="Меню">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg"><img src="images/hero.webp" alt="Представительский кабинет ВМ-Торг" fetchpriority="high" decoding="async" /></div>
      <div className="hero-inner">
        <div className="reveal in">
          <span className="eyebrow hero-eyebrow rule">Эксклюзивный представитель в России</span>
          <h1>Премиальная мебель <em>ручной работы</em></h1>
          <p className="lead">ООО «ВМ-Торг» — официальный представитель белорусского производителя мебели для представительских кабинетов, переговорных и зон приёма. Изготовление на заказ из натурального ореха.</p>
          <div className="hero-actions">
            <a className="btn on-dark" onClick={() => scrollTo("collection")}>
              Смотреть коллекцию <span className="arr"><Icon name="arrow" size={17} /></span>
            </a>
            <a className="btn ghost on-dark" onClick={() => scrollTo("contact")}>Запросить проект</a>
          </div>
          <div className="hero-stats">
            <div className="stat"><div className="n">15</div><div className="l">лет на рынке премиальной мебели</div></div>
            <div className="stat"><div className="n">100%</div><div className="l">изготовление под индивидуальный заказ</div></div>
            <div className="stat"><div className="n">РФ</div><div className="l">доставка и монтаж по всей России</div></div>
          </div>
        </div>
      </div>
      <div className="scroll-hint"><span>прокрутите</span><span className="ln"></span></div>
    </section>
  );
}

/* ============================================================
   COLLECTION
   ============================================================ */
function Collection({ onOpen, onImage }) {
  return (
    <section className="section collection" id="collection">
      <div className="wrap">
        <div className="coll-top">
          <div className="section-head reveal">
            <span className="eyebrow rule">Коллекция</span>
            <h2 className="display">Мебель для представительских интерьеров</h2>
          </div>
          <p className="lead reveal d1" style={{ maxWidth: "30ch", marginBottom: 6 }}>
            Шесть категорий изделий ручной работы — от стола руководителя до систем хранения. Каждая позиция собирается под ваш проект.
          </p>
        </div>
        <div className="grid-cards">
          {CATEGORIES.map((c, i) => (
            <article key={c.id} className={"card reveal d" + ((i % 3) + 1)} onClick={() => onOpen(i)}>
              <div className="card-media" onClick={(e) => { e.stopPropagation(); onImage(i); }}>
                <span className="card-idx">{String(i + 1).padStart(2, "0")}</span>
                <img src={c.img} alt={c.title} loading="lazy" />
              </div>
              <div className="card-body">
                <span className="card-cat">{c.cat}</span>
                <h3 className="card-title">{c.title}</h3>
                <p className="card-desc">{c.short}</p>
                <div className="card-foot">
                  <span className="link-arrow">Подробнее</span>
                  <span className="plus"><Icon name="plus" size={18} /></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ABOUT
   ============================================================ */
function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap about-grid">
        <div className="about-copy">
          <span className="eyebrow rule reveal">О компании</span>
          <h2 className="display reveal d1">Эксклюзивный представитель белорусской мебельной фабрики</h2>
          <p className="reveal d2">ООО «ВМ-Торг» — официальный и единственный представитель белорусского производителя премиальной мебели на территории России. Мы соединяем фабричное качество ручной сборки с прямыми поставками и индивидуальным проектированием.</p>
          <p className="reveal d2">Работаем с кабинетами первых лиц, переговорными, приёмными и представительскими зонами. От первого эскиза до монтажа на объекте проект ведёт один менеджер.</p>
          <div className="about-copy sign reveal d3">
            <span className="seal">ВМ</span>
            <span className="who">
              <b>ООО «ВМ-Торг»</b>
              <span>прямые поставки с фабрики · Беларусь → Россия</span>
            </span>
          </div>
        </div>
        <div className="about-media reveal d2">
          <div className="frame"><img src="images/wine_cabinet.webp" alt="Изделие ручной работы" loading="lazy" /></div>
          <div className="badge">
            <div className="n">Беларусь</div>
            <div className="t">собственное производство полного цикла</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ADVANTAGES
   ============================================================ */
function Advantages() {
  return (
    <section className="section adv" id="advantages">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow rule">Почему ВМ-Торг</span>
          <h2 className="display">Три причины доверить нам интерьер</h2>
        </div>
        <div className="adv-grid">
          {ADVANTAGES.map((a, i) => (
            <div key={a.n} className={"adv-item reveal d" + (i + 1)}>
              <div className="adv-num">{a.n}</div>
              <div className="adv-ico"><Icon name={a.ico} size={34} stroke={1.3} /></div>
              <h3>{a.t}</h3>
              <p>{a.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PRODUCTION
   ============================================================ */
function Production() {
  return (
    <section className="section prod" id="production">
      <div className="wrap prod-grid">
        <div className="prod-copy">
          <span className="eyebrow rule reveal">Производство в Беларуси</span>
          <h2 className="display reveal d1">Фабрика полного цикла</h2>
          <p className="reveal d2">Изделия производятся на собственной фабрике в Республике Беларусь — от сушки массива и подбора шпона до ручной шлифовки и финишного покрытия. Прямые поставки без посредников обеспечивают честную цену и контроль качества на каждом этапе.</p>
          <ul className="prod-points">
            <li className="reveal d2"><span className="k">01</span><span className="v"><b>Натуральные материалы</b><span>Массив и шпон ореха, закалённое стекло, бронзовая фурнитура</span></span></li>
            <li className="reveal d3"><span className="k">02</span><span className="v"><b>Ручная сборка и финиш</b><span>Шлифовка кромок и масло-воск в несколько слоёв</span></span></li>
            <li className="reveal d4"><span className="k">03</span><span className="v"><b>Логистика по России</b><span>Упаковка, доставка и монтаж силами компании</span></span></li>
          </ul>
        </div>
        <div className="prod-media reveal d2">
          <img src="images/chest.webp" alt="Производство мебели" loading="lazy" />
          <span className="prod-flag">made in belarus</span>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT
   ============================================================ */
function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (form.name.trim().length < 2) er.name = "Укажите имя";
    if (!/[0-9]{6,}/.test(form.phone.replace(/\D/g, ""))) er.phone = "Укажите корректный телефон";
    if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = "Проверьте e-mail";
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };

  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <span className="eyebrow rule reveal">Контакты</span>
          <h2 className="display reveal d1">Обсудим ваш проект</h2>
          <p className="reveal d2">Оставьте заявку или свяжитесь напрямую — подготовим спецификацию, рассчитаем стоимость и сроки изготовления под ваш интерьер.</p>
          <div className="info-list">
            <a className="info-row reveal d2" href={"tel:" + PHONE_HREF}>
              <span className="ico"><Icon name="phone" size={22} /></span>
              <span><span className="val">{PHONE}</span></span>
            </a>
            <a className="info-row reveal d3" href={"mailto:" + EMAIL}>
              <span className="ico"><Icon name="mail" size={22} /></span>
              <span><span className="val">{EMAIL}</span></span>
            </a>
            <div className="info-row reveal d4">
              <span className="ico"><Icon name="pin" size={22} /></span>
              <span><span className="val">{ADDRESS}</span></span>
            </div>
          </div>
        </div>

        <div className="form-card reveal d2">
          {!sent ? (
            <form onSubmit={submit} noValidate>
              <h3>Заявка на проект</h3>
              <p className="sub">Ответим в течение рабочего дня.</p>
              <div className="field">
                <label>Ваше имя</label>
                <input className={errors.name ? "" : ""} value={form.name} onChange={set("name")} placeholder="Как к вам обращаться" />
                <div className="msg">{errors.name}</div>
              </div>
              <div className="form-row">
                <div className={"field" + (errors.phone ? " err" : "")}>
                  <label>Телефон</label>
                  <input value={form.phone} onChange={set("phone")} placeholder="+7 (___) ___-__-__" />
                  <div className="msg">{errors.phone}</div>
                </div>
                <div className={"field" + (errors.email ? " err" : "")}>
                  <label>E-mail</label>
                  <input value={form.email} onChange={set("email")} placeholder="name@company.ru" />
                  <div className="msg">{errors.email}</div>
                </div>
              </div>
              <div className="field">
                <label>Комментарий</label>
                <textarea value={form.message} onChange={set("message")} placeholder="Категория изделия, размеры, сроки…"></textarea>
              </div>
              <div className="form-foot">
                <button type="submit" className="btn">Отправить заявку <span className="arr"><Icon name="arrow" size={17} /></span></button>
                <span className="form-note">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</span>
              </div>
            </form>
          ) : (
            <div className="form-success">
              <div className="check"><Icon name="check" size={30} /></div>
              <h3>Заявка отправлена</h3>
              <p>Спасибо, {form.name || "коллега"}! Менеджер ВМ-Торг свяжется с вами в ближайшее время.</p>
              <div style={{ marginTop: 24 }}>
                <button className="btn ghost" onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", message: "" }); }}>Отправить ещё одну</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <a className="brand" onClick={() => scrollTo("top")}>
              <span className="brand-mark">ВМ</span>
              <span><span className="brand-name">ВМ-Торг</span><span className="brand-sub">мебель на заказ</span></span>
            </a>
            <p className="footer-about">Эксклюзивный представитель белорусского производителя премиальной мебели ручной работы в России.</p>
          </div>
          <div className="footer-col">
            <h4>Коллекция</h4>
            {CATEGORIES.map((c) => <a key={c.id} onClick={() => scrollTo("collection")}>{c.title}</a>)}
          </div>
          <div className="footer-col">
            <h4>Контакты</h4>
            <a href={"tel:" + PHONE_HREF}>{PHONE}</a>
            <a href={"mailto:" + EMAIL}>{EMAIL}</a>
            <p>{ADDRESS}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 ООО «ВМ-Торг». Все права защищены.</span>
          <span>Производство — Республика Беларусь · Поставки по РФ</span>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
function Lightbox({ index, onClose, onNav }) {
  const open = index !== null;
  const c = open ? CATEGORIES[index] : null;

  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose, onNav]);

  return (
    <div className={"lb-overlay" + (open ? " open" : "")} onClick={onClose}>
      {c && (
        <div className="lb" onClick={(e) => e.stopPropagation()}>
          <button className="lb-close" onClick={onClose} aria-label="Закрыть"><Icon name="close" size={20} /></button>
          <button className="lb-nav prev" onClick={() => onNav(-1)} aria-label="Назад"><Icon name="chevL" size={22} /></button>
          <button className="lb-nav next" onClick={() => onNav(1)} aria-label="Вперёд"><Icon name="chevR" size={22} /></button>
          <div className="lb-img"><img src={c.img} alt={c.title} /></div>
          <div className="lb-body">
            <span className="lb-cat">{c.cat}</span>
            <h3 className="lb-title">{c.title}</h3>
            <p className="lb-desc">{c.desc}</p>
            <div className="lb-specs">
              {c.specs.map(([k, v]) => (
                <div className="row" key={k}><span className="k">{k}</span><span className="v">{v}</span></div>
              ))}
            </div>
            <div className="lb-actions">
              <a className="btn" onClick={() => { onClose(); setTimeout(() => scrollTo("contact"), 240); }}>Запросить цену <span className="arr"><Icon name="arrow" size={17} /></span></a>
              <button className="btn ghost" onClick={onClose}>Закрыть</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   IMAGE POPUP (full-size product image)
   ============================================================ */
function ImagePopup({ index, onClose, onNav }) {
  const open = index !== null;
  const c = open ? CATEGORIES[index] : null;

  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    if (open) document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose, onNav]);

  return (
    <div className={"img-overlay" + (open ? " open" : "")} onClick={onClose}>
      {c && (
        <div className="img-pop" onClick={(e) => e.stopPropagation()}>
          <button className="img-close" onClick={onClose} aria-label="Закрыть"><Icon name="close" size={22} /></button>
          <button className="img-nav prev" onClick={() => onNav(-1)} aria-label="Назад"><Icon name="chevL" size={24} /></button>
          <button className="img-nav next" onClick={() => onNav(1)} aria-label="Вперёд"><Icon name="chevR" size={24} /></button>
          <div className="img-stage"><img src={c.img} alt={c.title} /></div>
          <div className="img-cap"><span className="ttl">{c.title}</span></div>
        </div>
      )}
    </div>
  );
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function MobileMenu({ open, onClose }) {
  const go = (id) => { onClose(); setTimeout(() => scrollTo(id), 220); };
  return (
    <div className={"mobile-menu" + (open ? " open" : "")}>
      {NAV.map(([id, label]) => <a key={id} onClick={() => go(id)}>{label}</a>)}
      <a className="mm-contact" href={"tel:" + PHONE_HREF}>{PHONE}</a>
    </div>
  );
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
}/*EDITMODE-END*/;

// Локальное сохранение выбранных в панели значений (на машине пользователя).
// На «боевой» дефолт для всех посетителей влияет только блок EDITMODE выше —
// кнопка «Подтвердить» копирует его в буфер, чтобы вставить сюда вручную.
const TWEAKS_LS_KEY = "vmtorg_tweaks_v1";
function loadDefaults() {
  try {
    const saved = JSON.parse(localStorage.getItem(TWEAKS_LS_KEY) || "null");
    if (saved && typeof saved === "object") return { ...TWEAK_DEFAULTS, ...saved };
  } catch (e) { /* ignore */ }
  return TWEAK_DEFAULTS;
}

const FONT_MAP = {
  "Cormorant": '"Cormorant Garamond", Georgia, serif',
  "Playfair": '"Playfair Display", Georgia, serif',
  "PT Serif": '"PT Serif", Georgia, serif',
  "EB Garamond": '"EB Garamond", Georgia, serif',
  "Spectral": '"Spectral", Georgia, serif',
};
const PALETTES = [
  ["#5e3c25", "#834e33", "#9c7b58"], // Орех
  ["#3a2820", "#5e3c25", "#8a6a4a"], // Эспрессо
  ["#834e33", "#9a5d3a", "#b08861"], // Коньяк
  ["#43413c", "#6b6961", "#928f85"], // Графит
];

// Цвет шрифта подбирается под выбранный тон дерева
const PALETTE_INK = ["#43291a", "#251913", "#5a3320", "#36332e"];
function inkForPalette(pal) {
  const key = (pal || []).join(",");
  const i = PALETTES.findIndex((p) => p.join(",") === key);
  return PALETTE_INK[i] || PALETTE_INK[0];
}

const HOVER_MAP = {
  "Подъём": "lift",
  "Зум фото": "zoom",
  "Подъём + зум": "both",
  "Мягкая": "soft",
  "Выключено": "off",
};
const ANIM_MAP = {
  "Снизу вверх": "up",
  "Плавное": "fade",
  "Увеличение": "scale",
  "Сбоку": "side",
  "Расфокус": "blur",
  "Выключено": "off",
};

function TweaksUI({ t, setTweak }) {
  const [saved, setSaved] = useState(false);
  const [jsonOut, setJsonOut] = useState("");
  const taRef = useRef(null);

  const confirmDefaults = () => {
    // 1) локальное сохранение (переживает Refresh в этом браузере)
    try { localStorage.setItem(TWEAKS_LS_KEY, JSON.stringify(t)); } catch (e) { /* ignore */ }
    // 2) показать готовый блок для вставки в TWEAK_DEFAULTS и выделить его
    const json = JSON.stringify(t, null, 2);
    setJsonOut(json);
    setTimeout(() => {
      const ta = taRef.current;
      if (ta) { ta.focus(); ta.select(); }
    }, 0);
    setSaved(true);
    setTimeout(() => setSaved(false), 2400);
  };
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Палитра" />
      <TweakColor label="Тон дерева" value={t.palette} options={PALETTES}
        labels={["Орех", "Эспрессо", "Коньяк", "Графит"]}
        onChange={(v) => setTweak("palette", v)} />
      <TweakSection label="Типографика" />
      <TweakSelect label="Шрифт заголовков" value={t.displayFont}
        options={["Cormorant", "Playfair", "PT Serif", "EB Garamond", "Spectral"]}
        onChange={(v) => setTweak("displayFont", v)} />
      <TweakSection label="Hero" />
      <TweakSlider label="Затемнение фото" value={t.heroShade} min={30} max={88} unit="%"
        onChange={(v) => setTweak("heroShade", v)} />
      <TweakSection label="Карточки — наведение" />
      <TweakSlider label="Радиус скругления карточек" value={t.cardRadius} min={0} max={40} unit="px"
        onChange={(v) => setTweak("cardRadius", v)} />
      <TweakSelect label="Анимация при наведении" value={t.hoverAnim}
        options={["Подъём", "Зум фото", "Подъём + зум", "Мягкая", "Выключено"]}
        onChange={(v) => setTweak("hoverAnim", v)} />
      <TweakSlider label="Интенсивность наведения" value={t.hoverIntensity} min={0} max={100} unit="%"
        onChange={(v) => setTweak("hoverIntensity", v)} />
      <TweakSection label="Сохранение" />
      <TweakButton label={saved ? "\u2713 Сохранено" : "Подтвердить как дефолт"}
        onClick={confirmDefaults} />
      {jsonOut ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ fontSize: 10.5, opacity: 0.62, lineHeight: 1.35 }}>
            Выделите и скопируйте (Ctrl/⌘+C), затем вставьте в app.jsx между маркерами EDITMODE.
          </div>
          <textarea ref={taRef} readOnly value={jsonOut}
            onFocus={(e) => e.target.select()}
            spellCheck={false}
            style={{ width: "100%", height: 116, resize: "vertical", boxSizing: "border-box",
              font: "10.5px/1.45 ui-monospace, SFMono-Regular, Menlo, monospace",
              color: "#29261b", background: "rgba(255,255,255,.6)",
              border: ".5px solid rgba(0,0,0,.16)", borderRadius: 8, padding: "7px 8px" }} />
        </div>
      ) : null}
    </TweaksPanel>
  );
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

  const nav = useCallback((dir) => {
    setLb((i) => (i === null ? i : (i + dir + CATEGORIES.length) % CATEGORIES.length));
  }, []);

  const navImg = useCallback((dir) => {
    setImg((i) => (i === null ? i : (i + dir + CATEGORIES.length) % CATEGORIES.length));
  }, []);

  return (
    <React.Fragment>
      <Header onBurger={() => setMenu((m) => !m)} />
      <MobileMenu open={menu} onClose={() => setMenu(false)} />
      <main>
        <Hero />
        <Collection onOpen={setLb} onImage={setImg} />
        <About />
        <Advantages />
        <Production />
        <Contact />
      </main>
      <Footer />
      <Lightbox index={lb} onClose={() => setLb(null)} onNav={nav} />
      <ImagePopup index={img} onClose={() => setImg(null)} onNav={navImg} />
      <TweaksUI t={t} setTweak={setTweak} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
