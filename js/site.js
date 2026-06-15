(function () {
  var navRoot = document.querySelector("[data-site-nav]");
  if (navRoot) {
    var path = window.location.pathname.replace(/\/index\.html$/, "");
    if (path.length > 1 && path.endsWith("/")) {
      path = path.slice(0, -1);
    }
    if (!path) {
      path = "/";
    }

    function isActive(href) {
      if (href === "/") {
        return path === "/";
      }
      return path === href.replace(/\/$/, "") || path.startsWith(href.replace(/\/$/, "") + "/");
    }

    var links = [
      { href: "/", label: "Home" },
      { href: "/system2/", label: "System2" },
      { href: "/overlays/", label: "Overlays" },
      { href: "/philosophy/", label: "Philosophy" },
    ];

    var ul = document.createElement("ul");
    links.forEach(function (item) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.label;
      if (isActive(item.href)) {
        a.setAttribute("aria-current", "page");
      }
      li.appendChild(a);
      ul.appendChild(li);
    });

    var githubLi = document.createElement("li");
    var github = document.createElement("a");
    github.href = "https://github.com/DeliberateCode";
    github.target = "_blank";
    github.rel = "noopener noreferrer";
    github.className = "external";
    github.textContent = "GitHub";
    githubLi.appendChild(github);
    ul.appendChild(githubLi);

    var ctaLi = document.createElement("li");
    var cta = document.createElement("a");
    cta.href = "/system2/#install";
    cta.className = "nav-cta";
    cta.textContent = "Get System2";
    ctaLi.appendChild(cta);
    ul.appendChild(ctaLi);

    navRoot.appendChild(ul);
  }

  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = document.getElementById(btn.getAttribute("data-copy"));
      if (!target) return;

      var text = target.textContent.trim();
      navigator.clipboard.writeText(text).then(
        function () {
          var label = btn.textContent;
          btn.textContent = "Copied";
          btn.classList.add("copied");
          window.setTimeout(function () {
            btn.textContent = label;
            btn.classList.remove("copied");
          }, 2000);
        },
        function () {
          btn.textContent = "Select manually";
        }
      );
    });
  });
})();
