// Módulo: Loader
const Loader = {
    hide: () => {
      const loader = document.getElementById("loader");
      Object.assign(loader.style, {
        visibility: "hidden",
        opacity: "0"
      });
    },
    init: () => window.addEventListener("load", Loader.hide)
  };
  
  // Módulo: Audio
  const Audio = {
    element: document.getElementById("audio"),
    play: () => {
      Audio.element.volume = 0.3;
      Audio.element.play();
    }
  };
  
  // Módulo: Device
  const Device = {
    isTouch: () => 
      "ontouchstart" in window || 
      navigator.maxTouchPoints > 0 || 
      navigator.msMaxTouchPoints > 0,
    toggleView: (isPc) => {
      const container = document.getElementById("cont_dispositivo");
      container.classList.toggle("style_pc", isPc);
      container.classList.toggle("style_telefono", !isPc);
    }
  };
  
  // Módulo: Custom Cursor
  const CustomCursor = {
    element: document.querySelector(".js-cursor"),
    classes: {
      clicked: "is-clicked",
      hidden: "is-hidden",
      linkHovered: "is-link-hovered",
      customCursor: "has-custom-cursor"
    },
    init: () => {
      if (Device.isTouch()) return;
      
      document.body.classList.add(CustomCursor.classes.customCursor);
      CustomCursor.setupEvents();
    },
    toggleClass: (className, add) => 
      CustomCursor.element.classList[add ? "add" : "remove"](className),
    setupEvents: () => {
      document.addEventListener("mousemove", (e) => {
        CustomCursor.element.style.setProperty("--cursor-x", `${e.clientX}px`);
        CustomCursor.element.style.setProperty("--cursor-y", `${e.clientY}px`);
      });
      
      document.addEventListener("mousedown", () => 
        CustomCursor.toggleClass(CustomCursor.classes.clicked, true));
      document.addEventListener("mouseup", () => 
        CustomCursor.toggleClass(CustomCursor.classes.clicked, false));
      document.addEventListener("mouseenter", () => 
        CustomCursor.toggleClass(CustomCursor.classes.hidden, false));
      document.addEventListener("mouseleave", () => 
        CustomCursor.toggleClass(CustomCursor.classes.hidden, true));
  
      document.querySelectorAll('a, button, .js-link, input[type="button"], input[type="submit"]')
        .forEach(el => {
          el.addEventListener("mouseover", () => 
            CustomCursor.toggleClass(CustomCursor.classes.linkHovered, true));
          el.addEventListener("mouseout", () => 
            CustomCursor.toggleClass(CustomCursor.classes.linkHovered, false));
        });
    }
  };
  
  // Módulo: Home
  const Home = {
    hide: () => {
      const home = document.getElementById("home");
      setTimeout(() => {
      Object.assign(home.style, {
        visibility: "hidden",
        opacity: "0"
      });
      }, 300);
      home.classList.add("ocultar");
      Audio.play();
    }
  };
  
  // Módulo: Sections
  const Sections = {
    elements: {
      proyectos: document.getElementById("pag1"),
      skills: document.getElementById("pag2"),
      responsivo: document.getElementById("pag3"),
      info: document.getElementById("pag4")
    },
    init: () => Sections.elements.proyectos.classList.add("agregar_dis"),
    toggle: (activeSection) => {
      Object.entries(Sections.elements).forEach(([key, section]) => {
        section.classList.toggle("agregar_dis", key === activeSection);
      });
      Audio.play();
    }
  };
  
  // Módulo: Categories
  const Categories = {
    list: ["whatsapp", "correo", "instagram", "cv"],
    init: () => document.getElementById("cont_whatsapp").classList.add("agregar_dis"),
    activate: (activeCategory) => {
      Categories.list.forEach(category => {
        const element = document.getElementById(`cont_${category}`);
        element.classList.toggle("agregar_dis", category === activeCategory);
      });
      Audio.play();
    }
  };
  
  // Módulo: Navigation
  const Navigation = {
    setup: () => {
      document.getElementById("btn_pc").addEventListener("click", () => Device.toggleView(true));
      document.getElementById("btn_movile").addEventListener("click", () => Device.toggleView(false));
    }
  };
  
  // Módulo: Iframe
  const Iframe = {
    element: document.getElementById("iframe-webs"),
    setup: () => {
      document.querySelectorAll('#webs button').forEach(button => {
        button.addEventListener('click', () => {
          Iframe.element.src = button.getAttribute('data-url');
        });
      });
    }
  };
  
  // Inicialización
  const init = () => {
    Loader.init();
    CustomCursor.init();
    Sections.init();
    Categories.init();
    Navigation.setup();
    Iframe.setup();
  };
  
  init();
  
  // Funciones públicas para HTML
  window.btn_view = Home.hide;
  window.btnnav_proyectos = () => Sections.toggle("proyectos");
  window.btnnav_skills = () => Sections.toggle("skills");
  window.btnnav_responsive = () => Sections.toggle("responsivo");
  window.btnnav_info = () => Sections.toggle("info");
  window.btn_whatsapp = () => Categories.activate("whatsapp");
  window.btn_correo = () => Categories.activate("correo");
  window.btn_instagram = () => Categories.activate("instagram");
  window.btn_cv = () => Categories.activate("cv");