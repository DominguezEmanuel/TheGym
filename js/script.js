//Función de menú responsive
let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}
function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

//Función del formulario de contacto
const form = document.getElementById("contactoFormulario");
const spinner = document.getElementById("spinner");
const modal = document.getElementById("modal");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Mostrar spinner
  spinner.style.display = "inline-block";

  // Simular envío de datos (2 segundos)
  setTimeout(() => {
    spinner.style.display = "none";
    form.reset();
    modal.style.display = "flex";
  }, 2000);
});

function closeModal() {
  modal.style.display = "none";
}

//Filtrado de categorias en el blog
document.querySelectorAll('input[name="categoria"]').forEach((input) => {
  input.addEventListener("change", () => {
    // Reiniciar todos los artículos
    document.querySelectorAll(".articulo").forEach((articulo) => {
      articulo.style.display = "block";
    });

    // Aplicar el filtro según la categoría seleccionada
    const categoriaSeleccionada = input.id;
    if (categoriaSeleccionada !== "todas") {
      document
        .querySelectorAll(
          `.articulo:not([data-category~="${categoriaSeleccionada}"])`
        )
        .forEach((articulo) => {
          articulo.style.display = "none";
        });
    }
  });
});

/* Filtrado de tags en el blog */
document.querySelectorAll('input[name="tag"]').forEach((input) => {
  input.addEventListener("change", () => {
    // Reiniciar todos los artículos
    document.querySelectorAll(".articulo").forEach((articulo) => {
      articulo.style.display = "block";
    });

    // Aplicar el filtro según el tag seleccionado
    const tagSeleccionado = input.id;
    document
      .querySelectorAll(`.articulo:not([data-tags*="${tagSeleccionado}"])`)
      .forEach((articulo) => {
        articulo.style.display = "none";
      });
  });
});
