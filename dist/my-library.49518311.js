!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var d={id:e,exports:{}};return t[e]=d,a.call(d.exports,d,d.exports),d.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},e.parcelRequired7c6=a),a.register("g4hZ6",(function(e,t){a("9dQxN"),a("8Y0Wb");var i=a("UL92Z"),d=a("2YMwR"),r=a("3WsGO"),n=a("g9qhC"),l=document.getElementById("watched-header-button"),s=document.getElementById("queue-header-button"),c=document.getElementById("watched-header-mobile-button"),o=document.getElementById("queue-header-mobile-button"),u=document.getElementById("no-watched-movies"),y=document.getElementById("no-movies-in-queue");function m(e){e.preventDefault(),"inline-block"===c.style.display?(o.classList.remove("my-library-active"),c.classList.add("my-library-active")):(s.classList.remove("my-library-active"),l.classList.add("my-library-active"));var t=(0,i.getFromLocalStorage)("watchedMovies");t.length<1?(u.classList.remove("hidden"),y.classList.add("hidden"),(0,n.clearMyLibraryGallery)()):(u.classList.add("hidden"),y.classList.add("hidden"),(0,d.fetchMoviesDetails)(t).then((function(e){return(0,r.createMyLibraryGallery)(e)})))}function v(e){e.preventDefault(),window.innerWidth<=425?(c.classList.remove("my-library-active"),o.classList.add("my-library-active")):(l.classList.remove("my-library-active"),s.classList.add("my-library-active"));var t=(0,i.getFromLocalStorage)("queuedMovies");t.length<1?(y.classList.remove("hidden"),u.classList.add("hidden"),(0,n.clearMyLibraryGallery)()):(u.classList.add("hidden"),y.classList.add("hidden"),(0,d.fetchMoviesDetails)(t).then((function(e){return(0,r.createMyLibraryGallery)(e)})))}l&&s&&c&&o&&(l.addEventListener("click",m),c.addEventListener("click",m),s.addEventListener("click",v),o.addEventListener("click",v),l.click())})),a("g4hZ6")}();
//# sourceMappingURL=my-library.49518311.js.map