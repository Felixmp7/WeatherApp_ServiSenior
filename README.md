Este proyecto fue creado mediante  [Create React App](https://github.com/facebook/create-react-app).

# ServiSenior Weather App
## Felix Pacheco

1. Clonar repo con:

#### `git clone <path del proyecto>`

2. Luego, instalar dependencias con:

#### `yarn install`

o

#### `npm install`

3. Corre el proyecto en modo de desarrollo. <br />
Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en el navegador.


## Información Adicional

1. Desarrollé la Aplicación utilizando React y cómo líbrería para manejar estados globales de la aplicación, utilicé **Redux**.

2. Actualmente me encuentro desarrollando un curso de Redux, a pesar de que ésta aplicación de prueba no lo necesitaba debido a lo sencilla y pequeña, decidí utilizarla para ponerla en práctica, logrando el objetivo deseado de una forma centralizada en cuanto al manejo de datos.

3. Para la implementación de la Gráfica, utilizé los componentes que requerían de: [https://vx-demo.now.sh/](https://vx-demo.now.sh/) <br />
Sin embargo, no conseguí mucha documentación sobre la implementación de sus componentes, salvo un par de ejemplos en donde también considero que la documentación es ambígua. <br /> <br/>
De igual forma, logré implementar los gráficos tanto de la variación de temperatura de los 5 dias que retorna el _API de Weather_ cómo la varición de temperatura diaria en un día seleccionado.

4. Implementé un Responsive básico para desktop, tablets y smartphones.

5. Tuve un inconveniente con el Proveedor de Internet en mi zona, lo cual me afectó fuertemente en cuanto al acceso y a la velocidad de navegación pero sin embargo me sirvió para implementar manejo de errores de respuesta del API mediante **Redux** cuando la conexión es inestable, e incluso implementé un Skeleton para la visualización de los componentes mientras se espera una respuesta retrasada del API.
