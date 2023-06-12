# Documento técnico

## Introducción
Esta aplicación tiene como propósito evaluar mis habilidades en el área del fronten.

Es un gestor de inventario con CRUD.

## Arquitectura, diseño y funcionamiento

**Tecnologíias**
Entre las tecnologíais utiliizadas en esta app están:
**Axios:** para hacer fetching de los datos.
**React-hook-form::** para manejo de formularios.
**React-router:** para las rutas.
**fortawesome:** para los íconos.


**La aplicación cuenta con 6 componentes principales:**

**Presentation:** este nos introduce a las funcionalides de la aplicacioón de forma simple.

**ProductsDetails:** aquí se despliegan todos los productos con la informaón más relevante y con los botones para porder ver más detalles, editar y eliminar.

**NavBar:** en este componente podemos navegar entre las diferentes secciones, además cuenta con el boton de agregar producto (este solo se muestra en la sección products).

**Search:** en este componente se encuentran las funciones que nos permiten filtrar los productos.

**Details:** en la sección details podremos ver información más detallada sobre un solo producto, además podremos proporcionar una cantidad y generar una factura simple.

**CreateForm:** en este componente esta el formulario que nos permitirá crear y editar productos.


**La aplicación cuenta con 3 secciones:**

**-Home**
**-Producs**
**-Details**

**Otras caracteristicas:**

-Se implementó un contexto con el Context API de react para poder guardar un estado semiglobal y así contar con los datos para ediitar un producto.
-Se crearon dos custom hooks, uno para llamar al contexto y otro para obtener los datos de un producto, ya que se hacía mucho uso de la funcion para obtener un producto.
